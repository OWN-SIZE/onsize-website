import { useQuery } from 'react-query';

import { fetchMyPageHistory, fetchUserInformation } from '../../apis/mypageHistory';

const QUERY_KEY = {
  mypage: 'mypage',
  history: 'history',
};

/** Query */

export const useFetchUserInformation = () => {
  const { data } = useQuery([QUERY_KEY.mypage], fetchUserInformation);
  return {
    userInformation: data,
  };
};

export const useFetchMyPageHistory = () => {
  const { data } = useQuery([QUERY_KEY.history], fetchMyPageHistory);
  return {
    history: data,
  };
};
