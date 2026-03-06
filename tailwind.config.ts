import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#2563eb",
        brandRed: "#ef4444"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(180deg, #020617 0%, #0f172a 100%)"
      }
    }
  },
  plugins: []
};

export default config;
