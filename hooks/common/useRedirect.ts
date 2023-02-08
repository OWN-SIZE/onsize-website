import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type LocalStorageType = string | null;

function useRedirect() {
  const [userId, setUserId] = useState<LocalStorageType>();
  const [isRegister, setIsRegister] = useState<LocalStorageType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    setUserId(JSON.parse(localStorage.getItem('userId') ?? '-99'));
    setIsRegister(JSON.parse(localStorage.getItem('isRegister') ?? 'false'));
  }, []);

  const onRedirect = () => {
    if (isRegister) {
      router.asPath === '/login' || router.asPath === '/register' ? router.push('/home') : router.push(router.asPath);
    } else if (!userId) {
      router.push('/login');
    } else {
      router.push('/register');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    isRegister && userId && onRedirect();
  }, [userId, isRegister]);

  return { isLoading };
}

export default useRedirect;
