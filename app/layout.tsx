import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cochise Land Management | Rural Land Services, Arizona',
  description: 'Veteran-owned land management services in Cochise County, Arizona. Land clearing, grading, solar systems, water systems, and off-grid solutions for rural properties.',
  keywords: 'land clearing, grading, solar systems, water systems, off-grid, Cochise County, Arizona, land management',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Cochise Land Management',
    description: 'Full-service land management for rural Cochise County properties.',
    type: 'website',
    url: 'https://cochiselandmanagement.com',
    images: [
      {
        url: 'https://cochiselandmanagement.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cochise Land Management - Rural Land Services in Arizona',
      },
    ],
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-textPrimary">
        {children}
      </body>
    </html>
  );
}
