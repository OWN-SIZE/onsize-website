import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

import Layout from 'components/common/Layout';
import Progress from 'components/register/Progress';

function Register() {
  return (
    <Layout noHeader noMenuBar>
      <Styled.Root>
        <Styled.GreetingConatiner>
          <h1>Log In</h1>
          <h2>
            기존에 구매한 옷 중 가장 잘 맞는 제품의 사이즈를 찾아 입력해주세요.
            <br />
            입력하신 사이즈 기준으로 가장 유사한 사이즈의 제품을 추천해드려요.
          </h2>
        </Styled.GreetingConatiner>
        <Progress />
      </Styled.Root>
    </Layout>
  );
}
export default Register;

const Styled = {
  Root: styled.section`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
  `,
  GreetingConatiner: styled.article`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 61.2rem;
    height: 100%;
    background-color: #1e2025;
    > h1 {
      color: ${theme.colors.yellow};
      ${theme.fonts.title1}
    }
    > h2 {
      color: ${theme.colors.gray000};
      ${theme.fonts.body4};
    }
  `,
};
