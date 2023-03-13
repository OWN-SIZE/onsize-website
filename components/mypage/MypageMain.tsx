import { lazy, Suspense, useState } from 'react';
import profileDefault from 'assets/icon/profileDefault.svg';
import sizeReplacement from 'assets/icon/sizeReplacement.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { userState } from 'states/user';
import styled from 'styled-components';
import theme from 'styles/theme';

import { postLogoutData, postWithDrawData } from '@/apis/user';
import Modal from 'components/common/Modal';
import ModalPortal from 'components/common/modal/ModalPortal';

import { useFetchMyPageHistory, useFetchUserInformation } from '../../hooks/queries/mypageHistory';

const HistoryModal = lazy(() => import('./HistoryModal'));

function MyPageMain() {
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [isButtonActivated, setIsButtonActivated] = useState(true);
  const [user, setUser] = useRecoilState(userState);
  const resetUserState = useResetRecoilState(userState);

  const resetToken = () => {
    setUser({
      ...user,
      token: '',
    });
  };

  const onClickHistoryModal = () => {
    setIsHistoryModalOpen(!isHistoryModalOpen);
  };
  const onClickLeaveModal = () => {
    setIsLeaveModalOpen(!isLeaveModalOpen);
  };
  const onClickCancel = () => {
    setIsLeaveModalOpen(!isLeaveModalOpen);
  };
  const onClickLogout = async () => {
    const response = await postLogoutData();
    if (response) {
      router.replace('/login');
      localStorage.removeItem('userId');
      localStorage.removeItem('token');
      resetToken();
    }
  };
  const onClickWithdraw = async () => {
    const response = await postWithDrawData();
    if (response) {
      router.replace('/login');
      localStorage.removeItem('userId');
      localStorage.removeItem('token');
      resetUserState();
    }
  };

  const router = useRouter();
  const { userInformation } = useFetchUserInformation();
  const { history } = useFetchMyPageHistory();

  return (
    <Styled.Root>
      <Styled.MySizeContainer>
        <Styled.UserInformationContainer>
          <Image
            src={userInformation ? userInformation.picture : profileDefault}
            alt="사용자 프로필 이미지"
            width={82}
            height={82}
            placeholder="blur"
            blurDataURL="assets/icon/profileDefault.svg"
          />
          {userInformation && (
            <Styled.UserInformation>
              {userInformation.name} <div>{userInformation.email}</div>
            </Styled.UserInformation>
          )}
        </Styled.UserInformationContainer>
        <Styled.History>
          지금까지 사이즈 추천을 <button onClick={onClickHistoryModal}>{history ? history.recCount : 0}번</button>{' '}
          받았어요
        </Styled.History>
        <Styled.InformationContainer>
          <h1>정보</h1>
          <p>
            <span
              onClick={() => {
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSfHXvABOrKUtbROS1Qm3pm-YdQG4_9QwoXMiucclvOsz7VrMQ/viewform',
                  '_blank'
                );
              }}
            >
              피드백 및 버그 제보
            </span>
          </p>
          <p>
            <span
              onClick={() => {
                window.open('https://golden-rib-2f1.notion.site/7171b098f7c94b04b136702f24e198b6', '_blank');
              }}
            >
              개인 정보 보호 정책
            </span>
          </p>
        </Styled.InformationContainer>
        <Styled.UserLeaveContainer>
          <button className="withdrawal" onClick={onClickLeaveModal}>
            탈퇴하기
          </button>
          <button className="signOut" onClick={onClickLogout}>
            로그아웃
          </button>
        </Styled.UserLeaveContainer>
      </Styled.MySizeContainer>
      {isHistoryModalOpen && (
        <Suspense fallback={<div>로딩중</div>}>
          <ModalPortal>
            <HistoryModal onClickHistoryModal={onClickHistoryModal}>
              {history &&
                history.recData.map((history) => (
                  <Styled.HistoryModalLink key={history.id}>
                    {history.recommendSize === '-' ? (
                      <div>
                        <Image
                          src={sizeReplacement}
                          alt="추천받은 사이즈가 없는 경우, 없음을 나타내는 이미지"
                          width={6}
                          height={6}
                          placeholder="blur"
                          blurDataURL="assets/icon/sizeReplacement.png"
                        ></Image>
                      </div>
                    ) : (
                      <h5>{history.recommendSize}</h5>
                    )}
                    <p
                      onClick={() => {
                        window.open(history.url, '_blank');
                      }}
                    >
                      {history.url.substr(0, 17)}
                    </p>
                  </Styled.HistoryModalLink>
                ))}
            </HistoryModal>
          </ModalPortal>
        </Suspense>
      )}
      {isLeaveModalOpen && (
        <ModalPortal>
          <Modal
            onClickModal={onClickLeaveModal}
            onClickLeftButton={onClickCancel}
            onClickRightButton={onClickWithdraw}
            title="탈퇴"
            leftButtonText="아니오"
            rightButtonText="예"
            width={53}
            isButtonActivated={isButtonActivated}
          >
            <Styled.LeaveModalContent>
              온사이즈를 탈퇴하시겠습니까?
              <br />
              추천받은 사이즈와 저장된 의류는 모두 삭제돼요
            </Styled.LeaveModalContent>
          </Modal>
        </ModalPortal>
      )}
    </Styled.Root>
  );
}

