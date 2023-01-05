import { atom } from 'recoil';

export const accessTokenState = atom<string>({
  key: 'accessToken',
  default: '',
});

export const idTokenState = atom({
  key: 'idToken',
  default: '',
});
