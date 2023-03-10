import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteCategory, fetchAllCategory, postCategory, updateCategory } from 'apis/category';
import { useRouter } from 'next/router';

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
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.category]);
    },
  });
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(updateCategory, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.category]);
    },
  });
};

export const useDeleteCategory = (showToast: (message: string) => void) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.category]);
      if (router.asPath.startsWith('/category/')) {
        router.push('/category');
      }
      showToast('삭제되었습니다.');
    },
  });
};
