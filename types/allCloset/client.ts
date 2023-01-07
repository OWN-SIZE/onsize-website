export interface AllClosetOutput {
  id: string;
  image: string;
  productName: string;
  size: string | null;
  memo: string;
  mallName: string;
  isRecommend: boolean;
  isPin: boolean;
  link: string;
}

export interface UpdateAllClosetProductInput {
  productId: string;
}
