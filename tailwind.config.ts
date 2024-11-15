import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif']
      },
      colors: {
        'clr-14': '#919EAB14'
      },
      backgroundImage: {
        'icon-search': "url('/assets/ic_search.svg')"
      },
      boxShadow: {
        one: '0px 0px 1.742px 0px rgba(145, 158, 171, 0.20), 0px 10.449px 20.899px -3.483px rgba(145, 158, 171, 0.12)'
      }
    }
  },
  plugins: []
}
export default config
