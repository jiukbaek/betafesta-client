const path = require("path");

module.exports = {
  env: {
    mapId: process.env.MAP_ID,
    googleId: process.env.GOOGLE_ID,
  },
  images: {
    loader: "custom",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
