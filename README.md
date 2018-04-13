# Scholar Accounts

[![Build Status](https://travis-ci.org/ScholarTestnet/scholar-accounts.svg?branch=master)](https://travis-ci.org/ScholarTestnet/scholar-accounts)

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
- telegram_user
- keybase

During the provisioning process (testnet BIOS Boot) accounts will be created for each developer and a certain amount of EOS tokens will transfered to those accounts to allow the developers to properly test their DApps.

> Note: These EOS tokens in these developer accounts are generated from a "fake" EOS snapshot, during the EOS maintnet, you will need to purchase your own EOS tokens to deploy your DApps.

# For Block Producers

1. Submit a Pull Request to `block-producers` with your server credentials.
2. TravisCI tests must pass (fail = missing required server configuration)

### Accounts:

- [Keybase](https://keybase.io) (must have a generated public key)
- [telegram_user](https://telegram_user.org) (must be a single username, not a group)

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
