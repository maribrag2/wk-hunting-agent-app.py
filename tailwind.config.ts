import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        muted: "#667085",
        line: "#D8DEE8",
        forest: "#12624F",
        coral: "#B24A3A"
      }
    }
  },
  plugins: []
};

export default config;
