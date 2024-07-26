/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [

    function ({addUtilities}){
       const newutilities = {
        
        ".no-scrollbar::-webkit-scrollbar":{

          display: "none",
        },

        ".no-scrollbar" :{

          "-ms-overflow-style" : "none",
          "scrollbar-width " : "none"

        }
       }

       
      addUtilities(newutilities)
      }
    ],
  }

