import{W as c,b as E,X as w,h as i,L as A,M as m,O as p,P as v,c as r,A as _,Y as N,H as g,Z as b,_ as x,Q as M}from"./CqAhvcBZ.js";let a;function O(){a=void 0}function P(t){let n=null,e=i;var f;if(i){for(n=r,a===void 0&&(a=_(document.head));a!==null&&(a.nodeType!==8||a.data!==A);)a=m(a);a===null?p(!1):a=v(m(a))}i||(f=document.head.appendChild(c()));try{E(()=>t(f),w)}finally{e&&(p(!0),a=r,v(n))}}function y(t){var n=document.createElement("template");return n.innerHTML=t,n.content}function d(t,n){var e=g;e.nodes_start===null&&(e.nodes_start=t,e.nodes_end=n)}function R(t,n){var e=(n&b)!==0,f=(n&x)!==0,s,u=!t.startsWith("<!>");return()=>{if(i)return d(r,null),r;s===void 0&&(s=y(u?t:"<!>"+t),e||(s=_(s)));var o=f||N?document.importNode(s,!0):s.cloneNode(!0);if(e){var h=_(o),l=o.lastChild;d(h,l)}else d(o,o);return o}}function D(t,n,e="svg"){var f=!t.startsWith("<!>"),s=`<${e}>${f?t:"<!>"+t}</${e}>`,u;return()=>{if(i)return d(r,null),r;if(!u){var o=y(s),h=_(o);u=_(h)}var l=u.cloneNode(!0);return d(l,l),l}}function F(t=""){if(!i){var n=c(t+"");return d(n,n),n}var e=r;return e.nodeType!==3&&(e.before(e=c()),v(e)),d(e,e),e}function H(){if(i)return d(r,null),r;var t=document.createDocumentFragment(),n=document.createComment(""),e=c();return t.append(n,e),d(n,e),t}function I(t,n){if(i){g.nodes_end=r,M();return}t!==null&&t.before(n)}const C="5";var T;typeof window<"u"&&((T=window.__svelte??(window.__svelte={})).v??(T.v=new Set)).add(C);export{I as a,d as b,H as c,F as d,P as h,D as n,O as r,R as t};
