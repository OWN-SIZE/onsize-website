import React, { PropsWithChildren, useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import theme from '../../styles/theme';

type ModalProps = {
  title?: string;
  leftButtonText?: string;
  rightButtonText?: string;
  width: number;
  radius?: number;
  onClickModal?: () => void;
  onClickLeftButton?: () => void;
  onClickRightButton?: () => void;
  isButtonActivated?: boolean;
};
/*width 를 props 로 전달해야 하는 이유: 가로 대 세로 2 대 1의 비율로 모달 컴포넌트를 제작했기 때문..!
<= 안그러면 padding top 과 bottom 의 값이 조금씩 달라져서..! 최대한 원래 디자인을 살리는 방법으로 이 방법을 선택했어요
사용법: children 에서 중간 margin 값을 주고, Modal 에 props 값을 전달해주시면 끝! 
*/
function Modal(props: PropsWithChildren<ModalProps>) {
  const {
    title,
    leftButtonText,
    rightButtonText,
    width,
    radius,
    onClickModal,
    onClickLeftButton,
    onClickRightButton,
    children,
    isButtonActivated,
  } = props;

  const disableScroll = () => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
  };
  const enableScroll = () => {
    const scrollY = document.body.style.top;
    document.body.style.cssText = '';
    window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
  };
  useEffect(() => {
    disableScroll();
    return () => enableScroll();
  }, []);

  const closeModal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClickModal) {
      onClickModal();
    }
  };

  return (
    <Styled.Root>
      <Styled.ModalContainer width={width} radius={radius}>
        <Styled.ModalTitle width={width}>{title}</Styled.ModalTitle>
        {children}
        {onClickLeftButton && onClickRightButton && (
          <Styled.ModalButtons>
            <Styled.LeftButton onClick={onClickLeftButton}>{leftButtonText}</Styled.LeftButton>
            {isButtonActivated !== undefined && (
              <Styled.RightButton onClick={onClickRightButton} isButtonActivated={isButtonActivated}>
                {rightButtonText}
              </Styled.RightButton>
            )}
          </Styled.ModalButtons>
        )}
      </Styled.ModalContainer>
      <Styled.Backdrop onClick={closeModal} />
    </Styled.Root>
  );
}

export default Modal;

const Styled = {
  Root: styled.div`
    position: fixed;
    top: 0;

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  `,
  ModalContainer: styled.div<{ width: number; radius?: number }>`
    position: fixed;
    width: ${(props) => `${props.width}rem`};
    min-height: ${(props) => `${props.width * 0.5}rem`};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    filter: drop-shadow(0 0 1.4rem rgba(0, 0, 0, 0.15));
    background-color: ${theme.colors.gray000};
    border-radius: ${({ radius }) => (radius ? `${radius}rem` : '1rem')};
    z-index: 10;
  `,
  Backdrop: styled.div`
    width: 100%;
    height: ${() => `${window.screen.height}rem`};
    background-color: ${theme.colors.card_hover};
    opacity: 0.4;
    z-index: 9;
    position: fixed;
  `,
  ModalTitle: styled.div<{ width: number }>`
    width: ${(props) => `${props.width}rem`};
    ${theme.fonts.title4};
    color: ${theme.colors.gray550};
    text-align: center;
  `,
  ModalButtons: styled.div`
    display: flex;
    justify-content: space-between;
    width: 33.6rem;
    & > button {
      width: 15rem;
      height: 5rem;
      color: ${theme.colors.gray000};
      ${theme.fonts.title4};
      border-radius: 0.5rem;
      border: none;
      &:hover {
        cursor: pointer;
      }
    }
  `,
  LeftButton: styled.button`
    background-color: ${theme.colors.gray200};
  `,
  RightButton: styled.button<{ isButtonActivated: boolean }>`
    background-color: ${(props) => (props.isButtonActivated ? theme.colors.black : theme.colors.gray200)};
  `,
};
