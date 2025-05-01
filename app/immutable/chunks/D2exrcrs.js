import{B as al,h as te,A as jf,K as cl,L as Ho,M as Gf,aC as qa,ar as qf,ad as gc,m as _y,Z as Ih,C as ge,aD as Eh,aE as yy,a9 as vy,aF as Iy,aG as ll,aH as ul,aI as Ey,aJ as hl,D as yo,af as wy,F as by,G as wh,I as js,J as Ln,N as Rt,ao as Ty,ai as Ay,a8 as $f,ag as Kf,aK as Wf,Q as mc,aL as Sy,E as Hf,n as xr,aM as Ry,aN as Py,aO as Cy,aP as xy,aQ as ky,aR as Vy,P as dl,aS as Dy,ae as Ny,au as Oy,e as Qf,az as Jf,ay as Yf,V as gr,i as Qe,j as gt,z as vo,u as My,p as Zr,t as kt,a as es,s as Ly,c as kr,f as fl,r as Vr}from"./U34GVLgG.js";import{d as Fy,i as Uy,f as By,g as zy,j as jy,k as Gy,l as qy,p as $y,q as Ky,r as pl,n as Wy,a as dt,c as gl,t as er}from"./DPvGQa7o.js";import{i as Hy}from"./BYGnPkYW.js";import{l as bh,p as xe,i as Xf,b as zn,r as mi}from"./BXHZD-jw.js";let br=null;function Th(r){br=r}function Qy(r,e){return e}function Jy(r,e,t,n){for(var s=[],i=e.length,o=0;o<i;o++)yy(e[o].e,s,!0);var c=i>0&&s.length===0&&t!==null;if(c){var l=t.parentNode;vy(l),l.append(t),n.clear(),Yt(r,e[0].prev,e[i-1].next)}Iy(s,()=>{for(var h=0;h<i;h++){var f=e[h];c||(n.delete(f.k),Yt(r,f.prev,f.next)),hl(f.e,!c)}})}function Yy(r,e,t,n,s,i=null){var o=r,c={flags:e,items:new Map,first:null},l=(e&Wf)!==0;if(l){var h=r;o=ge?js($f(h)):h.appendChild(Kf())}ge&&yo();var f=null,p=!1,m=jf(()=>{var w=t();return wy(w)?w:w==null?[]:qf(w)});al(()=>{var w=te(m),S=w.length;if(p&&S===0)return;p=S===0;let C=!1;if(ge){var T=o.data===by;T!==(S===0)&&(o=wh(),js(o),Ln(!1),C=!0)}if(ge){for(var R=null,k,D=0;D<S;D++){if(Rt.nodeType===8&&Rt.data===Ty){o=Rt,C=!0,Ln(!1);break}var N=w[D],F=n(N,D);k=Zf(Rt,c,R,null,N,F,D,s,e,t),c.items.set(F,k),R=k}S>0&&js(wh())}ge||Xy(w,c,o,s,e,n,t),i!==null&&(S===0?f?cl(f):f=Ho(()=>i(o)):f!==null&&Gf(f,()=>{f=null})),C&&Ln(!0),te(m)}),ge&&(o=Rt)}function Xy(r,e,t,n,s,i,o){var W,Z,j,ne;var c=(s&Sy)!==0,l=(s&(ul|ll))!==0,h=r.length,f=e.items,p=e.first,m=p,w,S=null,C,T=[],R=[],k,D,N,F;if(c)for(F=0;F<h;F+=1)k=r[F],D=i(k,F),N=f.get(D),N!==void 0&&((W=N.a)==null||W.measure(),(C??(C=new Set)).add(N));for(F=0;F<h;F+=1){if(k=r[F],D=i(k,F),N=f.get(D),N===void 0){var M=m?m.e.nodes_start:t;S=Zf(M,e,S,S===null?e.first:S.next,k,D,F,n,s,o),f.set(D,S),T=[],R=[],m=S.next;continue}if(l&&Zy(N,k,F,s),(N.e.f&qa)!==0&&(cl(N.e),c&&((Z=N.a)==null||Z.unfix(),(C??(C=new Set)).delete(N))),N!==m){if(w!==void 0&&w.has(N)){if(T.length<R.length){var v=R[0],_;S=v.prev;var I=T[0],b=T[T.length-1];for(_=0;_<T.length;_+=1)Ah(T[_],v,t);for(_=0;_<R.length;_+=1)w.delete(R[_]);Yt(e,I.prev,b.next),Yt(e,S,I),Yt(e,b,v),m=v,S=b,F-=1,T=[],R=[]}else w.delete(N),Ah(N,m,t),Yt(e,N.prev,N.next),Yt(e,N,S===null?e.first:S.next),Yt(e,S,N),S=N;continue}for(T=[],R=[];m!==null&&m.k!==D;)(m.e.f&qa)===0&&(w??(w=new Set)).add(m),R.push(m),m=m.next;if(m===null)continue;N=m}T.push(N),S=N,m=N.next}if(m!==null||w!==void 0){for(var A=w===void 0?[]:qf(w);m!==null;)(m.e.f&qa)===0&&A.push(m),m=m.next;var E=A.length;if(E>0){var y=(s&Wf)!==0&&h===0?t:null;if(c){for(F=0;F<E;F+=1)(j=A[F].a)==null||j.measure();for(F=0;F<E;F+=1)(ne=A[F].a)==null||ne.fix()}Jy(e,A,y,f)}}c&&mc(()=>{var J;if(C!==void 0)for(N of C)(J=N.a)==null||J.apply()}),gc.first=e.first&&e.first.e,gc.last=S&&S.e}function Zy(r,e,t,n){(n&ul)!==0&&Eh(r.v,e),(n&ll)!==0?Eh(r.i,t):r.i=t}function Zf(r,e,t,n,s,i,o,c,l,h){var f=br,p=(l&ul)!==0,m=(l&Ey)===0,w=p?m?_y(s):Ih(s):s,S=(l&ll)===0?o:Ih(o),C={i:S,v:w,k:i,a:null,e:null,prev:t,next:n};br=C;try{return C.e=Ho(()=>c(r,w,S,h),ge),C.e.prev=t&&t.e,C.e.next=n&&n.e,t===null?e.first=C:(t.next=C,t.e.next=C.e),n!==null&&(n.prev=C,n.e.prev=C.e),C}finally{br=f}}function Ah(r,e,t){for(var n=r.next?r.next.e.nodes_start:t,s=e?e.e.nodes_start:t,i=r.e.nodes_start;i!==n;){var o=Ay(i);s.before(i),i=o}}function Yt(r,e,t){e===null?r.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function ev(r,e,t,n,s){var c;ge&&yo();var i=(c=e.$$slots)==null?void 0:c[t],o=!1;i===!0&&(i=e.children,o=!0),i===void 0||i(r,o?()=>n:n)}function Ys(r,e,...t){var n=r,s=xr,i;al(()=>{s!==(s=e())&&(i&&(hl(i),i=null),i=Ho(()=>s(n,...t)))},Hf),ge&&(n=Rt)}function tv(r,e,t,n,s,i){let o=ge;ge&&yo();var c,l,h=null;ge&&Rt.nodeType===1&&(h=Rt,yo());var f=ge?Rt:r,p,m=br;al(()=>{const w=e()||null;var S=Ry;if(w!==c){var C=br;Th(m),p&&(w===null?Gf(p,()=>{p=null,l=null}):w===l?cl(p):hl(p)),w&&w!==l&&(p=Ho(()=>{if(h=ge?h:document.createElementNS(S,w),Fy(h,h),n){ge&&Uy(w)&&h.append(document.createComment(""));var T=ge?$f(h):h.appendChild(Kf());ge&&(T===null?Ln(!1):js(T)),n(h,T)}gc.nodes_end=h,f.before(h)})),c=w,c&&(l=c),Th(C)}},Hf),o&&(Ln(!0),js(f))}function ep(r){var e,t,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(e=0;e<s;e++)r[e]&&(t=ep(r[e]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t);return n}function tp(){for(var r,e,t=0,n="",s=arguments.length;t<s;t++)(r=arguments[t])&&(e=ep(r))&&(n&&(n+=" "),n+=e);return n}function nv(r){return typeof r=="object"?tp(r):r??""}const Sh=[...` 	
\r\f \v\uFEFF`];function rv(r,e,t){var n=r==null?"":""+r;if(t){for(var s in t)if(t[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var c=o+i;(o===0||Sh.includes(n[o-1]))&&(c===n.length||Sh.includes(n[c]))?n=(o===0?"":n.substring(0,o))+n.substring(c+1):o=c}}return n===""?null:n}function Rh(r,e=!1){var t=e?" !important;":";",n="";for(var s in r){var i=r[s];i!=null&&i!==""&&(n+=" "+s+": "+i+t)}return n}function $a(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function sv(r,e){if(e){var t="",n,s;if(Array.isArray(e)?(n=e[0],s=e[1]):n=e,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,c=!1,l=[];n&&l.push(...Object.keys(n).map($a)),s&&l.push(...Object.keys(s).map($a));var h=0,f=-1;const C=r.length;for(var p=0;p<C;p++){var m=r[p];if(c?m==="/"&&r[p-1]==="*"&&(c=!1):i?i===m&&(i=!1):m==="/"&&r[p+1]==="*"?c=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!c&&i===!1&&o===0){if(m===":"&&f===-1)f=p;else if(m===";"||p===C-1){if(f!==-1){var w=$a(r.substring(h,f).trim());if(!l.includes(w)){m!==";"&&p++;var S=r.substring(h,p).trim();t+=" "+S+";"}}h=p+1,f=-1}}}}return n&&(t+=Rh(n)),s&&(t+=Rh(s,!0)),t=t.trim(),t===""?null:t}return r==null?null:String(r)}function iv(r,e,t,n,s,i){var o=r.__className;if(ge||o!==t||o===void 0){var c=rv(t,n,i);(!ge||c!==r.getAttribute("class"))&&(c==null?r.removeAttribute("class"):e?r.className=c:r.setAttribute("class",c)),r.__className=t}else if(i&&s!==i)for(var l in i){var h=!!i[l];(s==null||h!==!!s[l])&&r.classList.toggle(l,h)}return i}function Ka(r,e={},t,n){for(var s in t){var i=t[s];e[s]!==i&&(t[s]==null?r.style.removeProperty(s):r.style.setProperty(s,i,n))}}function ov(r,e,t,n){var s=r.__style;if(ge||s!==e){var i=sv(e,n);(!ge||i!==r.getAttribute("style"))&&(i==null?r.removeAttribute("style"):r.style.cssText=i),r.__style=e}else n&&(Array.isArray(n)?(Ka(r,t==null?void 0:t[0],n[0]),Ka(r,t==null?void 0:t[1],n[1],"important")):Ka(r,t,n));return n}const Ts=Symbol("class"),As=Symbol("style"),np=Symbol("is custom element"),rp=Symbol("is html");function Ph(r){if(ge){var e=!1,t=()=>{if(!e){if(e=!0,r.hasAttribute("value")){var n=r.value;Io(r,"value",null),r.value=n}if(r.hasAttribute("checked")){var s=r.checked;Io(r,"checked",null),r.checked=s}}};r.__on_r=t,Vy(t),Ky()}}function av(r,e){e?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function Io(r,e,t,n){var s=sp(r);ge&&(s[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="loading"&&(r[Py]=t),t==null?r.removeAttribute(e):typeof t!="string"&&ip(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function Vt(r,e,t,n,s=!1){var i=sp(r),o=i[np],c=!i[rp];let l=ge&&o;l&&Ln(!1);var h=e||{},f=r.tagName==="OPTION";for(var p in e)p in t||(t[p]=null);t.class?t.class=nv(t.class):t[Ts]&&(t.class=null),t[As]&&(t.style??(t.style=null));var m=ip(r);for(const D in t){let N=t[D];if(f&&D==="value"&&N==null){r.value=r.__value="",h[D]=N;continue}if(D==="class"){var w=r.namespaceURI==="http://www.w3.org/1999/xhtml";iv(r,w,N,n,e==null?void 0:e[Ts],t[Ts]),h[D]=N,h[Ts]=t[Ts];continue}if(D==="style"){ov(r,N,e==null?void 0:e[As],t[As]),h[D]=N,h[As]=t[As];continue}var S=h[D];if(N!==S){h[D]=N;var C=D[0]+D[1];if(C!=="$$")if(C==="on"){const F={},M="$$"+D;let v=D.slice(2);var T=$y(v);if(By(v)&&(v=v.slice(0,-7),F.capture=!0),!T&&S){if(N!=null)continue;r.removeEventListener(v,h[M],F),h[M]=null}if(N!=null)if(T)r[`__${v}`]=N,jy([v]);else{let _=function(I){h[D].call(this,I)};h[M]=zy(v,r,_,F)}else T&&(r[`__${v}`]=void 0)}else if(D==="style")Io(r,D,N);else if(D==="autofocus")Gy(r,!!N);else if(!o&&(D==="__value"||D==="value"&&N!=null))r.value=r.__value=N;else if(D==="selected"&&f)av(r,N);else{var R=D;c||(R=qy(R));var k=R==="defaultValue"||R==="defaultChecked";if(N==null&&!o&&!k)if(i[D]=null,R==="value"||R==="checked"){let F=r;const M=e===void 0;if(R==="value"){let v=F.defaultValue;F.removeAttribute(R),F.defaultValue=v,F.value=F.__value=M?v:null}else{let v=F.defaultChecked;F.removeAttribute(R),F.defaultChecked=v,F.checked=M?v:!1}}else r.removeAttribute(D);else k||m.includes(R)&&(o||typeof N!="string")?r[R]=N:typeof N!="function"&&Io(r,R,N)}}}return l&&Ln(!0),h}function sp(r){return r.__attributes??(r.__attributes={[np]:r.nodeName.includes("-"),[rp]:r.namespaceURI===Cy})}var Ch=new Map;function ip(r){var e=Ch.get(r.nodeName);if(e)return e;Ch.set(r.nodeName,e=[]);for(var t,n=r,s=Element.prototype;s!==n;){t=ky(n);for(var i in t)t[i].set&&e.push(i);n=xy(n)}return e}function xh(r,e,t=e){var n=Oy();pl(r,"input",s=>{var i=s?r.defaultValue:r.value;if(i=Ha(r)?Qa(i):i,t(i),n&&i!==(i=e())){var o=r.selectionStart,c=r.selectionEnd;r.value=i??"",c!==null&&(r.selectionStart=o,r.selectionEnd=Math.min(c,r.value.length))}}),(ge&&r.defaultValue!==r.value||Qf(e)==null&&r.value)&&t(Ha(r)?Qa(r.value):r.value),dl(()=>{var s=e();Ha(r)&&s===Qa(r.value)||r.type==="date"&&!s&&!r.value||s!==r.value&&(r.value=s??"")})}const Wa=new Set;function k0(r,e,t,n,s=n){var i=t.getAttribute("type")==="checkbox",o=r;let c=!1;if(e!==null)for(var l of e)o=o[l]??(o[l]=[]);o.push(t),pl(t,"change",()=>{var h=t.__value;i&&(h=kh(o,h,t.checked)),s(h)},()=>s(i?[]:null)),dl(()=>{var h=n();if(ge&&t.defaultChecked!==t.checked){c=!0;return}i?(h=h||[],t.checked=h.includes(t.__value)):t.checked=Dy(t.__value,h)}),Ny(()=>{var h=o.indexOf(t);h!==-1&&o.splice(h,1)}),Wa.has(o)||(Wa.add(o),mc(()=>{o.sort((h,f)=>h.compareDocumentPosition(f)===4?-1:1),Wa.delete(o)})),mc(()=>{if(c){var h;if(i)h=kh(o,h,t.checked);else{var f=o.find(p=>p.checked);h=f==null?void 0:f.__value}s(h)}})}function kh(r,e,t){for(var n=new Set,s=0;s<r.length;s+=1)r[s].checked&&n.add(r[s].__value);return t||n.delete(e),Array.from(n)}function Ha(r){var e=r.type;return e==="number"||e==="range"}function Qa(r){return r===""?null:+r}function cv(r,e,t=e){pl(r,"change",()=>{t(r.files)}),ge&&r.files&&t(r.files),dl(()=>{r.files=e()})}const lv=()=>{};var Vh={};/**
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
 */const op=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},uv=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],c=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ap={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,c=o?r[s+1]:0,l=s+2<r.length,h=l?r[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,w=h&63;l||(w=64,o||(m=64)),n.push(t[f],t[p],t[m],t[w])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(op(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):uv(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],c=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new hv;const m=i<<2|c>>4;if(n.push(m),h!==64){const w=c<<4&240|h>>2;if(n.push(w),p!==64){const S=h<<6&192|p;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class hv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dv=function(r){const e=op(r);return ap.encodeByteArray(e,!0)},cp=function(r){return dv(r).replace(/\./g,"")},lp=function(r){try{return ap.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function up(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fv=()=>up().__FIREBASE_DEFAULTS__,pv=()=>{if(typeof process>"u"||typeof Vh>"u")return;const r=Vh.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},gv=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&lp(r[1]);return e&&JSON.parse(e)},Qo=()=>{try{return lv()||fv()||pv()||gv()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},mv=r=>{var e,t;return(t=(e=Qo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},hp=()=>{var r;return(r=Qo())===null||r===void 0?void 0:r.config},dp=r=>{var e;return(e=Qo())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class _v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function vv(){var r;const e=(r=Qo())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Iv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ev(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function wv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bv(){const r=ke();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function fp(){return!vv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pp(){try{return typeof indexedDB=="object"}catch{return!1}}function Tv(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Av="FirebaseError";class Lt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Av,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Sv(i,n):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Lt(s,c,n)}}function Sv(r,e){return r.replace(Rv,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Rv=/\{\$([^}]+)}/g;function Pv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function jn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(Dh(i)&&Dh(o)){if(!jn(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Dh(r){return r!==null&&typeof r=="object"}/**
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
 */function yi(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Ns(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Os(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Cv(r,e){const t=new xv(r,e);return t.subscribe.bind(t)}class xv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");kv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Ja),s.error===void 0&&(s.error=Ja),s.complete===void 0&&(s.complete=Ja);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kv(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ja(){}/**
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
 */function Ze(r){return r&&r._delegate?r._delegate:r}class Gn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Vv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new _v;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nv(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=Cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cn){return this.instances.has(e)}getOptions(e=Cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Dv(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Cn){return this.component?this.component.multipleInstances?e:Cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dv(r){return r===Cn?void 0:r}function Nv(r){return r.instantiationMode==="EAGER"}/**
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
 */class Ov{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Vv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(oe||(oe={}));const Mv={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Lv=oe.INFO,Fv={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Uv=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Fv[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=Lv,this._logHandler=Uv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Bv=(r,e)=>e.some(t=>r instanceof t);let Nh,Oh;function zv(){return Nh||(Nh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jv(){return Oh||(Oh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gp=new WeakMap,_c=new WeakMap,mp=new WeakMap,Ya=new WeakMap,_l=new WeakMap;function Gv(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(sn(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&gp.set(t,r)}).catch(()=>{}),_l.set(e,r),e}function qv(r){if(_c.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});_c.set(r,e)}let yc={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return _c.get(r);if(e==="objectStoreNames")return r.objectStoreNames||mp.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return sn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function $v(r){yc=r(yc)}function Kv(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Xa(this),e,...t);return mp.set(n,e.sort?e.sort():[e]),sn(n)}:jv().includes(r)?function(...e){return r.apply(Xa(this),e),sn(gp.get(this))}:function(...e){return sn(r.apply(Xa(this),e))}}function Wv(r){return typeof r=="function"?Kv(r):(r instanceof IDBTransaction&&qv(r),Bv(r,zv())?new Proxy(r,yc):r)}function sn(r){if(r instanceof IDBRequest)return Gv(r);if(Ya.has(r))return Ya.get(r);const e=Wv(r);return e!==r&&(Ya.set(r,e),_l.set(e,r)),e}const Xa=r=>_l.get(r);function Hv(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),c=sn(o);return n&&o.addEventListener("upgradeneeded",l=>{n(sn(o.result),l.oldVersion,l.newVersion,sn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Qv=["get","getKey","getAll","getAllKeys","count"],Jv=["put","add","delete","clear"],Za=new Map;function Mh(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Za.get(e))return Za.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Jv.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Qv.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return Za.set(e,i),i}$v(r=>({...r,get:(e,t,n)=>Mh(e,t)||r.get(e,t,n),has:(e,t)=>!!Mh(e,t)||r.has(e,t)}));/**
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
 */class Yv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Xv(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Xv(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vc="@firebase/app",Lh="0.11.5";/**
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
 */const Dt=new ml("@firebase/app"),Zv="@firebase/app-compat",eI="@firebase/analytics-compat",tI="@firebase/analytics",nI="@firebase/app-check-compat",rI="@firebase/app-check",sI="@firebase/auth",iI="@firebase/auth-compat",oI="@firebase/database",aI="@firebase/data-connect",cI="@firebase/database-compat",lI="@firebase/functions",uI="@firebase/functions-compat",hI="@firebase/installations",dI="@firebase/installations-compat",fI="@firebase/messaging",pI="@firebase/messaging-compat",gI="@firebase/performance",mI="@firebase/performance-compat",_I="@firebase/remote-config",yI="@firebase/remote-config-compat",vI="@firebase/storage",II="@firebase/storage-compat",EI="@firebase/firestore",wI="@firebase/vertexai",bI="@firebase/firestore-compat",TI="firebase",AI="11.6.1";/**
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
 */const Ic="[DEFAULT]",SI={[vc]:"fire-core",[Zv]:"fire-core-compat",[tI]:"fire-analytics",[eI]:"fire-analytics-compat",[rI]:"fire-app-check",[nI]:"fire-app-check-compat",[sI]:"fire-auth",[iI]:"fire-auth-compat",[oI]:"fire-rtdb",[aI]:"fire-data-connect",[cI]:"fire-rtdb-compat",[lI]:"fire-fn",[uI]:"fire-fn-compat",[hI]:"fire-iid",[dI]:"fire-iid-compat",[fI]:"fire-fcm",[pI]:"fire-fcm-compat",[gI]:"fire-perf",[mI]:"fire-perf-compat",[_I]:"fire-rc",[yI]:"fire-rc-compat",[vI]:"fire-gcs",[II]:"fire-gcs-compat",[EI]:"fire-fst",[bI]:"fire-fst-compat",[wI]:"fire-vertex","fire-js":"fire-js",[TI]:"fire-js-all"};/**
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
 */const qn=new Map,Ec=new Map,wc=new Map;function Fh(r,e){try{r.container.addComponent(e)}catch(t){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Dr(r){const e=r.name;if(wc.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;wc.set(e,r);for(const t of qn.values())Fh(t,r);for(const t of Ec.values())Fh(t,r);return!0}function yl(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function ut(r){return r==null?!1:r.settings!==void 0}/**
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
 */const RI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new _i("app","Firebase",RI);/**
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
 */class PI{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
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
 */const ts=AI;function bc(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ic,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw on.create("bad-app-name",{appName:String(s)});if(t||(t=hp()),!t)throw on.create("no-options");const i=qn.get(s);if(i){if(jn(t,i.options)&&jn(n,i.config))return i;throw on.create("duplicate-app",{appName:s})}const o=new Ov(s);for(const l of wc.values())o.addComponent(l);const c=new PI(t,n,o);return qn.set(s,c),c}function _p(r=Ic){const e=qn.get(r);if(!e&&r===Ic&&hp())return bc();if(!e)throw on.create("no-app",{appName:r});return e}function CI(){return Array.from(qn.values())}async function xI(r){let e=!1;const t=r.name;qn.has(t)?(e=!0,qn.delete(t)):Ec.has(t)&&r.decRefCount()<=0&&(Ec.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function an(r,e,t){var n;let s=(n=SI[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(c.join(" "));return}Dr(new Gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const kI="firebase-heartbeat-database",VI=1,Xs="firebase-heartbeat-store";let ec=null;function yp(){return ec||(ec=Hv(kI,VI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Xs)}catch(t){console.warn(t)}}}}).catch(r=>{throw on.create("idb-open",{originalErrorMessage:r.message})})),ec}async function DI(r){try{const t=(await yp()).transaction(Xs),n=await t.objectStore(Xs).get(vp(r));return await t.done,n}catch(e){if(e instanceof Lt)Dt.warn(e.message);else{const t=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dt.warn(t.message)}}}async function Uh(r,e){try{const n=(await yp()).transaction(Xs,"readwrite");await n.objectStore(Xs).put(e,vp(r)),await n.done}catch(t){if(t instanceof Lt)Dt.warn(t.message);else{const n=on.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dt.warn(n.message)}}}function vp(r){return`${r.name}!${r.options.appId}`}/**
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
 */const NI=1024,OI=30;class MI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new FI(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>OI){const o=UI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Dt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bh(),{heartbeatsToSend:n,unsentEntries:s}=LI(this._heartbeatsCache.heartbeats),i=cp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Dt.warn(t),""}}}function Bh(){return new Date().toISOString().substring(0,10)}function LI(r,e=NI){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),zh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),zh(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class FI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pp()?Tv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await DI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zh(r){return cp(JSON.stringify({version:2,heartbeats:r})).length}function UI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function BI(r){Dr(new Gn("platform-logger",e=>new Yv(e),"PRIVATE")),Dr(new Gn("heartbeat",e=>new MI(e),"PRIVATE")),an(vc,Lh,r),an(vc,Lh,"esm2017"),an("fire-js","")}BI("");var zI="firebase",jI="11.6.1";/**
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
 */an(zI,jI,"app");function vl(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}function Ip(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GI=Ip,Ep=new _i("auth","Firebase",Ip());/**
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
 */const Eo=new ml("@firebase/auth");function qI(r,...e){Eo.logLevel<=oe.WARN&&Eo.warn(`Auth (${ts}): ${r}`,...e)}function no(r,...e){Eo.logLevel<=oe.ERROR&&Eo.error(`Auth (${ts}): ${r}`,...e)}/**
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
 */function ft(r,...e){throw Il(r,...e)}function It(r,...e){return Il(r,...e)}function wp(r,e,t){const n=Object.assign(Object.assign({},GI()),{[e]:t});return new _i("auth","Firebase",n).create(e,{appName:r.name})}function cn(r){return wp(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Il(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Ep.create(r,...e)}function Y(r,e,...t){if(!r)throw Il(e,...t)}function Pt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw no(e),new Error(e)}function Nt(r,e){r||Pt(e)}/**
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
 */function Tc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function $I(){return jh()==="http:"||jh()==="https:"}function jh(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function KI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($I()||Ev()||"connection"in navigator)?navigator.onLine:!0}function WI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class vi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nt(t>e,"Short delay should be less than long delay!"),this.isMobile=yv()||wv()}get(){return KI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function El(r,e){Nt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class bp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const HI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JI=new vi(3e4,6e4);function _n(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ft(r,e,t,n,s={}){return Tp(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const c=yi(Object.assign({key:r.config.apiKey},o)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:l},i);return Iv()||(h.referrerPolicy="no-referrer"),bp.fetch()(await Ap(r,r.config.apiHost,t,c),h)})}async function Tp(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},HI),e);try{const s=new XI(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ki(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ki(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ki(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ki(r,"user-disabled",o);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw wp(r,f,h);ft(r,f)}}catch(s){if(s instanceof Lt)throw s;ft(r,"network-request-failed",{message:String(s)})}}async function Jo(r,e,t,n,s={}){const i=await Ft(r,e,t,n,s);return"mfaPendingCredential"in i&&ft(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ap(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?El(r.config,s):`${r.config.apiScheme}://${s}`;return QI.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function YI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(It(this.auth,"network-request-failed")),JI.get())})}}function Ki(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=It(r,e,n);return s.customData._tokenResponse=t,s}function Gh(r){return r!==void 0&&r.enterprise!==void 0}class ZI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return YI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eE(r,e){return Ft(r,"GET","/v2/recaptchaConfig",_n(r,e))}/**
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
 */async function tE(r,e){return Ft(r,"POST","/v1/accounts:delete",e)}async function wo(r,e){return Ft(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gs(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nE(r,e=!1){const t=Ze(r),n=await t.getIdToken(e),s=wl(n);Y(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Gs(tc(s.auth_time)),issuedAtTime:Gs(tc(s.iat)),expirationTime:Gs(tc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function tc(r){return Number(r)*1e3}function wl(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return no("JWT malformed, contained fewer than 3 sections"),null;try{const s=lp(t);return s?JSON.parse(s):(no("Failed to decode base64 JWT payload"),null)}catch(s){return no("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qh(r){const e=wl(r);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zs(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Lt&&rE(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function rE({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class sE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ac{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gs(this.lastLoginAt),this.creationTime=Gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bo(r){var e;const t=r.auth,n=await r.getIdToken(),s=await Zs(r,wo(t,{idToken:n}));Y(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Sp(i.providerUserInfo):[],c=oE(r.providerData,o),l=r.isAnonymous,h=!(r.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ac(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function iE(r){const e=Ze(r);await bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oE(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Sp(r){return r.map(e=>{var{providerId:t}=e,n=vl(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function aE(r,e){const t=await Tp(r,{},async()=>{const n=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await Ap(r,s,"/v1/token",`key=${i}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",bp.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function cE(r,e){return Ft(r,"POST","/v2/accounts:revokeToken",_n(r,e))}/**
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
 */class Tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const t=qh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await aE(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new Tr;return n&&(Y(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tr,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
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
 */function qt(r,e){Y(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ht{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=vl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ac(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return Y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nE(this,e)}reload(){return iE(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await bo(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ut(this.auth.app))return Promise.reject(cn(this.auth));const e=await this.getIdToken();return await Zs(this,tE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,o,c,l,h,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=t.photoURL)!==null&&o!==void 0?o:void 0,C=(c=t.tenantId)!==null&&c!==void 0?c:void 0,T=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,R=(h=t.createdAt)!==null&&h!==void 0?h:void 0,k=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:D,emailVerified:N,isAnonymous:F,providerData:M,stsTokenManager:v}=t;Y(D&&v,e,"internal-error");const _=Tr.fromJSON(this.name,v);Y(typeof D=="string",e,"internal-error"),qt(p,e.name),qt(m,e.name),Y(typeof N=="boolean",e,"internal-error"),Y(typeof F=="boolean",e,"internal-error"),qt(w,e.name),qt(S,e.name),qt(C,e.name),qt(T,e.name),qt(R,e.name),qt(k,e.name);const I=new ht({uid:D,auth:e,email:m,emailVerified:N,displayName:p,isAnonymous:F,photoURL:S,phoneNumber:w,tenantId:C,stsTokenManager:_,createdAt:R,lastLoginAt:k});return M&&Array.isArray(M)&&(I.providerData=M.map(b=>Object.assign({},b))),T&&(I._redirectEventId=T),I}static async _fromIdTokenResponse(e,t,n=!1){const s=new Tr;s.updateFromServerResponse(t);const i=new ht({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await bo(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];Y(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Sp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Tr;c.updateFromIdToken(n);const l=new ht({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ac(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const $h=new Map;function Ct(r){Nt(r instanceof Function,"Expected a class definition");let e=$h.get(r);return e?(Nt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,$h.set(r,e),e)}/**
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
 */class Rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Rp.type="NONE";const Kh=Rp;/**
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
 */function ro(r,e,t){return`firebase:${r}:${e}:${t}`}class Ar{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=ro(this.userKey,s.apiKey,i),this.fullPersistenceKey=ro("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await wo(this.auth,{idToken:e}).catch(()=>{});return t?ht._fromGetAccountInfoResponse(this.auth,t,e):null}return ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ar(Ct(Kh),e,n);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Ct(Kh);const o=ro(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await wo(e,{idToken:f}).catch(()=>{});if(!m)break;p=await ht._fromGetAccountInfoResponse(e,m,f)}else p=ht._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ar(i,e,n):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Ar(i,e,n))}}/**
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
 */function Wh(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dp(e))return"Blackberry";if(Np(e))return"Webos";if(Cp(e))return"Safari";if((e.includes("chrome/")||xp(e))&&!e.includes("edge/"))return"Chrome";if(Vp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Pp(r=ke()){return/firefox\//i.test(r)}function Cp(r=ke()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xp(r=ke()){return/crios\//i.test(r)}function kp(r=ke()){return/iemobile/i.test(r)}function Vp(r=ke()){return/android/i.test(r)}function Dp(r=ke()){return/blackberry/i.test(r)}function Np(r=ke()){return/webos/i.test(r)}function bl(r=ke()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function lE(r=ke()){var e;return bl(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uE(){return bv()&&document.documentMode===10}function Op(r=ke()){return bl(r)||Vp(r)||Np(r)||Dp(r)||/windows phone/i.test(r)||kp(r)}/**
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
 */function Mp(r,e=[]){let t;switch(r){case"Browser":t=Wh(ke());break;case"Worker":t=`${Wh(ke())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ts}/${n}`}/**
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
 */class hE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function dE(r,e={}){return Ft(r,"GET","/v2/passwordPolicy",_n(r,e))}/**
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
 */const fE=6;class pE{constructor(e){var t,n,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:fE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class gE{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hh(this),this.idTokenSubscription=new Hh(this),this.beforeStateQueue=new hE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ep,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ct(t)),this._initializationPromise=this.queue(async()=>{var n,s,i;if(!this._deleted&&(this.persistenceManager=await Ar.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await wo(this,{idToken:e}),n=await ht._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ut(this.app))return Promise.reject(cn(this));const t=e?Ze(e):null;return t&&Y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ut(this.app)?Promise.reject(cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ut(this.app)?Promise.reject(cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dE(this),t=new pE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await cE(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ct(e)||this._popupRedirectResolver;Y(t,this,"argument-error"),this.redirectPersistenceManager=await Ar.create(this,[Ct(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&qI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function tr(r){return Ze(r)}class Hh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Cv(t=>this.observer=t)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mE(r){Yo=r}function Lp(r){return Yo.loadJS(r)}function _E(){return Yo.recaptchaEnterpriseScript}function yE(){return Yo.gapiScript}function vE(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class IE{constructor(){this.enterprise=new EE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class EE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const wE="recaptcha-enterprise",Fp="NO_RECAPTCHA";class bE{constructor(e){this.type=wE,this.auth=tr(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{eE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new ZI(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Gh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Fp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new IE().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(c=>{if(!t&&Gh(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=_E();l.length!==0&&(l+=c),Lp(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Qh(r,e,t,n=!1,s=!1){const i=new bE(r);let o;if(s)o=Fp;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return n?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Sc(r,e,t,n,s){var i;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Qh(r,e,t,t==="getOobCode");return n(r,o)}else return n(r,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Qh(r,e,t,t==="getOobCode");return n(r,c)}else return Promise.reject(o)})}/**
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
 */function TE(r,e){const t=yl(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(jn(i,e??{}))return s;ft(s,"already-initialized")}return t.initialize({options:e})}function AE(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Ct);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function SE(r,e,t){const n=tr(r);Y(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=Up(e),{host:o,port:c}=RE(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){Y(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),Y(jn(h,n.config.emulator)&&jn(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,PE()}function Up(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function RE(r){const e=Up(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Jh(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Jh(o)}}}function Jh(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function PE(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Tl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,t){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function CE(r,e){return Ft(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function xE(r,e){return Jo(r,"POST","/v1/accounts:signInWithPassword",_n(r,e))}async function kE(r,e){return Ft(r,"POST","/v1/accounts:sendOobCode",_n(r,e))}async function VE(r,e){return kE(r,e)}/**
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
 */async function DE(r,e){return Jo(r,"POST","/v1/accounts:signInWithEmailLink",_n(r,e))}async function NE(r,e){return Jo(r,"POST","/v1/accounts:signInWithEmailLink",_n(r,e))}/**
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
 */class ei extends Tl{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ei(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ei(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sc(e,t,"signInWithPassword",xE);case"emailLink":return DE(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sc(e,n,"signUpPassword",CE);case"emailLink":return NE(e,{idToken:t,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Sr(r,e){return Jo(r,"POST","/v1/accounts:signInWithIdp",_n(r,e))}/**
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
 */const OE="http://localhost";class $n extends Tl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ft("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=vl(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new $n(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Sr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Sr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sr(e,t)}buildRequest(){const e={requestUri:OE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yi(t)}return e}}/**
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
 */function ME(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LE(r){const e=Ns(Os(r)).link,t=e?Ns(Os(e)).deep_link_id:null,n=Ns(Os(r)).deep_link_id;return(n?Ns(Os(n)).link:null)||n||t||e||r}class Al{constructor(e){var t,n,s,i,o,c;const l=Ns(Os(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(n=l.oobCode)!==null&&n!==void 0?n:null,p=ME((s=l.mode)!==null&&s!==void 0?s:null);Y(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=LE(e);try{return new Al(t)}catch{return null}}}/**
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
 */class ns{constructor(){this.providerId=ns.PROVIDER_ID}static credential(e,t){return ei._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Al.parseLink(t);return Y(n,"argument-error"),ei._fromEmailAndCode(e,n.code,n.tenantId)}}ns.PROVIDER_ID="password";ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Bp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ii extends Bp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xt extends Ii{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
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
 */class Zt extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $n._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Zt.credential(t,n)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
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
 */class en extends Ii{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
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
 */class tn extends Ii{constructor(){super("twitter.com")}static credential(e,t){return $n._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return tn.credential(t,n)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
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
 */class Nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await ht._fromIdTokenResponse(e,n,s),o=Yh(n);return new Nr({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Yh(n);return new Nr({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Yh(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class To extends Lt{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,To.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new To(e,t,n,s)}}function zp(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?To._fromErrorAndOperation(r,i,e,n):i})}async function FE(r,e,t=!1){const n=await Zs(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Nr._forOperation(r,"link",n)}/**
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
 */async function UE(r,e,t=!1){const{auth:n}=r;if(ut(n.app))return Promise.reject(cn(n));const s="reauthenticate";try{const i=await Zs(r,zp(n,s,e,r),t);Y(i.idToken,n,"internal-error");const o=wl(i.idToken);Y(o,n,"internal-error");const{sub:c}=o;return Y(r.uid===c,n,"user-mismatch"),Nr._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ft(n,"user-mismatch"),i}}/**
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
 */async function jp(r,e,t=!1){if(ut(r.app))return Promise.reject(cn(r));const n="signIn",s=await zp(r,n,e),i=await Nr._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function BE(r,e){return jp(tr(r),e)}/**
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
 */async function zE(r){const e=tr(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jE(r,e,t){const n=tr(r);await Sc(n,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",VE)}function GE(r,e,t){return ut(r.app)?Promise.reject(cn(r)):BE(Ze(r),ns.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&zE(r),n})}function qE(r,e,t,n){return Ze(r).onIdTokenChanged(e,t,n)}function $E(r,e,t){return Ze(r).beforeAuthStateChanged(e,t)}function KE(r){return Ze(r).signOut()}const Ao="__sak";/**
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
 */class Gp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ao,"1"),this.storage.removeItem(Ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const WE=1e3,HE=10;class qp extends Gp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Op(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);uE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,HE):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},WE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qp.type="LOCAL";const QE=qp;/**
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
 */class $p extends Gp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$p.type="SESSION";const Kp=$p;/**
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
 */function JE(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Xo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await JE(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xo.receivers=[];/**
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
 */function Sl(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class YE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Sl("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Et(){return window}function XE(r){Et().location.href=r}/**
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
 */function Wp(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function ZE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ew(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function tw(){return Wp()?self:null}/**
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
 */const Hp="firebaseLocalStorageDb",nw=1,So="firebaseLocalStorage",Qp="fbase_key";class Ei{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zo(r,e){return r.transaction([So],e?"readwrite":"readonly").objectStore(So)}function rw(){const r=indexedDB.deleteDatabase(Hp);return new Ei(r).toPromise()}function Rc(){const r=indexedDB.open(Hp,nw);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(So,{keyPath:Qp})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(So)?e(n):(n.close(),await rw(),e(await Rc()))})})}async function Xh(r,e,t){const n=Zo(r,!0).put({[Qp]:e,value:t});return new Ei(n).toPromise()}async function sw(r,e){const t=Zo(r,!1).get(e),n=await new Ei(t).toPromise();return n===void 0?null:n.value}function Zh(r,e){const t=Zo(r,!0).delete(e);return new Ei(t).toPromise()}const iw=800,ow=3;class Jp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>ow)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xo._getInstance(tw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ZE(),!this.activeServiceWorker)return;this.sender=new YE(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ew()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rc();return await Xh(e,Ao,"1"),await Zh(e,Ao),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>sw(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Zo(s,!1).getAll();return new Ei(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jp.type="LOCAL";const aw=Jp;new vi(3e4,6e4);/**
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
 */function cw(r,e){return e?Ct(e):(Y(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Rl extends Tl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lw(r){return jp(r.auth,new Rl(r),r.bypassAuthState)}function uw(r){const{auth:e,user:t}=r;return Y(t,e,"internal-error"),UE(t,new Rl(r),r.bypassAuthState)}async function hw(r){const{auth:e,user:t}=r;return Y(t,e,"internal-error"),FE(t,new Rl(r),r.bypassAuthState)}/**
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
 */class Yp{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lw;case"linkViaPopup":case"linkViaRedirect":return hw;case"reauthViaPopup":case"reauthViaRedirect":return uw;default:ft(this.auth,"internal-error")}}resolve(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dw=new vi(2e3,1e4);class Er extends Yp{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Nt(this.filter.length===1,"Popup operations only handle one event");const e=Sl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dw.get())};e()}}Er.currentPopupAction=null;/**
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
 */const fw="pendingRedirect",so=new Map;class pw extends Yp{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=so.get(this.auth._key());if(!e){try{const n=await gw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}so.set(this.auth._key(),e)}return this.bypassAuthState||so.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gw(r,e){const t=yw(e),n=_w(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function mw(r,e){so.set(r._key(),e)}function _w(r){return Ct(r._redirectPersistence)}function yw(r){return ro(fw,r.config.apiKey,r.name)}async function vw(r,e,t=!1){if(ut(r.app))return Promise.reject(cn(r));const n=tr(r),s=cw(n,e),o=await new pw(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const Iw=10*60*1e3;class Ew{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ww(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Xp(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(It(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Iw&&this.cachedEventUids.clear(),this.cachedEventUids.has(ed(e))}saveEventToCache(e){this.cachedEventUids.add(ed(e)),this.lastProcessedEventTime=Date.now()}}function ed(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Xp({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ww(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xp(r);default:return!1}}/**
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
 */async function bw(r,e={}){return Ft(r,"GET","/v1/projects",e)}/**
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
 */const Tw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Aw=/^https?/;async function Sw(r){if(r.config.emulator)return;const{authorizedDomains:e}=await bw(r);for(const t of e)try{if(Rw(t))return}catch{}ft(r,"unauthorized-domain")}function Rw(r){const e=Tc(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Aw.test(t))return!1;if(Tw.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const Pw=new vi(3e4,6e4);function td(){const r=Et().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Cw(r){return new Promise((e,t)=>{var n,s,i;function o(){td(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{td(),t(It(r,"network-request-failed"))},timeout:Pw.get()})}if(!((s=(n=Et().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Et().gapi)===null||i===void 0)&&i.load)o();else{const c=vE("iframefcb");return Et()[c]=()=>{gapi.load?o():t(It(r,"network-request-failed"))},Lp(`${yE()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw io=null,e})}let io=null;function xw(r){return io=io||Cw(r),io}/**
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
 */const kw=new vi(5e3,15e3),Vw="__/auth/iframe",Dw="emulator/auth/iframe",Nw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ow=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mw(r){const e=r.config;Y(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?El(e,Dw):`https://${r.config.authDomain}/${Vw}`,n={apiKey:e.apiKey,appName:r.name,v:ts},s=Ow.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${yi(n).slice(1)}`}async function Lw(r){const e=await xw(r),t=Et().gapi;return Y(t,r,"internal-error"),e.open({where:document.body,url:Mw(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nw,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=It(r,"network-request-failed"),c=Et().setTimeout(()=>{i(o)},kw.get());function l(){Et().clearTimeout(c),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Fw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Uw=500,Bw=600,zw="_blank",jw="http://localhost";class nd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gw(r,e,t,n=Uw,s=Bw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Fw),{width:n.toString(),height:s.toString(),top:i,left:o}),h=ke().toLowerCase();t&&(c=xp(h)?zw:t),Pp(h)&&(e=e||jw,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[w,S])=>`${m}${w}=${S},`,"");if(lE(h)&&c!=="_self")return qw(e||"",c),new nd(null);const p=window.open(e||"",c,f);Y(p,r,"popup-blocked");try{p.focus()}catch{}return new nd(p)}function qw(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const $w="__/auth/handler",Kw="emulator/auth/handler",Ww=encodeURIComponent("fac");async function rd(r,e,t,n,s,i){Y(r.config.authDomain,r,"auth-domain-config-required"),Y(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:ts,eventId:s};if(e instanceof Bp){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",Pv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ii){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await r._getAppCheckToken(),h=l?`#${Ww}=${encodeURIComponent(l)}`:"";return`${Hw(r)}?${yi(c).slice(1)}${h}`}function Hw({config:r}){return r.emulator?El(r,Kw):`https://${r.authDomain}/${$w}`}/**
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
 */const nc="webStorageSupport";class Qw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kp,this._completeRedirectFn=vw,this._overrideRedirectResult=mw}async _openPopup(e,t,n,s){var i;Nt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await rd(e,t,n,Tc(),s);return Gw(e,o,Sl())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await rd(e,t,n,Tc(),s);return XE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Nt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Lw(e),n=new Ew(e);return t.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nc,{type:nc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[nc];o!==void 0&&t(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Sw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Op()||Cp()||bl()}}const Jw=Qw;var sd="@firebase/auth",id="1.10.1";/**
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
 */class Yw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Xw(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Zw(r){Dr(new Gn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mp(r)},h=new gE(n,s,i,l);return AE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Dr(new Gn("auth-internal",e=>{const t=tr(e.getProvider("auth").getImmediate());return(n=>new Yw(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(sd,id,Xw(r)),an(sd,id,"esm2017")}/**
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
 */const eb=5*60,tb=dp("authIdTokenMaxAge")||eb;let od=null;const nb=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>tb)return;const s=t==null?void 0:t.token;od!==s&&(od=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function rb(r=_p()){const e=yl(r,"auth");if(e.isInitialized())return e.getImmediate();const t=TE(r,{popupRedirectResolver:Jw,persistence:[aw,QE,Kp]}),n=dp("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=nb(i.toString());$E(t,o,()=>o(t.currentUser)),qE(t,c=>o(c))}}const s=mv("auth");return s&&SE(t,`http://${s}`),t}function sb(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}mE({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=It("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",sb().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Zw("Browser");var ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ln,Zp;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function I(){}I.prototype=_.prototype,v.D=_.prototype,v.prototype=new I,v.prototype.constructor=v,v.C=function(b,A,E){for(var y=Array(arguments.length-2),W=2;W<arguments.length;W++)y[W-2]=arguments[W];return _.prototype[A].apply(b,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,_,I){I||(I=0);var b=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)b[A]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(A=0;16>A;++A)b[A]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=v.g[0],I=v.g[1],A=v.g[2];var E=v.g[3],y=_+(E^I&(A^E))+b[0]+3614090360&4294967295;_=I+(y<<7&4294967295|y>>>25),y=E+(A^_&(I^A))+b[1]+3905402710&4294967295,E=_+(y<<12&4294967295|y>>>20),y=A+(I^E&(_^I))+b[2]+606105819&4294967295,A=E+(y<<17&4294967295|y>>>15),y=I+(_^A&(E^_))+b[3]+3250441966&4294967295,I=A+(y<<22&4294967295|y>>>10),y=_+(E^I&(A^E))+b[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=E+(A^_&(I^A))+b[5]+1200080426&4294967295,E=_+(y<<12&4294967295|y>>>20),y=A+(I^E&(_^I))+b[6]+2821735955&4294967295,A=E+(y<<17&4294967295|y>>>15),y=I+(_^A&(E^_))+b[7]+4249261313&4294967295,I=A+(y<<22&4294967295|y>>>10),y=_+(E^I&(A^E))+b[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=E+(A^_&(I^A))+b[9]+2336552879&4294967295,E=_+(y<<12&4294967295|y>>>20),y=A+(I^E&(_^I))+b[10]+4294925233&4294967295,A=E+(y<<17&4294967295|y>>>15),y=I+(_^A&(E^_))+b[11]+2304563134&4294967295,I=A+(y<<22&4294967295|y>>>10),y=_+(E^I&(A^E))+b[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=E+(A^_&(I^A))+b[13]+4254626195&4294967295,E=_+(y<<12&4294967295|y>>>20),y=A+(I^E&(_^I))+b[14]+2792965006&4294967295,A=E+(y<<17&4294967295|y>>>15),y=I+(_^A&(E^_))+b[15]+1236535329&4294967295,I=A+(y<<22&4294967295|y>>>10),y=_+(A^E&(I^A))+b[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=E+(I^A&(_^I))+b[6]+3225465664&4294967295,E=_+(y<<9&4294967295|y>>>23),y=A+(_^I&(E^_))+b[11]+643717713&4294967295,A=E+(y<<14&4294967295|y>>>18),y=I+(E^_&(A^E))+b[0]+3921069994&4294967295,I=A+(y<<20&4294967295|y>>>12),y=_+(A^E&(I^A))+b[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=E+(I^A&(_^I))+b[10]+38016083&4294967295,E=_+(y<<9&4294967295|y>>>23),y=A+(_^I&(E^_))+b[15]+3634488961&4294967295,A=E+(y<<14&4294967295|y>>>18),y=I+(E^_&(A^E))+b[4]+3889429448&4294967295,I=A+(y<<20&4294967295|y>>>12),y=_+(A^E&(I^A))+b[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=E+(I^A&(_^I))+b[14]+3275163606&4294967295,E=_+(y<<9&4294967295|y>>>23),y=A+(_^I&(E^_))+b[3]+4107603335&4294967295,A=E+(y<<14&4294967295|y>>>18),y=I+(E^_&(A^E))+b[8]+1163531501&4294967295,I=A+(y<<20&4294967295|y>>>12),y=_+(A^E&(I^A))+b[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=E+(I^A&(_^I))+b[2]+4243563512&4294967295,E=_+(y<<9&4294967295|y>>>23),y=A+(_^I&(E^_))+b[7]+1735328473&4294967295,A=E+(y<<14&4294967295|y>>>18),y=I+(E^_&(A^E))+b[12]+2368359562&4294967295,I=A+(y<<20&4294967295|y>>>12),y=_+(I^A^E)+b[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=E+(_^I^A)+b[8]+2272392833&4294967295,E=_+(y<<11&4294967295|y>>>21),y=A+(E^_^I)+b[11]+1839030562&4294967295,A=E+(y<<16&4294967295|y>>>16),y=I+(A^E^_)+b[14]+4259657740&4294967295,I=A+(y<<23&4294967295|y>>>9),y=_+(I^A^E)+b[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=E+(_^I^A)+b[4]+1272893353&4294967295,E=_+(y<<11&4294967295|y>>>21),y=A+(E^_^I)+b[7]+4139469664&4294967295,A=E+(y<<16&4294967295|y>>>16),y=I+(A^E^_)+b[10]+3200236656&4294967295,I=A+(y<<23&4294967295|y>>>9),y=_+(I^A^E)+b[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=E+(_^I^A)+b[0]+3936430074&4294967295,E=_+(y<<11&4294967295|y>>>21),y=A+(E^_^I)+b[3]+3572445317&4294967295,A=E+(y<<16&4294967295|y>>>16),y=I+(A^E^_)+b[6]+76029189&4294967295,I=A+(y<<23&4294967295|y>>>9),y=_+(I^A^E)+b[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=E+(_^I^A)+b[12]+3873151461&4294967295,E=_+(y<<11&4294967295|y>>>21),y=A+(E^_^I)+b[15]+530742520&4294967295,A=E+(y<<16&4294967295|y>>>16),y=I+(A^E^_)+b[2]+3299628645&4294967295,I=A+(y<<23&4294967295|y>>>9),y=_+(A^(I|~E))+b[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=E+(I^(_|~A))+b[7]+1126891415&4294967295,E=_+(y<<10&4294967295|y>>>22),y=A+(_^(E|~I))+b[14]+2878612391&4294967295,A=E+(y<<15&4294967295|y>>>17),y=I+(E^(A|~_))+b[5]+4237533241&4294967295,I=A+(y<<21&4294967295|y>>>11),y=_+(A^(I|~E))+b[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=E+(I^(_|~A))+b[3]+2399980690&4294967295,E=_+(y<<10&4294967295|y>>>22),y=A+(_^(E|~I))+b[10]+4293915773&4294967295,A=E+(y<<15&4294967295|y>>>17),y=I+(E^(A|~_))+b[1]+2240044497&4294967295,I=A+(y<<21&4294967295|y>>>11),y=_+(A^(I|~E))+b[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=E+(I^(_|~A))+b[15]+4264355552&4294967295,E=_+(y<<10&4294967295|y>>>22),y=A+(_^(E|~I))+b[6]+2734768916&4294967295,A=E+(y<<15&4294967295|y>>>17),y=I+(E^(A|~_))+b[13]+1309151649&4294967295,I=A+(y<<21&4294967295|y>>>11),y=_+(A^(I|~E))+b[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=E+(I^(_|~A))+b[11]+3174756917&4294967295,E=_+(y<<10&4294967295|y>>>22),y=A+(_^(E|~I))+b[2]+718787259&4294967295,A=E+(y<<15&4294967295|y>>>17),y=I+(E^(A|~_))+b[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+E&4294967295}n.prototype.u=function(v,_){_===void 0&&(_=v.length);for(var I=_-this.blockSize,b=this.B,A=this.h,E=0;E<_;){if(A==0)for(;E<=I;)s(this,v,E),E+=this.blockSize;if(typeof v=="string"){for(;E<_;)if(b[A++]=v.charCodeAt(E++),A==this.blockSize){s(this,b),A=0;break}}else for(;E<_;)if(b[A++]=v[E++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=_},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;var I=8*this.o;for(_=v.length-8;_<v.length;++_)v[_]=I&255,I/=256;for(this.u(v),v=Array(16),_=I=0;4>_;++_)for(var b=0;32>b;b+=8)v[I++]=this.g[_]>>>b&255;return v};function i(v,_){var I=c;return Object.prototype.hasOwnProperty.call(I,v)?I[v]:I[v]=_(v)}function o(v,_){this.h=_;for(var I=[],b=!0,A=v.length-1;0<=A;A--){var E=v[A]|0;b&&E==_||(I[A]=E,b=!1)}this.g=I}var c={};function l(v){return-128<=v&&128>v?i(v,function(_){return new o([_|0],0>_?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return T(h(-v));for(var _=[],I=1,b=0;v>=I;b++)_[b]=v/I|0,I*=4294967296;return new o(_,0)}function f(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return T(f(v.substring(1),_));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(_,8)),b=p,A=0;A<v.length;A+=8){var E=Math.min(8,v.length-A),y=parseInt(v.substring(A,A+E),_);8>E?(E=h(Math.pow(_,E)),b=b.j(E).add(h(y))):(b=b.j(I),b=b.add(h(y)))}return b}var p=l(0),m=l(1),w=l(16777216);r=o.prototype,r.m=function(){if(C(this))return-T(this).m();for(var v=0,_=1,I=0;I<this.g.length;I++){var b=this.i(I);v+=(0<=b?b:4294967296+b)*_,_*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(C(this))return"-"+T(this).toString(v);for(var _=h(Math.pow(v,6)),I=this,b="";;){var A=N(I,_).g;I=R(I,A.j(_));var E=((0<I.g.length?I.g[0]:I.h)>>>0).toString(v);if(I=A,S(I))return E+b;for(;6>E.length;)E="0"+E;b=E+b}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(var _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function C(v){return v.h==-1}r.l=function(v){return v=R(this,v),C(v)?-1:S(v)?0:1};function T(v){for(var _=v.g.length,I=[],b=0;b<_;b++)I[b]=~v.g[b];return new o(I,~v.h).add(m)}r.abs=function(){return C(this)?T(this):this},r.add=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],b=0,A=0;A<=_;A++){var E=b+(this.i(A)&65535)+(v.i(A)&65535),y=(E>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);b=y>>>16,E&=65535,y&=65535,I[A]=y<<16|E}return new o(I,I[I.length-1]&-2147483648?-1:0)};function R(v,_){return v.add(T(_))}r.j=function(v){if(S(this)||S(v))return p;if(C(this))return C(v)?T(this).j(T(v)):T(T(this).j(v));if(C(v))return T(this.j(T(v)));if(0>this.l(w)&&0>v.l(w))return h(this.m()*v.m());for(var _=this.g.length+v.g.length,I=[],b=0;b<2*_;b++)I[b]=0;for(b=0;b<this.g.length;b++)for(var A=0;A<v.g.length;A++){var E=this.i(b)>>>16,y=this.i(b)&65535,W=v.i(A)>>>16,Z=v.i(A)&65535;I[2*b+2*A]+=y*Z,k(I,2*b+2*A),I[2*b+2*A+1]+=E*Z,k(I,2*b+2*A+1),I[2*b+2*A+1]+=y*W,k(I,2*b+2*A+1),I[2*b+2*A+2]+=E*W,k(I,2*b+2*A+2)}for(b=0;b<_;b++)I[b]=I[2*b+1]<<16|I[2*b];for(b=_;b<2*_;b++)I[b]=0;return new o(I,0)};function k(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function D(v,_){this.g=v,this.h=_}function N(v,_){if(S(_))throw Error("division by zero");if(S(v))return new D(p,p);if(C(v))return _=N(T(v),_),new D(T(_.g),T(_.h));if(C(_))return _=N(v,T(_)),new D(T(_.g),_.h);if(30<v.g.length){if(C(v)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var I=m,b=_;0>=b.l(v);)I=F(I),b=F(b);var A=M(I,1),E=M(b,1);for(b=M(b,2),I=M(I,2);!S(b);){var y=E.add(b);0>=y.l(v)&&(A=A.add(I),E=y),b=M(b,1),I=M(I,1)}return _=R(v,A.j(_)),new D(A,_)}for(A=p;0<=v.l(_);){for(I=Math.max(1,Math.floor(v.m()/_.m())),b=Math.ceil(Math.log(I)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),E=h(I),y=E.j(_);C(y)||0<y.l(v);)I-=b,E=h(I),y=E.j(_);S(E)&&(E=m),A=A.add(E),v=R(v,y)}return new D(A,v)}r.A=function(v){return N(this,v).h},r.and=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],b=0;b<_;b++)I[b]=this.i(b)&v.i(b);return new o(I,this.h&v.h)},r.or=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],b=0;b<_;b++)I[b]=this.i(b)|v.i(b);return new o(I,this.h|v.h)},r.xor=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],b=0;b<_;b++)I[b]=this.i(b)^v.i(b);return new o(I,this.h^v.h)};function F(v){for(var _=v.g.length+1,I=[],b=0;b<_;b++)I[b]=v.i(b)<<1|v.i(b-1)>>>31;return new o(I,v.h)}function M(v,_){var I=_>>5;_%=32;for(var b=v.g.length-I,A=[],E=0;E<b;E++)A[E]=0<_?v.i(E+I)>>>_|v.i(E+I+1)<<32-_:v.i(E+I);return new o(A,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Zp=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,ln=o}).apply(typeof ad<"u"?ad:typeof self<"u"?self:typeof window<"u"?window:{});var Wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eg,Ms,tg,oo,Pc,ng,rg,sg;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wi=="object"&&Wi];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(a,u){if(u)e:{var d=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in d))break e;d=d[x]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,g=!1,x={next:function(){if(!g&&d<a.length){var V=d++;return{value:u(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),a.apply(u,x)}}return function(){return a.apply(u,arguments)}}function m(a,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function w(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,x,V){for(var U=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)U[pe-2]=arguments[pe];return u.prototype[x].apply(g,U)}}function C(a){const u=a.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function T(a,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const x=a.length||0,V=g.length||0;a.length=x+V;for(let U=0;U<V;U++)a[x+U]=g[U]}else a.push(g)}}class R{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function k(a){return/^[\s\xa0]*$/.test(a)}function D(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var F=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function M(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function v(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function _(a){const u={};for(const d in a)u[d]=a[d];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,u){let d,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(d in g)a[d]=g[d];for(let V=0;V<I.length;V++)d=I[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function A(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function E(a){c.setTimeout(()=>{throw a},0)}function y(){var a=ee;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class W{constructor(){this.h=this.g=null}add(u,d){const g=Z.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Z=new R(()=>new j,a=>a.reset());class j{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,J=!1,ee=new W,fe=()=>{const a=c.Promise.resolve(void 0);ne=()=>{a.then(Se)}};var Se=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){E(d)}var u=Z;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}J=!1};function ve(){this.s=this.s,this.C=this.C}ve.prototype.s=!1,ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var pt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function We(a,u){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(F){e:{try{N(u.nodeName);var x=!0;break e}catch{}x=!1}x||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Bt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&We.aa.h.call(this)}}S(We,Ie);var Bt={2:"touch",3:"pen",4:"mouse"};We.prototype.h=function(){We.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var at="closure_listenable_"+(1e6*Math.random()|0),B_=0;function z_(a,u,d,g,x){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=x,this.key=++B_,this.da=this.fa=!1}function Pi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ci(a){this.src=a,this.g={},this.h=0}Ci.prototype.add=function(a,u,d,g,x){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var U=wa(a,u,g,x);return-1<U?(u=a[U],d||(u.fa=!1)):(u=new z_(u,this.src,V,!!g,x),u.fa=d,a.push(u)),u};function Ea(a,u){var d=u.type;if(d in a.g){var g=a.g[d],x=Array.prototype.indexOf.call(g,u,void 0),V;(V=0<=x)&&Array.prototype.splice.call(g,x,1),V&&(Pi(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function wa(a,u,d,g){for(var x=0;x<a.length;++x){var V=a[x];if(!V.da&&V.listener==u&&V.capture==!!d&&V.ha==g)return x}return-1}var ba="closure_lm_"+(1e6*Math.random()|0),Ta={};function Eu(a,u,d,g,x){if(Array.isArray(u)){for(var V=0;V<u.length;V++)Eu(a,u[V],d,g,x);return null}return d=Tu(d),a&&a[at]?a.K(u,d,h(g)?!!g.capture:!1,x):j_(a,u,d,!1,g,x)}function j_(a,u,d,g,x,V){if(!u)throw Error("Invalid event type");var U=h(x)?!!x.capture:!!x,pe=Sa(a);if(pe||(a[ba]=pe=new Ci(a)),d=pe.add(u,d,g,U,V),d.proxy)return d;if(g=G_(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)pt||(x=U),x===void 0&&(x=!1),a.addEventListener(u.toString(),g,x);else if(a.attachEvent)a.attachEvent(bu(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G_(){function a(d){return u.call(a.src,a.listener,d)}const u=q_;return a}function wu(a,u,d,g,x){if(Array.isArray(u))for(var V=0;V<u.length;V++)wu(a,u[V],d,g,x);else g=h(g)?!!g.capture:!!g,d=Tu(d),a&&a[at]?(a=a.i,u=String(u).toString(),u in a.g&&(V=a.g[u],d=wa(V,d,g,x),-1<d&&(Pi(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[u],a.h--)))):a&&(a=Sa(a))&&(u=a.g[u.toString()],a=-1,u&&(a=wa(u,d,g,x)),(d=-1<a?u[a]:null)&&Aa(d))}function Aa(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[at])Ea(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(bu(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Sa(u))?(Ea(d,a),d.h==0&&(d.src=null,u[ba]=null)):Pi(a)}}}function bu(a){return a in Ta?Ta[a]:Ta[a]="on"+a}function q_(a,u){if(a.da)a=!0;else{u=new We(u,this);var d=a.listener,g=a.ha||a.src;a.fa&&Aa(a),a=d.call(g,u)}return a}function Sa(a){return a=a[ba],a instanceof Ci?a:null}var Ra="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tu(a){return typeof a=="function"?a:(a[Ra]||(a[Ra]=function(u){return a.handleEvent(u)}),a[Ra])}function Le(){ve.call(this),this.i=new Ci(this),this.M=this,this.F=null}S(Le,ve),Le.prototype[at]=!0,Le.prototype.removeEventListener=function(a,u,d,g){wu(this,a,u,d,g)};function qe(a,u){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new Ie(u,a);else if(u instanceof Ie)u.target=u.target||a;else{var x=u;u=new Ie(g,a),b(u,x)}if(x=!0,d)for(var V=d.length-1;0<=V;V--){var U=u.g=d[V];x=xi(U,g,!0,u)&&x}if(U=u.g=a,x=xi(U,g,!0,u)&&x,x=xi(U,g,!1,u)&&x,d)for(V=0;V<d.length;V++)U=u.g=d[V],x=xi(U,g,!1,u)&&x}Le.prototype.N=function(){if(Le.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],g=0;g<d.length;g++)Pi(d[g]);delete a.g[u],a.h--}}this.F=null},Le.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},Le.prototype.L=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function xi(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var x=!0,V=0;V<u.length;++V){var U=u[V];if(U&&!U.da&&U.capture==d){var pe=U.listener,Oe=U.ha||U.src;U.fa&&Ea(a.i,U),x=pe.call(Oe,g)!==!1&&x}}return x&&!g.defaultPrevented}function Au(a,u,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Su(a){a.g=Au(()=>{a.g=null,a.i&&(a.i=!1,Su(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class $_ extends ve{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Su(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hs(a){ve.call(this),this.h=a,this.g={}}S(hs,ve);var Ru=[];function Pu(a){M(a.g,function(u,d){this.g.hasOwnProperty(d)&&Aa(u)},a),a.g={}}hs.prototype.N=function(){hs.aa.N.call(this),Pu(this)},hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pa=c.JSON.stringify,K_=c.JSON.parse,W_=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Ca(){}Ca.prototype.h=null;function Cu(a){return a.h||(a.h=a.i())}function xu(){}var ds={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xa(){Ie.call(this,"d")}S(xa,Ie);function ka(){Ie.call(this,"c")}S(ka,Ie);var wn={},ku=null;function ki(){return ku=ku||new Le}wn.La="serverreachability";function Vu(a){Ie.call(this,wn.La,a)}S(Vu,Ie);function fs(a){const u=ki();qe(u,new Vu(u))}wn.STAT_EVENT="statevent";function Du(a,u){Ie.call(this,wn.STAT_EVENT,a),this.stat=u}S(Du,Ie);function $e(a){const u=ki();qe(u,new Du(u,a))}wn.Ma="timingevent";function Nu(a,u){Ie.call(this,wn.Ma,a),this.size=u}S(Nu,Ie);function ps(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function gs(){this.g=!0}gs.prototype.xa=function(){this.g=!1};function H_(a,u,d,g,x,V){a.info(function(){if(a.g)if(V)for(var U="",pe=V.split("&"),Oe=0;Oe<pe.length;Oe++){var le=pe[Oe].split("=");if(1<le.length){var Fe=le[0];le=le[1];var Ue=Fe.split("_");U=2<=Ue.length&&Ue[1]=="type"?U+(Fe+"="+le+"&"):U+(Fe+"=redacted&")}}else U=null;else U=V;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+u+`
`+d+`
`+U})}function Q_(a,u,d,g,x,V,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+u+`
`+d+`
`+V+" "+U})}function sr(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Y_(a,d)+(g?" "+g:"")})}function J_(a,u){a.info(function(){return"TIMEOUT: "+u})}gs.prototype.info=function(){};function Y_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var V=x[0];if(V!="noop"&&V!="stop"&&V!="close")for(var U=1;U<x.length;U++)x[U]=""}}}}return Pa(d)}catch{return u}}var Vi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ou={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Va;function Di(){}S(Di,Ca),Di.prototype.g=function(){return new XMLHttpRequest},Di.prototype.i=function(){return{}},Va=new Di;function zt(a,u,d,g){this.j=a,this.i=u,this.l=d,this.R=g||1,this.U=new hs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mu}function Mu(){this.i=null,this.g="",this.h=!1}var Lu={},Da={};function Na(a,u,d){a.L=1,a.v=Li(bt(u)),a.m=d,a.P=!0,Fu(a,null)}function Fu(a,u){a.F=Date.now(),Ni(a),a.A=bt(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Xu(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Mu,a.g=mh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new $_(m(a.Y,a,a.g),a.O)),u=a.U,d=a.g,g=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(Ru[0]=x.toString()),x=Ru);for(var V=0;V<x.length;V++){var U=Eu(d,x[V],g||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),fs(),H_(a.i,a.u,a.A,a.l,a.R,a.m)}zt.prototype.ca=function(a){a=a.target;const u=this.M;u&&Tt(a)==3?u.j():this.Y(a)},zt.prototype.Y=function(a){try{if(a==this.g)e:{const Ue=Tt(this.g);var u=this.g.Ba();const ar=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||ih(this.g)))){this.J||Ue!=4||u==7||(u==8||0>=ar?fs(3):fs(2)),Oa(this);var d=this.g.Z();this.X=d;t:if(Uu(this)){var g=ih(this.g);a="";var x=g.length,V=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),ms(this);var U="";break t}this.h.i=new c.TextDecoder}for(u=0;u<x;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(V&&u==x-1)});g.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,Q_(this.i,this.u,this.A,this.l,this.R,Ue,d),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Oe=this.g;if((pe=Oe.g?Oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(pe)){var le=pe;break t}}le=null}if(d=le)sr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ma(this,d);else{this.o=!1,this.s=3,$e(12),bn(this),ms(this);break e}}if(this.P){d=!0;let ct;for(;!this.J&&this.C<U.length;)if(ct=X_(this,U),ct==Da){Ue==4&&(this.s=4,$e(14),d=!1),sr(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==Lu){this.s=4,$e(15),sr(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else sr(this.i,this.l,ct,null),Ma(this,ct);if(Uu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||U.length!=0||this.h.h||(this.s=1,$e(16),d=!1),this.o=this.o&&d,!d)sr(this.i,this.l,U,"[Invalid Chunked Response]"),bn(this),ms(this);else if(0<U.length&&!this.W){this.W=!0;var Fe=this.j;Fe.g==this&&Fe.ba&&!Fe.M&&(Fe.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),ja(Fe),Fe.M=!0,$e(11))}}else sr(this.i,this.l,U,null),Ma(this,U);Ue==4&&bn(this),this.o&&!this.J&&(Ue==4?dh(this.j,this):(this.o=!1,Ni(this)))}else gy(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,$e(12)):(this.s=0,$e(13)),bn(this),ms(this)}}}catch{}finally{}};function Uu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function X_(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?Da:(d=Number(u.substring(d,g)),isNaN(d)?Lu:(g+=1,g+d>u.length?Da:(u=u.slice(g,g+d),a.C=g+d,u)))}zt.prototype.cancel=function(){this.J=!0,bn(this)};function Ni(a){a.S=Date.now()+a.I,Bu(a,a.I)}function Bu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ps(m(a.ba,a),u)}function Oa(a){a.B&&(c.clearTimeout(a.B),a.B=null)}zt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(J_(this.i,this.A),this.L!=2&&(fs(),$e(17)),bn(this),this.s=2,ms(this)):Bu(this,this.S-a)};function ms(a){a.j.G==0||a.J||dh(a.j,a)}function bn(a){Oa(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Pu(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Ma(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||La(d.h,a))){if(!a.K&&La(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Gi(d),zi(d);else break e;za(d),$e(18)}}else d.za=x[1],0<d.za-d.T&&37500>x[2]&&d.F&&d.v==0&&!d.C&&(d.C=ps(m(d.Za,d),6e3));if(1>=Gu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else An(d,11)}else if((a.K||d.g==a)&&Gi(d),!k(u))for(x=d.Da.g.parse(u),u=0;u<x.length;u++){let le=x[u];if(d.T=le[0],le=le[1],d.G==2)if(le[0]=="c"){d.K=le[1],d.ia=le[2];const Fe=le[3];Fe!=null&&(d.la=Fe,d.j.info("VER="+d.la));const Ue=le[4];Ue!=null&&(d.Aa=Ue,d.j.info("SVER="+d.Aa));const ar=le[5];ar!=null&&typeof ar=="number"&&0<ar&&(g=1.5*ar,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const ct=a.g;if(ct){const $i=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var V=g.h;V.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Fa(V,V.h),V.h=null))}if(g.D){const Ga=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;Ga&&(g.ya=Ga,_e(g.I,g.D,Ga))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var U=a;if(g.qa=gh(g,g.J?g.ia:null,g.W),U.K){qu(g.h,U);var pe=U,Oe=g.L;Oe&&(pe.I=Oe),pe.B&&(Oa(pe),Ni(pe)),g.g=U}else uh(g);0<d.i.length&&ji(d)}else le[0]!="stop"&&le[0]!="close"||An(d,7);else d.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?An(d,7):Ba(d):le[0]!="noop"&&d.l&&d.l.ta(le),d.v=0)}}fs(4)}catch{}}var Z_=class{constructor(a,u){this.g=a,this.map=u}};function zu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ju(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gu(a){return a.h?1:a.g?a.g.size:0}function La(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Fa(a,u){a.g?a.g.add(u):a.h=u}function qu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}zu.prototype.cancel=function(){if(this.i=$u(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function $u(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return C(a.i)}function ey(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,g=0;g<d;g++)u.push(a[g]);return u}u=[],d=0;for(g in a)u[d++]=a[g];return u}function ty(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const g in a)u[d++]=g;return u}}}function Ku(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=ty(a),g=ey(a),x=g.length,V=0;V<x;V++)u.call(void 0,g[V],d&&d[V],a)}var Wu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ny(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),x=null;if(0<=g){var V=a[d].substring(0,g);x=a[d].substring(g+1)}else V=a[d];u(V,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Tn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Tn){this.h=a.h,Oi(this,a.j),this.o=a.o,this.g=a.g,Mi(this,a.s),this.l=a.l;var u=a.i,d=new vs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Hu(this,d),this.m=a.m}else a&&(u=String(a).match(Wu))?(this.h=!1,Oi(this,u[1]||"",!0),this.o=_s(u[2]||""),this.g=_s(u[3]||"",!0),Mi(this,u[4]),this.l=_s(u[5]||"",!0),Hu(this,u[6]||"",!0),this.m=_s(u[7]||"")):(this.h=!1,this.i=new vs(null,this.h))}Tn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(ys(u,Qu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(ys(u,Qu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ys(d,d.charAt(0)=="/"?iy:sy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ys(d,ay)),a.join("")};function bt(a){return new Tn(a)}function Oi(a,u,d){a.j=d?_s(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Mi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Hu(a,u,d){u instanceof vs?(a.i=u,cy(a.i,a.h)):(d||(u=ys(u,oy)),a.i=new vs(u,a.h))}function _e(a,u,d){a.i.set(u,d)}function Li(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function _s(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ys(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,ry),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ry(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Qu=/[#\/\?@]/g,sy=/[#\?:]/g,iy=/[#\?]/g,oy=/[#\?@]/g,ay=/#/g;function vs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function jt(a){a.g||(a.g=new Map,a.h=0,a.i&&ny(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=vs.prototype,r.add=function(a,u){jt(this),this.i=null,a=ir(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Ju(a,u){jt(a),u=ir(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Yu(a,u){return jt(a),u=ir(a,u),a.g.has(u)}r.forEach=function(a,u){jt(this),this.g.forEach(function(d,g){d.forEach(function(x){a.call(u,x,g,this)},this)},this)},r.na=function(){jt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const x=a[g];for(let V=0;V<x.length;V++)d.push(u[g])}return d},r.V=function(a){jt(this);let u=[];if(typeof a=="string")Yu(this,a)&&(u=u.concat(this.g.get(ir(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return jt(this),this.i=null,a=ir(this,a),Yu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Xu(a,u,d){Ju(a,u),0<d.length&&(a.i=null,a.g.set(ir(a,u),C(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const V=encodeURIComponent(String(g)),U=this.V(g);for(g=0;g<U.length;g++){var x=V;U[g]!==""&&(x+="="+encodeURIComponent(String(U[g]))),a.push(x)}}return this.i=a.join("&")};function ir(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function cy(a,u){u&&!a.j&&(jt(a),a.i=null,a.g.forEach(function(d,g){var x=g.toLowerCase();g!=x&&(Ju(this,g),Xu(this,x,d))},a)),a.j=u}function ly(a,u){const d=new gs;if(c.Image){const g=new Image;g.onload=w(Gt,d,"TestLoadImage: loaded",!0,u,g),g.onerror=w(Gt,d,"TestLoadImage: error",!1,u,g),g.onabort=w(Gt,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=w(Gt,d,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function uy(a,u){const d=new gs,g=new AbortController,x=setTimeout(()=>{g.abort(),Gt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(x),V.ok?Gt(d,"TestPingServer: ok",!0,u):Gt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(x),Gt(d,"TestPingServer: error",!1,u)})}function Gt(a,u,d,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(d)}catch{}}function hy(){this.g=new W_}function dy(a,u,d){const g=d||"";try{Ku(a,function(x,V){let U=x;h(x)&&(U=Pa(x)),u.push(g+V+"="+encodeURIComponent(U))})}catch(x){throw u.push(g+"type="+encodeURIComponent("_badmap")),x}}function Fi(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Fi,Ca),Fi.prototype.g=function(){return new Ui(this.l,this.j)},Fi.prototype.i=function(a){return function(){return a}}({});function Ui(a,u){Le.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Ui,Le),r=Ui.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Es(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Is(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Is(this):Es(this),this.readyState==3&&Zu(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Is(this))},r.Qa=function(a){this.g&&(this.response=a,Is(this))},r.ga=function(){this.g&&Is(this)};function Is(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Es(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Es(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function eh(a){let u="";return M(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function Ua(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=eh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):_e(a,u,d))}function Te(a){Le.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Te,Le);var fy=/^https?$/i,py=["POST","PUT"];r=Te.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Va.g(),this.v=this.o?Cu(this.o):Cu(Va),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(V){th(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)d.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),x=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(py,u,void 0))||g||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,U]of d)this.g.setRequestHeader(V,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sh(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){th(this,V)}};function th(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,nh(a),Bi(a)}function nh(a){a.A||(a.A=!0,qe(a,"complete"),qe(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,qe(this,"complete"),qe(this,"abort"),Bi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bi(this,!0)),Te.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?rh(this):this.bb())},r.bb=function(){rh(this)};function rh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tt(a)!=4||a.Z()!=2)){if(a.u&&Tt(a)==4)Au(a.Ea,0,a);else if(qe(a,"readystatechange"),Tt(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=U===0){var x=String(a.D).match(Wu)[1]||null;!x&&c.self&&c.self.location&&(x=c.self.location.protocol.slice(0,-1)),g=!fy.test(x?x.toLowerCase():"")}d=g}if(d)qe(a,"complete"),qe(a,"success");else{a.m=6;try{var V=2<Tt(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",nh(a)}}finally{Bi(a)}}}}function Bi(a,u){if(a.g){sh(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||qe(a,"ready");try{d.onreadystatechange=g}catch{}}}function sh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function Tt(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),K_(u)}};function ih(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function gy(a){const u={};a=(a.g&&2<=Tt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(k(a[g]))continue;var d=A(a[g]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=u[x]||[];u[x]=V,V.push(d)}v(u,function(g){return g.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ws(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function oh(a){this.Aa=0,this.i=[],this.j=new gs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ws("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ws("baseRetryDelayMs",5e3,a),this.cb=ws("retryDelaySeedMs",1e4,a),this.Wa=ws("forwardChannelMaxRetries",2,a),this.wa=ws("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new zu(a&&a.concurrentRequestLimit),this.Da=new hy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=oh.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,g){$e(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=gh(this,null,this.W),ji(this)};function Ba(a){if(ah(a),a.G==3){var u=a.U++,d=bt(a.I);if(_e(d,"SID",a.K),_e(d,"RID",u),_e(d,"TYPE","terminate"),bs(a,d),u=new zt(a,a.j,u),u.L=2,u.v=Li(bt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=mh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ni(u)}ph(a)}function zi(a){a.g&&(ja(a),a.g.cancel(),a.g=null)}function ah(a){zi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Gi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ji(a){if(!ju(a.h)&&!a.s){a.s=!0;var u=a.Ga;ne||fe(),J||(ne(),J=!0),ee.add(u,a),a.B=0}}function my(a,u){return Gu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ps(m(a.Ga,a,u),fh(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new zt(this,this.j,a);let V=this.o;if(this.S&&(V?(V=_(V),b(V,this.S)):V=this.S),this.m!==null||this.O||(x.H=V,V=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=lh(this,x,u),d=bt(this.I),_e(d,"RID",a),_e(d,"CVER",22),this.D&&_e(d,"X-HTTP-Session-Id",this.D),bs(this,d),V&&(this.O?u="headers="+encodeURIComponent(String(eh(V)))+"&"+u:this.m&&Ua(d,this.m,V)),Fa(this.h,x),this.Ua&&_e(d,"TYPE","init"),this.P?(_e(d,"$req",u),_e(d,"SID","null"),x.T=!0,Na(x,d,null)):Na(x,d,u),this.G=2}}else this.G==3&&(a?ch(this,a):this.i.length==0||ju(this.h)||ch(this))};function ch(a,u){var d;u?d=u.l:d=a.U++;const g=bt(a.I);_e(g,"SID",a.K),_e(g,"RID",d),_e(g,"AID",a.T),bs(a,g),a.m&&a.o&&Ua(g,a.m,a.o),d=new zt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=lh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Fa(a.h,d),Na(d,g,u)}function bs(a,u){a.H&&M(a.H,function(d,g){_e(u,g,d)}),a.l&&Ku({},function(d,g){_e(u,g,d)})}function lh(a,u,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var x=a.i;let V=-1;for(;;){const U=["count="+d];V==-1?0<d?(V=x[0].g,U.push("ofs="+V)):V=0:U.push("ofs="+V);let pe=!0;for(let Oe=0;Oe<d;Oe++){let le=x[Oe].g;const Fe=x[Oe].map;if(le-=V,0>le)V=Math.max(0,x[Oe].g-100),pe=!1;else try{dy(Fe,U,"req"+le+"_")}catch{g&&g(Fe)}}if(pe){g=U.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,g}function uh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ne||fe(),J||(ne(),J=!0),ee.add(u,a),a.v=0}}function za(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ps(m(a.Fa,a),fh(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,hh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ps(m(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$e(10),zi(this),hh(this))};function ja(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function hh(a){a.g=new zt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=bt(a.qa);_e(u,"RID","rpc"),_e(u,"SID",a.K),_e(u,"AID",a.T),_e(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(u,"TO",a.ja),_e(u,"TYPE","xmlhttp"),bs(a,u),a.m&&a.o&&Ua(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Li(bt(u)),d.m=null,d.P=!0,Fu(d,a)}r.Za=function(){this.C!=null&&(this.C=null,zi(this),za(this),$e(19))};function Gi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function dh(a,u){var d=null;if(a.g==u){Gi(a),ja(a),a.g=null;var g=2}else if(La(a.h,u))d=u.D,qu(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var x=a.B;g=ki(),qe(g,new Nu(g,d)),ji(a)}else uh(a);else if(x=u.s,x==3||x==0&&0<u.X||!(g==1&&my(a,u)||g==2&&za(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),x){case 1:An(a,5);break;case 4:An(a,10);break;case 3:An(a,6);break;default:An(a,2)}}}function fh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function An(a,u){if(a.j.info("Error code "+u),u==2){var d=m(a.fb,a),g=a.Xa;const x=!g;g=new Tn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Oi(g,"https"),Li(g),x?ly(g.toString(),d):uy(g.toString(),d)}else $e(2);a.G=0,a.l&&a.l.sa(u),ph(a),ah(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function ph(a){if(a.G=0,a.ka=[],a.l){const u=$u(a.h);(u.length!=0||a.i.length!=0)&&(T(a.ka,u),T(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function gh(a,u,d){var g=d instanceof Tn?bt(d):new Tn(d);if(g.g!="")u&&(g.g=u+"."+g.g),Mi(g,g.s);else{var x=c.location;g=x.protocol,u=u?u+"."+x.hostname:x.hostname,x=+x.port;var V=new Tn(null);g&&Oi(V,g),u&&(V.g=u),x&&Mi(V,x),d&&(V.l=d),g=V}return d=a.D,u=a.ya,d&&u&&_e(g,d,u),_e(g,"VER",a.la),bs(a,g),g}function mh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Te(new Fi({eb:d})):new Te(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function _h(){}r=_h.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function qi(){}qi.prototype.g=function(a,u){return new et(a,u)};function et(a,u){Le.call(this),this.g=new oh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!k(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!k(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new or(this)}S(et,Le),et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){Ba(this.g)},et.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Pa(a),a=d);u.i.push(new Z_(u.Ya++,a)),u.G==3&&ji(u)},et.prototype.N=function(){this.g.l=null,delete this.j,Ba(this.g),delete this.g,et.aa.N.call(this)};function yh(a){xa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}S(yh,xa);function vh(){ka.call(this),this.status=1}S(vh,ka);function or(a){this.g=a}S(or,_h),or.prototype.ua=function(){qe(this.g,"a")},or.prototype.ta=function(a){qe(this.g,new yh(a))},or.prototype.sa=function(a){qe(this.g,new vh)},or.prototype.ra=function(){qe(this.g,"b")},qi.prototype.createWebChannel=qi.prototype.g,et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,sg=function(){return new qi},rg=function(){return ki()},ng=wn,Pc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vi.NO_ERROR=0,Vi.TIMEOUT=8,Vi.HTTP_ERROR=6,oo=Vi,Ou.COMPLETE="complete",tg=Ou,xu.EventType=ds,ds.OPEN="a",ds.CLOSE="b",ds.ERROR="c",ds.MESSAGE="d",Le.prototype.listen=Le.prototype.K,Ms=xu,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,eg=Te}).apply(typeof Wi<"u"?Wi:typeof self<"u"?self:typeof window<"u"?window:{});const cd="@firebase/firestore",ld="4.7.11";/**
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
 */let rs="11.6.1";/**
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
 */const Kn=new ml("@firebase/firestore");function mr(){return Kn.logLevel}function L(r,...e){if(Kn.logLevel<=oe.DEBUG){const t=e.map(Pl);Kn.debug(`Firestore (${rs}): ${r}`,...t)}}function Re(r,...e){if(Kn.logLevel<=oe.ERROR){const t=e.map(Pl);Kn.error(`Firestore (${rs}): ${r}`,...t)}}function ti(r,...e){if(Kn.logLevel<=oe.WARN){const t=e.map(Pl);Kn.warn(`Firestore (${rs}): ${r}`,...t)}}function Pl(r){if(typeof r=="string")return r;try{/**
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
 */function G(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,ig(r,n,t)}function ig(r,e,t){let n=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Re(n),new Error(n)}function H(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||ig(e,s,n)}function K(r,e){return r}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class un{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class ib{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ob{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ze.UNAUTHENTICATED))}shutdown(){}}class ab{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){H(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new un)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(H(typeof n.accessToken=="string",31837,{l:n}),new ib(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string",2055,{h:e}),new ze(e)}}class cb{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class lb{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new cb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ud{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ub{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ut(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){H(this.o===void 0,3512);const n=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ud(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(H(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ud(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hb(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */function og(){return new TextEncoder}/**
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
 */class ag{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=hb(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function X(r,e){return r<e?-1:r>e?1:0}function Cc(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=r.codePointAt(t),s=e.codePointAt(t);if(n!==s){if(n<128&&s<128)return X(n,s);{const i=og(),o=db(i.encode(hd(r,t)),i.encode(hd(e,t)));return o!==0?o:X(n,s)}}t+=n>65535?2:1}return X(r.length,e.length)}function hd(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function db(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return X(r[t],e[t]);return X(r.length,e.length)}function Or(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function cg(r){return r+"\0"}/**
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
 */const dd=-62135596800,fd=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*fd);return new be(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<dd)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fd}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-dd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new be(0,0))}static max(){return new Q(new be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const pd="__name__";class mt{constructor(e,t,n){t===void 0?t=0:t>e.length&&G(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&G(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return mt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof mt?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=mt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return X(e.length,t.length)}static compareSegments(e,t){const n=mt.isNumericId(e),s=mt.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?mt.extractNumericId(e).compare(mt.extractNumericId(t)):Cc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ln.fromString(e.substring(4,e.length-2))}}class ue extends mt{construct(e,t,n){return new ue(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new z(O.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const fb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends mt{construct(e,t,n){return new we(e,t,n)}static isValidIdentifier(e){return fb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pd}static keyField(){return new we([pd])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new z(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(n+=c,s++):(i(),s++)}if(i(),o)throw new z(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
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
 */const Mr=-1;class Ro{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function xc(r){return r.fields.find(e=>e.kind===2)}function xn(r){return r.fields.filter(e=>e.kind!==2)}Ro.UNKNOWN_ID=-1;class ao{constructor(e,t){this.fieldPath=e,this.kind=t}}class ni{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ni(0,it.min())}}function lg(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(n===1e9?new be(t+1,0):new be(t,n));return new it(s,B.empty(),e)}function ug(r){return new it(r.readTime,r.key,Mr)}class it{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new it(Q.min(),B.empty(),Mr)}static max(){return new it(Q.max(),B.empty(),Mr)}}function Cl(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(r.documentKey,e.documentKey),t!==0?t:X(r.largestBatchId,e.largestBatchId))}/**
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
 */const hg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function yn(r){if(r.code!==O.FAILED_PRECONDITION||r.message!==hg)throw r;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,n)=>{t(e)})}static reject(e){return new P((t,n)=>{n(e)})}static waitFor(e){return new P((t,n)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>n(l))}),o=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const n of e)t=t.next(s=>s?P.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new P((n,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===i&&n(o)},f=>s(f))}})}static doWhile(e,t){return new P((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
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
 */const tt="SimpleDb";class ea{static open(e,t,n,s){try{return new ea(t,e.transaction(s,n))}catch(i){throw new qs(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new un,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new qs(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=xl(n.target.error);this.S.reject(new qs(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(L(tt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new gb(t)}}class hn{static delete(e){return L(tt,"Removing database:",e),Vn(up().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!pp())return!1;if(hn.F())return!0;const e=ke(),t=hn.M(e),n=0<t&&t<10,s=fg(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.B=n,this.L=null,hn.M(ke())===12.2&&Re("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(L(tt,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new qs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new z(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new z(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new qs(e,o))},s.onupgradeneeded=i=>{L(tt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${o.version}`);this.B.q(o,s.transaction,i.oldVersion,this.version).next(()=>{L(tt,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const n=t.target;this.L=n.version},{passive:!0})),this.$&&(this.db.onversionchange=t=>this.$(t)),this.db}U(e){this.$=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const c=ea.open(this.db,e,i?"readonly":"readwrite",n),l=s(c).next(h=>(c.v(),h)).catch(h=>(c.abort(h),P.reject(h))).toPromise();return l.catch(()=>{}),await c.D,l}catch(c){const l=c,h=l.name!=="FirebaseError"&&o<3;if(L(tt,"Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function fg(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class pb{constructor(e){this.K=e,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(e){this.K=e}done(){this.W=!0}H(e){this.G=e}delete(){return Vn(this.K.delete())}}class qs extends z{constructor(e,t){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function vn(r){return r.name==="IndexedDbTransactionError"}class gb{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(L(tt,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(L(tt,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Vn(n)}add(e){return L(tt,"ADD",this.store.name,e,e),Vn(this.store.add(e))}get(e){return Vn(this.store.get(e)).next(t=>(t===void 0&&(t=null),L(tt,"GET",this.store.name,e,t),t))}delete(e){return L(tt,"DELETE",this.store.name,e),Vn(this.store.delete(e))}count(){return L(tt,"COUNT",this.store.name),Vn(this.store.count())}J(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new P((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(n),o=[];return this.Y(i,(c,l)=>{o.push(l)}).next(()=>o)}}Z(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new P((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}X(e,t){L(tt,"DELETE ALL",this.store.name);const n=this.options(e,t);n.ee=!1;const s=this.cursor(n);return this.Y(s,(i,o,c)=>c.delete())}te(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.Y(s,t)}ne(e){const t=this.cursor({});return new P((n,s)=>{t.onerror=i=>{const o=xl(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}Y(e,t){const n=[];return new P((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new pb(c),h=t(c.primaryKey,c.value,l);if(h instanceof P){const f=h.catch(p=>(l.done(),P.reject(p)));n.push(f)}l.isDone?s():l.j===null?c.continue():c.continue(l.j)}}).next(()=>P.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.ee?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Vn(r){return new P((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=xl(n.target.error);t(s)}})}let gd=!1;function xl(r){const e=hn.M(ke());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return gd||(gd=!0,setTimeout(()=>{throw n},0)),n}}return r}const $s="IndexBackfiller";class mb{constructor(e,t){this.asyncQueue=e,this.re=t,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(e){L($s,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.re.se();L($s,`Documents written: ${t}`)}catch(t){vn(t)?L($s,"Ignoring IndexedDB error during index backfill: ",t):await yn(t)}await this.ie(6e4)})}}class _b{constructor(e,t){this.localStore=e,this.persistence=t}async se(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.oe(t,e))}oe(e,t){const n=new Set;let s=t,i=!0;return P.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return L($s,`Processing collection: ${o}`),this._e(e,o,s).next(c=>{s-=c,n.add(o)});i=!1})).next(()=>t-s)}_e(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ae(s,i)).next(c=>(L($s,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}ae(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=ug(i);Cl(o,n)>0&&(n=o)}),new it(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */const Fn=-1;function ta(r){return r==null}function ri(r){return r===0&&1/r==-1/0}function pg(r){return typeof r=="number"&&Number.isInteger(r)&&!ri(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Po="";function Ge(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=md(e)),e=yb(r.get(t),e);return md(e)}function yb(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case Po:t+="";break;default:t+=i}}return t}function md(r){return r+Po+""}function yt(r){const e=r.length;if(H(e>=2,64408,{path:r}),e===2)return H(r.charAt(0)===Po&&r.charAt(1)==="",56145,{path:r}),ue.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf(Po,i);switch((o<0||o>t)&&G(50515,{path:r}),r.charAt(o+1)){case"":const c=r.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:G(61167,{path:r})}i=o+2}return new ue(n)}/**
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
 */const kn="remoteDocuments",wi="owner",cr="owner",si="mutationQueues",vb="userId",lt="mutations",_d="batchId",Mn="userMutationsIndex",yd=["userId","batchId"];/**
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
 */function co(r,e){return[r,Ge(e)]}function gg(r,e,t){return[r,Ge(e),t]}const Ib={},Lr="documentMutations",Co="remoteDocumentsV14",Eb=["prefixPath","collectionGroup","readTime","documentId"],lo="documentKeyIndex",wb=["prefixPath","collectionGroup","documentId"],mg="collectionGroupIndex",bb=["collectionGroup","readTime","prefixPath","documentId"],ii="remoteDocumentGlobal",kc="remoteDocumentGlobalKey",Fr="targets",_g="queryTargetsIndex",Tb=["canonicalId","targetId"],Ur="targetDocuments",Ab=["targetId","path"],kl="documentTargetsIndex",Sb=["path","targetId"],xo="targetGlobalKey",Un="targetGlobal",oi="collectionParents",Rb=["collectionId","parent"],Br="clientMetadata",Pb="clientId",na="bundles",Cb="bundleId",ra="namedQueries",xb="name",Vl="indexConfiguration",kb="indexId",Vc="collectionGroupIndex",Vb="collectionGroup",ko="indexState",Db=["indexId","uid"],yg="sequenceNumberIndex",Nb=["uid","sequenceNumber"],Vo="indexEntries",Ob=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],vg="documentKeyIndex",Mb=["indexId","uid","orderedDocumentKey"],sa="documentOverlays",Lb=["userId","collectionPath","documentId"],Dc="collectionPathOverlayIndex",Fb=["userId","collectionPath","largestBatchId"],Ig="collectionGroupOverlayIndex",Ub=["userId","collectionGroup","largestBatchId"],Dl="globals",Bb="name",Eg=[si,lt,Lr,kn,Fr,wi,Un,Ur,Br,ii,oi,na,ra],zb=[...Eg,sa],wg=[si,lt,Lr,Co,Fr,wi,Un,Ur,Br,ii,oi,na,ra,sa],bg=wg,Nl=[...bg,Vl,ko,Vo],jb=Nl,Gb=[...Nl,Dl];/**
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
 */class Nc extends dg{constructor(e,t){super(),this.he=e,this.currentSequenceNumber=t}}function Ve(r,e){const t=K(r);return hn.N(t.he,e)}/**
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
 */function vd(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function nr(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Tg(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class me{constructor(e,t){this.comparator=e,this.root=t||Me.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hi(this.root,e,this.comparator,!0)}}class Hi{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Me.RED,this.left=s??Me.EMPTY,this.right=i??Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Me(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Me.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new Me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class he{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Id(this.data.getIterator())}getIteratorFrom(e){return new Id(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class Id{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function lr(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class ot{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new ot([])}unionWith(e){let t=new he(we.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Or(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class Ag extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ag("Invalid base64 string: "+i):i}}(e);return new Pe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const qb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ot(r){if(H(!!r,39018),typeof r=="string"){let e=0;const t=qb.exec(r);if(H(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Ee(r.seconds),nanos:Ee(r.nanos)}}function Ee(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Mt(r){return typeof r=="string"?Pe.fromBase64String(r):Pe.fromUint8Array(r)}/**
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
 */const Sg="server_timestamp",Rg="__type__",Pg="__previous_value__",Cg="__local_write_time__";function Ol(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Rg])===null||t===void 0?void 0:t.stringValue)===Sg}function ia(r){const e=r.mapValue.fields[Pg];return Ol(e)?ia(e):e}function ai(r){const e=Ot(r.mapValue.fields[Cg].timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */class $b{constructor(e,t,n,s,i,o,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}const Do="(default)";class Wn{constructor(e,t){this.projectId=e,this.database=t||Do}static empty(){return new Wn("","")}get isDefaultDatabase(){return this.database===Do}isEqual(e){return e instanceof Wn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ml="__type__",xg="__max__",rn={mapValue:{fields:{__type__:{stringValue:xg}}}},Ll="__vector__",zr="value",uo={nullValue:"NULL_VALUE"};function fn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ol(r)?4:kg(r)?9007199254740991:oa(r)?10:11:G(28295,{value:r})}function wt(r,e){if(r===e)return!0;const t=fn(r);if(t!==fn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ai(r).isEqual(ai(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ot(s.timestampValue),c=Ot(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return Mt(s.bytesValue).isEqual(Mt(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return Ee(s.geoPointValue.latitude)===Ee(i.geoPointValue.latitude)&&Ee(s.geoPointValue.longitude)===Ee(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ee(s.integerValue)===Ee(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ee(s.doubleValue),c=Ee(i.doubleValue);return o===c?ri(o)===ri(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return Or(r.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(vd(o)!==vd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!wt(o[l],c[l])))return!1;return!0}(r,e);default:return G(52216,{left:r})}}function ci(r,e){return(r.values||[]).find(t=>wt(t,e))!==void 0}function pn(r,e){if(r===e)return 0;const t=fn(r),n=fn(e);if(t!==n)return X(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(r.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ee(i.integerValue||i.doubleValue),l=Ee(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,e);case 3:return Ed(r.timestampValue,e.timestampValue);case 4:return Ed(ai(r),ai(e));case 5:return Cc(r.stringValue,e.stringValue);case 6:return function(i,o){const c=Mt(i),l=Mt(o);return c.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=X(c[h],l[h]);if(f!==0)return f}return X(c.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const c=X(Ee(i.latitude),Ee(o.latitude));return c!==0?c:X(Ee(i.longitude),Ee(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return wd(r.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},m=o.fields||{},w=(c=p[zr])===null||c===void 0?void 0:c.arrayValue,S=(l=m[zr])===null||l===void 0?void 0:l.arrayValue,C=X(((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:wd(w,S)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===rn.mapValue&&o===rn.mapValue)return 0;if(i===rn.mapValue)return 1;if(o===rn.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Cc(l[p],f[p]);if(m!==0)return m;const w=pn(c[l[p]],h[f[p]]);if(w!==0)return w}return X(l.length,f.length)}(r.mapValue,e.mapValue);default:throw G(23264,{Pe:t})}}function Ed(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return X(r,e);const t=Ot(r),n=Ot(e),s=X(t.seconds,n.seconds);return s!==0?s:X(t.nanos,n.nanos)}function wd(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=pn(t[s],n[s]);if(i)return i}return X(t.length,n.length)}function jr(r){return Oc(r)}function Oc(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Ot(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Mt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return B.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=Oc(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${Oc(t.fields[o])}`;return s+"}"}(r.mapValue):G(61005,{value:r})}function ho(r){switch(fn(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ia(r);return e?16+ho(e):16;case 5:return 2*r.stringValue.length;case 6:return Mt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+ho(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return nr(n.fields,(i,o)=>{s+=i.length+ho(o)}),s}(r.mapValue);default:throw G(13486,{value:r})}}function Fl(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Mc(r){return!!r&&"integerValue"in r}function li(r){return!!r&&"arrayValue"in r}function bd(r){return!!r&&"nullValue"in r}function Td(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function fo(r){return!!r&&"mapValue"in r}function oa(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ml])===null||t===void 0?void 0:t.stringValue)===Ll}function Ks(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return nr(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Ks(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ks(r.arrayValue.values[t]);return e}return Object.assign({},r)}function kg(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===xg}const Vg={mapValue:{fields:{[Ml]:{stringValue:Ll},[zr]:{arrayValue:{}}}}};function Kb(r){return"nullValue"in r?uo:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Fl(Wn.empty(),B.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?oa(r)?Vg:{mapValue:{}}:G(35942,{value:r})}function Wb(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Fl(Wn.empty(),B.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Vg:"mapValue"in r?oa(r)?{mapValue:{}}:rn:G(61959,{value:r})}function Ad(r,e){const t=pn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Sd(r,e){const t=pn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!fo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(t)}setAll(e){let t=we.emptyPath(),n={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=c.popLast()}o?n[c.lastSegment()]=Ks(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());fo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];fo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){nr(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Je(Ks(this.value))}}function Dg(r){const e=[];return nr(r.fields,(t,n)=>{const s=new we([t]);if(fo(n)){const i=Dg(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new ot(e)}/**
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
 */class Gr{constructor(e,t){this.position=e,this.inclusive=t}}function Rd(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=B.comparator(B.fromName(o.referenceValue),t.key):n=pn(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Pd(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!wt(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class No{constructor(e,t="asc"){this.field=e,this.dir=t}}function Hb(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Ng{}class ae extends Ng{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Qb(e,t,n):t==="array-contains"?new Xb(e,n):t==="in"?new Bg(e,n):t==="not-in"?new Zb(e,n):t==="array-contains-any"?new eT(e,n):new ae(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Jb(e,n):new Yb(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(pn(t,this.value)):t!==null&&fn(this.value)===fn(t)&&this.matchesComparison(pn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class de extends Ng{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new de(e,t)}matches(e){return qr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function qr(r){return r.op==="and"}function Lc(r){return r.op==="or"}function Ul(r){return Og(r)&&qr(r)}function Og(r){for(const e of r.filters)if(e instanceof de)return!1;return!0}function Fc(r){if(r instanceof ae)return r.field.canonicalString()+r.op.toString()+jr(r.value);if(Ul(r))return r.filters.map(e=>Fc(e)).join(",");{const e=r.filters.map(t=>Fc(t)).join(",");return`${r.op}(${e})`}}function Mg(r,e){return r instanceof ae?function(n,s){return s instanceof ae&&n.op===s.op&&n.field.isEqual(s.field)&&wt(n.value,s.value)}(r,e):r instanceof de?function(n,s){return s instanceof de&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,c)=>i&&Mg(o,s.filters[c]),!0):!1}(r,e):void G(19439)}function Lg(r,e){const t=r.filters.concat(e);return de.create(t,r.op)}function Fg(r){return r instanceof ae?function(t){return`${t.field.canonicalString()} ${t.op} ${jr(t.value)}`}(r):r instanceof de?function(t){return t.op.toString()+" {"+t.getFilters().map(Fg).join(" ,")+"}"}(r):"Filter"}class Qb extends ae{constructor(e,t,n){super(e,t,n),this.key=B.fromName(n.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class Jb extends ae{constructor(e,t){super(e,"in",t),this.keys=Ug("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Yb extends ae{constructor(e,t){super(e,"not-in",t),this.keys=Ug("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ug(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>B.fromName(n.referenceValue))}class Xb extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return li(t)&&ci(t.arrayValue,this.value)}}class Bg extends ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ci(this.value.arrayValue,t)}}class Zb extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ci(this.value.arrayValue,t)}}class eT extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!li(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>ci(this.value.arrayValue,n))}}/**
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
 */class tT{constructor(e,t=null,n=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Ie=null}}function Uc(r,e=null,t=[],n=[],s=null,i=null,o=null){return new tT(r,e,t,n,s,i,o)}function Hn(r){const e=K(r);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Fc(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),ta(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>jr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>jr(n)).join(",")),e.Ie=t}return e.Ie}function bi(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Hb(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Mg(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Pd(r.startAt,e.startAt)&&Pd(r.endAt,e.endAt)}function Oo(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Mo(r,e){return r.filters.filter(t=>t instanceof ae&&t.field.isEqual(e))}function Cd(r,e,t){let n=uo,s=!0;for(const i of Mo(r,e)){let o=uo,c=!0;switch(i.op){case"<":case"<=":o=Kb(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=uo}Ad({value:n,inclusive:s},{value:o,inclusive:c})<0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Ad({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function xd(r,e,t){let n=rn,s=!0;for(const i of Mo(r,e)){let o=rn,c=!0;switch(i.op){case">=":case">":o=Wb(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=rn}Sd({value:n,inclusive:s},{value:o,inclusive:c})>0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Sd({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class aa{constructor(e,t=null,n=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function zg(r,e,t,n,s,i,o,c){return new aa(r,e,t,n,s,i,o,c)}function ca(r){return new aa(r)}function kd(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function nT(r){return r.collectionGroup!==null}function Ws(r){const e=K(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new he(we.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new No(i,n))}),t.has(we.keyField().canonicalString())||e.Ee.push(new No(we.keyField(),n))}return e.Ee}function rt(r){const e=K(r);return e.de||(e.de=rT(e,Ws(r))),e.de}function rT(r,e){if(r.limitType==="F")return Uc(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new No(s.field,i)});const t=r.endAt?new Gr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Gr(r.startAt.position,r.startAt.inclusive):null;return Uc(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Bc(r,e,t){return new aa(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function la(r,e){return bi(rt(r),rt(e))&&r.limitType===e.limitType}function jg(r){return`${Hn(rt(r))}|lt:${r.limitType}`}function _r(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Fg(s)).join(", ")}]`),ta(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>jr(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>jr(s)).join(",")),`Target(${n})`}(rt(r))}; limitType=${r.limitType})`}function Ti(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of Ws(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,c,l){const h=Rd(o,c,l);return o.inclusive?h<=0:h<0}(n.startAt,Ws(n),s)||n.endAt&&!function(o,c,l){const h=Rd(o,c,l);return o.inclusive?h>=0:h>0}(n.endAt,Ws(n),s))}(r,e)}function Gg(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function qg(r){return(e,t)=>{let n=!1;for(const s of Ws(r)){const i=sT(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function sT(r,e,t){const n=r.field.isKeyField()?B.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?pn(l,h):G(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return G(19790,{direction:r.dir})}}/**
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
 */class Ut{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){nr(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return Tg(this.inner)}size(){return this.innerSize}}/**
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
 */const iT=new me(B.comparator);function nt(){return iT}const $g=new me(B.comparator);function Ls(...r){let e=$g;for(const t of r)e=e.insert(t.key,t);return e}function Kg(r){let e=$g;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function vt(){return Hs()}function Wg(){return Hs()}function Hs(){return new Ut(r=>r.toString(),(r,e)=>r.isEqual(e))}const oT=new me(B.comparator),aT=new he(B.comparator);function se(...r){let e=aT;for(const t of r)e=e.add(t);return e}const cT=new he(X);function Bl(){return cT}/**
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
 */function zl(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ri(e)?"-0":e}}function Hg(r){return{integerValue:""+r}}function lT(r,e){return pg(e)?Hg(e):zl(r,e)}/**
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
 */class ua{constructor(){this._=void 0}}function uT(r,e,t){return r instanceof ui?function(s,i){const o={fields:{[Rg]:{stringValue:Sg},[Cg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ol(i)&&(i=ia(i)),i&&(o.fields[Pg]=i),{mapValue:o}}(t,e):r instanceof $r?Jg(r,e):r instanceof Kr?Yg(r,e):function(s,i){const o=Qg(s,i),c=Vd(o)+Vd(s.Re);return Mc(o)&&Mc(s.Re)?Hg(c):zl(s.serializer,c)}(r,e)}function hT(r,e,t){return r instanceof $r?Jg(r,e):r instanceof Kr?Yg(r,e):t}function Qg(r,e){return r instanceof hi?function(n){return Mc(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class ui extends ua{}class $r extends ua{constructor(e){super(),this.elements=e}}function Jg(r,e){const t=Xg(e);for(const n of r.elements)t.some(s=>wt(s,n))||t.push(n);return{arrayValue:{values:t}}}class Kr extends ua{constructor(e){super(),this.elements=e}}function Yg(r,e){let t=Xg(e);for(const n of r.elements)t=t.filter(s=>!wt(s,n));return{arrayValue:{values:t}}}class hi extends ua{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Vd(r){return Ee(r.integerValue||r.doubleValue)}function Xg(r){return li(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class dT{constructor(e,t){this.field=e,this.transform=t}}function fT(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof $r&&s instanceof $r||n instanceof Kr&&s instanceof Kr?Or(n.elements,s.elements,wt):n instanceof hi&&s instanceof hi?wt(n.Re,s.Re):n instanceof ui&&s instanceof ui}(r.transform,e.transform)}class pT{constructor(e,t){this.version=e,this.transformResults=t}}class Xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xe}static exists(e){return new Xe(void 0,e)}static updateTime(e){return new Xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function po(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class ha{}function Zg(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new da(r.key,Xe.none()):new ss(r.key,r.data,Xe.none());{const t=r.data,n=Je.empty();let s=new he(we.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new In(r.key,n,new ot(s.toArray()),Xe.none())}}function gT(r,e,t){r instanceof ss?function(s,i,o){const c=s.value.clone(),l=Nd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof In?function(s,i,o){if(!po(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Nd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(em(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Qs(r,e,t,n){return r instanceof ss?function(i,o,c,l){if(!po(i.precondition,o))return c;const h=i.value.clone(),f=Od(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof In?function(i,o,c,l){if(!po(i.precondition,o))return c;const h=Od(i.fieldTransforms,l,o),f=o.data;return f.setAll(em(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(i,o,c){return po(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function mT(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Qg(n.transform,s||null);i!=null&&(t===null&&(t=Je.empty()),t.set(n.field,i))}return t||null}function Dd(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Or(n,s,(i,o)=>fT(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ss extends ha{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class In extends ha{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function em(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Nd(r,e,t){const n=new Map;H(r.length===t.length,32656,{Ve:t.length,me:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,c=e.data.field(i.field);n.set(i.field,hT(o,c,t[s]))}return n}function Od(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,uT(i,o,e))}return n}class da extends ha{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tm extends ha{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jl{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&gT(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Qs(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Qs(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Wg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Zg(o,c);l!==null&&n.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Q.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&Or(this.mutations,e.mutations,(t,n)=>Dd(t,n))&&Or(this.baseMutations,e.baseMutations,(t,n)=>Dd(t,n))}}class Gl{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){H(e.mutations.length===n.length,58842,{fe:e.mutations.length,ge:n.length});let s=function(){return oT}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Gl(e,t,n,s)}}/**
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
 */class ql{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _T{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ce,ce;function yT(r){switch(r){case O.OK:return G(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return G(15467,{code:r})}}function nm(r){if(r===void 0)return Re("GRPC error has no .code"),O.UNKNOWN;switch(r){case Ce.OK:return O.OK;case Ce.CANCELLED:return O.CANCELLED;case Ce.UNKNOWN:return O.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return O.INTERNAL;case Ce.UNAVAILABLE:return O.UNAVAILABLE;case Ce.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ce.NOT_FOUND:return O.NOT_FOUND;case Ce.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ce.ABORTED:return O.ABORTED;case Ce.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ce.DATA_LOSS:return O.DATA_LOSS;default:return G(39323,{code:r})}}(ce=Ce||(Ce={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const vT=new ln([4294967295,4294967295],0);function Md(r){const e=og().encode(r),t=new Zp;return t.update(e),new Uint8Array(t.digest())}function Ld(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ln([t,n],0),new ln([s,i],0)]}class $l{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Fs(`Invalid padding: ${t}`);if(n<0)throw new Fs(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=ln.fromNumber(this.pe)}we(e,t,n){let s=e.add(t.multiply(ln.fromNumber(n)));return s.compare(vT)===1&&(s=new ln([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Md(e),[n,s]=Ld(t);for(let i=0;i<this.hashCount;i++){const o=this.we(n,s,i);if(!this.be(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new $l(i,s,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.pe===0)return;const t=Md(e),[n,s]=Ld(t);for(let i=0;i<this.hashCount;i++){const o=this.we(n,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ai{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Si.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ai(Q.min(),s,new me(X),nt(),se())}}class Si{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Si(n,t,se(),se(),se())}}/**
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
 */class go{constructor(e,t,n,s){this.De=e,this.removedTargetIds=t,this.key=n,this.ve=s}}class rm{constructor(e,t){this.targetId=e,this.Ce=t}}class sm{constructor(e,t,n=Pe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Fd{constructor(){this.Fe=0,this.Me=Ud(),this.xe=Pe.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=se(),t=se(),n=se();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:G(38017,{changeType:i})}}),new Si(this.xe,this.Oe,e,t,n)}Qe(){this.Ne=!1,this.Me=Ud()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,H(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class IT{constructor(e){this.ze=e,this.je=new Map,this.He=nt(),this.Je=Qi(),this.Ye=Qi(),this.Ze=new me(X)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const n=this.rt(t);switch(e.state){case 0:this.it(t)&&n.ke(e.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(e.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(t);break;case 3:this.it(t)&&(n.Ge(),n.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),n.ke(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((n,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,n=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(Oo(i))if(n===0){const o=new B(i.path);this.tt(t,o,Ae.newNoDocument(o,Q.min()))}else H(n===1,20013,{expectedCount:n});else{const o=this.ut(t);if(o!==n){const c=this.ct(e),l=c?this.lt(c,e,o):1;if(l!==0){this.st(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Mt(n).toUint8Array()}catch(l){if(l instanceof Ag)return ti("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new $l(o,s,i)}catch(l){return ti(l instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.pe===0?null:c}lt(e,t,n){return t.Ce.count===n-this.Tt(e,t.targetId)?0:2}Tt(e,t){const n=this.ze.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.ze.Pt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,o)=>{const c=this._t(o);if(c){if(i.current&&Oo(c.target)){const l=new B(c.target.path);this.Et(l).has(o)||this.dt(o,l)||this.tt(o,l,Ae.newNoDocument(l,e))}i.Le&&(t.set(o,i.qe()),i.Qe())}});let n=se();this.Ye.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this._t(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Ai(e,t,this.Ze,this.He,n);return this.He=nt(),this.Je=Qi(),this.Ye=Qi(),this.Ze=new me(X),s}et(e,t){if(!this.it(e))return;const n=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,n),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,n){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),n&&(this.He=this.He.insert(t,n))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Fd,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new he(X),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new he(X),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Fd),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Qi(){return new me(B.comparator)}function Ud(){return new me(B.comparator)}const ET={asc:"ASCENDING",desc:"DESCENDING"},wT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bT={and:"AND",or:"OR"};class TT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function zc(r,e){return r.useProto3Json||ta(e)?e:{value:e}}function Wr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function im(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function AT(r,e){return Wr(r,e.toTimestamp())}function Ke(r){return H(!!r,49232),Q.fromTimestamp(function(t){const n=Ot(t);return new be(n.seconds,n.nanos)}(r))}function Kl(r,e){return jc(r,e).canonicalString()}function jc(r,e){const t=function(s){return new ue(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function om(r){const e=ue.fromString(r);return H(gm(e),10190,{key:e.toString()}),e}function Lo(r,e){return Kl(r.databaseId,e.path)}function Bn(r,e){const t=om(e);if(t.get(1)!==r.databaseId.projectId)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new B(lm(t))}function am(r,e){return Kl(r.databaseId,e)}function cm(r){const e=om(r);return e.length===4?ue.emptyPath():lm(e)}function Gc(r){return new ue(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function lm(r){return H(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Bd(r,e,t){return{name:Lo(r,e),fields:t.value.mapValue.fields}}function ST(r,e,t){const n=Bn(r,e.name),s=Ke(e.updateTime),i=e.createTime?Ke(e.createTime):Q.min(),o=new Je({mapValue:{fields:e.fields}}),c=Ae.newFoundDocument(n,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function RT(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(H(f===void 0||typeof f=="string",58123),Pe.fromBase64String(f||"")):(H(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Pe.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?O.UNKNOWN:nm(h.code);return new z(f,h.message||"")}(o);t=new sm(n,s,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Bn(r,n.document.name),i=Ke(n.document.updateTime),o=n.document.createTime?Ke(n.document.createTime):Q.min(),c=new Je({mapValue:{fields:n.document.fields}}),l=Ae.newFoundDocument(s,i,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new go(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Bn(r,n.document),i=n.readTime?Ke(n.readTime):Q.min(),o=Ae.newNoDocument(s,i),c=n.removedTargetIds||[];t=new go([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Bn(r,n.document),i=n.removedTargetIds||[];t=new go([],i,s,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new _T(s,i),c=n.targetId;t=new rm(c,o)}}return t}function Fo(r,e){let t;if(e instanceof ss)t={update:Bd(r,e.key,e.value)};else if(e instanceof da)t={delete:Lo(r,e.key)};else if(e instanceof In)t={update:Bd(r,e.key,e.data),updateMask:DT(e.fieldMask)};else{if(!(e instanceof tm))return G(16599,{ft:e.type});t={verify:Lo(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const c=o.transform;if(c instanceof ui)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof $r)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Kr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof hi)return{fieldPath:o.field.canonicalString(),increment:c.Re};throw G(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:AT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G(27497)}(r,e.precondition)),t}function qc(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Xe.updateTime(Ke(i.updateTime)):i.exists!==void 0?Xe.exists(i.exists):Xe.none()}(e.currentDocument):Xe.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)H(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),l=new ui;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new $r(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new Kr(f)}else"increment"in c?l=new hi(o,c.increment):G(16584,{proto:c});const h=we.fromServerFormat(c.fieldPath);return new dT(h,l)}(r,s)):[];if(e.update){e.update.name;const s=Bn(r,e.update.name),i=new Je({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new ot(h.map(f=>we.fromServerFormat(f)))}(e.updateMask);return new In(s,i,o,t,n)}return new ss(s,i,t,n)}if(e.delete){const s=Bn(r,e.delete);return new da(s,t)}if(e.verify){const s=Bn(r,e.verify);return new tm(s,t)}return G(1463,{proto:e})}function PT(r,e){return r&&r.length>0?(H(e!==void 0,14353),r.map(t=>function(s,i){let o=s.updateTime?Ke(s.updateTime):Ke(i);return o.isEqual(Q.min())&&(o=Ke(i)),new pT(o,s.transformResults||[])}(t,e))):[]}function um(r,e){return{documents:[am(r,e.path)]}}function hm(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=am(r,s);const i=function(h){if(h.length!==0)return pm(de.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:yr(m.field),direction:xT(m.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=zc(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:t,parent:s}}function dm(r){let e=cm(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){H(n===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const m=fm(p);return m instanceof de&&Ul(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(S){return new No(vr(S.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(t.orderBy));let c=null;t.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,ta(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(p){const m=!!p.before,w=p.values||[];return new Gr(w,m)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const m=!p.before,w=p.values||[];return new Gr(w,m)}(t.endAt)),zg(e,s,o,i,c,"F",l,h)}function CT(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function fm(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=vr(t.unaryFilter.field);return ae.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=vr(t.unaryFilter.field);return ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vr(t.unaryFilter.field);return ae.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vr(t.unaryFilter.field);return ae.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(r):r.fieldFilter!==void 0?function(t){return ae.create(vr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return de.create(t.compositeFilter.filters.map(n=>fm(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(t.compositeFilter.op))}(r):G(30097,{filter:r})}function xT(r){return ET[r]}function kT(r){return wT[r]}function VT(r){return bT[r]}function yr(r){return{fieldPath:r.canonicalString()}}function vr(r){return we.fromServerFormat(r.fieldPath)}function pm(r){return r instanceof ae?function(t){if(t.op==="=="){if(Td(t.value))return{unaryFilter:{field:yr(t.field),op:"IS_NAN"}};if(bd(t.value))return{unaryFilter:{field:yr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Td(t.value))return{unaryFilter:{field:yr(t.field),op:"IS_NOT_NAN"}};if(bd(t.value))return{unaryFilter:{field:yr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yr(t.field),op:kT(t.op),value:t.value}}}(r):r instanceof de?function(t){const n=t.getFilters().map(s=>pm(s));return n.length===1?n[0]:{compositeFilter:{op:VT(t.op),filters:n}}}(r):G(54877,{filter:r})}function DT(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function gm(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class xt{constructor(e,t,n,s,i=Q.min(),o=Q.min(),c=Pe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class mm{constructor(e){this.wt=e}}function NT(r,e){let t;if(e.document)t=ST(r.wt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=B.fromSegments(e.noDocument.path),s=Jn(e.noDocument.readTime);t=Ae.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return G(56709);{const n=B.fromSegments(e.unknownDocument.path),s=Jn(e.unknownDocument.version);t=Ae.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new be(s[0],s[1]);return Q.fromTimestamp(i)}(e.readTime)),t}function zd(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Uo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:Lo(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Wr(i,o.version.toTimestamp()),createTime:Wr(i,o.createTime.toTimestamp())}}(r.wt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Qn(e.version)};else{if(!e.isUnknownDocument())return G(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:Qn(e.version)}}return n}function Uo(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function Qn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Jn(r){const e=new be(r.seconds,r.nanoseconds);return Q.fromTimestamp(e)}function Dn(r,e){const t=(e.baseMutations||[]).map(i=>qc(r.wt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>qc(r.wt,i)),s=be.fromMillis(e.localWriteTimeMs);return new jl(e.batchId,s,t,n)}function Us(r){const e=Jn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Jn(r.lastLimboFreeSnapshotVersion):Q.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const o=i.documents.length;return H(o===1,1966,{count:o}),rt(ca(cm(i.documents[0])))}(r.query):function(i){return rt(dm(i))}(r.query),new xt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,Pe.fromBase64String(r.resumeToken))}function _m(r,e){const t=Qn(e.snapshotVersion),n=Qn(e.lastLimboFreeSnapshotVersion);let s;s=Oo(e.target)?um(r.wt,e.target):hm(r.wt,e.target).gt;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Hn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function ym(r){const e=dm({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Bc(e,e.limit,"L"):e}function rc(r,e){return new ql(e.largestBatchId,qc(r.wt,e.overlayMutation))}function jd(r,e){const t=e.path.lastSegment();return[r,Ge(e.path.popLast()),t]}function Gd(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:Qn(n.readTime),documentKey:Ge(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class OT{getBundleMetadata(e,t){return qd(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:Jn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return qd(e).put(function(s){return{bundleId:s.id,createTime:Qn(Ke(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return $d(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:ym(i.bundledQuery),readTime:Jn(i.readTime)}}(n)})}saveNamedQuery(e,t){return $d(e).put(function(s){return{name:s.name,readTime:Qn(Ke(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function qd(r){return Ve(r,na)}function $d(r){return Ve(r,ra)}/**
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
 */class fa{constructor(e,t){this.serializer=e,this.userId=t}static bt(e,t){const n=t.uid||"";return new fa(e,n)}getOverlay(e,t){return Ss(e).get(jd(this.userId,t)).next(n=>n?rc(this.serializer,n):null)}getOverlays(e,t){const n=vt();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const c=new ql(t,o);s.push(this.St(e,c))}),P.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(Ge(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Ss(e).X(Dc,c))}),P.waitFor(i)}getOverlaysForCollection(e,t,n){const s=vt(),i=Ge(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Ss(e).J(Dc,o).next(c=>{for(const l of c){const h=rc(this.serializer,l);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=vt();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ss(e).te({index:Ig,range:c},(l,h,f)=>{const p=rc(this.serializer,h);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>i)}St(e,t){return Ss(e).put(function(s,i,o){const[c,l,h]=jd(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Fo(s.wt,o.mutation)}}(this.serializer,this.userId,t))}}function Ss(r){return Ve(r,sa)}/**
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
 */class MT{Dt(e){return Ve(e,Dl)}getSessionToken(e){return this.Dt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?Pe.fromUint8Array(n):Pe.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Nn{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(Ee(e.integerValue));else if("doubleValue"in e){const n=Ee(e.doubleValue);isNaN(n)?this.Mt(t,13):(this.Mt(t,15),ri(n)?t.xt(0):t.xt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Mt(t,20),typeof n=="string"&&(n=Ot(n)),t.Ot(`${n.seconds||""}`),t.xt(n.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(Mt(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Mt(t,45),t.xt(n.latitude||0),t.xt(n.longitude||0)}else"mapValue"in e?kg(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):oa(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):G(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){const n=e.fields||{};this.Mt(t,55);for(const s of Object.keys(n))this.Nt(s,t),this.Ct(n[s],t)}qt(e,t){var n,s;const i=e.fields||{};this.Mt(t,53);const o=zr,c=((s=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.Mt(t,15),t.xt(Ee(c)),this.Nt(o,t),this.Ct(i[o],t)}$t(e,t){const n=e.values||[];this.Mt(t,50);for(const s of n)this.Ct(s,t)}kt(e,t){this.Mt(t,37),B.fromName(e).path.forEach(n=>{this.Mt(t,60),this.Kt(n,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}Nn.Wt=new Nn;/**
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
 */const ur=255;function LT(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function Kd(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=LT(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class FT{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.zt(n.value),n=t.next();this.jt()}Ht(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Yt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.zt(n);else if(n<2048)this.zt(960|n>>>6),this.zt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.zt(480|n>>>12),this.zt(128|63&n>>>6),this.zt(128|63&n);else{const s=t.codePointAt(0);this.zt(240|s>>>18),this.zt(128|63&s>>>12),this.zt(128|63&s>>>6),this.zt(128|63&s)}}this.jt()}Xt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Yt()}en(e){const t=this.tn(e),n=Kd(t);this.nn(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}rn(e){const t=this.tn(e),n=Kd(t);this.nn(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}sn(){this._n(ur),this._n(255)}an(){this.un(ur),this.un(255)}reset(){this.position=0}seed(e){this.nn(e.length),this.buffer.set(e,this.position),this.position+=e.length}cn(){return this.buffer.slice(0,this.position)}tn(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}zt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===ur?(this._n(ur),this._n(0)):this._n(t)}Jt(e){const t=255&e;t===0?(this.un(0),this.un(255)):t===ur?(this.un(ur),this.un(0)):this.un(e)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(e){this.nn(1),this.buffer[this.position++]=e}un(e){this.nn(1),this.buffer[this.position++]=~e}nn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class UT{constructor(e){this.ln=e}Lt(e){this.ln.Gt(e)}Ot(e){this.ln.Zt(e)}xt(e){this.ln.en(e)}Ft(){this.ln.sn()}}class BT{constructor(e){this.ln=e}Lt(e){this.ln.Ht(e)}Ot(e){this.ln.Xt(e)}xt(e){this.ln.rn(e)}Ft(){this.ln.an()}}class Rs{constructor(){this.ln=new FT,this.hn=new UT(this.ln),this.Pn=new BT(this.ln)}seed(e){this.ln.seed(e)}Tn(e){return e===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
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
 */class On{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}In(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new On(this.indexId,this.documentKey,this.arrayValue,n)}}function $t(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=Wd(r.arrayValue,e.arrayValue),t!==0?t:(t=Wd(r.directionalValue,e.directionalValue),t!==0?t:B.comparator(r.documentKey,e.documentKey)))}function Wd(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class Hd{constructor(e){this.En=new he((t,n)=>we.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.An=[];for(const t of e.filters){const n=t;n.isInequality()?this.En=this.En.add(n):this.An.push(n)}}get Rn(){return this.En.size>1}Vn(e){if(H(e.collectionGroup===this.collectionId,49279),this.Rn)return!1;const t=xc(e);if(t!==void 0&&!this.mn(t))return!1;const n=xn(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.mn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.En.size>0){const c=this.En.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=n[i];if(!this.fn(c,l)||!this.gn(this.dn[o++],l))return!1}++i}for(;i<n.length;++i){const c=n[i];if(o>=this.dn.length||!this.gn(this.dn[o++],c))return!1}return!0}pn(){if(this.Rn)return null;let e=new he(we.comparator);const t=[];for(const n of this.An)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new ao(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new ao(n.field,0))}for(const n of this.dn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new ao(n.field,n.dir==="asc"?0:1)));return new Ro(Ro.UNKNOWN_ID,this.collectionId,t,ni.empty())}mn(e){for(const t of this.An)if(this.fn(t,e))return!0;return!1}fn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}gn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function vm(r){var e,t;if(H(r instanceof ae||r instanceof de,20012),r instanceof ae){if(r instanceof Bg){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>ae.create(r.field,"==",i)))||[];return de.create(s,"or")}return r}const n=r.filters.map(s=>vm(s));return de.create(n,r.op)}function zT(r){if(r.getFilters().length===0)return[];const e=Wc(vm(r));return H(Im(e),7391),$c(e)||Kc(e)?[e]:e.getFilters()}function $c(r){return r instanceof ae}function Kc(r){return r instanceof de&&Ul(r)}function Im(r){return $c(r)||Kc(r)||function(t){if(t instanceof de&&Lc(t)){for(const n of t.getFilters())if(!$c(n)&&!Kc(n))return!1;return!0}return!1}(r)}function Wc(r){if(H(r instanceof ae||r instanceof de,34018),r instanceof ae)return r;if(r.filters.length===1)return Wc(r.filters[0]);const e=r.filters.map(n=>Wc(n));let t=de.create(e,r.op);return t=Bo(t),Im(t)?t:(H(t instanceof de,64498),H(qr(t),40251),H(t.filters.length>1,57927),t.filters.reduce((n,s)=>Wl(n,s)))}function Wl(r,e){let t;return H(r instanceof ae||r instanceof de,38388),H(e instanceof ae||e instanceof de,25473),t=r instanceof ae?e instanceof ae?function(s,i){return de.create([s,i],"and")}(r,e):Qd(r,e):e instanceof ae?Qd(e,r):function(s,i){if(H(s.filters.length>0&&i.filters.length>0,48005),qr(s)&&qr(i))return Lg(s,i.getFilters());const o=Lc(s)?s:i,c=Lc(s)?i:s,l=o.filters.map(h=>Wl(h,c));return de.create(l,"or")}(r,e),Bo(t)}function Qd(r,e){if(qr(e))return Lg(e,r.getFilters());{const t=e.filters.map(n=>Wl(r,n));return de.create(t,"or")}}function Bo(r){if(H(r instanceof ae||r instanceof de,11850),r instanceof ae)return r;const e=r.getFilters();if(e.length===1)return Bo(e[0]);if(Og(r))return r;const t=e.map(s=>Bo(s)),n=[];return t.forEach(s=>{s instanceof ae?n.push(s):s instanceof de&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:de.create(n,r.op)}/**
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
 */class jT{constructor(){this.yn=new Hl}addToCollectionParentIndex(e,t){return this.yn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.yn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(it.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(it.min())}updateCollectionGroup(e,t,n){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class Hl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new he(ue.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new he(ue.comparator)).toArray()}}/**
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
 */const Jd="IndexedDbIndexManager",Ji=new Uint8Array(0);class GT{constructor(e,t){this.databaseId=t,this.wn=new Hl,this.bn=new Ut(n=>Hn(n),(n,s)=>bi(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.wn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.wn.add(t)});const i={collectionId:n,parent:Ge(s)};return Yd(e).put(i)}return P.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[cg(t),""],!1,!0);return Yd(e).J(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(yt(o.parent))}return n})}addFieldIndex(e,t){const n=Ps(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=dr(e);return i.next(c=>{o.put(Gd(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Ps(e),s=dr(e),i=hr(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ps(e),n=hr(e),s=dr(e);return t.X().next(()=>n.X()).next(()=>s.X())}createTargetIndexes(e,t){return P.forEach(this.Sn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new Hd(n).pn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=hr(e);let s=!0;const i=new Map;return P.forEach(this.Sn(t),o=>this.Dn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=se();const c=[];return P.forEach(i,(l,h)=>{L(Jd,`Using index ${function(D){return`id=${D.indexId}|cg=${D.collectionGroup}|f=${D.fields.map(N=>`${N.fieldPath}:${N.kind}`).join(",")}`}(l)} to execute ${Hn(t)}`);const f=function(D,N){const F=xc(N);if(F===void 0)return null;for(const M of Mo(D,F.fieldPath))switch(M.op){case"array-contains-any":return M.value.arrayValue.values||[];case"array-contains":return[M.value]}return null}(h,l),p=function(D,N){const F=new Map;for(const M of xn(N))for(const v of Mo(D,M.fieldPath))switch(v.op){case"==":case"in":F.set(M.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return F.set(M.fieldPath.canonicalString(),v.value),Array.from(F.values())}return null}(h,l),m=function(D,N){const F=[];let M=!0;for(const v of xn(N)){const _=v.kind===0?Cd(D,v.fieldPath,D.startAt):xd(D,v.fieldPath,D.startAt);F.push(_.value),M&&(M=_.inclusive)}return new Gr(F,M)}(h,l),w=function(D,N){const F=[];let M=!0;for(const v of xn(N)){const _=v.kind===0?xd(D,v.fieldPath,D.endAt):Cd(D,v.fieldPath,D.endAt);F.push(_.value),M&&(M=_.inclusive)}return new Gr(F,M)}(h,l),S=this.vn(l,h,m),C=this.vn(l,h,w),T=this.Cn(l,h,p),R=this.Fn(l.indexId,f,S,m.inclusive,C,w.inclusive,T);return P.forEach(R,k=>n.Z(k,t.limit).next(D=>{D.forEach(N=>{const F=B.fromSegments(N.documentKey);o.has(F)||(o=o.add(F),c.push(F))})}))}).next(()=>c)}return P.resolve(null)})}Sn(e){let t=this.bn.get(e);return t||(e.filters.length===0?t=[e]:t=zT(de.create(e.filters,"and")).map(n=>Uc(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.bn.set(e,t),t)}Fn(e,t,n,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(n.length,i.length),h=l/(t!=null?t.length:1),f=[];for(let p=0;p<l;++p){const m=t?this.Mn(t[p/h]):Ji,w=this.xn(e,m,n[p%h],s),S=this.On(e,m,i[p%h],o),C=c.map(T=>this.xn(e,m,T,!0));f.push(...this.createRange(w,S,C))}return f}xn(e,t,n,s){const i=new On(e,B.empty(),t,n);return s?i:i.In()}On(e,t,n,s){const i=new On(e,B.empty(),t,n);return s?i.In():i}Dn(e,t){const n=new Hd(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)n.Vn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const s=this.Sn(t);return P.forEach(s,i=>this.Dn(e,i).next(o=>{o?n!==0&&o.fields.length<function(l){let h=new he(we.comparator),f=!1;for(const p of l.filters)for(const m of p.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?f=!0:h=h.add(m.field));for(const p of l.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}Nn(e,t){const n=new Rs;for(const s of xn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Tn(s.kind);Nn.Wt.vt(i,o)}return n.cn()}Mn(e){const t=new Rs;return Nn.Wt.vt(e,t.Tn(0)),t.cn()}Bn(e,t){const n=new Rs;return Nn.Wt.vt(Fl(this.databaseId,t),n.Tn(function(i){const o=xn(i);return o.length===0?0:o[o.length-1].kind}(e))),n.cn()}Cn(e,t,n){if(n===null)return[];let s=[];s.push(new Rs);let i=0;for(const o of xn(e)){const c=n[i++];for(const l of s)if(this.Ln(t,o.fieldPath)&&li(c))s=this.kn(s,o,c);else{const h=l.Tn(o.kind);Nn.Wt.vt(c,h)}}return this.qn(s)}vn(e,t,n){return this.Cn(e,t,n.position)}qn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].cn();return t}kn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const c of s){const l=new Rs;l.seed(c.cn()),Nn.Wt.vt(o,l.Tn(t.kind)),i.push(l)}return i}Ln(e,t){return!!e.filters.find(n=>n instanceof ae&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Ps(e),s=dr(e);return(t?n.J(Vc,IDBKeyRange.bound(t,t)):n.J()).next(i=>{const o=[];return P.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(f,p){const m=p?new ni(p.sequenceNumber,new it(Jn(p.readTime),new B(yt(p.documentKey)),p.largestBatchId)):ni.empty(),w=f.fields.map(([S,C])=>new ao(we.fromServerFormat(S),C));return new Ro(f.indexId,f.collectionGroup,w,m)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:X(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=Ps(e),i=dr(e);return this.Qn(e).next(o=>s.J(Vc,IDBKeyRange.bound(t,t)).next(c=>P.forEach(c,l=>i.put(Gd(l.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return P.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(n.set(s.collectionGroup,c),P.forEach(c,l=>this.$n(e,s,l).next(h=>{const f=this.Un(i,l);return h.isEqual(f)?P.resolve():this.Kn(e,i,l,h,f)}))))})}Wn(e,t,n,s){return hr(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.Bn(n,t.key),documentKey:t.key.path.toArray()})}Gn(e,t,n,s){return hr(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.Bn(n,t.key),t.key.path.toArray()])}$n(e,t,n){const s=hr(e);let i=new he($t);return s.te({index:vg,range:IDBKeyRange.only([n.indexId,this.uid,this.Bn(n,t)])},(o,c)=>{i=i.add(new On(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Un(e,t){let n=new he($t);const s=this.Nn(t,e);if(s==null)return n;const i=xc(t);if(i!=null){const o=e.data.field(i.fieldPath);if(li(o))for(const c of o.arrayValue.values||[])n=n.add(new On(t.indexId,e.key,this.Mn(c),s))}else n=n.add(new On(t.indexId,e.key,Ji,s));return n}Kn(e,t,n,s,i){L(Jd,"Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,p,m){const w=l.getIterator(),S=h.getIterator();let C=lr(w),T=lr(S);for(;C||T;){let R=!1,k=!1;if(C&&T){const D=f(C,T);D<0?k=!0:D>0&&(R=!0)}else C!=null?k=!0:R=!0;R?(p(T),T=lr(S)):k?(m(C),C=lr(w)):(C=lr(w),T=lr(S))}}(s,i,$t,c=>{o.push(this.Wn(e,t,n,c))},c=>{o.push(this.Gn(e,t,n,c))}),P.waitFor(o)}Qn(e){let t=1;return dr(e).te({index:yg,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>$t(o,c)).filter((o,c,l)=>!c||$t(o,l[c-1])!==0);const s=[];s.push(e);for(const o of n){const c=$t(o,e),l=$t(o,t);if(c===0)s[0]=e.In();else if(c>0&&l<0)s.push(o),s.push(o.In());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.zn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Ji,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Ji,[]];i.push(IDBKeyRange.bound(c,l))}return i}zn(e,t){return $t(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Xd)}getMinOffset(e,t){return P.mapArray(this.Sn(t),n=>this.Dn(e,n).next(s=>s||G(44426))).next(Xd)}}function Yd(r){return Ve(r,oi)}function hr(r){return Ve(r,Vo)}function Ps(r){return Ve(r,Vl)}function dr(r){return Ve(r,ko)}function Xd(r){H(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Cl(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new it(e.readTime,e.documentKey,t)}/**
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
 */const Zd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Em=41943040;class je{static withCacheSize(e){return new je(e,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function wm(r,e,t){const n=r.store(lt),s=r.store(Lr),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=n.te({range:o},(f,p,m)=>(c++,m.delete()));i.push(l.next(()=>{H(c===1,47070,{batchId:t.batchId})}));const h=[];for(const f of t.mutations){const p=gg(e,f.key.path,t.batchId);i.push(s.delete(p)),h.push(f.key)}return P.waitFor(i).next(()=>h)}function zo(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw G(14731);e=r.noDocument}return JSON.stringify(e).length}/**
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
 */je.DEFAULT_COLLECTION_PERCENTILE=10,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,je.DEFAULT=new je(Em,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),je.DISABLED=new je(-1,0,0);class pa{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.jn={}}static bt(e,t,n,s){H(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new pa(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Kt(e).te({index:Mn,range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=Ir(e),o=Kt(e);return o.add({}).next(c=>{H(typeof c=="number",49019);const l=new jl(c,t,n,s),h=function(w,S,C){const T=C.baseMutations.map(k=>Fo(w.wt,k)),R=C.mutations.map(k=>Fo(w.wt,k));return{userId:S,batchId:C.batchId,localWriteTimeMs:C.localWriteTime.toMillis(),baseMutations:T,mutations:R}}(this.serializer,this.userId,l),f=[];let p=new he((m,w)=>X(m.canonicalString(),w.canonicalString()));for(const m of s){const w=gg(this.userId,m.key.path,c);p=p.add(m.key.path.popLast()),f.push(o.put(h)),f.push(i.put(w,Ib))}return p.forEach(m=>{f.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.jn[c]=l.keys()}),P.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return Kt(e).get(t).next(n=>n?(H(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),Dn(this.serializer,n)):null)}Hn(e,t){return this.jn[t]?P.resolve(this.jn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.jn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Kt(e).te({index:Mn,range:s},(o,c,l)=>{c.userId===this.userId&&(H(c.batchId>=n,47524,{Jn:n}),i=Dn(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Fn;return Kt(e).te({index:Mn,range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Fn],[this.userId,Number.POSITIVE_INFINITY]);return Kt(e).J(Mn,t).next(n=>n.map(s=>Dn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=co(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return Ir(e).te({range:s},(o,c,l)=>{const[h,f,p]=o,m=yt(f);if(h===this.userId&&t.path.isEqual(m))return Kt(e).get(p).next(w=>{if(!w)throw G(61480,{Yn:o,batchId:p});H(w.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:w.userId,batchId:p}),i.push(Dn(this.serializer,w))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new he(X);const s=[];return t.forEach(i=>{const o=co(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=Ir(e).te({range:c},(h,f,p)=>{const[m,w,S]=h,C=yt(w);m===this.userId&&i.path.isEqual(C)?n=n.add(S):p.done()});s.push(l)}),P.waitFor(s).next(()=>this.Zn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=co(this.userId,n),o=IDBKeyRange.lowerBound(i);let c=new he(X);return Ir(e).te({range:o},(l,h,f)=>{const[p,m,w]=l,S=yt(m);p===this.userId&&n.isPrefixOf(S)?S.length===s&&(c=c.add(w)):f.done()}).next(()=>this.Zn(e,c))}Zn(e,t){const n=[],s=[];return t.forEach(i=>{s.push(Kt(e).get(i).next(o=>{if(o===null)throw G(35274,{batchId:i});H(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(Dn(this.serializer,o))}))}),P.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return wm(e.he,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Xn(t.batchId)}),P.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Xn(e){delete this.jn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return P.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Ir(e).te({range:n},(i,o,c)=>{if(i[0]===this.userId){const l=yt(i[1]);s.push(l)}else c.done()}).next(()=>{H(s.length===0,56720,{er:s.map(i=>i.canonicalString())})})})}containsKey(e,t){return bm(e,this.userId,t)}tr(e){return Tm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Fn,lastStreamToken:""})}}function bm(r,e,t){const n=co(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return Ir(r).te({range:i,ee:!0},(c,l,h)=>{const[f,p,m]=c;f===e&&p===s&&(o=!0),h.done()}).next(()=>o)}function Kt(r){return Ve(r,lt)}function Ir(r){return Ve(r,Lr)}function Tm(r){return Ve(r,si)}/**
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
 */class Yn{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new Yn(0)}static ir(){return new Yn(-1)}}/**
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
 */class qT{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.sr(e).next(t=>{const n=new Yn(t.highestTargetId);return t.highestTargetId=n.next(),this._r(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.sr(e).next(t=>Q.fromTimestamp(new be(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.sr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.sr(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this._r(e,s)))}addTargetData(e,t){return this.ar(e,t).next(()=>this.sr(e).next(n=>(n.targetCount+=1,this.ur(t,n),this._r(e,n))))}updateTargetData(e,t){return this.ar(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>fr(e).delete(t.targetId)).next(()=>this.sr(e)).next(n=>(H(n.targetCount>0,8065),n.targetCount-=1,this._r(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return fr(e).te((o,c)=>{const l=Us(c);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>P.waitFor(i)).next(()=>s)}forEachTarget(e,t){return fr(e).te((n,s)=>{const i=Us(s);t(i)})}sr(e){return ef(e).get(xo).next(t=>(H(t!==null,2888),t))}_r(e,t){return ef(e).put(xo,t)}ar(e,t){return fr(e).put(_m(this.serializer,t))}ur(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.sr(e).next(t=>t.targetCount)}getTargetData(e,t){const n=Hn(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return fr(e).te({range:s,index:_g},(o,c,l)=>{const h=Us(c);bi(t,h.target)&&(i=h,l.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=nn(e);return t.forEach(o=>{const c=Ge(o.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(e,n,o))}),P.waitFor(s)}removeMatchingKeys(e,t,n){const s=nn(e);return P.forEach(t,i=>{const o=Ge(i.path);return P.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=nn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=nn(e);let i=se();return s.te({range:n,ee:!0},(o,c,l)=>{const h=yt(o[1]),f=new B(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const n=Ge(t.path),s=IDBKeyRange.bound([n],[cg(n)],!1,!0);let i=0;return nn(e).te({index:kl,ee:!0,range:s},([o,c],l,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}Rt(e,t){return fr(e).get(t).next(n=>n?Us(n):null)}}function fr(r){return Ve(r,Fr)}function ef(r){return Ve(r,Un)}function nn(r){return Ve(r,Ur)}/**
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
 */const tf="LruGarbageCollector",Am=1048576;function nf([r,e],[t,n]){const s=X(r,t);return s===0?X(e,n):s}class $T{constructor(e){this.cr=e,this.buffer=new he(nf),this.lr=0}hr(){return++this.lr}Pr(e){const t=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();nf(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Sm{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){L(tf,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){vn(t)?L(tf,"Ignoring IndexedDB error during garbage collection: ",t):await yn(t)}await this.Ir(3e5)})}}class KT{constructor(e,t){this.Er=e,this.params=t}calculateTargetCount(e,t){return this.Er.dr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Ye.le);const n=new $T(t);return this.Er.forEachTarget(e,s=>n.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>n.Pr(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Er.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Er.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Zd)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zd):this.Rr(e,t))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,t){let n,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(n=p,c=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(h=Date.now(),mr()<=oe.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Rm(r,e){return new KT(r,e)}/**
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
 */class WT{constructor(e,t){this.db=e,this.garbageCollector=Rm(this,t)}dr(e){const t=this.Vr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}Vr(e){let t=0;return this.Ar(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ar(e,t){return this.mr(e,(n,s)=>t(s))}addReference(e,t,n){return Yi(e,n)}removeReference(e,t,n){return Yi(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Yi(e,t)}gr(e,t){return function(s,i){let o=!1;return Tm(s).ne(c=>bm(s,c,i).next(l=>(l&&(o=!0),P.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.mr(e,(o,c)=>{if(c<=t){const l=this.gr(e,o).next(h=>{if(!h)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,Q.min()),nn(e).delete(function(p){return[0,Ge(p.path)]}(o))))});s.push(l)}}).next(()=>P.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Yi(e,t)}mr(e,t){const n=nn(e);let s,i=Ye.le;return n.te({index:kl},([o,c],{path:l,sequenceNumber:h})=>{o===0?(i!==Ye.le&&t(new B(yt(s)),i),i=h,s=l):i=Ye.le}).next(()=>{i!==Ye.le&&t(new B(yt(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Yi(r,e){return nn(r).put(function(n,s){return{targetId:0,path:Ge(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
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
 */class Pm{constructor(){this.changes=new Ut(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?P.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class HT{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Sn(e).put(n)}removeEntry(e,t,n){return Sn(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Uo(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.pr(e,n)))}getEntry(e,t){let n=Ae.newInvalidDocument(t);return Sn(e).te({index:lo,range:IDBKeyRange.only(Cs(t))},(s,i)=>{n=this.yr(t,i)}).next(()=>n)}wr(e,t){let n={size:0,document:Ae.newInvalidDocument(t)};return Sn(e).te({index:lo,range:IDBKeyRange.only(Cs(t))},(s,i)=>{n={document:this.yr(t,i),size:zo(i)}}).next(()=>n)}getEntries(e,t){let n=nt();return this.br(e,t,(s,i)=>{const o=this.yr(s,i);n=n.insert(s,o)}).next(()=>n)}Sr(e,t){let n=nt(),s=new me(B.comparator);return this.br(e,t,(i,o)=>{const c=this.yr(i,o);n=n.insert(i,c),s=s.insert(i,zo(o))}).next(()=>({documents:n,Dr:s}))}br(e,t,n){if(t.isEmpty())return P.resolve();let s=new he(of);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(Cs(s.first()),Cs(s.last())),o=s.getIterator();let c=o.getNext();return Sn(e).te({index:lo,range:i},(l,h,f)=>{const p=B.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&of(c,p)<0;)n(c,null),c=o.getNext();c&&c.isEqual(p)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.H(Cs(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Uo(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Sn(e).J(IDBKeyRange.bound(c,l,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=nt();for(const p of h){const m=this.yr(B.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);m.isFoundDocument()&&(Ti(t,m)||s.has(m.key))&&(f=f.insert(m.key,m))}return f})}getAllFromCollectionGroup(e,t,n,s){let i=nt();const o=sf(t,n),c=sf(t,it.max());return Sn(e).te({index:mg,range:IDBKeyRange.bound(o,c,!0)},(l,h,f)=>{const p=this.yr(B.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new QT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return rf(e).get(kc).next(t=>(H(!!t,20021),t))}pr(e,t){return rf(e).put(kc,t)}yr(e,t){if(t){const n=NT(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(Q.min())))return n}return Ae.newInvalidDocument(e)}}function Cm(r){return new HT(r)}class QT extends Pm{constructor(e,t){super(),this.vr=e,this.trackRemovals=t,this.Cr=new Ut(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new he((i,o)=>X(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.Cr.get(i);if(t.push(this.vr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=zd(this.vr.serializer,o);s=s.add(i.path.popLast());const h=zo(l);n+=h-c.size,t.push(this.vr.addEntry(e,i,l))}else if(n-=c.size,this.trackRemovals){const l=zd(this.vr.serializer,o.convertToNoDocument(Q.min()));t.push(this.vr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.vr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.vr.updateMetadata(e,n)),P.waitFor(t)}getFromCache(e,t){return this.vr.wr(e,t).next(n=>(this.Cr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.vr.Sr(e,t).next(({documents:n,Dr:s})=>(s.forEach((i,o)=>{this.Cr.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function rf(r){return Ve(r,ii)}function Sn(r){return Ve(r,Co)}function Cs(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function sf(r,e){const t=e.documentKey.path.toArray();return[r,Uo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function of(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=X(t[i],n[i]),s)return s;return s=X(t.length,n.length),s||(s=X(t[t.length-2],n[n.length-2]),s||X(t[t.length-1],n[n.length-1]))}/**
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
 */class JT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class xm{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Qs(n.mutation,s,ot.empty(),be.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,se()).next(()=>n))}getLocalViewOfDocuments(e,t,n=se()){const s=vt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=Ls();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=vt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,se()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,s){let i=nt();const o=Hs(),c=function(){return Hs()}();return t.forEach((l,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof In)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Qs(f.mutation,h,f.mutation.getFieldMask(),be.now())):o.set(h.key,ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return c.set(h,new JT(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const n=Hs();let s=new me((o,c)=>o-c),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=n.get(l)||ot.empty();f=c.applyToLocalView(h,f),n.set(l,f);const p=(s.get(c.batchId)||se()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Wg();f.forEach(m=>{if(!i.has(m)){const w=Zg(t.get(m),n.get(m));w!==null&&p.set(m,w),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return P.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):P.resolve(vt());let c=Mr,l=i;return o.next(h=>P.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,se())).next(f=>({batchId:c,changes:Kg(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(n=>{let s=Ls();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Ls();return this.indexManager.getCollectionParents(e,i).next(c=>P.forEach(c,l=>{const h=function(p,m){return new aa(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ae.newInvalidDocument(f)))});let c=Ls();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Qs(f.mutation,h,ot.empty(),be.now()),Ti(t,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class YT{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,t){return P.resolve(this.Fr.get(t))}saveBundleMetadata(e,t){return this.Fr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ke(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Mr.get(t))}saveNamedQuery(e,t){return this.Mr.set(t.name,function(s){return{name:s.name,query:ym(s.bundledQuery),readTime:Ke(s.readTime)}}(t)),P.resolve()}}/**
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
 */class XT{constructor(){this.overlays=new me(B.comparator),this.Or=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const n=vt();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.St(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Or.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(n)),P.resolve()}getOverlaysForCollection(e,t,n){const s=vt(),i=t.length+1,o=new B(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new me((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=vt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=vt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return P.resolve(c)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Or.get(s.largestBatchId).delete(n.key);this.Or.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new ql(t,n));let i=this.Or.get(t);i===void 0&&(i=se(),this.Or.set(t,i)),this.Or.set(t,i.add(n.key))}}/**
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
 */class ZT{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class Ql{constructor(){this.Nr=new he(Ne.Br),this.Lr=new he(Ne.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,t){const n=new Ne(e,t);this.Nr=this.Nr.add(n),this.Lr=this.Lr.add(n)}qr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Qr(new Ne(e,t))}$r(e,t){e.forEach(n=>this.removeReference(n,t))}Ur(e){const t=new B(new ue([])),n=new Ne(t,e),s=new Ne(t,e+1),i=[];return this.Lr.forEachInRange([n,s],o=>{this.Qr(o),i.push(o.key)}),i}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const t=new B(new ue([])),n=new Ne(t,e),s=new Ne(t,e+1);let i=se();return this.Lr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ne(e,0),n=this.Nr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ne{constructor(e,t){this.key=e,this.Gr=t}static Br(e,t){return B.comparator(e.key,t.key)||X(e.Gr,t.Gr)}static kr(e,t){return X(e.Gr,t.Gr)||B.comparator(e.key,t.key)}}/**
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
 */class eA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Jn=1,this.zr=new he(Ne.Br)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jl(i,t,n,s);this.mutationQueue.push(o);for(const c of s)this.zr=this.zr.add(new Ne(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.jr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Hr(n),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Fn:this.Jn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ne(t,0),s=new Ne(t,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([n,s],o=>{const c=this.jr(o.Gr);i.push(c)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new he(X);return t.forEach(s=>{const i=new Ne(s,0),o=new Ne(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,o],c=>{n=n.add(c.Gr)})}),P.resolve(this.Jr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;B.isDocumentKey(i)||(i=i.child(""));const o=new Ne(new B(i),0);let c=new he(X);return this.zr.forEachWhile(l=>{const h=l.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Gr)),!0)},o),P.resolve(this.Jr(c))}Jr(e){const t=[];return e.forEach(n=>{const s=this.jr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){H(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.zr;return P.forEach(t.mutations,s=>{const i=new Ne(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=n})}Xn(e){}containsKey(e,t){const n=new Ne(t,0),s=this.zr.firstAfterOrEqual(n);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Yr(e,t){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const t=this.Hr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class tA{constructor(e){this.Zr=e,this.docs=function(){return new me(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.Zr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return P.resolve(n?n.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let n=nt();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():Ae.newInvalidDocument(s))}),P.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=nt();const o=t.path,c=new B(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Cl(ug(f),n)<=0||(s.has(f.key)||Ti(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,n,s){G(9500)}Xr(e,t){return P.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new nA(this)}getSize(e){return P.resolve(this.size)}}class nA extends Pm{constructor(e){super(),this.vr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.vr.addEntry(e,s)):this.vr.removeEntry(n)}),P.waitFor(t)}getFromCache(e,t){return this.vr.getEntry(e,t)}getAllFromCache(e,t){return this.vr.getEntries(e,t)}}/**
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
 */class rA{constructor(e){this.persistence=e,this.ei=new Ut(t=>Hn(t),bi),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.ti=0,this.ni=new Ql,this.targetCount=0,this.ri=Yn.rr()}forEachTarget(e,t){return this.ei.forEach((n,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ti&&(this.ti=t),P.resolve()}ar(e){this.ei.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ri=new Yn(t),this.highestTargetId=t),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,t){return this.ar(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.ar(t),P.resolve()}removeTargetData(e,t){return this.ei.delete(t.target),this.ni.Ur(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.ei.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.ei.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const n=this.ei.get(t)||null;return P.resolve(n)}addMatchingKeys(e,t,n){return this.ni.qr(t,n),P.resolve()}removeMatchingKeys(e,t,n){this.ni.$r(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ni.Ur(t),P.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ni.Wr(t);return P.resolve(n)}containsKey(e,t){return P.resolve(this.ni.containsKey(t))}}/**
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
 */class Jl{constructor(e,t){this.ii={},this.overlays={},this.si=new Ye(0),this.oi=!1,this.oi=!0,this._i=new ZT,this.referenceDelegate=e(this),this.ai=new rA(this),this.indexManager=new jT,this.remoteDocumentCache=function(s){return new tA(s)}(n=>this.referenceDelegate.ui(n)),this.serializer=new mm(t),this.ci=new YT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new XT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ii[e.toKey()];return n||(n=new eA(t,this.referenceDelegate),this.ii[e.toKey()]=n),n}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,t,n){L("MemoryPersistence","Starting transaction:",e);const s=new sA(this.si.next());return this.referenceDelegate.li(),n(s).next(i=>this.referenceDelegate.hi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Pi(e,t){return P.or(Object.values(this.ii).map(n=>()=>n.containsKey(e,t)))}}class sA extends dg{constructor(e){super(),this.currentSequenceNumber=e}}class ga{constructor(e){this.persistence=e,this.Ti=new Ql,this.Ii=null}static Ei(e){return new ga(e)}get di(){if(this.Ii)return this.Ii;throw G(60996)}addReference(e,t,n){return this.Ti.addReference(n,t),this.di.delete(n.toString()),P.resolve()}removeReference(e,t,n){return this.Ti.removeReference(n,t),this.di.add(n.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ti.Ur(t.targetId).forEach(s=>this.di.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}li(){this.Ii=new Set}hi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,n=>{const s=B.fromPath(n);return this.Ai(e,s).next(i=>{i||t.removeEntry(s,Q.min())})}).next(()=>(this.Ii=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ai(e,t).next(n=>{n?this.di.delete(t.toString()):this.di.add(t.toString())})}ui(e){return 0}Ai(e,t){return P.or([()=>P.resolve(this.Ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Pi(e,t)])}}class jo{constructor(e,t){this.persistence=e,this.Ri=new Ut(n=>Ge(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Rm(this,t)}static Ei(e,t){return new jo(e,t)}li(){}hi(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}Vr(e){let t=0;return this.Ar(e,n=>{t++}).next(()=>t)}Ar(e,t){return P.forEach(this.Ri,(n,s)=>this.gr(e,n,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Xr(e,o=>this.gr(e,o,t).next(c=>{c||(n++,i.removeEntry(o,Q.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.Ri.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.Ri.set(n,e.currentSequenceNumber),P.resolve()}removeReference(e,t,n){return this.Ri.set(n,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.Ri.set(t,e.currentSequenceNumber),P.resolve()}ui(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ho(e.data.value)),t}gr(e,t,n){return P.or([()=>this.persistence.Pi(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.Ri.get(t);return P.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class iA{constructor(e){this.serializer=e}q(e,t,n,s){const i=new ea("createOrUpgrade",t);n<1&&s>=1&&(function(l){l.createObjectStore(wi)}(e),function(l){l.createObjectStore(si,{keyPath:vb}),l.createObjectStore(lt,{keyPath:_d,autoIncrement:!0}).createIndex(Mn,yd,{unique:!0}),l.createObjectStore(Lr)}(e),af(e),function(l){l.createObjectStore(kn)}(e));let o=P.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore(Ur),l.deleteObjectStore(Fr),l.deleteObjectStore(Un)}(e),af(e)),o=o.next(()=>function(l){const h=l.store(Un),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return h.put(xo,f)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(l,h){return h.store(lt).J().next(p=>{l.deleteObjectStore(lt),l.createObjectStore(lt,{keyPath:_d,autoIncrement:!0}).createIndex(Mn,yd,{unique:!0});const m=h.store(lt),w=p.map(S=>m.put(S));return P.waitFor(w)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore(Br,{keyPath:Pb})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.Vi(i))),n<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore(ii)}(e),this.mi(i)))),n<7&&s>=7&&(o=o.next(()=>this.fi(i))),n<8&&s>=8&&(o=o.next(()=>this.gi(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.pi(i))),n<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore(na,{keyPath:Cb})})(e),function(l){l.createObjectStore(ra,{keyPath:xb})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore(sa,{keyPath:Lb});h.createIndex(Dc,Fb,{unique:!1}),h.createIndex(Ig,Ub,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore(Co,{keyPath:Eb});h.createIndex(lo,wb),h.createIndex(mg,bb)}(e)).next(()=>this.yi(e,i)).next(()=>e.deleteObjectStore(kn))),n<14&&s>=14&&(o=o.next(()=>this.wi(e,i))),n<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore(Vl,{keyPath:kb,autoIncrement:!0}).createIndex(Vc,Vb,{unique:!1}),l.createObjectStore(ko,{keyPath:Db}).createIndex(yg,Nb,{unique:!1}),l.createObjectStore(Vo,{keyPath:Ob}).createIndex(vg,Mb,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore(ko).clear()}).next(()=>{t.objectStore(Vo).clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore(Dl,{keyPath:Bb})})(e)})),o}mi(e){let t=0;return e.store(kn).te((n,s)=>{t+=zo(s)}).next(()=>{const n={byteSize:t};return e.store(ii).put(kc,n)})}Vi(e){const t=e.store(si),n=e.store(lt);return t.J().next(s=>P.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,Fn],[i.userId,i.lastAcknowledgedBatchId]);return n.J(Mn,o).next(c=>P.forEach(c,l=>{H(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const h=Dn(this.serializer,l);return wm(e,i.userId,h).next(()=>{})}))}))}fi(e){const t=e.store(Ur),n=e.store(kn);return e.store(Un).get(xo).next(s=>{const i=[];return n.te((o,c)=>{const l=new ue(o),h=function(p){return[0,Ge(p)]}(l);i.push(t.get(h).next(f=>f?P.resolve():(p=>t.put({targetId:0,path:Ge(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>P.waitFor(i))})}gi(e,t){e.createObjectStore(oi,{keyPath:Rb});const n=t.store(oi),s=new Hl,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return n.put({collectionId:c,parent:Ge(l)})}};return t.store(kn).te({ee:!0},(o,c)=>{const l=new ue(o);return i(l.popLast())}).next(()=>t.store(Lr).te({ee:!0},([o,c,l],h)=>{const f=yt(c);return i(f.popLast())}))}pi(e){const t=e.store(Fr);return t.te((n,s)=>{const i=Us(s),o=_m(this.serializer,i);return t.put(o)})}yi(e,t){const n=t.store(kn),s=[];return n.te((i,o)=>{const c=t.store(Co),l=function(p){return p.document?new B(ue.fromString(p.document.name).popFirst(5)):p.noDocument?B.fromSegments(p.noDocument.path):p.unknownDocument?B.fromSegments(p.unknownDocument.path):G(36783)}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(h))}).next(()=>P.waitFor(s))}wi(e,t){const n=t.store(lt),s=Cm(this.serializer),i=new Jl(ga.Ei,this.serializer.wt);return n.J().next(o=>{const c=new Map;return o.forEach(l=>{var h;let f=(h=c.get(l.userId))!==null&&h!==void 0?h:se();Dn(this.serializer,l).keys().forEach(p=>f=f.add(p)),c.set(l.userId,f)}),P.forEach(c,(l,h)=>{const f=new ze(h),p=fa.bt(this.serializer,f),m=i.getIndexManager(f),w=pa.bt(f,this.serializer,m,i.referenceDelegate);return new xm(s,w,p,m).recalculateAndSaveOverlaysForDocumentKeys(new Nc(t,Ye.le),l).next()})})}}function af(r){r.createObjectStore(Ur,{keyPath:Ab}).createIndex(kl,Sb,{unique:!0}),r.createObjectStore(Fr,{keyPath:"targetId"}).createIndex(_g,Tb,{unique:!0}),r.createObjectStore(Un)}const Wt="IndexedDbPersistence",sc=18e5,ic=5e3,oc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",oA="main";class Yl{constructor(e,t,n,s,i,o,c,l,h,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.bi=i,this.window=o,this.document=c,this.Si=h,this.Di=f,this.Ci=p,this.si=null,this.oi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Fi=null,this.inForeground=!1,this.Mi=null,this.xi=null,this.Oi=Number.NEGATIVE_INFINITY,this.Ni=m=>Promise.resolve(),!Yl.C())throw new z(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new WT(this,s),this.Bi=t+oA,this.serializer=new mm(l),this.Li=new hn(this.Bi,this.Ci,new iA(this.serializer)),this._i=new MT,this.ai=new qT(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Cm(this.serializer),this.ci=new OT,this.window&&this.window.localStorage?this.ki=this.window.localStorage:(this.ki=null,f===!1&&Re(Wt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.qi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new z(O.FAILED_PRECONDITION,oc);return this.Qi(),this.$i(),this.Ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ai.getHighestSequenceNumber(e))}).then(e=>{this.si=new Ye(e,this.Si)}).then(()=>{this.oi=!0}).catch(e=>(this.Li&&this.Li.close(),Promise.reject(e)))}Ki(e){return this.Ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Li.U(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.bi.enqueueAndForget(async()=>{this.started&&await this.qi()}))}qi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Xi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Wi(e).next(t=>{t||(this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)))})}).next(()=>this.Gi(e)).next(t=>this.isPrimary&&!t?this.zi(e).next(()=>!1):!!t&&this.ji(e).next(()=>!0))).catch(e=>{if(vn(e))return L(Wt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return L(Wt,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.bi.enqueueRetryable(()=>this.Ni(e)),this.isPrimary=e})}Wi(e){return xs(e).get(cr).next(t=>P.resolve(this.Hi(t)))}Ji(e){return Xi(e).delete(this.clientId)}async Yi(){if(this.isPrimary&&!this.Zi(this.Oi,sc)){this.Oi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Ve(t,Br);return n.J().next(s=>{const i=this.Xi(s,sc),o=s.filter(c=>i.indexOf(c)===-1);return P.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ki)for(const t of e)this.ki.removeItem(this.es(t.clientId))}}Ui(){this.xi=this.bi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.qi().then(()=>this.Yi()).then(()=>this.Ui()))}Hi(e){return!!e&&e.ownerId===this.clientId}Gi(e){return this.Di?P.resolve(!0):xs(e).get(cr).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,ic)&&!this.ts(t.ownerId)){if(this.Hi(t)&&this.networkEnabled)return!0;if(!this.Hi(t)){if(!t.allowTabSynchronization)throw new z(O.FAILED_PRECONDITION,oc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Xi(e).J().next(n=>this.Xi(n,ic).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&L(Wt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.oi=!1,this.ns(),this.xi&&(this.xi.cancel(),this.xi=null),this.rs(),this.ss(),await this.Li.runTransaction("shutdown","readwrite",[wi,Br],e=>{const t=new Nc(e,Ye.le);return this.zi(t).next(()=>this.Ji(t))}),this.Li.close(),this._s()}Xi(e,t){return e.filter(n=>this.Zi(n.updateTimeMs,t)&&!this.ts(n.clientId))}us(){return this.runTransaction("getActiveClients","readonly",e=>Xi(e).J().next(t=>this.Xi(t,sc).map(n=>n.clientId)))}get started(){return this.oi}getGlobalsCache(){return this._i}getMutationQueue(e,t){return pa.bt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new GT(e,this.serializer.wt.databaseId)}getDocumentOverlayCache(e){return fa.bt(this.serializer,e)}getBundleCache(){return this.ci}runTransaction(e,t,n){L(Wt,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?Gb:l===16?jb:l===15?Nl:l===14?bg:l===13?wg:l===12?zb:l===11?Eg:void G(60245)}(this.Ci);let o;return this.Li.runTransaction(e,s,i,c=>(o=new Nc(c,this.si?this.si.next():Ye.le),t==="readwrite-primary"?this.Wi(o).next(l=>!!l||this.Gi(o)).next(l=>{if(!l)throw Re(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)),new z(O.FAILED_PRECONDITION,hg);return n(o)}).next(l=>this.ji(o).next(()=>l)):this.cs(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}cs(e){return xs(e).get(cr).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,ic)&&!this.ts(t.ownerId)&&!this.Hi(t)&&!(this.Di||this.allowTabSynchronization&&t.allowTabSynchronization))throw new z(O.FAILED_PRECONDITION,oc)})}ji(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return xs(e).put(cr,t)}static C(){return hn.C()}zi(e){const t=xs(e);return t.get(cr).next(n=>this.Hi(n)?(L(Wt,"Releasing primary lease."),t.delete(cr)):P.resolve())}Zi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Re(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Qi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Mi=()=>{this.bi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.qi()))},this.document.addEventListener("visibilitychange",this.Mi),this.inForeground=this.document.visibilityState==="visible")}rs(){this.Mi&&(this.document.removeEventListener("visibilitychange",this.Mi),this.Mi=null)}$i(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Fi=()=>{this.ns();const t=/(?:Version|Mobile)\/1[456]/;fp()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.bi.enterRestrictedMode(!0),this.bi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Fi))}ss(){this.Fi&&(this.window.removeEventListener("pagehide",this.Fi),this.Fi=null)}ts(e){var t;try{const n=((t=this.ki)===null||t===void 0?void 0:t.getItem(this.es(e)))!==null;return L(Wt,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Re(Wt,"Failed to get zombied client id.",n),!1}}ns(){if(this.ki)try{this.ki.setItem(this.es(this.clientId),String(Date.now()))}catch(e){Re("Failed to set zombie client id.",e)}}_s(){if(this.ki)try{this.ki.removeItem(this.es(this.clientId))}catch{}}es(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function xs(r){return Ve(r,wi)}function Xi(r){return Ve(r,Br)}function km(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Xl{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.ls=n,this.hs=s}static Ps(e,t){let n=se(),s=se();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Xl(e,t.fromCache,n,s)}}/**
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
 */class aA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Vm{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return fp()?8:fg(ke())>0?6:4}()}initialize(e,t){this.As=e,this.indexManager=t,this.Ts=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Rs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Vs(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new aA;return this.fs(e,t,o).next(c=>{if(i.result=c,this.Is)return this.gs(e,t,o,c.size)})}).next(()=>i.result)}gs(e,t,n,s){return n.documentReadCount<this.Es?(mr()<=oe.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",_r(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),P.resolve()):(mr()<=oe.DEBUG&&L("QueryEngine","Query:",_r(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(mr()<=oe.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",_r(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rt(t))):P.resolve())}Rs(e,t){if(kd(t))return P.resolve(null);let n=rt(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Bc(t,null,"F"),n=rt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=se(...i);return this.As.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const h=this.ps(t,c);return this.ys(t,h,o,l.readTime)?this.Rs(e,Bc(t,null,"F")):this.ws(e,h,t,l)}))})))}Vs(e,t,n,s){return kd(t)||s.isEqual(Q.min())?P.resolve(null):this.As.getDocuments(e,n).next(i=>{const o=this.ps(t,i);return this.ys(t,o,n,s)?P.resolve(null):(mr()<=oe.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_r(t)),this.ws(e,o,t,lg(s,Mr)).next(c=>c))})}ps(e,t){let n=new he(qg(e));return t.forEach((s,i)=>{Ti(e,i)&&(n=n.add(i))}),n}ys(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}fs(e,t,n){return mr()<=oe.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",_r(t)),this.As.getDocumentsMatchingQuery(e,t,it.min(),n)}ws(e,t,n,s){return this.As.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Zl="LocalStore",cA=3e8;class lA{constructor(e,t,n,s){this.persistence=e,this.bs=t,this.serializer=s,this.Ss=new me(X),this.Ds=new Ut(i=>Hn(i),bi),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(n)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xm(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ss))}}function Dm(r,e,t,n){return new lA(r,e,t,n)}async function Nm(r,e){const t=K(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.Fs(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],c=[];let l=se();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(n,l).next(h=>({Ms:h,removedBatchIds:o,addedBatchIds:c}))})})}function uA(r,e){const t=K(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.Cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,m=p.keys();let w=P.resolve();return m.forEach(S=>{w=w.next(()=>f.getEntry(l,S)).next(C=>{const T=h.docVersions.get(S);H(T!==null,48541),C.version.compareTo(T)<0&&(p.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),f.addEntry(C)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=se();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Om(r){const e=K(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ai.getLastRemoteSnapshotVersion(t))}function hA(r,e){const t=K(r),n=e.snapshotVersion;let s=t.Ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Cs.newChangeBuffer({trackRemovals:!0});s=t.Ss;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(t.ai.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.ai.addMatchingKeys(i,f.addedDocuments,p)));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Pe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,n)),s=s.insert(p,w),function(C,T,R){return C.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=cA?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(m,w,f)&&c.push(t.ai.updateTargetData(i,w))});let l=nt(),h=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(dA(i,o,e.documentUpdates).next(f=>{l=f.xs,h=f.Os})),!n.isEqual(Q.min())){const f=t.ai.getLastRemoteSnapshotVersion(i).next(p=>t.ai.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(f)}return P.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.Ss=s,i))}function dA(r,e,t){let n=se(),s=se();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=nt();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):L(Zl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{xs:o,Os:s}})}function fA(r,e){const t=K(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Fn),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Go(r,e){const t=K(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.ai.getTargetData(n,e).next(i=>i?(s=i,P.resolve(s)):t.ai.allocateTargetId(n).next(o=>(s=new xt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.ai.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.Ss.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ss=t.Ss.insert(n.targetId,n),t.Ds.set(e,n.targetId)),n})}async function Hr(r,e,t){const n=K(r),s=n.Ss.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!vn(o))throw o;L(Zl,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ss=n.Ss.remove(e),n.Ds.delete(s.target)}function Hc(r,e,t){const n=K(r);let s=Q.min(),i=se();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=K(l),m=p.Ds.get(f);return m!==void 0?P.resolve(p.Ss.get(m)):p.ai.getTargetData(h,f)}(n,o,rt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.ai.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>n.bs.getDocumentsMatchingQuery(o,e,t?s:Q.min(),t?i:se())).next(c=>(Fm(n,Gg(e),c),{documents:c,Ns:i})))}function Mm(r,e){const t=K(r),n=K(t.ai),s=t.Ss.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>n.Rt(i,e).next(o=>o?o.target:null))}function Lm(r,e){const t=K(r),n=t.vs.get(e)||Q.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.Cs.getAllFromCollectionGroup(s,e,lg(n,Mr),Number.MAX_SAFE_INTEGER)).then(s=>(Fm(t,e,s),s))}function Fm(r,e,t){let n=r.vs.get(e)||Q.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.vs.set(e,n)}/**
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
 */const Um="firestore_clients";function cf(r,e){return`${Um}_${r}_${e}`}const Bm="firestore_mutations";function lf(r,e,t){let n=`${Bm}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const zm="firestore_targets";function ac(r,e){return`${zm}_${r}_${e}`}/**
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
 */const _t="SharedClientState";class qo{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static qs(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new z(s.error.code,s.error.message))),o?new qo(e,t,s.state,i):(Re(_t,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Js{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static qs(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new z(n.error.code,n.error.message))),i?new Js(e,n.state,s):(Re(_t,`Failed to parse target state for ID '${e}': ${t}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $o{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static qs(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Bl();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=pg(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new $o(e,i):(Re(_t,`Failed to parse client data for instance '${e}': ${t}`),null)}}class eu{constructor(e,t){this.clientId=e,this.onlineState=t}static qs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new eu(t.clientId,t.onlineState):(Re(_t,`Failed to parse online state: ${e}`),null)}}class Qc{constructor(){this.activeTargetIds=Bl()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cc{constructor(e,t,n,s,i){this.window=e,this.bi=t,this.persistenceKey=n,this.Ks=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ws=this.Gs.bind(this),this.zs=new me(X),this.started=!1,this.js=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Hs=cf(this.persistenceKey,this.Ks),this.Js=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.zs=this.zs.insert(this.Ks,new Qc),this.Ys=new RegExp(`^${Um}_${o}_([^_]*)$`),this.Zs=new RegExp(`^${Bm}_${o}_(\\d+)(?:_(.*))?$`),this.Xs=new RegExp(`^${zm}_${o}_(\\d+)$`),this.eo=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.no=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ws)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.us();for(const n of e){if(n===this.Ks)continue;const s=this.getItem(cf(this.persistenceKey,n));if(s){const i=$o.qs(n,s);i&&(this.zs=this.zs.insert(i.clientId,i))}}this.ro();const t=this.storage.getItem(this.eo);if(t){const n=this.io(t);n&&this.so(n)}for(const n of this.js)this.Gs(n);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Js,JSON.stringify(e))}getAllActiveQueryTargets(){return this.oo(this.zs)}isActiveQueryTarget(e){let t=!1;return this.zs.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this._o(e,"pending")}updateMutationState(e,t,n){this._o(e,t,n),this.ao(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(ac(this.persistenceKey,e));if(s){const i=Js.qs(e,s);i&&(n=i.state)}}return t&&this.uo.$s(e),this.ro(),n}removeLocalQueryTarget(e){this.uo.Us(e),this.ro()}isLocalQueryTarget(e){return this.uo.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ac(this.persistenceKey,e))}updateQueryState(e,t,n){this.co(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.ao(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.lo(e)}notifyBundleLoaded(e){this.ho(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ws),this.removeItem(this.Hs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return L(_t,"READ",e,t),t}setItem(e,t){L(_t,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){L(_t,"REMOVE",e),this.storage.removeItem(e)}Gs(e){const t=e;if(t.storageArea===this.storage){if(L(_t,"EVENT",t.key,t.newValue),t.key===this.Hs)return void Re("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.bi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ys.test(t.key)){if(t.newValue==null){const n=this.Po(t.key);return this.To(n,null)}{const n=this.Io(t.key,t.newValue);if(n)return this.To(n.clientId,n)}}else if(this.Zs.test(t.key)){if(t.newValue!==null){const n=this.Eo(t.key,t.newValue);if(n)return this.Ao(n)}}else if(this.Xs.test(t.key)){if(t.newValue!==null){const n=this.Ro(t.key,t.newValue);if(n)return this.Vo(n)}}else if(t.key===this.eo){if(t.newValue!==null){const n=this.io(t.newValue);if(n)return this.so(n)}}else if(t.key===this.Js){const n=function(i){let o=Ye.le;if(i!=null)try{const c=JSON.parse(i);H(typeof c=="number",30636,{mo:i}),o=c}catch(c){Re(_t,"Failed to read sequence number from WebStorage",c)}return o}(t.newValue);n!==Ye.le&&this.sequenceNumberHandler(n)}else if(t.key===this.no){const n=this.fo(t.newValue);await Promise.all(n.map(s=>this.syncEngine.po(s)))}}}else this.js.push(t)})}}get uo(){return this.zs.get(this.Ks)}ro(){this.setItem(this.Hs,this.uo.Qs())}_o(e,t,n){const s=new qo(this.currentUser,e,t,n),i=lf(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Qs())}ao(e){const t=lf(this.persistenceKey,this.currentUser,e);this.removeItem(t)}lo(e){const t={clientId:this.Ks,onlineState:e};this.storage.setItem(this.eo,JSON.stringify(t))}co(e,t,n){const s=ac(this.persistenceKey,e),i=new Js(e,t,n);this.setItem(s,i.Qs())}ho(e){const t=JSON.stringify(Array.from(e));this.setItem(this.no,t)}Po(e){const t=this.Ys.exec(e);return t?t[1]:null}Io(e,t){const n=this.Po(e);return $o.qs(n,t)}Eo(e,t){const n=this.Zs.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return qo.qs(new ze(i),s,t)}Ro(e,t){const n=this.Xs.exec(e),s=Number(n[1]);return Js.qs(s,t)}io(e){return eu.qs(e)}fo(e){return JSON.parse(e)}async Ao(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.yo(e.batchId,e.state,e.error);L(_t,`Ignoring mutation for non-active user ${e.user.uid}`)}Vo(e){return this.syncEngine.wo(e.targetId,e.state,e.error)}To(e,t){const n=t?this.zs.insert(e,t):this.zs.remove(e),s=this.oo(this.zs),i=this.oo(n),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.bo(o,c).then(()=>{this.zs=n})}so(e){this.zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}oo(e){let t=Bl();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class jm{constructor(){this.So=new Qc,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,t,n){this.Do[e]=t}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new Qc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pA{vo(e){}shutdown(){}}/**
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
 */const uf="ConnectivityMonitor";class hf{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){L(uf,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){L(uf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zi=null;function Jc(){return Zi===null?Zi=function(){return 268435456+Math.round(2147483648*Math.random())}():Zi++,"0x"+Zi.toString(16)}/**
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
 */const lc="RestConnection",gA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mA{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=t+"://"+e.host,this.ko=`projects/${n}/databases/${s}`,this.qo=this.databaseId.database===Do?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Qo(e,t,n,s,i){const o=Jc(),c=this.$o(e,t.toUriEncodedString());L(lc,`Sending RPC '${e}' ${o}:`,c,n);const l={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(l,s,i),this.Ko(e,c,l,n).then(h=>(L(lc,`Received RPC '${e}' ${o}: `,h),h),h=>{throw ti(lc,`RPC '${e}' ${o} failed with error: `,h,"url: ",c,"request:",n),h})}Wo(e,t,n,s,i,o){return this.Qo(e,t,n,s,i)}Uo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s)}$o(e,t){const n=gA[e];return`${this.Lo}/v1/${t}:${n}`}terminate(){}}/**
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
 */class _A{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
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
 */const Be="WebChannelConnection";class yA extends mA{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,t,n,s){const i=Jc();return new Promise((o,c)=>{const l=new eg;l.setWithCredentials(!0),l.listenOnce(tg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case oo.NO_ERROR:const f=l.getResponseJson();L(Be,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case oo.TIMEOUT:L(Be,`RPC '${e}' ${i} timed out`),c(new z(O.DEADLINE_EXCEEDED,"Request time out"));break;case oo.HTTP_ERROR:const p=l.getStatus();if(L(Be,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const S=function(T){const R=T.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(R)>=0?R:O.UNKNOWN}(w.status);c(new z(S,w.message))}else c(new z(O.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new z(O.UNAVAILABLE,"Connection failed."));break;default:G(9055,{s_:e,streamId:i,o_:l.getLastErrorCode(),__:l.getLastError()})}}finally{L(Be,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);L(Be,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,n,15)})}a_(e,t,n){const s=Jc(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sg(),c=rg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Uo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const f=i.join("");L(Be,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let m=!1,w=!1;const S=new _A({Go:T=>{w?L(Be,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(m||(L(Be,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),L(Be,`RPC '${e}' stream ${s} sending:`,T),p.send(T))},zo:()=>p.close()}),C=(T,R,k)=>{T.listen(R,D=>{try{k(D)}catch(N){setTimeout(()=>{throw N},0)}})};return C(p,Ms.EventType.OPEN,()=>{w||(L(Be,`RPC '${e}' stream ${s} transport opened.`),S.t_())}),C(p,Ms.EventType.CLOSE,()=>{w||(w=!0,L(Be,`RPC '${e}' stream ${s} transport closed`),S.r_())}),C(p,Ms.EventType.ERROR,T=>{w||(w=!0,ti(Be,`RPC '${e}' stream ${s} transport errored. Name:`,T.name,"Message:",T.message),S.r_(new z(O.UNAVAILABLE,"The operation could not be completed")))}),C(p,Ms.EventType.MESSAGE,T=>{var R;if(!w){const k=T.data[0];H(!!k,16349);const D=k,N=(D==null?void 0:D.error)||((R=D[0])===null||R===void 0?void 0:R.error);if(N){L(Be,`RPC '${e}' stream ${s} received error:`,N);const F=N.status;let M=function(I){const b=Ce[I];if(b!==void 0)return nm(b)}(F),v=N.message;M===void 0&&(M=O.INTERNAL,v="Unknown error status: "+F+" with message "+N.message),w=!0,S.r_(new z(M,v)),p.close()}else L(Be,`RPC '${e}' stream ${s} received:`,k),S.i_(k)}}),C(c,ng.STAT_EVENT,T=>{T.stat===Pc.PROXY?L(Be,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===Pc.NOPROXY&&L(Be,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.n_()},0),S}}/**
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
 */function Gm(){return typeof window<"u"?window:null}function mo(){return typeof document<"u"?document:null}/**
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
 */function ma(r){return new TT(r,!0)}/**
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
 */class qm{constructor(e,t,n=1e3,s=1.5,i=6e4){this.bi=e,this.timerId=t,this.u_=n,this.c_=s,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const t=Math.floor(this.h_+this.d_()),n=Math.max(0,Date.now()-this.T_),s=Math.max(0,t-n);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const df="PersistentStream";class $m{constructor(e,t,n,s,i,o,c,l){this.bi=e,this.R_=n,this.V_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new qm(e,t)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,t){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(Re(t.toString()),Re("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(t)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),t=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.m_===t&&this.B_(n,s)},n=>{e(()=>{const s=new z(O.UNKNOWN,"Fetching auth token failed: "+n.message);return this.L_(s)})})}B_(e,t){const n=this.N_(this.m_);this.stream=this.k_(e,t),this.stream.jo(()=>{n(()=>this.listener.jo())}),this.stream.Jo(()=>{n(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{n(()=>this.L_(s))}),this.stream.onMessage(s=>{n(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return L(df,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return t=>{this.bi.enqueueAndForget(()=>this.m_===e?t():(L(df,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vA extends $m{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}k_(e,t){return this.connection.a_("Listen",e,t)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const t=RT(this.serializer,e),n=function(i){if(!("targetChange"in i))return Q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Ke(o.readTime):Q.min()}(e);return this.listener.Q_(t,n)}U_(e){const t={};t.database=Gc(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=Oo(l)?{documents:um(i,l)}:{query:hm(i,l).gt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=im(i,o.resumeToken);const h=zc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){c.readTime=Wr(i,o.snapshotVersion.toTimestamp());const h=zc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=CT(this.serializer,e);n&&(t.labels=n),this.F_(t)}K_(e){const t={};t.database=Gc(this.serializer),t.removeTarget=e,this.F_(t)}}class IA extends $m{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,t){return this.connection.a_("Write",e,t)}q_(e){return H(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,H(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){H(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const t=PT(e.writeResults,e.commitTime),n=Ke(e.commitTime);return this.listener.j_(n,t)}H_(){const e={};e.database=Gc(this.serializer),this.F_(e)}G_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Fo(this.serializer,n))};this.F_(t)}}/**
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
 */class EA{}class wA extends EA{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,t,n,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Qo(e,jc(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(O.UNKNOWN,i.toString())})}Wo(e,t,n,s,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Wo(e,jc(t,n),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(O.UNKNOWN,o.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class bA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const Xn="RemoteStore";class TA{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(o=>{n.enqueueAndForget(async()=>{rr(this)&&(L(Xn,"Restarting streams for network reachability change."),await async function(l){const h=K(l);h.aa.add(4),await Ri(h),h.la.set("Unknown"),h.aa.delete(4),await _a(h)}(this))})}),this.la=new bA(n,s)}}async function _a(r){if(rr(r))for(const e of r.ua)await e(!0)}async function Ri(r){for(const e of r.ua)await e(!1)}function ya(r,e){const t=K(r);t._a.has(e.targetId)||(t._a.set(e.targetId,e),ru(t)?nu(t):os(t).b_()&&tu(t,e))}function Qr(r,e){const t=K(r),n=os(t);t._a.delete(e),n.b_()&&Km(t,e),t._a.size===0&&(n.b_()?n.v_():rr(t)&&t.la.set("Unknown"))}function tu(r,e){if(r.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}os(r).U_(e)}function Km(r,e){r.ha.Ke(e),os(r).K_(e)}function nu(r){r.ha=new IT({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>r._a.get(e)||null,Pt:()=>r.datastore.serializer.databaseId}),os(r).start(),r.la.ta()}function ru(r){return rr(r)&&!os(r).w_()&&r._a.size>0}function rr(r){return K(r).aa.size===0}function Wm(r){r.ha=void 0}async function AA(r){r.la.set("Online")}async function SA(r){r._a.forEach((e,t)=>{tu(r,e)})}async function RA(r,e){Wm(r),ru(r)?(r.la.ia(e),nu(r)):r.la.set("Unknown")}async function PA(r,e,t){if(r.la.set("Online"),e instanceof sm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s._a.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s._a.delete(c),s.ha.removeTarget(c))}(r,e)}catch(n){L(Xn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ko(r,n)}else if(e instanceof go?r.ha.Xe(e):e instanceof rm?r.ha.ot(e):r.ha.nt(e),!t.isEqual(Q.min()))try{const n=await Om(r.localStore);t.compareTo(n)>=0&&await function(i,o){const c=i.ha.It(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i._a.get(h);f&&i._a.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i._a.get(l);if(!f)return;i._a.set(l,f.withResumeToken(Pe.EMPTY_BYTE_STRING,f.snapshotVersion)),Km(i,l);const p=new xt(f.target,l,h,f.sequenceNumber);tu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){L(Xn,"Failed to raise snapshot:",n),await Ko(r,n)}}async function Ko(r,e,t){if(!vn(e))throw e;r.aa.add(1),await Ri(r),r.la.set("Offline"),t||(t=()=>Om(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{L(Xn,"Retrying IndexedDB access"),await t(),r.aa.delete(1),await _a(r)})}function Hm(r,e){return e().catch(t=>Ko(r,t,e))}async function is(r){const e=K(r),t=gn(e);let n=e.oa.length>0?e.oa[e.oa.length-1].batchId:Fn;for(;CA(e);)try{const s=await fA(e.localStore,n);if(s===null){e.oa.length===0&&t.v_();break}n=s.batchId,xA(e,s)}catch(s){await Ko(e,s)}Qm(e)&&Jm(e)}function CA(r){return rr(r)&&r.oa.length<10}function xA(r,e){r.oa.push(e);const t=gn(r);t.b_()&&t.W_&&t.G_(e.mutations)}function Qm(r){return rr(r)&&!gn(r).w_()&&r.oa.length>0}function Jm(r){gn(r).start()}async function kA(r){gn(r).H_()}async function VA(r){const e=gn(r);for(const t of r.oa)e.G_(t.mutations)}async function DA(r,e,t){const n=r.oa.shift(),s=Gl.from(n,e,t);await Hm(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await is(r)}async function NA(r,e){e&&gn(r).W_&&await async function(n,s){if(function(o){return yT(o)&&o!==O.ABORTED}(s.code)){const i=n.oa.shift();gn(n).D_(),await Hm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await is(n)}}(r,e),Qm(r)&&Jm(r)}async function ff(r,e){const t=K(r);t.asyncQueue.verifyOperationInProgress(),L(Xn,"RemoteStore received new credentials");const n=rr(t);t.aa.add(3),await Ri(t),n&&t.la.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.aa.delete(3),await _a(t)}async function Yc(r,e){const t=K(r);e?(t.aa.delete(2),await _a(t)):e||(t.aa.add(2),await Ri(t),t.la.set("Unknown"))}function os(r){return r.Pa||(r.Pa=function(t,n,s){const i=K(t);return i.Y_(),new vA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{jo:AA.bind(null,r),Jo:SA.bind(null,r),Zo:RA.bind(null,r),Q_:PA.bind(null,r)}),r.ua.push(async e=>{e?(r.Pa.D_(),ru(r)?nu(r):r.la.set("Unknown")):(await r.Pa.stop(),Wm(r))})),r.Pa}function gn(r){return r.Ta||(r.Ta=function(t,n,s){const i=K(t);return i.Y_(),new IA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{jo:()=>Promise.resolve(),Jo:kA.bind(null,r),Zo:NA.bind(null,r),z_:VA.bind(null,r),j_:DA.bind(null,r)}),r.ua.push(async e=>{e?(r.Ta.D_(),await is(r)):(await r.Ta.stop(),r.oa.length>0&&(L(Xn,`Stopping write stream with ${r.oa.length} pending writes`),r.oa=[]))})),r.Ta}/**
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
 */class su{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,c=new su(e,t,o,s,i);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iu(r,e){if(Re("AsyncQueue",`${e}: ${r}`),vn(r))return new z(O.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Rr{static emptySet(e){return new Rr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||B.comparator(t.key,n.key):(t,n)=>B.comparator(t.key,n.key),this.keyedMap=Ls(),this.sortedSet=new me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Rr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Rr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class pf{constructor(){this.Ia=new me(B.comparator)}track(e){const t=e.doc.key,n=this.Ia.get(t);n?e.type!==0&&n.type===3?this.Ia=this.Ia.insert(t,e):e.type===3&&n.type!==1?this.Ia=this.Ia.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Ia=this.Ia.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Ia=this.Ia.remove(t):e.type===1&&n.type===2?this.Ia=this.Ia.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):G(63341,{Vt:e,Ea:n}):this.Ia=this.Ia.insert(t,e)}da(){const e=[];return this.Ia.inorderTraversal((t,n)=>{e.push(n)}),e}}class Jr{constructor(e,t,n,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Jr(e,t,Rr.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&la(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class OA{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class MA{constructor(){this.queries=gf(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(t,n){const s=K(t),i=s.queries;s.queries=gf(),i.forEach((o,c)=>{for(const l of c.Ra)l.onError(n)})})(this,new z(O.ABORTED,"Firestore shutting down"))}}function gf(){return new Ut(r=>jg(r),la)}async function LA(r,e){const t=K(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.Va()&&e.ma()&&(n=2):(i=new OA,n=e.ma()?0:1);try{switch(n){case 0:i.Aa=await t.onListen(s,!0);break;case 1:i.Aa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=iu(o,`Initialization of query '${_r(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Ra.push(e),e.ga(t.onlineState),i.Aa&&e.pa(i.Aa)&&ou(t)}async function FA(r,e){const t=K(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.Ra.indexOf(e);o>=0&&(i.Ra.splice(o,1),i.Ra.length===0?s=e.ma()?0:1:!i.Va()&&e.ma()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function UA(r,e){const t=K(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.Ra)c.pa(s)&&(n=!0);o.Aa=s}}n&&ou(t)}function BA(r,e,t){const n=K(r),s=n.queries.get(e);if(s)for(const i of s.Ra)i.onError(t);n.queries.delete(e)}function ou(r){r.fa.forEach(e=>{e.next()})}var Xc,mf;(mf=Xc||(Xc={})).ya="default",mf.Cache="cache";class zA{constructor(e,t,n){this.query=e,this.wa=t,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=n||{}}pa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new Jr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ba?this.Da(e)&&(this.wa.next(e),t=!0):this.va(e,this.onlineState)&&(this.Ca(e),t=!0),this.Sa=e,t}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let t=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),t=!0),t}va(e,t){if(!e.fromCache||!this.ma())return!0;const n=t!=="Offline";return(!this.options.Fa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const t=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ca(e){e=Jr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==Xc.Cache}}/**
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
 */class Ym{constructor(e){this.key=e}}class Xm{constructor(e){this.key=e}}class jA{constructor(e,t){this.query=e,this.qa=t,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=se(),this.mutatedKeys=se(),this.Ua=qg(e),this.Ka=new Rr(this.Ua)}get Wa(){return this.qa}Ga(e,t){const n=t?t.za:new pf,s=t?t.Ka:this.Ka;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),w=Ti(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),C=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let T=!1;m&&w?m.data.isEqual(w.data)?S!==C&&(n.track({type:3,doc:w}),T=!0):this.ja(m,w)||(n.track({type:2,doc:w}),T=!0,(l&&this.Ua(w,l)>0||h&&this.Ua(w,h)<0)&&(c=!0)):!m&&w?(n.track({type:0,doc:w}),T=!0):m&&!w&&(n.track({type:1,doc:m}),T=!0,(l||h)&&(c=!0)),T&&(w?(o=o.add(w),i=C?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{Ka:o,za:n,ys:c,mutatedKeys:i}}ja(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const o=e.za.da();o.sort((f,p)=>function(w,S){const C=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:T})}};return C(w)-C(S)}(f.type,p.type)||this.Ua(f.doc,p.doc)),this.Ha(n),s=s!=null&&s;const c=t&&!s?this.Ja():[],l=this.$a.size===0&&this.current&&!s?1:0,h=l!==this.Qa;return this.Qa=l,o.length!==0||h?{snapshot:new Jr(this.query,e.Ka,i,o,e.mutatedKeys,l===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ya:c}:{Ya:c}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new pf,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(t=>this.qa=this.qa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qa=this.qa.delete(t)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=se(),this.Ka.forEach(n=>{this.Za(n.key)&&(this.$a=this.$a.add(n.key))});const t=[];return e.forEach(n=>{this.$a.has(n)||t.push(new Xm(n))}),this.$a.forEach(n=>{e.has(n)||t.push(new Ym(n))}),t}Xa(e){this.qa=e.Ns,this.$a=se();const t=this.Ga(e.documents);return this.applyChanges(t,!0)}eu(){return Jr.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const as="SyncEngine";class GA{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class qA{constructor(e){this.key=e,this.tu=!1}}class $A{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nu={},this.ru=new Ut(c=>jg(c),la),this.iu=new Map,this.su=new Set,this.ou=new me(B.comparator),this._u=new Map,this.au=new Ql,this.uu={},this.cu=new Map,this.lu=Yn.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function KA(r,e,t=!0){const n=va(r);let s;const i=n.ru.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.eu()):s=await Zm(n,e,t,!0),s}async function WA(r,e){const t=va(r);await Zm(t,e,!0,!1)}async function Zm(r,e,t,n){const s=await Go(r.localStore,rt(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await au(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&ya(r.remoteStore,s),c}async function au(r,e,t,n,s){r.Pu=(p,m,w)=>async function(C,T,R,k){let D=T.view.Ga(R);D.ys&&(D=await Hc(C.localStore,T.query,!1).then(({documents:v})=>T.view.Ga(v,D)));const N=k&&k.targetChanges.get(T.targetId),F=k&&k.targetMismatches.get(T.targetId)!=null,M=T.view.applyChanges(D,C.isPrimaryClient,N,F);return Zc(C,T.targetId,M.Ya),M.snapshot}(r,p,m,w);const i=await Hc(r.localStore,e,!0),o=new jA(e,i.Ns),c=o.Ga(i.documents),l=Si.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=o.applyChanges(c,r.isPrimaryClient,l);Zc(r,t,h.Ya);const f=new GA(e,t,o);return r.ru.set(e,f),r.iu.has(t)?r.iu.get(t).push(e):r.iu.set(t,[e]),h.snapshot}async function HA(r,e,t){const n=K(r),s=n.ru.get(e),i=n.iu.get(s.targetId);if(i.length>1)return n.iu.set(s.targetId,i.filter(o=>!la(o,e))),void n.ru.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Hr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Qr(n.remoteStore,s.targetId),Yr(n,s.targetId)}).catch(yn)):(Yr(n,s.targetId),await Hr(n.localStore,s.targetId,!0))}async function QA(r,e){const t=K(r),n=t.ru.get(e),s=t.iu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Qr(t.remoteStore,n.targetId))}async function JA(r,e,t){const n=hu(r);try{const s=await function(o,c){const l=K(o),h=be.now(),f=c.reduce((w,S)=>w.add(S.key),se());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let S=nt(),C=se();return l.Cs.getEntries(w,f).next(T=>{S=T,S.forEach((R,k)=>{k.isValidDocument()||(C=C.add(R))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,S)).next(T=>{p=T;const R=[];for(const k of c){const D=mT(k,p.get(k.key).overlayedDocument);D!=null&&R.push(new In(k.key,D,Dg(D.value.mapValue),Xe.exists(!0)))}return l.mutationQueue.addMutationBatch(w,h,R,c)}).next(T=>{m=T;const R=T.applyToLocalDocumentSet(p,C);return l.documentOverlayCache.saveOverlays(w,T.batchId,R)})}).then(()=>({batchId:m.batchId,changes:Kg(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.uu[o.currentUser.toKey()];h||(h=new me(X)),h=h.insert(c,l),o.uu[o.currentUser.toKey()]=h}(n,s.batchId,t),await En(n,s.changes),await is(n.remoteStore)}catch(s){const i=iu(s,"Failed to persist write");t.reject(i)}}async function e_(r,e){const t=K(r);try{const n=await hA(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t._u.get(i);o&&(H(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.tu=!0:s.modifiedDocuments.size>0?H(o.tu,14607):s.removedDocuments.size>0&&(H(o.tu,42227),o.tu=!1))}),await En(t,n,e)}catch(n){await yn(n)}}function _f(r,e,t){const n=K(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.ru.forEach((i,o)=>{const c=o.view.ga(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=K(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const m of p.Ra)m.ga(c)&&(h=!0)}),h&&ou(l)}(n.eventManager,e),s.length&&n.nu.Q_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function YA(r,e,t){const n=K(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n._u.get(e),i=s&&s.key;if(i){let o=new me(B.comparator);o=o.insert(i,Ae.newNoDocument(i,Q.min()));const c=se().add(i),l=new Ai(Q.min(),new Map,new me(X),o,c);await e_(n,l),n.ou=n.ou.remove(i),n._u.delete(e),uu(n)}else await Hr(n.localStore,e,!1).then(()=>Yr(n,e,t)).catch(yn)}async function XA(r,e){const t=K(r),n=e.batch.batchId;try{const s=await uA(t.localStore,e);lu(t,n,null),cu(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await En(t,s)}catch(s){await yn(s)}}async function ZA(r,e,t){const n=K(r);try{const s=await function(o,c){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(H(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(n.localStore,e);lu(n,e,t),cu(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await En(n,s)}catch(s){await yn(s)}}function cu(r,e){(r.cu.get(e)||[]).forEach(t=>{t.resolve()}),r.cu.delete(e)}function lu(r,e,t){const n=K(r);let s=n.uu[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.uu[n.currentUser.toKey()]=s}}function Yr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.iu.get(e))r.ru.delete(n),t&&r.nu.Tu(n,t);r.iu.delete(e),r.isPrimaryClient&&r.au.Ur(e).forEach(n=>{r.au.containsKey(n)||t_(r,n)})}function t_(r,e){r.su.delete(e.path.canonicalString());const t=r.ou.get(e);t!==null&&(Qr(r.remoteStore,t),r.ou=r.ou.remove(e),r._u.delete(t),uu(r))}function Zc(r,e,t){for(const n of t)n instanceof Ym?(r.au.addReference(n.key,e),eS(r,n)):n instanceof Xm?(L(as,"Document no longer in limbo: "+n.key),r.au.removeReference(n.key,e),r.au.containsKey(n.key)||t_(r,n.key)):G(19791,{Iu:n})}function eS(r,e){const t=e.key,n=t.path.canonicalString();r.ou.get(t)||r.su.has(n)||(L(as,"New document in limbo: "+t),r.su.add(n),uu(r))}function uu(r){for(;r.su.size>0&&r.ou.size<r.maxConcurrentLimboResolutions;){const e=r.su.values().next().value;r.su.delete(e);const t=new B(ue.fromString(e)),n=r.lu.next();r._u.set(n,new qA(t)),r.ou=r.ou.insert(t,n),ya(r.remoteStore,new xt(rt(ca(t.path)),n,"TargetPurposeLimboResolution",Ye.le))}}async function En(r,e,t){const n=K(r),s=[],i=[],o=[];n.ru.isEmpty()||(n.ru.forEach((c,l)=>{o.push(n.Pu(l,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Xl.Ps(l.targetId,h);i.push(p)}}))}),await Promise.all(o),n.nu.Q_(s),await async function(l,h){const f=K(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>P.forEach(h,m=>P.forEach(m.ls,w=>f.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>P.forEach(m.hs,w=>f.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!vn(p))throw p;L(Zl,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const w=f.Ss.get(m),S=w.snapshotVersion,C=w.withLastLimboFreeSnapshotVersion(S);f.Ss=f.Ss.insert(m,C)}}}(n.localStore,i))}async function tS(r,e){const t=K(r);if(!t.currentUser.isEqual(e)){L(as,"User change. New user:",e.toKey());const n=await Nm(t.localStore,e);t.currentUser=e,function(i,o){i.cu.forEach(c=>{c.forEach(l=>{l.reject(new z(O.CANCELLED,o))})}),i.cu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await En(t,n.Ms)}}function nS(r,e){const t=K(r),n=t._u.get(e);if(n&&n.tu)return se().add(n.key);{let s=se();const i=t.iu.get(e);if(!i)return s;for(const o of i){const c=t.ru.get(o);s=s.unionWith(c.view.Wa)}return s}}async function rS(r,e){const t=K(r),n=await Hc(t.localStore,e.query,!0),s=e.view.Xa(n);return t.isPrimaryClient&&Zc(t,e.targetId,s.Ya),s}async function sS(r,e){const t=K(r);return Lm(t.localStore,e).then(n=>En(t,n))}async function iS(r,e,t,n){const s=K(r),i=await function(c,l){const h=K(c),f=K(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Hn(p,l).next(m=>m?h.localDocuments.getDocuments(p,m):P.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await is(s.remoteStore):t==="acknowledged"||t==="rejected"?(lu(s,e,n||null),cu(s,e),function(c,l){K(K(c).mutationQueue).Xn(l)}(s.localStore,e)):G(6720,"Unknown batchState",{Eu:t}),await En(s,i)):L(as,"Cannot apply mutation batch with id: "+e)}async function oS(r,e){const t=K(r);if(va(t),hu(t),e===!0&&t.hu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await yf(t,n.toArray());t.hu=!0,await Yc(t.remoteStore,!0);for(const i of s)ya(t.remoteStore,i)}else if(e===!1&&t.hu!==!1){const n=[];let s=Promise.resolve();t.iu.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then(()=>(Yr(t,o),Hr(t.localStore,o,!0))),Qr(t.remoteStore,o)}),await s,await yf(t,n),function(o){const c=K(o);c._u.forEach((l,h)=>{Qr(c.remoteStore,h)}),c.au.Kr(),c._u=new Map,c.ou=new me(B.comparator)}(t),t.hu=!1,await Yc(t.remoteStore,!1)}}async function yf(r,e,t){const n=K(r),s=[],i=[];for(const o of e){let c;const l=n.iu.get(o);if(l&&l.length!==0){c=await Go(n.localStore,rt(l[0]));for(const h of l){const f=n.ru.get(h),p=await rS(n,f);p.snapshot&&i.push(p.snapshot)}}else{const h=await Mm(n.localStore,o);c=await Go(n.localStore,h),await au(n,n_(h),o,!1,c.resumeToken)}s.push(c)}return n.nu.Q_(i),s}function n_(r){return zg(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function aS(r){return function(t){return K(K(t).persistence).us()}(K(r).localStore)}async function cS(r,e,t,n){const s=K(r);if(s.hu)return void L(as,"Ignoring unexpected query state notification.");const i=s.iu.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Lm(s.localStore,Gg(i[0])),c=Ai.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Pe.EMPTY_BYTE_STRING);await En(s,o,c);break}case"rejected":await Hr(s.localStore,e,!0),Yr(s,e,n);break;default:G(64155,t)}}async function lS(r,e,t){const n=va(r);if(n.hu){for(const s of e){if(n.iu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){L(as,"Adding an already active target "+s);continue}const i=await Mm(n.localStore,s),o=await Go(n.localStore,i);await au(n,n_(i),o.targetId,!1,o.resumeToken),ya(n.remoteStore,o)}for(const s of t)n.iu.has(s)&&await Hr(n.localStore,s,!1).then(()=>{Qr(n.remoteStore,s),Yr(n,s)}).catch(yn)}}function va(r){const e=K(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=e_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YA.bind(null,e),e.nu.Q_=UA.bind(null,e.eventManager),e.nu.Tu=BA.bind(null,e.eventManager),e}function hu(r){const e=K(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZA.bind(null,e),e}class di{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ma(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,t){return null}fu(e,t){return null}Vu(e){return Dm(this.persistence,new Vm,e.initialUser,this.serializer)}Ru(e){return new Jl(ga.Ei,this.serializer)}Au(e){return new jm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}di.provider={build:()=>new di};class uS extends di{constructor(e){super(),this.cacheSizeBytes=e}mu(e,t){H(this.persistence.referenceDelegate instanceof jo,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Sm(n,e.asyncQueue,t)}Ru(e){const t=this.cacheSizeBytes!==void 0?je.withCacheSize(this.cacheSizeBytes):je.DEFAULT;return new Jl(n=>jo.Ei(n,t),this.serializer)}}class r_ extends di{constructor(e,t,n){super(),this.gu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.gu.initialize(this,e),await hu(this.gu.syncEngine),await is(this.gu.remoteStore),await this.persistence.Ki(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Vu(e){return Dm(this.persistence,new Vm,e.initialUser,this.serializer)}mu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Sm(n,e.asyncQueue,t)}fu(e,t){const n=new _b(t,this.persistence);return new mb(e.asyncQueue,n)}Ru(e){const t=km(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?je.withCacheSize(this.cacheSizeBytes):je.DEFAULT;return new Yl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Gm(),mo(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Au(e){return new jm}}class hS extends r_{constructor(e,t){super(e,t,!1),this.gu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.gu.syncEngine;this.sharedClientState instanceof cc&&(this.sharedClientState.syncEngine={yo:iS.bind(null,t),wo:cS.bind(null,t),bo:lS.bind(null,t),us:aS.bind(null,t),po:sS.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ki(async n=>{await oS(this.gu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Au(e){const t=Gm();if(!cc.C(t))throw new z(O.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=km(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new cc(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class fi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>_f(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=tS.bind(null,this.syncEngine),await Yc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MA}()}createDatastore(e){const t=ma(e.databaseInfo.databaseId),n=function(i){return new yA(i)}(e.databaseInfo);return function(i,o,c,l){return new wA(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,c){return new TA(n,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>_f(this.syncEngine,t,0),function(){return hf.C()?new hf:new pA}())}createSyncEngine(e,t){return function(s,i,o,c,l,h,f){const p=new $A(s,i,o,c,l,h);return f&&(p.hu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=K(s);L(Xn,"RemoteStore shutting down."),i.aa.add(5),await Ri(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}fi.provider={build:()=>new fi};/**
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
 */class dS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):Re("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const mn="FirestoreClient";class fS{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=ze.UNAUTHENTICATED,this.clientId=ag.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{L(mn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(L(mn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=iu(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function uc(r,e){r.asyncQueue.verifyOperationInProgress(),L(mn,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Nm(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function vf(r,e){r.asyncQueue.verifyOperationInProgress();const t=await pS(r);L(mn,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>ff(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>ff(e.remoteStore,s)),r._onlineComponents=e}async function pS(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){L(mn,"Using user provided OfflineComponentProvider");try{await uc(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ti("Error using user provided cache. Falling back to memory cache: "+t),await uc(r,new di)}}else L(mn,"Using default OfflineComponentProvider"),await uc(r,new uS(void 0));return r._offlineComponents}async function s_(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(L(mn,"Using user provided OnlineComponentProvider"),await vf(r,r._uninitializedComponentsProvider._online)):(L(mn,"Using default OnlineComponentProvider"),await vf(r,new fi))),r._onlineComponents}function gS(r){return s_(r).then(e=>e.syncEngine)}async function If(r){const e=await s_(r),t=e.eventManager;return t.onListen=KA.bind(null,e.syncEngine),t.onUnlisten=HA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=WA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=QA.bind(null,e.syncEngine),t}/**
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
 */function i_(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Ef=new Map;/**
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
 */function o_(r,e,t){if(!t)throw new z(O.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function mS(r,e,t,n){if(e===!0&&n===!0)throw new z(O.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function wf(r){if(!B.isDocumentKey(r))throw new z(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function bf(r){if(B.isDocumentKey(r))throw new z(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function du(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":G(12329,{type:typeof r})}function Pr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new z(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=du(r);throw new z(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */const _S="firestore.googleapis.com",Tf=!0;class Af{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_S,this.ssl=Tf}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Tf;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Em;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Am)throw new z(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=i_((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fu{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Af({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Af(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ob;switch(n.type){case"firstParty":return new lb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ef.get(t);n&&(L("ComponentProvider","Removing Datastore"),Ef.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Ia{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ia(this.firestore,e,this._query)}}class st{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}}class dn extends Ia{constructor(e,t,n){super(e,t,ca(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new B(e))}withConverter(e){return new dn(this.firestore,e,this._path)}}function yS(r,e,...t){if(r=Ze(r),o_("collection","path",e),r instanceof fu){const n=ue.fromString(e,...t);return bf(n),new dn(r,null,n)}{if(!(r instanceof st||r instanceof dn))throw new z(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ue.fromString(e,...t));return bf(n),new dn(r.firestore,null,n)}}function Sf(r,e,...t){if(r=Ze(r),arguments.length===1&&(e=ag.newId()),o_("doc","path",e),r instanceof fu){const n=ue.fromString(e,...t);return wf(n),new st(r,null,new B(n))}{if(!(r instanceof st||r instanceof dn))throw new z(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ue.fromString(e,...t));return wf(n),new st(r.firestore,r instanceof dn?r.converter:null,new B(n))}}/**
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
 */const Rf="AsyncQueue";class Pf{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new qm(this,"async_queue_retry"),this.ju=()=>{const n=mo();n&&L(Rf,"Visibility state changed to "+n.visibilityState),this.y_.A_()},this.Hu=e;const t=mo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const t=mo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const t=new un;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!vn(e))throw e;L(Rf,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const t=this.Hu.then(()=>(this.Wu=!0,e().catch(n=>{throw this.Ku=n,this.Wu=!1,Re("INTERNAL UNHANDLED ERROR: ",Cf(n)),n}).then(n=>(this.Wu=!1,n))));return this.Hu=t,t}enqueueAfterDelay(e,t,n){this.Ju(),this.zu.indexOf(e)>-1&&(t=0);const s=su.createAndSchedule(this,e,t,n,i=>this.Xu(i));return this.Uu.push(s),s}Ju(){this.Ku&&G(47125,{ec:Cf(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const t of this.Uu)if(t.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Uu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const t=this.Uu.indexOf(e);this.Uu.splice(t,1)}}function Cf(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function xf(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class pi extends fu{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Pf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Pf(e),this._firestoreClient=void 0,await e}}}function vS(r,e,t){t||(t=Do);const n=yl(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(jn(i,e))return s;throw new z(O.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new z(O.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Am)throw new z(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function a_(r){if(r._terminated)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||IS(r),r._firestoreClient}function IS(r){var e,t,n;const s=r._freezeSettings(),i=function(c,l,h,f){return new $b(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,i_(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new fS(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}/**
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
 */class Xr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xr(Pe.fromBase64String(e))}catch(t){throw new z(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xr(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class pu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class c_{constructor(e){this._methodName=e}}/**
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
 */class gu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
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
 */class mu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const ES=/^__.*__$/;class wS{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new In(e,this.data,this.fieldMask,t,this.fieldTransforms):new ss(e,this.data,t,this.fieldTransforms)}}function l_(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{oc:r})}}class _u{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new _u(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ac({path:n,cc:!1});return s.lc(e),s}hc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ac({path:n,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return Wo(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(l_(this.oc)&&ES.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class bS{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ma(e)}dc(e,t,n,s=!1){return new _u({oc:e,methodName:t,Ec:n,path:we.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function TS(r){const e=r._freezeSettings(),t=ma(r._databaseId);return new bS(r._databaseId,!!e.ignoreUndefinedProperties,t)}function AS(r,e,t,n,s,i={}){const o=r.dc(i.merge||i.mergeFields?2:0,e,t,s);f_("Data must be an object, but it was:",o,n);const c=h_(n,o);let l,h;if(i.merge)l=new ot(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=SS(e,p,t);if(!o.contains(m))throw new z(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);PS(f,m)||f.push(m)}l=new ot(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new wS(new Je(c),l,h)}function u_(r,e){if(d_(r=Ze(r)))return f_("Unsupported field value:",e,r),h_(r,e);if(r instanceof c_)return function(n,s){if(!l_(s.oc))throw s.Tc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const c of n){let l=u_(c,s.Pc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=Ze(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return lT(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=be.fromDate(n);return{timestampValue:Wr(s.serializer,i)}}if(n instanceof be){const i=new be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Wr(s.serializer,i)}}if(n instanceof gu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xr)return{bytesValue:im(s.serializer,n._byteString)};if(n instanceof st){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Tc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Kl(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof mu)return function(o,c){return{mapValue:{fields:{[Ml]:{stringValue:Ll},[zr]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Tc("VectorValues must only contain numeric values.");return zl(c.serializer,h)})}}}}}}(n,s);throw s.Tc(`Unsupported field value: ${du(n)}`)}(r,e)}function h_(r,e){const t={};return Tg(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nr(r,(n,s)=>{const i=u_(s,e.uc(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function d_(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof be||r instanceof gu||r instanceof Xr||r instanceof st||r instanceof c_||r instanceof mu)}function f_(r,e,t){if(!d_(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=du(t);throw n==="an object"?e.Tc(r+" a custom object"):e.Tc(r+" "+n)}}function SS(r,e,t){if((e=Ze(e))instanceof pu)return e._internalPath;if(typeof e=="string")return p_(r,e);throw Wo("Field path arguments must be of type string or ",r,!1,void 0,t)}const RS=new RegExp("[~\\*/\\[\\]]");function p_(r,e,t){if(e.search(RS)>=0)throw Wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new pu(...e.split("."))._internalPath}catch{throw Wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Wo(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new z(O.INVALID_ARGUMENT,c+r+l)}function PS(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class g_{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(m_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class CS extends g_{data(){return super.data()}}function m_(r,e){return typeof e=="string"?p_(r,e):e instanceof pu?e._internalPath:e._delegate._internalPath}/**
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
 */function xS(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new z(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kS{convertValue(e,t="none"){switch(fn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return nr(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t[zr].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(o=>Ee(o.doubleValue));return new mu(i)}convertGeoPoint(e){return new gu(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ia(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ai(e));default:return null}}convertTimestamp(e){const t=Ot(e);return new be(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ue.fromString(e);H(gm(n),9688,{name:e});const s=new Wn(n.get(1),n.get(3)),i=new B(n.popFirst(5));return s.isEqual(t)||Re(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function VS(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
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
 */class Bs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class __ extends g_{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(m_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class _o extends __{data(e={}){return super.data(e)}}class DS{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Bs(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new _o(this._firestore,this._userDataWriter,n.key,n,new Bs(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new _o(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Bs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new _o(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Bs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:NS(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function NS(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:r})}}class y_ extends kS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,t)}}function OS(r,e,t){r=Pr(r,st);const n=Pr(r.firestore,pi),s=VS(r.converter,e);return v_(n,[AS(TS(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Xe.none())])}function MS(r){return v_(Pr(r.firestore,pi),[new da(r._key,Xe.none())])}function kf(r,...e){var t,n,s;r=Ze(r);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||xf(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(xf(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,f;if(r instanceof st)h=Pr(r.firestore,pi),f=ca(r._key.path),l={next:p=>{e[o]&&e[o](LS(h,r,p))},error:e[o+1],complete:e[o+2]};else{const p=Pr(r,Ia);h=Pr(p.firestore,pi),f=p._query;const m=new y_(h);l={next:w=>{e[o]&&e[o](new DS(h,m,p,w))},error:e[o+1],complete:e[o+2]},xS(r._query)}return function(m,w,S,C){const T=new dS(C),R=new zA(w,T,S);return m.asyncQueue.enqueueAndForget(async()=>LA(await If(m),R)),()=>{T.yu(),m.asyncQueue.enqueueAndForget(async()=>FA(await If(m),R))}}(a_(h),f,c,l)}function v_(r,e){return function(n,s){const i=new un;return n.asyncQueue.enqueueAndForget(async()=>JA(await gS(n),s,i)),i.promise}(a_(r),e)}function LS(r,e,t){const n=t.docs.get(e._key),s=new y_(r);return new __(r,s,e._key,n,new Bs(t.hasPendingWrites,t.fromCache),e.converter)}class FS{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=jS(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function US(r){return new FS(r)}class BS{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=fi.provider,this._offlineComponentProvider={build:t=>new r_(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class zS{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=fi.provider,this._offlineComponentProvider={build:t=>new hS(t,e==null?void 0:e.cacheSizeBytes)}}}function jS(r){return new BS(void 0)}function GS(){return new zS}(function(e,t=!0){(function(s){rs=s})(ts),Dr(new Gn("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),c=new pi(new ab(n.getProvider("auth-internal")),new ub(o,n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new z(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wn(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),an(cd,ld,e),an(cd,ld,"esm2017")})();const Vf={apiKey:"AIzaSyDfgeX9z3E7jIBZzxK31Y2Q8LlYO-8MfkE",authDomain:"forewit-github-io.firebaseapp.com",projectId:"forewit-github-io",storageBucket:"forewit-github-io.appspot.com",messagingSenderId:"423340282902",appId:"1:423340282902:web:f873fc5d5fc5c3e0ebd137"};let wr;CI().length&&(wr=_p(),xI(wr)),wr=bc(Vf);const eo=rb(wr),hc=vS(wr,{localCache:US({tabManager:GS()})}),yu="-",qS=r=>{const e=KS(r),{conflictingClassGroups:t,conflictingClassGroupModifiers:n}=r;return{getClassGroupId:o=>{const c=o.split(yu);return c[0]===""&&c.length!==1&&c.shift(),I_(c,e)||$S(o)},getConflictingClassGroupIds:(o,c)=>{const l=t[o]||[];return c&&n[o]?[...l,...n[o]]:l}}},I_=(r,e)=>{var o;if(r.length===0)return e.classGroupId;const t=r[0],n=e.nextPart.get(t),s=n?I_(r.slice(1),n):void 0;if(s)return s;if(e.validators.length===0)return;const i=r.join(yu);return(o=e.validators.find(({validator:c})=>c(i)))==null?void 0:o.classGroupId},Df=/^\[(.+)\]$/,$S=r=>{if(Df.test(r)){const e=Df.exec(r)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},KS=r=>{const{theme:e,classGroups:t}=r,n={nextPart:new Map,validators:[]};for(const s in t)el(t[s],n,s,e);return n},el=(r,e,t,n)=>{r.forEach(s=>{if(typeof s=="string"){const i=s===""?e:Nf(e,s);i.classGroupId=t;return}if(typeof s=="function"){if(WS(s)){el(s(n),e,t,n);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([i,o])=>{el(o,Nf(e,i),t,n)})})},Nf=(r,e)=>{let t=r;return e.split(yu).forEach(n=>{t.nextPart.has(n)||t.nextPart.set(n,{nextPart:new Map,validators:[]}),t=t.nextPart.get(n)}),t},WS=r=>r.isThemeGetter,HS=r=>{if(r<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,n=new Map;const s=(i,o)=>{t.set(i,o),e++,e>r&&(e=0,n=t,t=new Map)};return{get(i){let o=t.get(i);if(o!==void 0)return o;if((o=n.get(i))!==void 0)return s(i,o),o},set(i,o){t.has(i)?t.set(i,o):s(i,o)}}},tl="!",nl=":",QS=nl.length,JS=r=>{const{prefix:e,experimentalParseClassName:t}=r;let n=s=>{const i=[];let o=0,c=0,l=0,h;for(let S=0;S<s.length;S++){let C=s[S];if(o===0&&c===0){if(C===nl){i.push(s.slice(l,S)),l=S+QS;continue}if(C==="/"){h=S;continue}}C==="["?o++:C==="]"?o--:C==="("?c++:C===")"&&c--}const f=i.length===0?s:s.substring(l),p=YS(f),m=p!==f,w=h&&h>l?h-l:void 0;return{modifiers:i,hasImportantModifier:m,baseClassName:p,maybePostfixModifierPosition:w}};if(e){const s=e+nl,i=n;n=o=>o.startsWith(s)?i(o.substring(s.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:o,maybePostfixModifierPosition:void 0}}if(t){const s=n;n=i=>t({className:i,parseClassName:s})}return n},YS=r=>r.endsWith(tl)?r.substring(0,r.length-1):r.startsWith(tl)?r.substring(1):r,XS=r=>{const e=Object.fromEntries(r.orderSensitiveModifiers.map(n=>[n,!0]));return n=>{if(n.length<=1)return n;const s=[];let i=[];return n.forEach(o=>{o[0]==="["||e[o]?(s.push(...i.sort(),o),i=[]):i.push(o)}),s.push(...i.sort()),s}},ZS=r=>({cache:HS(r.cacheSize),parseClassName:JS(r),sortModifiers:XS(r),...qS(r)}),eR=/\s+/,tR=(r,e)=>{const{parseClassName:t,getClassGroupId:n,getConflictingClassGroupIds:s,sortModifiers:i}=e,o=[],c=r.trim().split(eR);let l="";for(let h=c.length-1;h>=0;h-=1){const f=c[h],{isExternal:p,modifiers:m,hasImportantModifier:w,baseClassName:S,maybePostfixModifierPosition:C}=t(f);if(p){l=f+(l.length>0?" "+l:l);continue}let T=!!C,R=n(T?S.substring(0,C):S);if(!R){if(!T){l=f+(l.length>0?" "+l:l);continue}if(R=n(S),!R){l=f+(l.length>0?" "+l:l);continue}T=!1}const k=i(m).join(":"),D=w?k+tl:k,N=D+R;if(o.includes(N))continue;o.push(N);const F=s(R,T);for(let M=0;M<F.length;++M){const v=F[M];o.push(D+v)}l=f+(l.length>0?" "+l:l)}return l};function nR(){let r=0,e,t,n="";for(;r<arguments.length;)(e=arguments[r++])&&(t=E_(e))&&(n&&(n+=" "),n+=t);return n}const E_=r=>{if(typeof r=="string")return r;let e,t="";for(let n=0;n<r.length;n++)r[n]&&(e=E_(r[n]))&&(t&&(t+=" "),t+=e);return t};function rR(r,...e){let t,n,s,i=o;function o(l){const h=e.reduce((f,p)=>p(f),r());return t=ZS(h),n=t.cache.get,s=t.cache.set,i=c,c(l)}function c(l){const h=n(l);if(h)return h;const f=tR(l,t);return s(l,f),f}return function(){return i(nR.apply(null,arguments))}}const De=r=>{const e=t=>t[r]||[];return e.isThemeGetter=!0,e},w_=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,b_=/^\((?:(\w[\w-]*):)?(.+)\)$/i,sR=/^\d+\/\d+$/,iR=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,oR=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,aR=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,cR=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,lR=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,pr=r=>sR.test(r),ie=r=>!!r&&!Number.isNaN(Number(r)),Rn=r=>!!r&&Number.isInteger(Number(r)),Of=r=>r.endsWith("%")&&ie(r.slice(0,-1)),Ht=r=>iR.test(r),uR=()=>!0,hR=r=>oR.test(r)&&!aR.test(r),vu=()=>!1,dR=r=>cR.test(r),fR=r=>lR.test(r),pR=r=>!q(r)&&!$(r),gR=r=>cs(r,S_,vu),q=r=>w_.test(r),Pn=r=>cs(r,R_,hR),dc=r=>cs(r,SR,ie),mR=r=>cs(r,T_,vu),_R=r=>cs(r,A_,fR),yR=r=>cs(r,vu,dR),$=r=>b_.test(r),to=r=>ls(r,R_),vR=r=>ls(r,RR),IR=r=>ls(r,T_),ER=r=>ls(r,S_),wR=r=>ls(r,A_),bR=r=>ls(r,PR,!0),cs=(r,e,t)=>{const n=w_.exec(r);return n?n[1]?e(n[1]):t(n[2]):!1},ls=(r,e,t=!1)=>{const n=b_.exec(r);return n?n[1]?e(n[1]):t:!1},T_=r=>r==="position",TR=new Set(["image","url"]),A_=r=>TR.has(r),AR=new Set(["length","size","percentage"]),S_=r=>AR.has(r),R_=r=>r==="length",SR=r=>r==="number",RR=r=>r==="family-name",PR=r=>r==="shadow",CR=()=>{const r=De("color"),e=De("font"),t=De("text"),n=De("font-weight"),s=De("tracking"),i=De("leading"),o=De("breakpoint"),c=De("container"),l=De("spacing"),h=De("radius"),f=De("shadow"),p=De("inset-shadow"),m=De("drop-shadow"),w=De("blur"),S=De("perspective"),C=De("aspect"),T=De("ease"),R=De("animate"),k=()=>["auto","avoid","all","avoid-page","page","left","right","column"],D=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],N=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto","contain","none"],M=()=>[$,q,l],v=()=>[pr,"full","auto",...M()],_=()=>[Rn,"none","subgrid",$,q],I=()=>["auto",{span:["full",Rn,$,q]},$,q],b=()=>[Rn,"auto",$,q],A=()=>["auto","min","max","fr",$,q],E=()=>["start","end","center","between","around","evenly","stretch","baseline"],y=()=>["start","end","center","stretch"],W=()=>["auto",...M()],Z=()=>[pr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...M()],j=()=>[r,$,q],ne=()=>[Of,Pn],J=()=>["","none","full",h,$,q],ee=()=>["",ie,to,Pn],fe=()=>["solid","dashed","dotted","double"],Se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ve=()=>["","none",w,$,q],Ie=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",$,q],pt=()=>["none",ie,$,q],We=()=>["none",ie,$,q],Bt=()=>[ie,$,q],at=()=>[pr,"full",...M()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ht],breakpoint:[Ht],color:[uR],container:[Ht],"drop-shadow":[Ht],ease:["in","out","in-out"],font:[pR],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ht],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ht],shadow:[Ht],spacing:["px",ie],text:[Ht],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",pr,q,$,C]}],container:["container"],columns:[{columns:[ie,q,$,c]}],"break-after":[{"break-after":k()}],"break-before":[{"break-before":k()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...D(),q,$]}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:v()}],"inset-x":[{"inset-x":v()}],"inset-y":[{"inset-y":v()}],start:[{start:v()}],end:[{end:v()}],top:[{top:v()}],right:[{right:v()}],bottom:[{bottom:v()}],left:[{left:v()}],visibility:["visible","invisible","collapse"],z:[{z:[Rn,"auto",$,q]}],basis:[{basis:[pr,"full","auto",c,...M()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ie,pr,"auto","initial","none",q]}],grow:[{grow:["",ie,$,q]}],shrink:[{shrink:["",ie,$,q]}],order:[{order:[Rn,"first","last","none",$,q]}],"grid-cols":[{"grid-cols":_()}],"col-start-end":[{col:I()}],"col-start":[{"col-start":b()}],"col-end":[{"col-end":b()}],"grid-rows":[{"grid-rows":_()}],"row-start-end":[{row:I()}],"row-start":[{"row-start":b()}],"row-end":[{"row-end":b()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":A()}],"auto-rows":[{"auto-rows":A()}],gap:[{gap:M()}],"gap-x":[{"gap-x":M()}],"gap-y":[{"gap-y":M()}],"justify-content":[{justify:[...E(),"normal"]}],"justify-items":[{"justify-items":[...y(),"normal"]}],"justify-self":[{"justify-self":["auto",...y()]}],"align-content":[{content:["normal",...E()]}],"align-items":[{items:[...y(),"baseline"]}],"align-self":[{self:["auto",...y(),"baseline"]}],"place-content":[{"place-content":E()}],"place-items":[{"place-items":[...y(),"baseline"]}],"place-self":[{"place-self":["auto",...y()]}],p:[{p:M()}],px:[{px:M()}],py:[{py:M()}],ps:[{ps:M()}],pe:[{pe:M()}],pt:[{pt:M()}],pr:[{pr:M()}],pb:[{pb:M()}],pl:[{pl:M()}],m:[{m:W()}],mx:[{mx:W()}],my:[{my:W()}],ms:[{ms:W()}],me:[{me:W()}],mt:[{mt:W()}],mr:[{mr:W()}],mb:[{mb:W()}],ml:[{ml:W()}],"space-x":[{"space-x":M()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":M()}],"space-y-reverse":["space-y-reverse"],size:[{size:Z()}],w:[{w:[c,"screen",...Z()]}],"min-w":[{"min-w":[c,"screen","none",...Z()]}],"max-w":[{"max-w":[c,"screen","none","prose",{screen:[o]},...Z()]}],h:[{h:["screen",...Z()]}],"min-h":[{"min-h":["screen","none",...Z()]}],"max-h":[{"max-h":["screen",...Z()]}],"font-size":[{text:["base",t,to,Pn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,$,dc]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Of,q]}],"font-family":[{font:[vR,q,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,$,q]}],"line-clamp":[{"line-clamp":[ie,"none",$,dc]}],leading:[{leading:[i,...M()]}],"list-image":[{"list-image":["none",$,q]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",$,q]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:j()}],"text-color":[{text:j()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...fe(),"wavy"]}],"text-decoration-thickness":[{decoration:[ie,"from-font","auto",$,Pn]}],"text-decoration-color":[{decoration:j()}],"underline-offset":[{"underline-offset":[ie,"auto",$,q]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:M()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",$,q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",$,q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...D(),IR,mR]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",ER,gR]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Rn,$,q],radial:["",$,q],conic:[Rn,$,q]},wR,_R]}],"bg-color":[{bg:j()}],"gradient-from-pos":[{from:ne()}],"gradient-via-pos":[{via:ne()}],"gradient-to-pos":[{to:ne()}],"gradient-from":[{from:j()}],"gradient-via":[{via:j()}],"gradient-to":[{to:j()}],rounded:[{rounded:J()}],"rounded-s":[{"rounded-s":J()}],"rounded-e":[{"rounded-e":J()}],"rounded-t":[{"rounded-t":J()}],"rounded-r":[{"rounded-r":J()}],"rounded-b":[{"rounded-b":J()}],"rounded-l":[{"rounded-l":J()}],"rounded-ss":[{"rounded-ss":J()}],"rounded-se":[{"rounded-se":J()}],"rounded-ee":[{"rounded-ee":J()}],"rounded-es":[{"rounded-es":J()}],"rounded-tl":[{"rounded-tl":J()}],"rounded-tr":[{"rounded-tr":J()}],"rounded-br":[{"rounded-br":J()}],"rounded-bl":[{"rounded-bl":J()}],"border-w":[{border:ee()}],"border-w-x":[{"border-x":ee()}],"border-w-y":[{"border-y":ee()}],"border-w-s":[{"border-s":ee()}],"border-w-e":[{"border-e":ee()}],"border-w-t":[{"border-t":ee()}],"border-w-r":[{"border-r":ee()}],"border-w-b":[{"border-b":ee()}],"border-w-l":[{"border-l":ee()}],"divide-x":[{"divide-x":ee()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ee()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...fe(),"hidden","none"]}],"divide-style":[{divide:[...fe(),"hidden","none"]}],"border-color":[{border:j()}],"border-color-x":[{"border-x":j()}],"border-color-y":[{"border-y":j()}],"border-color-s":[{"border-s":j()}],"border-color-e":[{"border-e":j()}],"border-color-t":[{"border-t":j()}],"border-color-r":[{"border-r":j()}],"border-color-b":[{"border-b":j()}],"border-color-l":[{"border-l":j()}],"divide-color":[{divide:j()}],"outline-style":[{outline:[...fe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ie,$,q]}],"outline-w":[{outline:["",ie,to,Pn]}],"outline-color":[{outline:[r]}],shadow:[{shadow:["","none",f,bR,yR]}],"shadow-color":[{shadow:j()}],"inset-shadow":[{"inset-shadow":["none",$,q,p]}],"inset-shadow-color":[{"inset-shadow":j()}],"ring-w":[{ring:ee()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:j()}],"ring-offset-w":[{"ring-offset":[ie,Pn]}],"ring-offset-color":[{"ring-offset":j()}],"inset-ring-w":[{"inset-ring":ee()}],"inset-ring-color":[{"inset-ring":j()}],opacity:[{opacity:[ie,$,q]}],"mix-blend":[{"mix-blend":[...Se(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Se()}],filter:[{filter:["","none",$,q]}],blur:[{blur:ve()}],brightness:[{brightness:[ie,$,q]}],contrast:[{contrast:[ie,$,q]}],"drop-shadow":[{"drop-shadow":["","none",m,$,q]}],grayscale:[{grayscale:["",ie,$,q]}],"hue-rotate":[{"hue-rotate":[ie,$,q]}],invert:[{invert:["",ie,$,q]}],saturate:[{saturate:[ie,$,q]}],sepia:[{sepia:["",ie,$,q]}],"backdrop-filter":[{"backdrop-filter":["","none",$,q]}],"backdrop-blur":[{"backdrop-blur":ve()}],"backdrop-brightness":[{"backdrop-brightness":[ie,$,q]}],"backdrop-contrast":[{"backdrop-contrast":[ie,$,q]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ie,$,q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ie,$,q]}],"backdrop-invert":[{"backdrop-invert":["",ie,$,q]}],"backdrop-opacity":[{"backdrop-opacity":[ie,$,q]}],"backdrop-saturate":[{"backdrop-saturate":[ie,$,q]}],"backdrop-sepia":[{"backdrop-sepia":["",ie,$,q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":M()}],"border-spacing-x":[{"border-spacing-x":M()}],"border-spacing-y":[{"border-spacing-y":M()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",$,q]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ie,"initial",$,q]}],ease:[{ease:["linear","initial",T,$,q]}],delay:[{delay:[ie,$,q]}],animate:[{animate:["none",R,$,q]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[S,$,q]}],"perspective-origin":[{"perspective-origin":Ie()}],rotate:[{rotate:pt()}],"rotate-x":[{"rotate-x":pt()}],"rotate-y":[{"rotate-y":pt()}],"rotate-z":[{"rotate-z":pt()}],scale:[{scale:We()}],"scale-x":[{"scale-x":We()}],"scale-y":[{"scale-y":We()}],"scale-z":[{"scale-z":We()}],"scale-3d":["scale-3d"],skew:[{skew:Bt()}],"skew-x":[{"skew-x":Bt()}],"skew-y":[{"skew-y":Bt()}],transform:[{transform:[$,q,"","none","gpu","cpu"]}],"transform-origin":[{origin:Ie()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:at()}],"translate-x":[{"translate-x":at()}],"translate-y":[{"translate-y":at()}],"translate-z":[{"translate-z":at()}],"translate-none":["translate-none"],accent:[{accent:j()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:j()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",$,q]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":M()}],"scroll-mx":[{"scroll-mx":M()}],"scroll-my":[{"scroll-my":M()}],"scroll-ms":[{"scroll-ms":M()}],"scroll-me":[{"scroll-me":M()}],"scroll-mt":[{"scroll-mt":M()}],"scroll-mr":[{"scroll-mr":M()}],"scroll-mb":[{"scroll-mb":M()}],"scroll-ml":[{"scroll-ml":M()}],"scroll-p":[{"scroll-p":M()}],"scroll-px":[{"scroll-px":M()}],"scroll-py":[{"scroll-py":M()}],"scroll-ps":[{"scroll-ps":M()}],"scroll-pe":[{"scroll-pe":M()}],"scroll-pt":[{"scroll-pt":M()}],"scroll-pr":[{"scroll-pr":M()}],"scroll-pb":[{"scroll-pb":M()}],"scroll-pl":[{"scroll-pl":M()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",$,q]}],fill:[{fill:["none",...j()]}],"stroke-w":[{stroke:[ie,to,Pn,dc]}],stroke:[{stroke:["none",...j()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}},xR=rR(CR);function Zn(...r){return xR(tp(r))}const kR=(r,e=300)=>{let t;return(...n)=>{clearTimeout(t),t=setTimeout(()=>{r.apply(void 0,n)},e)}};function VR(){let e=gr({}),t=gt(!0),n=vo(()=>Object.keys(e).length>0),s=gt(null),i=vo(()=>{var T;return"users/"+((T=te(s))==null?void 0:T.uid)}),o=[],c=[];function l(T,R){if(!te(s)){o.push(()=>l(T,R));return}const k=Sf(hc,te(i),...T),D=kf(k,N=>{R(N.id,N.exists()?N.data():null)},N=>{console.error("Error while syncing firestore doc",T,N)});c.push(D)}function h(T,R){if(!te(s)){o.push(()=>h(T,R));return}const k=yS(hc,te(i),...T),D=kf(k,N=>{N.docChanges().forEach(F=>{console.log("fetched doc",F.doc.id,N.metadata.fromCache||N.metadata.hasPendingWrites?"(local)":"(server)"),R(F.doc.id,F.type==="removed"?null:F.doc.data())})},N=>{console.error("Error while syncing firestore collection",T,N)});c.push(D)}function f(T,R){const k=T.join("/");if(e[k]!==void 0){e[k].data=R,e[k].publish();return}e[k]={publish:kR(async()=>{try{const D=Sf(hc,te(i),...T);R?(console.log("Publishing doc to firestore",k),await OS(D,e[k].data)):(console.log("Deleting doc from firestore",k),await MS(D))}catch(D){console.error("Error while publishing doc to firestore",k,D)}finally{delete e[k]}},1e3),data:R},e[k].publish()}async function p(T,R){await GE(eo,T,R)}async function m(){await KE(eo)}async function w(T){jE(eo,T).then(()=>{}).catch(R=>{const k=R.code,D=R.message;console.error("Error during password reset:",k,D)})}const S=eo.onAuthStateChanged(T=>{Qe(s,T,!0),Qe(t,!1),T===null?(console.warn("Logged out, unsubscribing from docs"),c.forEach(R=>R()),c=[]):(console.warn("Logged in, subscribing to docs"),o.forEach(R=>R()),o=[])});function C(){console.warn("Closing Firebase"),c.forEach(T=>T()),c=[],S()}return{get resetPassword(){return w},get user(){return te(s)},get isLoading(){return te(t)},get isPublishing(){return te(n)},get login(){return p},get logout(){return m},get destroy(){return C},get subscribeToCollection(){return h},get subscribeToDoc(){return l},get publishDoc(){return f}}}const P_=Symbol("firebase"),D0=()=>{const r=VR();return Jf(P_,r)},DR=()=>Yf(P_);function NR(){const r=DR();let e=gt(gr([])),t=gt(gr([0,0])),n=gt(gr([0,0])),s=gt(gr({})),i=gt(gr({username:"",color:""})),o=0,c=gt(!0),l=gt(""),h=gt(""),f=vo(()=>te(e).find(R=>R.id===te(h))),p=vo(()=>te(e).reduce((R,k)=>{const D=k.expenses.reduce((v,_)=>v+_.value,0),N=k.time.reduce((v,_)=>v+_.value,0),F=k.price-D,M=F/N;return R[k.id]={id:k.id,expenses:D,profit:F,time:N,hourlyRate:M,profitability:m(M)},R},{}));function m(R){if(isNaN(R)||!isFinite(R))return 0;const k=te(n)[0],D=te(n)[1],N=te(t)[0],F=te(t)[1],M=F/D,v=(N/D+F/k)/2,_=N/k;return R<M?0:R<v?1:R<_?2:3}const w=()=>{const R=crypto.randomUUID().slice(0,8);return te(e).push({id:R,url:"",expenses:[],time:[],price:0}),R},S=R=>{const k=te(e).findIndex(D=>D.id===R);k!==-1&&te(e).splice(k,1)};function C(){r.publishDoc([],{lastUpdated:o,settings:te(i),products:te(e),profitGoals:te(t),timeGoals:te(n),scenario:te(s)})}function T(R){Object.hasOwn(R,"settings")&&typeof R.settings=="object"&&R.settings!==null&&Qe(i,{username:typeof R.settings.username=="string"?R.settings.username:"",color:typeof R.settings.color=="string"?R.settings.color:""},!0),Object.hasOwn(R,"products")&&Array.isArray(R.products)&&Qe(e,R.products.filter(k=>typeof k.id=="string"&&Array.isArray(k.expenses)&&Array.isArray(k.time)&&typeof k.price=="number"),!0),Object.hasOwn(R,"profitGoals")&&Array.isArray(R.profitGoals)&&R.profitGoals.length===2&&Qe(t,[typeof R.profitGoals[0]=="number"?R.profitGoals[0]:0,typeof R.profitGoals[1]=="number"?R.profitGoals[1]:0],!0),Object.hasOwn(R,"timeGoals")&&Array.isArray(R.timeGoals)&&R.timeGoals.length===2&&Qe(n,[typeof R.timeGoals[0]=="number"?R.timeGoals[0]:0,typeof R.timeGoals[1]=="number"?R.timeGoals[1]:0],!0)}return r.subscribeToDoc([],(R,k)=>{r.isLoading||k===null||(k.lastUpdated===void 0||k.lastUpdated<o?C():k.lastUpdated>o?(Qe(c,!0),T(k)):k.lastUpdated===o&&console.log("app in sync with user doc"))}),My(()=>{JSON.stringify(te(e)),JSON.stringify(te(t)),JSON.stringify(te(n)),JSON.stringify(te(s)),JSON.stringify(te(i)),Qf(()=>{if(te(c)){Qe(c,!1);return}o=Date.now(),C()})}),{get products(){return te(e)},get selectedProduct(){return te(f)},get productData(){return te(p)},newProduct:w,deleteProduct:S,get authRedirect(){return te(l)},set authRedirect(R){Qe(l,R,!0)},get settings(){return te(i)},set settings(R){Qe(i,R,!0)},get selectedProductId(){return te(h)},set selectedProductId(R){Qe(h,R,!0)},get profitGoals(){return te(t)},set profitGoals(R){Qe(t,R,!0)},get timeGoals(){return te(n)},set timeGoals(R){Qe(n,R,!0)},get scenario(){return te(s)},set scenario(R){Qe(s,R,!0)}}}const C_=Symbol("App"),N0=()=>{const r=NR();return Jf(C_,r)},O0=()=>Yf(C_);/**
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
 */const OR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var MR=Wy("<svg><!><!></svg>");function M0(r,e){const t=bh(e,["children","$$slots","$$events","$$legacy"]),n=bh(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Zr(e,!1);let s=xe(e,"name",8,void 0),i=xe(e,"color",8,"currentColor"),o=xe(e,"size",8,24),c=xe(e,"strokeWidth",8,2),l=xe(e,"absoluteStrokeWidth",8,!1),h=xe(e,"iconNode",24,()=>[]);const f=(...C)=>C.filter((T,R,k)=>!!T&&k.indexOf(T)===R).join(" ");Hy();var p=MR();let m;var w=kr(p);Yy(w,1,h,Qy,(C,T)=>{let R=()=>te(T)[0],k=()=>te(T)[1];var D=gl(),N=fl(D);tv(N,R,!0,(F,M)=>{let v;kt(()=>v=Vt(F,v,{...k()}))}),dt(C,D)});var S=Ly(w);ev(S,e,"default",{}),Vr(p),kt((C,T)=>m=Vt(p,m,{...OR,...n,width:o(),height:o(),stroke:i(),"stroke-width":C,class:T}),[()=>l()?Number(c())*24/Number(o()):c(),()=>f("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)],jf),dt(r,p),es()}var Mf=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,He=r=>!r||typeof r!="object"||Object.keys(r).length===0,LR=(r,e)=>JSON.stringify(r)===JSON.stringify(e);function x_(r,e){r.forEach(function(t){Array.isArray(t)?x_(t,e):e.push(t)})}function k_(r){let e=[];return x_(r,e),e}var V_=(...r)=>k_(r).filter(Boolean),D_=(r,e)=>{let t={},n=Object.keys(r),s=Object.keys(e);for(let i of n)if(s.includes(i)){let o=r[i],c=e[i];Array.isArray(o)||Array.isArray(c)?t[i]=V_(c,o):typeof o=="object"&&typeof c=="object"?t[i]=D_(o,c):t[i]=c+" "+o}else t[i]=r[i];for(let i of s)n.includes(i)||(t[i]=e[i]);return t},Lf=r=>!r||typeof r!="string"?r:r.replace(/\s+/g," ").trim();const Iu="-",FR=r=>{const e=BR(r),{conflictingClassGroups:t,conflictingClassGroupModifiers:n}=r;return{getClassGroupId:o=>{const c=o.split(Iu);return c[0]===""&&c.length!==1&&c.shift(),N_(c,e)||UR(o)},getConflictingClassGroupIds:(o,c)=>{const l=t[o]||[];return c&&n[o]?[...l,...n[o]]:l}}},N_=(r,e)=>{var o;if(r.length===0)return e.classGroupId;const t=r[0],n=e.nextPart.get(t),s=n?N_(r.slice(1),n):void 0;if(s)return s;if(e.validators.length===0)return;const i=r.join(Iu);return(o=e.validators.find(({validator:c})=>c(i)))==null?void 0:o.classGroupId},Ff=/^\[(.+)\]$/,UR=r=>{if(Ff.test(r)){const e=Ff.exec(r)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},BR=r=>{const{theme:e,prefix:t}=r,n={nextPart:new Map,validators:[]};return jR(Object.entries(r.classGroups),t).forEach(([i,o])=>{rl(o,n,i,e)}),n},rl=(r,e,t,n)=>{r.forEach(s=>{if(typeof s=="string"){const i=s===""?e:Uf(e,s);i.classGroupId=t;return}if(typeof s=="function"){if(zR(s)){rl(s(n),e,t,n);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([i,o])=>{rl(o,Uf(e,i),t,n)})})},Uf=(r,e)=>{let t=r;return e.split(Iu).forEach(n=>{t.nextPart.has(n)||t.nextPart.set(n,{nextPart:new Map,validators:[]}),t=t.nextPart.get(n)}),t},zR=r=>r.isThemeGetter,jR=(r,e)=>e?r.map(([t,n])=>{const s=n.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,c])=>[e+o,c])):i);return[t,s]}):r,GR=r=>{if(r<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,n=new Map;const s=(i,o)=>{t.set(i,o),e++,e>r&&(e=0,n=t,t=new Map)};return{get(i){let o=t.get(i);if(o!==void 0)return o;if((o=n.get(i))!==void 0)return s(i,o),o},set(i,o){t.has(i)?t.set(i,o):s(i,o)}}},O_="!",qR=r=>{const{separator:e,experimentalParseClassName:t}=r,n=e.length===1,s=e[0],i=e.length,o=c=>{const l=[];let h=0,f=0,p;for(let T=0;T<c.length;T++){let R=c[T];if(h===0){if(R===s&&(n||c.slice(T,T+i)===e)){l.push(c.slice(f,T)),f=T+i;continue}if(R==="/"){p=T;continue}}R==="["?h++:R==="]"&&h--}const m=l.length===0?c:c.substring(f),w=m.startsWith(O_),S=w?m.substring(1):m,C=p&&p>f?p-f:void 0;return{modifiers:l,hasImportantModifier:w,baseClassName:S,maybePostfixModifierPosition:C}};return t?c=>t({className:c,parseClassName:o}):o},$R=r=>{if(r.length<=1)return r;const e=[];let t=[];return r.forEach(n=>{n[0]==="["?(e.push(...t.sort(),n),t=[]):t.push(n)}),e.push(...t.sort()),e},KR=r=>({cache:GR(r.cacheSize),parseClassName:qR(r),...FR(r)}),WR=/\s+/,HR=(r,e)=>{const{parseClassName:t,getClassGroupId:n,getConflictingClassGroupIds:s}=e,i=[],o=r.trim().split(WR);let c="";for(let l=o.length-1;l>=0;l-=1){const h=o[l],{modifiers:f,hasImportantModifier:p,baseClassName:m,maybePostfixModifierPosition:w}=t(h);let S=!!w,C=n(S?m.substring(0,w):m);if(!C){if(!S){c=h+(c.length>0?" "+c:c);continue}if(C=n(m),!C){c=h+(c.length>0?" "+c:c);continue}S=!1}const T=$R(f).join(":"),R=p?T+O_:T,k=R+C;if(i.includes(k))continue;i.push(k);const D=s(C,S);for(let N=0;N<D.length;++N){const F=D[N];i.push(R+F)}c=h+(c.length>0?" "+c:c)}return c};function QR(){let r=0,e,t,n="";for(;r<arguments.length;)(e=arguments[r++])&&(t=M_(e))&&(n&&(n+=" "),n+=t);return n}const M_=r=>{if(typeof r=="string")return r;let e,t="";for(let n=0;n<r.length;n++)r[n]&&(e=M_(r[n]))&&(t&&(t+=" "),t+=e);return t};function sl(r,...e){let t,n,s,i=o;function o(l){const h=e.reduce((f,p)=>p(f),r());return t=KR(h),n=t.cache.get,s=t.cache.set,i=c,c(l)}function c(l){const h=n(l);if(h)return h;const f=HR(l,t);return s(l,f),f}return function(){return i(QR.apply(null,arguments))}}const ye=r=>{const e=t=>t[r]||[];return e.isThemeGetter=!0,e},L_=/^\[(?:([a-z-]+):)?(.+)\]$/i,JR=/^\d+\/\d+$/,YR=new Set(["px","full","screen"]),XR=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ZR=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,e0=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,t0=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,n0=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,At=r=>Cr(r)||YR.has(r)||JR.test(r),Qt=r=>us(r,"length",u0),Cr=r=>!!r&&!Number.isNaN(Number(r)),fc=r=>us(r,"number",Cr),ks=r=>!!r&&Number.isInteger(Number(r)),r0=r=>r.endsWith("%")&&Cr(r.slice(0,-1)),re=r=>L_.test(r),Jt=r=>XR.test(r),s0=new Set(["length","size","percentage"]),i0=r=>us(r,s0,F_),o0=r=>us(r,"position",F_),a0=new Set(["image","url"]),c0=r=>us(r,a0,d0),l0=r=>us(r,"",h0),Vs=()=>!0,us=(r,e,t)=>{const n=L_.exec(r);return n?n[1]?typeof e=="string"?n[1]===e:e.has(n[1]):t(n[2]):!1},u0=r=>ZR.test(r)&&!e0.test(r),F_=()=>!1,h0=r=>t0.test(r),d0=r=>n0.test(r),il=()=>{const r=ye("colors"),e=ye("spacing"),t=ye("blur"),n=ye("brightness"),s=ye("borderColor"),i=ye("borderRadius"),o=ye("borderSpacing"),c=ye("borderWidth"),l=ye("contrast"),h=ye("grayscale"),f=ye("hueRotate"),p=ye("invert"),m=ye("gap"),w=ye("gradientColorStops"),S=ye("gradientColorStopPositions"),C=ye("inset"),T=ye("margin"),R=ye("opacity"),k=ye("padding"),D=ye("saturate"),N=ye("scale"),F=ye("sepia"),M=ye("skew"),v=ye("space"),_=ye("translate"),I=()=>["auto","contain","none"],b=()=>["auto","hidden","clip","visible","scroll"],A=()=>["auto",re,e],E=()=>[re,e],y=()=>["",At,Qt],W=()=>["auto",Cr,re],Z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],j=()=>["solid","dashed","dotted","double","none"],ne=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],J=()=>["start","end","center","between","around","evenly","stretch"],ee=()=>["","0",re],fe=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Se=()=>[Cr,re];return{cacheSize:500,separator:":",theme:{colors:[Vs],spacing:[At,Qt],blur:["none","",Jt,re],brightness:Se(),borderColor:[r],borderRadius:["none","","full",Jt,re],borderSpacing:E(),borderWidth:y(),contrast:Se(),grayscale:ee(),hueRotate:Se(),invert:ee(),gap:E(),gradientColorStops:[r],gradientColorStopPositions:[r0,Qt],inset:A(),margin:A(),opacity:Se(),padding:E(),saturate:Se(),scale:Se(),sepia:ee(),skew:Se(),space:E(),translate:E()},classGroups:{aspect:[{aspect:["auto","square","video",re]}],container:["container"],columns:[{columns:[Jt]}],"break-after":[{"break-after":fe()}],"break-before":[{"break-before":fe()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Z(),re]}],overflow:[{overflow:b()}],"overflow-x":[{"overflow-x":b()}],"overflow-y":[{"overflow-y":b()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[C]}],"inset-x":[{"inset-x":[C]}],"inset-y":[{"inset-y":[C]}],start:[{start:[C]}],end:[{end:[C]}],top:[{top:[C]}],right:[{right:[C]}],bottom:[{bottom:[C]}],left:[{left:[C]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ks,re]}],basis:[{basis:A()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",re]}],grow:[{grow:ee()}],shrink:[{shrink:ee()}],order:[{order:["first","last","none",ks,re]}],"grid-cols":[{"grid-cols":[Vs]}],"col-start-end":[{col:["auto",{span:["full",ks,re]},re]}],"col-start":[{"col-start":W()}],"col-end":[{"col-end":W()}],"grid-rows":[{"grid-rows":[Vs]}],"row-start-end":[{row:["auto",{span:[ks,re]},re]}],"row-start":[{"row-start":W()}],"row-end":[{"row-end":W()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",re]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",re]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...J()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...J(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...J(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[k]}],px:[{px:[k]}],py:[{py:[k]}],ps:[{ps:[k]}],pe:[{pe:[k]}],pt:[{pt:[k]}],pr:[{pr:[k]}],pb:[{pb:[k]}],pl:[{pl:[k]}],m:[{m:[T]}],mx:[{mx:[T]}],my:[{my:[T]}],ms:[{ms:[T]}],me:[{me:[T]}],mt:[{mt:[T]}],mr:[{mr:[T]}],mb:[{mb:[T]}],ml:[{ml:[T]}],"space-x":[{"space-x":[v]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[v]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",re,e]}],"min-w":[{"min-w":[re,e,"min","max","fit"]}],"max-w":[{"max-w":[re,e,"none","full","min","max","fit","prose",{screen:[Jt]},Jt]}],h:[{h:[re,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[re,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[re,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[re,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Jt,Qt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",fc]}],"font-family":[{font:[Vs]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",re]}],"line-clamp":[{"line-clamp":["none",Cr,fc]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",At,re]}],"list-image":[{"list-image":["none",re]}],"list-style-type":[{list:["none","disc","decimal",re]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[R]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[R]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...j(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",At,Qt]}],"underline-offset":[{"underline-offset":["auto",At,re]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:E()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",re]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",re]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[R]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Z(),o0]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",i0]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},c0]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[R]}],"border-style":[{border:[...j(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[R]}],"divide-style":[{divide:j()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...j()]}],"outline-offset":[{"outline-offset":[At,re]}],"outline-w":[{outline:[At,Qt]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[R]}],"ring-offset-w":[{"ring-offset":[At,Qt]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",Jt,l0]}],"shadow-color":[{shadow:[Vs]}],opacity:[{opacity:[R]}],"mix-blend":[{"mix-blend":[...ne(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ne()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Jt,re]}],grayscale:[{grayscale:[h]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[p]}],saturate:[{saturate:[D]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[h]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[R]}],"backdrop-saturate":[{"backdrop-saturate":[D]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",re]}],duration:[{duration:Se()}],ease:[{ease:["linear","in","out","in-out",re]}],delay:[{delay:Se()}],animate:[{animate:["none","spin","ping","pulse","bounce",re]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[N]}],"scale-x":[{"scale-x":[N]}],"scale-y":[{"scale-y":[N]}],rotate:[{rotate:[ks,re]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[M]}],"skew-y":[{"skew-y":[M]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",re]}],accent:[{accent:["auto",r]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",re]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":E()}],"scroll-mx":[{"scroll-mx":E()}],"scroll-my":[{"scroll-my":E()}],"scroll-ms":[{"scroll-ms":E()}],"scroll-me":[{"scroll-me":E()}],"scroll-mt":[{"scroll-mt":E()}],"scroll-mr":[{"scroll-mr":E()}],"scroll-mb":[{"scroll-mb":E()}],"scroll-ml":[{"scroll-ml":E()}],"scroll-p":[{"scroll-p":E()}],"scroll-px":[{"scroll-px":E()}],"scroll-py":[{"scroll-py":E()}],"scroll-ps":[{"scroll-ps":E()}],"scroll-pe":[{"scroll-pe":E()}],"scroll-pt":[{"scroll-pt":E()}],"scroll-pr":[{"scroll-pr":E()}],"scroll-pb":[{"scroll-pb":E()}],"scroll-pl":[{"scroll-pl":E()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",re]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[At,Qt,fc]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},f0=(r,{cacheSize:e,prefix:t,separator:n,experimentalParseClassName:s,extend:i={},override:o={}})=>{zs(r,"cacheSize",e),zs(r,"prefix",t),zs(r,"separator",n),zs(r,"experimentalParseClassName",s);for(const c in o)p0(r[c],o[c]);for(const c in i)g0(r[c],i[c]);return r},zs=(r,e,t)=>{t!==void 0&&(r[e]=t)},p0=(r,e)=>{if(e)for(const t in e)zs(r,t,e[t])},g0=(r,e)=>{if(e)for(const t in e){const n=e[t];n!==void 0&&(r[t]=(r[t]||[]).concat(n))}},m0=(r,...e)=>typeof r=="function"?sl(il,r,...e):sl(()=>f0(il(),r),...e),_0=sl(il);var y0={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},U_=r=>r||void 0,gi=(...r)=>U_(k_(r).filter(Boolean).join(" ")),pc=null,St={},ol=!1,Ds=(...r)=>e=>e.twMerge?((!pc||ol)&&(ol=!1,pc=He(St)?_0:m0({...St,extend:{theme:St.theme,classGroups:St.classGroups,conflictingClassGroupModifiers:St.conflictingClassGroupModifiers,conflictingClassGroups:St.conflictingClassGroups,...St.extend}})),U_(pc(gi(r)))):gi(r),Bf=(r,e)=>{for(let t in e)r.hasOwnProperty(t)?r[t]=gi(r[t],e[t]):r[t]=e[t];return r},v0=(r,e)=>{let{extend:t=null,slots:n={},variants:s={},compoundVariants:i=[],compoundSlots:o=[],defaultVariants:c={}}=r,l={...y0,...e},h=t!=null&&t.base?gi(t.base,r==null?void 0:r.base):r==null?void 0:r.base,f=t!=null&&t.variants&&!He(t.variants)?D_(s,t.variants):s,p=t!=null&&t.defaultVariants&&!He(t.defaultVariants)?{...t.defaultVariants,...c}:c;!He(l.twMergeConfig)&&!LR(l.twMergeConfig,St)&&(ol=!0,St=l.twMergeConfig);let m=He(t==null?void 0:t.slots),w=He(n)?{}:{base:gi(r==null?void 0:r.base,m&&(t==null?void 0:t.base)),...n},S=m?w:Bf({...t==null?void 0:t.slots},He(w)?{base:r==null?void 0:r.base}:w),C=He(t==null?void 0:t.compoundVariants)?i:V_(t==null?void 0:t.compoundVariants,i),T=k=>{if(He(f)&&He(n)&&m)return Ds(h,k==null?void 0:k.class,k==null?void 0:k.className)(l);if(C&&!Array.isArray(C))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof C}`);if(o&&!Array.isArray(o))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof o}`);let D=(E,y,W=[],Z)=>{let j=W;if(typeof y=="string")j=j.concat(Lf(y).split(" ").map(ne=>`${E}:${ne}`));else if(Array.isArray(y))j=j.concat(y.reduce((ne,J)=>ne.concat(`${E}:${J}`),[]));else if(typeof y=="object"&&typeof Z=="string"){for(let ne in y)if(y.hasOwnProperty(ne)&&ne===Z){let J=y[ne];if(J&&typeof J=="string"){let ee=Lf(J);j[Z]?j[Z]=j[Z].concat(ee.split(" ").map(fe=>`${E}:${fe}`)):j[Z]=ee.split(" ").map(fe=>`${E}:${fe}`)}else Array.isArray(J)&&J.length>0&&(j[Z]=J.reduce((ee,fe)=>ee.concat(`${E}:${fe}`),[]))}}return j},N=(E,y=f,W=null,Z=null)=>{var j;let ne=y[E];if(!ne||He(ne))return null;let J=(j=Z==null?void 0:Z[E])!=null?j:k==null?void 0:k[E];if(J===null)return null;let ee=Mf(J),fe=Array.isArray(l.responsiveVariants)&&l.responsiveVariants.length>0||l.responsiveVariants===!0,Se=p==null?void 0:p[E],ve=[];if(typeof ee=="object"&&fe)for(let[We,Bt]of Object.entries(ee)){let at=ne[Bt];if(We==="initial"){Se=Bt;continue}Array.isArray(l.responsiveVariants)&&!l.responsiveVariants.includes(We)||(ve=D(We,at,ve,W))}let Ie=ee!=null&&typeof ee!="object"?ee:Mf(Se),pt=ne[Ie||"false"];return typeof ve=="object"&&typeof W=="string"&&ve[W]?Bf(ve,pt):ve.length>0?(ve.push(pt),W==="base"?ve.join(" "):ve):pt},F=()=>f?Object.keys(f).map(E=>N(E,f)):null,M=(E,y)=>{if(!f||typeof f!="object")return null;let W=new Array;for(let Z in f){let j=N(Z,f,E,y),ne=E==="base"&&typeof j=="string"?j:j&&j[E];ne&&(W[W.length]=ne)}return W},v={};for(let E in k)k[E]!==void 0&&(v[E]=k[E]);let _=(E,y)=>{var W;let Z=typeof(k==null?void 0:k[E])=="object"?{[E]:(W=k[E])==null?void 0:W.initial}:{};return{...p,...v,...Z,...y}},I=(E=[],y)=>{let W=[];for(let{class:Z,className:j,...ne}of E){let J=!0;for(let[ee,fe]of Object.entries(ne)){let Se=_(ee,y)[ee];if(Array.isArray(fe)){if(!fe.includes(Se)){J=!1;break}}else{let ve=Ie=>Ie==null||Ie===!1;if(ve(fe)&&ve(Se))continue;if(Se!==fe){J=!1;break}}}J&&(Z&&W.push(Z),j&&W.push(j))}return W},b=E=>{let y=I(C,E);if(!Array.isArray(y))return y;let W={};for(let Z of y)if(typeof Z=="string"&&(W.base=Ds(W.base,Z)(l)),typeof Z=="object")for(let[j,ne]of Object.entries(Z))W[j]=Ds(W[j],ne)(l);return W},A=E=>{if(o.length<1)return null;let y={};for(let{slots:W=[],class:Z,className:j,...ne}of o){if(!He(ne)){let J=!0;for(let ee of Object.keys(ne)){let fe=_(ee,E)[ee];if(fe===void 0||(Array.isArray(ne[ee])?!ne[ee].includes(fe):ne[ee]!==fe)){J=!1;break}}if(!J)continue}for(let J of W)y[J]=y[J]||[],y[J].push([Z,j])}return y};if(!He(n)||!m){let E={};if(typeof S=="object"&&!He(S))for(let y of Object.keys(S))E[y]=W=>{var Z,j;return Ds(S[y],M(y,W),((Z=b(W))!=null?Z:[])[y],((j=A(W))!=null?j:[])[y],W==null?void 0:W.class,W==null?void 0:W.className)(l)};return E}return Ds(h,F(),I(C),k==null?void 0:k.class,k==null?void 0:k.className)(l)},R=()=>{if(!(!f||typeof f!="object"))return Object.keys(f)};return T.variantKeys=R(),T.extend=t,T.base=h,T.slots=S,T.variants=f,T.defaultVariants=p,T.compoundSlots=o,T.compoundVariants=C,T};const zf=v0({base:"ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border-input bg-background hover:bg-accent hover:text-accent-foreground border",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});var I0=er("<a><!></a>"),E0=er("<button><!></button>");function L0(r,e){Zr(e,!0);let t=xe(e,"variant",3,"default"),n=xe(e,"size",3,"default"),s=xe(e,"ref",15,null),i=xe(e,"href",3,void 0),o=xe(e,"type",3,"button"),c=mi(e,["$$slots","$$events","$$legacy","class","variant","size","ref","href","type","children"]);var l=gl(),h=fl(l);{var f=m=>{var w=I0();let S;var C=kr(w);Ys(C,()=>e.children??xr),Vr(w),zn(w,T=>s(T),()=>s()),kt(T=>S=Vt(w,S,{class:T,href:i(),...c}),[()=>Zn(zf({variant:t(),size:n()}),e.class)]),dt(m,w)},p=m=>{var w=E0();let S;var C=kr(w);Ys(C,()=>e.children??xr),Vr(w),zn(w,T=>s(T),()=>s()),kt(T=>S=Vt(w,S,{class:T,type:o(),...c}),[()=>Zn(zf({variant:t(),size:n()}),e.class)]),dt(m,w)};Xf(h,m=>{i()?m(f):m(p,!1)})}dt(r,l),es()}var w0=er("<div><!></div>");function F0(r,e){Zr(e,!0);let t=xe(e,"ref",15,null),n=mi(e,["$$slots","$$events","$$legacy","ref","class","children"]);var s=w0();let i;var o=kr(s);Ys(o,()=>e.children??xr),Vr(s),zn(s,c=>t(c),()=>t()),kt(c=>i=Vt(s,i,{class:c,...n}),[()=>Zn("p-6",e.class)]),dt(r,s),es()}var b0=er("<div><!></div>");function U0(r,e){Zr(e,!0);let t=xe(e,"ref",15,null),n=mi(e,["$$slots","$$events","$$legacy","ref","class","children"]);var s=b0();let i;var o=kr(s);Ys(o,()=>e.children??xr),Vr(s),zn(s,c=>t(c),()=>t()),kt(c=>i=Vt(s,i,{class:c,...n}),[()=>Zn("flex flex-col space-y-1.5 p-6 pb-0",e.class)]),dt(r,s),es()}var T0=er("<div><!></div>");function B0(r,e){Zr(e,!0);let t=xe(e,"ref",15,null),n=xe(e,"level",3,3),s=mi(e,["$$slots","$$events","$$legacy","ref","class","level","children"]);var i=T0();let o;var c=kr(i);Ys(c,()=>e.children??xr),Vr(i),zn(i,l=>t(l),()=>t()),kt(l=>o=Vt(i,o,{role:"heading","aria-level":n(),class:l,...s}),[()=>Zn("text-2xl font-semibold leading-none tracking-tight",e.class)]),dt(r,i),es()}var A0=er("<input>"),S0=er("<input>");function z0(r,e){Zr(e,!0);let t=xe(e,"ref",15,null),n=xe(e,"value",15),s=xe(e,"files",15),i=xe(e,"onfocus",3,()=>{}),o=mi(e,["$$slots","$$events","$$legacy","ref","value","type","files","class","onfocus"]);var c=gl(),l=fl(c);{var h=p=>{var m=A0();Ph(m);let w;zn(m,S=>t(S),()=>t()),kt(S=>w=Vt(m,w,{class:S,type:"file",...o}),[()=>Zn("border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e.class)]),cv(m,s),xh(m,n),dt(p,m)},f=p=>{var m=S0();Ph(m);var w=C=>{t().select(),i()(C)};let S;zn(m,C=>t(C),()=>t()),kt(C=>S=Vt(m,S,{class:C,type:e.type,onfocus:w,...o}),[()=>Zn("border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e.class)]),xh(m,n),dt(p,m)};Xf(l,p=>{e.type==="file"?p(h):p(f,!1)})}dt(r,c),es()}export{L0 as B,U0 as C,M0 as I,Ys as a,Vt as b,Zn as c,Io as d,Yy as e,z0 as f,O0 as g,nv as h,Qy as i,iv as j,B0 as k,F0 as l,DR as m,v0 as n,k0 as o,tv as p,tp as q,Ph as r,ev as s,xh as t,D0 as u,N0 as v,br as w,ov as x};
