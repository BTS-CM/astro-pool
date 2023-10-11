import{$ as Ce,u as ns,v as $e,y as Be,w as Ae,x as Fe,j as e,I as w,C as j,b as k,c as v,d as D,g as f,D as ie,k as Pe,B as b,l as oe,m as Te,n as Ee,o as Oe,f as is,i as os,z as cs}from"./CurrentUser.76ee68b2.js";import{r as s}from"./index.40fd2bfc.js";import{u as ds,g as hs,F as ms,a as C,b as $,c as B,d as A,f as N}from"./fuse.esm.f5056299.js";import{h as ce,F as de,c as us,b as Me}from"./common.caf612c1.js";import{T as xs,a as ps,b as V,c as Ie,S as bs}from"./scroll-area.d22b7ba8.js";import{f as he,a as Le,S as js,b as fs,c as gs,d as Ns,e as x,P as _s,M as me,g as ys}from"./MarketAssetCard.ec6b3374.js";function $s(){const g=ds({defaultValues:{account:""}}),[X,H]=s.useState(""),[d,_]=s.useState(""),r=s.useSyncExternalStore(Ce.subscribe,Ce.get,()=>!0);ns(r&&r.chain?r.chain:"bitshares");const y=s.useSyncExternalStore($e.subscribe,$e.get,()=>!0),m=s.useSyncExternalStore(Be.subscribe,Be.get,()=>!0),I=s.useSyncExternalStore(Ae.subscribe,Ae.get,()=>!0),L=s.useSyncExternalStore(Fe.subscribe,Fe.get,()=>!0),[ue,Je]=s.useState(0);s.useEffect(()=>{if(L&&L.parameters){const o=L.parameters.current_fees.parameters.find(t=>t[0]===63);Je(ce(o[1].fee,5))}},[L]);const[K,Re]=s.useState(),[J,xe]=s.useState("asset");s.useEffect(()=>{if(!m||!m.length)return;const l=new hs(m??[],{includeScore:!0,threshold:.2,keys:J==="asset"?["asset_a_symbol","asset_b_symbol"]:["share_asset_symbol"]});Re(l)},[m,J]);const[Y,qe]=s.useState(),[F,G]=s.useState(),[Ue,pe]=s.useState(!1);s.useEffect(()=>{if(K&&Y){const l=K.search(Y);G(l)}},[K,Y]);const be=({index:l,style:o})=>{const t=F[l].item;return e.jsxs("div",{style:{...o},className:"grid grid-cols-12",onClick:()=>{_(t.id),pe(!1),G()},children:[e.jsx("div",{className:"col-span-2",children:t.id}),e.jsx("div",{className:"col-span-3",children:t.share_asset_symbol}),e.jsxs("div",{className:"col-span-3",children:[t.asset_a_symbol," (",t.asset_a_id,")"]}),e.jsxs("div",{className:"col-span-3",children:[t.asset_b_symbol," (",t.asset_b_id,")"]}),e.jsxs("div",{className:"col-span-1",children:[t.taker_fee_percent/100,"%"]})]},`acard-${t.id}`)},je={backgroundColor:"#252526",color:"white"};s.useEffect(()=>{async function l(){if(window.location.search){console.log("Parsing url params");const o=new URLSearchParams(window.location.search),t=Object.fromEntries(o.entries()),i=t&&t.pool?t.pool:null;if(!i||!i.length){console.log("No pool parameter found"),_("1.19.0");return}if(i&!i.includes("1.9.")){console.log("Invalid pool parameters"),_("1.19.0");return}if(!(m&&m.length?m.map(S=>S.id):[]).includes(i)){console.log("Replacing unknown pool with first pool in list"),_("1.19.0");return}_(i)}}m&&m.length&&l()},[m]);const[p,R]=s.useState(0),[E,Q]=s.useState(0),[u,q]=s.useState(),[a,U]=s.useState(""),[n,z]=s.useState("");s.useEffect(()=>{if(m&&d&&y){const l=m.find(i=>i.id===d);q(l);const o=y.find(i=>i.id===l.asset_a_id),t=y.find(i=>i.id===l.asset_b_id);U(o),z(t),R(1)}},[d,y]);const[h,fe]=s.useState();s.useEffect(()=>{async function l(o){const t=await fetch(`http://localhost:8080/api/getObjects/${o}`,{method:"POST",body:JSON.stringify([u.id])});if(!t.ok){console.log("Failed to fetch fee data");return}const i=await t.json();if(i&&i.result&&i.result.length){let c=i.result[0];c.asset_a_symbol=a.symbol,c.asset_a_precision=a.precision,c.asset_b_symbol=n.symbol,c.asset_b_precision=n.precision,c.share_asset_symbol=u.share_asset_symbol,c.readable_balance_a=`${ce(c.balance_a,a.precision)} ${a.symbol}`,c.readable_balance_b=`${ce(c.balance_b,n.precision)} ${n.symbol}`,c.share_asset_details=y.find(S=>S.id===c.share_asset),fe(c)}}r&&r.chain&&u&&l(r.chain)},[r,u]);const[ze,Ve]=s.useState(null),[Xe,He]=s.useState(null),[Ke,Ye]=s.useState(null),[Ge,Qe]=s.useState(null),[We,Ze]=s.useState(null);s.useEffect(()=>{r&&r.id&&a&&n&&u&&(he(r.chain,a.id.replace("1.3.","2.3."),Ve),he(r.chain,n.id.replace("1.3.","2.3."),He),he(r.chain,y.find(l=>l.symbol===u.share_asset_symbol).id.replace("1.3.","2.3."),Ye),a.bitasset_data_id&&Le(r.chain,a.bitasset_data_id,Qe),n.bitasset_data_id&&Le(r.chain,n.bitasset_data_id,Ze))},[r,a,n,u]);const[O,es]=s.useState();s.useEffect(()=>{async function l(o,t){const i=await fetch(`http://localhost:8080/api/getAccountBalances/${o}/${t}`,{method:"GET"});if(!i.ok){console.log("Failed to retrieve user balances");return}const c=await i.json();c&&c.result&&(console.log("Fetched user balances"),es(c.result))}r&&r.id&&a&&n&&l(r.chain,r.id)},[r,a,n]),s.useEffect(()=>{if(a&&n&&h){let l=function(){if(T===0)return 0;if(T>0)return Math.min(Number(ke),Math.ceil(Number(p)*Number(c)*(Number(T)/1e4)))},o=function(){if(le===0)return 0;if(le>0)return Math.min(Number(ve),Math.ceil(Number(p)*Number(te)*(Number(le)/1e4)))},t=function(){return typeof M>"u"&&T>0?Number(T)/1e4:typeof M>"u"&&T===0?0:Number(M)/1e4};console.log("Calculating the amount the user can buy");let i=Number(h.balance_a),c=Number(10**a.precision),S=Number(h.balance_b),te=Number(10**n.precision);const T=a.market_fee_percent,le=n.market_fee_percent,ke=a.max_market_fee,ve=n.max_market_fee,M=h.taker_fee_percent;let De=Number(t()),re;if(a.id===u.asset_a_id){let P=Number(S)-Math.ceil(Number(S)*Number(i)/(Number(i)+(Number(p)*Number(c)-Number(l())))),ne=Number(P)*Number(M)/1e4;re=(Number(P)-Math.floor(Number(ne))-Math.ceil(Math.min(Number(ve),Math.ceil(Number(P)*Number(De)))))/Number(te)}else{let P=Number(i)-Math.ceil(Number(i)*Number(S)/(Number(S)+(Number(p)*Number(te)-Number(o())))),ne=Number(P)*Number(M)/1e4;re=(Number(P)-Math.floor(Number(ne))-Math.ceil(Math.min(Number(ke),Math.ceil(Number(P)*Number(De)))))/Number(c)}Q(re)}},[p,a,n,h]);const[ge,Ne]=s.useState(!1),ss=()=>{ge||(Ne(!0),setTimeout(()=>{Ne(!1)},1e4))},[W,Z]=s.useState(""),[as,ee]=s.useState(),[se,ae]=s.useState(!1);s.useEffect(()=>{if(X){async function l(){ae(!0);const o=[{account:r.id,pool:d,amount_to_sell:{amount:Me(p,a.precision),asset_id:a.id},min_to_receive:{amount:Me(E,n.precision),asset_id:n.id},extensions:[]}];ee(o);const t=await fetch(`http://localhost:8080/api/deeplink/${r.chain}/liquidity_pool_exchange`,{method:"POST",body:JSON.stringify(o)});if(!t.ok){console.log({error:new Error(`${t.status} ${t.statusText}`),msg:"Couldn't generate deeplink."});return}const i=await t.json();i&&i.result&&i.result.generatedDeepLink&&Z(i.result.generatedDeepLink),ae(!1)}l()}},[X,a,n]);const[ts,_e]=s.useState();s.useEffect(()=>{_e(e.jsx(w,{value:E??0,disabled:!0,className:"mb-3"}))},[E]);const[ye,Se]=s.useState(!1),[ls,we]=s.useState("default_pool_key");s.useEffect(()=>{d&&d.length&&window.history.replaceState({},"",`?pool=${d}`),we(`pool_key${Date.now()}`)},[d]);const rs=({index:l,style:o})=>{const t=m[l];return e.jsx(ys,{value:t.id,style:o,children:`${t.id} - ${t.share_asset_symbol} - ${t.asset_a_symbol}:${t.asset_b_symbol}`})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container mx-auto mt-5 mb-5",children:[e.jsx("div",{className:"grid grid-cols-1 gap-3",children:e.jsxs(j,{className:"p-2",children:[e.jsxs(k,{children:[e.jsx(v,{children:"Bitshares Liquidity Pool Exchange"}),e.jsx(D,{children:"Easily swap between Bitshares assets using one of these user created liquidity pools."})]}),e.jsxs(f,{children:[m?null:e.jsx("p",{children:"Loading pool data"}),y?null:e.jsx("p",{children:"Loading asset data"}),m&&y?e.jsxs(e.Fragment,{children:[e.jsx(ms,{...g,children:e.jsxs("form",{onSubmit:()=>{H(!0),Se(!0),event.preventDefault()},children:[e.jsx(C,{control:g.control,name:"account",render:({field:l})=>e.jsxs($,{children:[e.jsx(B,{children:"Account"}),e.jsx(A,{children:e.jsx(w,{disabled:!0,placeholder:"Bitshares account (1.2.x)",className:"mb-3 mt-3",value:`${r.username} (${r.id})`})}),e.jsx(N,{})]})}),e.jsx(C,{control:g.control,name:"pool",render:({field:l})=>e.jsxs($,{children:[e.jsx(B,{children:e.jsxs("div",{className:"grid grid-cols-2 mt-3",children:[e.jsx("div",{className:"mt-1",children:"Liquidity pool"}),e.jsx("div",{className:"text-gray-500 text-right",children:e.jsxs(ie,{open:Ue,onOpenChange:o=>{o||G(),pe(o)},children:[e.jsx(Pe,{asChild:!0,children:e.jsx(b,{className:"h-5 p-3",children:"Search"})}),e.jsxs(oe,{className:"sm:max-w-[900px] bg-white",children:[e.jsxs(Te,{children:[e.jsx(Ee,{children:"Search for a liquidity pool"}),e.jsx(Oe,{children:"Select a search result to proceed with your desired asset swap."})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx("div",{className:"col-span-1",children:e.jsxs(xs,{defaultValue:"asset",children:[e.jsxs(ps,{className:"grid max-w-[400px] grid-cols-2 mb-1 gap-3",children:[J==="asset"?e.jsx(V,{style:je,value:"asset",children:"Swappable assets"}):e.jsx(V,{value:"asset",onClick:()=>xe("asset"),children:"Swappable assets"}),J==="share"?e.jsx(V,{style:je,value:"share",children:"Pool share asset"}):e.jsx(V,{value:"share",onClick:()=>xe("share"),children:"Pool share asset"})]}),e.jsx(w,{name:"assetSearch",placeholder:"Enter search text",className:"mb-3 max-w-[400px]",onChange:o=>{qe(o.target.value)}}),e.jsx(Ie,{value:"share",children:F&&F.length?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsx("div",{className:"col-span-2",children:"ID"}),e.jsx("div",{className:"col-span-3",children:e.jsx("b",{children:"Share asset"})}),e.jsx("div",{className:"col-span-3",children:"Asset A"}),e.jsx("div",{className:"col-span-3",children:"Asset B"}),e.jsx("div",{className:"col-span-1",children:"Taker Fee"})]}),e.jsx(de,{height:400,itemCount:F.length,itemSize:45,className:"w-full",children:be})]}):null}),e.jsx(Ie,{value:"asset",children:F&&F.length?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsx("div",{className:"col-span-2",children:"ID"}),e.jsx("div",{className:"col-span-3",children:"Share asset"}),e.jsx("div",{className:"col-span-3",children:e.jsx("b",{children:"Asset A"})}),e.jsx("div",{className:"col-span-3",children:e.jsx("b",{children:"Asset B"})}),e.jsx("div",{className:"col-span-1",children:"Taker Fee"})]}),e.jsx(de,{height:400,itemCount:F.length,itemSize:45,className:"w-full",children:be})]}):null})]})})})]})]})})]})}),e.jsx(A,{onValueChange:o=>{_(o)},children:e.jsxs(js,{children:[e.jsx(fs,{className:"mb-3",children:e.jsx(gs,{placeholder:u?`${u.id} - ${u.share_asset_symbol} - ${u.asset_a_symbol}:${u.asset_b_symbol}`:"Select a pool.."})}),e.jsx(Ns,{className:"bg-white",children:m&&m.length?e.jsx(de,{height:150,itemCount:m.length,itemSize:35,className:"w-full",initialScrollOffset:m.map(o=>o.id).indexOf(d)*35,children:rs}):null})]},ls)}),e.jsx(N,{})]})}),e.jsx("div",{className:"grid grid-cols-2 gap-5 mt-5 mb-5",children:d?e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsx(f,{children:e.jsx(C,{control:g.control,name:"balanceA",render:({field:l})=>e.jsxs($,{children:[e.jsxs(B,{children:["Swappable ",a.symbol," (",a.id,")"]}),e.jsx(A,{children:h?e.jsx(w,{disabled:!0,placeholder:"0",className:"mb-3 mt-3",value:h.readable_balance_a}):e.jsx(x,{className:"h-4 w-[250px]"})}),e.jsx(N,{})]})})})}),e.jsx(j,{children:e.jsx(f,{children:e.jsx(C,{control:g.control,name:"balanceB",render:({field:l})=>e.jsxs($,{children:[e.jsxs(B,{children:["Swappable ",n.symbol," (",n.id,")"]}),e.jsx(A,{children:h?e.jsx(w,{disabled:!0,placeholder:"0",className:"mb-3 mt-3",value:h.readable_balance_b}):e.jsx(x,{className:"h-4 w-[250px]"})}),e.jsx(N,{})]})})})})]}):null}),d&&d.length?e.jsx(e.Fragment,{children:e.jsx(C,{control:g.control,name:"sellAmount",render:({field:l})=>e.jsxs($,{children:[e.jsx(B,{children:`Amount of ${a?a.symbol:"???"} to swap`}),e.jsx(A,{onChange:o=>{const t=o.target.value;/^[0-9]*\.?[0-9]*$/.test(t)&&R(t)},children:e.jsx(w,{label:`Amount of ${a?a.symbol:"???"} to swap`,value:p,placeholder:p,className:"mb-3"})}),e.jsx(N,{})]})})}):null,p&&h&&h.taker_fee_percent?e.jsx(e.Fragment,{children:e.jsx(C,{control:g.control,name:"marketFee",render:({field:l})=>e.jsxs($,{children:[e.jsx(B,{children:"Pool fee"}),e.jsx(A,{children:e.jsx(w,{disabled:!0,placeholder:"0",className:"mb-3 mt-3",value:`${(h.taker_fee_percent/1e4*p).toFixed(a.precision)} (${a.symbol}) (${h.taker_fee_percent/100}% fee)`})}),e.jsx(N,{})]})})}):null,u?e.jsx(C,{control:g.control,name:"networkFee",render:({field:l})=>e.jsxs($,{children:[e.jsx(B,{children:"Network fee"}),e.jsx(A,{children:e.jsx(w,{disabled:!0,placeholder:`${ue} BTS`,className:"mb-3 mt-3"})}),r.id===r.referrer?e.jsxs(N,{children:["Rebate: ",ue*.8," BTS (vesting)"]}):null,e.jsx(N,{})]})}):null,h?e.jsx(e.Fragment,{children:e.jsx(C,{control:g.control,name:"buyAmount",render:({field:l})=>e.jsxs($,{children:[e.jsx(B,{children:`Amount of ${n?n.symbol:"???"} you'll receive`}),e.jsx(A,{children:ts}),e.jsx(N,{})]})})}):null,!d||!p||!E||se!==!1?e.jsx(b,{className:"mt-5 mb-3",variant:"outline",disabled:!0,type:"submit",children:"Submit"}):e.jsx(b,{className:"mt-5 mb-3",variant:"outline",type:"submit",children:"Submit"})]})}),ye&&X&&W&&e.jsx(ie,{open:ye,onOpenChange:l=>{l||(H(""),Z(""),ee(),_(""),R(0),Q(0),q(),U(""),z(""),we(`pool_key${Date.now()}`)),Se(l)},children:e.jsx(oe,{className:"sm:max-w-[425px] bg-white",children:e.jsxs(e.Fragment,{children:[e.jsxs("h1",{className:"scroll-m-20 text-2xl font-extrabold tracking-tight",children:["Exchanging ",p," ",a.symbol," for"," ",E," ",n.symbol]}),e.jsx("h3",{className:"scroll-m-20 text-1xl font-semibold tracking-tight mb-3 mt-1",children:"Your requested Bitshares pool exchange operation is ready!"}),e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsx(b,{color:"gray",className:"w-full",onClick:()=>{us(JSON.stringify(as))},variant:"outline",children:"Copy operation JSON"}),ge?e.jsx(b,{variant:"outline",disabled:!0,children:"Downloading..."}):e.jsx("a",{href:`data:text/json;charset=utf-8,${W}`,download:"pool_exchange.json",target:"_blank",rel:"noreferrer",onClick:ss,children:e.jsx(b,{variant:"outline",className:"w-full",children:"Download Beet operation JSON"})}),e.jsx("a",{href:`rawbeet://api?chain=BTS&request=${W}`,children:e.jsx(b,{variant:"outline",className:"w-full",children:"Trigger raw Beet deeplink"})})]})]})})}),d&&!se?e.jsx(b,{variant:"outline",mt:"xl",onClick:()=>{const l=a;U(n),z(l)},children:"Swap buy/sell"}):null,d&&se?e.jsx(b,{variant:"outline",mt:"xl",disabled:!0,children:"Swap buy/sell"}):null,d?e.jsx("a",{href:`https://blocksights.info/#/pools/${d}${r.chain!=="bitshares"?"?network=testnet":""}`,target:"_blank",children:e.jsx(b,{variant:"outline",className:"ml-2",children:"Blocksights pool explorer"})}):null,h?e.jsxs(ie,{children:[e.jsx(Pe,{asChild:!0,children:e.jsx(b,{className:"ml-2",variant:"outline",children:"Pool JSON"})}),e.jsxs(oe,{className:"sm:max-w-[550px] bg-white",children:[e.jsxs(Te,{children:[e.jsx(Ee,{children:"Liquidity Pool JSON"}),e.jsx(Oe,{children:"Check out the details returned by the network for this pool"})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx("div",{className:"col-span-1",children:e.jsx(bs,{className:"h-72 rounded-md border",children:e.jsx("pre",{children:JSON.stringify(h,null,2)})})})})]})]}):null]}):null]})]})}),a&&n?e.jsx(_s,{assetA:a.symbol,assetAData:a,assetB:n.symbol,assetBData:n}):null,e.jsxs("div",{className:"grid grid-cols-2 gap-5 mt-5",children:[d?e.jsx("div",{className:"grid grid-cols-1 gap-3",children:O&&h?e.jsxs(e.Fragment,{children:[e.jsx(me,{asset:n.symbol,assetData:n,assetDetails:Xe,bitassetData:We,marketSearch:I,chain:r.chain,usrBalances:O,type:"buy"}),e.jsx(me,{asset:a.symbol,assetData:a,assetDetails:ze,bitassetData:Ge,marketSearch:I,chain:r.chain,usrBalances:O,type:"sell"})]}):e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsxs(k,{className:"pb-2 pt-4",children:[e.jsx(v,{children:"Quote asset"}),e.jsx(D,{className:"text-lg",children:"Loading..."})]}),e.jsx(f,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(x,{className:"h-4 w-[250px]"}),e.jsx(x,{className:"h-4 w-[200px]"}),e.jsx(x,{className:"h-4 w-[250px]"}),e.jsx(x,{className:"h-4 w-[200px]"})]})})]}),e.jsxs(j,{children:[e.jsxs(k,{className:"pb-2 pt-4",children:[e.jsx(v,{children:"Base asset"}),e.jsx(D,{className:"text-lg",children:"Loading..."})]}),e.jsx(f,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(x,{className:"h-4 w-[250px]"}),e.jsx(x,{className:"h-4 w-[200px]"}),e.jsx(x,{className:"h-4 w-[250px]"}),e.jsx(x,{className:"h-4 w-[200px]"})]})})]})]})}):null,e.jsx("div",{className:"grid grid-cols-1 gap-3",children:d&&a&&n?e.jsxs(e.Fragment,{children:[e.jsx("a",{href:`/dex/index.html?market=${a.symbol}_${n.symbol}`,children:e.jsxs(j,{children:[e.jsxs(k,{className:"pb-2 pt-4",children:[e.jsx(v,{children:"Trade on the Dex instead?"}),e.jsxs(D,{className:"text-sm",children:["Market: ",a.symbol,"/",n.symbol]})]}),e.jsx(f,{className:"text-sm pb-2",children:"You can manually create limit orders for trading pairs of your choice on the Bitshares DEX"})]})}),e.jsx("a",{href:`/dex/index.html?market=${u?.share_asset_symbol}_${a.symbol!=="BTS"?"BTS":a.symbol}`,children:e.jsxs(j,{children:[e.jsxs(k,{className:"pb-2 pt-4",children:[e.jsx(v,{children:"Purchase stake in this pool?"}),e.jsxs(D,{className:"text-sm",children:["Share asset: ",u?.share_asset_symbol]})]}),e.jsx(f,{className:"text-sm pb-2",children:"Receive swap fee yield over time by owning a stake in the pool via a market limit order."})]})}),e.jsx("a",{href:`/stake/index.html?pool=${d}`,children:e.jsxs(j,{children:[e.jsxs(k,{className:"pb-2 pt-4",children:[e.jsx(v,{children:"Stake assets in this pool?"}),e.jsxs(D,{className:"text-sm",children:["Share asset: ",u?.share_asset_symbol]})]}),e.jsx(f,{className:"text-sm pb-2",children:"Earn swap fees on assets staked in liquidity pools minus a small pool defined withdrawal fee."})]})}),e.jsx("a",{href:"/borrow/index.html",children:e.jsxs(j,{children:[e.jsxs(k,{className:"pb-2 pt-4",children:[e.jsx(v,{children:"Need to borrow some assets?"}),e.jsxs(D,{className:"text-sm",children:["Borrow ",a.symbol," or ",n.symbol]})]}),e.jsx(f,{className:"text-sm pb-2",children:"DEX users lend assets at user defined rates. Borrow from DEX participants, with user defined rates."})]})}),h&&I&&O?e.jsx(me,{asset:h.share_asset_symbol,assetData:h.share_asset_details,assetDetails:Ke,bitassetData:null,marketSearch:I,chain:r.chain,usrBalances:O,type:"pool"}):e.jsxs(j,{children:[e.jsxs(k,{className:"pb-2 pt-4",children:[e.jsx(v,{children:"Pool share asset"}),e.jsx(D,{className:"text-lg",children:"Loading..."})]}),e.jsx(f,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(x,{className:"h-4 w-[250px]"}),e.jsx(x,{className:"h-4 w-[200px]"}),e.jsx(x,{className:"h-4 w-[250px]"}),e.jsx(x,{className:"h-4 w-[200px]"})]})})]})]}):null})]})]}),r&&r.username&&r.username.length?e.jsx(is,{usr:r,resetCallback:()=>{os(),H(""),_(""),q(),fe(),window.history.replaceState({},"","/pool/index.html"),cs(),R(0),Q(0),q(),U(""),z(""),Z(""),ee(),ae(!1),_e()}}):null]})}export{$s as default};
