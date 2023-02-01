import { client } from 'apis';
import { UpdateClosetInput } from 'types/allCloset/client';
import { ClosetResponse } from 'types/allCloset/remote';
import { DeleteCategoryClosetInput } from 'types/category/detail/client';

export const fetchCategoryDetail = async (categoryId: string) => {
  const {
    data: { data },
  } = await client.get<ClosetResponse>(`/category/${categoryId}`);
  return data;
};

// 카테고리 내부에서 핀 고정/해제
export const updateIsInPin = async ({ categoryId, targetId, editBody }: UpdateClosetInput) => {
  const { data } = await client.put(`/category/${categoryId}/${targetId}`, editBody);
  return data;
};

export const deleteCategoryClosetProduct = async ({ categoryId, productId }: DeleteCategoryClosetInput) => {
  const { data } = await client.delete(`/category/${categoryId}/${productId}`);
  return data;
};
