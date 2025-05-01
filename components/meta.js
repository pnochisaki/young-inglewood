import Head from 'next/head'
import { GoogleTagManager } from '@next/third-parties/google'

export default function Meta(props) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-TFFRHCGB" />
      <Head>
        <title>{props.data.title}</title>
        <meta name="description" content={props.data.description} />
        <meta property="og:image" content={"https://www.younginglewood.com" + props.data.og_image} />
      </Head>
    </>
  )
}



