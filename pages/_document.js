import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/hky1kqm.css" />
        <meta name='description' content='Young Inglewood' />
        <link href="https://cdn.commerce7.com/v2/commerce7.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          strategy="beforeInteractive"
          src="https://cdn.commerce7.com/v2/commerce7.js"
          id="c7-javascript"
          data-tenant="young-inglewood-vineyards" />
      </body>
    </Html>
  )
}  
