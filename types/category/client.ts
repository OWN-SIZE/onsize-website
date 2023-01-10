export interface AllCategory {
  id: string;
  categoryName: string;
  isPinCategory: boolean;
  productNum: number;
  image: string[];
}

export interface CreateCategory {
  categoryName: string;
  isPinCategory: boolean;
  image: string[];
}

export interface UpdateCategoryRequest {
  categoryId: string;
  categoryName: string;
}

export interface UpdateCategoryRequestBody {
  categoryName: string;

}
