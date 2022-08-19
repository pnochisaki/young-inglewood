import Layout from '../components/layout';
import { getMarkdownData } from '../lib/markdown'

const mdDir = '_content/pages/'

export async function getStaticProps({ params }) {
  const markdownData = await getMarkdownData('contact', mdDir)
  console.log("POST", markdownData);
  return {
    props: {
      markdownData
    }
  }
}


export default function Contact({ markdownData }) {

  return (
    <Layout contact>
      <div className="contact">
        <h2 className="mobile-only">Contact</h2>
        <div className="map"><iframe src="https://snazzymaps.com/embed/416147"></iframe></div>
        <div className="copy" dangerouslySetInnerHTML={{__html: markdownData.contentHtml}}  />
        {/* <div className="copy">
          <div className="c7-subscribe"></div>
        </div> */}
      </div>
    </Layout>
  )
}