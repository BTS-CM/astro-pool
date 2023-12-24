import{I as be,J as fe,u as e,K as h,Q as K,S as G,T as X,U as Y,V as Z,W as ee,P as pe}from"./button.GNxhEuHR.js";import{r as n}from"./index.ebYJtNMn.js";import{F as L}from"./index.esm.awlXaKq2.js";import{$ as se,n as te,o as ie,u as xe,C as x,b as j,c as y,d as T,m as E,p as F,f as je}from"./CurrentUser.-qj3GEkM.js";import{T as ye,a as Te,c as g,d as U,h as H}from"./common.8EOjqkfr.js";import{S as oe}from"./scroll-area.7HKeB6rs.js";import{c as ge,a as ve}from"./User.s08ijyOS.js";import{D as Se}from"./DeepLinkDialog.ItBmpkBJ.js";import{E as P}from"./ExternalLink.dfYCZp39.js";import"./index.JRs5YgGT.js";import"./index.f2GGseSc.js";const Pe={0:"Transfer",1:"Limit order create",2:"Limit order cancel",3:"Call order update",4:"Limit order filled",5:"Account creation",6:"Account update",7:"Account whitelist",8:"Account upgrade",9:"Account transfer",10:"Asset create",11:"Asset update",12:"Asset update bitasset",13:"Asset update feed producers",14:"Asset issue",15:"Asset reserve",16:"Asset fund fee pool",17:"Asset settle",18:"Asset global settle",19:"Asset publish feed",20:"Witness create",21:"Witness update",22:"Proposal create",23:"Proposal update",24:"Proposal delete",25:"Withdraw permission create",26:"Withdraw permission update",27:"Withdraw permission claim",28:"Withdraw permission delete",29:"Committee member create",30:"Committee member update",31:"Committee member update global parameters",32:"Vesting balance create",33:"Vesting balance withdraw",34:"Worker create",35:"Custom operation",36:"Assert",37:"Balance claim",38:"Override transfer",39:"Transfer to blind",40:"Blind transfer",41:"Transfer from blind",42:"Asset settle cancel",43:"Asset claim fees",44:"FBA distribute",45:"Collateral bid",46:"Execute bid",47:"Asset claim pool",48:"Asset update issuer",49:"HTLC create",50:"HTLC redeem",51:"HTLC redeemed",52:"HTLC extend",53:"HTLC refund",54:"Custom authority create",55:"Custom authority update",56:"Custom authority delete",57:"Ticket create",58:"Ticket update",59:"Create liquidity pool",60:"Delete liquidity pool",61:"Liquidity pool deposit",62:"Liquidity pool withdraw",63:"Liquidity pool exchange",64:"SameT fund create",65:"SameT fund delete",66:"SameT fund update",67:"SameT fund borrow",68:"SameT fund repay",69:"Create credit offer",70:"Delete credit offer",71:"Update credit offer",72:"Accept credit offer",73:"Repay credit deal",74:"Credit deal expired",75:"Update liquidity pool",76:"Update credit deal",77:"Update limit order"};function He(s){const{t:t,i18n:i}=be(fe.get(),{i18n:pe}),r=n.useSyncExternalStore(se.subscribe,se.get,(()=>!0)),o=n.useSyncExternalStore(te.subscribe,te.get,(()=>!0)),l=n.useSyncExternalStore(ie.subscribe,ie.get,(()=>!0)),a=n.useMemo((()=>r&&r.chain?r.chain:"bitshares"),[r]),c=n.useMemo((()=>a&&(o||l)?"bitshares"===a?o:l:[]),[o,l,a]);xe(a??"bitshares",["assets"]);const d={backgroundColor:"#252526",color:"white"},[u,m]=n.useState("balances"),[p,b]=n.useState(0),[f,v]=n.useState(),[S,C]=n.useState();n.useEffect((()=>{let e;return r&&r.id&&(e=ge([r.chain,r.id]).subscribe((({data:e,error:s,loading:t})=>{e&&!s&&!t&&(console.log("Successfully fetched user portfolio"),v(e.balances),C(e.limitOrders))}))),()=>{e&&e()}}),[r,p]);const[k,A]=n.useState(0),[N,_]=n.useState();n.useEffect((()=>{let e;return r&&r.id&&(e=ve([r.chain,r.id]).subscribe((({data:e,error:s,loading:t})=>{e&&!s&&!t&&(console.log("Successfully fetched history"),_(e))}))),()=>{e&&e()}}),[r,k]);const B=n.useMemo((()=>{if(!c||!f)return[];let e=[];for(let s=0;s<(S?.length||0);s++){const t=S[s].sell_price.base.asset_id,i=S[s].sell_price.quote.asset_id;e.includes(t)||e.push(t),e.includes(i)||e.push(i)}for(let s=0;s<(f?.length||0);s++){const t=f[s].asset_id;e.includes(t)||e.push(t)}return c.filter((s=>e.includes(s.id)))}),[f,S,c]),[w,O]=n.useState(),[$,D]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container mx-auto mt-5 mb-5",children:e.jsx("div",{className:"grid grid-cols-1 mt-5",children:e.jsxs(ye,{defaultValue:"balances",className:"w-full",children:[e.jsxs(Te,{className:"grid w-full grid-cols-3",children:["balances"===u?e.jsx(g,{value:"balances",style:d,children:t("PortfolioTabs:balances")}):e.jsx(g,{value:"balances",onClick:()=>m("balances"),children:t("PortfolioTabs:balances")}),"openOrders"===u?e.jsx(g,{value:"openOrders",style:d,children:t("PortfolioTabs:openOrders")}):e.jsx(g,{value:"openOrders",onClick:()=>m("openOrders"),children:t("PortfolioTabs:openOrders")}),"activity"===u?e.jsx(g,{value:"activity",style:d,children:t("PortfolioTabs:activity")}):e.jsx(g,{value:"activity",onClick:()=>m("activity"),children:t("PortfolioTabs:activity")})]}),e.jsx(U,{value:"balances",children:e.jsxs(x,{children:[e.jsxs(j,{children:[e.jsx(y,{children:t("PortfolioTabs:accountBalances",{username:r.username})}),e.jsx(T,{children:t("PortfolioTabs:accountBalancesDescription")})]}),e.jsx(E,{className:"space-y-2",children:f&&f.length&&B&&B.length?e.jsx(L,{height:500,itemCount:f.length,itemSize:100,className:"gaps-2",children:({index:s,style:i})=>{const r=f[s],o=B&&Array.isArray(B)?B.find((e=>e.id===r.asset_id)):{symbol:r.asset_id,precision:5},l=H(r.amount,o.precision).toLocaleString(void 0,{minimumFractionDigits:o.precision});return e.jsx("div",{style:{...i,marginBottom:"8px"},children:e.jsx(x,{children:e.jsxs("div",{className:"grid grid-cols-6",children:[e.jsx("div",{className:"col-span-4",children:e.jsxs(j,{children:[e.jsx(y,{children:t("PortfolioTabs:assetTitle",{symbol:o.symbol,assetId:f[s].asset_id})}),e.jsx(T,{children:t("PortfolioTabs:liquidAmount",{amount:l})})]})}),e.jsxs("div",{className:"col-span-2 pt-5",children:[e.jsx("a",{href:`/dex/index.html?market=${o.symbol}_${"BTS"===o.symbol?"USD":"BTS"}`,children:e.jsx(h,{variant:"outline",className:"mr-2",children:t("PortfolioTabs:tradeButton")})}),e.jsx(P,{variant:"outline",classnamecontents:"mt-2",type:"button",text:t("PortfolioTabs:assetInfoButton"),hyperlink:`https://blocksights.info/#/assets/${o.symbol}`})]})]})})})}}):e.jsx("p",{children:t("PortfolioTabs:noBalancesFound")})}),e.jsx(F,{children:e.jsx(h,{onClick:()=>{v(),b(p+1)},children:t("PortfolioTabs:refreshBalancesButton")})})]})}),e.jsx(U,{value:"openOrders",children:e.jsxs(x,{children:[e.jsxs(j,{children:[e.jsx(y,{children:t("PortfolioTabs:openOrdersTitle")}),e.jsx(T,{children:t("PortfolioTabs:openOrdersDescription")})]}),e.jsx(E,{children:S&&S.length&&B&&B.length?e.jsx(L,{height:500,itemCount:S.length,itemSize:145,children:({index:s,style:i})=>{const o=S[s].sell_price.base.amount,l=S[s].sell_price.base.asset_id,a=S[s].sell_price.quote.amount,n=S[s].sell_price.quote.asset_id,c=S[s].id,d=S[s].expiration,u=B&&B.length?B.find((e=>e.id===l)):null,m=B&&B.length?B.find((e=>e.id===n)):null,p=u?H(o,u.precision):o,b=m?H(a,m.precision):a,f=new Date(d)-new Date,g=Math.floor(f/1e3/60%60),v=Math.floor(f/1e3/60/60%24),C=`${Math.floor(f/1e3/60/60/24)}d ${v}h ${g}m`;return e.jsx("div",{style:{...i},children:e.jsx(x,{children:e.jsxs("div",{className:"grid grid-cols-6",children:[e.jsx("div",{className:"col-span-4",children:e.jsxs(j,{children:[e.jsx(y,{children:t("PortfolioTabs:sellingFor",{baseAmount:p,baseSymbol:u.symbol,quoteAmount:b,quoteSymbol:m.symbol})}),e.jsxs(T,{children:[t("PortfolioTabs:tradingPair",{baseAssetId:l,quoteAssetId:n}),e.jsx("br",{}),t("PortfolioTabs:orderId"),e.jsx(P,{classnamecontents:"text-blue-500",type:"text",text:` ${c}`,hyperlink:`https://blocksights.info/#/objects/${c}`}),e.jsx("br",{}),t("PortfolioTabs:expires",{timeDiff:C})]})]})}),e.jsxs("div",{className:"col-span-2 pt-6",children:[e.jsx("a",{href:`/dex/index.html?market=${u.symbol}_${m.symbol}`,children:e.jsx(h,{variant:"outline",children:t("PortfolioTabs:tradeButton")})}),e.jsx("a",{href:`/order/index.html?id=${c}`,children:e.jsx(h,{variant:"outline",className:"mb-3 ml-3",children:t("PortfolioTabs:updateButton")})}),e.jsxs(e.Fragment,{children:[e.jsx(h,{variant:"outline",onClick:()=>{D(!0),O(c)},children:t("PortfolioTabs:cancelButton")}),$&&c===w?e.jsx(Se,{operationName:"limit_order_cancel",username:r.username,usrChain:r.chain,userID:r.id,dismissCallback:D,headerText:t("PortfolioTabs:cancelOffer",{baseAmount:p,baseSymbol:u.symbol,quoteAmount:b,quoteSymbol:m.symbol}),trxJSON:[{fee_paying_account:r.id,order:w,extensions:[]}]},`Cancelling${p}${u.symbol}for${b}${m.symbol}`):null]})]})]})})})}}):e.jsx("p",{children:t("PortfolioTabs:noOpenOrdersFound")})}),e.jsx(F,{children:e.jsx(h,{onClick:()=>{C(),b(p+1)},children:t("PortfolioTabs:refreshOpenOrdersButton")})})]})}),e.jsx(U,{value:"activity",children:e.jsxs(x,{children:[e.jsxs(j,{children:[e.jsx(y,{children:t("PortfolioTabs:recentBlockchainActivityTitle")}),e.jsx(T,{children:t("PortfolioTabs:recentBlockchainActivityDescription")})]}),e.jsx(E,{className:"space-y-2",children:N&&N.length?e.jsx(L,{height:500,itemCount:N.length,itemSize:145,children:({index:s,style:i})=>{const r=N[s],o=new Date(r.block_data.block_time),l=new Date-o,a=Math.floor(l/1e3/60%60),n=Math.floor(l/1e3/60/60%24),c=`${Math.floor(l/1e3/60/60/24)}d ${n}h ${a}m`;return e.jsx("div",{style:{...i},children:e.jsx(x,{children:e.jsxs("div",{className:"grid grid-cols-7",children:[e.jsx("div",{className:"col-span-5",children:e.jsxs(j,{children:[e.jsx(y,{children:Pe[r.operation_type.toString()]}),e.jsxs(T,{children:[t("PortfolioTabs:operationId"),e.jsx(P,{classnamecontents:"text-blue-500",type:"text",text:` ${r.account_history.operation_id}`,hyperlink:`https://blocksights.info/#/objects/${r.account_history.operation_id}`}),e.jsx("br",{}),t("PortfolioTabs:blockNumber"),e.jsx(P,{classnamecontents:"text-blue-500",type:"text",text:` ${r.block_data.block_num}`,hyperlink:`https://blocksights.info/#/blocks/${r.block_data.block_num}`}),e.jsx("br",{}),t("PortfolioTabs:timeSinceBroadcast",{timeDiff:c})]})]})}),e.jsxs("div",{className:"col-span-2 mt-7",children:[e.jsxs(K,{children:[e.jsx(G,{asChild:!0,children:e.jsx(h,{variant:"outline",children:t("PortfolioTabs:viewOperationButton")})}),e.jsxs(X,{className:"sm:max-w-[425px] bg-white",children:[e.jsxs(Y,{children:[e.jsx(Z,{children:t("PortfolioTabs:operationJsonTitle")}),e.jsx(ee,{children:t("PortfolioTabs:operationJsonDescription")})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx("div",{className:"col-span-1",children:e.jsx(oe,{className:"h-72 rounded-md border",children:e.jsx("pre",{children:JSON.stringify(r.operation_history.op_object,null,2)})})})})]})]}),e.jsxs(K,{children:[e.jsx(G,{asChild:!0,children:e.jsx(h,{variant:"outline",className:"mt-2",children:t("PortfolioTabs:viewAllButton")})}),e.jsxs(X,{className:"sm:max-w-[425px] bg-white",children:[e.jsxs(Y,{children:[e.jsx(Z,{children:t("PortfolioTabs:fullOperationContentsTitle")}),e.jsx(ee,{children:t("PortfolioTabs:fullOperationContentsDescription")})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx("div",{className:"col-span-1",children:e.jsx(oe,{className:"h-72 rounded-md border",children:e.jsx("pre",{children:JSON.stringify(r,null,2)})})})})]})]})]})]})})})}}):e.jsx("p",{children:t("PortfolioTabs:noRecentActivityFound")})}),e.jsx(F,{children:e.jsx(h,{onClick:()=>{_(),A(k+1)},children:t("PortfolioTabs:refreshRecentActivityButton")})})]})})]})})}),e.jsx("div",{className:"grid grid-cols-1 mt-5",children:r&&r.username&&r.username.length?e.jsx(je,{usr:r}):null})]})}export{He as default};