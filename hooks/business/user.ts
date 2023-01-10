import { AuthInput } from 'types/user/client';

import { client } from '@/apis/index';

import { useAuthMutation } from '../queries/user';

export const useAuth = () => {
  const authMutate = useAuthMutation();

  const authLogin = (body: AuthInput, onSuccessLogin: () => void) => {
    authMutate.mutate(body, {
      onSuccess({ userId, token }) {
        // isRegister, userId(isLogin), jwt token
        localStorage.setItem('isRegister', 'false');
        localStorage.setItem('userId', `${userId}`);
        localStorage.setItem('token', token);
        client.defaults.headers.Authorization = `Bearer ${token}`;
        // 초기 사이즈 설정 페이지로 이동하기
        onSuccessLogin();
      },
    });
  };

  return { authLogin };
};
