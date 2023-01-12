import { client } from 'apis';
import { BottomSizeInput, MySizeResponse, TopSizeInput } from 'types/mySize/client';
import { AllMysizeResponse } from 'types/mySize/remote';

export const fetchMysize = async () => {
  const {data} = await client.get<AllMysizeResponse>(`/mySize`);
  return data;
}

export const postMyTopSize = async (myTopSize: TopSizeInput) => {
  const { data } = await client.post<MySizeResponse>(`/mySize/topSize`, myTopSize);
  return data;
};

export const postMyBottomSize = async (myBottomSize: BottomSizeInput) => {
  const { data } = await client.post<MySizeResponse>(`/mySize/bottomSize`, myBottomSize);
  return data;
};
