/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merri: ["var(--font-merriweather)"],
        sans: ["var(--font-open-sans)"],
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        secondaryBcg: "#f0f1f1",
        accentTextColor: "#5e5322",
        yellow: "#fad648",
        signIn_signOnBtn: "#737373",
        text_color: "#3c3c3c",
      },
      inset: {
        "-483px": "-483px",
      },
      container: {
        center: true,
        padding: "0 142px",
      },
      backgroundImage: {
        "three-columns": "url('/public/3-Columns-Background.png')",
      },
    },
  },
  plugins: [],
};
