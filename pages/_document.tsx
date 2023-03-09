import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import * as gtm from '../lib/gtm';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width" />
          <meta name="description" content="옷마다 브랜드마다 모두 다른 사이즈 체계, 온사이즈에서는 나에게 꼭 맞는 사이즈를 1초 만에 알려드려요. 사이즈 추천 받고 위시리스트 저장하고 관리까지 해보세요. 6개의 사이트(무신사, 29cm, 오케이몰, SSENSE, Mr.Porter, w컨셉)에서 1초 만에 나의 옷 사이즈를 알려드려요. 미국 옷 사이즈, 유럽 옷 사이즈, 빅사이즈 등 사이즈를 알기 까다로운 의류에서 이용해 보세요. 옷 사이즈는 재는법, 옷 사이즈표, 위시리스트" />
          <meta name="keywords" content="위시리스트, 옷사이즈, 온라인쇼핑, 미국 옷 사이즈, 유럽 옷 사이즈, 빅사이즈, 옷 사이즈 재는법, 옷 사이즈표" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ overflow: 'hidden' }}>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtm.GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <div id="modal-root"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
