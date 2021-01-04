---
id: samm
title: Synthetic AMM
---


Built on the idea from current constant product AMM for spot trading,
Synthetic AMM is designed to provide similar trading experience for
futures margin trading. 

In essence, the sAMM is a market participant with its own margin account similar to other users, but always ready to
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
