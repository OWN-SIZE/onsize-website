import { AllCategory, CreateCategory } from './client';

export interface AllCategoryResponse {
  data: AllCategory[];
}

export interface CreateCategoryResponse {
  data: CreateCategory;
}

export interface DeleteCategoryResponse {
  data: AllCategory;
}