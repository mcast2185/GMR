
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', 
  theme: {
    screens: {
      '2xl': {'min': '1535px'},
      'xl': {'min': '1279px'},
      'lg': {'min': '1023px'},
      'md': {'min': '767px'},
      'sm': {'min': '340px','max': '500px'},
    },
    extend: {
      fontFamily: {
        "MajorMonoDisplay": ['Major Mono Display', 'monospace'],
        "Megrim": ["Megrim"],
        "Quicksand": ['Quicksand', 'sans-serif'],
        "Montserrat": ["Montserrat Subrayada", "sans-serif"],
        "PressStart2P": ["Press Start 2P", "cursive"],
        "RubikMonoOne": ["Rubik Mono One", "sans-serif"],
        "AlegreyaSans" : ['Alegreya Sans', "sans-serif"],
        "MontserratAlternates" : ['Montserrat Alternates', "sans-serif"],
        "Philosopher" : ['Philosopher', "sans-serif"],
        "TenorSans": ['Tenor Sans', 'sans-serif'],
        "JuliusSansOne": ['Julius Sans One', "sans-serif"],
        "Thasadith" : ['Thasadith', "sans-serif"],
        "Fahkwang": ['Fahkwang', "sans-serif"],
        "AdventPro": ['Advent Pro', "sans-serif"],
        "Kalam": ['Kalam', 'cursive'],
        "BubbleGum": ['Bubblegum Sans', 'cursive'],
        "PermanentMarker": ['Permanent Marker', 'cursive'],
        "RubikVinyl": ['Rubik Vinyl', 'cursive']
      },
    },
  },
  plugins: [
    require('@neojp/tailwindcss-box-sizing-utilities')
  ],
  corePlugins: {
    boxSizing: false,
    preflight: false,
  }
};