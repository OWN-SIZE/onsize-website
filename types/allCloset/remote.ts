export interface AllClosetOutput {
  id: string;
  images: string;
  productName: string;
  size: string;
  memo: string;
  mallName: string;
  isRecommend: boolean;
  isPin: boolean;
  link: string;
}

export interface UpdateAllClosetProductInput {
  productId: string;
}
