import{$ as r,u as a,j as e,C as t,b as i,c as n,d as c,g as d,f as o}from"./CurrentUser.7d825758.js";import{r as l}from"./index.178a5b5e.js";function h(u){const s=l.useSyncExternalStore(r.subscribe,r.get,()=>!0);return a(s&&s.chain?s.chain:"bitshares"),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container mx-auto mt-5 mb-5",children:[e.jsx("div",{className:"grid grid-cols-1 gap-3",children:e.jsxs(t,{children:[e.jsxs(i,{children:[e.jsx(n,{children:"🫰 Pool stake"}),e.jsx(c,{children:"Stake funds into a liquidity pool to passively earn swap fees."})]}),e.jsx(d,{children:"create form here"})]})}),e.jsx("div",{className:"grid grid-cols-1 mt-5",children:s&&s.username&&s.username.length?e.jsx(o,{usr:s}):null})]})})}export{h as default};
