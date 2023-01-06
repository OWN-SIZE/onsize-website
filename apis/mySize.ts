import { client } from 'apis';
import { TopSizeInput, TopSizeOutput } from 'types/mySize/remote';

export const postMyTopSize = async (myTopSize: TopSizeInput) => {
  const response = await client.post<TopSizeOutput>(`/mySize/topSize`, myTopSize);
  return response;
};
