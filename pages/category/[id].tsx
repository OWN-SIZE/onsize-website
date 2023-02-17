import CategoryDetailLanding from '@/components/category/detail/CategoryDetailLanding';
import Layout from 'components/common/Layout';

function Detail() {
  return (
    <Layout noMenuBar>
      <CategoryDetailLanding />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}

export default Detail;
