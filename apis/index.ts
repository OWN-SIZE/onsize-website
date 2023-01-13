import axios from 'axios';

// TODO : login token 및 base url 설정
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlZXNlb29vQHNvb2tteXVuZy5hYy5rciIsImlhdCI6MTY3MzU4OTcwMn0.ZmUrgpDEbFW63y-UeHptCVuso5CJ-CKmzh669MmL05Q';
export const BASE_URL = `${process.env.NEXT_PUBLIC_END}`;

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `${token}`,
  },
});
