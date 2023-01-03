import React from 'react';
import { OptionType } from 'pages/register';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';

interface OptionProps {
  selectedOption: OptionType;
  setSelectedOption: (prevState: OptionType) => void;
}

export default function SizeOption({ selectedOption, setSelectedOption }: OptionProps) {
  const optionList: OptionType[] = ['상/하의', '상의', '하의'];
  return (
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
  );
}

const Styled = {
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
};
