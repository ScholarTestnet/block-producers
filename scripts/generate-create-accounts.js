#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

const folder = process.argv[2] ? process.argv[2] : 'scholar-testnet'

// Load Configurations
const BLOCK_PRODUCERS_CONFIG = glob.sync(path.join(__dirname, '..', 'block-producers', folder, '*.yml')).map((filepath) => yaml.safeLoad(fs.readFileSync(filepath, 'utf8')))
const DEVELOPERS_CONFIG = glob.sync(path.join(__dirname, '..', 'developers', folder, '*.yml')).map((filepath) => yaml.safeLoad(fs.readFileSync(filepath, 'utf8')))

// Create eosio.token account
const token_public_key = 'EOS6UcpST5Ms3vzpGcKJydmyjhTwA5AKsEhzaC8kEpYGFTkYukoyX'

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

process.stdout.write(`cleos create account eosio eosio.token ${token_public_key} ${token_public_key}\n`)