import C7content from '../../components/c7content';
import Layout from '../../components/layout';
import { GoogleTagManager } from '@next/third-parties/google'

export default function Collection() {

  return (
    <Layout purchase>
      <div className="page-margins">
        <C7content />
        {/* <div id="c7-content"></div> */}
        <GoogleTagManager gtmId="GTM-TFFRHCGB" />
      </div>
    </Layout>
  )

}

