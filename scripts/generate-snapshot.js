#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

// Read configurations
const blockProducers = glob.sync(path.join(__dirname, '..', 'block-producers', 'scholar-testnet', '*.yml')).map((filepath) => yaml.safeLoad(fs.readFileSync(filepath, 'utf8')))
const developers = glob.sync(path.join(__dirname, '..', 'developers', '*.yml')).map((filepath) => yaml.safeLoad(fs.readFileSync(filepath, 'utf8')))

// Define supply per account
const total = 1000000000 - 1000 // remove 1000 to prevent overdrawn balance
const supply = (total / (blockProducers.length + developers.length)).toFixed(4)

// Load configs into snapshot
const snapshot = []
developers.forEach(config => snapshot.push(Object.assign(config, {supply})))
blockProducers.forEach(config => snapshot.push(Object.assign(config, {supply})))

// Print Snapshot to STDOUT
if (require.main === module) {
  snapshot.forEach(({owner_public_key}) => {
    process.stdout.write(`"","${owner_public_key}","${supply}"\n`);
  })
}

module.exports = snapshot
