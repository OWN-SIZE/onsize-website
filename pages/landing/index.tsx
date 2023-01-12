import React from 'react';
import { chromeWebstoreImg } from 'assets/img';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import Layout from 'components/common/Layout';

function Lading() {
  return (
    <Layout noHeader noMenuBar noFooter>
      <Styled.Root>
        <Styled.GreetingImg />
        <Styled.Title>사이즈 고민 및 환불은 이제 그만!</Styled.Title>
        <Styled.Subtitle>
          온사이즈에서 잘맞는 옷 사이즈를 입력하면
          <br />
          가장 최적의 사이즈를 추천해 드려요
        </Styled.Subtitle>
        <Styled.LinkButton href="https://chrome.google.com/webstore/category/extensions?hl=ko">
          <Image src={chromeWebstoreImg} alt="크롬웹스토어 이동버튼 이미지" />
        </Styled.LinkButton>
      </Styled.Root>
    </Layout>
  );
}

export default Lading;

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
    width: 30rem;
    height: 30rem;
    background-color: #d9d9d9;
  `,
  Title: styled.h1`
    margin-top: 6rem;
    text-align: center;
    color: ${theme.colors.gray550};
    ${theme.fonts.title1}
  `,
  Subtitle: styled.h2`
    margin-top: 3.2rem;
    text-align: center;
    color: ${theme.colors.gray350};
    ${theme.fonts.subtitle1}
  `,
  LinkButton: styled.a`
    width: 69.2rem;
    height: 7.2rem;
    margin-top: 6rem;
    cursor: pointer;
  `,
};
