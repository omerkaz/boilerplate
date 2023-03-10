const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@Components": path.resolve(__dirname, "src/components"),
      "@src": path.resolve(__dirname, "src"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@api": path.resolve(__dirname, "src/api"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@types": path.resolve(__dirname, "src/types"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@store": path.resolve(__dirname, "src/store"),
    },
  },
};
