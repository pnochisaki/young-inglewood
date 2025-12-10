import { Html, Head, Main, Script, NextScript } from 'next/document'


export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/hky1kqm.css" />
        <link href="https://cdn.commerce7.com/v2/commerce7.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <script
          strategy="beforeInteractive"
          src="https://cdn.commerce7.com/v2/commerce7.js"
          id="c7-javascript"
          data-tenant="young-inglewood-vineyards" /> */}
      </body>
    </Html>
  )
}  
