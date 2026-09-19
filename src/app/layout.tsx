import type { Metadata } from 'next';
import './globals.css';

const title = 'Dr. Maya Reynolds, PsyD | Therapy for Anxiety & Trauma in Santa Monica';
const description =
  'Therapy for anxiety, panic, trauma, burnout, and perfectionism for adults in Santa Monica and across California via secure telehealth.';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title,
  description,
  robots: 'index, follow',
  openGraph: {
    title,
    description,
    type: 'website',
    images: ['/images/maya-portrait.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/maya-portrait.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain min-h-[100dvh] overflow-x-hidden" id="top">
        {children}
      </body>
    </html>
  );
}
