#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');
const snapshot = require('./generate-snapshot');

// Generate Create Account shell script
process.stdout.write(`#!/bin/bash

# EOS Scholar - Initial Transfer EOS Tokens
# https://github.com/ScholarTestnet

`)
snapshot.forEach(({account_name, supply}) => {
  process.stdout.write(`cleos transfer eosio ${account_name} ${Math.floor(supply * 10000)} "Initial transfer from eosio to ${account_name}"\n`);
})
