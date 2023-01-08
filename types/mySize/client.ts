export interface TopSizeInput {
  topLength: number;
  shoulder: number;
  chest: number;
}

export interface BottomSizeInput {
  bottomLength: number;
  waist: number;
  thigh: number;
  rise: number;
  hem: number;
}

export interface MySizeOutput {
  status: number;
  success: boolean;
  message: string;
}

export interface MySizeResponse {
  data: MySizeOutput;
}
