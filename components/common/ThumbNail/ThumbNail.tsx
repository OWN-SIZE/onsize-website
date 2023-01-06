import { useState } from 'react';
import {
  AddCategoryCloseIcon,
  AddCategoryIcon,
  BlackFolderIcon,
  DeleteIcon,
  EditIcon,
  Folder20Icon,
  GrayFolderIcon,
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

interface ThumbNailProps {
  data: ThumbNailData;
  width: string;
  height: string;
  noSizeTag?: boolean;
  noAddCategory?: boolean;
  page: string;
}

function ThumbNail(props: ThumbNailProps) {
  const { data, width, height, noSizeTag, noAddCategory, page } = props;
  const [iconHoveredTarget, setIconHoveredTarget] = useState('');
  const [imgHoveredTarget, setImgHoveredTarget] = useState('');
  const [isModalShown, setIsModalShown] = useState(false);

  const handleImgMousehover = (e: React.MouseEvent) => {
    setImgHoveredTarget(e.currentTarget.id);
  };

  const handleImgMouseLeave = () => {
    setImgHoveredTarget('');
  };

  const handleIconMousehover = (e: React.MouseEvent) => {
    setIconHoveredTarget(e.currentTarget.id);
  };

  const handleIconMouseLeave = () => {
    setIconHoveredTarget('');
  };

  const handleOnClick = () => {
    setIsModalShown(!isModalShown);
  };

  const categoryName = '카테고리명카테고리명';
  const category = categoryName.substring(0, 9);

  return (
    <Styled.Root
      onMouseEnter={handleImgMousehover}
      onMouseLeave={handleImgMouseLeave}
      id={data.id}
      width={width}
      height={height}
    >
      <Styled.HoverHideContainer className={isModalShown ? 'hide' : imgHoveredTarget === data.id ? 'hide' : ''}>
        {!noSizeTag && data.size && (
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

      <Styled.ThumbNailImg className={page === 'closet' ? 'closet' : 'category'} width={width} height={height} />

      <Styled.HoverThumbNail
        className={isModalShown ? 'show' : imgHoveredTarget === data.id ? 'show' : 'hide'}
        width={width}
        height={height}
      >
        {!noAddCategory && (
          <button onClick={handleOnClick}>
            카테고리 추가
            <Image src={isModalShown ? AddCategoryCloseIcon : AddCategoryIcon} alt="카테고리 추가 버튼 아이콘" />
          </button>
        )}

        <Styled.AddCategoryContainer className={String(isModalShown)}>
          <Styled.MyCategory>나의 카테고리</Styled.MyCategory>
          <Styled.CategoryList>
            <Styled.Category className="disabled">
              <Image src={GrayFolderIcon} alt="카테고리 아이콘" />
              {`${category}...`}
            </Styled.Category>
            <Styled.Category>
              <Image src={BlackFolderIcon} alt="카테고리 아이콘" />
              카테고리명카테고리...
            </Styled.Category>
            <Styled.Category>
              <Image src={BlackFolderIcon} alt="카테고리 아이콘" />
              카테고리명카테고리...
            </Styled.Category>
          </Styled.CategoryList>
          <Styled.addCategoryButton>
            <Image src={Folder20Icon} alt="카테고리 아이콘" />새 카테고리 만들기
          </Styled.addCategoryButton>
        </Styled.AddCategoryContainer>

        <div className="iconContainer">
          <Styled.IconCotainer id={`Pin`} onMouseEnter={handleIconMousehover} onMouseLeave={handleIconMouseLeave}>
            <Image src={data.isPin ? PinButtonFillIcon : PinButonIcon} alt="고정 해제 버튼 아이콘" />
            <Image
              src={data.isPin ? HoveredPinFillIcon : HoveredPinIcon}
              className={iconHoveredTarget === `Pin` ? 'show' : 'hide'}
              alt="호버된 고정 해제 버튼 아이콘"
            />
          </Styled.IconCotainer>

          <Styled.IconCotainer id={`Edit`} onMouseEnter={handleIconMousehover} onMouseLeave={handleIconMouseLeave}>
            <Image src={EditIcon} alt="편집 버튼 아이콘" />
            <Image
              src={HoveredEditIcon}
              className={iconHoveredTarget === `Edit` ? 'show' : 'hide'}
              alt="호버된 편집 버튼 아이콘"
            />
          </Styled.IconCotainer>

          <Styled.IconCotainer id={`Delete`} onMouseEnter={handleIconMousehover} onMouseLeave={handleIconMouseLeave}>
            <Image src={DeleteIcon} alt="삭제 버튼 아이콘" />
            <Image
              src={HoveredDeleteIcon}
              className={iconHoveredTarget === `Delete` ? 'show' : 'hide'}
              alt="호버된 삭제 버튼 아이콘"
            />
          </Styled.IconCotainer>
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
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    width: 25.5rem;

    margin: 2.2rem auto 0;
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

    cursor: pointer;

    & > img {
      margin-right: 1.2rem;
    }

    &.disabled {
      color: ${theme.colors.gray300};
    }
    &:hover {
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

    cursor: pointer;

    & > img {
      margin-right: 1.2rem;
    }
  `,
};
