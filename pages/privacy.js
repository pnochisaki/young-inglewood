import Layout from '../components/layout';
import Meta from '../components/meta';
import { getMarkdownData } from '../lib/markdown'

const mdDir = '_content/pages/'

export async function getStaticProps({ params }) {
  const markdownData = await getMarkdownData('privacy', mdDir)
  console.log("POST", markdownData);
  return {
    props: {
      markdownData
    }
  }
}


export default function privacy({ markdownData }) {

  return (
    <>
      <Meta data={markdownData} />
      <Layout privacy>
        <div className='privacy'>
          <div className="copy">
            <h1 dangerouslySetInnerHTML={{__html: markdownData.headline}} />
            {/* <img className='image-1 desktop-only' src='/images/privacy.jpg' alt='image' />
            <img className='image-1 mobile-only' src='/images/privacy-mobile.jpg' alt='image' />
            <div className="mobile-only">
              <br />
            </div> */}
            <div dangerouslySetInnerHTML={{ __html: markdownData.contentHtml }} />
          </div>
        </div>
      </Layout>
    </>
  )
}