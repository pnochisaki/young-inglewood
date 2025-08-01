import Head from 'next/head'
import Layout from '../components/layout'
import Meta from '../components/meta'
import { getMarkdownData } from '../lib/markdown'

const mdDir = '_content/pages/'

export async function getStaticProps({ params }) {
  const markdownData = await getMarkdownData('home', mdDir)
  console.log("POST", markdownData);
  return {
    props: {
      markdownData
    }
  }
}

export default function Home({markdownData}) {
  return (
    <>
    <Meta data={markdownData} />
      {/* <Head>
        <meta name="google-site-verification" content="gpSzpMZJC5S8co7a1vpuXsvKDpQZDVHAzxAIbuNttTA" />
      </Head> */}
    <Layout home />
    </>    
  )
}
