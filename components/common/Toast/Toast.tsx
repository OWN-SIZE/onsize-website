import styled from 'styled-components';
import theme from 'styles/theme';

interface ToastProps {
  message: string;
  width: string;
}

export const Toast = ({ message, width }: ToastProps) => {
  return <Styled.Root width={width}>{message}</Styled.Root>;
};

const Styled = {
  Root: styled.div<{ width: string }>`
    width: ${({ width }) => `${width}rem`};
    height: 8rem;
    background-color: ${theme.colors.yellow01};
    color: ${theme.colors.gray550};
    ${theme.fonts.title3};
    border-radius: 1rem;
    box-shadow: 0rem 0rem 1rem 0.8rem rgba(0, 0, 0, 0.05);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
