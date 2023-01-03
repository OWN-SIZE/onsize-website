import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';

import Layout from 'components/common/Layout';
import SizeForm from 'components/common/SizeForm';
import Progress from 'components/register/Progress';
import SizeOption from 'components/register/SizeOption';

// 버튼 컴포넌트 전달을 위한 타입
export type OptionType = '상/하의' | '상의' | '하의';
export type ProgressType = 1 | 2 | 3;

function Register() {
  const router = useRouter();
  const [param, setParam] = useState(1);
  const [selectedOption, setSelectedOption] = useState<OptionType>();

  useEffect(() => {
    router.query.params && setParam(parseInt(router.query.params[0]));
  }, [router]);

  const onClickSize = () => {
    if (selectedOption && param !== 3) {
      router.push(
        {
          pathname: `/register/${param + 1}`,
          query: {
            selectedOption,
          },
        },
        `/register/${param + 1}`
      );
    }
  };

  return (
    <Layout noHeader noMenuBar>
      <Styled.Root>
        <Styled.LeftConatiner>
          <h1>Log In</h1>
          <h2>
            기존에 구매한 옷 중 가장 잘 맞는 제품의 사이즈를 찾아 입력해주세요.
            <br />
            입력하신 사이즈 기준으로 가장 유사한 사이즈의 제품을 추천해드려요.
          </h2>
        </Styled.LeftConatiner>
        <Styled.RightContainer>
          <Progress />
          {param === 1 && <SizeOption selectedOption={selectedOption} setSelectedOption={setSelectedOption} />}
          {param === 2 && <SizeForm isHeader formType="상의" />}
          {param === 3 && <SizeForm isHeader formType="하의" />}
          <Styled.NextButton isActive={selectedOption && true} onClick={onClickSize}>
            다음
          </Styled.NextButton>
        </Styled.RightContainer>
      </Styled.Root>
    </Layout>
  );
}

export default Register;

const Styled = {
  Root: styled.section`
    margin: 0 auto;
    display: flex;
    width: 100vw;
    height: 100vh;
  `,
  LeftConatiner: styled.article`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 61.2rem;
    height: 100%;
    background-color: #1e2025;
    > h1 {
      margin-top: 16.2rem;
      color: ${theme.colors.yellow};
      ${theme.fonts.title1}
    }
    > h2 {
      margin-top: 4.2rem;
      color: ${theme.colors.gray000};
      ${theme.fonts.body4};
    }
  `,
  RightContainer: styled.article`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 8.6rem;
    width: 100%;
    background-color: #f5f5f5;
  `,
  NextButton: styled.button<{ isActive?: boolean }>`
    position: fixed;
    width: 46.2rem;
    height: 6.3rem;
    bottom: 9.8rem;
    background: transparent;
    ${({ isActive }) =>
      isActive
        ? css`
            color: ${theme.colors.gray000};
            background: ${theme.colors.black};
          `
        : css`
            border: 0.2rem solid ${theme.colors.black};
            color: ${theme.colors.gray550};
          `}
    border-radius: 3rem;
    ${theme.fonts.title3};
  `,
};
