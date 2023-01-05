import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

interface AlertProps {
  message: string;
  isActive: boolean;
  setIsActive: (prev: boolean) => void;
}

function Alert(props: AlertProps) {
  const { message, isActive, setIsActive } = props;

  return (
    <Styled.Root isAlert={isActive}>
      {message}
      <br />
      다시 입력해 주세요.
      <Styled.Button onClick={() => setIsActive(false)}>확인</Styled.Button>
    </Styled.Root>
  );
}

export default Alert;

const Styled = {
  Root: styled.div<{ isAlert?: boolean }>`
    display: ${({ isAlert }) => (isAlert ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    flex-direction: column;
    min-width: 44rem;
    min-height: 15.2rem;
    padding: 2.8rem 2.6rem;
    padding-bottom: 1.7rem;
    background: #ffffff;
    border: 0.1rem solid ${theme.colors.gray150};
    box-shadow: 0.4rem 0.4rem 1rem rgba(217, 217, 217, 0.2);
    border-radius: 0.5rem;
    color: ${theme.colors.black};
    ${theme.fonts.caption};
    z-index: 10;
  `,
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    width: 7rem;
    height: 3.2rem;
    margin-top: 1.1rem;
    background: ${theme.colors.black};
    border-radius: 0.5rem;
    color: #ffffff;
    ${theme.fonts.caption};
  `,
};
