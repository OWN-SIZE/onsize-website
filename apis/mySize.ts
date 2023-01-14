import { client } from 'apis';
import { BottomSizeInput, MySizeResponse, TopSizeInput } from 'types/mySize/client';
import { AllMysize } from 'types/mySize/remote';

export const fetchMysize = async () => {
  const { data: data } = await client.get<AllMysize>(`/mySize`, {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
  return data;
};

export const postMyTopSize = async (myTopSize: TopSizeInput) => {
  const { data } = await client.post<MySizeResponse>(`/mySize/topSize`, myTopSize, {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
  return data;
};

export const postMyBottomSize = async (myBottomSize: BottomSizeInput) => {
  const { data } = await client.post<MySizeResponse>(`/mySize/bottomSize`, myBottomSize, {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
  return data;
};
