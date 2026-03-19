import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        noir: '#0A0A0A',
        champagne: '#C9A96E',
        marble: '#F4F1EC',
        graphite: '#1C1C1C',
        mist: '#9B9B9B',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.15em',
      },
    },
  },
  plugins: [],
};

export default config;
