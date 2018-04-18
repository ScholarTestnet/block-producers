#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');
const dns = require('dns');
const request = require('request');

const producerList = [];
// const producerNames = require('./producer-names');

let currentFileIndex = 0;

glob.sync(path.join(__dirname, '..', 'block-producers', '*.yml')).forEach((filepath, index, files) => {
  const config = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));
  const {organization_name, website, producer_name, logo_url, domain, http, p2p, telegram_user, keybase} = config;

  const defaultLogo = "https://user-images.githubusercontent.com/550895/37975477-6e1b53dc-31ad-11e8-9367-3415c3bf29b9.png";

  if (domain) {

    // query ip address
    dns.lookup(domain, function (err, result) {
      if (err) {
        console.log(err);
        return;
      }

      console.log('generating ' + organization_name);

      // query latlng from ipstack.com
      request('http://api.ipstack.com/' + result + '?access_key=2edfb3d626b2886fa93ce3b0d0684c89', function (error, response, body) {
        if (error) {
          console.log(error);
          return;
        }
        body = JSON.parse(body);
        if (response && response.statusCode === 200) {
          currentFileIndex++;
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
            "LngLat": [body.longitude, body.latitude]
          });

          if (currentFileIndex === files.length) {
            process.stdout.write(JSON.stringify(producerList, null, 2) + '\n');
          }
        }
      });

    })
  }
});