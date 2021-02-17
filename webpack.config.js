const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    path: path.resolve(__dirname, `public`),
    filename: `bundle.js`
  },
  devServer: {
    contentBase: path.resolve(__dirname, `public`),
    port: 1337
  },
  devtool: `source-map`,
};
