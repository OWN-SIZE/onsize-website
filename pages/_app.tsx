import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';

import { AsyncBoundary } from 'components/common/AsyncBoundary';
import Layout from 'components/common/Layout';

import '../styles/globals.css';

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
      <AsyncBoundary>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AsyncBoundary>
    </QueryClientProvider>
  );
}
