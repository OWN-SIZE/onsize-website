import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type LocalStorageType = string | null;

function useRedirect() {
  const [userId, setUserId] = useState<LocalStorageType>(null);
  const [token, setToken] = useState<LocalStorageType>(null);
  const [isRegister, setIsRegister] = useState<LocalStorageType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  const getLocalStorage = () => {
    setIsLoading(true);
    setUserId(localStorage.getItem('userId'));
    setToken(localStorage.getItem('token'));
    setIsRegister(localStorage.getItem('isRegister'));
  };

  useEffect(() => {
    const handleStart = (url: string) => url !== router.asPath && setIsLoading(true);
    const handleComplete = (url: string) => url === router.asPath && setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    if (isRegister === 'true') {
      router.push('/home');
    } else if (!userId && !token) {
      router.push('/login');
    } else {
      router.push('/register');
    }
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return { userId, token, isRegister, isLoading, setIsLoading, getLocalStorage };
}

export default useRedirect;