import React from 'react';

import Layout from 'components/common/Layout';
import SizeForm from 'components/common/SizeForm/SizeForm';
import Mysize from 'components/mysize/Mysize';

export default function index() {
  return (
    <Layout noMenuBar noFooter>
      <Mysize></Mysize>
    </Layout>
  );
}
