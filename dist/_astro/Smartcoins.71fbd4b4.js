import{$ as e,u as a,j as r,C as t,b as n,c as i,d as c,g as d,f as l}from"./CurrentUser.7d825758.js";import{r as o}from"./index.178a5b5e.js";function h(m){const s=o.useSyncExternalStore(e.subscribe,e.get,()=>!0);return a(s&&s.chain?s.chain:"bitshares"),r.jsx(r.Fragment,{children:r.jsxs("div",{className:"container mx-auto mt-5 mb-5",children:[r.jsx("div",{className:"grid grid-cols-1 gap-3",children:r.jsxs(t,{children:[r.jsxs(n,{children:[r.jsx(i,{children:"💵 Lend smartcoins"}),r.jsx(c,{children:"Issue collateralized debt"})]}),r.jsx(d,{children:"Create form"})]})}),r.jsx("div",{className:"grid grid-cols-1 mt-5",children:s&&s.username&&s.username.length?r.jsx(l,{usr:s}):null})]})})}export{h as default};
