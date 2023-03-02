import { PropsWithChildren, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { tokenState } from 'states/user';

import { useRefresh } from '@/hooks/queries/auth';

export const BASE_URL = process.env.NEXT_PUBLIC_END ?? '';

export default function createAxios(endpoint: string, config?: AxiosRequestConfig) {
  const axiosBasic = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json', ...config?.headers },
    ...config,
  });

  const client = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json', ...config?.headers },
    ...config,
  });

  return {
    axiosBasic,
    client,
  };
}

function AxiosInterceptor({ children }: PropsWithChildren) {
  const router = useRouter();
  const accessToken = useRecoilValue(tokenState);
  const refresh = useRefresh({ accessToken });

  const requestIntercept = client.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if (config.headers && !config.headers['Authorization']) {
        config.headers['Authorization'] = `${accessToken}`;

        return config;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  const responseIntercept = client.interceptors.response.use(
    (config) => config,
    async (error) => {
      const config = error.config;
      if (error.response.status === 401) {
        if (!config.headers['Authorization']) {
          alert('로그인 후 이용해 주세요');
          localStorage.setItem('userId', '');
          localStorage.setItem('token', '');
          router.replace('/login');
          return;
        } else {
          const token = await refresh();
          if (token) {
            config.headers['Authorization'] = `${token}`;

            return client(config);
          }
          return;
        }
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    return () => {
      client.interceptors.request.eject(requestIntercept);
      client.interceptors.response.eject(responseIntercept);
    };
  }, [requestIntercept, responseIntercept]);

  return <>{children}</>;
}

const { axiosBasic, client } = createAxios(BASE_URL);

export { axiosBasic, client, AxiosInterceptor };
