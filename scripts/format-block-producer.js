#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');
const url = require('url')
const {refactorSocial} = require('./refactor');

glob.sync(path.join(__dirname, '..', 'block-producers', '*.yml')).forEach(filepath => {
  const {dir, name, base} = path.parse(filepath)
  const config = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));

  refactorSocial(config)

  fs.writeFileSync(filepath, `# EOS Scholar - Block Producer
# https://github.com/ScholarTestnet

testnet: true  # REQUIRED, one or the other, not both.
# mainnet: true
# Marking mainnet=true means we automatically disabling all the TESTNET features in the boot_sequence

# Block Producer Account (Required)
# The account you go by on the network
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
        actor: ${config.eosio_initial_authority.recovery.accounts[0].permission.actor || 'eosio'}
        permission: active
      weight: 1

# Server Config (Optional)
eosio_http: ${config.eosio_http ? config.eosio_http.replace(':80', '') : ''}
eosio_https: ${config.eosio_https ? config.eosio_https.replace(':443', '') : ''}
eosio_p2p: ${config.eosio_p2p ? config.eosio_p2p.replace('http://', '') : ''}

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

# Potentially used for cryptographic operations. Please provide this one if using eos-bios
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

# The following one is used by the BIOS Boot node to hook up initial
# Appointed Block Producers keys (and potentially other participants in the launch)
eosio_appointed_block_producer_signing_key: ${config.eosio_appointed_block_producer_signing_key || config.eosio_initial_authority.owner.keys[0].public_key}

# This section is required for an 'eos-bios' launch.
launch_data:
  # --- WHEN ---
  # The Ethereum block is the seed data we're waiting to launch the
  # 'orchestrate' step.  When you start 'eos-bios orchestrate', it
  # first fetches the Ethereum block's hash, and uses it for
  # randomly selected the BIOS Boot node.
  launch_ethereum_block: 5544732  # Past block, for testing
  #launch_ethereum_block: 5716358  # Approx June 2st 2018, 0100 UTC, 2 hours after snapshot freeze

  # --- WITH WHO ---
  #
  # Other BPs' discovery_link, with whom you're comfortable launching
  # the network with, you've discussed and think they are competent to
  # 1) not screw up a launch and, 2) run the network and take good
  # decisions.
  #
  # By tagging along peers, we are effectively creating a
  # distributed graph. 'eos-bios' will be able to traverse this graph
  # and create a full portrait of the community, with all information
  # necessary to automate the steps of network boot.
  peers: []
  # peers:
  # - discovery_link: /ipns/Qm...
  #   comment: "EOS Antarctica's Igloo testnet"
  #   weight: 1.0  # from 0.0 to 1.0, floating point number
  # - discovery_link: /ipns/QmEOSLAUTRE..........................
  #   weight: 0.8
  # - discovery_link: /ipns/Qm................................
  #   weight: 0.2
  # - discovery_link: /ipns/Qm................................
  #   comment: "He just learned what 'ls' was.. but he'll ramp up fast, I'm sure"
  #   weight: 0.0  # Link him on the network, but not vouching for them.

  # --- WHAT ---

  # Takes into consideration the snapshot, msig, token, system and bios contracts.
  boot_sequence: /ipfs/QmYRsQNxAZFvx8djAxKsgurJT1RF47MhAEQ2sLz1MunnXH

  # This one skips the step to set the appointd block producers,
  #leaving 'eosio' to produce all the time.  This is great for local
  #development.
  #boot_sequence: /ipfs/QmVoz3u3N6hYTktit2npTMdXkzWey5gknY9MWoeNB8tSrj

  # Built by Robert on that infrastructure, in this context, etc...
  snapshot: /ipfs/QmY4iHQYoqUZ6e1iqFGqYYLzYWiYjy3zFLoMhG9PvSsrSD

  # snapshot_unregistered:

  contracts:
    eosio.bios:
      # From github.com/eosio/eos, built from git commit abcdef1234 on Jan 21st 2020, by EOS Antarctica
      abi: /ipfs/QmbZATGSuN1rwfX4WMHaVHCroZgKwHZjvvEQg93HtcpSk4
      code: /ipfs/QmVNzTLXSegBdpDxUMrKMVpFBbwnpu2j45iRrFkBtxuQby

    eosio.system:
      abi: /ipfs/QmPxEwukXL4tsMiqKtGozLUDzrc6ckwcVjgf68YQyGD5Fu
      code: /ipfs/QmQaMSL54PDxQZZFmXK2TXcV7oHCBocCZ6i4D98CNDSBd8

    eosio.msig:
      abi: /ipfs/Qmdbo2jFGLH1mBGYTiktpEmizwK4ZVSxjtfh9o38AAQquw
      code: /ipfs/QmbXo3nTe3obzQdKYqj9pe5Abf1Er5pqtFL2DsVSQKyF4p

    eosio.token:
      abi: /ipfs/QmZpmcrfWAEUU4KG6hRPrBRTJ2X63sTrQsBRogiKZA7aP6
      code: /ipfs/QmTe5K1eR8Vbmz4mxEJSGyus9PrHymjL9hX31x1B5pchJT

    # eosio.unregd:
    #   abi: /ipfs/Qm...
    #   code: /ipfs/Qm...
`)
})

