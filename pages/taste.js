import Layout from '../components/layout';
import Section from '../components/section';
import { getMarkdownData } from '../lib/markdown'

const mdDir = '_content/pages/'

export async function getStaticProps({ params }) {
  const markdownData = await getMarkdownData('discover', mdDir)
  console.log("POST", markdownData);
  return {
    props: {
      markdownData
    }
  }
}


export default function Taste({ markdownData }) {

  return (
    <Layout>
      <>
        <h1>{markdownData.title}</h1>

        <Section
          title='winery Tasting'
          slug='tasting'
          style='section-c'
          image1='/images/tasting-1.jpg'
          image2='/images/tasting-2.jpg'
          text2="<p>Young Inglewood's gently sloping organic vineyards, verdant gardens, and stately 150-year old heritage oaks form the perfect backdrop for tasting our critically acclaimed wines.<p>
          <p>Relax in the serenity of our
          tasting salon, thoughtfully
          designed to please every sense.
          Tastings are dedicated to you
          alone and customized for your <strong>personal enjoyment</strong>. Delight in our eclectic art collection as your gracious host guides you through our wines.<a href='#'>Reserve Now</a><p>
          <p>Tours are complimentary for Friends of Young Inglewood (FYI).
          <a href='/membership'>Learn More Abount FYI</a></p>"
        />

        <Section
          title='Celebrating at Young Inglewood'
          slug='celebrating'
          style='section-b'
          image1='/images/celebrating-1.jpg'
          image2='/images/celebrating-2.jpg'
          text1="<p>The next time you want to <strong>celebrate</strong> with your friends consider a wine focused occasion with Young Inglewood as your host.</p>"
          text2="<p>We have the best wines in the Napa Valley. Why not pair them with dishes prepared by the best chefs here? Create memories that will last a lifetime.<p>
          <p>Choose from a variety of settings inside the winery or outside in our tranquil gardens. Enjoy delicious food, our sumptuous wine and witty repartee.<a href='https://www.exploretock.com/younginglewood' target='_blank'>Reserve Now</a></p>"
        />

        <Section
          title='Young inglewood in your town'
          slug='travel'
          style='section-c'
          image1='/images/travel-1.jpg'
          image2='/images/travel-2.jpg'
          text2="<p>Unable to travel? Invite Young Inglewood's Director of Hospitality to come to you. Host a wine dinner with family or friends in your
          home or your favorite local
          dining spot. We'll work with
          you to design the perfect
          menu and guide you through the <strong>wine pairings</strong>.
          <a href='#'>Reserve Now</a></p>
          "
        />


      </>
    </Layout>
  )
}