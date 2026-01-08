/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Restore Tailwind defaults (limited to black/white)
        white: '#FFFFFF',
        black: '#000000',
        
        // Paper palette as main semantic colors (shadcn/ui compatible)
        background: '#fdfbf7',      // paper-50
        foreground: '#382c22',      // paper-900  
        card: '#f7f3e8',           // paper-100
        'card-foreground': '#382c22', // paper-900
        popover: '#fdfbf7',         // paper-50
        'popover-foreground': '#382c22', // paper-900
        primary: '#5c4d3c',         // paper-800
        'primary-foreground': '#fdfbf7', // paper-50
        secondary: '#efe8d3',       // paper-200
        'secondary-foreground': '#382c22', // paper-900
        muted: '#5c4d3c',           // paper-800
        'muted-foreground': '#e5dbbc', // paper-300
        accent: '#e5dbbc',          // paper-300 (border/line color)
        'accent-foreground': '#382c22', // paper-900
        destructive: '#dc2626',     // Standard red for errors
        'destructive-foreground': '#fdfbf7', // paper-50
        border: '#e5dbbc',          // paper-300 (as intended)
        input: '#e5dbbc',           // paper-300
        ring: '#5c4d3c',            // paper-800
        
        // Keep paper palette available for explicit use
        paper: {
          50: "#fdfbf7",
          100: "#f7f3e8", 
          200: "#efe8d3",
          300: "#e5dbbc", // Border/Line
          800: "#5c4d3c", // Muted text  
          900: "#382c22", // Primary text
        }
      },
      fontFamily: {
        sans: ['Merriweather', 'Georgia', 'serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        display: ['Merriweather', 'Georgia', 'serif'],
        merriweather: ['Merriweather', 'Georgia', 'serif'],
        crimson: ['Crimson Text', 'Georgia', 'serif'],
        playfair: ['Playfair Display', 'Georgia', 'serif'],
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