import Layout from '../components/layout';
import Meta from '../components/meta';
import Section from '../components/section';
import { getMarkdownData } from '../lib/markdown'

const mdDir = '_content/pages/'

export async function getStaticProps({ params }) {
  const markdownData = await getMarkdownData('visit', mdDir)
  console.log("POST", markdownData);
  return {
    props: {
      markdownData
    }
  }
}

export default function Visit({ markdownData }) {

  return (
    <>
      <Meta data={markdownData} />
      
      <Layout visit data={markdownData}>
        <>

          <h1 dangerouslySetInnerHTML={{__html: markdownData.headline}} />

          <Section
            title='Winery Tasting'
            slug='tasting'
            style='section-c'
            mobileImage='/images/tasting-1-mobile.jpg'
            image1='/images/tasting-1.jpg'
            image2='/images/tasting-2.jpg'
            text2="<p>Young Inglewood's gently sloping organic vineyards, verdant gardens, and stately 150-year old heritage oaks form the perfect backdrop for tasting our critically acclaimed wines.</p>
          <p>Relax in the serenity of our
          tasting salon, thoughtfully
          designed to please every sense.
          Tastings are dedicated to you
          alone and customized for your <strong>personal enjoyment</strong> Delight in our eclectic art collection as your gracious host guides you<br class='desktop-only' />through our wines.<br><a class='button-shadow' href='https://www.exploretock.com/younginglewood' target='_blank' >Reserve Now</a><br class='desktop-only' /><p>
          <p>Tours are complimentary for Friends of Young Inglewood (FYI).<br>
          <a class='button-shadow' href='/membership'>Learn More About FYI</a></p>"
          />

          <Section
            title='Celebrating at Young Inglewood'
            slug='celebrating'
            style='section-b'
            mobileImage='/images/celebrating-1-mobile.jpg'
            image1='/images/celebrating-1.jpg'
            image2='/images/celebrating-2.jpg'
            text1="<p>The next time you want to <strong>celebrate</strong> with your friends consider a wine focused occasion with Young Inglewood as your host.</p>"
            text2="<p>We are making truly special wines in our beautiful corner of the Napa Valley. Why not pair them with dishes prepared by the best local chefs? Create memories that will last a lifetime.<p>
          <p>Choose from a variety of settings inside the winery or outside in our tranquil gardens. Enjoy delicious food, our sumptuous wine and witty repartee.<br><a class='button-shadow' href='https://forms.gle/bW3GbXAbYyiGVtaP7' target='_blank'>Reserve Now</a></p>"
          />

          <Section
            title='Young inglewood in your town'
            slug='travel'
            style='section-c'
            mobileImage='/images/travel-1-mobile.jpg'
            image1='/images/travel-1.jpg'
            image2='/images/travel-2.jpg'
            text2="<p>Unable to travel? Invite Young Inglewood's Director of Hospitality to come to you. Host a wine dinner with family or friends in your
          home or your favorite local
          dining spot. We'll work with
          you to design the perfect
          menu and guide you through our <span class='mobile-only'><strong> wine</strong></span><span class='desktop-only'><strong>wine pairings</strong></span>
          <br><a class='button-shadow' href='https://forms.gle/bW3GbXAbYyiGVtaP7' target='_blank'>Reserve Now</a></p>
          "
          />


        </>
      </Layout>
    </>
  )
}