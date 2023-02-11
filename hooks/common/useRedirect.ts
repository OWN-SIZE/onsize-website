import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { isRegisterState, userIdState } from 'states/user';

function useRedirect() {
  //const [userId, setUserId] = useState<string>();
  //const [isRegister, setIsRegister] = useState<string>();
  const [userId, setUserId] = useRecoilState(userIdState);
  const [isRegister, setIsRegister] = useRecoilState(isRegisterState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // setIsLoading(true);
    // setUserId(JSON.parse(localStorage.getItem('userId') ?? '-99'));
    // setIsRegister(JSON.parse(localStorage.getItem('isRegister') ?? 'null'));
    // setUserId(localStorage.getItem('userId') ?? '-99');
    // setIsRegister(localStorage.getItem('isRegister') ?? 'null');
  }, []);

  const onRedirect = () => {
    if (isRegister === true) {
      router.asPath === '/login' || router.asPath === '/register'
        ? router.replace('/home').then(() => setIsLoading(false))
        : router.replace(router.asPath).then(() => setIsLoading(false));
    } else if (!userId) {
      router.replace('/login').then(() => setIsLoading(false));
    } else if (userId && isRegister === 'null') {
      router.replace('/register').then(() => setIsLoading(false));
    }
  };

  useEffect(() => {
    console.log(userId, isRegister);
    if (userId === ' -99') {
      router.replace('/login').then(() => setIsLoading(false));
    } else {
      userId && onRedirect();
    }
  }, [userId, isRegister]);

  return { isLoading };
}

export default useRedirect;
