import type { Config } from "tailwindcss";
import { addIconSelectors } from "@iconify/tailwind";
import typographyPlugin from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

const heights = {
  lscreen: "100lvh",
  "2lscreen": "200lvh",
};

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
        "subsurface-scattering": "var(--color-subsurface-scattering)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      fontSize: {
        h1: "4em",
      },
      minHeight: heights,
      height: heights,
    },
  },
  plugins: [
    addIconSelectors(["mdi"]),
    typographyPlugin,
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        ".material-acrylic": {
          "@apply bg-acrylic backdrop-blur-md": {},
          "--inset-border-color": theme("colors.acrylic-separator"),
          boxShadow:
            "/* Tailwind */ var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow), " +
            "/* Border */ var(--inset-border-shadow, 0 0 #0000), " +
            "/* Subsurface scattering */ var(--subsurface-scattering-shadow, 0 0 #0000)" +
            "!important",
        },
        ".acrylic-border": {
          "--inset-border-shadow": "inset 0 0 0 1px var(--inset-border-color)",
          "--subsurface-scattering-shadow":
            "inset 0 0 8px 4px theme(colors.subsurface-scattering), inset 0 0 32px 4px theme(colors.subsurface-scattering)",
        },
        ...Object.fromEntries(
          (
            [
              ["t", (s, b) => `0 ${s + b}px ${b}px ${-b}px`],
              ["b", (s, b) => `0 ${-s + -b}px ${b}px ${-b}px`],
              ["l", (s, b) => `${s + b}px 0 ${b}px ${-b}px`],
              ["r", (s, b) => `${-s + -b}px 0 ${b}px ${-b}px`],
            ] satisfies [string, (spread: number, blur: number) => string][]
          ).map(([suffix, lengths]) => [
            `.acrylic-border-${suffix}`,
            {
              "--inset-border-shadow": `inset ${lengths(1, 0)} var(--inset-border-color)`,
              "--subsurface-scattering-shadow": `inset ${lengths(4, 8)} theme(colors.subsurface-scattering), inset ${lengths(4, 32)} theme(colors.subsurface-scattering)`,
            },
          ]),
        ),
      });
    }),
  ],
} satisfies Config;
