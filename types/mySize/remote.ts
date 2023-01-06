export interface TopSizeInput {
  topLength: number;
  shoulder: number;
  chest: number;
}

export interface TopSizeOutput {
  status: number;
  success: boolean;
  message: string;
}
