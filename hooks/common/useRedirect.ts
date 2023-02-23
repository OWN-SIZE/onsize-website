import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useFetchUserInformation } from '../queries/mypageHistory';

function useRedirect() {
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
    userState && onRedirect;
  }, []);

  return { isLoading };
}

export default useRedirect;
