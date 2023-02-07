import { client } from 'apis';
import { EmailInput } from 'types/welcome/client';
import { EmailResponse } from 'types/welcome/remote';

export const fetchEmail = async () => {
  const {
    data: { data },
  } = await client.get<EmailResponse>(`/user`);
  return data;
};
export const postEmail = async (emailData: EmailInput) => {
  const { data } = await client.post(`/user`, emailData, {
    headers: {
      'content-type': 'application/json',
    },
  });
  return data;
};
