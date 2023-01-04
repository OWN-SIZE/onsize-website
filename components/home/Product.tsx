import { useState } from 'react';
import { AddCategoryIcon, PinIcon, RecommendedIcon, SizeIcon } from 'assets/icon';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import HoverIcon from './HoverIcon';

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

function Product() {
  //DummyData : id, image, productName, size, memo, mallName, isRecommend, isPin, link
  const data: closetData = {
    id: '62daeb7e82b56574bf940e54',
    image:
      'https://norefund-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8D%E1%85%A1%E1%86%AF.png',
    productName: '아끼는옷',
    size: 'XL',
    memo: '어쩌구저쩌구',
    mallName: '무신사',
    isRecommend: false,
    isPin: true,
    link: 'https://www.musinsa.com/app/goods/2194649?loc=goods_rank',
  };
  const [imgHoveredTarget, setImgHoveredTarget] = useState('');

  const handleMousehover = (e: React.MouseEvent) => {
    setImgHoveredTarget(e.currentTarget.id);
  };

  const handleMouseLeave = () => {
    setImgHoveredTarget('');
  };
  return (
    <Styled.Card>
      <Styled.HoverHideContainer className={imgHoveredTarget === data.id ? 'hide' : ''}>
        {data.size && (
          <>
            <Image
              src={SizeIcon}
              id="sizeIcon"
              className={imgHoveredTarget === data.id ? 'hide' : ''}
              alt="사이즈 표시"
            />

            <Styled.SizeContainer className={imgHoveredTarget === data.id ? 'hide' : ''}>
              <span>{data.size}</span>
              {data.isRecommend && <Image src={RecommendedIcon} alt="추천 받은 사이즈 표시" />}
            </Styled.SizeContainer>
          </>
        )}

        {data.isPin && (
          <Image
            src={PinIcon}
            id="pinIcon"
            className={imgHoveredTarget === data.id ? 'hide' : ''}
            alt="고정된 상품 핀 아이콘"
          />
        )}
      </Styled.HoverHideContainer>
      <Styled.ThumbNail onMouseEnter={handleMousehover} onMouseLeave={handleMouseLeave} id={data.id}>
        <Styled.ThumbNailImg />
        <Styled.HoverThumbNail className={imgHoveredTarget === data.id ? 'show' : 'hide'}>
          <button>
            카테고리 추가
            <Image src={AddCategoryIcon} alt="카테고리 추가 버튼 아이콘" />
          </button>
          <HoverIcon isPin={data.isPin} itemId={data.id} />
        </Styled.HoverThumbNail>
      </Styled.ThumbNail>
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
    position: relative;
    width: 33.2rem;
    height: 58.3rem;

    margin-bottom: 8rem;

    & > .hide {
      visibility: hidden;
    }
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
  ThumbNail: styled.div`
    position: relative;

    margin-top: 0.3rem;

    width: 33.2rem;
    height: 33.2rem;

    & > img {
      position: absolute;
      top: 2.4rem;
      right: 2.6rem;
    }
  `,
  ThumbNailImg: styled.div`
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

  /* hover시 스타일링 */
  HoverThumbNail: styled.div`
    &.hide {
      display: none;
    }

    &.show {
      position: absolute;
      top: 0;

      width: 33.2rem;
      height: 33.2rem;
      border-radius: 1rem;

      background-color: ${theme.colors.card_hover};

      & > button {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 14.2rem;
        height: 2.7rem;

        top: 2rem;
        left: 2.6rem;

        border: none;
        background: none;

        ${theme.fonts.title3};
        color: ${theme.colors.gray000};

        cursor: pointer;
      }

      & > div {
        position: absolute;
        bottom: 1.6rem;
        right: 2.6rem;

        display: flex;
        justify-content: space-between;

        width: 13.6rem;
        height: 4rem;
      }
    }
  `,
};
