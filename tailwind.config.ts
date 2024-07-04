import { Instrument_Serif, Inter } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "DM_sans": ["DM Sans","sans-serif"],
        "Instrument-Serif": ["Instrument Serif", "serif"],
        "inter": ["Inter", "sans-serif"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "circle": 'url("/circle.svg")',
      },
    },
  },
  plugins: [
    function({addUtilities}: { addUtilities: (utilities: Record<string, any>) => void }){
      const newUtilities ={
        ".no-scrollbar::-webkit-scrollbar":{
          display:"none",
        },
        ".no-scollbar":{
          "-ms-overflow-style":"none",
          "scrollbar-width":"none"
        }
      }
      addUtilities(newUtilities);

    }
  ],
};

export default config;