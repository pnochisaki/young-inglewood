import '../styles/globals.css'
import '../fonts/fonts.css'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'
import CookieConsent from '../components/cookieConsent'
import { getStoredConsent } from '../lib/cookieConsent'


function MyApp({ Component, pageProps }) {

  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    const consent = getStoredConsent()
    if (consent && consent.status === 'accepted') {
      setAnalyticsEnabled(true)
    }
  }, [])


  return <>
    <Head>
      <title>Young Inglewood</title>
    </Head>
    <Component {...pageProps} />
    <CookieConsent onAccept={() => setAnalyticsEnabled(true)} />
    {analyticsEnabled && <GoogleTagManager gtmId="GTM-TFFRHCGB" />}
    <Script
      strategy="beforeInteractive"
      src="https://cdn.commerce7.com/v2/commerce7.js"
      id="c7-javascript"
      data-tenant="young-inglewood-vineyards"
    />
  </>
}

export default MyApp
