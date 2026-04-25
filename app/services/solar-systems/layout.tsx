import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar System Design & Installation | Sulfur Springs Land Management',
  description: 'Complete off-grid and grid-tied solar energy solutions for rural Arizona properties. Custom system design, battery banks, installation, and commissioning in Cochise County.',
  alternates: {
    canonical: 'https://sulfurspringslandmanagement.com/services/solar-systems',
  },
  openGraph: {
    title: 'Solar System Design & Installation | Sulfur Springs Land Management',
    description: 'Complete off-grid solar energy solutions for rural Arizona properties. Custom system sizing, battery banks, and full installation in Cochise County.',
    url: 'https://sulfurspringslandmanagement.com/services/solar-systems',
    type: 'website',
    images: [
      {
        url: 'https://sulfurspringslandmanagement.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Solar Systems - Sulfur Springs Land Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar System Design & Installation | Sulfur Springs Land Management',
    description: 'Complete off-grid and grid-tied solar energy solutions for rural Arizona properties in Cochise County.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
