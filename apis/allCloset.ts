import { client } from 'apis';
import { ClosetOutput, PostClosetInput, UpdateClosetInput } from 'types/allCloset/client';
import { IncludeCategoryResponse, MyClosetResponse } from 'types/allCloset/remote';

export const fetchAllCloset = async () => {
  const {
    data: { data },
  } = await client.get<MyClosetResponse>('/allCloset', {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
  return data;
};

export const fetchIncludeCategory = async (productId: string) => {
  const {
    data: { data },
  } = await client.get<IncludeCategoryResponse>(`allCloset/${productId}`, {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
  return data;
};

export const postIncludeCategory = async ({ postBody }: PostClosetInput) => {
  const { data } = await client.post<IncludeCategoryResponse>(`/allCloset/toCategory`, postBody, {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
  return data;
};

export const updateAllClosetProduct = async ({ targetId, editBody }: UpdateClosetInput) => {
  const { data } = await client.put<ClosetOutput>(`/allCloset/${targetId}`, editBody, {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
  return data;
};

export const deleteAllClosetProduct = async (productId: string) => {
  const { data } = await client.delete(`/allCloset/${productId}`, {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
  return data;
};
