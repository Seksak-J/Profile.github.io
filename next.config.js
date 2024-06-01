// next.config.js
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  assetPrefix: isProd ? "/<Profile>/" : "",
  basePath: isProd ? "/<Profile>" : "",
};
module.exports = nextConfig;
// export default module.exports;
