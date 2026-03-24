import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sulfur Springs Land Management | Rural Land Services, Arizona',
  description: 'Veteran-owned land management services in the Sulfur Springs Valley, Cochise County, Arizona. Land clearing, grading, solar systems, water systems, and off-grid solutions for rural properties.',
  keywords: 'land clearing, grading, solar systems, water systems, off-grid, Sulfur Springs Valley, Cochise County, Arizona, land management',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Sulfur Springs Land Management',
    description: 'Full-service land management for rural properties in the Sulfur Springs Valley, Arizona.',
    type: 'website',
    url: 'https://sulfurspringslandmanagement.com',
    images: [
      {
        url: 'https://sulfurspringslandmanagement.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sulfur Springs Land Management - Rural Land Services in Arizona',
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
