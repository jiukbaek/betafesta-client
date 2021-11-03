const path = require("path");

module.exports = {
  env: {
    mapId: process.env.MAP_ID,
    apiHost: process.env.API_HOST,
  },
  images: {
    loader: "custom",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
