import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import theme from 'styles/theme';

import { chromeWebStoreIcon } from '@/assets/icon';
import { ArrowImg, desktopBackgroundImg, mobileBackgroundImg, OwnSizeLogoImg } from '@/assets/img';

function FirstPart() {
  const [isHovered, setIsHovered] = useState(false);
  const [browserKind, setBrowserKind] = useState('');

  const STORE_LINK =
    'https://chrome.google.com/webstore/detail/%EC%98%A8%EC%82%AC%EC%9D%B4%EC%A6%88-ownsize/bnidejblffigjfdilnppamoabdpdhmfh?hl=ko&authuser=1';

  const mobile = useMediaQuery({
    query: '(min-width : 375px) and (max-width:600px)',
  });
  const desktop = useMediaQuery({
    query: '(min-width : 601px)',
  });

  useEffect(() => {
    if (mobile) setBrowserKind('mobile');
    else if (desktop) setBrowserKind('desktop');
    else setBrowserKind('');
  }, [mobile, desktop]);

  return (
    <Styled.Root>
      <Styled.Section>
        <Image src={OwnSizeLogoImg} className="logo" alt="온사이즈 로고" placeholder="blur" priority />
        {browserKind === 'mobile' ? (
          <Image
            src={mobileBackgroundImg}
            className="backgroundImg"
            alt="랜딩 페이지 배경화면"
            placeholder="blur"
            priority
          />
        ) : (
          <Image
            src={desktopBackgroundImg}
            className="backgroundImg"
            alt="랜딩 페이지 배경화면"
            placeholder="blur"
            priority
          />
        )}
        <Styled.BackgroundBlur />
        <Styled.IntroText>
          나에게 맞는 의류 사이즈, <span className="ownsizeText">OWNSIZE</span>에서 클릭 한 번으로
        </Styled.IntroText>

        <Link
          href={STORE_LINK}
          className={isHovered ? 'hovered' : ''}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          target="_blank"
        >
          <Image src={chromeWebStoreIcon} alt="크롬 웹스토어 아이콘" priority />
          Chrome 웹스토어 바로가기
        </Link>

        {browserKind === 'mobile' && <Styled.guideToDesktop>온사이즈는 PC에서 이용해 주세요</Styled.guideToDesktop>}
        {browserKind === 'desktop' && (
          <Image src={ArrowImg} className="arrow" alt="회색 화살표 이미지" placeholder="blur" priority />
        )}
      </Styled.Section>
    </Styled.Root>
  );
}

export default FirstPart;

const Styled = {
  Root: styled.div`
    background-color: ${theme.colors.black};

    @media (min-width: 350px) and (max-width: 600px) {
      height: 57rem;
      width: 100%;
    }
    @media (min-width: 601px) {
      height: 111.7rem;
      width: 100%;
    }
  `,

  Section: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    margin: 0 auto;

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
        @media (min-width: 350px) and (max-width: 600px) {
          width: 2.4rem;
          height: 2.3rem;

          margin-right: 1rem;
        }
        @media (min-width: 601px) {
          width: 3.6rem;
          height: 3.4rem;

          margin-right: 1.5rem;
        }
      }

      @media (min-width: 350px) and (max-width: 600px) {
        width: 23.4rem;
        height: 4.8rem;
        top: 44.6rem;

        border-radius: 1.3rem;

        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 2.5rem;
      }
      @media (min-width: 601px) {
        width: 34.7rem;
        height: 6.4rem;
        top: 75.7rem;

        border-radius: 2rem;

        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 2.5rem;
      }

      cursor: pointer;
    }

    /* 모바일 */
    @media (min-width: 350px) and (max-width: 600px) {
      height: 57rem;

      & > img {
        position: absolute;
        &.backgroundImg {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          object-fit: cover;
        }
        &.logo {
          z-index: 3;

          top: 4.4rem;
          left: 1.1rem;

          width: 5.4rem;
          height: 5.4rem;
        }
      }
    }
    /* 데스크탑 */
    @media (min-width: 601px) {
      height: 111.7rem;

      & > img {
        position: absolute;
        &.backgroundImg {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          object-fit: cover;
        }
        &.logo {
          z-index: 3;
          top: 2.4rem;
          left: 7rem;

          width: 9.4rem;
          height: 9.4rem;
        }
        &.arrow {
          z-index: 3;
          top: 94.7rem;
        }
      }
    }
  `,
  guideToDesktop: styled.div`
    position: absolute;
    z-index: 3;
    top: 51.6rem;

    ${theme.fonts.caption};
    color: ${theme.colors.lightGrey};
  `,
  BackgroundBlur: styled.div`
    position: absolute;
    top: 0;
    z-index: 2;

    width: 100%;
    height: 100%;

    background-color: rgba(30, 32, 37, 0.4);
  `,
  IntroText: styled.h1`
    position: absolute;
    z-index: 3;
    color: ${theme.colors.yellow};

    @media (min-width: 350px) and (max-width: 600px) {
      width: 28rem;
      top: 34rem;

      margin: 0 auto;

      text-align: center;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 3.2rem;

      & > .ownsizeText {
        font-family: 'Arial';
        font-style: normal;
        font-weight: 700;
        font-size: 2rem;
        line-height: 3.2rem;
      }
    }

    @media (min-width: 601px) and (max-width: 1054px) {
      width: 60rem;
      top: 62.9rem;

      text-align: center;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 600;
      font-size: 4.4rem;
      line-height: 6rem;

      & > .ownsizeText {
        font-family: 'Arial';
        font-style: normal;
        font-weight: 700;
        font-size: 4.4rem;
        line-height: 5.1rem;
      }
    }
    @media (min-width: 1055px) {
      top: 64.9rem;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 600;
      font-size: 4.4rem;
      line-height: 6rem;

      & > .ownsizeText {
        font-family: 'Arial';
        font-style: normal;
        font-weight: 700;
        font-size: 4.4rem;
        line-height: 5.1rem;
      }
    }
  `,
};
