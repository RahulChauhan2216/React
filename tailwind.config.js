/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        pp: "580px",
        spp: "460px",
        smm: "360px"
      },
    },
  },
  plugins: [],
};
