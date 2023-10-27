import{r as Ke,$ as be,u as Qe,p as pe,s as je,t as fe,v as Ne,j as e,I as k,C as S,a as B,b as $,c as A,d as w,D as _e,h as ge,B as I,i as ye,k as Se,l as we,m as De,f as Ye,g as Ge,w as We}from"./CurrentUser.ae16506a.js";import{r}from"./index.33307c42.js";import{F as Ze}from"./fuse.a1032ea1.js";import{u as es,F as ss,a as F,b as C,c as P,d as E,e as D}from"./form.40e06cb4.js";import{F as te}from"./index.esm.392f8f2f.js";import{S as as}from"./scroll-area.4aad4e61.js";import{c as le,a as ve,S as j,P as ts,M as re}from"./MarketAssetCard.961737b3.js";import{S as ls,a as rs,b as is,c as ns,d as os}from"./select.ee734b4f.js";import{T as cs,a as ds,b as H,c as ke}from"./tabs.98974958.js";import{h as ie,b as Be}from"./common.6cf182e8.js";import{c as ms}from"./User.254f1cd4.js";import"./index.9dad199e.js";import"./index.6a2b73ba.js";const[hs]=Ke({fetcher:async(y,c)=>{const N=await fetch(`http://localhost:8080/api/getObjects/${y}`,{method:"POST",body:JSON.stringify([c])});if(!N||!N.ok){console.log("Failed to fetch pool details");return}let s;try{s=await N.json()}catch(_){console.log({e:_,response:N});return}if(!s||!s.result){console.log("Failed to fetch pool data");return}if(s&&s.result&&s.result.length)return console.log("Fetched pool details"),s.result[0]}});function vs(){const y=es({defaultValues:{account:""}}),[c,N]=r.useState(""),s=r.useSyncExternalStore(be.subscribe,be.get,()=>!0);Qe(s&&s.chain?s.chain:"bitshares");const _=r.useSyncExternalStore(pe.subscribe,pe.get,()=>!0),h=r.useSyncExternalStore(je.subscribe,je.get,()=>!0),U=r.useSyncExternalStore(fe.subscribe,fe.get,()=>!0),J=r.useSyncExternalStore(Ne.subscribe,Ne.get,()=>!0),[ne,$e]=r.useState(0);r.useEffect(()=>{if(J&&J.parameters){const t=J.find(l=>l[0]===63),n=ie(t[1].fee,5);$e(n)}},[J]);const[K,Ae]=r.useState(),[z,oe]=r.useState("asset");r.useEffect(()=>{if(!h||!h.length)return;const t=new Ze(h??[],{includeScore:!0,threshold:.2,keys:z==="asset"?["asset_a_symbol","asset_b_symbol"]:["share_asset_symbol"]});Ae(t)},[h,z]);const[Q,Fe]=r.useState(),[T,Y]=r.useState(),[Ce,ce]=r.useState(!1);r.useEffect(()=>{if(K&&Q){const t=K.search(Q);Y(t)}},[K,Q]);const de=({index:t,style:n})=>{const l=T[t].item;return e.jsxs("div",{style:{...n},className:"grid grid-cols-12",onClick:()=>{N(l.id),ce(!1),Y()},children:[e.jsx("div",{className:"col-span-2",children:l.id}),e.jsx("div",{className:"col-span-3",children:l.share_asset_symbol}),e.jsxs("div",{className:"col-span-3",children:[l.asset_a_symbol," (",l.asset_a_id,")"]}),e.jsxs("div",{className:"col-span-3",children:[l.asset_b_symbol," (",l.asset_b_id,")"]}),e.jsxs("div",{className:"col-span-1",children:[l.taker_fee_percent/100,"%"]})]},`acard-${l.id}`)},me={backgroundColor:"#252526",color:"white"};r.useEffect(()=>{async function t(){if(window.location.search){console.log("Parsing url params");const n=new URLSearchParams(window.location.search),l=Object.fromEntries(n.entries()),o=l&&l.pool?l.pool:null;if(!o||!o.length){console.log("Invalid pool parameters"),N("1.19.0");return}if(o&&o.length&&!o.includes("1.19.")){console.log("Invalid pool parameters"),N("1.19.0");return}if(!(h&&h.length?h.map(m=>m.id):[]).includes(o)){console.log("Replacing unknown pool with first pool in list"),N("1.19.0");return}N(o)}}h&&h.length&&t()},[h]);const[f,G]=r.useState(0),[u,W]=r.useState(),[a,Z]=r.useState(""),[i,ee]=r.useState("");r.useEffect(()=>{if(h&&c&&_){const t=h.find(o=>o.id===c);W(t);const n=_.find(o=>o.id===t.asset_a_id),l=_.find(o=>o.id===t.asset_b_id);Z(n),ee(l),G(1)}},[c,_]);const[d,he]=r.useState();r.useEffect(()=>{let t;return s&&s.chain&&u&&(t=hs([s.chain,u.id]).subscribe(({data:l,error:o,loading:g})=>{if(l&&!o&&!g){let m=l;m.asset_a_symbol=a.symbol,m.asset_a_precision=a.precision,m.asset_b_symbol=i.symbol,m.asset_b_precision=i.precision,m.share_asset_symbol=u.share_asset_symbol,m.readable_balance_a=`${ie(m.balance_a,a.precision)} ${a.symbol}`,m.readable_balance_b=`${ie(m.balance_b,i.precision)} ${i.symbol}`,m.share_asset_details=_.find(L=>L.id===m.share_asset),he(m)}})),()=>{t&&t()}},[s,u,a,i,_]);const[Pe,Ee]=r.useState(null),[Te,Me]=r.useState(null),[Ie,Oe]=r.useState(null),[Le,Re]=r.useState(null),[qe,Ue]=r.useState(null);r.useEffect(()=>{let t,n,l,o,g;if(s&&s.id&&a&&i&&u){t=le([s.chain,a.id.replace("1.3.","2.3.")]).subscribe(({data:x,error:p,loading:b})=>{x&&!p&&!b&&Ee(x)}),n=le([s.chain,i.id.replace("1.3.","2.3.")]).subscribe(({data:x,error:p,loading:b})=>{x&&!p&&!b&&Me(x)});const v=_.find(x=>x.symbol===u.share_asset_symbol);l=le([s.chain,v.id.replace("1.3.","2.3.")]).subscribe(({data:x,error:p,loading:b})=>{x&&!p&&!b&&Oe(x)}),a.bitasset_data_id&&(o=ve([s.chain,a.bitasset_data_id]).subscribe(({data:p,error:b,loading:R})=>{p&&!b&&!R&&Re(p)})),i.bitasset_data_id&&(g=ve([s.chain,i.bitasset_data_id]).subscribe(({data:p,error:b,loading:R})=>{p&&!b&&!R&&Ue(p)}))}return()=>{t&&t(),n&&n(),l&&l(),o&&o(),g&&g()}},[s,a,i,u,_]);const[q,Je]=r.useState();r.useEffect(()=>{let t;return s&&s.id&&a&&i&&(t=ms([s.chain,s.id]).subscribe(({data:l,error:o,loading:g})=>{l&&!o&&!g&&Je(l)})),()=>{t&&t()}},[s,a,i]);const O=r.useMemo(()=>{if(a&&i&&d){let t=function(){if(v===0)return 0;if(v>0)return Math.min(Number(x),Math.ceil(Number(f)*Number(g)*(Number(v)/1e4)))},n=function(){if(X===0)return 0;if(X>0)return Math.min(Number(p),Math.ceil(Number(f)*Number(L)*(Number(X)/1e4)))},l=function(){return typeof b>"u"&&v>0?Number(v)/1e4:typeof b>"u"&&v===0?0:Number(b)/1e4};console.log("Calculating the amount the user can buy");let o=Number(d.balance_a),g=Number(10**a.precision),m=Number(d.balance_b),L=Number(10**i.precision);const v=a.market_fee_percent,X=i.market_fee_percent,x=a.max_market_fee,p=i.max_market_fee,b=d.taker_fee_percent;let R=Number(l()),se;if(a.id===u.asset_a_id){let M=Number(m)-Math.ceil(Number(m)*Number(o)/(Number(o)+(Number(f)*Number(g)-Number(t())))),ae=Number(M)*Number(b)/1e4;se=(Number(M)-Math.floor(Number(ae))-Math.ceil(Math.min(Number(p),Math.ceil(Number(M)*Number(R)))))/Number(L)}else{let M=Number(o)-Math.ceil(Number(o)*Number(m)/(Number(m)+(Number(f)*Number(L)-Number(n())))),ae=Number(M)*Number(b)/1e4;se=(Number(M)-Math.floor(Number(ae))-Math.ceil(Math.min(Number(x),Math.ceil(Number(M)*Number(R)))))/Number(g)}return se}},[f,a,i,d]),[ze,ue]=r.useState();r.useEffect(()=>{ue(e.jsx(k,{value:O??0,disabled:!0,className:"mb-3"}))},[O]);const[V,xe]=r.useState(!1),[Ve,Xe]=r.useState("default_pool_key");r.useEffect(()=>{c&&c.length&&window.history.replaceState({},"",`?pool=${c}`),Xe(`pool_key${Date.now()}`)},[c]);const He=({index:t,style:n})=>{const l=h[t];return e.jsx(os,{value:l.id,style:n,children:`${l.id} - ${l.share_asset_symbol} - ${l.asset_a_symbol}:${l.asset_b_symbol}`})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container mx-auto mt-5 mb-5",children:[e.jsx("div",{className:"grid grid-cols-1 gap-3",children:e.jsxs(S,{className:"p-2",children:[e.jsxs(B,{children:[e.jsx($,{children:"Bitshares Liquidity Pool Exchange"}),e.jsx(A,{children:"Easily swap between Bitshares assets using one of these user created liquidity pools."})]}),e.jsxs(w,{children:[h?null:e.jsx("p",{children:"Loading pool data"}),_?null:e.jsx("p",{children:"Loading asset data"}),h&&_?e.jsxs(e.Fragment,{children:[e.jsx(ss,{...y,children:e.jsxs("form",{onSubmit:()=>{xe(!0),event.preventDefault()},children:[e.jsx(F,{control:y.control,name:"account",render:({field:t})=>e.jsxs(C,{children:[e.jsx(P,{children:"Account"}),e.jsx(E,{children:e.jsx(k,{disabled:!0,placeholder:"Bitshares account (1.2.x)",className:"mb-3 mt-3",value:`${s.username} (${s.id})`})}),e.jsx(D,{})]})}),e.jsx(F,{control:y.control,name:"pool",render:({field:t})=>e.jsxs(C,{children:[e.jsx(P,{children:e.jsxs("div",{className:"grid grid-cols-2 mt-3",children:[e.jsx("div",{className:"mt-1",children:"Liquidity pool"}),e.jsx("div",{className:"text-gray-500 text-right",children:e.jsxs(_e,{open:Ce,onOpenChange:n=>{n||Y(),ce(n)},children:[e.jsx(ge,{asChild:!0,children:e.jsx(I,{className:"h-5 p-3",children:"Search"})}),e.jsxs(ye,{className:"sm:max-w-[900px] bg-white",children:[e.jsxs(Se,{children:[e.jsx(we,{children:"Search for a liquidity pool"}),e.jsx(De,{children:"Select a search result to proceed with your desired asset swap."})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx("div",{className:"col-span-1",children:e.jsxs(cs,{defaultValue:"asset",children:[e.jsxs(ds,{className:"grid max-w-[400px] grid-cols-2 mb-1 gap-3",children:[z==="asset"?e.jsx(H,{style:me,value:"asset",children:"Swappable assets"}):e.jsx(H,{value:"asset",onClick:()=>oe("asset"),children:"Swappable assets"}),z==="share"?e.jsx(H,{style:me,value:"share",children:"Pool share asset"}):e.jsx(H,{value:"share",onClick:()=>oe("share"),children:"Pool share asset"})]}),e.jsx(k,{name:"assetSearch",placeholder:"Enter search text",className:"mb-3 max-w-[400px]",onChange:n=>{Fe(n.target.value)}}),e.jsx(ke,{value:"share",children:T&&T.length?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsx("div",{className:"col-span-2",children:"ID"}),e.jsx("div",{className:"col-span-3",children:e.jsx("b",{children:"Share asset"})}),e.jsx("div",{className:"col-span-3",children:"Asset A"}),e.jsx("div",{className:"col-span-3",children:"Asset B"}),e.jsx("div",{className:"col-span-1",children:"Taker Fee"})]}),e.jsx(te,{height:400,itemCount:T.length,itemSize:45,className:"w-full",children:de})]}):null}),e.jsx(ke,{value:"asset",children:T&&T.length?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsx("div",{className:"col-span-2",children:"ID"}),e.jsx("div",{className:"col-span-3",children:"Share asset"}),e.jsx("div",{className:"col-span-3",children:e.jsx("b",{children:"Asset A"})}),e.jsx("div",{className:"col-span-3",children:e.jsx("b",{children:"Asset B"})}),e.jsx("div",{className:"col-span-1",children:"Taker Fee"})]}),e.jsx(te,{height:400,itemCount:T.length,itemSize:45,className:"w-full",children:de})]}):null})]})})})]})]})})]})}),e.jsx(E,{onValueChange:n=>{N(n)},children:e.jsxs(ls,{children:[e.jsx(rs,{className:"mb-3",children:e.jsx(is,{placeholder:u?`${u.id} - ${u.share_asset_symbol} - ${u.asset_a_symbol}:${u.asset_b_symbol}`:"Select a pool.."})}),e.jsx(ns,{className:"bg-white",children:h&&h.length?e.jsx(te,{height:150,itemCount:h.length,itemSize:35,className:"w-full",initialScrollOffset:h.map(n=>n.id).indexOf(c)*35,children:He}):null})]},Ve)}),e.jsx(D,{})]})}),e.jsx("div",{className:"grid grid-cols-2 gap-5 mt-5 mb-5",children:c?e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsx(w,{children:e.jsx(F,{control:y.control,name:"balanceA",render:({field:t})=>e.jsxs(C,{children:[e.jsxs(P,{children:["Swappable ",a.symbol," (",a.id,")"]}),e.jsx(E,{children:d?e.jsx(k,{disabled:!0,placeholder:"0",className:"mb-3 mt-3",value:d.readable_balance_a}):e.jsx(j,{className:"h-4 w-[250px]"})}),e.jsx(D,{})]})})})}),e.jsx(S,{children:e.jsx(w,{children:e.jsx(F,{control:y.control,name:"balanceB",render:({field:t})=>e.jsxs(C,{children:[e.jsxs(P,{children:["Swappable ",i.symbol," (",i.id,")"]}),e.jsx(E,{children:d?e.jsx(k,{disabled:!0,placeholder:"0",className:"mb-3 mt-3",value:d.readable_balance_b}):e.jsx(j,{className:"h-4 w-[250px]"})}),e.jsx(D,{})]})})})})]}):null}),c&&c.length?e.jsx(e.Fragment,{children:e.jsx(F,{control:y.control,name:"sellAmount",render:({field:t})=>e.jsxs(C,{children:[e.jsx(P,{children:`Amount of ${a?a.symbol:"???"} to swap`}),e.jsx(E,{onChange:n=>{const l=n.target.value;/^[0-9]*\.?[0-9]*$/.test(l)&&G(l)},children:e.jsx(k,{label:`Amount of ${a?a.symbol:"???"} to swap`,value:f,placeholder:f,className:"mb-3"})}),e.jsx(D,{})]})})}):null,f&&d&&d.taker_fee_percent?e.jsx(e.Fragment,{children:e.jsx(F,{control:y.control,name:"marketFee",render:({field:t})=>e.jsxs(C,{children:[e.jsx(P,{children:"Pool fee"}),e.jsx(E,{children:e.jsx(k,{disabled:!0,placeholder:"0",className:"mb-3 mt-3",value:`${(d.taker_fee_percent/1e4*f).toFixed(a.precision)} (${a.symbol}) (${d.taker_fee_percent/100}% fee)`})}),e.jsx(D,{})]})})}):null,u?e.jsx(F,{control:y.control,name:"networkFee",render:({field:t})=>e.jsxs(C,{children:[e.jsx(P,{children:"Network fee"}),e.jsx(E,{children:e.jsx(k,{disabled:!0,placeholder:`${ne} BTS`,className:"mb-3 mt-3"})}),s.id===s.referrer?e.jsxs(D,{children:["Rebate: ",ne*.8," BTS (vesting)"]}):null,e.jsx(D,{})]})}):null,d?e.jsx(e.Fragment,{children:e.jsx(F,{control:y.control,name:"buyAmount",render:({field:t})=>e.jsxs(C,{children:[e.jsx(P,{children:`Amount of ${i?i.symbol:"???"} you'll receive`}),e.jsx(E,{children:ze}),e.jsx(D,{})]})})}):null,!c||!f||!O||V!==!1?e.jsx(I,{className:"mt-5 mb-3",variant:"outline",disabled:!0,type:"submit",children:"Submit"}):e.jsx(I,{className:"mt-5 mb-3",variant:"outline",type:"submit",children:"Submit"})]})}),V?e.jsx(DeepLinkDialog,{operationName:"liquidity_pool_exchange",username:s.username,usrChain:s.chain,userID:s.id,dismissCallback:xe,headerText:`Exchanging ${f} ${a.symbol} for ${O} ${i.symbol}`,trxJSON:[{account:s.id,pool:c,amount_to_sell:{amount:Be(f,a.precision),asset_id:a.id},min_to_receive:{amount:Be(O,i.precision),asset_id:i.id},extensions:[]}]},`Exchanging${f}${a.symbol}for${O}${i.symbol}`):null,c&&!V?e.jsx(I,{variant:"outline",mt:"xl",onClick:()=>{const t=a;Z(i),ee(t)},children:"Swap buy/sell"}):null,c&&V?e.jsx(I,{variant:"outline",mt:"xl",disabled:!0,children:"Swap buy/sell"}):null,c?e.jsx("a",{href:`https://blocksights.info/#/pools/${c}${s.chain!=="bitshares"?"?network=testnet":""}`,target:"_blank",children:e.jsx(I,{variant:"outline",className:"ml-2",children:"Blocksights pool explorer"})}):null,d?e.jsxs(_e,{children:[e.jsx(ge,{asChild:!0,children:e.jsx(I,{className:"ml-2",variant:"outline",children:"Pool JSON"})}),e.jsxs(ye,{className:"sm:max-w-[550px] bg-white",children:[e.jsxs(Se,{children:[e.jsx(we,{children:"Liquidity Pool JSON"}),e.jsx(De,{children:"Check out the details returned by the network for this pool"})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx("div",{className:"col-span-1",children:e.jsx(as,{className:"h-72 rounded-md border",children:e.jsx("pre",{children:JSON.stringify(d,null,2)})})})})]})]}):null]}):null]})]})}),a&&i?e.jsx(ts,{assetA:a.symbol,assetAData:a,assetB:i.symbol,assetBData:i}):null,e.jsxs("div",{className:"grid grid-cols-2 gap-5 mt-5",children:[c?e.jsx("div",{className:"grid grid-cols-1 gap-3",children:q&&d?e.jsxs(e.Fragment,{children:[e.jsx(re,{asset:i.symbol,assetData:i,assetDetails:Te,bitassetData:qe,marketSearch:U,chain:s.chain,usrBalances:q,type:"buy"}),e.jsx(re,{asset:a.symbol,assetData:a,assetDetails:Pe,bitassetData:Le,marketSearch:U,chain:s.chain,usrBalances:q,type:"sell"})]}):e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsxs(B,{className:"pb-2 pt-4",children:[e.jsx($,{children:"Quote asset"}),e.jsx(A,{className:"text-lg",children:"Loading..."})]}),e.jsx(w,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(j,{className:"h-4 w-[250px]"}),e.jsx(j,{className:"h-4 w-[200px]"}),e.jsx(j,{className:"h-4 w-[250px]"}),e.jsx(j,{className:"h-4 w-[200px]"})]})})]}),e.jsxs(S,{children:[e.jsxs(B,{className:"pb-2 pt-4",children:[e.jsx($,{children:"Base asset"}),e.jsx(A,{className:"text-lg",children:"Loading..."})]}),e.jsx(w,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(j,{className:"h-4 w-[250px]"}),e.jsx(j,{className:"h-4 w-[200px]"}),e.jsx(j,{className:"h-4 w-[250px]"}),e.jsx(j,{className:"h-4 w-[200px]"})]})})]})]})}):null,e.jsx("div",{className:"grid grid-cols-1 gap-3",children:c&&a&&i?e.jsxs(e.Fragment,{children:[e.jsx("a",{href:`/dex/index.html?market=${a.symbol}_${i.symbol}`,children:e.jsxs(S,{children:[e.jsxs(B,{className:"pb-2 pt-4",children:[e.jsx($,{children:"Trade on the Dex instead?"}),e.jsxs(A,{className:"text-sm",children:["Market: ",a.symbol,"/",i.symbol]})]}),e.jsx(w,{className:"text-sm pb-2",children:"You can manually create limit orders for trading pairs of your choice on the Bitshares DEX"})]})}),e.jsx("a",{href:`/dex/index.html?market=${u?.share_asset_symbol}_${a.symbol!=="BTS"?"BTS":a.symbol}`,children:e.jsxs(S,{children:[e.jsxs(B,{className:"pb-2 pt-4",children:[e.jsx($,{children:"Purchase stake in this pool?"}),e.jsxs(A,{className:"text-sm",children:["Share asset: ",u?.share_asset_symbol]})]}),e.jsx(w,{className:"text-sm pb-2",children:"Receive swap fee yield over time by owning a stake in the pool via a market limit order."})]})}),e.jsx("a",{href:`/stake/index.html?pool=${c}`,children:e.jsxs(S,{children:[e.jsxs(B,{className:"pb-2 pt-4",children:[e.jsx($,{children:"Stake assets in this pool?"}),e.jsxs(A,{className:"text-sm",children:["Share asset: ",u?.share_asset_symbol]})]}),e.jsx(w,{className:"text-sm pb-2",children:"Earn swap fees on assets staked in liquidity pools minus a small pool defined withdrawal fee."})]})}),e.jsx("a",{href:"/borrow/index.html",children:e.jsxs(S,{children:[e.jsxs(B,{className:"pb-2 pt-4",children:[e.jsx($,{children:"Need to borrow some assets?"}),e.jsxs(A,{className:"text-sm",children:["Borrow ",a.symbol," or ",i.symbol]})]}),e.jsx(w,{className:"text-sm pb-2",children:"DEX users lend assets at user defined rates. Borrow from DEX participants, with user defined rates."})]})}),d&&U&&q?e.jsx(re,{asset:d.share_asset_symbol,assetData:d.share_asset_details,assetDetails:Ie,bitassetData:null,marketSearch:U,chain:s.chain,usrBalances:q,type:"pool"}):e.jsxs(S,{children:[e.jsxs(B,{className:"pb-2 pt-4",children:[e.jsx($,{children:"Pool share asset"}),e.jsx(A,{className:"text-lg",children:"Loading..."})]}),e.jsx(w,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(j,{className:"h-4 w-[250px]"}),e.jsx(j,{className:"h-4 w-[200px]"}),e.jsx(j,{className:"h-4 w-[250px]"}),e.jsx(j,{className:"h-4 w-[200px]"})]})})]})]}):null})]})]}),s&&s.username&&s.username.length?e.jsx(Ye,{usr:s,resetCallback:()=>{Ge(),N(""),W(),he(),window.history.replaceState({},"","/pool/index.html"),We(),G(0),W(),Z(""),ee(""),setDeeplink(""),setTRXJSON(),ue()}}):null]})}export{vs as default};