export default MyPageMain;

const Styled = {
  Root: styled.div`
    width: 100vw;
    height: 85.1rem;
    background-color: ${theme.colors.lightGrey};
    padding-bottom: 12.2rem;
  `,
  MySizeContainer: styled.div`
    width: 81.1rem;
    margin: 0 auto;
    margin-top: 10.5rem;
    background-color: ${theme.colors.lightGrey};
  `,
  UserInformationContainer: styled.div`
    width: 69.2rem;
    height: 8.3rem;
    margin: 0 auto;
    margin-bottom: 5.4rem;
    display: flex;
    flex-wrap: wrap;
    & > img {
      border-radius: 70%;
    }
  `,
  UserInformation: styled.div`
    ${theme.fonts.title2}
    color: ${theme.colors.gray550};
    margin-left: 2.6rem;
    & > div {
      ${theme.fonts.body7}
      color: ${theme.colors.gray550};
      margin-top: 1.2rem;
    }
  `,
  History: styled.div`
    ${theme.fonts.body7}
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
    & > button {
      ${theme.fonts.body5};
      color: ${theme.colors.yellow};
      width: 5.8rem;
      height: 4.2rem;
      margin: 0 0.6rem;
      background-color: ${theme.colors.black};
      border-radius: 2.1rem;
      text-align: center;
      cursor: pointer;
      transition: all 0.05s linear;
      border: none;
      &:hover {
        transform: scale(1.15);
      }
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
      ${theme.fonts.body7};
      color: ${theme.colors.gray550};
      margin-bottom: 3rem;
      & > span {
        cursor: pointer;
      }
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
      cursor: pointer;
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
  HistoryModalLink: styled.div`
    display: flex;
    justify-content: center;
    width: 26.2rem;
    margin-top: 1.2rem;
    padding-bottom: 1.2rem;
    border-bottom: 0.1rem solid ${theme.colors.gray150};

    & > h5,
    div {
      ${theme.fonts.card2};
      color: ${theme.colors.gray550};
      width: 9rem;
      text-align: center;
      margin-right: 3.2rem;
      margin-left: 1.4rem;
    }
    & > p {
      ${theme.fonts.body2};
      color: ${theme.colors.gray550};
      width: 14rem;
      cursor: pointer;
    }
  `,
  LeaveModalContent: styled.div`
    ${theme.fonts.caption};
    color: ${theme.colors.gray550};
    text-align: center;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
  `,
};
