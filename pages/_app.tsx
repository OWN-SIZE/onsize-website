import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import GlobalStyle from 'styles/GlobalStyle';

import { AsyncBoundary } from 'components/common/AsyncBoundary';
import Layout from 'components/common/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
  });

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <AsyncBoundary>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AsyncBoundary>
      </QueryClientProvider>
    </>
  );
}
