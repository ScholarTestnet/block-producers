#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

// Customize
const folder = process.argv[2] ? process.argv[2] : 'scholar-testnet'

// Load Configurations
let BLOCK_PRODUCERS_CONFIG = glob.sync(path.join(__dirname, '..', 'block-producers', folder, '*.yml')).map((filepath) => yaml.safeLoad(fs.readFileSync(filepath, 'utf8')))

// Limit Producers to 21
BLOCK_PRODUCERS_CONFIG = BLOCK_PRODUCERS_CONFIG.filter((config, index) => index < 21)

// Define Set Producer JSON config
const setprods = {
  "version": "12345",
  "producers": BLOCK_PRODUCERS_CONFIG.map(({eosio_account_name, eosio_initial_authority}) => {
    const producer_name = eosio_account_name
    const block_signing_key = eosio_initial_authority.owner.keys[0].public_key
    return {producer_name, block_signing_key}
  })
}
process.stdout.write(JSON.stringify(setprods, null, 2) + '\n')