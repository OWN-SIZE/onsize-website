import { useMutation, useQuery, useQueryClient } from 'react-query';

import { fetchAllCloset } from '@/apis/allCloset';

const QUERY_KEY = {
  allCloset: 'allCloset',
};

/** Query */

export const useFetchAllCloset = () => {
  const { data } = useQuery([QUERY_KEY.allCloset], fetchAllCloset);
  return data;
};

/** Mutation */

// export const useUpdateAllClosetProductMutation = () => {
//   const queryClient = useQueryClient();

//   return useMutation(updateAllClosetProduct, {
//     onSuccess() {
//       queryClient.invalidateQueries([QUERY_KEY.allCloset]);
//     },
//   });
// };

// export const useDeleteAllClosetProductMutation = () => {
//   const queryClient = useQueryClient();

//   return useMutation(deleteAllClosetProduct, {
//     onSuccess() {
//       queryClient.invalidateQueries([QUERY_KEY.allCloset]);
//     },
//   });
// };
