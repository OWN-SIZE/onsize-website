import { client } from 'apis';
import { CreateCategory, UpdateCategoryRequest } from 'types/category/client';
import {
  AllCategoryResponse,
  CreateCategoryResponse,
  DeleteCategoryResponse,
  OneCategoryResponse,
  UpdateCategoryResponse,
} from 'types/category/remote';

export const fetchAllCategory = async () => {
  const {
    data: { data },
  } = await client.get<AllCategoryResponse>('/category');
  return data;
};

export const fetchOneCategory = async (categoryId: number) => {
  const {
    data: { data },
  } = await client.get<OneCategoryResponse>(`/category/${categoryId}`);
  return data;
};

export const postCategory = async (props: CreateCategory): Promise<CreateCategory> => {
  const {
    data: { data },
  } = await client.post<CreateCategoryResponse>('/category/createCategory', props);
  return data;
};

export const updateCategory = async (props: UpdateCategoryRequest) => {
  const {
    data: { data },
  } = await client.put<UpdateCategoryResponse>(`/category/${props.targetId}`, props.editBody);

  return data;
};

export const deleteCategory = async (categoryId: number) => {
  const { data } = await client.delete<DeleteCategoryResponse>(`/category/${categoryId}`);

  return data;
};
