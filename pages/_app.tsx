import { QueryClient, QueryClientProvider } from 'react-query';
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'styles/GlobalStyle';

import { AsyncBoundary } from 'components/common/AsyncBoundary';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}>
          <AsyncBoundary>
            <Head>
              <title>Own Size</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
          </AsyncBoundary>
        </GoogleOAuthProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
