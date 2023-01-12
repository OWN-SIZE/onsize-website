import { CategoryDetailFirstClosetIcon, ClosetIcon } from 'assets/icon';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

function CategoryDetailFirst() {
  return (
    <Styled.Root>
      <Styled.CountSection>
        <Image src={ClosetIcon} alt="나의 옷장 옷 개수 아이콘" />
        <Styled.Count>0</Styled.Count>
      </Styled.CountSection>
      <Styled.BlankLanding>
        <Image src={CategoryDetailFirstClosetIcon} alt="옷걸이 아이콘" />
        카테고리 의류가 비어있어요
      </Styled.BlankLanding>
    </Styled.Root>
  );
}

export default CategoryDetailFirst;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    width: 140.6rem;
    margin: 5rem auto 0;
  `,

  CountSection: styled.div`
    display: flex;
  `,
  Count: styled.p`
    margin-left: 1.6rem;
    color: ${theme.colors.gray350};
    ${theme.fonts.title4};
  `,
  Closet: styled.section`
    display: flex;
    flex-wrap: wrap;
    margin-top: 5rem;
  `,

  BlankLanding: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 32.5rem;
    height: 13.5rem;

    margin: 9.5rem auto 34.1rem;

    ${theme.fonts.title4};
    color: ${theme.colors.gray550};
  `,
};
