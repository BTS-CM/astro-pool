import{s as a}from"./CurrentUser.7d825758.js";const[c]=a({fetcher:async(s,o)=>{const t=await fetch(`http://localhost:8080/api/getAccountBalances/${s}/${o}`,{method:"GET"});if(!t.ok){console.log("Failed to fetch user balances");return}const e=await t.json();if(e&&e.result)return console.log("Fetched user balances"),e.result}}),[l]=a({fetcher:async(s,o)=>{const t=await fetch(`http://localhost:8080/api/fetchCreditDeals/${s}/${o}`,{method:"GET"});if(!t.ok){console.log("Failed to fetch user credit deals");return}const e=await t.json();if(e&&e.result)return console.log("Fetched user credit deals"),e.result}});export{l as a,c};
