import '../styles/globals.css'
import '../fonts/fonts.css'
import $ from 'jquery'
import { useEffect } from 'react'


function MyApp({ Component, pageProps }) {
  useEffect(() => {

    $("a").each (function(){
      var href = $(this).attr('href');
      if (href.substr(0, 1) === '/') {
        console.log('internal link', href)
      } else {
        console.log('external link', href);
        $(this).on('click', function() {
          window.open(href)
          return false;          
        })

      }
    })

    
  })

  
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
