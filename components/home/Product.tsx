import styled from 'styled-components';
import theme from 'styles/theme';

import ThumbNail from './ThumbNail';

interface ProductProps {
  data: closetData;
}

interface closetData {
  id: string;
  image: string;
  productName: string;
  size: string | null;
  memo: string;
  mallName: string;
  isRecommend: boolean;
  isPin: boolean;
  link: string;
}

function Product(props: ProductProps) {
  //DummyData : id, image, productName, size, memo, mallName, isRecommend, isPin, link
  const { data } = props;
  return (
    <Styled.Card>
      <ThumbNail data={data} width="33.2" height="33.2" />
      <Styled.Title>제목제목제제목제목제목제목제목</Styled.Title>
      <Styled.Memo>메모메모메모메모메모메메모메모메모메모메모</Styled.Memo>
      <Styled.BrandSection>
        <Styled.BrandLogo />
        <Styled.BrandName>쇼핑몰명</Styled.BrandName>
      </Styled.BrandSection>
    </Styled.Card>
  );
}

export default Product;

const Styled = {
  Card: styled.article`
    width: 33.2rem;
    height: 58.3rem;

    margin-bottom: 8rem;
  `,
  HoverHideContainer: styled.div`
    & > img,
    div {
      position: absolute;
      z-index: 2;

      &#sizeIcon {
        left: 2.9rem;
      }

      &#pinIcon {
        right: 2.6rem;
        top: 2.4rem;
      }
    }
  `,
  SizeContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    left: 2.9rem;

    width: 7rem;
    height: 3.6rem;

    & > span {
      margin-right: 0.2rem;
      ${theme.fonts.sizetag};
      color: ${theme.colors.gray000};
    }
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
