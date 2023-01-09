export interface closetData {
  id: string;
  image?: string;
  productName?: string;
  size?: string | null;
  memo?: string;
  mallName?: string;
  isRecommend?: boolean;
  isPin: boolean;
  link?: string;
}

export interface ThumbNailData {
  id: string;
  isPin: boolean;
  image?: string[];
  name?: string;
  size?: string | null;
  memo?: string | null;
  isRecommend?: boolean;
}