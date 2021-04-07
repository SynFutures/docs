(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{72:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return c})),i.d(t,"rightToc",(function(){return l})),i.d(t,"default",(function(){return d}));var a=i(2),n=i(6),o=(i(0),i(82)),r={id:"lp_and_maintainer",title:"For Liquidator and System Maintainer",slug:"/lp_and_maintainer"},c={unversionedId:"lp_and_maintainer",id:"lp_and_maintainer",isDocsHomePage:!1,title:"For Liquidator and System Maintainer",description:"21. How do I become a liquidator?",source:"@site/docs\\lp_and_maintainer.md",slug:"/lp_and_maintainer",permalink:"/docs/docs/lp_and_maintainer",editUrl:"https://github.com/SynFutures/docs/edit/master/docs/docs/lp_and_maintainer.md",version:"current",sidebar:"docs",previous:{title:"For Liquidity Providers",permalink:"/docs/docs/lp"},next:{title:"Advanced Topics",permalink:"/docs/docs/advanced"}},l=[{value:"21. How do I become a liquidator?",id:"21-how-do-i-become-a-liquidator",children:[]},{value:"22. What would happen if the system becomes insolvent, i.e., balance of the account becomes negative due to liquidation?",id:"22-what-would-happen-if-the-system-becomes-insolvent-ie-balance-of-the-account-becomes-negative-due-to-liquidation",children:[]},{value:"23. What could liquidator benefit from initiating liquidations ?",id:"23-what-could-liquidator-benefit-from-initiating-liquidations-",children:[]},{value:"24. How to determine who could be the liquidator\u202fif there are multiple liquidators targeting the same account?",id:"24-how-to-determine-who-could-be-the-liquidatorif-there-are-multiple-liquidators-targeting-the-same-account",children:[]},{value:"25. What other system reward I might potentially earn?",id:"25-what-other-system-reward-i-might-potentially-earn",children:[]}],u={rightToc:l};function d(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"21-how-do-i-become-a-liquidator"},"21. How do I become a liquidator?"),Object(o.b)("p",null,"In SynFutures@v1, if an account is no longer safe according to the current mark price (i.e. AccountBalance + UnrealizedPnL < Position ","*"," MarkPrice ","*"," MaintenanceMarginRatio), any user of the current futures contract can initiate a liquidation operation for the account. SynFutures@v1 supports two types of liquidate operations: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Traditional DeFi approach: The liquidator takes over all position of the liquidated account at the current mark price. Note that in this case the liquidator should ensure it has sufficient balance in the account to meet the position\u2019s maintenance margin requirement. After all position of the liquidated account are closed, a penalty (deducted from the current account balance) is paid to the insurance fund according to the total value of the liquidation.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Automated Liquidator approach: To lower the liquidity requirement, liquidation initiators could utilize ",Object(o.b)("inlineCode",{parentName:"p"},"liquidatebyAmm()")," method  to use the liquidity in AMM's account, and force the accounts that need to be liquidated to trade with AMM with the same price logic as the trade function. Note that if the position that needs to be liquidated causes excessive price fluctuations in AMM after being traded to AMM, the liquidation process will fail. "))),Object(o.b)("p",null,"It is worth mentioning that since AMM has always maintained liquidity in the system, partial liquidation becomes feasible under this operation:\u202fthe account will be liquidated to a safe state that meets the initial margin requirement. "),Object(o.b)("h3",{id:"22-what-would-happen-if-the-system-becomes-insolvent-ie-balance-of-the-account-becomes-negative-due-to-liquidation"},"22. What would happen if the system becomes insolvent, i.e., balance of the account becomes negative due to liquidation?"),Object(o.b)("p",null,"When the balance of the account becomes negative resulting from liquidation, the insurance fund of the futures contract will be firstly used to reward the liquidator, and cover the shortfall."),Object(o.b)("h3",{id:"23-what-could-liquidator-benefit-from-initiating-liquidations-"},"23. What could liquidator benefit from initiating liquidations ?"),Object(o.b)("p",null,"If the amount of the deficit exceeds the insurance fund balance, the excess loss will accumulate in the socialized loss in the opposite direction, and the loss will be shared in proportion to the positions held by all holders of the that side at this time. "),Object(o.b)("p",null,"With traditional DeFi approach, liquidators supply liquidity, take over traders\u2019 whole positions, and could be rewarded with the rest of the traders\u2019 margin token after deduction of penalty. In the case where the traders\u2019 margin is insufficient, the system\u2019s insurance fund and social loss mechanism would firstly ensure payout of a minimum reward (as defined by ",Object(o.b)("inlineCode",{parentName:"p"},"bankruptcyLiquidatorRewardRatio")," parameter) to the liquidator.  "),Object(o.b)("p",null,"With Auto Liquidator approach, the system reserve fund would pay out a system reward to liquidation initiator who forced the traders to close its position with AMM. "),Object(o.b)("h3",{id:"24-how-to-determine-who-could-be-the-liquidatorif-there-are-multiple-liquidators-targeting-the-same-account"},"24. How to determine who could be the liquidator\u202fif there are multiple liquidators targeting the same account?"),Object(o.b)("p",null,"It is on a \u201cfirst come first served\u201d basis. In practice, whoever initiates trade with sufficient gas fee and be the first to successfully completed the liquidation transaction would be the final liquidator of an insolvent position.  "),Object(o.b)("h3",{id:"25-what-other-system-reward-i-might-potentially-earn"},"25. What other system reward I might potentially earn?"),Object(o.b)("p",null,"You might also earn system reward by updating an inactive futures contract\u2019s trade state: for inactive futures contract where there\u2019s no trading activity at the pre-set time when it should have entered Settling or Settled state, you could call the ",Object(o.b)("inlineCode",{parentName:"p"},"update()")," method, send a transaction to help update the trade state and earn the reward. This system reward is also paid out on a first-come-first-served basis. "))}d.isMDXComponent=!0},82:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return m}));var a=i(0),n=i.n(a);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=n.a.createContext({}),d=function(e){var t=n.a.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},s=function(e){var t=d(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(i),p=a,m=s["".concat(r,".").concat(p)]||s[p]||h[p]||o;return i?n.a.createElement(m,c(c({ref:t},u),{},{components:i})):n.a.createElement(m,c({ref:t},u))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var u=2;u<o;u++)r[u]=i[u];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"}}]);