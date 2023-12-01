import{u as e,v as Q,L as k,N as w,I as v,O as N,P as S,Q as A,S as M}from"./button.20c74a80.js";import{r as c}from"./index.33c77f1d.js";import{C as B,e as P,f as C,g as D,h as W,y as Y,z as J,H as U,k as H,l as G}from"./CurrentUser.964f2c46.js";import{S as $}from"./scroll-area.ca88075a.js";import{h as m}from"./common.71c6c06c.js";import{E as _}from"./ExternalLink.0ff9e204.js";import{C as a}from"./CardRow.e0c41d8a.js";import{F as X}from"./index.esm.9c65b0e2.js";function ae({className:y,...i}){return e.jsx("div",{className:Q("animate-pulse rounded-md bg-primary/10",y),...i})}function ne(y){const{asset:i,assetData:t,assetDetails:p,bitassetData:s,marketSearch:d,chain:f,usrBalances:b,type:h}=y,[F,I]=c.useState(0);c.useEffect(()=>{if(t&&b){const u=t.id,T=b.find(g=>g.asset_id===u);if(T){const g=m(T.amount,t.precision).toLocaleString(void 0,{minimumFractionDigits:t.precision});I(g)}}},[t,b]);const[x,E]=c.useState(),[j,R]=c.useState(),[o,z]=c.useState();return c.useEffect(()=>{d&&s&&(E(d.find(u=>u.id===s.current_feed.settlement_price.base.asset_id)),R(d.find(u=>u.id===s.current_feed.settlement_price.quote.asset_id)),z(d.find(u=>u.id===s.options.short_backing_asset)))},[s,d]),e.jsxs(B,{children:[e.jsxs(P,{className:"pb-2 pt-4",children:[e.jsxs(C,{children:[i," ",t?`(${t.id})`:""]}),e.jsxs(D,{className:"text-lg",children:[h==="buy"?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Quote asset"})," -",e.jsx("span",{className:"text-sm",children:" Buying"})]}):null,h==="sell"?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Base asset"})," -",e.jsx("span",{className:"text-sm",children:" Selling"})]}):null,h==="pool"?e.jsx("span",{children:"Pool stake asset"}):null]})]}),e.jsxs(W,{className:"text-sm pb-2",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-3 w-full",children:[e.jsxs(k,{children:[e.jsx(w,{asChild:!0,children:e.jsx(v,{variant:"outline",className:"h-6",children:"Supply"})}),e.jsx(N,{className:"sm:max-w-[400px] bg-white",children:e.jsxs(S,{children:[e.jsxs(A,{children:[i," ",t?`(${t.id})`:""," supply info"]}),e.jsxs(M,{children:[p&&t?m(p.current_supply,t.precision).toLocaleString(void 0,{minimumFractionDigits:t.precision}):"???"," ",i," in total circulation",e.jsx("br",{}),p&&t?m(t.max_supply,t.precision).toLocaleString(void 0,{minimumFractionDigits:t.precision}):"???"," ","maximum supply",e.jsx("br",{}),p&&t?m(p.confidential_supply,t.precision):"???"," ",i," in confidential supply"]})]})})]}),e.jsxs(k,{children:[e.jsx(w,{asChild:!0,children:e.jsx(v,{variant:"outline",className:"h-6",style:{marginLeft:"3px"},children:"Links"})}),e.jsxs(N,{className:"sm:max-w-[600px] bg-white",children:[e.jsxs(S,{children:[e.jsxs(A,{children:[i," external links"]}),e.jsxs(M,{children:["The buttons below link directly to external ",i," resources.",e.jsx("br",{}),"User discretion is advised when interacting with external resources."]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[e.jsx("div",{children:e.jsx("b",{children:"Explorers"})}),e.jsxs("div",{children:[e.jsx(_,{variant:"outline",classnamecontents:"",type:"button",text:"Blocksights.info",hyperlink:f==="bitshares"?`https://blocksights.info/#/assets/${i}`:`https://blocksights.info/#/assets/${i}?network=testnet`}),f==="bitshares"?e.jsx(_,{variant:"outline",classnamecontents:"ml-2",type:"button",text:"Kibana.bts.mobi",hyperlink:`https://kibana.bts.mobi/app/dashboards#/view/c767fb10-5c58-11eb-a22a-3fca5c3996eb?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-1M,to:now))&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'55c28590-5c51-11eb-a22a-3fca5c3996eb',key:operation_type,negate:!t,params:(query:19),type:phrase),query:(match_phrase:(operation_type:19))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'55c28590-5c51-11eb-a22a-3fca5c3996eb',key:operation_type,negate:!t,params:(query:2),type:phrase),query:(match_phrase:(operation_type:2)))),query:(language:kuery,query:'${t.id}'))`}):null,f==="bitshares"?e.jsx(_,{variant:"outline",classnamecontents:"ml-2",type:"button",text:"Bitsharescan.info (cn)",hyperlink:`https://www.bitsharescan.info/asset/${i}`}):null]}),e.jsx("div",{children:e.jsx("b",{children:"Web wallets"})}),e.jsxs("div",{children:[e.jsx(_,{classnamecontents:"",variant:"outline",type:"button",text:"BTS.exchange",hyperlink:`https://bts.exchange/#/asset/${i}?r=nftprofessional1`}),e.jsx(_,{classnamecontents:"ml-2",variant:"outline",type:"button",text:"BTWTY.com",hyperlink:`https://wallet.btwty.com/asset/${i}?r=nftprofessional1`}),e.jsx(_,{classnamecontents:"ml-2",variant:"outline",type:"button",text:"XBTS.io",hyperlink:`https://ex.xbts.io/#/asset/${i}?r=nftprofessional1`})]})]})]})]}),e.jsxs(k,{children:[e.jsx(w,{asChild:!0,children:e.jsx(v,{variant:"outline",className:"h-6",style:{marginLeft:"3px"},children:"JSON"})}),e.jsxs(N,{className:"sm:max-w-[600px] bg-white",children:[e.jsxs(S,{children:[e.jsxs(A,{children:[i," JSON summary data"]}),e.jsxs(M,{children:["The data used for generating ",i," limit orders."]})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx("div",{className:"col-span-1",children:e.jsx($,{className:"h-72 rounded-md border text-sm",children:e.jsx("pre",{children:JSON.stringify({assetData:t,assetDetails:p,bitassetData:s},null,2)})})})})]})]})]}),p&&t&&d&&d.length?e.jsxs("div",{className:"grid grid-cols-1 gap-1 w-full",children:[e.jsx(a,{title:"Your balance",button:`${F}`,dialogtitle:`${i} (${t?t.id:"?"}) balance`,dialogdescription:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsxs("li",{children:["This is how much ",i," you have available in your account."]}),e.jsx("li",{children:"You can use this balance to place limit orders in this market."}),e.jsxs("li",{children:["To get more ",i,", you can create a limit order, swap assets via a liquidity pool, or receive a transfer from another account."]})]}),tooltip:"More about your balance"}),e.jsx(a,{title:"Asset type",button:e.jsxs(e.Fragment,{children:[s?null:"User Issued Asset",s&&s.is_prediction_market?"Prediction market":null,s&&!s.is_prediction_market?"Smartcoin":null]}),dialogtitle:`
                ${s?"":"User Issued Asset type summary"}
                ${s&&s.is_prediction_market?"Prediction Market Asset type summary":""}
                ${s&&!s.is_prediction_market?"Smartcoin asset type summary":""}
              `,dialogdescription:e.jsxs(e.Fragment,{children:[s?null:e.jsx($,{className:"h-72 rounded-md border text-sm",children:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2 pl-5 pr-5",children:[e.jsx("li",{children:"User Issued Assets (UIA) are user created blockchain assets."}),e.jsx("li",{children:"Since they're user defined, they each have unique names, settings, descriptions and purposes."}),e.jsx("li",{children:"UIA which are used by Exchanges/Gateways to issue user deposited funds are called Exchange Backed Assets (EBA)."}),e.jsx("li",{children:"UIA can be non-fungible tokens (NFTs) containing a variety of multimedia."}),e.jsx("li",{children:"UIA are used for liquidity pool share assets too."}),e.jsx("li",{children:"Always evaluate UIA settings, description and issuer before utilizing them on the DEX to reduce your risk exposure."})]})}),s&&s.is_prediction_market?e.jsx($,{className:"h-72 rounded-md border text-sm",children:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2 pl-5 pr-5",children:[e.jsx("li",{children:"A Prediction Market Asset (PMA) is a specialized BitAsset such that total debt and total collateral are always equal amounts (although asset IDs differ)."}),e.jsx("li",{children:"No margin calls or force settlements may be performed on a prediction market asset."}),e.jsx("li",{children:"A prediction market is globally settled by the issuer after the event being predicted resolves, thus a prediction market must always have the global_settle permission enabled."}),e.jsx("li",{children:"The maximum price for global settlement or short sale of a prediction market asset is 1-to-1."}),e.jsx("li",{children:"Given that the prediction market oracle is the issuer, the PMA issuer must be a trusted party. PMA participants are exposed to both the risk of the bet and the oracle fulfiling their role truthly."})]})}):null,s&&!s.is_prediction_market?e.jsx($,{className:"h-72 rounded-md border text-sm",children:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2 pl-5 pr-5",children:[e.jsx("li",{children:"A smartcoin is an asset which has backing collateral, an external reference feed price and self-issuance."}),e.jsx("li",{children:"Anyone can create a smartcoin, and anyone can issue smartcoins to their own account given sufficient backing collateral assets."}),e.jsx("li",{children:"Smartcoins are used by the committee-account owned bitassets; bitassets (like USD, CNY, EUR) are committee branded market pegged assets (MPAs) which reference external FIAT currency price feeds and are backed by BTS (1.3.0) core token."}),e.jsx("li",{children:"Users can create their own privatized bitassets (smartcoins) which reference an external feed of their selection and often have highly unique backing collateral requirements and recovery mechanisms implemented."}),e.jsx("li",{children:"If you borrow smartcoins into existence, stay vigilant maintaining your personal risk exposure and spend some time researching the smartcoin, its options and issuer before doing so. Debt holders positions are exposed to both the reference asset and backing asset price volatilities; their collateral is at risk."}),e.jsx("li",{children:"Smartcoin holders are exposed to the risk of the debt holder's backing collateral falling below required minimum levels, however each smartcoin has a different risk profile given their different backing collateral configurations."})]})}):null]}),tooltip:"More about asset type"}),e.jsx(a,{title:"Issuer",button:d?d.find(u=>u.id===t.id).u:"?",dialogtitle:`${t.symbol}'s issuer`,dialogdescription:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsx("li",{children:"This is the blockchain account which created this asset. Pay attention to such a detail to understand what it is you're buying and from whom."}),e.jsx("li",{children:"Asset issuer can change over time as the issuer can easily transfer ownership."}),e.jsx("li",{children:"Committee account owned assets are usually the core bitassets maintained by the committee."}),e.jsx("li",{children:"If the issuer is 'null-account' then the ownership of the asset has effectively been burned."})]}),tooltip:"More about asset issuer"}),e.jsx(a,{title:"Precision",button:t.precision,dialogtitle:"Asset precision info",dialogdescription:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsx("li",{children:"The precision of an asset is the quantity of decimal places it has."}),e.jsxs("li",{children:["For example ",t.symbol," with a precision of ",t.precision," can be traded in quantities of ",m(1,t.precision)," ",t.symbol,"."]})]}),tooltip:"More about asset precision"}),t.market_fee_percent?e.jsx(a,{title:"Market fee",button:`${t.market_fee_percent/100} %`,dialogtitle:"Info on asset market fees",dialogdescription:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsx("li",{children:"Asset creators can introduce market fees to passively earn as trades occur."}),e.jsx("li",{children:"The market fee only applies to one side of the trade."}),e.jsx("li",{children:"Make sure that the market fee is reasonable before proceeding."})]}),tooltip:"More about market fees"}):null,s&&!s.is_prediction_market?e.jsxs(e.Fragment,{children:[o?e.jsx(a,{title:"Backing asset",button:e.jsxs(e.Fragment,{children:[o.s," (",s.options.short_backing_asset,")"]}),dialogtitle:"Backing asset info",dialogdescription:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsx("li",{children:"Smartcoins (bitassets & stablecoins) require backing collateral to be lent into existence."}),e.jsx("li",{children:"The backing asset is used as collateral to back the smartcoin."}),e.jsx("li",{children:"The backing asset is chosen by the smartcoin's issuer and can't be changed once users hold it."})]}),tooltip:"More about backing asset"}):null,s.options.extensions.margin_call_fee_ratio?e.jsx(a,{title:"Margin call fee ratio",button:e.jsxs(e.Fragment,{children:[s.options.extensions.margin_call_fee_ratio/100," %"]}),dialogtitle:"Margin call fee ratio info",dialogdescription:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsx("li",{children:"Enables the asset issuer to charge a fee against margin call trading."}),e.jsx("li",{children:"Configured by the asset issuer."})]}),tooltip:"More about the margin call fee ratio"}):null,s.options.extensions.force_settle_fee_percent?e.jsx(a,{title:"Force settle fee percent",button:e.jsxs(e.Fragment,{children:[s.options.extensions.force_settle_fee_percent/100," %"]}),dialogtitle:"Force settle fee percent info",dialogdescription:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsx("li",{children:"Enables the asset issuer to charge a fee against force settlement operations."}),e.jsx("li",{children:"Configured by the asset issuer."})]}),tooltip:"More about the force settle fee percent"}):null,s.settlement_fund&&o?e.jsx(a,{title:"Settlement fund",button:e.jsx(e.Fragment,{children:m(s.settlement_fund,o.p).toLocaleString(void 0,{minimumFractionDigits:o.p})}),dialogtitle:"Settlement fund info",dialogdescription:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsx("li",{children:"A settlement fund is the backing collateral held aside during global settlement conditions."}),e.jsx("li",{children:"Smartcoin holders can claim their share of the settlement fund if they force/instant settle their smartcoins."}),e.jsx("li",{children:"On creation of the settlement fund the debt holders have 100% backing set aside in the fund, and the rest (above 100% collateral) returned to their account."})]}),tooltip:"More about settlement funds"}):null,s.current_feed&&s.current_feed.settlement_price&&s.current_feed.settlement_price.base.amount&&s.current_feed.settlement_price.quote.amount&&x&&j&&o?e.jsx(a,{title:"Feed price",button:e.jsx(e.Fragment,{children:(m(s.current_feed.settlement_price.base.amount,x.p)/m(s.current_feed.settlement_price.quote.amount,j.p)).toFixed(o.p)}),dialogtitle:"Feed price info",dialogdescription:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsx("li",{children:"Feed producers are chosen by the asset issuer; each producer contributes price feeds for the asset."}),e.jsx("li",{children:"These price feeds are used to determine the smartcoin variables, such as the settlement price, so it constantly tracks the price of the backing asset."}),e.jsx("li",{children:"Bitassets are price fed by witnesses, however user created smartcoins can allow any pre-approved bitshares account to provide price feeds."}),e.jsx("li",{children:"Checking the price feed quality can help reduce your risk exposure when trading/holding smartcoins."})]}),tooltip:"More about feed prices"}):null,s.settlement_price&&s.settlement_price.base.amount&&s.settlement_price.quote.amount&&x&&j&&o?e.jsx(a,{title:"Settlement price",button:e.jsxs(e.Fragment,{children:[(m(s.settlement_price.base.amount,x.p)/m(s.settlement_price.quote.amount,j.p)).toFixed(o.p)," ",x.s,"/",o.s]}),dialogtitle:"Settlement price info",dialogdescription:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsx("li",{children:"The rate at which you'll receive backing collateral if you force/instant settle smartcoins."}),e.jsx("li",{children:"Whilst a smartcoin is in global settlement conditions, new issuance is halted until conditions resolve."}),e.jsx("li",{children:"Depending on the global settlement recovery mechanism configured by the smartcoin asset issuer, the feed price may be below the settlement price."})]}),tooltip:"More about this settlement price"}):null,s.individual_settlement_debt&&o?e.jsx(a,{title:"Ind. Settlement debt",button:e.jsxs(e.Fragment,{children:[m(s.individual_settlement_debt,o.p).toLocaleString(void 0,{minimumFractionDigits:o.p})," ",i]}),dialogtitle:"Individual settlement debt info",dialogdescription:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsx("li",{children:"The individual settlement pool. In the event of individual settlements (to fund or to order), debt and collateral of the margin positions which got settled are moved here."}),e.jsx("li",{children:"For individual settlement to fund, collateral assets in the pool can only be retrieved through forced settlements."}),e.jsx("li",{children:"For individual settlement to order, collateral assets in the pool can only be retrieved through limit orders."}),e.jsx("li",{children:"Amount of debt due to individual settlements"})]}),tooltip:"More about individual settlement debt"}):null,s.individual_settlement_fund&&o?e.jsx(a,{title:"Ind. Settlement fund",button:e.jsxs(e.Fragment,{children:[m(s.individual_settlement_fund,o.p).toLocaleString(void 0,{minimumFractionDigits:o.p})," ",i]}),dialogtitle:"Individual settlement fund info",dialogdescription:e.jsx("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:e.jsx("li",{children:"The amount of collateral (backing asset) collected due to individual settlements."})}),tooltip:"More about individual settlement funds"}):null]}):null,e.jsxs("span",{className:"grid grid-cols-2 gap-2 mt-2",children:[s?e.jsxs(k,{children:[e.jsx(w,{asChild:!0,children:e.jsx(v,{variant:"outline",className:"h-5 p-3",children:"Smartcoin info"})}),e.jsxs(N,{className:"sm:max-w-[600px] bg-white",children:[e.jsxs(S,{children:[e.jsx(A,{children:"Additional bitasset info"}),e.jsx(M,{children:"These values don't freuqently change value but do affect traders."})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx("div",{className:"col-span-1",children:s&&!s.is_prediction_market?e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Smartcoin ID",button:s.id,dialogtitle:"Smartcoin ID",dialogdescription:e.jsx("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:e.jsx("li",{children:"The ID required to fetch the bitasset details like the feed price, settlement price, etc."})}),tooltip:"More about Smartcoin ID"}),e.jsx(a,{title:"Feed quantity",button:s.feeds.length,dialogtitle:"Smartcoin feed quantity info",dialogdescription:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsx("li",{children:"The quantity of feed producers contributing reference feed data for this smartcoin to track the true value of the reference asset."}),e.jsx("li",{children:"There can be as few as 1 feed producer for a smartcoin to operate, however the greater the quantity of feed producers the more stable it becomes."}),e.jsx("li",{children:"If a smartcoin is fed by witnesses or comittee, the quantity of feed producers cannot exceed the pool of active witnesses and committee members."})]}),tooltip:"More about feed quantities"}),s.options.force_settlement_delay_sec?e.jsx(a,{title:"Force settlement delay",button:e.jsxs(e.Fragment,{children:[s.options.force_settlement_delay_sec/60," mins"]}),dialogtitle:"Force settlement delay info",dialogdescription:e.jsx("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:e.jsx("li",{children:"The amount of time which the blockchain will wait before processing your force settlement operation."})}),tooltip:"More about force settlement delays"}):null,e.jsx(a,{title:"Force settlement offset",button:e.jsxs(e.Fragment,{children:[s.options.force_settlement_offset_percent/100,"%"]}),dialogtitle:"Force settlement offset info",dialogdescription:e.jsx("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:e.jsx("li",{children:"A percentage offset from the price feed for settlement"})}),tooltip:"More about force settlement offset"}),e.jsx(a,{title:"Max force settlement volume",button:e.jsxs(e.Fragment,{children:[s.options.maximum_force_settlement_volume/100," %"]}),dialogtitle:"Max force settlement volume info",dialogdescription:e.jsx("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:e.jsx("li",{children:"Maximum percentage of the supply that can be settled per day"})}),tooltip:"More about force settlement offset"}),s.options.extensions.black_swan_response_method?e.jsx(a,{title:"Global settlement response method",button:s.options.extensions.black_swan_response_method,dialogtitle:"Global settlement response (BSRM) method info",dialogdescription:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsx("li",{children:"Specifies the asset issuer configured global settlement response method (BSRM)"}),e.jsx("li",{children:"Global settlement response methods handle how issuance and settlement occur, specifically during highly volatile market activity."})]}),tooltip:"More about global settlement response methods"}):null,s.options.extensions.maintenance_collateral_ratio?e.jsx(a,{title:"Maintenance collateral ratio",button:e.jsxs(e.Fragment,{children:[s.options.extensions.maintenance_collateral_ratio/10,"%"]}),dialogtitle:"Maintenance collateral ratio info",dialogdescription:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsx("li",{children:"The minimum collateral ratio (MCR) specified by the asset issuer."}),e.jsx("li",{children:"If your debt position drops below this ratio then you're likely to be margin called."}),e.jsx("li",{children:"If your debt position is margin called, you will lose the collateral plus the offset percent."})]}),tooltip:"More about the maintenance collateral ratio"}):null,s.options.extensions.initial_collateral_ratio?e.jsx(a,{title:"Initial collateral ratio",button:e.jsxs(e.Fragment,{children:[s.options.extensions.initial_collateral_ratio/10," ","%"]}),dialogtitle:"Initial collateral ratio info",dialogdescription:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsx("li",{children:"The initial collateral ratio (ICR) is the minimum ratio required when creating a debt position."}),e.jsx("li",{children:"Your debt position margin ratio can fall below this ICR ratio, but it must stay above the MCR to avoid margin call."})]}),tooltip:"More about the initial collateral ratio"}):null,s.options.extensions.maximum_short_squeeze_ratio?e.jsx(a,{title:"Maximum short squeeze ratio",button:e.jsxs(e.Fragment,{children:[s.options.extensions.maximum_short_squeeze_ratio/10," ","%"]}),dialogtitle:"Maximum short squeeze ratio info",dialogdescription:e.jsx("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:e.jsx("li",{children:"The max short squeeze ratio is the maximum ratio which a debt position will be protected against short squeezes."})}),tooltip:"More about the max short squeeze ratio"}):null]}):null})})]})]}):null,e.jsx("a",{href:`/smartcoin/index.html?id=${t.id}`,children:e.jsx(v,{variant:"outline",className:"h-5 p-3 w-full",children:"Borrow"})})]})]}):null]})]})}function oe(y){const{assetA:i,assetB:t,assetAData:p,assetBData:s,chain:d}=y,f=c.useSyncExternalStore(Y.subscribe,Y.get,()=>!0),b=c.useSyncExternalStore(J.subscribe,J.get,()=>!0),h=c.useMemo(()=>d&&(f||b)?d==="bitshares"?f:b:[],[f,b,d]),[F,I]=c.useState(),[x,E]=c.useState(),[j,R]=c.useState();c.useEffect(()=>{function r(){const n=h.filter(l=>l.asset_a_symbol===i||l.asset_b_symbol===i);I(n)}h&&i&&r()},[h,i]),c.useEffect(()=>{function r(){const n=h.filter(l=>l.asset_a_symbol===t||l.asset_b_symbol===t);E(n)}h&&t&&r()},[h,t]),c.useEffect(()=>{function r(){const n=h.filter(l=>l.asset_a_symbol===i&&l.asset_b_symbol===t||l.asset_a_symbol===t&&l.asset_b_symbol===i);R(n&&n.length?n:[])}h&&i&&t&&r()},[h,i,t]);function o({id:r,share_asset_symbol:n,asset_a_symbol:l,asset_b_symbol:L}){return e.jsxs("div",{className:"grid grid-cols-10",children:[e.jsx("div",{className:"col-span-1",children:e.jsx("p",{children:r})}),e.jsx("div",{className:"col-span-3",children:e.jsx("p",{children:n})}),e.jsx("div",{className:"col-span-3",children:e.jsx("p",{children:l})}),e.jsx("div",{className:"col-span-3",children:e.jsx("p",{children:L})})]})}const z=({index:r,style:n})=>{const l=F[r];return e.jsx("a",{style:n,href:`/pool/index.html?pool=${l.id}`,children:e.jsx(o,{id:l.id,share_asset_symbol:l.share_asset_symbol,asset_a_symbol:l.asset_a_symbol,asset_b_symbol:l.asset_b_symbol})},`a_${l.id}`)},u=({index:r,style:n})=>{const l=x[r];return e.jsx("a",{style:n,href:`/pool/index.html?pool=${l.id}`,children:e.jsx(o,{id:l.id,share_asset_symbol:l.share_asset_symbol,asset_a_symbol:l.asset_a_symbol,asset_b_symbol:l.asset_b_symbol})},`a_${l.id}`)},T=({index:r,style:n})=>{const l=j[r];return e.jsx("a",{style:n,href:`/pool/index.html?pool=${l.id}`,children:e.jsx(o,{id:l.id,share_asset_symbol:l.share_asset_symbol,asset_a_symbol:l.asset_a_symbol,asset_b_symbol:l.asset_b_symbol})},`a_${l.id}`)};function g({title:r,poolArray:n,dialogTitle:l,dialogDescription:L,type:O}){if(!n)return e.jsx(B,{children:e.jsxs(P,{className:"pb-2",children:[e.jsx(C,{children:r}),e.jsx(D,{children:"loading..."})]})});if(!n.length)return e.jsx(B,{children:e.jsxs(P,{className:"pb-2",children:[e.jsx(C,{children:r}),e.jsx(D,{children:"0 pools found"})]})});let q;return O==="A"?q=z:O==="B"?q=u:q=T,e.jsxs(k,{children:[e.jsx(w,{asChild:!0,children:e.jsx(B,{children:e.jsxs(P,{className:"pb-3 pt-3",children:[e.jsx(C,{children:r}),e.jsxs(D,{children:[n&&n.length," pools found"]})]})})}),e.jsxs(N,{className:"sm:max-w-[800px] bg-white",children:[e.jsxs(S,{children:[e.jsx(A,{children:l}),e.jsx(M,{children:L})]}),e.jsxs("div",{className:"grid grid-cols-1",children:[e.jsxs("div",{className:"grid grid-cols-10",children:[e.jsx("div",{className:"col-span-1",children:"id"}),e.jsx("div",{className:"col-span-3",children:"Share asset"}),e.jsx("div",{className:"col-span-3",children:"Asset A"}),e.jsx("div",{className:"col-span-3",children:"Asset B"})]}),e.jsx(X,{height:300,itemCount:n.length,itemSize:35,className:"w-full",children:q})]})]})]})}return e.jsxs("div",{className:"grid grid-cols-3 gap-5 mt-5",children:[e.jsxs(U,{children:[e.jsx(H,{asChild:!0,children:e.jsx("div",{children:e.jsx(g,{title:`${i&&i.length<12?i:p.id} Pools`,poolArray:F,dialogTitle:`${i} Pools`,dialogDescription:`These Bitshares pools use ${i} (${p.id}) as one of the assets.`,type:"A"})})}),e.jsxs(G,{className:"w-60",children:["Swap ",i," using one of these liquidity pools"]})]},"hover_a"),e.jsxs(U,{children:[e.jsx(H,{asChild:!0,children:e.jsx("div",{children:e.jsx(g,{title:"Market Pools",poolArray:j,dialogTitle:`${i}/${t} Pools`,dialogDescription:`These pools trade between ${i} and ${t}.`,type:"Market"})})}),e.jsxs(G,{className:"w-60",children:["Swap between ",i," and ",t," using one of these liquidity pools"]})]},"hover_b"),e.jsxs(U,{children:[e.jsx(H,{asChild:!0,children:e.jsx("div",{children:e.jsx(g,{title:`${t&&t.length<12?t:s.id} Pools`,poolArray:x,dialogTitle:`${t} Pools`,dialogDescription:`These Bitshares pools use ${t} (${s.id})  as one of the assets.`,type:"B"})})}),e.jsxs(G,{className:"w-60",children:["Swap ",t," using one of these liquidity pools"]})]},"hover_c")]})}export{ne as M,oe as P,ae as S};
