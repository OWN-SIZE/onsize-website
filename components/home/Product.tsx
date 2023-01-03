import styled from 'styled-components';
import theme from 'styles/theme';

export default function Product() {
  return (
    <Styled.Card>
      <Styled.ThumbNail />
      <Styled.Title>제목제목제제목제목제목제목제목</Styled.Title>
      <Styled.Memo>메모메모메모메모메모메메모메모메모메모메모</Styled.Memo>
      <Styled.BrandSection>
        <Styled.BrandLogo />
        <Styled.BrandName>쇼핑몰명</Styled.BrandName>
      </Styled.BrandSection>
    </Styled.Card>
  );
}

const Styled = {
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
