import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { categoryIdState, categoryNameState } from 'states/categoryDetail';

import CategoryDetailLanding from '@/components/category/detail/CategoryDetailLanding';
import Layout from 'components/common/Layout';

function Detail() {
  const {
    query: { id, name },
  } = useRouter();

  const setCategoryId = useSetRecoilState(categoryIdState);
  const setCategoryName = useSetRecoilState(categoryNameState);

  setCategoryId(id as string);
  setCategoryName(name as string);

  return (
    <Layout noMenuBar>
      <CategoryDetailLanding />
    </Layout>
  );
}

export default Detail;
