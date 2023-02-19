import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { isRegisterState, userIdState } from 'states/user';

import { useFetchUserInformation } from '../queries/mypageHistory';

function useRedirect() {
  const userId = useRecoilValue(userIdState);
  const isRegister = useRecoilValue(isRegisterState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { userInformation } = useFetchUserInformation();
  const userState = userInformation?.isAlreadyUser;

  const onRedirect = () => {
    if (userState === 'pending') {
      router.replace('/login');
    } else if (userState === 'done') {
      router.replace('/home');
    } else {
      router.replace('/register');
    }
  };

  useEffect(() => {
    // if (userId && isRegister) {
    //   router.asPath === '/login' || router.asPath === '/register'
    //     ? router.replace('/home').then(() => setIsLoading(false))
    //     : console.log('stay');
    // } else if (!userId) {
    //   router.replace('/login').then(() => setIsLoading(false));
    // } else if (userId && isRegister === 'null') {
    //   router.replace('/register').then(() => setIsLoading(false));
    // }
    userState && onRedirect;
  }, []);

  return { isLoading };
}

export default useRedirect;
