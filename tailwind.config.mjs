/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FFFFFF',
        surface: '#FFFFFF',
        ink: {
          primary: '#000000',
          secondary: 'rgb(0 0 0 / 64%)',
          tertiary: 'rgb(0 0 0 / 44%)',
        },
        border: {
          DEFAULT: 'rgb(0 0 0 / 10%)',
          strong: 'rgb(0 0 0 / 18%)',
        },
        fill: {
          hover: 'rgb(0 0 0 / 5%)',
          pressed: 'rgb(0 0 0 / 9%)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'body': ['1rem', { lineHeight: '1.5' }],
        'label': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
        'heading': ['2rem', { lineHeight: '1.1', fontWeight: '500', letterSpacing: '-0.02em' }],
        'heading-lg': ['3rem', { lineHeight: '1.05', fontWeight: '500', letterSpacing: '-0.02em' }],
        'heading-xl': ['4rem', { lineHeight: '1.05', fontWeight: '500', letterSpacing: '-0.02em' }],
      },
      spacing: {
        'section': '96px',
        'section-sm': '64px',
      },
      borderRadius: {
        'DEFAULT': '8px',
        'sm': '6px',
        'lg': '12px',
      },
    },
  },
  plugins: [],
};
