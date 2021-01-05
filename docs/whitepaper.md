---
id: whitepaper
title: White Paper
---

## Abstract

This paper introduces an open and decentralized derivatives platform
that allows a variety of assets, including Ethereum native, cross-chain
and off-chain real world assets to be synthesized and freely traded. In
the first version of the contract, SynFutures will launch a digital
asset futures market to introduce (1) futures contract of arbitrary
assets and expiration dates to be created by liquidity providers (2)
Synthetic Automated Market Maker (sAMM), for market participants to
provide one single digital asset of a trading pair only and the smart
contract to synthesize the other (3) Automated Liquidator (ALQ), which
reduces the entry barrier of liquidators and helps automate the
liquidation process.\
**Keywords**: Derivatives Market, Synthetic Automated Market Maker,
Automated Liquidator

Introduction
============

Decentralized finance has enjoyed its summer in 2020. More importantly,
it has proved the feasibility of building open financial services based
on blockchain and transcending their centralized institutional peers in
terms of transaction volume and pricing offerings. When SynFutures
launches, the latest frenzy of liquidity mining has slowly faded, but
the decentralized finance movement just starts.

When picturing the next generation decentralized financial platform, two
basic principles have always been kept in mind: (1) It must reflect the
fundamental advantages of blockchain over traditional financial systems
(2) It must serve customer demand well and have a good market potential.

Advantages of Blockchain in Finance
-----------------------------------

Performance and scalability has increasingly become the bottlenecks of
Ethereum, and will be difficult in the foreseeable future for blockchain
to catch up with centralized systems – Democracy normally lags behind
centralized power in terms of decision making and execution efficiency.
To build a financial system based on blockchain, what to be exerted
should be its competitive advantages, whose implications in finance are
elaborated as below:

First of all, friendly regulation - in the short-term though.
Consultation papers of digital asset regulations in various
jurisdictions have clearly indicated that it is the case simply because
today’s digital asset market is relatively small in scale, not yet
impacting the overall financial stability. With the popularization of
digital assets, regulations will only become stricter.

Secondly, the smart open finance path chosen. It is a “choice” because
open and programmable finance can also be found in traditional
centralized financial institutions. Most of them set up service barriers
deliberately to protect their vested interest only, and hindered by the
legacy system that could also be replaced. However, it does offer the
emerging blockchain financial industry the possibility of overtaking
their giant traditional peers .

Lastly, blockchain’s fundamental advantage, or its “trustless” property.
In fact, many nowadays monopoly financial services can be broken down
into (a) manual intervention, (b) automated operation plus (c) liquidity
provision. The trustless nature of the blockchain would allow various
services originally combined in one role to be split up and partially
handed over to smart contracts for implementation. As a manifestation,
Automated Market Maker (AMM) projects built by teams of 2-5 developers
have recently earned the trust of billion-dollar worth of locked assets
, whose “receipt”, or LP token issuance, asset custody and settlement
are performed by the transparent smart contracts. In addition, the
though-not-perfect models greatly reduce the entry barriers of market
making, assuring liquidity providers that their profit and loss will be
handled by the set of codes instead of being arbitrarily determined by
centralized parties, and thus enable a more effective usage of idle
liquidity across the entire network.

Derivatives Market Landscape
----------------------------

In traditional finance, the market size of derivatives has long
outstripped that of spot. According to Bank for International
Settlements, in 2019, FX spot transactions accounted for 30.13% of the
total trading volume, Futures (including forwards and swaps)
transactions accounted for 65.36%, and Options 4.51%. Futures market
size amounted to 217% of the spot market.

In the centralized digital currency trading world, as the market
matures, derivatives trading volume has also been enjoying exponential
growth. According to CryptoCompare, spot trading volume of
cryptocurrencies in 2019 was US\$13 trillion, and derivatives accounted
for nearly 23% of the spot market at US\$3 trillion. After only half a
year of development, the percentage has increased to about 37% by June
2020. However, the derivative products of centralized exchanges today
generally face the criticism and skepticism of users, especially for its
“blackbox” of liquidation operations.

Turning to decentralized digital exchanges, however, the derivatives
market is negligible compared to the spot with very few service
providers. Coupled with its openness and transparency, we see huge
market potential ahead.

Vision and Principles
---------------------

