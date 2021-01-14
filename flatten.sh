#!/usr/bin/env bash

# Flats Contracts
mkdir -p flats
rm -rf flats/*
./node_modules/.bin/truffle-flattener contracts/PancakeRouter01.sol > flats/PancakeRouter01.sol

