import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'styles/GlobalStyle';

import { AxiosInterceptor } from '../apis';
import * as gtag from '../lib/gtag';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
      },
    },
  });
  // GA 설정
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <AxiosInterceptor>
          <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}>
            <Head>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${gtag.GA_TRACKING_ID}', { 
                    page_path: window.location.pathname,
                  });`,
                }}
              />
              <title>Own Size</title>
            </Head>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />

            <GlobalStyle />
            <Component {...pageProps} />
          </GoogleOAuthProvider>
        </AxiosInterceptor>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
