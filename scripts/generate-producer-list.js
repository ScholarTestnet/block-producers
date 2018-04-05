#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

const producerList = [];
const producerNames = require('./producer-names');

glob.sync(path.join(__dirname, '..', 'block-producers', '*.yml')).forEach((filepath, index) => {
  const config = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));
  const {name, website, logo, domain, http, p2p, telegram, keybase} = config;

  if (domain) {
    producerList.push({
      // TODO, Include EOS Public Key for producers
      "logo": `${logo || ""}`,
      // TODO, maybe producer name should be hard code to the *.yml? not sure.
      // TODO, Randomize producer names
      "producer": producerNames[index],
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

process.stdout.write(JSON.stringify(producerList, null, 2) + '\n');