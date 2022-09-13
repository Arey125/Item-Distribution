const path = require("path");
const { distPath, srcPath, rootPath } = require("./path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  context: process.cwd(),
  entry: {
    main: path.resolve(srcPath, "index.tsx"),
  },
  output: {
    path: distPath,
    filename: "[name].js",
    publicPath: "/",
    assetModuleFilename: "static/images/[name][ext]",
  },
  resolve: {
    alias: {
      app: path.join(srcPath, "app"),
      processes: path.join(srcPath, "processes"),
      pages: path.join(srcPath, "pages"),
      widgets: path.join(srcPath, "widgets"),
      features: path.join(srcPath, "features"),
      entities: path.join(srcPath, "entities"),
      shared: path.join(srcPath, "shared"),
    },
    extensions: [".tsx", ".ts", ".js"],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: "@svgr/webpack",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(rootPath, ".env"),
      allowEmptyValues: false,
    }),
  ],
};
