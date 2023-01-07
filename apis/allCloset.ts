import { client } from 'apis';
import { AllClosetResponse } from 'types/allCloset/remote';

export const fetchAllCloset = async () => {
  const {
    data: { data },
  } = await client.get<AllClosetResponse>('/allCloset');
  return data;
};

// export const updateAllClosetProduct = async ({ productId }: UpdateAllClosetProductInput) => {
//   const { data } = await client.put<Pick<AllClosetOutput, 'productName' | 'size' | 'memo' | 'isPin'>>(
//     `/allCloset/${productId}`
//   );
//   return data;
// };

// export const deleteAllClosetProduct = async ({ productId }: UpdateAllClosetProductInput) => {
//   const { data } = await client.delete<Pick<AllClosetOutput, 'productName' | 'size' | 'memo' | 'isPin'>>(
//     `/allCloset/${productId}`
//   );
//   return data;
// };
