import Layout from '../components/layout';
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


export default function Discover({ markdownData }) {

  return (
    <Layout>
      <>
        <h1>{markdownData.title}</h1>

        <section className='farm'>
          <div className='farm-1 float-image' style={{ backgroundImage: `url(/images/farm-1.jpg)` }} />
          <h2>Farm</h2>
          <p>Working <strong>with, not against</strong> nature, our vines are organically and regeneratively farmed, vine by vine, by hand and using gentle equipment when needed. Sparsely irrigation promotes deep vine roots, allowing the vines to benefit from underground water reserves.</p>
          <div className='farm-2 float-image' style={{ backgroundImage: `url(/images/farm-2.jpg)` }} />
          <p>Optimally sited on an alluvial fan that weaves in and out at the base of the Mayacamas, the gravel in our classic terroir aerates the soil and promotes good drainage.</p>
          <p>We tend our gently sloping estate vineyards in tune with the natural life cycle of our vines. Cover crops, bat and bird boxes, and the introduction of beneficial insects protect the health of the vines without compromising the soil.</p>
        </section>

        <section className='cellar'>
          <div className='cellar-1 float-image' style={{ backgroundImage: `url(/images/cellar-1.jpg)` }} />
          <h2>Cellar</h2>
          <p>Young Inglewood wines embody <strong>balance</strong>. Non-interventionist winemaking is key to translating our estate&lsquo;s signature character into wines of elegance and grace.</p>
          <div className='cellar-2 float-image' style={{ backgroundImage: `url(/images/cellar-2.jpg)` }} />
          <p>Using sight, touch, and taste, we wait for the optimal balance of sugar, acid and flavor before hand harvesting our grapes.</p>
          <p>Our native indigenous yeasts ferment our wine. They are an integral part of what makes our wines authentically ours.</p>
          <p>A short sojourn in stainless steel protects the purity of our Rosé, while extended aging in French oak builds complexity in our other wines.</p>
        </section>

        <section className='team'>
          <div className='team-1 float-image' style={{ backgroundImage: `url(/images/team-1.jpg)` }} />
          <h2>Team</h2>
          <p>Committed to upholding our <strong>values</strong>, our small but mighty team provides the foundation for our vines and wines to thrive.</p>
          
          <div className="team-listing">
            <ul>
            <li><img src="/images/team-listing-1.jpg" alt="Team Image" />Scott Young and Jacky Young collaborate to produce delicious wines authentic to our estate.</li>
            <li><img src="/images/team-listing-2.jpg" alt="Team Image" />Tina Minor, Mary Young and Jim Young work together for a smoothly operating winery and a lively social network.</li>
            <li><img src="/images/team-listing-3.jpg" alt="Team Image" />Michael Swenton takes meticulous care of our wines from field to bottle.</li>
            <li><img src="/images/team-listing-4.jpg" alt="Team Image" />Mark Simon takes care of our Friends of Young Inglewood, while Peter Greerty greets and hosts our guests.</li>
            </ul>
          </div>
        </section>

      </>
    </Layout>
  )
}