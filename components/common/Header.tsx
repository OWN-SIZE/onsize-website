import { useState } from 'react';
import { HoveredOpenMySizeIcon, InfoIcon, OpenMySizeIcon, profileDefault } from 'assets/icon';
import { MouseHoverImg, MouseImg, OwnSizeLogoImg } from 'assets/img';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import theme from 'styles/theme';

import { useFetchUserInformation } from '@/hooks/queries/mypageHistory';

import LottieModal from './modal/LottieModal';

function Header() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isTutorial, setIsTutorial] = useState(false);
  const router = useRouter();

  const { userInformation } = useFetchUserInformation();

  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.TopSection>
          <Link href="/home">
            <Image src={OwnSizeLogoImg} width={94} height={94} alt="온사이즈 로고 / 홈 이동" priority />
          </Link>

          <Styled.RightSection>
            <Styled.InfoButton onClick={() => setIsTutorial(true)}>
              <Image src={InfoIcon} width={50} height={50} alt="튜토리얼 보기 아이콘" />
            </Styled.InfoButton>
            {isTutorial && <LottieModal onClickCloseButton={() => setIsTutorial(false)} />}

            <Link href={'/mypage'}>
              <Image
                src={userInformation ? userInformation.picture : profileDefault}
                width={60}
                height={60}
                alt="사용자 프로필"
              />
            </Link>
          </Styled.RightSection>
        </Styled.TopSection>
        <Image
          src={isButtonHovered ? MouseHoverImg : MouseImg}
          className={isButtonHovered ? 'mouse hovered' : 'mouse'}
          alt="마우스 이미지"
        />
        <Styled.MySizeButtonBackGround>
          <Link href={router.asPath !== '/mysize' ? '/mysize' : 'javascript:history.back()'}>
            <Styled.MySizeButton
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className={isButtonHovered ? 'hovered' : ''}
            >
              MY SIZE
              <Image src={isButtonHovered ? HoveredOpenMySizeIcon : OpenMySizeIcon} alt="mysize 버튼 아이콘" />
            </Styled.MySizeButton>
          </Link>
        </Styled.MySizeButtonBackGround>
      </Styled.Container>
    </Styled.Root>
  );
}

export default Header;

const Styled = {
  Root: styled.header`
    width: 100%;

    background-color: ${theme.colors.black};

    text-align: center;
  `,

  Container: styled.div`
    position: relative;
    width: 140.8rem;

    height: 26.6rem;

    margin: 0 auto;

    & > img {
      position: absolute;
      top: 14rem;
      left: 64.3rem;

      &.hovered {
        top: 12.1rem;
      }
    }
  `,

  TopSection: styled.div`
    display: flex;
    justify-content: space-between;

    height: 11.8rem;

    & > a {
      & > img {
        margin-top: 2.4rem;
      }
    }
  `,

  ProfileImage: styled.div`
    width: 6rem;
    height: 6rem;
    background-color: #c2c2c2;
    border-radius: 50%;
  `,

  RightSection: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 14.7rem;
    height: 7rem;

    margin-top: 3.5rem;

    & > a {
      & > div,
      img {
        width: 6rem;
        height: 6rem;

        border-radius: 4.7rem;

        border: none;
        background-color: #c2c2c2;

        cursor: pointer;
      }
    }
  `,

  InfoButton: styled.button`
    background: none;
    border: none;
  `,

  MySizeButtonBackGround: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 43rem;
    height: 8.5rem;

    border-radius: 5.5rem;

    margin: 10.5rem auto 0;

    background-color: ${theme.colors.gray000};
  `,

  MySizeButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 42rem;
    height: 7.5rem;

    border-radius: 5.5rem;
    border: none;

    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 34px;

    color: ${theme.colors.yellow};
    background-color: ${theme.colors.black};

    &.hovered {
      color: ${theme.colors.black};
      background-color: ${theme.colors.yellow01};
    }

    filter: drop-shadow(0px 8px 14px rgba(0, 0, 0, 0.15));

    cursor: pointer;

    & > img {
      margin-left: 1.2rem;
    }
  `,
};
