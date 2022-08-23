import { Facebook, Instagram, YouTube, Twitter } from '@styled-icons/boxicons-logos'
import { Menu } from '@styled-icons/feather/Menu'
import { X } from '@styled-icons/feather/X'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useContext } from 'react'

import { useRouter } from 'next/router';

const userPass = Buffer.from(process.env.C7_USER + ":" + process.env.C7_PASS).toString('base64');

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://api.commerce7.com/v1/collection', {
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


export default function Layout({ data, home, discover, wine, purchase, taste, membership, faq, contact, join, account, credits, children, props }) {

  const router = useRouter()

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const hamburgerClick = (e) => {
    if (!hamburgerOpen) {
      setHamburgerOpen(true)
    } else {
      setHamburgerOpen(false)
    }
  }

  const text = "Young Inglewood is committed to producing wines of place, stewarded from vine to bottle by mother and son winemakers Jacky and Scott. With old world non-interventionist winemaking practices, our estate’s signature character is transformed into wines of balance and grace."

  return (
    <div className={
      home ? "home layout" :
        purchase ? "purchase layout" :
          "layout"
    }>
      {home ?
        <>
          <div className="mobile-only home">
            <img src="/images/home-mobile.jpg" />
            <p className='text'>{text}</p>
          </div>

          <div className="desktop-only">
            <div className="home-1">
              {/* silence */}
            </div>
            <div className="home-2">
              <div className="image">
                <img src="/images/balance.jpg" alt="balance" />
              </div>
              <div className="text">
                <p>{text}</p>
              </div>
            </div>
          </div>


        </>
        :
        <></>
      }
      <header className={hamburgerOpen ? 'hamburger-open' : ''}>
        <div className="mobile-only hamburger" onClick={hamburgerClick}>
          {hamburgerOpen ? <X /> : <Menu />}
        </div>
        <a className='branding' href="/">
          <Image alt='logo' src='/images/logo.svg' layout='fill' />
        </a>
        <div className="desktop-navigation">
          <div className='navigation'>
            <nav>
              <a href="/discover" className={discover && 'active'}><span>Discover</span></a>
              <a href="/wine" className={wine && 'active'}><span>Wine</span></a>
              <a href="/collection/all/" className={purchase && 'active'} ><span>Purchase</span></a>
              <a href="/membership" className={membership && 'active'}><span>Membership</span></a>
              <a href="/taste" className={taste && 'active'}><span>Taste</span></a>
              <div id="c7-account"></div>
            </nav>
          </div>
          <div id="c7-cart"></div>

          <div className="subnavigation">
            <div className="collections-nav">
              {console.log(router.asPath)}
              {console.log("data", data)}
              {/* {data.collections
                .filter(collection => collection.metaData['store-menu'])
                .map((collection, index) => {
                  return <a className={router.asPath === '/collection/' + collection.slug ? 'c7-btn active' : 'c7-btn'} key={index} href={'/collection/' + collection.slug}><span>{collection.title}</span></a>
                }
                )} */}
            </div>
          </div>

        </div>

      </header >

      <main>
        {children}
      </main>



      <footer>
        <>
          <div className='navigation'>
            <nav>
              <a href="/faq" className={faq && 'active'}><span>FAQ</span></a>
              <a href="/contact" className={contact && 'active'}><span>Contact</span></a>
              <a href="/profile/create-account" className={join && 'active'}><span>Join</span></a>
              <a href="/profile/account" className={account && 'active'}><span>Manage your Account</span></a>
              <a href="/credits" className={credits && 'active'}><span>Credits</span></a>
            </nav>
          </div>

          <div className="social-links">
            <Link href="https://www.facebook.com/younginglewood"><a target="_blank"><Facebook /></a></Link>
            <Link href="https://www.instagram.com/younginglewood"><a target="_blank"><Instagram /></a></Link>
            <Link href="https://twitter.com/YIVWine"><a target="_blank"><Twitter /></a></Link>
          </div>

          <p>
            ©{new Date().getFullYear()} Young Inglewood Vineyards
          </p>
        </>
      </footer>

    </div >
  )
}



