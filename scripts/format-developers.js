#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

glob.sync(path.join(__dirname, '..', 'developers', '*.yml')).forEach(filepath => {
  const {dir, name, base} = path.parse(filepath)
  const config = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));

  fs.writeFileSync(filepath, `# EOS Scholar - Developers
# https://github.com/ScholarTestnet

# EOS Accounts (Required)
account_name: ${config.account_name}
owner_public_key: ${config.owner_public_key}
active_public_key: ${config.active_public_key}

# Primary Contact (Optional)
telegram_user: ${config.telegram_user}
keybase_user: ${config.keybase_user}

# Organization (Optional)
organization_name: ${config.organization_name || ''}
logo_url: ${config.logo || ''}
timezone: ${config.timezone || ''}
website: ${config.website || ''}
`)
})
