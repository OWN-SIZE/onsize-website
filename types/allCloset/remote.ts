import { ClosetOutput, isInPin } from './client';

export interface MyClosetResponse {
  data: ClosetOutput[];
}
export interface ClosetResponse {
  data: [ClosetOutput[], isInPin[], { categoryName: string }];
}

export interface IncludeCategoryResponse {
  data: number[];
}

export interface IncludeCategoryResponse {
  id: number;
  productId: number;
  categoryId: number;
}
