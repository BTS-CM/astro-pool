import{j as t,B as i,D as m,n as x,o as d,p,q as g}from"./CurrentUser.5db6b464.js";import{r as b}from"./index.178a5b5e.js";function w(l){const{hyperlink:e,type:r,text:n,variant:c,classnamecontents:o}=l,[h,s]=b.useState(!1);return["https://blocksights.info/","https://bts.exchange/","https://wallet.btwty.com/","https://ex.xbts.io/","https://kibana.bts.mobi/","https://www.bitsharescan.info/","https://github.com/bitshares/beet"].some(a=>e.startsWith(a))?t.jsxs(t.Fragment,{children:[r==="text"?t.jsx("span",{onClick:()=>s(!0),className:o,children:n}):t.jsx(i,{variant:c,onClick:()=>s(!0),className:o,children:n}),t.jsx(m,{open:h,onOpenChange:a=>{s(a)},children:t.jsxs(x,{className:"sm:max-w-[500px] bg-white",children:[t.jsxs(d,{children:[t.jsx(p,{children:"⚠️ You are about to leave this app!"}),t.jsx(g,{children:"You are about to nagivate to an external website."})]}),t.jsx("h3",{className:"scroll-m-20 text-1xl font-semibold tracking-tight mb-3 mt-1",children:"Do you want to proceed to the following URL?"}),t.jsx("code",{className:"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",children:e}),t.jsx("h3",{className:"scroll-m-20 text-1xl font-semibold tracking-tight mb-3 mt-1",children:"Just checking - are you sure you want to leave?"}),t.jsx("div",{className:"grid grid-cols-1 gap-3",children:t.jsx("a",{href:e,target:"_blank",children:t.jsx(i,{color:"gray",variant:"outline",children:"Open Link"})})})]})})]}):(console.log("Invalid external link"),null)}export{w as E};
