
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
            surf: {
                light: 'rgb(var(--surf-light))',
                dark: 'rgb(var(--surf-dark))'
            }
        }
    },
  },
  plugins: [],
};

export default config;