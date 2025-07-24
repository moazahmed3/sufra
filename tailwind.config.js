/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        hover: "var(--hover-color-primary)",
        black: "var(--text-black)", 
        backgroundprimary: "var(--background-primary)",
        backgroundsecondary: "var(--background-secondary)",
        muted: "var(--color-muted)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        primary: ["Amatic SC", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
      },
      keyframes: {
        "up-down": {
          "0%": { transform: "translateY(12px)" },
          "100%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        updown: "up-down 1.5s ease-in-out infinite alternate-reverse both",
      },
    },
  },
  plugins: [],
};
