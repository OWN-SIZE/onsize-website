export interface ClosetOutput {
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

export interface UpdateClosetInput {
  productId: string;
  editBody?: {
    productName: string;
    size: string;
    memo: string;
    isPin: boolean;
  };
}
