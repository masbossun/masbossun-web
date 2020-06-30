module.exports = {
  theme: {
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      accent: "var(--color-accent)",
      accentSecondary: "var(--color-accent-secondary)",
      gray: "var(--color-gray)",
      hijrah: "var(--color-hijrah)",
    },
    letterSpacing: {
      tighter: "-.04em",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      serif: ["DM Serif Text", "serif"],
      display: ["DM Serif Display", "serif"],
    },
    opacity: {
      0: "0",
      10: ".1",
      60: ".6",
      100: "1",
    },
    extend: {
      zIndex: {
        "-1": "-1",
      },
      height: {
        "half": "2px",
      },
      screens: {
        "dark": { "raw": "(prefers-color-scheme: dark)" },
      },
    },
  },
  variants: {
    display: ["responsive", "hover", "group-hover"],
    opacity: ["responsive", "hover", "group-hover"],
    transitionTimingFunction: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
