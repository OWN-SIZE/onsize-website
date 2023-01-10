import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import theme from 'styles/theme';

function MenuBar() {
  const router = useRouter();

  return (
    <Styled.Root>
      <Link href="/home">
        <Styled.Menu isClicked={router.asPath === '/home' ? true : false}>나의 옷장</Styled.Menu>
      </Link>

      <Link href="/category">
        <Styled.Menu isClicked={router.asPath === '/category' ? true : false}>카테고리</Styled.Menu>
      </Link>
    </Styled.Root>
  );
}

export default MenuBar;

const Styled = {
  Root: styled.div`
    display: flex;

    width: 140.8rem;

    height: 6.1rem;
    margin: 0 auto;
    margin-top: 10.4rem;
    border-bottom: 0.3rem solid ${theme.colors.gray200};
    
  `,
  Menu: styled.button<{ isClicked: boolean }>`
    display: flex;
    align-items: baseline;

    height: 6.1rem;

    background: none;
    border: none;

    margin-right: 5rem;

    ${theme.fonts.title2};

    color: ${({ isClicked }) => (isClicked ? theme.colors.gray550 : theme.colors.gray300)};
    border-bottom: ${({ isClicked }) => (isClicked ? `0.3rem solid ${theme.colors.gray500}` : 0)};
  `,
};
