import styled from 'styled-components';
import theme from 'styles/theme';

interface browserProps {
  browser: string;
}
function Footer(props: browserProps) {
  const { browser } = props;
  return (
    <Styled.Root>
      <Styled.Title>Contact</Styled.Title>
      <Styled.Email>ownsizeofficial@gmail.com</Styled.Email>
    </Styled.Root>
  );
}

export default Footer;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${theme.colors.gray100};

    width: 100%;
    @media (min-width: 375px) and (max-width: 600px) {
      height: 17rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      height: 53.1rem;
    }
  `,
  Title: styled.h1`
    @media (min-width: 375px) and (max-width: 600px) {
      ${theme.fonts.title3};
      margin-top: 4.8rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 44px;
      line-height: 60px;

      margin-top: 16.9rem;
    }
  `,
  Email: styled.span`
    color: ${theme.colors.gray400};

    @media (min-width: 375px) and (max-width: 600px) {
      ${theme.fonts.body2_DSB};
      margin-top: 2rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 44px;
      line-height: 60px;

      margin-top: 5.7rem;
    }
  `,
};
