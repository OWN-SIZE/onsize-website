import { useMutation, useQuery, useQueryClient } from 'react-query';

import { postMyBottomSize, postMyTopSize } from '@/apis/mySize';

const QUERY_KEY = {
  myTopSize: 'myTopSize',
  myBottomSize: 'myBottomSize',
};

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
