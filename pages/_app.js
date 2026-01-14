import '../styles/globals.css'
import '../fonts/fonts.css'
import $ from 'jquery'
import { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Router from 'next/router'


function MyApp({ Component, pageProps }) {
  useEffect(() => {

    // external links in new window
    // $("a").each(function () {
    //   var href = $(this).attr('href');
    //   if (href.slice(0, 1) === '/') {
    //     // console.log('internal link', href)
    //   } else {
    //     // console.log('external link', href);
    //     $(this).on('click', function () {
    //       window.open(href)
    //       return false;
    //     })

    //   }
    // })
    $('.faqs ul li .box').on('click', function () {
      $(this).toggleClass('active');
    })

    $('.blog-post article img').each(function(){
      const title = $(this).attr('title');
      if (title) {
        $(this).after('<span class="img-caption">'+title+'</span>');
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
    <Script
      strategy="beforeInteractive"
      src="https://cdn.commerce7.com/v2/commerce7.js"
      id="c7-javascript"
      data-tenant="young-inglewood-vineyards"
    />
  </>
}

export default MyApp
