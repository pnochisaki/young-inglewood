import Layout from '../components/layout';
import { getMarkdownData } from '../lib/markdown'

const mdDir = '_content/pages/'

export async function getStaticProps({ params }) {
  const markdownData = await getMarkdownData('faq', mdDir)
  console.log("POST", markdownData);
  return {
    props: {
      markdownData
    }
  }
}


export default function Faq({ markdownData }) {

  return (
    <Layout>
      <div className="page-margins">
        <h2>{markdownData.title}</h2>
        <div className="copy" dangerouslySetInnerHTML={{__html: markdownData.contentHtml}}  />
      </div>
    </Layout>
  )
}