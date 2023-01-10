export interface ThumbNailData {
  id: string;
  categoryId?: string | string[];
  isPin: boolean;
  image: string[] | string;
  name?: string;
  size?: string | null;
  memo?: string | null;
  isRecommend?: boolean;
}
