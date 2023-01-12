export interface TopSizeInput {
  topLength: number;
  shoulder: number;
  chest: number;
  isWidthOfTop: boolean;
}

export interface BottomSizeInput {
  bottomLength: number;
  waist: number;
  thigh: number;
  rise: number;
  hem: number;
  isWidthOfBottom: boolean;
}

export interface MySizeOutput {
  status: number;
  success: boolean;
  message: string;
}

export interface MySizeResponse {
  data: MySizeOutput;
}

