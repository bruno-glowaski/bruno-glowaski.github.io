import type { Config } from "tailwindcss";
import { addIconSelectors } from "@iconify/tailwind";
import typographyPlugin from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }: { theme: any }) => ({
        dark: {
          css: {
            "--tw-prose-body": theme("colors.foreground"),
            "--tw-prose-bold": theme("colors.accent"),
            textAlign: "justify",
          },
        },
      }),
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
      minHeight: {
        lscreen: "100lvh",
        "2lscreen": "200lvh",
      },
    },
  },
  plugins: [addIconSelectors(["mdi"]), typographyPlugin],
} satisfies Config;
