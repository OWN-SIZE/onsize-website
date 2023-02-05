import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { categoryIdState, categoryNameState } from 'states/categoryDetail';

import CategoryDetailLanding from '@/components/category/detail/CategoryDetailLanding';
import { useFetchAllCategory } from '@/hooks/queries/category';
import Layout from 'components/common/Layout';

function Detail() {
  const setCategoryId = useSetRecoilState(categoryIdState);
  const setCategoryName = useSetRecoilState(categoryNameState);

  const {
    query: { id },
  } = useRouter();

  setCategoryId(id as string);

  const { category } = useFetchAllCategory();
  if (category) {
    category.map((item) => {
      if (String(item.id) === id) setCategoryName(item.categoryName);
    });
  }

  return (
    <Layout noMenuBar>
      <CategoryDetailLanding />
    </Layout>
  );
}

export default Detail;
