#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

glob.sync(path.join(__dirname, '..', 'block-producers', 'scholar-testnet', '*.yml')).forEach(filepath => {
  const config = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));
  const {p2p, domain} = config;
  const {name} = path.parse(filepath)
  if (p2p && domain) process.stdout.write(`p2p-peer-address = ${domain}:${p2p}\n`)
})
