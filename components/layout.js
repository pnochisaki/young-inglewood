import { Facebook, Instagram, YouTube, Twitter } from '@styled-icons/boxicons-logos'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'

export default function Layout({ home, discover, wine, purchase, taste, membership, faq, contact, join, account, credits, children, props }) {

  const router = useRouter()

  const goHome = (e) => {
    router.push('/discover')
  }

  return (
    <div className="layout">
      <header>

        <div className='branding' onClick={goHome}>
          <Image alt='logo' src='/images/logo.svg' layout='fill' />
        </div>

        <div className='navigation'>
          <nav>
            <a href="/discover" className={discover && 'active'}>Discover</a>
            <a href="/wine" className={wine && 'active'}>Wine</a>
            <a href="/collection/wines/" className={purchase && 'active'} >Purchase</a>
            <a href="/membership" className={membership && 'active'}>Membership</a>
            <a href="/taste" className={taste && 'active'}>Taste</a>
            <div id="c7-account"></div>
            <div id="c7-cart"></div>
          </nav>
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
                <a href="/faq" className={faq && 'active'}>FAQ</a>
                <a href="/contact" className={contact && 'active'}>Contact</a>
                <a href="/profile/create-account" className={join && 'active'}>Join</a>
                <a href="/profile/account" className={account && 'active'}>Manage your Account</a>
                <a href="/credits" className={credits && 'active'}>Credits</a>
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



