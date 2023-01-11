import styled from 'styled-components';
import theme from 'styles/theme';

interface ToastProps {
  message: string;
}

export const Toast = ({ message }: ToastProps) => {
  return <Styled.Root>{message}</Styled.Root>;
};

const Styled = {
  Root: styled.div`
    width: 32.9rem;
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
