import Layout from '../../components/layout';
import { GoogleTagManager } from '@next/third-parties/google'


export default function Profile() {

  return (
    <Layout account>
      <GoogleTagManager gtmId="GTM-TFFRHCGB" />
      <div id="c7-content"></div>
    </Layout>
  )

}

