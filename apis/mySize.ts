import { client } from 'apis';
import { BottomSizeInput, MySizeOutput, TopSizeInput } from 'types/mySize/remote';

export const postMyTopSize = async (myTopSize: TopSizeInput) => {
  const { data } = await client.post<MySizeOutput>(`/mySize/topSize`, myTopSize);
  return data;
};

export const postMyBottomSize = async (myBottomSize: BottomSizeInput) => {
  const { data } = await client.post<MySizeOutput>(`/mySize/bottomSize`, myBottomSize);
  return data;
};
