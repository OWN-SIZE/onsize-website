import styled from 'styled-components';
import theme from 'styles/theme';

function Footer() {
  const FEEDBACK_URL =
    'https://docs.google.com/forms/d/e/1FAIpQLSfHXvABOrKUtbROS1Qm3pm-YdQG4_9QwoXMiucclvOsz7VrMQ/viewform?usp=sf_link';
  const ABOUT_OWNSIZE_URL = 'https://golden-rib-2f1.notion.site/Help-Support-9db0af92af7949d2b251e3be5dfdde98';
  const PRIVACY_URL = 'https://golden-rib-2f1.notion.site/7171b098f7c94b04b136702f24e198b6';
  const INSTAGRAM_URL = 'https://www.instagram.com/ownsize_official/';
  const linkProduct = [
    { url: FEEDBACK_URL, text: '피드백' },
    { url: ABOUT_OWNSIZE_URL, text: 'ABOUT OWNSIZE' },
    { url: PRIVACY_URL, text: '개인정보처리방침' },
    { url: INSTAGRAM_URL, text: '인스타그램' },
  ].map((item) => {
    return (
      <a href={item.url} target={'_blank'} rel="noreferrer" key={item.text}>
        {item.text}
      </a>
    );
  });
  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.Title>OWNSIZE</Styled.Title>
        <Styled.RightSection>{linkProduct}</Styled.RightSection>
        <Styled.Contact>
          contact <span>ownsizeofficial@gmail.com</span>
        </Styled.Contact>
      </Styled.Container>
    </Styled.Root>
  );
}

export default Footer;

const Styled = {
  Root: styled.footer`
    margin-top: auto;
    width: 100%;

    background-color: ${theme.colors.gray100};
  `,
  Container: styled.div`
    position: relative;

    width: 140.8rem;
    height: 25rem;

    margin: 0 auto;
  `,
  Title: styled.h1`
    position: absolute;
    top: 5.2rem;
    left: 0;

    ${theme.fonts.button1};
    color: ${theme.colors.gray550};
  `,
  RightSection: styled.section`
    position: absolute;
    top: 7rem;
    right: 0;

    display: flex;
    justify-content: space-between;

    width: 60.3rem;
    height: 2.5rem;

    & > a {
      ${theme.fonts.caption1};
      color: ${theme.colors.gray300};

      cursor: pointer;
    }
  `,
  Contact: styled.div`
    position: absolute;

    left: 0;
    top: 11.6rem;

    ${theme.fonts.caption1};
    color: ${theme.colors.gray300};

    & > span {
      ${theme.fonts.body2};
    }
  `,
};
