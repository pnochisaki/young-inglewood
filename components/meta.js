import Head from 'next/head'

export default function Meta(props) {
  return (
    <>
      <Head>
        <title>{props.data.title}</title>
        <meta name="google-site-verification" content="NNmi-88pWy8gKwkG7yajuZ__mdboUCfC6s9R8eN35JM" />
        <meta name="description" content={props.data.description} />
        <meta property="og:image" content={"https://www.younginglewood.com" + props.data.og_image} />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no"/>
      </Head>
    </>
  )
}



