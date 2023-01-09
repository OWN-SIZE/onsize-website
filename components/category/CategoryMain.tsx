import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import Folder from 'assets/icon/folder_filled.png';
import Add from 'assets/icon/add.png';
import Category from './Category';
import CategoryCreateModal from 'components/common/modal/CategoryCreateModal';
import ModalPortal from 'components/common/modal/ModalPortal';
import { useFetchAllCategory } from 'hooks/queries/category';
import { AllCategory } from 'types/category/client';

export default function CategoryMain() {
  let { category } = useFetchAllCategory();

  const [isCategoryCreateModalOpen, setIsCategoryCreateModalOpen] = useState(false);
  const [changeInputValue, setChangeInputValue] = useState('');
  const inputRef = useRef(null);

  const onClickCategoryCreateModal = () => {
    setIsCategoryCreateModalOpen(!isCategoryCreateModalOpen);
  };
  const updateInputValue = (input: string) => {
    setChangeInputValue(input);
  };

  const orderSort = (item: AllCategory[]) => {
    return item.sort((a, b) => {
      return Number(b.id) - Number(a.id);
    });
  };

  if (category) {
    const pinData: AllCategory[] = orderSort(category.filter((category) => category.isPinCategory === true));
    const noPinData: AllCategory[] = orderSort(category.filter((category) => category.isPinCategory === false));
    category = pinData.concat(noPinData);
  }

  if (!category) return;
  const product = category.map((item) => <Category key={item.id} data={item} />);

  return (
    <Styled.Root>
      <Styled.CategoryContainer>
        <Styled.CategoryStateBar>
          <Image
            src={Folder}
            alt="디렉토리 개수를 뜻하는 폴더 이미지"
            width={40}
            height={40}
            placeholder="blur"
            blurDataURL="assets/icon/folder_filled.png"
          />
          <h1>{category.length}</h1>
          <Image
            src={Add}
            alt="폴더 추가를 뜻하는 더하기 이미지"
            width={30}
            height={30}
            placeholder="blur"
            blurDataURL="assets/icon/folder_filled.png"
            onClick={onClickCategoryCreateModal}
          />
        </Styled.CategoryStateBar>
        {product}
      </Styled.CategoryContainer>
      {isCategoryCreateModalOpen && (
        <ModalPortal>
          <CategoryCreateModal
            changeInputValue={changeInputValue}
            updateInputValue={updateInputValue}
            inputRef={inputRef}
            onClickCategoryCreateModal={onClickCategoryCreateModal}
          />
        </ModalPortal>
      )}
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${theme.colors.gray000};
  `,
  CategoryContainer: styled.div`
    width: 143.4rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  `,
  CategoryStateBar: styled.div`
    width: 140.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
    padding-bottom: 5rem;

    & > h1 {
      ${theme.fonts.title4}
      color: ${theme.colors.gray350};
      margin-left: 1.6rem;
      margin-right: 127.3rem;
    }
  `,
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
