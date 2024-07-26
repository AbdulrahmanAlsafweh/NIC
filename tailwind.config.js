/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('./assets/banner.png')",
        trex: "url('./assets/main-character1.png')",
        cloud: "url('./assets/cloud.png')",
        land1: "url('./assets/land1.png')",
        land2: "url('./assets/land2.png')",
        land3: "url('./assets/land3.png')",
        cactus: "url('./assets/cactus1.png')",
        tripleCactus: "url('./assets/cactus2.png')",

        deadDino: "url('./assets/main-character4.png')",
      },
      keyframes: {
        run: {
          "0%": {
            "background-image": "url('./assets/main-character1.png')",
          },
          "33%": {
            "background-image": "url('./assets/main-character2.png')",
          },
          "66%": {
            "background-image": "url('./assets/main-character3.png')",
          },
          "100%": {
            "background-image": "url('./assets/main-character1.png')",
          },
        },
      },

      animation: {
        run: "run 0.3s forwards steps(9)",
      },
    },
  },
  plugins: [],
};
