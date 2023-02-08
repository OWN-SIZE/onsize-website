import React from 'react';

import useRedirect from '@/hooks/common/useRedirect';
import Layout from 'components/common/Layout';
import SizeForm from 'components/common/SizeForm/SizeForm';
import Mysize from 'components/mysize/Mysize';

export default function MySize() {
  return (
    <Layout noMenuBar noFooter>
      <Mysize></Mysize>
    </Layout>
  );
}
