import{j as e,D as w,h as D,B as k,i as N,I as y,C as F,a as R,b as I,c as T}from"./CurrentUser.ae16506a.js";import{r as o}from"./index.33307c42.js";import{F as B}from"./fuse.a1032ea1.js";import{F as v}from"./index.esm.392f8f2f.js";function P(g){const{assetSymbol:t,assetData:x,storeCallback:p,otherAsset:m,marketSearch:i,type:a,size:l}=g;let c;!i||!i.length?c=[]:c=m?i.filter(s=>s.s!==m&&s.s!==t):i.filter(s=>s.s!==t);const f=new B(c,{includeScore:!0,keys:["id","s","u"]}),[h,j]=o.useState(),[r,d]=o.useState(),[C,u]=o.useState(!1);o.useEffect(()=>{if(h){const s=f.search(h);d(s)}},[h]);const S=({index:s,style:b})=>{const n=r[s];return e.jsx("div",{style:{...b,marginBottom:"10px",paddingRight:"10px"},children:e.jsx(F,{style:{marginBottom:"2px"},onClick:()=>{setTimeout(()=>{p(n.item.s)},0),u(!1)},children:e.jsxs(R,{className:"p-3",children:[e.jsxs(I,{className:"h-3",children:[n.item.s," (",n.item.id,")"]}),e.jsxs(T,{children:["Issued by ",n.item.u]})]})},`acard-${n.item.id}`)})};return e.jsxs(w,{open:C,onOpenChange:s=>{s||d(),u(s)},children:[e.jsx(D,{asChild:!0,children:e.jsxs(k,{variant:"outline",className:`${l&&l==="small"?"h-5 ":""}p-3`,onClick:()=>u(!0),children:[t?null:"Select an asset",!l&&t?"Change asset":null,l&&t&&t.length<12?t:null,l&&t&&t.length>12?x.id:null]})}),e.jsx(N,{className:"sm:max-w-[425px] bg-white",children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"text-2xl font-extrabold tracking-tight",children:t?`Replacing ${t}`:"Selecting a new asset"}),e.jsxs("h4",{className:"text-md font-bold tracking-tight",children:[a?null:"Please search for an asset below",a&&a==="base"?"Please select a new base asset":null,a&&a==="quote"?"Please select a new quote asset":null]}),e.jsx(y,{name:"assetSearch",placeholder:"Search for an asset",onChange:s=>{j(s.target.value)}}),r&&r.length?e.jsx(e.Fragment,{children:e.jsx(v,{height:200,itemCount:r.length,itemSize:70,className:"w-full",children:S})}):null]})})]})}export{P as A};
