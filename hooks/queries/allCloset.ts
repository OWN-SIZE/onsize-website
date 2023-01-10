import { useMutation, useQuery, useQueryClient } from 'react-query';

import { deleteAllClosetProduct, fetchAllCloset, updateAllClosetProduct } from '@/apis/allCloset';
import { fetchCategoryDetail } from '@/apis/categoryDetail';
const QUERY_KEY = {
  allCloset: 'allCloset',
  categoryDetail: (categoryId: string) => ['allCloset', categoryId],
};
/** Query */

export const useFetchAllCloset = () => {
  const { data } = useQuery([QUERY_KEY.allCloset], fetchAllCloset);
  return data;
};

export const useFetchCategoryDetail = (categoryId: string) => {
  const { data } = useQuery([QUERY_KEY.categoryDetail(categoryId)], () => fetchCategoryDetail(categoryId));
  return data;
};

/** Mutation */
export const useUpdateAllClosetProductMutation = (categoryId: string) => {
  const queryClient = useQueryClient();
  return useMutation(updateAllClosetProduct, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.allCloset]);
      queryClient.invalidateQueries([QUERY_KEY.categoryDetail(categoryId)]);
    },
  });
};
export const queryKeys = {
  todos: ['todos'] as const,
};

export const useDeleteAllClosetProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteAllClosetProduct, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.allCloset]);
    },
  });
};
