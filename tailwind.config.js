export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    //Text values
    "text-[10px]",
    // All z-index values you use
    "z-0",
    "z-10",
    "z-20",
    "z-30",
    // Arbitrary scales
    "scale-[1.30]",
    // Opacity values
    "opacity-0",
    "opacity-100",
    // Translate X arbitrary values
    "translate-x-[1%]",
    "md:translate-x-[5%]",
    "translate-x-[129%]",
    "translate-x-[238%]",
    "-translate-x-[120%]",
    "-translate-x-[230%]",
    // Heights and widths
    "h-[350px]",
    "md:h-[250px]",
    "md:w-50",
    // Padding variants you use dynamically
    "px-5",
    "py-15",
    "p-8",
    "px-1.5",
    "py-0.5",
    "px-2.5",
    "py-1.5",
  ],
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
