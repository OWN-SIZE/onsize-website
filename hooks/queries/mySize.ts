import { useMutation, useQuery, useQueryClient } from 'react-query';

import { postMyTopSize } from '@/apis/mySize';

const QUERY_KEY = {
  myTopSize: 'myTopSize',
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
