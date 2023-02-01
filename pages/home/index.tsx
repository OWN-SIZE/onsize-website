import { useEffect } from 'react';

import useRedirect from '@/hooks/common/useRedirect';
import Layout from 'components/common/Layout';
import HomeLanding from 'components/home/HomeLanding';

function Home() {
  const { isLoading, getLocalStorage } = useRedirect();

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
