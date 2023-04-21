/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'orange-set': '#FFC83A',
        'deafult-color': '#EDEDED',
        'dark-blue-set': '#161622'
      },
      fontFamily: {
        'Rounded-font': ['M PLUS Rounded 1c', 'system-ui', 'sans-serif'],
      },
      textColor: {
        'orange-set': '#FFC83A',
      },
      fontWeight: {
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900',
      },
    },
  },
  plugins: [],
}

