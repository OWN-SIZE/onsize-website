import React, { useState } from 'react';
import { useContext } from 'react';
import BottomRequestModal from 'assets/icon/bottomRequestModal.png';
import TopBottomClicked from 'assets/icon/topBottomClicked.png';
import TopBottomUnclicked from 'assets/icon/topBottomUnclicked.png';
import TopRequestModal from 'assets/icon/topRequestModal.png';
import { useFetchMysize } from 'hooks/queries/mySize';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import SizeForm from 'components/common/SizeForm/SizeForm';
import { Toast } from 'components/common/Toast/Toast';
import { ToastContext } from 'components/common/Toast/ToastProvider';
import useToast from 'components/common/Toast/useToast';

export default function Mysize() {
  const { allMysize } = useFetchMysize();
  console.log(allMysize);
  const [isAlertActive, setIsAlertActive] = useState(false);
  const [isSubmitActive, setIsSubmitActive] = useState(false);

  //토스트
  const { isOpenToast, message, showToast } = useToast();
  const handleClick = () => {
    setIsAlertActive(true);
  };
  const onSuccessSubmit = () => {
    console.log('저장 성공');
    showToast('저장되었습니다.');
  };

  const [topColor, setTopColor] = useState(`${theme.colors.black}`);
  const [bottomColor, setBottomColor] = useState(`${theme.colors.gray200}`);
  const [isTopClicked, setIsTopClicked] = useState(true);
  const [clickedMeasure, setClickedMeasure] = useState('단면');

  const onClickMeasure = (measure: string) => {
    setClickedMeasure(measure);
  };

  let inputRequest = '없음';
  let data;

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

  if (allMysize) {
    if (
      allMysize.bottom.bottomLength === null &&
      allMysize.bottom.hem === null &&
      allMysize.bottom.isWidthOfBottom === null &&
      allMysize.bottom.rise === null &&
      allMysize.bottom.thigh === null &&
      allMysize.bottom.waist === null
    ) {
      inputRequest = '하의';
    }
    if (
      allMysize.top.topLength === null &&
      allMysize.top.shoulder === null &&
      allMysize.chest.isWidthOfBottom === null &&
      allMysize.top.isWidthOfTop === null
    ) {
      inputRequest = '상의';
    }

    const { chest } = allMysize.top;
    const { thigh, rise, hem } = allMysize.bottom;

    if (isTopClicked && allMysize.top.isWidthOfTop && clickedMeasure === '둘레') {
      data = { 총장: allMysize.top.topLength, '어깨 너비': allMysize.top.shoulder, 가슴: allMysize.top.chest };
    } else if (isTopClicked && allMysize.top.isWidthOfTop && clickedMeasure === '단면') {
      data = { 총장: allMysize.top.topLength, '어깨 너비': allMysize.top.shoulder, 가슴: '' };
    } else if (isTopClicked && allMysize.top.isWidthOfTop === null && clickedMeasure === '단면') {
      data = { 총장: allMysize.top.topLength, '어깨 너비': allMysize.top.shoulder, 가슴: allMysize.top.chest };
    } else if (isTopClicked && allMysize.top.isWidthOfTop === null && clickedMeasure === '둘레') {
      data = { 총장: allMysize.top.topLength, '어깨 너비': allMysize.top.shoulder, 가슴: '' };
    } else if (isTopClicked === false && allMysize.bottom.isWidthOfBottom && clickedMeasure === '둘레') {
      data = {
        총장: allMysize.bottom.bottomLength,
        밑위: allMysize.bottom.rise,
        허리: allMysize.bottom.waist,
        허벅지: allMysize.bottom.thigh,
        밑단: allMysize.bottom.hem,
      };
    } else if (isTopClicked === false && allMysize.bottom.isWidthOfBottom && clickedMeasure === '단면') {
      data = { 총장: allMysize.bottom.bottomLength, 밑위: allMysize.bottom.rise, 허리: '', 허벅지: '', 밑단: '' };
    } else if (isTopClicked === false && allMysize.bottom.isWidthOfBottom === null && clickedMeasure === '단면') {
      data = {
        총장: allMysize.bottom.bottomLength,
        밑위: allMysize.bottom.rise,
        허리: allMysize.bottom.waist,
        허벅지: allMysize.bottom.thigh,
        밑단: allMysize.bottom.hem,
      };
    } else if (isTopClicked === false && allMysize.bottom.isWidthOfBottom === null && clickedMeasure === '둘레') {
      data = { 총장: allMysize.bottom.bottomLength, 밑위: allMysize.bottom.rise, 허리: '', 허벅지: '', 밑단: '' };
    }
  }
  return (
    <Styled.Root>
      <Styled.TitleBar>
        <Styled.TopSize onClick={() => changeBorderColor('상의')} color={topColor}>
          <p>상의</p>
          {inputRequest === '상의' ? null : (
            <Image
              src={isTopClicked ? TopBottomClicked : TopBottomUnclicked}
              alt="상의가 클릭되었음을 나타내는 이미지"
              width={32}
              height={32}
            />
          )}
        </Styled.TopSize>
        <Styled.Blank></Styled.Blank>
        <Styled.BottomSize onClick={() => changeBorderColor('하의')} color={bottomColor}>
          <p>하의</p>
          {inputRequest === '하의' ? (
            <Styled.CheckBlank></Styled.CheckBlank>
          ) : (
            <Image
              src={!isTopClicked ? TopBottomClicked : TopBottomUnclicked}
              alt="하의가 클릭되었음을 나타내는 체크 이미지"
              width={32}
              height={32}
            />
          )}
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
          onClickMeasure={onClickMeasure}
          data={data}
        >
          <Styled.SaveButton onClick={handleClick}>저장</Styled.SaveButton>
        </SizeForm>
      </Styled.SizeFormContainer>
      {inputRequest === '상의' ? (
        <Styled.TopRequestModalContainer>
          <Styled.TopRequestModal>
            상의 사이즈 추천을 위해 <br /> 사이즈를 입력해 주세요
          </Styled.TopRequestModal>
          <Styled.TopModalTriangle />
        </Styled.TopRequestModalContainer>
      ) : inputRequest === '하의' ? (
        <Styled.BottomRequestModalContainer>
          <Styled.BottomModalTriangle />
          <Styled.BottomRequestModal>
            하의 사이즈 추천을 위해 <br /> 사이즈를 입력해 주세요
          </Styled.BottomRequestModal>
        </Styled.BottomRequestModalContainer>
      ) : null}
      {isOpenToast && (
        <Styled.ToastContainer>
          <Toast message={message} />
        </Styled.ToastContainer>
      )}
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
      cursor: pointer;
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
      cursor: pointer;
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
    ${theme.fonts.sizetag};
    top: 36.1rem;
    margin-left: 47.8rem;
    border-radius: 3rem;
    cursor: pointer;
  `,
  SizeFormContainer: styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 7.4rem;
  `,
  BottomRequestModalContainer: styled.div`
    position: fixed;
    top: 35.5rem;
    margin-left: 27.6rem;
    width: 13.5rem;
    height: 4.8rem;
    display: flex;
    align-items: center;
    filter: drop-shadow(0rem 0rem 0.4rem rgba(0, 0, 0, 0.12)) drop-shadow(0.2rem 0.6rem 1.2rem rgba(0, 0, 0, 0.12));
  `,
  BottomRequestModal: styled.div`
    width: 12.9rem;
    height: 4.8rem;
    ${theme.fonts.tooltip};
    color: ${theme.colors.gray550};
    background-color: ${theme.colors.gray000};
    border-radius: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  TopRequestModalContainer: styled.div`
    position: fixed;
    top: 35.5rem;
    margin-left: -16.3rem;
    width: 13.5rem;
    height: 4.8rem;
    display: flex;
    align-items: center;
    filter: drop-shadow(0rem 0rem 0.4rem rgba(0, 0, 0, 0.12)) drop-shadow(0.2rem 0.6rem 1.2rem rgba(0, 0, 0, 0.12));
  `,
  TopRequestModal: styled.div`
    width: 12.9rem;
    height: 4.8rem;
    ${theme.fonts.tooltip};
    color: ${theme.colors.gray550};
    background-color: ${theme.colors.gray000};
    border-radius: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  CheckBlank: styled.div`
    width: 3.2rem;
    height: 3.2rem;
    background-color: ${theme.colors.gray000};
  `,
  TopModalTriangle: styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.5rem 0 0.5rem 0.6rem;
    border-color: transparent transparent transparent ${theme.colors.gray000};
    filter: drop-shadow(0rem 0rem 0.4rem rgba(0, 0, 0, 0.12)) drop-shadow(0.2rem 0.6rem 1.2rem rgba(0, 0, 0, 0.12));
  `,
  BottomModalTriangle: styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.5rem 0.6rem 0.5rem 0;
    border-color: transparent ${theme.colors.gray000} transparent transparent;
    filter: drop-shadow(0rem 0rem 0.4rem rgba(0, 0, 0, 0.12)) drop-shadow(0.2rem 0.6rem 1.2rem rgba(0, 0, 0, 0.12));
  `,
  ToastContainer: styled.div`
    position: fixed;
    bottom: 5.2rem;
    display: flex;
    align-items: center;
    margin-left: 22.4rem;
  `,
};
