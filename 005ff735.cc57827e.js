(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{52:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(2),i=r(6),o=(r(0),r(81)),n={id:"traders",title:"For Traders",slug:"/traders"},s={unversionedId:"traders",id:"traders",isDocsHomePage:!1,title:"For Traders",description:"8. How to add/withdraw margin?",source:"@site/docs/traders.md",slug:"/traders",permalink:"/docs/docs/traders",editUrl:"https://github.com/SynFutures/docs/edit/master/docs/docs/traders.md",version:"current",sidebar:"docs",previous:{title:"General",permalink:"/docs/docs/"},next:{title:"For Liquidity Providers",permalink:"/docs/docs/lp"}},c=[{value:"8. How to add/withdraw margin?",id:"8-how-to-addwithdraw-margin",children:[]},{value:"9. How to open/close a position?",id:"9-how-to-openclose-a-position",children:[]},{value:"10. What is the fee charged when trading?",id:"10-what-is-the-fee-charged-when-trading",children:[]},{value:"11. What is my futures contract\u2019s expiration time?",id:"11-what-is-my-futures-contracts-expiration-time",children:[]},{value:"12. Why was my futures contract not expiring exactly at the preset expiration time on settlement day?",id:"12-why-was-my-futures-contract-not-expiring-exactly-at-the-preset-expiration-time-on-settlement-day",children:[]},{value:"13. How to determine whether a trader&#39;s position should be liquidated?",id:"13-how-to-determine-whether-a-traders-position-should-be-liquidated",children:[]},{value:"14. What happen if my position doesn&#39;t have sufficient margin?",id:"14-what-happen-if-my-position-doesnt-have-sufficient-margin",children:[]},{value:"15. Why did my transaction fail?",id:"15-why-did-my-transaction-fail",children:[]}],d={rightToc:c};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"8-how-to-addwithdraw-margin"},"8. How to add/withdraw margin?"),Object(o.b)("p",null,"You could go to \u201cTrade\u201d page and select the contract you have traded,  or \u201cPool\u201d page to view the list of existing trades and perform \u201cDeposit\u201d or \u201cWithdraw\u201d function under \u201cMargin Operations\u201d. "),Object(o.b)("p",null,"Note that when you \u201cwithdraw\u201d margin, your PnL would be calculated based on current MarkPrice and the excess would become available for withdrawal. And your original trade\u2019s entry price would be reset to the current Mark Price. "),Object(o.b)("h3",{id:"9-how-to-openclose-a-position"},"9. How to open/close a position?"),Object(o.b)("p",null,"When open a new position, a trader should transfer the margin token (Quote asset to its account to ensure its margin is sufficient, that is (AccountBalance + UnrealizedPnL) >= Position ","*"," MarkPrice ","*"," InitialMarginRatio."),Object(o.b)("p",null,"With the available margin, a trader could go to \u201cTrade\u201d page to input the trading pairs, click on \u201cBuy/Long\u201d or \u201cSell/Short\u201d button to create a trade.  "),Object(o.b)("p",null,"To close a trade, just follow the reverse procedure \u2013 go to \u201cTrade\u201d page , select the contract you have traded, execute opposite position of existing trades, and margin plus your PnL would be released to your account. Alternatively, you could go to \u201cPool\u201d page to view the list of trades you have and close the position. "),Object(o.b)("p",null,"Note that trader can only trade with a pair that have existing market makers, that is, the pair should have been created and provided liquidity by LP. "),Object(o.b)("h3",{id:"10-what-is-the-fee-charged-when-trading"},"10. What is the fee charged when trading?"),Object(o.b)("p",null,"SynFutures charges a fixed % of fees for all trades based on the transaction amount, to be split into two parts, one is system reserve fees (for trade state update and liquidation initiator, etc.) and the rest would be paid out to transaction pool for LPs.  "),Object(o.b)("h3",{id:"11-what-is-my-futures-contracts-expiration-time"},"11. What is my futures contract\u2019s expiration time?"),Object(o.b)("p",null,"For SynFutures@v1, when launched, the expiration time of all futures contracts will be aligned to 8 am UTC time on every Friday of the week where the expiration time specified by the user is located. The restriction on the mandatory expiration time alignment will be relaxed at an appropriate time and the expiration time of all futures contracts will be aligned to the user-specified expiration date at 8 am UTC time, subject to the development of the market and could be varied by different trading pairs with different trading volumes and requirements. "),Object(o.b)("h3",{id:"12-why-was-my-futures-contract-not-expiring-exactly-at-the-preset-expiration-time-on-settlement-day"},"12. Why was my futures contract not expiring exactly at the preset expiration time on settlement day?"),Object(o.b)("p",null,"Forcing a futures contract to enter SETTLING or SETTLED state may lead to the actual expiration time of the futures contract later than that specified time when the contract was created. This is because the status update of the smart contract itself can only be triggered by a transaction. To cope with this problem, SynFutures@v1 introduces an additional reward mechanism in order to encourage users to update the state of futures contracts by initiating transactions. Check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/docs/lp_and_maintainer#25-what-other-system-reward-i-might-potentially-earn%EF%BC%9F"}),"What other system reward I might potentially earn?")," for details."),Object(o.b)("h3",{id:"13-how-to-determine-whether-a-traders-position-should-be-liquidated"},"13. How to determine whether a trader's position should be liquidated?"),Object(o.b)("p",null,"When (AccountBalance + UnrealizedPnl) < Position ","*"," MarkPrice ","*"," MaintenanceMarginRatio, the account is no longer safe and can be liquidated."),Object(o.b)("h3",{id:"14-what-happen-if-my-position-doesnt-have-sufficient-margin"},"14. What happen if my position doesn't have sufficient margin?"),Object(o.b)("p",null,"When your account becomes insolvent, liquidators would come and initiate liquidation process. "),Object(o.b)("p",null,"If the liquidator uses traditional DeFi approach, your full position would be taken over so you will lose all of your position and margin token. "),Object(o.b)("p",null,"If the liquidator uses Auto Liquidator approach, your position will be partially liquidated to a safe state that meets the initial margin requirement. "),Object(o.b)("p",null,"For details of the different liquidation approaches, check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/docs/lp_and_maintainer#21-how-do-i-become-a-liquidator"}),"How do I become a liquidator?")," for details."),Object(o.b)("h3",{id:"15-why-did-my-transaction-fail"},"15. Why did my transaction fail?"),Object(o.b)("p",null,"A transaction might be failed due to insufficient gas fee, exceeding pricing slippage you specified or breaching the limitation SynFutures imposed to protect users etc., check advanced topics: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/docs/advanced#29-how-do-you-protect-users-from-large-price-movement-what-are-the-restrictions-imposed-by-synfutures"}),"How do you protect users from large price movement? or what are the restrictions imposed by SynFutures?")," for more details.  For a failed transaction, you could click on \u201cView on Etherscan \u201c for more details. "))}l.isMDXComponent=!0},81:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),i=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,n=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,m=u["".concat(n,".").concat(h)]||u[h]||p[h]||o;return r?i.a.createElement(m,s(s({ref:t},d),{},{components:r})):i.a.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,n=new Array(o);n[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var d=2;d<o;d++)n[d]=r[d];return i.a.createElement.apply(null,n)}return i.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);