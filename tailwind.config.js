/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bss-black': '#000000',
        'bss-green': '#7bfb4e',
        'bss-white': '#ffffff',
        'bss-carbon': '#333333',
        'bss-gray': '#a5a5a5',
        'bss-violet': '#711FFF',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'ibm-mono': ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'title': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['36px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['28px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'body': ['16px', { lineHeight: '1.5' }],
      },
      animation: {
        'glitch-strong': 'glitch-strong 0.3s infinite',
        'pulse-green': 'pulse-green 2s infinite',
        'matrix-fall': 'matrix-fall 20s linear infinite',
        'shimmer': 'shimmer 2s infinite',
        'border-glow': 'border-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'glitch-strong': {
          '0%, 100%': { transform: 'translate(0)' },
          '10%': { transform: 'translate(-2px, -1px)' },
          '20%': { transform: 'translate(2px, 1px)' },
          '30%': { transform: 'translate(-1px, 2px)' },
          '40%': { transform: 'translate(1px, -2px)' },
          '50%': { transform: 'translate(-2px, 2px)' },
          '60%': { transform: 'translate(2px, -1px)' },
          '70%': { transform: 'translate(-1px, -2px)' },
          '80%': { transform: 'translate(1px, 2px)' },
          '90%': { transform: 'translate(-2px, -1px)' },
        },
        'pulse-green': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(123, 251, 78, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(123, 251, 78, 0)' },
        },
        'matrix-fall': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'border-glow': {
          '0%': { borderColor: 'rgba(123, 251, 78, 0.3)' },
          '100%': { borderColor: 'rgba(123, 251, 78, 1)' },
        },
      },
    },
  },
  plugins: [],
};