import { useEffect, useState } from 'react'
import { X } from '@styled-icons/feather/X'
import { getStoredConsent, wasDismissedThisSession, acceptCookies, declineCookies, dismissForSession } from '../lib/cookieConsent'

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
    dismissForSession()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-consent" role="dialog" aria-label="Cookie consent">
      <button type="button" className="cookie-consent-close" onClick={handleDismiss} aria-label="Close">
        <X size="18" />
      </button>
      <p>
        We use cookies for basic site analytics to help us understand how visitors use our site.
        Read our <a href="/privacy">Privacy Policy</a> to learn more.
      </p>
      <div className="cookie-consent-actions">
        <button type="button" className="cookie-consent-accept" onClick={handleAccept}>Accept</button>
        <button type="button" className="cookie-consent-decline" onClick={handleDecline}>Opt Out</button>
      </div>
    </div>
  )
}
