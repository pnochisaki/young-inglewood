import Head from 'next/head'

export default function Meta(props) {
  return (
    <>
      <Head>
      <title>{props.data.title}</title>
      <meta name="description" content={props.data.description} />
      <meta property="og:image" content={"https://www.younginglewood.com/" + props.data.og_image} />
      </Head>
    </>
  )
}



