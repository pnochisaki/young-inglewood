const STORAGE_KEY = 'yi_cookie_consent'
const SESSION_KEY = 'yi_cookie_consent_session'
const TABS_KEY = 'yi_open_tabs'
const DECLINE_DAYS = 365

// A dismissed session lasts while at least one tab of the site stays open. Each open tab
// registers itself in localStorage and removes itself on close; the heartbeat lets entries
// left behind by crashed tabs (which never fire pagehide) expire.
const HEARTBEAT_MS = 15 * 1000
const TAB_STALE_MS = 2 * 60 * 1000

// Cookies required for the site to function, never cleared
const NECESSARY_COOKIES = ['customerToken']

const tabId = Math.random().toString(36).slice(2)
let tabRegistered = false

function readJSON(storage, key) {
  try {
    return JSON.parse(storage.getItem(key))
  } catch (e) {
    return null
  }
}

function getOpenTabs() {
  const tabs = readJSON(window.localStorage, TABS_KEY) || {}
  const now = Date.now()
  Object.keys(tabs).forEach((id) => {
    if (now - tabs[id] > TAB_STALE_MS) delete tabs[id]
  })
  return tabs
}

function touchTab() {
  const tabs = getOpenTabs()
  tabs[tabId] = Date.now()
  window.localStorage.setItem(TABS_KEY, JSON.stringify(tabs))
}

function removeTab() {
  const tabs = getOpenTabs()
  delete tabs[tabId]
  window.localStorage.setItem(TABS_KEY, JSON.stringify(tabs))
}

function registerTab() {
  if (tabRegistered) return
  tabRegistered = true
  touchTab()
  setInterval(touchTab, HEARTBEAT_MS)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') touchTab()
  })
  window.addEventListener('pageshow', touchTab)
  window.addEventListener('pagehide', removeTab)
}

// Expires a cookie on every domain level it could have been set on (e.g. www.example.com, .example.com)
function deleteCookie(name) {
  const expired = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
  document.cookie = expired
  const parts = window.location.hostname.split('.')
  for (let i = 0; i < parts.length - 1; i++) {
    const domain = parts.slice(i).join('.')
    document.cookie = `${expired}; domain=${domain}`
    document.cookie = `${expired}; domain=.${domain}`
  }
}

function clearCookies() {
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim()
    if (name && !NECESSARY_COOKIES.includes(name)) deleteCookie(name)
  })
}

// Returns the dismissed session if it is still running, joining it from this tab. The session
// continues on a reload/navigation in the same tab (sessionStorage survives those) or while
// another tab is open; otherwise it has ended, so its cookies are cleared.
function getActiveSession() {
  const session = readJSON(window.localStorage, SESSION_KEY)
  if (!session) return null
  const sameTab = window.sessionStorage.getItem(SESSION_KEY) === session.id
  const otherTabOpen = Object.keys(getOpenTabs()).some((id) => id !== tabId)
  if (sameTab || otherTabOpen) {
    window.sessionStorage.setItem(SESSION_KEY, session.id)
    return session
  }
  clearCookies()
  window.localStorage.removeItem(SESSION_KEY)
  window.sessionStorage.removeItem(SESSION_KEY)
  return null
}

// Reads stored consent, clearing (and returning null for) an expired decline
export function getStoredConsent() {
  if (typeof window === 'undefined') return null
  try {
    const session = getActiveSession()
    registerTab()
    if (session) return { status: 'accepted' }
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (parsed.status === 'declined' && parsed.expires && Date.now() > parsed.expires) {
      window.localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return parsed
  } catch (e) {
    return null
  }
}

export function wasDismissedThisSession() {
  if (typeof window === 'undefined') return false
  return getActiveSession() !== null
}

export function acceptCookies() {
  window.localStorage.removeItem(SESSION_KEY)
  window.sessionStorage.removeItem(SESSION_KEY)
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ status: 'accepted', timestamp: Date.now() }))
}

// Declining is remembered for DECLINE_DAYS, after which the prompt reappears
export function declineCookies() {
  const expires = Date.now() + DECLINE_DAYS * 24 * 60 * 60 * 1000
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ status: 'declined', timestamp: Date.now(), expires }))
}

// Dismissing accepts cookies in all tabs until the last tab closes; they are cleared on the next visit
export function dismissForSession() {
  const id = Math.random().toString(36).slice(2)
  window.localStorage.setItem(SESSION_KEY, JSON.stringify({ id, timestamp: Date.now() }))
  window.sessionStorage.setItem(SESSION_KEY, id)
}
