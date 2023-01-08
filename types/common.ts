export interface closetData {
  id: string;
  image?: string;
  productName?: string;
  size?: string | null;
  memo: string;
  mallName?: string;
  isRecommend?: boolean;
  isPin: boolean;
  link?: string;
}

export interface ThumbNailData {
  id: string;
  image?: string;
  size?: string | null;
  isRecommend?: boolean;
  isPin: boolean;
}
