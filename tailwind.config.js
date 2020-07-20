module.exports = {
  theme: {
    colors: {
      primary: "rgba(var(--color-primary), 1)",
      "primary-0": "rgba(var(--color-primary), 0)",
      "primary-10": "rgba(var(--color-primary), 0.1)",
      secondary: "rgba(var(--color-secondary), 1)",
      accent: "rgba(var(--color-accent), 1)",
      "accent-secondary": "rgba(var(--color-accent-secondary), 1)",
      gray: "rgba(var(--color-gray), 1)",
      white: "rgba(var(--color-light), 1)",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      mono: ["DM Mono", "monospace"],
      display: ["DM Sans", "sans-serif"],
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
      maxWidth: {
        320: "400px",
      },
      letterSpacing: {
        tighter: "-.04em",
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
