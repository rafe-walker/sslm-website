import type { Metadata } from 'next'
import { canonical } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Guides for Sulphur Springs Valley Landowners | Sulfur Springs Land Management',
  description: 'Permits, wells and the Willcox AMA, land clearing, septic, off-grid solar and water, and the local businesses a Cochise County landowner needs. Every guide cites its sources.',
  alternates: { canonical: canonical('/blog') },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
