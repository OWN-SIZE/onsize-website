import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import theme from 'styles/theme';

import { chromeWebStoreIcon } from '@/assets/icon';
import { Landing3rdImg } from '@/assets/img';

function ThirdPart() {
  const [isHovered, setIsHovered] = useState(false);
  const STORE_LINK =
    'https://chrome.google.com/webstore/detail/%EC%98%A8%EC%82%AC%EC%9D%B4%EC%A6%88-ownsize/bnidejblffigjfdilnppamoabdpdhmfh?hl=ko&authuser=1';

  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.H1>
          클릭 한 번으로 찾는 내 사이즈! <br />
          지금 시작하세요
        </Styled.H1>

        <Link
          href={STORE_LINK}
          className={isHovered ? 'hovered' : ''}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          target="_blank"
        >
          <Image src={chromeWebStoreIcon} alt="크롬 웹스토어 아이콘" width={36} height={34} priority />
          Chrome 웹스토어 바로가기
        </Link>

        <Image src={Landing3rdImg} alt="배경 이미지" width={1081} height={572} placeholder="blur" priority />
      </Styled.Container>
    </Styled.Root>
  );
}

export default ThirdPart;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    background-color: ${theme.colors.lightGrey};
    @media (min-width: 350px) and (max-width: 600px) {
      height: 38.8rem;
      width: 100%;
    }
    @media (min-width: 601px) {
      height: 104.6rem;
      width: 100%;
    }
  `,
  Container: styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    align-items: center;
    background-color: ${theme.colors.black};

    width: 100%;

    @media (min-width: 350px) and (max-width: 600px) {
      height: 37.6rem;
    }
    @media (min-width: 601px) {
      height: 101.9rem;
    }

    & > a {
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      z-index: 3;

      &.hovered {
        background-color: ${theme.colors.yellow};
        box-shadow: 0rem 0.4rem 1.6rem rgba(251, 242, 108, 0.45);
      }
      background: ${theme.colors.yellow01};

      & > img {
        margin-right: 1.5rem;
      }

      @media (min-width: 350px) and (max-width: 600px) {
        width: 23.4rem;
        height: 4.8rem;
        top: 44.6rem;

        border-radius: 0.5rem;
        ${theme.fonts.card1};
      }
      @media (min-width: 601px) {
        width: 34.7rem;
        height: 6.4rem;
        top: 29.5rem;

        border-radius: 2rem;

        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 2.5rem;
      }

      cursor: pointer;
    }

    & > img {
      margin-top: auto;
    }
  `,

  H1: styled.h1`
    text-align: center;

    color: ${theme.colors.yellow01};
    @media (min-width: 350px) and (max-width: 600px) {
      width: 21rem;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 3.2rem;
    }
    @media (min-width: 601px) {
      margin-top: 14rem;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 4.4rem;
      line-height: 6rem;
    }
  `,
};
