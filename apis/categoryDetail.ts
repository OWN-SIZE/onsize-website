import { client } from 'apis';
import { CategoryInput } from 'types/category/detail/client';

export const deleteCategoryClosetProduct = async ({ categoryId, productId }: CategoryInput) => {
  const { data } = await client.delete(`/category/${categoryId}/${productId}`);
  return data;
};
