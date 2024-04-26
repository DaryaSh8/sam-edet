/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "color-1": "var(--bg-color-1)",
        "color-2": "var(--bg-color-2)",
        "color-3": "var(--bg-color-3)",
        "color-4": "var(--bg-color-4)",
        "color-5": "var(--bg-color-5)",
        "color-6": "var(--bg-color-6)",
      },
      textColor: {
        "color-1": "var(--text-color-1)",
        "color-2": "var(--text-color-2)",
        "color-3": "var(--text-color-3)",
        "color-4": "var(--text-color-4)",
        "color-5": "var(--text-color-5)",
        "color-6": "var(--text-color-6)",
      },
    },

    container: {},

    screens: {
      "desktop-l": { max: "1919px" },
      desktop: { max: "1439px" },
      laptop: { max: "1279px" },
      tablet: { max: "1023px" },
      mobile: { max: "767px" },
    },

    fontFamily: {
      sans: "var(--font-family-1)",
    },
    spacing: {
      1: "var(--spacing-1)",
      2: "var(--spacing-2)",
      3: "var(--spacing-3)",
      4: "var(--spacing-4)",
      5: "var(--spacing-5)",
      6: "var(--spacing-6)",
      7: "var(--spacing-7)",
    },
    borderRadius: {
      1: "var(--radius-1)",
      2: "var(--radius-2)",
      3: "var(--radius-3)",
      4: "var(--radius-4)",
      5: "var(--radius-5)",
      6: "var(--radius-6)",
    },
    borderColor: { "color-1": "var(--border-color-1)" },
    fontSize: {
      h1: [
        "var(--font-size-h1)",
        { lineHeight: "36px", letterSpacing: "-.6px", fontWeight: "700" },
      ],
      h2: [
        "var(--font-size-h2)",
        { lineHeight: "30px", letterSpacing: "-.6px", fontWeight: "700" },
      ],
      h3: [
        "var(--font-size-h3)",
        { lineHeight: "28px", letterSpacing: "-.4px", fontWeight: "700" },
      ],
      h4: [
        "var(--font-size-h4)",
        { lineHeight: "24px", letterSpacing: "-.3px", fontWeight: "700" },
      ],
      "body-1": [
        "var(--font-size-body-1)",
        { lineHeight: "19px", letterSpacing: "-.05px", fontWeight: "600" },
      ],
      "body-2": [
        "var(--font-size-body-2)",
        { lineHeight: "18px", letterSpacing: "-.1px", fontWeight: "600" },
      ],
      "body-3": [
        "var(--font-size-body-3)",
        { lineHeight: "15px", letterSpacing: "-.02px", fontWeight: "600" },
      ],
      "body-4": [
        "var(--font-size-body-4)",
        { lineHeight: "24px", letterSpacing: "-.3px", fontWeight: "700" },
      ],
    },
  },
  plugins: [],
};
