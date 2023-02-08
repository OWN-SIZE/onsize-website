import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

import { usePostEmail } from '@/hooks/queries/welcome';

function ThirdPart() {
  const [emailValue, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const { mutate: postEmail } = usePostEmail();
  const handleOnClick = () => {
    postEmail({ email: emailValue });
    setIsSubmitted(true);
  };

  return (
    <Styled.Root>
      <Styled.Container>
        {!isSubmitted ? (
          <Styled.Section>
            <Styled.H1>OWNSIZE가 준비되면 가장 먼저 알려드릴게요</Styled.H1>
            <Styled.EmailContainer>
              <Styled.EmailLabel>Email</Styled.EmailLabel>
              <Styled.EmailInput type="text" value={emailValue} onChange={handleOnChange} />
            </Styled.EmailContainer>
            <Styled.submitButton
              type={'button'}
              value="신청하기"
              className={emailValue ? 'active' : 'inactive'}
              onClick={handleOnClick}
            />
          </Styled.Section>
        ) : (
          <Styled.SubmitFinished>사전신청이 완료됐어요!</Styled.SubmitFinished>
        )}
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

    background-color: ${theme.colors.lightGrey};
    @media (min-width: 375px) and (max-width: 600px) {
      height: 38.8rem;
      width: 100%;
    }
    @media (min-width: 1024px) {
      height: 89.7rem;
      width: 100%;
    }
    @media (min-width: 1600px) {
      height: 89.7rem;
      width: 85%;
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
    @media (min-width: 1024px) {
      height: 87rem;
    }
  `,
  Section: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 375px) and (max-width: 600px) {
      width: 33.5rem;
      height: 27.6rem;

      margin-top: 4.3rem;
    }
    @media (min-width: 1024px) {
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
      font-size: 2rem;
      line-height: 3.8rem;
    }
    @media (min-width: 1024px) {
      margin-top: 14.5rem;

      font-family: 'Arial';
      font-style: normal;
      font-weight: 700;
      font-size: 4rem;
      line-height: 4.6rem;
    }
  `,
  EmailContainer: styled.div`
    @media (min-width: 375px) and (max-width: 600px) {
      width: 33.5rem;
      height: 8.5rem;

      margin-top: 4.2rem;
    }
    @media (min-width: 1024px) {
      width: 93rem;
      height: 22rem;

      margin-top: 11rem;
    }
  `,
  EmailLabel: styled.label`
    color: ${theme.colors.yellow01};
    @media (min-width: 375px) and (max-width: 600px) {
      ${theme.fonts.body2_DSB};
    }
    @media (min-width: 1024px) {
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 3.8rem;
      line-height: 5.2rem;
    }
  `,
  EmailInput: styled.input`
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
    @media (min-width: 1024px) {
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 3.8rem;
      line-height: 5.2rem;

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
      cursor: pointer;
    }
    @media (min-width: 375px) and (max-width: 600px) {
      ${theme.fonts.body2_DSB};
      margin-top: 4.2rem;
      width: 9.9rem;
      height: 4.2rem;
      border-radius: 0.5rem;
    }
    @media (min-width: 1024px) {
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 600;
      font-size: 3.8rem;
      line-height: 5.2rem;

      margin-top: 11.8rem;
      width: 23.9rem;
      height: 10.8rem;
      border-radius: 1rem;
    }
  `,
  SubmitFinished: styled.div`
    color: ${theme.colors.yellow01};
    margin: auto 0;
    @media (min-width: 375px) and (max-width: 600px) {
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 3.8rem;
    }
    @media (min-width: 1024px) {
      font-family: 'Arial';
      font-style: normal;
      font-weight: 700;
      font-size: 4rem;
      line-height: 4.6rem;
    }
  `,
};