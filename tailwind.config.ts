import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "gradient-shift": "gradientShift 6s ease-in-out infinite",
      },
      keyframes: {
        gradientShift: {
          "0%": { strokeDashoffset: "1000", backgroundPosition: "0% 50%" },
          "100%": { strokeDashoffset: "0", backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  darkMode: ["class"],
  plugins: [],
};
export default config;
