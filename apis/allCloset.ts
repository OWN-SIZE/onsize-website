import { client } from 'apis';
import { AllClosetOutput, UpdateAllClosetProductInput } from 'types/allCloset/remote';

export const fetchAllCloset = async () => {
  const { data } = await client.get<AllClosetOutput>('/allCloset');
  return data;
};

export const updateAllClosetProduct = async ({ productId }: UpdateAllClosetProductInput) => {
  const { data } = await client.put<Pick<AllClosetOutput, 'productName' | 'size' | 'memo' | 'isPin'>>(
    `/allCloset/${productId}`
  );
  return data;
};

export const deleteAllClosetProduct = async ({ productId }: UpdateAllClosetProductInput) => {
  const { data } = await client.delete<Pick<AllClosetOutput, 'productName' | 'size' | 'memo' | 'isPin'>>(
    `/allCloset/${productId}`
  );
  return data;
};
