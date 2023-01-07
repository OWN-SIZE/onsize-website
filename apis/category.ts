import { client } from 'apis';
import { MyPageUserInformationResponse, MyPageHistoryResponse } from 'types/category/remote';

export const fetchUserInformation = async () => {
  const {
    data: { data },
  } = await client.get<MyPageUserInformationResponse>('http://13.124.105.148:3003/mypage');
  return data;
};

export const fetchMyPageHistory = async () => {
  const {
    data: { data },
  } = await client.get<MyPageHistoryResponse>('http://13.124.105.148:3003/mypage/history');
  return data;
};
