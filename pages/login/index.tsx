import React, { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleLoginImg, OwnSizeLogoImg } from 'assets/img';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import theme from 'styles/theme';

import { lottieMapper } from '@/components/common/modal/LottieModal';
import LottiePlayer from '@/components/common/modal/LottiePlayer';
import { useAuth } from '@/hooks/business/user';
import useRedirect from '@/hooks/common/useRedirect';
import Layout from 'components/common/Layout';

function Login() {
  const { authLogin } = useAuth();
  const router = useRouter();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { data } = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      });

      authLogin(data, (isAlreadyUser: 'pending' | 'done') => {
        if (isAlreadyUser === 'done') {
          router.push('/home');
        } else {
          router.push('/register');
        }
      });
    },
  });
  const [page, setPage] = useState(0);
  const onClickArrow = (arrowType: 'left' | 'right') => {
    if (arrowType === 'left') {
      setPage((prev) => (prev === 0 ? lottieMapper.length - 1 : prev - 1));
    } else {
      setPage((prev) => (prev === lottieMapper.length - 1 ? 0 : prev + 1));
    }
  };
  const { isLoading } = useRedirect();

  return (
    <Layout noHeader noMenuBar noFooter>
      {isLoading ? (
        <></>
      ) : (
        <Styled.Root>
          <Styled.Header>
            <Image src={OwnSizeLogoImg} alt="로고 이미지" />
          </Styled.Header>
          <LottiePlayer page={page} onClickArrow={onClickArrow} lottie={lottieMapper[page].lottie} isDarkMode isTop />
          <Styled.LoginButton onClick={() => login()}>
            <Image src={GoogleLoginImg} alt="구글로그인 버튼 이미지" />
          </Styled.LoginButton>
          <Styled.Message>
            로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며,
            <br />
            서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.
          </Styled.Message>
        </Styled.Root>
      )}
    </Layout>
  );
}

export default Login;

const Styled = {
  Root: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: ${theme.colors.black};
  `,
  Header: styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding-top: 2.3rem;
    padding-left: 16rem;
    margin-bottom: 10.4rem;
  `,
  LoginButton: styled.button`
    width: 69.2rem;
    height: 7.2rem;
    margin-top: 3.8rem;
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
