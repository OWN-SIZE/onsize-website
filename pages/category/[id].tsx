import CategoryDetailLanding from '@/components/category/detail/CategoryDetailLanding';
import Layout from 'components/common/Layout';

function Detail({ id }: any) {
  const categoryId = id as string;
  return (
    <Layout noMenuBar>
      <CategoryDetailLanding categoryId={categoryId} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { id } }: any) {
  return {
    props: {
      id,
    },
  };
}

export default Detail;
