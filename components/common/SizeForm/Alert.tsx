import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

interface AlertProps {
  message: string;
}

function Alert(props: AlertProps) {
  const { message } = props;
  return (
    <Styled.Root isAlert={message.length > 0}>
      {message}
      <br />
      다시 입력해 주세요.
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
    padding: 0 2.6rem;
    background: #ffffff;
    border: 0.1rem solid ${theme.colors.gray150};
    box-shadow: 0.4rem 0.4rem 1rem rgba(217, 217, 217, 0.2);
    border-radius: 0.5rem;
    color: ${theme.colors.black};
    ${theme.fonts.caption};
  `,
};
