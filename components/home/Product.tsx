import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import { ClosetOutput } from 'types/allCloset/client';
import { ThumbNailData } from 'types/common';

import ThumbNail from '@/components/common/ThumbNail/ThumbNail';
import { useUpdateAllClosetProductMutation, useUpdateIsInPinMutation } from '@/hooks/queries/allCloset';

interface ProductProps {
  data: ClosetOutput;
  page: string;
  categoryId?: string;
  showToast: (message: string) => void;
}

function Product(props: ProductProps) {
  const { data, page, categoryId, showToast } = props;
  const [isProductHovered, setIsProductHovered] = useState(false);
  let targetCategoryId = '';
  if (categoryId) {
    targetCategoryId = categoryId;
  }

  const ThumbNailData: ThumbNailData = {
    id: String(data.id),
    categoryId: categoryId,
    image: data.image,
    name: data.productName,
    size: data.size,
    memo: data.memo,
    isRecommend: data.isRecommend,
    isPin: data.isPin,
    isInPin: data.isInPin,
    productUrl: data.productUrl,
  };
  const { mutate: updateIsPIn } = useUpdateAllClosetProductMutation('');
  const { mutate: updateIsInPin } = useUpdateIsInPinMutation(targetCategoryId);

  const handleOnMouseEnter = () => {
    setIsProductHovered(true);
  };

  const handleOnMouseLeave = () => {
    setIsProductHovered(false);
  };

  return (
    <Styled.Root>
      {page === 'closet' ? (
        <ThumbNail
          data={ThumbNailData}
          width="33.2"
          height="33.2"
          page="closet"
          updateIsPin={updateIsPIn}
          setIsProductHovered={setIsProductHovered}
        />
      ) : (
        categoryId && (
          <ThumbNail
            data={ThumbNailData}
            width="33.2"
            height="33.2"
            page="categoryDetail"
            categoryId={categoryId}
            updateIsPin={updateIsInPin}
            setIsProductHovered={setIsProductHovered}
            noAddCategory
          />
        )
      )}
      <a href={data.productUrl} target={'_blank'} rel="noreferrer">
        <Styled.Title
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          isProductHovered={isProductHovered}
        >
          {data.productName}
        </Styled.Title>
      </a>
      <Styled.Memo>{data.memo}</Styled.Memo>
      <a href={data.productUrl} target={'_blank'} rel="noreferrer">
        <Styled.BrandSection onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
          {data.faviconUrl ? (
            <Image src={data.faviconUrl} width={50} height={50} alt="쇼핑몰 로고" />
          ) : (
            <Styled.BrandLogo />
          )}
          <Styled.BrandName>{data.mallName}</Styled.BrandName>
        </Styled.BrandSection>
      </a>
    </Styled.Root>
  );
}

export default Product;
const Styled = {
  Root: styled.article`
    position: relative;
    width: 33.2rem;
    height: 58.3rem;
    margin-bottom: 8rem;
    padding-top: 0.3rem;
    &:not(:nth-child(4n)) {
      margin-right: 2.6rem;
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
  Title: styled.h1<{ isProductHovered: boolean }>`
    height: 6.4rem;
    margin-top: 1.6rem;
    color: ${theme.colors.gray550};
    ${theme.fonts.title3};

    text-decoration: ${({ isProductHovered }) => (isProductHovered ? 'underline 0.2rem' : 'none')};
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
    width: 100%;
    height: 5rem;

    & > img {
      border-radius: 0.5rem;
      margin-right: 1.2rem;
    }
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
