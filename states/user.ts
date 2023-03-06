import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

interface UserStateType {
  token: string;
  userId: number;
}

export const userState = atom<UserStateType>({
  key: 'user',
  default: {
    token: '',
    userId: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
