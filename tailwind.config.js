/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: { sm: "480px", md: "768px", lg: "1200px", xl: "1440px" },
    fontFamily: { display: ["Bellefair", "serif"] },
    extend: {
      colors: {
        "very-dark-blue": "#0B0D17",
        "light-bluish": "#D0D6F9",
        white: "#FFFFFF",
      },
      fontSize: {
        "9xl": ["9.375rem", { lineHeight: "100%" }],
        "4xl": ["6.25rem", { lineHeight: "100%" }],
        "3xl": ["3.5rem", { lineHeight: "120%" }],
        "2xl": ["2rem", { lineHeight: "120%" }],
        xl: ["1.75rem", { lineHeight: "120%" }],
      },
      backgroundImage: {
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "technology-desktop":
          "url('/assets/technology/background-technology-desktop.jpg')",
        "technology-mobile":
          "url('/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('/assets/technology/background-technology-tablet.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
      },
    },
  },
  plugins: [],
};
