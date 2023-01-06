import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

import Layout from 'components/common/Layout';
import SizeForm from 'components/common/SizeForm/SizeForm';
import Progress from 'components/register/Progress';
import SizeOption from 'components/register/SizeOption';

// 버튼 컴포넌트 전달을 위한 타입
export type OptionType = '상/하의' | '상의' | '하의' | null;
export type ProgressType = 1 | 2 | 3;

interface iNextFormMapper {
  '상/하의': OptionType;
  상의: OptionType;
  하의: OptionType;
}

const nextFormMapper: iNextFormMapper = {
  '상/하의': '하의',
  상의: '하의',
  하의: '상의',
};

function Register() {
  const [progress, setProgress] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<OptionType>(null);
  const [isNextActive, setIsNextActive] = useState<boolean>(false);
  const rootRef = useRef(null);

  const onClickSize = () => {
    if (progress === 3) {
      // 서버에 데이터 넘기고 home으로 이동
    } else if (isNextActive) {
      setProgress((prev) => prev + 1);
      setIsNextActive(false);
    }
  };

  return (
    <Layout noHeader noMenuBar>
      <Styled.Root ref={rootRef}>
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
            <SizeForm formType={selectedOption} isNextActive={isNextActive} setIsNextActive={setIsNextActive} />
          ) : (
            <SizeForm
              formType={selectedOption && nextFormMapper[selectedOption]}
              isNextActive={isNextActive}
              setIsNextActive={setIsNextActive}
            />
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
