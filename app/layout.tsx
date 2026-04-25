import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sulfur Springs Land Management | Rural Land Services, Arizona',
  description: 'Veteran-owned land management services in the Sulfur Springs Valley, Cochise County, Arizona. Land clearing, grading, solar systems, water systems, and off-grid solutions for rural properties.',
  keywords: 'land clearing, grading, solar systems, water systems, off-grid, Sulfur Springs Valley, Cochise County, Arizona, land management',
  metadataBase: new URL('https://sulfurspringslandmanagement.com'),
  alternates: {
    canonical: 'https://sulfurspringslandmanagement.com',
  },
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
  twitter: {
    card: 'summary_large_image',
    title: 'Sulfur Springs Land Management | Rural Land Services, Arizona',
    description: 'Veteran-owned land management services in the Sulfur Springs Valley, Cochise County, Arizona. Land clearing, grading, solar systems, water systems, and off-grid solutions.',
    images: ['https://sulfurspringslandmanagement.com/og-image.png'],
  },
  robots: 'index, follow',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://sulfurspringslandmanagement.com/#localbusiness',
      name: 'Sulfur Springs Land Management',
      legalName: 'StormHaven Enterprises LLC',
      url: 'https://sulfurspringslandmanagement.com',
      description: 'Land management, clearing, grading, and off-grid services in Cochise County, Arizona',
      telephone: '+15204025877',
      email: 'inquiries@sulfurspringslandmanagement.com',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'AZ',
        addressLocality: 'Cochise County',
        addressCountry: 'US',
      },
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: 'Cochise County, Arizona',
        },
        {
          '@type': 'Place',
          name: 'Sulfur Springs Valley',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Land Management Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Land Clearing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Debris Removal' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Grading & Driveways' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trenching & Earthwork' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solar Systems' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Systems' } },
        ],
      },
      logo: {
        '@type': 'ImageObject',
        url: 'https://sulfurspringslandmanagement.com/logo.png',
      },
      image: 'https://sulfurspringslandmanagement.com/og-image.png',
    },
    {
      '@type': 'Organization',
      '@id': 'https://sulfurspringslandmanagement.com/#organization',
      name: 'Sulfur Springs Land Management',
      legalName: 'StormHaven Enterprises LLC',
      url: 'https://sulfurspringslandmanagement.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sulfurspringslandmanagement.com/logo.png',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://sulfurspringslandmanagement.com/#website',
      url: 'https://sulfurspringslandmanagement.com',
      name: 'Sulfur Springs Land Management',
      description: 'Land management, clearing, grading, and off-grid services in Cochise County, Arizona',
      publisher: {
        '@id': 'https://sulfurspringslandmanagement.com/#organization',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-textPrimary">
        {children}
      </body>
    </html>
  );
}
