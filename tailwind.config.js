/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mb: "900px",
        pp: "580px",
        spp: "460px",
      },
    },
  },
  plugins: [],
};
