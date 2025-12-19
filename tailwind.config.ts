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
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        gradientShift: {
          "0%": { strokeDashoffset: "1000", backgroundPosition: "0% 50%" },
          "100%": { strokeDashoffset: "0", backgroundPosition: "200% 50%" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 122, 204, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 122, 204, 0.6), 0 0 60px rgba(0, 122, 204, 0.3)" },
        },
      },
    },
  },
  darkMode: ["class"],
  plugins: [],
};
export default config;
