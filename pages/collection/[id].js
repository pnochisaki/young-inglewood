import Layout from '../../components/layout';
import { GoogleTagManager } from '@next/third-parties/google'
import { unstable_noStore } from 'next/cache';

export default function Collection() {
  return (
    unstable_noStore();
    <Layout purchase>
      <div className="page-margins">
        <div id="c7-content"></div>
        <GoogleTagManager gtmId="GTM-TFFRHCGB" />
      </div>
    </Layout>
  )

}

