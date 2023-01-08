import { client } from 'apis';
import { ClosetOutput, UpdateClosetInput } from 'types/allCloset/client';
import { ClosetResponse } from 'types/allCloset/remote';

export const fetchAllCloset = async () => {
  const {
    data: { data },
  } = await client.get<ClosetResponse>('/allCloset');
  return data;
};

export const updateAllClosetProduct = async ({ productId, editBody }: UpdateClosetInput) => {
  const { data } = await client.put<ClosetOutput>(`/allCloset/${productId}`, editBody);
  return data;
};

export const deleteAllClosetProduct = async ({ productId }: UpdateClosetInput) => {
  const { data } = await client.delete(`/allCloset/${productId}`);
  return data;
};
