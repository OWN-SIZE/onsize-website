import React from 'react';
import { BigLogoImg, ChromeWebstoreImg } from 'assets/img';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import Layout from 'components/common/Layout';

function Lading() {
  return (
    <Layout noHeader noMenuBar noFooter>
      <Styled.Root>
        <Image src={BigLogoImg} width={300} height={300} placeholder="blur" alt="로고 이미지" />
        <Styled.Title>쉽고 똑똑한 나만의 쇼핑 도우미, 온사이즈</Styled.Title>
        <Styled.Subtitle>
          단 한번의 사이즈 입력으로
          <br />
          궁금한 옷의 사이즈를 알려드려요!
        </Styled.Subtitle>
        <Styled.LinkButton href="https://chrome.google.com/webstore/category/extensions?hl=ko">
          <Image src={ChromeWebstoreImg} alt="크롬웹스토어 이동버튼 이미지" />
        </Styled.LinkButton>
      </Styled.Root>
    </Layout>
  );
}

export default Lading;

const Styled = {
  Root: styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    padding-top: 28.9rem;
    background: ${theme.colors.black};
  `,
  Title: styled.h1`
    margin-top: 2rem;
    text-align: center;
    color: ${theme.colors.gray000};
    ${theme.fonts.title1}
  `,
  Subtitle: styled.h2`
    margin-top: 3.2rem;
    text-align: center;
    color: ${theme.colors.gray000};
    ${theme.fonts.subtitle1}
  `,
  LinkButton: styled.a`
    width: 69.2rem;
    height: 7.2rem;
    margin-top: 5.2rem;
    cursor: pointer;
  `,
};
