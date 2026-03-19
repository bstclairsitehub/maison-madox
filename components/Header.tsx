'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-champagne border-opacity-30 py-6">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex-1">
          <h1 className="text-2xl font-cormorant font-bold tracking-widest text-champagne">
            MAISON MADOX
          </h1>
        </Link>
        <nav className="flex items-center gap-12 font-montserrat text-sm font-light">
          <Link href="/" className="hover:text-champagne transition-colors">
            Works
          </Link>
          <Link href="/" className="hover:text-champagne transition-colors">
            Products
          </Link>
          <Link href="/blog" className="hover:text-champagne transition-colors">
            Journal
          </Link>
          <Link href="/" className="hover:text-champagne transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
