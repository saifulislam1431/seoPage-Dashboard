/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#5d1cea",
        
"secondary": "#d37b32",
        
"accent": "#5bce3b",
        
"neutral": "#1e1825",
        
"base-100": "#ecf0f4",
        
"info": "#70a7f0",
        
"success": "#1c9b6b",
        
"warning": "#e7b613",
        
"error": "#fa0a3a",
        },
      },
      "night"
    ],
  },
  plugins: [require("daisyui")],
}

