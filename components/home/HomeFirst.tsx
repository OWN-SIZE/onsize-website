import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

import LottieModal from '../common/modal/LottieModal';

function HomeFirst() {
  const [isTutorial, setIsTutorial] = useState(false);
  return (
    <Styled.Root>
      <Styled.Greeting>온사이즈를 시작하러 가볼까요?</Styled.Greeting>
      <Styled.Button onClick={() => setIsTutorial(true)}>튜토리얼 확인하기</Styled.Button>
      {isTutorial && <LottieModal onClickCloseButton={() => setIsTutorial(false)} />}
    </Styled.Root>
  );
}

export default HomeFirst;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 14.5rem;

    margin: 18.1rem auto 33.1rem;
  `,

  Greeting: styled.h1`
    ${theme.fonts.title4};
  `,

  Button: styled.button`
    width: 21.9rem;
    height: 7rem;

    border: none;
    border-radius: 3.5rem;

    ${theme.fonts.title3}

    background-color: ${theme.colors.gray150};
    color: ${theme.colors.gray350};

    cursor: pointer;
  `,
};
