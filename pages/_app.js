import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Script
      src="https://cdn.commerce7.com/v2/commerce7.js"
      id="c7-javascript"
      data-tenant="young-inglewood-vineyards"
    />
  </>
}

export default MyApp
