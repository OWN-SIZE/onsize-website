import React, { PropsWithChildren, useEffect } from 'react';
import link from 'assets/icon/link.png';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

interface HistoryModalProps {
  onClickHistoryModal: () => void;
}

function HistoryModal({ onClickHistoryModal, children }: PropsWithChildren<HistoryModalProps>) {

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

  return (
    <Styled.Root>
      <Styled.Blank></Styled.Blank>
      <Styled.HistoryModalContainer>
        <Styled.HistoryModalTriangle />
        <Styled.HistoryModalContent>
          <Styled.HistoryModalTitle>
            <p className="standard">Size</p>
            <Image
              src={link}
              alt="링크 아이콘"
              width={18}
              height={18}
              placeholder="blur"
              blurDataURL="assets/icon/link.png"
            />
            <p className="link">Link</p>
          </Styled.HistoryModalTitle>
          <Styled.HistoryModalScroll>{children}</Styled.HistoryModalScroll>
        </Styled.HistoryModalContent>
      </Styled.HistoryModalContainer>
      <Styled.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickHistoryModal) {
            onClickHistoryModal();
          }
        }}
      />
    </Styled.Root>
  );
}

export default HistoryModal;

const Styled = {
  Root: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  `,
  HistoryModalContainer: styled.div`
    position: absolute;
    top: 65rem;
    width: 35rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 13.5rem;
    margin-top: -2rem;
    filter: drop-shadow(0 0 1.4rem rgba(0, 0, 0, 0.15));
    z-index: 10;
  `,
  HistoryModalTriangle: styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 1.5rem 2.2rem 1.5rem;
    border-color: transparent transparent ${theme.colors.gray000} transparent;
    z-index: 10;
  `,
  HistoryModalContent: styled.div`
    width: 35rem;
    height: 35rem;
    background-color: ${theme.colors.gray000};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    z-index: 10;
  `,
  HistoryModalTitle: styled.div`
    width: 26.2rem;
    height: 3.1rem;
    margin-top: 3.2rem;
    padding-bottom: 1.2rem;
    ${theme.fonts.card1};
    color: ${theme.colors.gray550};
    display: flex;
    justify-content: center;
    border-bottom: 0.1rem solid ${theme.colors.gray150};
    & > .standard {
      margin-right: 10.6rem;
    }
    & > .link {
      margin-left: 0.4rem;
    }
  `,
  HistoryModalScroll: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 33.8rem;
    margin: 0rem 0.8rem 2.3rem 0.8rem;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 0.3rem;
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.gray300};
      border-radius: 1rem;
      height: 30%;
    }
    ::-webkit-scrollbar-track {
      background: ${theme.colors.gray200};
      border-radius: 1rem;
      height: 5rem;
    }
  `,
  Backdrop: styled.div`
    width: 100%;
    height: 100%;
    z-index: 9;
    position: fixed;
  `,
  Blank: styled.div`
  position: relative;
  `
};
