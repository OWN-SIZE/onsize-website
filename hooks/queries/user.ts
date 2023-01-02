import { useMutation } from 'react-query';
import axios from 'axios';

export const useLoginMutation = (accessToken: string) => {
  return useMutation(() => axios.post('/auth/login', accessToken), {
    onSuccess(response) {
      console.log(response.data);
    },
  });
};
