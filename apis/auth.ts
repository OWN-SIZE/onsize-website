import { axiosBasic } from 'apis';
import { RefreshInput } from 'types/auth/client';
import { RefreshResponse } from 'types/auth/remote';

export const fetchRefresh = async ({ accessToken }: RefreshInput): Promise<RefreshResponse> => {
  const { data } = await axiosBasic('/auth/token', {
    headers: {
      token: accessToken,
    },
  });
  return data;
};
