import Layout from '../components/layout';
import Section from '../components/section';
import { getMarkdownData } from '../lib/markdown'

const mdDir = '_content/pages/'

export async function getStaticProps({ params }) {
  const markdownData = await getMarkdownData('membership', mdDir)
  console.log("POST", markdownData);
  return {
    props: {
      markdownData
    }
  }
}


export default function Membership({ markdownData }) {

  return (
    <Layout>
      <>
        <h1>{markdownData.title}</h1>

        <Section
          title='Friends of young inglewood'
          slug='membership'
          style='section-a'
          image1='/images/membership-1.jpg'
          image2='/images/membership-2.jpg'
          text1="<p>You’re going to love being an FYI member. Our FYI members are the first to hear about new wine releases and the first to get allocations so you’ll never miss another Young Inglewood release.</p>"
          text2="<p>Our team will be delighted to help you customize your FYI membership to suit your taste, so you’ll always get just what you want.</p>
          <p>Relax and enjoy our beautiful surroundings at a complimentary visit and tasting for you and up to four of your friends. Members only events are also open to you.</p>"
        />


      </>
    </Layout>
  )
}