import { client } from 'apis';
import { AuthInput } from 'types/user/client';
import { AuthResponse } from 'types/user/remote';

export const postAuthData = async (authData: AuthInput) => {
  const {
    data: { data },
  } = await client.post<AuthResponse>(`/auth`, authData);
  return data;
};
