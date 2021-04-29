---
id: hash_rate_futures_general
title: Hash Rate Futures
---

### 26. What is SynFutures' BTC Hash Rate（BTCHASH）Futures? Is it a cloud mining token?
BTC Hash Rate Futures contract represents the expected block mining reward in BTC for a difficulty resetting period (roughly 14 days, for simplicity, we would refer to one period as 14 days hereafter) per PH/s hash rate at a given difficulty level. In contrast to a cloud mining token, it is purely on-chain based futures for trading BTC mining difficulty and no physical mining activity is performed.

### 27. What does 1 long position of BTCHASH represent? What is being "longed"?
Long position of BTCHASH means longing the block mining reward in BTC, while shorting the mining difficulty, as the block mining reward is negatively proportional to the mining difficulty. Long 1 BTCHASH at a certain maturity date means long the block mining reward for 1 PH/s hash rate for the next difficulty resetting period (2016 blocks, roughly 14 days) following the maturity date.

### 28. When would a trader gain profit or suffer from loss? How are the Profit and Loss (“PnL”) settled?
- Traders profit from a long position in BTCHASH when difficulty goes ***lower than the difficulty level at entry***, leads to a higher mining reward. Alternatively if it goes higher, traders who long BTCHASH would suffer a loss.
- The contract is margined in BTC stable coins, the PnL would be settled with WBTC on Ethereum or BTCB on Binance Smart Chain.
- Here is a brief summary table of contract PnL.

||Long BTCHASH (Short Difficulty)|Short BTCHASH (Long Difficulty)|
|:---:|:---:|:---:|
|If Settle Difficulty > Entry Difficulty|Loss|Gain|
|If Settle Difficulty < Entry Difficulty|Gain|Loss|
|Settlement in|BTC stable coin|BTC stable coin|
|Recommended for|Traders, Arbitrager|Miner, Trader, Arbitrager|

### 29. What are the use cases for Hash Rate Futures?
Some examples are:
- **Hedging**: Miners, who has purchased mining machies/cloud mining power/mining tokens, to lock in mining returns by shorting Hash Rate Futures (longing mining difficulty).
- **Arbitrage**: When the cost of mining is lower than the price of Hash Rate Futures, an arbitrager could buy mining power from cloud mining platform and short Hash Rate Futures to profit from the difference.
- **Speculation**: If the difficulty implied by futures price is lower or higher than traders view, they can trade the Hash Rate Futures with leverage for profit.

#
***For simplicity, below three examples ignore the transaction fees and edge cases where mining could be interrupted due to accidents.***
### 30. Bob is a miner who wants to lock in return and hedge against change in mining difficulty. How can he use the Hash Rate Futures?
Assuming 
- miner Bob has purchased 1 PH/s of mining machine/cloud mining power/mining tokens, and he wish to lock in the mining reward for 1 May 2021 to 14 May 2021.
- Hash Rate Futures maturing on 1 May 2021 (Block height 681408) is trading at futures price of `P = 0.0823 BTC`, the implied difficulty is at `21.3876T`). 
- Bob short sell 1 contract of Hash Rate Futures maturing on 1 May 2021

Let's fast forward to 1 May and block height 681408 and assuming 
- The actual difficulty resets to `D` and the total mining reward for the 14 day period based on `D` is `R`, i.e. Bob would get `R` by mining Bitcon for the next 14 days.
- Total PnL for Bob on his short position is `-(R-P)`.
- Total reward for Bob is fixed at `R -(R-P) = P`

That means, Bob has locked in his mining reward at P with his position in Hash Rate Futures, regardless of the actual mining difficulty after reset.

### 31. Bob wants to arbitrage between mining power and Hash Rate Futures. How can he do it?
Assuming
- Hash Rate Futures contract maturing on 1 May 2021 is trading at `P1 = 0.0823 BTC` and contract maturing on 14 May 2021 is trading at `P2 = 0.0812 BTC`
- Cloud mining power of 1 PH/s for 1 to 28 May 2021 including electricity is selling at `R = 0.1605 BTC`

Bob should
- Buy 1 PH/s of cloud mining power along with the electricity plan
- Sell short Hash Rate Futures 1 contract maturing on 1 May 2021 and 1 contract maturing on 14 May 2021

Similar to calculation from previous example, Bob would receive total of `P1 + P2 = 0.1635 BTC` and the cost of the cloud mining plan was `R = 0.1605 BTC`. Thus the net profit for Bob is `0.003 BTC`.

