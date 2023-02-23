export interface AuthInput {
  email: string;
  name: string;
  picture: string;
}

export interface AuthOutput {
  token: string;
  userId: number;
}

export interface LogoutInput {
  userId: number;
  email: string;
  name: string;
}

export interface LogoutOutput {
  userId: number;
  email: string;
  name: string;
}
export interface WithdrawOutput {
  userId: number;
  email: string;
  name: string;
}
