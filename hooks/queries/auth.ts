import { useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { RefreshInput } from 'types/auth/client';

import { fetchRefresh } from '@/apis/auth';
import { useErrorBubbling } from '@/components/common/AsyncBoundary';

export const useRefresh = (token: RefreshInput) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { reportError } = useErrorBubbling();

  const refresh = async () => {
    try {
      const { data } = await queryClient.fetchQuery('refresh', () => fetchRefresh(token));
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        switch (error.response?.status) {
          case 400:
          case 401: {
            alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
            router.replace('/login');
            return;
          }
          default:
            reportError(error);
        }
      }
    }
  };
  return refresh;
};
