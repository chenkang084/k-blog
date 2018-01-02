let config;
switch (env) {
  case "development":
    config = require("./config.local.js").config;
    break;
  case "prod":
    config = require("./config.prod.js").config;
    break;
  default:
    config = require("./config.local.js").config;
}

export default config;
