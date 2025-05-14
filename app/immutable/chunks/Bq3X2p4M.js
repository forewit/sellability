import{I as il,h as J,G as Df,Q as ol,R as Qo,S as Nf,aw as Of,ak as ly,aC as Ga,aj as gc,m as uy,a8 as gh,q as Ie,aD as mh,aE as hy,af as dy,aF as fy,aG as al,aH as cl,aI as py,aJ as ll,J as yo,M as gy,N as _h,O as Ls,P as Ln,T as St,at as my,an as _y,ae as Mf,al as Lf,aK as Ff,y as yy,aL as vy,K as Uf,n as Rr,aM as Iy,aN as Ey,aO as wy,aP as Ty,aQ as by,aR as Ay,aS as Bf,aT as zf,i as De,j as pt,ay as Sy,u as Ry,a3 as Ki,F as Ka,p as fi,t as zn,a as pi,s as Py,c as Pr,f as jf,r as Cr}from"./B2hv1C7k.js";import{f as Cy,i as xy,g as ky,j as Vy,d as Dy,k as Ny,p as Oy,q as My,v as Ly,n as Fy,a as rn,c as $f,t as gi}from"./DlkfHlMj.js";import{i as Uy}from"./MeeaDnBW.js";import{l as yh,p as Ke,i as By,b as Ws,r as Jo}from"./V5fbYSCP.js";let Er=null;function vh(r){Er=r}function zy(r,e){return e}function jy(r,e,t,n){for(var s=[],i=e.length,o=0;o<i;o++)hy(e[o].e,s,!0);var c=i>0&&s.length===0&&t!==null;if(c){var l=t.parentNode;dy(l),l.append(t),n.clear(),Jt(r,e[0].prev,e[i-1].next)}fy(s,()=>{for(var h=0;h<i;h++){var f=e[h];c||(n.delete(f.k),Jt(r,f.prev,f.next)),ll(f.e,!c)}})}function $y(r,e,t,n,s,i=null){var o=r,c={flags:e,items:new Map,first:null},l=(e&Ff)!==0;if(l){var h=r;o=Ie?Ls(Mf(h)):h.appendChild(Lf())}Ie&&yo();var f=null,p=!1,v=Df(()=>{var T=t();return ly(T)?T:T==null?[]:Of(T)});il(()=>{var T=J(v),S=T.length;if(p&&S===0)return;p=S===0;let x=!1;if(Ie){var A=o.data===gy;A!==(S===0)&&(o=_h(),Ls(o),Ln(!1),x=!0)}if(Ie){for(var N=null,D,V=0;V<S;V++){if(St.nodeType===8&&St.data===my){o=St,x=!0,Ln(!1);break}var O=T[V],F=n(O,V);D=qf(St,c,N,null,O,F,V,s,e,t),c.items.set(F,D),N=D}S>0&&Ls(_h())}Ie||qy(T,c,o,s,e,n,t),i!==null&&(S===0?f?ol(f):f=Qo(()=>i(o)):f!==null&&Nf(f,()=>{f=null})),x&&Ln(!0),J(v)}),Ie&&(o=St)}function qy(r,e,t,n,s,i,o){var W,ee,j,ne;var c=(s&vy)!==0,l=(s&(cl|al))!==0,h=r.length,f=e.items,p=e.first,v=p,T,S=null,x,A=[],N=[],D,V,O,F;if(c)for(F=0;F<h;F+=1)D=r[F],V=i(D,F),O=f.get(V),O!==void 0&&((W=O.a)==null||W.measure(),(x??(x=new Set)).add(O));for(F=0;F<h;F+=1){if(D=r[F],V=i(D,F),O=f.get(V),O===void 0){var P=v?v.e.nodes_start:t;S=qf(P,e,S,S===null?e.first:S.next,D,V,F,n,s,o),f.set(V,S),A=[],N=[],v=S.next;continue}if(l&&Gy(O,D,F,s),(O.e.f&Ga)!==0&&(ol(O.e),c&&((ee=O.a)==null||ee.unfix(),(x??(x=new Set)).delete(O))),O!==v){if(T!==void 0&&T.has(O)){if(A.length<N.length){var y=N[0],m;S=y.prev;var I=A[0],w=A[A.length-1];for(m=0;m<A.length;m+=1)Ih(A[m],y,t);for(m=0;m<N.length;m+=1)T.delete(N[m]);Jt(e,I.prev,w.next),Jt(e,S,I),Jt(e,w,y),v=y,S=w,F-=1,A=[],N=[]}else T.delete(O),Ih(O,v,t),Jt(e,O.prev,O.next),Jt(e,O,S===null?e.first:S.next),Jt(e,S,O),S=O;continue}for(A=[],N=[];v!==null&&v.k!==V;)(v.e.f&Ga)===0&&(T??(T=new Set)).add(v),N.push(v),v=v.next;if(v===null)continue;O=v}A.push(O),S=O,v=O.next}if(v!==null||T!==void 0){for(var b=T===void 0?[]:Of(T);v!==null;)(v.e.f&Ga)===0&&b.push(v),v=v.next;var E=b.length;if(E>0){var _=(s&Ff)!==0&&h===0?t:null;if(c){for(F=0;F<E;F+=1)(j=b[F].a)==null||j.measure();for(F=0;F<E;F+=1)(ne=b[F].a)==null||ne.fix()}jy(e,b,_,f)}}c&&yy(()=>{var Y;if(x!==void 0)for(O of x)(Y=O.a)==null||Y.apply()}),gc.first=e.first&&e.first.e,gc.last=S&&S.e}function Gy(r,e,t,n){(n&cl)!==0&&mh(r.v,e),(n&al)!==0?mh(r.i,t):r.i=t}function qf(r,e,t,n,s,i,o,c,l,h){var f=Er,p=(l&cl)!==0,v=(l&py)===0,T=p?v?uy(s):gh(s):s,S=(l&al)===0?o:gh(o),x={i:S,v:T,k:i,a:null,e:null,prev:t,next:n};Er=x;try{return x.e=Qo(()=>c(r,T,S,h),Ie),x.e.prev=t&&t.e,x.e.next=n&&n.e,t===null?e.first=x:(t.next=x,t.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{Er=f}}function Ih(r,e,t){for(var n=r.next?r.next.e.nodes_start:t,s=e?e.e.nodes_start:t,i=r.e.nodes_start;i!==n;){var o=_y(i);s.before(i),i=o}}function Jt(r,e,t){e===null?r.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Ky(r,e,t,n,s){var c;Ie&&yo();var i=(c=e.$$slots)==null?void 0:c[t],o=!1;i===!0&&(i=e.children,o=!0),i===void 0||i(r,o?()=>n:n)}function Hs(r,e,...t){var n=r,s=Rr,i;il(()=>{s!==(s=e())&&(i&&(ll(i),i=null),i=Qo(()=>s(n,...t)))},Uf),Ie&&(n=St)}function Wy(r,e,t,n,s,i){let o=Ie;Ie&&yo();var c,l,h=null;Ie&&St.nodeType===1&&(h=St,yo());var f=Ie?St:r,p,v=Er;il(()=>{const T=e()||null;var S=Iy;if(T!==c){var x=Er;vh(v),p&&(T===null?Nf(p,()=>{p=null,l=null}):T===l?ol(p):ll(p)),T&&T!==l&&(p=Qo(()=>{if(h=Ie?h:document.createElementNS(S,T),Cy(h,h),n){Ie&&xy(T)&&h.append(document.createComment(""));var A=Ie?Mf(h):h.appendChild(Lf());Ie&&(A===null?Ln(!1):Ls(A)),n(h,A)}gc.nodes_end=h,f.before(h)})),c=T,c&&(l=c),vh(x)}},Uf),o&&(Ln(!0),Ls(f))}function Gf(r){var e,t,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(e=0;e<s;e++)r[e]&&(t=Gf(r[e]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t);return n}function Kf(){for(var r,e,t=0,n="",s=arguments.length;t<s;t++)(r=arguments[t])&&(e=Gf(r))&&(n&&(n+=" "),n+=e);return n}function Hy(r){return typeof r=="object"?Kf(r):r??""}const Eh=[...` 	
\r\f \v\uFEFF`];function Qy(r,e,t){var n=r==null?"":""+r;if(t){for(var s in t)if(t[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var c=o+i;(o===0||Eh.includes(n[o-1]))&&(c===n.length||Eh.includes(n[c]))?n=(o===0?"":n.substring(0,o))+n.substring(c+1):o=c}}return n===""?null:n}function wh(r,e=!1){var t=e?" !important;":";",n="";for(var s in r){var i=r[s];i!=null&&i!==""&&(n+=" "+s+": "+i+t)}return n}function Wa(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function Jy(r,e){if(e){var t="",n,s;if(Array.isArray(e)?(n=e[0],s=e[1]):n=e,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,c=!1,l=[];n&&l.push(...Object.keys(n).map(Wa)),s&&l.push(...Object.keys(s).map(Wa));var h=0,f=-1;const x=r.length;for(var p=0;p<x;p++){var v=r[p];if(c?v==="/"&&r[p-1]==="*"&&(c=!1):i?i===v&&(i=!1):v==="/"&&r[p+1]==="*"?c=!0:v==='"'||v==="'"?i=v:v==="("?o++:v===")"&&o--,!c&&i===!1&&o===0){if(v===":"&&f===-1)f=p;else if(v===";"||p===x-1){if(f!==-1){var T=Wa(r.substring(h,f).trim());if(!l.includes(T)){v!==";"&&p++;var S=r.substring(h,p).trim();t+=" "+S+";"}}h=p+1,f=-1}}}}return n&&(t+=wh(n)),s&&(t+=wh(s,!0)),t=t.trim(),t===""?null:t}return r==null?null:String(r)}function Yy(r,e,t,n,s,i){var o=r.__className;if(Ie||o!==t||o===void 0){var c=Qy(t,n,i);(!Ie||c!==r.getAttribute("class"))&&(c==null?r.removeAttribute("class"):e?r.className=c:r.setAttribute("class",c)),r.__className=t}else if(i&&s!==i)for(var l in i){var h=!!i[l];(s==null||h!==!!s[l])&&r.classList.toggle(l,h)}return i}function Ha(r,e={},t,n){for(var s in t){var i=t[s];e[s]!==i&&(t[s]==null?r.style.removeProperty(s):r.style.setProperty(s,i,n))}}function Xy(r,e,t,n){var s=r.__style;if(Ie||s!==e){var i=Jy(e,n);(!Ie||i!==r.getAttribute("style"))&&(i==null?r.removeAttribute("style"):r.style.cssText=i),r.__style=e}else n&&(Array.isArray(n)?(Ha(r,t==null?void 0:t[0],n[0]),Ha(r,t==null?void 0:t[1],n[1],"important")):Ha(r,t,n));return n}const ys=Symbol("class"),vs=Symbol("style"),Wf=Symbol("is custom element"),Hf=Symbol("is html");function E0(r){if(Ie){var e=!1,t=()=>{if(!e){if(e=!0,r.hasAttribute("value")){var n=r.value;vo(r,"value",null),r.value=n}if(r.hasAttribute("checked")){var s=r.checked;vo(r,"checked",null),r.checked=s}}};r.__on_r=t,Ay(t),Ly()}}function Zy(r,e){e?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function vo(r,e,t,n){var s=Qf(r);Ie&&(s[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="loading"&&(r[Ey]=t),t==null?r.removeAttribute(e):typeof t!="string"&&Jf(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function jn(r,e,t,n,s=!1){var i=Qf(r),o=i[Wf],c=!i[Hf];let l=Ie&&o;l&&Ln(!1);var h=e||{},f=r.tagName==="OPTION";for(var p in e)p in t||(t[p]=null);t.class?t.class=Hy(t.class):t[ys]&&(t.class=null),t[vs]&&(t.style??(t.style=null));var v=Jf(r);for(const V in t){let O=t[V];if(f&&V==="value"&&O==null){r.value=r.__value="",h[V]=O;continue}if(V==="class"){var T=r.namespaceURI==="http://www.w3.org/1999/xhtml";Yy(r,T,O,n,e==null?void 0:e[ys],t[ys]),h[V]=O,h[ys]=t[ys];continue}if(V==="style"){Xy(r,O,e==null?void 0:e[vs],t[vs]),h[V]=O,h[vs]=t[vs];continue}var S=h[V];if(O!==S){h[V]=O;var x=V[0]+V[1];if(x!=="$$")if(x==="on"){const F={},P="$$"+V;let y=V.slice(2);var A=My(y);if(ky(y)&&(y=y.slice(0,-7),F.capture=!0),!A&&S){if(O!=null)continue;r.removeEventListener(y,h[P],F),h[P]=null}if(O!=null)if(A)r[`__${y}`]=O,Dy([y]);else{let m=function(I){h[V].call(this,I)};h[P]=Vy(y,r,m,F)}else A&&(r[`__${y}`]=void 0)}else if(V==="style")vo(r,V,O);else if(V==="autofocus")Ny(r,!!O);else if(!o&&(V==="__value"||V==="value"&&O!=null))r.value=r.__value=O;else if(V==="selected"&&f)Zy(r,O);else{var N=V;c||(N=Oy(N));var D=N==="defaultValue"||N==="defaultChecked";if(O==null&&!o&&!D)if(i[V]=null,N==="value"||N==="checked"){let F=r;const P=e===void 0;if(N==="value"){let y=F.defaultValue;F.removeAttribute(N),F.defaultValue=y,F.value=F.__value=P?y:null}else{let y=F.defaultChecked;F.removeAttribute(N),F.defaultChecked=y,F.checked=P?y:!1}}else r.removeAttribute(V);else D||v.includes(N)&&(o||typeof O!="string")?r[N]=O:typeof O!="function"&&vo(r,N,O)}}}return l&&Ln(!0),h}function Qf(r){return r.__attributes??(r.__attributes={[Wf]:r.nodeName.includes("-"),[Hf]:r.namespaceURI===wy})}var Th=new Map;function Jf(r){var e=Th.get(r.nodeName);if(e)return e;Th.set(r.nodeName,e=[]);for(var t,n=r,s=Element.prototype;s!==n;){t=by(n);for(var i in t)t[i].set&&e.push(i);n=Ty(n)}return e}const ev=()=>{};var bh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},tv=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],c=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Xf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,c=o?r[s+1]:0,l=s+2<r.length,h=l?r[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let v=(c&15)<<2|h>>6,T=h&63;l||(T=64,o||(v=64)),n.push(t[f],t[p],t[v],t[T])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Yf(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):tv(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],c=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new nv;const v=i<<2|c>>4;if(n.push(v),h!==64){const T=c<<4&240|h>>2;if(n.push(T),p!==64){const S=h<<6&192|p;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class nv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rv=function(r){const e=Yf(r);return Xf.encodeByteArray(e,!0)},Zf=function(r){return rv(r).replace(/\./g,"")},ep=function(r){try{return Xf.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=()=>tp().__FIREBASE_DEFAULTS__,iv=()=>{if(typeof process>"u"||typeof bh>"u")return;const r=bh.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ov=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&ep(r[1]);return e&&JSON.parse(e)},Yo=()=>{try{return ev()||sv()||iv()||ov()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},av=r=>{var e,t;return(t=(e=Yo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},np=()=>{var r;return(r=Yo())===null||r===void 0?void 0:r.config},rp=r=>{var e;return(e=Yo())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function uv(){var r;const e=(r=Yo())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dv(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function fv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pv(){const r=xe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function sp(){return!uv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ip(){try{return typeof indexedDB=="object"}catch{return!1}}function gv(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="FirebaseError";class Ot extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=mv,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_v(i,n):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ot(s,c,n)}}function _v(r,e){return r.replace(yv,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const yv=/\{\$([^}]+)}/g;function vv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function $n(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(Ah(i)&&Ah(o)){if(!$n(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Ah(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Cs(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xs(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Iv(r,e){const t=new Ev(r,e);return t.subscribe.bind(t)}class Ev{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");wv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Qa),s.error===void 0&&(s.error=Qa),s.complete===void 0&&(s.complete=Qa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wv(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Qa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(r){return r.endsWith(".cloudworkstations.dev")}async function op(r){return(await fetch(r,{credentials:"include"})).ok}class qn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new cv;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Av(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=Cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cn){return this.instances.has(e)}getOptions(e=Cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:bv(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Cn){return this.component?this.component.multipleInstances?e:Cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bv(r){return r===Cn?void 0:r}function Av(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Tv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(oe||(oe={}));const Rv={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Pv=oe.INFO,Cv={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},xv=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Cv[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ul{constructor(e){this.name=e,this._logLevel=Pv,this._logHandler=xv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const kv=(r,e)=>e.some(t=>r instanceof t);let Sh,Rh;function Vv(){return Sh||(Sh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dv(){return Rh||(Rh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ap=new WeakMap,mc=new WeakMap,cp=new WeakMap,Ja=new WeakMap,hl=new WeakMap;function Nv(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(sn(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ap.set(t,r)}).catch(()=>{}),hl.set(e,r),e}function Ov(r){if(mc.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});mc.set(r,e)}let _c={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return mc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||cp.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return sn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Mv(r){_c=r(_c)}function Lv(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Ya(this),e,...t);return cp.set(n,e.sort?e.sort():[e]),sn(n)}:Dv().includes(r)?function(...e){return r.apply(Ya(this),e),sn(ap.get(this))}:function(...e){return sn(r.apply(Ya(this),e))}}function Fv(r){return typeof r=="function"?Lv(r):(r instanceof IDBTransaction&&Ov(r),kv(r,Vv())?new Proxy(r,_c):r)}function sn(r){if(r instanceof IDBRequest)return Nv(r);if(Ja.has(r))return Ja.get(r);const e=Fv(r);return e!==r&&(Ja.set(r,e),hl.set(e,r)),e}const Ya=r=>hl.get(r);function Uv(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),c=sn(o);return n&&o.addEventListener("upgradeneeded",l=>{n(sn(o.result),l.oldVersion,l.newVersion,sn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Bv=["get","getKey","getAll","getAllKeys","count"],zv=["put","add","delete","clear"],Xa=new Map;function Ph(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Xa.get(e))return Xa.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=zv.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Bv.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return Xa.set(e,i),i}Mv(r=>({...r,get:(e,t,n)=>Ph(e,t)||r.get(e,t,n),has:(e,t)=>!!Ph(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($v(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function $v(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yc="@firebase/app",Ch="0.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new ul("@firebase/app"),qv="@firebase/app-compat",Gv="@firebase/analytics-compat",Kv="@firebase/analytics",Wv="@firebase/app-check-compat",Hv="@firebase/app-check",Qv="@firebase/auth",Jv="@firebase/auth-compat",Yv="@firebase/database",Xv="@firebase/data-connect",Zv="@firebase/database-compat",eI="@firebase/functions",tI="@firebase/functions-compat",nI="@firebase/installations",rI="@firebase/installations-compat",sI="@firebase/messaging",iI="@firebase/messaging-compat",oI="@firebase/performance",aI="@firebase/performance-compat",cI="@firebase/remote-config",lI="@firebase/remote-config-compat",uI="@firebase/storage",hI="@firebase/storage-compat",dI="@firebase/firestore",fI="@firebase/vertexai",pI="@firebase/firestore-compat",gI="firebase",mI="11.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="[DEFAULT]",_I={[yc]:"fire-core",[qv]:"fire-core-compat",[Kv]:"fire-analytics",[Gv]:"fire-analytics-compat",[Hv]:"fire-app-check",[Wv]:"fire-app-check-compat",[Qv]:"fire-auth",[Jv]:"fire-auth-compat",[Yv]:"fire-rtdb",[Xv]:"fire-data-connect",[Zv]:"fire-rtdb-compat",[eI]:"fire-fn",[tI]:"fire-fn-compat",[nI]:"fire-iid",[rI]:"fire-iid-compat",[sI]:"fire-fcm",[iI]:"fire-fcm-compat",[oI]:"fire-perf",[aI]:"fire-perf-compat",[cI]:"fire-rc",[lI]:"fire-rc-compat",[uI]:"fire-gcs",[hI]:"fire-gcs-compat",[dI]:"fire-fst",[pI]:"fire-fst-compat",[fI]:"fire-vertex","fire-js":"fire-js",[gI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new Map,Ic=new Map,Ec=new Map;function xh(r,e){try{r.container.addComponent(e)}catch(t){kt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function xr(r){const e=r.name;if(Ec.has(e))return kt.debug(`There were multiple attempts to register component ${e}.`),!1;Ec.set(e,r);for(const t of Gn.values())xh(t,r);for(const t of Ic.values())xh(t,r);return!0}function dl(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function ot(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new mi("app","Firebase",yI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=mI;function wc(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:vc,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw on.create("bad-app-name",{appName:String(s)});if(t||(t=np()),!t)throw on.create("no-options");const i=Gn.get(s);if(i){if($n(t,i.options)&&$n(n,i.config))return i;throw on.create("duplicate-app",{appName:s})}const o=new Sv(s);for(const l of Ec.values())o.addComponent(l);const c=new vI(t,n,o);return Gn.set(s,c),c}function lp(r=vc){const e=Gn.get(r);if(!e&&r===vc&&np())return wc();if(!e)throw on.create("no-app",{appName:r});return e}function II(){return Array.from(Gn.values())}async function EI(r){let e=!1;const t=r.name;Gn.has(t)?(e=!0,Gn.delete(t)):Ic.has(t)&&r.decRefCount()<=0&&(Ic.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function an(r,e,t){var n;let s=(n=_I[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kt.warn(c.join(" "));return}xr(new qn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="firebase-heartbeat-database",TI=1,Qs="firebase-heartbeat-store";let Za=null;function up(){return Za||(Za=Uv(wI,TI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Qs)}catch(t){console.warn(t)}}}}).catch(r=>{throw on.create("idb-open",{originalErrorMessage:r.message})})),Za}async function bI(r){try{const t=(await up()).transaction(Qs),n=await t.objectStore(Qs).get(hp(r));return await t.done,n}catch(e){if(e instanceof Ot)kt.warn(e.message);else{const t=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kt.warn(t.message)}}}async function kh(r,e){try{const n=(await up()).transaction(Qs,"readwrite");await n.objectStore(Qs).put(e,hp(r)),await n.done}catch(t){if(t instanceof Ot)kt.warn(t.message);else{const n=on.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});kt.warn(n.message)}}}function hp(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=1024,SI=30;class RI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new CI(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>SI){const o=xI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){kt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Vh(),{heartbeatsToSend:n,unsentEntries:s}=PI(this._heartbeatsCache.heartbeats),i=Zf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return kt.warn(t),""}}}function Vh(){return new Date().toISOString().substring(0,10)}function PI(r,e=AI){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Dh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Dh(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class CI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ip()?gv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return kh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return kh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Dh(r){return Zf(JSON.stringify({version:2,heartbeats:r})).length}function xI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(r){xr(new qn("platform-logger",e=>new jv(e),"PRIVATE")),xr(new qn("heartbeat",e=>new RI(e),"PRIVATE")),an(yc,Ch,r),an(yc,Ch,"esm2017"),an("fire-js","")}kI("");var VI="firebase",DI="11.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(VI,DI,"app");function fl(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}function dp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NI=dp,fp=new mi("auth","Firebase",dp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new ul("@firebase/auth");function OI(r,...e){Io.logLevel<=oe.WARN&&Io.warn(`Auth (${Qr}): ${r}`,...e)}function no(r,...e){Io.logLevel<=oe.ERROR&&Io.error(`Auth (${Qr}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(r,...e){throw pl(r,...e)}function vt(r,...e){return pl(r,...e)}function pp(r,e,t){const n=Object.assign(Object.assign({},NI()),{[e]:t});return new mi("auth","Firebase",n).create(e,{appName:r.name})}function xt(r){return pp(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pl(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return fp.create(r,...e)}function X(r,e,...t){if(!r)throw pl(e,...t)}function Rt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw no(e),new Error(e)}function Vt(r,e){r||Rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function MI(){return Nh()==="http:"||Nh()==="https:"}function Nh(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MI()||dv()||"connection"in navigator)?navigator.onLine:!0}function FI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vt(t>e,"Short delay should be less than long delay!"),this.isMobile=lv()||fv()}get(){return LI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(r,e){Vt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zI=new yi(3e4,6e4);function Mt(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Lt(r,e,t,n,s={}){return mp(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const c=_i(Object.assign({key:r.config.apiKey},o)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:l},i);return hv()||(h.referrerPolicy="no-referrer"),r.emulatorConfig&&Xo(r.emulatorConfig.host)&&(h.credentials="include"),gp.fetch()(await _p(r,r.config.apiHost,t,c),h)})}async function mp(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},UI),e);try{const s=new $I(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Wi(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wi(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wi(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wi(r,"user-disabled",o);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw pp(r,f,h);dt(r,f)}}catch(s){if(s instanceof Ot)throw s;dt(r,"network-request-failed",{message:String(s)})}}async function vi(r,e,t,n,s={}){const i=await Lt(r,e,t,n,s);return"mfaPendingCredential"in i&&dt(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function _p(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?gl(r.config,s):`${r.config.apiScheme}://${s}`;return BI.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function jI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $I{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(vt(this.auth,"network-request-failed")),zI.get())})}}function Wi(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=vt(r,e,n);return s.customData._tokenResponse=t,s}function Oh(r){return r!==void 0&&r.enterprise!==void 0}class qI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return jI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function GI(r,e){return Lt(r,"GET","/v2/recaptchaConfig",Mt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(r,e){return Lt(r,"POST","/v1/accounts:delete",e)}async function Eo(r,e){return Lt(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WI(r,e=!1){const t=Xe(r),n=await t.getIdToken(e),s=ml(n);X(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Fs(ec(s.auth_time)),issuedAtTime:Fs(ec(s.iat)),expirationTime:Fs(ec(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ec(r){return Number(r)*1e3}function ml(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return no("JWT malformed, contained fewer than 3 sections"),null;try{const s=ep(t);return s?JSON.parse(s):(no("Failed to decode base64 JWT payload"),null)}catch(s){return no("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Mh(r){const e=ml(r);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Ot&&HI(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function HI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(r){var e;const t=r.auth,n=await r.getIdToken(),s=await Js(r,Eo(t,{idToken:n}));X(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?yp(i.providerUserInfo):[],c=YI(r.providerData,o),l=r.isAnonymous,h=!(r.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new bc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function JI(r){const e=Xe(r);await wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YI(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function yp(r){return r.map(e=>{var{providerId:t}=e,n=fl(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(r,e){const t=await mp(r,{},async()=>{const n=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await _p(r,s,"/v1/token",`key=${i}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",gp.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ZI(r,e){return Lt(r,"POST","/v2/accounts:revokeToken",Mt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){X(e.length!==0,"internal-error");const t=Mh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await XI(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new wr;return n&&(X(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wr,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(r,e){X(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ht{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=fl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Js(this,this.stsTokenManager.getToken(this.auth,e));return X(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return WI(this,e)}reload(){return JI(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await wo(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(xt(this.auth));const e=await this.getIdToken();return await Js(this,KI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,o,c,l,h,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,v=(s=t.email)!==null&&s!==void 0?s:void 0,T=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=t.photoURL)!==null&&o!==void 0?o:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,A=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,N=(h=t.createdAt)!==null&&h!==void 0?h:void 0,D=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:V,emailVerified:O,isAnonymous:F,providerData:P,stsTokenManager:y}=t;X(V&&y,e,"internal-error");const m=wr.fromJSON(this.name,y);X(typeof V=="string",e,"internal-error"),$t(p,e.name),$t(v,e.name),X(typeof O=="boolean",e,"internal-error"),X(typeof F=="boolean",e,"internal-error"),$t(T,e.name),$t(S,e.name),$t(x,e.name),$t(A,e.name),$t(N,e.name),$t(D,e.name);const I=new ht({uid:V,auth:e,email:v,emailVerified:O,displayName:p,isAnonymous:F,photoURL:S,phoneNumber:T,tenantId:x,stsTokenManager:m,createdAt:N,lastLoginAt:D});return P&&Array.isArray(P)&&(I.providerData=P.map(w=>Object.assign({},w))),A&&(I._redirectEventId=A),I}static async _fromIdTokenResponse(e,t,n=!1){const s=new wr;s.updateFromServerResponse(t);const i=new ht({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await wo(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?yp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new wr;c.updateFromIdToken(n);const l=new ht({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new bc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=new Map;function Pt(r){Vt(r instanceof Function,"Expected a class definition");let e=Lh.get(r);return e?(Vt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Lh.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vp.type="NONE";const Fh=vp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(r,e,t){return`firebase:${r}:${e}:${t}`}class Tr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=ro(this.userKey,s.apiKey,i),this.fullPersistenceKey=ro("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Eo(this.auth,{idToken:e}).catch(()=>{});return t?ht._fromGetAccountInfoResponse(this.auth,t,e):null}return ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Tr(Pt(Fh),e,n);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Pt(Fh);const o=ro(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const v=await Eo(e,{idToken:f}).catch(()=>{});if(!v)break;p=await ht._fromGetAccountInfoResponse(e,v,f)}else p=ht._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Tr(i,e,n):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Tr(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ip(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ap(e))return"Blackberry";if(Sp(e))return"Webos";if(Ep(e))return"Safari";if((e.includes("chrome/")||wp(e))&&!e.includes("edge/"))return"Chrome";if(bp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Ip(r=xe()){return/firefox\//i.test(r)}function Ep(r=xe()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wp(r=xe()){return/crios\//i.test(r)}function Tp(r=xe()){return/iemobile/i.test(r)}function bp(r=xe()){return/android/i.test(r)}function Ap(r=xe()){return/blackberry/i.test(r)}function Sp(r=xe()){return/webos/i.test(r)}function _l(r=xe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function eE(r=xe()){var e;return _l(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tE(){return pv()&&document.documentMode===10}function Rp(r=xe()){return _l(r)||bp(r)||Sp(r)||Ap(r)||/windows phone/i.test(r)||Tp(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(r,e=[]){let t;switch(r){case"Browser":t=Uh(xe());break;case"Worker":t=`${Uh(xe())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Qr}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(r,e={}){return Lt(r,"GET","/v2/passwordPolicy",Mt(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=6;class iE{constructor(e){var t,n,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:sE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bh(this),this.idTokenSubscription=new Bh(this),this.beforeStateQueue=new nE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pt(t)),this._initializationPromise=this.queue(async()=>{var n,s,i;if(!this._deleted&&(this.persistenceManager=await Tr.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Eo(this,{idToken:e}),n=await ht._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject(xt(this));const t=e?Xe(e):null;return t&&X(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject(xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rE(this),t=new iE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await ZI(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pt(e)||this._popupRedirectResolver;X(t,this,"argument-error"),this.redirectPersistenceManager=await Tr.create(this,[Pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&OI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function mn(r){return Xe(r)}class Bh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Iv(t=>this.observer=t)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aE(r){Zo=r}function Cp(r){return Zo.loadJS(r)}function cE(){return Zo.recaptchaEnterpriseScript}function lE(){return Zo.gapiScript}function uE(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class hE{constructor(){this.enterprise=new dE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class dE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const fE="recaptcha-enterprise",xp="NO_RECAPTCHA";class pE{constructor(e){this.type=fE,this.auth=mn(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{GI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new qI(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Oh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(xp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hE().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(c=>{if(!t&&Oh(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=cE();l.length!==0&&(l+=c),Cp(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function zh(r,e,t,n=!1,s=!1){const i=new pE(r);let o;if(s)o=xp;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return n?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function To(r,e,t,n,s){var i;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await zh(r,e,t,t==="getOobCode");return n(r,o)}else return n(r,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await zh(r,e,t,t==="getOobCode");return n(r,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(r,e){const t=dl(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if($n(i,e??{}))return s;dt(s,"already-initialized")}return t.initialize({options:e})}function mE(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Pt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function _E(r,e,t){const n=mn(r);X(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=kp(e),{host:o,port:c}=yE(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){X(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),X($n(h,n.config.emulator)&&$n(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,vE(),Xo(o)&&op(`${i}//${o}${l}`)}function kp(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function yE(r){const e=kp(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:jh(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:jh(o)}}}function jh(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function vE(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,t){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}async function IE(r,e){return Lt(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(r,e){return vi(r,"POST","/v1/accounts:signInWithPassword",Mt(r,e))}async function wE(r,e){return Lt(r,"POST","/v1/accounts:sendOobCode",Mt(r,e))}async function TE(r,e){return wE(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bE(r,e){return vi(r,"POST","/v1/accounts:signInWithEmailLink",Mt(r,e))}async function AE(r,e){return vi(r,"POST","/v1/accounts:signInWithEmailLink",Mt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends yl{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ys(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ys(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return To(e,t,"signInWithPassword",EE);case"emailLink":return bE(e,{email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return To(e,n,"signUpPassword",IE);case"emailLink":return AE(e,{idToken:t,email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(r,e){return vi(r,"POST","/v1/accounts:signInWithIdp",Mt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="http://localhost";class Kn extends yl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=fl(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new Kn(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return br(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,br(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,br(e,t)}buildRequest(){const e={requestUri:SE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_i(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PE(r){const e=Cs(xs(r)).link,t=e?Cs(xs(e)).deep_link_id:null,n=Cs(xs(r)).deep_link_id;return(n?Cs(xs(n)).link:null)||n||t||e||r}class vl{constructor(e){var t,n,s,i,o,c;const l=Cs(xs(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(n=l.oobCode)!==null&&n!==void 0?n:null,p=RE((s=l.mode)!==null&&s!==void 0?s:null);X(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=PE(e);try{return new vl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.providerId=Jr.PROVIDER_ID}static credential(e,t){return Ys._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=vl.parseLink(t);return X(n,"argument-error"),Ys._fromEmailAndCode(e,n.code,n.tenantId)}}Jr.PROVIDER_ID="password";Jr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Vp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Ii{constructor(){super("facebook.com")}static credential(e){return Kn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Kn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Xt.credential(t,n)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Ii{constructor(){super("github.com")}static credential(e){return Kn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.GITHUB_SIGN_IN_METHOD="github.com";Zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Ii{constructor(){super("twitter.com")}static credential(e,t){return Kn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return en.credential(t,n)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CE(r,e){return vi(r,"POST","/v1/accounts:signUp",Mt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await ht._fromIdTokenResponse(e,n,s),o=$h(n);return new Wn({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=$h(n);return new Wn({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function $h(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends Ot{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,bo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new bo(e,t,n,s)}}function Dp(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bo._fromErrorAndOperation(r,i,e,n):i})}async function xE(r,e,t=!1){const n=await Js(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Wn._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(r,e,t=!1){const{auth:n}=r;if(ot(n.app))return Promise.reject(xt(n));const s="reauthenticate";try{const i=await Js(r,Dp(n,s,e,r),t);X(i.idToken,n,"internal-error");const o=ml(i.idToken);X(o,n,"internal-error");const{sub:c}=o;return X(r.uid===c,n,"user-mismatch"),Wn._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&dt(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(r,e,t=!1){if(ot(r.app))return Promise.reject(xt(r));const n="signIn",s=await Dp(r,n,e),i=await Wn._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function VE(r,e){return Np(mn(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(r){const e=mn(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function DE(r,e,t){const n=mn(r);await To(n,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",TE)}async function NE(r,e,t){if(ot(r.app))return Promise.reject(xt(r));const n=mn(r),o=await To(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",CE).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Op(r),l}),c=await Wn._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(c.user),c}function OE(r,e,t){return ot(r.app)?Promise.reject(xt(r)):VE(Xe(r),Jr.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Op(r),n})}function ME(r,e,t,n){return Xe(r).onIdTokenChanged(e,t,n)}function LE(r,e,t){return Xe(r).beforeAuthStateChanged(e,t)}function FE(r){return Xe(r).signOut()}const Ao="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ao,"1"),this.storage.removeItem(Ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=1e3,BE=10;class Lp extends Mp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);tE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,BE):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},UE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lp.type="LOCAL";const zE=Lp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp extends Mp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fp.type="SESSION";const Up=Fp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new ea(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await jE(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ea.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Il("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(p){const v=p;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(v.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return window}function qE(r){It().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function GE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KE(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function WE(){return Bp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="firebaseLocalStorageDb",HE=1,So="firebaseLocalStorage",jp="fbase_key";class Ei{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ta(r,e){return r.transaction([So],e?"readwrite":"readonly").objectStore(So)}function QE(){const r=indexedDB.deleteDatabase(zp);return new Ei(r).toPromise()}function Ac(){const r=indexedDB.open(zp,HE);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(So,{keyPath:jp})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(So)?e(n):(n.close(),await QE(),e(await Ac()))})})}async function qh(r,e,t){const n=ta(r,!0).put({[jp]:e,value:t});return new Ei(n).toPromise()}async function JE(r,e){const t=ta(r,!1).get(e),n=await new Ei(t).toPromise();return n===void 0?null:n.value}function Gh(r,e){const t=ta(r,!0).delete(e);return new Ei(t).toPromise()}const YE=800,XE=3;class $p{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ac(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>XE)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ea._getInstance(WE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await GE(),!this.activeServiceWorker)return;this.sender=new $E(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ac();return await qh(e,Ao,"1"),await Gh(e,Ao),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>qh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>JE(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Gh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ta(s,!1).getAll();return new Ei(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$p.type="LOCAL";const ZE=$p;new yi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(r,e){return e?Pt(e):(X(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends yl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return br(e,this._buildIdpRequest())}_linkToIdToken(e,t){return br(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return br(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tw(r){return Np(r.auth,new El(r),r.bypassAuthState)}function nw(r){const{auth:e,user:t}=r;return X(t,e,"internal-error"),kE(t,new El(r),r.bypassAuthState)}async function rw(r){const{auth:e,user:t}=r;return X(t,e,"internal-error"),xE(t,new El(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tw;case"linkViaPopup":case"linkViaRedirect":return rw;case"reauthViaPopup":case"reauthViaRedirect":return nw;default:dt(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=new yi(2e3,1e4);class vr extends qp{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,vr.currentPopupAction&&vr.currentPopupAction.cancel(),vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=Il();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sw.get())};e()}}vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="pendingRedirect",so=new Map;class ow extends qp{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=so.get(this.auth._key());if(!e){try{const n=await aw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}so.set(this.auth._key(),e)}return this.bypassAuthState||so.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aw(r,e){const t=uw(e),n=lw(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function cw(r,e){so.set(r._key(),e)}function lw(r){return Pt(r._redirectPersistence)}function uw(r){return ro(iw,r.config.apiKey,r.name)}async function hw(r,e,t=!1){if(ot(r.app))return Promise.reject(xt(r));const n=mn(r),s=ew(n,e),o=await new ow(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=10*60*1e3;class fw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Gp(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(vt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kh(e))}saveEventToCache(e){this.cachedEventUids.add(Kh(e)),this.lastProcessedEventTime=Date.now()}}function Kh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Gp({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pw(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gp(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(r,e={}){return Lt(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_w=/^https?/;async function yw(r){if(r.config.emulator)return;const{authorizedDomains:e}=await gw(r);for(const t of e)try{if(vw(t))return}catch{}dt(r,"unauthorized-domain")}function vw(r){const e=Tc(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!_w.test(t))return!1;if(mw.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=new yi(3e4,6e4);function Wh(){const r=It().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Ew(r){return new Promise((e,t)=>{var n,s,i;function o(){Wh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wh(),t(vt(r,"network-request-failed"))},timeout:Iw.get()})}if(!((s=(n=It().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=It().gapi)===null||i===void 0)&&i.load)o();else{const c=uE("iframefcb");return It()[c]=()=>{gapi.load?o():t(vt(r,"network-request-failed"))},Cp(`${lE()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw io=null,e})}let io=null;function ww(r){return io=io||Ew(r),io}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=new yi(5e3,15e3),bw="__/auth/iframe",Aw="emulator/auth/iframe",Sw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pw(r){const e=r.config;X(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?gl(e,Aw):`https://${r.config.authDomain}/${bw}`,n={apiKey:e.apiKey,appName:r.name,v:Qr},s=Rw.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${_i(n).slice(1)}`}async function Cw(r){const e=await ww(r),t=It().gapi;return X(t,r,"internal-error"),e.open({where:document.body,url:Pw(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sw,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=vt(r,"network-request-failed"),c=It().setTimeout(()=>{i(o)},Tw.get());function l(){It().clearTimeout(c),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kw=500,Vw=600,Dw="_blank",Nw="http://localhost";class Hh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ow(r,e,t,n=kw,s=Vw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},xw),{width:n.toString(),height:s.toString(),top:i,left:o}),h=xe().toLowerCase();t&&(c=wp(h)?Dw:t),Ip(h)&&(e=e||Nw,l.scrollbars="yes");const f=Object.entries(l).reduce((v,[T,S])=>`${v}${T}=${S},`,"");if(eE(h)&&c!=="_self")return Mw(e||"",c),new Hh(null);const p=window.open(e||"",c,f);X(p,r,"popup-blocked");try{p.focus()}catch{}return new Hh(p)}function Mw(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="__/auth/handler",Fw="emulator/auth/handler",Uw=encodeURIComponent("fac");async function Qh(r,e,t,n,s,i){X(r.config.authDomain,r,"auth-domain-config-required"),X(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Qr,eventId:s};if(e instanceof Vp){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",vv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ii){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await r._getAppCheckToken(),h=l?`#${Uw}=${encodeURIComponent(l)}`:"";return`${Bw(r)}?${_i(c).slice(1)}${h}`}function Bw({config:r}){return r.emulator?gl(r,Fw):`https://${r.authDomain}/${Lw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="webStorageSupport";class zw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Up,this._completeRedirectFn=hw,this._overrideRedirectResult=cw}async _openPopup(e,t,n,s){var i;Vt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Qh(e,t,n,Tc(),s);return Ow(e,o,Il())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await Qh(e,t,n,Tc(),s);return qE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Vt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Cw(e),n=new fw(e);return t.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(tc,{type:tc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[tc];o!==void 0&&t(!!o),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Rp()||Ep()||_l()}}const jw=zw;var Jh="@firebase/auth",Yh="1.10.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gw(r){xr(new qn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pp(r)},h=new oE(n,s,i,l);return mE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),xr(new qn("auth-internal",e=>{const t=mn(e.getProvider("auth").getImmediate());return(n=>new $w(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Jh,Yh,qw(r)),an(Jh,Yh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=5*60,Ww=rp("authIdTokenMaxAge")||Kw;let Xh=null;const Hw=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ww)return;const s=t==null?void 0:t.token;Xh!==s&&(Xh=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Qw(r=lp()){const e=dl(r,"auth");if(e.isInitialized())return e.getImmediate();const t=gE(r,{popupRedirectResolver:jw,persistence:[ZE,zE,Up]}),n=rp("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=Hw(i.toString());LE(t,o,()=>o(t.currentUser)),ME(t,c=>o(c))}}const s=av("auth");return s&&_E(t,`http://${s}`),t}function Jw(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}aE({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=vt("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",Jw().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gw("Browser");var Zh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cn,Kp;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,m){function I(){}I.prototype=m.prototype,y.D=m.prototype,y.prototype=new I,y.prototype.constructor=y,y.C=function(w,b,E){for(var _=Array(arguments.length-2),W=2;W<arguments.length;W++)_[W-2]=arguments[W];return m.prototype[b].apply(w,_)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,m,I){I||(I=0);var w=Array(16);if(typeof m=="string")for(var b=0;16>b;++b)w[b]=m.charCodeAt(I++)|m.charCodeAt(I++)<<8|m.charCodeAt(I++)<<16|m.charCodeAt(I++)<<24;else for(b=0;16>b;++b)w[b]=m[I++]|m[I++]<<8|m[I++]<<16|m[I++]<<24;m=y.g[0],I=y.g[1],b=y.g[2];var E=y.g[3],_=m+(E^I&(b^E))+w[0]+3614090360&4294967295;m=I+(_<<7&4294967295|_>>>25),_=E+(b^m&(I^b))+w[1]+3905402710&4294967295,E=m+(_<<12&4294967295|_>>>20),_=b+(I^E&(m^I))+w[2]+606105819&4294967295,b=E+(_<<17&4294967295|_>>>15),_=I+(m^b&(E^m))+w[3]+3250441966&4294967295,I=b+(_<<22&4294967295|_>>>10),_=m+(E^I&(b^E))+w[4]+4118548399&4294967295,m=I+(_<<7&4294967295|_>>>25),_=E+(b^m&(I^b))+w[5]+1200080426&4294967295,E=m+(_<<12&4294967295|_>>>20),_=b+(I^E&(m^I))+w[6]+2821735955&4294967295,b=E+(_<<17&4294967295|_>>>15),_=I+(m^b&(E^m))+w[7]+4249261313&4294967295,I=b+(_<<22&4294967295|_>>>10),_=m+(E^I&(b^E))+w[8]+1770035416&4294967295,m=I+(_<<7&4294967295|_>>>25),_=E+(b^m&(I^b))+w[9]+2336552879&4294967295,E=m+(_<<12&4294967295|_>>>20),_=b+(I^E&(m^I))+w[10]+4294925233&4294967295,b=E+(_<<17&4294967295|_>>>15),_=I+(m^b&(E^m))+w[11]+2304563134&4294967295,I=b+(_<<22&4294967295|_>>>10),_=m+(E^I&(b^E))+w[12]+1804603682&4294967295,m=I+(_<<7&4294967295|_>>>25),_=E+(b^m&(I^b))+w[13]+4254626195&4294967295,E=m+(_<<12&4294967295|_>>>20),_=b+(I^E&(m^I))+w[14]+2792965006&4294967295,b=E+(_<<17&4294967295|_>>>15),_=I+(m^b&(E^m))+w[15]+1236535329&4294967295,I=b+(_<<22&4294967295|_>>>10),_=m+(b^E&(I^b))+w[1]+4129170786&4294967295,m=I+(_<<5&4294967295|_>>>27),_=E+(I^b&(m^I))+w[6]+3225465664&4294967295,E=m+(_<<9&4294967295|_>>>23),_=b+(m^I&(E^m))+w[11]+643717713&4294967295,b=E+(_<<14&4294967295|_>>>18),_=I+(E^m&(b^E))+w[0]+3921069994&4294967295,I=b+(_<<20&4294967295|_>>>12),_=m+(b^E&(I^b))+w[5]+3593408605&4294967295,m=I+(_<<5&4294967295|_>>>27),_=E+(I^b&(m^I))+w[10]+38016083&4294967295,E=m+(_<<9&4294967295|_>>>23),_=b+(m^I&(E^m))+w[15]+3634488961&4294967295,b=E+(_<<14&4294967295|_>>>18),_=I+(E^m&(b^E))+w[4]+3889429448&4294967295,I=b+(_<<20&4294967295|_>>>12),_=m+(b^E&(I^b))+w[9]+568446438&4294967295,m=I+(_<<5&4294967295|_>>>27),_=E+(I^b&(m^I))+w[14]+3275163606&4294967295,E=m+(_<<9&4294967295|_>>>23),_=b+(m^I&(E^m))+w[3]+4107603335&4294967295,b=E+(_<<14&4294967295|_>>>18),_=I+(E^m&(b^E))+w[8]+1163531501&4294967295,I=b+(_<<20&4294967295|_>>>12),_=m+(b^E&(I^b))+w[13]+2850285829&4294967295,m=I+(_<<5&4294967295|_>>>27),_=E+(I^b&(m^I))+w[2]+4243563512&4294967295,E=m+(_<<9&4294967295|_>>>23),_=b+(m^I&(E^m))+w[7]+1735328473&4294967295,b=E+(_<<14&4294967295|_>>>18),_=I+(E^m&(b^E))+w[12]+2368359562&4294967295,I=b+(_<<20&4294967295|_>>>12),_=m+(I^b^E)+w[5]+4294588738&4294967295,m=I+(_<<4&4294967295|_>>>28),_=E+(m^I^b)+w[8]+2272392833&4294967295,E=m+(_<<11&4294967295|_>>>21),_=b+(E^m^I)+w[11]+1839030562&4294967295,b=E+(_<<16&4294967295|_>>>16),_=I+(b^E^m)+w[14]+4259657740&4294967295,I=b+(_<<23&4294967295|_>>>9),_=m+(I^b^E)+w[1]+2763975236&4294967295,m=I+(_<<4&4294967295|_>>>28),_=E+(m^I^b)+w[4]+1272893353&4294967295,E=m+(_<<11&4294967295|_>>>21),_=b+(E^m^I)+w[7]+4139469664&4294967295,b=E+(_<<16&4294967295|_>>>16),_=I+(b^E^m)+w[10]+3200236656&4294967295,I=b+(_<<23&4294967295|_>>>9),_=m+(I^b^E)+w[13]+681279174&4294967295,m=I+(_<<4&4294967295|_>>>28),_=E+(m^I^b)+w[0]+3936430074&4294967295,E=m+(_<<11&4294967295|_>>>21),_=b+(E^m^I)+w[3]+3572445317&4294967295,b=E+(_<<16&4294967295|_>>>16),_=I+(b^E^m)+w[6]+76029189&4294967295,I=b+(_<<23&4294967295|_>>>9),_=m+(I^b^E)+w[9]+3654602809&4294967295,m=I+(_<<4&4294967295|_>>>28),_=E+(m^I^b)+w[12]+3873151461&4294967295,E=m+(_<<11&4294967295|_>>>21),_=b+(E^m^I)+w[15]+530742520&4294967295,b=E+(_<<16&4294967295|_>>>16),_=I+(b^E^m)+w[2]+3299628645&4294967295,I=b+(_<<23&4294967295|_>>>9),_=m+(b^(I|~E))+w[0]+4096336452&4294967295,m=I+(_<<6&4294967295|_>>>26),_=E+(I^(m|~b))+w[7]+1126891415&4294967295,E=m+(_<<10&4294967295|_>>>22),_=b+(m^(E|~I))+w[14]+2878612391&4294967295,b=E+(_<<15&4294967295|_>>>17),_=I+(E^(b|~m))+w[5]+4237533241&4294967295,I=b+(_<<21&4294967295|_>>>11),_=m+(b^(I|~E))+w[12]+1700485571&4294967295,m=I+(_<<6&4294967295|_>>>26),_=E+(I^(m|~b))+w[3]+2399980690&4294967295,E=m+(_<<10&4294967295|_>>>22),_=b+(m^(E|~I))+w[10]+4293915773&4294967295,b=E+(_<<15&4294967295|_>>>17),_=I+(E^(b|~m))+w[1]+2240044497&4294967295,I=b+(_<<21&4294967295|_>>>11),_=m+(b^(I|~E))+w[8]+1873313359&4294967295,m=I+(_<<6&4294967295|_>>>26),_=E+(I^(m|~b))+w[15]+4264355552&4294967295,E=m+(_<<10&4294967295|_>>>22),_=b+(m^(E|~I))+w[6]+2734768916&4294967295,b=E+(_<<15&4294967295|_>>>17),_=I+(E^(b|~m))+w[13]+1309151649&4294967295,I=b+(_<<21&4294967295|_>>>11),_=m+(b^(I|~E))+w[4]+4149444226&4294967295,m=I+(_<<6&4294967295|_>>>26),_=E+(I^(m|~b))+w[11]+3174756917&4294967295,E=m+(_<<10&4294967295|_>>>22),_=b+(m^(E|~I))+w[2]+718787259&4294967295,b=E+(_<<15&4294967295|_>>>17),_=I+(E^(b|~m))+w[9]+3951481745&4294967295,y.g[0]=y.g[0]+m&4294967295,y.g[1]=y.g[1]+(b+(_<<21&4294967295|_>>>11))&4294967295,y.g[2]=y.g[2]+b&4294967295,y.g[3]=y.g[3]+E&4294967295}n.prototype.u=function(y,m){m===void 0&&(m=y.length);for(var I=m-this.blockSize,w=this.B,b=this.h,E=0;E<m;){if(b==0)for(;E<=I;)s(this,y,E),E+=this.blockSize;if(typeof y=="string"){for(;E<m;)if(w[b++]=y.charCodeAt(E++),b==this.blockSize){s(this,w),b=0;break}}else for(;E<m;)if(w[b++]=y[E++],b==this.blockSize){s(this,w),b=0;break}}this.h=b,this.o+=m},n.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var m=1;m<y.length-8;++m)y[m]=0;var I=8*this.o;for(m=y.length-8;m<y.length;++m)y[m]=I&255,I/=256;for(this.u(y),y=Array(16),m=I=0;4>m;++m)for(var w=0;32>w;w+=8)y[I++]=this.g[m]>>>w&255;return y};function i(y,m){var I=c;return Object.prototype.hasOwnProperty.call(I,y)?I[y]:I[y]=m(y)}function o(y,m){this.h=m;for(var I=[],w=!0,b=y.length-1;0<=b;b--){var E=y[b]|0;w&&E==m||(I[b]=E,w=!1)}this.g=I}var c={};function l(y){return-128<=y&&128>y?i(y,function(m){return new o([m|0],0>m?-1:0)}):new o([y|0],0>y?-1:0)}function h(y){if(isNaN(y)||!isFinite(y))return p;if(0>y)return A(h(-y));for(var m=[],I=1,w=0;y>=I;w++)m[w]=y/I|0,I*=4294967296;return new o(m,0)}function f(y,m){if(y.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(y.charAt(0)=="-")return A(f(y.substring(1),m));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(m,8)),w=p,b=0;b<y.length;b+=8){var E=Math.min(8,y.length-b),_=parseInt(y.substring(b,b+E),m);8>E?(E=h(Math.pow(m,E)),w=w.j(E).add(h(_))):(w=w.j(I),w=w.add(h(_)))}return w}var p=l(0),v=l(1),T=l(16777216);r=o.prototype,r.m=function(){if(x(this))return-A(this).m();for(var y=0,m=1,I=0;I<this.g.length;I++){var w=this.i(I);y+=(0<=w?w:4294967296+w)*m,m*=4294967296}return y},r.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(S(this))return"0";if(x(this))return"-"+A(this).toString(y);for(var m=h(Math.pow(y,6)),I=this,w="";;){var b=O(I,m).g;I=N(I,b.j(m));var E=((0<I.g.length?I.g[0]:I.h)>>>0).toString(y);if(I=b,S(I))return E+w;for(;6>E.length;)E="0"+E;w=E+w}},r.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function S(y){if(y.h!=0)return!1;for(var m=0;m<y.g.length;m++)if(y.g[m]!=0)return!1;return!0}function x(y){return y.h==-1}r.l=function(y){return y=N(this,y),x(y)?-1:S(y)?0:1};function A(y){for(var m=y.g.length,I=[],w=0;w<m;w++)I[w]=~y.g[w];return new o(I,~y.h).add(v)}r.abs=function(){return x(this)?A(this):this},r.add=function(y){for(var m=Math.max(this.g.length,y.g.length),I=[],w=0,b=0;b<=m;b++){var E=w+(this.i(b)&65535)+(y.i(b)&65535),_=(E>>>16)+(this.i(b)>>>16)+(y.i(b)>>>16);w=_>>>16,E&=65535,_&=65535,I[b]=_<<16|E}return new o(I,I[I.length-1]&-2147483648?-1:0)};function N(y,m){return y.add(A(m))}r.j=function(y){if(S(this)||S(y))return p;if(x(this))return x(y)?A(this).j(A(y)):A(A(this).j(y));if(x(y))return A(this.j(A(y)));if(0>this.l(T)&&0>y.l(T))return h(this.m()*y.m());for(var m=this.g.length+y.g.length,I=[],w=0;w<2*m;w++)I[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<y.g.length;b++){var E=this.i(w)>>>16,_=this.i(w)&65535,W=y.i(b)>>>16,ee=y.i(b)&65535;I[2*w+2*b]+=_*ee,D(I,2*w+2*b),I[2*w+2*b+1]+=E*ee,D(I,2*w+2*b+1),I[2*w+2*b+1]+=_*W,D(I,2*w+2*b+1),I[2*w+2*b+2]+=E*W,D(I,2*w+2*b+2)}for(w=0;w<m;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=m;w<2*m;w++)I[w]=0;return new o(I,0)};function D(y,m){for(;(y[m]&65535)!=y[m];)y[m+1]+=y[m]>>>16,y[m]&=65535,m++}function V(y,m){this.g=y,this.h=m}function O(y,m){if(S(m))throw Error("division by zero");if(S(y))return new V(p,p);if(x(y))return m=O(A(y),m),new V(A(m.g),A(m.h));if(x(m))return m=O(y,A(m)),new V(A(m.g),m.h);if(30<y.g.length){if(x(y)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var I=v,w=m;0>=w.l(y);)I=F(I),w=F(w);var b=P(I,1),E=P(w,1);for(w=P(w,2),I=P(I,2);!S(w);){var _=E.add(w);0>=_.l(y)&&(b=b.add(I),E=_),w=P(w,1),I=P(I,1)}return m=N(y,b.j(m)),new V(b,m)}for(b=p;0<=y.l(m);){for(I=Math.max(1,Math.floor(y.m()/m.m())),w=Math.ceil(Math.log(I)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),E=h(I),_=E.j(m);x(_)||0<_.l(y);)I-=w,E=h(I),_=E.j(m);S(E)&&(E=v),b=b.add(E),y=N(y,_)}return new V(b,y)}r.A=function(y){return O(this,y).h},r.and=function(y){for(var m=Math.max(this.g.length,y.g.length),I=[],w=0;w<m;w++)I[w]=this.i(w)&y.i(w);return new o(I,this.h&y.h)},r.or=function(y){for(var m=Math.max(this.g.length,y.g.length),I=[],w=0;w<m;w++)I[w]=this.i(w)|y.i(w);return new o(I,this.h|y.h)},r.xor=function(y){for(var m=Math.max(this.g.length,y.g.length),I=[],w=0;w<m;w++)I[w]=this.i(w)^y.i(w);return new o(I,this.h^y.h)};function F(y){for(var m=y.g.length+1,I=[],w=0;w<m;w++)I[w]=y.i(w)<<1|y.i(w-1)>>>31;return new o(I,y.h)}function P(y,m){var I=m>>5;m%=32;for(var w=y.g.length-I,b=[],E=0;E<w;E++)b[E]=0<m?y.i(E+I)>>>m|y.i(E+I+1)<<32-m:y.i(E+I);return new o(b,y.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Kp=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,cn=o}).apply(typeof Zh<"u"?Zh:typeof self<"u"?self:typeof window<"u"?window:{});var Hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wp,ks,Hp,oo,Sc,Qp,Jp,Yp;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hi=="object"&&Hi];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(a,u){if(u)e:{var d=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in d))break e;d=d[C]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,g=!1,C={next:function(){if(!g&&d<a.length){var k=d++;return{value:u(k,a[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(u,C)}}return function(){return a.apply(u,arguments)}}function v(a,u,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,v.apply(null,arguments)}function T(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,C,k){for(var U=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)U[pe-2]=arguments[pe];return u.prototype[C].apply(g,U)}}function x(a){const u=a.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function A(a,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const C=a.length||0,k=g.length||0;a.length=C+k;for(let U=0;U<k;U++)a[C+U]=g[U]}else a.push(g)}}class N{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function D(a){return/^[\s\xa0]*$/.test(a)}function V(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var F=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function P(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function y(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function m(a){const u={};for(const d in a)u[d]=a[d];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,u){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)a[d]=g[d];for(let k=0;k<I.length;k++)d=I[k],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function b(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function E(a){c.setTimeout(()=>{throw a},0)}function _(){var a=te;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class W{constructor(){this.h=this.g=null}add(u,d){const g=ee.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var ee=new N(()=>new j,a=>a.reset());class j{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,Y=!1,te=new W,fe=()=>{const a=c.Promise.resolve(void 0);ne=()=>{a.then(Se)}};var Se=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(d){E(d)}var u=ee;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}Y=!1};function ye(){this.s=this.s,this.C=this.C}ye.prototype.s=!1,ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var ft=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function He(a,u){if(ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(F){e:{try{O(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ut[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&He.aa.h.call(this)}}S(He,ve);var Ut={2:"touch",3:"pen",4:"mouse"};He.prototype.h=function(){He.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),V_=0;function D_(a,u,d,g,C){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=C,this.key=++V_,this.da=this.fa=!1}function Pi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ci(a){this.src=a,this.g={},this.h=0}Ci.prototype.add=function(a,u,d,g,C){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var U=Ta(a,u,g,C);return-1<U?(u=a[U],d||(u.fa=!1)):(u=new D_(u,this.src,k,!!g,C),u.fa=d,a.push(u)),u};function wa(a,u){var d=u.type;if(d in a.g){var g=a.g[d],C=Array.prototype.indexOf.call(g,u,void 0),k;(k=0<=C)&&Array.prototype.splice.call(g,C,1),k&&(Pi(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Ta(a,u,d,g){for(var C=0;C<a.length;++C){var k=a[C];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==g)return C}return-1}var ba="closure_lm_"+(1e6*Math.random()|0),Aa={};function mu(a,u,d,g,C){if(Array.isArray(u)){for(var k=0;k<u.length;k++)mu(a,u[k],d,g,C);return null}return d=vu(d),a&&a[ct]?a.K(u,d,h(g)?!!g.capture:!1,C):N_(a,u,d,!1,g,C)}function N_(a,u,d,g,C,k){if(!u)throw Error("Invalid event type");var U=h(C)?!!C.capture:!!C,pe=Ra(a);if(pe||(a[ba]=pe=new Ci(a)),d=pe.add(u,d,g,U,k),d.proxy)return d;if(g=O_(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)ft||(C=U),C===void 0&&(C=!1),a.addEventListener(u.toString(),g,C);else if(a.attachEvent)a.attachEvent(yu(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function O_(){function a(d){return u.call(a.src,a.listener,d)}const u=M_;return a}function _u(a,u,d,g,C){if(Array.isArray(u))for(var k=0;k<u.length;k++)_u(a,u[k],d,g,C);else g=h(g)?!!g.capture:!!g,d=vu(d),a&&a[ct]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],d=Ta(k,d,g,C),-1<d&&(Pi(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=Ra(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Ta(u,d,g,C)),(d=-1<a?u[a]:null)&&Sa(d))}function Sa(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[ct])wa(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(yu(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Ra(u))?(wa(d,a),d.h==0&&(d.src=null,u[ba]=null)):Pi(a)}}}function yu(a){return a in Aa?Aa[a]:Aa[a]="on"+a}function M_(a,u){if(a.da)a=!0;else{u=new He(u,this);var d=a.listener,g=a.ha||a.src;a.fa&&Sa(a),a=d.call(g,u)}return a}function Ra(a){return a=a[ba],a instanceof Ci?a:null}var Pa="__closure_events_fn_"+(1e9*Math.random()>>>0);function vu(a){return typeof a=="function"?a:(a[Pa]||(a[Pa]=function(u){return a.handleEvent(u)}),a[Pa])}function Le(){ye.call(this),this.i=new Ci(this),this.M=this,this.F=null}S(Le,ye),Le.prototype[ct]=!0,Le.prototype.removeEventListener=function(a,u,d,g){_u(this,a,u,d,g)};function qe(a,u){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new ve(u,a);else if(u instanceof ve)u.target=u.target||a;else{var C=u;u=new ve(g,a),w(u,C)}if(C=!0,d)for(var k=d.length-1;0<=k;k--){var U=u.g=d[k];C=xi(U,g,!0,u)&&C}if(U=u.g=a,C=xi(U,g,!0,u)&&C,C=xi(U,g,!1,u)&&C,d)for(k=0;k<d.length;k++)U=u.g=d[k],C=xi(U,g,!1,u)&&C}Le.prototype.N=function(){if(Le.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],g=0;g<d.length;g++)Pi(d[g]);delete a.g[u],a.h--}}this.F=null},Le.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},Le.prototype.L=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function xi(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,k=0;k<u.length;++k){var U=u[k];if(U&&!U.da&&U.capture==d){var pe=U.listener,Oe=U.ha||U.src;U.fa&&wa(a.i,U),C=pe.call(Oe,g)!==!1&&C}}return C&&!g.defaultPrevented}function Iu(a,u,d){if(typeof a=="function")d&&(a=v(a,d));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Eu(a){a.g=Iu(()=>{a.g=null,a.i&&(a.i=!1,Eu(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class L_ extends ye{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Eu(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function is(a){ye.call(this),this.h=a,this.g={}}S(is,ye);var wu=[];function Tu(a){P(a.g,function(u,d){this.g.hasOwnProperty(d)&&Sa(u)},a),a.g={}}is.prototype.N=function(){is.aa.N.call(this),Tu(this)},is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ca=c.JSON.stringify,F_=c.JSON.parse,U_=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function xa(){}xa.prototype.h=null;function bu(a){return a.h||(a.h=a.i())}function Au(){}var os={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ka(){ve.call(this,"d")}S(ka,ve);function Va(){ve.call(this,"c")}S(Va,ve);var En={},Su=null;function ki(){return Su=Su||new Le}En.La="serverreachability";function Ru(a){ve.call(this,En.La,a)}S(Ru,ve);function as(a){const u=ki();qe(u,new Ru(u))}En.STAT_EVENT="statevent";function Pu(a,u){ve.call(this,En.STAT_EVENT,a),this.stat=u}S(Pu,ve);function Ge(a){const u=ki();qe(u,new Pu(u,a))}En.Ma="timingevent";function Cu(a,u){ve.call(this,En.Ma,a),this.size=u}S(Cu,ve);function cs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function ls(){this.g=!0}ls.prototype.xa=function(){this.g=!1};function B_(a,u,d,g,C,k){a.info(function(){if(a.g)if(k)for(var U="",pe=k.split("&"),Oe=0;Oe<pe.length;Oe++){var le=pe[Oe].split("=");if(1<le.length){var Fe=le[0];le=le[1];var Ue=Fe.split("_");U=2<=Ue.length&&Ue[1]=="type"?U+(Fe+"="+le+"&"):U+(Fe+"=redacted&")}}else U=null;else U=k;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+d+`
`+U})}function z_(a,u,d,g,C,k,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+d+`
`+k+" "+U})}function rr(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+$_(a,d)+(g?" "+g:"")})}function j_(a,u){a.info(function(){return"TIMEOUT: "+u})}ls.prototype.info=function(){};function $_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var k=C[0];if(k!="noop"&&k!="stop"&&k!="close")for(var U=1;U<C.length;U++)C[U]=""}}}}return Ca(d)}catch{return u}}var Vi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Da;function Di(){}S(Di,xa),Di.prototype.g=function(){return new XMLHttpRequest},Di.prototype.i=function(){return{}},Da=new Di;function Bt(a,u,d,g){this.j=a,this.i=u,this.l=d,this.R=g||1,this.U=new is(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ku}function ku(){this.i=null,this.g="",this.h=!1}var Vu={},Na={};function Oa(a,u,d){a.L=1,a.v=Li(wt(u)),a.m=d,a.P=!0,Du(a,null)}function Du(a,u){a.F=Date.now(),Ni(a),a.A=wt(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Wu(d.i,"t",g),a.C=0,d=a.j.J,a.h=new ku,a.g=hh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new L_(v(a.Y,a,a.g),a.O)),u=a.U,d=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(wu[0]=C.toString()),C=wu);for(var k=0;k<C.length;k++){var U=mu(d,C[k],g||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),as(),B_(a.i,a.u,a.A,a.l,a.R,a.m)}Bt.prototype.ca=function(a){a=a.target;const u=this.M;u&&Tt(a)==3?u.j():this.Y(a)},Bt.prototype.Y=function(a){try{if(a==this.g)e:{const Ue=Tt(this.g);var u=this.g.Ba();const or=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||eh(this.g)))){this.J||Ue!=4||u==7||(u==8||0>=or?as(3):as(2)),Ma(this);var d=this.g.Z();this.X=d;t:if(Nu(this)){var g=eh(this.g);a="";var C=g.length,k=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),us(this);var U="";break t}this.h.i=new c.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(k&&u==C-1)});g.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,z_(this.i,this.u,this.A,this.l,this.R,Ue,d),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Oe=this.g;if((pe=Oe.g?Oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(pe)){var le=pe;break t}}le=null}if(d=le)rr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,La(this,d);else{this.o=!1,this.s=3,Ge(12),wn(this),us(this);break e}}if(this.P){d=!0;let lt;for(;!this.J&&this.C<U.length;)if(lt=q_(this,U),lt==Na){Ue==4&&(this.s=4,Ge(14),d=!1),rr(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==Vu){this.s=4,Ge(15),rr(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else rr(this.i,this.l,lt,null),La(this,lt);if(Nu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||U.length!=0||this.h.h||(this.s=1,Ge(16),d=!1),this.o=this.o&&d,!d)rr(this.i,this.l,U,"[Invalid Chunked Response]"),wn(this),us(this);else if(0<U.length&&!this.W){this.W=!0;var Fe=this.j;Fe.g==this&&Fe.ba&&!Fe.M&&(Fe.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),$a(Fe),Fe.M=!0,Ge(11))}}else rr(this.i,this.l,U,null),La(this,U);Ue==4&&wn(this),this.o&&!this.J&&(Ue==4?ah(this.j,this):(this.o=!1,Ni(this)))}else ay(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,Ge(12)):(this.s=0,Ge(13)),wn(this),us(this)}}}catch{}finally{}};function Nu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function q_(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?Na:(d=Number(u.substring(d,g)),isNaN(d)?Vu:(g+=1,g+d>u.length?Na:(u=u.slice(g,g+d),a.C=g+d,u)))}Bt.prototype.cancel=function(){this.J=!0,wn(this)};function Ni(a){a.S=Date.now()+a.I,Ou(a,a.I)}function Ou(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=cs(v(a.ba,a),u)}function Ma(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Bt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(j_(this.i,this.A),this.L!=2&&(as(),Ge(17)),wn(this),this.s=2,us(this)):Ou(this,this.S-a)};function us(a){a.j.G==0||a.J||ah(a.j,a)}function wn(a){Ma(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Tu(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function La(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Fa(d.h,a))){if(!a.K&&Fa(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)$i(d),zi(d);else break e;ja(d),Ge(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=cs(v(d.Za,d),6e3));if(1>=Fu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else bn(d,11)}else if((a.K||d.g==a)&&$i(d),!D(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let le=C[u];if(d.T=le[0],le=le[1],d.G==2)if(le[0]=="c"){d.K=le[1],d.ia=le[2];const Fe=le[3];Fe!=null&&(d.la=Fe,d.j.info("VER="+d.la));const Ue=le[4];Ue!=null&&(d.Aa=Ue,d.j.info("SVER="+d.Aa));const or=le[5];or!=null&&typeof or=="number"&&0<or&&(g=1.5*or,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const lt=a.g;if(lt){const Gi=lt.g?lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var k=g.h;k.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Ua(k,k.h),k.h=null))}if(g.D){const qa=lt.g?lt.g.getResponseHeader("X-HTTP-Session-Id"):null;qa&&(g.ya=qa,me(g.I,g.D,qa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var U=a;if(g.qa=uh(g,g.J?g.ia:null,g.W),U.K){Uu(g.h,U);var pe=U,Oe=g.L;Oe&&(pe.I=Oe),pe.B&&(Ma(pe),Ni(pe)),g.g=U}else ih(g);0<d.i.length&&ji(d)}else le[0]!="stop"&&le[0]!="close"||bn(d,7);else d.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?bn(d,7):za(d):le[0]!="noop"&&d.l&&d.l.ta(le),d.v=0)}}as(4)}catch{}}var G_=class{constructor(a,u){this.g=a,this.map=u}};function Mu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Lu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Fu(a){return a.h?1:a.g?a.g.size:0}function Fa(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ua(a,u){a.g?a.g.add(u):a.h=u}function Uu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Mu.prototype.cancel=function(){if(this.i=Bu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Bu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return x(a.i)}function K_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,g=0;g<d;g++)u.push(a[g]);return u}u=[],d=0;for(g in a)u[d++]=a[g];return u}function W_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const g in a)u[d++]=g;return u}}}function zu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=W_(a),g=K_(a),C=g.length,k=0;k<C;k++)u.call(void 0,g[k],d&&d[k],a)}var ju=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function H_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),C=null;if(0<=g){var k=a[d].substring(0,g);C=a[d].substring(g+1)}else k=a[d];u(k,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Tn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Tn){this.h=a.h,Oi(this,a.j),this.o=a.o,this.g=a.g,Mi(this,a.s),this.l=a.l;var u=a.i,d=new fs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),$u(this,d),this.m=a.m}else a&&(u=String(a).match(ju))?(this.h=!1,Oi(this,u[1]||"",!0),this.o=hs(u[2]||""),this.g=hs(u[3]||"",!0),Mi(this,u[4]),this.l=hs(u[5]||"",!0),$u(this,u[6]||"",!0),this.m=hs(u[7]||"")):(this.h=!1,this.i=new fs(null,this.h))}Tn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(ds(u,qu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(ds(u,qu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ds(d,d.charAt(0)=="/"?Y_:J_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ds(d,Z_)),a.join("")};function wt(a){return new Tn(a)}function Oi(a,u,d){a.j=d?hs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Mi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function $u(a,u,d){u instanceof fs?(a.i=u,ey(a.i,a.h)):(d||(u=ds(u,X_)),a.i=new fs(u,a.h))}function me(a,u,d){a.i.set(u,d)}function Li(a){return me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function hs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ds(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Q_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Q_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var qu=/[#\/\?@]/g,J_=/[#\?:]/g,Y_=/[#\?]/g,X_=/[#\?@]/g,Z_=/#/g;function fs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function zt(a){a.g||(a.g=new Map,a.h=0,a.i&&H_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=fs.prototype,r.add=function(a,u){zt(this),this.i=null,a=sr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Gu(a,u){zt(a),u=sr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Ku(a,u){return zt(a),u=sr(a,u),a.g.has(u)}r.forEach=function(a,u){zt(this),this.g.forEach(function(d,g){d.forEach(function(C){a.call(u,C,g,this)},this)},this)},r.na=function(){zt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const C=a[g];for(let k=0;k<C.length;k++)d.push(u[g])}return d},r.V=function(a){zt(this);let u=[];if(typeof a=="string")Ku(this,a)&&(u=u.concat(this.g.get(sr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return zt(this),this.i=null,a=sr(this,a),Ku(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Wu(a,u,d){Gu(a,u),0<d.length&&(a.i=null,a.g.set(sr(a,u),x(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const k=encodeURIComponent(String(g)),U=this.V(g);for(g=0;g<U.length;g++){var C=k;U[g]!==""&&(C+="="+encodeURIComponent(String(U[g]))),a.push(C)}}return this.i=a.join("&")};function sr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function ey(a,u){u&&!a.j&&(zt(a),a.i=null,a.g.forEach(function(d,g){var C=g.toLowerCase();g!=C&&(Gu(this,g),Wu(this,C,d))},a)),a.j=u}function ty(a,u){const d=new ls;if(c.Image){const g=new Image;g.onload=T(jt,d,"TestLoadImage: loaded",!0,u,g),g.onerror=T(jt,d,"TestLoadImage: error",!1,u,g),g.onabort=T(jt,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=T(jt,d,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function ny(a,u){const d=new ls,g=new AbortController,C=setTimeout(()=>{g.abort(),jt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(C),k.ok?jt(d,"TestPingServer: ok",!0,u):jt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),jt(d,"TestPingServer: error",!1,u)})}function jt(a,u,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function ry(){this.g=new U_}function sy(a,u,d){const g=d||"";try{zu(a,function(C,k){let U=C;h(C)&&(U=Ca(C)),u.push(g+k+"="+encodeURIComponent(U))})}catch(C){throw u.push(g+"type="+encodeURIComponent("_badmap")),C}}function Fi(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Fi,xa),Fi.prototype.g=function(){return new Ui(this.l,this.j)},Fi.prototype.i=function(a){return function(){return a}}({});function Ui(a,u){Le.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Ui,Le),r=Ui.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,gs(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ps(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,gs(this)),this.g&&(this.readyState=3,gs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ps(this):gs(this),this.readyState==3&&Hu(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,ps(this))},r.Qa=function(a){this.g&&(this.response=a,ps(this))},r.ga=function(){this.g&&ps(this)};function ps(a){a.readyState=4,a.l=null,a.j=null,a.v=null,gs(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function gs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Qu(a){let u="";return P(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function Ba(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Qu(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):me(a,u,d))}function be(a){Le.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(be,Le);var iy=/^https?$/i,oy=["POST","PUT"];r=be.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Da.g(),this.v=this.o?bu(this.o):bu(Da),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){Ju(this,k);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())d.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(oy,u,void 0))||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,U]of d)this.g.setRequestHeader(k,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zu(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){Ju(this,k)}};function Ju(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Yu(a),Bi(a)}function Yu(a){a.A||(a.A=!0,qe(a,"complete"),qe(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,qe(this,"complete"),qe(this,"abort"),Bi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bi(this,!0)),be.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Xu(this):this.bb())},r.bb=function(){Xu(this)};function Xu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tt(a)!=4||a.Z()!=2)){if(a.u&&Tt(a)==4)Iu(a.Ea,0,a);else if(qe(a,"readystatechange"),Tt(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=U===0){var C=String(a.D).match(ju)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!iy.test(C?C.toLowerCase():"")}d=g}if(d)qe(a,"complete"),qe(a,"success");else{a.m=6;try{var k=2<Tt(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",Yu(a)}}finally{Bi(a)}}}}function Bi(a,u){if(a.g){Zu(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||qe(a,"ready");try{d.onreadystatechange=g}catch{}}}function Zu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function Tt(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),F_(u)}};function eh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ay(a){const u={};a=(a.g&&2<=Tt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(D(a[g]))continue;var d=b(a[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[C]||[];u[C]=k,k.push(d)}y(u,function(g){return g.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ms(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function th(a){this.Aa=0,this.i=[],this.j=new ls,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ms("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ms("baseRetryDelayMs",5e3,a),this.cb=ms("retryDelaySeedMs",1e4,a),this.Wa=ms("forwardChannelMaxRetries",2,a),this.wa=ms("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Mu(a&&a.concurrentRequestLimit),this.Da=new ry,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=th.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,g){Ge(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=uh(this,null,this.W),ji(this)};function za(a){if(nh(a),a.G==3){var u=a.U++,d=wt(a.I);if(me(d,"SID",a.K),me(d,"RID",u),me(d,"TYPE","terminate"),_s(a,d),u=new Bt(a,a.j,u),u.L=2,u.v=Li(wt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=hh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ni(u)}lh(a)}function zi(a){a.g&&($a(a),a.g.cancel(),a.g=null)}function nh(a){zi(a),a.u&&(c.clearTimeout(a.u),a.u=null),$i(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ji(a){if(!Lu(a.h)&&!a.s){a.s=!0;var u=a.Ga;ne||fe(),Y||(ne(),Y=!0),te.add(u,a),a.B=0}}function cy(a,u){return Fu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=cs(v(a.Ga,a,u),ch(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Bt(this,this.j,a);let k=this.o;if(this.S&&(k?(k=m(k),w(k,this.S)):k=this.S),this.m!==null||this.O||(C.H=k,k=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=sh(this,C,u),d=wt(this.I),me(d,"RID",a),me(d,"CVER",22),this.D&&me(d,"X-HTTP-Session-Id",this.D),_s(this,d),k&&(this.O?u="headers="+encodeURIComponent(String(Qu(k)))+"&"+u:this.m&&Ba(d,this.m,k)),Ua(this.h,C),this.Ua&&me(d,"TYPE","init"),this.P?(me(d,"$req",u),me(d,"SID","null"),C.T=!0,Oa(C,d,null)):Oa(C,d,u),this.G=2}}else this.G==3&&(a?rh(this,a):this.i.length==0||Lu(this.h)||rh(this))};function rh(a,u){var d;u?d=u.l:d=a.U++;const g=wt(a.I);me(g,"SID",a.K),me(g,"RID",d),me(g,"AID",a.T),_s(a,g),a.m&&a.o&&Ba(g,a.m,a.o),d=new Bt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=sh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ua(a.h,d),Oa(d,g,u)}function _s(a,u){a.H&&P(a.H,function(d,g){me(u,g,d)}),a.l&&zu({},function(d,g){me(u,g,d)})}function sh(a,u,d){d=Math.min(a.i.length,d);var g=a.l?v(a.l.Na,a.l,a):null;e:{var C=a.i;let k=-1;for(;;){const U=["count="+d];k==-1?0<d?(k=C[0].g,U.push("ofs="+k)):k=0:U.push("ofs="+k);let pe=!0;for(let Oe=0;Oe<d;Oe++){let le=C[Oe].g;const Fe=C[Oe].map;if(le-=k,0>le)k=Math.max(0,C[Oe].g-100),pe=!1;else try{sy(Fe,U,"req"+le+"_")}catch{g&&g(Fe)}}if(pe){g=U.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,g}function ih(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ne||fe(),Y||(ne(),Y=!0),te.add(u,a),a.v=0}}function ja(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=cs(v(a.Fa,a),ch(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,oh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=cs(v(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ge(10),zi(this),oh(this))};function $a(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function oh(a){a.g=new Bt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=wt(a.qa);me(u,"RID","rpc"),me(u,"SID",a.K),me(u,"AID",a.T),me(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&me(u,"TO",a.ja),me(u,"TYPE","xmlhttp"),_s(a,u),a.m&&a.o&&Ba(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Li(wt(u)),d.m=null,d.P=!0,Du(d,a)}r.Za=function(){this.C!=null&&(this.C=null,zi(this),ja(this),Ge(19))};function $i(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function ah(a,u){var d=null;if(a.g==u){$i(a),$a(a),a.g=null;var g=2}else if(Fa(a.h,u))d=u.D,Uu(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=a.B;g=ki(),qe(g,new Cu(g,d)),ji(a)}else ih(a);else if(C=u.s,C==3||C==0&&0<u.X||!(g==1&&cy(a,u)||g==2&&ja(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),C){case 1:bn(a,5);break;case 4:bn(a,10);break;case 3:bn(a,6);break;default:bn(a,2)}}}function ch(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function bn(a,u){if(a.j.info("Error code "+u),u==2){var d=v(a.fb,a),g=a.Xa;const C=!g;g=new Tn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Oi(g,"https"),Li(g),C?ty(g.toString(),d):ny(g.toString(),d)}else Ge(2);a.G=0,a.l&&a.l.sa(u),lh(a),nh(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))};function lh(a){if(a.G=0,a.ka=[],a.l){const u=Bu(a.h);(u.length!=0||a.i.length!=0)&&(A(a.ka,u),A(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function uh(a,u,d){var g=d instanceof Tn?wt(d):new Tn(d);if(g.g!="")u&&(g.g=u+"."+g.g),Mi(g,g.s);else{var C=c.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var k=new Tn(null);g&&Oi(k,g),u&&(k.g=u),C&&Mi(k,C),d&&(k.l=d),g=k}return d=a.D,u=a.ya,d&&u&&me(g,d,u),me(g,"VER",a.la),_s(a,g),g}function hh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new be(new Fi({eb:d})):new be(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function dh(){}r=dh.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function qi(){}qi.prototype.g=function(a,u){return new Ze(a,u)};function Ze(a,u){Le.call(this),this.g=new th(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!D(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!D(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new ir(this)}S(Ze,Le),Ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ze.prototype.close=function(){za(this.g)},Ze.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Ca(a),a=d);u.i.push(new G_(u.Ya++,a)),u.G==3&&ji(u)},Ze.prototype.N=function(){this.g.l=null,delete this.j,za(this.g),delete this.g,Ze.aa.N.call(this)};function fh(a){ka.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}S(fh,ka);function ph(){Va.call(this),this.status=1}S(ph,Va);function ir(a){this.g=a}S(ir,dh),ir.prototype.ua=function(){qe(this.g,"a")},ir.prototype.ta=function(a){qe(this.g,new fh(a))},ir.prototype.sa=function(a){qe(this.g,new ph)},ir.prototype.ra=function(){qe(this.g,"b")},qi.prototype.createWebChannel=qi.prototype.g,Ze.prototype.send=Ze.prototype.o,Ze.prototype.open=Ze.prototype.m,Ze.prototype.close=Ze.prototype.close,Yp=function(){return new qi},Jp=function(){return ki()},Qp=En,Sc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vi.NO_ERROR=0,Vi.TIMEOUT=8,Vi.HTTP_ERROR=6,oo=Vi,xu.COMPLETE="complete",Hp=xu,Au.EventType=os,os.OPEN="a",os.CLOSE="b",os.ERROR="c",os.MESSAGE="d",Le.prototype.listen=Le.prototype.K,ks=Au,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,Wp=be}).apply(typeof Hi<"u"?Hi:typeof self<"u"?self:typeof window<"u"?window:{});const ed="@firebase/firestore",td="4.7.12";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yr="11.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new ul("@firebase/firestore");function pr(){return Hn.logLevel}function L(r,...e){if(Hn.logLevel<=oe.DEBUG){const t=e.map(wl);Hn.debug(`Firestore (${Yr}): ${r}`,...t)}}function Re(r,...e){if(Hn.logLevel<=oe.ERROR){const t=e.map(wl);Hn.error(`Firestore (${Yr}): ${r}`,...t)}}function Xs(r,...e){if(Hn.logLevel<=oe.WARN){const t=e.map(wl);Hn.warn(`Firestore (${Yr}): ${r}`,...t)}}function wl(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Xp(r,n,t)}function Xp(r,e,t){let n=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Re(n),new Error(n)}function H(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Xp(e,s,n)}function K(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Ot{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ze.UNAUTHENTICATED))}shutdown(){}}class Zw{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){H(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new ln;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ln,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ln)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(H(typeof n.accessToken=="string",31837,{l:n}),new Yw(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string",2055,{h:e}),new ze(e)}}class eT{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class tT{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new eT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){H(this.o===void 0,3512);const n=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new nd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(H(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new nd(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=rT(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function Z(r,e){return r<e?-1:r>e?1:0}function Rc(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=r.codePointAt(t),s=e.codePointAt(t);if(n!==s){if(n<128&&s<128)return Z(n,s);{const i=Zp(),o=sT(i.encode(rd(r,t)),i.encode(rd(e,t)));return o!==0?o:Z(n,s)}}t+=n>65535?2:1}return Z(r.length,e.length)}function rd(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function sT(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Z(r[t],e[t]);return Z(r.length,e.length)}function kr(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function tg(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=-62135596800,id=1e6;class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*id);return new Te(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<sd)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/id}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-sd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Te(0,0))}static max(){return new Q(new Te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="__name__";class gt{constructor(e,t,n){t===void 0?t=0:t>e.length&&$(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&$(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return gt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gt?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=gt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Z(e.length,t.length)}static compareSegments(e,t){const n=gt.isNumericId(e),s=gt.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?gt.extractNumericId(e).compare(gt.extractNumericId(t)):Rc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cn.fromString(e.substring(4,e.length-2))}}class ue extends gt{construct(e,t,n){return new ue(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new z(M.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const iT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends gt{construct(e,t,n){return new we(e,t,n)}static isValidIdentifier(e){return iT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===od}static keyField(){return new we([od])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(n+=c,s++):(i(),s++)}if(i(),o)throw new z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ue.fromString(e))}static fromName(e){return new B(ue.fromString(e).popFirst(5))}static empty(){return new B(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ue(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=-1;class Ro{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function Pc(r){return r.fields.find(e=>e.kind===2)}function xn(r){return r.fields.filter(e=>e.kind!==2)}Ro.UNKNOWN_ID=-1;class ao{constructor(e,t){this.fieldPath=e,this.kind=t}}class Zs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Zs(0,it.min())}}function ng(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(n===1e9?new Te(t+1,0):new Te(t,n));return new it(s,B.empty(),e)}function rg(r){return new it(r.readTime,r.key,Vr)}class it{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new it(Q.min(),B.empty(),Vr)}static max(){return new it(Q.max(),B.empty(),Vr)}}function Tl(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(r.documentKey,e.documentKey),t!==0?t:Z(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ig{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(r){if(r.code!==M.FAILED_PRECONDITION||r.message!==sg)throw r;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,n)=>{t(e)})}static reject(e){return new R((t,n)=>{n(e)})}static waitFor(e){return new R((t,n)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>n(l))}),o=!0,i===s&&t()})}static or(e){let t=R.resolve(!1);for(const n of e)t=t.next(s=>s?R.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new R((n,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===i&&n(o)},f=>s(f))}})}static doWhile(e,t){return new R((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="SimpleDb";class na{static open(e,t,n,s){try{return new na(t,e.transaction(s,n))}catch(i){throw new Us(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new ln,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Us(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=bl(n.target.error);this.S.reject(new Us(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(L(et,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new aT(t)}}class un{static delete(e){return L(et,"Removing database:",e),Vn(tp().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!ip())return!1;if(un.F())return!0;const e=xe(),t=un.M(e),n=0<t&&t<10,s=og(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.B=n,this.L=null,un.M(xe())===12.2&&Re("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(L(et,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new Us(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new z(M.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new z(M.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Us(e,o))},s.onupgradeneeded=i=>{L(et,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${o.version}`);this.B.q(o,s.transaction,i.oldVersion,this.version).next(()=>{L(et,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const n=t.target;this.L=n.version},{passive:!0})),this.$&&(this.db.onversionchange=t=>this.$(t)),this.db}U(e){this.$=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const c=na.open(this.db,e,i?"readonly":"readwrite",n),l=s(c).next(h=>(c.v(),h)).catch(h=>(c.abort(h),R.reject(h))).toPromise();return l.catch(()=>{}),await c.D,l}catch(c){const l=c,h=l.name!=="FirebaseError"&&o<3;if(L(et,"Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function og(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class oT{constructor(e){this.K=e,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(e){this.K=e}done(){this.W=!0}H(e){this.G=e}delete(){return Vn(this.K.delete())}}class Us extends z{constructor(e,t){super(M.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function yn(r){return r.name==="IndexedDbTransactionError"}class aT{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(L(et,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(L(et,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Vn(n)}add(e){return L(et,"ADD",this.store.name,e,e),Vn(this.store.add(e))}get(e){return Vn(this.store.get(e)).next(t=>(t===void 0&&(t=null),L(et,"GET",this.store.name,e,t),t))}delete(e){return L(et,"DELETE",this.store.name,e),Vn(this.store.delete(e))}count(){return L(et,"COUNT",this.store.name),Vn(this.store.count())}J(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new R((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(n),o=[];return this.Y(i,(c,l)=>{o.push(l)}).next(()=>o)}}Z(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new R((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}X(e,t){L(et,"DELETE ALL",this.store.name);const n=this.options(e,t);n.ee=!1;const s=this.cursor(n);return this.Y(s,(i,o,c)=>c.delete())}te(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.Y(s,t)}ne(e){const t=this.cursor({});return new R((n,s)=>{t.onerror=i=>{const o=bl(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}Y(e,t){const n=[];return new R((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new oT(c),h=t(c.primaryKey,c.value,l);if(h instanceof R){const f=h.catch(p=>(l.done(),R.reject(p)));n.push(f)}l.isDone?s():l.j===null?c.continue():c.continue(l.j)}}).next(()=>R.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.ee?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Vn(r){return new R((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=bl(n.target.error);t(s)}})}let ad=!1;function bl(r){const e=un.M(xe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ad||(ad=!0,setTimeout(()=>{throw n},0)),n}}return r}const Bs="IndexBackfiller";class cT{constructor(e,t){this.asyncQueue=e,this.re=t,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(e){L(Bs,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.re.se();L(Bs,`Documents written: ${t}`)}catch(t){yn(t)?L(Bs,"Ignoring IndexedDB error during index backfill: ",t):await _n(t)}await this.ie(6e4)})}}class lT{constructor(e,t){this.localStore=e,this.persistence=t}async se(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.oe(t,e))}oe(e,t){const n=new Set;let s=t,i=!0;return R.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return L(Bs,`Processing collection: ${o}`),this._e(e,o,s).next(c=>{s-=c,n.add(o)});i=!1})).next(()=>t-s)}_e(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ae(s,i)).next(c=>(L(Bs,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}ae(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=rg(i);Tl(o,n)>0&&(n=o)}),new it(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>t.writeSequenceNumber(n))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Ye.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=-1;function ra(r){return r==null}function ei(r){return r===0&&1/r==-1/0}function ag(r){return typeof r=="number"&&Number.isInteger(r)&&!ei(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="";function $e(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=cd(e)),e=uT(r.get(t),e);return cd(e)}function uT(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case Po:t+="";break;default:t+=i}}return t}function cd(r){return r+Po+""}function _t(r){const e=r.length;if(H(e>=2,64408,{path:r}),e===2)return H(r.charAt(0)===Po&&r.charAt(1)==="",56145,{path:r}),ue.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf(Po,i);switch((o<0||o>t)&&$(50515,{path:r}),r.charAt(o+1)){case"":const c=r.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:$(61167,{path:r})}i=o+2}return new ue(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="remoteDocuments",wi="owner",ar="owner",ti="mutationQueues",hT="userId",ut="mutations",ld="batchId",Mn="userMutationsIndex",ud=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(r,e){return[r,$e(e)]}function cg(r,e,t){return[r,$e(e),t]}const dT={},Dr="documentMutations",Co="remoteDocumentsV14",fT=["prefixPath","collectionGroup","readTime","documentId"],lo="documentKeyIndex",pT=["prefixPath","collectionGroup","documentId"],lg="collectionGroupIndex",gT=["collectionGroup","readTime","prefixPath","documentId"],ni="remoteDocumentGlobal",Cc="remoteDocumentGlobalKey",Nr="targets",ug="queryTargetsIndex",mT=["canonicalId","targetId"],Or="targetDocuments",_T=["targetId","path"],Al="documentTargetsIndex",yT=["path","targetId"],xo="targetGlobalKey",Un="targetGlobal",ri="collectionParents",vT=["collectionId","parent"],Mr="clientMetadata",IT="clientId",sa="bundles",ET="bundleId",ia="namedQueries",wT="name",Sl="indexConfiguration",TT="indexId",xc="collectionGroupIndex",bT="collectionGroup",ko="indexState",AT=["indexId","uid"],hg="sequenceNumberIndex",ST=["uid","sequenceNumber"],Vo="indexEntries",RT=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],dg="documentKeyIndex",PT=["indexId","uid","orderedDocumentKey"],oa="documentOverlays",CT=["userId","collectionPath","documentId"],kc="collectionPathOverlayIndex",xT=["userId","collectionPath","largestBatchId"],fg="collectionGroupOverlayIndex",kT=["userId","collectionGroup","largestBatchId"],Rl="globals",VT="name",pg=[ti,ut,Dr,kn,Nr,wi,Un,Or,Mr,ni,ri,sa,ia],DT=[...pg,oa],gg=[ti,ut,Dr,Co,Nr,wi,Un,Or,Mr,ni,ri,sa,ia,oa],mg=gg,Pl=[...mg,Sl,ko,Vo],NT=Pl,OT=[...Pl,Rl];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends ig{constructor(e,t){super(),this.he=e,this.currentSequenceNumber=t}}function ke(r,e){const t=K(r);return un.N(t.he,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function tr(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function _g(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.comparator=e,this.root=t||Me.EMPTY}insert(e,t){return new ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qi(this.root,e,this.comparator,!0)}}class Qi{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Me.RED,this.left=s??Me.EMPTY,this.right=i??Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Me(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Me.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw $(27949);return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new Me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new dd(this.data.getIterator())}getIteratorFrom(e){return new dd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class dd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function cr(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new at([])}unionWith(e){let t=new he(we.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new at(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return kr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new yg("Invalid base64 string: "+i):i}}(e);return new Pe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const MT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dt(r){if(H(!!r,39018),typeof r=="string"){let e=0;const t=MT.exec(r);if(H(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Ee(r.seconds),nanos:Ee(r.nanos)}}function Ee(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Nt(r){return typeof r=="string"?Pe.fromBase64String(r):Pe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="server_timestamp",Ig="__type__",Eg="__previous_value__",wg="__local_write_time__";function Cl(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ig])===null||t===void 0?void 0:t.stringValue)===vg}function aa(r){const e=r.mapValue.fields[Eg];return Cl(e)?aa(e):e}function si(r){const e=Dt(r.mapValue.fields[wg].timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,t,n,s,i,o,c,l,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const Do="(default)";class Qn{constructor(e,t){this.projectId=e,this.database=t||Do}static empty(){return new Qn("","")}get isDefaultDatabase(){return this.database===Do}isEqual(e){return e instanceof Qn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="__type__",Tg="__max__",nn={mapValue:{fields:{__type__:{stringValue:Tg}}}},kl="__vector__",Lr="value",uo={nullValue:"NULL_VALUE"};function dn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Cl(r)?4:bg(r)?9007199254740991:ca(r)?10:11:$(28295,{value:r})}function Et(r,e){if(r===e)return!0;const t=dn(r);if(t!==dn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return si(r).isEqual(si(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Dt(s.timestampValue),c=Dt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return Nt(s.bytesValue).isEqual(Nt(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return Ee(s.geoPointValue.latitude)===Ee(i.geoPointValue.latitude)&&Ee(s.geoPointValue.longitude)===Ee(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ee(s.integerValue)===Ee(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ee(s.doubleValue),c=Ee(i.doubleValue);return o===c?ei(o)===ei(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return kr(r.arrayValue.values||[],e.arrayValue.values||[],Et);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(hd(o)!==hd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Et(o[l],c[l])))return!1;return!0}(r,e);default:return $(52216,{left:r})}}function ii(r,e){return(r.values||[]).find(t=>Et(t,e))!==void 0}function fn(r,e){if(r===e)return 0;const t=dn(r),n=dn(e);if(t!==n)return Z(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(r.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ee(i.integerValue||i.doubleValue),l=Ee(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,e);case 3:return fd(r.timestampValue,e.timestampValue);case 4:return fd(si(r),si(e));case 5:return Rc(r.stringValue,e.stringValue);case 6:return function(i,o){const c=Nt(i),l=Nt(o);return c.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Z(c[h],l[h]);if(f!==0)return f}return Z(c.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Z(Ee(i.latitude),Ee(o.latitude));return c!==0?c:Z(Ee(i.longitude),Ee(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return pd(r.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},v=o.fields||{},T=(c=p[Lr])===null||c===void 0?void 0:c.arrayValue,S=(l=v[Lr])===null||l===void 0?void 0:l.arrayValue,x=Z(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:pd(T,S)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===nn.mapValue&&o===nn.mapValue)return 0;if(i===nn.mapValue)return 1;if(o===nn.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const v=Rc(l[p],f[p]);if(v!==0)return v;const T=fn(c[l[p]],h[f[p]]);if(T!==0)return T}return Z(l.length,f.length)}(r.mapValue,e.mapValue);default:throw $(23264,{Pe:t})}}function fd(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Z(r,e);const t=Dt(r),n=Dt(e),s=Z(t.seconds,n.seconds);return s!==0?s:Z(t.nanos,n.nanos)}function pd(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=fn(t[s],n[s]);if(i)return i}return Z(t.length,n.length)}function Fr(r){return Dc(r)}function Dc(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Dt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Nt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return B.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=Dc(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${Dc(t.fields[o])}`;return s+"}"}(r.mapValue):$(61005,{value:r})}function ho(r){switch(dn(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=aa(r);return e?16+ho(e):16;case 5:return 2*r.stringValue.length;case 6:return Nt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+ho(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return tr(n.fields,(i,o)=>{s+=i.length+ho(o)}),s}(r.mapValue);default:throw $(13486,{value:r})}}function Vl(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Nc(r){return!!r&&"integerValue"in r}function oi(r){return!!r&&"arrayValue"in r}function gd(r){return!!r&&"nullValue"in r}function md(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function fo(r){return!!r&&"mapValue"in r}function ca(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[xl])===null||t===void 0?void 0:t.stringValue)===kl}function zs(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return tr(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=zs(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zs(r.arrayValue.values[t]);return e}return Object.assign({},r)}function bg(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Tg}const Ag={mapValue:{fields:{[xl]:{stringValue:kl},[Lr]:{arrayValue:{}}}}};function FT(r){return"nullValue"in r?uo:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Vl(Qn.empty(),B.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?ca(r)?Ag:{mapValue:{}}:$(35942,{value:r})}function UT(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Vl(Qn.empty(),B.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Ag:"mapValue"in r?ca(r)?{mapValue:{}}:nn:$(61959,{value:r})}function _d(r,e){const t=fn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function yd(r,e){const t=fn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!fo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zs(t)}setAll(e){let t=we.emptyPath(),n={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=c.popLast()}o?n[c.lastSegment()]=zs(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());fo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];fo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){tr(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Je(zs(this.value))}}function Sg(r){const e=[];return tr(r.fields,(t,n)=>{const s=new we([t]);if(fo(n)){const i=Sg(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new at(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t,n,s,i,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ae(e,0,Q.min(),Q.min(),Q.min(),Je.empty(),0)}static newFoundDocument(e,t,n,s){return new Ae(e,1,t,Q.min(),n,s,0)}static newNoDocument(e,t){return new Ae(e,2,t,Q.min(),Q.min(),Je.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,Q.min(),Q.min(),Je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this.position=e,this.inclusive=t}}function vd(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=B.comparator(B.fromName(o.referenceValue),t.key):n=fn(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Id(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Et(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t="asc"){this.field=e,this.dir=t}}function BT(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{}class ae extends Rg{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new zT(e,t,n):t==="array-contains"?new qT(e,n):t==="in"?new Dg(e,n):t==="not-in"?new GT(e,n):t==="array-contains-any"?new KT(e,n):new ae(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new jT(e,n):new $T(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(fn(t,this.value)):t!==null&&dn(this.value)===dn(t)&&this.matchesComparison(fn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class de extends Rg{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new de(e,t)}matches(e){return Br(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Br(r){return r.op==="and"}function Oc(r){return r.op==="or"}function Dl(r){return Pg(r)&&Br(r)}function Pg(r){for(const e of r.filters)if(e instanceof de)return!1;return!0}function Mc(r){if(r instanceof ae)return r.field.canonicalString()+r.op.toString()+Fr(r.value);if(Dl(r))return r.filters.map(e=>Mc(e)).join(",");{const e=r.filters.map(t=>Mc(t)).join(",");return`${r.op}(${e})`}}function Cg(r,e){return r instanceof ae?function(n,s){return s instanceof ae&&n.op===s.op&&n.field.isEqual(s.field)&&Et(n.value,s.value)}(r,e):r instanceof de?function(n,s){return s instanceof de&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,c)=>i&&Cg(o,s.filters[c]),!0):!1}(r,e):void $(19439)}function xg(r,e){const t=r.filters.concat(e);return de.create(t,r.op)}function kg(r){return r instanceof ae?function(t){return`${t.field.canonicalString()} ${t.op} ${Fr(t.value)}`}(r):r instanceof de?function(t){return t.op.toString()+" {"+t.getFilters().map(kg).join(" ,")+"}"}(r):"Filter"}class zT extends ae{constructor(e,t,n){super(e,t,n),this.key=B.fromName(n.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class jT extends ae{constructor(e,t){super(e,"in",t),this.keys=Vg("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $T extends ae{constructor(e,t){super(e,"not-in",t),this.keys=Vg("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Vg(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>B.fromName(n.referenceValue))}class qT extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return oi(t)&&ii(t.arrayValue,this.value)}}class Dg extends ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ii(this.value.arrayValue,t)}}class GT extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ii(this.value.arrayValue,t)}}class KT extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!oi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>ii(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,t=null,n=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Ie=null}}function Lc(r,e=null,t=[],n=[],s=null,i=null,o=null){return new WT(r,e,t,n,s,i,o)}function Jn(r){const e=K(r);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Mc(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),ra(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Fr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Fr(n)).join(",")),e.Ie=t}return e.Ie}function Ti(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!BT(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Cg(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Id(r.startAt,e.startAt)&&Id(r.endAt,e.endAt)}function Oo(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Mo(r,e){return r.filters.filter(t=>t instanceof ae&&t.field.isEqual(e))}function Ed(r,e,t){let n=uo,s=!0;for(const i of Mo(r,e)){let o=uo,c=!0;switch(i.op){case"<":case"<=":o=FT(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=uo}_d({value:n,inclusive:s},{value:o,inclusive:c})<0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];_d({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function wd(r,e,t){let n=nn,s=!0;for(const i of Mo(r,e)){let o=nn,c=!0;switch(i.op){case">=":case">":o=UT(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=nn}yd({value:n,inclusive:s},{value:o,inclusive:c})>0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];yd({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,t=null,n=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Ng(r,e,t,n,s,i,o,c){return new la(r,e,t,n,s,i,o,c)}function ua(r){return new la(r)}function Td(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function HT(r){return r.collectionGroup!==null}function js(r){const e=K(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new he(we.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new No(i,n))}),t.has(we.keyField().canonicalString())||e.Ee.push(new No(we.keyField(),n))}return e.Ee}function rt(r){const e=K(r);return e.de||(e.de=QT(e,js(r))),e.de}function QT(r,e){if(r.limitType==="F")return Lc(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new No(s.field,i)});const t=r.endAt?new Ur(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Ur(r.startAt.position,r.startAt.inclusive):null;return Lc(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Fc(r,e,t){return new la(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function ha(r,e){return Ti(rt(r),rt(e))&&r.limitType===e.limitType}function Og(r){return`${Jn(rt(r))}|lt:${r.limitType}`}function gr(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>kg(s)).join(", ")}]`),ra(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Fr(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Fr(s)).join(",")),`Target(${n})`}(rt(r))}; limitType=${r.limitType})`}function bi(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of js(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,c,l){const h=vd(o,c,l);return o.inclusive?h<=0:h<0}(n.startAt,js(n),s)||n.endAt&&!function(o,c,l){const h=vd(o,c,l);return o.inclusive?h>=0:h>0}(n.endAt,js(n),s))}(r,e)}function Mg(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Lg(r){return(e,t)=>{let n=!1;for(const s of js(r)){const i=JT(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function JT(r,e,t){const n=r.field.isKeyField()?B.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?fn(l,h):$(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return $(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){tr(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return _g(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=new ge(B.comparator);function tt(){return YT}const Fg=new ge(B.comparator);function Vs(...r){let e=Fg;for(const t of r)e=e.insert(t.key,t);return e}function Ug(r){let e=Fg;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function yt(){return $s()}function Bg(){return $s()}function $s(){return new Ft(r=>r.toString(),(r,e)=>r.isEqual(e))}const XT=new ge(B.comparator),ZT=new he(B.comparator);function se(...r){let e=ZT;for(const t of r)e=e.add(t);return e}const eb=new he(Z);function Nl(){return eb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ei(e)?"-0":e}}function zg(r){return{integerValue:""+r}}function tb(r,e){return ag(e)?zg(e):Ol(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this._=void 0}}function nb(r,e,t){return r instanceof ai?function(s,i){const o={fields:{[Ig]:{stringValue:vg},[wg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Cl(i)&&(i=aa(i)),i&&(o.fields[Eg]=i),{mapValue:o}}(t,e):r instanceof zr?$g(r,e):r instanceof jr?qg(r,e):function(s,i){const o=jg(s,i),c=bd(o)+bd(s.Re);return Nc(o)&&Nc(s.Re)?zg(c):Ol(s.serializer,c)}(r,e)}function rb(r,e,t){return r instanceof zr?$g(r,e):r instanceof jr?qg(r,e):t}function jg(r,e){return r instanceof ci?function(n){return Nc(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class ai extends da{}class zr extends da{constructor(e){super(),this.elements=e}}function $g(r,e){const t=Gg(e);for(const n of r.elements)t.some(s=>Et(s,n))||t.push(n);return{arrayValue:{values:t}}}class jr extends da{constructor(e){super(),this.elements=e}}function qg(r,e){let t=Gg(e);for(const n of r.elements)t=t.filter(s=>!Et(s,n));return{arrayValue:{values:t}}}class ci extends da{constructor(e,t){super(),this.serializer=e,this.Re=t}}function bd(r){return Ee(r.integerValue||r.doubleValue)}function Gg(r){return oi(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t){this.field=e,this.transform=t}}function ib(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof zr&&s instanceof zr||n instanceof jr&&s instanceof jr?kr(n.elements,s.elements,Et):n instanceof ci&&s instanceof ci?Et(n.Re,s.Re):n instanceof ai&&s instanceof ai}(r.transform,e.transform)}class ob{constructor(e,t){this.version=e,this.transformResults=t}}class nt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nt}static exists(e){return new nt(void 0,e)}static updateTime(e){return new nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function po(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class fa{}function Kg(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Ml(r.key,nt.none()):new Xr(r.key,r.data,nt.none());{const t=r.data,n=Je.empty();let s=new he(we.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new vn(r.key,n,new at(s.toArray()),nt.none())}}function ab(r,e,t){r instanceof Xr?function(s,i,o){const c=s.value.clone(),l=Sd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof vn?function(s,i,o){if(!po(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Sd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Wg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function qs(r,e,t,n){return r instanceof Xr?function(i,o,c,l){if(!po(i.precondition,o))return c;const h=i.value.clone(),f=Rd(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof vn?function(i,o,c,l){if(!po(i.precondition,o))return c;const h=Rd(i.fieldTransforms,l,o),f=o.data;return f.setAll(Wg(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(i,o,c){return po(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function cb(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=jg(n.transform,s||null);i!=null&&(t===null&&(t=Je.empty()),t.set(n.field,i))}return t||null}function Ad(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&kr(n,s,(i,o)=>ib(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Xr extends fa{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vn extends fa{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Wg(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Sd(r,e,t){const n=new Map;H(r.length===t.length,32656,{Ve:t.length,me:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,c=e.data.field(i.field);n.set(i.field,rb(o,c,t[s]))}return n}function Rd(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,nb(i,o,e))}return n}class Ml extends fa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hg extends fa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ab(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=qs(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=qs(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Bg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Kg(o,c);l!==null&&n.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Q.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&kr(this.mutations,e.mutations,(t,n)=>Ad(t,n))&&kr(this.baseMutations,e.baseMutations,(t,n)=>Ad(t,n))}}class Fl{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){H(e.mutations.length===n.length,58842,{fe:e.mutations.length,ge:n.length});let s=function(){return XT}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Fl(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ce;function ub(r){switch(r){case M.OK:return $(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return $(15467,{code:r})}}function Qg(r){if(r===void 0)return Re("GRPC error has no .code"),M.UNKNOWN;switch(r){case Ce.OK:return M.OK;case Ce.CANCELLED:return M.CANCELLED;case Ce.UNKNOWN:return M.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return M.INTERNAL;case Ce.UNAVAILABLE:return M.UNAVAILABLE;case Ce.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ce.NOT_FOUND:return M.NOT_FOUND;case Ce.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ce.ABORTED:return M.ABORTED;case Ce.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ce.DATA_LOSS:return M.DATA_LOSS;default:return $(39323,{code:r})}}(ce=Ce||(Ce={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=new cn([4294967295,4294967295],0);function Pd(r){const e=Zp().encode(r),t=new Kp;return t.update(e),new Uint8Array(t.digest())}function Cd(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new cn([t,n],0),new cn([s,i],0)]}class Bl{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ds(`Invalid padding: ${t}`);if(n<0)throw new Ds(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Ds(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Ds(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=cn.fromNumber(this.pe)}we(e,t,n){let s=e.add(t.multiply(cn.fromNumber(n)));return s.compare(hb)===1&&(s=new cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Pd(e),[n,s]=Cd(t);for(let i=0;i<this.hashCount;i++){const o=this.we(n,s,i);if(!this.be(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Bl(i,s,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.pe===0)return;const t=Pd(e),[n,s]=Cd(t);for(let i=0;i<this.hashCount;i++){const o=this.we(n,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Si.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ai(Q.min(),s,new ge(Z),tt(),se())}}class Si{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Si(n,t,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t,n,s){this.De=e,this.removedTargetIds=t,this.key=n,this.ve=s}}class Jg{constructor(e,t){this.targetId=e,this.Ce=t}}class Yg{constructor(e,t,n=Pe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class xd{constructor(){this.Fe=0,this.Me=kd(),this.xe=Pe.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=se(),t=se(),n=se();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:$(38017,{changeType:i})}}),new Si(this.xe,this.Oe,e,t,n)}Qe(){this.Ne=!1,this.Me=kd()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,H(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class db{constructor(e){this.ze=e,this.je=new Map,this.He=tt(),this.Je=Ji(),this.Ye=Ji(),this.Ze=new ge(Z)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const n=this.rt(t);switch(e.state){case 0:this.it(t)&&n.ke(e.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(e.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(t);break;case 3:this.it(t)&&(n.Ge(),n.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),n.ke(e.resumeToken));break;default:$(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((n,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,n=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(Oo(i))if(n===0){const o=new B(i.path);this.tt(t,o,Ae.newNoDocument(o,Q.min()))}else H(n===1,20013,{expectedCount:n});else{const o=this.ut(t);if(o!==n){const c=this.ct(e),l=c?this.lt(c,e,o):1;if(l!==0){this.st(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Nt(n).toUint8Array()}catch(l){if(l instanceof yg)return Xs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Bl(o,s,i)}catch(l){return Xs(l instanceof Ds?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.pe===0?null:c}lt(e,t,n){return t.Ce.count===n-this.Tt(e,t.targetId)?0:2}Tt(e,t){const n=this.ze.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.ze.Pt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,o)=>{const c=this._t(o);if(c){if(i.current&&Oo(c.target)){const l=new B(c.target.path);this.Et(l).has(o)||this.dt(o,l)||this.tt(o,l,Ae.newNoDocument(l,e))}i.Le&&(t.set(o,i.qe()),i.Qe())}});let n=se();this.Ye.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this._t(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Ai(e,t,this.Ze,this.He,n);return this.He=tt(),this.Je=Ji(),this.Ye=Ji(),this.Ze=new ge(Z),s}et(e,t){if(!this.it(e))return;const n=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,n),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,n){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),n&&(this.He=this.He.insert(t,n))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new xd,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new he(Z),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new he(Z),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new xd),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Ji(){return new ge(B.comparator)}function kd(){return new ge(B.comparator)}const fb={asc:"ASCENDING",desc:"DESCENDING"},pb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gb={and:"AND",or:"OR"};class mb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Uc(r,e){return r.useProto3Json||ra(e)?e:{value:e}}function $r(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xg(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function _b(r,e){return $r(r,e.toTimestamp())}function We(r){return H(!!r,49232),Q.fromTimestamp(function(t){const n=Dt(t);return new Te(n.seconds,n.nanos)}(r))}function zl(r,e){return Bc(r,e).canonicalString()}function Bc(r,e){const t=function(s){return new ue(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Zg(r){const e=ue.fromString(r);return H(cm(e),10190,{key:e.toString()}),e}function Lo(r,e){return zl(r.databaseId,e.path)}function Bn(r,e){const t=Zg(e);if(t.get(1)!==r.databaseId.projectId)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new B(nm(t))}function em(r,e){return zl(r.databaseId,e)}function tm(r){const e=Zg(r);return e.length===4?ue.emptyPath():nm(e)}function zc(r){return new ue(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function nm(r){return H(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Vd(r,e,t){return{name:Lo(r,e),fields:t.value.mapValue.fields}}function yb(r,e,t){const n=Bn(r,e.name),s=We(e.updateTime),i=e.createTime?We(e.createTime):Q.min(),o=new Je({mapValue:{fields:e.fields}}),c=Ae.newFoundDocument(n,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function vb(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:$(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(H(f===void 0||typeof f=="string",58123),Pe.fromBase64String(f||"")):(H(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Pe.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?M.UNKNOWN:Qg(h.code);return new z(f,h.message||"")}(o);t=new Yg(n,s,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Bn(r,n.document.name),i=We(n.document.updateTime),o=n.document.createTime?We(n.document.createTime):Q.min(),c=new Je({mapValue:{fields:n.document.fields}}),l=Ae.newFoundDocument(s,i,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new go(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Bn(r,n.document),i=n.readTime?We(n.readTime):Q.min(),o=Ae.newNoDocument(s,i),c=n.removedTargetIds||[];t=new go([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Bn(r,n.document),i=n.removedTargetIds||[];t=new go([],i,s,null)}else{if(!("filter"in e))return $(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new lb(s,i),c=n.targetId;t=new Jg(c,o)}}return t}function Fo(r,e){let t;if(e instanceof Xr)t={update:Vd(r,e.key,e.value)};else if(e instanceof Ml)t={delete:Lo(r,e.key)};else if(e instanceof vn)t={update:Vd(r,e.key,e.data),updateMask:Ab(e.fieldMask)};else{if(!(e instanceof Hg))return $(16599,{ft:e.type});t={verify:Lo(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const c=o.transform;if(c instanceof ai)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof zr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof jr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ci)return{fieldPath:o.field.canonicalString(),increment:c.Re};throw $(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_b(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$(27497)}(r,e.precondition)),t}function jc(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?nt.updateTime(We(i.updateTime)):i.exists!==void 0?nt.exists(i.exists):nt.none()}(e.currentDocument):nt.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)H(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),l=new ai;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new zr(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new jr(f)}else"increment"in c?l=new ci(o,c.increment):$(16584,{proto:c});const h=we.fromServerFormat(c.fieldPath);return new sb(h,l)}(r,s)):[];if(e.update){e.update.name;const s=Bn(r,e.update.name),i=new Je({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new at(h.map(f=>we.fromServerFormat(f)))}(e.updateMask);return new vn(s,i,o,t,n)}return new Xr(s,i,t,n)}if(e.delete){const s=Bn(r,e.delete);return new Ml(s,t)}if(e.verify){const s=Bn(r,e.verify);return new Hg(s,t)}return $(1463,{proto:e})}function Ib(r,e){return r&&r.length>0?(H(e!==void 0,14353),r.map(t=>function(s,i){let o=s.updateTime?We(s.updateTime):We(i);return o.isEqual(Q.min())&&(o=We(i)),new ob(o,s.transformResults||[])}(t,e))):[]}function rm(r,e){return{documents:[em(r,e.path)]}}function sm(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=em(r,s);const i=function(h){if(h.length!==0)return am(de.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(v){return{field:mr(v.field),direction:wb(v.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Uc(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:t,parent:s}}function im(r){let e=tm(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){H(n===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const v=om(p);return v instanceof de&&Dl(v)?v.getFilters():[v]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(v=>function(S){return new No(_r(S.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(v))}(t.orderBy));let c=null;t.limit&&(c=function(p){let v;return v=typeof p=="object"?p.value:p,ra(v)?null:v}(t.limit));let l=null;t.startAt&&(l=function(p){const v=!!p.before,T=p.values||[];return new Ur(T,v)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const v=!p.before,T=p.values||[];return new Ur(T,v)}(t.endAt)),Ng(e,s,o,i,c,"F",l,h)}function Eb(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function om(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=_r(t.unaryFilter.field);return ae.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=_r(t.unaryFilter.field);return ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_r(t.unaryFilter.field);return ae.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_r(t.unaryFilter.field);return ae.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return $(61313);default:return $(60726)}}(r):r.fieldFilter!==void 0?function(t){return ae.create(_r(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return $(58110);default:return $(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return de.create(t.compositeFilter.filters.map(n=>om(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $(1026)}}(t.compositeFilter.op))}(r):$(30097,{filter:r})}function wb(r){return fb[r]}function Tb(r){return pb[r]}function bb(r){return gb[r]}function mr(r){return{fieldPath:r.canonicalString()}}function _r(r){return we.fromServerFormat(r.fieldPath)}function am(r){return r instanceof ae?function(t){if(t.op==="=="){if(md(t.value))return{unaryFilter:{field:mr(t.field),op:"IS_NAN"}};if(gd(t.value))return{unaryFilter:{field:mr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(md(t.value))return{unaryFilter:{field:mr(t.field),op:"IS_NOT_NAN"}};if(gd(t.value))return{unaryFilter:{field:mr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mr(t.field),op:Tb(t.op),value:t.value}}}(r):r instanceof de?function(t){const n=t.getFilters().map(s=>am(s));return n.length===1?n[0]:{compositeFilter:{op:bb(t.op),filters:n}}}(r):$(54877,{filter:r})}function Ab(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function cm(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t,n,s,i=Q.min(),o=Q.min(),c=Pe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Ct(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.wt=e}}function Sb(r,e){let t;if(e.document)t=yb(r.wt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=B.fromSegments(e.noDocument.path),s=Xn(e.noDocument.readTime);t=Ae.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return $(56709);{const n=B.fromSegments(e.unknownDocument.path),s=Xn(e.unknownDocument.version);t=Ae.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new Te(s[0],s[1]);return Q.fromTimestamp(i)}(e.readTime)),t}function Dd(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Uo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:Lo(i,o.key),fields:o.data.value.mapValue.fields,updateTime:$r(i,o.version.toTimestamp()),createTime:$r(i,o.createTime.toTimestamp())}}(r.wt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Yn(e.version)};else{if(!e.isUnknownDocument())return $(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:Yn(e.version)}}return n}function Uo(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function Yn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Xn(r){const e=new Te(r.seconds,r.nanoseconds);return Q.fromTimestamp(e)}function Dn(r,e){const t=(e.baseMutations||[]).map(i=>jc(r.wt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>jc(r.wt,i)),s=Te.fromMillis(e.localWriteTimeMs);return new Ll(e.batchId,s,t,n)}function Ns(r){const e=Xn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Xn(r.lastLimboFreeSnapshotVersion):Q.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const o=i.documents.length;return H(o===1,1966,{count:o}),rt(ua(tm(i.documents[0])))}(r.query):function(i){return rt(im(i))}(r.query),new Ct(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,Pe.fromBase64String(r.resumeToken))}function um(r,e){const t=Yn(e.snapshotVersion),n=Yn(e.lastLimboFreeSnapshotVersion);let s;s=Oo(e.target)?rm(r.wt,e.target):sm(r.wt,e.target).gt;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Jn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function hm(r){const e=im({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Fc(e,e.limit,"L"):e}function nc(r,e){return new Ul(e.largestBatchId,jc(r.wt,e.overlayMutation))}function Nd(r,e){const t=e.path.lastSegment();return[r,$e(e.path.popLast()),t]}function Od(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:Yn(n.readTime),documentKey:$e(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{getBundleMetadata(e,t){return Md(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:Xn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return Md(e).put(function(s){return{bundleId:s.id,createTime:Yn(We(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Ld(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:hm(i.bundledQuery),readTime:Xn(i.readTime)}}(n)})}saveNamedQuery(e,t){return Ld(e).put(function(s){return{name:s.name,readTime:Yn(We(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Md(r){return ke(r,sa)}function Ld(r){return ke(r,ia)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t){this.serializer=e,this.userId=t}static bt(e,t){const n=t.uid||"";return new pa(e,n)}getOverlay(e,t){return Is(e).get(Nd(this.userId,t)).next(n=>n?nc(this.serializer,n):null)}getOverlays(e,t){const n=yt();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const c=new Ul(t,o);s.push(this.St(e,c))}),R.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add($e(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Is(e).X(kc,c))}),R.waitFor(i)}getOverlaysForCollection(e,t,n){const s=yt(),i=$e(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Is(e).J(kc,o).next(c=>{for(const l of c){const h=nc(this.serializer,l);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=yt();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Is(e).te({index:fg,range:c},(l,h,f)=>{const p=nc(this.serializer,h);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>i)}St(e,t){return Is(e).put(function(s,i,o){const[c,l,h]=Nd(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Fo(s.wt,o.mutation)}}(this.serializer,this.userId,t))}}function Is(r){return ke(r,oa)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{Dt(e){return ke(e,Rl)}getSessionToken(e){return this.Dt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?Pe.fromUint8Array(n):Pe.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(Ee(e.integerValue));else if("doubleValue"in e){const n=Ee(e.doubleValue);isNaN(n)?this.Mt(t,13):(this.Mt(t,15),ei(n)?t.xt(0):t.xt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Mt(t,20),typeof n=="string"&&(n=Dt(n)),t.Ot(`${n.seconds||""}`),t.xt(n.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(Nt(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Mt(t,45),t.xt(n.latitude||0),t.xt(n.longitude||0)}else"mapValue"in e?bg(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):ca(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):$(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){const n=e.fields||{};this.Mt(t,55);for(const s of Object.keys(n))this.Nt(s,t),this.Ct(n[s],t)}qt(e,t){var n,s;const i=e.fields||{};this.Mt(t,53);const o=Lr,c=((s=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.Mt(t,15),t.xt(Ee(c)),this.Nt(o,t),this.Ct(i[o],t)}$t(e,t){const n=e.values||[];this.Mt(t,50);for(const s of n)this.Ct(s,t)}kt(e,t){this.Mt(t,37),B.fromName(e).path.forEach(n=>{this.Mt(t,60),this.Kt(n,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}Nn.Wt=new Nn;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=255;function Cb(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function Fd(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=Cb(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class xb{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.zt(n.value),n=t.next();this.jt()}Ht(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Yt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.zt(n);else if(n<2048)this.zt(960|n>>>6),this.zt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.zt(480|n>>>12),this.zt(128|63&n>>>6),this.zt(128|63&n);else{const s=t.codePointAt(0);this.zt(240|s>>>18),this.zt(128|63&s>>>12),this.zt(128|63&s>>>6),this.zt(128|63&s)}}this.jt()}Xt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Yt()}en(e){const t=this.tn(e),n=Fd(t);this.nn(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}rn(e){const t=this.tn(e),n=Fd(t);this.nn(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}sn(){this._n(lr),this._n(255)}an(){this.un(lr),this.un(255)}reset(){this.position=0}seed(e){this.nn(e.length),this.buffer.set(e,this.position),this.position+=e.length}cn(){return this.buffer.slice(0,this.position)}tn(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}zt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===lr?(this._n(lr),this._n(0)):this._n(t)}Jt(e){const t=255&e;t===0?(this.un(0),this.un(255)):t===lr?(this.un(lr),this.un(0)):this.un(e)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(e){this.nn(1),this.buffer[this.position++]=e}un(e){this.nn(1),this.buffer[this.position++]=~e}nn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class kb{constructor(e){this.ln=e}Lt(e){this.ln.Gt(e)}Ot(e){this.ln.Zt(e)}xt(e){this.ln.en(e)}Ft(){this.ln.sn()}}class Vb{constructor(e){this.ln=e}Lt(e){this.ln.Ht(e)}Ot(e){this.ln.Xt(e)}xt(e){this.ln.rn(e)}Ft(){this.ln.an()}}class Es{constructor(){this.ln=new xb,this.hn=new kb(this.ln),this.Pn=new Vb(this.ln)}seed(e){this.ln.seed(e)}Tn(e){return e===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}In(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new On(this.indexId,this.documentKey,this.arrayValue,n)}}function qt(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=Ud(r.arrayValue,e.arrayValue),t!==0?t:(t=Ud(r.directionalValue,e.directionalValue),t!==0?t:B.comparator(r.documentKey,e.documentKey)))}function Ud(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e){this.En=new he((t,n)=>we.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.An=[];for(const t of e.filters){const n=t;n.isInequality()?this.En=this.En.add(n):this.An.push(n)}}get Rn(){return this.En.size>1}Vn(e){if(H(e.collectionGroup===this.collectionId,49279),this.Rn)return!1;const t=Pc(e);if(t!==void 0&&!this.mn(t))return!1;const n=xn(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.mn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.En.size>0){const c=this.En.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=n[i];if(!this.fn(c,l)||!this.gn(this.dn[o++],l))return!1}++i}for(;i<n.length;++i){const c=n[i];if(o>=this.dn.length||!this.gn(this.dn[o++],c))return!1}return!0}pn(){if(this.Rn)return null;let e=new he(we.comparator);const t=[];for(const n of this.An)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new ao(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new ao(n.field,0))}for(const n of this.dn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new ao(n.field,n.dir==="asc"?0:1)));return new Ro(Ro.UNKNOWN_ID,this.collectionId,t,Zs.empty())}mn(e){for(const t of this.An)if(this.fn(t,e))return!0;return!1}fn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}gn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(r){var e,t;if(H(r instanceof ae||r instanceof de,20012),r instanceof ae){if(r instanceof Dg){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>ae.create(r.field,"==",i)))||[];return de.create(s,"or")}return r}const n=r.filters.map(s=>dm(s));return de.create(n,r.op)}function Db(r){if(r.getFilters().length===0)return[];const e=Gc(dm(r));return H(fm(e),7391),$c(e)||qc(e)?[e]:e.getFilters()}function $c(r){return r instanceof ae}function qc(r){return r instanceof de&&Dl(r)}function fm(r){return $c(r)||qc(r)||function(t){if(t instanceof de&&Oc(t)){for(const n of t.getFilters())if(!$c(n)&&!qc(n))return!1;return!0}return!1}(r)}function Gc(r){if(H(r instanceof ae||r instanceof de,34018),r instanceof ae)return r;if(r.filters.length===1)return Gc(r.filters[0]);const e=r.filters.map(n=>Gc(n));let t=de.create(e,r.op);return t=Bo(t),fm(t)?t:(H(t instanceof de,64498),H(Br(t),40251),H(t.filters.length>1,57927),t.filters.reduce((n,s)=>jl(n,s)))}function jl(r,e){let t;return H(r instanceof ae||r instanceof de,38388),H(e instanceof ae||e instanceof de,25473),t=r instanceof ae?e instanceof ae?function(s,i){return de.create([s,i],"and")}(r,e):zd(r,e):e instanceof ae?zd(e,r):function(s,i){if(H(s.filters.length>0&&i.filters.length>0,48005),Br(s)&&Br(i))return xg(s,i.getFilters());const o=Oc(s)?s:i,c=Oc(s)?i:s,l=o.filters.map(h=>jl(h,c));return de.create(l,"or")}(r,e),Bo(t)}function zd(r,e){if(Br(e))return xg(e,r.getFilters());{const t=e.filters.map(n=>jl(r,n));return de.create(t,"or")}}function Bo(r){if(H(r instanceof ae||r instanceof de,11850),r instanceof ae)return r;const e=r.getFilters();if(e.length===1)return Bo(e[0]);if(Pg(r))return r;const t=e.map(s=>Bo(s)),n=[];return t.forEach(s=>{s instanceof ae?n.push(s):s instanceof de&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:de.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.yn=new $l}addToCollectionParentIndex(e,t){return this.yn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.yn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(it.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(it.min())}updateCollectionGroup(e,t,n){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class $l{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new he(ue.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new he(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="IndexedDbIndexManager",Yi=new Uint8Array(0);class Ob{constructor(e,t){this.databaseId=t,this.wn=new $l,this.bn=new Ft(n=>Jn(n),(n,s)=>Ti(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.wn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.wn.add(t)});const i={collectionId:n,parent:$e(s)};return $d(e).put(i)}return R.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[tg(t),""],!1,!0);return $d(e).J(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(_t(o.parent))}return n})}addFieldIndex(e,t){const n=ws(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=hr(e);return i.next(c=>{o.put(Od(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=ws(e),s=hr(e),i=ur(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=ws(e),n=ur(e),s=hr(e);return t.X().next(()=>n.X()).next(()=>s.X())}createTargetIndexes(e,t){return R.forEach(this.Sn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new Bd(n).pn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=ur(e);let s=!0;const i=new Map;return R.forEach(this.Sn(t),o=>this.Dn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=se();const c=[];return R.forEach(i,(l,h)=>{L(jd,`Using index ${function(V){return`id=${V.indexId}|cg=${V.collectionGroup}|f=${V.fields.map(O=>`${O.fieldPath}:${O.kind}`).join(",")}`}(l)} to execute ${Jn(t)}`);const f=function(V,O){const F=Pc(O);if(F===void 0)return null;for(const P of Mo(V,F.fieldPath))switch(P.op){case"array-contains-any":return P.value.arrayValue.values||[];case"array-contains":return[P.value]}return null}(h,l),p=function(V,O){const F=new Map;for(const P of xn(O))for(const y of Mo(V,P.fieldPath))switch(y.op){case"==":case"in":F.set(P.fieldPath.canonicalString(),y.value);break;case"not-in":case"!=":return F.set(P.fieldPath.canonicalString(),y.value),Array.from(F.values())}return null}(h,l),v=function(V,O){const F=[];let P=!0;for(const y of xn(O)){const m=y.kind===0?Ed(V,y.fieldPath,V.startAt):wd(V,y.fieldPath,V.startAt);F.push(m.value),P&&(P=m.inclusive)}return new Ur(F,P)}(h,l),T=function(V,O){const F=[];let P=!0;for(const y of xn(O)){const m=y.kind===0?wd(V,y.fieldPath,V.endAt):Ed(V,y.fieldPath,V.endAt);F.push(m.value),P&&(P=m.inclusive)}return new Ur(F,P)}(h,l),S=this.vn(l,h,v),x=this.vn(l,h,T),A=this.Cn(l,h,p),N=this.Fn(l.indexId,f,S,v.inclusive,x,T.inclusive,A);return R.forEach(N,D=>n.Z(D,t.limit).next(V=>{V.forEach(O=>{const F=B.fromSegments(O.documentKey);o.has(F)||(o=o.add(F),c.push(F))})}))}).next(()=>c)}return R.resolve(null)})}Sn(e){let t=this.bn.get(e);return t||(e.filters.length===0?t=[e]:t=Db(de.create(e.filters,"and")).map(n=>Lc(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.bn.set(e,t),t)}Fn(e,t,n,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(n.length,i.length),h=l/(t!=null?t.length:1),f=[];for(let p=0;p<l;++p){const v=t?this.Mn(t[p/h]):Yi,T=this.xn(e,v,n[p%h],s),S=this.On(e,v,i[p%h],o),x=c.map(A=>this.xn(e,v,A,!0));f.push(...this.createRange(T,S,x))}return f}xn(e,t,n,s){const i=new On(e,B.empty(),t,n);return s?i:i.In()}On(e,t,n,s){const i=new On(e,B.empty(),t,n);return s?i.In():i}Dn(e,t){const n=new Bd(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)n.Vn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const s=this.Sn(t);return R.forEach(s,i=>this.Dn(e,i).next(o=>{o?n!==0&&o.fields.length<function(l){let h=new he(we.comparator),f=!1;for(const p of l.filters)for(const v of p.getFlattenedFilters())v.field.isKeyField()||(v.op==="array-contains"||v.op==="array-contains-any"?f=!0:h=h.add(v.field));for(const p of l.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}Nn(e,t){const n=new Es;for(const s of xn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Tn(s.kind);Nn.Wt.vt(i,o)}return n.cn()}Mn(e){const t=new Es;return Nn.Wt.vt(e,t.Tn(0)),t.cn()}Bn(e,t){const n=new Es;return Nn.Wt.vt(Vl(this.databaseId,t),n.Tn(function(i){const o=xn(i);return o.length===0?0:o[o.length-1].kind}(e))),n.cn()}Cn(e,t,n){if(n===null)return[];let s=[];s.push(new Es);let i=0;for(const o of xn(e)){const c=n[i++];for(const l of s)if(this.Ln(t,o.fieldPath)&&oi(c))s=this.kn(s,o,c);else{const h=l.Tn(o.kind);Nn.Wt.vt(c,h)}}return this.qn(s)}vn(e,t,n){return this.Cn(e,t,n.position)}qn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].cn();return t}kn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const c of s){const l=new Es;l.seed(c.cn()),Nn.Wt.vt(o,l.Tn(t.kind)),i.push(l)}return i}Ln(e,t){return!!e.filters.find(n=>n instanceof ae&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=ws(e),s=hr(e);return(t?n.J(xc,IDBKeyRange.bound(t,t)):n.J()).next(i=>{const o=[];return R.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(f,p){const v=p?new Zs(p.sequenceNumber,new it(Xn(p.readTime),new B(_t(p.documentKey)),p.largestBatchId)):Zs.empty(),T=f.fields.map(([S,x])=>new ao(we.fromServerFormat(S),x));return new Ro(f.indexId,f.collectionGroup,T,v)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:Z(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=ws(e),i=hr(e);return this.Qn(e).next(o=>s.J(xc,IDBKeyRange.bound(t,t)).next(c=>R.forEach(c,l=>i.put(Od(l.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return R.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(n.set(s.collectionGroup,c),R.forEach(c,l=>this.$n(e,s,l).next(h=>{const f=this.Un(i,l);return h.isEqual(f)?R.resolve():this.Kn(e,i,l,h,f)}))))})}Wn(e,t,n,s){return ur(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.Bn(n,t.key),documentKey:t.key.path.toArray()})}Gn(e,t,n,s){return ur(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.Bn(n,t.key),t.key.path.toArray()])}$n(e,t,n){const s=ur(e);let i=new he(qt);return s.te({index:dg,range:IDBKeyRange.only([n.indexId,this.uid,this.Bn(n,t)])},(o,c)=>{i=i.add(new On(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Un(e,t){let n=new he(qt);const s=this.Nn(t,e);if(s==null)return n;const i=Pc(t);if(i!=null){const o=e.data.field(i.fieldPath);if(oi(o))for(const c of o.arrayValue.values||[])n=n.add(new On(t.indexId,e.key,this.Mn(c),s))}else n=n.add(new On(t.indexId,e.key,Yi,s));return n}Kn(e,t,n,s,i){L(jd,"Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,p,v){const T=l.getIterator(),S=h.getIterator();let x=cr(T),A=cr(S);for(;x||A;){let N=!1,D=!1;if(x&&A){const V=f(x,A);V<0?D=!0:V>0&&(N=!0)}else x!=null?D=!0:N=!0;N?(p(A),A=cr(S)):D?(v(x),x=cr(T)):(x=cr(T),A=cr(S))}}(s,i,qt,c=>{o.push(this.Wn(e,t,n,c))},c=>{o.push(this.Gn(e,t,n,c))}),R.waitFor(o)}Qn(e){let t=1;return hr(e).te({index:hg,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>qt(o,c)).filter((o,c,l)=>!c||qt(o,l[c-1])!==0);const s=[];s.push(e);for(const o of n){const c=qt(o,e),l=qt(o,t);if(c===0)s[0]=e.In();else if(c>0&&l<0)s.push(o),s.push(o.In());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.zn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Yi,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Yi,[]];i.push(IDBKeyRange.bound(c,l))}return i}zn(e,t){return qt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(qd)}getMinOffset(e,t){return R.mapArray(this.Sn(t),n=>this.Dn(e,n).next(s=>s||$(44426))).next(qd)}}function $d(r){return ke(r,ri)}function ur(r){return ke(r,Vo)}function ws(r){return ke(r,Sl)}function hr(r){return ke(r,ko)}function qd(r){H(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Tl(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new it(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pm=41943040;class je{static withCacheSize(e){return new je(e,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(r,e,t){const n=r.store(ut),s=r.store(Dr),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=n.te({range:o},(f,p,v)=>(c++,v.delete()));i.push(l.next(()=>{H(c===1,47070,{batchId:t.batchId})}));const h=[];for(const f of t.mutations){const p=cg(e,f.key.path,t.batchId);i.push(s.delete(p)),h.push(f.key)}return R.waitFor(i).next(()=>h)}function zo(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw $(14731);e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je.DEFAULT_COLLECTION_PERCENTILE=10,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,je.DEFAULT=new je(pm,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),je.DISABLED=new je(-1,0,0);class ga{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.jn={}}static bt(e,t,n,s){H(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new ga(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Gt(e).te({index:Mn,range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=yr(e),o=Gt(e);return o.add({}).next(c=>{H(typeof c=="number",49019);const l=new Ll(c,t,n,s),h=function(T,S,x){const A=x.baseMutations.map(D=>Fo(T.wt,D)),N=x.mutations.map(D=>Fo(T.wt,D));return{userId:S,batchId:x.batchId,localWriteTimeMs:x.localWriteTime.toMillis(),baseMutations:A,mutations:N}}(this.serializer,this.userId,l),f=[];let p=new he((v,T)=>Z(v.canonicalString(),T.canonicalString()));for(const v of s){const T=cg(this.userId,v.key.path,c);p=p.add(v.key.path.popLast()),f.push(o.put(h)),f.push(i.put(T,dT))}return p.forEach(v=>{f.push(this.indexManager.addToCollectionParentIndex(e,v))}),e.addOnCommittedListener(()=>{this.jn[c]=l.keys()}),R.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return Gt(e).get(t).next(n=>n?(H(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),Dn(this.serializer,n)):null)}Hn(e,t){return this.jn[t]?R.resolve(this.jn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.jn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Gt(e).te({index:Mn,range:s},(o,c,l)=>{c.userId===this.userId&&(H(c.batchId>=n,47524,{Jn:n}),i=Dn(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Fn;return Gt(e).te({index:Mn,range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Fn],[this.userId,Number.POSITIVE_INFINITY]);return Gt(e).J(Mn,t).next(n=>n.map(s=>Dn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=co(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return yr(e).te({range:s},(o,c,l)=>{const[h,f,p]=o,v=_t(f);if(h===this.userId&&t.path.isEqual(v))return Gt(e).get(p).next(T=>{if(!T)throw $(61480,{Yn:o,batchId:p});H(T.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:T.userId,batchId:p}),i.push(Dn(this.serializer,T))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new he(Z);const s=[];return t.forEach(i=>{const o=co(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=yr(e).te({range:c},(h,f,p)=>{const[v,T,S]=h,x=_t(T);v===this.userId&&i.path.isEqual(x)?n=n.add(S):p.done()});s.push(l)}),R.waitFor(s).next(()=>this.Zn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=co(this.userId,n),o=IDBKeyRange.lowerBound(i);let c=new he(Z);return yr(e).te({range:o},(l,h,f)=>{const[p,v,T]=l,S=_t(v);p===this.userId&&n.isPrefixOf(S)?S.length===s&&(c=c.add(T)):f.done()}).next(()=>this.Zn(e,c))}Zn(e,t){const n=[],s=[];return t.forEach(i=>{s.push(Gt(e).get(i).next(o=>{if(o===null)throw $(35274,{batchId:i});H(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(Dn(this.serializer,o))}))}),R.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return gm(e.he,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Xn(t.batchId)}),R.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Xn(e){delete this.jn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return R.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return yr(e).te({range:n},(i,o,c)=>{if(i[0]===this.userId){const l=_t(i[1]);s.push(l)}else c.done()}).next(()=>{H(s.length===0,56720,{er:s.map(i=>i.canonicalString())})})})}containsKey(e,t){return mm(e,this.userId,t)}tr(e){return _m(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Fn,lastStreamToken:""})}}function mm(r,e,t){const n=co(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return yr(r).te({range:i,ee:!0},(c,l,h)=>{const[f,p,v]=c;f===e&&p===s&&(o=!0),h.done()}).next(()=>o)}function Gt(r){return ke(r,ut)}function yr(r){return ke(r,Dr)}function _m(r){return ke(r,ti)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new Zn(0)}static ir(){return new Zn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.sr(e).next(t=>{const n=new Zn(t.highestTargetId);return t.highestTargetId=n.next(),this._r(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.sr(e).next(t=>Q.fromTimestamp(new Te(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.sr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.sr(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this._r(e,s)))}addTargetData(e,t){return this.ar(e,t).next(()=>this.sr(e).next(n=>(n.targetCount+=1,this.ur(t,n),this._r(e,n))))}updateTargetData(e,t){return this.ar(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>dr(e).delete(t.targetId)).next(()=>this.sr(e)).next(n=>(H(n.targetCount>0,8065),n.targetCount-=1,this._r(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return dr(e).te((o,c)=>{const l=Ns(c);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>R.waitFor(i)).next(()=>s)}forEachTarget(e,t){return dr(e).te((n,s)=>{const i=Ns(s);t(i)})}sr(e){return Kd(e).get(xo).next(t=>(H(t!==null,2888),t))}_r(e,t){return Kd(e).put(xo,t)}ar(e,t){return dr(e).put(um(this.serializer,t))}ur(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.sr(e).next(t=>t.targetCount)}getTargetData(e,t){const n=Jn(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return dr(e).te({range:s,index:ug},(o,c,l)=>{const h=Ns(c);Ti(t,h.target)&&(i=h,l.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=tn(e);return t.forEach(o=>{const c=$e(o.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(e,n,o))}),R.waitFor(s)}removeMatchingKeys(e,t,n){const s=tn(e);return R.forEach(t,i=>{const o=$e(i.path);return R.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=tn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=tn(e);let i=se();return s.te({range:n,ee:!0},(o,c,l)=>{const h=_t(o[1]),f=new B(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const n=$e(t.path),s=IDBKeyRange.bound([n],[tg(n)],!1,!0);let i=0;return tn(e).te({index:Al,ee:!0,range:s},([o,c],l,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}Rt(e,t){return dr(e).get(t).next(n=>n?Ns(n):null)}}function dr(r){return ke(r,Nr)}function Kd(r){return ke(r,Un)}function tn(r){return ke(r,Or)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="LruGarbageCollector",ym=1048576;function Hd([r,e],[t,n]){const s=Z(r,t);return s===0?Z(e,n):s}class Lb{constructor(e){this.cr=e,this.buffer=new he(Hd),this.lr=0}hr(){return++this.lr}Pr(e){const t=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Hd(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class vm{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){L(Wd,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yn(t)?L(Wd,"Ignoring IndexedDB error during garbage collection: ",t):await _n(t)}await this.Ir(3e5)})}}class Fb{constructor(e,t){this.Er=e,this.params=t}calculateTargetCount(e,t){return this.Er.dr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Ye.le);const n=new Lb(t);return this.Er.forEachTarget(e,s=>n.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>n.Pr(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Er.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Er.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Gd)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gd):this.Rr(e,t))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,t){let n,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(n=p,c=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(h=Date.now(),pr()<=oe.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Im(r,e){return new Fb(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,t){this.db=e,this.garbageCollector=Im(this,t)}dr(e){const t=this.Vr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}Vr(e){let t=0;return this.Ar(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ar(e,t){return this.mr(e,(n,s)=>t(s))}addReference(e,t,n){return Xi(e,n)}removeReference(e,t,n){return Xi(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Xi(e,t)}gr(e,t){return function(s,i){let o=!1;return _m(s).ne(c=>mm(s,c,i).next(l=>(l&&(o=!0),R.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.mr(e,(o,c)=>{if(c<=t){const l=this.gr(e,o).next(h=>{if(!h)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,Q.min()),tn(e).delete(function(p){return[0,$e(p.path)]}(o))))});s.push(l)}}).next(()=>R.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Xi(e,t)}mr(e,t){const n=tn(e);let s,i=Ye.le;return n.te({index:Al},([o,c],{path:l,sequenceNumber:h})=>{o===0?(i!==Ye.le&&t(new B(_t(s)),i),i=h,s=l):i=Ye.le}).next(()=>{i!==Ye.le&&t(new B(_t(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Xi(r,e){return tn(r).put(function(n,s){return{targetId:0,path:$e(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.changes=new Ft(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?R.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return An(e).put(n)}removeEntry(e,t,n){return An(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Uo(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.pr(e,n)))}getEntry(e,t){let n=Ae.newInvalidDocument(t);return An(e).te({index:lo,range:IDBKeyRange.only(Ts(t))},(s,i)=>{n=this.yr(t,i)}).next(()=>n)}wr(e,t){let n={size:0,document:Ae.newInvalidDocument(t)};return An(e).te({index:lo,range:IDBKeyRange.only(Ts(t))},(s,i)=>{n={document:this.yr(t,i),size:zo(i)}}).next(()=>n)}getEntries(e,t){let n=tt();return this.br(e,t,(s,i)=>{const o=this.yr(s,i);n=n.insert(s,o)}).next(()=>n)}Sr(e,t){let n=tt(),s=new ge(B.comparator);return this.br(e,t,(i,o)=>{const c=this.yr(i,o);n=n.insert(i,c),s=s.insert(i,zo(o))}).next(()=>({documents:n,Dr:s}))}br(e,t,n){if(t.isEmpty())return R.resolve();let s=new he(Yd);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(Ts(s.first()),Ts(s.last())),o=s.getIterator();let c=o.getNext();return An(e).te({index:lo,range:i},(l,h,f)=>{const p=B.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Yd(c,p)<0;)n(c,null),c=o.getNext();c&&c.isEqual(p)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.H(Ts(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Uo(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return An(e).J(IDBKeyRange.bound(c,l,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=tt();for(const p of h){const v=this.yr(B.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);v.isFoundDocument()&&(bi(t,v)||s.has(v.key))&&(f=f.insert(v.key,v))}return f})}getAllFromCollectionGroup(e,t,n,s){let i=tt();const o=Jd(t,n),c=Jd(t,it.max());return An(e).te({index:lg,range:IDBKeyRange.bound(o,c,!0)},(l,h,f)=>{const p=this.yr(B.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new zb(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Qd(e).get(Cc).next(t=>(H(!!t,20021),t))}pr(e,t){return Qd(e).put(Cc,t)}yr(e,t){if(t){const n=Sb(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(Q.min())))return n}return Ae.newInvalidDocument(e)}}function wm(r){return new Bb(r)}class zb extends Em{constructor(e,t){super(),this.vr=e,this.trackRemovals=t,this.Cr=new Ft(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new he((i,o)=>Z(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.Cr.get(i);if(t.push(this.vr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=Dd(this.vr.serializer,o);s=s.add(i.path.popLast());const h=zo(l);n+=h-c.size,t.push(this.vr.addEntry(e,i,l))}else if(n-=c.size,this.trackRemovals){const l=Dd(this.vr.serializer,o.convertToNoDocument(Q.min()));t.push(this.vr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.vr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.vr.updateMetadata(e,n)),R.waitFor(t)}getFromCache(e,t){return this.vr.wr(e,t).next(n=>(this.Cr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.vr.Sr(e,t).next(({documents:n,Dr:s})=>(s.forEach((i,o)=>{this.Cr.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function Qd(r){return ke(r,ni)}function An(r){return ke(r,Co)}function Ts(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Jd(r,e){const t=e.documentKey.path.toArray();return[r,Uo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Yd(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=Z(t[i],n[i]),s)return s;return s=Z(t.length,n.length),s||(s=Z(t[t.length-2],n[n.length-2]),s||Z(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&qs(n.mutation,s,at.empty(),Te.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,se()).next(()=>n))}getLocalViewOfDocuments(e,t,n=se()){const s=yt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=Vs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=yt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,se()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,s){let i=tt();const o=$s(),c=function(){return $s()}();return t.forEach((l,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof vn)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),qs(f.mutation,h,f.mutation.getFieldMask(),Te.now())):o.set(h.key,at.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return c.set(h,new jb(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const n=$s();let s=new ge((o,c)=>o-c),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=n.get(l)||at.empty();f=c.applyToLocalView(h,f),n.set(l,f);const p=(s.get(c.batchId)||se()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Bg();f.forEach(v=>{if(!i.has(v)){const T=Kg(t.get(v),n.get(v));T!==null&&p.set(v,T),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return R.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):HT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):R.resolve(yt());let c=Vr,l=i;return o.next(h=>R.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{l=l.insert(f,v)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,se())).next(f=>({batchId:c,changes:Ug(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(n=>{let s=Vs();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Vs();return this.indexManager.getCollectionParents(e,i).next(c=>R.forEach(c,l=>{const h=function(p,v){return new la(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next(f=>{f.forEach((p,v)=>{o=o.insert(p,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ae.newInvalidDocument(f)))});let c=Vs();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&qs(f.mutation,h,at.empty(),Te.now()),bi(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,t){return R.resolve(this.Fr.get(t))}saveBundleMetadata(e,t){return this.Fr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:We(s.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Mr.get(t))}saveNamedQuery(e,t){return this.Mr.set(t.name,function(s){return{name:s.name,query:hm(s.bundledQuery),readTime:We(s.readTime)}}(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(){this.overlays=new ge(B.comparator),this.Or=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const n=yt();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.St(e,t,i)}),R.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Or.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(n)),R.resolve()}getOverlaysForCollection(e,t,n){const s=yt(),i=t.length+1,o=new B(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new ge((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=yt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=yt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return R.resolve(c)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Or.get(s.largestBatchId).delete(n.key);this.Or.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Ul(t,n));let i=this.Or.get(t);i===void 0&&(i=se(),this.Or.set(t,i)),this.Or.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.Nr=new he(Ne.Br),this.Lr=new he(Ne.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,t){const n=new Ne(e,t);this.Nr=this.Nr.add(n),this.Lr=this.Lr.add(n)}qr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Qr(new Ne(e,t))}$r(e,t){e.forEach(n=>this.removeReference(n,t))}Ur(e){const t=new B(new ue([])),n=new Ne(t,e),s=new Ne(t,e+1),i=[];return this.Lr.forEachInRange([n,s],o=>{this.Qr(o),i.push(o.key)}),i}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const t=new B(new ue([])),n=new Ne(t,e),s=new Ne(t,e+1);let i=se();return this.Lr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ne(e,0),n=this.Nr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ne{constructor(e,t){this.key=e,this.Gr=t}static Br(e,t){return B.comparator(e.key,t.key)||Z(e.Gr,t.Gr)}static kr(e,t){return Z(e.Gr,t.Gr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Jn=1,this.zr=new he(Ne.Br)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ll(i,t,n,s);this.mutationQueue.push(o);for(const c of s)this.zr=this.zr.add(new Ne(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.jr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Hr(n),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Fn:this.Jn-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ne(t,0),s=new Ne(t,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([n,s],o=>{const c=this.jr(o.Gr);i.push(c)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new he(Z);return t.forEach(s=>{const i=new Ne(s,0),o=new Ne(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,o],c=>{n=n.add(c.Gr)})}),R.resolve(this.Jr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;B.isDocumentKey(i)||(i=i.child(""));const o=new Ne(new B(i),0);let c=new he(Z);return this.zr.forEachWhile(l=>{const h=l.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Gr)),!0)},o),R.resolve(this.Jr(c))}Jr(e){const t=[];return e.forEach(n=>{const s=this.jr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){H(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.zr;return R.forEach(t.mutations,s=>{const i=new Ne(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=n})}Xn(e){}containsKey(e,t){const n=new Ne(t,0),s=this.zr.firstAfterOrEqual(n);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Yr(e,t){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const t=this.Hr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.Zr=e,this.docs=function(){return new ge(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.Zr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return R.resolve(n?n.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let n=tt();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():Ae.newInvalidDocument(s))}),R.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=tt();const o=t.path,c=new B(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Tl(rg(f),n)<=0||(s.has(f.key)||bi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,n,s){$(9500)}Xr(e,t){return R.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new Hb(this)}getSize(e){return R.resolve(this.size)}}class Hb extends Em{constructor(e){super(),this.vr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.vr.addEntry(e,s)):this.vr.removeEntry(n)}),R.waitFor(t)}getFromCache(e,t){return this.vr.getEntry(e,t)}getAllFromCache(e,t){return this.vr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.persistence=e,this.ei=new Ft(t=>Jn(t),Ti),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.ti=0,this.ni=new ql,this.targetCount=0,this.ri=Zn.rr()}forEachTarget(e,t){return this.ei.forEach((n,s)=>t(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ti&&(this.ti=t),R.resolve()}ar(e){this.ei.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ri=new Zn(t),this.highestTargetId=t),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,t){return this.ar(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.ar(t),R.resolve()}removeTargetData(e,t){return this.ei.delete(t.target),this.ni.Ur(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.ei.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.ei.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const n=this.ei.get(t)||null;return R.resolve(n)}addMatchingKeys(e,t,n){return this.ni.qr(t,n),R.resolve()}removeMatchingKeys(e,t,n){this.ni.$r(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ni.Ur(t),R.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ni.Wr(t);return R.resolve(n)}containsKey(e,t){return R.resolve(this.ni.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,t){this.ii={},this.overlays={},this.si=new Ye(0),this.oi=!1,this.oi=!0,this._i=new Gb,this.referenceDelegate=e(this),this.ai=new Qb(this),this.indexManager=new Nb,this.remoteDocumentCache=function(s){return new Wb(s)}(n=>this.referenceDelegate.ui(n)),this.serializer=new lm(t),this.ci=new $b(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ii[e.toKey()];return n||(n=new Kb(t,this.referenceDelegate),this.ii[e.toKey()]=n),n}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,t,n){L("MemoryPersistence","Starting transaction:",e);const s=new Jb(this.si.next());return this.referenceDelegate.li(),n(s).next(i=>this.referenceDelegate.hi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Pi(e,t){return R.or(Object.values(this.ii).map(n=>()=>n.containsKey(e,t)))}}class Jb extends ig{constructor(e){super(),this.currentSequenceNumber=e}}class ma{constructor(e){this.persistence=e,this.Ti=new ql,this.Ii=null}static Ei(e){return new ma(e)}get di(){if(this.Ii)return this.Ii;throw $(60996)}addReference(e,t,n){return this.Ti.addReference(n,t),this.di.delete(n.toString()),R.resolve()}removeReference(e,t,n){return this.Ti.removeReference(n,t),this.di.add(n.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ti.Ur(t.targetId).forEach(s=>this.di.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}li(){this.Ii=new Set}hi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,n=>{const s=B.fromPath(n);return this.Ai(e,s).next(i=>{i||t.removeEntry(s,Q.min())})}).next(()=>(this.Ii=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ai(e,t).next(n=>{n?this.di.delete(t.toString()):this.di.add(t.toString())})}ui(e){return 0}Ai(e,t){return R.or([()=>R.resolve(this.Ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Pi(e,t)])}}class jo{constructor(e,t){this.persistence=e,this.Ri=new Ft(n=>$e(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Im(this,t)}static Ei(e,t){return new jo(e,t)}li(){}hi(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}Vr(e){let t=0;return this.Ar(e,n=>{t++}).next(()=>t)}Ar(e,t){return R.forEach(this.Ri,(n,s)=>this.gr(e,n,s).next(i=>i?R.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Xr(e,o=>this.gr(e,o,t).next(c=>{c||(n++,i.removeEntry(o,Q.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.Ri.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.Ri.set(n,e.currentSequenceNumber),R.resolve()}removeReference(e,t,n){return this.Ri.set(n,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.Ri.set(t,e.currentSequenceNumber),R.resolve()}ui(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ho(e.data.value)),t}gr(e,t,n){return R.or([()=>this.persistence.Pi(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.Ri.get(t);return R.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.serializer=e}q(e,t,n,s){const i=new na("createOrUpgrade",t);n<1&&s>=1&&(function(l){l.createObjectStore(wi)}(e),function(l){l.createObjectStore(ti,{keyPath:hT}),l.createObjectStore(ut,{keyPath:ld,autoIncrement:!0}).createIndex(Mn,ud,{unique:!0}),l.createObjectStore(Dr)}(e),Xd(e),function(l){l.createObjectStore(kn)}(e));let o=R.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore(Or),l.deleteObjectStore(Nr),l.deleteObjectStore(Un)}(e),Xd(e)),o=o.next(()=>function(l){const h=l.store(Un),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return h.put(xo,f)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(l,h){return h.store(ut).J().next(p=>{l.deleteObjectStore(ut),l.createObjectStore(ut,{keyPath:ld,autoIncrement:!0}).createIndex(Mn,ud,{unique:!0});const v=h.store(ut),T=p.map(S=>v.put(S));return R.waitFor(T)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore(Mr,{keyPath:IT})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.Vi(i))),n<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore(ni)}(e),this.mi(i)))),n<7&&s>=7&&(o=o.next(()=>this.fi(i))),n<8&&s>=8&&(o=o.next(()=>this.gi(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.pi(i))),n<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore(sa,{keyPath:ET})})(e),function(l){l.createObjectStore(ia,{keyPath:wT})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore(oa,{keyPath:CT});h.createIndex(kc,xT,{unique:!1}),h.createIndex(fg,kT,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore(Co,{keyPath:fT});h.createIndex(lo,pT),h.createIndex(lg,gT)}(e)).next(()=>this.yi(e,i)).next(()=>e.deleteObjectStore(kn))),n<14&&s>=14&&(o=o.next(()=>this.wi(e,i))),n<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore(Sl,{keyPath:TT,autoIncrement:!0}).createIndex(xc,bT,{unique:!1}),l.createObjectStore(ko,{keyPath:AT}).createIndex(hg,ST,{unique:!1}),l.createObjectStore(Vo,{keyPath:RT}).createIndex(dg,PT,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore(ko).clear()}).next(()=>{t.objectStore(Vo).clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore(Rl,{keyPath:VT})})(e)})),o}mi(e){let t=0;return e.store(kn).te((n,s)=>{t+=zo(s)}).next(()=>{const n={byteSize:t};return e.store(ni).put(Cc,n)})}Vi(e){const t=e.store(ti),n=e.store(ut);return t.J().next(s=>R.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,Fn],[i.userId,i.lastAcknowledgedBatchId]);return n.J(Mn,o).next(c=>R.forEach(c,l=>{H(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const h=Dn(this.serializer,l);return gm(e,i.userId,h).next(()=>{})}))}))}fi(e){const t=e.store(Or),n=e.store(kn);return e.store(Un).get(xo).next(s=>{const i=[];return n.te((o,c)=>{const l=new ue(o),h=function(p){return[0,$e(p)]}(l);i.push(t.get(h).next(f=>f?R.resolve():(p=>t.put({targetId:0,path:$e(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>R.waitFor(i))})}gi(e,t){e.createObjectStore(ri,{keyPath:vT});const n=t.store(ri),s=new $l,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return n.put({collectionId:c,parent:$e(l)})}};return t.store(kn).te({ee:!0},(o,c)=>{const l=new ue(o);return i(l.popLast())}).next(()=>t.store(Dr).te({ee:!0},([o,c,l],h)=>{const f=_t(c);return i(f.popLast())}))}pi(e){const t=e.store(Nr);return t.te((n,s)=>{const i=Ns(s),o=um(this.serializer,i);return t.put(o)})}yi(e,t){const n=t.store(kn),s=[];return n.te((i,o)=>{const c=t.store(Co),l=function(p){return p.document?new B(ue.fromString(p.document.name).popFirst(5)):p.noDocument?B.fromSegments(p.noDocument.path):p.unknownDocument?B.fromSegments(p.unknownDocument.path):$(36783)}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(h))}).next(()=>R.waitFor(s))}wi(e,t){const n=t.store(ut),s=wm(this.serializer),i=new Gl(ma.Ei,this.serializer.wt);return n.J().next(o=>{const c=new Map;return o.forEach(l=>{var h;let f=(h=c.get(l.userId))!==null&&h!==void 0?h:se();Dn(this.serializer,l).keys().forEach(p=>f=f.add(p)),c.set(l.userId,f)}),R.forEach(c,(l,h)=>{const f=new ze(h),p=pa.bt(this.serializer,f),v=i.getIndexManager(f),T=ga.bt(f,this.serializer,v,i.referenceDelegate);return new Tm(s,T,p,v).recalculateAndSaveOverlaysForDocumentKeys(new Vc(t,Ye.le),l).next()})})}}function Xd(r){r.createObjectStore(Or,{keyPath:_T}).createIndex(Al,yT,{unique:!0}),r.createObjectStore(Nr,{keyPath:"targetId"}).createIndex(ug,mT,{unique:!0}),r.createObjectStore(Un)}const Kt="IndexedDbPersistence",rc=18e5,sc=5e3,ic="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Xb="main";class Kl{constructor(e,t,n,s,i,o,c,l,h,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.bi=i,this.window=o,this.document=c,this.Si=h,this.Di=f,this.Ci=p,this.si=null,this.oi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Fi=null,this.inForeground=!1,this.Mi=null,this.xi=null,this.Oi=Number.NEGATIVE_INFINITY,this.Ni=v=>Promise.resolve(),!Kl.C())throw new z(M.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ub(this,s),this.Bi=t+Xb,this.serializer=new lm(l),this.Li=new un(this.Bi,this.Ci,new Yb(this.serializer)),this._i=new Pb,this.ai=new Mb(this.referenceDelegate,this.serializer),this.remoteDocumentCache=wm(this.serializer),this.ci=new Rb,this.window&&this.window.localStorage?this.ki=this.window.localStorage:(this.ki=null,f===!1&&Re(Kt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.qi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new z(M.FAILED_PRECONDITION,ic);return this.Qi(),this.$i(),this.Ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ai.getHighestSequenceNumber(e))}).then(e=>{this.si=new Ye(e,this.Si)}).then(()=>{this.oi=!0}).catch(e=>(this.Li&&this.Li.close(),Promise.reject(e)))}Ki(e){return this.Ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Li.U(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.bi.enqueueAndForget(async()=>{this.started&&await this.qi()}))}qi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Zi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Wi(e).next(t=>{t||(this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)))})}).next(()=>this.Gi(e)).next(t=>this.isPrimary&&!t?this.zi(e).next(()=>!1):!!t&&this.ji(e).next(()=>!0))).catch(e=>{if(yn(e))return L(Kt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return L(Kt,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.bi.enqueueRetryable(()=>this.Ni(e)),this.isPrimary=e})}Wi(e){return bs(e).get(ar).next(t=>R.resolve(this.Hi(t)))}Ji(e){return Zi(e).delete(this.clientId)}async Yi(){if(this.isPrimary&&!this.Zi(this.Oi,rc)){this.Oi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=ke(t,Mr);return n.J().next(s=>{const i=this.Xi(s,rc),o=s.filter(c=>i.indexOf(c)===-1);return R.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ki)for(const t of e)this.ki.removeItem(this.es(t.clientId))}}Ui(){this.xi=this.bi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.qi().then(()=>this.Yi()).then(()=>this.Ui()))}Hi(e){return!!e&&e.ownerId===this.clientId}Gi(e){return this.Di?R.resolve(!0):bs(e).get(ar).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,sc)&&!this.ts(t.ownerId)){if(this.Hi(t)&&this.networkEnabled)return!0;if(!this.Hi(t)){if(!t.allowTabSynchronization)throw new z(M.FAILED_PRECONDITION,ic);return!1}}return!(!this.networkEnabled||!this.inForeground)||Zi(e).J().next(n=>this.Xi(n,sc).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&L(Kt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.oi=!1,this.ns(),this.xi&&(this.xi.cancel(),this.xi=null),this.rs(),this.ss(),await this.Li.runTransaction("shutdown","readwrite",[wi,Mr],e=>{const t=new Vc(e,Ye.le);return this.zi(t).next(()=>this.Ji(t))}),this.Li.close(),this._s()}Xi(e,t){return e.filter(n=>this.Zi(n.updateTimeMs,t)&&!this.ts(n.clientId))}us(){return this.runTransaction("getActiveClients","readonly",e=>Zi(e).J().next(t=>this.Xi(t,rc).map(n=>n.clientId)))}get started(){return this.oi}getGlobalsCache(){return this._i}getMutationQueue(e,t){return ga.bt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Ob(e,this.serializer.wt.databaseId)}getDocumentOverlayCache(e){return pa.bt(this.serializer,e)}getBundleCache(){return this.ci}runTransaction(e,t,n){L(Kt,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?OT:l===16?NT:l===15?Pl:l===14?mg:l===13?gg:l===12?DT:l===11?pg:void $(60245)}(this.Ci);let o;return this.Li.runTransaction(e,s,i,c=>(o=new Vc(c,this.si?this.si.next():Ye.le),t==="readwrite-primary"?this.Wi(o).next(l=>!!l||this.Gi(o)).next(l=>{if(!l)throw Re(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)),new z(M.FAILED_PRECONDITION,sg);return n(o)}).next(l=>this.ji(o).next(()=>l)):this.cs(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}cs(e){return bs(e).get(ar).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,sc)&&!this.ts(t.ownerId)&&!this.Hi(t)&&!(this.Di||this.allowTabSynchronization&&t.allowTabSynchronization))throw new z(M.FAILED_PRECONDITION,ic)})}ji(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return bs(e).put(ar,t)}static C(){return un.C()}zi(e){const t=bs(e);return t.get(ar).next(n=>this.Hi(n)?(L(Kt,"Releasing primary lease."),t.delete(ar)):R.resolve())}Zi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Re(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Qi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Mi=()=>{this.bi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.qi()))},this.document.addEventListener("visibilitychange",this.Mi),this.inForeground=this.document.visibilityState==="visible")}rs(){this.Mi&&(this.document.removeEventListener("visibilitychange",this.Mi),this.Mi=null)}$i(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Fi=()=>{this.ns();const t=/(?:Version|Mobile)\/1[456]/;sp()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.bi.enterRestrictedMode(!0),this.bi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Fi))}ss(){this.Fi&&(this.window.removeEventListener("pagehide",this.Fi),this.Fi=null)}ts(e){var t;try{const n=((t=this.ki)===null||t===void 0?void 0:t.getItem(this.es(e)))!==null;return L(Kt,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Re(Kt,"Failed to get zombied client id.",n),!1}}ns(){if(this.ki)try{this.ki.setItem(this.es(this.clientId),String(Date.now()))}catch(e){Re("Failed to set zombie client id.",e)}}_s(){if(this.ki)try{this.ki.removeItem(this.es(this.clientId))}catch{}}es(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function bs(r){return ke(r,wi)}function Zi(r){return ke(r,Mr)}function bm(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.ls=n,this.hs=s}static Ps(e,t){let n=se(),s=se();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Wl(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return sp()?8:og(xe())>0?6:4}()}initialize(e,t){this.As=e,this.indexManager=t,this.Ts=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Rs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Vs(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Zb;return this.fs(e,t,o).next(c=>{if(i.result=c,this.Is)return this.gs(e,t,o,c.size)})}).next(()=>i.result)}gs(e,t,n,s){return n.documentReadCount<this.Es?(pr()<=oe.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",gr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),R.resolve()):(pr()<=oe.DEBUG&&L("QueryEngine","Query:",gr(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(pr()<=oe.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",gr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rt(t))):R.resolve())}Rs(e,t){if(Td(t))return R.resolve(null);let n=rt(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Fc(t,null,"F"),n=rt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=se(...i);return this.As.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const h=this.ps(t,c);return this.ys(t,h,o,l.readTime)?this.Rs(e,Fc(t,null,"F")):this.ws(e,h,t,l)}))})))}Vs(e,t,n,s){return Td(t)||s.isEqual(Q.min())?R.resolve(null):this.As.getDocuments(e,n).next(i=>{const o=this.ps(t,i);return this.ys(t,o,n,s)?R.resolve(null):(pr()<=oe.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gr(t)),this.ws(e,o,t,ng(s,Vr)).next(c=>c))})}ps(e,t){let n=new he(Lg(e));return t.forEach((s,i)=>{bi(e,i)&&(n=n.add(i))}),n}ys(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}fs(e,t,n){return pr()<=oe.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",gr(t)),this.As.getDocumentsMatchingQuery(e,t,it.min(),n)}ws(e,t,n,s){return this.As.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="LocalStore",eA=3e8;class tA{constructor(e,t,n,s){this.persistence=e,this.bs=t,this.serializer=s,this.Ss=new ge(Z),this.Ds=new Ft(i=>Jn(i),Ti),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(n)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Tm(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ss))}}function Sm(r,e,t,n){return new tA(r,e,t,n)}async function Rm(r,e){const t=K(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.Fs(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],c=[];let l=se();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(n,l).next(h=>({Ms:h,removedBatchIds:o,addedBatchIds:c}))})})}function nA(r,e){const t=K(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.Cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,v=p.keys();let T=R.resolve();return v.forEach(S=>{T=T.next(()=>f.getEntry(l,S)).next(x=>{const A=h.docVersions.get(S);H(A!==null,48541),x.version.compareTo(A)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=se();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Pm(r){const e=K(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ai.getLastRemoteSnapshotVersion(t))}function rA(r,e){const t=K(r),n=e.snapshotVersion;let s=t.Ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Cs.newChangeBuffer({trackRemovals:!0});s=t.Ss;const c=[];e.targetChanges.forEach((f,p)=>{const v=s.get(p);if(!v)return;c.push(t.ai.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.ai.addMatchingKeys(i,f.addedDocuments,p)));let T=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Pe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,n)),s=s.insert(p,T),function(x,A,N){return x.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=eA?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(v,T,f)&&c.push(t.ai.updateTargetData(i,T))});let l=tt(),h=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(sA(i,o,e.documentUpdates).next(f=>{l=f.xs,h=f.Os})),!n.isEqual(Q.min())){const f=t.ai.getLastRemoteSnapshotVersion(i).next(p=>t.ai.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(f)}return R.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.Ss=s,i))}function sA(r,e,t){let n=se(),s=se();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=tt();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):L(Hl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{xs:o,Os:s}})}function iA(r,e){const t=K(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Fn),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function $o(r,e){const t=K(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.ai.getTargetData(n,e).next(i=>i?(s=i,R.resolve(s)):t.ai.allocateTargetId(n).next(o=>(s=new Ct(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.ai.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.Ss.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ss=t.Ss.insert(n.targetId,n),t.Ds.set(e,n.targetId)),n})}async function qr(r,e,t){const n=K(r),s=n.Ss.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!yn(o))throw o;L(Hl,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ss=n.Ss.remove(e),n.Ds.delete(s.target)}function Kc(r,e,t){const n=K(r);let s=Q.min(),i=se();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=K(l),v=p.Ds.get(f);return v!==void 0?R.resolve(p.Ss.get(v)):p.ai.getTargetData(h,f)}(n,o,rt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.ai.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>n.bs.getDocumentsMatchingQuery(o,e,t?s:Q.min(),t?i:se())).next(c=>(km(n,Mg(e),c),{documents:c,Ns:i})))}function Cm(r,e){const t=K(r),n=K(t.ai),s=t.Ss.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>n.Rt(i,e).next(o=>o?o.target:null))}function xm(r,e){const t=K(r),n=t.vs.get(e)||Q.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.Cs.getAllFromCollectionGroup(s,e,ng(n,Vr),Number.MAX_SAFE_INTEGER)).then(s=>(km(t,e,s),s))}function km(r,e,t){let n=r.vs.get(e)||Q.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.vs.set(e,n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="firestore_clients";function Zd(r,e){return`${Vm}_${r}_${e}`}const Dm="firestore_mutations";function ef(r,e,t){let n=`${Dm}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const Nm="firestore_targets";function oc(r,e){return`${Nm}_${r}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="SharedClientState";class qo{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static qs(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new z(s.error.code,s.error.message))),o?new qo(e,t,s.state,i):(Re(mt,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Gs{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static qs(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new z(n.error.code,n.error.message))),i?new Gs(e,n.state,s):(Re(mt,`Failed to parse target state for ID '${e}': ${t}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Go{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static qs(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Nl();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=ag(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new Go(e,i):(Re(mt,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Ql{constructor(e,t){this.clientId=e,this.onlineState=t}static qs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Ql(t.clientId,t.onlineState):(Re(mt,`Failed to parse online state: ${e}`),null)}}class Wc{constructor(){this.activeTargetIds=Nl()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ac{constructor(e,t,n,s,i){this.window=e,this.bi=t,this.persistenceKey=n,this.Ks=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ws=this.Gs.bind(this),this.zs=new ge(Z),this.started=!1,this.js=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Hs=Zd(this.persistenceKey,this.Ks),this.Js=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.zs=this.zs.insert(this.Ks,new Wc),this.Ys=new RegExp(`^${Vm}_${o}_([^_]*)$`),this.Zs=new RegExp(`^${Dm}_${o}_(\\d+)(?:_(.*))?$`),this.Xs=new RegExp(`^${Nm}_${o}_(\\d+)$`),this.eo=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.no=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ws)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.us();for(const n of e){if(n===this.Ks)continue;const s=this.getItem(Zd(this.persistenceKey,n));if(s){const i=Go.qs(n,s);i&&(this.zs=this.zs.insert(i.clientId,i))}}this.ro();const t=this.storage.getItem(this.eo);if(t){const n=this.io(t);n&&this.so(n)}for(const n of this.js)this.Gs(n);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Js,JSON.stringify(e))}getAllActiveQueryTargets(){return this.oo(this.zs)}isActiveQueryTarget(e){let t=!1;return this.zs.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this._o(e,"pending")}updateMutationState(e,t,n){this._o(e,t,n),this.ao(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(oc(this.persistenceKey,e));if(s){const i=Gs.qs(e,s);i&&(n=i.state)}}return t&&this.uo.$s(e),this.ro(),n}removeLocalQueryTarget(e){this.uo.Us(e),this.ro()}isLocalQueryTarget(e){return this.uo.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(oc(this.persistenceKey,e))}updateQueryState(e,t,n){this.co(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.ao(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.lo(e)}notifyBundleLoaded(e){this.ho(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ws),this.removeItem(this.Hs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return L(mt,"READ",e,t),t}setItem(e,t){L(mt,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){L(mt,"REMOVE",e),this.storage.removeItem(e)}Gs(e){const t=e;if(t.storageArea===this.storage){if(L(mt,"EVENT",t.key,t.newValue),t.key===this.Hs)return void Re("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.bi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ys.test(t.key)){if(t.newValue==null){const n=this.Po(t.key);return this.To(n,null)}{const n=this.Io(t.key,t.newValue);if(n)return this.To(n.clientId,n)}}else if(this.Zs.test(t.key)){if(t.newValue!==null){const n=this.Eo(t.key,t.newValue);if(n)return this.Ao(n)}}else if(this.Xs.test(t.key)){if(t.newValue!==null){const n=this.Ro(t.key,t.newValue);if(n)return this.Vo(n)}}else if(t.key===this.eo){if(t.newValue!==null){const n=this.io(t.newValue);if(n)return this.so(n)}}else if(t.key===this.Js){const n=function(i){let o=Ye.le;if(i!=null)try{const c=JSON.parse(i);H(typeof c=="number",30636,{mo:i}),o=c}catch(c){Re(mt,"Failed to read sequence number from WebStorage",c)}return o}(t.newValue);n!==Ye.le&&this.sequenceNumberHandler(n)}else if(t.key===this.no){const n=this.fo(t.newValue);await Promise.all(n.map(s=>this.syncEngine.po(s)))}}}else this.js.push(t)})}}get uo(){return this.zs.get(this.Ks)}ro(){this.setItem(this.Hs,this.uo.Qs())}_o(e,t,n){const s=new qo(this.currentUser,e,t,n),i=ef(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Qs())}ao(e){const t=ef(this.persistenceKey,this.currentUser,e);this.removeItem(t)}lo(e){const t={clientId:this.Ks,onlineState:e};this.storage.setItem(this.eo,JSON.stringify(t))}co(e,t,n){const s=oc(this.persistenceKey,e),i=new Gs(e,t,n);this.setItem(s,i.Qs())}ho(e){const t=JSON.stringify(Array.from(e));this.setItem(this.no,t)}Po(e){const t=this.Ys.exec(e);return t?t[1]:null}Io(e,t){const n=this.Po(e);return Go.qs(n,t)}Eo(e,t){const n=this.Zs.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return qo.qs(new ze(i),s,t)}Ro(e,t){const n=this.Xs.exec(e),s=Number(n[1]);return Gs.qs(s,t)}io(e){return Ql.qs(e)}fo(e){return JSON.parse(e)}async Ao(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.yo(e.batchId,e.state,e.error);L(mt,`Ignoring mutation for non-active user ${e.user.uid}`)}Vo(e){return this.syncEngine.wo(e.targetId,e.state,e.error)}To(e,t){const n=t?this.zs.insert(e,t):this.zs.remove(e),s=this.oo(this.zs),i=this.oo(n),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.bo(o,c).then(()=>{this.zs=n})}so(e){this.zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}oo(e){let t=Nl();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Om{constructor(){this.So=new Wc,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,t,n){this.Do[e]=t}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new Wc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{vo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="ConnectivityMonitor";class nf{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){L(tf,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){L(tf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo=null;function Hc(){return eo===null?eo=function(){return 268435456+Math.round(2147483648*Math.random())}():eo++,"0x"+eo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="RestConnection",aA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class cA{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=t+"://"+e.host,this.ko=`projects/${n}/databases/${s}`,this.qo=this.databaseId.database===Do?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Qo(e,t,n,s,i){const o=Hc(),c=this.$o(e,t.toUriEncodedString());L(cc,`Sending RPC '${e}' ${o}:`,c,n);const l={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};this.Uo(l,s,i);const{host:h}=new URL(c),f=Xo(h);return this.Ko(e,c,l,n,f).then(p=>(L(cc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Xs(cc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",n),p})}Wo(e,t,n,s,i,o){return this.Qo(e,t,n,s,i)}Uo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s)}$o(e,t){const n=aA[e];return`${this.Lo}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="WebChannelConnection";class uA extends cA{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,t,n,s,i){const o=Hc();return new Promise((c,l)=>{const h=new Wp;h.setWithCredentials(!0),h.listenOnce(Hp.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case oo.NO_ERROR:const p=h.getResponseJson();L(Be,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case oo.TIMEOUT:L(Be,`RPC '${e}' ${o} timed out`),l(new z(M.DEADLINE_EXCEEDED,"Request time out"));break;case oo.HTTP_ERROR:const v=h.getStatus();if(L(Be,`RPC '${e}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const S=T==null?void 0:T.error;if(S&&S.status&&S.message){const x=function(N){const D=N.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(D)>=0?D:M.UNKNOWN}(S.status);l(new z(x,S.message))}else l(new z(M.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new z(M.UNAVAILABLE,"Connection failed."));break;default:$(9055,{s_:e,streamId:o,o_:h.getLastErrorCode(),__:h.getLastError()})}}finally{L(Be,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);L(Be,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,n,15)})}a_(e,t,n){const s=Hc(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Yp(),c=Jp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Uo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const f=i.join("");L(Be,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let v=!1,T=!1;const S=new lA({Go:A=>{T?L(Be,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(v||(L(Be,`Opening RPC '${e}' stream ${s} transport.`),p.open(),v=!0),L(Be,`RPC '${e}' stream ${s} sending:`,A),p.send(A))},zo:()=>p.close()}),x=(A,N,D)=>{A.listen(N,V=>{try{D(V)}catch(O){setTimeout(()=>{throw O},0)}})};return x(p,ks.EventType.OPEN,()=>{T||(L(Be,`RPC '${e}' stream ${s} transport opened.`),S.t_())}),x(p,ks.EventType.CLOSE,()=>{T||(T=!0,L(Be,`RPC '${e}' stream ${s} transport closed`),S.r_())}),x(p,ks.EventType.ERROR,A=>{T||(T=!0,Xs(Be,`RPC '${e}' stream ${s} transport errored. Name:`,A.name,"Message:",A.message),S.r_(new z(M.UNAVAILABLE,"The operation could not be completed")))}),x(p,ks.EventType.MESSAGE,A=>{var N;if(!T){const D=A.data[0];H(!!D,16349);const V=D,O=(V==null?void 0:V.error)||((N=V[0])===null||N===void 0?void 0:N.error);if(O){L(Be,`RPC '${e}' stream ${s} received error:`,O);const F=O.status;let P=function(I){const w=Ce[I];if(w!==void 0)return Qg(w)}(F),y=O.message;P===void 0&&(P=M.INTERNAL,y="Unknown error status: "+F+" with message "+O.message),T=!0,S.r_(new z(P,y)),p.close()}else L(Be,`RPC '${e}' stream ${s} received:`,D),S.i_(D)}}),x(c,Qp.STAT_EVENT,A=>{A.stat===Sc.PROXY?L(Be,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===Sc.NOPROXY&&L(Be,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.n_()},0),S}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(){return typeof window<"u"?window:null}function mo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(r){return new mb(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,t,n=1e3,s=1.5,i=6e4){this.bi=e,this.timerId=t,this.u_=n,this.c_=s,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const t=Math.floor(this.h_+this.d_()),n=Math.max(0,Date.now()-this.T_),s=Math.max(0,t-n);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="PersistentStream";class Fm{constructor(e,t,n,s,i,o,c,l){this.bi=e,this.R_=n,this.V_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new Lm(e,t)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,t){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(Re(t.toString()),Re("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(t)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),t=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.m_===t&&this.B_(n,s)},n=>{e(()=>{const s=new z(M.UNKNOWN,"Fetching auth token failed: "+n.message);return this.L_(s)})})}B_(e,t){const n=this.N_(this.m_);this.stream=this.k_(e,t),this.stream.jo(()=>{n(()=>this.listener.jo())}),this.stream.Jo(()=>{n(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{n(()=>this.L_(s))}),this.stream.onMessage(s=>{n(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return L(rf,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return t=>{this.bi.enqueueAndForget(()=>this.m_===e?t():(L(rf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hA extends Fm{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}k_(e,t){return this.connection.a_("Listen",e,t)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const t=vb(this.serializer,e),n=function(i){if(!("targetChange"in i))return Q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?We(o.readTime):Q.min()}(e);return this.listener.Q_(t,n)}U_(e){const t={};t.database=zc(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=Oo(l)?{documents:rm(i,l)}:{query:sm(i,l).gt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Xg(i,o.resumeToken);const h=Uc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){c.readTime=$r(i,o.snapshotVersion.toTimestamp());const h=Uc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=Eb(this.serializer,e);n&&(t.labels=n),this.F_(t)}K_(e){const t={};t.database=zc(this.serializer),t.removeTarget=e,this.F_(t)}}class dA extends Fm{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,t){return this.connection.a_("Write",e,t)}q_(e){return H(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,H(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){H(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const t=Ib(e.writeResults,e.commitTime),n=We(e.commitTime);return this.listener.j_(n,t)}H_(){const e={};e.database=zc(this.serializer),this.F_(e)}G_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Fo(this.serializer,n))};this.F_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{}class pA extends fA{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,t,n,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Qo(e,Bc(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(M.UNKNOWN,i.toString())})}Wo(e,t,n,s,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Wo(e,Bc(t,n),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(M.UNKNOWN,o.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class gA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Re(t),this.ea=!1):L("OnlineStateTracker",t)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="RemoteStore";class mA{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(o=>{n.enqueueAndForget(async()=>{nr(this)&&(L(er,"Restarting streams for network reachability change."),await async function(l){const h=K(l);h.aa.add(4),await Ri(h),h.la.set("Unknown"),h.aa.delete(4),await ya(h)}(this))})}),this.la=new gA(n,s)}}async function ya(r){if(nr(r))for(const e of r.ua)await e(!0)}async function Ri(r){for(const e of r.ua)await e(!1)}function va(r,e){const t=K(r);t._a.has(e.targetId)||(t._a.set(e.targetId,e),Xl(t)?Yl(t):es(t).b_()&&Jl(t,e))}function Gr(r,e){const t=K(r),n=es(t);t._a.delete(e),n.b_()&&Um(t,e),t._a.size===0&&(n.b_()?n.v_():nr(t)&&t.la.set("Unknown"))}function Jl(r,e){if(r.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}es(r).U_(e)}function Um(r,e){r.ha.Ke(e),es(r).K_(e)}function Yl(r){r.ha=new db({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>r._a.get(e)||null,Pt:()=>r.datastore.serializer.databaseId}),es(r).start(),r.la.ta()}function Xl(r){return nr(r)&&!es(r).w_()&&r._a.size>0}function nr(r){return K(r).aa.size===0}function Bm(r){r.ha=void 0}async function _A(r){r.la.set("Online")}async function yA(r){r._a.forEach((e,t)=>{Jl(r,e)})}async function vA(r,e){Bm(r),Xl(r)?(r.la.ia(e),Yl(r)):r.la.set("Unknown")}async function IA(r,e,t){if(r.la.set("Online"),e instanceof Yg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s._a.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s._a.delete(c),s.ha.removeTarget(c))}(r,e)}catch(n){L(er,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ko(r,n)}else if(e instanceof go?r.ha.Xe(e):e instanceof Jg?r.ha.ot(e):r.ha.nt(e),!t.isEqual(Q.min()))try{const n=await Pm(r.localStore);t.compareTo(n)>=0&&await function(i,o){const c=i.ha.It(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i._a.get(h);f&&i._a.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i._a.get(l);if(!f)return;i._a.set(l,f.withResumeToken(Pe.EMPTY_BYTE_STRING,f.snapshotVersion)),Um(i,l);const p=new Ct(f.target,l,h,f.sequenceNumber);Jl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){L(er,"Failed to raise snapshot:",n),await Ko(r,n)}}async function Ko(r,e,t){if(!yn(e))throw e;r.aa.add(1),await Ri(r),r.la.set("Offline"),t||(t=()=>Pm(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{L(er,"Retrying IndexedDB access"),await t(),r.aa.delete(1),await ya(r)})}function zm(r,e){return e().catch(t=>Ko(r,t,e))}async function Zr(r){const e=K(r),t=pn(e);let n=e.oa.length>0?e.oa[e.oa.length-1].batchId:Fn;for(;EA(e);)try{const s=await iA(e.localStore,n);if(s===null){e.oa.length===0&&t.v_();break}n=s.batchId,wA(e,s)}catch(s){await Ko(e,s)}jm(e)&&$m(e)}function EA(r){return nr(r)&&r.oa.length<10}function wA(r,e){r.oa.push(e);const t=pn(r);t.b_()&&t.W_&&t.G_(e.mutations)}function jm(r){return nr(r)&&!pn(r).w_()&&r.oa.length>0}function $m(r){pn(r).start()}async function TA(r){pn(r).H_()}async function bA(r){const e=pn(r);for(const t of r.oa)e.G_(t.mutations)}async function AA(r,e,t){const n=r.oa.shift(),s=Fl.from(n,e,t);await zm(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Zr(r)}async function SA(r,e){e&&pn(r).W_&&await async function(n,s){if(function(o){return ub(o)&&o!==M.ABORTED}(s.code)){const i=n.oa.shift();pn(n).D_(),await zm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zr(n)}}(r,e),jm(r)&&$m(r)}async function sf(r,e){const t=K(r);t.asyncQueue.verifyOperationInProgress(),L(er,"RemoteStore received new credentials");const n=nr(t);t.aa.add(3),await Ri(t),n&&t.la.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.aa.delete(3),await ya(t)}async function Qc(r,e){const t=K(r);e?(t.aa.delete(2),await ya(t)):e||(t.aa.add(2),await Ri(t),t.la.set("Unknown"))}function es(r){return r.Pa||(r.Pa=function(t,n,s){const i=K(t);return i.Y_(),new hA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{jo:_A.bind(null,r),Jo:yA.bind(null,r),Zo:vA.bind(null,r),Q_:IA.bind(null,r)}),r.ua.push(async e=>{e?(r.Pa.D_(),Xl(r)?Yl(r):r.la.set("Unknown")):(await r.Pa.stop(),Bm(r))})),r.Pa}function pn(r){return r.Ta||(r.Ta=function(t,n,s){const i=K(t);return i.Y_(),new dA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{jo:()=>Promise.resolve(),Jo:TA.bind(null,r),Zo:SA.bind(null,r),z_:bA.bind(null,r),j_:AA.bind(null,r)}),r.ua.push(async e=>{e?(r.Ta.D_(),await Zr(r)):(await r.Ta.stop(),r.oa.length>0&&(L(er,`Stopping write stream with ${r.oa.length} pending writes`),r.oa=[]))})),r.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,c=new Zl(e,t,o,s,i);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eu(r,e){if(Re("AsyncQueue",`${e}: ${r}`),yn(r))return new z(M.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{static emptySet(e){return new Ar(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||B.comparator(t.key,n.key):(t,n)=>B.comparator(t.key,n.key),this.keyedMap=Vs(),this.sortedSet=new ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ar)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Ar;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.Ia=new ge(B.comparator)}track(e){const t=e.doc.key,n=this.Ia.get(t);n?e.type!==0&&n.type===3?this.Ia=this.Ia.insert(t,e):e.type===3&&n.type!==1?this.Ia=this.Ia.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Ia=this.Ia.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Ia=this.Ia.remove(t):e.type===1&&n.type===2?this.Ia=this.Ia.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):$(63341,{Vt:e,Ea:n}):this.Ia=this.Ia.insert(t,e)}da(){const e=[];return this.Ia.inorderTraversal((t,n)=>{e.push(n)}),e}}class Kr{constructor(e,t,n,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Kr(e,t,Ar.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class PA{constructor(){this.queries=af(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(t,n){const s=K(t),i=s.queries;s.queries=af(),i.forEach((o,c)=>{for(const l of c.Ra)l.onError(n)})})(this,new z(M.ABORTED,"Firestore shutting down"))}}function af(){return new Ft(r=>Og(r),ha)}async function CA(r,e){const t=K(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.Va()&&e.ma()&&(n=2):(i=new RA,n=e.ma()?0:1);try{switch(n){case 0:i.Aa=await t.onListen(s,!0);break;case 1:i.Aa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=eu(o,`Initialization of query '${gr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Ra.push(e),e.ga(t.onlineState),i.Aa&&e.pa(i.Aa)&&tu(t)}async function xA(r,e){const t=K(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.Ra.indexOf(e);o>=0&&(i.Ra.splice(o,1),i.Ra.length===0?s=e.ma()?0:1:!i.Va()&&e.ma()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function kA(r,e){const t=K(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.Ra)c.pa(s)&&(n=!0);o.Aa=s}}n&&tu(t)}function VA(r,e,t){const n=K(r),s=n.queries.get(e);if(s)for(const i of s.Ra)i.onError(t);n.queries.delete(e)}function tu(r){r.fa.forEach(e=>{e.next()})}var Jc,cf;(cf=Jc||(Jc={})).ya="default",cf.Cache="cache";class DA{constructor(e,t,n){this.query=e,this.wa=t,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=n||{}}pa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new Kr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ba?this.Da(e)&&(this.wa.next(e),t=!0):this.va(e,this.onlineState)&&(this.Ca(e),t=!0),this.Sa=e,t}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let t=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),t=!0),t}va(e,t){if(!e.fromCache||!this.ma())return!0;const n=t!=="Offline";return(!this.options.Fa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const t=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ca(e){e=Kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==Jc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.key=e}}class Gm{constructor(e){this.key=e}}class NA{constructor(e,t){this.query=e,this.qa=t,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=se(),this.mutatedKeys=se(),this.Ua=Lg(e),this.Ka=new Ar(this.Ua)}get Wa(){return this.qa}Ga(e,t){const n=t?t.za:new of,s=t?t.Ka:this.Ka;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const v=s.get(f),T=bi(this.query,p)?p:null,S=!!v&&this.mutatedKeys.has(v.key),x=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let A=!1;v&&T?v.data.isEqual(T.data)?S!==x&&(n.track({type:3,doc:T}),A=!0):this.ja(v,T)||(n.track({type:2,doc:T}),A=!0,(l&&this.Ua(T,l)>0||h&&this.Ua(T,h)<0)&&(c=!0)):!v&&T?(n.track({type:0,doc:T}),A=!0):v&&!T&&(n.track({type:1,doc:v}),A=!0,(l||h)&&(c=!0)),A&&(T?(o=o.add(T),i=x?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{Ka:o,za:n,ys:c,mutatedKeys:i}}ja(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const o=e.za.da();o.sort((f,p)=>function(T,S){const x=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $(20277,{Vt:A})}};return x(T)-x(S)}(f.type,p.type)||this.Ua(f.doc,p.doc)),this.Ha(n),s=s!=null&&s;const c=t&&!s?this.Ja():[],l=this.$a.size===0&&this.current&&!s?1:0,h=l!==this.Qa;return this.Qa=l,o.length!==0||h?{snapshot:new Kr(this.query,e.Ka,i,o,e.mutatedKeys,l===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ya:c}:{Ya:c}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new of,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(t=>this.qa=this.qa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qa=this.qa.delete(t)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=se(),this.Ka.forEach(n=>{this.Za(n.key)&&(this.$a=this.$a.add(n.key))});const t=[];return e.forEach(n=>{this.$a.has(n)||t.push(new Gm(n))}),this.$a.forEach(n=>{e.has(n)||t.push(new qm(n))}),t}Xa(e){this.qa=e.Ns,this.$a=se();const t=this.Ga(e.documents);return this.applyChanges(t,!0)}eu(){return Kr.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const ts="SyncEngine";class OA{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class MA{constructor(e){this.key=e,this.tu=!1}}class LA{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nu={},this.ru=new Ft(c=>Og(c),ha),this.iu=new Map,this.su=new Set,this.ou=new ge(B.comparator),this._u=new Map,this.au=new ql,this.uu={},this.cu=new Map,this.lu=Zn.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function FA(r,e,t=!0){const n=Ia(r);let s;const i=n.ru.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.eu()):s=await Km(n,e,t,!0),s}async function UA(r,e){const t=Ia(r);await Km(t,e,!0,!1)}async function Km(r,e,t,n){const s=await $o(r.localStore,rt(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await nu(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&va(r.remoteStore,s),c}async function nu(r,e,t,n,s){r.Pu=(p,v,T)=>async function(x,A,N,D){let V=A.view.Ga(N);V.ys&&(V=await Kc(x.localStore,A.query,!1).then(({documents:y})=>A.view.Ga(y,V)));const O=D&&D.targetChanges.get(A.targetId),F=D&&D.targetMismatches.get(A.targetId)!=null,P=A.view.applyChanges(V,x.isPrimaryClient,O,F);return Yc(x,A.targetId,P.Ya),P.snapshot}(r,p,v,T);const i=await Kc(r.localStore,e,!0),o=new NA(e,i.Ns),c=o.Ga(i.documents),l=Si.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=o.applyChanges(c,r.isPrimaryClient,l);Yc(r,t,h.Ya);const f=new OA(e,t,o);return r.ru.set(e,f),r.iu.has(t)?r.iu.get(t).push(e):r.iu.set(t,[e]),h.snapshot}async function BA(r,e,t){const n=K(r),s=n.ru.get(e),i=n.iu.get(s.targetId);if(i.length>1)return n.iu.set(s.targetId,i.filter(o=>!ha(o,e))),void n.ru.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await qr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Gr(n.remoteStore,s.targetId),Wr(n,s.targetId)}).catch(_n)):(Wr(n,s.targetId),await qr(n.localStore,s.targetId,!0))}async function zA(r,e){const t=K(r),n=t.ru.get(e),s=t.iu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Gr(t.remoteStore,n.targetId))}async function jA(r,e,t){const n=ou(r);try{const s=await function(o,c){const l=K(o),h=Te.now(),f=c.reduce((T,S)=>T.add(S.key),se());let p,v;return l.persistence.runTransaction("Locally write mutations","readwrite",T=>{let S=tt(),x=se();return l.Cs.getEntries(T,f).next(A=>{S=A,S.forEach((N,D)=>{D.isValidDocument()||(x=x.add(N))})}).next(()=>l.localDocuments.getOverlayedDocuments(T,S)).next(A=>{p=A;const N=[];for(const D of c){const V=cb(D,p.get(D.key).overlayedDocument);V!=null&&N.push(new vn(D.key,V,Sg(V.value.mapValue),nt.exists(!0)))}return l.mutationQueue.addMutationBatch(T,h,N,c)}).next(A=>{v=A;const N=A.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(T,A.batchId,N)})}).then(()=>({batchId:v.batchId,changes:Ug(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.uu[o.currentUser.toKey()];h||(h=new ge(Z)),h=h.insert(c,l),o.uu[o.currentUser.toKey()]=h}(n,s.batchId,t),await In(n,s.changes),await Zr(n.remoteStore)}catch(s){const i=eu(s,"Failed to persist write");t.reject(i)}}async function Wm(r,e){const t=K(r);try{const n=await rA(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t._u.get(i);o&&(H(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.tu=!0:s.modifiedDocuments.size>0?H(o.tu,14607):s.removedDocuments.size>0&&(H(o.tu,42227),o.tu=!1))}),await In(t,n,e)}catch(n){await _n(n)}}function lf(r,e,t){const n=K(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.ru.forEach((i,o)=>{const c=o.view.ga(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=K(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const v of p.Ra)v.ga(c)&&(h=!0)}),h&&tu(l)}(n.eventManager,e),s.length&&n.nu.Q_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function $A(r,e,t){const n=K(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n._u.get(e),i=s&&s.key;if(i){let o=new ge(B.comparator);o=o.insert(i,Ae.newNoDocument(i,Q.min()));const c=se().add(i),l=new Ai(Q.min(),new Map,new ge(Z),o,c);await Wm(n,l),n.ou=n.ou.remove(i),n._u.delete(e),iu(n)}else await qr(n.localStore,e,!1).then(()=>Wr(n,e,t)).catch(_n)}async function qA(r,e){const t=K(r),n=e.batch.batchId;try{const s=await nA(t.localStore,e);su(t,n,null),ru(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await In(t,s)}catch(s){await _n(s)}}async function GA(r,e,t){const n=K(r);try{const s=await function(o,c){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(H(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(n.localStore,e);su(n,e,t),ru(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await In(n,s)}catch(s){await _n(s)}}function ru(r,e){(r.cu.get(e)||[]).forEach(t=>{t.resolve()}),r.cu.delete(e)}function su(r,e,t){const n=K(r);let s=n.uu[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.uu[n.currentUser.toKey()]=s}}function Wr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.iu.get(e))r.ru.delete(n),t&&r.nu.Tu(n,t);r.iu.delete(e),r.isPrimaryClient&&r.au.Ur(e).forEach(n=>{r.au.containsKey(n)||Hm(r,n)})}function Hm(r,e){r.su.delete(e.path.canonicalString());const t=r.ou.get(e);t!==null&&(Gr(r.remoteStore,t),r.ou=r.ou.remove(e),r._u.delete(t),iu(r))}function Yc(r,e,t){for(const n of t)n instanceof qm?(r.au.addReference(n.key,e),KA(r,n)):n instanceof Gm?(L(ts,"Document no longer in limbo: "+n.key),r.au.removeReference(n.key,e),r.au.containsKey(n.key)||Hm(r,n.key)):$(19791,{Iu:n})}function KA(r,e){const t=e.key,n=t.path.canonicalString();r.ou.get(t)||r.su.has(n)||(L(ts,"New document in limbo: "+t),r.su.add(n),iu(r))}function iu(r){for(;r.su.size>0&&r.ou.size<r.maxConcurrentLimboResolutions;){const e=r.su.values().next().value;r.su.delete(e);const t=new B(ue.fromString(e)),n=r.lu.next();r._u.set(n,new MA(t)),r.ou=r.ou.insert(t,n),va(r.remoteStore,new Ct(rt(ua(t.path)),n,"TargetPurposeLimboResolution",Ye.le))}}async function In(r,e,t){const n=K(r),s=[],i=[],o=[];n.ru.isEmpty()||(n.ru.forEach((c,l)=>{o.push(n.Pu(l,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Wl.Ps(l.targetId,h);i.push(p)}}))}),await Promise.all(o),n.nu.Q_(s),await async function(l,h){const f=K(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>R.forEach(h,v=>R.forEach(v.ls,T=>f.persistence.referenceDelegate.addReference(p,v.targetId,T)).next(()=>R.forEach(v.hs,T=>f.persistence.referenceDelegate.removeReference(p,v.targetId,T)))))}catch(p){if(!yn(p))throw p;L(Hl,"Failed to update sequence numbers: "+p)}for(const p of h){const v=p.targetId;if(!p.fromCache){const T=f.Ss.get(v),S=T.snapshotVersion,x=T.withLastLimboFreeSnapshotVersion(S);f.Ss=f.Ss.insert(v,x)}}}(n.localStore,i))}async function WA(r,e){const t=K(r);if(!t.currentUser.isEqual(e)){L(ts,"User change. New user:",e.toKey());const n=await Rm(t.localStore,e);t.currentUser=e,function(i,o){i.cu.forEach(c=>{c.forEach(l=>{l.reject(new z(M.CANCELLED,o))})}),i.cu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await In(t,n.Ms)}}function HA(r,e){const t=K(r),n=t._u.get(e);if(n&&n.tu)return se().add(n.key);{let s=se();const i=t.iu.get(e);if(!i)return s;for(const o of i){const c=t.ru.get(o);s=s.unionWith(c.view.Wa)}return s}}async function QA(r,e){const t=K(r),n=await Kc(t.localStore,e.query,!0),s=e.view.Xa(n);return t.isPrimaryClient&&Yc(t,e.targetId,s.Ya),s}async function JA(r,e){const t=K(r);return xm(t.localStore,e).then(n=>In(t,n))}async function YA(r,e,t,n){const s=K(r),i=await function(c,l){const h=K(c),f=K(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Hn(p,l).next(v=>v?h.localDocuments.getDocuments(p,v):R.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Zr(s.remoteStore):t==="acknowledged"||t==="rejected"?(su(s,e,n||null),ru(s,e),function(c,l){K(K(c).mutationQueue).Xn(l)}(s.localStore,e)):$(6720,"Unknown batchState",{Eu:t}),await In(s,i)):L(ts,"Cannot apply mutation batch with id: "+e)}async function XA(r,e){const t=K(r);if(Ia(t),ou(t),e===!0&&t.hu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await uf(t,n.toArray());t.hu=!0,await Qc(t.remoteStore,!0);for(const i of s)va(t.remoteStore,i)}else if(e===!1&&t.hu!==!1){const n=[];let s=Promise.resolve();t.iu.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then(()=>(Wr(t,o),qr(t.localStore,o,!0))),Gr(t.remoteStore,o)}),await s,await uf(t,n),function(o){const c=K(o);c._u.forEach((l,h)=>{Gr(c.remoteStore,h)}),c.au.Kr(),c._u=new Map,c.ou=new ge(B.comparator)}(t),t.hu=!1,await Qc(t.remoteStore,!1)}}async function uf(r,e,t){const n=K(r),s=[],i=[];for(const o of e){let c;const l=n.iu.get(o);if(l&&l.length!==0){c=await $o(n.localStore,rt(l[0]));for(const h of l){const f=n.ru.get(h),p=await QA(n,f);p.snapshot&&i.push(p.snapshot)}}else{const h=await Cm(n.localStore,o);c=await $o(n.localStore,h),await nu(n,Qm(h),o,!1,c.resumeToken)}s.push(c)}return n.nu.Q_(i),s}function Qm(r){return Ng(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function ZA(r){return function(t){return K(K(t).persistence).us()}(K(r).localStore)}async function eS(r,e,t,n){const s=K(r);if(s.hu)return void L(ts,"Ignoring unexpected query state notification.");const i=s.iu.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await xm(s.localStore,Mg(i[0])),c=Ai.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Pe.EMPTY_BYTE_STRING);await In(s,o,c);break}case"rejected":await qr(s.localStore,e,!0),Wr(s,e,n);break;default:$(64155,t)}}async function tS(r,e,t){const n=Ia(r);if(n.hu){for(const s of e){if(n.iu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){L(ts,"Adding an already active target "+s);continue}const i=await Cm(n.localStore,s),o=await $o(n.localStore,i);await nu(n,Qm(i),o.targetId,!1,o.resumeToken),va(n.remoteStore,o)}for(const s of t)n.iu.has(s)&&await qr(n.localStore,s,!1).then(()=>{Gr(n.remoteStore,s),Wr(n,s)}).catch(_n)}}function Ia(r){const e=K(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$A.bind(null,e),e.nu.Q_=kA.bind(null,e.eventManager),e.nu.Tu=VA.bind(null,e.eventManager),e}function ou(r){const e=K(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GA.bind(null,e),e}class li{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_a(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,t){return null}fu(e,t){return null}Vu(e){return Sm(this.persistence,new Am,e.initialUser,this.serializer)}Ru(e){return new Gl(ma.Ei,this.serializer)}Au(e){return new Om}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}li.provider={build:()=>new li};class nS extends li{constructor(e){super(),this.cacheSizeBytes=e}mu(e,t){H(this.persistence.referenceDelegate instanceof jo,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new vm(n,e.asyncQueue,t)}Ru(e){const t=this.cacheSizeBytes!==void 0?je.withCacheSize(this.cacheSizeBytes):je.DEFAULT;return new Gl(n=>jo.Ei(n,t),this.serializer)}}class Jm extends li{constructor(e,t,n){super(),this.gu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.gu.initialize(this,e),await ou(this.gu.syncEngine),await Zr(this.gu.remoteStore),await this.persistence.Ki(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Vu(e){return Sm(this.persistence,new Am,e.initialUser,this.serializer)}mu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new vm(n,e.asyncQueue,t)}fu(e,t){const n=new lT(t,this.persistence);return new cT(e.asyncQueue,n)}Ru(e){const t=bm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?je.withCacheSize(this.cacheSizeBytes):je.DEFAULT;return new Kl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Mm(),mo(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Au(e){return new Om}}class rS extends Jm{constructor(e,t){super(e,t,!1),this.gu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.gu.syncEngine;this.sharedClientState instanceof ac&&(this.sharedClientState.syncEngine={yo:YA.bind(null,t),wo:eS.bind(null,t),bo:tS.bind(null,t),us:ZA.bind(null,t),po:JA.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ki(async n=>{await XA(this.gu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Au(e){const t=Mm();if(!ac.C(t))throw new z(M.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=bm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ac(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ui{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>lf(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=WA.bind(null,this.syncEngine),await Qc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PA}()}createDatastore(e){const t=_a(e.databaseInfo.databaseId),n=function(i){return new uA(i)}(e.databaseInfo);return function(i,o,c,l){return new pA(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,c){return new mA(n,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>lf(this.syncEngine,t,0),function(){return nf.C()?new nf:new oA}())}createSyncEngine(e,t){return function(s,i,o,c,l,h,f){const p=new LA(s,i,o,c,l,h);return f&&(p.hu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=K(s);L(er,"RemoteStore shutting down."),i.aa.add(5),await Ri(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ui.provider={build:()=>new ui};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):Re("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="FirestoreClient";class iS{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=ze.UNAUTHENTICATED,this.clientId=eg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{L(gn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(L(gn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=eu(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function lc(r,e){r.asyncQueue.verifyOperationInProgress(),L(gn,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Rm(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function hf(r,e){r.asyncQueue.verifyOperationInProgress();const t=await oS(r);L(gn,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>sf(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>sf(e.remoteStore,s)),r._onlineComponents=e}async function oS(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){L(gn,"Using user provided OfflineComponentProvider");try{await lc(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Xs("Error using user provided cache. Falling back to memory cache: "+t),await lc(r,new li)}}else L(gn,"Using default OfflineComponentProvider"),await lc(r,new nS(void 0));return r._offlineComponents}async function Ym(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(L(gn,"Using user provided OnlineComponentProvider"),await hf(r,r._uninitializedComponentsProvider._online)):(L(gn,"Using default OnlineComponentProvider"),await hf(r,new ui))),r._onlineComponents}function aS(r){return Ym(r).then(e=>e.syncEngine)}async function df(r){const e=await Ym(r),t=e.eventManager;return t.onListen=FA.bind(null,e.syncEngine),t.onUnlisten=BA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=UA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zA.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(r,e,t){if(!t)throw new z(M.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function cS(r,e,t,n){if(e===!0&&n===!0)throw new z(M.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function pf(r){if(!B.isDocumentKey(r))throw new z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function gf(r){if(B.isDocumentKey(r))throw new z(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function au(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":$(12329,{type:typeof r})}function Ks(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=au(r);throw new z(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="firestore.googleapis.com",mf=!0;class _f{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lS,this.ssl=mf}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:mf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ym)throw new z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xm((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cu{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _f({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _f(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Xw;switch(n.type){case"firstParty":return new tT(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ff.get(t);n&&(L("ComponentProvider","Removing Datastore"),ff.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ea(this.firestore,e,this._query)}}class st{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}}class hn extends Ea{constructor(e,t,n){super(e,t,ua(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new B(e))}withConverter(e){return new hn(this.firestore,e,this._path)}}function uS(r,e,...t){if(r=Xe(r),Zm("collection","path",e),r instanceof cu){const n=ue.fromString(e,...t);return gf(n),new hn(r,null,n)}{if(!(r instanceof st||r instanceof hn))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ue.fromString(e,...t));return gf(n),new hn(r.firestore,null,n)}}function yf(r,e,...t){if(r=Xe(r),arguments.length===1&&(e=eg.newId()),Zm("doc","path",e),r instanceof cu){const n=ue.fromString(e,...t);return pf(n),new st(r,null,new B(n))}{if(!(r instanceof st||r instanceof hn))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ue.fromString(e,...t));return pf(n),new st(r.firestore,r instanceof hn?r.converter:null,new B(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="AsyncQueue";class If{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new Lm(this,"async_queue_retry"),this.ju=()=>{const n=mo();n&&L(vf,"Visibility state changed to "+n.visibilityState),this.y_.A_()},this.Hu=e;const t=mo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const t=mo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const t=new ln;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!yn(e))throw e;L(vf,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const t=this.Hu.then(()=>(this.Wu=!0,e().catch(n=>{throw this.Ku=n,this.Wu=!1,Re("INTERNAL UNHANDLED ERROR: ",Ef(n)),n}).then(n=>(this.Wu=!1,n))));return this.Hu=t,t}enqueueAfterDelay(e,t,n){this.Ju(),this.zu.indexOf(e)>-1&&(t=0);const s=Zl.createAndSchedule(this,e,t,n,i=>this.Xu(i));return this.Uu.push(s),s}Ju(){this.Ku&&$(47125,{ec:Ef(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const t of this.Uu)if(t.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Uu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const t=this.Uu.indexOf(e);this.Uu.splice(t,1)}}function Ef(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class Wo extends cu{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new If,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new If(e),this._firestoreClient=void 0,await e}}}function hS(r,e,t){t||(t=Do);const n=dl(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if($n(i,e))return s;throw new z(M.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new z(M.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ym)throw new z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Xo(e.host)&&op(e.host),n.initialize({options:e,instanceIdentifier:t})}function e_(r){if(r._terminated)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||dS(r),r._firestoreClient}function dS(r){var e,t,n;const s=r._freezeSettings(),i=function(c,l,h,f){return new LT(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Xm(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new iS(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hr(Pe.fromBase64String(e))}catch(t){throw new z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Hr(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=/^__.*__$/;class pS{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new vn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xr(e,this.data,t,this.fieldTransforms)}}function n_(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{oc:r})}}class du{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new du(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ac({path:n,cc:!1});return s.lc(e),s}hc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ac({path:n,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return Ho(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(n_(this.oc)&&fS.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class gS{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||_a(e)}dc(e,t,n,s=!1){return new du({oc:e,methodName:t,Ec:n,path:we.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mS(r){const e=r._freezeSettings(),t=_a(r._databaseId);return new gS(r._databaseId,!!e.ignoreUndefinedProperties,t)}function _S(r,e,t,n,s,i={}){const o=r.dc(i.merge||i.mergeFields?2:0,e,t,s);o_("Data must be an object, but it was:",o,n);const c=s_(n,o);let l,h;if(i.merge)l=new at(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const v=yS(e,p,t);if(!o.contains(v))throw new z(M.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);IS(f,v)||f.push(v)}l=new at(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new pS(new Je(c),l,h)}function r_(r,e){if(i_(r=Xe(r)))return o_("Unsupported field value:",e,r),s_(r,e);if(r instanceof t_)return function(n,s){if(!n_(s.oc))throw s.Tc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const c of n){let l=r_(c,s.Pc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=Xe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return tb(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Te.fromDate(n);return{timestampValue:$r(s.serializer,i)}}if(n instanceof Te){const i=new Te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$r(s.serializer,i)}}if(n instanceof uu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Hr)return{bytesValue:Xg(s.serializer,n._byteString)};if(n instanceof st){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Tc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zl(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof hu)return function(o,c){return{mapValue:{fields:{[xl]:{stringValue:kl},[Lr]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Tc("VectorValues must only contain numeric values.");return Ol(c.serializer,h)})}}}}}}(n,s);throw s.Tc(`Unsupported field value: ${au(n)}`)}(r,e)}function s_(r,e){const t={};return _g(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tr(r,(n,s)=>{const i=r_(s,e.uc(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function i_(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Te||r instanceof uu||r instanceof Hr||r instanceof st||r instanceof t_||r instanceof hu)}function o_(r,e,t){if(!i_(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=au(t);throw n==="an object"?e.Tc(r+" a custom object"):e.Tc(r+" "+n)}}function yS(r,e,t){if((e=Xe(e))instanceof lu)return e._internalPath;if(typeof e=="string")return a_(r,e);throw Ho("Field path arguments must be of type string or ",r,!1,void 0,t)}const vS=new RegExp("[~\\*/\\[\\]]");function a_(r,e,t){if(e.search(vS)>=0)throw Ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new lu(...e.split("."))._internalPath}catch{throw Ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ho(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new z(M.INVALID_ARGUMENT,c+r+l)}function IS(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ES(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(l_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ES extends c_{data(){return super.data()}}function l_(r,e){return typeof e=="string"?a_(r,e):e instanceof lu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class TS{convertValue(e,t="none"){switch(dn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Nt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return tr(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t[Lr].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(o=>Ee(o.doubleValue));return new hu(i)}convertGeoPoint(e){return new uu(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=aa(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(si(e));default:return null}}convertTimestamp(e){const t=Dt(e);return new Te(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ue.fromString(e);H(cm(n),9688,{name:e});const s=new Qn(n.get(1),n.get(3)),i=new B(n.popFirst(5));return s.isEqual(t)||Re(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class u_ extends c_{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(l_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class _o extends u_{data(e={}){return super.data(e)}}class AS{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Os(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new _o(this._firestore,this._userDataWriter,n.key,n,new Os(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new _o(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Os(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new _o(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Os(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:SS(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function SS(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $(61501,{type:r})}}class h_ extends TS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,t)}}function RS(r,e,t){r=Ks(r,st);const n=Ks(r.firestore,Wo),s=bS(r.converter,e,t);return PS(n,[_S(mS(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,nt.none())])}function uc(r,...e){var t,n,s;r=Xe(r);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||wf(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(wf(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,f;if(r instanceof st)h=Ks(r.firestore,Wo),f=ua(r._key.path),l={next:p=>{e[o]&&e[o](CS(h,r,p))},error:e[o+1],complete:e[o+2]};else{const p=Ks(r,Ea);h=Ks(p.firestore,Wo),f=p._query;const v=new h_(h);l={next:T=>{e[o]&&e[o](new AS(h,v,p,T))},error:e[o+1],complete:e[o+2]},wS(r._query)}return function(v,T,S,x){const A=new sS(x),N=new DA(T,A,S);return v.asyncQueue.enqueueAndForget(async()=>CA(await df(v),N)),()=>{A.yu(),v.asyncQueue.enqueueAndForget(async()=>xA(await df(v),N))}}(e_(h),f,c,l)}function PS(r,e){return function(n,s){const i=new ln;return n.asyncQueue.enqueueAndForget(async()=>jA(await aS(n),s,i)),i.promise}(e_(r),e)}function CS(r,e,t){const n=t.docs.get(e._key),s=new h_(r);return new u_(r,s,e._key,n,new Os(t.hasPendingWrites,t.fromCache),e.converter)}class xS{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=NS(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function kS(r){return new xS(r)}class VS{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ui.provider,this._offlineComponentProvider={build:t=>new Jm(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class DS{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ui.provider,this._offlineComponentProvider={build:t=>new rS(t,e==null?void 0:e.cacheSizeBytes)}}}function NS(r){return new VS(void 0)}function OS(){return new DS}(function(e,t=!0){(function(s){Yr=s})(Qr),xr(new qn("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),c=new Wo(new Zw(n.getProvider("auth-internal")),new nT(o,n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qn(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),an(ed,td,e),an(ed,td,"esm2017")})();const Tf={apiKey:"AIzaSyDfgeX9z3E7jIBZzxK31Y2Q8LlYO-8MfkE",authDomain:"forewit-github-io.firebaseapp.com",projectId:"forewit-github-io",storageBucket:"forewit-github-io.appspot.com",messagingSenderId:"423340282902",appId:"1:423340282902:web:f873fc5d5fc5c3e0ebd137"};let Ir;II().length&&(Ir=lp(),EI(Ir)),Ir=wc(Tf);const As=Qw(Ir),hc=hS(Ir,{localCache:kS({tabManager:OS()})}),fu="-",MS=r=>{const e=FS(r),{conflictingClassGroups:t,conflictingClassGroupModifiers:n}=r;return{getClassGroupId:o=>{const c=o.split(fu);return c[0]===""&&c.length!==1&&c.shift(),d_(c,e)||LS(o)},getConflictingClassGroupIds:(o,c)=>{const l=t[o]||[];return c&&n[o]?[...l,...n[o]]:l}}},d_=(r,e)=>{var o;if(r.length===0)return e.classGroupId;const t=r[0],n=e.nextPart.get(t),s=n?d_(r.slice(1),n):void 0;if(s)return s;if(e.validators.length===0)return;const i=r.join(fu);return(o=e.validators.find(({validator:c})=>c(i)))==null?void 0:o.classGroupId},bf=/^\[(.+)\]$/,LS=r=>{if(bf.test(r)){const e=bf.exec(r)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},FS=r=>{const{theme:e,classGroups:t}=r,n={nextPart:new Map,validators:[]};for(const s in t)Xc(t[s],n,s,e);return n},Xc=(r,e,t,n)=>{r.forEach(s=>{if(typeof s=="string"){const i=s===""?e:Af(e,s);i.classGroupId=t;return}if(typeof s=="function"){if(US(s)){Xc(s(n),e,t,n);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([i,o])=>{Xc(o,Af(e,i),t,n)})})},Af=(r,e)=>{let t=r;return e.split(fu).forEach(n=>{t.nextPart.has(n)||t.nextPart.set(n,{nextPart:new Map,validators:[]}),t=t.nextPart.get(n)}),t},US=r=>r.isThemeGetter,BS=r=>{if(r<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,n=new Map;const s=(i,o)=>{t.set(i,o),e++,e>r&&(e=0,n=t,t=new Map)};return{get(i){let o=t.get(i);if(o!==void 0)return o;if((o=n.get(i))!==void 0)return s(i,o),o},set(i,o){t.has(i)?t.set(i,o):s(i,o)}}},Zc="!",el=":",zS=el.length,jS=r=>{const{prefix:e,experimentalParseClassName:t}=r;let n=s=>{const i=[];let o=0,c=0,l=0,h;for(let S=0;S<s.length;S++){let x=s[S];if(o===0&&c===0){if(x===el){i.push(s.slice(l,S)),l=S+zS;continue}if(x==="/"){h=S;continue}}x==="["?o++:x==="]"?o--:x==="("?c++:x===")"&&c--}const f=i.length===0?s:s.substring(l),p=$S(f),v=p!==f,T=h&&h>l?h-l:void 0;return{modifiers:i,hasImportantModifier:v,baseClassName:p,maybePostfixModifierPosition:T}};if(e){const s=e+el,i=n;n=o=>o.startsWith(s)?i(o.substring(s.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:o,maybePostfixModifierPosition:void 0}}if(t){const s=n;n=i=>t({className:i,parseClassName:s})}return n},$S=r=>r.endsWith(Zc)?r.substring(0,r.length-1):r.startsWith(Zc)?r.substring(1):r,qS=r=>{const e=Object.fromEntries(r.orderSensitiveModifiers.map(n=>[n,!0]));return n=>{if(n.length<=1)return n;const s=[];let i=[];return n.forEach(o=>{o[0]==="["||e[o]?(s.push(...i.sort(),o),i=[]):i.push(o)}),s.push(...i.sort()),s}},GS=r=>({cache:BS(r.cacheSize),parseClassName:jS(r),sortModifiers:qS(r),...MS(r)}),KS=/\s+/,WS=(r,e)=>{const{parseClassName:t,getClassGroupId:n,getConflictingClassGroupIds:s,sortModifiers:i}=e,o=[],c=r.trim().split(KS);let l="";for(let h=c.length-1;h>=0;h-=1){const f=c[h],{isExternal:p,modifiers:v,hasImportantModifier:T,baseClassName:S,maybePostfixModifierPosition:x}=t(f);if(p){l=f+(l.length>0?" "+l:l);continue}let A=!!x,N=n(A?S.substring(0,x):S);if(!N){if(!A){l=f+(l.length>0?" "+l:l);continue}if(N=n(S),!N){l=f+(l.length>0?" "+l:l);continue}A=!1}const D=i(v).join(":"),V=T?D+Zc:D,O=V+N;if(o.includes(O))continue;o.push(O);const F=s(N,A);for(let P=0;P<F.length;++P){const y=F[P];o.push(V+y)}l=f+(l.length>0?" "+l:l)}return l};function HS(){let r=0,e,t,n="";for(;r<arguments.length;)(e=arguments[r++])&&(t=f_(e))&&(n&&(n+=" "),n+=t);return n}const f_=r=>{if(typeof r=="string")return r;let e,t="";for(let n=0;n<r.length;n++)r[n]&&(e=f_(r[n]))&&(t&&(t+=" "),t+=e);return t};function QS(r,...e){let t,n,s,i=o;function o(l){const h=e.reduce((f,p)=>p(f),r());return t=GS(h),n=t.cache.get,s=t.cache.set,i=c,c(l)}function c(l){const h=n(l);if(h)return h;const f=WS(l,t);return s(l,f),f}return function(){return i(HS.apply(null,arguments))}}const Ve=r=>{const e=t=>t[r]||[];return e.isThemeGetter=!0,e},p_=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,g_=/^\((?:(\w[\w-]*):)?(.+)\)$/i,JS=/^\d+\/\d+$/,YS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,XS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ZS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,eR=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,tR=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,fr=r=>JS.test(r),ie=r=>!!r&&!Number.isNaN(Number(r)),Sn=r=>!!r&&Number.isInteger(Number(r)),Sf=r=>r.endsWith("%")&&ie(r.slice(0,-1)),Wt=r=>YS.test(r),nR=()=>!0,rR=r=>XS.test(r)&&!ZS.test(r),pu=()=>!1,sR=r=>eR.test(r),iR=r=>tR.test(r),oR=r=>!q(r)&&!G(r),aR=r=>ns(r,y_,pu),q=r=>p_.test(r),Rn=r=>ns(r,v_,rR),dc=r=>ns(r,yR,ie),cR=r=>ns(r,m_,pu),lR=r=>ns(r,__,iR),uR=r=>ns(r,pu,sR),G=r=>g_.test(r),to=r=>rs(r,v_),hR=r=>rs(r,vR),dR=r=>rs(r,m_),fR=r=>rs(r,y_),pR=r=>rs(r,__),gR=r=>rs(r,IR,!0),ns=(r,e,t)=>{const n=p_.exec(r);return n?n[1]?e(n[1]):t(n[2]):!1},rs=(r,e,t=!1)=>{const n=g_.exec(r);return n?n[1]?e(n[1]):t:!1},m_=r=>r==="position",mR=new Set(["image","url"]),__=r=>mR.has(r),_R=new Set(["length","size","percentage"]),y_=r=>_R.has(r),v_=r=>r==="length",yR=r=>r==="number",vR=r=>r==="family-name",IR=r=>r==="shadow",ER=()=>{const r=Ve("color"),e=Ve("font"),t=Ve("text"),n=Ve("font-weight"),s=Ve("tracking"),i=Ve("leading"),o=Ve("breakpoint"),c=Ve("container"),l=Ve("spacing"),h=Ve("radius"),f=Ve("shadow"),p=Ve("inset-shadow"),v=Ve("drop-shadow"),T=Ve("blur"),S=Ve("perspective"),x=Ve("aspect"),A=Ve("ease"),N=Ve("animate"),D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],V=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],O=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto","contain","none"],P=()=>[G,q,l],y=()=>[fr,"full","auto",...P()],m=()=>[Sn,"none","subgrid",G,q],I=()=>["auto",{span:["full",Sn,G,q]},G,q],w=()=>[Sn,"auto",G,q],b=()=>["auto","min","max","fr",G,q],E=()=>["start","end","center","between","around","evenly","stretch","baseline"],_=()=>["start","end","center","stretch"],W=()=>["auto",...P()],ee=()=>[fr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],j=()=>[r,G,q],ne=()=>[Sf,Rn],Y=()=>["","none","full",h,G,q],te=()=>["",ie,to,Rn],fe=()=>["solid","dashed","dotted","double"],Se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ye=()=>["","none",T,G,q],ve=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",G,q],ft=()=>["none",ie,G,q],He=()=>["none",ie,G,q],Ut=()=>[ie,G,q],ct=()=>[fr,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Wt],breakpoint:[Wt],color:[nR],container:[Wt],"drop-shadow":[Wt],ease:["in","out","in-out"],font:[oR],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Wt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Wt],shadow:[Wt],spacing:["px",ie],text:[Wt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",fr,q,G,x]}],container:["container"],columns:[{columns:[ie,q,G,c]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...V(),q,G]}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:y()}],"inset-x":[{"inset-x":y()}],"inset-y":[{"inset-y":y()}],start:[{start:y()}],end:[{end:y()}],top:[{top:y()}],right:[{right:y()}],bottom:[{bottom:y()}],left:[{left:y()}],visibility:["visible","invisible","collapse"],z:[{z:[Sn,"auto",G,q]}],basis:[{basis:[fr,"full","auto",c,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ie,fr,"auto","initial","none",q]}],grow:[{grow:["",ie,G,q]}],shrink:[{shrink:["",ie,G,q]}],order:[{order:[Sn,"first","last","none",G,q]}],"grid-cols":[{"grid-cols":m()}],"col-start-end":[{col:I()}],"col-start":[{"col-start":w()}],"col-end":[{"col-end":w()}],"grid-rows":[{"grid-rows":m()}],"row-start-end":[{row:I()}],"row-start":[{"row-start":w()}],"row-end":[{"row-end":w()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":b()}],"auto-rows":[{"auto-rows":b()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...E(),"normal"]}],"justify-items":[{"justify-items":[..._(),"normal"]}],"justify-self":[{"justify-self":["auto",..._()]}],"align-content":[{content:["normal",...E()]}],"align-items":[{items:[..._(),"baseline"]}],"align-self":[{self:["auto",..._(),"baseline"]}],"place-content":[{"place-content":E()}],"place-items":[{"place-items":[..._(),"baseline"]}],"place-self":[{"place-self":["auto",..._()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:W()}],mx:[{mx:W()}],my:[{my:W()}],ms:[{ms:W()}],me:[{me:W()}],mt:[{mt:W()}],mr:[{mr:W()}],mb:[{mb:W()}],ml:[{ml:W()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:ee()}],w:[{w:[c,"screen",...ee()]}],"min-w":[{"min-w":[c,"screen","none",...ee()]}],"max-w":[{"max-w":[c,"screen","none","prose",{screen:[o]},...ee()]}],h:[{h:["screen",...ee()]}],"min-h":[{"min-h":["screen","none",...ee()]}],"max-h":[{"max-h":["screen",...ee()]}],"font-size":[{text:["base",t,to,Rn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,G,dc]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Sf,q]}],"font-family":[{font:[hR,q,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,G,q]}],"line-clamp":[{"line-clamp":[ie,"none",G,dc]}],leading:[{leading:[i,...P()]}],"list-image":[{"list-image":["none",G,q]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",G,q]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:j()}],"text-color":[{text:j()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...fe(),"wavy"]}],"text-decoration-thickness":[{decoration:[ie,"from-font","auto",G,Rn]}],"text-decoration-color":[{decoration:j()}],"underline-offset":[{"underline-offset":[ie,"auto",G,q]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",G,q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",G,q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...V(),dR,cR]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",fR,aR]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Sn,G,q],radial:["",G,q],conic:[Sn,G,q]},pR,lR]}],"bg-color":[{bg:j()}],"gradient-from-pos":[{from:ne()}],"gradient-via-pos":[{via:ne()}],"gradient-to-pos":[{to:ne()}],"gradient-from":[{from:j()}],"gradient-via":[{via:j()}],"gradient-to":[{to:j()}],rounded:[{rounded:Y()}],"rounded-s":[{"rounded-s":Y()}],"rounded-e":[{"rounded-e":Y()}],"rounded-t":[{"rounded-t":Y()}],"rounded-r":[{"rounded-r":Y()}],"rounded-b":[{"rounded-b":Y()}],"rounded-l":[{"rounded-l":Y()}],"rounded-ss":[{"rounded-ss":Y()}],"rounded-se":[{"rounded-se":Y()}],"rounded-ee":[{"rounded-ee":Y()}],"rounded-es":[{"rounded-es":Y()}],"rounded-tl":[{"rounded-tl":Y()}],"rounded-tr":[{"rounded-tr":Y()}],"rounded-br":[{"rounded-br":Y()}],"rounded-bl":[{"rounded-bl":Y()}],"border-w":[{border:te()}],"border-w-x":[{"border-x":te()}],"border-w-y":[{"border-y":te()}],"border-w-s":[{"border-s":te()}],"border-w-e":[{"border-e":te()}],"border-w-t":[{"border-t":te()}],"border-w-r":[{"border-r":te()}],"border-w-b":[{"border-b":te()}],"border-w-l":[{"border-l":te()}],"divide-x":[{"divide-x":te()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":te()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...fe(),"hidden","none"]}],"divide-style":[{divide:[...fe(),"hidden","none"]}],"border-color":[{border:j()}],"border-color-x":[{"border-x":j()}],"border-color-y":[{"border-y":j()}],"border-color-s":[{"border-s":j()}],"border-color-e":[{"border-e":j()}],"border-color-t":[{"border-t":j()}],"border-color-r":[{"border-r":j()}],"border-color-b":[{"border-b":j()}],"border-color-l":[{"border-l":j()}],"divide-color":[{divide:j()}],"outline-style":[{outline:[...fe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ie,G,q]}],"outline-w":[{outline:["",ie,to,Rn]}],"outline-color":[{outline:[r]}],shadow:[{shadow:["","none",f,gR,uR]}],"shadow-color":[{shadow:j()}],"inset-shadow":[{"inset-shadow":["none",G,q,p]}],"inset-shadow-color":[{"inset-shadow":j()}],"ring-w":[{ring:te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:j()}],"ring-offset-w":[{"ring-offset":[ie,Rn]}],"ring-offset-color":[{"ring-offset":j()}],"inset-ring-w":[{"inset-ring":te()}],"inset-ring-color":[{"inset-ring":j()}],opacity:[{opacity:[ie,G,q]}],"mix-blend":[{"mix-blend":[...Se(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Se()}],filter:[{filter:["","none",G,q]}],blur:[{blur:ye()}],brightness:[{brightness:[ie,G,q]}],contrast:[{contrast:[ie,G,q]}],"drop-shadow":[{"drop-shadow":["","none",v,G,q]}],grayscale:[{grayscale:["",ie,G,q]}],"hue-rotate":[{"hue-rotate":[ie,G,q]}],invert:[{invert:["",ie,G,q]}],saturate:[{saturate:[ie,G,q]}],sepia:[{sepia:["",ie,G,q]}],"backdrop-filter":[{"backdrop-filter":["","none",G,q]}],"backdrop-blur":[{"backdrop-blur":ye()}],"backdrop-brightness":[{"backdrop-brightness":[ie,G,q]}],"backdrop-contrast":[{"backdrop-contrast":[ie,G,q]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ie,G,q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ie,G,q]}],"backdrop-invert":[{"backdrop-invert":["",ie,G,q]}],"backdrop-opacity":[{"backdrop-opacity":[ie,G,q]}],"backdrop-saturate":[{"backdrop-saturate":[ie,G,q]}],"backdrop-sepia":[{"backdrop-sepia":["",ie,G,q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",G,q]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ie,"initial",G,q]}],ease:[{ease:["linear","initial",A,G,q]}],delay:[{delay:[ie,G,q]}],animate:[{animate:["none",N,G,q]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[S,G,q]}],"perspective-origin":[{"perspective-origin":ve()}],rotate:[{rotate:ft()}],"rotate-x":[{"rotate-x":ft()}],"rotate-y":[{"rotate-y":ft()}],"rotate-z":[{"rotate-z":ft()}],scale:[{scale:He()}],"scale-x":[{"scale-x":He()}],"scale-y":[{"scale-y":He()}],"scale-z":[{"scale-z":He()}],"scale-3d":["scale-3d"],skew:[{skew:Ut()}],"skew-x":[{"skew-x":Ut()}],"skew-y":[{"skew-y":Ut()}],transform:[{transform:[G,q,"","none","gpu","cpu"]}],"transform-origin":[{origin:ve()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ct()}],"translate-x":[{"translate-x":ct()}],"translate-y":[{"translate-y":ct()}],"translate-z":[{"translate-z":ct()}],"translate-none":["translate-none"],accent:[{accent:j()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:j()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",G,q]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",G,q]}],fill:[{fill:["none",...j()]}],"stroke-w":[{stroke:[ie,to,Rn,dc]}],stroke:[{stroke:["none",...j()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}},wR=QS(ER);function hi(...r){return wR(Kf(r))}const TR=(r,e=300)=>{let t;return(...n)=>{clearTimeout(t),t=setTimeout(()=>{r.apply(void 0,n)},e)}};function bR(){const e="USER_ID_PENDING";let t=pt(!0),n=pt(!1),s=pt(null),i=[],o=[];function c(A,N,D,...V){if(J(s)==null){i.push(()=>c(A,N,D,...V));return}const O=J(s).uid,F=V.map(w=>w===e?O:w);let P=!1;const y=yf(hc,D,...F),m=uc(y,w=>{w.exists()&&N(w.data()),P=!0},w=>{console.warn("Error while listening to firestore doc",V,w)});o.push(m);const I=TR(async()=>{RS(y,A(),{merge:!0}).then(()=>console.info("Synced with firestore")).catch(w=>console.warn("Failed to sync with firestore:",w)).finally(()=>De(n,!1))},1e3);Sy(()=>{Ry(()=>{A(),De(n,!0),P&&I()})})}function l(A,N,D){const V=yf(hc,A,...N),O=uc(V,F=>{D(F.id,F.exists()?F.data():null)},F=>{throw console.warn("Error while syncing firestore doc",N,F),F});o.push(O)}function h(A,N,D){const V=uS(hc,A,...N),O=uc(V,F=>{F.docChanges().forEach(P=>{console.info("Fetched doc",P.doc.id,F.metadata.fromCache||F.metadata.hasPendingWrites?"(local)":"(server)"),D(P.doc.id,P.type==="removed"?null:P.doc.data())})},F=>{console.warn("Error while syncing firestore collection",A,F)});o.push(O)}function f(A,N){return OE(As,A,N)}function p(){return FE(As)}async function v(A){return DE(As,A).then(()=>{console.info("Password reset email sent to:",A)}).catch(N=>{const D=N.code,V=N.message;throw console.warn("Error during password reset:",D,V),N})}async function T(A,N){return NE(As,A,N).then(D=>{const V=D.user;console.info("User signed up:",V.email)}).catch(D=>{const V=D.code,O=D.message;throw console.warn("Error during sign up:",V,O),D})}const S=As.onAuthStateChanged(A=>{De(s,A,!0),De(t,!1),J(s)===null?(console.info(`Logged out. Cleaned up ${o.length} subscribers`),o.forEach(N=>N()),o=[]):(console.info(`Logged in. Starting ${i.length} subscriptions`),i.forEach(N=>N()),i=[])});function x(){console.info(`Closing. Cleaned up ${o.length} subscribers`),o.forEach(A=>A()),o=[],S()}return{get user(){return J(s)},get isLoading(){return J(t)},get isPublishing(){return J(n)},USER_ID:e,syncState:c,resetPassword:v,signUp:T,login:f,logout:p,destroy:x,subscribeToCollection:h,subscribeToDoc:l}}const I_=Symbol("firebase"),T0=()=>{const r=bR();return Bf(I_,r)},AR=()=>zf(I_);function Pn(){return crypto.randomUUID().slice(0,8)}function SR(){const r=AR();let e=pt(Ki([])),t=pt(Ki([])),n=pt(Ki({username:"",feedbackEnabled:!0})),s=pt(Ki([])),i=pt(""),o=pt(""),c=pt(""),l=Ka(()=>J(t).find(P=>P.id===J(c))),h=Ka(()=>J(e).find(P=>P.id===J(o))),f=Ka(()=>J(e).reduce((P,y)=>{const m=y.expenses.reduce((E,_)=>E+_.value,0),I=y.time.reduce((E,_)=>E+_.value,0),w=y.price-m,b=w/(I/60);return P[y.id]={id:y.id,expenses:m,profit:w,time:I,hourlyRate:b,profitability:p(b)},P},{}));function p(P){if(isNaN(P)||!isFinite(P)||!J(l))return 0;const y=J(l).goals.profit.min/J(l).goals.time.maxHours,m=(J(l).goals.profit.target/J(l).goals.time.maxHours+J(l).goals.profit.min/J(l).goals.time.targetHours)/2,I=J(l).goals.profit.target/J(l).goals.time.targetHours;return P<y?0:P<m?1:P<I?2:3}const v=()=>{const P=Pn();return J(e).push({id:P,url:"",expenses:[],time:[],price:0}),P},T=P=>{J(o)==P&&De(o,""),De(e,J(e).filter(y=>y.id!==P),!0)},S=P=>{const y=Pn(),m=P||{summary:"",description:"",sentiment:0,status:"under-review"};return J(s).push({id:y,...m}),y},x=P=>{De(s,J(s).filter(y=>y.id!==P),!0)},A=(P,y)=>{const m=Pn(),I=y||{name:"",value:0},w=J(e).find(b=>b.id===P);return w&&w.expenses.push({id:m,...I}),m},N=(P,y)=>{const m=J(e).find(I=>I.id===P);m&&(m.expenses=m.expenses.filter(I=>I.id!==y))},D=(P,y)=>{const m=Pn(),I=y||{name:"",value:0,rating:0},w=J(e).find(b=>b.id===P);return w&&w.time.push({id:m,...I}),m},V=(P,y)=>{const m=J(e).find(I=>I.id===P);m&&(m.time=m.time.filter(I=>I.id!==y))},O=()=>{const P=Pn();return J(t).push({id:P,name:"",quantities:{},goals:{time:{targetHours:30,maxHours:50},profit:{target:1200,min:800},timespanDays:5}}),P},F=P=>{J(c)==P&&De(c,""),De(t,J(t).filter(y=>y.id!==P),!0)};return r.syncState(()=>JSON.parse(JSON.stringify({feedbackList:J(s)})),P=>{P.feedbackList!==void 0&&De(s,P.feedbackList,!0)},"feedback",r.USER_ID),r.syncState(()=>JSON.parse(JSON.stringify({scenarios:J(t),selectedScenarioId:J(c),products:J(e),settings:J(n)})),P=>{P.scenarios!==void 0&&De(t,P.scenarios,!0),P.selectedScenarioId!==void 0&&De(c,P.selectedScenarioId,!0),P.products!==void 0&&De(e,P.products,!0),P.settings!==void 0&&De(n,P.settings,!0),J(n).feedbackEnabled===void 0&&(J(n).feedbackEnabled=!0),J(e).forEach(y=>{y.expenses.forEach(m=>{m.id||(m.id=Pn())}),y.time.forEach(m=>{m.id||(m.id=Pn())})})},"users",r.USER_ID),{get products(){return J(e)},get scenarios(){return J(t)},get selectedProduct(){return J(h)},get selectedScenario(){return J(l)},get productData(){return J(f)},get feedbackList(){return J(s)},newProduct:v,deleteProduct:T,newScenario:O,deleteScenario:F,newExpense:A,deleteExpense:N,newTime:D,deleteTime:V,newFeedback:S,deleteFeedback:x,get authRedirect(){return J(i)},set authRedirect(P){De(i,P,!0)},get settings(){return J(n)},set settings(P){De(n,P,!0)},get selectedProductId(){return J(o)},set selectedProductId(P){De(o,P,!0)},get selectedScenarioId(){return J(c)},set selectedScenarioId(P){De(c,P,!0)}}}const E_=Symbol("App"),b0=()=>{const r=SR();return Bf(E_,r)},A0=()=>zf(E_);/**
 * @license lucide-svelte v0.477.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const RR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var PR=Fy("<svg><!><!></svg>");function S0(r,e){const t=yh(e,["children","$$slots","$$events","$$legacy"]),n=yh(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);fi(e,!1);let s=Ke(e,"name",8,void 0),i=Ke(e,"color",8,"currentColor"),o=Ke(e,"size",8,24),c=Ke(e,"strokeWidth",8,2),l=Ke(e,"absoluteStrokeWidth",8,!1),h=Ke(e,"iconNode",24,()=>[]);const f=(...x)=>x.filter((A,N,D)=>!!A&&D.indexOf(A)===N).join(" ");Uy();var p=PR();let v;var T=Pr(p);$y(T,1,h,zy,(x,A)=>{let N=()=>J(A)[0],D=()=>J(A)[1];var V=$f(),O=jf(V);Wy(O,N,!0,(F,P)=>{let y;zn(()=>y=jn(F,y,{...D()}))}),rn(x,V)});var S=Py(T);Ky(S,e,"default",{}),Cr(p),zn((x,A)=>v=jn(p,v,{...RR,...n,width:o(),height:o(),stroke:i(),"stroke-width":x,class:A}),[()=>l()?Number(c())*24/Number(o()):c(),()=>f("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)],Df),rn(r,p),pi()}var Rf=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,Qe=r=>!r||typeof r!="object"||Object.keys(r).length===0,CR=(r,e)=>JSON.stringify(r)===JSON.stringify(e);function w_(r,e){r.forEach(function(t){Array.isArray(t)?w_(t,e):e.push(t)})}function T_(r){let e=[];return w_(r,e),e}var b_=(...r)=>T_(r).filter(Boolean),A_=(r,e)=>{let t={},n=Object.keys(r),s=Object.keys(e);for(let i of n)if(s.includes(i)){let o=r[i],c=e[i];Array.isArray(o)||Array.isArray(c)?t[i]=b_(c,o):typeof o=="object"&&typeof c=="object"?t[i]=A_(o,c):t[i]=c+" "+o}else t[i]=r[i];for(let i of s)n.includes(i)||(t[i]=e[i]);return t},Pf=r=>!r||typeof r!="string"?r:r.replace(/\s+/g," ").trim();const gu="-",xR=r=>{const e=VR(r),{conflictingClassGroups:t,conflictingClassGroupModifiers:n}=r;return{getClassGroupId:o=>{const c=o.split(gu);return c[0]===""&&c.length!==1&&c.shift(),S_(c,e)||kR(o)},getConflictingClassGroupIds:(o,c)=>{const l=t[o]||[];return c&&n[o]?[...l,...n[o]]:l}}},S_=(r,e)=>{var o;if(r.length===0)return e.classGroupId;const t=r[0],n=e.nextPart.get(t),s=n?S_(r.slice(1),n):void 0;if(s)return s;if(e.validators.length===0)return;const i=r.join(gu);return(o=e.validators.find(({validator:c})=>c(i)))==null?void 0:o.classGroupId},Cf=/^\[(.+)\]$/,kR=r=>{if(Cf.test(r)){const e=Cf.exec(r)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},VR=r=>{const{theme:e,prefix:t}=r,n={nextPart:new Map,validators:[]};return NR(Object.entries(r.classGroups),t).forEach(([i,o])=>{tl(o,n,i,e)}),n},tl=(r,e,t,n)=>{r.forEach(s=>{if(typeof s=="string"){const i=s===""?e:xf(e,s);i.classGroupId=t;return}if(typeof s=="function"){if(DR(s)){tl(s(n),e,t,n);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([i,o])=>{tl(o,xf(e,i),t,n)})})},xf=(r,e)=>{let t=r;return e.split(gu).forEach(n=>{t.nextPart.has(n)||t.nextPart.set(n,{nextPart:new Map,validators:[]}),t=t.nextPart.get(n)}),t},DR=r=>r.isThemeGetter,NR=(r,e)=>e?r.map(([t,n])=>{const s=n.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,c])=>[e+o,c])):i);return[t,s]}):r,OR=r=>{if(r<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,n=new Map;const s=(i,o)=>{t.set(i,o),e++,e>r&&(e=0,n=t,t=new Map)};return{get(i){let o=t.get(i);if(o!==void 0)return o;if((o=n.get(i))!==void 0)return s(i,o),o},set(i,o){t.has(i)?t.set(i,o):s(i,o)}}},R_="!",MR=r=>{const{separator:e,experimentalParseClassName:t}=r,n=e.length===1,s=e[0],i=e.length,o=c=>{const l=[];let h=0,f=0,p;for(let A=0;A<c.length;A++){let N=c[A];if(h===0){if(N===s&&(n||c.slice(A,A+i)===e)){l.push(c.slice(f,A)),f=A+i;continue}if(N==="/"){p=A;continue}}N==="["?h++:N==="]"&&h--}const v=l.length===0?c:c.substring(f),T=v.startsWith(R_),S=T?v.substring(1):v,x=p&&p>f?p-f:void 0;return{modifiers:l,hasImportantModifier:T,baseClassName:S,maybePostfixModifierPosition:x}};return t?c=>t({className:c,parseClassName:o}):o},LR=r=>{if(r.length<=1)return r;const e=[];let t=[];return r.forEach(n=>{n[0]==="["?(e.push(...t.sort(),n),t=[]):t.push(n)}),e.push(...t.sort()),e},FR=r=>({cache:OR(r.cacheSize),parseClassName:MR(r),...xR(r)}),UR=/\s+/,BR=(r,e)=>{const{parseClassName:t,getClassGroupId:n,getConflictingClassGroupIds:s}=e,i=[],o=r.trim().split(UR);let c="";for(let l=o.length-1;l>=0;l-=1){const h=o[l],{modifiers:f,hasImportantModifier:p,baseClassName:v,maybePostfixModifierPosition:T}=t(h);let S=!!T,x=n(S?v.substring(0,T):v);if(!x){if(!S){c=h+(c.length>0?" "+c:c);continue}if(x=n(v),!x){c=h+(c.length>0?" "+c:c);continue}S=!1}const A=LR(f).join(":"),N=p?A+R_:A,D=N+x;if(i.includes(D))continue;i.push(D);const V=s(x,S);for(let O=0;O<V.length;++O){const F=V[O];i.push(N+F)}c=h+(c.length>0?" "+c:c)}return c};function zR(){let r=0,e,t,n="";for(;r<arguments.length;)(e=arguments[r++])&&(t=P_(e))&&(n&&(n+=" "),n+=t);return n}const P_=r=>{if(typeof r=="string")return r;let e,t="";for(let n=0;n<r.length;n++)r[n]&&(e=P_(r[n]))&&(t&&(t+=" "),t+=e);return t};function nl(r,...e){let t,n,s,i=o;function o(l){const h=e.reduce((f,p)=>p(f),r());return t=FR(h),n=t.cache.get,s=t.cache.set,i=c,c(l)}function c(l){const h=n(l);if(h)return h;const f=BR(l,t);return s(l,f),f}return function(){return i(zR.apply(null,arguments))}}const _e=r=>{const e=t=>t[r]||[];return e.isThemeGetter=!0,e},C_=/^\[(?:([a-z-]+):)?(.+)\]$/i,jR=/^\d+\/\d+$/,$R=new Set(["px","full","screen"]),qR=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,GR=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,KR=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,WR=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,HR=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,bt=r=>Sr(r)||$R.has(r)||jR.test(r),Ht=r=>ss(r,"length",n0),Sr=r=>!!r&&!Number.isNaN(Number(r)),fc=r=>ss(r,"number",Sr),Ss=r=>!!r&&Number.isInteger(Number(r)),QR=r=>r.endsWith("%")&&Sr(r.slice(0,-1)),re=r=>C_.test(r),Qt=r=>qR.test(r),JR=new Set(["length","size","percentage"]),YR=r=>ss(r,JR,x_),XR=r=>ss(r,"position",x_),ZR=new Set(["image","url"]),e0=r=>ss(r,ZR,s0),t0=r=>ss(r,"",r0),Rs=()=>!0,ss=(r,e,t)=>{const n=C_.exec(r);return n?n[1]?typeof e=="string"?n[1]===e:e.has(n[1]):t(n[2]):!1},n0=r=>GR.test(r)&&!KR.test(r),x_=()=>!1,r0=r=>WR.test(r),s0=r=>HR.test(r),rl=()=>{const r=_e("colors"),e=_e("spacing"),t=_e("blur"),n=_e("brightness"),s=_e("borderColor"),i=_e("borderRadius"),o=_e("borderSpacing"),c=_e("borderWidth"),l=_e("contrast"),h=_e("grayscale"),f=_e("hueRotate"),p=_e("invert"),v=_e("gap"),T=_e("gradientColorStops"),S=_e("gradientColorStopPositions"),x=_e("inset"),A=_e("margin"),N=_e("opacity"),D=_e("padding"),V=_e("saturate"),O=_e("scale"),F=_e("sepia"),P=_e("skew"),y=_e("space"),m=_e("translate"),I=()=>["auto","contain","none"],w=()=>["auto","hidden","clip","visible","scroll"],b=()=>["auto",re,e],E=()=>[re,e],_=()=>["",bt,Ht],W=()=>["auto",Sr,re],ee=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],j=()=>["solid","dashed","dotted","double","none"],ne=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Y=()=>["start","end","center","between","around","evenly","stretch"],te=()=>["","0",re],fe=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Se=()=>[Sr,re];return{cacheSize:500,separator:":",theme:{colors:[Rs],spacing:[bt,Ht],blur:["none","",Qt,re],brightness:Se(),borderColor:[r],borderRadius:["none","","full",Qt,re],borderSpacing:E(),borderWidth:_(),contrast:Se(),grayscale:te(),hueRotate:Se(),invert:te(),gap:E(),gradientColorStops:[r],gradientColorStopPositions:[QR,Ht],inset:b(),margin:b(),opacity:Se(),padding:E(),saturate:Se(),scale:Se(),sepia:te(),skew:Se(),space:E(),translate:E()},classGroups:{aspect:[{aspect:["auto","square","video",re]}],container:["container"],columns:[{columns:[Qt]}],"break-after":[{"break-after":fe()}],"break-before":[{"break-before":fe()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ee(),re]}],overflow:[{overflow:w()}],"overflow-x":[{"overflow-x":w()}],"overflow-y":[{"overflow-y":w()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ss,re]}],basis:[{basis:b()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",re]}],grow:[{grow:te()}],shrink:[{shrink:te()}],order:[{order:["first","last","none",Ss,re]}],"grid-cols":[{"grid-cols":[Rs]}],"col-start-end":[{col:["auto",{span:["full",Ss,re]},re]}],"col-start":[{"col-start":W()}],"col-end":[{"col-end":W()}],"grid-rows":[{"grid-rows":[Rs]}],"row-start-end":[{row:["auto",{span:[Ss,re]},re]}],"row-start":[{"row-start":W()}],"row-end":[{"row-end":W()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",re]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",re]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal",...Y()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Y(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Y(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[D]}],px:[{px:[D]}],py:[{py:[D]}],ps:[{ps:[D]}],pe:[{pe:[D]}],pt:[{pt:[D]}],pr:[{pr:[D]}],pb:[{pb:[D]}],pl:[{pl:[D]}],m:[{m:[A]}],mx:[{mx:[A]}],my:[{my:[A]}],ms:[{ms:[A]}],me:[{me:[A]}],mt:[{mt:[A]}],mr:[{mr:[A]}],mb:[{mb:[A]}],ml:[{ml:[A]}],"space-x":[{"space-x":[y]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[y]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",re,e]}],"min-w":[{"min-w":[re,e,"min","max","fit"]}],"max-w":[{"max-w":[re,e,"none","full","min","max","fit","prose",{screen:[Qt]},Qt]}],h:[{h:[re,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[re,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[re,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[re,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Qt,Ht]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",fc]}],"font-family":[{font:[Rs]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",re]}],"line-clamp":[{"line-clamp":["none",Sr,fc]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",bt,re]}],"list-image":[{"list-image":["none",re]}],"list-style-type":[{list:["none","disc","decimal",re]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[N]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[N]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...j(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",bt,Ht]}],"underline-offset":[{"underline-offset":["auto",bt,re]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:E()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",re]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",re]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[N]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ee(),XR]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",YR]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},e0]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[T]}],"gradient-via":[{via:[T]}],"gradient-to":[{to:[T]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[N]}],"border-style":[{border:[...j(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[N]}],"divide-style":[{divide:j()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...j()]}],"outline-offset":[{"outline-offset":[bt,re]}],"outline-w":[{outline:[bt,Ht]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:_()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[N]}],"ring-offset-w":[{"ring-offset":[bt,Ht]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",Qt,t0]}],"shadow-color":[{shadow:[Rs]}],opacity:[{opacity:[N]}],"mix-blend":[{"mix-blend":[...ne(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ne()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Qt,re]}],grayscale:[{grayscale:[h]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[p]}],saturate:[{saturate:[V]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[h]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[N]}],"backdrop-saturate":[{"backdrop-saturate":[V]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",re]}],duration:[{duration:Se()}],ease:[{ease:["linear","in","out","in-out",re]}],delay:[{delay:Se()}],animate:[{animate:["none","spin","ping","pulse","bounce",re]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[Ss,re]}],"translate-x":[{"translate-x":[m]}],"translate-y":[{"translate-y":[m]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",re]}],accent:[{accent:["auto",r]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",re]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":E()}],"scroll-mx":[{"scroll-mx":E()}],"scroll-my":[{"scroll-my":E()}],"scroll-ms":[{"scroll-ms":E()}],"scroll-me":[{"scroll-me":E()}],"scroll-mt":[{"scroll-mt":E()}],"scroll-mr":[{"scroll-mr":E()}],"scroll-mb":[{"scroll-mb":E()}],"scroll-ml":[{"scroll-ml":E()}],"scroll-p":[{"scroll-p":E()}],"scroll-px":[{"scroll-px":E()}],"scroll-py":[{"scroll-py":E()}],"scroll-ps":[{"scroll-ps":E()}],"scroll-pe":[{"scroll-pe":E()}],"scroll-pt":[{"scroll-pt":E()}],"scroll-pr":[{"scroll-pr":E()}],"scroll-pb":[{"scroll-pb":E()}],"scroll-pl":[{"scroll-pl":E()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",re]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[bt,Ht,fc]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},i0=(r,{cacheSize:e,prefix:t,separator:n,experimentalParseClassName:s,extend:i={},override:o={}})=>{Ms(r,"cacheSize",e),Ms(r,"prefix",t),Ms(r,"separator",n),Ms(r,"experimentalParseClassName",s);for(const c in o)o0(r[c],o[c]);for(const c in i)a0(r[c],i[c]);return r},Ms=(r,e,t)=>{t!==void 0&&(r[e]=t)},o0=(r,e)=>{if(e)for(const t in e)Ms(r,t,e[t])},a0=(r,e)=>{if(e)for(const t in e){const n=e[t];n!==void 0&&(r[t]=(r[t]||[]).concat(n))}},c0=(r,...e)=>typeof r=="function"?nl(rl,r,...e):nl(()=>i0(rl(),r),...e),l0=nl(rl);var u0={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},k_=r=>r||void 0,di=(...r)=>k_(T_(r).filter(Boolean).join(" ")),pc=null,At={},sl=!1,Ps=(...r)=>e=>e.twMerge?((!pc||sl)&&(sl=!1,pc=Qe(At)?l0:c0({...At,extend:{theme:At.theme,classGroups:At.classGroups,conflictingClassGroupModifiers:At.conflictingClassGroupModifiers,conflictingClassGroups:At.conflictingClassGroups,...At.extend}})),k_(pc(di(r)))):di(r),kf=(r,e)=>{for(let t in e)r.hasOwnProperty(t)?r[t]=di(r[t],e[t]):r[t]=e[t];return r},h0=(r,e)=>{let{extend:t=null,slots:n={},variants:s={},compoundVariants:i=[],compoundSlots:o=[],defaultVariants:c={}}=r,l={...u0,...e},h=t!=null&&t.base?di(t.base,r==null?void 0:r.base):r==null?void 0:r.base,f=t!=null&&t.variants&&!Qe(t.variants)?A_(s,t.variants):s,p=t!=null&&t.defaultVariants&&!Qe(t.defaultVariants)?{...t.defaultVariants,...c}:c;!Qe(l.twMergeConfig)&&!CR(l.twMergeConfig,At)&&(sl=!0,At=l.twMergeConfig);let v=Qe(t==null?void 0:t.slots),T=Qe(n)?{}:{base:di(r==null?void 0:r.base,v&&(t==null?void 0:t.base)),...n},S=v?T:kf({...t==null?void 0:t.slots},Qe(T)?{base:r==null?void 0:r.base}:T),x=Qe(t==null?void 0:t.compoundVariants)?i:b_(t==null?void 0:t.compoundVariants,i),A=D=>{if(Qe(f)&&Qe(n)&&v)return Ps(h,D==null?void 0:D.class,D==null?void 0:D.className)(l);if(x&&!Array.isArray(x))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof x}`);if(o&&!Array.isArray(o))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof o}`);let V=(E,_,W=[],ee)=>{let j=W;if(typeof _=="string")j=j.concat(Pf(_).split(" ").map(ne=>`${E}:${ne}`));else if(Array.isArray(_))j=j.concat(_.reduce((ne,Y)=>ne.concat(`${E}:${Y}`),[]));else if(typeof _=="object"&&typeof ee=="string"){for(let ne in _)if(_.hasOwnProperty(ne)&&ne===ee){let Y=_[ne];if(Y&&typeof Y=="string"){let te=Pf(Y);j[ee]?j[ee]=j[ee].concat(te.split(" ").map(fe=>`${E}:${fe}`)):j[ee]=te.split(" ").map(fe=>`${E}:${fe}`)}else Array.isArray(Y)&&Y.length>0&&(j[ee]=Y.reduce((te,fe)=>te.concat(`${E}:${fe}`),[]))}}return j},O=(E,_=f,W=null,ee=null)=>{var j;let ne=_[E];if(!ne||Qe(ne))return null;let Y=(j=ee==null?void 0:ee[E])!=null?j:D==null?void 0:D[E];if(Y===null)return null;let te=Rf(Y),fe=Array.isArray(l.responsiveVariants)&&l.responsiveVariants.length>0||l.responsiveVariants===!0,Se=p==null?void 0:p[E],ye=[];if(typeof te=="object"&&fe)for(let[He,Ut]of Object.entries(te)){let ct=ne[Ut];if(He==="initial"){Se=Ut;continue}Array.isArray(l.responsiveVariants)&&!l.responsiveVariants.includes(He)||(ye=V(He,ct,ye,W))}let ve=te!=null&&typeof te!="object"?te:Rf(Se),ft=ne[ve||"false"];return typeof ye=="object"&&typeof W=="string"&&ye[W]?kf(ye,ft):ye.length>0?(ye.push(ft),W==="base"?ye.join(" "):ye):ft},F=()=>f?Object.keys(f).map(E=>O(E,f)):null,P=(E,_)=>{if(!f||typeof f!="object")return null;let W=new Array;for(let ee in f){let j=O(ee,f,E,_),ne=E==="base"&&typeof j=="string"?j:j&&j[E];ne&&(W[W.length]=ne)}return W},y={};for(let E in D)D[E]!==void 0&&(y[E]=D[E]);let m=(E,_)=>{var W;let ee=typeof(D==null?void 0:D[E])=="object"?{[E]:(W=D[E])==null?void 0:W.initial}:{};return{...p,...y,...ee,..._}},I=(E=[],_)=>{let W=[];for(let{class:ee,className:j,...ne}of E){let Y=!0;for(let[te,fe]of Object.entries(ne)){let Se=m(te,_)[te];if(Array.isArray(fe)){if(!fe.includes(Se)){Y=!1;break}}else{let ye=ve=>ve==null||ve===!1;if(ye(fe)&&ye(Se))continue;if(Se!==fe){Y=!1;break}}}Y&&(ee&&W.push(ee),j&&W.push(j))}return W},w=E=>{let _=I(x,E);if(!Array.isArray(_))return _;let W={};for(let ee of _)if(typeof ee=="string"&&(W.base=Ps(W.base,ee)(l)),typeof ee=="object")for(let[j,ne]of Object.entries(ee))W[j]=Ps(W[j],ne)(l);return W},b=E=>{if(o.length<1)return null;let _={};for(let{slots:W=[],class:ee,className:j,...ne}of o){if(!Qe(ne)){let Y=!0;for(let te of Object.keys(ne)){let fe=m(te,E)[te];if(fe===void 0||(Array.isArray(ne[te])?!ne[te].includes(fe):ne[te]!==fe)){Y=!1;break}}if(!Y)continue}for(let Y of W)_[Y]=_[Y]||[],_[Y].push([ee,j])}return _};if(!Qe(n)||!v){let E={};if(typeof S=="object"&&!Qe(S))for(let _ of Object.keys(S))E[_]=W=>{var ee,j;return Ps(S[_],P(_,W),((ee=w(W))!=null?ee:[])[_],((j=b(W))!=null?j:[])[_],W==null?void 0:W.class,W==null?void 0:W.className)(l)};return E}return Ps(h,F(),I(x),D==null?void 0:D.class,D==null?void 0:D.className)(l)},N=()=>{if(!(!f||typeof f!="object"))return Object.keys(f)};return A.variantKeys=N(),A.extend=t,A.base=h,A.slots=S,A.variants=f,A.defaultVariants=p,A.compoundSlots=o,A.compoundVariants=x,A};const Vf=h0({base:"ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border-input bg-background hover:bg-accent hover:text-accent-foreground border",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});var d0=gi("<a><!></a>"),f0=gi("<button><!></button>");function R0(r,e){fi(e,!0);let t=Ke(e,"variant",3,"default"),n=Ke(e,"size",3,"default"),s=Ke(e,"ref",15,null),i=Ke(e,"href",3,void 0),o=Ke(e,"type",3,"button"),c=Jo(e,["$$slots","$$events","$$legacy","class","variant","size","ref","href","type","children"]);var l=$f(),h=jf(l);{var f=v=>{var T=d0();let S;var x=Pr(T);Hs(x,()=>e.children??Rr),Cr(T),Ws(T,A=>s(A),()=>s()),zn(A=>S=jn(T,S,{class:A,href:i(),...c}),[()=>hi(Vf({variant:t(),size:n()}),e.class)]),rn(v,T)},p=v=>{var T=f0();let S;var x=Pr(T);Hs(x,()=>e.children??Rr),Cr(T),Ws(T,A=>s(A),()=>s()),zn(A=>S=jn(T,S,{class:A,type:o(),...c}),[()=>hi(Vf({variant:t(),size:n()}),e.class)]),rn(v,T)};By(h,v=>{i()?v(f):v(p,!1)})}rn(r,l),pi()}var p0=gi("<div><!></div>");function P0(r,e){fi(e,!0);let t=Ke(e,"ref",15,null),n=Jo(e,["$$slots","$$events","$$legacy","ref","class","children"]);var s=p0();let i;var o=Pr(s);Hs(o,()=>e.children??Rr),Cr(s),Ws(s,c=>t(c),()=>t()),zn(c=>i=jn(s,i,{class:c,...n}),[()=>hi("p-6",e.class)]),rn(r,s),pi()}var g0=gi("<div><!></div>");function C0(r,e){fi(e,!0);let t=Ke(e,"ref",15,null),n=Jo(e,["$$slots","$$events","$$legacy","ref","class","children"]);var s=g0();let i;var o=Pr(s);Hs(o,()=>e.children??Rr),Cr(s),Ws(s,c=>t(c),()=>t()),zn(c=>i=jn(s,i,{class:c,...n}),[()=>hi("flex flex-col space-y-1.5 p-6 pb-0",e.class)]),rn(r,s),pi()}var m0=gi("<div><!></div>");function x0(r,e){fi(e,!0);let t=Ke(e,"ref",15,null),n=Ke(e,"level",3,3),s=Jo(e,["$$slots","$$events","$$legacy","ref","class","level","children"]);var i=m0();let o;var c=Pr(i);Hs(c,()=>e.children??Rr),Cr(i),Ws(i,l=>t(l),()=>t()),zn(l=>o=jn(i,o,{role:"heading","aria-level":n(),class:l,...s}),[()=>hi("text-2xl font-semibold leading-none tracking-tight",e.class)]),rn(r,i),pi()}export{R0 as B,C0 as C,S0 as I,hi as a,jn as b,h0 as c,vo as d,$y as e,Hy as f,A0 as g,Yy as h,zy as i,x0 as j,P0 as k,Ky as l,AR as m,Wy as n,Er as o,Vf as p,Xy as q,E0 as r,Hs as s,T0 as t,b0 as u,Kf as v};
