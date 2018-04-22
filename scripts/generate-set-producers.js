#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

// Load Configurations
let BLOCK_PRODUCERS_CONFIG = glob.sync(path.join(__dirname, '..', 'block-producers', 'scholar-testnet', '*.yml')).map((filepath) => yaml.safeLoad(fs.readFileSync(filepath, 'utf8')))

// Limit Producers to 21
BLOCK_PRODUCERS_CONFIG = BLOCK_PRODUCERS_CONFIG.filter((config, index) => index < 21)

// Define Set Producer JSON config
const setprods = {
  "version": "12345",
  "producers": BLOCK_PRODUCERS_CONFIG.map(({producer_name, block_signing_key}) => {
    return {producer_name, block_signing_key}
  })
}
process.stdout.write(JSON.stringify(setprods, null, 2) + '\n')