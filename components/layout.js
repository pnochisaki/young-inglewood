import { Facebook, Instagram, YouTube, Twitter } from '@styled-icons/boxicons-logos'
import { Menu } from '@styled-icons/feather/Menu'
import { X } from '@styled-icons/feather/X'
import useSessionStorage from '../hooks/useSessionStorage'
import { useCookies } from "react-cookie"

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
      home ? "home layout" :
        purchase ? "purchase layout" :
          "layout"
    }>
      {home ?
        <>
          <div className="mobile-only home">
            <a href="/discover"><img src="/images/home-mobile.jpg" /></a>
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
                  {console.log(router.asPath)}
                  {console.log("data collections: ", collections)}
                  {collections && collections
                    .filter(collection => collection.metaData['store-menu'])
                    .map((collection, index) => {
                      return <a className={router.asPath === '/collection/' + collection.slug ? 'c7-btn active' : 'c7-btn'} key={index} href={'/collection/' + collection.slug}><span>{collection.title}</span></a>
                    }
                    )}
                </div>

                {console.log(loggedIn.customerToken)}

                <>
                  {account &&
                    <div className="account-nav desktop-only">
                      <>
                        {(loggedIn.customerToken !== undefined) ?
                          <>
                            {accountNavItemsLoggedIn
                              .map((navItem, index) => {
                                return <a className={router.asPath === (navItem.url || (navItem.url + '/') || '/profile/login' || '/profile' || '/profile/' || '/profile/[id]') ? 'c7-btn active' : 'c7-btn'} key={index} href={navItem.url}><span>{navItem.title}</span></a>
                              }
                              )}
                          </>
                          :
                          <>
                            {accountNavItems
                              .map((navItem, index) => {
                                return <a className={router.asPath === (navItem.url || (navItem.url + '/') || '/profile/login' || '/profile'  || '/profile/' || '/profile/[id]') ? 'c7-btn active' : 'c7-btn'} key={index} href={navItem.url}><span>{navItem.title}</span></a>
                              }
                              )}
                          </>
                        }
                      </>
                    </div>
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
            <div className="social-links mobile-only"><a href="https://www.facebook.com/younginglewood"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-ea9ulj-0 bsimgx"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg></a><a href="https://www.instagram.com/younginglewood"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-ea9ulj-0 bsimgx"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg></a><a href="https://twitter.com/YIVWine"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-ea9ulj-0 bsimgx"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg></a></div>
          </div>
          <div id="c7-cart" className={seenAnimation ? "" : "animated"}></div>
        </div>
      </header >

      {account &&
        <div className="account-nav mobile-only">
          <div className="blocker"></div>
          {console.log(router.asPath)}
          <>
            <>
              {(loggedIn.customerToken !== undefined) ?
                <>
                  {accountNavItemsLoggedIn
                    .map((navItem, index) => {
                      return <a className={router.asPath === (navItem.url || (navItem.url + '/') || '/profile/login' || '/profile' || '/profile/' || '/profile/[id]') ? 'c7-btn active' : 'c7-btn'} key={index} href={navItem.url}><span>{navItem.title}</span></a>
                    }
                    )}
                </>
                :
                <>
                  {accountNavItems
                    .map((navItem, index) => {
                      return <a className={router.asPath === (navItem.url || (navItem.url + '/') || '/profile/login' || '/profile' || '/profile/' || '/profile/[id]') ? 'c7-btn active' : 'c7-btn'} key={index} href={navItem.url}><span>{navItem.title}</span></a>
                    }
                    )}
                </>
              }
            </>
          </>
        </div>
      }


      <div className="collections-nav mobile-only">
        <div className="blocker"></div>
        {console.log(router.asPath)}
        {console.log("data collections: ", collections)}
        {collections && collections
          .filter(collection => collection.metaData['store-menu'])
          .map((collection, index) => {
            return <a className={router.asPath === '/collection/' + collection.slug ? 'c7-btn active' : 'c7-btn'} key={index} href={'/collection/' + collection.slug}><span>{collection.title}</span></a>
          }
          )}
      </div>

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
            <Link href="https://www.facebook.com/younginglewood"><a ><Facebook /></a></Link>
            <Link href="https://www.instagram.com/younginglewood"><a ><Instagram /></a></Link>
            <Link href="https://twitter.com/YIVWine"><a ><Twitter /></a></Link>
          </div>

          <p>
            ©{new Date().getFullYear()} Young Inglewood Vineyards
          </p>
        </>
      </footer>

    </div >
  )
}



