import { Facebook, Instagram, YouTube, Twitter } from '@styled-icons/boxicons-logos'
import { Menu } from '@styled-icons/feather/Menu'
import { X } from '@styled-icons/feather/X'
import useSessionStorage from '../hooks/useSessionStorage'
import { useCookies } from "react-cookie"
import $ from 'jquery'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useContext } from 'react'

import { useRouter } from 'next/router';

export default function Layout({ home, discover, wine, purchase, taste, membership, faq, contact, join, account, credits, children, props }) {

  const router = useRouter()

  const [loggedIn, setLoggedIn] = useCookies(["customerToken"])
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const seenAnimation = useSessionStorage('seenAnimation')

  const hamburgerClick = (e) => {
    if (!hamburgerOpen) {
      setHamburgerOpen(true)
    } else {
      setHamburgerOpen(false)
    }
  }

  const [collections, setCollections] = useState(false);

  const fetchCollections = () => {
    fetch('/api/collections')
      .then(response => response.json())
      .then(data => {
        setCollections(data.collections)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  useEffect(() => {
    fetchCollections();
  }, [])

  useEffect(() => {
    setLoggedIn(loggedIn)
    console.log("customerToken (from State):", loggedIn.customerToken)
    const authState = (loggedIn.customerToken !== undefined) ? "logged-in" : "logged-out"
    $('.layout').addClass(authState)

  }, [])



  useEffect(() => {
    if (window) {
      setTimeout(() => sessionStorage.setItem("seenAnimation", true), 5000);
    }
  }, []);


  const accountNavItems = [
    {
      url: "/profile/login",
      title: "Dashboard"
    },
    {
      url: "/profile/club-membership",
      title: "Club Shipments"
    },
    {
      url: "/profile/order-history",
      title: "Order History"
    },
    {
      url: "/profile/allocation",
      title: "Allocations"
    },
    {
      url: "/profile/account",
      title: "Account Details"
    }
  ]

  const accountNavItemsLoggedIn = [
    {
      url: "/profile",
      title: "Dashboard"
    },
    {
      url: "/profile/club-membership",
      title: "Club Shipments"
    },
    {
      url: "/profile/order-history",
      title: "Order History"
    },
    {
      url: "/profile/allocation",
      title: "Allocations"
    },
    {
      url: "/profile/account",
      title: "Account Details"
    },
    {
      url: "/profile/logout",
      title: "Log out"
    }
  ]

  const text = "Young Inglewood is committed to producing wines of place, stewarded from vine to bottle by mother and son winemakers Jacky and Scott. With old world non-interventionist winemaking practices, our estate’s signature character is transformed into wines of balance and grace."

  return (
    <div className={
      home ? " home layout" :
        purchase ? " purchase layout" :
          " layout"
    }>
      {home ?
        <>
          <div className="mobile-only home">
            <a href="/discover"><img src="/images/home-mobile.jpg" alt="discover" /></a>
            <p className='text'>{text}</p>
          </div>

          <div className="desktop-only">
            <div className="home-bg"></div>
            <div className="home-1">
              {/* silence */}
            </div>
            {console.log("seenAnimation: ", seenAnimation)}
            <div className={seenAnimation ? "home-2" : "home-2 animated"}>
              <div className="image">
                <img src="/images/balance.jpg" alt="balance" />
              </div>
              <div className="text">
                <p>{text}</p>
              </div>
            </div>
            <a className="home-click" href="/discover">Enter</a>
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
          <div className={seenAnimation ? "navigation" : "navigation animated"}>
            <nav>
              <a href="/discover" className={discover && 'active'}><span>Discover</span></a>

              <a href="/wine" className={wine && 'active'}><span>Wine</span></a>

              <a href="/collection/all/" className={purchase && 'active'} ><span>Purchase</span></a>

              <a href="/membership" className={membership && 'active'}><span>Membership</span></a>

              <a href="/taste" className={taste && 'active'}><span>Taste</span></a>

              <div id="c7-account" className={seenAnimation ? "" : "animated"}></div>



              <div className="subnavigation">
                <div className="collections-nav desktop-only">
                  {collections && 
                  collections
                    .sort((a, b) => a.metaData['position'] - b.metaData['position'])
                    .filter(collection => collection.metaData['store-menu'])
                    .map((collection, index) => {
                      return <a className={router.asPath === '/collection/' + collection.slug ? 'c7-btn active' : 'c7-btn'} key={index} href={'/collection/' + collection.slug}><span>{collection.title}</span></a>
                    }
                    )}
                </div>

                <>
                  {account &&
                    <>
                      <div className="account-nav desktop-only logged-in">
                        {accountNavItemsLoggedIn
                          .map((navItem, index) => {
                            console.log("logged in", router.asPath)
                            return <a className={router.asPath === (navItem.url || (navItem.url + '/') || '/profile/login' || '/profile' || '/profile/' || '/profile/[id]') ? 'c7-btn active' : 'c7-btn'} key={index} href={navItem.url}><span>{navItem.title}</span></a>
                          }
                          )}

                      </div>
                      <div className="account-nav desktop-only logged-out">
                        {accountNavItems
                          .map((navItem, index) => {
                            console.log("logged out", router.asPath)
                            return <a className={router.asPath === (navItem.url || (navItem.url + '/') || '/profile/login' || '/profile' || '/profile/' || '/profile/[id]') ? 'c7-btn active' : 'c7-btn'} key={index} href={navItem.url}><span>{navItem.title}</span></a>
                          }
                          )}
                      </div>
                    </>
                  }
                </>


              </div>
            </nav>
            <nav className="mobile-only">
              <a href="/faq"><span>FAQ</span></a>
              <a href="/contact"><span>Contact</span></a>
              <a href="/profile/create-account"><span>Join</span></a>
              <a href="/profile/account"><span>Manage your Account</span></a>
              <a href="/credits"><span>Credits</span></a>
            </nav>
            <div className="social-links mobile-only">
              <Link href="https://www.facebook.com/younginglewood"><a ><Facebook /><span>Facebook</span></a></Link>
              <Link href="https://www.instagram.com/younginglewood"><a ><Instagram /><span>Instagram</span></a></Link>
              <Link href="https://twitter.com/YIVWine"><a ><Twitter /><span>Twitter</span></a></Link>
            </div>
          </div>
          <div id="c7-cart" className={seenAnimation ? "" : "animated"}></div>
        </div>
      </header >

      {account &&

        <>
          <div className="account-nav mobile-only logged-in">
            <div className="blocker"></div>
            {accountNavItemsLoggedIn
              .map((navItem, index) => {
                return <a className={router.asPath === (navItem.url || (navItem.url + '/') || '/profile/login' || '/profile' || '/profile/' || '/profile/[id]') ? 'c7-btn active' : 'c7-btn'} key={index} href={navItem.url}><span>{navItem.title}</span></a>
              }
              )}
          </div>

          <div className="account-nav mobile-only logged-out">
            <div className="blocker"></div>
            {accountNavItems
              .map((navItem, index) => {
                return <a className={router.asPath === (navItem.url || (navItem.url + '/') || '/profile/login' || '/profile' || '/profile/' || '/profile/[id]') ? 'c7-btn active' : 'c7-btn'} key={index} href={navItem.url}><span>{navItem.title}</span></a>
              }
              )}
          </div>
        </>

      }

{console.log("collections before sort", collections)}
      <div className="collections-nav mobile-only">
        <div className="blocker"></div>
        {collections && collections
          .filter(collection => collection.metaData['store-menu'])
          .map((collection, index) => {
            return <a className={router.asPath === '/collection/' + collection.slug ? 'c7-btn active' : 'c7-btn'} key={index} href={'/collection/' + collection.slug}><span>{collection.title}</span></a>
          }
          )}
      </div>

{console.log("collections after sort", collections)}
      <main>
        {children}
      </main>


      <footer className={seenAnimation ? "" : "animated"}>
        <>
          <div className='navigation desktop-only'>
            <nav>
              <a href="/faq" className={faq && 'active'}><span>FAQ</span></a>

              <a href="/contact" className={contact && 'active'}><span>Contact</span></a>

              <a href="/profile/create-account" className={join && 'active'}><span>Join</span></a>

              <a href="/profile/account" className={account && 'active'}><span>Manage your Account</span></a>

              <a href="/credits" className={credits && 'active'}><span>Credits</span></a>

            </nav>
          </div>

          <div className="social-links desktop-only">
            <Link href="https://www.facebook.com/younginglewood"><a title="Facebook"><Facebook /><span>Facebook</span></a></Link>
            <Link href="https://www.instagram.com/younginglewood"><a title="Instagram"><Instagram /><span>Instagram</span></a></Link>
          </div>

          <p>
            ©{new Date().getFullYear()} Young Inglewood Vineyards
          </p>
        </>
      </footer>

    </div >
  )
}



