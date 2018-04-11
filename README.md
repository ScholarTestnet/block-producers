# Block Producers

[![Build Status](https://travis-ci.org/ScholarTestnet/scholar-block-producers.svg?branch=master)](https://travis-ci.org/ScholarTestnet/scholar-block-producers)

List of Block Producers for Scholar Testnet

## Requirements

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

## Sign up

1. Submit a Pull Request to `block-producers` with your server credentials.
2. TravisCI tests must pass (fail = missing required server configuration)

## Block Producers (Communities/Organizations)

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

## Block Producers (Standby)

- [EOS Brazil](block-producers/eos-brazil.yml)
- ~[Crypto Lions](block-producers/crypto-lions.yml)~
  - missing public key for Keybase account
  - missing EOS public key
- ~[EOS Nottingham](block-producers/eos-nottingham.yml)~
  - missing domain name
  - missing keybase account
  - missing EOS public key
- ~[EOS Canada](block-producers/eos-canada.yml)~
  - missing domain name
  - missing p2p port
  - missing http port
- ~[EOS Fans](block-producers/eos-fans.yml)~
  - missing Keybase account
  - missing EOS public key

## Scripts

### List `p2p-peer-address`

```
$ node ./scripts/list-p2p-peer-address.js
```

### Generate `producer-list`

```
$ node scripts/generate-producer-list.js
```
