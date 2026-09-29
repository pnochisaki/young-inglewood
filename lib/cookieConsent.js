const STORAGE_KEY = 'yi_cookie_consent'
const SESSION_DISMISS_KEY = 'yi_cookie_consent_dismissed'
const DECLINE_DAYS = 365

// Reads stored consent, clearing (and returning null for) an expired decline
export function getStoredConsent() {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const rawSession = window.sessionStorage.getItem(STORAGE_KEY)
    if (!raw && !rawSession) return null
    const parsed = rawSession ? JSON.parse(rawSession) : JSON.parse(raw)
    if (parsed.status === 'declined' && parsed.expires && Date.now() > parsed.expires) {
      window.localStorage.removeItem(STORAGE_KEY)
      window.sessionStorage.removeItem(STORAGE_KEY)
      return null
    }
    return parsed
  } catch (e) {
    return null
  }
}

export function wasDismissedThisSession() {
  if (typeof window === 'undefined') return false
  return window.sessionStorage.getItem(SESSION_DISMISS_KEY) === 'true'
}

export function acceptCookies() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ status: 'accepted', timestamp: Date.now() }))
}

export function acceptCookiesForSession() {
  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ status: 'accepted', timestamp: Date.now() }))
}

// Declining is remembered for DECLINE_DAYS, after which the prompt reappears
export function declineCookies() {
  const expires = Date.now() + DECLINE_DAYS * 24 * 60 * 60 * 1000
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ status: 'declined', timestamp: Date.now(), expires }))
}

// Dismissing only hides the banner for the current browser session
export function dismissForSession() {
  window.sessionStorage.setItem(SESSION_DISMISS_KEY, 'true')
}
