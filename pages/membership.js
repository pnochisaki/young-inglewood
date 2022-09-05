import Layout from '../components/layout';
import Section from '../components/section';
import { useState, useEffect } from 'react';
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

export default function Membership({markdownData}) {

  const [clubs, setClubs] = useState(null);

  const fetchClubs = () => {
    fetch('/api/clubs')
      .then(response => response.json())
      .then(data => {
        setClubs(data.clubs)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  useEffect(() => {
    fetchClubs();
  }, [])

  const [activeItem, setActiveItem] = useState(-1);
  const handleClick = (e) => {
    const isActive = (e.currentTarget.parentNode.parentNode.classList.contains('active'))
    if (!isActive) {
      e.currentTarget.parentNode.parentNode.classList.add("active");
    } else {
      e.currentTarget.parentNode.parentNode.classList.remove("active");
    }
  }

  return (
    <Layout membership>
      <>
        <h1>Membership</h1>
        <Section
          title='Friends of young inglewood'
          slug='membership'
          style='section-a'
          mobileImage='/images/membership-1-mobile.jpg'
          image1='/images/membership-1.jpg'
          image2='/images/membership-2.jpg'
          text1="<p>You are going to love being an FYI (Friends of Young Inglewood) member. Our FYI members are the first to hear about new wine releases and the first to get allocations so you’ll never miss another Young Inglewood release.</p>"
          text2="<p>Our team will be delighted to help you customize your FYI membership to suit your taste, so you’ll always get just what you want.</p>
          <p>Relax and enjoy our beautiful surroundings at a complimentary visit and estate tasting for you and up to three of your friends. Members only events are also open to you.</p>"
        />

        <div className="membership-details">
            <div dangerouslySetInnerHTML={{ __html: markdownData.contentHtml }} />
          <br />
          <h3 id="membership">CHOOSE YOUR MEMBERSHIP</h3>
          <div className="table">

            {console.log(clubs)}

            {clubs && clubs
              .filter(club => club.webStatus == 'Available')
              .map((club, index) => {
                return <div
                  key={club.slug}
                  id={club.slug}
                  className={"club-row"}
                >

                  <div><h3>{club.title.split('-')[0].replace('Friends of Young Inglewood', '').trim()}</h3></div>
                  <div><p>{club.title.split('-')[1]}</p></div>
                  <div><div dangerouslySetInnerHTML={{ __html: club.content }}></div>
                    {/* <div className="expanded"
                      dangerouslySetInnerHTML={{ __html: club.content }}
                    /> */}
                  </div>
                  <div>{club.title.split('-')[0].replace('Friends of Young Inglewood', '').trim() === 'Epic' ?
                    <div><a className="c7-btn contact-button" href="/contact"><span>Contact Us</span></a></div> :
                    <div dangerouslySetInnerHTML={{ __html: '<div class="c7-club-join-button" data-club-slug="' + club.slug + '"></div>' }} />
                  }

                  </div>
                  <div>
                    <div onClick={handleClick} className='c7-btn c7-btn--primary show-less'>Less Detail</div>
                    <div onClick={handleClick} className='c7-btn c7-btn--primary show-more'>More Detail</div>
                  </div>
                </div>
              })}
          </div>
        </div>



      </>
    </Layout>
  )
}