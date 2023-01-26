import React, { useEffect, useState } from 'react';

type LocalStorageType = string | null;

interface RedirectProps {
  onRedirect: () => void;
}

function useRedirect(props: RedirectProps) {
  const { onRedirect } = props;
  const [userId, setUserId] = useState<LocalStorageType>();
  const [token, setToken] = useState<LocalStorageType>();
  const [isRegister, setIsRegister] = useState<LocalStorageType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getLocalStorage = () => {
    setIsLoading(true);
    setUserId(localStorage.getItem('userId'));
    setToken(localStorage.getItem('token'));
    setIsRegister(localStorage.getItem('isRegister'));
  };

  useEffect(() => {
    onRedirect();
  }, [userId, token, isRegister]);

  return { userId, token, isRegister, isLoading, setIsLoading, getLocalStorage };
}

export default useRedirect;
