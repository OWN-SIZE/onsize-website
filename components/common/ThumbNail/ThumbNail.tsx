import { useState } from 'react';
import React from 'react';
import {
  AddCategoryCloseIcon,
  AddCategoryIcon,
  DeleteIcon,
  EditIcon,
  HoveredDeleteIcon,
  HoveredEditIcon,
  HoveredPinFillIcon,
  HoveredPinIcon,
  PinButonIcon,
  PinButtonFillIcon,
  PinIcon,
  RecommendedIcon,
  SizeIcon,
} from 'assets/icon';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import { ThumbNailData } from 'types/common';

import AddCategoryModal from '@/components/home/AddCategoryModal';
import ClosetDeleteModal from '@/components/home/ClosetDeleteModal';
import ClosetEditModal from '@/components/home/ClosetEditModal';
import { useUpdateAllClosetProductMutation } from '@/hooks/queries/allCloset';
import DeleteCategoryModal from 'components/category/DeleteCategoryModal';
import ModifyCategoryModal from 'components/category/ModifyCategoryModal';

import ModalPortal from '../modal/ModalPortal';

interface ThumbNailProps {
  data: ThumbNailData;
  width: string;
  height: string;
  noAddCategory?: boolean;
  page: string;
}

function ThumbNail(props: ThumbNailProps) {
  const { data, width, height, noAddCategory, page } = props;
  const [iconHoveredTarget, setIconHoveredTarget] = useState('');
  const [imgHoveredTarget, setImgHoveredTarget] = useState('');

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { mutate: updateIsPin } = useUpdateAllClosetProductMutation();

  const handleIconMousehover = (e: React.MouseEvent) => {
    setIconHoveredTarget(e.currentTarget.id);
  };

  const handleIconMouseLeave = () => {
    setIconHoveredTarget('');
  };

  const onClickDeleteCategoryModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
    setImgHoveredTarget('');
  };

  const onClickModifyCategoryModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
    setImgHoveredTarget('');
  };

  const handleOnClickPin = () => {
    updateIsPin({
      productId: data.id,
      editBody: { isPin: !data.isPin },
    });
  };

  return (
    <Styled.Root
      onMouseEnter={() => setImgHoveredTarget(data.id)}
      onMouseLeave={() => setImgHoveredTarget('')}
      id={data.id}
      width={width}
      height={height}
    >
      {/* 사이즈표와 오른쪽 상단 고정 표시 */}
      <Styled.HoverHideContainer className={isCategoryModalOpen || imgHoveredTarget === data.id ? 'hide' : ''}>
        {data.size && (
          <>
            <Image
              src={SizeIcon}
              id="sizeIcon"
              className={imgHoveredTarget === data.id ? 'hide' : ''}
              width={70}
              height={36}
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
            width={25}
            height={25}
            alt="고정된 상품 핀 아이콘"
          />
        )}
      </Styled.HoverHideContainer>
      {/* 기본 썸네일 */}
      {page === 'closet' ? (
        <Styled.ThumbNailImg className={'closet'} width={width} height={height} />
      ) : (
        <Styled.ThumbNailImg className={'category'} width={width} height={height}>
          <Image
            src=""
            alt="썸네일 이미지1"
            width={226}
            height={300}
            placeholder="blur"
            blurDataURL="assets/icon/folder_filled.png"
          />
          <div>
            <Image
              src=""
              alt="썸네일 이미지2"
              width={226}
              height={150}
              placeholder="blur"
              blurDataURL="assets/icon/folder_filled.png"
            />
            <Image
              src=""
              alt="썸네일 이미지3"
              width={226}
              height={150}
              placeholder="blur"
              blurDataURL="assets/icon/folder_filled.png"
            />
          </div>
        </Styled.ThumbNailImg>
      )}

      {/* 썸네일 호버시 코드 */}
      <Styled.HoverThumbNail
        className={isCategoryModalOpen || imgHoveredTarget === data.id ? 'show' : 'hide'}
        width={width}
        height={height}
      >
        {/* 카테고리 추가 */}
        {!noAddCategory && (
          <button onClick={() => setIsCategoryModalOpen(!isCategoryModalOpen)}>
            카테고리 추가
            <Image
              src={isCategoryModalOpen ? AddCategoryCloseIcon : AddCategoryIcon}
              width={16}
              height={9}
              alt="카테고리 추가 버튼 아이콘"
            />
          </button>
        )}
        {isCategoryModalOpen && <AddCategoryModal />}

        {/* 아이콘 */}
        <div className="iconContainer">
          {/* 고정 */}
          <Styled.IconCotainer id={`Pin`} onMouseEnter={handleIconMousehover} onMouseLeave={handleIconMouseLeave}>
            <Image src={data.isPin ? PinButtonFillIcon : PinButonIcon} width={40} height={40} alt="고정 버튼 아이콘" />
            <Image
              src={data.isPin ? HoveredPinFillIcon : HoveredPinIcon}
              className={iconHoveredTarget === `Pin` ? 'show' : 'hide'}
              onClick={handleOnClickPin}
              width={40}
              height={40}
              alt="호버된 고정 버튼 아이콘"
            />
          </Styled.IconCotainer>
          {/* 수정 */}
          <Styled.IconCotainer id={`Edit`} onMouseEnter={handleIconMousehover} onMouseLeave={handleIconMouseLeave}>
            <Image src={EditIcon} width={40} height={40} alt="수정 버튼 아이콘" />
            <Image
              src={HoveredEditIcon}
              className={iconHoveredTarget === `Edit` ? 'show' : 'hide'}
              onClick={() => setIsEditModalOpen(!isEditModalOpen)}
              width={40}
              height={40}
              alt="호버된 수정 버튼 아이콘"
            />
          </Styled.IconCotainer>
          {isEditModalOpen && (
            <ModalPortal>
              {page === ('closet' || 'categoryDeatil') ? (
                data.name && (
                  <ClosetEditModal
                    setIsModalOpen={setIsEditModalOpen}
                    setImgHoveredTarget={setImgHoveredTarget}
                    data={{ id: data.id, productName: data.name, size: data.size, memo: data.memo }}
                  />
                )
              ) : (
                <ModifyCategoryModal onClickModifyCategoryModal={onClickModifyCategoryModal}></ModifyCategoryModal>
              )}
            </ModalPortal>
          )}
          {/* 삭제 */}
          <Styled.IconCotainer id={`Delete`} onMouseEnter={handleIconMousehover} onMouseLeave={handleIconMouseLeave}>
            <Image src={DeleteIcon} width={40} height={40} alt="삭제 버튼 아이콘" />
            <Image
              src={HoveredDeleteIcon}
              className={iconHoveredTarget === `Delete` ? 'show' : 'hide'}
              onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
              width={40}
              height={40}
              alt="호버된 삭제 버튼 아이콘"
            />
          </Styled.IconCotainer>
          {isDeleteModalOpen && (
            <ModalPortal>
              {page === 'closet' ? (
                <ClosetDeleteModal
                  productId={data.id}
                  categoryId={data.categoryId}
                  page={page}
                  isModalOpen={isDeleteModalOpen}
                  setIsModalOpen={setIsDeleteModalOpen}
                  setImgHoveredTarget={setImgHoveredTarget}
                />
              ) : (
                <DeleteCategoryModal onClickDeleteCategoryModal={onClickDeleteCategoryModal}></DeleteCategoryModal>
              )}
            </ModalPortal>
          )}
        </div>
      </Styled.HoverThumbNail>
    </Styled.Root>
  );
}

