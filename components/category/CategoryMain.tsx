import React, { useRef,useState } from 'react';
import Add from 'assets/icon/add.png';
import Folder from 'assets/icon/folder_filled.png';
import Hanger from 'assets/icon/total_clothes.png';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import Modal from 'components/common/Modal';
import CategoryCreateModal from 'components/common/modal/CategoryCreateModal';
import ModalPortal from 'components/common/modal/ModalPortal';
import ThumbNail from 'components/common/ThumbNail/ThumbNail';

import Category from './Category';

interface DirectoryDataType {
  id: string;
  memo: string;
  mallName: string;
  isPin: boolean;
}

export default function CategoryMain() {
  const [isCategoryCreateModalOpen, setIsCategoryCreateModalOpen] = useState(false);
  const [changeInputValue, setChangeInputValue] = useState(0);
  const inputRef = useRef(null);

  const onClickCategoryCreateModal = () => {
    setIsCategoryCreateModalOpen(!isCategoryCreateModalOpen);
  };
  const updateInputValue = (length: number) => {
    setChangeInputValue(length);
  };

  const data: DirectoryDataType[] = [
    {
      id: '62daeb7e82b56574bf940e54',
      memo: '어쩌구저쩌구',
      mallName: '무신사',
      isPin: true,
    },
    {
      id: '62daeb7e82b56574bf940e55',
      memo: '살까말까',
      mallName: '무신사',
      isPin: false,
    },
    {
      id: '62daeb7e82b56574bf940e56',
      memo: '색 이쁨',
      mallName: '무신사',
      isPin: true,
    },
  ];
  const product = data.map((item) => <Category key={item.id} data={item} />);

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
          <h1>0</h1>
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
