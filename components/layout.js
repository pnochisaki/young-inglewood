import { Facebook, Instagram, YouTube, Twitter } from '@styled-icons/boxicons-logos'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'

export default function Layout({ home, discover, wine, purchase, taste, membership, children, props }) {

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
            <a href="/purchase/wines/" className={purchase && 'active'} >Purchase</a>
            <a href="/taste" className={taste && 'active'}>Taste</a>
            <a href="/membership" className={membership && 'active'}>Membership</a>
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
                <a href="/faq">FAQ</a>
                <a href="/contact">Contact</a>
                <a href="/profile/create-account">Join</a>
                <a href="/profile">Manage your Account</a>
                <a href="/credits">Credits</a>
              </nav>
            </div>

            <div className="social-links">
              <Link href="https://www.facebook.com/younginglewood"><a target="_blank"><Facebook /></a></Link>
              <Link href="https://www.instagram.com/younginglewood"><a target="_blank"><Instagram /></a></Link>
              <Link href="https://twitter.com/YIVWine"><a target="_blank"><Twitter /></a></Link>
            </div>

            <p>
              ©{new Date().getFullYear()} Young Inglewood Vineyards | 1919 Inglewood Ave, St. Helena, CA 94574 | <a href="mailto:estate@younginglewood.com">estate@younginglewood.com</a> <a href="tel:707.200.4572">707.200.4572</a>
            </p>
          </>
        </footer>

      }

    </div >
  )
}



