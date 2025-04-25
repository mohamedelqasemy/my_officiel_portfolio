/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#6366F1', // Indigo
        secondary: '#8B5CF6', // Purple
        accent: '#F43F5E', // Rose
        dark: {
          100: '#1F2937', // Lighter dark
          200: '#111827', // Dark
          300: '#0F172A', // Darker
        },
        light: {
          100: '#F3F4F6', // Light gray
          200: '#E5E7EB', // Lighter gray
          300: '#D1D5DB', // Lightest gray
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};