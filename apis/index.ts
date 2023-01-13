import axios from 'axios';

// TODO : login token 및 base url 설정
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlZXNlb29vQHNvb2tteXVuZy5hYy5rciIsImlhdCI6MTY3MzUxNDYwMX0.M3m4KVWekKx8aeNVyj-PkQzXyazHho3w_eabT6VT5F8';
export const BASE_URL = `${process.env.NEXT_PUBLIC_END}`;

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `${token}`,
  },
});
