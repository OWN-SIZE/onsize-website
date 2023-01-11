import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleLoginImg } from 'assets/img';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import theme from 'styles/theme';

import { useAuth } from '@/hooks/business/user';
import Layout from 'components/common/Layout';

function Login() {
  const { authLogin } = useAuth();
  const router = useRouter();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { data } = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      });

      authLogin(data, () => router.push('/register'));
    },
  });

  return (
    <Layout noHeader noMenuBar noFooter>
      <Styled.Root>
        <Styled.GreetingImg />
        <Styled.LoginButton onClick={() => login()}>
          <Image src={GoogleLoginImg} alt="구글로그인 버튼 이미지" />
        </Styled.LoginButton>
        <Styled.Message>
          로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며,
          <br />
          서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.
        </Styled.Message>
      </Styled.Root>
    </Layout>
  );
}

export default Login;

const Styled = {
  Root: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  `,
  GreetingImg: styled.img`
    width: 70rem;
    height: 50rem;
    background-color: #d9d9d9;
    border-radius: 1.5rem;
  `,
  LoginButton: styled.button`
    width: 69.2rem;
    height: 7.2rem;
    margin-top: 8rem;
    border: 0;
    background: transparent;
    cursor: pointer;
  `,
  Message: styled.h1`
    margin-top: 6.2rem;
    text-align: center;
    color: ${theme.colors.gray300};
    ${theme.fonts.caption1};
  `,
};
