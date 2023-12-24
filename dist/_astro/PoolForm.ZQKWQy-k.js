import{I as be,J as pe,u as s,Q as js,S as fs,K as w,T as gs,U as Ns,V as _s,W as ys,P as je}from"./button.GNxhEuHR.js";import{r as l}from"./index.ebYJtNMn.js";import{F as fe}from"./fuse.aCsZfKX4.js";import{u as ge,F as Ne,a as U,b as L,c as O,d as R,f as z,e as V}from"./form.K-qcZ4h1.js";import{F as Ss}from"./index.esm.awlXaKq2.js";import{D as _e,L as X}from"./DeepLinkDialog.ItBmpkBJ.js";import{B as I}from"./badge.4MPjMHVy.js";import{$ as Os,n as Rs,o as Is,s as Js,t as qs,i as Us,j as zs,k as Vs,l as Hs,u as ye,I as J,C as S,b as F,c as P,d as v,m as D,A as Se,f as Fe}from"./CurrentUser.-qj3GEkM.js";import{S as Ks}from"./scroll-area.7HKeB6rs.js";import{M as Fs,S as y}from"./MarketAssetCard.oQxGviqh.js";import{T as Pe}from"./toggle.yvQPfQXw.js";import{S as De,a as ve,b as Te,c as Ce,d as Ae}from"./select.kQzBLqB8.js";import{h as Ps,T as we,a as ke,c as Y,d as Zs,b as Qs}from"./common.8EOjqkfr.js";import{A as Be,a as $e}from"./avatar.My1CVBdg.js";import{d as Ds,e as Ws}from"./Assets.V2CieyEL.js";import{c as Ee}from"./Pools.4tO5mvYd.js";import{b as Me}from"./User.s08ijyOS.js";import{P as Le}from"./PoolDialogs.AI2UUhMB.js";import{E as vs}from"./ExternalLink.dfYCZp39.js";import"./index.JRs5YgGT.js";import"./index.f2GGseSc.js";import"./CardRow.sQhBpZ4E.js";import"./index.J3aFWESX.js";function na(){const{t:e,i18n:Oe}=be(pe.get(),{i18n:je}),k=ge({defaultValues:{account:""}}),[d,B]=l.useState(""),r=l.useSyncExternalStore(Os.subscribe,Os.get,()=>!0),ss=l.useSyncExternalStore(Rs.subscribe,Rs.get,()=>!0),es=l.useSyncExternalStore(Is.subscribe,Is.get,()=>!0),as=l.useSyncExternalStore(Js.subscribe,Js.get,()=>!0),ls=l.useSyncExternalStore(qs.subscribe,qs.get,()=>!0),ts=l.useSyncExternalStore(Us.subscribe,Us.get,()=>!0),rs=l.useSyncExternalStore(zs.subscribe,zs.get,()=>!0),os=l.useSyncExternalStore(Vs.subscribe,Vs.get,()=>!0),is=l.useSyncExternalStore(Hs.subscribe,Hs.get,()=>!0),f=l.useMemo(()=>r&&r.chain?r.chain:"bitshares",[r]);ye(f??"bitshares",["marketSearch","assets","pools","globalParams"]);const N=l.useMemo(()=>f&&(ss||es)?f==="bitshares"?ss:es:[],[ss,es,f]),h=l.useMemo(()=>f&&(as||ls)?f==="bitshares"?as:ls:[],[as,ls,f]),H=l.useMemo(()=>f&&(ts||rs)?f==="bitshares"?ts:rs:[],[ts,rs,f]),K=l.useMemo(()=>f&&(os||is)?f==="bitshares"?os:is:[],[os,is,f]),[Ts,Gs]=l.useState();l.useEffect(()=>{if(K&&K.length){const o=K.find(i=>i[0]===63),n=Ps(o[1].fee,5);Gs(n)}},[K]);const[Z,Cs]=l.useState("asset"),ns=l.useMemo(()=>!h||!h.length?null:new fe(h,{includeScore:!0,threshold:.2,keys:Z==="asset"?["asset_a_symbol","asset_b_symbol"]:["share_asset_symbol"]}),[h,Z]),[Xs,As]=l.useState(!1),[cs,Ys]=l.useState(),[C,ms]=l.useState();l.useEffect(()=>{if(ns&&cs){const o=ns.search(cs);ms(o)}},[ns,cs]);const ws=({index:o,style:n})=>{const i=C[o].item;return s.jsxs("div",{style:{...n},className:"grid grid-cols-12",onClick:()=>{B(i.id),As(!1),ms()},children:[s.jsx("div",{className:"col-span-2",children:i.id}),s.jsx("div",{className:"col-span-3",children:i.share_asset_symbol}),s.jsxs("div",{className:"col-span-3",children:[i.asset_a_symbol," (",i.asset_a_id,")"]}),s.jsxs("div",{className:"col-span-3",children:[i.asset_b_symbol," (",i.asset_b_id,")"]}),s.jsxs("div",{className:"col-span-1",children:[i.taker_fee_percent/100,"%"]})]},`acard-${i.id}`)},ks={backgroundColor:"#252526",color:"white"};l.useEffect(()=>{async function o(){if(window.location.search){const n=new URLSearchParams(window.location.search),i=Object.fromEntries(n.entries()),c=i&&i.pool?i.pool:null;if(!c||!c.length){console.log("Invalid pool parameters"),B("1.19.0");return}if(c&&c.length&&!c.includes("1.19.")){console.log("Invalid pool parameters"),B("1.19.0");return}if(!(h&&h.length?h.map(x=>x.id):[]).includes(c)){console.log("Replacing unknown pool with first pool in list"),B("1.19.0");return}B(c)}}h&&h.length&&o()},[h]);const[g,Bs]=l.useState(0),[m,se]=l.useState(),[a,ds]=l.useState(""),[t,hs]=l.useState(""),[ee,Q]=l.useState(!1),ae=ee?{transition:"transform 0.5s",transform:"rotate(360deg)"}:{};l.useEffect(()=>{if(h&&d&&N){const o=h.find(c=>c.id===d);if(!o){console.log("Invalid pool");return}se(o);const n=N.find(c=>c.id===o.asset_a_id),i=N.find(c=>c.id===o.asset_b_id);ds(n),hs(i),Bs(1)}},[d,h,N]);const[u,le]=l.useState();l.useEffect(()=>{let o;return r&&r.chain&&m&&a&&t&&N&&(o=Ee([r.chain,m.id]).subscribe(({data:i,error:c,loading:_})=>{if(i&&!c&&!_){let x=i;x.asset_a_symbol=a.symbol,x.asset_a_precision=a.precision,x.asset_b_symbol=t.symbol,x.asset_b_precision=t.precision,x.share_asset_symbol=m.share_asset_symbol,x.readable_balance_a=`${Ps(x.balance_a,a.precision)} ${a.symbol}`,x.readable_balance_b=`${Ps(x.balance_b,t.precision)} ${t.symbol}`,x.share_asset_details=N.find(E=>E.id===x.share_asset),le(x)}})),()=>{o&&o()}},[r,m,a,t,N]);const[us,te]=l.useState(null),[xs,re]=l.useState(null),[$s,oe]=l.useState(null),[Es,ie]=l.useState(null),[Ms,ne]=l.useState(null);l.useEffect(()=>{let o,n,i,c,_;if(r&&r.id&&N&&a&&t&&m){o=Ds([r.chain,a.id.replace("1.3.","2.3.")]).subscribe(({data:b,error:j,loading:p})=>{b&&!j&&!p&&te(b)}),n=Ds([r.chain,t.id.replace("1.3.","2.3.")]).subscribe(({data:b,error:j,loading:p})=>{b&&!j&&!p&&re(b)});const T=N.find(b=>b.symbol===m.share_asset_symbol);i=Ds([r.chain,T.id.replace("1.3.","2.3.")]).subscribe(({data:b,error:j,loading:p})=>{b&&!j&&!p&&oe(b)}),a.bitasset_data_id&&(c=Ws([r.chain,a.bitasset_data_id]).subscribe(({data:j,error:p,loading:M})=>{j&&!p&&!M&&ie(j)})),t.bitasset_data_id&&(_=Ws([r.chain,t.bitasset_data_id]).subscribe(({data:j,error:p,loading:M})=>{j&&!p&&!M&&ne(j)}))}return()=>{o&&o(),n&&n(),i&&i(),c&&c(),_&&_()}},[r,a,t,m,N]);const[q,ce]=l.useState();l.useEffect(()=>{let o;return r&&r.id&&a&&t&&(o=Me([r.chain,r.id]).subscribe(({data:i,error:c,loading:_})=>{i&&!c&&!_&&ce(i)})),()=>{o&&o()}},[r,a,t]);const $=l.useMemo(()=>{if(a&&t&&u){let o=function(){if(T===0)return 0;if(T>0)return Math.min(Number(b),Math.ceil(Number(g)*Number(_)*(Number(T)/1e4)))},n=function(){if(G===0)return 0;if(G>0)return Math.min(Number(j),Math.ceil(Number(g)*Number(E)*(Number(G)/1e4)))},i=function(){return typeof p>"u"&&T>0?Number(T)/1e4:typeof p>"u"&&T===0?0:Number(p)/1e4},c=Number(u.balance_a),_=Number(10**a.precision),x=Number(u.balance_b),E=Number(10**t.precision);const T=a.market_fee_percent,G=t.market_fee_percent,b=a.max_market_fee,j=t.max_market_fee,p=u.taker_fee_percent;let M=Number(i()),bs;if(a&&m&&a.id===m.asset_a_id){let A=Number(x)-Math.ceil(Number(x)*Number(c)/(Number(c)+(Number(g)*Number(_)-Number(o())))),ps=Number(A)*Number(p)/1e4;bs=(Number(A)-Math.floor(Number(ps))-Math.ceil(Math.min(Number(j),Math.ceil(Number(A)*Number(M)))))/Number(E)}else{let A=Number(c)-Math.ceil(Number(c)*Number(x)/(Number(x)+(Number(g)*Number(E)-Number(n())))),ps=Number(A)*Number(p)/1e4;bs=(Number(A)-Math.floor(Number(ps))-Math.ceil(Math.min(Number(b),Math.ceil(Number(A)*Number(M)))))/Number(_)}return bs}},[g,a,t,u]),[me,de]=l.useState();l.useEffect(()=>{de(s.jsx(J,{readOnly:!0,value:$??0,disabled:!0,className:"mb-3"}))},[$]);const[W,Ls]=l.useState(!1),[he,ue]=l.useState("default_pool_key");l.useEffect(()=>{d&&d.length&&window.history.replaceState({},"",`?pool=${d}`),ue(`pool_key${Date.now()}`)},[d]);const xe=({index:o,style:n})=>{const i=h[o];return s.jsx(Ae,{value:i.id,style:n,children:`${i.id} - ${i.share_asset_symbol} - ${i.asset_a_symbol}:${i.asset_b_symbol}`})};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"container mx-auto mt-5 mb-5",children:[s.jsx("div",{className:"grid grid-cols-1 gap-3",children:s.jsxs(S,{className:"p-2",children:[s.jsxs(F,{children:[s.jsx(P,{children:e("PoolForm:title")}),s.jsx(v,{children:e("PoolForm:description")})]}),s.jsxs(D,{children:[h?null:s.jsx("p",{children:e("PoolForm:loadingPoolData")}),N?null:s.jsx("p",{children:e("PoolForm:loadingAssetData")}),h&&N?s.jsxs(s.Fragment,{children:[s.jsx(Ne,{...k,children:s.jsxs("form",{onSubmit:()=>{Ls(!0),event.preventDefault()},children:[s.jsx(U,{control:k.control,name:"account",render:({field:o})=>s.jsxs(L,{children:[s.jsx(O,{children:e("PoolForm:accountLabel")})," ",s.jsx(R,{children:s.jsxs("div",{className:"grid grid-cols-8",children:[s.jsx("div",{className:"col-span-1 ml-5",children:r&&r.username?s.jsx(Se,{size:40,name:r.username,extra:"Target",expression:{eye:"normal",mouth:"open"},colors:["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"]}):s.jsx(Be,{children:s.jsx($e,{children:"?"})})}),s.jsx("div",{className:"col-span-7",children:s.jsx(J,{disabled:!0,readOnly:!0,placeholder:"Bitshares account (1.2.x)",className:"mb-3 mt-1",value:`${r.username} (${r.id})`})})]})})]})}),s.jsx(U,{control:k.control,name:"pool",render:({field:o})=>s.jsxs(L,{children:[s.jsx(O,{children:e("PoolForm:liquidityPoolLabel")}),s.jsx(z,{style:{marginTop:"0px"},children:e(u?"PoolForm:foundPoolDetails":"PoolForm:noPoolDetails")}),s.jsx(R,{onChange:n=>{B(n.target.value)},children:s.jsxs("div",{className:"grid grid-cols-5 mt-3",children:[s.jsx("div",{className:"mt-1 col-span-4",children:s.jsxs(De,{children:[s.jsx(ve,{className:"mb-3",children:s.jsx(Te,{placeholder:m?`${m.id} - ${m.share_asset_symbol} - ${m.asset_a_symbol}:${m.asset_b_symbol}`:e("PoolForm:selectPoolPlaceholder")})}),s.jsx(Ce,{className:"bg-white",children:h&&h.length?s.jsx(Ss,{height:150,itemCount:h.length,itemSize:35,className:"w-full",initialScrollOffset:h.map(n=>n.id).indexOf(d)*35,children:xe}):null})]},he)}),s.jsx("div",{className:"text-gray-500 text-right col-span-1 ml-3",children:s.jsxs(js,{open:Xs,onOpenChange:n=>{n||ms(),As(n)},children:[s.jsx(fs,{asChild:!0,children:s.jsx(w,{variant:"outline",className:"h-9 mt-1 p-3 w-full",children:e("PoolForm:searchButton")})}),s.jsxs(gs,{className:"sm:max-w-[900px] bg-white",children:[s.jsxs(Ns,{children:[s.jsx(_s,{children:e("PoolForm:searchDialogTitle")}),s.jsx(ys,{children:e("PoolForm:searchDialogDescription")})]}),s.jsx("div",{className:"grid grid-cols-1",children:s.jsx("div",{className:"col-span-1",children:s.jsxs(we,{defaultValue:"asset",children:[s.jsxs(ke,{className:"grid max-w-[400px] grid-cols-2 mb-1 gap-3",children:[Z==="asset"?s.jsx(Y,{style:ks,value:"asset",children:e("PoolForm:swappableAssetsTab")}):s.jsx(Y,{value:"asset",onClick:()=>Cs("asset"),children:e("PoolForm:swappableAssetsTab")}),Z==="share"?s.jsx(Y,{style:ks,value:"share",children:e("PoolForm:poolShareAssetTab")}):s.jsx(Y,{value:"share",onClick:()=>Cs("share"),children:e("PoolForm:poolShareAssetTab")})]}),s.jsx(J,{name:"assetSearch",placeholder:"Enter search text",className:"mb-3 max-w-[400px]",onChange:n=>{Ys(n.target.value),n.preventDefault(),n.stopPropagation()}}),s.jsx(Zs,{value:"share",children:C&&C.length?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"grid grid-cols-12",children:[s.jsx("div",{className:"col-span-2",children:e("PoolForm:idColumnTitle")}),s.jsx("div",{className:"col-span-3",children:s.jsx("b",{children:e("PoolForm:shareAssetColumnTitle")})}),s.jsx("div",{className:"col-span-3",children:e("PoolForm:assetAColumnTitle")}),s.jsx("div",{className:"col-span-3",children:e("PoolForm:assetBColumnTitle")}),s.jsx("div",{className:"col-span-1",children:e("PoolForm:takerFeeColumnTitle")})]}),s.jsx(Ss,{height:400,itemCount:C.length,itemSize:45,className:"w-full",children:ws})]}):null}),s.jsx(Zs,{value:"asset",children:C&&C.length?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"grid grid-cols-12",children:[s.jsx("div",{className:"col-span-2",children:e("PoolForm:idColumnTitle")}),s.jsx("div",{className:"col-span-3",children:e("PoolForm:shareAssetColumnTitle")}),s.jsx("div",{className:"col-span-3",children:s.jsx("b",{children:e("PoolForm:assetAColumnTitle")})}),s.jsx("div",{className:"col-span-3",children:s.jsx("b",{children:e("PoolForm:assetBColumnTitle")})}),s.jsx("div",{className:"col-span-1",children:e("PoolForm:takerFeeColumnTitle")})]}),s.jsx(Ss,{height:400,itemCount:C.length,itemSize:45,className:"w-full",children:ws})]}):null})]})})})]})]})})]})})]})}),s.jsx("div",{className:"grid grid-cols-11 gap-5 mt-1 mb-1",children:d&&u&&a&&t?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"col-span-5",children:s.jsxs(S,{children:[s.jsx(F,{className:"pb-0",children:s.jsxs(P,{className:"text-sm pt-0",children:[e("PoolForm:swappable")," ",s.jsx(vs,{classnamecontents:"text-blue-500",type:"text",text:a.symbol,hyperlink:`https://blocksights.info/#/assets/${a.id}`})]})}),s.jsx(D,{className:"text-lg mt-0 pt-0",children:u.readable_balance_a.split(" ")[0]})]})}),s.jsx("div",{className:"col-span-1 text-center mt-8",children:s.jsx(Pe,{variant:"outline",onClick:()=>{const o=a;ds(t),hs(o),Q(!0),setTimeout(()=>Q(!1),500)},children:s.jsx("svg",{style:ae,width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})})}),s.jsx("div",{className:"col-span-5",children:s.jsxs(S,{children:[s.jsx(F,{className:"pb-0",children:s.jsxs(P,{className:"text-sm pt-0",children:[e("PoolForm:swappable")," ",s.jsx(vs,{classnamecontents:"text-blue-500",type:"text",text:t.symbol,hyperlink:`https://blocksights.info/#/assets/${t.id}`})]})}),s.jsx(D,{className:"text-lg",children:u.readable_balance_b.split(" ")[0]})]})})]}):null}),d&&d.length?s.jsx(s.Fragment,{children:s.jsxs(L,{children:[s.jsx(O,{children:e("PoolForm:amountToSwap",{symbol:a?a.symbol:"???"})}),s.jsx(z,{style:{marginTop:"0px"},children:e("PoolForm:enterAmountToSwap",{symbolA:a?a.symbol:"???",symbolB:t?t.symbol:"???"})}),s.jsx(R,{onChange:o=>{const n=o.target.value;/^[0-9]*\.?[0-9]*$/.test(n)&&Bs(n)},children:s.jsx("div",{className:"grid grid-cols-2",children:s.jsx("div",{className:"col-span-1",children:s.jsx(J,{label:e("PoolForm:amountToSwap",{symbol:a?a.symbol:"???"}),value:g,placeholder:g,className:"mb-3"})})})}),s.jsx(V,{})]})}):null,u?s.jsx(s.Fragment,{children:s.jsx(U,{control:k.control,name:"buyAmount",render:({field:o})=>s.jsxs(L,{children:[s.jsx(O,{children:e("PoolForm:totalAmount")}),s.jsx(z,{style:{marginTop:"0px"},children:e("PoolForm:totalAmountDescription",{symbolA:a?a.symbol:"???",symbolB:t?t.symbol:"???"})}),s.jsx(R,{children:s.jsx("div",{className:"grid grid-cols-2 mb-3 mt-3",children:s.jsx("div",{className:"col-span-1",children:me})})}),s.jsx(V,{})]})})}):null,g&&u&&u.taker_fee_percent?s.jsx(s.Fragment,{children:s.jsx(U,{control:k.control,name:"poolFee",render:({field:o})=>s.jsxs(L,{children:[s.jsx(O,{children:e("PoolForm:poolFee")}),s.jsx(z,{style:{marginTop:"0px"},children:e("PoolForm:poolFeeDescription")}),s.jsx(R,{children:s.jsx("div",{className:"grid grid-cols-2 mb-3 mt-3",children:s.jsx("div",{className:"col-span-1",children:s.jsx(J,{disabled:!0,readOnly:!0,placeholder:"0",value:`${(u.taker_fee_percent/1e4*g).toFixed(a.precision)} (${a.symbol}) (${u.taker_fee_percent/100}% ${e("PoolForm:fee")})`})})})}),s.jsx(V,{})]})})}):null,m?s.jsx(U,{control:k.control,name:"networkFee",render:({field:o})=>s.jsxs(L,{children:[s.jsx(O,{children:e("PoolForm:networkFee")}),s.jsx(z,{style:{marginTop:"0px"},children:e("PoolForm:networkFeeDescription")}),s.jsx(R,{children:s.jsx("div",{className:"grid grid-cols-2 mb-3 mt-3",children:s.jsx("div",{className:"col-span-1",children:s.jsx(J,{disabled:!0,readOnly:!0,placeholder:`${Ts} ${e("PoolForm:feeCurrency")}`})})})}),r.id===r.referrer?s.jsx(V,{children:e("PoolForm:rebate",{rebate:Ts*.8,currency:"BTS"})}):null,s.jsx(V,{})]})}):null,!d||!g||!$||W!==!1?s.jsx(w,{className:"mt-5 mb-3",variant:"outline",disabled:!0,type:"submit",children:e("PoolForm:submit")}):s.jsx(w,{className:"mt-5 mb-3",variant:"outline",type:"submit",children:e("PoolForm:submit")})]})}),W?s.jsx(_e,{operationName:"liquidity_pool_exchange",username:r.username,usrChain:r.chain,userID:r.id,dismissCallback:Ls,headerText:e("PoolForm:exchangeHeader",{sellAmount:g,symbolA:a.symbol,buyAmount:$,symbolB:t.symbol}),trxJSON:[{account:r.id,pool:d,amount_to_sell:{amount:Qs(g,a.precision),asset_id:a.id},min_to_receive:{amount:Qs($,t.precision),asset_id:t.id},extensions:[]}]},`Exchanging${g}${a.symbol}for${$}${t.symbol}`):null,d&&!W?s.jsx(w,{variant:"outline",mt:"xl",onClick:()=>{const o=a;ds(t),hs(o),Q(!0),setTimeout(()=>Q(!1),500)},children:e("PoolForm:swapBuySell")}):null,d&&W?s.jsx(w,{variant:"outline",mt:"xl",disabled:!0,children:e("PoolForm:swapBuySell")}):null,d?s.jsx(vs,{variant:"outline",classnamecontents:"ml-2",type:"button",text:e("PoolForm:blocksightsPoolExplorer"),hyperlink:`https://blocksights.info/#/pools/${d}${r.chain!=="bitshares"?"?network=testnet":""}`}):null,u?s.jsxs(js,{children:[s.jsx(fs,{asChild:!0,children:s.jsx(w,{className:"ml-2",variant:"outline",children:e("PoolForm:poolJsonButton")})}),s.jsxs(gs,{className:"sm:max-w-[550px] bg-white",children:[s.jsxs(Ns,{children:[s.jsx(_s,{children:e("PoolForm:liquidityPoolJsonTitle")}),s.jsx(ys,{children:e("PoolForm:liquidityPoolJsonDescription")})]}),s.jsx("div",{className:"grid grid-cols-1",children:s.jsx("div",{className:"col-span-1",children:s.jsx(Ks,{className:"h-72 rounded-md border",children:s.jsx("pre",{children:JSON.stringify(u,null,2)})})})})]})]}):null,us&&xs?s.jsxs(js,{children:[s.jsx(fs,{asChild:!0,children:s.jsx(w,{className:"ml-2",variant:"outline",children:e("PoolForm:swappableAssetJsonButton")})}),s.jsxs(gs,{className:"sm:max-w-[550px] bg-white",children:[s.jsxs(Ns,{children:[s.jsx(_s,{children:e("PoolForm:swappableAssetJsonTitle")}),s.jsx(ys,{children:e("PoolForm:swappableAssetJsonDescription")})]}),s.jsx("div",{className:"grid grid-cols-1",children:s.jsx("div",{className:"col-span-1",children:s.jsx(Ks,{className:"h-72 rounded-md border",children:s.jsx("pre",{children:JSON.stringify({assetA:a??"",assetADetails:us??{},aBitassetData:Es??{},assetB:t??"",assetBDetails:xs??{},bBitassetData:Ms??{},poolShareDetails:$s??{}},null,2)})})})})]})]}):null]}):null]})]})}),a&&t?s.jsx(Le,{assetA:a.symbol,assetAData:a,assetB:t.symbol,assetBData:t,chain:r.chain}):null,s.jsxs("div",{className:"grid grid-cols-2 gap-5 mt-5",children:[d?s.jsx("div",{className:"grid grid-cols-1 gap-3",children:q&&u?s.jsxs(s.Fragment,{children:[s.jsx(Fs,{asset:t.symbol,assetData:t,assetDetails:xs,bitassetData:Ms,marketSearch:H,chain:r.chain,usrBalances:q,type:"buy"}),s.jsx(Fs,{asset:a.symbol,assetData:a,assetDetails:us,bitassetData:Es,marketSearch:H,chain:r.chain,usrBalances:q,type:"sell"})]}):s.jsxs(s.Fragment,{children:[s.jsxs(S,{children:[s.jsxs(F,{className:"pb-2 pt-4",children:[s.jsx(P,{children:e("PoolForm:quoteAsset")}),s.jsx(v,{className:"text-lg",children:e("PoolForm:loading")})]}),s.jsx(D,{children:s.jsxs("div",{className:"space-y-2",children:[s.jsx(y,{className:"h-4 w-[250px]"}),s.jsx(y,{className:"h-4 w-[200px]"}),s.jsx(y,{className:"h-4 w-[250px]"}),s.jsx(y,{className:"h-4 w-[200px]"})]})})]}),s.jsxs(S,{children:[s.jsxs(F,{className:"pb-2 pt-4",children:[s.jsx(P,{children:e("PoolForm:baseAsset")}),s.jsx(v,{className:"text-lg",children:e("PoolForm:loading")})]}),s.jsx(D,{children:s.jsxs("div",{className:"space-y-2",children:[s.jsx(y,{className:"h-4 w-[250px]"}),s.jsx(y,{className:"h-4 w-[200px]"}),s.jsx(y,{className:"h-4 w-[250px]"}),s.jsx(y,{className:"h-4 w-[200px]"})]})})]})]})}):null,s.jsx("div",{className:"grid grid-cols-1 gap-3",children:d&&a&&t?s.jsxs(s.Fragment,{children:[s.jsx("a",{href:`/dex/index.html?market=${a.symbol}_${t.symbol}`,children:s.jsxs(S,{children:[s.jsxs(F,{className:"pb-2 pt-4",children:[s.jsx(P,{children:e("PoolForm:tradeOnDex")}),s.jsx(v,{className:"text-sm",children:e("PoolForm:market",{symbolA:a.symbol,symbolB:t.symbol})})]}),s.jsx(D,{className:"text-sm pb-2",children:e("PoolForm:tradeOnDexDescription")})]})}),s.jsx("a",{href:`/dex/index.html?market=${m?.share_asset_symbol}_${a.symbol!=="BTS"?"BTS":a.symbol}`,children:s.jsxs(S,{children:[s.jsxs(F,{className:"pb-2 pt-4",children:[s.jsx(P,{children:e("PoolForm:purchaseStake")}),s.jsx(v,{className:"text-sm",children:e("PoolForm:shareAsset",{shareAsset:m?.share_asset_symbol})})]}),s.jsx(D,{className:"text-sm pb-2",children:e("PoolForm:purchaseStakeDescription")})]})}),s.jsx("a",{href:`/stake/index.html?pool=${d}`,children:s.jsxs(S,{children:[s.jsxs(F,{className:"pb-2 pt-4",children:[s.jsx(P,{children:e("PoolForm:stakeAssets")}),s.jsx(v,{className:"text-sm",children:e("PoolForm:shareAsset",{shareAsset:m?.share_asset_symbol})})]}),s.jsx(D,{className:"text-sm pb-2",children:e("PoolForm:stakeAssetsDescription")})]})}),s.jsxs(S,{children:[s.jsxs(F,{className:"pb-2 pt-4",children:[s.jsx(P,{children:e("PoolForm:borrowAssets")}),s.jsx(v,{className:"text-sm",children:e("PoolForm:borrowAssetsDescription")})]}),s.jsxs(D,{className:"text-sm pb-3",children:[s.jsx(X,{children:e("PoolForm:searchBorrowableAssets")}),s.jsx("br",{}),s.jsx("a",{href:`/borrow/index.html?tab=searchOffers&searchTab=borrow&searchText=${a.symbol}`,children:s.jsx(I,{children:a.symbol})}),s.jsx("a",{href:`/borrow/index.html?tab=searchOffers&searchTab=borrow&searchText=${t.symbol}`,children:s.jsx(I,{className:"ml-2 mt-1 mb-1",children:t.symbol})}),s.jsx("a",{href:`/borrow/index.html?tab=searchOffers&searchTab=borrow&searchText=${m?.share_asset_symbol}`,children:s.jsx(I,{className:"ml-2 mt-1 mb-1",children:m?.share_asset_symbol})}),s.jsx("br",{}),s.jsx(X,{children:e("PoolForm:searchAcceptedCollateral")}),s.jsx("br",{}),s.jsx("a",{href:`/borrow/index.html?tab=searchOffers&searchTab=collateral&searchText=${a.symbol}`,children:s.jsx(I,{children:a.symbol})}),s.jsx("a",{href:`/borrow/index.html?tab=searchOffers&searchTab=collateral&searchText=${t.symbol}`,children:s.jsx(I,{className:"ml-2 mt-1",children:t.symbol})}),s.jsx("a",{href:`/borrow/index.html?tab=searchOffers&searchTab=collateral&searchText=${m?.share_asset_symbol}`,children:s.jsx(I,{className:"ml-2 mt-1",children:m?.share_asset_symbol})})]})]}),u&&H&&q?s.jsx(Fs,{asset:u.share_asset_symbol,assetData:u.share_asset_details,assetDetails:$s,bitassetData:null,marketSearch:H,chain:r.chain,usrBalances:q,type:"pool"}):s.jsxs(S,{children:[s.jsxs(F,{className:"pb-2 pt-4",children:[s.jsx(P,{children:e("PoolForm:poolShareAsset")}),s.jsx(v,{className:"text-lg",children:e("PoolForm:loading")})]}),s.jsx(D,{children:s.jsxs("div",{className:"space-y-2",children:[s.jsx(y,{className:"h-4 w-[250px]"}),s.jsx(y,{className:"h-4 w-[200px]"}),s.jsx(y,{className:"h-4 w-[250px]"}),s.jsx(y,{className:"h-4 w-[200px]"})]})})]})]}):null})]})]}),s.jsx("div",{className:"grid grid-cols-1 mt-5 ml-8 mr-8",children:s.jsxs(S,{children:[s.jsxs(F,{className:"pb-3",children:[s.jsx(P,{children:e("PoolForm:risksTitle")}),s.jsx(v,{children:e("PoolForm:risksDescription")})]}),s.jsxs(D,{children:[s.jsxs("span",{className:"text-sm",children:[s.jsx(X,{className:"mb-0 pb-0 text-lg",children:e("PoolForm:liquidityPoolRisks")}),s.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-1 pl-2",children:[s.jsx("li",{children:e("PoolForm:liquidityPoolRisk1")}),s.jsx("li",{children:e("PoolForm:liquidityPoolRisk2")})]})]}),s.jsxs("span",{className:"text-sm",children:[s.jsx(X,{className:"mb-0 pb-0 text-lg",children:e("PoolForm:swappableAssetRisks")}),s.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-1 pl-2",children:[s.jsx("li",{children:e("PoolForm:swappableAssetRisk1")}),s.jsx("li",{children:e("PoolForm:swappableAssetRisk2",{symbol:a.symbol!=="BTS"?"BTS":a.symbol})}),s.jsx("li",{children:e("PoolForm:swappableAssetRisk3")})]})]})]})]})}),r&&r.username&&r.username.length?s.jsx(Fe,{usr:r}):null]})}export{na as default};
