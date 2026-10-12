/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Sora', 'Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#7C3AED', // deep violet
          light: '#DDD6FE',   // soft lavender
          dark: '#5B21B6',    // rich deep violet
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#DDD6FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7C3AED',
          800: '#6D28D9',
          900: '#5B21B6',
          950: '#4C1D95',
        },
        lavender: {
          50: '#FAF8FF',
          100: '#F3F0FC',
          200: '#E7E1F9',
          300: '#D4C9F5',
          400: '#B7A2EE',
          500: '#9A7CE5',
          600: '#835CDC',
          700: '#7048C8',
          800: '#5B37A7',
          900: '#4C2E88',
        },
        gray: {
          50: '#FBF9FE',
          100: '#F4F1FA',
          200: '#E6E1F0',
          300: '#D0C9DF',
          400: '#988FA9',
          500: '#6E6682',
          600: '#4F4765',
          700: '#38314B',
          800: '#241E34',
          900: '#140F22',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        'fade-in-left': 'fadeInLeft 0.6s ease-out both',
        'fade-in-right': 'fadeInRight 0.6s ease-out both',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient-x': 'gradientX 4s ease infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 2px 14px rgba(124,58,237,0.18)',
          },
          '50%': {
            boxShadow: '0 4px 28px rgba(124,58,237,0.32)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(36,30,52,0.04), 0 8px 20px rgba(36,30,52,0.03)',
        'soft-md': '0 4px 14px rgba(36,30,52,0.06), 0 12px 28px rgba(36,30,52,0.05)',
        'soft-lg': '0 8px 24px rgba(36,30,52,0.08), 0 20px 48px rgba(36,30,52,0.06)',
        'accent-sm': '0 2px 12px rgba(124,58,237,0.15)',
        'accent-md': '0 6px 22px rgba(124,58,237,0.22)',
        'accent-lg': '0 10px 32px rgba(124,58,237,0.28)',
        'glow-violet': '0 0 35px rgba(139,92,246,0.3)',
      },
    },
  },
  plugins: [],
}
