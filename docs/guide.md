---
id: overview
title: Overview
---


Each "future contract" is identified by a unique tuple of base token, quote token and maturity timestamp. And similar to Uniswap, all future contracts are created by the main `factory` contract.

More specifically, each "future contract" is implemented using 2 seperate smart contracts: `amm` and `futures`.


![img](../static/img/synfutures-v1-architecture.png)