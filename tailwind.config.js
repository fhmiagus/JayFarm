/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          900: '#1a3a1f',
          800: '#22532a',
          700: '#2d6e37',
          600: '#3a8c46',
          500: '#4caf57',
          400: '#6ec97a',
          100: '#e8f5eb',
          50:  '#f2faf3',
        },
        amber: {
          500: '#f59e0b',
          400: '#fbbf24',
          100: '#fef3c7',
        },
        gray: {
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
          600: '#4b5563',
          400: '#9ca3af',
          200: '#e5e7eb',
          100: '#f3f4f6',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,.08)',
        md: '0 4px 16px rgba(0,0,0,.10)',
        lg: '0 8px 32px rgba(0,0,0,.14)',
        xl: '0 16px 48px rgba(0,0,0,.18)',
      },
      borderRadius: {
        sm:   '8px',
        md:   '16px',
        lg:   '24px',
        xl:   '32px',
        '2xl':'40px',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
