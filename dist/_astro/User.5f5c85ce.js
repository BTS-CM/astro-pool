import{r as o}from"./CurrentUser.c838994d.js";const[r]=o({fetcher:async(s,a)=>{const t=await fetch(`http://localhost:8080/api/getAccountBalances/${s}/${a}`,{method:"GET"});if(!t.ok){console.log("Failed to fetch user balances");return}const e=await t.json();if(e&&e.result)return console.log("Fetched user balances"),e.result}});export{r as c};
