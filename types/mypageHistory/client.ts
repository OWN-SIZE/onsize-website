export interface MyPageUserInformation {
  name: string;
  email: string;
  picture: string;
  isAlreadyUser: 'pending' | 'done';
}

export interface MyPageHistory {
  recCount: number;
  recData: { id: number; userId: number; url: string; recommendSize: string }[];
}
