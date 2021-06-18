---
id: lp
title: For Liquidity Providers
slug: /lp
---


### 16. How does SynFutures' sAMM model work if I would like to add/remove liquidity?

To add liquidity, LP transfers the Quote asset token only to the sAMM, among which half is used as Quote asset, and the other half to synthesize the position of the Base asset, that is, to create a 1x LONG position of the Base asset for this futures contract. LP would then receive the respective LP tokens. 

Since LP originally held Quote assets only and did not have any exposure to the price risk of Base assets, sAMM will at the same time allocate a SHORT position of the same size as the newly created LONG position to the same user to hedge this risk. 

Removing liquidity from the sAMM follows a similar process where the sAMM would reduce its LONG position and allocate the reduced LONG position to the user requesting to remove liquidity and return the margin token to the user. Similarly, the action of removing liquidity from the sAMM does not change the total risk of the liquidity provider. 

### 17. How could I add liquidity to a trading pair?

To provide liquidity, a LP interacts with the smart contracts via "Add Liquidity” button on "Pool” page from its account balance or "Add liquidity from Margin” button on "Account” Page from its available margin. Note that if the LP is adding liquidity from its existing trade’s available margin,  its PnL would be calculated based on current Mark Price and the excess would become available for withdrawal. And the original trade’s Entry price would be reset to the current Mark Price. 

LP could only add liquidity to an existing pool, otherwise, it could firstly go to "Pool” page and click on "Create Pool” to create and initialize a new trading pair. 


### 18. What does "Adjust your leverage ratio" mean and what position size would I get when adding $x$ amount of liquidity? 

As mentioned earlier, when adding liquidity, half of the tokens is used as Quote, and the other half to synthesize sAMM's LONG position. In order to hedge sAMM's LONG position, LP will passively be assigned the same amount of short position after providing liquidity.  

Thus, when adding liquidity, an LP automatically also becomes a trader with a SHORT position. To ensure the safety of the LP account’s SHORT position, the LP should at the same time have margin available in its account to at least meet the initial margin requirement of the synthetic position. The leverage ratio parameter is used to specify the leverage of the SHORT hedge position.   

To simplify the process, SynFutures Dapp combines the process into one click, so when you add $x$ amount of Quote asset, the amount would be divided into three parts:   

(1) $y$ position size would be supplied as the Quote assets  

(2) $y$ position size would be synthesized into the Base assets  

(3) The rest would become the margin of your short position, which could be calculated as $y \times \frac{\text{InitialPrice}}{\text{LeverageRatio}}$.

The relationship between each parameter and size is: 

$x = 2 \times y \times \text{\small{InitialPrice}} + y \times \frac{\text{InitialPrice}}{\text{LeverageRatio}},$

or,  $y = x / \left(2 \times \text{\small{InitialPrice}} + \frac{\text{InitialPrice}}{\text{LeverageRatio}} \right).$


### 19. What is the reward I can get by supplying liquidity? 

You could receive trading fees according to your share of the liquidity pool. 

### 20. What is the market risk associated with providing liquidity and being an LP? 
1. At the start, the action of adding liquidity to the sAMM does not change the total risk profile of the liquidity provider, as the newly created LONG and SHORT positions exactly offset each other.  

2. After adding liquidity to sAMM, the liquidity provider has also become a trader due to the SHORT hedging position, and needs to maintain sufficient margin in the account to meet the margin requirement or might face the risk of its short hedging position being liquidated.  

3. With sufficient margin, that is, with Account Balance + Unrealized Pnl > Position * MarkPrice * Maintenance Margin (MMR) for the SHORT hedge position, the risk of being an AMM is similar to other protocol such as Uniswap adopting Constant Product Formula pricing model with possible Impermeant Loss, with the amount of loss the same as supplying to Uniswap should everything else equal. Check advanced topics: [What is the potential impermanent loss I might have as an LP?](/docs/docs/advanced#45-what-is-the-potential-impermanent-loss-i-might-have-as-an-lp-could-you-walk-me-through-an-example) 
