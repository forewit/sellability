import{a0 as D,a1 as V,a2 as J,a3 as m,a4 as Q,R as y,a5 as g,a6 as P,a7 as S,t as W,a8 as X,a9 as k,K as ee,z,r as N,h as F,E as G,H as re,aa as ne,ab as te,c as ae,s as M,ac as U,o as j,ad as q,d as Z,ae as ie,af as se,T as C,ag as fe,ah as ue,ai as le,y as H,aj as ce,ak as $,x as oe,al as ve,am as _e,an as de,ao as be,ap as A}from"./DAhi3THk.js";function R(e,n=null,f){if(typeof e!="object"||e===null||D in e)return e;const a=k(e);if(a!==V&&a!==J)return e;var t=new Map,o=ee(e),b=m(0);o&&t.set("length",m(e.length));var h;return new Proxy(e,{defineProperty(l,r,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&X();var u=t.get(r);return u===void 0?(u=m(i.value),t.set(r,u)):P(u,R(i.value,h)),!0},deleteProperty(l,r){var i=t.get(r);if(i===void 0)r in l&&t.set(r,m(g));else{if(o&&typeof r=="string"){var u=t.get("length"),s=Number(r);Number.isInteger(s)&&s<u.v&&P(u,s)}P(i,g),x(b)}return!0},get(l,r,i){var _;if(r===D)return e;var u=t.get(r),s=r in l;if(u===void 0&&(!s||(_=S(l,r))!=null&&_.writable)&&(u=m(R(s?l[r]:g,h)),t.set(r,u)),u!==void 0){var c=y(u);return c===g?void 0:c}return Reflect.get(l,r,i)},getOwnPropertyDescriptor(l,r){var i=Reflect.getOwnPropertyDescriptor(l,r);if(i&&"value"in i){var u=t.get(r);u&&(i.value=y(u))}else if(i===void 0){var s=t.get(r),c=s==null?void 0:s.v;if(s!==void 0&&c!==g)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return i},has(l,r){var c;if(r===D)return!0;var i=t.get(r),u=i!==void 0&&i.v!==g||Reflect.has(l,r);if(i!==void 0||W!==null&&(!u||(c=S(l,r))!=null&&c.writable)){i===void 0&&(i=m(u?R(l[r],h):g),t.set(r,i));var s=y(i);if(s===g)return!1}return u},set(l,r,i,u){var w;var s=t.get(r),c=r in l;if(o&&r==="length")for(var _=i;_<s.v;_+=1){var p=t.get(_+"");p!==void 0?P(p,g):_ in l&&(p=m(g),t.set(_+"",p))}s===void 0?(!c||(w=S(l,r))!=null&&w.writable)&&(s=m(void 0),P(s,R(i,h)),t.set(r,s)):(c=s.v!==g,P(s,R(i,h)));var d=Reflect.getOwnPropertyDescriptor(l,r);if(d!=null&&d.set&&d.set.call(u,i),!c){if(o&&typeof r=="string"){var E=t.get("length"),O=Number(r);Number.isInteger(O)&&O>=E.v&&P(E,O+1)}x(b)}return!0},ownKeys(l){y(b);var r=Reflect.ownKeys(l).filter(s=>{var c=t.get(s);return c===void 0||c.v!==g});for(var[i,u]of t)u.v!==g&&!(i in l)&&r.push(i);return r},setPrototypeOf(){Q()}})}function x(e,n=1){P(e,e.v+n)}function ye(e,n,[f,a]=[0,0]){N&&f===0&&F();var t=e,o=null,b=null,h=g,l=f>0?G:0,r=!1;const i=(s,c=!0)=>{r=!0,u(c,s)},u=(s,c)=>{if(h===(h=s))return;let _=!1;if(N&&a!==-1){if(f===0){const d=t.data;d===re?a=0:d===ne?a=1/0:(a=parseInt(d.substring(1)),a!==a&&(a=h?1/0:-1))}const p=a>f;!!h===p&&(t=te(),ae(t),M(!1),_=!0,a=-1)}h?(o?U(o):c&&(o=j(()=>c(t))),b&&q(b,()=>{b=null})):(b?U(b):c&&(b=j(()=>c(t,[f+1,a]))),o&&q(o,()=>{o=null})),_&&M(!0)};z(()=>{r=!1,n(i),r||u(null,null)},l),N&&(t=Z)}function me(e,n,f){N&&F();var a=e,t,o;z(()=>{t!==(t=n())&&(o&&(q(o),o=null),t&&(o=j(()=>f(a,t))))},G),N&&(a=Z)}let L=!1;function ge(e){var n=L;try{return L=!1,[e(),L]}finally{L=n}}const he={get(e,n){if(!e.exclude.includes(n))return e.props[n]},set(e,n){return!1},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function we(e,n,f){return new Proxy({props:e,exclude:n},he)}const pe={get(e,n){let f=e.props.length;for(;f--;){let a=e.props[f];if(A(a)&&(a=a()),typeof a=="object"&&a!==null&&n in a)return a[n]}},set(e,n,f){let a=e.props.length;for(;a--;){let t=e.props[a];A(t)&&(t=t());const o=S(t,n);if(o&&o.set)return o.set(f),!0}return!1},getOwnPropertyDescriptor(e,n){let f=e.props.length;for(;f--;){let a=e.props[f];if(A(a)&&(a=a()),typeof a=="object"&&a!==null&&n in a){const t=S(a,n);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,n){if(n===D||n===$)return!1;for(let f of e.props)if(A(f)&&(f=f()),f!=null&&n in f)return!0;return!1},ownKeys(e){const n=[];for(let f of e.props){A(f)&&(f=f());for(const a in f)n.includes(a)||n.push(a)}return n}};function Ie(...e){return new Proxy({props:e},pe)}function Re(e,n,f,a){var B;var t=(f&_e)!==0,o=!oe||(f&ve)!==0,b=(f&ce)!==0,h=(f&be)!==0,l=!1,r;b?[r,l]=ge(()=>e[n]):r=e[n];var i=D in e||$ in e,u=b&&(((B=S(e,n))==null?void 0:B.set)??(i&&n in e&&(v=>e[n]=v)))||void 0,s=a,c=!0,_=!1,p=()=>(_=!0,c&&(c=!1,h?s=H(a):s=a),s);r===void 0&&a!==void 0&&(u&&o&&ie(),r=p(),u&&u(r));var d;if(o)d=()=>{var v=e[n];return v===void 0?p():(c=!0,_=!1,v)};else{var E=(t?C:fe)(()=>e[n]);E.f|=se,d=()=>{var v=y(E);return v!==void 0&&(s=void 0),v===void 0?s:v}}if((f&ue)===0)return d;if(u){var O=e.$$legacy;return function(v,I){return arguments.length>0?((!o||!I||O||l)&&u(I?d():v),v):d()}}var w=!1,K=de(r),T=C(()=>{var v=d(),I=y(K);return w?(w=!1,I):K.v=v});return t||(T.equals=le),function(v,I){if(arguments.length>0){const Y=I?y(T):o&&b?R(v):v;return T.equals(Y)||(w=!0,P(K,Y),_&&s!==void 0&&(s=Y),H(()=>y(T))),v}return y(T)}}export{R as a,me as c,ye as i,Re as p,we as r,Ie as s};
