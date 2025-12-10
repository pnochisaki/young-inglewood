import C7content from '../../components/c7content';
import Layout from '../../components/layout';
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script';

export default function Collection() {

  return (
    <Layout purchase>
      <div className="page-margins">
        <C7content />
        <GoogleTagManager gtmId="GTM-TFFRHCGB" />
        <Script
          strategy="beforeInteractive"
          src="https://cdn.commerce7.com/v2/commerce7.js"
          id="c7-javascript"
          data-tenant="young-inglewood-vineyards">
        </Script>
      </div>
    </Layout>
  )

}

