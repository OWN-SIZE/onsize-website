import React, { useEffect, useState } from 'react';
import TopBottomClicked from 'assets/icon/topBottomClicked.png';
import TopBottomUnclicked from 'assets/icon/topBottomUnclicked.png';
import { useFetchMysize } from 'hooks/queries/mySize';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import SizeForm from 'components/common/SizeForm/SizeForm';
import { Toast } from 'components/common/Toast/Toast';
import useToast from 'components/common/Toast/useToast';

type DataType =
  | {
      총장: number | null;
      '어깨 너비': number;
      가슴: number;
    }
  | {
      총장: number | null;
      밑위: number;
      허리: number;
      허벅지: number;
      밑단: number;
    };

export default function Mysize() {
  //경고창 및 저장 이벤트
  const [isAlertActive, setIsAlertActive] = useState(false);
  const [isSubmitActive, setIsSubmitActive] = useState(false);
  const handleClick = () => {
    setIsAlertActive(true);
  };

  //토스트
  const { isOpenToast, message, showToast } = useToast();
  const onSuccessSubmit = () => {
    showToast('저장되었습니다.');
  };

  //클릭 상태 관리
  const [topColor, setTopColor] = useState(`${theme.colors.black}`);
  const [bottomColor, setBottomColor] = useState(`${theme.colors.gray200}`);
  const [isTopClicked, setIsTopClicked] = useState(true);
  const [clickedMeasure, setClickedMeasure] = useState('단면');
  const [emptyClothesType, setEmptyClothesType] = useState('없음');

  //데이터 패칭
  const { allMysize } = useFetchMysize(isTopClicked, clickedMeasure, isAlertActive);
  const onClickMeasure = (measure: string) => {
    setClickedMeasure(measure);
  };

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

  //데이터 상태 관리
  const [data, setData] = useState<DataType>({ 총장: 0, '어깨 너비': 0, 가슴: 0 });

  //데이터 초기
  useEffect(() => {
    if (allMysize) {
      const { bottom } = allMysize;
      const { top } = allMysize;
      if (emptyClothesType === '하의') {
        setData({ 총장: top.topLength, '어깨 너비': top.shoulder, 가슴: top.chest });
      } else if (emptyClothesType === '상의') {
        setData({
          총장: bottom.bottomLength,
          밑위: bottom.rise,
          허리: bottom.waist,
          허벅지: bottom.thigh,
          밑단: bottom.hem,
        });
      }
    }
  }, [allMysize, isAlertActive]);

  useEffect(() => {
    if (allMysize) {

      const { bottom } = allMysize;
      const { top } = allMysize;

      const topLength = top.topLength;
      const shoulder = top.shoulder;
      const chest = top.chest;
      const isWidthOfTop = top.isWidthOfTop;

      const bottomLength = bottom.bottomLength;
      const rise = bottom.rise;
      const waist = bottom.waist;
      const thigh = bottom.thigh;
      const hem = bottom.hem;
      const isWidthOfBottom = bottom.isWidthOfBottom;

      if (
        bottomLength === null &&
        hem === null &&
        isWidthOfBottom === null &&
        rise === null &&
        thigh === null &&
        waist === null
      ) {
        setEmptyClothesType('하의');
      } else if (topLength === null && shoulder === null && chest === null && isWidthOfTop === null) {
        setEmptyClothesType('상의');
      } else {
        setEmptyClothesType('없음');
      }

      if (isTopClicked && isWidthOfTop && clickedMeasure === '둘레') {
        setData({ 총장: topLength, '어깨 너비': shoulder, 가슴: chest * 2 });
      } else if (isTopClicked && isWidthOfTop && clickedMeasure === '단면') {
        setData({ 총장: topLength, '어깨 너비': shoulder, 가슴: chest });
      } else if (isTopClicked && isWidthOfTop === false && clickedMeasure === '단면') {
        setData({ 총장: topLength, '어깨 너비': shoulder, 가슴: chest / 2 });
      } else if (isTopClicked && isWidthOfTop === false && clickedMeasure === '둘레') {
        setData({ 총장: topLength, '어깨 너비': shoulder, 가슴: chest });
      } else if (isTopClicked === false && isWidthOfBottom && clickedMeasure === '둘레') {
        setData({
          총장: bottomLength,
          밑위: rise,
          허리: waist * 2,
          허벅지: thigh * 2,
          밑단: hem * 2,
        });
      } else if (isTopClicked === false && isWidthOfBottom && clickedMeasure === '단면') {
        setData({ 총장: bottomLength, 밑위: rise, 허리: waist, 허벅지: thigh, 밑단: hem });
      } else if (isTopClicked === false && isWidthOfBottom === false && clickedMeasure === '단면') {
        setData({
          총장: bottomLength,
          밑위: rise,
          허리: waist / 2,
          허벅지: thigh / 2,
          밑단: hem / 2,
        });
      } else if (isTopClicked === false && isWidthOfBottom === false && clickedMeasure === '둘레') {
        setData({ 총장: bottomLength, 밑위: rise, 허리: waist, 허벅지: thigh, 밑단: hem });
      } else if (isTopClicked === false && isWidthOfBottom === null) {
        setData({ 총장: bottomLength, 밑위: rise, 허리: waist, 허벅지: thigh, 밑단: hem });
      } else if (isTopClicked && isWidthOfTop === null) {
        setData({ 총장: topLength, '어깨 너비': shoulder, 가슴: chest });
      }
    }
    console.log(allMysize);
  }, [allMysize, isTopClicked, clickedMeasure, isAlertActive, emptyClothesType]);


  return (
    <Styled.Root>
      <Styled.TitleBar>
        <Styled.TopSize onClick={() => changeBorderColor('상의')} color={topColor}>
          <p>상의</p>
          {emptyClothesType === '상의' ? null : (
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
          {emptyClothesType === '하의' ? (
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
          isTopClicked={isTopClicked}
          isOpenToast={isOpenToast}
          emptyClothesType={emptyClothesType}
          isSubmitActive={isSubmitActive}
        >
          <Styled.SaveButton onClick={handleClick} type="submit">
            저장
          </Styled.SaveButton>
        </SizeForm>
      </Styled.SizeFormContainer>
      {emptyClothesType === '상의' ? (
        <Styled.TopRequestModalContainer>
          <Styled.TopRequestModal>
            상의 사이즈 추천을 위해 <br /> 사이즈를 입력해 주세요
          </Styled.TopRequestModal>
          <Styled.TopModalTriangle />
        </Styled.TopRequestModalContainer>
      ) : emptyClothesType === '하의' ? (
        <Styled.BottomRequestModalContainer>
          <Styled.BottomModalTriangle />
          <Styled.BottomRequestModal>
            하의 사이즈 추천을 위해 <br /> 사이즈를 입력해 주세요
          </Styled.BottomRequestModal>
        </Styled.BottomRequestModalContainer>
      ) : null}
      {isOpenToast && (
        <Styled.ToastContainer>
          <Toast message={message} width="32.9" />
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
    position: absolute;
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
    z-index: 15;
  `,
};
