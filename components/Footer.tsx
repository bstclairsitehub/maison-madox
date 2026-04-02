'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-champagne border-opacity-20 py-20 mt-32 relative overflow-hidden">
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter6\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' result=\'noise\' /%3E%3C/filter%3E%3Crect width=\'400\' height=\'400\' fill=\'%23fff\' filter=\'url(%23noiseFilter6)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
      }} />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div>
            <h3 className="font-cormorant text-2xl tracking-widest mb-6 text-champagne">
              MAISON MADOX
            </h3>
            <p className="text-mist/80 text-sm font-montserrat font-light leading-relaxed">
              A luxury French design studio merging craft with editorial vision.
            </p>
          </div>
          <div>
            <p className="font-montserrat font-light text-xs text-mist/60 mb-6 uppercase tracking-widest">
              Navigation
            </p>
            <ul className="space-y-3 text-sm font-montserrat font-light">
              <li>
                <Link href="/" className="relative hover:text-champagne transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-champagne after:transition-all after:duration-300 hover:after:w-full">
                  Works
                </Link>
              </li>
              <li>
                <Link href="/" className="relative hover:text-champagne transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-champagne after:transition-all after:duration-300 hover:after:w-full">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="relative hover:text-champagne transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-champagne after:transition-all after:duration-300 hover:after:w-full">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/" className="relative hover:text-champagne transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-champagne after:transition-all after:duration-300 hover:after:w-full">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-montserrat font-light text-xs text-mist/60 mb-6 uppercase tracking-widest">
              Follow
            </p>
            <ul className="space-y-3 text-sm font-montserrat font-light">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative hover:text-champagne transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-champagne after:transition-all after:duration-300 hover:after:w-full"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative hover:text-champagne transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-champagne after:transition-all after:duration-300 hover:after:w-full"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative hover:text-champagne transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-champagne after:transition-all after:duration-300 hover:after:w-full"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-montserrat font-light text-xs text-mist/60 mb-6 uppercase tracking-widest">
              Contact
            </p>
            <p className="text-sm font-montserrat font-light mb-3">
              Paris, France
            </p>
            <p className="text-sm font-montserrat font-light">
              <a
                href="mailto:hello@maisonmadox.com"
                className="relative hover:text-champagne transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-champagne after:transition-all after:duration-300 hover:after:w-full"
              >
                hello@maisonmadox.com
              </a>
            </p>
          </div>
        </div>
        <div className="section-divider mb-8"></div>
        <div className="text-center space-y-2">
          <p className="text-xs font-montserrat font-light text-mist/70">
            © {new Date().getFullYear()} Maison Madox. All rights reserved.
          </p>
          <p className="text-[0.65rem] font-montserrat font-light text-mist/50 tracking-widest uppercase">
            Designed &amp; Developed by St. Clair Design Co.
          </p>
        </div>
      </div>
    </footer>
  );
}
