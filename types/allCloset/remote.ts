import { ClosetOutput } from './client';

export interface ClosetResponse {
  data: ClosetOutput[];
}

export interface IncludeCategoryResponse {
  data: number[];
}

export interface IncludeCategoryResponse {
  id: number;
  productId: number;
  categoryId: number;
}
