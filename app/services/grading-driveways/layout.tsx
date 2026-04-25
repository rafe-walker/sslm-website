import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grading, Driveways & Pad Prep | Sulfur Springs Land Management',
  description: 'Professional grading and earthwork for driveways, building pads, parking areas, and access roads in Cochise County, Arizona. Proper drainage, compaction, and grade for lasting results on rural properties.',
  alternates: {
    canonical: 'https://sulfurspringslandmanagement.com/services/grading-driveways',
  },
  openGraph: {
    title: 'Grading, Driveways & Pad Prep | Sulfur Springs Land Management',
    description: 'Professional grading and earthwork for driveways, building pads, and access roads in Southern Arizona. Drainage, compaction, and lasting results.',
    url: 'https://sulfurspringslandmanagement.com/services/grading-driveways',
    type: 'website',
    images: [
      {
        url: 'https://sulfurspringslandmanagement.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Grading & Driveways - Sulfur Springs Land Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grading, Driveways & Pad Prep | Sulfur Springs Land Management',
    description: 'Professional grading and earthwork for driveways, building pads, and access roads in Cochise County, Arizona.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
