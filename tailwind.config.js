module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ["./dist/index.html", "./dist/src/scripts/main.js"],
  },
  theme: {
    extend: {
      colors: {
        space: {
          100: "#c9ccea",
          200: "#9299d6",
          300: "#5c66c1",
          400: "#3a4398",
          500: "#252b62",
          600: "#20234F",
          700: "#181B3D",
          800: "#11132B",
          900: "#0A0B19",
        },
        dark: "#1f1e1e",
        dark: {
          default: "#2c2c2c",
          lighter: "#404040",
          darker: "#1f1e1e",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
