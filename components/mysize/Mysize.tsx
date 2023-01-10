import SizeForm from 'components/common/SizeForm/SizeForm';
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import Image from 'next/image';
import TopBottomClicked from 'assets/icon/topBottomClicked.png';
import TopBottomUnclicked from 'assets/icon/topBottomUnclicked.png';


export default function Mysize() {
  const [isAlertActive, setIsAlertActive] = useState(false);
  const [isSubmitActive, setIsSubmitActive] = useState(false);
  const onSuccessSubmit = () => {};


  const [topColor, setTopColor] = useState(`${theme.colors.black}`);
  const [bottomColor, setBottomColor] = useState(`${theme.colors.gray200}`);
  const [isTopClicked, setIsTopClicked] = useState(true);

  const changeBorderColor = (clicked: string) => {
    if (clicked === '상의') {
      setTopColor(`${theme.colors.black}`);
      setBottomColor(`${theme.colors.gray200}`);
      setIsTopClicked(true);
    } else {
      setTopColor(`${theme.colors.gray200}`);
      setBottomColor(`${theme.colors.black}`);
      setIsTopClicked(false);
    }
  };

  return (
    <Styled.Root>
      <Styled.TitleBar>
        <Styled.TopSize onClick={() => changeBorderColor('상의')} color={topColor}>
          <p>상의</p>
          <Image
            src={isTopClicked? TopBottomClicked : TopBottomUnclicked}
            alt="상의가 클릭되었음을 나타내는 체크 이미지"
            width={32}
            height={32}
          />
        </Styled.TopSize>
        <Styled.Blank></Styled.Blank>
        <Styled.BottomSize onClick={() => changeBorderColor('하의')} color={bottomColor}>
          <p>하의</p>
          <Image
            src={!isTopClicked? TopBottomClicked : TopBottomUnclicked}
            alt="하의가 클릭되었음을 나타내는 체크 이미지"
            width={32}
            height={32}
          />
        </Styled.BottomSize>
        <Styled.SaveButtonContainer></Styled.SaveButtonContainer>
      </Styled.TitleBar>
      <Styled.SizeFormContainer>
        <SizeForm
          noHeader
          formType={isTopClicked ? '상의' : '하의'}
          isAlertActive={isAlertActive}
          setIsAlertActive={setIsAlertActive}
          setIsSubmitActive={setIsSubmitActive}
          onSuccessSubmit={onSuccessSubmit}
        >
          <Styled.SaveButton>저장</Styled.SaveButton>
        </SizeForm>
      </Styled.SizeFormContainer>
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    margin: 0 auto;
    overflow: hidden;
  `,
  TitleBar: styled.div`
    width: 78.4rem;
    height: 7rem;
    ${theme.fonts.title4};
    display: flex;
    margin-top: 9.5rem;
  `,
  TopSize: styled.div`
    width: 16.2rem;
    height: 6.4rem;
    border-bottom: 0.4rem solid ${(props) => props.color};
    display: flex;
    & > p {
      margin-left: 1rem;
      margin-right: 1.4rem;
    }
  `,
  Blank: styled.div`
    width: 2.6rem;
    height: 6.4rem;
    border-bottom: 0.4rem solid ${theme.colors.gray200};
  `,
  BottomSize: styled.div`
    width: 16.2rem;
    height: 6.4rem;
    border-bottom: 0.4rem solid ${(props) => props.color};
    display: flex;
    & > p {
      margin-left: 1rem;
      margin-right: 1.4rem;
    }
  `,
  SaveButtonContainer: styled.div`
    width: 46rem;
    height: 6.4rem;
    border-bottom: 0.4rem solid ${theme.colors.gray200};
  `,
  SaveButton: styled.button`
    position: fixed;
    border: none;
    width: 14.4rem;
    height: 4rem;
    background-color: ${theme.colors.black};
    color: ${theme.colors.gray000};
    top: 36.1rem;
    z-index: 1000;
    margin-left: 47.8rem;
  `,
  SizeFormContainer: styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 7.4rem;
  `,
};
