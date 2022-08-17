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
        <div className="copy">
          <h2>FAQs</h2>
          <img className='image-1 desktop-only' src='/images/faq.jpg' alt='image' />
          <img className='image-1 mobile-only' src='/images/faq-mobile.jpg' alt='image' />
          <br /><br />
          <div dangerouslySetInnerHTML={{ __html: markdownData.contentHtml }} />
        </div>
      </div>
    </Layout>
  )
}