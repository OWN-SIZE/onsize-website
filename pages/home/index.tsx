import useRedirect from '@/hooks/business/useRedirect';
import Layout from 'components/common/Layout';
import HomeLanding from 'components/home/HomeLanding';

function Home() {
  const { isLoading } = useRedirect();
  return (
    <Layout>
      <HomeLanding />
    </Layout>
  );
}

export default Home;
