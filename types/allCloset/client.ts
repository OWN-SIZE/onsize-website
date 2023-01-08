import { AllCategory } from 'types/category/client';

export interface AllClosetOutput {
  id: number;
  userId: number;
  image: string;
  productName: string;
  size: string | null;
  memo: string | null;
  isPin: boolean;
  isRecommend: boolean;
  mallName: string;
  topOrBottom: number;
  productUrl: string;
  faviconUrl: string | null;
}

export interface UpdateAllClosetProductInput {
  productId: string;
  editBody?: {
    productName: string;
    size: string;
    memo: string;
    isPin: boolean;
  };
}
