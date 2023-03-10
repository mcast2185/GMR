/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
        "Thasadith" : ['Thasadith', "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

