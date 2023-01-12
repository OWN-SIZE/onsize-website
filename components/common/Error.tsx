import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import { Hanger } from '@/assets/img/index';

function Error() {
  return (
    <Styled.Root>
      <Styled.ImageWrapper>
        <Image src={Hanger} alt="옷걸이" />
      </Styled.ImageWrapper>

      <Styled.Wrapper>
        <h1>이런,</h1>
        <p>페이지를 불러올 수 없어요</p>
      </Styled.Wrapper>
    </Styled.Root>
  );
}

export default Error;

const Styled = {
  Root: styled.div`
    font-family: 'Noto Sans';
    padding: 0 16rem;
    background-color: ${theme.colors.black};
  `,
  ImageWrapper: styled.div`
    position: fixed;
    top: 0;
    right: 17rem;
  `,
  Wrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 16.844rem;
    border-top: 5px solid ${theme.colors.gray000};
    & > h1 {
      margin-top: 7.4rem;
      font-weight: 600;
      font-size: 5rem;
      line-height: 6.8rem;
      color: ${theme.colors.gray000};
    }
    & > p {
      font-weight: 500;
      font-size: 3.8rem;
      line-height: 5.2rem;
      color: ${theme.colors.gray000};
    }
  `,
};
