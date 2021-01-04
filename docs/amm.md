---
id: amm
title: AMM
---

```solidity
// SPDX-License-Identifier: GPL
pragma solidity ^0.7.0; 
pragma experimental ABIEncoderV2; // to enable structure-type parameter

import "../library/LibTypes.sol";
import "./IFutures.sol";
import "./IGlobalConfig.sol";
import "./IOracle.sol";

interface IAmm {
    // LP share token ERC20 interface

    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);

    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function decimals() external view returns (uint8);
    function totalSupply() external view returns (uint);
    function balanceOf(address account) external view returns (uint);
    function transfer(address recipient, uint amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint);
    function approve(address spender, uint amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint amount) external returns (bool);
    function increaseAllowance(address spender, uint addedValue) external returns (bool);
    function decreaseAllowance(address spender, uint subtractedValue) external returns (bool);

    // IAmm interface

    event UpdateMarkPriceState(Types.MarkPriceState markPriceState);
    event EnterEmergencyStatus(uint price);
    event EnterSettlingStatus(uint blockTime);
    event EnterSettledStatus(uint price);

    // initialization function to help ammProxy's construction, called only once
    function initialize (
        string memory _shareTokenName, address _config, address _futuresProxy, address _oracle, uint256 _alignedExpiry
    ) external;

    // return global config
    function config() external view returns (IGlobalConfig);
    // return futures
    function futuresProxy() external view returns (IFutures);
    // return expiry timestamp
    function expiry() external view returns (uint);
    // return oracle
    function oracle() external view returns (IOracle);
    // return mark price state from last update
    function markPriceState() external view returns (Types.MarkPriceState memory);
    // return current AMM status
    function status() external view returns (Types.Status);
    // return settlement price
    function settlementPrice() external view returns (uint);

    // begin emergency status
    function beginEmergency(uint price) external; // onlyOwner
    // end emergency status
    function endEmergency() external; // onlyOwner

    // return the latest index price from oracle
    function indexPrice() external view returns (uint price);
    // return AMM account information
    function tradingAccount() external view returns (Types.Account memory);

    // return the latest mark price state using onchain data
    function currentMarkPriceState() external view returns (Types.MarkPriceState memory);
    // return the latest mark price using onchain data
    function currentMarkPrice() external view returns (uint);
    // return mark price from previous update
    function lastMarkPrice() external view returns (uint);

    // return buy price based on trade size
    function getBuyPrice(uint size) external view returns (uint) ;
    // return sell price based on trade size
    function getSellPrice(uint size) external view returns (uint);

    // update AMM state, including status and mark price state
    function update() external; // onlyNormalOrSettling
    // trade with AMM given direction, size in base asset, limit price and deadline
    function trade(bool buy, uint size, uint limitPrice, uint deadline) external returns (bool); // onlyNormalOrSettling

    // deposit margin and initialize the pool given the margin token amount in 10^18,
    // initial price, leverage for hedging position for LP and deadline
    function depositAndInitPool(
        uint wadAmount, uint initPrice, uint leverage, uint deadline
    ) external payable returns (uint);
    // deposit margin and add liquidity to pool given the margin token amount in 10^18,
    // leverage for hedging position for LP and deadline
    function depositAndAddLiquidity(
        uint wadAmount, uint leverage, uint deadline
    ) external payable returns (bool, uint); // onlyNormalOrSettling
    // add liquidity to pool using existing margin from LP's account given margin token amount in 10^18 and deadline
    function addLiquidity(uint wadAmount, uint deadline) external returns (bool, uint); // onlyNormal
    // remove liquidity from pool to margin and transfer LP's account
    function removeLiquidity(uint shareAmount, uint deadline) external returns (bool, uint); // onlyNormalOrSettling
    // settle LP's pool share to margin and transfer to LP's account
    function settleShare() external; // onlySettled

    // fully liquidate account by taking over position and provide additional margin
    function liquidate(address trader, uint deadline) external; // onlyNormalOrSettling
    // partially liquidate account by force the account to trade with AMM to reduce position
    function liquidateByAmm(address trader, uint deadline) external returns (uint); // onlyNormalOrSettling
}

```