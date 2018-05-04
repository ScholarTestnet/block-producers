#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

glob.sync(path.join(__dirname, '..', 'block-producers', '*.yml')).forEach(filepath => {
  const {eosio_https_host, eosio_https_port, organization_name, website} = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));
  const port = eosio_https_port === 443 ? '' : `:${eosio_https_port}`
  if (eosio_https_host) process.stdout.write(`- [${organization_name}](${website}) - [${eosio_https_host}](https://${eosio_https_host}${port}/v1/chain/get_info)\n`);
})
