const { resolve } = require("path");

module.exports = {
  plugins: [
    {
      plugin: require("craco-plugin-scoped-css"),
    },
  ],
  webpack: {
    alias: {
      "@assets": resolve(__dirname, "src/assets/"),
      "@components": resolve(__dirname, "src/components"),
      "@data": resolve(__dirname, "src/data"),
      "@features": resolve(__dirname, "src/features"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@interfaces": resolve(__dirname, "src/interfaces"),
      "@layouts": resolve(__dirname, "src/layouts"),
      "@lib": resolve(__dirname, "src/lib"),
      "@pages": resolve(__dirname, "src/pages/"),
      "@services": resolve(__dirname, "src/services"),
      "@store": resolve(__dirname, "src/store"),
      "@styles": resolve(__dirname, "src/styles/"),
      "@utils": resolve(__dirname, "src/utils"),
    },
  },
};
