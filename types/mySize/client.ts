export interface TopSizeInput {
  [key: string]: number | boolean | string;
  topLength: number;
  shoulder: number;
  chest: number;
  isWidthOfTop: boolean;
  isAlreadyUser: string;
}

export interface BottomSizeInput {
  [key: string]: number | boolean | string;
  bottomLength: number;
  waist: number;
  thigh: number;
  rise: number;
  hem: number;
  isWidthOfBottom: boolean;
  isAlreadyUser: string;
}

export interface MySizeOutput {
  status: number;
  success: boolean;
  message: string;
}

export interface MySizeResponse {
  data: MySizeOutput;
}
