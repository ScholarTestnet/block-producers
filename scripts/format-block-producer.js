#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');
const url = require('url')

glob.sync(path.join(__dirname, '..', 'block-producers', '**', '*.yml')).forEach(filepath => {
  const {dir, name, base} = path.parse(filepath)
  const config = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));

  refactorSocial(config)

  fs.writeFileSync(filepath, `# EOS Scholar - Block Producer
# https://github.com/ScholarTestnet

# Block Producer Account (Required)
eosio_account_name: ${config.eosio_account_name || config.account_name}

# Authority (Required)
eosio_initial_authority:
  owner:
    threshold: 1
    keys:
    - public_key: ${config.owner_public_key || config.eosio_initial_authority.owner.keys[0].public_key}
      weight: 1
  active:
    threshold: 1
    keys:
    - public_key: ${config.active_public_key || config.eosio_initial_authority.active.keys[0].public_key}
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

/**
 * Refactor Social media accounts to Fully qualified domains
 *
 * @param {*} config Config
 */
function refactorSocial(config) {
  // Twitter
  if (config.social_twitter && !url.parse(config.social_twitter).protocol) {
    config.social_twitter = `https://twitter.com/${config.social_twitter}`
  }
  // Telegram
  if (config.social_telegram && !url.parse(config.social_telegram).protocol) {
    config.social_telegram = `https://t.me/${config.social_telegram}`
  }
  // Facebook
  if (config.social_facebook && !url.parse(config.social_facebook).protocol) {
    config.social_facebook = `https://facebook.com/${config.social_facebook}`
  }
  // GitHub
  if (config.social_github && !url.parse(config.social_github).protocol) {
    config.social_github = `https://facebook.com/${config.social_github}`
  }
  // YouTube
  if (config.social_youtube && !url.parse(config.social_youtube).protocol) {
    config.social_youtube = `https://www.youtube.com/channel/${config.social_youtube}`
  }
  // Keybase
  if (config.social_keybase && !url.parse(config.social_keybase).protocol) {
    config.social_keybase = `https://keybase.io/${config.social_keybase}`
  }
}