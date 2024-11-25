/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
         'try': "url('./assets/10 SCENE.png')",
                  'desert': "url('./assets/desert.png')",
                  'statue':"url('./assets/landscape/DrawKit Vector Illustration Landscape & Scenery (3).png')"
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
      },
  
    },
  },
  plugins: [],
}

