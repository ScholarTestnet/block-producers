#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

// Load Configurations
const BLOCK_PRODUCERS_CONFIG = glob.sync(path.join(__dirname, '..', 'block-producers', '*.yml')).map((filepath) => yaml.safeLoad(fs.readFileSync(filepath, 'utf8')))
const DEVELOPERS_CONFIG = glob.sync(path.join(__dirname, '..', 'developers', '*.yml')).map((filepath) => yaml.safeLoad(fs.readFileSync(filepath, 'utf8')))

// Generate Create Account shell script
process.stdout.write(`#!/bin/bash

# EOS Scholar - Create Accounts Scripts
# https://github.com/ScholarTestnet

`)
DEVELOPERS_CONFIG.forEach(({account_name, owner_public_key, active_public_key}) => {
  process.stdout.write(`cleos create account eosio ${account_name} ${owner_public_key} ${active_public_key}\n`);
})
BLOCK_PRODUCERS_CONFIG.forEach(({account_name, owner_public_key, active_public_key}) => {
  process.stdout.write(`cleos create account eosio ${account_name} ${owner_public_key} ${active_public_key}\n`);
})
