import React from 'react';
import { BottomImg, TopBottomImg, TopImg } from 'assets/img';
import Image from 'next/image';
import { OptionType } from 'pages/register';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';

import NextButton from './NextButton';

interface ButtonProps {
  selectedOption?: OptionType;
  setSelectedOption: (prev: OptionType) => void;
  isNextActive: boolean;
  setIsNextActive: (prev: boolean) => void;
  onClickNext: () => void;
}

// 타입 오류 방지를 위해 추가하였으나 이미지 오류 발생
interface iOptionImgMapper {
  '상/하의': string;
  상의: string;
  하의: string;
}

const optionImgMapper = {
  '상/하의': TopBottomImg,
  상의: TopImg,
  하의: BottomImg,
};

export default function SizeOption(props: ButtonProps) {
  const { selectedOption, setSelectedOption, isNextActive, setIsNextActive, onClickNext } = props;
  const optionList: OptionType[] = ['상/하의', '상의', '하의'];

  const onClickOption = (option: OptionType) => {
    setSelectedOption(option);
    setIsNextActive(true);
  };

  return (
    <Styled.Root>
      <h1>어떤 의류의 사이즈를 추천받고 싶으신가요?</h1>
      <Styled.SizeOptionButtons>
        {optionList.map((option, index) => (
          <Styled.SizeOptionButton
            onClick={() => onClickOption(option)}
            isSelected={selectedOption === option}
            type="button"
            key={index}
          >
            <Image
              src={option === '상/하의' ? TopBottomImg : option === '상의' ? TopImg : BottomImg}
              alt={`${option} 이미지`}
              placeholder="blur"
            />
            <p>{option}</p>
          </Styled.SizeOptionButton>
        ))}
      </Styled.SizeOptionButtons>
      <NextButton isActive={isNextActive} onClick={onClickNext} />
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
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
            border: 0.2rem solid #fbf26c;
            box-shadow: 0rem 0rem 1rem rgba(251, 242, 108, 0.5);
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
};
