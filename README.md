# Block Producers

[![Build Status](https://travis-ci.org/ScholarTestnet/scholar-block-producers.svg?branch=master)](https://travis-ci.org/ScholarTestnet/scholar-block-producers)

List of Block Producers for Scholar Testnet

## Requirements

### Accounts:

- [Keybase](https://keybase.io) (must have a generated public key)
- [Telegram](https://telegram.org) (must be a single username, not a group)

## Server Configurations:

- Domain name associated with server (ex: `testnet.<domain>.io` )
- SSL enabled (443 prefered, however other ports can be used)

## Metadata:

- Organization/Community name
- Website
- Logo (small logo, 100x100 pixel)

## Sign up

There are two ways to sign up:

### Google Form

- [Submit your server credentials HERE](https://docs.google.com/forms/d/e/1FAIpQLSdf4IzilRu1S7KTeQ8E2sycxcS1sOb9egkoKl7bkXqq-UU5rw/viewform).

### GitHub

- Submit a GitHub Pull Request to this repo.

## Communities/Organizations

- [BitcoinEOS](block-producers/bitcoin-eos.yml)
- [Coinstakes](block-producers/coinstakes.yml)
- [Crypto Lions](block-producers/crypto-lions.yml)
- [EOS Brazil](block-producers/eos-brazil.yml)
- [EOS.Cafe Calgary](block-producers/eos-cafe-calgary.yml)
- [EOS Cannon](block-producers/eos-cannon.yml)
- [EOS Detroit](block-producers/eos-detroit.yml)
- [EOS Dublin](block-producers/eos-dublin.yml)
- [EOS Nairobi](block-producers/eos-nairobi.yml)
- [EOS Nation](block-producers/eos-nation.yml)
- [EOS New York](block-producers/eos-new-york.yml)
- ~[EOS Nottingham](block-producers/eos-nottingham.yml)~
  - missing domain name
  - missing keybase account
- ~[EOS Union](block-producers/eos-union.yml)~
  - missing keybase account
  - missing domain name
  - missing personal telegram account (must not be group account)
- [EOS42](block-producers/eos42.yml)
- [EOSoCal](block-producers/eosocal.yml)
- [Meet.one](block-producers/meet-one.yml)

## Scripts

### List `p2p-peer-address`

```
$ node ./scripts/list-p2p-peer-address.js
p2p-peer-address = scholartnet.bitcoineos.fun:7080
p2p-peer-address = eos.coinstakes.io:9876
p2p-peer-address = scholartestnet.cryptolions.io:9900
p2p-peer-address = eosbrazil.com:8887
p2p-peer-address = eoscal.wxrepository.ca:9876
p2p-peer-address = testnet.eoscannon.io:9999
p2p-peer-address = scholar.eosdetroit.com:7777
p2p-peer-address = testnet.eosdublin.io:9876
p2p-peer-address = testnet.eosnairobi.io:9876
p2p-peer-address = testnet.eosnation.io:9876
p2p-peer-address = scholar.eosnewyork.io:9874
p2p-peer-address = bp3-d3.eos42.io:9876
p2p-peer-address = testnet.eosocal.io:9876
p2p-peer-address = testnet.meet.one:9876
```