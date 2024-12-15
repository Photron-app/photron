/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}","./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        background: 'var(--background-color)',
        text: {
          normal: 'var(--text-color)',
          muted: 'var(--muted-text-color)'
        },
        
      },
    },
  },
  plugins: [],
}

