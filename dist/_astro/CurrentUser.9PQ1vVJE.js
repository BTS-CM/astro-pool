import{r as f,c as Ft}from"./index.vR8cGMCg.js";import{u as o,v as se,$ as It,a as bt,b as Ut,_ as Se,e as J,d as Bt,i as Lt,j as zt,s as Ht,n as Kt,o as Vt,k as Yt,I as L,L as Wt,N as Xt,O as qt,P as Gt,Q as Jt,S as Qt}from"./button.py8r9pgQ.js";const X=f.forwardRef((({className:e,...t},n)=>o.jsx("div",{ref:n,className:se("rounded-xl border bg-card text-card-foreground shadow",e),...t})));X.displayName="Card";const q=f.forwardRef((({className:e,...t},n)=>o.jsx("div",{ref:n,className:se("flex flex-col space-y-1.5 p-6",e),...t})));q.displayName="CardHeader";const G=f.forwardRef((({className:e,...t},n)=>o.jsx("h3",{ref:n,className:se("font-semibold leading-none tracking-tight",e),...t})));G.displayName="CardTitle";const te=f.forwardRef((({className:e,...t},n)=>o.jsx("p",{ref:n,className:se("text-sm text-muted-foreground",e),...t})));te.displayName="CardDescription";const ae=f.forwardRef((({className:e,...t},n)=>o.jsx("div",{ref:n,className:se("p-6 pt-0",e),...t})));ae.displayName="CardContent";const ye=f.forwardRef((({className:e,...t},n)=>o.jsx("div",{ref:n,className:se("flex items-center p-6 pt-0",e),...t})));let Ee;ye.displayName="CardFooter";const yt="HoverCard",[St,jr]=It(yt,[bt]),Ve=bt(),[Zt,Ye]=St(yt),en=e=>{const{__scopeHoverCard:t,children:n,open:r,defaultOpen:s,onOpenChange:o,openDelay:a=700,closeDelay:i=300}=e,l=Ve(t),c=f.useRef(0),u=f.useRef(0),d=f.useRef(!1),h=f.useRef(!1),[p=!1,m]=Ht({prop:r,defaultProp:s,onChange:o}),v=f.useCallback((()=>{clearTimeout(u.current),c.current=window.setTimeout((()=>m(!0)),a)}),[a,m]),y=f.useCallback((()=>{clearTimeout(c.current),!d.current&&!h.current&&(u.current=window.setTimeout((()=>m(!1)),i))}),[i,m]),x=f.useCallback((()=>m(!1)),[m]);return f.useEffect((()=>()=>{clearTimeout(c.current),clearTimeout(u.current)}),[]),f.createElement(Zt,{scope:t,open:p,onOpenChange:m,onOpen:v,onClose:y,onDismiss:x,hasSelectionRef:d,isPointerDownOnContentRef:h},f.createElement(Kt,l,n))},tn="HoverCardTrigger",nn=f.forwardRef(((e,t)=>{const{__scopeHoverCard:n,...r}=e,s=Ye(tn,n),o=Ve(n);return f.createElement(Vt,Se({asChild:!0},o),f.createElement(Yt.a,Se({"data-state":s.open?"open":"closed"},r,{ref:t,onPointerEnter:J(e.onPointerEnter,Ce(s.onOpen)),onPointerLeave:J(e.onPointerLeave,Ce(s.onClose)),onFocus:J(e.onFocus,s.onOpen),onBlur:J(e.onBlur,s.onClose),onTouchStart:J(e.onTouchStart,(e=>e.preventDefault()))})))})),rn="HoverCardPortal",[Nr,sn]=St(rn,{forceMount:void 0}),Me="HoverCardContent",on=f.forwardRef(((e,t)=>{const n=sn(Me,e.__scopeHoverCard),{forceMount:r=n.forceMount,...s}=e,o=Ye(Me,e.__scopeHoverCard);return f.createElement(Ut,{present:r||o.open},f.createElement(an,Se({"data-state":o.open?"open":"closed"},s,{onPointerEnter:J(e.onPointerEnter,Ce(o.onOpen)),onPointerLeave:J(e.onPointerLeave,Ce(o.onClose)),ref:t})))})),an=f.forwardRef(((e,t)=>{const{__scopeHoverCard:n,onEscapeKeyDown:r,onPointerDownOutside:s,onFocusOutside:o,onInteractOutside:a,...i}=e,l=Ye(Me,n),c=Ve(n),u=f.useRef(null),d=Bt(t,u),[h,p]=f.useState(!1);return f.useEffect((()=>{if(h){const e=document.body;return Ee=e.style.userSelect||e.style.webkitUserSelect,e.style.userSelect="none",e.style.webkitUserSelect="none",()=>{e.style.userSelect=Ee,e.style.webkitUserSelect=Ee}}}),[h]),f.useEffect((()=>{if(u.current){const e=()=>{p(!1),l.isPointerDownOnContentRef.current=!1,setTimeout((()=>{var e;""!==(null===(e=document.getSelection())||void 0===e?void 0:e.toString())&&(l.hasSelectionRef.current=!0)}))};return document.addEventListener("pointerup",e),()=>{document.removeEventListener("pointerup",e),l.hasSelectionRef.current=!1,l.isPointerDownOnContentRef.current=!1}}}),[l.isPointerDownOnContentRef,l.hasSelectionRef]),f.useEffect((()=>{u.current&&cn(u.current).forEach((e=>e.setAttribute("tabindex","-1")))})),f.createElement(Lt,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:a,onEscapeKeyDown:r,onPointerDownOutside:s,onFocusOutside:J(o,(e=>{e.preventDefault()})),onDismiss:l.onDismiss},f.createElement(zt,Se({},c,i,{onPointerDown:J(i.onPointerDown,(e=>{e.currentTarget.contains(e.target)&&p(!0),l.hasSelectionRef.current=!1,l.isPointerDownOnContentRef.current=!0})),ref:d,style:{...i.style,userSelect:h?"text":void 0,WebkitUserSelect:h?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})))}));function Ce(e){return t=>"touch"===t.pointerType?void 0:e()}function cn(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;n.nextNode();)t.push(n.currentNode);return t}const ln=en,un=nn,Ct=on,fn=ln,dn=un,wt=f.forwardRef((({className:e,align:t="center",sideOffset:n=4,...r},s)=>o.jsx(Ct,{ref:s,align:t,sideOffset:n,className:se("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r})));wt.displayName=Ct.displayName;var R=Uint8Array,ce=Uint16Array,hn=Int32Array,$t=new R([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Tt=new R([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),vn=new R([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Et=function(e,t){for(var n=new ce(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];var s=new hn(n[30]);for(r=1;r<30;++r)for(var o=n[r];o<n[r+1];++o)s[o]=o-n[r]<<5|r;return{b:n,r:s}},jt=Et($t,2),Nt=jt.b,mn=jt.r;Nt[28]=258,mn[258]=28;for(var gn=Et(Tt,0),pn=gn.b,Ae=new ce(32768),$=0;$<32768;++$){var Z=(43690&$)>>1|(21845&$)<<1;Z=(61680&(Z=(52428&Z)>>2|(13107&Z)<<2))>>4|(3855&Z)<<4,Ae[$]=((65280&Z)>>8|(255&Z)<<8)>>1}var fe=function(e,t,n){for(var r=e.length,s=0,o=new ce(t);s<r;++s)e[s]&&++o[e[s]-1];var a,i=new ce(t);for(s=1;s<t;++s)i[s]=i[s-1]+o[s-1]<<1;if(n){a=new ce(1<<t);var l=15-t;for(s=0;s<r;++s)if(e[s])for(var c=s<<4|e[s],u=t-e[s],d=i[e[s]-1]++<<u,h=d|(1<<u)-1;d<=h;++d)a[Ae[d]>>l]=c}else for(a=new ce(r),s=0;s<r;++s)e[s]&&(a[s]=Ae[i[e[s]-1]++]>>15-e[s]);return a},ve=new R(288);for($=0;$<144;++$)ve[$]=8;for($=144;$<256;++$)ve[$]=9;for($=256;$<280;++$)ve[$]=7;for($=280;$<288;++$)ve[$]=8;var kt=new R(32);for($=0;$<32;++$)kt[$]=5;var xn=fe(ve,9,1),bn=fe(kt,5,1),je=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},K=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(7&t)&n},Ne=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(7&t)},yn=function(e){return(e+7)/8|0},We=function(e,t,n){return(null==t||t<0)&&(t=0),(null==n||n>e.length)&&(n=e.length),new R(e.subarray(t,n))},Sn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],B=function(e,t,n){var r=new Error(t||Sn[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,B),!n)throw r;return r},Xe=function(e,t,n,r){var s=e.length,o=r?r.length:0;if(!s||t.f&&!t.l)return n||new R(0);var a=!n,i=a||2!=t.i,l=t.i;a&&(n=new R(3*s));var c=function(e){var t=n.length;if(e>t){var r=new R(Math.max(2*t,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,h=t.b||0,f=t.l,p=t.d,m=t.m,v=t.n,y=8*s;do{if(!f){u=K(e,d,1);var x=K(e,d+1,3);if(d+=3,!x){var g=e[(O=yn(d)+4)-4]|e[O-3]<<8,b=O+g;if(b>s){l&&B(0);break}i&&c(h+g),n.set(e.subarray(O,b),h),t.b=h+=g,t.p=d=8*b,t.f=u;continue}if(1==x)f=xn,p=bn,m=9,v=5;else if(2==x){var w=K(e,d,31)+257,C=K(e,d+10,15)+4,S=w+K(e,d+5,31)+1;d+=14;for(var j=new R(S),k=new R(19),E=0;E<C;++E)k[vn[E]]=K(e,d+3*E,7);d+=3*C;var N=je(k),$=(1<<N)-1,_=fe(k,N,1);for(E=0;E<S;){var O,T=_[K(e,d,$)];if(d+=15&T,(O=T>>4)<16)j[E++]=O;else{var D=0,L=0;for(16==O?(L=3+K(e,d,3),d+=2,D=j[E-1]):17==O?(L=3+K(e,d,7),d+=3):18==O&&(L=11+K(e,d,127),d+=7);L--;)j[E++]=D}}var M=j.subarray(0,w),I=j.subarray(w);m=je(M),v=je(I),f=fe(M,m,1),p=fe(I,v,1)}else B(1);if(d>y){l&&B(0);break}}i&&c(h+131072);for(var z=(1<<m)-1,A=(1<<v)-1,F=d;;F=d){var V=(D=f[Ne(e,d)&z])>>4;if((d+=15&D)>y){l&&B(0);break}if(D||B(2),V<256)n[h++]=V;else{if(256==V){F=d,f=null;break}var P=V-254;if(V>264){var U=$t[E=V-257];P=K(e,d,(1<<U)-1)+Nt[E],d+=U}var X=p[Ne(e,d)&A],q=X>>4;X||B(3),d+=15&X;I=pn[q];if(q>3){U=Tt[q];I+=Ne(e,d)&(1<<U)-1,d+=U}if(d>y){l&&B(0);break}i&&c(h+131072);var G=h+P;if(h<I){var H=o-I,J=Math.min(I,G);for(H+h<0&&B(3);h<J;++h)n[h]=r[H+h]}for(;h<G;++h)n[h]=n[h-I]}}t.l=f,t.p=F,t.b=h,t.f=u,f&&(u=1,t.m=m,t.d=p,t.n=v)}while(!u);return h!=n.length&&a?We(n,0,h):n.subarray(0,h)},Cn=new R(0),wn=function(e){(31!=e[0]||139!=e[1]||8!=e[2])&&B(6,"invalid gzip data");var t=e[3],n=10;4&t&&(n+=2+(e[10]|e[11]<<8));for(var r=(t>>3&1)+(t>>4&1);r>0;r-=!e[n++]);return n+(2&t)},$n=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0},Tn=function(e,t){return(8!=(15&e[0])||e[0]>>4>7||(e[0]<<8|e[1])%31)&&B(6,"invalid zlib data"),(e[1]>>5&1)==+!t&&B(6,"invalid zlib data: "+(32&e[1]?"need":"unexpected")+" dictionary"),2+(e[1]>>3&4)};function En(e,t){return Xe(e,{i:2},t&&t.out,t&&t.dictionary)}function jn(e,t){var n=wn(e);return n+8>e.length&&B(6,"invalid gzip data"),Xe(e.subarray(n,-8),{i:2},t&&t.out||new R($n(e)),t&&t.dictionary)}function Nn(e,t){return Xe(e.subarray(Tn(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}function Re(e,t){return 31==e[0]&&139==e[1]&&8==e[2]?jn(e,t):8!=(15&e[0])||e[0]>>4>7||(e[0]<<8|e[1])%31?En(e,t):Nn(e,t)}var nt=typeof TextEncoder<"u"&&new TextEncoder,De=typeof TextDecoder<"u"&&new TextDecoder,kn=0;try{De.decode(Cn,{stream:!0}),kn=1}catch{}var _n=function(e){for(var t="",n=0;;){var r=e[n++],s=(r>127)+(r>223)+(r>239);if(n+s>e.length)return{s:t,r:We(e,n-1)};s?3==s?(r=((15&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536,t+=String.fromCharCode(55296|r>>10,56320|1023&r)):t+=1&s?String.fromCharCode((31&r)<<6|63&e[n++]):String.fromCharCode((15&r)<<12|(63&e[n++])<<6|63&e[n++]):t+=String.fromCharCode(r)}};function Pe(e,t){if(t){for(var n=new R(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(nt)return nt.encode(e);var s=e.length,o=new R(e.length+(e.length>>1)),a=0,i=function(e){o[a++]=e};for(r=0;r<s;++r){if(a+5>o.length){var l=new R(a+8+(s-r<<1));l.set(o),o=l}var c=e.charCodeAt(r);c<128||t?i(c):c<2048?(i(192|c>>6),i(128|63&c)):c>55295&&c<57344?(i(240|(c=65536+(1047552&c)|1023&e.charCodeAt(++r))>>18),i(128|c>>12&63),i(128|c>>6&63),i(128|63&c)):(i(224|c>>12),i(128|c>>6&63),i(128|63&c))}return We(o,0,a)}function Fe(e,t){if(t){for(var n="",r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}if(De)return De.decode(e);var s=_n(e),o=s.s;return(n=s.r).length&&B(8),o}let ke=0,rt=[];function On(){return ke+=1,()=>{if(ke-=1,0===ke){let e=rt;rt=[];for(let t of e)t()}}}let I=[],Ie=(e,t)=>{let n=[],r={get:()=>(r.lc||r.listen((()=>{}))(),r.value),l:t||0,lc:0,listen:(e,t)=>(r.lc=n.push(e,t||r.l)/2,()=>{let t=n.indexOf(e);~t&&(n.splice(t,2),--r.lc||r.off())}),notify(e){let t=!I.length;for(let t=0;t<n.length;t+=2)I.push(n[t],n[t+1],r.value,e);if(t){for(let e=0;e<I.length;e+=4){let t;for(let n=e+1;!t&&(n+=4)<I.length;)I[n]<I[e+1]&&(t=I.push(I[e],I[e+1],I[e+2],I[e+3]));t||I[e](I[e+2],I[e+3])}I.length=0}},off(){},set(e){r.value!==e&&(r.value=e,r.notify())},subscribe(e,t){let n=r.listen(e,t);return e(r.value),n},value:e};return r};const Mn=0,An=1,Rn=5,me=6,ge=10;let qe=(e,t,n,r)=>(e.events=e.events||{},e.events[n+10]||(e.events[n+10]=r((t=>{e.events[n].reduceRight(((e,t)=>(t(e),e)),{shared:{},...t})}))),e.events[n]=e.events[n]||[],e.events[n].push(t),()=>{let r=e.events[n],s=r.indexOf(t);r.splice(s,1),r.length||(delete e.events[n],e.events[n+10](),delete e.events[n+10])}),Dn=(e,t)=>qe(e,t,0,(t=>{let n=e.listen;return e.listen=r=>(!e.lc&&!e.starting&&(e.starting=!0,t(),delete e.starting),n(r)),()=>{e.listen=n}})),Pn=(e,t)=>qe(e,t,1,(t=>{let n=e.off;return e.off=()=>{t(),n()},()=>{e.off=n}})),Fn=1e3,In=(e,t)=>qe(e,(n=>{let r=t(n);r&&e.events[6].push(r)}),5,(t=>{let n=e.listen;e.listen=(...r)=>(!e.lc&&!e.active&&(e.active=!0,t()),n(...r));let r=e.off;return e.events[6]=[],e.off=()=>{r(),setTimeout((()=>{if(e.active&&!e.lc){e.active=!1;for(let t of e.events[6])t();e.events[6]=[]}}),Fn)},()=>{e.listen=n,e.off=r}}));function Un(e,t,n){let r=new Set([...t,void 0]);return e.listen(((e,t)=>{r.has(t)&&n(e,t)}))}let D=(e={})=>{let t=Ie(e);return t.setKey=function(e,n){typeof n>"u"?e in t.value&&(t.value={...t.value},delete t.value[e],t.notify(e)):t.value[e]!==n&&(t.value={...t.value,[e]:n},t.notify(e))},t},Bn=()=>({emit(e,...t){let n=this.events[e]||[];for(let e=0,r=n.length;e<r;e++)n[e](...t)},events:{},on(e,t){return this.events[e]?.push(t)||(this.events[e]=[t]),()=>{this.events[e]=this.events[e]?.filter((e=>t!==e))}}});const Ln=({cache:e=new Map,fetcher:t,...n}={})=>{const r=Bn();let s=!0;ct("visibilitychange",(()=>{s=!document.hidden,s&&r.emit(ot)})),ct("online",(()=>r.emit(it)));const o=new Map,a=new Map,i=new Map;let l={};const c=async([t,n],o,c,u)=>{var d;if(!s)return;const h=e=>{o.key===t&&(o.set(e),r.emit(_e,t,e,!0))},f=()=>{h({...o.value,...ut,promise:i.get(t)})},{dedupeTime:p=4e3,fetcher:m}={...c,...l},v=lt();if(i.has(t))return void(o.value.loading||f());if(!u){const n=e.get(t);n&&o.value.data!==n&&h({data:n,...ee});const r=a.get(t);if(r&&r+p>v)return}const y=On();try{const r=m(...n);a.set(t,v),i.set(t,r),f();const s=await r;e.set(t,s),h({data:s,...ee}),a.set(t,lt())}catch(e){null==(d=c.onError)||d.call(c,e),h({data:o.value.data,error:e,...ee})}finally{y(),i.delete(t)}},u=t=>{e.delete(t),a.delete(t)},d=(t,n)=>{for(const r of e.keys())Oe(r,t)&&n(r)},h=e=>{d(e,u),r.emit(at,e)},f=(t,n)=>{d(t,(t=>{void 0===n?u(t):e.set(t,n)})),r.emit(_e,t,n)};return[(e,{fetcher:s=t,...a}={})=>{const i=D({...ee}),l={...n,...a,fetcher:s};i._=_t,i.invalidate=()=>{const{key:e}=i;e&&h(e)},i.mutate=e=>{const{key:t}=i;t&&f(t,e)};let u,d,p,m,v,y=[];Dn(i,(()=>{const t=!u;[v,u]=zn(e),m=v.subscribe((e=>{if(e){const[t,n]=e;i.key=t,c([t,n],i,l),d=t,p=n}else i.key=d=p=void 0,i.set({...ee})}));const n=v.get();n&&([d,p]=n,t&&x());const{refetchInterval:s=0,refetchOnFocus:a,refetchOnReconnect:h}=l,f=()=>{d&&c([d,p],i,l)};s>0&&o.set(e,setInterval(f,s)),a&&y.push(r.on(ot,f)),h&&y.push(r.on(it,f)),y.push(r.on(at,(e=>{d&&Oe(d,e)&&c([d,p],i,l,!0)})),r.on(_e,((e,t,n)=>{d&&Oe(d,e)&&i.value!==t&&i.value.data!==t&&i.set(n?t:{data:t,...ee})})))}));const x=()=>{d&&p&&c([d,p],i,l)},g=i.listen;return i.listen=e=>{const t=g(e);return e(i.value),x(),t},Pn(i,(()=>{i.value={...ee},u?.(),y.forEach((e=>e())),y=[],m?.();const t=o.get(e);t&&clearInterval(t)})),i},function(t){const r=async o=>{var a;const i=l.fetcher??t,c=[];try{s.set({error:void 0,data:void 0,mutate:r,...ut});const t=await i({data:o,invalidate:e=>{c.push(e)},getCacheUpdater:(t,n=!0)=>[e=>{f(t,e),n&&c.push(t)},e.get(t)]});return s.setKey("data",t),t}catch(e){null==(a=n?.onError)||a.call(n,e),s.setKey("error",e)}finally{s.setKey("loading",!1),c.forEach(h)}},s=D({mutate:r,...ee});return s.mutate=r,s},{__unsafeOverruleSettings:e=>{console.warn("You should only use __unsafeOverruleSettings in test environment"),l=e},invalidateKeys:h,mutateCache:f}]};function st(e){return"string"==typeof e||"number"==typeof e||!0===e}const zn=e=>{if(st(e))return[Ie([""+e,[e]]),()=>{}];let t=Ie(null),n=[];const r=()=>{n.some((e=>null==e||!1===e))?t.set(null):t.set([n.join(""),n])},s=[];for(let t=0;t<e.length;t++){const o=e[t];st(o)?n.push(o):s.push(o.subscribe((e=>{n[t]=Hn(o)?o.value&&"data"in o.value?o.key:null:e,r()})))}return r(),[t,()=>s.forEach((e=>e()))]};function Hn(e){return e._===_t}const ot=1,it=2,at=3,_e=4,ct=(e,t)=>{typeof window>"u"||addEventListener(e,t)},Oe=(e,t)=>Array.isArray(t)?t.includes(e):"function"==typeof t?t(e):e===t,lt=()=>(new Date).getTime(),_t=Symbol(),ut={loading:!0},ee={loading:!1};function Kn(e,t={}){let n=f.useCallback((n=>t.keys?Un(e,t.keys,n):e.listen(n)),[t.keys,e]),r=e.get.bind(e);return f.useSyncExternalStore(n,r,r)}const Ue=D([]),ft=D([]);function dt(e){return e.map((e=>({id:`1.3.${e.id}`,symbol:e.s,precision:e.p,issuer:`1.2.${e.i}`,market_fee_percent:e.mfp,max_market_fee:e.mmf,max_supply:e.ms})))}function Vn(e){const t=Ue.get();(!t||!t.length)&&Ue.set(dt(e.bitshares));const n=ft.get();(!n||!n.length)&&ft.set(dt(e.bitshares_testnet))}const Be=D([]),ht=D([]);function vt(e){return e.map((e=>({id:`1.19.${e.id}`,asset_a_id:`1.3.${e.a}`,asset_a_symbol:e.as,asset_b_id:`1.3.${e.b}`,asset_b_symbol:e.bs,share_asset_symbol:e.sa,balance_a:e.ba,balance_b:e.bb,taker_fee_percent:e.tfp})))}function Yn(e){const t=Be.get();if(!t||!t.length){const t=vt(e.bitshares);Be.set(t)}const n=ht.get();if(!n||!n.length){const t=vt(e.bitshares_testnet);ht.set(t)}}const Le=D([]),mt=D([]);function Wn(e){const t=Le.get();if(!t||!t.length){const t=e.bitshares;Le.set(t)}const n=mt.get();if(!n||!n.length){const t=e.bitshares_testnet;mt.set(t)}}const ze=D([]),gt=D([]);function Xn(e){const t=ze.get();(!t||!t.length)&&ze.set(e.bitshares);const n=gt.get();(!n||!n.length)&&gt.set(e.bitshares_testnet)}const Ot=D(null),qn=D(null);function Gn(e){Ot.set(e.bitshares),qn.set(e.bitshares_testnet)}const Mt=D([]),Jn=D([]);function Qn(e){Mt.set(e.bitshares),Jn.set(e.bitshares_testnet)}let pt=e=>e,ue={},ne={addEventListener(){},removeEventListener(){}};function Zn(){try{return typeof localStorage<"u"}catch{return!1}}Zn()&&(ue=localStorage);let er={addEventListener(e,t,n){window.addEventListener("storage",t),window.addEventListener("pageshow",n)},removeEventListener(e,t,n){window.removeEventListener("storage",t),window.removeEventListener("pageshow",n)}};function tr(e,t={},n={}){let r=n.encode||pt,s=n.decode||pt,o=D(),a=o.setKey;o.setKey=(t,s)=>{typeof s>"u"?(!1!==n.listen&&ne.perKey&&ne.removeEventListener(e+t,l,c),delete ue[e+t]):(!1!==n.listen&&ne.perKey&&!(t in o.value)&&ne.addEventListener(e+t,l,c),ue[e+t]=r(s)),a(t,s)};let i=o.set;function l(t){t.key?t.key.startsWith(e)&&(null===t.newValue?a(t.key.slice(e.length),void 0):a(t.key.slice(e.length),s(t.newValue))):i({})}function c(){let n={...t};for(let t in ue)t.startsWith(e)&&(n[t.slice(e.length)]=s(ue[t]));o.set(n)}return o.set=function(e){for(let t in e)o.setKey(t,e[t]);for(let t in o.value)t in e||o.setKey(t)},In(o,(()=>{if(c(),!1!==n.listen)return ne.addEventListener(e,l,c),()=>{ne.removeEventListener(e,l,c);for(let t in o.value)ne.removeEventListener(e+t,l,c)}})),o}typeof window<"u"&&(ne=er);const he=D({username:"",id:"",chain:"",referrer:""});function de(e,t,n,r){he.set({username:e,id:t,chain:r,referrer:n});try{At(e,t,n,r)}catch(e){console.log(e)}}const V=tr("storedUsers:",{users:[],lastAccount:[]},{encode:e=>JSON.stringify(e),decode(e){try{return JSON.parse(e)}catch(t){return console.log(t),e}}});function At(e,t,n,r){const s=V.get().users,o={username:e,id:t,referrer:n,chain:r};if(V.setKey("lastAccount",[o]),s.find((e=>e.id===t)))return;const a=[...s,o];V.setKey("users",a)}function nr(e){const t=V.get().users.filter((t=>t.id!==e));V.setKey("users",t);const n=V.get().lastAccount;n&&n.length&&n[0].id===e&&V.setKey("lastAccount",[])}const[rr]=Ln({fetcher:async e=>{const t=e?e.split(","):[],n=[t.includes("marketSearch")&&!ze.get().length?fetch("http://localhost:8080/cache/marketSearch/bitshares",{method:"GET"}):null,t.includes("assets")&&!Ue.get().length?fetch("http://localhost:8080/cache/minAssets/bitshares",{method:"GET"}):null,t.includes("pools")&&!Be.get().length?fetch("http://localhost:8080/cache/minPools/bitshares",{method:"GET"}):null,t.includes("globalParams")&&!Ot.get()?fetch("http://localhost:8080/cache/feeSchedule/bitshares",{method:"GET"}):null,t.includes("offers")&&!Le.get().length?fetch("http://localhost:8080/cache/offers/bitshares",{method:"GET"}):null,t.includes("bitAssetData")&&!Mt.get().length?fetch("http://localhost:8080/cache/bitassets/bitshares",{method:"GET"}):null];return await Promise.all(n)}});async function kr(e,t){const n=f.useMemo((()=>rr([t.join(",")])),[e]),{data:r,loading:s,error:o}=Kn(n);if(f.useEffect((()=>{r&&!s&&!o&&async function(){await Promise.all(r.map((async(e,t)=>{if(!e)return;if(!e.ok)return void console.log("Failed to fetch data");const n=await e.json();if(!n||!n.result)return void console.log("Failed to fetch data");const r=Re(Pe(n.result.bitshares,!0)),s=Re(Pe(n.result.bitshares_testnet,!0)),o={bitshares:JSON.parse(Fe(r)),bitshares_testnet:JSON.parse(Fe(s))};switch(t){case 0:Xn(o);break;case 1:Vn(o);break;case 2:Yn(o);break;case 3:Gn(o);break;case 4:Wn(o);break;case 5:Qn(o)}})))}()}),[r,s,o]),!he||!he.get().username){const t=V.get().users,n=V.get().lastAccount,r=t.find((t=>t.chain===e));if(t&&t.length&&r)if(n&&n.length){const e=n[0];de(e.username,e.id,e.referrer,e.chain)}else r&&de(r.username,r.id,r.referrer,r.chain);else At("null-account","1.2.3","1.2.3","bitshares"),de("null-account","1.2.3","1.2.3","bitshares")}}const Rt=f.forwardRef((({className:e,type:t,...n},r)=>o.jsx("input",{type:t,className:se("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...n})));Rt.displayName="Input";const sr=e=>{const t=f.useRef(e);return f.useEffect((()=>{t.current=e})),t},or=sr,ir=typeof performance<"u"?performance:Date,ar=()=>ir.now();function cr(e,t=30,n=!1){const r=or(e),s=1e3/t,o=f.useRef(0),a=f.useRef(),i=()=>a.current&&clearTimeout(a.current),l=[t,n,r];function c(){o.current=0,i()}return f.useEffect((()=>c),l),f.useCallback((function(){const e=arguments,t=ar(),l=()=>{o.current=t,i(),r.current.apply(null,e)},c=o.current;if(n&&0===c)return l();if(t-c>s){if(c>0)return l();o.current=t}i(),a.current=setTimeout((()=>{l(),o.current=0}),s)}),l)}function lr(e,t,n){const r=f.useState(e);return[r[0],cr(r[1],t,n)]}const ur=e=>{let t=0;for(const n of e)t=(t<<5)-t+n.charCodeAt(0),t&=t;return Math.abs(t)},fr=e=>{const t=e.slice(1),[n,r,s]=[0,2,4].map((e=>parseInt(t.slice(e,e+2),16)));return(299*n+587*r+114*s)/1e3>=128?"#000000":"#FFFFFF"};class re{constructor(e){this._seed=e,(this._seed<=0||this._seed===Number.MAX_VALUE)&&(this._seed=1)}nextDouble(){const e=Math.floor(this._seed/re.q),t=this._seed%re.q;return this._seed=re.a*t-re.r*e,this._seed<=0&&(this._seed+=re.m),Number(this._seed)/re.m}nextInt(e,t){const n=Math.round(t)-Math.round(e);return e+Math.round(n*this.nextDouble())}nextNumber(e,t){return e+(t-e)*this.nextDouble()}nextBoolean(){return this.nextDouble()>=.5}nextChoice(e){if(0===e.length)return;return e[this.nextInt(0,e.length-1)]}nextUnit=(e,t)=>this.nextNumber(t?-e:0,e);static a=16807;static m=2147483647;static q=127773;static r=2836}const O=36,dr=["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"],pe=(e,t)=>({rightEye:e,leftEye:t??e}),He={normal:pe((e=>o.jsx("rect",{x:e.x+e.eyeSpread,y:e.y,width:e.eyeSize,height:2,rx:1,fill:e.eyeColor}))),happy:pe((e=>o.jsx("path",{d:`M${e.x+e.eyeSpread-e.eyeSize},${e.y+e.eyeSize} Q${e.x+e.eyeSpread},${e.y} ${e.x+e.eyeSpread+e.eyeSize},${e.y+e.eyeSize}`,fill:"none",stroke:e.eyeColor,strokeWidth:1,strokeLinecap:"round"}))),sleepy:pe((e=>o.jsx("path",{d:`M${e.x+e.eyeSpread-e.eyeSize},${e.y} Q${e.x+e.eyeSpread},${e.y+e.eyeSize} ${e.x+e.eyeSpread+e.eyeSize},${e.y}`,fill:"none",stroke:e.eyeColor,strokeWidth:1,strokeLinecap:"round"}))),mischief:pe((e=>o.jsx("path",{d:`M${e.x+e.eyeSpread},${e.y} l${e.eyeSize},${e.eyeSize} l-${e.eyeSize},${e.eyeSize}`,fill:"none",stroke:e.eyeColor,strokeWidth:1,strokeLinecap:"round"})),(e=>o.jsx("path",{d:`M${e.x+e.eyeSpread},${e.y} l-${e.eyeSize},${e.eyeSize} l${e.eyeSize},${e.eyeSize}`,fill:"none",stroke:e.eyeColor,strokeWidth:1,strokeLinecap:"round"})))},Dt={smile:e=>o.jsx("path",{d:`M13,${19+e.mouthSpread} a1,0.75 0 0,0 10,0`,fill:e.mouthColor}),open:e=>o.jsx("path",{d:`M15 ${19+e.mouthSpread}c2 1 4 1 6 0`,stroke:e.mouthColor,fill:"none",strokeLinecap:"round"}),surprise:e=>o.jsx("circle",{cx:20,cy:19+e.mouthSpread,r:e.mouthSize,fill:e.mouthColor}),unhappy:e=>o.jsx("path",{d:`M15 ${19+e.mouthSpread}c2 -1 4 -1 6 0`,stroke:e.mouthColor,fill:"none",strokeLinecap:"round"})},hr=e=>{let t="#";for(let n=0;n<6;n++){t+=Math.floor(e.nextUnit(16,!1)).toString(16)}return t};function vr(e,t=dr,n={}){let r=ur(e);const s=new re(r),o=s?hr(s):t[0],a=s.nextUnit(10,!0),i=a<5?a+4:a,l=s.nextUnit(10,!0),c=l<5?l+4:l,u=n.eye??s?.nextChoice(Object.keys(He)),d=n.mouth??s?.nextChoice(Object.keys(Dt));return{wrapperColor:o,faceColor:fr(o),backgroundColor:s.nextChoice(t)??t[1],wrapperTranslateX:i,wrapperTranslateY:c,wrapperRotate:s.nextUnit(360,!1),wrapperScale:1+s.nextUnit(3,!1)/10,eyeSpread:s.nextUnit(5,!1)??0,eyeSize:1.5+(s.nextUnit(1,!1)??0),mouthSpread:s.nextUnit(5,!1)??0,mouthSize:1.5+(s.nextUnit(1,!0)??0),eyeType:u,mouthType:d}}const we=({name:e,extra:t,colors:n,size:r,title:s,square:a,expression:i,...l})=>{const c=f.useMemo((()=>vr(e,n,i)),[e,n,i]),u=f.useId(),[d,h]=lr({mouseX:null,mouseY:null},30),p=e=>{h({mouseX:e.clientX,mouseY:e.clientY})};f.useEffect((()=>(window.addEventListener("mousemove",p),()=>{window.removeEventListener("mousemove",p)})),[]);const[m,v]=f.useState(),[y,x]=f.useState(0),[g,b]=f.useState(0);f.useEffect((()=>{!function(){const n=document.querySelector(`#avatar${t}_${e.replace(".","")}`),{left:r,top:s,width:o,height:a}=n.getBoundingClientRect(),i=r+o/2,l=s+a/2;let c=180*Math.atan2(d.mouseY-l,d.mouseX-i)/Math.PI+90;c||(c=0),c<0&&(c=360+c),0===c&&(c=1),c=parseInt(c.toFixed(0));const u=Math.sqrt(Math.pow(d.mouseX-i,2)+Math.pow(d.mouseY-l,2));v(d.mouseX<=r?"left":"right"),b(u),x(c)}()}),[d]);const[w,C]=f.useState(1);f.useEffect((()=>{y?y>=0&&y<=15?C(15):y>20&&y<=95?C(y):y>95&&y<=180?C(95):y>180&&y<=275?C(275):y>275&&y<345?C(y):y>=345&&y<=360&&C(345):C(15)}),[m,g,y]);const[S,j]=f.useState(!1),[k,E]=f.useState(c.mouthType),[N,$]=f.useState(c.eyeType);f.useEffect((()=>{const e=setInterval((()=>{if(S)return $("sleepy"),void E("surprise");$("sleepy"!==c.eyeType?"sleepy":"normal"),setTimeout((()=>{$(c.eyeType)}),Math.max(100,500*Math.random()))}),Math.max(3e3,1e4*Math.random()));return()=>clearInterval(e)}),[S]);const[_,R]=f.useState();return f.useEffect((()=>{function e(){j(!0)}return d.mouseX&&d.mouseY&&(_&&clearTimeout(_),S&&(j(!1),$(c.eyeType),E(c.mouthType)),R(setTimeout(e,3e4))),()=>{_&&clearTimeout(_)}}),[d]),o.jsxs("svg",{viewBox:"0 0 36 36",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...l,children:[s&&o.jsx("title",{children:s}),o.jsx("mask",{id:u,maskUnits:"userSpaceOnUse",x:0,y:0,width:O,height:O,children:o.jsx("rect",{width:O,height:O,rx:a?void 0:72,fill:"#FFFFFF"})}),o.jsxs("g",{mask:`url(#${u})`,children:[o.jsx("rect",{width:O,height:O,fill:c.backgroundColor}),o.jsx("rect",{x:"0",y:"0",width:O,height:O,transform:`translate(${c.wrapperTranslateX} ${c.wrapperTranslateY}) rotate(${c.wrapperRotate} 18 18) scale(${c.wrapperScale})`,fill:c.wrapperColor,rx:O}),o.jsxs("g",{id:`avatar${t}_${e.replace(".","")}`,transform:`rotate(${"left"===m?w+65:w-65}, 18 18)`,children:[He[N].leftEye({eyeSize:c.eyeSize,eyeSpread:Math.min(g/20,5)*("left"===m?-1:1),eyeColor:c.faceColor,x:20,y:14}),He[N].rightEye({eyeSize:c.eyeSize,eyeSpread:Math.min(g/20,5)*("left"===m?-1:1),eyeColor:c.faceColor,x:14,y:14}),Dt[k]({mouthSpread:Math.min(g/50,5),mouthSize:c.mouthSize,mouthColor:c.faceColor})]})]})]})};function mr(e){const t=f.useSyncExternalStore(he.subscribe,he.get,(()=>!0)),[n,r]=f.useState(),[s,a]=f.useState(),[i,l]=f.useState(),[c,u]=f.useState(),[d,h]=f.useState();f.useEffect((()=>V.subscribe((e=>{h(e.users)}))),[V]);const[p,m]=f.useState(!1),[v,y]=f.useState();async function x(){const e=await fetch(`http://localhost:8080/api/accountLookup/${n}/${i}`,{method:"GET"});if(!e.ok)return console.log({error:new Error(`${e.status} ${e.statusText}`),msg:"Couldn't find account."}),void m(!1);const t=await e.json();if(t&&t.result){const e=Re(Pe(t.result,!0)),n=JSON.parse(Fe(e));return m(!1),void y(n)}m(!1),u("Couldn't find account.")}const g=v?o.jsx(X,{className:"w-1/4",onClick:()=>{de(v.name,v.id,v.referrer,n)},children:o.jsxs("div",{className:"grid grid-cols-4",children:[o.jsx("div",{className:"col-span-1 pt-6 pl-4",children:o.jsx(we,{size:40,name:v.name,extra:"",expression:{eye:"normal",mouth:"open"},colors:["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"]})}),o.jsx("div",{className:"col-span-3",children:o.jsxs(q,{children:[o.jsx(G,{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:v.name}),o.jsx(te,{children:v.id})]})})]})},v.id):null,b=({user:e})=>o.jsxs(fn,{children:[o.jsx(dn,{asChild:!0,children:o.jsx(X,{onClick:()=>{de(e.username,e.id,e.referrer,e.chain)},children:o.jsxs("div",{className:"grid grid-cols-4",children:[o.jsx("div",{className:"col-span-1 pt-6 pl-2",children:o.jsx(we,{size:40,name:e.username,extra:"",expression:{eye:"normal",mouth:"open"},colors:["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"]})}),o.jsx("div",{className:"col-span-3",children:o.jsxs(q,{children:[o.jsx(G,{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.username}),o.jsx(te,{children:e.id})]})})]})})}),o.jsxs(wt,{className:"w-80",children:["Account: ",e.username,o.jsx("br",{}),o.jsx(L,{className:"w-full mt-2 text-bold text-white",variant:"destructive",onClick:()=>{nr(e.id)},children:"Forget this account"})]})]},e.id);return o.jsxs("div",{className:"grid grid-cols-1",children:[n?null:o.jsxs(X,{children:[o.jsxs(q,{children:[o.jsx(G,{children:"⚙️ Select a blockchain to continue"}),o.jsx(te,{children:"Which blockchain do you want to use?"})]}),o.jsxs(ae,{children:[o.jsx(L,{className:"mr-2",onClick:()=>r("bitshares"),children:"Bitshares (BTS)"}),o.jsx(L,{onClick:()=>r("bitshares_testnet"),children:"Bitshares testnet (TEST)"})]})]}),n&&!s?o.jsxs(X,{children:[o.jsxs(q,{children:[o.jsxs(G,{children:["Use a new or existing ","bitshares"===n?"Bitshares":"Bitshares testnet"," ","account?"]}),o.jsx(te,{children:"How do you want to proceed?"})]}),o.jsxs(ae,{children:[o.jsx(L,{className:"mr-2",onClick:()=>a("new"),children:"New account"}),o.jsx(L,{onClick:()=>a("existing"),children:"Existing account"}),o.jsx("br",{}),o.jsx(L,{className:"mt-2",onClick:()=>r(null),children:"Back"})]})]}):null,n&&s&&"new"===s&&!v?o.jsxs(X,{children:[o.jsxs(q,{children:[o.jsx(G,{children:"bitshares"===n?"🔐 Bitshares (BTS)":"🔐 Bitshares testnet (TEST)"}),o.jsx(te,{children:"Enter your Bitshares account name"})]}),o.jsxs(ae,{children:[o.jsx(Rt,{value:i||"",placeholder:"Account name or ID",onKeyDown:e=>{"Enter"===e.key&&!p&&(m(!0),x())},onChange:e=>{/^[a-zA-Z0-9.-]*$/.test(e.target.value)&&(l(e.target.value),u(),y())}}),c?o.jsx("p",{className:"text-red-500 text-xs italic",children:c||"ERROR"}):null]}),o.jsxs(ye,{children:[o.jsx(L,{className:"mr-2",onClick:()=>a(null),children:"Back"}),i&&!p?o.jsx(L,{onClick:()=>x(),children:"Continue"}):o.jsx(L,{disabled:!0,children:"Continue"})]})]}):null,v?o.jsxs(X,{children:[o.jsxs(q,{children:[o.jsx(G,{children:"bitshares"===n?"🔐 Bitshares (BTS) account selection":"🔐 Bitshares testnet (TEST) account selection"}),o.jsx(te,{children:"Proceed with the following account?"})]}),o.jsx(ae,{children:t&&n!==t.chain?o.jsx("a",{href:window.location.pathname,children:g}):g}),o.jsx(ye,{children:o.jsx(L,{variant:"outline",className:"mr-2",onClick:()=>{u(),y()},children:"Go back"})})]}):null,s&&"existing"===s?o.jsxs(X,{children:[o.jsxs(q,{children:[o.jsx(G,{children:"bitshares"===n?"Bitshares (BTS)":"Bitshares testnet (TEST)"}),o.jsx(te,{children:"Select one of your previously used accounts"})]}),o.jsx(ae,{children:o.jsx("div",{className:"grid grid-cols-3 gap-3",children:d.filter((e=>e.chain===n)).length?d.filter((e=>e.chain===n)).map((e=>t&&n!==t.chain?o.jsx("a",{href:window.location.pathname,children:o.jsx(b,{user:e})}):o.jsx(b,{user:e}))):o.jsx("p",{className:"text-red-500 text-xs italic",children:"No accounts found."})})}),o.jsx(ye,{children:o.jsx(L,{className:"mr-2",onClick:()=>a(null),children:"Back"})})]}):null]})}we.displayName="Avatar";var gr=Object.defineProperty,pr=(e,t,n)=>t in e?gr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xe=(e,t,n)=>(pr(e,"symbol"!=typeof t?t+"":t,n),n),Ke=new Map,be=new WeakMap,xt=0,xr=void 0;function br(e){return e?(be.has(e)||(xt+=1,be.set(e,xt.toString())),be.get(e)):"0"}function yr(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?br(e.root):e[t]}`)).toString()}function Sr(e){let t=yr(e),n=Ke.get(t);if(!n){const r=new Map;let s;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&s.some((e=>t.intersectionRatio>=e));e.trackVisibility&&typeof t.isVisible>"u"&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);s=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Ke.set(t,n)}return n}function Cr(e,t,n={},r=xr){if(typeof window.IntersectionObserver>"u"&&void 0!==r){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:s,observer:o,elements:a}=Sr(n);let i=a.get(e)||[];return a.has(e)||a.set(e,i),i.push(t),o.observe(e),function(){i.splice(i.indexOf(t),1),0===i.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),Ke.delete(s))}}function wr(e){return"function"!=typeof e.children}var $r=class extends f.Component{constructor(e){super(e),xe(this,"node",null),xe(this,"_unobserveCb",null),xe(this,"handleNode",(e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),xe(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),wr(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:s,fallbackInView:o}=this.props;this._unobserveCb=Cr(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:s},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"==typeof e){const{inView:t,entry:n}=this.state;return e({inView:t,entry:n,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:s,rootMargin:o,onChange:a,skip:i,trackVisibility:l,delay:c,initialInView:u,fallbackInView:d,...h}=this.props;return f.createElement(t||"div",{ref:this.handleNode,...h},e)}};function _r(e){const{usr:t}=e,[n,r]=Ft.useState(!1);if(!t||!t.id||!t.id.length)return null;const[s,a]=f.useState(!1);return f.useEffect((()=>{t&&t.id&&t.id.length&&a(!1)}),[t]),o.jsx("div",{className:"flex justify-center",children:o.jsxs("div",{className:"grid grid-cols-1 mt-3",children:[o.jsx(X,{className:"w-full",style:{transform:"scale(0.75)"},children:o.jsx(q,{children:o.jsx(G,{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:o.jsxs("div",{className:"grid grid-cols-3",children:[o.jsx("div",{className:"col-span-1 pr-3 pt-3",children:o.jsx($r,{onChange:r,children:n?o.jsx(we,{size:50,name:t.username,extra:"",expression:{eye:"normal",mouth:"open"},colors:["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"]}):null})}),o.jsxs("div",{className:"col-span-2 pl-3",children:[o.jsx("span",{className:"text-xl",children:t.username}),o.jsx("br",{}),o.jsxs("span",{className:"text-sm",children:[t.chain,o.jsx("br",{}),t.id]})]})]})})})},t.id),o.jsxs(Wt,{open:s,onOpenChange:e=>{a(e)},children:[o.jsx(Xt,{asChild:!0,children:o.jsx(L,{className:"h-5 p-3",children:"Switch account/chain"})}),o.jsxs(qt,{className:"sm:max-w-[600px] bg-white",children:[o.jsxs(Gt,{children:[o.jsx(Jt,{children:"Replacing current user"}),o.jsx(Qt,{children:"Select a chain and account to proceed"})]}),o.jsx(mr,{})]})]})]})})}export{he as $,we as A,X as C,fn as H,Rt as I,dn as a,q as b,G as c,te as d,wt as e,_r as f,Mt as g,Jn as h,ze as i,gt as j,ae as k,ye as l,Ue as m,ft as n,Ot as o,qn as p,Re as q,Fe as r,Pe as s,Le as t,kr as u,mt as v,Be as w,ht as x,Ln as y,Kn as z};