const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

let producerList = [];

glob.sync(path.join(__dirname, '..', 'block-producers', '*.yml')).forEach(filepath => {
  const config = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));
  const {name, website, logo, domain, http, p2p, telegram, keybase} = config;

  if (domain) {
    producerList.push({
      "logo": `${logo || ""}`,
      "producer": "", // TODO, maybe producer name should be hard code to the *.yml? not sure.
      "name": `${name || ""}`,
      "website": `${website || ""}`,
      "telegram": `${telegram || ""}`,
      "API_URL": `${domain || ""}`,
      "HTTP": `${http || ""}`,
      "P2P": `${p2p || ""}`,
      "keybase": `${keybase || ""}`
    });
  }
});

console.log(JSON.stringify(producerList, null, 2));