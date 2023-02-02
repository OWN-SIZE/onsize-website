import Lottie from 'lottie-react';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import { mobileFaceImg, speechBubbleImg } from '@/assets/img';

import saveLottie from '../../assets/lottie/save.json';
import sizeLottie from '../../assets/lottie/size.json';

interface browserProps {
  browser: string;
}
function SecondPart(props: browserProps) {
  const { browser } = props;

  return (
    <Styled.Root>
      <Styled.Section className="first">
        <Styled.Title className="first">온라인 쇼핑, 무엇이 제일 불편했나요?</Styled.Title>
        <Image src={speechBubbleImg} className="speechBubble" alt="말풍선" />
        <Image src={mobileFaceImg} className="face" alt="고민하는 얼굴" />
        <span>
          온라인 의류 쇼핑,
          <br />
          사이즈 실패가 지겨워요
        </span>
      </Styled.Section>
      <Styled.Section className="second">
        <Styled.coreFunction>사이즈 추천</Styled.coreFunction>
        <Styled.Title className="second">쉽게 추천받는 나의 사이즈</Styled.Title>
        <Lottie animationData={sizeLottie} className="lottie" width={283} height={176} />
      </Styled.Section>
      <Styled.Section className="third">
        <Styled.coreFunction>나의 옷장</Styled.coreFunction>
        <Styled.Title className="third">클릭 한번으로 저장하는 관심 의류</Styled.Title>
        <Lottie animationData={saveLottie} className="lottie" />
      </Styled.Section>
    </Styled.Root>
  );
}

export default SecondPart;

const Styled = {
  Root: styled.div`
    width: 100%;
  `,
  Section: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 4.6rem;

    & > span {
      position: absolute;
      z-index: 2;
    }

    & > .lottie {
      margin-top: 4rem;
    }

    &.first {
      align-items: center;
      background-color: ${theme.colors.lightGrey};

      @media (min-width: 375px) and (max-width: 600px) {
        height: 32.9rem;
        & > img {
          &.speechBubble {
            margin-top: 2.8rem;
          }
          &.face {
            margin-top: 1.2rem;
          }
        }
        & > span {
          top: 11.25rem;

          font-family: 'Noto Sans';
          font-style: normal;
          font-weight: 500;
          font-size: 1.6rem;
          line-height: 2.2rem;
          text-align: center;
        }
      }
      @media (min-width: 1024px) and (max-width: 1728px) {
        /* height: 111.7rem; */
      }
    }
    &.second {
      background-color: #fffcce;
      height: 36.8rem;
    }
    &.third {
      background-color: ${theme.colors.gray000};
      height: 36.8rem;
    }

    @media (min-width: 375px) and (max-width: 600px) {
      height: 32.9rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      /* height: 111.7rem; */
    }
  `,
  Title: styled.h1`
    @media (min-width: 375px) and (max-width: 600px) {
      ${theme.fonts.caption1};
      margin-top: 2rem;
      &.first {
        margin-top: 4rem;
      }
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      /* height: 111.7rem; */
    }
  `,
  coreFunction: styled.header`
    color: ${theme.colors.gray400};

    @media (min-width: 375px) and (max-width: 600px) {
      ${theme.fonts.body2_DSB};
      margin-top: 4.2rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      /* height: 111.7rem; */
    }
  `,
};
