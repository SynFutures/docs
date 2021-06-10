---
id: traders
title: For Traders
slug: /traders
---


### 8. How to add/withdraw margin?

You could go to "Trade” page and select the contract you have traded,  or "Pool” page to view the list of existing trades and perform "Deposit” or "Withdraw” function under "Margin Operations”. 

Note that when you "withdraw” margin, your PnL would be calculated based on current MarkPrice and the excess would become available for withdrawal. And your original trade’s entry price would be reset to the current Mark Price. 


### 9. How to open/close a position?


When open a new position, a trader should transfer the margin token (Quote asset) to its account to ensure its margin is sufficient, that is `(AccountBalance + UnrealizedPnL) >= Position * MarkPrice * InitialMarginRatio`.

With the available margin, a trader could go to "Trade” page to input the trading pairs, click on "Buy/Long” or "Sell/Short” button to create a trade.  

To close a trade, just follow the reverse procedure – go to "Trade” page , select the contract you have traded, execute opposite position of existing trades, and margin plus your PnL would be released to your account. Alternatively, you could go to "Pool” page to view the list of trades you have and close the position. 

Note that trader can only trade with a pair that have existing market makers, that is, the pair should have been created and provided liquidity by LP. 


### 10. What is the fee charged when trading? 

SynFutures charges a fixed % of trading fee([check key parameters](/docs/docs/parameters)) for all trades based on the transaction amount, to be split into two parts, one is system reserve fees (for trade state update and liquidation initiator, etc.) and the rest would be paid out to transaction pool for LPs.  


### 11. What is my futures contract’s expiration time?


For SynFutures@v1, when launched, the expiration time of all futures contracts will be aligned to 8 am UTC time on every Friday of the week where the expiration time specified by the user is located. The restriction on the mandatory expiration time alignment will be relaxed at an appropriate time and the expiration time of all futures contracts will be aligned to the user-specified expiration date at 8 am UTC time, subject to the development of the market and could be varied by different trading pairs with different trading volumes and requirements. 

### 12. Why was my futures contract not expiring exactly at the preset expiration time on settlement day?  

Forcing a futures contract to enter SETTLING or SETTLED state may lead to the actual expiration time of the futures contract later than that specified time when the contract was created. This is because the status update of the smart contract itself can only be triggered by a transaction. To cope with this problem, SynFutures@v1 introduces an additional reward mechanism in order to encourage users to update the state of futures contracts by initiating transactions. Check out [What other system reward I might potentially earn?](/docs/docs/lp_and_maintainer#25-what-other-system-reward-i-might-potentially-earn？) for details.


### 13. How to determine whether a trader's position should be liquidated?

When (AccountBalance + UnrealizedPnl) < Position \* MarkPrice \* MaintenanceMarginRatio, the account is no longer safe and can be liquidated.


### 14. What happen if my position doesn't have sufficient margin?


When your account becomes insolvent, liquidators would come and initiate liquidation process. 

If the liquidator uses traditional DeFi approach, your full position would be taken over so you will lose all of your position and margin token. 

If the liquidator uses Auto Liquidator approach, your position will be partially liquidated to a safe state that meets the initial margin requirement. 

For details of the different liquidation approaches, check out [How do I become a liquidator?](/docs/docs/lp_and_maintainer#21-how-do-i-become-a-liquidator) for details.


### 15. Why did my transaction fail?

A transaction might be failed due to insufficient gas fee, exceeding pricing slippage you specified or breaching the limitation SynFutures imposed to protect users etc., check advanced topics: [How do you protect users from large price movement? or what are the restrictions imposed by SynFutures?](/docs/docs/advanced#44-how-do-you-protect-users-from-large-price-movement-what-are-the-restrictions-imposed-by-synfutures) for more details.  For a failed transaction, you could click on "View on Etherscan " for more details. 
