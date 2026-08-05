// Lets the footer open a given tab of the subjects section. A browser event
// keeps the two components independent — no shared state, no props threaded
// through the page.
const EVENT = 'audience:select'

export function selectAudience(id: string) {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: id }))
}

export function onAudienceSelect(handler: (id: string) => void) {
  const listener = (event: Event) => handler((event as CustomEvent<string>).detail)
  window.addEventListener(EVENT, listener)
  return () => window.removeEventListener(EVENT, listener)
}
