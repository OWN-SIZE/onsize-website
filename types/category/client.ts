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
