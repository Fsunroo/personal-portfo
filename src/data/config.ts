export const CONFIG = {
  // ---------------------------------------------------------------------------
  // Site Settings
  // ---------------------------------------------------------------------------
  site: {
    url: "https://fsunroo.ir",
    locale: "en_US",
    twitterHandle: "",
  },

  // ---------------------------------------------------------------------------
  // SEO Settings
  // ---------------------------------------------------------------------------
  seo: {
    titleTemplate: "%s | %n", // %s = page title, %n = DATA.name
    twitterCard: "summary_large_image" as const,
    robots: "index, follow",
  },

  // ---------------------------------------------------------------------------
  // Typography
  // ---------------------------------------------------------------------------
  typography: {
    // Base font size as a percentage. 100 = browser default (16px).
    // 110 = 10% larger or 90 = 10% smaller, across all text, headings, and links simultaneously.
    baseFontSize: 100,
  },

  // ---------------------------------------------------------------------------
  // Blog Settings
  // ---------------------------------------------------------------------------
  blog: {
    postsPerPage: 10,
  },

  // ---------------------------------------------------------------------------
  // Font Settings
  // See https://fontsource.org/?variable=true for fonts that can be installed via package registry
  // To change fonts:
  // 1. pnpm install @fontsource-variable/<font-name> (for example 'pnpm add @fontsource-variable/inter'). Install BOTH the sans and mono fonts.
  // 2. Edit src/styles/global.css - swap the @import and --font-sans and --font-mono values
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // Design Settings
  // 1. Pick a theme at ui.shadcn.com/themes or generate one with a tool like tweakcn.com
  // 2. Copy the CSS variables block
  // 3. Paste into BELOW with the naming conversion already used
  // ---------------------------------------------------------------------------

  theme: {
    radius: "0.625rem",

    light: {
      background: "oklch(0.985 0.006 165)",
      foreground: "oklch(0.21 0.025 180)",
      card: "oklch(0.998 0.002 165)",
      cardForeground: "oklch(0.21 0.025 180)",
      popover: "oklch(1 0 0)",
      popoverForeground: "oklch(0.145 0 0)",
      primary: "oklch(0.43 0.095 178)",
      primaryForeground: "oklch(0.985 0 0)",
      secondary: "oklch(0.95 0.018 170)",
      secondaryForeground: "oklch(0.31 0.05 178)",
      muted: "oklch(0.95 0.012 170)",
      mutedForeground: "oklch(0.49 0.025 180)",
      accent: "oklch(0.93 0.027 170)",
      accentForeground: "oklch(0.29 0.065 178)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.88 0.018 175)",
      input: "oklch(0.88 0.018 175)",
      ring: "oklch(0.58 0.09 178)",
    },

    dark: {
      background: "oklch(0.17 0.018 180)",
      foreground: "oklch(0.985 0 0)",
      card: "oklch(0.205 0.02 180)",
      cardForeground: "oklch(0.985 0 0)",
      popover: "oklch(0.205 0 0)",
      popoverForeground: "oklch(0.985 0 0)",
      primary: "oklch(0.78 0.105 175)",
      primaryForeground: "oklch(0.18 0.025 180)",
      secondary: "oklch(0.27 0.025 180)",
      secondaryForeground: "oklch(0.985 0 0)",
      muted: "oklch(0.27 0.02 180)",
      mutedForeground: "oklch(0.72 0.025 175)",
      accent: "oklch(0.3 0.04 178)",
      accentForeground: "oklch(0.985 0 0)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 15%)",
      ring: "oklch(0.7 0.09 175)",
    },
  },

} as const;
