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
    <Layout>
      <>
        <Section
          title={markdownData.title}
          slug='cellar'
          style='section-b'
          image1='/images/cellar-1.jpg'
          image2='/images/cellar-2.jpg'
          text2={markdownData.contentHtml}
        />
        </>
    </Layout>
  )
}