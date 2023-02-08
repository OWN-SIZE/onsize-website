import { useMutation, useQuery, useQueryClient } from 'react-query';

import { fetchEmail, postEmail } from '@/apis/welcome';

const QUERY_KEY = {
  email: 'email',
};
/** Query */
export const useFetchEmail = () => {
  const { data } = useQuery([QUERY_KEY.email], fetchEmail);
  return data;
};
export const usePostEmail = () => {
  const queryClient = useQueryClient();
  return useMutation(postEmail, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.email]);
    },
  });
};
