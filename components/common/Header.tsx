import styled from 'styled-components';

function Header() {
  return (
    <Styled.Root>
      <Styled.TopSection>
        <Styled.LogoImg />
        <Styled.RightSection>
          <Styled.InfoButton></Styled.InfoButton>
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

    background-color: #b4b4b4;

    text-align: center;
  `,

  TopSection: styled.div`
    display: flex;
    justify-content: space-between;
  `,

  LogoImg: styled.div`
    width: 6rem;
    height: 6rem;
    background-color: gray;

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

    border: solid 1px black;
  `,

  InfoButton: styled.button`
    width: 5rem;
    height: 5rem;

    cursor: pointer;
  `,

  Profile: styled.button`
    width: 6rem;
    height: 6rem;
    border-radius: 4.7rem;
    border: none;

    cursor: pointer;
  `,

  MySizeButton: styled.button`
    width: 42.2rem;
    height: 7rem;

    border-radius: 3.5rem;
    border: none;

    margin-top: 12rem;

    font-size: 4rem;

    cursor: pointer;
  `,
};
