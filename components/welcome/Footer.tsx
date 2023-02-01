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

    width: 100%;
    height: 17rem;
    background-color: ${theme.colors.gray100};
  `,
  Title: styled.h1`
    @media (min-width: 375px) and (max-width: 600px) {
      ${theme.fonts.title3};
      margin-top: 4.8rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
    }
  `,
  Email: styled.span`
    @media (min-width: 375px) and (max-width: 600px) {
      ${theme.fonts.body2_DSB};
      color: ${theme.colors.gray400};
      margin-top: 2rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
    }
  `,
};
