import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
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
      <AsyncBoundary>
        <SessionProvider session={pageProps.session}>
          <GlobalStyle />
          <Component {...pageProps} />
        </SessionProvider>
      </AsyncBoundary>
    </QueryClientProvider>
  );
}
