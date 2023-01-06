import axios from 'axios';

// TODO : login token 및 base url 설정
const token = '';
export const BASE_URL = 'https://b540b816-ab19-4814-8b1d-07476cfa7ded.mock.pstmn.io';

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
