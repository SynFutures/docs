---
id: overview
title: Overview
---


Each "futures contract" is identified by a unique tuple of base token, quote token and maturity timestamp. And similar to Uniswap, all futures contracts are created by the main `factory` contract.

More specifically, each "futures contract" is implemented using 2 seperate smart contracts: `amm` and `futures`.


![img](../static/img/synfutures-v1-architecture.png)