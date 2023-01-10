import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import theme from 'styles/theme';

import NextButton from '@/components/register/NextButton';
import Layout from 'components/common/Layout';
import SizeForm from 'components/common/SizeForm/SizeForm';
import Progress from 'components/register/Progress';
import SizeOption from 'components/register/SizeOption';

// 버튼 컴포넌트 전달을 위한 타입
export type OptionType = '상/하의' | '상의' | '하의' | null;

function Register() {
  const [progress, setProgress] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<OptionType>(null);
  const [isNextActive, setIsNextActive] = useState<boolean>(false);
  const [isAlertActive, setIsAlertActive] = useState<boolean>(false);
  const router = useRouter();

  const onClickSize = () => {
    if (progress === 3) {
      // 서버에 데이터 넘기고 home으로 이동
    } else if (isNextActive) {
      setProgress((prev) => prev + 1);
      setIsNextActive(false);
    }
  };

  const onClickNextButton = () => {
    setIsAlertActive(true);
  };

  const onSuccessSubmit = () => {
    if (progress === 2) {
      setProgress(progress + 1);
    } else {
      router.push('/home');
    }
  };

  return (
    <Layout noHeader noMenuBar>
      <Styled.Root>
        <Styled.LeftConatiner>
          <h1>Log In</h1>
          <h2>
            기존에 구매한 옷 중 가장 잘 맞는 제품의 사이즈를 찾아 입력해주세요.
            <br />
            입력하신 사이즈 기준으로 가장 유사한 사이즈의 제품을 추천해드려요.
          </h2>
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
              isAlertActive={isAlertActive}
              setIsAlertActive={setIsAlertActive}
              formType={selectedOption === '하의' ? '하의' : '상의'}
              setIsSubmitActive={setIsNextActive}
              onSuccessSubmit={onSuccessSubmit}
            >
              <NextButton isActive={isNextActive} onClick={onClickNextButton} />
            </SizeForm>
          ) : (
            <SizeForm
              isAlertActive={isAlertActive}
              setIsAlertActive={setIsAlertActive}
              formType={selectedOption === '하의' ? '상의' : '하의'}
              setIsSubmitActive={setIsNextActive}
              onSuccessSubmit={onSuccessSubmit}
            >
              <NextButton isActive={isNextActive} onClick={onClickNextButton} />
            </SizeForm>
          )}
        </Styled.RightContainer>
      </Styled.Root>
    </Layout>
  );
}

export default Register;

const Styled = {
  Root: styled.section`
    margin: 0 auto;
    display: flex;
    width: 100vw;
    height: 100vh;
  `,
  LeftConatiner: styled.article`
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
  `,
  RightContainer: styled.article`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 8.6rem;
    width: 100%;
    background-color: #f5f5f5;
  `,
};
