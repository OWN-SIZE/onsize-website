export interface AllCategory {
  id: string;
  categoryName: string;
  isPinCategory: boolean;
  productNum: number;
  image: string[];
}

export interface OneCategory {
  id: string;
  userId: string; 
  image: string;
  productName: string; 
  size: string;
  memo: string;
  isRecommend: boolean;
  isPin: boolean;
  mallName: string;
  topOrBottom: number;
  productUrl: string;
  faviconUrl: string;
}

export interface CreateCategory {
  categoryName: string;
  isPinCategory: boolean;
  image: string[];
}

export interface UpdateCategoryRequest {
  targetId: string;
  editBody: {
    categoryName?: string;
    isPinCategory?: boolean;
  };
}

export interface UpdateCategoryRequestBody {
  categoryName: string;
}

