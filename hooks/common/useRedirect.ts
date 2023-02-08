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
    if (isRegister === true) {
      router.asPath === '/login' || router.asPath === '/register'
        ? router.push('/home').then(() => setIsLoading(false))
        : router.push(router.asPath).then(() => setIsLoading(false));
      if (router.asPath === '/category') {
        router.push('/category').then(() => setIsLoading(false));
      }
    } else if (!userId) {
      router.push('/login').then(() => setIsLoading(false));
    } else if (userId && isRegister === null) {
      router.push('/register').then(() => setIsLoading(false));
    }
  };

  useEffect(() => {
    console.log(userId);
    if (userId === -99) {
      router.push('/login').then(() => setIsLoading(false));
    } else {
      userId && onRedirect();
    }
  }, [userId, isRegister]);

  return { isLoading };
}

export default useRedirect;
