import { MouseEvent } from 'react';
import { useState } from 'react';
import router from 'next/router';
import styled from 'styled-components';
import theme from 'styles/theme';

export default function MenuBar() {
  const [isClicked, setIsClicked] = useState('home');
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    const newPage = e.currentTarget.id;
    if (newPage === isClicked) {
      return;
    }
    setIsClicked(newPage);
    router.push(`/${newPage}`);
  };

  return (
    <Styled.Root>
      <Styled.Menu isClicked={isClicked === 'home' ? true : false} id="home" onClick={handleOnClick}>
        나의 옷장
      </Styled.Menu>
      <Styled.Menu isClicked={isClicked === 'category' ? true : false} id="category" onClick={handleOnClick}>
        카테고리
      </Styled.Menu>
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    display: flex;
    gap: 5rem;

    height: 6.1rem;
    margin: 0 16rem;
    border-bottom: 0.3rem solid;
    color: ${theme.colors.gray200};
  `,
  Menu: styled.button<{ isClicked: boolean }>`
    display: flex;
    align-items: baseline;
    height: 6.1rem;

    background: none;

    border: none;

    ${theme.fonts.title2}

    border-bottom: 0;
    border-bottom: ${({ isClicked }) => (isClicked ? '0.3rem solid black' : 0)};
  `,
};
