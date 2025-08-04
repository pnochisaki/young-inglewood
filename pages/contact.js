import Layout from '../components/layout';
import Meta from '../components/meta';
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
    <>
      <Meta data={markdownData} />
      <Layout contact data={markdownData}>
        <div className="contact">
          <h2 className="mobile-only">{markdownData.title}</h2>
          <div className="map"><iframe src="https://snazzymaps.com/embed/416147"></iframe></div>
          <div className="copy">
            <h2>{markdownData.title}</h2>
            <ul>
              <li>
                <h3>Address</h3>
                <p>{markdownData.address_line_1}<br />
                  {markdownData.address_line_2}
                  <a href={markdownData.directions_link} target="_blank">directions</a>
                  <a style={{ "margin-top": '.5rem' }} href={"tel:" + markdownData.phone}>{markdownData.phone}</a>
                </p>
              </li>
              <li>
                <h3>Hours</h3>
                <p>{markdownData.hours_line_1}<br />
                  {markdownData.hours_line_2}</p>
              </li>
              <li>
                <h3>General Inquiries</h3>
                <p><a href={'mailto:' + markdownData.email}>{markdownData.email}</a></p>
                <h3>FYI Inquiries</h3>
                <p><a href={'mailto:' + markdownData.email2}>{markdownData.email2}</a></p>
              </li>
            </ul>
            <div>
              <h3>For Reservations</h3>
              <a style={{ 'marginBottom': '15px' }} href={markdownData.reservations_link} target="_blank">Book Now</a>
              <br />
            </div>
            <div dangerouslySetInnerHTML={{ __html: markdownData.contentHtml }} />
          </div>
        </div>
      </Layout>
    </>
  )
}