/** @type {import('tailwindcss').Config} */
export default {
  // THIS LINE IS REQUIRED FOR SHADCN THEME TOGGLE TO WORK
  darkMode: ["class"], 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // This links your tailwind classes to the CSS variables in index.css
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
      }
    },
  },
  plugins: [],
}