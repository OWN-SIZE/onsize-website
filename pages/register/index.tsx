import React from 'react';

import Layout from '@/components/common/Layout';
import useRedirect from '@/hooks/business/useRedirect';
import RegisterLanding from 'components/register/Register';

function Register() {
  const { isLoading } = useRedirect();
  return (
    <Layout noHeader noMenuBar noFooter>
      <RegisterLanding />
    </Layout>
  );
}

export default Register;
