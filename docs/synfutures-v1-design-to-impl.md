# SynFutures@v1

20201124

## 概述

SynFutures@v1是参与Uniswap的现货交易模式构建的分布式期货交易平台，与Uniswap中任何人都可以创建新的现货交易对类似，SynFutures@v1允许任何人创建任意base/quote、任意到期日的期权市场，例如3天后到期的BTC/USD期权市场，当月的ETH/USDC期权市场以及当季的ETH/USDT期权市场。

受制于当前区块链行业Oracle的发展现状，并不是所有的base/quote都有可靠的价格Oracle，SynFutures@v1目前仅支持使用Uniswap和Chainlink作为价格来源，并且要求quote是Ethereum上的原生资产，SynFutures@v1启动时允许的可以作为quote的资产包括：ETH、USDC、USDT、DAI。

- 如果base也是Ethereum上的原生资产，SynFutures@v1默认使用Uniswap作为价格Oracle。
- 如果base不是Ethereum上的原生资产，SynFutures@v1默认使用Chainlink作为价格Oracle。

然后依赖Uniswap或者依赖Chainlink，SynFutures@v1都要处理与特定Oracle机制相关的特殊问题。Uniswap方面，使用Uniswap的现货交易对的Oracle容易遭受价格操控，SynFutures@v1中引入了额外的控制机制来尝试减缓这一影响，后文再做详细介绍。Chainink方面，Chainlink上的BTC等资产的报价是以USD为单位的，而Ethereum上的USDC、USDT、DAI等美金稳定币相对USD都会有小范围波动。为了应对这种情况，对于依赖Chainlink的期货合约，SynFutures@v1将USDC作为USD在Ethereum上锚定资产，也即任何SynFutures@v1中任意依赖Chainlink作为价格来源的期货合约的quote均为USDC。例如SynFutures@v1中依赖Chainlink作为Oracle的BTC/USD期货合约中的quote实则是USDC，也即如果Chainlink给出的BTC/USD价格为18000，则SynFutures@v1的BTC/USD期货合约认为BTC的当前价格为18000USDC。

做市商机制方面，以Uniswap、Curve为代表的恒定函数做市商证实了AMM的可行性，mcdex、perp等项目也将AMM机制引入了链上永续合约的构建，SynFutures@v1充分借鉴了DeFi领域现货、衍生品市场上的AMM机制设计，尤其是mcdex中用于永续合约的恒定乘积做市商，通过将该做市商模型适配到期货合约的业务场景之中，SynFutures@v1在做市商机制方面采用了我们称之为“sAMM”的恒定乘积自动做市商模型，来为任意期货合约提供充分的流动性。与Uniswap类似，流动性提供者（Liquidity Provider，LP）可以创建任意的期货合约，并且可以为期货合约注入流动性。Uniswap的恒定乘积模型中要求LP向资金池中注入两种资产，而在期货合约的视角下，这是不可行的，因为LP手中通常并不存在base的LONG或者SHORT的仓位的资产。为了解决这一问题，SynFutures@v1借鉴了mcdex的机制设计，LP向合约中注入的流动性中的50%用于合成仓位。这也是sAMM名字的由来，其中“s”表示“synthetic”。

用户（trader和LP）在其参与的期货合约当中都有相应的账户（`Account`），`Account`中记录当前用户的仓位（position）、资金余额（balance）等信息（Amm也有自己的`Account`）。用户可以向自己的账户这种注入资金（`deposit`）、取回资金（`withdraw`）。为账户注入资金之后，trader可以通过与Amm交易（`trade`）的方式做多（buy/long）或者做空（sell/short），而LP则可以利用注入的资金通过添加流动性（`addLiquidity`）成为流动性提供者（Liquidator Provider），当然也可以移除流动性（`removeLiquidity`），添加流动性时LP会获得相应的LP Token，移除流动性时会燃烧掉相应的LP Token。根据价格波动，如果一个账户中的资金余额不足以保证其当前仓位的安全性，任何人（除了该账户自己）都可以发起对该账户的清算（`liquidate`）。清算通常是指清算发起方用自己的账户接管目标账户的仓位，这对于清算发起人的账户状态有较高的要求。为了降低这一门槛，SynFutures@v1引入了额外的清算方式：借助Amm清算目标账户（`liquidateByAmm`），也即清算发起人可以利用Amm的账户来清算指定账户，并获得相应奖励。

充分参考中心化交易所以及传统金融市场的期货产品逻辑，SynFutures@v1将一个期货合约的生命周期分为：NORMAL、SETTLING以及SETTLED三个阶段，并且强制期货合约在成熟之前SETTLING一小时的时间。刚创建并初始化完成的期货合约进入NORMAL状态，在适当时间会进入SETTLING状态，经过至少一个小时的SETTLING之后，合约状态变为SETTLED状态。值得提及的是，强制期货合约SETTLING一小时，有可能会导致合约真正的到期时间要晚于合约创建时指定的到期时间。这是由于智能合约本身的状态更新只能通过交易触发导致的，也因此有可能会出现这种情况：在指定的到期时间的前一小时左右没有发生任何交易，也就导致在期货合约无法严格执行一小时的SETTLING。

为了处理这种情况并且强制合约在到期之前SETTLING一小时，SynFutures@v1采取的策略是：NORMAL状态下处理交易时，会首先根据指定的到期时间判断此时合约状态是否应该为SETTLING（甚至SETTLED），如果是则将合约状态改为SETTLING，并且根据此时的区块时间重新设置到期时间为一小时之后。这种方式可以保证所有合约在到期之前都会经历至少小时的SETTLING（由于同样的原因，期货合约的SETTLING时间可能大于一小时）。可以预期的是交易活跃的期货合约，真正的到期时间与合约创建时的指定的到期时间基本一致。另外，为了鼓励用户通过发起交易来更新（update）期货合约的状态，SynFutures@v1引入了额外的奖励机制。

NORMAL和SETTLING状态下，markPrice的计算方式不同：SETTLILNG状态会采用时间加权的方式计算mark price，稍后再详细介绍。不同的合约状态下，trader和LP可以执行的操作以及限制有所不同：

- NORMAL状态下：trader可以`deposit`、`withdraw`、`update`、`trade`、`liquidate`以及`liquidateByAmm`，而LP可以`deposit`、`withdraw`、`addLiquidity`、`removeLiquidity`操作（当然LP也可以作为trader的角色`update`、`trade`、`liquidate`、以及`liquidateByAmm`）。

- SETTLLING状态下：trader同样可以执行在NORMAL状态下的各种操作，但有了额外的约束条件：`trade`时只能关闭自己的已有仓位，不能增加自己的仓位；LP方面则不允许`addLiquidity`，只能`removeLiquidity`，具体原因随后再详细介绍。
- SETTLED状态下：trader只能根据结算价格关闭自己的仓位（`settle`）；LP方面则需要通过LP Token取回资金池中自身的资产，然后通过`settle`来关闭自己的仓位。值得提及的是，`settle`时用户的资金会自动从`Account`中取回，无需额外调用`withdraw`方法来取回资金。

另外为了对应当下不可预见的链上异常情况（Oracle失效等问题），SynFutures@v1中还额外引入了名为EMERGENCY的状态，EMERGENCY状态下，普通用户和LP均不得进行操作，而系统管理员可以根据实际情况，引导期货合约重新进行SETTLED的状态，并同时设置合理的结算价格（Settlement Price）。

## 期货机制设计



## 期货合约实现





![](./image/synfutures-v1-architecture.png)



