import React from 'react';

import Layout from '@/components/common/Layout';
import RegisterLanding from 'components/register/Register';

function Register() {
  return (
    <Layout noHeader noMenuBar noFooter>
      <RegisterLanding />
    </Layout>
  );
}

export default Register;
