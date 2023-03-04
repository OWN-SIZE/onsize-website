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
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const isAlreadyUserState = atom<'pending' | 'done'>({
  key: 'isAlreadyUserState',
  default: 'pending',
  effects_UNSTABLE: [persistAtom],
});
