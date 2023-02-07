import { axiosBasic } from 'apis';
import { AuthInput } from 'types/user/client';
import { AuthResponse } from 'types/user/remote';

export const postAuthData = async (authData: AuthInput) => {
  const {
    data: { data },
  } = await axiosBasic.post<AuthResponse>(`/auth`, authData);
  return data;
};
