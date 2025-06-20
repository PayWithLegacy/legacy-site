module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,msx}",
    "./components/**/*.{js,ts,jsx,tsx,msx}",
    "./app/**/*.{js,ts,jsx,tsx,msx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-red": "#c72127",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      boxShadow: {
        brand:
          "0 10px 25px -3px rgba(23, 45, 85, 0.1), 0 4px 6px -2px rgba(23, 45, 85, 0.05)",
        "brand-lg": "0 25px 50px -12px rgba(23, 45, 85, 0.25)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #172D55 0%, #172D55 100%)",
        "gradient-brand-light":
          "linear-gradient(135deg, #172D55 0%, #D2B253 100%)",
      },
    },
  },
};
