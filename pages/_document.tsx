import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width" />
        <meta name="description" content="On Size" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
