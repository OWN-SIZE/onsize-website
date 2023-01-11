import React, { useState } from 'react';
import { LeftArrowIcon, RightArrowIcon } from 'assets/icon';
import Lottie from 'lottie-react';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import tutorialAnimation1 from '../../../assets/lottie/tutorial01.json';
import tutorialAnimation2 from '../../../assets/lottie/tutorial02.json';
import tutorialAnimation3 from '../../../assets/lottie/tutorial03.json';
import Modal from '../../common/Modal';
import ModalPortal from '../../common/modal/ModalPortal';

const lottieMapper = [
  {
    lottie: tutorialAnimation1,
    message: '먼저, 온사이즈 아이콘을 상단에 고정해주세요',
  },
  {
    // 디자인에서 받아서 바꿔야 함
    lottie: tutorialAnimation1,
    message: `나의 옷 중 가장 잘맞는 옷의 사이즈를\n쇼핑몰에서 찾아 입력해주세요!`,
  },
  {
    lottie: tutorialAnimation2,
    message: `사이즈가 궁금하다면 온사이즈 아이콘을 클릭해주세요`,
  },
  {
    lottie: tutorialAnimation3,
    message: `관심 있는 옷은 나의 옷장에 저장하고 확인할 수 있어요`,
  },
];

interface LottieProps {
  onClickCloseButton: () => void;
}

function LottieModal(props: LottieProps) {
  const { onClickCloseButton } = props;
  const [page, setPage] = useState(0);

  const onClickArrow = (arrowType: 'left' | 'right') => {
    if (arrowType === 'left') {
      setPage((prev) => (prev === 0 ? lottieMapper.length - 1 : prev - 1));
    } else {
      setPage((prev) => (prev === lottieMapper.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <ModalPortal>
      <Modal width={93} radius={2}>
        <Styled.PageContainer>
          <Styled.ArrowButton onClick={() => onClickArrow('left')}>
            <Image src={LeftArrowIcon} width={60} height={60} alt="왼쪽 화살표 버튼" />
          </Styled.ArrowButton>
          <Styled.LottieContainer>
            <Lottie animationData={lottieMapper[page].lottie} />
            <Styled.PageButtonContainer>
              {lottieMapper.map((lottie, index) => (
                <Styled.PageButton key={index} isSelected={page === index} />
              ))}
            </Styled.PageButtonContainer>
          </Styled.LottieContainer>
          <Styled.ArrowButton onClick={() => onClickArrow('right')}>
            <Image src={RightArrowIcon} width={60} height={60} alt="오른쪽 화살표 버튼" />
          </Styled.ArrowButton>
        </Styled.PageContainer>
        <Styled.MessageContainer>
          <pre>{lottieMapper[page].message}</pre>
          <button onClick={onClickCloseButton}>닫기</button>
        </Styled.MessageContainer>
      </Modal>
    </ModalPortal>
  );
}

export default LottieModal;

const Styled = {
  PageContainer: styled.div`
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
  PageButton: styled.div<{ isSelected?: boolean }>`
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 1.7rem;
    background: ${({ isSelected }) => (isSelected ? theme.colors.black : theme.colors.gray200)};
    border-radius: 50%;
  `,
  MessageContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 93rem;
    height: 15.6rem;
    background-color: black;
    border-radius: 0 0 2rem 2rem;
    margin-top: 3rem;
    pre {
      text-align: center;
      ${theme.fonts.body8};
      color: ${theme.colors.yellow01};
    }
    button {
      position: fixed;
      right: 7.9rem;
      color: ${theme.colors.gray250};
      ${theme.fonts.body8};
      background: transparent;
      border: 0;
    }
  `,
};
