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
  const domain = eosio_https_host
  const http = eosio_https_port
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
  // if (domain) {

  //   // query ip address
  //   dns.lookup(domain, function (err, result) {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }

  //     process.stderr.write(`generating ${organization_name}\n`);

  //     // query latlng from ipstack.com
  //     request('http://api.ipstack.com/' + result + '?access_key=2edfb3d626b2886fa93ce3b0d0684c89', function (error, response, body) {
  //       if (error) {
  //         console.log(error);
  //         return;
  //       }
  //       body = JSON.parse(body);
  //       if (response && response.statusCode === 200) {
  //         currentFileIndex++;
  //         producerList.push({
  //           // TODO, Include EOS Public Key for producers
  //           "logo": `${logo_url || defaultLogo}`,
  //           "producer": `${producer_name || ""}`,
  //           "organization_name": `${organization_name || ""}`,
  //           "website": `${website || ""}`,
  //           "telegram_user": `${telegram_user || ""}`,
  //           "API_URL": `${domain || ""}`,
  //           "HTTP": `${http || ""}`,
  //           "P2P": `${p2p || ""}`,
  //           "keybase": `${keybase || ""}`,
  //           "LngLat": [body.longitude, body.latitude]
  //         });
  //         process.stdout.write(JSON.stringify(producerList, null, 2) + '\n');

  //         // if (currentFileIndex === files.length) {
  //         // }
  //       }
  //     });
  //   })
//   })
// });