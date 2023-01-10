import { client } from 'apis';
import { ClosetResponse } from 'types/allCloset/remote';
import { DeleteCategoryClosetInput } from 'types/category/detail/client';

export const fetchCategoryDetail = async (categoryId: string) => {
  const {
    data: { data },
  } = await client.get<ClosetResponse>(`/category/${categoryId}`);
  return data;
};

export const deleteCategoryClosetProduct = async ({ categoryId, productId }: DeleteCategoryClosetInput) => {
  const { data } = await client.delete(`/category/${categoryId}/${productId}`);
  return data;
};
