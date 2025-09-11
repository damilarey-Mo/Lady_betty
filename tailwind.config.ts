import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-beige': '#cbc6bc',
        'dark-olive': '#4a463a',
        'soft-rose': '#d4a5a5',
        'new-accent': '#bca893',
        'warm-beige-light': '#e8e5e0',
        'warm-beige-dark': '#b8b3a8',
        'dark-olive-light': '#6b6758',
        'dark-olive-dark': '#2d2a22',
      },
                  fontFamily: {
                    'playfair': ['Josefin Sans', 'sans-serif'],
                    'inter': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
                  },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-in-out',
        'scale-in': 'scaleIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
