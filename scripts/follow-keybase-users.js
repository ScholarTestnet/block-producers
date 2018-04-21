#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

process.stdout.write('# Follow Keybase Users \n\n')
glob.sync(path.join(__dirname, '..', '**', '*.yml')).forEach(filepath => {
  const {keybase_user} = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));
  if (keybase_user) process.stdout.write(`keybase follow -y ${keybase_user}\n`);
})
