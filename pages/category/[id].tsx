import CategoryDetailLanding from '@/components/category/detail/CategoryDetailLanding';
import Layout from 'components/common/Layout';

function Detail() {
  return <Layout noMenuBar>{<CategoryDetailLanding /> ? <CategoryDetailLanding /> : null}</Layout>;
}

export default Detail;
