#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');
const dns = require('dns');
const request = require('request');

// Customize
const folder = process.argv[2] ? process.argv[2] : 'scholar-testnet'

const producerList = [];
let currentFileIndex = 0;

glob.sync(path.join(__dirname, '..', 'block-producers', folder, '*.yml')).forEach((filepath, index, files) => {
  const config = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));

  let {organization_name, longitude, latitude, website, eosio_account_name, logo_url, eosio_https_host, eosio_https_port, eosio_p2p_port, social_telegram, social_keybase} = config;

  // Rename to Discovery schema
  const producer_name = eosio_account_name
  const domain = eosio_https_host || config.eosio_http_host
  const http = eosio_https_port || config.eosio_http_port
  const p2p = eosio_p2p_port
  const telegram_user = social_telegram
  const keybase = social_keybase

  // Default lat & lng
  longitude = longitude || 0.0
  latitude = latitude || 0.0

  // Defaults
  const defaultLogo = "https://user-images.githubusercontent.com/550895/37975477-6e1b53dc-31ad-11e8-9367-3415c3bf29b9.png";
  producerList.push({
    // TODO, Include EOS Public Key for producers
    "logo": `${logo_url || defaultLogo}`,
    "producer": `${producer_name || ""}`,
    "organization_name": `${organization_name || ""}`,
    "website": `${website || ""}`,
    "telegram_user": `${telegram_user || ""}`,
    "API_URL": `${domain || ""}`,
    "HTTP": `${http || ""}`,
    "P2P": `${p2p || ""}`,
    "keybase": `${keybase || ""}`,
    "LngLat": [longitude, latitude]
  })
});

process.stdout.write(JSON.stringify(producerList, null, 2) + '\n');
