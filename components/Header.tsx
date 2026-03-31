'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 py-6 transition-all duration-300 ease-out ${
        isScrolled
          ? 'backdrop-blur-md border-b border-champagne border-opacity-20 bg-noir bg-opacity-80'
          : 'border-b border-champagne border-opacity-30'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex-1 transition-colors duration-300 ease-out hover:text-champagne">
          <h1 className="text-2xl font-cormorant font-bold tracking-widest text-champagne">
            MAISON MADOX
          </h1>
        </Link>
        <nav className="flex items-center gap-12 font-montserrat text-sm font-light">
          <Link href="/" className="transition-colors duration-300 ease-out hover:text-champagne">
            Works
          </Link>
          <Link href="/" className="transition-colors duration-300 ease-out hover:text-champagne">
            Products
          </Link>
          <Link href="/blog" className="transition-colors duration-300 ease-out hover:text-champagne">
            Journal
          </Link>
          <Link href="/" className="transition-colors duration-300 ease-out hover:text-champagne">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
