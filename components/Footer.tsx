'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-champagne border-opacity-30 py-16 mt-32">
      <div className="container">
        <div className="grid grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-cormorant text-2xl tracking-widest mb-4 text-champagne">
              MAISON MADOX
            </h3>
            <p className="text-mist text-sm font-montserrat font-light">
              A luxury French design studio merging craft with editorial vision.
            </p>
          </div>
          <div>
            <p className="font-montserrat font-light text-sm text-mist mb-4 uppercase tracking-wide">
              Navigation
            </p>
            <ul className="space-y-2 text-sm font-montserrat font-light">
              <li>
                <Link href="/" className="hover:text-champagne transition-colors">
                  Works
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-champagne transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-champagne transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-champagne transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-montserrat font-light text-sm text-mist mb-4 uppercase tracking-wide">
              Follow
            </p>
            <ul className="space-y-2 text-sm font-montserrat font-light">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-champagne transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-champagne transition-colors"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-champagne transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-montserrat font-light text-sm text-mist mb-4 uppercase tracking-wide">
              Contact
            </p>
            <p className="text-sm font-montserrat font-light mb-2">
              Paris, France
            </p>
            <p className="text-sm font-montserrat font-light">
              <a
                href="mailto:hello@maisonmadox.com"
                className="hover:text-champagne transition-colors"
              >
                hello@maisonmadox.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-champagne border-opacity-20 pt-8">
          <p className="text-xs font-montserrat font-light text-mist text-center">
            © {new Date().getFullYear()} Maison Madox. All rights reserved.
          </p>
          <p className="text-[0.65rem] font-montserrat font-light text-mist/50 text-center mt-2 tracking-widest uppercase">
            Designed &amp; Developed by St. Clair Design Co.
          </p>
        </div>
      </div>
    </footer>
  );
}