SynFutures aims to build a next-generation digital asset derivative
trading and clearing platform, adhering to the following product design
principles:

1.  It should be an open and free market, offering market participants
    the power to add and trade any assets on the platform. The market,
    instead of the platform operator, will decide who are the winning
    assets. Of course, as the guidance for investor protection becomes
    clearer, we will work to further improve the fair market rules
    together with the community.

2.  It should maximize the variety of tradable assets on the blockchain,
    from Ethereum native, cross-chain digital assets, to the real-world
    assets.

3.  It should reflect the fundamental advantage of blockchain, i.e.
    trustlessness, to realize financial inclusiveness. The
    “inclusiveness” in this project focuses not on the users, but on the
    other role of a platform, i.e. financial service providers. We will
    strive to gain the confidence of the network’s idle liquidity by
    solid smart and open smart contracts, and continue to improve our
    models to lower the entry barrier of the originally
    professional-only financial service providers, including market
    makers, liquidators etc.. By further decomposing these roles into
    basic modules and opening up the automated and liquidity provision
    related parts, more people can participate in the financial system ,
    enjoy the return of their liquidity, while at the same time maximize
    the utilization of resources across the network and reduce systemic
    risks.

Architecture
============

The first version of the contracts starts with a Futures market,
introducing (1) Arbitrary asset and expiration date as determined by
liquidity providers, (2) Synthetic automated market maker (sAMM) and (3)
Automated liquidator (ALQ). Refer to Figure [fig-architecture] for an
illustration of the overall architecture.


![img](../static/img/synfutures-v1-architecture.png)

Futures Contract
----------------

Formally, all of the futures contracts are defined as linear
non-deliverable contracts with 10% initial margin and 5% maintenance
margin. The definition of a unique market consists of a Spot Index
Oracle for a trading pair and Maturity of this contract. For the trading
pair of the Spot Index Oracle can be further split into BASE and QUOTE
assets, where the QUOTE asset should be an ERC20 token used as the
margin for this Futures Contract and the BASE asset has no restriction
as long as such oracle is available.

Synthetic AMM
-------------

Built on the idea from current constant product AMM for spot trading,
Synthetic AMM is designed to provide similar trading experience for
futures margin trading. In essence, the sAMM is a market participant
with its own margin account similar to other users, but always ready to
make prices based on the constant product formula and its current
position. Apart from trading, the sAMM contract provides users with
interfaces to add and remove liquidity to the sAMM liquidity pool and
the sAMM contract also acts as the gateway for users to deposit margin
to and withdraw margin from their account.

Liquidity Pool: To add liquidity to the sAMM, a user interacts with the
smart contract and transfers the margin token, or the QUOTE asset to the
sAMM. Internally the sAMM creates a long position in the Futures
Contract using half of the added margin token, effectively synthesizing
the BASE asset of a trading pair, and keeps the remaining half as
available margin. At the same time, the sAMM would allocate a short
position of the same size as the newly created long position to the same
user. As a liquidity provider, the user owns a share of the total long
position and the available margin of the liquidity pool in the sAMM. The
total risk position of a liquidity provider equals the share of the long
position of the sAMM plus the position in their own account. Thus the
action of adding liquidity to the sAMM does not change the total risk of
the liquidity provider as the newly created long and short positions
offset each other. However, the liquidity provider does need to ensure
sufficient margin in their margin account to meet the margin requirement
after adding liquidity to the sAMM. Removing liquidity from the sAMM
follows a similar but reverse process where the sAMM would reduce its
long position and allocate the reduced long position to the user
requesting to remove liquidity and return the margin token to the user.
Similarly, the action of removing liquidity from the sAMM does not
change the total risk of the liquidity provider.

Liquidation
-----------

When the margin balance of an account is lower than its maintenance
margin requirement, the account needs to be liquidated. Two approaches
for liquidation are provided.

Conventional DeFi Approach: Liquidator takes over the position of the
liquidated account and provides the required initial margin at current
Mark Price. After successful liquidation, the liquidator will receive
the balance of the maintenance margin of the liquidated account as
reward. This approach has no market impact as the only change to the
system as a whole is the extra margin provided by the liquidator.
However, a liquidator willing to provide such margin and take over a
risky position might not always be available. Thus full liquidation is
desired when such a liquidator appears.

