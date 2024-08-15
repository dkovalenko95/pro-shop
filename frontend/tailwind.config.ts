import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ['emerald'],
  },
} satisfies Config;
