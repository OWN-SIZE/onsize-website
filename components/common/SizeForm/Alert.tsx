import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

interface AlertProps {
  isAlert?: boolean;
  message: string;
}

function Alert(props: AlertProps) {
  const { isAlert, message } = props;
  return <Styled.Root>{isAlert && message}</Styled.Root>;
}

export default Alert;

const Styled = {
  Root: styled.div`
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 44rem;
    min-height: 15.2rem;

    background: #ffffff;
    border: 0.1rem solid ${theme.colors.gray150};
  `,
};
