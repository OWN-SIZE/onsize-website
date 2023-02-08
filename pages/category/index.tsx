import React from 'react';

import useRedirect from '@/hooks/common/useRedirect';
import CategoryMain from 'components/category/CategoryMain';
import Layout from 'components/common/Layout';

export default function Category() {
  const { isLoading } = useRedirect();
  return (
    <Layout>
      <CategoryMain></CategoryMain>
    </Layout>
  );
}
