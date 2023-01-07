import { useCallback, useEffect, useState } from 'react';
import profileDefault from 'assets/icon/profileDefault.svg';
import sizeReplacement from 'assets/icon/sizeReplacement.png';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import Layout from 'components/common/Layout';
import Modal from 'components/common/Modal';
import MyPageMain from 'components/mypage/MypageMain';
import { fetchUserInformation, fetchMyPageHistory } from '../../apis/category';
import { useQuery } from 'react-query';
import { usefetchUserInformation, usefetchMyPageHistory } from '../../hooks/queries/mypage';

function MyPage() {
  return (
    <Layout noMenuBar>
      <MyPageMain></MyPageMain>
    </Layout>
  );
}

export default MyPage;
