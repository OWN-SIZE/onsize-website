import { client } from 'apis';
import { ClosetResponse } from 'types/allCloset/remote';

export const fetchCategoryDetail = async (categoryId: string) => {
  const {
    data: { data },
  } = await client.get<ClosetResponse>(`/category/${categoryId}`);
  return data;
};
