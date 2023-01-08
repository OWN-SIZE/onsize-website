import React from 'react';
import { closetData, ThumbNailData } from 'types/common';
import ThumbNail from '../common/ThumbNail/ThumbNail';
import styled from 'styled-components';
import theme from 'styles/theme';
import Image from 'next/image';
import Folder from 'assets/icon/folder_filled.png';
import Add from 'assets/icon/add.png';
import Hanger from 'assets/icon/total_clothes.png';
import Link from 'next/link';


interface ProductProps {
  data: closetData;
}

export default function Category(props: ProductProps) {
  const { data } = props;

  const ThumbNailData: ThumbNailData = {
    id: data.id,
    isPin: data.isPin,
  };

  return (
    <Styled.Root>
      <Styled.Category>
        <Styled.CategoryImage>
          <ThumbNail data={ThumbNailData} width="45.2" height="30.0" page="category" noAddCategory />
        </Styled.CategoryImage>
        <Link href="/category/:categoryId">
          <Styled.CategoryTitle>봄 가을 스커트</Styled.CategoryTitle>
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
          <h1>3</h1>
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
    background-color: ${theme.colors.gray150};
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
  CategoryTitle: styled.div`
    width: 36.8rem;
    height: 3.2rem;
    ${theme.fonts.title3};
    color: ${theme.colors.gray550};
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;
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
