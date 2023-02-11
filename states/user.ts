import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const tokenState = atom({
  key: 'token',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const userIdState = atom({
  key: 'userId',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const isRegisterState = atom({
  key: 'isRegister',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
