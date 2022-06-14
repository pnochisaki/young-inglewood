import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Script
        src="https://cdn.commerce7.com/v2/commerce7.js"
        id="c7-javascript"
        data-tenant="young-inglewood-vineyards"
        strategy="afterInteractive"
      />
  </>
}

export default MyApp
