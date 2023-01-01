import { InfoIcon } from 'assets/icon';
import Image from 'next/image';
import router from 'next/router';
import styled from 'styled-components';
import theme from 'styles/theme';

function Header() {
  return (
    <Styled.Root>
      <Styled.TopSection>
        <Styled.LogoImg onClick={() => router.push('/home')} />
        <Styled.RightSection>
          <Styled.InfoButton>
            <Image src={InfoIcon} alt="튜토리얼 보기 아이콘" />
          </Styled.InfoButton>
          <Styled.Profile></Styled.Profile>
        </Styled.RightSection>
      </Styled.TopSection>
      <Styled.MySizeButton>My Size</Styled.MySizeButton>
    </Styled.Root>
  );
}

export default Header;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 26.6rem;

    background-color: #d9d9d9;

    text-align: center;

    /* margin-bottom: 7rem; */
  `,

  TopSection: styled.div`
    display: flex;
    justify-content: space-between;
  `,

  LogoImg: styled.div`
    width: 6rem;
    height: 6rem;
    background-color: #8e8e8e;

    margin-left: 16rem;
    margin-top: 3rem;
  `,

  RightSection: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 13.2rem;
    height: 7rem;

    margin-right: 16rem;
    margin-top: 4rem;
  `,

  InfoButton: styled.button`
    width: 5rem;
    height: 5rem;

    background: none;
    border: none;

    cursor: pointer;
  `,

  Profile: styled.button`
    width: 6rem;
    height: 6rem;
    border-radius: 4.7rem;

    border: none;
    background-color: #c2c2c2;

    cursor: pointer;
  `,

  MySizeButton: styled.button`
    width: 42.2rem;
    height: 7rem;

    border-radius: 3.5rem;
    border: none;

    margin-top: 12rem;

    ${theme.fonts.button1};
    color: ${theme.colors.gray350};

    box-shadow: 0 0 1rem 0.8rem rgba(0, 0, 0, 0.05);

    cursor: pointer;
  `,
};
