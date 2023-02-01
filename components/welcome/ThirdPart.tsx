import { useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

interface browserProps {
  browser: string;
}
function ThirdPart(props: browserProps) {
  const [isActive, setIsActive] = useState(false);
  const { browser } = props;
  return (
    <Styled.Root>
      <Styled.Section>
        <Styled.H1>OWNSIZE가 준비되면 가장 먼저 알려드릴게요</Styled.H1>
        <Styled.emailLabel>Email</Styled.emailLabel>
        <Styled.emailInput type="text" />
        <Styled.submitButton type={'submit'} value="신청하기" className={isActive ? 'active' : 'inactive'} />
      </Styled.Section>
    </Styled.Root>
  );
}

export default ThirdPart;

const Styled = {
  Root: styled.div`
    width: 100%;
  `,
  Section: styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.black};
    @media (min-width: 375px) and (max-width: 600px) {
      padding: 4.3rem 2rem 0;
      height: 37.6rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
    }
  `,
  H1: styled.h1`
    color: ${theme.colors.yellow01};
    @media (min-width: 375px) and (max-width: 600px) {
      width: 22rem;

      font-family: 'Arial';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 38px;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
    }
  `,
  emailLabel: styled.label`
    color: ${theme.colors.yellow01};
    @media (min-width: 375px) and (max-width: 600px) {
      ${theme.fonts.body2_DSB};
      margin-top: 4.2rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
    }
  `,
  emailInput: styled.input`
    display: flex;
    align-items: center;

    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 0.5rem;
    color: ${theme.colors.lightGrey};
    &:focus {
      outline: none;
    }
    @media (min-width: 375px) and (max-width: 600px) {
      ${theme.fonts.body4};
      margin-top: 2rem;
      padding: 0 1.4rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
    }
  `,
  submitButton: styled.input`
    ${theme.fonts.body2_DSB};
    margin: 0 auto;
    &.inactive {
      background: none;
      color: ${theme.colors.yellow01};
      border: 0.1rem solid ${theme.colors.yellow01};
    }
    &.active {
      color: ${theme.colors.black};
      background-color: ${theme.colors.yellow01};
      border: none;
    }
    @media (min-width: 375px) and (max-width: 600px) {
      ${theme.fonts.body2_DSB};
      margin-top: 4.2rem;
      width: 9.9rem;
      height: 4.2rem;
      border-radius: 0.5rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
    }
  `,
};
