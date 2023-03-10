import { Dispatch, useRef, useState } from 'react';
import { BlackFolderIcon, Folder20Icon, GrayFolderIcon } from 'assets/icon';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { addCategoryModalState } from 'states/home';
import styled from 'styled-components';
import theme from 'styles/theme';

import { useFetchIncludeCategory, usePostIncludeCategoryMutation } from '@/hooks/queries/allCloset';
import { useFetchAllCategory } from '@/hooks/queries/category';

import CategoryCreateModal from '../common/modal/CategoryCreateModal';
import ModalPortal from '../common/modal/ModalPortal';

interface AddCategoryModalProps {
  productId: string;
  setIsCategoryModalOpen: Dispatch<React.SetStateAction<boolean>>;
  showToast?: (message: string) => void;
}
function AddCategoryModal(props: AddCategoryModalProps) {
  const { productId, setIsCategoryModalOpen, showToast } = props;
  const [isCategoryCreateModalOpen, setIsCategoryCreateModalOpen] = useRecoilState(addCategoryModalState);
  const [changeInputValue, setChangeInputValue] = useState('');
  const inputRef = useRef(null);

  let { category } = useFetchAllCategory();
  const includeCategoryData = useFetchIncludeCategory(productId);
  const { mutate: postIncludeCategory } = usePostIncludeCategoryMutation(productId);

  category = category?.sort((a, b) => {
    return Number(b.id) - Number(a.id);
  });

  const handleCategoryOnClick = (categoryId: string) => {
    postIncludeCategory({ postBody: { productId: productId, categoryId: categoryId } });
    setIsCategoryModalOpen(false);
    if (showToast) showToast('카테고리가 추가되었습니다.');
  };

  const onClickCategoryCreateModal = () => {
    setIsCategoryCreateModalOpen(!isCategoryCreateModalOpen);
  };

  const updateInputValue = (input: string) => {
    setChangeInputValue(input);
  };

  let categoryProduct = null;
  categoryProduct = category?.map((data) => (
    <Styled.Category
      key={data.id}
      className={includeCategoryData?.includes(Number(data.id)) ? 'disabled' : 'abled'}
      onClick={() => handleCategoryOnClick(data.id)}
      disabled={includeCategoryData?.includes(Number(data.id))}
    >
      <Image
        src={includeCategoryData?.includes(Number(data.id)) ? GrayFolderIcon : BlackFolderIcon}
        width={15}
        height={15}
        alt="카테고리 아이콘"
        priority
      />
      {data.categoryName.length > 12 ? `${data.categoryName.substring(0, 12)}...` : `${data.categoryName}`}
    </Styled.Category>
  ));

  return (
    <Styled.AddCategoryContainer>
      <Styled.MyCategory>나의 카테고리</Styled.MyCategory>
      <Styled.CategoryList>{categoryProduct}</Styled.CategoryList>
      <Styled.addCategoryButton onClick={onClickCategoryCreateModal}>
        <Image src={Folder20Icon} width={20} height={20} alt="카테고리 아이콘" priority />새 카테고리 만들기
      </Styled.addCategoryButton>
      {isCategoryCreateModalOpen && showToast && (
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
    </Styled.AddCategoryContainer>
  );
}

export default AddCategoryModal;

const Styled = {
  AddCategoryContainer: styled.div`
    position: absolute;

    top: 6.3rem;
    left: 1.6rem;

    width: 30rem;
    height: 42.4rem;

    border-radius: 1rem;

    z-index: 3;

    background-color: ${theme.colors.gray000};
    box-shadow: 0px 0px 10px 8px rgba(0, 0, 0, 0.05);

    &.false {
      display: none;
    }
  `,
  MyCategory: styled.header`
    margin-top: 2.9rem;
    margin-left: 2.3rem;

    ${theme.fonts.sizetag};
    color: ${theme.colors.gray550};
  `,
  CategoryList: styled.div`
    width: 25.5rem;
    height: 25.7rem;

    margin: 2.2rem auto 0;

    overflow-y: auto;
    overflow-x: hidden;
  `,
  Category: styled.button`
    display: flex;
    align-items: center;

    width: 25.5rem;
    height: 3.1rem;

    border-radius: 2.4rem;

    background: none;
    border: none;

    padding-left: 1.2rem;
    margin-bottom: 1.2rem;

    ${theme.fonts.body2};
    color: ${theme.colors.gray550};

    & > img {
      margin-right: 1.2rem;
    }

    &.disabled {
      color: ${theme.colors.gray300};
      cursor: default;
    }
    &.abled:hover {
      background-color: ${theme.colors.gray100};
    }
  `,
  addCategoryButton: styled.button`
    position: absolute;
    top: 34.5rem;
    left: 2.3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 25.5rem;
    height: 5rem;

    border: none;
    border-radius: 2.5rem;

    ${theme.fonts.card1};
    background-color: ${theme.colors.yellow01};

    & > img {
      margin-right: 1.2rem;
    }
  `,
};
