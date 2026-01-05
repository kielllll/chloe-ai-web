/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core book-themed color palette
        background: '#F9F6F0',     // Main cream page color
        surface: '#FFFFFF',        // Card/book cover backgrounds  
        'surface-highlight': '#F0EAE0', // Subtle paper accents
        text: '#3E2723',           // Primary ink color
        'text-muted': '#8D7F75',   // Secondary faded text
        primary: '#8D6E63',        // Interactive elements (buttons)
        'primary-hover': '#5D4037', // Hover states
        border: '#E0D6CC',         // Subtle page borders
        accent: '#A65D3D',         // Terracotta highlights
        'accent-light': '#F0E6E1', // Light accent backgrounds
        crisis: '#9C3636',         // Error/warning
        'crisis-bg': '#FCEBEB',    // Error backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(56, 44, 34, 0.05), 0 2px 6px -1px rgba(56, 44, 34, 0.02)',
      },
      borderRadius: {
        'DEFAULT': '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}