var Pn=Array.isArray,Gt=Array.prototype.indexOf,Cn=Array.from,Fn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,qn=Object.prototype,Ln=Array.prototype,Kt=Object.getPrototypeOf;function Yn(t){return typeof t=="function"}const Mn=()=>{};function jn(t){return t()}function yt(t){for(var n=0;n<t.length;n++)t[n]()}const E=2,Et=4,at=8,st=16,k=32,P=64,U=128,w=256,H=512,y=1024,D=2048,C=4096,b=8192,W=16384,Zt=32768,gt=65536,Bn=1<<17,zt=1<<19,mt=1<<20,vt=Symbol("$state"),Un=Symbol("legacy props"),Hn=Symbol("");function Tt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function xt(t){return!Wt(t,this.v)}function Jt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Xt(t){throw new Error("https://svelte.dev/e/effect_orphan")}function tn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Vn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Gn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function $n(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Kn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function nn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function Zn(){J=!0}const zn=1,Wn=2,Jn=4,Qn=8,Xn=16,tr=1,nr=2,en="[",ln="[!",an="]",At={},rr=Symbol();function kt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function sn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let o=null;function pt(t){o=t}function er(t){return ut().get(t)}function lr(t,n){return ut().set(t,n),n}function ar(t){return ut().has(t)}function sr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(o.l={s:null,u:null,r1:[],r2:ot(!1)})}function ur(t){const n=o;if(n!==null){const s=n.e;if(s!==null){var r=f,e=u;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];K(l.effect),$(l.reaction),Pt(l.fn)}}finally{K(r),$(e)}}o=n.p,n.m=!0}return{}}function Q(){return!J||o!==null&&o.l===null}function ut(t){return o===null&&sn(),o.c??(o.c=new Map(un(o)||void 0))}function un(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function ot(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function or(t){return on(ot(t))}function fr(t,n=!1){var e;const r=ot(t);return n||(r.equals=xt),J&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function on(t){return u!==null&&!d&&(u.f&E)!==0&&(T===null?Tn([t]):T.push(t)),t}function ir(t,n){return u!==null&&!d&&Q()&&(u.f&(E|st))!==0&&(T===null||!T.includes(t))&&rn(),fn(t,n)}function fn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Bt(),Rt(t,D),Q()&&f!==null&&(f.f&y)!==0&&(f.f&(k|P))===0&&(x===null?xn([t]):x.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=Q(),a=r.length,l=0;l<a;l++){var s=r[l],i=s.f;(i&D)===0&&(!e&&s===f||(A(s,n),(i&(y|w))!==0&&((i&E)!==0?Rt(s,C):tt(s))))}}let S=!1;function _r(t){S=t}let g;function q(t){if(t===null)throw kt(),At;return g=t}function cr(){return q(N(g))}function vr(t){if(S){if(N(g)!==null)throw kt(),At;g=t}}function pr(t=1){if(S){for(var n=t,r=g;n--;)r=N(r);g=r}}function hr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===an){if(t===0)return n;t-=1}else(r===en||r===ln)&&(t+=1)}var e=N(n);n.remove(),n=e}}var ht,_n,cn,Dt,Ot;function dr(){if(ht===void 0){ht=window,_n=document,cn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Dt=ct(n,"firstChild").get,Ot=ct(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Dt.call(t)}function N(t){return Ot.call(t)}function wr(t,n){if(!S)return rt(t);var r=rt(g);if(r===null)r=g.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),q(e),e}return q(r),r}function yr(t,n){if(!S){var r=rt(t);return r instanceof Comment&&r.data===""?N(r):r}return g}function Er(t,n=1,r=!1){let e=S?g:t;for(var a;n--;)a=e,e=N(e);if(!S)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=nt();return e===null?a==null||a.after(s):e.before(s),q(s),s}return q(e),e}function gr(t){t.textContent=""}function St(t){var n=E|D,r=u!==null&&(u.f&E)!==0?u:null;return f===null||r!==null&&(r.f&w)!==0?n|=w:f.f|=mt,{ctx:o,deps:null,effects:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function mr(t){const n=St(t);return n.equals=xt,n}function It(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)I(n[r])}}function vn(t){for(var n=t.parent;n!==null;){if((n.f&E)===0)return n;n=n.parent}return null}function pn(t){var n,r=f;K(vn(t));try{It(t),n=Ht(t)}finally{K(r)}return n}function Nt(t){var n=pn(t),r=(R||(t.f&w)!==0)&&t.deps!==null?C:y;A(t,r),t.equals(n)||(t.v=n,t.wv=Bt())}function bt(t){f===null&&u===null&&Xt(),u!==null&&(u.f&w)!==0&&f===null&&Qt(),ft&&Jt()}function hn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function Y(t,n,r,e=!0){var a=f,l={ctx:o,deps:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{it(l),l.f|=Zt}catch(_){throw I(l),_}else n!==null&&tt(l);var s=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(mt|U))===0;if(!s&&e&&(a!==null&&hn(l,a),u!==null&&(u.f&E)!==0)){var i=u;(i.effects??(i.effects=[])).push(l)}return l}function Tr(){return u!==null&&!d}function xr(t){bt();var n=f!==null&&(f.f&k)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Pt(t);return e}}function Ar(t){return bt(),dn(t)}function kr(t){const n=Y(P,t,!0);return(r={})=>new Promise(e=>{r.outro?En(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function Pt(t){return Y(Et,t,!1)}function dn(t){return Y(at,t,!0)}function Rr(t,n=[],r=St){const e=n.map(r);return wn(()=>t(...e.map(Nn)))}function wn(t,n=0){return Y(at|st|n,t,!0)}function Dr(t,n=!0){return Y(at|k,t,!0,n)}function Ct(t){var n=t.teardown;if(n!==null){const r=ft,e=u;wt(!0),$(null);try{n.call(null)}finally{wt(r),$(e)}}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&P)!==0?r.parent=null:I(r,n),r=e}}function yn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&k)===0&&I(n),n=r}}function I(t,n=!0){var r=!1;if((n||(t.f&zt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:N(e);e.remove(),e=l}r=!0}Ft(t,n&&!r),z(t,0),A(t,W);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Ct(t);var i=t.parent;i!==null&&i.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function En(t,n){var r=[];Lt(t,r,!0),gn(r,()=>{I(t),n&&n()})}function gn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function Lt(t,n,r){if((t.f&b)===0){if(t.f^=b,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&gt)!==0||(e.f&k)!==0;Lt(e,n,l?r:!1),e=a}}}function Or(t){Yt(t,!0)}function Yt(t,n){if((t.f&b)!==0){t.f^=b,(t.f&y)===0&&(t.f^=y),M(t)&&(A(t,D),tt(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&gt)!==0||(r.f&k)!==0;Yt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let L=[],et=[];function Mt(){var t=L;L=[],yt(t)}function mn(){var t=et;et=[],yt(t)}function Sr(t){L.length===0&&queueMicrotask(Mt),L.push(t)}function dt(){L.length>0&&Mt(),et.length>0&&mn()}let B=!1,V=!1,G=null,O=!1,ft=!1;function wt(t){ft=t}let F=[];let u=null,d=!1;function $(t){u=t}let f=null;function K(t){f=t}let T=null;function Tn(t){T=t}let c=null,h=0,x=null;function xn(t){x=t}let jt=1,Z=0,R=!1;function Bt(){return++jt}function M(t){var v;var n=t.f;if((n&D)!==0)return!0;if((n&C)!==0){var r=t.deps,e=(n&w)!==0;if(r!==null){var a,l,s=(n&H)!==0,i=e&&f!==null&&!R,_=r.length;if(s||i){var m=t,j=m.parent;for(a=0;a<_;a++)l=r[a],(s||!((v=l==null?void 0:l.reactions)!=null&&v.includes(m)))&&(l.reactions??(l.reactions=[])).push(m);s&&(m.f^=H),i&&j!==null&&(j.f&w)===0&&(m.f^=w)}for(a=0;a<_;a++)if(l=r[a],M(l)&&Nt(l),l.wv>t.wv)return!0}(!e||f!==null&&!R)&&A(t,y)}return!1}function An(t,n){for(var r=n;r!==null;){if((r.f&U)!==0)try{r.fn(t);return}catch{r.f^=U}r=r.parent}throw B=!1,t}function kn(t){return(t.f&W)===0&&(t.parent===null||(t.parent.f&U)===0)}function X(t,n,r,e){if(B){if(r===null&&(B=!1),kn(n))throw t;return}r!==null&&(B=!0);{An(t,n);return}}function Ut(t,n,r=!0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];(l.f&E)!==0?Ut(l,n,!1):n===l&&(r?A(l,D):(l.f&y)!==0&&A(l,C),tt(l))}}function Ht(t){var _t;var n=c,r=h,e=x,a=u,l=R,s=T,i=o,_=d,m=t.f;c=null,h=0,x=null,R=(m&w)!==0&&(d||!O||u===null),u=(m&(k|P))===0?t:null,T=null,pt(t.ctx),d=!1,Z++;try{var j=(0,t.fn)(),v=t.deps;if(c!==null){var p;if(z(t,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else t.deps=v=c;if(!R)for(p=h;p<v.length;p++)((_t=v[p]).reactions??(_t.reactions=[])).push(t)}else v!==null&&h<v.length&&(z(t,h),v.length=h);if(Q()&&x!==null&&!d&&v!==null&&(t.f&(E|C|D))===0)for(p=0;p<x.length;p++)Ut(x[p],t);return a!==null&&Z++,j}finally{c=n,h=r,x=e,u=a,R=l,T=s,pt(i),d=_}}function Rn(t,n){let r=n.reactions;if(r!==null){var e=Gt.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&(n.f&E)!==0&&(c===null||!c.includes(n))&&(A(n,C),(n.f&(w|H))===0&&(n.f^=H),It(n),z(n,0))}function z(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Rn(t,r[e])}function it(t){var n=t.f;if((n&W)===0){A(t,y);var r=f,e=o,a=O;f=t,O=!0;try{(n&st)!==0?yn(t):Ft(t),Ct(t);var l=Ht(t);t.teardown=typeof l=="function"?l:null,t.wv=jt;var s=t.deps,i}catch(_){X(_,t,r,e||t.ctx)}finally{O=a,f=r}}}function Dn(){try{tn()}catch(t){if(G!==null)X(t,G,null);else throw t}}function Vt(){var t=O;try{var n=0;for(O=!0;F.length>0;){n++>1e3&&Dn();var r=F,e=r.length;F=[];for(var a=0;a<e;a++){var l=Sn(r[a]);On(l)}}}finally{V=!1,O=t,G=null}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(W|b))===0)try{M(e)&&(it(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(a){X(a,e,null,e.ctx)}}}function tt(t){V||(V=!0,queueMicrotask(Vt));for(var n=G=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(P|k))!==0){if((r&y)===0)return;n.f^=y}}F.push(n)}function Sn(t){for(var n=[],r=t;r!==null;){var e=r.f,a=(e&(k|P))!==0,l=a&&(e&y)!==0;if(!l&&(e&b)===0){if((e&Et)!==0)n.push(r);else if(a)r.f^=y;else{var s=u;try{u=r,M(r)&&it(r)}catch(m){X(m,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function In(t){var n;for(dt();F.length>0;)V=!0,Vt(),dt();return n}async function Ir(){await Promise.resolve(),In()}function Nn(t){var n=t.f,r=(n&E)!==0;if(u!==null&&!d){T!==null&&T.includes(t)&&nn();var e=u.deps;t.rv<Z&&(t.rv=Z,c===null&&e!==null&&e[h]===t?h++:c===null?c=[t]:(!R||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&w)===0&&(a.f^=w)}return r&&(a=t,M(a)&&Nt(a)),t.v}function Nr(t){var n=d;try{return d=!0,t()}finally{d=n}}const bn=-7169;function A(t,n){t.f=t.f&bn|n}function br(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=Kt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}export{_n as $,zt as A,Mn as B,I as C,Zn as D,gt as E,$ as F,K as G,en as H,u as I,Fn as J,Pn as K,Sr as L,er as M,yr as N,Ar as O,yt as P,jn as Q,Nn as R,br as S,St as T,Rr as U,wr as V,vr as W,Er as X,cn as Y,tr as Z,nr as _,N as a,vt as a0,qn as a1,Ln as a2,ot as a3,Kn as a4,rr as a5,ir as a6,ct as a7,$n as a8,Kt as a9,pr as aA,Wt as aB,ln as aa,hr as ab,Or as ac,En as ad,Gn as ae,Bn as af,mr as ag,Jn as ah,xt as ai,Qn as aj,Un as ak,Wn as al,zn as am,fr as an,Xn as ao,Yn as ap,Pt as aq,dn as ar,In as as,or as at,Ir as au,Hn as av,$t as aw,Tr as ax,ar as ay,lr as az,At as b,q as c,g as d,an as e,kt as f,rt as g,cr as h,dr as i,Vn as j,gr as k,Cn as l,kr as m,nt as n,Dr as o,sr as p,o as q,S as r,_r as s,f as t,ur as u,sn as v,xr as w,J as x,Nr as y,wn as z};
