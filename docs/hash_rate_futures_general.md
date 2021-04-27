---
id: hash_rate_futures_general
title: Hash Rate Futures
---

### 26. What is SynFutures' BTC hash rate（BTCHASH）futures? Is it a cloud mining token?

BTC hash rate futures contract represents the expected block mining reward in BTC for a difficulty resetting period (roughly 14 days, for simplicity, we would refer to one period as 14 days hereafter) per PH/s hash rate at a given difficulty level. In contrast to a cloud mining token, it is purely on-chain based futures for trading BTC mining difficulty and no physical mining activity is performed.

### 27. What does 1 long position of BTCHASH represent? What is being "longed"?

Long position of BTCHASH means longing the block mining reward in BTC, while shorting the mining difficulty, as the block mining reward is negatively proportional to the mining difficulty. Long 1 BTCHASH at a certain maturity date means long the block mining reward for 1 PH/s hash rate for the next difficulty resetting period (2016 blocks, roughly 14 days) following the maturity date.

### 28. What are the use cases for Hash Rate Futures?

Some examples are:
- **Hedging**: Miners, who has purchased mining machies/cloud mining power/cloud mining tokens, to lock in mining returns by shorting Hash Rate Futures (longing mining difficulty).
- **Arbitrage**: When the cost of mining is lower than the price of Hash Rate Futures, an arbitrager could buy mining power from cloud mining platform and short Hash Rate Futures to profit from the difference.
- **Speculation**: If the difficulty implied by futures price is lower or higher than traders view, they can trade the Hash Rate Futures with leverage for profit.

### 29. Historically Bitcoin mining difficulty has a trend going up. Would everyone short the futures contract to long difficulty? When should someone long the futures to short difficulty?

Like all other futures instrument, the futures price already reflects market expectation of the price in the future and not the spot price. For example, if the mining difficulty is at 23T currently, the futures contract maturing at the next resetting day could be trading at 23.2T, reflecting a increase from the current difficulty level. If a trader think the difficulty would go higher than 23.2T, they can long the future difficulty by short the Hash Rate Futures. On the contrary, if another trader think the difficulty will not reach 23.2T for this difficulty reset, they can short the future difficulty by long the Hash Rate Futures

### 30. When would a trader gain profit or suffer from loss? How are the Profit and Loss (“PnL”) settled?

- Traders profit from a long position in BTCHASH when difficulty goes lower than the difficulty level at entry, leads to a higher mining reward. Alternatively if it goes higher, traders who long BTCHASH would suffer a loss.
- The contract is margined in BTC stable coins, the PnL would be settled with WBTC on Ethereum or BTCB on Binance Smart Chain.
- Here is a brief summary table of contract PnL.

||Long BTCHASH (Short Difficulty)|Short BTCHASH (Long Difficulty)|
|:---:|:---:|:---:|
|If Settle Difficulty > Entry Difficulty|Loss|Gain|
|If Settle Difficulty < Entry Difficulty|Gain|Loss|
|Settlement in|BTC stable coin|BTC stable coin|
|Recommended for|Traders, Arbitrager|Miner, Trader, Arbitrager|