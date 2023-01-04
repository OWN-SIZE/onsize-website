import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';

interface ButtonProps {
  isActive?: boolean;
  onClick?: () => void;
}

export default function NextButton({ isActive, onClick }: ButtonProps) {
  return (
    <Styled.NextButton type="submit" isActive={isActive} onClick={onClick}>
      다음
    </Styled.NextButton>
  );
}

const Styled = {
  NextButton: styled.button<{ isActive?: boolean }>`
    position: fixed;
    width: 46.2rem;
    height: 6.3rem;
    bottom: 9.8rem;
    background: transparent;
    ${({ isActive }) =>
      isActive
        ? css`
            color: ${theme.colors.gray000};
            background: ${theme.colors.black};
          `
        : css`
            border: 0.2rem solid ${theme.colors.black};
            color: ${theme.colors.gray550};
          `}
    border-radius: 3rem;
    ${theme.fonts.title3};
  `,
};
