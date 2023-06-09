const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@root": path.resolve(__dirname, "src/"),
      "@core": path.resolve(__dirname, "src/core/"),
      "@modules": path.resolve(__dirname, "src/modules/"),
      "@store": path.resolve(__dirname, "src/store/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@mock": path.resolve(__dirname, "src/mock/"),
      "@Home": path.resolve(__dirname, "src/modules/Home/"),
      "@StoreManager": path.resolve(__dirname, "src/modules/StoreManager/"),
      "@AdminManager": path.resolve(__dirname, "src/modules/AdminManager/"),
    },
  },
};
