(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{76:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return r})),t.d(a,"default",(function(){return i}));var s=t(2),n=t(6),m=(t(0),t(82)),c={id:"lp",title:"For Liquidity Providers",slug:"/lp"},p={unversionedId:"lp",id:"lp",isDocsHomePage:!1,title:"For Liquidity Providers",description:"16. How does SynFutures' sAMM model work if I would like to add/remove liquidity?",source:"@site/docs\\lp.md",slug:"/lp",permalink:"/docs/docs/lp",editUrl:"https://github.com/SynFutures/docs/edit/master/docs/docs/lp.md",version:"current",sidebar:"docs",previous:{title:"For Traders",permalink:"/docs/docs/traders"},next:{title:"For Liquidator and System Maintainer",permalink:"/docs/docs/lp_and_maintainer"}},r=[{value:"16. How does SynFutures&#39; sAMM model work if I would like to add/remove liquidity?",id:"16-how-does-synfutures-samm-model-work-if-i-would-like-to-addremove-liquidity",children:[]},{value:"17. How could I add liquidity to a trading pair?",id:"17-how-could-i-add-liquidity-to-a-trading-pair",children:[]},{value:"18. What does &quot;Adjust your leverage ratio&quot; mean and what position size would I get when adding x amount of liquidity?",id:"18-what-does-adjust-your-leverage-ratio-mean-and-what-position-size-would-i-get-when-adding-x-amount-of-liquidity",children:[]},{value:"19. What is the reward I can get by supplying liquidity?\u202f",id:"19-what-is-the-reward-i-can-get-by-supplying-liquidity",children:[]},{value:"20. What is the market risk associated with providing liquidity and being an LP?\u202f",id:"20-what-is-the-market-risk-associated-with-providing-liquidity-and-being-an-lp",children:[]}],b={rightToc:r};function i(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(m.b)("wrapper",Object(s.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(m.b)("h3",{id:"16-how-does-synfutures-samm-model-work-if-i-would-like-to-addremove-liquidity"},"16. How does SynFutures' sAMM model work if I would like to add/remove liquidity?"),Object(m.b)("p",null,"To add liquidity, LP transfers the Quote asset token only to the sAMM, among which half is used as Quote asset, and the other half to synthesize the position of the Base asset, that is, to create a 1x LONG position of the Base asset for this futures contract. LP would then receive the respective LP tokens. "),Object(m.b)("p",null,"Since LP originally held Quote assets only and did not have any exposure to the price risk of Base assets, sAMM will at the same time allocate a SHORT position of the same size as the newly created LONG position to the same user to hedge this risk. "),Object(m.b)("p",null,"Removing liquidity from the sAMM follows a similar process where the sAMM would reduce its LONG position and allocate the reduced LONG position to the user requesting to remove liquidity and return the margin token to the user. Similarly, the action of removing liquidity from the sAMM does not change the total risk of the liquidity provider. "),Object(m.b)("h3",{id:"17-how-could-i-add-liquidity-to-a-trading-pair"},"17. How could I add liquidity to a trading pair?"),Object(m.b)("p",null,"To provide liquidity, a LP interacts with the smart contracts via \u201cAdd Liquidity\u201d button on \u201cPool\u201d page from its account balance or \u201cAdd liquidity from Margin\u201d button on \u201cAccount\u201d Page from its available margin. Note that if the LP is adding liquidity from its existing trade\u2019s available margin,  its PnL would be calculated based on current Mark Price and the excess would become available for withdrawal. And the original trade\u2019s Entry price would be reset to the current Mark Price. "),Object(m.b)("p",null,"LP could only add liquidity to an existing pool, otherwise, it could firstly go to \u201cPool\u201d page and click on \u201cCreate Pool\u201d to create and initialize a new trading pair. "),Object(m.b)("h3",{id:"18-what-does-adjust-your-leverage-ratio-mean-and-what-position-size-would-i-get-when-adding-x-amount-of-liquidity"},'18. What does "Adjust your leverage ratio" mean and what position size would I get when adding ',Object(m.b)("span",Object(s.a)({parentName:"h3"},{className:"math math-inline"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"x")),Object(m.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"x")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathnormal"}),"x")))))," amount of liquidity?"),Object(m.b)("p",null,"As mentioned earlier, when adding liquidity, half of the tokens is used as Quote, and the other half to synthesize sAMM's LONG position. In order to hedge sAMM's LONG position, LP will passively be assigned the same amount of short position after providing liquidity.  "),Object(m.b)("p",null,"Thus, when adding liquidity, an LP automatically also becomes a trader with a SHORT position. To ensure the safety of the LP account\u2019s SHORT position, the LP should at the same time have margin available in its account to at least meet the initial margin requirement of the synthetic position. The leverage ratio parameter is used to specify the leverage of the SHORT hedge position.   "),Object(m.b)("p",null,"To simplify the process, SynFutures Dapp combines the process into one click, so when you add ",Object(m.b)("span",Object(s.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"x")),Object(m.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"x")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathnormal"}),"x")))))," amount of Quote asset, the amount would be divided into three parts:   "),Object(m.b)("p",null,"(1) ",Object(m.b)("span",Object(s.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"y")),Object(m.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"y")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03588em"}}),"y")))))," position size would be supplied as the Quote assets  "),Object(m.b)("p",null,"(2) ",Object(m.b)("span",Object(s.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"y")),Object(m.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"y")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03588em"}}),"y")))))," position size would be synthesized into the Base assets  "),Object(m.b)("p",null,"(3) The rest would become the margin of your short position, which could be calculated as ",Object(m.b)("span",Object(s.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"y"),Object(m.b)("mo",{parentName:"mrow"},"\xd7"),Object(m.b)("mfrac",{parentName:"mrow"},Object(m.b)("mtext",{parentName:"mfrac"},"InitialPrice"),Object(m.b)("mtext",{parentName:"mfrac"},"LeverageRatio"))),Object(m.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"y \\times \\frac{\\text{InitialPrice}}{\\text{LeverageRatio}}")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.7777700000000001em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03588em"}}),"y"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mbin"}),"\xd7"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"1.3612159999999998em",verticalAlign:"-0.481108em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mopen nulldelimiter"})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mfrac"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.8801079999999999em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.6550000000000002em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord text mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mtight"}),"LeverageRatio"))))),Object(m.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3.23em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"frac-line",style:{borderBottomWidth:"0.04em"}}))),Object(m.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3.394em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord text mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mtight"}),"InitialPrice")))))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.481108em"}}),Object(m.b)("span",{parentName:"span"}))))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mclose nulldelimiter"}))))))),"."),Object(m.b)("p",null,"The relationship between each parameter and size is: "),Object(m.b)("p",null,Object(m.b)("span",Object(s.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"x"),Object(m.b)("mo",{parentName:"mrow"},"="),Object(m.b)("mn",{parentName:"mrow"},"2"),Object(m.b)("mo",{parentName:"mrow"},"\xd7"),Object(m.b)("mi",{parentName:"mrow"},"y"),Object(m.b)("mo",{parentName:"mrow"},"\xd7"),Object(m.b)("mstyle",Object(s.a)({parentName:"mrow"},{mathsize:"0.9em"}),Object(m.b)("mtext",{parentName:"mstyle"},"InitialPrice")),Object(m.b)("mo",{parentName:"mrow"},"+"),Object(m.b)("mi",{parentName:"mrow"},"y"),Object(m.b)("mo",{parentName:"mrow"},"\xd7"),Object(m.b)("mfrac",{parentName:"mrow"},Object(m.b)("mtext",{parentName:"mfrac"},"InitialPrice"),Object(m.b)("mtext",{parentName:"mfrac"},"LeverageRatio")),Object(m.b)("mo",Object(s.a)({parentName:"mrow"},{separator:"true"}),",")),Object(m.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"x = 2 \\times y \\times \\text{\\small{InitialPrice}} + y \\times \\frac{\\text{InitialPrice}}{\\text{LeverageRatio}},")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathnormal"}),"x"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mrel"}),"="),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.72777em",verticalAlign:"-0.08333em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"2"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mbin"}),"\xd7"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.7777700000000001em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03588em"}}),"y"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mbin"}),"\xd7"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.708326em",verticalAlign:"-0.08333em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord text"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord sizing reset-size6 size5"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"I"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"n"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"i"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"t"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"i"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"a"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"l"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"P"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"r"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"i"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"c"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"e"))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mbin"}),"+"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.7777700000000001em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03588em"}}),"y"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mbin"}),"\xd7"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"1.3612159999999998em",verticalAlign:"-0.481108em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mopen nulldelimiter"})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mfrac"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.8801079999999999em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.6550000000000002em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord text mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mtight"}),"LeverageRatio"))))),Object(m.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3.23em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"frac-line",style:{borderBottomWidth:"0.04em"}}))),Object(m.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3.394em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord text mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mtight"}),"InitialPrice")))))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.481108em"}}),Object(m.b)("span",{parentName:"span"}))))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mclose nulldelimiter"}))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mpunct"}),",")))))),Object(m.b)("p",null,"or,  ",Object(m.b)("span",Object(s.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"y"),Object(m.b)("mo",{parentName:"mrow"},"="),Object(m.b)("mi",{parentName:"mrow"},"x"),Object(m.b)("mi",Object(s.a)({parentName:"mrow"},{mathvariant:"normal"}),"/"),Object(m.b)("mrow",{parentName:"mrow"},Object(m.b)("mo",Object(s.a)({parentName:"mrow"},{fence:"true"}),"("),Object(m.b)("mn",{parentName:"mrow"},"2"),Object(m.b)("mo",{parentName:"mrow"},"\xd7"),Object(m.b)("mstyle",Object(s.a)({parentName:"mrow"},{mathsize:"0.9em"}),Object(m.b)("mtext",{parentName:"mstyle"},"InitialPrice")),Object(m.b)("mo",{parentName:"mrow"},"+"),Object(m.b)("mfrac",{parentName:"mrow"},Object(m.b)("mtext",{parentName:"mfrac"},"InitialPrice"),Object(m.b)("mtext",{parentName:"mfrac"},"LeverageRatio")),Object(m.b)("mo",Object(s.a)({parentName:"mrow"},{fence:"true"}),")")),Object(m.b)("mi",Object(s.a)({parentName:"mrow"},{mathvariant:"normal"}),".")),Object(m.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"y = x / \\left(2 \\times \\text{\\small{InitialPrice}} + \\frac{\\text{InitialPrice}}{\\text{LeverageRatio}} \\right).")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03588em"}}),"y"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mrel"}),"="),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"1.80002em",verticalAlign:"-0.65002em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathnormal"}),"x"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"/"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"minner"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mopen delimcenter",style:{top:"0em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"delimsizing size2"}),"(")),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"2"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mbin"}),"\xd7"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord text"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord sizing reset-size6 size5"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"I"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"n"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"i"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"t"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"i"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"a"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"l"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"P"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"r"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"i"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"c"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"e"))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mbin"}),"+"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mopen nulldelimiter"})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mfrac"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.8801079999999999em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.6550000000000002em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord text mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mtight"}),"LeverageRatio"))))),Object(m.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3.23em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"frac-line",style:{borderBottomWidth:"0.04em"}}))),Object(m.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3.394em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord text mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mtight"}),"InitialPrice")))))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.481108em"}}),Object(m.b)("span",{parentName:"span"}))))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mclose nulldelimiter"}))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mclose delimcenter",style:{top:"0em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"delimsizing size2"}),")"))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),".")))))),Object(m.b)("h3",{id:"19-what-is-the-reward-i-can-get-by-supplying-liquidity"},"19. What is the reward I can get by supplying liquidity?\u202f"),Object(m.b)("p",null,"You could receive trading fees according to your share of the liquidity pool. Additionally, SynFutures plans to launch onchain governance in the future, when early large LPs could also be rewarded with governance token. Exact details to be finalized. "),Object(m.b)("h3",{id:"20-what-is-the-market-risk-associated-with-providing-liquidity-and-being-an-lp"},"20. What is the market risk associated with providing liquidity and being an LP?\u202f"),Object(m.b)("ol",null,Object(m.b)("li",{parentName:"ol"},Object(m.b)("p",{parentName:"li"},"At the start, the action of adding liquidity to the sAMM does not change the total risk profile of the liquidity provider, as the newly created LONG and SHORT positions exactly offset each other.  ")),Object(m.b)("li",{parentName:"ol"},Object(m.b)("p",{parentName:"li"},"After adding liquidity to sAMM, the liquidity provider has also become a trader due to the SHORT hedging position, and needs to maintain sufficient margin in the account to meet the margin requirement or might face the risk of its short hedging position being liquidated.  ")),Object(m.b)("li",{parentName:"ol"},Object(m.b)("p",{parentName:"li"},"With sufficient margin, that is, with Account Balance + Unrealized Pnl > Position ",Object(m.b)("em",{parentName:"p"}," MarkPrice ")," Maintenance Margin (MMR) for the SHORT hedge position, the risk of being an AMM is similar to other protocol such as Uniswap adopting Constant Product Formula pricing model with possible Impermeant Loss, with the amount of loss the same as supplying to Uniswap should everything else equal. Check advanced topics: ",Object(m.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/docs/advanced#30-what-is-the-potential-impermanent-loss-i-might-have-as-an-lp-could-you-walk-me-through-an-example"}),"What is the potential impermanent loss I might have as an LP?")," "))))}i.isMDXComponent=!0},82:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return j}));var s=t(0),n=t.n(s);function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){m(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,s,n=function(e,a){if(null==e)return{};var t,s,n={},m=Object.keys(e);for(s=0;s<m.length;s++)t=m[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(s=0;s<m.length;s++)t=m[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var b=n.a.createContext({}),i=function(e){var a=n.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},l=function(e){var a=i(e.components);return n.a.createElement(b.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},O=n.a.forwardRef((function(e,a){var t=e.components,s=e.mdxType,m=e.originalType,c=e.parentName,b=r(e,["components","mdxType","originalType","parentName"]),l=i(t),O=s,j=l["".concat(c,".").concat(O)]||l[O]||o[O]||m;return t?n.a.createElement(j,p(p({ref:a},b),{},{components:t})):n.a.createElement(j,p({ref:a},b))}));function j(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var m=t.length,c=new Array(m);c[0]=O;var p={};for(var r in a)hasOwnProperty.call(a,r)&&(p[r]=a[r]);p.originalType=e,p.mdxType="string"==typeof e?e:s,c[1]=p;for(var b=2;b<m;b++)c[b]=t[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"}}]);