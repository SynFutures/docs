---
id: tutorial_new_pair
title: Create new trading pairs
---

SynFutures is a decentralized derivatives platform that allows various digital assets pairs to be freely created and traded. This tutorial will show you how to create a fresh new futures market on SynFutures corresponding to the spot market in Uniswap V2 with our dapp deployed on [kovan testnet](https://kovan.synfutures.com).

SynFutures@v1 can use any on-chain asset as quote, but we decided to start with ETH, DAI, USDC and USDT. This should be enough for most scenarios given the current status of Uniswap V2. 

To facilitate test on kovan network, we deployed ERC20 tokens with symbols [USDC](https://kovan.etherscan.io/address/0x51D102A0203999110BC13B1ddf1c78566C02040A), [USDT](https://kovan.etherscan.io/address/0x2568d37520C08Ecc772f5feb9705e7b8Ca248535), and [DAI](https://kovan.etherscan.io/address/0x815343B0FcA4f9b49c89118E66b21fBFCA51b3Eb) to restore mainnet experience. To play with our app, you can apply some tokens at the [Account page](https://kovan.synfutures.com/#/account). Of course, you need to acquire some kovan eth from the [kovan testnet faucet](https://gitter.im/kovan-testnet/faucet) to pay for the gas.

Futures market on SynFutures@v1 can use Uniswap pair as the spot index oracle. Thus, before creating a futures market on SynFutures@v1, make sure there exists a proper spot exchange market on Uniswap V2. If there is not when you are issuing your own ERC20 assets, you need to create the pair on Uniswap V2 first. Don’t worry, we also present a detailed tutorial here using a fresh new ERC20 token [QQQ](https://kovan.etherscan.io/address/0xa63164DB023694A6726d37eeA6447dD4d13587ed) as Base.

## Create a new trading pair on UniswapV2
Take "QQQ" token and "DAI" token on kovan as an example, suppose we want to create QQQ/DAI pair on SynFutures. We need to go to [UniswapV2](https://app.uniswap.org/#/pool) to create this pair. Suppose 1 QQQ is worth 10 DAI, click the "Create a pair" button, and input 10000 QQQ along with 100000 DAI (token address is needed to select QQQ and DAI), then click "Supply" button. You will be promoted to Approve both QQQ and DAI if it’s the first time for your account to interact with UniswapV2 using these tokens. After all transactions are confirmed, we are done with UniswapV2 in this tutorial.

<img src="/docs/img/uniswapCreate1.png" width="48%" /><img src="/docs/img/uniswapCreate2.png" width="49.5%" />

## Create & init QQQ/DAI pair on SynFutures
With QQQ/DAI pair created on UniswapV2, SynFutures could now create the spot index price feeder for this pair, and we can go ahead to create a futures market for QQQ with regarding to DAI on [SynFutures](https://kovan.synfutures.com/#/trade). 

Click "more" for Uniswap V2 category in the "Base" drop-down list. After pasting the QQQ token address, "QQQ" token symbol will be displayed. 

![img](../static/img/trade1.png)

![img](../static/img/trade2.png)

Select “DAI" as quote token, and an expiry date for this pair as the Maturity on trade page, or alternatively, you could go to “Pool" Page and click the “+ Create Pool" button and QQQ/DAI pair maturing on your desired date, in our example 2021/04/30 will be created once the transaction is confirmed. 

![img](../static/img/trade3.png)

![img](../static/img/trade4.png)

After the transaction for creating pair is confirmed, click “Initialize Pool" button to add initial liquidity to the pair.

![img](../static/img/trade5.png)

At the initialize page, you can input the initial price of QQQ/DAI (the price of QQQ measured in DAI at the day of maturity in your mind), which should not deviate from the current spot index price too much, together with the number of DAI you would like to add. Leverage affects the positions added to the pool. Higher the leverage, bigger the positions. You can adjust the leverage bar to see the simulated state changes related to your account for the initialization.

![img](../static/img/trade6.png)

Since we are the only liquidity provider up until now, AMM holds the same number of LONG positions as our SHORT positions. All pairs we have added liquidity to are shown in the pool page, we can add more liquidity or remove liquidity with "+" "-" Buttons, respectively.

![img](../static/img/trade7.png)