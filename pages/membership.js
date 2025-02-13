import Layout from '../components/layout';
import Section from '../components/section';
import { useState, useEffect } from 'react';
import { getMarkdownData } from '../lib/markdown'
import Meta from '../components/meta';
import $ from 'jquery'

const userPass = Buffer.from(process.env.C7_USER + ":" + process.env.C7_PASS).toString('base64');

const mdDir = '_content/pages/'

export async function getStaticProps({ params }) {
  const markdownData = await getMarkdownData('membership', mdDir)
  const membershipsData = await fetch('https://api.commerce7.com/v1/club', {
    method: 'get',
    headers: new Headers({
      'Authorization': 'Basic ' + userPass,
      'Content-Type': 'application/json',
      'tenant': 'young-inglewood-vineyards'
    })
  });

  const membershipsResponse = await membershipsData.json()
  
  return {
    props: {
      markdown: markdownData,
      memberships: membershipsResponse.clubs
    }
  }
}

export default function Membership( {markdown, memberships} ) {

  console.log(markdown, memberships)

  useEffect(() => {
    // $(".c7-club-join-button a").each(function () {
    //   $(this).text("Join FYI")
    // })
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
    <>
      <Meta data={markdown} />
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
            text1="<p>You are going to love being a Friends of Young Inglewood member. Our FYI members are the first to hear about new wine releases and the first to get allocations so you’ll never miss another Young Inglewood release.</p>"
            text2="<p>Choose from a rage of seven different memberships.  Our team will be delighted to help you customize your FYI membership to suit your taste, so you’ll always get just what you want.</p>
          <p>Relax and enjoy our beautiful surroundings at a complimentary visit and estate tasting, and at members only events.</p>"
          />

          <div className="membership-details">
          <div dangerouslySetInnerHTML={{ __html: markdown.contentHtml }} />
            <br />
            <h3 id="membership">CHOOSE YOUR MEMBERSHIP</h3>
            <div className="table">

              {memberships
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
    </>

  )
}