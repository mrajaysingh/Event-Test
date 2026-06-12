/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
        accent: '#D4AF37',
        purple: '#8B5CF6'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
      },
      backdropBlur: {
        'glass': '10px'
      }
    }
  },
  plugins: []
}
