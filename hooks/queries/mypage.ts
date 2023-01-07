import { useMutation, useQuery, useQueryClient } from 'react-query';

import { fetchUserInformation, fetchMyPageHistory } from '../../apis/category';

const QUERY_KEY = {
    mypage: 'mypage',
    history: 'history',
  };
  
  /** Query */
  
  export const usefetchUserInformation = () => {
    const { data } = useQuery([QUERY_KEY.mypage], fetchUserInformation);
    return {
      userInformation: data,
    };
  };
  
  export const usefetchMyPageHistory = () => {
    const { data } = useQuery([QUERY_KEY.history], fetchMyPageHistory);
    return {
      history: data,
    };
  };