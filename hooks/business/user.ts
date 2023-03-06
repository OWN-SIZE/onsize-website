import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { userState } from 'states/user';
import { AuthInput } from 'types/user/client';

import { useAuthMutation } from '../queries/user';

export const useAuth = () => {
  const router = useRouter();
  const authMutate = useAuthMutation();
  const [user, setUser] = useRecoilState(userState);

  const authLogin = (body: AuthInput) => {
    authMutate.mutate(body, {
      onSuccess({ userId, token, isAlreadyUser }) {
        if (isAlreadyUser === 'pending') {
          router.push('/register');
        } else {
          router.push('/home');
        }

        localStorage.setItem('userId', `${userId}`);
        localStorage.setItem('token', `${token}`);
        setUser({
          ...user,
          token,
          userId,
        });
      },
    });
  };

  return { authLogin };
};
