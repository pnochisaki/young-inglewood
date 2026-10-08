import '../styles/globals.css'
import '../fonts/fonts.css'
import $ from 'jquery'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Router from 'next/router'
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

  useEffect(() => {

    // external links in new window
    $(document)
      .off('click.externalLinks')
      .on('click.externalLinks', 'a', function (e) {
        var href = $(this).attr('href');
        if (href && href.slice(0, 1) !== '/') {
          e.preventDefault();
          e.stopPropagation();
          window.open(href, '_blank', 'noopener,noreferrer');
        }
      });

    $('.faqs ul li .box').on('click', function () {
      $(this).toggleClass('active');
    })

    $('.blog-post article .post-content img').each(function () {
      const title = $(this).attr('title');
      const alt = $(this).attr('alt');
      if (title) {
        $(this).after('<span class="img-caption">' + title + '</span>');
      }
      if (alt) {
        $(this).attr('title', alt);
      }
    })

  })

  // const onHashChangeStart = (url) => {
  //   console.log(`Path changing to ${url}`);
  // };

  // Router.events.on("hashChangeStart", onHashChangeStart);

  // return () => {
  //   Router.events.off("hashChangeStart", onHashChangeStart);
  // };

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
