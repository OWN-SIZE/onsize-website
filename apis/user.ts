import { axiosBasic, client } from 'apis';
import { AuthInput } from 'types/user/client';
import { AuthResponse, LogoutResponse, WithdrawResponse } from 'types/user/remote';

export const postAuthData = async (authData: AuthInput) => {
  const {
    data: { data },
  } = await axiosBasic.post<AuthResponse>(`/auth`, authData);
  return data;
};

export const postLogoutData = async () => {
  const {
    data: { data },
  } = await client.post<LogoutResponse>(`/auth/logout`);
  return data;
};

export const postWithDrawData = async () => {
  const {
    data: { data },
  } = await client.delete<WithdrawResponse>(`/auth`);
  return data;
};
