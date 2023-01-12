import React from 'react';
import { LeftArrowIcon, RightArrowIcon, WhiteLeftArrowIcon, WhiteRightArrowIcon } from 'assets/icon';
import Lottie from 'lottie-react';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

interface LottieProps {
  onClickArrow: (direction: 'left' | 'right') => void;
  lottie: object;
  page: number;
  isDarkMode?: boolean;
}

function LottiePlayer(props: LottieProps) {
  const { onClickArrow, lottie, page, isDarkMode } = props;
  return (
    <Styled.Root>
      <Styled.ArrowButton onClick={() => onClickArrow('left')}>
        <Image src={isDarkMode ? WhiteLeftArrowIcon : LeftArrowIcon} width={60} height={60} alt="왼쪽 화살표 버튼" />
      </Styled.ArrowButton>
      <Styled.LottieContainer>
        <Lottie animationData={lottie} />
        <Styled.PageButtonContainer>
          {[0, 1, 2, 3].map((lottie, index) => (
            <Styled.PageButton key={index} isSelected={page === index} isDarkMode={isDarkMode} />
          ))}
        </Styled.PageButtonContainer>
      </Styled.LottieContainer>
      <Styled.ArrowButton onClick={() => onClickArrow('right')}>
        <Image
          src={isDarkMode ? WhiteRightArrowIcon : RightArrowIcon}
          width={60}
          height={60}
          alt="오른쪽 화살표 버튼"
        />
      </Styled.ArrowButton>
    </Styled.Root>
  );
}

export default LottiePlayer;

const Styled = {
  Root: styled.div`
    display: flex;
    align-items: center;
    width: 82.2rem;
    height: 44rem;
    margin-top: 5rem;
  `,
  ArrowButton: styled.button`
    display: flex;
    justify-content: center;
    align-content: center;
    background: transparent;
    width: 6rem;
    height: 6rem;
    border: 0;
    cursor: pointer;
  `,
  LottieContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65.4rem;
    margin: 0 2.4rem;
  `,
  PageButtonContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0 2.6rem;
  `,
  PageButton: styled.div<{ isSelected?: boolean; isDarkMode?: boolean }>`
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 1.7rem;
    background: ${({ isSelected, isDarkMode }) =>
      isSelected ? (isDarkMode ? theme.colors.gray000 : theme.colors.black) : theme.colors.gray200};
    border-radius: 50%;
  `,
};
