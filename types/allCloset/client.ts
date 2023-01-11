export interface ClosetOutput {
  id: number;
  userId: number;
  image: string;
  productName: string;
  size: string | null;
  memo: string | null;
  isInPin: boolean;
  isPin: boolean;
  isRecommend: boolean;
  mallName: string;
  topOrBottom: number;
  productUrl: string;
  faviconUrl: string | null;
}

export interface UpdateClosetInput {
  categoryId?: string;
  targetId: string;
  editBody: {
    productName?: string;
    size?: string | null;
    memo?: string | null;
    isPin?: boolean;
    isInPin?: boolean;
  };
}

export interface PostClosetInput {
  postBody: {
    productId: string;
    categoryId: string;
  };
}
