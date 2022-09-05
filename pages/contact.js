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

        <div className="copy">
          <h2>contact</h2>
          <ul>
            <li>
              <h3>Address</h3>
              <p>1919 Inglewood Ave.<br />
                Saint Helena, CA 94574
                <a href="https://www.google.com/maps/dir//Young+Inglewood+Vineyards,+1919+Inglewood+Ave,+St+Helena,+CA+94574/@38.4829002,-122.4576348,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80845129d0b14dbd:0xc5e5a83d96dde51d!2m2!1d-122.4554103!2d38.4828658!3e0" target="_blank">directions</a>
                <a style={{"margin-top": '.5rem'}} href="tel:707-200-4572">707-200-4572</a>
              </p>
            </li>
            <li>
              <h3>Hours</h3>
              <p>Sunday - Saturday<br />
                10:00AM – 3:00PM</p>
            </li>
            <li>
              <h3>Email</h3>
              <p><a href="mailto:hosp@younginglewood.com">hosp@younginglewood.com</a></p>
            </li>
          </ul>
          <div dangerouslySetInnerHTML={{ __html: markdownData.contentHtml }} />
        </div>
        
      </div>
    </Layout>
  )
}