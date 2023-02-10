export interface RefreshInput {
  accessToken: string;
}

export interface RefreshOutput {
  token: string; //재발급된 access token
  userId: number; // 로그인한 유저 고유 아이디
}
