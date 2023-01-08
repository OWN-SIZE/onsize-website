import { client } from 'apis';
import { AllClosetOutput, UpdateAllClosetProductInput } from 'types/allCloset/client';
import { AllClosetResponse } from 'types/allCloset/remote';

export const fetchAllCloset = async () => {
  const {
    data: { data },
  } = await client.get<AllClosetResponse>('/allCloset');
  return data;
};

export const updateAllClosetProduct = async ({ productId, editBody }: UpdateAllClosetProductInput) => {
  const { data } = await client.put<AllClosetOutput>(`/allCloset/${productId}`, editBody);
  return data;
};

export const deleteAllClosetProduct = async ({ productId }: UpdateAllClosetProductInput) => {
  const { data } = await client.delete(`/allCloset/${productId}`);
  return data;
};
