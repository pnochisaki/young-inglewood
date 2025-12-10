import C7content from '../../components/c7content';
import Layout from '../../components/layout';
import { GoogleTagManager } from '@next/third-parties/google'
import { useEffect } from 'react';

export default function Collection() {

  return (
    <Layout purchase>
      <div className="page-margins">
        <C7content />
        <GoogleTagManager gtmId="GTM-TFFRHCGB" />
      </div>
    </Layout>
  )

}

