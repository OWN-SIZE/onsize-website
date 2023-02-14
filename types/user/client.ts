export interface AuthInput {
  email: string;
  name: string;
  picture: string;
}

export interface AuthOutput {
  token: string;
  userId: number;
}
