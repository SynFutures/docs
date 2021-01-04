---
id: futures
title: Futures
---

```solidity
// SPDX-License-Identifier: GPL
pragma solidity ^0.7.0; 
pragma experimental ABIEncoderV2; // to enable structure-type parameter

import "./IAmm.sol";
import "../library/LibTypes.sol";
import "./IGlobalConfig.sol";

interface IFutures {
    // Storage interface

    // return global config
    function config() external view returns (IGlobalConfig);
    // return Amm
    function ammProxy() external view returns (IAmm);
    // return margin token address
    function margin() external view returns (address);
    // return scaler for margin token decimal to 10^18
    function scaler() external view returns (int);
    // return insurance fund balance
    function insuranceFundBalance() external view returns (int);
    // return total open interests of one side
    function openInterests() external view returns (uint);
    // return account information of given trader
    function getAccount(address trader) external view returns (Types.Account memory);
    // check if an account exist in this futures contract
    function isUser(address trader) external view returns (bool);
    // return total number of accounts
    function totalAccounts() external view returns (uint);
    // social loss per contract given side
    function socialLossPerContract(Types.Side side) external view returns (int);

    // Vault interface

    event Deposit(address indexed trader, int wadAmount, int balance);
    event Withdraw(address indexed trader, int wadAmount, int balance);

    // Account

    event UpdateTraderAccount(address indexed trader, Types.Account account, uint price);
    event UpdateAmmAccount(Types.Account account, uint price, uint openInterests);
    event UpdateInsuranceFund(int newVal);
    event Transfer(address indexed from, address indexed to, int wadAmount, int balanceFrom, int balanceTo);
    event UpdateSocialLoss(Types.Side side, int newVal);

    // calculate liquidation size to reduce trader's position to meet margin requirement given mark price
    function calculateLiquidationSize(address trader, uint price) external view returns (Types.Side, uint);

    // Futures interface

    event Trade(address indexed trader, Types.Side side, uint price, uint size);
    event Liquidate(address indexed liquidator, address indexed trader, uint price);
    event NewAccount(address indexed trader, uint totalAccounts);

    // initialization function to help futuresProxy's construction, called only once
    function initialize(address _config, address _margin, uint _marginDecimals) external;
    // set ammProxy, called only once
    function setAmm(address _amm) external;

    // deposit to insurance fund, margin amount in 10^18
    function depositToInsuranceFund(uint wadAmount) external payable; // nonReentrant
    // withdraw from insurance fund, margin amount in 10^18
    function withdrawFromInsuranceFund(uint wadAmount) external; // onlyOwner nonReentrant

    // deposit margin into trader's own account, margin amount in 10^18
    function deposit(uint wadAmount) external returns (uint); // payable onlyNormalOrSettling nonReentrant
    // withdraw margin from trader's own account, margin amount in 10^18
    function withdraw(uint wadAmount) external; // onlyNormalOrSettling nonReentrant
    // settle trader's own position into margin and withdraw entire balance
    function settle() external; // onlySettled nonReentrant
    // return detailed account information given a trader's address
    function inspectAccount(address trader) external view returns (Types.AccountState memory state);

    // return if  (account balance + unrealized pnl) >= initial margin with the specified price
    function isIMSafeWithPrice(address trader, uint price) external view returns (bool);
    // return if (account balance + unrealized pnl) >=  (price * position * MMR) with the specified price
    function isMMSafeWithPrice(address trader, uint price) external view returns (bool);

    // check if an account is safe after trade (IM safe if opened > 0, and MM safe otherwise), also check AMM is safe
    function isSafeAfterTrade(
        address trader, uint opened, Types.Param memory param, uint price
    ) external view returns (bool);

    function ammXY() external view returns (Types.XY memory xy);

    // onlyAmm

    // handle liquidation loss caused by liquidationByAmm
    function handleLiquidationLossByAmm(address trader, Types.Side side) external;
    // transfer cash between two accounts
    function transferAccountBalance(address from, address to, uint amount) external;
    // deposit margin for account
    function depositFor(address trader, uint wadAmount) external payable returns (uint); // nonReentrant
    // place trade for both trader's and AMM's account
    function tradeFor(
        address trader, bool buy, uint initBlockPrice, uint price, uint size, bool normal, Types.Param memory param
    ) external returns (uint, uint);
    // place trade for both trader's and AMM's account & transfer margin between trader and AMM for add/remove liquidity
    function tradeWithMarginFor(
        address trader, Types.Side side, uint price, uint size, bool toAmm
    ) external returns (uint, uint, uint);
    // reward trader
    function rewardTrader(address trader) external;
    // settle AMM's position into margin in AMM's account, no withdraw
    function settleAmm(uint price) external;
    // liquidate an account given mark price
    function liquidateFor(
        address liquidator, address trader, uint markPrice, Types.Param memory param
    ) external returns (uint, int);
}

```