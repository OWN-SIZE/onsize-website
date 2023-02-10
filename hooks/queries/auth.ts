import { useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useResetRecoilState } from 'recoil';
import { tokenState } from 'states/user';
import { RefreshInput } from 'types/auth/client';

import { fetchRefresh } from '@/apis/auth';
import { useErrorBubbling } from '@/components/common/AsyncBoundary';

export const useRefresh = (token: RefreshInput) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { reportError } = useErrorBubbling();
  const resetToken = useResetRecoilState(tokenState);

  const refresh = async () => {
    try {
      const { data } = await queryClient.fetchQuery('refresh', () => fetchRefresh(token));
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        switch (error.response?.status) {
          case 400:
          case 401: {
            localStorage.setItem('userId', '');
            localStorage.setItem('token', '');
            resetToken();

            router.replace('/login').then(() => {
              alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
            });
            return;
          }
          default:
            reportError(error);
        }
        return Promise.reject(error);
      }
    }
  };
  return refresh;
};
