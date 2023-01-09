import { useQuery } from 'react-query';

import { fetchCategoryDetail } from '@/apis/categoryDetail';
const QUERY_KEY = {
  categoryDetail: 'categoryDetail',
};
/** Query */

export const useFetchCategoryDetail = (productId: string | string[]) => {
  const { data } = useQuery([QUERY_KEY.categoryDetail, productId], () => fetchCategoryDetail(productId));
  return data;
};

// export const useFetchCategoryDetail = () => {
//   const queryClient = useQueryClient();
//   return useMutation(fetchCategoryDetail, {
//     onSuccess() {
//       queryClient.invalidateQueries([QUERY_KEY.categoryDetail]);
//     },
//   });
//   const { data } = useQuery([QUERY_KEY.categoryDetail], fetchCategoryDetail);
//   return data;
