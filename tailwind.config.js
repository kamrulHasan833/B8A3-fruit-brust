/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        maxWidth: {
            standard: "90rem",
          },
          colors: {
            "primary-color": "#F85559",
            "title-color": "#121212",
            "desc-color": "#12121299",
            "desc2-color": "#121212CC",
            "rating-color": "#FBC0A8",
            "fb-color": "#1877F2",
            "yt-color": "#FF0000",
          },
          fontFamily: {
            lato: ["Lato", "sans-serif"],
          },
          backgroundImage: {
            "slider-1": "url('./images/banner1.png')",
            "slider-2": "url('./images/banner2.png')",
            "slider-1": "url('./images/banner3.png')",
            "slider-1": "url('./images/banner4.png')",
            tema: "url('./images/team.png')",
          },
      },
    },
    plugins: [],
  }