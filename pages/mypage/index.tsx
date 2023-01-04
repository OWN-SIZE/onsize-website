import profileDefault from 'assets/icon/profileDefault.svg';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import Layout from 'components/common/Layout';

function MyPage() {
  return (
    <Layout noMenuBar>
      <Styled.Root>
        <Styled.UserInformationContainer>
          <Image
            src={profileDefault}
            alt="사용자 지정 프로필 이미지가 없는 경우의 디폴트 프로필 이미지"
            width={82}
            height={82}
            placeholder="blur"
            blurDataURL="assets/icon/profileDefault.svg"
          />
          <Styled.UserInformation>
            고다빈 <div>aaaaaaa@gmail.com</div>
          </Styled.UserInformation>
        </Styled.UserInformationContainer>
        <Styled.History>
          지금까지 사이즈 추천을 <span>00번</span> 받았어요
        </Styled.History>
        <Styled.InformationContainer>
          <h1>정보</h1>
          <p>피드백 및 버그 제보</p>
          <p>개인 정보 보호 정책</p>
        </Styled.InformationContainer>
        <Styled.UserLeaveContainer>
          <button className="withdrawal">탈퇴하기</button>
          <button className="signOut">로그아웃</button>
        </Styled.UserLeaveContainer>
      </Styled.Root>
    </Layout>
  );
}

export default MyPage;

const Styled = {
  Root: styled.section`
    width: 81.1rem;
    margin: 0 auto;
    background-color: ${theme.colors.lightGrey};
  `,
  UserInformationContainer: styled.div`
    width: 69.2rem;
    height: 8.3rem;
    margin: 0 auto;
    margin-bottom: 5.4rem;
    display: flex;
    flex-wrap: wrap;
  `,
  UserInformation: styled.div`
    ${theme.fonts.title2}
    color: ${theme.colors.gray550};
    margin-left: 2.6rem;
    & > div {
      ${theme.fonts.body4}
      color: ${theme.colors.gray550};
      margin-top: 1.2rem;
    }
  `,
  History: styled.div`
    ${theme.fonts.body4}
    color: ${theme.colors.gray550};
    background-color: ${theme.colors.gray000};
    width: 69.2rem;
    height: 11.8rem;
    border-radius: 1rem;
    margin: 0 auto;
    margin-bottom: 5.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    & > span {
      ${theme.fonts.body5};
      color: ${theme.colors.yellow};
      width: 5.8rem;
      height: 4.2rem;
      margin: 0 0.6rem;
      padding-top: 0.8rem;
      background-color: ${theme.colors.black};
      border-radius: 2.1rem;
      text-align: center;
    }
  `,
  InformationContainer: styled.div`
    width: 69.2rem;
    height: 16.5rem;
    margin: 0 auto;
    margin-bottom: 6.7rem;
    & > h1 {
      ${theme.fonts.title2};
      color: ${theme.colors.gray550};
      border-bottom: 0.15rem solid ${theme.colors.gray200};
      margin-bottom: 2rem;
    }
    & > p {
      ${theme.fonts.body4};
      color: ${theme.colors.gray550};
      margin-bottom: 3rem;
    }
  `,
  UserLeaveContainer: styled.div`
    margin: 0 auto;
    width: 69.2rem;
    height: 7.1rem;
    display: flex;
    justify-content: space-between;
    & > button {
      ${theme.fonts.body6};
      border: none;
    }
    & > .withdrawal {
      color: ${theme.colors.gray250};
      background-color: ${theme.colors.lightGrey};
    }
    & > .signOut {
      width: 18rem;
      height: 7.1rem;
      background-color: ${theme.colors.gray150};
      border-radius: 3.6rem;
    }
  `,
};
