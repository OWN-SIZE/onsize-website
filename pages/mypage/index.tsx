import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import profileDefault from 'assets/icon/profileDefault.svg';
import sizeReplacement from 'assets/icon/sizeReplacement.png';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import Layout from 'components/common/Layout';
import Modal from 'components/common/Modal';
import MyPageMain from 'components/mypage/MypageMain';

import { fetchMyPageHistory, fetchUserInformation } from '../../apis/mypageHistory';
import { useFetchMyPageHistory, useFetchUserInformation } from '../../hooks/queries/mypageHistory';

function MyPage() {
  return (
    <Layout noMenuBar>
      <MyPageMain></MyPageMain>
    </Layout>
  );
}

export default MyPage;
