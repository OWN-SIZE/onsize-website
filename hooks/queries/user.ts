import { useMutation, useQueryClient } from 'react-query';

import { postAuthData } from '@/apis/user';

const QUERY_KEY = {
  auth: 'auth',
};

export const useAuthMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(postAuthData, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.auth]);
    },
  });
};
