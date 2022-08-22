import '../styles/globals.css'
import '../fonts/fonts.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    {/* <Script
      strategy="beforeInteractive"
      src="https://cdn.commerce7.com/v2/commerce7.js"
      id="c7-javascript"
      data-tenant="young-inglewood-vineyards">
    </Script> */}
  </>
}

export default MyApp
