import { AllCategory } from 'types/category/client';

export interface AllClosetOutput extends AllCategory {
  userId: string;
  image: string;
  productName: string;
  size: string;
  memo: null;
  isRecommend: boolean;
  mallName: string;
  topOrBottom: number;
  productUrl: string;
  faviconUrl: string;
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
