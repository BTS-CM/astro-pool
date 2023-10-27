import{x as ne,_ as p,M,S as x,O as T,z as E,y as _,E as le,j as C,F as V}from"./CurrentUser.c838994d.js";import{r}from"./index.178a5b5e.js";import{$ as ce}from"./index.cc31bd08.js";import{$ as ae}from"./index.6a2b73ba.js";function se(e,n){return r.useReducer((o,c)=>{const t=n[o][c];return t??o},e)}const k="ScrollArea",[j,De]=ne(k),[ie,v]=j(k),de=r.forwardRef((e,n)=>{const{__scopeScrollArea:o,type:c="hover",dir:t,scrollHideDelay:l=600,...s}=e,[a,d]=r.useState(null),[u,i]=r.useState(null),[b,f]=r.useState(null),[h,S]=r.useState(null),[y,Y]=r.useState(null),[g,L]=r.useState(0),[I,D]=r.useState(0),[z,A]=r.useState(!1),[W,H]=r.useState(!1),m=T(n,P=>d(P)),$=ce(t);return r.createElement(ie,{scope:o,type:c,dir:$,scrollHideDelay:l,scrollArea:a,viewport:u,onViewportChange:i,content:b,onContentChange:f,scrollbarX:h,onScrollbarXChange:S,scrollbarXEnabled:z,onScrollbarXEnabledChange:A,scrollbarY:y,onScrollbarYChange:Y,scrollbarYEnabled:W,onScrollbarYEnabledChange:H,onCornerWidthChange:L,onCornerHeightChange:D},r.createElement(_.div,p({dir:$},s,{ref:m,style:{position:"relative","--radix-scroll-area-corner-width":g+"px","--radix-scroll-area-corner-height":I+"px",...e.style}})))}),fe="ScrollAreaViewport",ue=r.forwardRef((e,n)=>{const{__scopeScrollArea:o,children:c,...t}=e,l=v(fe,o),s=r.useRef(null),a=T(n,s,l.onViewportChange);return r.createElement(r.Fragment,null,r.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),r.createElement(_.div,p({"data-radix-scroll-area-viewport":""},t,{ref:a,style:{overflowX:l.scrollbarXEnabled?"scroll":"hidden",overflowY:l.scrollbarYEnabled?"scroll":"hidden",...e.style}}),r.createElement("div",{ref:l.onContentChange,style:{minWidth:"100%",display:"table"}},c)))}),w="ScrollAreaScrollbar",q=r.forwardRef((e,n)=>{const{forceMount:o,...c}=e,t=v(w,e.__scopeScrollArea),{onScrollbarXEnabledChange:l,onScrollbarYEnabledChange:s}=t,a=e.orientation==="horizontal";return r.useEffect(()=>(a?l(!0):s(!0),()=>{a?l(!1):s(!1)}),[a,l,s]),t.type==="hover"?r.createElement(be,p({},c,{ref:n,forceMount:o})):t.type==="scroll"?r.createElement(he,p({},c,{ref:n,forceMount:o})):t.type==="auto"?r.createElement(G,p({},c,{ref:n,forceMount:o})):t.type==="always"?r.createElement(B,p({},c,{ref:n})):null}),be=r.forwardRef((e,n)=>{const{forceMount:o,...c}=e,t=v(w,e.__scopeScrollArea),[l,s]=r.useState(!1);return r.useEffect(()=>{const a=t.scrollArea;let d=0;if(a){const u=()=>{window.clearTimeout(d),s(!0)},i=()=>{d=window.setTimeout(()=>s(!1),t.scrollHideDelay)};return a.addEventListener("pointerenter",u),a.addEventListener("pointerleave",i),()=>{window.clearTimeout(d),a.removeEventListener("pointerenter",u),a.removeEventListener("pointerleave",i)}}},[t.scrollArea,t.scrollHideDelay]),r.createElement(M,{present:o||l},r.createElement(G,p({"data-state":l?"visible":"hidden"},c,{ref:n})))}),he=r.forwardRef((e,n)=>{const{forceMount:o,...c}=e,t=v(w,e.__scopeScrollArea),l=e.orientation==="horizontal",s=X(()=>d("SCROLL_END"),100),[a,d]=se("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return r.useEffect(()=>{if(a==="idle"){const u=window.setTimeout(()=>d("HIDE"),t.scrollHideDelay);return()=>window.clearTimeout(u)}},[a,t.scrollHideDelay,d]),r.useEffect(()=>{const u=t.viewport,i=l?"scrollLeft":"scrollTop";if(u){let b=u[i];const f=()=>{const h=u[i];b!==h&&(d("SCROLL"),s()),b=h};return u.addEventListener("scroll",f),()=>u.removeEventListener("scroll",f)}},[t.viewport,l,d,s]),r.createElement(M,{present:o||a!=="hidden"},r.createElement(B,p({"data-state":a==="hidden"?"hidden":"visible"},c,{ref:n,onPointerEnter:x(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:x(e.onPointerLeave,()=>d("POINTER_LEAVE"))})))}),G=r.forwardRef((e,n)=>{const o=v(w,e.__scopeScrollArea),{forceMount:c,...t}=e,[l,s]=r.useState(!1),a=e.orientation==="horizontal",d=X(()=>{if(o.viewport){const u=o.viewport.offsetWidth<o.viewport.scrollWidth,i=o.viewport.offsetHeight<o.viewport.scrollHeight;s(a?u:i)}},10);return R(o.viewport,d),R(o.content,d),r.createElement(M,{present:c||l},r.createElement(B,p({"data-state":l?"visible":"hidden"},t,{ref:n})))}),B=r.forwardRef((e,n)=>{const{orientation:o="vertical",...c}=e,t=v(w,e.__scopeScrollArea),l=r.useRef(null),s=r.useRef(0),[a,d]=r.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=Z(a.viewport,a.content),i={...c,sizes:a,onSizesChange:d,hasThumb:u>0&&u<1,onThumbChange:f=>l.current=f,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:f=>s.current=f};function b(f,h){return Ee(f,s.current,a,h)}return o==="horizontal"?r.createElement(me,p({},i,{ref:n,onThumbPositionChange:()=>{if(t.viewport&&l.current){const f=t.viewport.scrollLeft,h=F(f,a,t.dir);l.current.style.transform=`translate3d(${h}px, 0, 0)`}},onWheelScroll:f=>{t.viewport&&(t.viewport.scrollLeft=f)},onDragScroll:f=>{t.viewport&&(t.viewport.scrollLeft=b(f,t.dir))}})):o==="vertical"?r.createElement(pe,p({},i,{ref:n,onThumbPositionChange:()=>{if(t.viewport&&l.current){const f=t.viewport.scrollTop,h=F(f,a);l.current.style.transform=`translate3d(0, ${h}px, 0)`}},onWheelScroll:f=>{t.viewport&&(t.viewport.scrollTop=f)},onDragScroll:f=>{t.viewport&&(t.viewport.scrollTop=b(f))}})):null}),me=r.forwardRef((e,n)=>{const{sizes:o,onSizesChange:c,...t}=e,l=v(w,e.__scopeScrollArea),[s,a]=r.useState(),d=r.useRef(null),u=T(n,d,l.onScrollbarXChange);return r.useEffect(()=>{d.current&&a(getComputedStyle(d.current))},[d]),r.createElement(K,p({"data-orientation":"horizontal"},t,{ref:u,sizes:o,style:{bottom:0,left:l.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:l.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":O(o)+"px",...e.style},onThumbPointerDown:i=>e.onThumbPointerDown(i.x),onDragScroll:i=>e.onDragScroll(i.x),onWheelScroll:(i,b)=>{if(l.viewport){const f=l.viewport.scrollLeft+i.deltaX;e.onWheelScroll(f),re(f,b)&&i.preventDefault()}},onResize:()=>{d.current&&l.viewport&&s&&c({content:l.viewport.scrollWidth,viewport:l.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:N(s.paddingLeft),paddingEnd:N(s.paddingRight)}})}}))}),pe=r.forwardRef((e,n)=>{const{sizes:o,onSizesChange:c,...t}=e,l=v(w,e.__scopeScrollArea),[s,a]=r.useState(),d=r.useRef(null),u=T(n,d,l.onScrollbarYChange);return r.useEffect(()=>{d.current&&a(getComputedStyle(d.current))},[d]),r.createElement(K,p({"data-orientation":"vertical"},t,{ref:u,sizes:o,style:{top:0,right:l.dir==="ltr"?0:void 0,left:l.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":O(o)+"px",...e.style},onThumbPointerDown:i=>e.onThumbPointerDown(i.y),onDragScroll:i=>e.onDragScroll(i.y),onWheelScroll:(i,b)=>{if(l.viewport){const f=l.viewport.scrollTop+i.deltaY;e.onWheelScroll(f),re(f,b)&&i.preventDefault()}},onResize:()=>{d.current&&l.viewport&&s&&c({content:l.viewport.scrollHeight,viewport:l.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:N(s.paddingTop),paddingEnd:N(s.paddingBottom)}})}}))}),[Se,J]=j(w),K=r.forwardRef((e,n)=>{const{__scopeScrollArea:o,sizes:c,hasThumb:t,onThumbChange:l,onThumbPointerUp:s,onThumbPointerDown:a,onThumbPositionChange:d,onDragScroll:u,onWheelScroll:i,onResize:b,...f}=e,h=v(w,o),[S,y]=r.useState(null),Y=T(n,m=>y(m)),g=r.useRef(null),L=r.useRef(""),I=h.viewport,D=c.content-c.viewport,z=E(i),A=E(d),W=X(b,10);function H(m){if(g.current){const $=m.clientX-g.current.left,P=m.clientY-g.current.top;u({x:$,y:P})}}return r.useEffect(()=>{const m=$=>{const P=$.target;S?.contains(P)&&z($,D)};return document.addEventListener("wheel",m,{passive:!1}),()=>document.removeEventListener("wheel",m,{passive:!1})},[I,S,D,z]),r.useEffect(A,[c,A]),R(S,W),R(h.content,W),r.createElement(Se,{scope:o,scrollbar:S,hasThumb:t,onThumbChange:E(l),onThumbPointerUp:E(s),onThumbPositionChange:A,onThumbPointerDown:E(a)},r.createElement(_.div,p({},f,{ref:Y,style:{position:"absolute",...f.style},onPointerDown:x(e.onPointerDown,m=>{m.button===0&&(m.target.setPointerCapture(m.pointerId),g.current=S.getBoundingClientRect(),L.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",h.viewport&&(h.viewport.style.scrollBehavior="auto"),H(m))}),onPointerMove:x(e.onPointerMove,H),onPointerUp:x(e.onPointerUp,m=>{const $=m.target;$.hasPointerCapture(m.pointerId)&&$.releasePointerCapture(m.pointerId),document.body.style.webkitUserSelect=L.current,h.viewport&&(h.viewport.style.scrollBehavior=""),g.current=null})})))}),U="ScrollAreaThumb",ve=r.forwardRef((e,n)=>{const{forceMount:o,...c}=e,t=J(U,e.__scopeScrollArea);return r.createElement(M,{present:o||t.hasThumb},r.createElement($e,p({ref:n},c)))}),$e=r.forwardRef((e,n)=>{const{__scopeScrollArea:o,style:c,...t}=e,l=v(U,o),s=J(U,o),{onThumbPositionChange:a}=s,d=T(n,b=>s.onThumbChange(b)),u=r.useRef(),i=X(()=>{u.current&&(u.current(),u.current=void 0)},100);return r.useEffect(()=>{const b=l.viewport;if(b){const f=()=>{if(i(),!u.current){const h=xe(b,a);u.current=h,a()}};return a(),b.addEventListener("scroll",f),()=>b.removeEventListener("scroll",f)}},[l.viewport,i,a]),r.createElement(_.div,p({"data-state":s.hasThumb?"visible":"hidden"},t,{ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...c},onPointerDownCapture:x(e.onPointerDownCapture,b=>{const h=b.target.getBoundingClientRect(),S=b.clientX-h.left,y=b.clientY-h.top;s.onThumbPointerDown({x:S,y})}),onPointerUp:x(e.onPointerUp,s.onThumbPointerUp)}))}),Q="ScrollAreaCorner",we=r.forwardRef((e,n)=>{const o=v(Q,e.__scopeScrollArea),c=!!(o.scrollbarX&&o.scrollbarY);return o.type!=="scroll"&&c?r.createElement(ge,p({},e,{ref:n})):null}),ge=r.forwardRef((e,n)=>{const{__scopeScrollArea:o,...c}=e,t=v(Q,o),[l,s]=r.useState(0),[a,d]=r.useState(0),u=!!(l&&a);return R(t.scrollbarX,()=>{var i;const b=((i=t.scrollbarX)===null||i===void 0?void 0:i.offsetHeight)||0;t.onCornerHeightChange(b),d(b)}),R(t.scrollbarY,()=>{var i;const b=((i=t.scrollbarY)===null||i===void 0?void 0:i.offsetWidth)||0;t.onCornerWidthChange(b),s(b)}),u?r.createElement(_.div,p({},c,{ref:n,style:{width:l,height:a,position:"absolute",right:t.dir==="ltr"?0:void 0,left:t.dir==="rtl"?0:void 0,bottom:0,...e.style}})):null});function N(e){return e?parseInt(e,10):0}function Z(e,n){const o=e/n;return isNaN(o)?0:o}function O(e){const n=Z(e.viewport,e.content),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,c=(e.scrollbar.size-o)*n;return Math.max(c,18)}function Ee(e,n,o,c="ltr"){const t=O(o),l=t/2,s=n||l,a=t-s,d=o.scrollbar.paddingStart+s,u=o.scrollbar.size-o.scrollbar.paddingEnd-a,i=o.content-o.viewport,b=c==="ltr"?[0,i]:[i*-1,0];return ee([d,u],b)(e)}function F(e,n,o="ltr"){const c=O(n),t=n.scrollbar.paddingStart+n.scrollbar.paddingEnd,l=n.scrollbar.size-t,s=n.content-n.viewport,a=l-c,d=o==="ltr"?[0,s]:[s*-1,0],u=ae(e,d);return ee([0,s],[0,a])(u)}function ee(e,n){return o=>{if(e[0]===e[1]||n[0]===n[1])return n[0];const c=(n[1]-n[0])/(e[1]-e[0]);return n[0]+c*(o-e[0])}}function re(e,n){return e>0&&e<n}const xe=(e,n=()=>{})=>{let o={left:e.scrollLeft,top:e.scrollTop},c=0;return function t(){const l={left:e.scrollLeft,top:e.scrollTop},s=o.left!==l.left,a=o.top!==l.top;(s||a)&&n(),o=l,c=window.requestAnimationFrame(t)}(),()=>window.cancelAnimationFrame(c)};function X(e,n){const o=E(e),c=r.useRef(0);return r.useEffect(()=>()=>window.clearTimeout(c.current),[]),r.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(o,n)},[o,n])}function R(e,n){const o=E(n);le(()=>{let c=0;if(e){const t=new ResizeObserver(()=>{cancelAnimationFrame(c),c=window.requestAnimationFrame(o)});return t.observe(e),()=>{window.cancelAnimationFrame(c),t.unobserve(e)}}},[e,o])}const oe=de,Pe=ue,Ce=we,Re=r.forwardRef(({className:e,children:n,...o},c)=>C.jsxs(oe,{ref:c,className:V("relative overflow-hidden",e),...o,children:[C.jsx(Pe,{className:"h-full w-full rounded-[inherit]",children:n}),C.jsx(te,{}),C.jsx(Ce,{})]}));Re.displayName=oe.displayName;const te=r.forwardRef(({className:e,orientation:n="vertical",...o},c)=>C.jsx(q,{ref:c,orientation:n,className:V("flex touch-none select-none transition-colors",n==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",n==="horizontal"&&"h-2.5 border-t border-t-transparent p-[1px]",e),...o,children:C.jsx(ve,{className:"relative flex-1 rounded-full bg-border"})}));te.displayName=q.displayName;export{Re as S};
