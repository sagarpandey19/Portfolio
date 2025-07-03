import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@/components/analytics';
import { JsonLd } from '@/components/json-ld';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sagarpandey.dev'),
  title: {
    default: 'Sagar Kumar Pandey - Software Developer & AI Enthusiast',
    template: '%s | Sagar Kumar Pandey'
  },
  description: 'Experienced Software Developer specializing in MERN Stack, AI/ML, and modern web technologies. Currently pursuing B.Tech in Computer Science with hands-on experience in full-stack development and machine learning.',
  keywords: [
    'Sagar Kumar Pandey',
    'Software Developer',
    'MERN Stack Developer',
    'AI Engineer',
    'Machine Learning',
    'React Developer',
    'Node.js Developer',
    'Full Stack Developer',
    'Computer Science',
    'Web Development',
    'JavaScript',
    'Python',
    'TensorFlow',
    'MongoDB',
    'Express.js',
    'Portfolio'
  ],
  authors: [{ name: 'Sagar Kumar Pandey', url: 'https://sagarpandey.dev' }],
  creator: 'Sagar Kumar Pandey',
  publisher: 'Sagar Kumar Pandey',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sagarpandey.dev',
    title: 'Sagar Kumar Pandey - Software Developer & AI Enthusiast',
    description: 'Experienced Software Developer specializing in MERN Stack, AI/ML, and modern web technologies.',
    siteName: 'Sagar Kumar Pandey Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sagar Kumar Pandey - Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagar Kumar Pandey - Software Developer & AI Enthusiast',
    description: 'Experienced Software Developer specializing in MERN Stack, AI/ML, and modern web technologies.',
    images: ['/og-image.jpg'],
    creator: '@sagarpandey19',
  },
  alternates: {
    canonical: 'https://sagarpandey.dev',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a192f" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster richColors position="top-right" />
          <Analytics />
          <JsonLd />
        </ThemeProvider>
      </body>
    </html>
  );
}