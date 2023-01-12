export interface ThumbNailData {
  id: string;
  categoryId?: string;
  categoryName?: string;
  isPin: boolean;
  image: string[] | string;
  name?: string;
  size?: string | null;
  memo?: string | null;
  isRecommend?: boolean;
  isInPin?: boolean;
  productUrl?: string;
}
