import Layout from '../components/layout'
import { GoogleTagManager } from '@next/third-parties/google'

export default function Cart() {
  return (
    <Layout cart>
      <>
        <div className="cart">
          <div className="page-margins">
            <div id="c7-content"></div>
            <GoogleTagManager gtmId="GTM-TFFRHCGB" />
          </div>
        </div>
      </>
    </Layout>
  )
}
