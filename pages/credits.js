import Layout from '../components/layout';
import Section from '../components/section';
import { getMarkdownData } from '../lib/markdown'

const mdDir = '_content/pages/'

export async function getStaticProps({ params }) {
  const markdownData = await getMarkdownData('credits', mdDir)
  console.log("POST", markdownData);
  return {
    props: {
      markdownData
    }
  }
}


export default function Credits({ markdownData }) {

  return (
    <Layout credits>
      <>
        <Section
          title={markdownData.title}
          slug='credits'
          style='section-b'
          image1='/images/credits-1.jpg'
          image2='/images/credits-2.jpg'
          mobileImage='/images/credits-1-mobile.jpg'
          text2={markdownData.contentHtml}
        />
        </>
    </Layout>
  )
}