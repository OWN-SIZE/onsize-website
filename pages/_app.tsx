import { QueryClient, QueryClientProvider } from 'react-query';
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'styles/GlobalStyle';

import { AxiosInterceptor } from '../apis';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <AxiosInterceptor>
          <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}>
            <Head>
              <title>Own Size</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
          </GoogleOAuthProvider>
        </AxiosInterceptor>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
