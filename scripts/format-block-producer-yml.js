#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

glob.sync(path.join(__dirname, '..', 'block-producers', '**', '*.yml')).forEach(filepath => {
  const {dir, name, base} = path.parse(filepath)
  const config = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));

  fs.writeFileSync(filepath, `# EOS Scholar - Block Producer
# https://github.com/ScholarTestnet

# Developer Account (Required)
account_name: ${config.account_name}
owner_public_key: ${config.owner_public_key}
active_public_key: ${config.active_public_key}

# Block Producer Account (Required)
producer_name: ${config.producer_name}
block_signing_key: ${config.block_signing_key}

# Primary Contact (Required)
telegram_user: ${config.telegram_user}

# Secondary Contact (Optional)
keybase_user: ${config.keybase_user || ''}

# Server Config (Optional)
domain: ${config.domain || ''}
http: ${config.http || ''}
p2p: ${config.p2p || ''}
agent_name: ${config.agent_name || ''}

# Organization (Optional)
organization_name: ${config.organization_name || ''}
logo_url: ${config.logo_url || ''}
timezone: ${config.timezone || ''}
website: ${config.website || ''}
`)
})
