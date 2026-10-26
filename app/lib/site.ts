// site.ts — single source of truth for the things that appear in more than one
// place: what the business is, the contact details, the service area.
//
// Mirrors app/lib/site.ts in the Cochise Land Management repo so the two sister
// sites say the same thing about what they are. Edit the posture here and it
// changes on the home page, the contact form, the blog footer and llms.txt.

export const SITE = {
  name: 'Sulfur Springs Land Management',
  shortName: 'SSLM',
  /** What the business is. Shown on the home page, the form and the footer. */
  posture:
    'Sulfur Springs Land Management is a referral service for landowners in the Sulphur Springs Valley, not a licensed contractor. We connect you with independent, ROC-licensed local contractors who quote and contract with you directly. We do not perform, bid or supervise the work.',
  postureShort: 'Not a licensed contractor. Quotes come from independent, ROC-licensed Cochise County contractors.',
  consent:
    'By sending this request you agree that we may share it with up to three independent, ROC-licensed Cochise County contractors so they can quote it, and that they may contact you by phone, text or email about this request. Consent is not a condition of any purchase.',
  url: 'https://sulfurspringslandmanagement.com',
  email: 'inquiries@sulfurspringslandmanagement.com',
  phone: '(520) 402-5877',
  phoneHref: 'tel:+15204025877',
  parent: 'Stormhaven Enterprises LLC',
  sister: {
    name: 'Stronghold Precision Aerials',
    url: 'https://strongholdprecisionaerials.com',
  },
} as const

// Service area. This site is the Sulphur Springs Valley one; the county-wide
// sister site is cochiselandmanagement.com. Keeping the two distinct is what
// stops Google treating them as duplicates of each other.
export const SERVICE_AREA = {
  primary: ['Willcox', 'Cochise', 'Pearce', 'Sunsites', 'Dragoon', 'Kansas Settlement'],
  extended: ['Bowie', 'San Simon', 'Elfrida', 'McNeal', 'Benson'],
} as const

/** One sentence, used verbatim wherever the service area needs stating. */
export const SERVICE_AREA_STATEMENT =
  'The Sulphur Springs Valley and the rest of Cochise County, Arizona — requests for Tucson, Phoenix or elsewhere in the state are not referred.'

export function canonical(path: string) {
  const clean = path === '/' ? '' : path.replace(/\/$/, '')
  return `${SITE.url}${clean}`
}
