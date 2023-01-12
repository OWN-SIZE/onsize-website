import React, { useState } from 'react';
import Hanger from 'assets/icon/total_clothes.png';
import { useFetchCategoryDetail } from 'hooks/queries/allCloset';
import { useUpdateCategory } from 'hooks/queries/category';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import theme from 'styles/theme';
import { AllCategory } from 'types/category/client';
import { ThumbNailData } from 'types/common';

import ThumbNail from '../common/ThumbNail/ThumbNail';

interface CategoryProps {
  categoryData: AllCategory;
}

export default function Category(props: CategoryProps) {
  const { categoryData } = props;
  const [isProductHovered, setIsProductHovered] = useState(false);

  let data = useFetchCategoryDetail(categoryData.id);

  const newArray: string[] | null = [];

  if (data) {
    data = data.sort((a: any, b: any) => {
      return Number(b.id) - Number(a.id);
    });
  }
  [0, 1, 2].map((item) => {
    if (data) {
      newArray.push(data[item]?.image);
    }
  });

  const { mutate: updateIsPin } = useUpdateCategory();

  const ThumbNailData: ThumbNailData = {
    id: categoryData.id,
    isPin: categoryData.isPinCategory,
    image: newArray,
    categoryName: categoryData.categoryName,
  };

  const handleOnMouseEnter = () => {
    setIsProductHovered(true);
  };

  const handleOnMouseLeave = () => {
    setIsProductHovered(false);
  };

  return (
    <Styled.Root>
      <Styled.Category>
        <Styled.CategoryImage>
          <ThumbNail
            data={ThumbNailData}
            categoryData={ThumbNailData}
            width="45.2"
            height="30.0"
            page="category"
            noAddCategory
            updateIsPin={updateIsPin}
            setIsProductHovered={setIsProductHovered}
          />
        </Styled.CategoryImage>
        <Link
          href={{ pathname: `/category/${categoryData.id}`, query: { categoryName: categoryData.categoryName } }}
          as={`/category/${categoryData.id}`}
        >
          <Styled.CategoryTitle
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            isProductHovered={isProductHovered}
          >
            {categoryData.categoryName}
          </Styled.CategoryTitle>
        </Link>
        <Styled.ClothesAmount>
          <Image
            src={Hanger}
            alt="디렉토리 내 옷의 개수를 뜻하는 옷걸이 이미지"
            width={40}
            height={40}
            placeholder="blur"
            blurDataURL="assets/icon/total_clothes.png"
          />
          <h1>{data && data.length}</h1>
        </Styled.ClothesAmount>
      </Styled.Category>
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div``,
  Category: styled.div`
    width: 45.2rem;
    height: 41.2rem;
    background-color: ${theme.colors.gray000};
    margin-left: 1.3rem;
    margin-right: 1.3rem;
    margin-bottom: 8rem;
  `,
  CategoryImage: styled.div`
    width: 45.2rem;
    height: 30rem;
    background-color: ${theme.colors.gray300};

    display: flex;
    border-radius: 1rem;
  `,
  CategoryTitle: styled.div<{ isProductHovered: boolean }>`
    width: 36.8rem;
    height: 3.2rem;
    ${theme.fonts.title3};
    color: ${theme.colors.gray550};
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;
    text-decoration: ${({ isProductHovered }) => (isProductHovered ? 'underline 0.2rem' : 'none')};
  `,
  ClothesAmount: styled.div`
    width: 36.8rem;
    height: 4rem;
    display: flex;
    & > h1 {
      ${theme.fonts.title4};
      color: ${theme.colors.gray400};
      margin-left: 1.6rem;
    }
  `,
  CategoryCreateModal: styled.div`
    margin-top: 4.6rem;
    margin-bottom: 4.6rem;
    width: 62.5rem;
    height: 10.8rem;
    & > h1 {
      ${theme.fonts.title4Semibold};
      color: ${theme.colors.gray550};
      margin-bottom: 1.6rem;
    }
    & > h6 {
      ${theme.fonts.caption};
      color: ${theme.colors.gray200};
      text-align: end;
      margin-bottom: 1.4rem;
    }
  `,
  CategoryNameInput: styled.input`
    width: 62.5rem;
    height: 6.5rem;
    border-radius: 0.5rem;
    border: 0.1rem solid ${theme.colors.gray350};
    padding-left: 2.4rem;
    ${theme.fonts.body1};
    color: ${theme.colors.gray550};
    ::-webkit-input-placeholder {
      ${theme.fonts.body1};
      color: ${theme.colors.gray250};
    }
  `,
};
