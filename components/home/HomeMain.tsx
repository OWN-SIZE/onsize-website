import { ClosetIcon } from 'assets/icon';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

export default function HomeMain() {
  const product = [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
    <Styled.Card key={item} className={item === 4 || item === 8 ? 'noMargin' : `${item}`}>
      <Styled.ThumbNail />
      <Styled.Title>제목제목제제목제목제목제목제목</Styled.Title>
      <Styled.Memo>메모메모메모메모메모메메모메모메모메모메모</Styled.Memo>
      <Styled.BrandSection>
        <Styled.BrandLogo />
        <Styled.BrandName>쇼핑몰명</Styled.BrandName>
      </Styled.BrandSection>
    </Styled.Card>
  ));
  return (
    <Styled.Container>
      <Styled.CountSection>
        <Image src={ClosetIcon} alt="나의 옷장 옷 개수 아이콘" />
        <Styled.Count>4</Styled.Count>
      </Styled.CountSection>
      <Styled.Closet>{product}</Styled.Closet>
    </Styled.Container>
  );
}

// 시맨틱 태그 다시 확인
const Styled = {
  Container: styled.div`
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

    justify-content: space-between;
    margin-top: 5rem;

    & .noMargin {
      margin-right: 0;
    }
  `,
  Card: styled.article`
    width: 33.2rem;
    height: 58rem;

    margin-bottom: 8rem;
  `,
  ThumbNail: styled.div`
    width: 33.2rem;
    height: 33.2rem;

    border-radius: 1rem;

    background-color: ${theme.colors.gray250};
  `,
  Title: styled.h1`
    height: 6.4rem;

    margin-top: 1.6rem;

    color: ${theme.colors.gray550};
    ${theme.fonts.title3};
  `,
  Memo: styled.h2`
    height: 6.4rem;

    margin-top: 1.2rem;

    color: ${theme.colors.gray550};
    ${theme.fonts.caption};
  `,
  BrandSection: styled.footer`
    display: flex;
    align-items: center;

    margin-top: 4rem;

    width: 12.9rem;
    height: 5rem;
  `,
  BrandLogo: styled.div`
    width: 5rem;
    height: 5rem;

    margin-right: 1.2rem;

    border-radius: 0.5rem;

    background-color: ${theme.colors.gray200};
  `,
  BrandName: styled.h1`
    ${theme.fonts.title5Semibold};
    color: ${theme.colors.gray400};
  `,
};
