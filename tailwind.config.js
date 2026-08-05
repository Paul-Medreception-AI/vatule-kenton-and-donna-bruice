/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16262e",
        "ink-deep": "#0d1a20",
        "ink-soft": "#243a44",
        cream: "#fbf8f3",
        sand: "#f2ebe1",
        stone: "#ddd2c2",
        brass: "#b08d57",
        "brass-light": "#c9a96e",
        "brass-dark": "#96754a",
        muted: "#6f7b80",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.32em",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
module.exports = config;
