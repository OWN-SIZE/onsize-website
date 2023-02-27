import React, { useRef, useState } from 'react';
import Add from 'assets/icon/add.png';
import EmptyFolder from 'assets/icon/emptyFolder.png';
import Folder from 'assets/icon/folder_filled.png';
import { useFetchCategoryDetail } from 'hooks/queries/allCloset';
import { useFetchAllCategory } from 'hooks/queries/category';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import { AllCategory } from 'types/category/client';

import CategoryCreateModal from 'components/common/modal/CategoryCreateModal';
import ModalPortal from 'components/common/modal/ModalPortal';
import { Toast } from 'components/common/Toast/Toast';
import useToast from 'components/common/Toast/useToast';

import Category from './Category';

export default function CategoryMain() {
  let { category } = useFetchAllCategory();

  const [isCategoryCreateModalOpen, setIsCategoryCreateModalOpen] = useState(false);
  const [changeInputValue, setChangeInputValue] = useState('');
  const inputRef = useRef(null);

  const { isOpenToast, message, showToast } = useToast();

  const onClickCategoryCreateModal = () => {
    setIsCategoryCreateModalOpen(!isCategoryCreateModalOpen);
  };
  const updateInputValue = (input: string) => {
    setChangeInputValue(input);
  };

  const orderSortById = (item: AllCategory[]) => {
    return item.sort((a, b) => {
      return Number(b.id) - Number(a.id);
    });
  };
  const orderSortByTime = (item: AllCategory[]) => {
    return item.sort((a, b) => {
      return Number(b.updateCategoryAt) - Number(a.updateCategoryAt);
    });
  };

  if (category) {
    const pinData: AllCategory[] = orderSortByTime(category.filter((category) => category.isPinCategory === true));
    const noPinData: AllCategory[] = orderSortById(category.filter((category) => category.isPinCategory === false));
    category = pinData.concat(noPinData);
  }

  const product =
    category && category.map((item) => <Category key={item.id} categoryData={item} showToast={showToast} />);

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
          <h1>{category && category.length}</h1>
          <Styled.AddButton>
            <Image
              src={Add}
              alt="폴더 추가를 뜻하는 더하기 이미지"
              width={30}
              height={30}
              placeholder="blur"
              blurDataURL="assets/icon/folder_filled.png"
              onClick={onClickCategoryCreateModal}
            />
          </Styled.AddButton>
        </Styled.CategoryStateBar>
        {category && category.length === 0 ? (
          <Styled.ZeroCategory>
            <Image
              src={EmptyFolder}
              alt="빈 폴더임을 의미하는 이미지"
              width={60}
              height={60}
              placeholder="blur"
              blurDataURL="assets/icon/folder_filled.png"
            />
            <p>카테고리를 만들어보세요</p>
          </Styled.ZeroCategory>
        ) : (
          product
        )}
      </Styled.CategoryContainer>
      {isCategoryCreateModalOpen && (
        <ModalPortal>
          <CategoryCreateModal
            changeInputValue={changeInputValue}
            updateInputValue={updateInputValue}
            inputRef={inputRef}
            onClickCategoryCreateModal={onClickCategoryCreateModal}
            showToast={showToast}
          />
        </ModalPortal>
      )}
      {isOpenToast && (
        <Styled.ToastContainer>
          <Toast width="42.6" message={message} />
        </Styled.ToastContainer>
      )}
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    background-color: ${theme.colors.gray000};
    margin: 0 auto;
  `,
  CategoryContainer: styled.div`
    width: 143.4rem;
    min-height: 66rem;
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
  ZeroCategory: styled.div`
    ${theme.fonts.title4};
    color: ${theme.colors.gray550};
    padding-top: 9.5rem;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 34.1rem;
    & > p {
      margin-top: 4rem;
    }
  `,
  AddButton: styled.div`
    cursor: pointer;
  `,
  ToastContainer: styled.div`
    position: fixed;
    bottom: 5.2rem;
    z-index: 15;
    display: flex;
    align-items: center;
    margin-left: 50.4rem;
  `,
};
