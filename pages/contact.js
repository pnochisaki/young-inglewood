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
    <Layout>
      <div className="contact">
        <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6396325.203300934!2d-126.93786797499996!3d38.482896000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80845129d0b14dbd%3A0xc5e5a83d96dde51d!2sYoung%20Inglewood%20Vineyards!5e0!3m2!1sen!2sus!4v1656359037266!5m2!1sen!2sus"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        <div className="copy" dangerouslySetInnerHTML={{__html: markdownData.contentHtml}}  />
      </div>
    </Layout>
  )
}