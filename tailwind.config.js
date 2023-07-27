/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        maxWidth: {
            standard: "90rem",
            'text-max':'37.5rem',
            'text-moderate':'26rem',
            'text-min':'17.5rem'
          },
          colors: {
            "primary-color": "#F85559",
            "title-color": "#121212",
            "desc-color": "#12121299",
            "desc2-color": "#121212CC",
            "rating-color": "#FBC0A8",
            "fb-color": "#1877F2",
            "yt-color": "#FF0000",
            "hr-color": "#121212CC",
            'brd-color':' #12121219'
          },
          fontFamily: {
            lato: ["Lato", "sans-serif"],
          },
          backgroundImage: {
            "slider-1": "url('./images/banner1.png')",
            "slider-2": "url('./images/banner2.png')",
            "slider-3": "url('./images/banner3.png')",
            "slider-4": "url('./images/banner4.png')",
            team: "url('./images/team.png')",
          },
          margin:{
            standard:'8.75rem'
        },
        padding: {
          "btn-px": "1.875rem",
        },
        
        fontSize: {
          "modal-title": "40px",
        },
      },
    },
    plugins: [],
  }