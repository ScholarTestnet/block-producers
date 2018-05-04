#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');
const meow = require('meow');
const cli = meow(`
	Usage
    $ ./generate-set-producers-cleos.js <path>

  Options
	  --limit    Limit the amont of Producers

	Examples
	  $ ./generate-set-producers-cleos.js ./block-producers/scholar-testnet
`);

async function main(globpath, options = {}) {
  // Load Configurations
  let BLOCK_PRODUCERS_CONFIG = glob.sync(globpath).map((filepath) => yaml.safeLoad(fs.readFileSync(filepath, 'utf8')))

  // Limit the amount of producers
  if (options.limit) {
    BLOCK_PRODUCERS_CONFIG = BLOCK_PRODUCERS_CONFIG.filter((config, index) => {
      return index < 3
    })
  }
  // Limit set producers to only online producers
  const ONLINE_BLOCK_PRODUCERS = []
  for (const config of BLOCK_PRODUCERS_CONFIG) {
    console.log(config)
  }

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
}

// Params
const folder = cli.input[0] || path.join(__dirname, '..', 'block-producers')
const limit = cli.flags.limit
const globpath =  path.join(folder, '*.yml')

// Main
main(globpath, {limit})