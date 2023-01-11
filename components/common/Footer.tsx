import styled from 'styled-components';
import theme from 'styles/theme';

function Footer() {
  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.Title>OWNSIZE</Styled.Title>
        <Styled.RightSection>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfHXvABOrKUtbROS1Qm3pm-YdQG4_9QwoXMiucclvOsz7VrMQ/viewform?usp=sf_link"
            target={'_blank'}
            rel="noreferrer"
          >
            피드백
          </a>
          <a
            href="https://golden-rib-2f1.notion.site/Help-Support-9db0af92af7949d2b251e3be5dfdde98"
            target={'_blank'}
            rel="noreferrer"
          >
            ABOUT OWNSIZE
          </a>
          <a
            href="https://golden-rib-2f1.notion.site/fe544d3a20054510b8acb233179e0d87"
            target={'_blank'}
            rel="noreferrer"
          >
            개인정보처리방침
          </a>
          <a href="https://www.instagram.com/ownsize_official/" target={'_blank'} rel="noreferrer">
            인스타그램
          </a>
        </Styled.RightSection>
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
