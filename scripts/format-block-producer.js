#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');
const url = require('url')
const {refactorSocial} = require('./refactor');

glob.sync(path.join(__dirname, '..', 'block-producers', '**', '*.yml')).forEach(filepath => {
  const {dir, name, base} = path.parse(filepath)
  const config = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));

  refactorSocial(config)

  fs.writeFileSync(filepath, `# EOS Scholar - Block Producer
# https://github.com/ScholarTestnet

# Block Producer Account (Required)
eosio_account_name: ${config.eosio_account_name}

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

# Server Config (Optional)
eosio_http_host: ${config.eosio_http_host || ''}
eosio_http_port: ${config.eosio_http_port || ''}
eosio_https_host: ${config.eosio_https_host || config.domain || ''}
eosio_https_port: ${config.eosio_https_port || config.http || ''}
eosio_p2p_host: ${config.eosio_p2p_host || config.domain || ''}
eosio_p2p_port: ${config.eosio_p2p_port || config.p2p || ''}

# Encryption (Optional)
pgp_public_key: ${config.pgp_public_key || ''}

# Social (Optional)
social_twitter: ${config.social_twitter || ''}
social_telegram: ${config.social_telegram || ''}
social_facebook: ${config.social_facebook || ''}
social_github: ${config.social_github || ''}
social_youtube: ${config.social_youtube || ''}
social_keybase: ${config.social_keybase || ''}

# Geographic Location (Optional)
latitude: ${config.latitude || '' }
longitude: ${config.longitude || '' }

# Organization (Optional)
organization_name: ${config.organization_name || ''}
logo_url: ${config.logo_url || ''}
timezone: ${config.timezone || ''}
website: ${config.website || ''}
introduction_post_url: ${config.introduction_post_url || ''}
organization_tagline: ${config.organization_tagline || ''}

# Email (Optional)
email_support: ${config.email_support || ''}
email_abuse: ${config.email_abuse || ''}
email_tech: ${config.email_tech || ''}

# EOS BIOS (Optional)
# https://github.com/eoscanada/network-discovery/blob/master/sample-mainnet.yaml
`)
})

