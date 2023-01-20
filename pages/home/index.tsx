import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from 'components/common/Layout';
import HomeLanding from 'components/home/HomeLanding';

function Home() {
  const router = useRouter();
  useEffect(() => {
    const isRegister = localStorage.getItem('isRegister');
    if (isRegister !== 'true') {
      router.push('/login');
    }
  }, []);

  return (
    <Layout>
      <HomeLanding />
    </Layout>
  );
}

export default Home;
