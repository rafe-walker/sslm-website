import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Land Clearing & Brush Removal | Sulfur Springs Land Management',
  description: 'Land clearing in the Sulphur Springs Valley, Cochise County, Arizona, by independent ROC-licensed contractors: brush, mesquite and creosote removal, firebreaks and building-site prep. Request a quote.',
  alternates: {
    canonical: 'https://sulfurspringslandmanagement.com/services/land-clearing',
  },
  openGraph: {
    title: 'Land Clearing & Brush Removal | Sulfur Springs Land Management',
    description: 'Professional land clearing services in Cochise County, Arizona. Brush removal, firebreaks, building site preparation, and debris hauling for rural properties.',
    url: 'https://sulfurspringslandmanagement.com/services/land-clearing',
    type: 'website',
    images: [
      {
        url: 'https://sulfurspringslandmanagement.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Land Clearing Services - Sulfur Springs Land Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Land Clearing & Brush Removal | Sulfur Springs Land Management',
    description: 'Professional land clearing services in Cochise County, Arizona.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
