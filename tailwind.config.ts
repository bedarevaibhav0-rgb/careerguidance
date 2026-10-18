import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F5FA',
          100: '#E1ECF5',
          200: '#C2D9EB',
          300: '#94BFDC',
          400: '#5F9EC9',
          500: '#3A80B3',
          600: '#2A6694',
          700: '#1D4F75',
          800: '#163E5C',
          900: '#0F2942', // Deep academic navy
          950: '#0A1B2C',
        },
        editorial: {
          sand: '#F7F6F3',
          card: '#FFFFFF',
          border: '#E8E7E3',
          text: '#1F2421',
          muted: '#667085',
          accent: '#C25E00', // Terracotta warm accent
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
        'glow-brand': '0 0 25px -5px rgba(58, 128, 179, 0.3)',
        'glow-amber': '0 0 25px -5px rgba(251, 191, 36, 0.3)',
      },
      animation: {
        'orbit-slow': 'orbitSpin 60s linear infinite',
        'orbit-reverse': 'orbitSpinReverse 75s linear infinite',
        'float-slow': 'floatGentle 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 5s ease-in-out infinite',
      },
      keyframes: {
        orbitSpin: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        orbitSpinReverse: {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-12px) scale(1.03)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
