import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueDark: "#0C83D1",
        greyText: "#6b7280",
        // greyText: "#6b7280",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        shoulders: ["Big Shoulders", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
