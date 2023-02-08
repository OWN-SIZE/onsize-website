import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function useRedirect() {
  const [userId, setUserId] = useState();
  const [isRegister, setIsRegister] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    setUserId(JSON.parse(localStorage.getItem('userId') ?? '-99'));
    setIsRegister(JSON.parse(localStorage.getItem('isRegister') ?? 'null'));
  }, []);

  const onRedirect = () => {
    if (isRegister) {
      router.asPath === '/login' || router.asPath === '/register'
        ? router.push('/home').then(() => setIsLoading(false))
        : router.push(router.asPath).then(() => setIsLoading(false));
    } else if (!userId) {
      router.push('/login').then(() => setIsLoading(false));
    } else if (userId && !isRegister) {
      router.push('/register').then(() => setIsLoading(false));
    }
  };

  useEffect(() => {
    if (userId === -99) {
      router.push('/login').then(() => setIsLoading(false));
    } else {
      onRedirect();
    }
  }, [userId, isRegister]);

  return { isLoading };
}

export default useRedirect;
