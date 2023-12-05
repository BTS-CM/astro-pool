import{y as a,q as c,s as n,r as i}from"./CurrentUser.9PQ1vVJE.js";const[f]=a({fetcher:async(...e)=>{const o=await fetch(`http://localhost:8080/api/getMarketHistory/${e[0]}/${e[1]}/${e[2]}/${e[3]}`,{method:"GET"});if(!o.ok)throw console.log("Failed to fetch market history"),new Error("Failed to fetch market history");const t=await o.json();if(t&&t.result){const r=c(n(t.result,!0));return JSON.parse(i(r))}throw new Error("No market history data")},refetchInterval:3e4}),[p]=a({fetcher:async(...e)=>{const o=await fetch(`http://localhost:8080/api/orderBook/${e[0]}/${e[1]}/${e[2]}`,{method:"GET"});if(!o.ok)throw console.log("Failed to fetch market orders"),new Error("Failed to fetch market orders");const t=await o.json();if(t&&t.result){const r=c(n(t.result,!0));return JSON.parse(i(r))}throw new Error("No market orders data")},refetchInterval:3e4}),[m]=a({fetcher:async e=>{let o;try{o=await fetch(`http://localhost:8080/api/getFeaturedMarkets/${e}`,{method:"GET"})}catch(r){console.log({error:r});return}if(!o.ok){console.log("Failed to fetch featured market data");return}const t=await o.json();if(t&&t.result){const r=c(n(t.result,!0));return JSON.parse(i(r))}},refetchInterval:6e4}),[u]=a({fetcher:async(e,o)=>{const t=await fetch(`http://localhost:8080/api/getObjects/${e}`,{method:"POST",body:JSON.stringify([o])});if(!t.ok){console.log("Failed to fetch limit order data");return}const r=await t.json();if(r&&r.result&&r.result.length){const s=c(n(r.result,!0));return JSON.parse(i(s))[0]}}});export{u as a,p as b,m as c,f as d};
