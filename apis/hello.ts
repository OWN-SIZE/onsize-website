import { client } from 'apis';

// example
export const getData = async () => {
  const { data } = await client.get('/url');
};