Automated Liquidator (ALQ) Approach: In both traditional financial
market and CeFi exchanges, liquidations are normally handled by
executing trades in the market to partially reverse the position of an
account failing below its maintenance margin requirement. The difficulty
of this partial liquidation approach in DeFi is the availability of a
counterparty, before the invention of AMM. With the AMM, accounts that
need to be liquidated can be forced to trade with the ALQ, or in this
version at the same time the respective AMM to partially reduce their
positions to meet margin requirements. In this approach, liquidation
would have some market impact, similar to traditional financial market
and CeFi exchanges. Compared to the conventional approach, this approach
hugely reduces the entry barrier for liquidation as it only requires an
initiator to send a transaction to the smart contract, without providing
any margin or taking any risky positions. The successful initiator will
be rewarded by the ecosystem.

Mark Basis and Price
--------------------

Similar to the traditional financial markets, convergence of futures
price to spot index is only guaranteed at the maturity for settlement.
Prior to that, futures price follows its own price discovery of the
market, although a high correlation is expected with spot price. Thus,
the difference or basis between Futures price and Spot Index is an
important factor in determining the fair price or Mark Price of Futures.

For risk management purposes, a near real time mark price with a stable
basis is desirable. The Mark Price for a Futures Contract is defined as
Spot Index + Mark Basis, where the Spot Index provides the near
realtimeness while the Mark Basis keeps the relationship between futures
price and spot index stable by applying exponential moving average on
past basis.

Before the last hour of a Futures Contract, Mark Price is defined as
below: 

$$\text{Basis}_T = \text{FuturesPrice}_T - \text{SpotIndex}_T$$
$$\text{MarkBasis}_T =\alpha  \cdot \text{Basis}_T + (1 - \alpha) \cdot \text{MarkBasis}_{T-1},\ \text{where}\ \alpha = 1 - e^{-\Delta T/\tau}$$
$$\text{MarkPrice}_T = \text{SpotIndex}_T + \text{MarkBasis}_T$$

In the last hour of a Futures Contract, basis is assumed to be 0 and the
Mark Price will be the TWAP of Spot Index to facilitate the price
convergence to the spot and the eventual settlement.

Whenever the state of the system changes, the Mark Price is updated. The
system also allows voluntary mark price updates without trading or
liquidity changes and the initiator of such updates will be updated by
the ecosystem.

Settlement
----------

In the last hour before maturity, the AMM enters the settling mode. In
this mode, users are only allowed to reduce position and not allowed to
open or increase position. This is to ensure a smooth settlement of the
futures contract. The final settlement price will be the TWAP of the
Spot Index during the settling period. In addition, Mark Price used for
liquidation in the settling period will also be the TWAP of the Spot
Index to be consistent and avoid the situation where some accounts need
to be liquidated after settlement. After the maturity, users will be
able to settle their position into margin and withdraw their margin
balance from the AMM

Product Road Map
==========
Fixed margin futures (v1) will be launched as the first product and also serves as a proof of concept. To fully realized the potential of AMM based derivatives,  we index futures products that have no natural market makers will be launched next, for example, Bitcoin minging difficulty index futures. As not all such index futures products have readily available oracles on Ethereum network, we will also work with the ecosystem to build the necessary oracles.

Cross margin futures (v2) will be launched as the next major upgrade and ready for full adoption by the entire network. With cross margin futures, decentralized futures basis trading will be feasible and margin friendly. After decentralized futures trading becomes common and widely adopted, these futures AMM becomes oracles for futures prices that can be used by decentralized options, which will be the next focus. When enough market data can be oberved from the AMM based oracles, decentralized portfolio margin can be achieve as the ultimate product of this project.

Timeline
========

-   Dec 2020: Contract audit for v1 fixed margin futures

-   Jan 2021: Testnet launch of v1 fixed margin futures

-   Feb 2021: Mainnet launch of v1 fixed margin futures and Testnet launch of mining difficulty index futures

-   Mar 2021: Mainnet launch of mining difficulty index futures

-   Apr 2021: Testnet launch of v2 cross margin futures

-   May 2021: Mainnet launch of v2 cross margin futures and Governance

-   Jun 2021: Futures basis trading

-   Sep 2021: Option trading

-   Dec 2021: Portfolio margin
