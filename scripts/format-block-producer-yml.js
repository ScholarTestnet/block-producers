#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

glob.sync(path.join(__dirname, '..', 'block-producers', 'standby', '*.yml')).forEach(filepath => {
  const {dir, name, base} = path.parse(filepath)
  const config = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));
  let {website, logo, domain, http, p2p, telegram_user, keybase_user, block_signing_key, agent_name} = config;

  // New Configs
  const owner_public_key = config.owner_public_key || block_signing_key;
  const active_public_key = config.active_public_key || block_signing_key;
  const account_name = config.account_name || name.replace('-', '.');
  agent_name = agent_name || config.name || name || '';
  const timezone = config.timezone || '';
  logo = logo || '';

  fs.writeFileSync(filepath, `# EOS Scholar - Block Producer
# https://github.com/ScholarTestnet

# EOS Accounts (Required)
account_name: ${account_name}
owner_public_key: ${owner_public_key}
active_public_key: ${active_public_key}
initial_block_signing_key: ${block_signing_key}

# Primary Contact (Required)
telegram_user: ${telegram_user}
keybase_user: ${keybase_user}

# Server Config (Optional)
domain: ${domain}
http: ${http}
p2p: ${p2p}
agent_name: ${agent_name}

# Organization (Optional)
organization_name: ${name}
logo: ${logo}
timezone: ${timezone}
website: ${website}
`)
})
