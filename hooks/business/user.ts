import { useRecoilState } from 'recoil';
import { tokenState, userIdState } from 'states/user';
import { AuthInput } from 'types/user/client';

import { useAuthMutation } from '../queries/user';

export const useAuth = () => {
  const authMutate = useAuthMutation();
  const [, setToken] = useRecoilState(tokenState);
  const [, setUserId] = useRecoilState(userIdState);

  const authLogin = (body: AuthInput, onSuccessLogin: () => void) => {
    authMutate.mutate(body, {
      onSuccess({ userId, token }) {
        localStorage.setItem('userId', `${userId}`);
        localStorage.setItem('token', `${token}`);
        setToken(token);
        setUserId(userId);

        // 초기 사이즈 설정 페이지로 이동하기
        onSuccessLogin();
      },
    });
  };

  return { authLogin };
};
