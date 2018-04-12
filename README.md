# Scholar Accounts

[![Build Status](https://travis-ci.org/ScholarTestnet/scholar-block-producers.svg?branch=master)](https://travis-ci.org/ScholarTestnet/scholar-block-producers)

List of Developers & Block Producers for Scholar Testnet.

During each new launch of Scholar Testnet, new accounts will be generated for both Developers & Block Producers. Due to privacy concerns, a "fake" EOS snapshot will be generated for each account that is aimed to be deployed on the Scholar Testnet.

# For Developpers

For those developers interested in joining the Scholar Testnet to test their latest DApps.

Add your developer credentials in the [scholar-accounts repo](https://github.com/ScholarTestnet/scholar-accounts) under `/developers/<YOUR NAME>.yml` via Github pull request, your YAML config should include the following:

**Required fields:**
- account_name
- owner_public_key
- active_public_key

**Optional fields:**
- telegram
- keybase

Accounts will be created for each developer and a certain amount of EOS tokens will transfered to those accounts to allow the developers to properly test their DApps.

> Note: These EOS tokens in these developer accounts are generated from a "fake" EOS snapshot, during the EOS maintnet, you will need to purchase your own EOS tokens to deploy your DApps.

# For Block Producers

1. Submit a Pull Request to `block-producers` with your server credentials.
2. TravisCI tests must pass (fail = missing required server configuration)

### Accounts:

- [Keybase](https://keybase.io) (must have a generated public key)
- [Telegram](https://telegram.org) (must be a single username, not a group)

## Block Signing Key

EOS Public key used for creating blocks, if none is provided before the launch of the Testnet. An EOS key pair will be generated for you and sent via your Keybase account.

```
$ cleos create key
Private key: <EOS PRIVATE KEY>
Public key: EOS78uKLgYYSgQHXyJbbjDzXpibChtcYGKmooz8AmyiDhTiaC1Syz
```

## Server Configurations:

- Domain name associated with server (ex: `testnet.<domain>.io` )
- SSL enabled (443 prefered, however other ports can be used)

## Metadata:

- Organization/Community name
- Website
- Agent Name
- Logo (small logo, 100x100 pixel)

## Communities/Organizations/Block Producer Candidates

- [BitcoinEOS](block-producers/bitcoin-eos.yml)
- [Coinstakes](block-producers/coinstakes.yml)
- [EOS.Cafe Calgary](block-producers/eos-cafe-calgary.yml)
- [EOS Cannon](block-producers/eos-cannon.yml)
- [EOS Detroit](block-producers/eos-detroit.yml)
- [EOS Dublin](block-producers/eos-dublin.yml)
- [EOS Nairobi](block-producers/eos-nairobi.yml)
- [EOS Nation](block-producers/eos-nation.yml)
- [EOS New York](block-producers/eos-new-york.yml)
- [EOS42](block-producers/eos42.yml)
- [EOSoCal](block-producers/eosocal.yml)
- [Meet.one](block-producers/meet-one.yml)
- [EOS Union](block-producers/eos-union.yml)
- [BitSpace](block-producers/bitspace.yml)
- [EOS WTZ](block-producers/eos-wtz.yml)
- [EOS Sydney](block-producers/eos-sydney.yml)
- [DAC GAC](block-producers/dac-gac.yml)

## Scripts

### List `p2p-peer-address`

```
$ node ./scripts/list-p2p-peer-address.js
```

### Generate `producer-list`

```
$ node scripts/generate-producer-list.js
```
