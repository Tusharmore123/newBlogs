/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      screens:{
        'xs': '300px',  // Custom breakpoint for extra small screens
        'sm': '450px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'dl':'0px'
      },
      fontSize:{
        'xxs':'0.3rem',
        
      },
      margin:{
        '10p':'35%'
      },
    },
  },
  plugins: [],
}

