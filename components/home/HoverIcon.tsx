import { useState } from 'react';
import {
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

interface HoverIconProps {
  isPin: boolean;
  itemId: string;
}

function HoverIcon(props: HoverIconProps) {
  const [iconHoveredTarget, setIconHoveredTarget] = useState('');
  const { isPin, itemId } = props;
  const handleMousehover = (e: React.MouseEvent) => {
    setIconHoveredTarget(e.currentTarget.id);
  };

  const handleMouseLeave = () => {
    setIconHoveredTarget('');
  };

  return (
    <Styled.Root>
      {isPin ? (
        <Styled.IconCotainer id={`${itemId}Pin`} onMouseEnter={handleMousehover} onMouseLeave={handleMouseLeave}>
          <Image src={PinButtonFillIcon} alt="고정 해제 버튼 아이콘" />
          <Image
            src={HoveredPinFillIcon}
            className={iconHoveredTarget === `${itemId}Pin` ? 'show' : 'hide'}
            alt="호버된 고정 해제 버튼 아이콘"
          />
        </Styled.IconCotainer>
      ) : (
        <Styled.IconCotainer id={`${itemId}Pin`} onMouseEnter={handleMousehover} onMouseLeave={handleMouseLeave}>
          <Image src={PinButonIcon} alt="고정 버튼 아이콘" />
          <Image
            src={HoveredPinIcon}
            className={iconHoveredTarget === `${itemId}Pin` ? 'show' : 'hide'}
            alt="호버된 고정 버튼 아이콘"
          />
        </Styled.IconCotainer>
      )}
      <Styled.IconCotainer id={`${itemId}Edit`} onMouseEnter={handleMousehover} onMouseLeave={handleMouseLeave}>
        <Image src={EditIcon} alt="편집 버튼 아이콘" />
        <Image
          src={HoveredEditIcon}
          className={iconHoveredTarget === `${itemId}Edit` ? 'show' : 'hide'}
          alt="호버된 편집 버튼 아이콘"
        />
      </Styled.IconCotainer>
      <Styled.IconCotainer id={`${itemId}Delete`} onMouseEnter={handleMousehover} onMouseLeave={handleMouseLeave}>
        <Image src={DeleteIcon} alt="삭제 버튼 아이콘" />
        <Image
          src={HoveredDeleteIcon}
          className={iconHoveredTarget === `${itemId}Delete` ? 'show' : 'hide'}
          alt="호버된 삭제 버튼 아이콘"
        />
      </Styled.IconCotainer>
    </Styled.Root>
  );
}

export default HoverIcon;

const Styled = {
  Root: styled.div``,
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
};
