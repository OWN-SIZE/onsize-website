import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type LocalStorageType = string | null;

function useRedirect() {
  const [userId, setUserId] = useState<LocalStorageType>();
  const [isRegister, setIsRegister] = useState<LocalStorageType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    setUserId(localStorage.getItem('userId'));
    setIsRegister(localStorage.getItem('isRegister'));
  }, [router]);

  useEffect(() => {
    if (isRegister === 'true') {
      router.push('/home');
    } else if (!userId) {
      router.push('/login');
    } else {
      router.push('/register');
    }
    setIsLoading(false);
  }, [userId, isRegister]);

  return { isLoading };
}

export default useRedirect;
