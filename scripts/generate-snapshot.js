#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

// Load Configurations
const BLOCK_PRODUCERS_CONFIG = glob.sync(path.join(__dirname, '..', 'block-producers', '*.yml')).map((filepath) => yaml.safeLoad(fs.readFileSync(filepath, 'utf8')))
const DEVELOPERS_CONFIG = glob.sync(path.join(__dirname, '..', 'developers', '*.yml')).map((filepath) => yaml.safeLoad(fs.readFileSync(filepath, 'utf8')))

// Define Supply
const EOS_TOTAL_SUPPLY = 1000000000
const TOTAL_BLOCK_PRODUCERS = BLOCK_PRODUCERS_CONFIG.length
const TOTAL_DEVELOPERS = DEVELOPERS_CONFIG.length
const BLOCK_PRODUCERS_TOTAL_SUPPLY = EOS_TOTAL_SUPPLY * 0.8999
const DEVELOPERS_TOTAL_SUPPLY = EOS_TOTAL_SUPPLY * 0.1
const BLOCK_PRODUCER_SUPPLY = (BLOCK_PRODUCERS_TOTAL_SUPPLY / TOTAL_BLOCK_PRODUCERS).toFixed(4)
const DEVELOPER_SUPPLY = (DEVELOPERS_TOTAL_SUPPLY / TOTAL_DEVELOPERS).toFixed(4)

// Generate Snapshot
DEVELOPERS_CONFIG.forEach(({owner_public_key}) => {
  process.stdout.write(`"","${owner_public_key}","${DEVELOPER_SUPPLY}"\n`);
})
BLOCK_PRODUCERS_CONFIG.forEach(({owner_public_key}) => {
  process.stdout.write(`"","${owner_public_key}","${BLOCK_PRODUCER_SUPPLY}"\n`);
})
