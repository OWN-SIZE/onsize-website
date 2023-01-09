import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteCategory, fetchAllCategory, postCategory } from 'apis/category';
import { CreateCategory } from 'types/category/client';

const QUERY_KEY = {
  category: 'category',
};

/** Query */

export const useFetchAllCategory = () => {
  const { data } = useQuery([QUERY_KEY.category], fetchAllCategory);
  return {
    category: data,
  };
};

/** Mutation */

export const usePostCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(postCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.category]);
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteCategory, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.category]);
    },
  });
};
