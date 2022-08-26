import Layout from '../components/layout';
import Section from '../components/section';


export default function Discover() {

  return (
    <Layout discover>
      <>
        <h1>Wine</h1>

        <Section
          title='Farm'
          slug='farm'
          style='section-a'
          mobileImage='/images/farm-1-mobile.jpg'
          image1='/images/farm-1.jpg'
          image2='/images/farm-2.jpg'
          text1="<p>Working <strong>with, not against</strong> nature, our vines are organically and regeneratively farmed, vine by vine, by hand and using gentle equipment when needed. Sparsely irrigation promotes deep vine roots, allowing the vines to benefit from underground water reserves.</p>"
          text2="<p>Optimally sited on an alluvial fan that weaves in and out at the base of the Mayacamas, the gravel in our classic terroir aerates the soil and promotes good drainage.</p><p>We tend our gently sloping estate vineyards in tune with the natural life cycle of our vines. Cover crops, bat and bird boxes, and the introduction of beneficial insects protect the health of the vines without compromising the soil.</p>"
        />

        <Section
          title='Cellar'
          slug='cellar'
          style='section-b'
          mobileImage='/images/cellar-1-mobile.jpg'
          image1='/images/cellar-1.jpg'
          image2='/images/cellar-2.jpg'
          text1="<p><span class='desktop-only'>Young Inglewood</span><span class='mobile-only'>Our</span> wines embody <strong>balance</strong> <br />Non-interventionist winemaking is key to translating our estate’s signature character into wines of elegance and grace.</p>"
          text2="<p>Using sight, touch, and taste, we wait for the optimal balance of sugar, acid and flavor before hand harvesting our grapes.</p>
          <p>Our native indigenous yeasts ferment our wine. They are an integral part of what makes our wines authentically ours.</p>
          <p>A short sojourn in stainless steel protects the purity of our Rosé, while extended aging in French oak builds complexity in our other wines.</p>"
        />


        <section className='team'>
          <div className='team-1 float-image' style={{ backgroundImage: `url(/images/team-1.jpg)` }} />
          <h2>Team</h2>
          <div className='mobile-image' style={{ backgroundImage: `url(/images/team-1-mobile.jpg)` }} />
          <p>Committed to upholding our <strong>values</strong>, our small but mighty team provides the foundation for our vines and wines to thrive.</p>

          <div className="team-listing">
            <ul>
              <li><img src="/images/team-listing-1.jpg" alt="Team Image" /><div className="team-text">Scott Young and Jacky Young collaborate to produce delicious wines authentic to our estate.</div></li>
              <li><img src="/images/team-listing-2.jpg" alt="Team Image" /><div className="team-text jim">Jim Young works to ensure a smoothly operating winery.</div></li>
              <li><img src="/images/team-listing-3.jpg" alt="Team Image" /><div className="team-text">Michael Swenton takes meticulous care of our wines from field to bottle.</div></li>
              <li><img src="/images/team-listing-4.jpg" alt="Team Image" /><div className="team-text">Mark Simon takes care of our Friends of Young Inglewood, while Peter Greerty greets and hosts our guests.</div></li>
            </ul>
          </div>
        </section>

      </>
    </Layout>
  )
}