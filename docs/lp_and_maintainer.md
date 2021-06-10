---
id: lp_and_maintainer
title: For Liquidator and System Maintainer
slug: /lp_and_maintainer
---


### 21. How do I become a liquidator?


In SynFutures@v1, if an account is no longer safe according to the current mark price (i.e. AccountBalance + UnrealizedPnL < Position \* MarkPrice \* MaintenanceMarginRatio), any user of the current futures contract can initiate a liquidation operation for the account. SynFutures@v1 supports two types of liquidate operations: 

- Traditional DeFi approach: The liquidator takes over all position of the liquidated account at the current mark price. Note that in this case the liquidator should ensure it has sufficient balance in the account to meet the position’s maintenance margin requirement. After all position of the liquidated account are closed, a penalty (deducted from the current account balance) is paid to the insurance fund according to the total value of the liquidation.

- Automated Liquidator approach: To lower the liquidity requirement, liquidation initiators could utilize `liquidatebyAmm()` method  to use the liquidity in AMM's account, and force the accounts that need to be liquidated to trade with AMM with the same price logic as the trade function. Note that if the position that needs to be liquidated causes excessive price fluctuations in AMM after being traded to AMM, the liquidation process will fail. 


It is worth mentioning that since AMM has always maintained liquidity in the system, partial liquidation becomes feasible under this operation: the account will be liquidated to a safe state that meets the initial margin requirement. 


### 22. What would happen if the system becomes insolvent, i.e., balance of the account becomes negative due to liquidation?


When the balance of the account becomes negative resulting from liquidation, the insurance fund of the futures contract will be firstly used to reward the liquidator, and cover the shortfall.


### 23. What could liquidator benefit from initiating liquidations ?


If the amount of the deficit exceeds the insurance fund balance, the excess loss will accumulate in the socialized loss in the opposite direction, and the loss will be shared in proportion to the positions held by all holders of the that side at this time. 


With traditional DeFi approach, liquidators supply liquidity, take over traders’ whole positions, and could be rewarded with the rest of the traders’ margin token after deduction of penalty. In the case where the traders’ margin is insufficient, the system’s insurance fund and social loss mechanism would firstly ensure payout of a minimum reward (as defined by `bankruptcyLiquidatorRewardRatio` parameter) to the liquidator.  


### 24. How to determine who could be the liquidator if there are multiple liquidators targeting the same account?


It is on a "first come first served” basis. In practice, whoever initiates trade with sufficient gas fee and be the first to successfully completed the liquidation transaction would be the final liquidator of an insolvent position.  