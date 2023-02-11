import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { isRegisterState, userIdState } from 'states/user';

function useRedirect() {
  const userId = useRecoilValue(userIdState);
  const isRegister = useRecoilValue(isRegisterState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (isRegister) {
      router.asPath === '/login' || router.asPath === '/register'
        ? router.replace('/home').then(() => setIsLoading(false))
        : console.log('stay');
    } else if (!userId) {
      router.replace('/login').then(() => setIsLoading(false));
    } else if (userId && isRegister === 'null') {
      router.replace('/register').then(() => setIsLoading(false));
    }
  }, [userId, isRegister]);

  return { isLoading };
}

export default useRedirect;
