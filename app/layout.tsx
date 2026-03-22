import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cochise Land Management | Rural Land Services, Arizona',
  description: 'Veteran-owned land management services in Cochise County, Arizona. Land clearing, grading, solar systems, water systems, and off-grid solutions for rural properties.',
  keywords: 'land clearing, grading, solar systems, water systems, off-grid, Cochise County, Arizona, land management',
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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Veteran-owned land management services in Cochise County, Arizona. Land clearing, grading, solar systems, water systems, and off-grid solutions." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-bg text-textPrimary">
        {children}
      </body>
    </html>
  );
}
