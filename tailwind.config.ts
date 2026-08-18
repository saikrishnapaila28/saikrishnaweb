import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        botanica: {
          950: "#060D08",
          900: "#0A160E", // Deepest Forest Black
          850: "#0F2015", // Base Environment Dark Charcoal Green
          800: "#152A1C",
          700: "#1E3B28",
          600: "#2B5238",
          500: "#3C6E4C",
          400: "#55946A",
          100: "#D6EBDC",
          50: "#EEF7F1",
        },
        golden: {
          900: "#632D10",
          800: "#8C4318",
          700: "#BA5E23",
          600: "#E07A5F", // Warm Sunset Orange
          500: "#F4A261", // Golden Hour Amber
          400: "#F7B882",
          300: "#F8C39E", // Soft Peach
          200: "#FCDDC7",
          100: "#FDF0E6",
        },
        sunset: {
          900: "#361623",
          800: "#572138",
          700: "#843251",
          600: "#C86D74", // Dusty Rose / Pink-Orange
          500: "#DA888F",
          400: "#E6A8AD",
          300: "#F0C8CB",
        },
        twilight: {
          950: "#0F0B13",
          900: "#18101E", // Lilac / Purple Shadow Dark Base
          800: "#25192E",
          700: "#382545",
          600: "#513663",
          400: "#845D9B",
        },
        paper: {
          50: "#FAF7F2", // Off-white legible text
          100: "#F4EFE6",
          200: "#EBE3D5",
          300: "#DCD2C1",
          400: "#BFAF99",
          500: "#998770",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Newsreader", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)",
        "glass-hover": "0 16px 40px 0 rgba(0, 0, 0, 0.45), 0 0 20px 2px rgba(244, 162, 97, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.25)",
        sunset: "0 20px 50px -10px rgba(224, 122, 95, 0.25)",
      },
      keyframes: {
        sunbeam: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1) rotate(0deg)" },
          "50%": { opacity: "0.75", transform: "scale(1.05) rotate(2deg)" },
        },
        drift: {
          "0%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(12px, -15px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.03)" },
        },
        waveform: {
          "0%, 100%": { height: "4px" },
          "50%": { height: "20px" },
        },
      },
      animation: {
        sunbeam: "sunbeam 12s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        "pulse-glow": "pulseGlow 5s ease-in-out infinite",
        waveform: "waveform 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
