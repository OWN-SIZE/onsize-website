import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { isAlreadyUserState } from 'states/user';

function useRedirect() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const userState = useRecoilValue(isAlreadyUserState);

  const onRedirect = () => {
    const token = localStorage.getItem('token');

    if (userState === 'pending' && token) {
      router.replace('/register');
    } else if (userState === 'done' && token) {
      router.replace('/home');
    } else {
      router.replace('/login');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    userState && onRedirect();
  }, []);

  return { isLoading };
}

export default useRedirect;
