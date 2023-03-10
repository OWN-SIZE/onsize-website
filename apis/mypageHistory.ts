import { client } from 'apis';
import { MyPageHistoryResponse, MyPageUserInformationResponse } from 'types/mypageHistory/remote';

export const fetchUserInformation = async () => {
  const {
    data: { data },
  } = await client.get<MyPageUserInformationResponse>('/mypage');
  return data;
};

export const fetchMyPageHistory = async () => {
  const {
    data: { data },
  } = await client.get<MyPageHistoryResponse>('/mypage/history');
  return data;
};
