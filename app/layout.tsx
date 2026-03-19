import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Maison Madox | Luxury French Design Studio',
  description:
    'Maison Madox is a luxury French design studio and fashion house, merging craft with editorial vision.',
  keywords: 'luxury fashion, design studio, French couture, editorial design',
  authors: [{ name: 'Maison Madox' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-noir text-marble">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
