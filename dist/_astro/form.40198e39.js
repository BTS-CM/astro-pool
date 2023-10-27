import{y as kt,_ as Et,j as J,F as le,a5 as Ct,R as Rt}from"./CurrentUser.c838994d.js";import{a as w,r as I}from"./index.178a5b5e.js";var ce=e=>e.type==="checkbox",ie=e=>e instanceof Date,T=e=>e==null;const st=e=>typeof e=="object";var C=e=>!T(e)&&!Array.isArray(e)&&st(e)&&!ie(e),it=e=>C(e)&&e.target?ce(e.target)?e.target.checked:e.target.value:e,Lt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,nt=(e,i)=>e.has(Lt(i)),Ot=e=>{const i=e.constructor&&e.constructor.prototype;return C(i)&&i.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function $(e){let i;const t=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Te&&(e instanceof Blob||e instanceof FileList))&&(t||C(e)))if(i=t?[]:{},!t&&!Ot(e))i=e;else for(const s in e)e.hasOwnProperty(s)&&(i[s]=$(e[s]));else return e;return i}var fe=e=>Array.isArray(e)?e.filter(Boolean):[],E=e=>e===void 0,d=(e,i,t)=>{if(!i||!C(e))return t;const s=fe(i.split(/[,[\].]+?/)).reduce((n,u)=>T(n)?n:n[u],e);return E(s)||s===e?E(e[i])?t:e[i]:s},Q=e=>typeof e=="boolean";const he={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},B={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},at=w.createContext(null),xe=()=>w.useContext(at),Tt=e=>{const{children:i,...t}=e;return w.createElement(at.Provider,{value:t},i)};var ut=(e,i,t,s=!0)=>{const n={defaultValues:i._defaultValues};for(const u in e)Object.defineProperty(n,u,{get:()=>{const c=u;return i._proxyFormState[c]!==B.all&&(i._proxyFormState[c]=!s||B.all),t&&(t[c]=!0),e[c]}});return n},U=e=>C(e)&&!Object.keys(e).length,ot=(e,i,t,s)=>{t(e);const{name:n,...u}=e;return U(u)||Object.keys(u).length>=Object.keys(i).length||Object.keys(u).find(c=>i[c]===(!s||B.all))},ye=e=>Array.isArray(e)?e:[e],lt=(e,i,t)=>!e||!i||e===i||ye(e).some(s=>s&&(t?s===i:s.startsWith(i)||i.startsWith(s)));function Me(e){const i=w.useRef(e);i.current=e,w.useEffect(()=>{const t=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function Mt(e){const i=xe(),{control:t=i.control,disabled:s,name:n,exact:u}=e||{},[c,_]=w.useState(t._formState),h=w.useRef(!0),D=w.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),A=w.useRef(n);return A.current=n,Me({disabled:s,next:F=>h.current&&lt(A.current,F.name,u)&&ot(F,D.current,t._updateFormState)&&_({...t._formState,...F}),subject:t._subjects.state}),w.useEffect(()=>(h.current=!0,D.current.isValid&&t._updateValid(!0),()=>{h.current=!1}),[t]),ut(c,t,D.current,!1)}var H=e=>typeof e=="string",ct=(e,i,t,s,n)=>H(e)?(s&&i.watch.add(e),d(t,e,n)):Array.isArray(e)?e.map(u=>(s&&i.watch.add(u),d(t,u))):(s&&(i.watchAll=!0),t);function It(e){const i=xe(),{control:t=i.control,name:s,defaultValue:n,disabled:u,exact:c}=e||{},_=w.useRef(s);_.current=s,Me({disabled:u,subject:t._subjects.values,next:A=>{lt(_.current,A.name,c)&&D($(ct(_.current,t._names,A.values||t._formValues,!1,n)))}});const[h,D]=w.useState(t._getWatch(s,n));return w.useEffect(()=>t._removeUnmounted()),h}var Ie=e=>/^\w*$/.test(e),ft=e=>fe(e.replace(/["|']|\]/g,"").split(/\.|\[/));function V(e,i,t){let s=-1;const n=Ie(i)?[i]:ft(i),u=n.length,c=u-1;for(;++s<u;){const _=n[s];let h=t;if(s!==c){const D=e[_];h=C(D)||Array.isArray(D)?D:isNaN(+n[s+1])?{}:[]}e[_]=h,e=e[_]}return e}function Nt(e){const i=xe(),{name:t,disabled:s,control:n=i.control,shouldUnregister:u}=e,c=nt(n._names.array,t),_=It({control:n,name:t,defaultValue:d(n._formValues,t,d(n._defaultValues,t,e.defaultValue)),exact:!0}),h=Mt({control:n,name:t}),D=w.useRef(n.register(t,{...e.rules,value:_}));return D.current=n.register(t,e.rules),w.useEffect(()=>{const A=n._options.shouldUnregister||u,F=(v,j)=>{const O=d(n._fields,v);O&&(O._f.mount=j)};if(F(t,!0),A){const v=$(d(n._options.defaultValues,t));V(n._defaultValues,t,v),E(d(n._formValues,t))&&V(n._formValues,t,v)}return()=>{(c?A&&!n._state.action:A)?n.unregister(t):F(t,!1)}},[t,n,c,u]),w.useEffect(()=>{d(n._fields,t)&&n._updateDisabledField({disabled:s,fields:n._fields,name:t})},[s,t,n]),{field:{name:t,value:_,...Q(s)?{disabled:s}:{},onChange:w.useCallback(A=>D.current.onChange({target:{value:it(A),name:t},type:he.CHANGE}),[t]),onBlur:w.useCallback(()=>D.current.onBlur({target:{value:d(n._formValues,t),name:t},type:he.BLUR}),[t,n]),ref:A=>{const F=d(n._fields,t);F&&A&&(F._f.ref={focus:()=>A.focus(),select:()=>A.select(),setCustomValidity:v=>A.setCustomValidity(v),reportValidity:()=>A.reportValidity()})}},formState:h,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!d(h.errors,t)},isDirty:{enumerable:!0,get:()=>!!d(h.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!d(h.touchedFields,t)},error:{enumerable:!0,get:()=>d(h.errors,t)}})}}const Ut=e=>e.render(Nt(e));var Pt=(e,i,t,s,n)=>i?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[s]:n||!0}}:{};const Oe=(e,i,t)=>{for(const s of t||Object.keys(e)){const n=d(e,s);if(n){const{_f:u,...c}=n;if(u&&i(u.name)){if(u.ref.focus){u.ref.focus();break}else if(u.refs&&u.refs[0].focus){u.refs[0].focus();break}}else C(c)&&Oe(c,i)}}};var Je=e=>({isOnSubmit:!e||e===B.onSubmit,isOnBlur:e===B.onBlur,isOnChange:e===B.onChange,isOnAll:e===B.all,isOnTouch:e===B.onTouched}),Qe=(e,i,t)=>!t&&(i.watchAll||i.watch.has(e)||[...i.watch].some(s=>e.startsWith(s)&&/^\.\w+/.test(e.slice(s.length)))),$t=(e,i,t)=>{const s=fe(d(e,t));return V(s,"root",i[t]),V(e,t,s),e},Ne=e=>e.type==="file",X=e=>typeof e=="function",ve=e=>{if(!Te)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},ge=e=>H(e),Ue=e=>e.type==="radio",me=e=>e instanceof RegExp;const Xe={value:!1,isValid:!1},Ye={value:!0,isValid:!0};var dt=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!E(e[0].attributes.value)?E(e[0].value)||e[0].value===""?Ye:{value:e[0].value,isValid:!0}:Ye:Xe}return Xe};const Ze={isValid:!1,value:null};var yt=e=>Array.isArray(e)?e.reduce((i,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:i,Ze):Ze;function et(e,i,t="validate"){if(ge(e)||Array.isArray(e)&&e.every(ge)||Q(e)&&!e)return{type:t,message:ge(e)?e:"",ref:i}}var se=e=>C(e)&&!me(e)?e:{value:e,message:""},tt=async(e,i,t,s,n)=>{const{ref:u,refs:c,required:_,maxLength:h,minLength:D,min:A,max:F,pattern:v,validate:j,name:O,valueAsNumber:Ve,mount:de,disabled:Ae}=e._f,m=d(i,O);if(!de||Ae)return{};const P=c?c[0]:u,K=x=>{s&&P.reportValidity&&(P.setCustomValidity(Q(x)?"":x||""),P.reportValidity())},R={},ne=Ue(u),te=ce(u),we=ne||te,q=(Ve||Ne(u))&&E(u.value)&&E(m)||ve(u)&&u.value===""||m===""||Array.isArray(m)&&!m.length,Y=Pt.bind(null,O,t,R),G=(x,b,p,M=z.maxLength,N=z.minLength)=>{const W=x?b:p;R[O]={type:x?M:N,message:W,ref:u,...Y(x?M:N,W)}};if(n?!Array.isArray(m)||!m.length:_&&(!we&&(q||T(m))||Q(m)&&!m||te&&!dt(c).isValid||ne&&!yt(c).isValid)){const{value:x,message:b}=ge(_)?{value:!!_,message:_}:se(_);if(x&&(R[O]={type:z.required,message:b,ref:P,...Y(z.required,b)},!t))return K(b),R}if(!q&&(!T(A)||!T(F))){let x,b;const p=se(F),M=se(A);if(!T(m)&&!isNaN(m)){const N=u.valueAsNumber||m&&+m;T(p.value)||(x=N>p.value),T(M.value)||(b=N<M.value)}else{const N=u.valueAsDate||new Date(m),W=ue=>new Date(new Date().toDateString()+" "+ue),Z=u.type=="time",ae=u.type=="week";H(p.value)&&m&&(x=Z?W(m)>W(p.value):ae?m>p.value:N>new Date(p.value)),H(M.value)&&m&&(b=Z?W(m)<W(M.value):ae?m<M.value:N<new Date(M.value))}if((x||b)&&(G(!!x,p.message,M.message,z.max,z.min),!t))return K(R[O].message),R}if((h||D)&&!q&&(H(m)||n&&Array.isArray(m))){const x=se(h),b=se(D),p=!T(x.value)&&m.length>+x.value,M=!T(b.value)&&m.length<+b.value;if((p||M)&&(G(p,x.message,b.message),!t))return K(R[O].message),R}if(v&&!q&&H(m)){const{value:x,message:b}=se(v);if(me(x)&&!m.match(x)&&(R[O]={type:z.pattern,message:b,ref:u,...Y(z.pattern,b)},!t))return K(b),R}if(j){if(X(j)){const x=await j(m,i),b=et(x,P);if(b&&(R[O]={...b,...Y(z.validate,b.message)},!t))return K(b.message),R}else if(C(j)){let x={};for(const b in j){if(!U(x)&&!t)break;const p=et(await j[b](m,i),P,b);p&&(x={...p,...Y(b,p.message)},K(p.message),t&&(R[O]=x))}if(!U(x)&&(R[O]={ref:P,...x},!t))return R}}return K(!0),R};function Bt(e,i){const t=i.slice(0,-1).length;let s=0;for(;s<t;)e=E(e)?s++:e[i[s++]];return e}function jt(e){for(const i in e)if(e.hasOwnProperty(i)&&!E(e[i]))return!1;return!0}function L(e,i){const t=Array.isArray(i)?i:Ie(i)?[i]:ft(i),s=t.length===1?e:Bt(e,t),n=t.length-1,u=t[n];return s&&delete s[u],n!==0&&(C(s)&&U(s)||Array.isArray(s)&&jt(s))&&L(e,t.slice(0,-1)),e}function Ee(){let e=[];return{get observers(){return e},next:n=>{for(const u of e)u.next&&u.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(u=>u!==n)}}),unsubscribe:()=>{e=[]}}}var _e=e=>T(e)||!st(e);function ee(e,i){if(_e(e)||_e(i))return e===i;if(ie(e)&&ie(i))return e.getTime()===i.getTime();const t=Object.keys(e),s=Object.keys(i);if(t.length!==s.length)return!1;for(const n of t){const u=e[n];if(!s.includes(n))return!1;if(n!=="ref"){const c=i[n];if(ie(u)&&ie(c)||C(u)&&C(c)||Array.isArray(u)&&Array.isArray(c)?!ee(u,c):u!==c)return!1}}return!0}var gt=e=>e.type==="select-multiple",qt=e=>Ue(e)||ce(e),Ce=e=>ve(e)&&e.isConnected,ht=e=>{for(const i in e)if(X(e[i]))return!0;return!1};function be(e,i={}){const t=Array.isArray(e);if(C(e)||t)for(const s in e)Array.isArray(e[s])||C(e[s])&&!ht(e[s])?(i[s]=Array.isArray(e[s])?[]:{},be(e[s],i[s])):T(e[s])||(i[s]=!0);return i}function vt(e,i,t){const s=Array.isArray(e);if(C(e)||s)for(const n in e)Array.isArray(e[n])||C(e[n])&&!ht(e[n])?E(i)||_e(t[n])?t[n]=Array.isArray(e[n])?be(e[n],[]):{...be(e[n])}:vt(e[n],T(i)?{}:i[n],t[n]):t[n]=!ee(e[n],i[n]);return t}var Re=(e,i)=>vt(e,i,be(i)),mt=(e,{valueAsNumber:i,valueAsDate:t,setValueAs:s})=>E(e)?e:i?e===""?NaN:e&&+e:t&&H(e)?new Date(e):s?s(e):e;function Le(e){const i=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):i.disabled))return Ne(i)?i.files:Ue(i)?yt(e.refs).value:gt(i)?[...i.selectedOptions].map(({value:t})=>t):ce(i)?dt(e.refs).value:mt(E(i.value)?e.ref.value:i.value,e)}var Wt=(e,i,t,s)=>{const n={};for(const u of e){const c=d(i,u);c&&V(n,u,c._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:s}},oe=e=>E(e)?e:me(e)?e.source:C(e)?me(e.value)?e.value.source:e.value:e,Ht=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function rt(e,i,t){const s=d(e,t);if(s||Ie(t))return{error:s,name:t};const n=t.split(".");for(;n.length;){const u=n.join("."),c=d(i,u),_=d(e,u);if(c&&!Array.isArray(c)&&t!==u)return{name:t};if(_&&_.type)return{name:u,error:_};n.pop()}return{name:t}}var Kt=(e,i,t,s,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(i||e):(t?s.isOnBlur:n.isOnBlur)?!e:(t?s.isOnChange:n.isOnChange)?e:!0,Gt=(e,i)=>!fe(d(e,i)).length&&L(e,i);const zt={mode:B.onSubmit,reValidateMode:B.onChange,shouldFocusError:!0};function Jt(e={},i){let t={...zt,...e},s={submitCount:0,isDirty:!1,isLoading:X(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},n={},u=C(t.defaultValues)||C(t.values)?$(t.defaultValues||t.values)||{}:{},c=t.shouldUnregister?{}:$(u),_={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},D,A=0;const F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Ee(),array:Ee(),state:Ee()},j=e.resetOptions&&e.resetOptions.keepDirtyValues,O=Je(t.mode),Ve=Je(t.reValidateMode),de=t.criteriaMode===B.all,Ae=r=>a=>{clearTimeout(A),A=setTimeout(r,a)},m=async r=>{if(F.isValid||r){const a=t.resolver?U((await q()).errors):await G(n,!0);a!==s.isValid&&v.state.next({isValid:a})}},P=r=>F.isValidating&&v.state.next({isValidating:r}),K=(r,a=[],o,y,f=!0,l=!0)=>{if(y&&o){if(_.action=!0,l&&Array.isArray(d(n,r))){const g=o(d(n,r),y.argA,y.argB);f&&V(n,r,g)}if(l&&Array.isArray(d(s.errors,r))){const g=o(d(s.errors,r),y.argA,y.argB);f&&V(s.errors,r,g),Gt(s.errors,r)}if(F.touchedFields&&l&&Array.isArray(d(s.touchedFields,r))){const g=o(d(s.touchedFields,r),y.argA,y.argB);f&&V(s.touchedFields,r,g)}F.dirtyFields&&(s.dirtyFields=Re(u,c)),v.state.next({name:r,isDirty:b(r,a),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else V(c,r,a)},R=(r,a)=>{V(s.errors,r,a),v.state.next({errors:s.errors})},ne=(r,a,o,y)=>{const f=d(n,r);if(f){const l=d(c,r,E(o)?d(u,r):o);E(l)||y&&y.defaultChecked||a?V(c,r,a?l:Le(f._f)):N(r,l),_.mount&&m()}},te=(r,a,o,y,f)=>{let l=!1,g=!1;const S={name:r};if(!o||y){F.isDirty&&(g=s.isDirty,s.isDirty=S.isDirty=b(),l=g!==S.isDirty);const k=ee(d(u,r),a);g=d(s.dirtyFields,r),k?L(s.dirtyFields,r):V(s.dirtyFields,r,!0),S.dirtyFields=s.dirtyFields,l=l||F.dirtyFields&&g!==!k}if(o){const k=d(s.touchedFields,r);k||(V(s.touchedFields,r,o),S.touchedFields=s.touchedFields,l=l||F.touchedFields&&k!==o)}return l&&f&&v.state.next(S),l?S:{}},we=(r,a,o,y)=>{const f=d(s.errors,r),l=F.isValid&&Q(a)&&s.isValid!==a;if(e.delayError&&o?(D=Ae(()=>R(r,o)),D(e.delayError)):(clearTimeout(A),D=null,o?V(s.errors,r,o):L(s.errors,r)),(o?!ee(f,o):f)||!U(y)||l){const g={...y,...l&&Q(a)?{isValid:a}:{},errors:s.errors,name:r};s={...s,...g},v.state.next(g)}P(!1)},q=async r=>t.resolver(c,t.context,Wt(r||h.mount,n,t.criteriaMode,t.shouldUseNativeValidation)),Y=async r=>{const{errors:a}=await q(r);if(r)for(const o of r){const y=d(a,o);y?V(s.errors,o,y):L(s.errors,o)}else s.errors=a;return a},G=async(r,a,o={valid:!0})=>{for(const y in r){const f=r[y];if(f){const{_f:l,...g}=f;if(l){const S=h.array.has(l.name),k=await tt(f,c,de,t.shouldUseNativeValidation&&!a,S);if(k[l.name]&&(o.valid=!1,a))break;!a&&(d(k,l.name)?S?$t(s.errors,k,l.name):V(s.errors,l.name,k[l.name]):L(s.errors,l.name))}g&&await G(g,a,o)}}return o.valid},x=()=>{for(const r of h.unMount){const a=d(n,r);a&&(a._f.refs?a._f.refs.every(o=>!Ce(o)):!Ce(a._f.ref))&&De(r)}h.unMount=new Set},b=(r,a)=>(r&&a&&V(c,r,a),!ee(Pe(),u)),p=(r,a,o)=>ct(r,h,{..._.mount?c:E(a)?u:H(r)?{[r]:a}:a},o,a),M=r=>fe(d(_.mount?c:u,r,e.shouldUnregister?d(u,r,[]):[])),N=(r,a,o={})=>{const y=d(n,r);let f=a;if(y){const l=y._f;l&&(!l.disabled&&V(c,r,mt(a,l)),f=ve(l.ref)&&T(a)?"":a,gt(l.ref)?[...l.ref.options].forEach(g=>g.selected=f.includes(g.value)):l.refs?ce(l.ref)?l.refs.length>1?l.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(f)?!!f.find(S=>S===g.value):f===g.value)):l.refs[0]&&(l.refs[0].checked=!!f):l.refs.forEach(g=>g.checked=g.value===f):Ne(l.ref)?l.ref.value="":(l.ref.value=f,l.ref.type||v.values.next({name:r,values:{...c}})))}(o.shouldDirty||o.shouldTouch)&&te(r,f,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&ue(r)},W=(r,a,o)=>{for(const y in a){const f=a[y],l=`${r}.${y}`,g=d(n,l);(h.array.has(r)||!_e(f)||g&&!g._f)&&!ie(f)?W(l,f,o):N(l,f,o)}},Z=(r,a,o={})=>{const y=d(n,r),f=h.array.has(r),l=$(a);V(c,r,l),f?(v.array.next({name:r,values:{...c}}),(F.isDirty||F.dirtyFields)&&o.shouldDirty&&v.state.next({name:r,dirtyFields:Re(u,c),isDirty:b(r,l)})):y&&!y._f&&!T(l)?W(r,l,o):N(r,l,o),Qe(r,h)&&v.state.next({...s}),v.values.next({name:r,values:{...c}}),!_.mount&&i()},ae=async r=>{const a=r.target;let o=a.name,y=!0;const f=d(n,o),l=()=>a.type?Le(f._f):it(r);if(f){let g,S;const k=l(),re=r.type===he.BLUR||r.type===he.FOCUS_OUT,Dt=!Ht(f._f)&&!t.resolver&&!d(s.errors,o)&&!f._f.deps||Kt(re,d(s.touchedFields,o),s.isSubmitted,Ve,O),pe=Qe(o,h,re);V(c,o,k),re?(f._f.onBlur&&f._f.onBlur(r),D&&D(0)):f._f.onChange&&f._f.onChange(r);const ke=te(o,k,re,!1),St=!U(ke)||pe;if(!re&&v.values.next({name:o,type:r.type,values:{...c}}),Dt)return F.isValid&&m(),St&&v.state.next({name:o,...pe?{}:ke});if(!re&&pe&&v.state.next({...s}),P(!0),t.resolver){const{errors:Ge}=await q([o]),pt=rt(s.errors,n,o),ze=rt(Ge,n,pt.name||o);g=ze.error,o=ze.name,S=U(Ge)}else g=(await tt(f,c,de,t.shouldUseNativeValidation))[o],y=Number.isNaN(k)||k===d(c,o,k),y&&(g?S=!1:F.isValid&&(S=await G(n,!0)));y&&(f._f.deps&&ue(f._f.deps),we(o,S,g,ke))}},ue=async(r,a={})=>{let o,y;const f=ye(r);if(P(!0),t.resolver){const l=await Y(E(r)?r:f);o=U(l),y=r?!f.some(g=>d(l,g)):o}else r?(y=(await Promise.all(f.map(async l=>{const g=d(n,l);return await G(g&&g._f?{[l]:g}:g)}))).every(Boolean),!(!y&&!s.isValid)&&m()):y=o=await G(n);return v.state.next({...!H(r)||F.isValid&&o!==s.isValid?{}:{name:r},...t.resolver||!r?{isValid:o}:{},errors:s.errors,isValidating:!1}),a.shouldFocus&&!y&&Oe(n,l=>l&&d(s.errors,l),r?f:h.mount),y},Pe=r=>{const a={...u,..._.mount?c:{}};return E(r)?a:H(r)?d(a,r):r.map(o=>d(a,o))},$e=(r,a)=>({invalid:!!d((a||s).errors,r),isDirty:!!d((a||s).dirtyFields,r),isTouched:!!d((a||s).touchedFields,r),error:d((a||s).errors,r)}),Vt=r=>{r&&ye(r).forEach(a=>L(s.errors,a)),v.state.next({errors:r?s.errors:{}})},Be=(r,a,o)=>{const y=(d(n,r,{_f:{}})._f||{}).ref;V(s.errors,r,{...a,ref:y}),v.state.next({name:r,errors:s.errors,isValid:!1}),o&&o.shouldFocus&&y&&y.focus&&y.focus()},At=(r,a)=>X(r)?v.values.subscribe({next:o=>r(p(void 0,a),o)}):p(r,a,!0),De=(r,a={})=>{for(const o of r?ye(r):h.mount)h.mount.delete(o),h.array.delete(o),a.keepValue||(L(n,o),L(c,o)),!a.keepError&&L(s.errors,o),!a.keepDirty&&L(s.dirtyFields,o),!a.keepTouched&&L(s.touchedFields,o),!t.shouldUnregister&&!a.keepDefaultValue&&L(u,o);v.values.next({values:{...c}}),v.state.next({...s,...a.keepDirty?{isDirty:b()}:{}}),!a.keepIsValid&&m()},je=({disabled:r,name:a,field:o,fields:y})=>{if(Q(r)){const f=r?void 0:d(c,a,Le(o?o._f:d(y,a)._f));V(c,a,f),te(a,f,!1,!1,!0)}},Se=(r,a={})=>{let o=d(n,r);const y=Q(a.disabled);return V(n,r,{...o||{},_f:{...o&&o._f?o._f:{ref:{name:r}},name:r,mount:!0,...a}}),h.mount.add(r),o?je({field:o,disabled:a.disabled,name:r}):ne(r,!0,a.value),{...y?{disabled:a.disabled}:{},...t.progressive?{required:!!a.required,min:oe(a.min),max:oe(a.max),minLength:oe(a.minLength),maxLength:oe(a.maxLength),pattern:oe(a.pattern)}:{},name:r,onChange:ae,onBlur:ae,ref:f=>{if(f){Se(r,a),o=d(n,r);const l=E(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,g=qt(l),S=o._f.refs||[];if(g?S.find(k=>k===l):l===o._f.ref)return;V(n,r,{_f:{...o._f,...g?{refs:[...S.filter(Ce),l,...Array.isArray(d(u,r))?[{}]:[]],ref:{type:l.type,name:r}}:{ref:l}}}),ne(r,!1,void 0,l)}else o=d(n,r,{}),o._f&&(o._f.mount=!1),(t.shouldUnregister||a.shouldUnregister)&&!(nt(h.array,r)&&_.action)&&h.unMount.add(r)}}},qe=()=>t.shouldFocusError&&Oe(n,r=>r&&d(s.errors,r),h.mount),We=(r,a)=>async o=>{o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let y=$(c);if(v.state.next({isSubmitting:!0}),t.resolver){const{errors:f,values:l}=await q();s.errors=f,y=l}else await G(n);L(s.errors,"root"),U(s.errors)?(v.state.next({errors:{}}),await r(y,o)):(a&&await a({...s.errors},o),qe(),setTimeout(qe)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(s.errors),submitCount:s.submitCount+1,errors:s.errors})},wt=(r,a={})=>{d(n,r)&&(E(a.defaultValue)?Z(r,d(u,r)):(Z(r,a.defaultValue),V(u,r,a.defaultValue)),a.keepTouched||L(s.touchedFields,r),a.keepDirty||(L(s.dirtyFields,r),s.isDirty=a.defaultValue?b(r,d(u,r)):b()),a.keepError||(L(s.errors,r),F.isValid&&m()),v.state.next({...s}))},He=(r,a={})=>{const o=r?$(r):u,y=$(o),f=r&&!U(r)?y:u;if(a.keepDefaultValues||(u=o),!a.keepValues){if(a.keepDirtyValues||j)for(const l of h.mount)d(s.dirtyFields,l)?V(f,l,d(c,l)):Z(l,d(f,l));else{if(Te&&E(r))for(const l of h.mount){const g=d(n,l);if(g&&g._f){const S=Array.isArray(g._f.refs)?g._f.refs[0]:g._f.ref;if(ve(S)){const k=S.closest("form");if(k){k.reset();break}}}}n={}}c=e.shouldUnregister?a.keepDefaultValues?$(u):{}:$(f),v.array.next({values:{...f}}),v.values.next({values:{...f}})}h={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!_.mount&&i(),_.mount=!F.isValid||!!a.keepIsValid,_.watch=!!e.shouldUnregister,v.state.next({submitCount:a.keepSubmitCount?s.submitCount:0,isDirty:a.keepDirty?s.isDirty:!!(a.keepDefaultValues&&!ee(r,u)),isSubmitted:a.keepIsSubmitted?s.isSubmitted:!1,dirtyFields:a.keepDirtyValues?s.dirtyFields:a.keepDefaultValues&&r?Re(u,r):{},touchedFields:a.keepTouched?s.touchedFields:{},errors:a.keepErrors?s.errors:{},isSubmitSuccessful:a.keepIsSubmitSuccessful?s.isSubmitSuccessful:!1,isSubmitting:!1})},Ke=(r,a)=>He(X(r)?r(c):r,a);return{control:{register:Se,unregister:De,getFieldState:$e,handleSubmit:We,setError:Be,_executeSchema:q,_getWatch:p,_getDirty:b,_updateValid:m,_removeUnmounted:x,_updateFieldArray:K,_updateDisabledField:je,_getFieldArray:M,_reset:He,_resetDefaultValues:()=>X(t.defaultValues)&&t.defaultValues().then(r=>{Ke(r,t.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:r=>{s={...s,...r}},_subjects:v,_proxyFormState:F,get _fields(){return n},get _formValues(){return c},get _state(){return _},set _state(r){_=r},get _defaultValues(){return u},get _names(){return h},set _names(r){h=r},get _formState(){return s},set _formState(r){s=r},get _options(){return t},set _options(r){t={...t,...r}}},trigger:ue,register:Se,handleSubmit:We,watch:At,setValue:Z,getValues:Pe,reset:Ke,resetField:wt,clearErrors:Vt,unregister:De,setError:Be,setFocus:(r,a={})=>{const o=d(n,r),y=o&&o._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),a.shouldSelect&&f.select())}},getFieldState:$e}}function or(e={}){const i=w.useRef(),t=w.useRef(),[s,n]=w.useState({isDirty:!1,isValidating:!1,isLoading:X(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:X(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Jt(e,()=>n(c=>({...c}))),formState:s});const u=i.current.control;return u._options=e,Me({subject:u._subjects.state,next:c=>{ot(c,u._proxyFormState,u._updateFormState,!0)&&n({...u._formState})}}),w.useEffect(()=>{e.values&&!ee(e.values,t.current)?(u._reset(e.values,u._options.resetOptions),t.current=e.values):u._resetDefaultValues()},[e.values,u]),w.useEffect(()=>{u._state.mount||(u._updateValid(),u._state.mount=!0),u._state.watch&&(u._state.watch=!1,u._subjects.state.next({...u._formState})),u._removeUnmounted()}),i.current.formState=ut(s,u),i.current}const Qt=I.forwardRef((e,i)=>I.createElement(kt.label,Et({},e,{ref:i,onMouseDown:t=>{var s;(s=e.onMouseDown)===null||s===void 0||s.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}}))),_t=Qt,Xt=Ct("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),bt=I.forwardRef(({className:e,...i},t)=>J.jsx(_t,{ref:t,className:le(Xt(),e),...i}));bt.displayName=_t.displayName;const lr=Tt,xt=I.createContext({}),cr=({...e})=>J.jsx(xt.Provider,{value:{name:e.name},children:J.jsx(Ut,{...e})}),Fe=()=>{const e=I.useContext(xt),i=I.useContext(Ft),{getFieldState:t,formState:s}=xe(),n=t(e.name,s);if(!e)throw new Error("useFormField should be used within <FormField>");const{id:u}=i;return{id:u,name:e.name,formItemId:`${u}-form-item`,formDescriptionId:`${u}-form-item-description`,formMessageId:`${u}-form-item-message`,...n}},Ft=I.createContext({}),Yt=I.forwardRef(({className:e,...i},t)=>{const s=I.useId();return J.jsx(Ft.Provider,{value:{id:s},children:J.jsx("div",{ref:t,className:le("space-y-2",e),...i})})});Yt.displayName="FormItem";const Zt=I.forwardRef(({className:e,...i},t)=>{const{error:s,formItemId:n}=Fe();return J.jsx(bt,{ref:t,className:le(s&&"text-destructive",e),htmlFor:n,...i})});Zt.displayName="FormLabel";const er=I.forwardRef(({...e},i)=>{const{error:t,formItemId:s,formDescriptionId:n,formMessageId:u}=Fe();return J.jsx(Rt,{ref:i,id:s,"aria-describedby":t?`${n} ${u}`:`${n}`,"aria-invalid":!!t,...e})});er.displayName="FormControl";const tr=I.forwardRef(({className:e,...i},t)=>{const{formDescriptionId:s}=Fe();return J.jsx("p",{ref:t,id:s,className:le("text-[0.8rem] text-muted-foreground",e),...i})});tr.displayName="FormDescription";const rr=I.forwardRef(({className:e,children:i,...t},s)=>{const{error:n,formMessageId:u}=Fe(),c=n?String(n?.message):i;return c?J.jsx("p",{ref:s,id:u,className:le("text-[0.8rem] font-medium text-destructive",e),...t,children:c}):null});rr.displayName="FormMessage";export{lr as F,cr as a,Yt as b,Zt as c,er as d,rr as e,tr as f,or as u};
