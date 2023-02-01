import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import { ArrowImg, LandingPageImg, mobileBackgroundImg, OwnSizeLogoImg } from '@/assets/img';

function FirstSection() {
  const [browserKind, setBrowserKind] = useState('');

  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth <= 600 && window.innerWidth >= 375) setBrowserKind('mobile');
      else if (window.innerWidth <= 1728 && window.innerWidth >= 1024) setBrowserKind('desktop');
      else setBrowserKind('');
    };
    window.addEventListener('resize', resizeListener);
  });

  return (
    <Styled.Root>
      <Styled.Section>
        <Image src={OwnSizeLogoImg} className="logo" width={94} height={94} alt="온사이즈 로고" />
        {browserKind === 'mobile' ? (
          <Image src={mobileBackgroundImg} className="backgroundImg" alt="랜딩 페이지 배경화면" />
        ) : (
          <Image src={LandingPageImg} className="backgroundImg" alt="랜딩 페이지 배경화면" />
        )}
        <Styled.BackgroundBlur />
        <Styled.IntroText>나에게 맞는 의류 사이즈, OWNSIZE에서 클릭 한번으로</Styled.IntroText>
        <Styled.goToApply>사전신청 바로가기</Styled.goToApply>
        {browserKind === 'mobile' ? (
          <Styled.guideToDesktop>온사이즈는 PC에서 이용해주세요</Styled.guideToDesktop>
        ) : (
          <Image src={ArrowImg} className="arrow" alt="회색 화살표 이미지" />
        )}
      </Styled.Section>
    </Styled.Root>
  );
}

export default FirstSection;

const Styled = {
  Root: styled.div`
    width: 100%;
    background-color: ${theme.colors.black};

    @media (min-width: 375px) and (max-width: 600px) {
      height: 57rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      height: 111.7rem;
    }
  `,

  Section: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    margin: 0 auto;

    /* 모바일 */
    @media (min-width: 375px) and (max-width: 600px) {
      width: 100%;
      height: 57rem;

      & > img {
        position: absolute;
        &.backgroundImg {
          left: 0;
          margin-top: 10.8rem; //수정 필요
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
    @media (min-width: 1024px) and (max-width: 1728px) {
      width: 172.8rem;
      height: 111.7rem;

      & > img {
        position: absolute;
        &.backgroundImg {
          left: 0;
          margin-top: 12.6rem;
        }
        &.logo {
          z-index: 3;
          top: 2.3rem;
          left: 16rem;
        }
        &.arrow {
          z-index: 3;
          top: 102.5rem;
        }
      }
    }
  `,
  goToApply: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    z-index: 3;

    background: ${theme.colors.yellow01};
    box-shadow: 0 0 1rem rgba(251, 242, 108, 0.5);

    @media (min-width: 375px) and (max-width: 600px) {
      width: 23.4rem;
      height: 4.8rem;
      top: 44.6rem;

      border-radius: 5px;
      ${theme.fonts.card1};
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      width: 45.3rem;
      height: 9.2rem;
      top: 87rem;

      border-radius: 10px;
      ${theme.fonts.title2};
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

    @media (min-width: 375px) and (max-width: 600px) {
      width: 28rem;
      top: 34rem;

      margin: 0 auto;

      text-align: center;

      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 3.2rem;
    }

    @media (min-width: 1024px) and (max-width: 1728px) {
      left: 28.9rem;
      top: 71rem;

      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 5rem;
      line-height: 6.8rem;
    }
  `,
};
