#!/bin/bash

# EOS Scholar - Unlock eosio wallet
# https://github.com/ScholarTestnet

set WALLET_PASSWORD = ""
set EOSIO_PRIVATE_KEY = ""

cleos wallet create -n eosio
cleos wallet unlock -n eosio --password WALLET_PASSWORD
cleos wallet import -n eosio EOSIO_PRIVATE_KEY
