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
        <Styled.Container className="first">
          <Styled.Title className="first">온라인 쇼핑, 무엇이 제일 불편했나요?</Styled.Title>
          <Image src={speechBubbleImg} className="speechBubble" alt="말풍선" />
          <Image src={mobileFaceImg} className="face" alt="고민하는 얼굴" />
          <span>
            반복되는 사이즈 실패,
            <br />
            교환, 환불 과정이 지겨워요
          </span>
        </Styled.Container>
      </Styled.Section>

      <Styled.Section className="second">
        <Styled.Container className="second">
          <Styled.coreFunction>사이즈 추천</Styled.coreFunction>
          <Styled.Title className="second">쉽게 추천받는 나의 사이즈</Styled.Title>
          <Styled.LottieContainer>
            <Lottie animationData={sizeLottie} className="lottie" />
          </Styled.LottieContainer>
        </Styled.Container>
      </Styled.Section>

      <Styled.Section className="third">
        <Styled.Container className="third">
          <Styled.coreFunction>나의 옷장</Styled.coreFunction>
          <Styled.Title className="third">클릭 한번으로 저장하는 관심 의류</Styled.Title>
          <Styled.LottieContainer>
            <Lottie animationData={saveLottie} className="lottie" />
          </Styled.LottieContainer>
        </Styled.Container>
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
    display: flex;
    justify-content: center;

    &.first {
      background-color: ${theme.colors.lightGrey};

      @media (min-width: 375px) and (max-width: 600px) {
        height: 32.9rem;
      }
      @media (min-width: 1024px) and (max-width: 1728px) {
        height: 76.2rem;
      }
    }

    &.second {
      background-color: #fffcce;
    }
    &.third {
      background-color: ${theme.colors.gray000};
    }

    @media (min-width: 375px) and (max-width: 600px) {
      height: 36.8rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      height: 104.8rem;
    }
  `,
  Container: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    & > span {
      position: absolute;
      z-index: 2;
    }

    &.first {
      align-items: center;
      background-color: ${theme.colors.lightGrey};

      & > .lottie {
        @media (min-width: 375px) and (max-width: 600px) {
          margin-top: 4rem;
        }
        @media (min-width: 1024px) and (max-width: 1728px) {
          margin: 9.3rem auto 0;
        }
      }

      @media (min-width: 375px) and (max-width: 600px) {
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

          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 500;
          font-size: 1.6rem;
          line-height: 2.2rem;
          text-align: center;
        }
      }
      @media (min-width: 1024px) and (max-width: 1728px) {
        & > img {
          &.speechBubble {
            width: 57.2rem;
            height: 20.4rem;
            margin-top: 7.5rem;
          }
          &.face {
            margin-top: 1.3rem;
          }
        }
        & > span {
          top: 27.4rem;

          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 500;
          font-size: 28px;
          line-height: 45px;
          text-align: center;
        }
      }

      &.second,
      &.third {
        @media (min-width: 375px) and (max-width: 600px) {
          width: 28.3rem;
          margin-top: 4.2rem;
        }
        @media (min-width: 1024px) and (max-width: 1728px) {
          width: 140.8rem;
          margin-top: 10rem;
        }
      }
    }
  `,
  LottieContainer: styled.div`
    @media (min-width: 375px) and (max-width: 600px) {
      width: 28.3rem;
      height: 17.6rem;
      margin-top: 4rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      width: 93rem;
      height: 53rem;
      margin-top: 9.3rem;
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
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 600;
      font-size: 50px;
      line-height: 68px;

      margin-top: 5.3rem;
      &.first {
        margin-top: 9.1rem;
      }
    }
  `,
  coreFunction: styled.header`
    color: ${theme.colors.gray400};

    @media (min-width: 375px) and (max-width: 600px) {
      ${theme.fonts.body2_DSB};
      margin-top: 4.2rem;
    }
    @media (min-width: 1024px) and (max-width: 1728px) {
      ${theme.fonts.title1};
      margin-top: 10rem;
    }
  `,
};
