import Layout from '../components/layout'
import { GoogleTagManager } from '@next/third-parties/google'

export default function Club() {
  return (
    <Layout club>
      <>
        <div className="club">
          <div className="page-margins">
            <div className="copy">
              <div id="c7-content"></div>
              <GoogleTagManager gtmId="GTM-TFFRHCGB" />
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
