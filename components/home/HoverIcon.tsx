import { Dispatch, SetStateAction, useState } from 'react';
import {
  AddCategoryIcon,
  DeleteIcon,
  EditIcon,
  HoveredDeleteIcon,
  HoveredEditIcon,
  HoveredPinFillIcon,
  HoveredPinIcon,
  PinButonIcon,
  PinButtonFillIcon,
} from 'assets/icon';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

interface HoverIconProps {
  data: closetData;
  imgHoveredTarget: string;
  setImgHoveredTarget: Dispatch<SetStateAction<string>>;
  width: string;
  height: string;
}

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

function HoverIcon(props: HoverIconProps) {
  const [iconHoveredTarget, setIconHoveredTarget] = useState('');
  const { data, imgHoveredTarget, setImgHoveredTarget, width, height } = props;
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

  return (
    <Styled.Root
      onMouseEnter={handleImgMousehover}
      onMouseLeave={handleImgMouseLeave}
      id={data.id}
      width={width}
      height={height}
    >
      <Styled.ThumbNailImg width={width} height={height} />
      <Styled.HoverThumbNail className={imgHoveredTarget === data.id ? 'show' : 'hide'} width={width} height={height}>
        <button>
          카테고리 추가
          <Image src={AddCategoryIcon} alt="카테고리 추가 버튼 아이콘" />
        </button>
        <div>
          {data.isPin ? (
            <Styled.IconCotainer
              id={`${data.id}Pin`}
              onMouseEnter={handleIconMousehover}
              onMouseLeave={handleIconMouseLeave}
            >
              <Image src={PinButtonFillIcon} alt="고정 해제 버튼 아이콘" />
              <Image
                src={HoveredPinFillIcon}
                className={iconHoveredTarget === `${data.id}Pin` ? 'show' : 'hide'}
                alt="호버된 고정 해제 버튼 아이콘"
              />
            </Styled.IconCotainer>
          ) : (
            <Styled.IconCotainer
              id={`${data.id}Pin`}
              onMouseEnter={handleIconMousehover}
              onMouseLeave={handleIconMouseLeave}
            >
              <Image src={PinButonIcon} alt="고정 버튼 아이콘" />
              <Image
                src={HoveredPinIcon}
                className={iconHoveredTarget === `${data.id}Pin` ? 'show' : 'hide'}
                alt="호버된 고정 버튼 아이콘"
              />
            </Styled.IconCotainer>
          )}

          <Styled.IconCotainer
            id={`${data.id}Edit`}
            onMouseEnter={handleIconMousehover}
            onMouseLeave={handleIconMouseLeave}
          >
            <Image src={EditIcon} alt="편집 버튼 아이콘" />
            <Image
              src={HoveredEditIcon}
              className={iconHoveredTarget === `${data.id}Edit` ? 'show' : 'hide'}
              alt="호버된 편집 버튼 아이콘"
            />
          </Styled.IconCotainer>

          <Styled.IconCotainer
            id={`${data.id}Delete`}
            onMouseEnter={handleIconMousehover}
            onMouseLeave={handleIconMouseLeave}
          >
            <Image src={DeleteIcon} alt="삭제 버튼 아이콘" />
            <Image
              src={HoveredDeleteIcon}
              className={iconHoveredTarget === `${data.id}Delete` ? 'show' : 'hide'}
              alt="호버된 삭제 버튼 아이콘"
            />
          </Styled.IconCotainer>
        </div>
      </Styled.HoverThumbNail>
    </Styled.Root>
  );
}

export default HoverIcon;

const Styled = {
  Root: styled.div<{ width: string; height: string }>`
    position: relative;

    margin-top: 0.3rem;

    width: ${({ width }) => `${width}rem`};
    height: ${({ height }) => `${height}rem`};

    & > img {
      position: absolute;
      top: 2.4rem;
      right: 2.6rem;
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

    background-color: ${theme.colors.gray250};
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
