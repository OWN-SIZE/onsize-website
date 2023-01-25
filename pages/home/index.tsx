import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from 'components/common/Layout';
import HomeLanding from 'components/home/HomeLanding';

function Home() {
  const router = useRouter();
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const isRegister = localStorage.getItem('isRegister');
    if (!userId || !token) {
      router.push('/login');
    } else if (!isRegister) {
      router.push('/register');
    }
  }, []);

  return (
    <Layout>
      <HomeLanding />
    </Layout>
  );
}

export default Home;
