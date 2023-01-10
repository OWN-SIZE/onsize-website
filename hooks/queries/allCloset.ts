import { useMutation, useQuery, useQueryClient } from 'react-query';

import { deleteAllClosetProduct, fetchAllCloset, updateAllClosetProduct } from '@/apis/allCloset';
import { deleteCategoryClosetProduct, fetchCategoryDetail } from '@/apis/categoryDetail';
const QUERY_KEY = {
  allCloset: 'allCloset',
  categoryDetail: (categoryId: string) => ['allCloset', categoryId],
};
/** Query */

// 나의 옷장
export const useFetchAllCloset = () => {
  const { data } = useQuery([QUERY_KEY.allCloset], fetchAllCloset);
  return data;
};

// 카테고리 세부 조회
export const useFetchCategoryDetail = (categoryId: string) => {
  const { data } = useQuery([QUERY_KEY.categoryDetail(categoryId)], () => fetchCategoryDetail(categoryId));
  return data;
};

/** Mutation */
//공통
export const useUpdateAllClosetProductMutation = (categoryId: string) => {
  const queryClient = useQueryClient();
  return useMutation(updateAllClosetProduct, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.allCloset]);
      queryClient.invalidateQueries([QUERY_KEY.categoryDetail(categoryId)]);
    },
  });
};

// 나의 옷장
export const useDeleteAllClosetProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteAllClosetProduct, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.allCloset]);
    },
  });
};

// 카테고리 세부 조회
export const useDeleteCategoryClosetProductMutation = (categoryId: string) => {
  const queryClient = useQueryClient();
  return useMutation(deleteCategoryClosetProduct, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.categoryDetail(categoryId)]);
    },
  });
};
