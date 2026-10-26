import type { Metadata } from 'next'
import { canonical } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service | Sulfur Springs Land Management',
  description: 'Terms for using sulfurspringslandmanagement.com, a referral service for landowners in the Sulphur Springs Valley, Cochise County, Arizona. Not a licensed contractor.',
  alternates: { canonical: canonical('/terms') },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
