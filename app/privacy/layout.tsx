import type { Metadata } from 'next'
import { canonical } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sulfur Springs Land Management',
  description: 'How Sulfur Springs Land Management handles a quote request, including sharing it with up to three ROC-licensed contractors so they can quote the job.',
  alternates: { canonical: canonical('/privacy') },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
