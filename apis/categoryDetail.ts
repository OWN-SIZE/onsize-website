import { client } from 'apis';
import { ClosetResponse } from 'types/allCloset/remote';

export const fetchCategoryDetail = async (productId: string | string[]) => {
  const {
    data: { data },
  } = await client.get<ClosetResponse>(`/category/${productId}`);
  return data;
};
