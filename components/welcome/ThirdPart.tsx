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
      <Styled.Container>
        <Styled.Section>
          <Styled.H1>OWNSIZE가 준비되면 가장 먼저 알려드릴게요</Styled.H1>
          <Styled.emailContainer>
            <Styled.emailLabel>Email</Styled.emailLabel>
            <Styled.emailInput type="text" />
          </Styled.emailContainer>
          <Styled.submitButton type={'submit'} value="신청하기" className={isActive ? 'active' : 'inactive'} />
        </Styled.Section>
      </Styled.Container>
    </Styled.Root>
  );
}

export default ThirdPart;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;

    background-color: ${theme.colors.lightGrey};
    @media (min-width: 375px) and (max-width: 600px) {
      height: 38.8rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      height: 100.4rem;
    }
  `,
  Container: styled.div`
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.black};

    width: 100%;

    @media (min-width: 375px) and (max-width: 600px) {
      height: 37.6rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      height: 100.4rem;
    }
  `,
  Section: styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 375px) and (max-width: 600px) {
      width: 33.5rem;
      height: 27.6rem;

      margin-top: 4.3rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      height: 100.4rem;
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
      margin-top: 17.2rem;

      font-family: 'Arial';
      font-style: normal;
      font-weight: 700;
      font-size: 50px;
      line-height: 57px;
    }
  `,
  emailContainer: styled.div`
    @media (min-width: 375px) and (max-width: 600px) {
      width: 33.5rem;
      height: 8.5rem;

      margin-top: 4.2rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      width: 100%;
      height: 22rem;

      margin-top: 15.7rem;
    }
  `,
  emailLabel: styled.label`
    color: ${theme.colors.yellow01};
    @media (min-width: 375px) and (max-width: 600px) {
      ${theme.fonts.body2_DSB};
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 38px;
      line-height: 52px;
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

      width: 100%;
      margin-top: 2rem;
      padding: 0 1.4rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 38px;
      line-height: 52px;

      width: 100%;
      height: 10.8rem;
      border-radius: 1rem;
      margin-top: 6rem;
      padding: 0 3.6rem;
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
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 38px;
      line-height: 52px;

      margin-top: 11.8rem;
      width: 23.9rem;
      height: 10.8rem;
      border-radius: 1rem;
    }
  `,
};
