import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'heading-xl': ['90px', { lineHeight: '112px' }],
        'heading-lg': ['64px', { lineHeight: '77px' }],
        'heading-md': ['48px', { lineHeight: '60px' }],
        'body-lg': ['24px', { lineHeight: '48px' }],
        'body-md': ['21px', { lineHeight: '36px' }],
        'body-sm': ['16px', { lineHeight: '28px' }],
        'btn-text': ['27.862px', { lineHeight: '28px' }],
      },
      colors: {
        background: '#FAFAFA',
        foreground: '#1D1D21',
        muted: '#718096',
        primary: {
          DEFAULT: '#F76680',
          dark: '#57007B',
        },
        accent: {
          yellow: 'rgba(217, 223, 157, 0.3)',
          blue: '#70EEFF',
          pink: '#F6BFFF',
        },
        'btn-text': '#FAFAFA',
        'card-bg': '#F2F2F2',
      },
      spacing: {
        section: '96px',
        'frame-gap': '160px',
        'cta-button': '88px',
        'btn-x': '59px',
        'btn-y': '30px',
        'card-padding': '40px',
      },
      borderRadius: {
        xl: '50px',
        cta: '15px',
        icon: '18.8256px',
        btn: '15px',
        card: '20px',
      },
      blur: {
        eclipse: '210px',
        soft: '30px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        btn: '0px 7.96px 97.51px rgba(0, 0, 0, 0.15)',
      },
      gridTemplateColumns: {
        'stats-4': 'repeat(4, minmax(0, 1fr))',
        'portfolio-2': 'repeat(2, minmax(0, 1fr))',
      },
      gap: {
        'grid-gap': '40px',
      },
      zIndex: {
        eclipse: '1',
        content: '2',
      },
    },
  },
  plugins: [],
}

export default config
