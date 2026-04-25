import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bulk Debris & Trash Removal | Sulfur Springs Land Management',
  description: 'Complete property cleanout and debris hauling for rural properties in Cochise County, Arizona. We remove construction waste, abandoned materials, old vehicles, and accumulated junk.',
  alternates: {
    canonical: 'https://sulfurspringslandmanagement.com/services/debris-removal',
  },
  openGraph: {
    title: 'Bulk Debris & Trash Removal | Sulfur Springs Land Management',
    description: 'Complete property cleanout and debris hauling in Cochise County, Arizona. Bulk debris removal, scrap hauling, and property cleanouts for rural homesteads.',
    url: 'https://sulfurspringslandmanagement.com/services/debris-removal',
    type: 'website',
    images: [
      {
        url: 'https://sulfurspringslandmanagement.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Debris Removal Services - Sulfur Springs Land Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bulk Debris & Trash Removal | Sulfur Springs Land Management',
    description: 'Complete property cleanout and debris hauling in Cochise County, Arizona.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
