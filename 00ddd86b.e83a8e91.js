(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{53:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),i=(n(0),n(81)),a={id:"samm",title:"Synthetic AMM"},s={unversionedId:"samm",id:"samm",isDocsHomePage:!1,title:"Synthetic AMM",description:"Built on the idea from current constant product AMM for spot trading,",source:"@site/docs/samm.md",slug:"/samm",permalink:"/docs/docs/samm",editUrl:"https://github.com/SynFutures/docs/edit/master/docs/docs/samm.md",version:"current"},c=[],u={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Built on the idea from current constant product AMM for spot trading,\nSynthetic AMM is designed to provide similar trading experience for\nfutures margin trading. "),Object(i.b)("p",null,"In essence, the sAMM is a market participant with its own margin account similar to other users, but always ready to\nmake prices based on the constant product formula and its current\nposition. Apart from trading, the sAMM contract provides users with\ninterfaces to add and remove liquidity to the sAMM liquidity pool and\nthe sAMM contract also acts as the gateway for users to deposit margin\nto and withdraw margin from their account."),Object(i.b)("p",null,"Liquidity Pool: To add liquidity to the sAMM, a user interacts with the\nsmart contract and transfers the margin token, or the QUOTE asset to the\nsAMM. Internally the sAMM creates a long position in the Futures\nContract using half of the added margin token, effectively synthesizing\nthe BASE asset of a trading pair, and keeps the remaining half as\navailable margin. At the same time, the sAMM would allocate a short\nposition of the same size as the newly created long position to the same\nuser. As a liquidity provider, the user owns a share of the total long\nposition and the available margin of the liquidity pool in the sAMM. The\ntotal risk position of a liquidity provider equals the share of the long\nposition of the sAMM plus the position in their own account. Thus the\naction of adding liquidity to the sAMM does not change the total risk of\nthe liquidity provider as the newly created long and short positions\noffset each other. However, the liquidity provider does need to ensure\nsufficient margin in their margin account to meet the margin requirement\nafter adding liquidity to the sAMM. Removing liquidity from the sAMM\nfollows a similar but reverse process where the sAMM would reduce its\nlong position and allocate the reduced long position to the user\nrequesting to remove liquidity and return the margin token to the user.\nSimilarly, the action of removing liquidity from the sAMM does not\nchange the total risk of the liquidity provider."))}l.isMDXComponent=!0},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(a,".").concat(h)]||d[h]||p[h]||i;return n?o.a.createElement(m,s(s({ref:t},u),{},{components:n})):o.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);