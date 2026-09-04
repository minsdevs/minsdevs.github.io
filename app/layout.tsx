import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://minseokchae.dev',
  ),
  title: 'Minseok Chae — Backend & Product Engineer',
  description:
    'Computer science student building backend systems, AI-assisted developer tools, and products that move from idea to deployment.',
  alternates: { canonical: '/' },
  authors: [{ name: 'Minseok Chae', url: 'https://github.com/minsdevs' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Minseok Chae',
    title: 'Minseok Chae — Backend & Product Engineer',
    description:
      'Backend systems, AI-assisted developer tools, and shipped products—built with evidence and explicit tradeoffs.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Minseok Chae — Backend systems, AI-assisted tools, shipped products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minseok Chae — Backend & Product Engineer',
    description:
      'Backend systems, AI-assisted developer tools, and shipped products.',
    images: ['/og.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f1efe9',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
