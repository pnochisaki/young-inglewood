import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
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
          <script type="text/javascript" src="https://cdn.commerce7.com/v2/commerce7.js" id="c7-javascript" data-tenant="young-inglewood-vineyards"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
