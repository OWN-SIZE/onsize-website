import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useRedirect from '@/hooks/common/useRedirect';
import Layout from 'components/common/Layout';
import HomeLanding from 'components/home/HomeLanding';

function Home() {
  const router = useRouter();
  const { userId, token, isRegister, isLoading, setIsLoading, getLocalStorage } = useRedirect({
    onRedirect: () => {
      if (isRegister === 'true') {
        // home
        router.push('/home');
        setIsLoading(false);
      } else if (!isRegister && userId && token) {
        router.push('/register');
      } else {
        router.push('/login');
      }
    },
  });

  useEffect(() => {
    getLocalStorage();
  }, []);

  return isLoading ? (
    <></>
  ) : (
    <Layout>
      <HomeLanding />
    </Layout>
  );
}

export default Home;