export default ThumbNail;

const Styled = {
  Root: styled.div<{ width: string; height: string }>`
    position: relative;

    & > img {
      position: absolute;
      top: 2.4rem;
      right: 2.6rem;
    }
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
        top: -0.3rem;
        left: 2.9rem;
      }

      &#pinIcon {
        right: 2.6rem;
        top: 2.4rem;
      }
    }
  `,
  IconCotainer: styled.div`
    position: relative;
    width: 4rem;
    height: 4rem;

    cursor: pointer;

    & > .hide {
      display: none;
    }

    & > :nth-child(2) {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
    }
  `,
  ThumbNailImg: styled.div<{ width: string; height: string }>`
    width: ${({ width }) => `${width}rem`};
    height: ${({ height }) => `${height}rem`};

    border-radius: 1rem;

    &.closet {
      background-color: ${theme.colors.gray250};
    }

    &.category {
      background-color: pink;
      display: flex;
    }
  `,
  SizeContainer: styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;

    top: -0.3rem;
    left: 2.9rem;

    width: 7rem;
    height: 3.6rem;

    z-index: 2;

    & > span {
      margin-right: 0.2rem;
      ${theme.fonts.sizetag};
      color: ${theme.colors.gray000};
    }
  `,
  /* hover시 스타일링 */
  HoverThumbNail: styled.div<{ width: string; height: string }>`
    &.hide {
      display: none;
    }

    &.show {
      position: absolute;
      top: 0;
      width: ${({ width }) => `${width}rem`};
      height: ${({ height }) => `${height}rem`};
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

        & > img {
          width: 1.6rem;
          height: 0.9rem;
        }
      }

      & > .iconContainer {
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
