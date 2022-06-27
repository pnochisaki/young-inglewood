import Layout from '../components/layout';
import Section from '../components/section';
import { useState } from 'react';

const userPass = Buffer.from(process.env.C7_USER + ":" + process.env.C7_PASS).toString('base64');

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://api.commerce7.com/v1/club', {
    method: 'get',
    headers: new Headers({
      'Authorization': 'Basic ' + userPass,
      'Content-Type': 'application/json',
      'tenant': 'young-inglewood-vineyards'
    })
  });
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}



export default function Membership(props) {

  const [activeItem, setActiveItem] = useState({});

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    // console.log(event)
    if (activeItem == { 'Essay': true }) {
      setActiveItem(null);
    } else {
      setActiveItem({ 'Essay': true });
    }
    
  };

  const clubs = [
    {
      'name': 'Essay',
      'frequency': '4 red wines twice a year',
      'price': '$432.25/Spring Shipment',
      'details': '<p>Three 2018 Right Bank Blend One 2018 Cabernet Franc</p><p>5% savings on all purchases</p>',
      'link': '#'
    },
    {
      'name': 'Novella',
      'frequency': '6 red wines twice a year',
      'price': '$594.00/Spring Shipment',
      'details': '',
      'link': '#'
    },
    {
      'name': 'Novel',
      'frequency': '12 red wines twice a year',
      'price': '$1620.00/Spring Shipment',
      'details': '',
      'link': '#'
    },
    {
      'name': 'Archive',
      'frequency': '3 aged red wines twice a year',
      'price': '$584.25/Spring Shipment',
      'details': '',
      'link': '#'
    },
    {
      'name': 'Epic',
      'frequency': 'A Magnum Of Cabernet once a year',
      'price': 'call winery',
      'details': '',
      'link': '#'
    },
    {
      'name': 'Sonnet',
      'frequency': '6 white wines twice a year',
      'price': '$332.00/Spring Shipment',
      'details': '',
      'link': '#'
    },
    {
      'name': 'Anthology',
      'frequency': 'selection of 4 wines twice a year',
      'price': '$332.50/Spring Shipmen',
      'details': '',
      'link': '#'
    },
  ]

  return (
    <Layout membership>
      <>
        <h1>Membership</h1>
        {console.log(props.data.clubs)}
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

        <div className="membership-details">
          <h3>IN ADDITION YOU’LL RECEIVE:</h3>
          <ul>
            <li>advance notice of all releases</li>
            <li>concierge service and a reserved space at the winery when you visit</li>
            <li>access to exclusive library wines and large formats</li>
            <li>allocations of Single Barrel Series wines</li>
            <li>the ability to pause, cancel or customize your membership at any time</li>
          </ul>
          <br />
          <h3>CHOOSE YOUR MEMBERSHIP</h3>
          <div className="table">

            {clubs.map((club, index) => {
              return <div key={club.name} onClick={handleClick} className={activeItem[club.name] ? 'active' : ''} >

                  <div><h3>{club.name}</h3></div>
                  <div><p>{club.frequency}</p></div>
                  <div><p>{club.price}</p>
                    <div className="expanded"
                      dangerouslySetInnerHTML={{ __html: club.details }}
                    />
                  </div>
                  <div><a className="text-link" href="#">Join {club.name}</a></div>
                  <div>
                    <a className='show-less text-link' >Less Details</a>
                    <a className='show-more text-link' >More Details</a>
                  </div>
              </div>
            })}
          </div>
        </div>



      </>
    </Layout>
  )
}