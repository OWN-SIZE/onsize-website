import React, { useEffect, useState } from 'react';
import { LoginMouseImg, SizeGuideImg } from 'assets/img';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { isRegisterState } from 'states/user';
import styled from 'styled-components';
import theme from 'styles/theme';

import NextButton from '@/components/register/NextButton';
import SizeForm from 'components/common/SizeForm/SizeForm';
import Progress from 'components/register/Progress';
import SizeOption from 'components/register/SizeOption';

// 버튼 컴포넌트 전달을 위한 타입
export type OptionType = '상의' | '하의' | '상/하의' | null;

function RegisterLanding() {
  const [progress, setProgress] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<OptionType>(null);
  const [isNextActive, setIsNextActive] = useState<boolean>(false);
  const [isAlertActive, setIsAlertActive] = useState<boolean>(false);
  const [isTip, setIsTip] = useState<boolean>(false);
  const [skip, setSkip] = useState<boolean>(false);
  const [, setIsRegister] = useRecoilState(isRegisterState);
  const router = useRouter();

  useEffect(() => {
    if (selectedOption === '하의' && progress === 3) {
      // 하의 선택시 마지막 입력은 상의
      setIsTip(true);
    } else if (selectedOption !== '하의' && progress === 2) {
      // 상의, 또는 상하의 선택시 첫번째 입력이 상의
      setIsTip(true);
    } else {
      setIsTip(false);
    }
  }, [progress, selectedOption]);

  const onClickSize = () => {
    if (progress === 3) {
      // 서버에 데이터 넘기고 home으로 이동
    } else if (isNextActive) {
      setProgress((prev) => prev + 1);
      setIsNextActive(false);
    }
  };

  const onClickNextButton = () => {
    if (skip) {
      localStorage.setItem('isRegister', 'true');
      setIsRegister(true);
      router.push('/home');
    } else {
      setIsAlertActive(true);
    }
  };

  const onSuccessSubmit = () => {
    if (progress === 2) {
      setProgress(progress + 1);
      setIsNextActive(false);
    } else {
      localStorage.setItem('isRegister', 'true');
      setIsRegister(true);
      router.push('/home');
    }
  };

  return (
    <Styled.Root>
      <Styled.LeftConatiner>
        <h1>Log In</h1>
        <h2>
          기존에 구매한 옷 중 가장 잘 맞는 제품의 사이즈를 찾아 입력해주세요.
          <br />
          입력하신 사이즈 기준으로 가장 유사한 사이즈의 제품을 추천해드려요.
        </h2>
        {isTip && (
          <Styled.SizeGuide>
            <span>💡 상의 사이즈 입력을 위한 팁</span>
            <div>
              <h1>
                정확한 사이즈 추천을 위해 추천받고 싶은 상의 <br />
                유형과 비슷한 실측치를 입력해주세요
              </h1>
              <h2>
                ex. 반팔 사이즈를 입력하고 니트를 사이즈를 추천받을
                <br /> 경우 오차가 생길 수 있어요 😢
              </h2>
              <h3>
                1. 반소매/긴소매/민소매/카라티
                <br />
                2. 니트/스웨터
                <br />
                3. 맨투맨/후드
                <br />
                4. 셔츠/블라우스
              </h3>
              <Image src={SizeGuideImg} alt="사이즈 가이드 배경 이미지" placeholder="blur" />
            </div>
          </Styled.SizeGuide>
        )}
        <Image src={LoginMouseImg} alt="로그인 배경 이미지" placeholder="blur" height={1000} width={172} />
      </Styled.LeftConatiner>
      <Styled.RightContainer>
        <Progress progress={progress} selectedOption={selectedOption} />
        {progress === 1 ? (
          <SizeOption
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            isNextActive={isNextActive}
            setIsNextActive={setIsNextActive}
            onClickNext={onClickSize}
          />
        ) : progress === 2 ? (
          <SizeForm
            progress={progress}
            isAlertActive={isAlertActive}
            setIsAlertActive={setIsAlertActive}
            formType={selectedOption === '하의' ? '하의' : '상의'}
            setIsSubmitActive={setIsNextActive}
            onSuccessSubmit={onSuccessSubmit}
            isOption={selectedOption === '상/하의' ? false : true}
          >
            <NextButton isActive={isNextActive} onClick={onClickNextButton} />
          </SizeForm>
        ) : (
          <SizeForm
            progress={progress}
            isAlertActive={isAlertActive}
            setIsAlertActive={setIsAlertActive}
            formType={selectedOption === '하의' ? '상의' : '하의'}
            setIsSubmitActive={setIsNextActive}
            onSuccessSubmit={onSuccessSubmit}
            isOption={selectedOption === '상/하의' ? false : true}
            skip={skip}
            setSkip={setSkip}
          >
            <NextButton isActive={isNextActive} onClick={onClickNextButton} />
          </SizeForm>
        )}
      </Styled.RightContainer>
    </Styled.Root>
  );
}

export default RegisterLanding;

const Styled = {
  Root: styled.section`
    margin: 0 auto;
    display: flex;
    width: 100vw;
    min-height: 109.2rem;
  `,
  LeftConatiner: styled.article`
    position: relative;
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
    > img:last-child {
      position: absolute;
      left: 41.5rem;
      top: 4.6rem;
    }
  `,
  SizeGuide: styled.div`
    position: relative;
    display: flex;
    width: 38.6rem;
    height: 34.529rem;
    margin-top: 8.3rem;
    > span {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 23.4rem;
      height: 4rem;
      border-radius: 5rem;
      background: #fffaad;
      text-align: center;
      ${theme.fonts.body4};
      color: black;
      z-index: 10;
    }
    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 37rem;
      height: 32.529rem;
      padding-left: 2.8rem;
      transform: translate(1.6rem, 2rem);
      color: white;
      font-family: 'Noto Sans KR';
      font-style: normal;
      > h1 {
        margin-top: 3rem;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 3rem;
      }
      > h2 {
        margin-top: 0.2rem;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.5rem;
      }
      > h3 {
        margin-top: 2.6rem;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 3rem;
      }
      > img {
        position: absolute;
        left: 0;
        z-index: -10;
      }
    }
  `,
  RightContainer: styled.article`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 8.6rem;
    width: 100%;
    background-color: #f5f5f5;
  `,
};