### 32. Bob has a strong view on the direction of the future mining difficulty changes. How can he trade on it?
Assuming Hash Rate Futures maturing on 7 Aug 2021 (Block height 695520) is trading at `P = 0.0701 BTC`, implying the mining difficulty at `D = 25.1T`. Bob has a view that the hash rate and difficulty should not increase this fast and the mining reward should be higher than what the contract is trading at. Thus, Bob enters a long position of the Hash Rate Futures contact maturing on 7 Aug 2021 (with leverage). 
When the contract matures, Bob would profit if the actual mining difficulty is lower than `25.1T`, i.e. the settlement price of the contract is higher than `0.0701 BTC`.

### 33. Historically Bitcoin mining difficulty has a trend going up. Would everyone short the futures contract to long difficulty? When should someone long the futures to short difficulty?
Like all other futures instrument, the futures price already reflects market expectation of the price in the future and not the spot price. For example, if the mining difficulty is at 23T currently, the futures contract maturing at the next resetting day could be trading at 23.2T, reflecting a increase from the current difficulty level. If a trader think the difficulty would go higher than 23.2T, they can long the future difficulty by short the Hash Rate Futures. On the contrary, if another trader think the difficulty will not reach 23.2T for this difficulty reset, they can short the future difficulty by long the Hash Rate Futures

### 34. How do I hedge against changes in mining difficulty for a period longer than 14 days?
The SynFutures Hash Rate Futures are designed to be forward looking and each contract represents the mining reward of the 14 days (2016 blocks to be exact) after the maturity. For example, contract maturing on 1 May 2021 (block height 681408) represents the mining reward from block 681409 to 683423 while contract maturing on 15 May 2021 (block height 683424) represents the mining reward from block 683424 to 685439.
If you own some mining power and wish to hedge against mining difficulty changes in a period longer than 14 days, you would need to trade multiple futures that covers the entire period. For example, to hedge from 1 to 28 May 2021, you need to trade both contracts maturing on 1 May 2021 and 15 May 2021.
Individual Hash Rate Futures contracts are designed to be basic hedging units that could build a long futures curve the mining difficulty. In SynFutures@v2, we will introduce cross margin for higher margin efficiency to trade cross tenor contracts.

### 35. Why can I only choose certain dates or block height on the App as maturity?
The Hash Rate Futures is designed for traders to hedge against the change in mining difficulty and thus the expiry is limited to the difficulty resetting blocks, i.e. 2016x block heights.

### 36. As difficulty resetting time is uncertain, why can I see a calendar date as a maturity date, corresponding to the difficulty resetting date on the app?
Maturity date for Hash Rate Futures can only be estimated, as the exact time for a future block to be mined cannot be determined now. The maturity date displayed on our dApp is estimated based on 10 minutes per block for all blocks between current block height and expiry block.

### 37. Why is there a spot difficulty index in the design? Isn't BTC mining difficulty a fixed value and being updated every two weeks?
BTC mining difficulty only resets at blocks of multiple of 2016 and stays constant for blocks in between. However, for derivative products to have a meaningful spot index, a continuous and (near) real time spot index is preferred. Thus, we use a moving window of past 2016 blocks to calculate a block weighted difficulty to be used as the spot difficulty index. Note that this block weighted difficulty converges to actual difficulty at resetting blocks.

### 38. How often does spot difficulty index get updated?
The Bitcoin mining difficulty index oracle is updated by uploading Bitcoin block headers and thus in theory it could be updated after every block is mined. However, as the estimated spot index is quite stable, the update frequency is currently scheduled to be updated at least every 12 blocks or 2 hours for cost efficiency considerations.

### 39. What is mark price used for?
Similar to our asset futures, Hash Rate Futures uses mark price to mark to market all traders' positions, and thus to determine whether a trader’s position should be liquidated.

### 40. What is the exact definition of the underlying for one BTCHASH futures contract?
With 1 PH/s of hash rate, the mining reward is calculated as 

$\text{MiningReward} = \frac{\text{BlockReward} \times 14 \times 86400 \times 10^{15} \times \text{Target}}{2^{256}}$.

The formula can be simplified to 

$\text{MiningReward} = \frac{\text{BlockReward} \times 14 \times 86400 \times 10^{15}} {\text{Difficulty} \times 2^{32}}$ 

as 

$\text{Target} = \frac{\text{0x00000000ffff << 208} }{\text{Difficulty}} \approx \frac{2^{224}}{ \text{Difficulty}}$.

Note that the Hash Rate Futures contract uses the exact formula to calculate the reward from Target. Also, BTCHASH only include the block reward, 6.25 BTC per block at the moment, but not the transaction fees in each block. Electricity and other operational cost are also omitted.

### 41. Is the mining difficulty oracle for BTCHASH centralized? Can it be manipulated by the SynFutures Team?
To support the Hash Rate Futures, SynFutures team has developed a completely trustless onchain oracle for Bitcoin mining difficulty. The oracle only depends on the Bitcoin block headers for all the computation and anyone can submit latest block headers to the smart contract. The oracle contract has implemented the Nakamoto consensus and only accept block headers that pass the validation.