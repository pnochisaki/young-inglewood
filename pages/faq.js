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
    <Layout faq>
      <div className='faq'>
        <img className='image-1' src='/images/faq.jpg' alt='image'/>
        <div className="copy" dangerouslySetInnerHTML={{__html: markdownData.contentHtml}}  />
      </div>
    </Layout>
  )
}