#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');
const {refactorSocial} = require('./refactor');

glob.sync(path.join(__dirname, '..', 'developers', '*.yml')).forEach(filepath => {
  const {dir, name, base} = path.parse(filepath)
  const config = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));

  refactorSocial(config)

  fs.writeFileSync(filepath, `# EOS Scholar - Developers
# https://github.com/ScholarTestnet

# Block Producer Account (Required)
eosio_account_name: ${config.eosio_account_name || config.account_name}

# Authority (Required)
eosio_initial_authority:
  owner:
    threshold: 1
    keys:
    - public_key: ${config.eosio_initial_authority.owner.keys[0].public_key}
      weight: 1
  active:
    threshold: 1
    keys:
    - public_key: ${config.eosio_initial_authority.active.keys[0].public_key}
      weight: 1
  recovery:
    threshold: 1
    accounts:
    - permission:
        actor: ${config.eosio_initial_authority.recovery ? config.eosio_initial_authority.recovery.accounts[0].permission.actor : 'eosio'}
        permission: active
      weight: 1

# Encryption (Optional)
pgp_public_key: ${config.pgp_public_key || ''}

# Social (Optional)
social_twitter: ${config.social_twitter || ''}
social_telegram: ${config.social_telegram || ''}
social_facebook: ${config.social_facebook || ''}
social_github: ${config.social_github || ''}
social_youtube: ${config.social_youtube || ''}
social_slack: ${config.social_slack || ''}
social_wechat: ${config.social_wechat || ''}
social_steem: ${config.social_steem || ''}
`)
})
