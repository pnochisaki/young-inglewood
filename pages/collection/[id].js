import { GoogleTagManager } from '@next/third-parties/google'

import dynamic from "next/dynamic";

const C7content = dynamic(() => import("../../components/c7content"), {
  ssr: false,
});

const Layout = dynamic(() => import("../../components/layout"), {
  ssr: false,
});

export default function Collection() {

  return (
    <Layout purchase>
      <div className="page-margins">
        <C7content />
        <GoogleTagManager gtmId="GTM-TFFRHCGB" />
      </div>
    </Layout>
            
    // <C7content />

  )

}

