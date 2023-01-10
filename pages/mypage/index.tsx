import { useCallback, useEffect, useState } from 'react';
import profileDefault from 'assets/icon/profileDefault.svg';
import sizeReplacement from 'assets/icon/sizeReplacement.png';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import Layout from 'components/common/Layout';
import Modal from 'components/common/Modal';
import MyPageMain from 'components/mypage/MypageMain';
import { fetchUserInformation, fetchMyPageHistory } from '../../apis/mypageHistory';
import { useQuery } from 'react-query';
import { useFetchUserInformation, useFetchMyPageHistory } from '../../hooks/queries/mypageHistory';

function MyPage() {
  return (
    <Layout noMenuBar>
      <MyPageMain></MyPageMain>
    </Layout>
  );
}

export default MyPage;
