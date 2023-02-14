export interface MyPageUserInformation {
  name: string;
  email: string;
  picture: string;
}

export interface MyPageHistory {
  recCount: number;
  recData: { id: number; userId: number; url: string; recommendSize: string }[];
}
