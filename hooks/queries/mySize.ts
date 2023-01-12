import { useMutation, useQuery, useQueryClient } from 'react-query';

import { postMyBottomSize, postMyTopSize } from '@/apis/mySize';
import { fetchMysize } from 'apis/mySize';

const QUERY_KEY = {
  myTopSize: 'myTopSize',
  myBottomSize: 'myBottomSize',
  allMysize: 'allMysize'
};

export const useFetchMysize = () => {
  const { data } = useQuery([QUERY_KEY.allMysize], fetchMysize);
  return {
    allMysize: data,
  };
}


/** Mutation */

export const usePostMyTopSizeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(postMyTopSize, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.myTopSize]);
    },
  });
};

export const usePostMyBottomSizeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(postMyBottomSize, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.myBottomSize]);
    },
  });
};
