import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        instrument: ["var(--font-instrument-serif)"],
        inter: ["var(--font-inter)"],
        plusJakartaSans: ["var(--font-plus-jakarta-sans)"],
        rethinkSans: ["var(--font-rethink-sans)"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
} satisfies Config;
