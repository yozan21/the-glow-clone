export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1B443F",
          light: "#3B9689",
          dark: "#13302C",
        },
        accent: "#797979",
        text: "#222222",
        surface: "#F2F2F2",
        boundry: "#E5E7EB",
        footer: {
          DEFAULT: "#F4F4F4",
          light: "#6B7280",
          dark: "#4B5563",
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        cormorant: ["Cormorant", "serif"],
      },
    },
  },
};
