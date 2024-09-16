// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // This path should point to all your template files 
  ],
  theme: {
    extend: {
      colors: {
        primary_color: '#16335B'
      }
    },
  },
  plugins: [],
}