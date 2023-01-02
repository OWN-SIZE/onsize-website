import { useMutation } from 'react-query';
import axios from 'axios';

export const useLoginMutation = (accessToken: string) => {
  return useMutation(() => axios.post('/auth/login', accessToken), {
    onSuccess(response) {
      console.log(response.data);
      localStorage.setItem('isLogin', 'true');
      localStorage.setItem('isRegister', 'false');
      // 초기 사이즈 설정 페이지로 이동하기
    },
  });
};
