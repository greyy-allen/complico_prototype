module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { lg: { max: "1440px" }, md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "var(--black_900)",
          "900_4c": "var(--black_900_4c)",
          "900_b2": "var(--black_900_b2)",
          "900_7f": "var(--black_900_7f)",
          "900_8c": "var(--black_900_8c)",
          "900_3f": "var(--black_900_3f)",
          "900_19": "var(--black_900_19)",
          "900_87": "var(--black_900_87)",
        },
        blue_gray: { 100: "var(--blue_gray_100)", 900: "var(--blue_gray_900)" },
        white: { a700: "var(--white_a700)", a700_4c: "var(--white_a700_4c)" },
        gray: { 100: "var(--gray_100)", 400: "var(--gray_400)" },
        indigo: { a400: "var(--indigo_a400)", a100: "var(--indigo_a100)" },
        deep_purple: { a200: "var(--deep_purple_a200)" },
        orange: { 600: "var(--orange_600)" },
      },
      boxShadow: { xs: "3px 4px 4px 0 #0000003f", sm: "2px 4px 4px 0 #0000003f", md: "4px 4px 4px 0 #0000003f" },
      fontFamily: { roboto: "Roboto", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
