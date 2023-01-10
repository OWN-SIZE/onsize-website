import { AllCategory, CreateCategory, UpdateCategoryRequest } from './client';

export interface AllCategoryResponse {
  data: AllCategory[];
}

export interface CreateCategoryResponse {
  data: CreateCategory;
}

export interface UpdateCategoryResponse {
  data: UpdateCategoryRequest;
}

export interface UpdateCategoryBodyResponse {
  data: UpdateCategoryBodyResponse;
}

export interface DeleteCategoryResponse {
  data: AllCategory;
}
