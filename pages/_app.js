import '../styles/globals.css'
import '../fonts/fonts.css'
import $ from 'jquery'
import { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  useEffect(() => {

    $("a").each(function () {
      var href = $(this).attr('href');
      if (href.substr(0, 1) === '/') {
        console.log('internal link', href)
      } else {
        console.log('external link', href);
        $(this).on('click', function () {
          window.open(href)
          return false;
        })

      }
    })


  })


  return <>
    <Head>
      <title>Young Inglewood</title>
    </Head>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

    <Script strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
    </Script>
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
