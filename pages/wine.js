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


export default function Wine({ markdownData }) {

  return (
    <Layout wine>
      <>
        <h1>{markdownData.title}</h1>

        <Section
          title='Wine'
          slug='wine'
          style='section-b'
          mobileImage='/images/wine-1-mobile.jpg'
          image1='/images/wine-1.jpg'
          image2='/images/wine-2.jpg'
          text1="<p>Young Inglewood makes <strong>wines of place</strong></p>"
          text2="<p>With sustainable and thoughtful stewardship of our Napa estate, we produce beautiful and interesting wines with an old world sensibility.</p><p>Our minimalist approach to winemaking protects the pedigree of our wines. Balance and elegance are our guiding principles.</p>"
        />

        <Section
          title='Estate Wines'
          slug='estate'
          style='section-a'
          mobileImage='/images/estate-1-mobile.jpg'
          image1='/images/estate-1.jpg'
          image2='/images/estate-2.jpg'
          text1="<p>Our <strong>flagship</strong> wine is our Estate Cabernet Sauvignon, which in classic Bordeaux style is Cabernet Sauvignon blended with small quantities of our other varietals.
          This wine especially reflects our superb terroir that we steward and cultivate.<a href='/collection/estate-cabernet'>Purchase estate</a></p>"
          text2="<p>Our Reserve Cabernet Sauvignon is extra special, made from the grapes grown in the finest blocks of our vineyard. This beautifully rich full-bodied wine elevates any occasion. <a href='/collection/estate-cabernet'>Purchase Reserve</a></p>
          <p>As the name suggests, our Right Bank Blend is a homage to the wines of Saint Emilion, a beguiling blend of Cabernet Franc and Merlot.<a href='/collection/right-bank-blend'>Purchase Right Bank</a></p>"
        />

        <Section
          title='Playful Varietals'
          slug='varietals'
          style='section-a'
          mobileImage='/images/varietals-1-mobile.jpg'
          image1='/images/varietals-1.jpg'
          text1="<p>Each varietal we grow has its <strong>own character</strong> and story, too good not to tell.</p>
          <p>Every vintage we show the lesser known grapes at their best with our varietal red bottlings of Cabernet Franc, Malbec, Merlot and Petit Verdot.
          <a href='/collection/varietal-reds'>Purchase Varietal Reds</a></p>
          <p>Delicately colored, crisp and refreshing, our Vin Clair Rosé shows the lighter side of Malbec and Merlot.
          <a href='/collection/rose'>Purchase Vin Clair Rosé </a></p>
          <p>Our estate Aligoté is a rarity in California and indeed the United States. Don't miss this special white wine. The grapes for our elegant Burgundy style Napa Valley Chardonnay are grown in the Oak Knoll district, world renowned for excellent Chardonnay.
          <a href='/collection/varietal-whites'>Purchase Varietal Whites </a></p>
          "
        />

        <Section
          title='Library'
          slug='library'
          style='section-b'
          mobileImage='/images/library-1-mobile.jpg'
          image1='/images/library-1.jpg'
          image2='/images/library-2.jpg'
          text1="<p>With every wine we make, graceful <strong>aging</strong> is a primary characteristic.</p>"
          text2="<p>We pull several cases of each vintage for our wine library and check in on them regularly. At special events we share our favorite vintages. Each year we release some to you.<a href='/collection/library'>Purchase Library Offering</a></p>"
        />

        <Section
          title='Venn'
          slug='venn'
          style='section-a'
          mobileImage='/images/venn-1-mobile.jpg'
          image1='/images/venn-1.jpg'
          image2='/images/venn-2.jpg'
          text1="<p>We’re very excited about our <strong>sister label</strong> VENN.</p>"
          text2="<p>The idea came out of a simple question: how does the philosophy of old school Napa Cabernet intersect our modern approachable wine making culture? This label is filled with interesting whites and reds. Check it out:<a href='https://venn.wine' target='_blank'>Venn.wine</a></p>"
        />

      </>
    </Layout>
  )
}