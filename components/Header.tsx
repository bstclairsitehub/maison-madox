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
          ? 'backdrop-blur-xl border-b border-champagne border-opacity-15 bg-noir/70 shadow-lg'
          : 'border-b border-champagne border-opacity-10'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex-1 transition-all duration-300 ease-out group">
          <h1 className="text-2xl font-cormorant font-light tracking-widest text-champagne group-hover:text-marble transition-colors duration-300">
            MAISON MADOX
          </h1>
        </Link>
        <nav className="flex items-center gap-16 font-montserrat text-sm font-light">
          <Link href="/" className="relative transition-colors duration-300 ease-out hover:text-champagne after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-champagne after:transition-all after:duration-300 hover:after:w-full">
            Works
          </Link>
          <Link href="/" className="relative transition-colors duration-300 ease-out hover:text-champagne after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-champagne after:transition-all after:duration-300 hover:after:w-full">
            Products
          </Link>
          <Link href="/blog" className="relative transition-colors duration-300 ease-out hover:text-champagne after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-champagne after:transition-all after:duration-300 hover:after:w-full">
            Journal
          </Link>
          <Link href="/" className="relative transition-colors duration-300 ease-out hover:text-champagne after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-champagne after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
