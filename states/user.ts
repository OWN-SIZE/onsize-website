import { atom } from 'recoil';

export const tokenState = atom({
  key: 'token',
  default: '',
});
