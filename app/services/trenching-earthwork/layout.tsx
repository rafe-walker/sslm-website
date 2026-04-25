import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trenching & Earthwork | Sulfur Springs Land Management',
  description: 'Professional trenching for water lines, electrical conduit, and drainage in Cochise County, Arizona. Foundation excavation, berms, swales, and earthwork for rural property development.',
  alternates: {
    canonical: 'https://sulfurspringslandmanagement.com/services/trenching-earthwork',
  },
  openGraph: {
    title: 'Trenching & Earthwork | Sulfur Springs Land Management',
    description: 'Professional trenching for water lines, electrical conduit, and drainage in Southern Arizona. Foundation excavation and earthwork for off-grid property development.',
    url: 'https://sulfurspringslandmanagement.com/services/trenching-earthwork',
    type: 'website',
    images: [
      {
        url: 'https://sulfurspringslandmanagement.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Trenching & Earthwork - Sulfur Springs Land Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trenching & Earthwork | Sulfur Springs Land Management',
    description: 'Professional trenching for water lines, electrical conduit, and drainage in Cochise County, Arizona.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
