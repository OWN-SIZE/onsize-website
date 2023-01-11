export interface AuthInput {
  email: string;
  name: string;
}

export interface AuthOutput {
  token: string;
  userId: number;
}
