#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');
const dns = require('dns');
const request = require('request');

// Iterate over each BP config
glob.sync(path.join(__dirname, '..', 'block-producers', '*.yml')).forEach((filepath, index, files) => {
  let rawConfig = fs.readFileSync(filepath, 'utf8');
  const config = yaml.safeLoad(rawConfig);

  // Extract fields
  const {organization_name, longitude, latitude, eosio_https_host, eosio_https_port, eosio_http_host, eosio_http_port} = config;

  // Add Lat & Lng to BP's
  if (longitude === null || longitude === undefined || latitude === undefined || latitude === null) {
    const domain = eosio_https_host || eosio_http_host;
    if (!domain) return

    // query ip address
    dns.lookup(domain, function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      request(`http://api.ipstack.com/${result}?access_key=2edfb3d626b2886fa93ce3b0d0684c89`, {json: true}, (error, response, body) => {
        if (!body) return
        const { longitude, latitude } = body
        if (longitude === null) return
        console.log(organization_name, longitude, latitude)
        rawConfig = rawConfig.replace(/latitude: /, `latitude: ${latitude}`)
        rawConfig = rawConfig.replace(/longitude: /, `longitude: ${longitude}`)
        fs.writeFileSync(filepath, rawConfig)
      })
    })
  }
})
