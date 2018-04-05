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

### Generate `producer-list`

```
$ node scripts/generate-producer-list.js
[
  {
    "logo": "https://steemitimages.com/DQmUrhqujRL9kopgqfvcQ2fJpwqEQYqcndyCMs122CyMYGK/Bite_logo.jpg",
    "producer": "",
    "name": "BitEOS",
    "website": "http://bitcoineos.fun/",
    "telegram": "steemalf",
    "API_URL": "scholartnet.bitcoineos.fun",
    "HTTP": "7070",
    "P2P": "7080",
    "keybase": "aporeosoe"
  },
  {
    "logo": "",
    "producer": "",
    "name": "Coinstakes",
    "website": "https://coinstakes.io",
    "telegram": "timogilvie",
    "API_URL": "eos.coinstakes.io",
    "HTTP": "443",
    "P2P": "9876",
    "keybase": "timogilvie"
  },
  {
    "logo": "https://user-images.githubusercontent.com/550895/37839395-b78202ca-2e90-11e8-87b8-2ee5539e16ff.png",
    "producer": "",
    "name": "Crypto Lions",
    "website": "http://cryptolions.io",
    "telegram": "Bohdan",
    "API_URL": "scholartestnet.cryptolions.io",
    "HTTP": "8911",
    "P2P": "9900",
    "keybase": "cryptolions"
  },
  {
    "logo": "",
    "producer": "",
    "name": "EOS Brazil",
    "website": "https://eosbrazil.com",
    "telegram": "zaratustra418",
    "API_URL": "eosbrazil.com",
    "HTTP": "9875",
    "P2P": "8887",
    "keybase": "zaratustra"
  },
  {
    "logo": "",
    "producer": "",
    "name": "EOS Cafe Calgary",
    "website": "https://eos.cafe",
    "telegram": "n_doy",
    "API_URL": "eoscal.wxrepository.ca",
    "HTTP": "8888",
    "P2P": "9876",
    "keybase": "eoscalgary"
  },
  {
    "logo": "https://user-images.githubusercontent.com/550895/37975332-0f87ca08-31ad-11e8-83a0-9a000e47cc30.png",
    "producer": "",
    "name": "EOS Cannon",
    "website": "https://eoscannon.io",
    "telegram": "Luckybean",
    "API_URL": "testnet.eoscannon.io",
    "HTTP": "443",
    "P2P": "9999",
    "keybase": "luckybean"
  },
  {
    "logo": "",
    "producer": "",
    "name": "EOS Detroit",
    "website": "https://eosdetroit.com",
    "telegram": "robrigo",
    "API_URL": "scholar.eosdetroit.com",
    "HTTP": "8880",
    "P2P": "7777",
    "keybase": "robrigo"
  },
  {
    "logo": "",
    "producer": "",
    "name": "EOS Dublin",
    "website": "https://eosdublin.com",
    "telegram": "samnoble",
    "API_URL": "testnet.eosdublin.io",
    "HTTP": "443",
    "P2P": "9876",
    "keybase": "eosdublin"
  },
  {
    "logo": "",
    "producer": "",
    "name": "EOS Nairobi",
    "website": "http://eosnairobi.io",
    "telegram": "kiwi09",
    "API_URL": "testnet.eosnairobi.io",
    "HTTP": "8888",
    "P2P": "9876",
    "keybase": "peterokwara"
  },
  {
    "logo": "https://user-images.githubusercontent.com/550895/37734119-9f6ead4e-2d20-11e8-8d37-35e60ffb9c22.png",
    "producer": "",
    "name": "EOS Nation",
    "website": "https://eosnation.io",
    "telegram": "DenisCarriere",
    "API_URL": "testnet.eosnation.io",
    "HTTP": "443",
    "P2P": "9876",
    "keybase": "eosnation"
  },
  {
    "logo": "",
    "producer": "",
    "name": "EOS New York",
    "website": "http://eosnewyork.io",
    "telegram": "deckw",
    "API_URL": "scholar.eosnewyork.io",
    "HTTP": "8800",
    "P2P": "9874",
    "keybase": "rschlesinger"
  },
  {
    "logo": "http://www.eos.ren/unionlogo/eosunion.jpg",
    "producer": "",
    "name": "EOS Union",
    "website": "http://www.eos.ren",
    "telegram": "eosren",
    "API_URL": "testnet.eos.ren",
    "HTTP": "443",
    "P2P": "9876",
    "keybase": ""
  },
  {
    "logo": "",
    "producer": "",
    "name": "EOS42",
    "website": "https://eos42.io",
    "telegram": "ankh2054",
    "API_URL": "bp3-d3.eos42.io",
    "HTTP": "8888",
    "P2P": "9876",
    "keybase": "ankh2054"
  },
  {
    "logo": "https://static.wixstatic.com/media/4d53b1_c45bb985bedc464087e369a9e0d3118c~mv2.png/v1/fill/w_205,h_205,al_c,usm_0.66_1.00_0.01/4d53b1_c45bb985bedc464087e369a9e0d3118c~mv2.png",
    "producer": "",
    "name": "EOSoCal",
    "website": "https://eosocal.io",
    "telegram": "gmory",
    "API_URL": "testnet.eosocal.io",
    "HTTP": "443",
    "P2P": "9876",
    "keybase": "gmory"
  },
  {
    "logo": "https://meet.one/assets/MEET.png",
    "producer": "",
    "name": "MEET.ONE",
    "website": "https://meet.one/en",
    "telegram": "wuyahuang",
    "API_URL": "testnet.meet.one",
    "HTTP": "443",
    "P2P": "9876",
    "keybase": "meetone"
  }
]
```