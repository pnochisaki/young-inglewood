import { useEffect, useState } from 'react'
import { X } from '@styled-icons/feather/X'
import { getStoredConsent, wasDismissedThisSession, acceptCookies, declineCookies, dismissForSession, acceptCookiesForSession } from '../lib/cookieConsent'

export default function CookieConsent({ onAccept }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = getStoredConsent()
    if (consent && consent.status === 'accepted') {
      onAccept && onAccept()
      return
    }
    if (!consent && !wasDismissedThisSession()) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    acceptCookies()
    setVisible(false)
    onAccept && onAccept()
  }

  const handleDecline = () => {
    declineCookies()
    setVisible(false)
  }

  const handleDismiss = () => {
    // dismissForSession()
    acceptCookiesForSession() 
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-consent" role="dialog" aria-label="Cookie consent">
      <button type="button" className="cookie-consent-close" onClick={handleDismiss} aria-label="Close">
        <X size="18" />
      </button>
      <p>
        We use cookies to ensure that we give you the best experience on our website. Read our <a target="_blank" href="/privacy">privacy policy</a> to learn more.
      </p>
      <div className="cookie-consent-actions">
        <button type="button" className="cookie-consent-accept" onClick={handleAccept}>Accept All</button>
        <button type="button" className="cookie-consent-decline" onClick={handleDecline}>Accept Necessary Only</button>
      </div>
    </div>
  )
}
