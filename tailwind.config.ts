import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        accent: "var(--color-accent)",
        highlight: "var(--color-highlight)",
        acrylic: "var(--color-acrylic)",
        "acrylic-separator": "var(--color-acrylic-separator)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      fontSize: {
        h1: "4em",
      },
    },
  },
  plugins: [],
} satisfies Config;
