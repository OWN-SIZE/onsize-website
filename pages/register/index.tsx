import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';

import Layout from 'components/common/Layout';
import Progress from 'components/register/Progress';

type OptionType = '상/하의' | '상의' | '하의';

function Register() {
  const optionList: OptionType[] = ['상/하의', '상의', '하의'];
  const [selectedOption, setSelectedOption] = useState<OptionType>();

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
          <Styled.FormContainer>
            <h1>어떤 의류의 사이즈를 추천받고 싶으신가요?</h1>
            <Styled.SizeOptionButtons>
              {optionList.map((option, index) => (
                <Styled.SizeOptionButton
                  onClick={() => setSelectedOption(option)}
                  isSelected={selectedOption === option ? true : false}
                  type="button"
                  key={index}
                >
                  <Styled.ButtonIcon />
                  <p>{option}</p>
                </Styled.SizeOptionButton>
              ))}
            </Styled.SizeOptionButtons>
          </Styled.FormContainer>
          <Styled.NextButton isActive={selectedOption && true}>다음</Styled.NextButton>
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
  FormContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5.3rem;
    margin-bottom: 20.3rem;
    > h1 {
      color: ${theme.colors.gray550};
      ${theme.fonts.title4};
    }
  `,
  SizeOptionButtons: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 3.2rem;
    margin-top: 16.4rem;
  `,
  SizeOptionButton: styled.button<{ isSelected?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 23.2rem;
    height: 23.2rem;
    ${({ isSelected }) =>
      isSelected
        ? css`
            border: 2px solid #fbf26c;
            box-shadow: 0px 0px 10px rgba(251, 242, 108, 0.5);
          `
        : css`
            border: 0.1rem solid #f6f6f6;
            box-shadow: 0 0 1rem 0.8rem rgba(0, 0, 0, 0.05);
          `};

    border-radius: 1rem;
    background-color: ${theme.colors.gray100};
    cursor: pointer;
    > p {
      margin-top: 2.4rem;
      color: ${theme.colors.gray550};
      ${theme.fonts.title4Semibold}
    }
  `,
  ButtonIcon: styled.img`
    width: 11.2rem;
    height: 11.2rem;
    background-color: #d9d9d9;
  `,
  NextButton: styled.button<{ isActive?: boolean }>`
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
