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

export default function HoverIcon(props: HoverIconProps) {
  const [iconHovered, setIconHovered] = useState('');
  const { isPin, itemId } = props;
  const handleMousehover = (e: React.MouseEvent) => {
    setIconHovered(e.currentTarget.id);
  };

  const handleMouseLeave = () => {
    setIconHovered('');
  };

  return (
    <div>
      {isPin ? (
        <Styled.IconCotainer id={`${itemId}Pin`} onMouseEnter={handleMousehover} onMouseLeave={handleMouseLeave}>
          <Image src={PinButtonFillIcon} alt="고정 해제 버튼 아이콘" />
          <Image
            src={HoveredPinFillIcon}
            className={iconHovered === `${itemId}Pin` ? 'show' : 'hide'}
            alt="호버된 고정 해제 버튼 아이콘"
          />
        </Styled.IconCotainer>
      ) : (
        <Styled.IconCotainer id={`${itemId}Pin`} onMouseEnter={handleMousehover} onMouseLeave={handleMouseLeave}>
          <Image src={PinButonIcon} alt="고정 버튼 아이콘" />
          <Image
            src={HoveredPinIcon}
            className={iconHovered === `${itemId}Pin` ? 'show' : 'hide'}
            alt="호버된 고정 버튼 아이콘"
          />
        </Styled.IconCotainer>
      )}
      <Styled.IconCotainer id={`${itemId}Edit`} onMouseEnter={handleMousehover} onMouseLeave={handleMouseLeave}>
        <Image src={EditIcon} alt="편집 버튼 아이콘" />
        <Image
          src={HoveredEditIcon}
          className={iconHovered === `${itemId}Edit` ? 'show' : 'hide'}
          alt="호버된 편집 버튼 아이콘"
        />
      </Styled.IconCotainer>
      <Styled.IconCotainer id={`${itemId}Delete`} onMouseEnter={handleMousehover} onMouseLeave={handleMouseLeave}>
        <Image src={DeleteIcon} alt="삭제 버튼 아이콘" />
        <Image
          src={HoveredDeleteIcon}
          className={iconHovered === `${itemId}Delete` ? 'show' : 'hide'}
          alt="호버된 삭제 버튼 아이콘"
        />
      </Styled.IconCotainer>
    </div>
  );
}

const Styled = {
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
