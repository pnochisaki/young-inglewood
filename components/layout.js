import { Facebook, Instagram, YouTube, Twitter  } from '@styled-icons/boxicons-logos'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'

export default function Layout({ home, children, props }) {

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
            <Link href="/discover">Discover</Link>
            <Link href="/wine">Wine</Link>
            <Link href="/purchase">Purchase</Link>
            <Link href="/taste">Taste</Link>
            <Link href="/membership">Membership</Link>
            <Link href="/account">Mary Young</Link>
          </nav>
        </div>

      </header>

      <main>
        {children}
      </main>

      {!home && 
      
      <footer>
        <>
          <div className='navigation'>
          <nav>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/taste">Taste</Link>
            <Link href="/purchase">Purchase</Link>
            <Link href="/join">Join</Link>
            <Link href="/account">Manage your Account</Link>
            <Link href="/credits">Credits</Link>
          </nav>
        </div>

        <div className="social-links">
        <Link href="https://www.facebook.com/younginglewood"><a target="_blank"><Facebook /></a></Link>
        <Link href="https://www.instagram.com/younginglewood"><a target="_blank"><Instagram /></a></Link>
        <Link href="https://twitter.com/YIVWine"><a target="_blank"><Twitter /></a></Link>
        </div>

          <p>
          ©{new Date().getFullYear()} Young Inglewood Vineyards | 1919 Inglewood Ave, St. Helena, CA 94574 | estate@younginglewood.com 707.200.4572
          </p>
        </>
      </footer>

      }
      
    </div>
  )
}



