import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Off-Grid Water Systems | Sulfur Springs Land Management',
  description: 'Complete water system design and installation for properties without wells or municipal water in Cochise County, Arizona. Tank delivery, pump systems, filtration, and plumbing for water independence.',
  alternates: {
    canonical: 'https://sulfurspringslandmanagement.com/services/water-systems',
  },
  openGraph: {
    title: 'Off-Grid Water Systems | Sulfur Springs Land Management',
    description: 'Complete water system design and installation for rural Arizona properties. Tank delivery, pump systems, filtration, and plumbing for water independence in Cochise County.',
    url: 'https://sulfurspringslandmanagement.com/services/water-systems',
    type: 'website',
    images: [
      {
        url: 'https://sulfurspringslandmanagement.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Off-Grid Water Systems - Sulfur Springs Land Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Off-Grid Water Systems | Sulfur Springs Land Management',
    description: 'Complete water system design and installation for rural properties without wells in Cochise County, Arizona.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
