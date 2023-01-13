import axios from 'axios';

// TODO : login token 및 base url 설정
const token = ''
export const BASE_URL = `${process.env.NEXT_PUBLIC_END}`;

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `${token}`,
  },
});
