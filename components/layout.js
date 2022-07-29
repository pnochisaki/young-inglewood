import { Facebook, Instagram, YouTube, Twitter } from '@styled-icons/boxicons-logos'
import { Menu } from '@styled-icons/feather/Menu'
import { X } from '@styled-icons/feather/X'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useContext } from 'react'


export default function Layout({ home, discover, wine, purchase, taste, membership, faq, contact, join, account, credits, children, props }) {


  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const hamburgerClick = (e) => {
    if (!hamburgerOpen) {
      setHamburgerOpen(true)
    } else {
      setHamburgerOpen(false)
    }
  }


  return (
    <div className={
      home ? "home layout" :
        purchase ? "purchase layout" :
          "layout"
    }>
      {home ?
        <>
          <div className="home-1">
            {/* silence */}
          </div>
          <div className="home-2">
            <div className="image">
              <img src="/images/balance.jpg" alt="balance" />
            </div>
            <div className="text">
              <p>Young Inglewood is committed to producing wines of place, stewarded from vine to bottle by mother and son winemakers Jacky and Scott. With old world non-interventionist winemaking practices, our estate’s signature character is transformed
                into wines of balance and grace.</p>
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
        </div>

      </header >

      <main>
        {children}
      </main>

      {
        !home &&

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

      }

    </div >
  )
}



