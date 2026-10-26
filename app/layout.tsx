import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sulfur Springs Land Management | Land Clearing, Grading & Off-Grid Quotes, Sulphur Springs Valley AZ',
  description: 'Veteran-owned referral service for landowners in the Sulphur Springs Valley, Cochise County, Arizona. Get quotes from independent ROC-licensed contractors for land clearing, grading, trenching, solar and off-grid water. Guides for Willcox, Pearce, Sunsites, Dragoon and Cochise.',
  keywords: 'land clearing willcox az, grading pearce az, sunsites land clearing, dragoon arizona land, off-grid cochise county, sulphur springs valley contractors, cochise county land management',
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
    description: 'Quotes from independent, ROC-licensed contractors for rural parcels in the Sulphur Springs Valley, Arizona — plus guides written from living out here.',
    type: 'website',
    url: 'https://sulfurspringslandmanagement.com',
    images: [
      {
        url: 'https://sulfurspringslandmanagement.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sulfur Springs Land Management - Sulphur Springs Valley, Arizona',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sulfur Springs Land Management | Sulphur Springs Valley, AZ',
    description: 'Veteran-owned referral service: quotes from independent ROC-licensed contractors for land clearing, grading, solar and water in the Sulphur Springs Valley, Cochise County, Arizona.',
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
      description: 'Veteran-owned referral service connecting landowners in the Sulphur Springs Valley, Cochise County, Arizona with independent ROC-licensed contractors for land clearing, grading, trenching, debris removal, off-grid solar and water systems. Not a licensed contractor.',
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
          name: 'Sulphur Springs Valley',
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
      sameAs: ['https://cochiselandmanagement.com', 'https://strongholdprecisionaerials.com'],
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
      description: 'Veteran-owned referral service connecting landowners in the Sulphur Springs Valley, Cochise County, Arizona with independent ROC-licensed contractors for land clearing, grading, trenching, debris removal, off-grid solar and water systems. Not a licensed contractor.',
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
