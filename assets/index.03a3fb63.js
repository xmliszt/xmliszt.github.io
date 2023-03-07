(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function rl(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const zv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hv=rl(zv);function Sd(t){return!!t||t===""}function wn(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Le(r)?Wv(r):wn(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Le(t))return t;if(Ne(t))return t}}const qv=/;(?![^(]*\))/g,Kv=/:(.+)/;function Wv(t){const e={};return t.split(qv).forEach(n=>{if(n){const r=n.split(Kv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Br(t){let e="";if(Le(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=Br(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ft=t=>Le(t)?t:t==null?"":G(t)||Ne(t)&&(t.toString===xd||!Z(t.toString))?JSON.stringify(t,Cd,2):String(t),Cd=(t,e)=>e&&e.__v_isRef?Cd(t,e.value):Er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:kd(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!G(e)&&!Od(e)?String(e):e,ge={},wr=[],Ct=()=>{},Gv=()=>!1,Yv=/^on[^a-z]/,Eo=t=>Yv.test(t),il=t=>t.startsWith("onUpdate:"),Ke=Object.assign,sl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xv=Object.prototype.hasOwnProperty,oe=(t,e)=>Xv.call(t,e),G=Array.isArray,Er=t=>To(t)==="[object Map]",kd=t=>To(t)==="[object Set]",Z=t=>typeof t=="function",Le=t=>typeof t=="string",ol=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Ad=t=>Ne(t)&&Z(t.then)&&Z(t.catch),xd=Object.prototype.toString,To=t=>xd.call(t),Qv=t=>To(t).slice(8,-1),Od=t=>To(t)==="[object Object]",al=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,As=rl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Io=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jv=/-(\w)/g,Ut=Io(t=>t.replace(Jv,(e,n)=>n?n.toUpperCase():"")),Zv=/\B([A-Z])/g,Vr=Io(t=>t.replace(Zv,"-$1").toLowerCase()),So=Io(t=>t.charAt(0).toUpperCase()+t.slice(1)),ya=Io(t=>t?`on${So(t)}`:""),Hs=(t,e)=>!Object.is(t,e),ba=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},qs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Nd=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wu;const ey=()=>Wu||(Wu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ot;class ty{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ot&&(this.parent=Ot,this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function ny(t,e=Ot){e&&e.active&&e.effects.push(t)}const cl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Rd=t=>(t.w&En)>0,Dd=t=>(t.n&En)>0,ry=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=En},iy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Rd(i)&&!Dd(i)?i.delete(t):e[n++]=i,i.w&=~En,i.n&=~En}e.length=n}},Qa=new WeakMap;let ai=0,En=1;const Ja=30;let wt;const qn=Symbol(""),Za=Symbol("");class ll{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ny(this,r)}run(){if(!this.active)return this.fn();let e=wt,n=yn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wt,wt=this,yn=!0,En=1<<++ai,ai<=Ja?ry(this):Gu(this),this.fn()}finally{ai<=Ja&&iy(this),En=1<<--ai,wt=this.parent,yn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(Gu(this),this.onStop&&this.onStop(),this.active=!1)}}function Gu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let yn=!0;const Pd=[];function jr(){Pd.push(yn),yn=!1}function zr(){const t=Pd.pop();yn=t===void 0?!0:t}function ft(t,e,n){if(yn&&wt){let r=Qa.get(t);r||Qa.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=cl()),Md(i)}}function Md(t,e){let n=!1;ai<=Ja?Dd(t)||(t.n|=En,n=!Rd(t)):n=!t.has(wt),n&&(t.add(wt),wt.deps.push(t))}function Gt(t,e,n,r,i,s){const o=Qa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?al(n)&&a.push(o.get("length")):(a.push(o.get(qn)),Er(t)&&a.push(o.get(Za)));break;case"delete":G(t)||(a.push(o.get(qn)),Er(t)&&a.push(o.get(Za)));break;case"set":Er(t)&&a.push(o.get(qn));break}if(a.length===1)a[0]&&ec(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ec(cl(c))}}function ec(t,e){const n=G(t)?t:[...t];for(const r of n)r.computed&&Yu(r);for(const r of n)r.computed||Yu(r)}function Yu(t,e){(t!==wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const sy=rl("__proto__,__v_isRef,__isVue"),Ld=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ol)),oy=ul(),ay=ul(!1,!0),cy=ul(!0),Xu=ly();function ly(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=de(this);for(let s=0,o=this.length;s<o;s++)ft(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(de)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){jr();const r=de(this)[e].apply(this,n);return zr(),r}}),t}function ul(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?Sy:Vd:e?Bd:$d).get(r))return r;const o=G(r);if(!t&&o&&oe(Xu,i))return Reflect.get(Xu,i,s);const a=Reflect.get(r,i,s);return(ol(i)?Ld.has(i):sy(i))||(t||ft(r,"get",i),e)?a:et(a)?o&&al(i)?a:a.value:Ne(a)?t?jd(a):dl(a):a}}const uy=Fd(),hy=Fd(!0);function Fd(t=!1){return function(n,r,i,s){let o=n[r];if(Si(o)&&et(o)&&!et(i))return!1;if(!t&&!Si(i)&&(tc(i)||(i=de(i),o=de(o)),!G(n)&&et(o)&&!et(i)))return o.value=i,!0;const a=G(n)&&al(r)?Number(r)<n.length:oe(n,r),c=Reflect.set(n,r,i,s);return n===de(s)&&(a?Hs(i,o)&&Gt(n,"set",r,i):Gt(n,"add",r,i)),c}}function fy(t,e){const n=oe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Gt(t,"delete",e,void 0),r}function dy(t,e){const n=Reflect.has(t,e);return(!ol(e)||!Ld.has(e))&&ft(t,"has",e),n}function py(t){return ft(t,"iterate",G(t)?"length":qn),Reflect.ownKeys(t)}const Ud={get:oy,set:uy,deleteProperty:fy,has:dy,ownKeys:py},my={get:cy,set(t,e){return!0},deleteProperty(t,e){return!0}},gy=Ke({},Ud,{get:ay,set:hy}),hl=t=>t,Co=t=>Reflect.getPrototypeOf(t);function fs(t,e,n=!1,r=!1){t=t.__v_raw;const i=de(t),s=de(e);n||(e!==s&&ft(i,"get",e),ft(i,"get",s));const{has:o}=Co(i),a=r?hl:n?gl:ml;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function ds(t,e=!1){const n=this.__v_raw,r=de(n),i=de(t);return e||(t!==i&&ft(r,"has",t),ft(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ps(t,e=!1){return t=t.__v_raw,!e&&ft(de(t),"iterate",qn),Reflect.get(t,"size",t)}function Qu(t){t=de(t);const e=de(this);return Co(e).has.call(e,t)||(e.add(t),Gt(e,"add",t,t)),this}function Ju(t,e){e=de(e);const n=de(this),{has:r,get:i}=Co(n);let s=r.call(n,t);s||(t=de(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Hs(e,o)&&Gt(n,"set",t,e):Gt(n,"add",t,e),this}function Zu(t){const e=de(this),{has:n,get:r}=Co(e);let i=n.call(e,t);i||(t=de(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Gt(e,"delete",t,void 0),s}function eh(){const t=de(this),e=t.size!==0,n=t.clear();return e&&Gt(t,"clear",void 0,void 0),n}function ms(t,e){return function(r,i){const s=this,o=s.__v_raw,a=de(o),c=e?hl:t?gl:ml;return!t&&ft(a,"iterate",qn),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function gs(t,e,n){return function(...r){const i=this.__v_raw,s=de(i),o=Er(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?hl:e?gl:ml;return!e&&ft(s,"iterate",c?Za:qn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function an(t){return function(...e){return t==="delete"?!1:this}}function vy(){const t={get(s){return fs(this,s)},get size(){return ps(this)},has:ds,add:Qu,set:Ju,delete:Zu,clear:eh,forEach:ms(!1,!1)},e={get(s){return fs(this,s,!1,!0)},get size(){return ps(this)},has:ds,add:Qu,set:Ju,delete:Zu,clear:eh,forEach:ms(!1,!0)},n={get(s){return fs(this,s,!0)},get size(){return ps(this,!0)},has(s){return ds.call(this,s,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:ms(!0,!1)},r={get(s){return fs(this,s,!0,!0)},get size(){return ps(this,!0)},has(s){return ds.call(this,s,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:ms(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=gs(s,!1,!1),n[s]=gs(s,!0,!1),e[s]=gs(s,!1,!0),r[s]=gs(s,!0,!0)}),[t,n,e,r]}const[yy,by,_y,wy]=vy();function fl(t,e){const n=e?t?wy:_y:t?by:yy;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(oe(n,i)&&i in r?n:r,i,s)}const Ey={get:fl(!1,!1)},Ty={get:fl(!1,!0)},Iy={get:fl(!0,!1)},$d=new WeakMap,Bd=new WeakMap,Vd=new WeakMap,Sy=new WeakMap;function Cy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ky(t){return t.__v_skip||!Object.isExtensible(t)?0:Cy(Qv(t))}function dl(t){return Si(t)?t:pl(t,!1,Ud,Ey,$d)}function Ay(t){return pl(t,!1,gy,Ty,Bd)}function jd(t){return pl(t,!0,my,Iy,Vd)}function pl(t,e,n,r,i){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=ky(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Tr(t){return Si(t)?Tr(t.__v_raw):!!(t&&t.__v_isReactive)}function Si(t){return!!(t&&t.__v_isReadonly)}function tc(t){return!!(t&&t.__v_isShallow)}function zd(t){return Tr(t)||Si(t)}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function Hd(t){return qs(t,"__v_skip",!0),t}const ml=t=>Ne(t)?dl(t):t,gl=t=>Ne(t)?jd(t):t;function xy(t){yn&&wt&&(t=de(t),Md(t.dep||(t.dep=cl())))}function Oy(t,e){t=de(t),t.dep&&ec(t.dep)}function et(t){return!!(t&&t.__v_isRef===!0)}function Ny(t){return et(t)?t.value:t}const Ry={get:(t,e,n)=>Ny(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return et(i)&&!et(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function qd(t){return Tr(t)?t:new Proxy(t,Ry)}class Dy{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ll(e,()=>{this._dirty||(this._dirty=!0,Oy(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=de(this);return xy(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Py(t,e,n=!1){let r,i;const s=Z(t);return s?(r=t,i=Ct):(r=t.get,i=t.set),new Dy(r,i,s||!i,n)}function bn(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){ko(s,e,n)}return i}function bt(t,e,n,r){if(Z(t)){const s=bn(t,e,n,r);return s&&Ad(s)&&s.catch(o=>{ko(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(bt(t[s],e,n,r));return i}function ko(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){bn(c,null,10,[t,o,a]);return}}My(t,n,i,r)}function My(t,e,n,r=!0){console.error(t)}let Ks=!1,nc=!1;const ht=[];let Ht=0;const fi=[];let ci=null,pr=0;const di=[];let fn=null,mr=0;const Kd=Promise.resolve();let vl=null,rc=null;function Ly(t){const e=vl||Kd;return t?e.then(this?t.bind(this):t):e}function Fy(t){let e=Ht+1,n=ht.length;for(;e<n;){const r=e+n>>>1;Ci(ht[r])<t?e=r+1:n=r}return e}function Wd(t){(!ht.length||!ht.includes(t,Ks&&t.allowRecurse?Ht+1:Ht))&&t!==rc&&(t.id==null?ht.push(t):ht.splice(Fy(t.id),0,t),Gd())}function Gd(){!Ks&&!nc&&(nc=!0,vl=Kd.then(Qd))}function Uy(t){const e=ht.indexOf(t);e>Ht&&ht.splice(e,1)}function Yd(t,e,n,r){G(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Gd()}function $y(t){Yd(t,ci,fi,pr)}function By(t){Yd(t,fn,di,mr)}function Ao(t,e=null){if(fi.length){for(rc=e,ci=[...new Set(fi)],fi.length=0,pr=0;pr<ci.length;pr++)ci[pr]();ci=null,pr=0,rc=null,Ao(t,e)}}function Xd(t){if(Ao(),di.length){const e=[...new Set(di)];if(di.length=0,fn){fn.push(...e);return}for(fn=e,fn.sort((n,r)=>Ci(n)-Ci(r)),mr=0;mr<fn.length;mr++)fn[mr]();fn=null,mr=0}}const Ci=t=>t.id==null?1/0:t.id;function Qd(t){nc=!1,Ks=!0,Ao(t),ht.sort((n,r)=>Ci(n)-Ci(r));const e=Ct;try{for(Ht=0;Ht<ht.length;Ht++){const n=ht[Ht];n&&n.active!==!1&&bn(n,null,14)}}finally{Ht=0,ht.length=0,Xd(),Ks=!1,vl=null,(ht.length||fi.length||di.length)&&Qd(t)}}function Vy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ge;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ge;f&&(i=n.map(p=>p.trim())),h&&(i=n.map(Nd))}let a,c=r[a=ya(e)]||r[a=ya(Ut(e))];!c&&s&&(c=r[a=ya(Vr(e))]),c&&bt(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bt(l,t,6,i)}}function Jd(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=Jd(l,e,!0);u&&(a=!0,Ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(r.set(t,null),null):(G(s)?s.forEach(c=>o[c]=null):Ke(o,s),r.set(t,o),o)}function xo(t,e){return!t||!Eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,Vr(e))||oe(t,e))}let yt=null,Oo=null;function Ws(t){const e=yt;return yt=t,Oo=t&&t.type.__scopeId||null,e}function No(t){Oo=t}function Ro(){Oo=null}function Zd(t,e=yt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&hh(-1);const s=Ws(e),o=t(...i);return Ws(s),r._d&&hh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function _a(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:E}=t;let b,v;const _=Ws(t);try{if(n.shapeFlag&4){const C=i||r;b=Nt(u.call(C,C,h,s,p,f,g)),v=c}else{const C=e;b=Nt(C.length>1?C(s,{attrs:c,slots:a,emit:l}):C(s,null)),v=e.props?c:jy(c)}}catch(C){pi.length=0,ko(C,t,1),b=le(kt)}let A=b;if(v&&E!==!1){const C=Object.keys(v),{shapeFlag:z}=A;C.length&&z&7&&(o&&C.some(il)&&(v=zy(v,o)),A=Tn(A,v))}return n.dirs&&(A=Tn(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),b=A,Ws(_),b}const jy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Eo(n))&&((e||(e={}))[n]=t[n]);return e},zy=(t,e)=>{const n={};for(const r in t)(!il(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Hy(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?th(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!xo(l,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?th(r,o,l):!0:!!o;return!1}function th(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!xo(n,s))return!0}return!1}function qy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ky=t=>t.__isSuspense;function Wy(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):By(t)}function Gy(t,e){if(Me){let n=Me.provides;const r=Me.parent&&Me.parent.provides;r===n&&(n=Me.provides=Object.create(r)),n[t]=e}}function wa(t,e,n=!1){const r=Me||yt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Z(e)?e.call(r.proxy):e}}const nh={};function xs(t,e,n){return ep(t,e,n)}function ep(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=ge){const a=Me;let c,l=!1,u=!1;if(et(t)?(c=()=>t.value,l=tc(t)):Tr(t)?(c=()=>t,r=!0):G(t)?(u=!0,l=t.some(v=>Tr(v)||tc(v)),c=()=>t.map(v=>{if(et(v))return v.value;if(Tr(v))return Bn(v);if(Z(v))return bn(v,a,2)})):Z(t)?e?c=()=>bn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),bt(t,a,3,[f])}:c=Ct,e&&r){const v=c;c=()=>Bn(v())}let h,f=v=>{h=b.onStop=()=>{bn(v,a,4)}};if(Ai)return f=Ct,e?n&&bt(e,a,3,[c(),u?[]:void 0,f]):c(),Ct;let p=u?[]:nh;const g=()=>{if(!!b.active)if(e){const v=b.run();(r||l||(u?v.some((_,A)=>Hs(_,p[A])):Hs(v,p)))&&(h&&h(),bt(e,a,3,[v,p===nh?void 0:p,f]),p=v)}else b.run()};g.allowRecurse=!!e;let E;i==="sync"?E=g:i==="post"?E=()=>rt(g,a&&a.suspense):E=()=>$y(g);const b=new ll(c,E);return e?n?g():p=b.run():i==="post"?rt(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&sl(a.scope.effects,b)}}function Yy(t,e,n){const r=this.proxy,i=Le(t)?t.includes(".")?tp(r,t):()=>r[t]:t.bind(r,r);let s;Z(e)?s=e:(s=e.handler,n=e);const o=Me;Nr(this);const a=ep(i,s.bind(r),n);return o?Nr(o):Kn(),a}function tp(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Bn(t,e){if(!Ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),et(t))Bn(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Bn(t[n],e);else if(kd(t)||Er(t))t.forEach(n=>{Bn(n,e)});else if(Od(t))for(const n in t)Bn(t[n],e);return t}function Xy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return op(()=>{t.isMounted=!0}),ap(()=>{t.isUnmounting=!0}),t}const gt=[Function,Array],Qy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gt,onEnter:gt,onAfterEnter:gt,onEnterCancelled:gt,onBeforeLeave:gt,onLeave:gt,onAfterLeave:gt,onLeaveCancelled:gt,onBeforeAppear:gt,onAppear:gt,onAfterAppear:gt,onAppearCancelled:gt},setup(t,{slots:e}){const n=Lb(),r=Xy();let i;return()=>{const s=e.default&&ip(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const E of s)if(E.type!==kt){o=E;break}}const a=de(t),{mode:c}=a;if(r.isLeaving)return Ea(o);const l=rh(o);if(!l)return Ea(o);const u=ic(l,a,r,n);sc(l,u);const h=n.subTree,f=h&&rh(h);let p=!1;const{getTransitionKey:g}=l.type;if(g){const E=g();i===void 0?i=E:E!==i&&(i=E,p=!0)}if(f&&f.type!==kt&&(!Un(l,f)||p)){const E=ic(f,a,r,n);if(sc(f,E),c==="out-in")return r.isLeaving=!0,E.afterLeave=()=>{r.isLeaving=!1,n.update()},Ea(o);c==="in-out"&&l.type!==kt&&(E.delayLeave=(b,v,_)=>{const A=rp(r,f);A[String(f.key)]=f,b._leaveCb=()=>{v(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=_})}return o}}},np=Qy;function rp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ic(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:E,onAppear:b,onAfterAppear:v,onAppearCancelled:_}=e,A=String(t.key),C=rp(n,t),z=(F,J)=>{F&&bt(F,r,9,J)},M=(F,J)=>{const ve=J[1];z(F,J),G(F)?F.every(Be=>Be.length<=1)&&ve():F.length<=1&&ve()},ie={mode:s,persisted:o,beforeEnter(F){let J=a;if(!n.isMounted)if(i)J=E||a;else return;F._leaveCb&&F._leaveCb(!0);const ve=C[A];ve&&Un(t,ve)&&ve.el._leaveCb&&ve.el._leaveCb(),z(J,[F])},enter(F){let J=c,ve=l,Be=u;if(!n.isMounted)if(i)J=b||c,ve=v||l,Be=_||u;else return;let U=!1;const Te=F._enterCb=mt=>{U||(U=!0,mt?z(Be,[F]):z(ve,[F]),ie.delayedLeave&&ie.delayedLeave(),F._enterCb=void 0)};J?M(J,[F,Te]):Te()},leave(F,J){const ve=String(t.key);if(F._enterCb&&F._enterCb(!0),n.isUnmounting)return J();z(h,[F]);let Be=!1;const U=F._leaveCb=Te=>{Be||(Be=!0,J(),Te?z(g,[F]):z(p,[F]),F._leaveCb=void 0,C[ve]===t&&delete C[ve])};C[ve]=t,f?M(f,[F,U]):U()},clone(F){return ic(F,e,n,r)}};return ie}function Ea(t){if(Do(t))return t=Tn(t),t.children=null,t}function rh(t){return Do(t)?t.children?t.children[0]:void 0:t}function sc(t,e){t.shapeFlag&6&&t.component?sc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ip(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===st?(o.patchFlag&128&&i++,r=r.concat(ip(o.children,e,a))):(e||o.type!==kt)&&r.push(a!=null?Tn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function yl(t){return Z(t)?{setup:t,name:t.name}:t}const Os=t=>!!t.type.__asyncLoader,Do=t=>t.type.__isKeepAlive;function Jy(t,e){sp(t,"a",e)}function Zy(t,e){sp(t,"da",e)}function sp(t,e,n=Me){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Po(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Do(i.parent.vnode)&&eb(r,e,n,i),i=i.parent}}function eb(t,e,n,r){const i=Po(e,t,r,!0);cp(()=>{sl(r[e],i)},n)}function Po(t,e,n=Me,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;jr(),Nr(n);const a=bt(e,n,t,o);return Kn(),zr(),a});return r?i.unshift(s):i.push(s),s}}const rn=t=>(e,n=Me)=>(!Ai||t==="sp")&&Po(t,e,n),tb=rn("bm"),op=rn("m"),nb=rn("bu"),rb=rn("u"),ap=rn("bum"),cp=rn("um"),ib=rn("sp"),sb=rn("rtg"),ob=rn("rtc");function ab(t,e=Me){Po("ec",t,e)}function cb(t,e){const n=yt;if(n===null)return t;const r=Lo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=ge]=e[s];Z(o)&&(o={mounted:o,updated:o}),o.deep&&Bn(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Rn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(jr(),bt(c,n,8,[t.el,a,t,e]),zr())}}const lp="components";function Ye(t,e){return ub(lp,t,!0,e)||t}const lb=Symbol();function ub(t,e,n=!0,r=!1){const i=yt||Me;if(i){const s=i.type;if(t===lp){const a=Vb(s,!1);if(a&&(a===e||a===Ut(e)||a===So(Ut(e))))return s}const o=ih(i[t]||s[t],e)||ih(i.appContext[t],e);return!o&&r?s:o}}function ih(t,e){return t&&(t[e]||t[Ut(e)]||t[So(Ut(e))])}function Ns(t,e,n,r){let i;const s=n&&n[r];if(G(t)||Le(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Ne(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const oc=t=>t?Ep(t)?Lo(t)||t.proxy:oc(t.parent):null,Gs=Ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>oc(t.parent),$root:t=>oc(t.root),$emit:t=>t.emit,$options:t=>hp(t),$forceUpdate:t=>t.f||(t.f=()=>Wd(t.update)),$nextTick:t=>t.n||(t.n=Ly.bind(t.proxy)),$watch:t=>Yy.bind(t)}),hb={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==ge&&oe(r,e))return o[e]=1,r[e];if(i!==ge&&oe(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&oe(l,e))return o[e]=3,s[e];if(n!==ge&&oe(n,e))return o[e]=4,n[e];ac&&(o[e]=0)}}const u=Gs[e];let h,f;if(u)return e==="$attrs"&&ft(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ge&&oe(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,oe(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==ge&&oe(i,e)?(i[e]=n,!0):r!==ge&&oe(r,e)?(r[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==ge&&oe(t,o)||e!==ge&&oe(e,o)||(a=s[0])&&oe(a,o)||oe(r,o)||oe(Gs,o)||oe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ac=!0;function fb(t){const e=hp(t),n=t.proxy,r=t.ctx;ac=!1,e.beforeCreate&&sh(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:E,deactivated:b,beforeDestroy:v,beforeUnmount:_,destroyed:A,unmounted:C,render:z,renderTracked:M,renderTriggered:ie,errorCaptured:F,serverPrefetch:J,expose:ve,inheritAttrs:Be,components:U,directives:Te,filters:mt}=e;if(l&&db(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Se in o){const ye=o[Se];Z(ye)&&(r[Se]=ye.bind(n))}if(i){const Se=i.call(n,n);Ne(Se)&&(t.data=dl(Se))}if(ac=!0,s)for(const Se in s){const ye=s[Se],jt=Z(ye)?ye.bind(n,n):Z(ye.get)?ye.get.bind(n,n):Ct,ma=!Z(ye)&&Z(ye.set)?ye.set.bind(n):Ct,ei=vt({get:jt,set:ma});Object.defineProperty(r,Se,{enumerable:!0,configurable:!0,get:()=>ei.value,set:ur=>ei.value=ur})}if(a)for(const Se in a)up(a[Se],r,n,Se);if(c){const Se=Z(c)?c.call(n):c;Reflect.ownKeys(Se).forEach(ye=>{Gy(ye,Se[ye])})}u&&sh(u,t,"c");function Ve(Se,ye){G(ye)?ye.forEach(jt=>Se(jt.bind(n))):ye&&Se(ye.bind(n))}if(Ve(tb,h),Ve(op,f),Ve(nb,p),Ve(rb,g),Ve(Jy,E),Ve(Zy,b),Ve(ab,F),Ve(ob,M),Ve(sb,ie),Ve(ap,_),Ve(cp,C),Ve(ib,J),G(ve))if(ve.length){const Se=t.exposed||(t.exposed={});ve.forEach(ye=>{Object.defineProperty(Se,ye,{get:()=>n[ye],set:jt=>n[ye]=jt})})}else t.exposed||(t.exposed={});z&&t.render===Ct&&(t.render=z),Be!=null&&(t.inheritAttrs=Be),U&&(t.components=U),Te&&(t.directives=Te)}function db(t,e,n=Ct,r=!1){G(t)&&(t=cc(t));for(const i in t){const s=t[i];let o;Ne(s)?"default"in s?o=wa(s.from||i,s.default,!0):o=wa(s.from||i):o=wa(s),et(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function sh(t,e,n){bt(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function up(t,e,n,r){const i=r.includes(".")?tp(n,r):()=>n[r];if(Le(t)){const s=e[t];Z(s)&&xs(i,s)}else if(Z(t))xs(i,t.bind(n));else if(Ne(t))if(G(t))t.forEach(s=>up(s,e,n,r));else{const s=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(s)&&xs(i,s,t)}}function hp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>Ys(c,l,o,!0)),Ys(c,e,o)),s.set(e,c),c}function Ys(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Ys(t,s,n,!0),i&&i.forEach(o=>Ys(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=pb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const pb={data:oh,props:Ln,emits:Ln,methods:Ln,computed:Ln,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:Ln,directives:Ln,watch:gb,provide:oh,inject:mb};function oh(t,e){return e?t?function(){return Ke(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function mb(t,e){return Ln(cc(t),cc(e))}function cc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Qe(t,e){return t?[...new Set([].concat(t,e))]:e}function Ln(t,e){return t?Ke(Ke(Object.create(null),t),e):e}function gb(t,e){if(!t)return e;if(!e)return t;const n=Ke(Object.create(null),t);for(const r in e)n[r]=Qe(t[r],e[r]);return n}function vb(t,e,n,r=!1){const i={},s={};qs(s,Mo,1),t.propsDefaults=Object.create(null),fp(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Ay(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function yb(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=de(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(xo(t.emitsOptions,f))continue;const p=e[f];if(c)if(oe(s,f))p!==s[f]&&(s[f]=p,l=!0);else{const g=Ut(f);i[g]=lc(c,a,g,p,t,!1)}else p!==s[f]&&(s[f]=p,l=!0)}}}else{fp(t,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!oe(e,h)&&((u=Vr(h))===h||!oe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=lc(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!oe(e,h)&&!0)&&(delete s[h],l=!0)}l&&Gt(t,"set","$attrs")}function fp(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(As(c))continue;const l=e[c];let u;i&&oe(i,u=Ut(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:xo(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=de(n),l=a||ge;for(let u=0;u<s.length;u++){const h=s[u];n[h]=lc(i,c,h,l[h],t,!oe(l,h))}}return o}function lc(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&Z(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(Nr(i),r=l[n]=c.call(null,e),Kn())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Vr(n))&&(r=!0))}return r}function dp(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[f,p]=dp(h,e,!0);Ke(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return r.set(t,wr),wr;if(G(s))for(let u=0;u<s.length;u++){const h=Ut(s[u]);ah(h)&&(o[h]=ge)}else if(s)for(const u in s){const h=Ut(u);if(ah(h)){const f=s[u],p=o[h]=G(f)||Z(f)?{type:f}:f;if(p){const g=uh(Boolean,p.type),E=uh(String,p.type);p[0]=g>-1,p[1]=E<0||g<E,(g>-1||oe(p,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function ah(t){return t[0]!=="$"}function ch(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function lh(t,e){return ch(t)===ch(e)}function uh(t,e){return G(e)?e.findIndex(n=>lh(n,t)):Z(e)&&lh(e,t)?0:-1}const pp=t=>t[0]==="_"||t==="$stable",bl=t=>G(t)?t.map(Nt):[Nt(t)],bb=(t,e,n)=>{if(e._n)return e;const r=Zd((...i)=>bl(e(...i)),n);return r._c=!1,r},mp=(t,e,n)=>{const r=t._ctx;for(const i in t){if(pp(i))continue;const s=t[i];if(Z(s))e[i]=bb(i,s,r);else if(s!=null){const o=bl(s);e[i]=()=>o}}},gp=(t,e)=>{const n=bl(e);t.slots.default=()=>n},_b=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=de(e),qs(e,"_",n)):mp(e,t.slots={})}else t.slots={},e&&gp(t,e);qs(t.slots,Mo,1)},wb=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=ge;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ke(i,e),!n&&a===1&&delete i._):(s=!e.$stable,mp(e,i)),o=e}else e&&(gp(t,e),o={default:1});if(s)for(const a in i)!pp(a)&&!(a in o)&&delete i[a]};function vp(){return{app:null,config:{isNativeTag:Gv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Eb=0;function Tb(t,e){return function(r,i=null){Z(r)||(r=Object.assign({},r)),i!=null&&!Ne(i)&&(i=null);const s=vp(),o=new Set;let a=!1;const c=s.app={_uid:Eb++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:zb,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const f=le(r,i);return f.appContext=s,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Lo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function uc(t,e,n,r,i=!1){if(G(t)){t.forEach((f,p)=>uc(f,e&&(G(e)?e[p]:e),n,r,i));return}if(Os(r)&&!i)return;const s=r.shapeFlag&4?Lo(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ge?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Le(l)?(u[l]=null,oe(h,l)&&(h[l]=null)):et(l)&&(l.value=null)),Z(c))bn(c,a,12,[o,u]);else{const f=Le(c),p=et(c);if(f||p){const g=()=>{if(t.f){const E=f?u[c]:c.value;i?G(E)&&sl(E,s):G(E)?E.includes(s)||E.push(s):f?(u[c]=[s],oe(h,c)&&(h[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,oe(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,rt(g,n)):g()}}}const rt=Wy;function Ib(t){return Sb(t)}function Sb(t,e){const n=ey();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Ct,cloneNode:g,insertStaticContent:E}=t,b=(d,m,y,T=null,w=null,x=null,R=!1,k=null,O=!!m.dynamicChildren)=>{if(d===m)return;d&&!Un(d,m)&&(T=hs(d),on(d,w,x,!0),d=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:I,ref:B,shapeFlag:L}=m;switch(I){case _l:v(d,m,y,T);break;case kt:_(d,m,y,T);break;case Rs:d==null&&A(m,y,T,R);break;case st:Te(d,m,y,T,w,x,R,k,O);break;default:L&1?M(d,m,y,T,w,x,R,k,O):L&6?mt(d,m,y,T,w,x,R,k,O):(L&64||L&128)&&I.process(d,m,y,T,w,x,R,k,O,hr)}B!=null&&w&&uc(B,d&&d.ref,x,m||d,!m)},v=(d,m,y,T)=>{if(d==null)r(m.el=a(m.children),y,T);else{const w=m.el=d.el;m.children!==d.children&&l(w,m.children)}},_=(d,m,y,T)=>{d==null?r(m.el=c(m.children||""),y,T):m.el=d.el},A=(d,m,y,T)=>{[d.el,d.anchor]=E(d.children,m,y,T,d.el,d.anchor)},C=({el:d,anchor:m},y,T)=>{let w;for(;d&&d!==m;)w=f(d),r(d,y,T),d=w;r(m,y,T)},z=({el:d,anchor:m})=>{let y;for(;d&&d!==m;)y=f(d),i(d),d=y;i(m)},M=(d,m,y,T,w,x,R,k,O)=>{R=R||m.type==="svg",d==null?ie(m,y,T,w,x,R,k,O):ve(d,m,w,x,R,k,O)},ie=(d,m,y,T,w,x,R,k)=>{let O,I;const{type:B,props:L,shapeFlag:V,transition:Y,patchFlag:ae,dirs:pe}=d;if(d.el&&g!==void 0&&ae===-1)O=d.el=g(d.el);else{if(O=d.el=o(d.type,x,L&&L.is,L),V&8?u(O,d.children):V&16&&J(d.children,O,null,T,w,x&&B!=="foreignObject",R,k),pe&&Rn(d,null,T,"created"),L){for(const be in L)be!=="value"&&!As(be)&&s(O,be,null,L[be],x,d.children,T,w,zt);"value"in L&&s(O,"value",null,L.value),(I=L.onVnodeBeforeMount)&&xt(I,T,d)}F(O,d,d.scopeId,R,T)}pe&&Rn(d,null,T,"beforeMount");const me=(!w||w&&!w.pendingBranch)&&Y&&!Y.persisted;me&&Y.beforeEnter(O),r(O,m,y),((I=L&&L.onVnodeMounted)||me||pe)&&rt(()=>{I&&xt(I,T,d),me&&Y.enter(O),pe&&Rn(d,null,T,"mounted")},w)},F=(d,m,y,T,w)=>{if(y&&p(d,y),T)for(let x=0;x<T.length;x++)p(d,T[x]);if(w){let x=w.subTree;if(m===x){const R=w.vnode;F(d,R,R.scopeId,R.slotScopeIds,w.parent)}}},J=(d,m,y,T,w,x,R,k,O=0)=>{for(let I=O;I<d.length;I++){const B=d[I]=k?dn(d[I]):Nt(d[I]);b(null,B,m,y,T,w,x,R,k)}},ve=(d,m,y,T,w,x,R)=>{const k=m.el=d.el;let{patchFlag:O,dynamicChildren:I,dirs:B}=m;O|=d.patchFlag&16;const L=d.props||ge,V=m.props||ge;let Y;y&&Dn(y,!1),(Y=V.onVnodeBeforeUpdate)&&xt(Y,y,m,d),B&&Rn(m,d,y,"beforeUpdate"),y&&Dn(y,!0);const ae=w&&m.type!=="foreignObject";if(I?Be(d.dynamicChildren,I,k,y,T,ae,x):R||jt(d,m,k,null,y,T,ae,x,!1),O>0){if(O&16)U(k,m,L,V,y,T,w);else if(O&2&&L.class!==V.class&&s(k,"class",null,V.class,w),O&4&&s(k,"style",L.style,V.style,w),O&8){const pe=m.dynamicProps;for(let me=0;me<pe.length;me++){const be=pe[me],_t=L[be],fr=V[be];(fr!==_t||be==="value")&&s(k,be,_t,fr,w,d.children,y,T,zt)}}O&1&&d.children!==m.children&&u(k,m.children)}else!R&&I==null&&U(k,m,L,V,y,T,w);((Y=V.onVnodeUpdated)||B)&&rt(()=>{Y&&xt(Y,y,m,d),B&&Rn(m,d,y,"updated")},T)},Be=(d,m,y,T,w,x,R)=>{for(let k=0;k<m.length;k++){const O=d[k],I=m[k],B=O.el&&(O.type===st||!Un(O,I)||O.shapeFlag&70)?h(O.el):y;b(O,I,B,null,T,w,x,R,!0)}},U=(d,m,y,T,w,x,R)=>{if(y!==T){for(const k in T){if(As(k))continue;const O=T[k],I=y[k];O!==I&&k!=="value"&&s(d,k,I,O,R,m.children,w,x,zt)}if(y!==ge)for(const k in y)!As(k)&&!(k in T)&&s(d,k,y[k],null,R,m.children,w,x,zt);"value"in T&&s(d,"value",y.value,T.value)}},Te=(d,m,y,T,w,x,R,k,O)=>{const I=m.el=d?d.el:a(""),B=m.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:V,slotScopeIds:Y}=m;Y&&(k=k?k.concat(Y):Y),d==null?(r(I,y,T),r(B,y,T),J(m.children,y,B,w,x,R,k,O)):L>0&&L&64&&V&&d.dynamicChildren?(Be(d.dynamicChildren,V,y,w,x,R,k),(m.key!=null||w&&m===w.subTree)&&yp(d,m,!0)):jt(d,m,y,B,w,x,R,k,O)},mt=(d,m,y,T,w,x,R,k,O)=>{m.slotScopeIds=k,d==null?m.shapeFlag&512?w.ctx.activate(m,y,T,R,O):lr(m,y,T,w,x,R,O):Ve(d,m,O)},lr=(d,m,y,T,w,x,R)=>{const k=d.component=Mb(d,T,w);if(Do(d)&&(k.ctx.renderer=hr),Fb(k),k.asyncDep){if(w&&w.registerDep(k,Se),!d.el){const O=k.subTree=le(kt);_(null,O,m,y)}return}Se(k,d,m,y,w,x,R)},Ve=(d,m,y)=>{const T=m.component=d.component;if(Hy(d,m,y))if(T.asyncDep&&!T.asyncResolved){ye(T,m,y);return}else T.next=m,Uy(T.update),T.update();else m.el=d.el,T.vnode=m},Se=(d,m,y,T,w,x,R)=>{const k=()=>{if(d.isMounted){let{next:B,bu:L,u:V,parent:Y,vnode:ae}=d,pe=B,me;Dn(d,!1),B?(B.el=ae.el,ye(d,B,R)):B=ae,L&&ba(L),(me=B.props&&B.props.onVnodeBeforeUpdate)&&xt(me,Y,B,ae),Dn(d,!0);const be=_a(d),_t=d.subTree;d.subTree=be,b(_t,be,h(_t.el),hs(_t),d,w,x),B.el=be.el,pe===null&&qy(d,be.el),V&&rt(V,w),(me=B.props&&B.props.onVnodeUpdated)&&rt(()=>xt(me,Y,B,ae),w)}else{let B;const{el:L,props:V}=m,{bm:Y,m:ae,parent:pe}=d,me=Os(m);if(Dn(d,!1),Y&&ba(Y),!me&&(B=V&&V.onVnodeBeforeMount)&&xt(B,pe,m),Dn(d,!0),L&&va){const be=()=>{d.subTree=_a(d),va(L,d.subTree,d,w,null)};me?m.type.__asyncLoader().then(()=>!d.isUnmounted&&be()):be()}else{const be=d.subTree=_a(d);b(null,be,y,T,d,w,x),m.el=be.el}if(ae&&rt(ae,w),!me&&(B=V&&V.onVnodeMounted)){const be=m;rt(()=>xt(B,pe,be),w)}(m.shapeFlag&256||pe&&Os(pe.vnode)&&pe.vnode.shapeFlag&256)&&d.a&&rt(d.a,w),d.isMounted=!0,m=y=T=null}},O=d.effect=new ll(k,()=>Wd(I),d.scope),I=d.update=()=>O.run();I.id=d.uid,Dn(d,!0),I()},ye=(d,m,y)=>{m.component=d;const T=d.vnode.props;d.vnode=m,d.next=null,yb(d,m.props,T,y),wb(d,m.children,y),jr(),Ao(void 0,d.update),zr()},jt=(d,m,y,T,w,x,R,k,O=!1)=>{const I=d&&d.children,B=d?d.shapeFlag:0,L=m.children,{patchFlag:V,shapeFlag:Y}=m;if(V>0){if(V&128){ei(I,L,y,T,w,x,R,k,O);return}else if(V&256){ma(I,L,y,T,w,x,R,k,O);return}}Y&8?(B&16&&zt(I,w,x),L!==I&&u(y,L)):B&16?Y&16?ei(I,L,y,T,w,x,R,k,O):zt(I,w,x,!0):(B&8&&u(y,""),Y&16&&J(L,y,T,w,x,R,k,O))},ma=(d,m,y,T,w,x,R,k,O)=>{d=d||wr,m=m||wr;const I=d.length,B=m.length,L=Math.min(I,B);let V;for(V=0;V<L;V++){const Y=m[V]=O?dn(m[V]):Nt(m[V]);b(d[V],Y,y,null,w,x,R,k,O)}I>B?zt(d,w,x,!0,!1,L):J(m,y,T,w,x,R,k,O,L)},ei=(d,m,y,T,w,x,R,k,O)=>{let I=0;const B=m.length;let L=d.length-1,V=B-1;for(;I<=L&&I<=V;){const Y=d[I],ae=m[I]=O?dn(m[I]):Nt(m[I]);if(Un(Y,ae))b(Y,ae,y,null,w,x,R,k,O);else break;I++}for(;I<=L&&I<=V;){const Y=d[L],ae=m[V]=O?dn(m[V]):Nt(m[V]);if(Un(Y,ae))b(Y,ae,y,null,w,x,R,k,O);else break;L--,V--}if(I>L){if(I<=V){const Y=V+1,ae=Y<B?m[Y].el:T;for(;I<=V;)b(null,m[I]=O?dn(m[I]):Nt(m[I]),y,ae,w,x,R,k,O),I++}}else if(I>V)for(;I<=L;)on(d[I],w,x,!0),I++;else{const Y=I,ae=I,pe=new Map;for(I=ae;I<=V;I++){const ut=m[I]=O?dn(m[I]):Nt(m[I]);ut.key!=null&&pe.set(ut.key,I)}let me,be=0;const _t=V-ae+1;let fr=!1,Hu=0;const ti=new Array(_t);for(I=0;I<_t;I++)ti[I]=0;for(I=Y;I<=L;I++){const ut=d[I];if(be>=_t){on(ut,w,x,!0);continue}let At;if(ut.key!=null)At=pe.get(ut.key);else for(me=ae;me<=V;me++)if(ti[me-ae]===0&&Un(ut,m[me])){At=me;break}At===void 0?on(ut,w,x,!0):(ti[At-ae]=I+1,At>=Hu?Hu=At:fr=!0,b(ut,m[At],y,null,w,x,R,k,O),be++)}const qu=fr?Cb(ti):wr;for(me=qu.length-1,I=_t-1;I>=0;I--){const ut=ae+I,At=m[ut],Ku=ut+1<B?m[ut+1].el:T;ti[I]===0?b(null,At,y,Ku,w,x,R,k,O):fr&&(me<0||I!==qu[me]?ur(At,y,Ku,2):me--)}}},ur=(d,m,y,T,w=null)=>{const{el:x,type:R,transition:k,children:O,shapeFlag:I}=d;if(I&6){ur(d.component.subTree,m,y,T);return}if(I&128){d.suspense.move(m,y,T);return}if(I&64){R.move(d,m,y,hr);return}if(R===st){r(x,m,y);for(let L=0;L<O.length;L++)ur(O[L],m,y,T);r(d.anchor,m,y);return}if(R===Rs){C(d,m,y);return}if(T!==2&&I&1&&k)if(T===0)k.beforeEnter(x),r(x,m,y),rt(()=>k.enter(x),w);else{const{leave:L,delayLeave:V,afterLeave:Y}=k,ae=()=>r(x,m,y),pe=()=>{L(x,()=>{ae(),Y&&Y()})};V?V(x,ae,pe):pe()}else r(x,m,y)},on=(d,m,y,T=!1,w=!1)=>{const{type:x,props:R,ref:k,children:O,dynamicChildren:I,shapeFlag:B,patchFlag:L,dirs:V}=d;if(k!=null&&uc(k,null,y,d,!0),B&256){m.ctx.deactivate(d);return}const Y=B&1&&V,ae=!Os(d);let pe;if(ae&&(pe=R&&R.onVnodeBeforeUnmount)&&xt(pe,m,d),B&6)jv(d.component,y,T);else{if(B&128){d.suspense.unmount(y,T);return}Y&&Rn(d,null,m,"beforeUnmount"),B&64?d.type.remove(d,m,y,w,hr,T):I&&(x!==st||L>0&&L&64)?zt(I,m,y,!1,!0):(x===st&&L&384||!w&&B&16)&&zt(O,m,y),T&&ju(d)}(ae&&(pe=R&&R.onVnodeUnmounted)||Y)&&rt(()=>{pe&&xt(pe,m,d),Y&&Rn(d,null,m,"unmounted")},y)},ju=d=>{const{type:m,el:y,anchor:T,transition:w}=d;if(m===st){Vv(y,T);return}if(m===Rs){z(d);return}const x=()=>{i(y),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:R,delayLeave:k}=w,O=()=>R(y,x);k?k(d.el,x,O):O()}else x()},Vv=(d,m)=>{let y;for(;d!==m;)y=f(d),i(d),d=y;i(m)},jv=(d,m,y)=>{const{bum:T,scope:w,update:x,subTree:R,um:k}=d;T&&ba(T),w.stop(),x&&(x.active=!1,on(R,d,m,y)),k&&rt(k,m),rt(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},zt=(d,m,y,T=!1,w=!1,x=0)=>{for(let R=x;R<d.length;R++)on(d[R],m,y,T,w)},hs=d=>d.shapeFlag&6?hs(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),zu=(d,m,y)=>{d==null?m._vnode&&on(m._vnode,null,null,!0):b(m._vnode||null,d,m,null,null,null,y),Xd(),m._vnode=d},hr={p:b,um:on,m:ur,r:ju,mt:lr,mc:J,pc:jt,pbc:Be,n:hs,o:t};let ga,va;return e&&([ga,va]=e(hr)),{render:zu,hydrate:ga,createApp:Tb(zu,ga)}}function Dn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yp(t,e,n=!1){const r=t.children,i=e.children;if(G(r)&&G(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=dn(i[s]),a.el=o.el),n||yp(o,a))}}function Cb(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const kb=t=>t.__isTeleport,st=Symbol(void 0),_l=Symbol(void 0),kt=Symbol(void 0),Rs=Symbol(void 0),pi=[];let Tt=null;function we(t=!1){pi.push(Tt=t?null:[])}function Ab(){pi.pop(),Tt=pi[pi.length-1]||null}let ki=1;function hh(t){ki+=t}function bp(t){return t.dynamicChildren=ki>0?Tt||wr:null,Ab(),ki>0&&Tt&&Tt.push(t),t}function ke(t,e,n,r,i,s){return bp(ee(t,e,n,r,i,s,!0))}function wl(t,e,n,r,i){return bp(le(t,e,n,r,i,!0))}function hc(t){return t?t.__v_isVNode===!0:!1}function Un(t,e){return t.type===e.type&&t.key===e.key}const Mo="__vInternal",_p=({key:t})=>t!=null?t:null,Ds=({ref:t,ref_key:e,ref_for:n})=>t!=null?Le(t)||et(t)||Z(t)?{i:yt,r:t,k:e,f:!!n}:t:null;function ee(t,e=null,n=null,r=0,i=null,s=t===st?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_p(e),ref:e&&Ds(e),scopeId:Oo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(El(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),ki>0&&!o&&Tt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Tt.push(c),c}const le=xb;function xb(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===lb)&&(t=kt),hc(t)){const a=Tn(t,e,!0);return n&&El(a,n),ki>0&&!s&&Tt&&(a.shapeFlag&6?Tt[Tt.indexOf(t)]=a:Tt.push(a)),a.patchFlag|=-2,a}if(jb(t)&&(t=t.__vccOpts),e){e=Ob(e);let{class:a,style:c}=e;a&&!Le(a)&&(e.class=Br(a)),Ne(c)&&(zd(c)&&!G(c)&&(c=Ke({},c)),e.style=wn(c))}const o=Le(t)?1:Ky(t)?128:kb(t)?64:Ne(t)?4:Z(t)?2:0;return ee(t,e,n,r,i,o,s,!0)}function Ob(t){return t?zd(t)||Mo in t?Ke({},t):t:null}function Tn(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Rb(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&_p(a),ref:e&&e.ref?n&&i?G(i)?i.concat(Ds(e)):[i,Ds(e)]:Ds(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==st?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tn(t.ssContent),ssFallback:t.ssFallback&&Tn(t.ssFallback),el:t.el,anchor:t.anchor}}function wp(t=" ",e=0){return le(_l,null,t,e)}function Nb(t,e){const n=le(Rs,null,t);return n.staticCount=e,n}function fh(t="",e=!1){return e?(we(),wl(kt,null,t)):le(kt,null,t)}function Nt(t){return t==null||typeof t=="boolean"?le(kt):G(t)?le(st,null,t.slice()):typeof t=="object"?dn(t):le(_l,null,String(t))}function dn(t){return t.el===null||t.memo?t:Tn(t)}function El(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),El(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Mo in e)?e._ctx=yt:i===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),r&64?(n=16,e=[wp(e)]):n=8);t.children=e,t.shapeFlag|=n}function Rb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Br([e.class,r.class]));else if(i==="style")e.style=wn([e.style,r.style]);else if(Eo(i)){const s=e[i],o=r[i];o&&s!==o&&!(G(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function xt(t,e,n,r=null){bt(t,e,7,[n,r])}const Db=vp();let Pb=0;function Mb(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Db,s={uid:Pb++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new ty(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dp(r,i),emitsOptions:Jd(r,i),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:r.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Vy.bind(null,s),t.ce&&t.ce(s),s}let Me=null;const Lb=()=>Me||yt,Nr=t=>{Me=t,t.scope.on()},Kn=()=>{Me&&Me.scope.off(),Me=null};function Ep(t){return t.vnode.shapeFlag&4}let Ai=!1;function Fb(t,e=!1){Ai=e;const{props:n,children:r}=t.vnode,i=Ep(t);vb(t,n,i,e),_b(t,r);const s=i?Ub(t,e):void 0;return Ai=!1,s}function Ub(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Hd(new Proxy(t.ctx,hb));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Bb(t):null;Nr(t),jr();const s=bn(r,t,0,[t.props,i]);if(zr(),Kn(),Ad(s)){if(s.then(Kn,Kn),e)return s.then(o=>{dh(t,o,e)}).catch(o=>{ko(o,t,0)});t.asyncDep=s}else dh(t,s,e)}else Tp(t,e)}function dh(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=qd(e)),Tp(t,n)}let ph;function Tp(t,e,n){const r=t.type;if(!t.render){if(!e&&ph&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ke(Ke({isCustomElement:s,delimiters:a},o),c);r.render=ph(i,l)}}t.render=r.render||Ct}Nr(t),jr(),fb(t),zr(),Kn()}function $b(t){return new Proxy(t.attrs,{get(e,n){return ft(t,"get","$attrs"),e[n]}})}function Bb(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=$b(t))},slots:t.slots,emit:t.emit,expose:e}}function Lo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qd(Hd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gs)return Gs[n](t)}}))}function Vb(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function jb(t){return Z(t)&&"__vccOpts"in t}const vt=(t,e)=>Py(t,e,Ai);function Ir(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!G(e)?hc(e)?le(t,null,[e]):le(t,e):le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hc(n)&&(n=[n]),le(t,e,n))}const zb="3.2.37",Hb="http://www.w3.org/2000/svg",$n=typeof document<"u"?document:null,mh=$n&&$n.createElement("template"),qb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?$n.createElementNS(Hb,t):$n.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>$n.createTextNode(t),createComment:t=>$n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{mh.innerHTML=r?`<svg>${t}</svg>`:t;const a=mh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Kb(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Wb(t,e,n){const r=t.style,i=Le(n);if(n&&!i){for(const s in n)fc(r,s,n[s]);if(e&&!Le(e))for(const s in e)n[s]==null&&fc(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const gh=/\s*!important$/;function fc(t,e,n){if(G(n))n.forEach(r=>fc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Gb(t,e);gh.test(n)?t.setProperty(Vr(r),n.replace(gh,""),"important"):t[r]=n}}const vh=["Webkit","Moz","ms"],Ta={};function Gb(t,e){const n=Ta[e];if(n)return n;let r=Ut(e);if(r!=="filter"&&r in t)return Ta[e]=r;r=So(r);for(let i=0;i<vh.length;i++){const s=vh[i]+r;if(s in t)return Ta[e]=s}return e}const yh="http://www.w3.org/1999/xlink";function Yb(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(yh,e.slice(6,e.length)):t.setAttributeNS(yh,e,n);else{const s=Hv(e);n==null||s&&!Sd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Xb(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Sd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Ip,Qb]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let dc=0;const Jb=Promise.resolve(),Zb=()=>{dc=0},e0=()=>dc||(Jb.then(Zb),dc=Ip());function t0(t,e,n,r){t.addEventListener(e,n,r)}function n0(t,e,n,r){t.removeEventListener(e,n,r)}function r0(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=i0(e);if(r){const l=s[e]=s0(r,i);t0(t,a,l,c)}else o&&(n0(t,a,o,c),s[e]=void 0)}}const bh=/(?:Once|Passive|Capture)$/;function i0(t){let e;if(bh.test(t)){e={};let n;for(;n=t.match(bh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Vr(t.slice(2)),e]}function s0(t,e){const n=r=>{const i=r.timeStamp||Ip();(Qb||i>=n.attached-1)&&bt(o0(r,n.value),e,5,[r])};return n.value=t,n.attached=e0(),n}function o0(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const _h=/^on[a-z]/,a0=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?Kb(t,r,i):e==="style"?Wb(t,n,r):Eo(e)?il(e)||r0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):c0(t,e,r,i))?Xb(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Yb(t,e,r,i))};function c0(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&_h.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||_h.test(e)&&Le(n)?!1:e in t}const cn="transition",ni="animation",Tl=(t,{slots:e})=>Ir(np,l0(t),e);Tl.displayName="Transition";const Sp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Tl.props=Ke({},np.props,Sp);const Pn=(t,e=[])=>{G(t)?t.forEach(n=>n(...e)):t&&t(...e)},wh=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function l0(t){const e={};for(const U in t)U in Sp||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=u0(i),E=g&&g[0],b=g&&g[1],{onBeforeEnter:v,onEnter:_,onEnterCancelled:A,onLeave:C,onLeaveCancelled:z,onBeforeAppear:M=v,onAppear:ie=_,onAppearCancelled:F=A}=e,J=(U,Te,mt)=>{Mn(U,Te?u:a),Mn(U,Te?l:o),mt&&mt()},ve=(U,Te)=>{U._isLeaving=!1,Mn(U,h),Mn(U,p),Mn(U,f),Te&&Te()},Be=U=>(Te,mt)=>{const lr=U?ie:_,Ve=()=>J(Te,U,mt);Pn(lr,[Te,Ve]),Eh(()=>{Mn(Te,U?c:s),ln(Te,U?u:a),wh(lr)||Th(Te,r,E,Ve)})};return Ke(e,{onBeforeEnter(U){Pn(v,[U]),ln(U,s),ln(U,o)},onBeforeAppear(U){Pn(M,[U]),ln(U,c),ln(U,l)},onEnter:Be(!1),onAppear:Be(!0),onLeave(U,Te){U._isLeaving=!0;const mt=()=>ve(U,Te);ln(U,h),d0(),ln(U,f),Eh(()=>{!U._isLeaving||(Mn(U,h),ln(U,p),wh(C)||Th(U,r,b,mt))}),Pn(C,[U,mt])},onEnterCancelled(U){J(U,!1),Pn(A,[U])},onAppearCancelled(U){J(U,!0),Pn(F,[U])},onLeaveCancelled(U){ve(U),Pn(z,[U])}})}function u0(t){if(t==null)return null;if(Ne(t))return[Ia(t.enter),Ia(t.leave)];{const e=Ia(t);return[e,e]}}function Ia(t){return Nd(t)}function ln(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Mn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Eh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let h0=0;function Th(t,e,n,r){const i=t._endId=++h0,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=f0(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),s()},f=p=>{p.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function f0(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),i=r(cn+"Delay"),s=r(cn+"Duration"),o=Ih(i,s),a=r(ni+"Delay"),c=r(ni+"Duration"),l=Ih(a,c);let u=null,h=0,f=0;e===cn?o>0&&(u=cn,h=o,f=s.length):e===ni?l>0&&(u=ni,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?cn:ni:null,f=u?u===cn?s.length:c.length:0);const p=u===cn&&/\b(transform|all)(,|$)/.test(n[cn+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:p}}function Ih(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Sh(n)+Sh(t[r])))}function Sh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function d0(){return document.body.offsetHeight}const p0={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ri(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ri(t,!0),r.enter(t)):r.leave(t,()=>{ri(t,!1)}):ri(t,e))},beforeUnmount(t,{value:e}){ri(t,e)}};function ri(t,e){t.style.display=e?t._vod:"none"}const m0=Ke({patchProp:a0},qb);let Ch;function g0(){return Ch||(Ch=Ib(m0))}const v0=(...t)=>{const e=g0().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=y0(r);if(!i)return;const s=e._component;!Z(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function y0(t){return Le(t)?document.querySelector(t):t}/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function kh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?kh(Object(n),!0).forEach(function(r){w0(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Xs(t){return Xs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xs(t)}function b0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ah(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _0(t,e,n){return e&&Ah(t.prototype,e),n&&Ah(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function w0(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Il(t,e){return T0(t)||S0(t,e)||Cp(t,e)||k0()}function Fo(t){return E0(t)||I0(t)||Cp(t)||C0()}function E0(t){if(Array.isArray(t))return pc(t)}function T0(t){if(Array.isArray(t))return t}function I0(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function S0(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function Cp(t,e){if(!!t){if(typeof t=="string")return pc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pc(t,e)}}function pc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function C0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xh=function(){},Sl={},kp={},Ap=null,xp={mark:xh,measure:xh};try{typeof window<"u"&&(Sl=window),typeof document<"u"&&(kp=document),typeof MutationObserver<"u"&&(Ap=MutationObserver),typeof performance<"u"&&(xp=performance)}catch{}var A0=Sl.navigator||{},Oh=A0.userAgent,Nh=Oh===void 0?"":Oh,In=Sl,_e=kp,Rh=Ap,vs=xp;In.document;var sn=!!_e.documentElement&&!!_e.head&&typeof _e.addEventListener=="function"&&typeof _e.createElement=="function",Op=~Nh.indexOf("MSIE")||~Nh.indexOf("Trident/"),Yt="___FONT_AWESOME___",mc=16,Np="fa",Rp="svg-inline--fa",Jn="data-fa-i2svg",gc="data-fa-pseudo-element",x0="data-fa-pseudo-element-pending",Cl="data-prefix",kl="data-icon",Dh="fontawesome-i2svg",O0="async",N0=["HTML","HEAD","STYLE","SCRIPT"],Dp=function(){try{return!0}catch{return!1}}(),Al={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Qs={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Pp={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},R0={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},D0=/fa[srltdbk]?[\-\ ]/,Mp="fa-layers-text",P0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,M0={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Lp=[1,2,3,4,5,6,7,8,9,10],L0=Lp.concat([11,12,13,14,15,16,17,18,19,20]),F0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Vn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},U0=[].concat(Fo(Object.keys(Qs)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Vn.GROUP,Vn.SWAP_OPACITY,Vn.PRIMARY,Vn.SECONDARY]).concat(Lp.map(function(t){return"".concat(t,"x")})).concat(L0.map(function(t){return"w-".concat(t)})),Fp=In.FontAwesomeConfig||{};function $0(t){var e=_e.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function B0(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(_e&&typeof _e.querySelector=="function"){var V0=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];V0.forEach(function(t){var e=Il(t,2),n=e[0],r=e[1],i=B0($0(n));i!=null&&(Fp[r]=i)})}var j0={familyPrefix:Np,styleDefault:"solid",replacementClass:Rp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},mi=D(D({},j0),Fp);mi.autoReplaceSvg||(mi.observeMutations=!1);var j={};Object.keys(mi).forEach(function(t){Object.defineProperty(j,t,{enumerable:!0,set:function(n){mi[t]=n,Ps.forEach(function(r){return r(j)})},get:function(){return mi[t]}})});In.FontAwesomeConfig=j;var Ps=[];function z0(t){return Ps.push(t),function(){Ps.splice(Ps.indexOf(t),1)}}var un=mc,Dt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function H0(t){if(!(!t||!sn)){var e=_e.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=_e.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return _e.head.insertBefore(e,r),t}}var q0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xi(){for(var t=12,e="";t-- >0;)e+=q0[Math.random()*62|0];return e}function Hr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function xl(t){return t.classList?Hr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Up(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function K0(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Up(t[n]),'" ')},"").trim()}function Uo(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Ol(t){return t.size!==Dt.size||t.x!==Dt.x||t.y!==Dt.y||t.rotate!==Dt.rotate||t.flipX||t.flipY}function W0(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function G0(t){var e=t.transform,n=t.width,r=n===void 0?mc:n,i=t.height,s=i===void 0?mc:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&Op?c+="translate(".concat(e.x/un-r/2,"em, ").concat(e.y/un-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/un,"em), calc(-50% + ").concat(e.y/un,"em)) "):c+="translate(".concat(e.x/un,"em, ").concat(e.y/un,"em) "),c+="scale(".concat(e.size/un*(e.flipX?-1:1),", ").concat(e.size/un*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var Y0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $p(){var t=Np,e=Rp,n=j.familyPrefix,r=j.replacementClass,i=Y0;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Ph=!1;function Sa(){j.autoAddCss&&!Ph&&(H0($p()),Ph=!0)}var X0={mixout:function(){return{dom:{css:$p,insertCss:Sa}}},hooks:function(){return{beforeDOMElementCreation:function(){Sa()},beforeI2svg:function(){Sa()}}}},Xt=In||{};Xt[Yt]||(Xt[Yt]={});Xt[Yt].styles||(Xt[Yt].styles={});Xt[Yt].hooks||(Xt[Yt].hooks={});Xt[Yt].shims||(Xt[Yt].shims=[]);var It=Xt[Yt],Bp=[],Q0=function t(){_e.removeEventListener("DOMContentLoaded",t),Js=1,Bp.map(function(e){return e()})},Js=!1;sn&&(Js=(_e.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_e.readyState),Js||_e.addEventListener("DOMContentLoaded",Q0));function J0(t){!sn||(Js?setTimeout(t,0):Bp.push(t))}function qi(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Up(t):"<".concat(e," ").concat(K0(r),">").concat(s.map(qi).join(""),"</").concat(e,">")}function Mh(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Z0=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Ca=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?Z0(n,i):n,c,l,u;for(r===void 0?(c=1,u=e[s[0]]):(c=0,u=r);c<o;c++)l=s[c],u=a(u,e[l],l,e);return u};function e_(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function vc(t){var e=e_(t);return e.length===1?e[0].toString(16):null}function t_(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Lh(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function yc(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Lh(e);typeof It.hooks.addPack=="function"&&!i?It.hooks.addPack(t,Lh(e)):It.styles[t]=D(D({},It.styles[t]||{}),s),t==="fas"&&yc("fa",e)}var gi=It.styles,n_=It.shims,r_=Object.values(Pp),Nl=null,Vp={},jp={},zp={},Hp={},qp={},i_=Object.keys(Al);function s_(t){return~U0.indexOf(t)}function o_(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!s_(i)?i:null}var Kp=function(){var e=function(s){return Ca(gi,function(o,a,c){return o[c]=Ca(a,s,{}),o},{})};Vp=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),jp=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),qp=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in gi||j.autoFetchSvg,r=Ca(n_,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});zp=r.names,Hp=r.unicodes,Nl=$o(j.styleDefault)};z0(function(t){Nl=$o(t.styleDefault)});Kp();function Rl(t,e){return(Vp[t]||{})[e]}function a_(t,e){return(jp[t]||{})[e]}function gr(t,e){return(qp[t]||{})[e]}function Wp(t){return zp[t]||{prefix:null,iconName:null}}function c_(t){var e=Hp[t],n=Rl("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Sn(){return Nl}var Dl=function(){return{prefix:null,iconName:null,rest:[]}};function $o(t){var e=Al[t],n=Qs[t]||Qs[e],r=t in It.styles?t:null;return n||r||null}function Bo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,s=t.reduce(function(o,a){var c=o_(j.familyPrefix,a);if(gi[a]?(a=r_.includes(a)?R0[a]:a,i=a,o.prefix=a):i_.indexOf(a)>-1?(i=a,o.prefix=$o(a)):c?o.iconName=c:a!==j.replacementClass&&o.rest.push(a),!r&&o.prefix&&o.iconName){var l=i==="fa"?Wp(o.iconName):{},u=gr(o.prefix,o.iconName);l.prefix&&(i=null),o.iconName=l.iconName||u||o.iconName,o.prefix=l.prefix||o.prefix,o.prefix==="far"&&!gi.far&&gi.fas&&!j.autoFetchSvg&&(o.prefix="fas")}return o},Dl());return(s.prefix==="fa"||i==="fa")&&(s.prefix=Sn()||"fas"),s}var l_=function(){function t(){b0(this,t),this.definitions={}}return _0(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),o[a]),yc(a,o[a]);var c=Pp[a];c&&yc(c,o[a]),Kp()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=l)}),n[a][c]=l}),n}}]),t}(),Fh=[],vr={},Sr={},u_=Object.keys(Sr);function h_(t,e){var n=e.mixoutsTo;return Fh=t,vr={},Object.keys(Sr).forEach(function(r){u_.indexOf(r)===-1&&delete Sr[r]}),Fh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Xs(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){vr[o]||(vr[o]=[]),vr[o].push(s[o])})}r.provides&&r.provides(Sr)}),n}function bc(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=vr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Zn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=vr[t]||[];i.forEach(function(s){s.apply(null,n)})}function Qt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Sr[t]?Sr[t].apply(null,e):void 0}function _c(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Sn();if(!!e)return e=gr(n,e)||e,Mh(Gp.definitions,n,e)||Mh(It.styles,n,e)}var Gp=new l_,f_=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,Zn("noAuto")},d_={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return sn?(Zn("beforeI2svg",e),Qt("pseudoElements2svg",e),Qt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,J0(function(){m_({autoReplaceSvgRoot:n}),Zn("watch",e)})}},p_={icon:function(e){if(e===null)return null;if(Xs(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:gr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=$o(e[0]);return{prefix:r,iconName:gr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(j.familyPrefix,"-"))>-1||e.match(D0))){var i=Bo(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Sn(),iconName:gr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Sn();return{prefix:s,iconName:gr(s,e)||e}}}},pt={noAuto:f_,config:j,dom:d_,parse:p_,library:Gp,findIconDefinition:_c,toHtml:qi},m_=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?_e:n;(Object.keys(It.styles).length>0||j.autoFetchSvg)&&sn&&j.autoReplaceSvg&&pt.dom.i2svg({node:r})};function Vo(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return qi(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!sn){var r=_e.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function g_(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Ol(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};i.style=Uo(D(D({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function v_(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(j.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:o}),children:r}]}]}function Pl(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,p=f===void 0?!1:f,g=r.found?r:n,E=g.width,b=g.height,v=i==="fak",_=[j.replacementClass,s?"".concat(j.familyPrefix,"-").concat(s):""].filter(function(J){return h.classes.indexOf(J)===-1}).filter(function(J){return J!==""||!!J}).concat(h.classes).join(" "),A={children:[],attributes:D(D({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:_,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(b)})},C=v&&!~h.classes.indexOf("fa-fw")?{width:"".concat(E/b*16*.0625,"em")}:{};p&&(A.attributes[Jn]=""),c&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(u||xi())},children:[c]}),delete A.attributes.title);var z=D(D({},A),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:D(D({},C),h.styles)}),M=r.found&&n.found?Qt("generateAbstractMask",z)||{children:[],attributes:{}}:Qt("generateAbstractIcon",z)||{children:[],attributes:{}},ie=M.children,F=M.attributes;return z.children=ie,z.attributes=F,a?v_(z):g_(z)}function Uh(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=D(D(D({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(l[Jn]="");var u=D({},o.styles);Ol(i)&&(u.transform=G0({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=Uo(u);h.length>0&&(l.style=h);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function y_(t){var e=t.content,n=t.title,r=t.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Uo(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ka=It.styles;function wc(t){var e=t[0],n=t[1],r=t.slice(4),i=Il(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(j.familyPrefix,"-").concat(Vn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(Vn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(Vn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var b_={found:!1,width:512,height:512};function __(t,e){!Dp&&!j.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ec(t,e){var n=e;return e==="fa"&&j.styleDefault!==null&&(e=Sn()),new Promise(function(r,i){if(Qt("missingIconAbstract"),n==="fa"){var s=Wp(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&ka[e]&&ka[e][t]){var o=ka[e][t];return r(wc(o))}__(t,e),r(D(D({},b_),{},{icon:j.showMissingIcons&&t?Qt("missingIconAbstract")||{}:{}}))})}var $h=function(){},Tc=j.measurePerformance&&vs&&vs.mark&&vs.measure?vs:{mark:$h,measure:$h},li='FA "6.1.2"',w_=function(e){return Tc.mark("".concat(li," ").concat(e," begins")),function(){return Yp(e)}},Yp=function(e){Tc.mark("".concat(li," ").concat(e," ends")),Tc.measure("".concat(li," ").concat(e),"".concat(li," ").concat(e," begins"),"".concat(li," ").concat(e," ends"))},Ml={begin:w_,end:Yp},Ms=function(){};function Bh(t){var e=t.getAttribute?t.getAttribute(Jn):null;return typeof e=="string"}function E_(t){var e=t.getAttribute?t.getAttribute(Cl):null,n=t.getAttribute?t.getAttribute(kl):null;return e&&n}function T_(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(j.replacementClass)}function I_(){if(j.autoReplaceSvg===!0)return Ls.replace;var t=Ls[j.autoReplaceSvg];return t||Ls.replace}function S_(t){return _e.createElementNS("http://www.w3.org/2000/svg",t)}function C_(t){return _e.createElement(t)}function Xp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?S_:C_:n;if(typeof t=="string")return _e.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(Xp(o,{ceFn:r}))}),i}function k_(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ls={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Xp(i),n)}),n.getAttribute(Jn)===null&&j.keepOriginalSource){var r=_e.createComment(k_(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~xl(n).indexOf(j.replacementClass))return Ls.replace(e);var i=new RegExp("".concat(j.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===j.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return qi(a)}).join(`
`);n.setAttribute(Jn,""),n.innerHTML=o}};function Vh(t){t()}function Qp(t,e){var n=typeof e=="function"?e:Ms;if(t.length===0)n();else{var r=Vh;j.mutateApproach===O0&&(r=In.requestAnimationFrame||Vh),r(function(){var i=I_(),s=Ml.begin("mutate");t.map(i),s(),n()})}}var Ll=!1;function Jp(){Ll=!0}function Ic(){Ll=!1}var Zs=null;function jh(t){if(!!Rh&&!!j.observeMutations){var e=t.treeCallback,n=e===void 0?Ms:e,r=t.nodeCallback,i=r===void 0?Ms:r,s=t.pseudoElementsCallback,o=s===void 0?Ms:s,a=t.observeMutationsRoot,c=a===void 0?_e:a;Zs=new Rh(function(l){if(!Ll){var u=Sn();Hr(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Bh(h.addedNodes[0])&&(j.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&j.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Bh(h.target)&&~F0.indexOf(h.attributeName))if(h.attributeName==="class"&&E_(h.target)){var f=Bo(xl(h.target)),p=f.prefix,g=f.iconName;h.target.setAttribute(Cl,p||u),g&&h.target.setAttribute(kl,g)}else T_(h.target)&&i(h.target)})}}),sn&&Zs.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function A_(){!Zs||Zs.disconnect()}function x_(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function O_(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Bo(xl(t));return i.prefix||(i.prefix=Sn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=a_(i.prefix,t.innerText)||Rl(i.prefix,vc(t.innerText))),!i.iconName&&j.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function N_(t){var e=Hr(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return j.autoA11y&&(n?e["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(r||xi()):(e["aria-hidden"]="true",e.focusable="false")),e}function R_(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Dt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=O_(t),r=n.iconName,i=n.prefix,s=n.rest,o=N_(t),a=bc("parseNodeAttributes",{},t),c=e.styleParser?x_(t):[];return D({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Dt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var D_=It.styles;function Zp(t){var e=j.autoReplaceSvg==="nest"?zh(t,{styleParser:!1}):zh(t);return~e.extra.classes.indexOf(Mp)?Qt("generateLayersText",t,e):Qt("generateSvgReplacementMutation",t,e)}function Hh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!sn)return Promise.resolve();var n=_e.documentElement.classList,r=function(h){return n.add("".concat(Dh,"-").concat(h))},i=function(h){return n.remove("".concat(Dh,"-").concat(h))},s=j.autoFetchSvg?Object.keys(Al):Object.keys(D_);s.includes("fa")||s.push("fa");var o=[".".concat(Mp,":not([").concat(Jn,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Jn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Hr(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Ml.begin("onTree"),l=a.reduce(function(u,h){try{var f=Zp(h);f&&u.push(f)}catch(p){Dp||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,h){Promise.all(l).then(function(f){Qp(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(f){c(),h(f)})})}function P_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zp(t).then(function(n){n&&Qp([n],e)})}function M_(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:_c(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:_c(i||{})),t(r,D(D({},n),{},{mask:i}))}}var L_=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Dt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,h=n.title,f=h===void 0?null:h,p=n.titleId,g=p===void 0?null:p,E=n.classes,b=E===void 0?[]:E,v=n.attributes,_=v===void 0?{}:v,A=n.styles,C=A===void 0?{}:A;if(!!e){var z=e.prefix,M=e.iconName,ie=e.icon;return Vo(D({type:"icon"},e),function(){return Zn("beforeDOMElementCreation",{iconDefinition:e,params:n}),j.autoA11y&&(f?_["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(g||xi()):(_["aria-hidden"]="true",_.focusable="false")),Pl({icons:{main:wc(ie),mask:c?wc(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:M,transform:D(D({},Dt),i),symbol:o,title:f,maskId:u,titleId:g,extra:{attributes:_,styles:C,classes:b}})})}},F_={mixout:function(){return{icon:M_(L_)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Hh,n.nodeCallback=P_,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?_e:r,s=n.callback,o=s===void 0?function(){}:s;return Hh(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,l=r.symbol,u=r.mask,h=r.maskId,f=r.extra;return new Promise(function(p,g){Promise.all([Ec(i,a),u.iconName?Ec(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var b=Il(E,2),v=b[0],_=b[1];p([n,Pl({icons:{main:v,mask:_},prefix:a,iconName:i,transform:c,symbol:l,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=Uo(a);c.length>0&&(i.style=c);var l;return Ol(o)&&(l=Qt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},U_={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Vo({type:"layer"},function(){Zn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(j.familyPrefix,"-layers")].concat(Fo(s)).join(" ")},children:o}]})}}}},$_={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,h=u===void 0?{}:u;return Vo({type:"counter",content:n},function(){return Zn("beforeDOMElementCreation",{content:n,params:r}),y_({content:n.toString(),title:s,extra:{attributes:l,styles:h,classes:["".concat(j.familyPrefix,"-layers-counter")].concat(Fo(a))}})})}}}},B_={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Dt:i,o=r.title,a=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,h=u===void 0?{}:u,f=r.styles,p=f===void 0?{}:f;return Vo({type:"text",content:n},function(){return Zn("beforeDOMElementCreation",{content:n,params:r}),Uh({content:n,transform:D(D({},Dt),s),title:a,extra:{attributes:h,styles:p,classes:["".concat(j.familyPrefix,"-layers-text")].concat(Fo(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(Op){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return j.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Uh({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},V_=new RegExp('"',"ug"),qh=[1105920,1112319];function j_(t){var e=t.replace(V_,""),n=t_(e,0),r=n>=qh[0]&&n<=qh[1],i=e.length===2?e[0]===e[1]:!1;return{value:vc(i?e[0]:e),isSecondary:r||i}}function Kh(t,e){var n="".concat(x0).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Hr(t.children),o=s.filter(function(M){return M.getAttribute(gc)===e})[0],a=In.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(P0),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Qs[c[2].toLowerCase()]:M0[l],p=j_(h),g=p.value,E=p.isSecondary,b=c[0].startsWith("FontAwesome"),v=Rl(f,g),_=v;if(b){var A=c_(g);A.iconName&&A.prefix&&(v=A.iconName,f=A.prefix)}if(v&&!E&&(!o||o.getAttribute(Cl)!==f||o.getAttribute(kl)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);var C=R_(),z=C.extra;z.attributes[gc]=e,Ec(v,f).then(function(M){var ie=Pl(D(D({},C),{},{icons:{main:M,mask:Dl()},prefix:f,iconName:_,extra:z,watchable:!0})),F=_e.createElement("svg");e==="::before"?t.insertBefore(F,t.firstChild):t.appendChild(F),F.outerHTML=ie.map(function(J){return qi(J)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function z_(t){return Promise.all([Kh(t,"::before"),Kh(t,"::after")])}function H_(t){return t.parentNode!==document.head&&!~N0.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(gc)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Wh(t){if(!!sn)return new Promise(function(e,n){var r=Hr(t.querySelectorAll("*")).filter(H_).map(z_),i=Ml.begin("searchPseudoElements");Jp(),Promise.all(r).then(function(){i(),Ic(),e()}).catch(function(){i(),Ic(),n()})})}var q_={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Wh,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?_e:r;j.searchPseudoElements&&Wh(i)}}},Gh=!1,K_={mixout:function(){return{dom:{unwatch:function(){Jp(),Gh=!0}}}},hooks:function(){return{bootstrap:function(){jh(bc("mutationObserverCallbacks",{}))},noAuto:function(){A_()},watch:function(n){var r=n.observeMutationsRoot;Gh?Ic():jh(bc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Yh=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},W_={mixout:function(){return{parse:{transform:function(n){return Yh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Yh(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:h,path:f};return{tag:"g",attributes:D({},p.outer),children:[{tag:"g",attributes:D({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),p.path)}]}]}}}},Aa={x:0,y:0,width:"100%",height:"100%"};function Xh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function G_(t){return t.tag==="g"?t.children:[t]}var Y_={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Bo(i.split(" ").map(function(o){return o.trim()})):Dl();return s.prefix||(s.prefix=Sn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,l=s.width,u=s.icon,h=o.width,f=o.icon,p=W0({transform:c,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:D(D({},Aa),{},{fill:"white"})},E=u.children?{children:u.children.map(Xh)}:{},b={tag:"g",attributes:D({},p.inner),children:[Xh(D({tag:u.tag,attributes:D(D({},u.attributes),p.path)},E))]},v={tag:"g",attributes:D({},p.outer),children:[b]},_="mask-".concat(a||xi()),A="clip-".concat(a||xi()),C={tag:"mask",attributes:D(D({},Aa),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,v]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:G_(f)},C]};return r.push(z,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(_,")")},Aa)}),{children:r,attributes:i}}}},X_={provides:function(e){var n=!1;In.matchMedia&&(n=In.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=D(D({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Q_={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},J_=[X0,F_,U_,$_,B_,q_,K_,W_,Y_,X_,Q_];h_(J_,{mixoutsTo:pt});pt.noAuto;var em=pt.config,Z_=pt.library;pt.dom;var eo=pt.parse;pt.findIconDefinition;pt.toHtml;var ew=pt.icon;pt.layer;var tw=pt.text;pt.counter;function Qh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Et(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qh(Object(n),!0).forEach(function(r){nt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function to(t){return to=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},to(t)}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function nw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rw(t,e){if(t==null)return{};var n=nw(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Sc(t){return iw(t)||sw(t)||ow(t)||aw()}function iw(t){if(Array.isArray(t))return Cc(t)}function sw(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ow(t,e){if(!!t){if(typeof t=="string")return Cc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cc(t,e)}}function Cc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function aw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var cw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},tm={exports:{}};(function(t){(function(e){var n=function(v,_,A){if(!l(_)||h(_)||f(_)||p(_)||c(_))return _;var C,z=0,M=0;if(u(_))for(C=[],M=_.length;z<M;z++)C.push(n(v,_[z],A));else{C={};for(var ie in _)Object.prototype.hasOwnProperty.call(_,ie)&&(C[v(ie,A)]=n(v,_[ie],A))}return C},r=function(v,_){_=_||{};var A=_.separator||"_",C=_.split||/(?=[A-Z])/;return v.split(C).join(A)},i=function(v){return g(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(_,A){return A?A.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var _=i(v);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(v,_){return r(v,_).toLowerCase()},a=Object.prototype.toString,c=function(v){return typeof v=="function"},l=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},h=function(v){return a.call(v)=="[object Date]"},f=function(v){return a.call(v)=="[object RegExp]"},p=function(v){return a.call(v)=="[object Boolean]"},g=function(v){return v=v-0,v===v},E=function(v,_){var A=_&&"process"in _?_.process:_;return typeof A!="function"?v:function(C,z){return A(C,v,z)}},b={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,_){return n(E(i,_),v)},decamelizeKeys:function(v,_){return n(E(o,_),v,_)},pascalizeKeys:function(v,_){return n(E(s,_),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})(cw)})(tm);var lw=tm.exports,uw=["class","style"];function hw(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=lw.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function fw(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Fl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Fl(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=fw(u);break;case"style":c.style=hw(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=rw(n,uw);return Ir(t.tag,Et(Et(Et({},e),{},{class:i.class,style:Et(Et({},i.style),o)},i.attrs),a),r)}var nm=!1;try{nm=!0}catch{}function dw(){if(!nm&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function vi(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?nt({},t,e):{}}function pw(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},nt(e,"fa-".concat(t.size),t.size!==null),nt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),nt(e,"fa-pull-".concat(t.pull),t.pull!==null),nt(e,"fa-swap-opacity",t.swapOpacity),nt(e,"fa-bounce",t.bounce),nt(e,"fa-shake",t.shake),nt(e,"fa-beat",t.beat),nt(e,"fa-fade",t.fade),nt(e,"fa-beat-fade",t.beatFade),nt(e,"fa-flash",t.flash),nt(e,"fa-spin-pulse",t.spinPulse),nt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Jh(t){if(t&&to(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(eo.icon)return eo.icon(t);if(t===null)return null;if(to(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var mw=yl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=vt(function(){return Jh(e.icon)}),s=vt(function(){return vi("classes",pw(e))}),o=vt(function(){return vi("transform",typeof e.transform=="string"?eo.transform(e.transform):e.transform)}),a=vt(function(){return vi("mask",Jh(e.mask))}),c=vt(function(){return ew(i.value,Et(Et(Et(Et({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});xs(c,function(u){if(!u)return dw("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var l=vt(function(){return c.value?Fl(c.value.abstract[0],{},r):null});return function(){return l.value}}});yl({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=em.familyPrefix,s=vt(function(){return["".concat(i,"-layers")].concat(Sc(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return Ir("div",{class:s.value},r.default?r.default():[])}}});yl({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=em.familyPrefix,s=vt(function(){return vi("classes",[].concat(Sc(e.counter?["".concat(i,"-layers-counter")]:[]),Sc(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=vt(function(){return vi("transform",typeof e.transform=="string"?eo.transform(e.transform):e.transform)}),a=vt(function(){var l=tw(e.value.toString(),Et(Et({},o.value),s.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=vt(function(){return Fl(a.value,{},r)});return function(){return c.value}}});/**
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
 */const rm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},im={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},vw=function(t){const e=rm(t);return im.encodeByteArray(e,!0)},sm=function(t){return vw(t).replace(/\./g,"")},yw=function(t){try{return im.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class bw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function om(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function am(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _w(){return Fe().indexOf("Electron/")>=0}function lm(){const t=Fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ww(){return Fe().indexOf("MSAppHost/")>=0}function Ew(){return typeof indexedDB=="object"}function Tw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Iw="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Iw,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ki.prototype.create)}}class Ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Sw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bt(i,a,r)}}function Sw(t,e){return t.replace(Cw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Cw=/\{\$([^}]+)}/g;function kw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zh(s)&&Zh(o)){if(!Oi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zh(t){return t!==null&&typeof t=="object"}/**
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
 */function Wi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Aw(t,e){const n=new xw(t,e);return n.subscribe.bind(n)}class xw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ow(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xa),i.error===void 0&&(i.error=xa),i.complete===void 0&&(i.complete=xa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ow(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xa(){}/**
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
 */function qr(t){return t&&t._delegate?t._delegate:t}class Cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fn="[DEFAULT]";/**
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
 */class Nw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dw(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rw(t){return t===Fn?void 0:t}function Dw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Pw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const Mw={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Lw=he.INFO,Fw={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Uw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Fw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ul{constructor(e){this.name=e,this._logLevel=Lw,this._logHandler=Uw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const $w=(t,e)=>e.some(n=>t instanceof n);let ef,tf;function Bw(){return ef||(ef=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vw(){return tf||(tf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const um=new WeakMap,kc=new WeakMap,hm=new WeakMap,Oa=new WeakMap,$l=new WeakMap;function jw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_n(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&um.set(n,t)}).catch(()=>{}),$l.set(e,t),e}function zw(t){if(kc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});kc.set(t,e)}let Ac={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hw(t){Ac=t(Ac)}function qw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Na(this),e,...n);return hm.set(r,e.sort?e.sort():[e]),_n(r)}:Vw().includes(t)?function(...e){return t.apply(Na(this),e),_n(um.get(this))}:function(...e){return _n(t.apply(Na(this),e))}}function Kw(t){return typeof t=="function"?qw(t):(t instanceof IDBTransaction&&zw(t),$w(t,Bw())?new Proxy(t,Ac):t)}function _n(t){if(t instanceof IDBRequest)return jw(t);if(Oa.has(t))return Oa.get(t);const e=Kw(t);return e!==t&&(Oa.set(t,e),$l.set(e,t)),e}const Na=t=>$l.get(t);function Ww(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=_n(o);return r&&o.addEventListener("upgradeneeded",c=>{r(_n(o.result),c.oldVersion,c.newVersion,_n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Gw=["get","getKey","getAll","getAllKeys","count"],Yw=["put","add","delete","clear"],Ra=new Map;function nf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ra.get(e))return Ra.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Yw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gw.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Ra.set(e,s),s}Hw(t=>({...t,get:(e,n,r)=>nf(e,n)||t.get(e,n,r),has:(e,n)=>!!nf(e,n)||t.has(e,n)}));/**
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
 */class Xw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xc="@firebase/app",rf="0.7.31";/**
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
 */const er=new Ul("@firebase/app"),Jw="@firebase/app-compat",Zw="@firebase/analytics-compat",e1="@firebase/analytics",t1="@firebase/app-check-compat",n1="@firebase/app-check",r1="@firebase/auth",i1="@firebase/auth-compat",s1="@firebase/database",o1="@firebase/database-compat",a1="@firebase/functions",c1="@firebase/functions-compat",l1="@firebase/installations",u1="@firebase/installations-compat",h1="@firebase/messaging",f1="@firebase/messaging-compat",d1="@firebase/performance",p1="@firebase/performance-compat",m1="@firebase/remote-config",g1="@firebase/remote-config-compat",v1="@firebase/storage",y1="@firebase/storage-compat",b1="@firebase/firestore",_1="@firebase/firestore-compat",w1="firebase",E1="9.9.3";/**
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
 */const fm="[DEFAULT]",T1={[xc]:"fire-core",[Jw]:"fire-core-compat",[e1]:"fire-analytics",[Zw]:"fire-analytics-compat",[n1]:"fire-app-check",[t1]:"fire-app-check-compat",[r1]:"fire-auth",[i1]:"fire-auth-compat",[s1]:"fire-rtdb",[o1]:"fire-rtdb-compat",[a1]:"fire-fn",[c1]:"fire-fn-compat",[l1]:"fire-iid",[u1]:"fire-iid-compat",[h1]:"fire-fcm",[f1]:"fire-fcm-compat",[d1]:"fire-perf",[p1]:"fire-perf-compat",[m1]:"fire-rc",[g1]:"fire-rc-compat",[v1]:"fire-gcs",[y1]:"fire-gcs-compat",[b1]:"fire-fst",[_1]:"fire-fst-compat","fire-js":"fire-js",[w1]:"fire-js-all"};/**
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
 */const Ni=new Map,Oc=new Map;function I1(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tr(t){const e=t.name;if(Oc.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;Oc.set(e,t);for(const n of Ni.values())I1(n,t);return!0}function Gi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const S1={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nr=new Ki("app","Firebase",S1);/**
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
 */class C1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
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
 */const Kr=E1;function k1(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:fm,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw nr.create("bad-app-name",{appName:String(r)});const i=Ni.get(r);if(i){if(Oi(t,i.options)&&Oi(n,i.config))return i;throw nr.create("duplicate-app",{appName:r})}const s=new Pw(r);for(const a of Oc.values())s.addComponent(a);const o=new C1(t,n,s);return Ni.set(r,o),o}function jo(t=fm){const e=Ni.get(t);if(!e)throw nr.create("no-app",{appName:t});return e}function A1(){return Array.from(Ni.values())}function Pt(t,e,n){var r;let i=(r=T1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(a.join(" "));return}tr(new Cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const x1="firebase-heartbeat-database",O1=1,Ri="firebase-heartbeat-store";let Da=null;function dm(){return Da||(Da=Ww(x1,O1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ri)}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),Da}async function N1(t){var e;try{return(await dm()).transaction(Ri).objectStore(Ri).get(pm(t))}catch(n){if(n instanceof Bt)er.warn(n.message);else{const r=nr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});er.warn(r.message)}}}async function sf(t,e){var n;try{const i=(await dm()).transaction(Ri,"readwrite");return await i.objectStore(Ri).put(e,pm(t)),i.done}catch(r){if(r instanceof Bt)er.warn(r.message);else{const i=nr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});er.warn(i.message)}}}function pm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const R1=1024,D1=30*24*60*60*1e3;class P1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new L1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=of();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=D1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=of(),{heartbeatsToSend:n,unsentEntries:r}=M1(this._heartbeatsCache.heartbeats),i=sm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function of(){return new Date().toISOString().substring(0,10)}function M1(t,e=R1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),af(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),af(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class L1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ew()?Tw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await N1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function af(t){return sm(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function F1(t){tr(new Cn("platform-logger",e=>new Xw(e),"PRIVATE")),tr(new Cn("heartbeat",e=>new P1(e),"PRIVATE")),Pt(xc,rf,t),Pt(xc,rf,"esm2017"),Pt("fire-js","")}F1("");var U1="firebase",$1="9.9.3";/**
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
 */Pt(U1,$1,"app");function Bl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function mm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const B1=mm,gm=new Ki("auth","Firebase",mm());/**
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
 */const cf=new Ul("@firebase/auth");function Fs(t,...e){cf.logLevel<=he.ERROR&&cf.error(`Auth (${Kr}): ${t}`,...e)}/**
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
 */function Jt(t,...e){throw Vl(t,...e)}function Mt(t,...e){return Vl(t,...e)}function V1(t,e,n){const r=Object.assign(Object.assign({},B1()),{[e]:n});return new Ki("auth","Firebase",r).create(e,{appName:t.name})}function Vl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gm.create(t,...e)}function Q(t,e,...n){if(!t)throw Vl(e,...n)}function qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fs(e),new Error(e)}function Zt(t,e){t||qt(e)}/**
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
 */const lf=new Map;function Kt(t){Zt(t instanceof Function,"Expected a class definition");let e=lf.get(t);return e?(Zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lf.set(t,e),e)}/**
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
 */function j1(t,e){const n=Gi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Oi(s,e!=null?e:{}))return i;Jt(i,"already-initialized")}return n.initialize({options:e})}function z1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Nc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function H1(){return uf()==="http:"||uf()==="https:"}function uf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function q1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(H1()||am()||"connection"in navigator)?navigator.onLine:!0}function K1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zt(n>e,"Short delay should be less than long delay!"),this.isMobile=om()||cm()}get(){return q1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jl(t,e){Zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const W1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const G1=new Yi(3e4,6e4);function Y1(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zo(t,e,n,r,i={}){return ym(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Wi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),vm.fetch()(bm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function ym(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},W1),e);try{const i=new Q1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ys(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ys(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ys(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ys(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw V1(t,u,l);Jt(t,u)}}catch(i){if(i instanceof Bt)throw i;Jt(t,"network-request-failed")}}async function X1(t,e,n,r,i={}){const s=await zo(t,e,n,r,i);return"mfaPendingCredential"in s&&Jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function bm(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?jl(t.config,i):`${t.config.apiScheme}://${i}`}class Q1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),G1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ys(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Mt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function J1(t,e){return zo(t,"POST","/v1/accounts:delete",e)}async function Z1(t,e){return zo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function yi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eE(t,e=!1){const n=qr(t),r=await n.getIdToken(e),i=zl(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:yi(Pa(i.auth_time)),issuedAtTime:yi(Pa(i.iat)),expirationTime:yi(Pa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Pa(t){return Number(t)*1e3}function zl(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Fs("JWT malformed, contained fewer than 3 sections"),null;try{const s=yw(r);return s?JSON.parse(s):(Fs("Failed to decode base64 JWT payload"),null)}catch(s){return Fs("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function tE(t){const e=zl(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&nE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _m{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yi(this.lastLoginAt),this.creationTime=yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function no(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Di(t,Z1(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?oE(s.providerUserInfo):[],a=sE(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _m(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function iE(t){const e=qr(t);await no(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sE(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function oE(t){return t.map(e=>{var{providerId:n}=e,r=Bl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function aE(t,e){const n=await ym(t,{},async()=>{const r=Wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=bm(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await aE(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Pi;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pi,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
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
 */function hn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Bl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _m(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Di(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eE(this,e)}reload(){return iE(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await no(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Di(this,J1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:C,isAnonymous:z,providerData:M,stsTokenManager:ie}=n;Q(A&&ie,e,"internal-error");const F=Pi.fromJSON(this.name,ie);Q(typeof A=="string",e,"internal-error"),hn(h,e.name),hn(f,e.name),Q(typeof C=="boolean",e,"internal-error"),Q(typeof z=="boolean",e,"internal-error"),hn(p,e.name),hn(g,e.name),hn(E,e.name),hn(b,e.name),hn(v,e.name),hn(_,e.name);const J=new Wn({uid:A,auth:e,email:f,emailVerified:C,displayName:h,isAnonymous:z,photoURL:g,phoneNumber:p,tenantId:E,stsTokenManager:F,createdAt:v,lastLoginAt:_});return M&&Array.isArray(M)&&(J.providerData=M.map(ve=>Object.assign({},ve))),b&&(J._redirectEventId=b),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Pi;i.updateFromServerResponse(n);const s=new Wn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await no(s),s}}/**
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
 */class wm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wm.type="NONE";const hf=wm;/**
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
 */function Us(t,e,n){return`firebase:${t}:${e}:${n}`}class Cr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Us(this.userKey,i.apiKey,s),this.fullPersistenceKey=Us("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cr(Kt(hf),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Kt(hf);const o=Us(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Wn._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Cr(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Cr(s,e,r))}}/**
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
 */function ff(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Im(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Em(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cm(e))return"Blackberry";if(km(e))return"Webos";if(Hl(e))return"Safari";if((e.includes("chrome/")||Tm(e))&&!e.includes("edge/"))return"Chrome";if(Sm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Em(t=Fe()){return/firefox\//i.test(t)}function Hl(t=Fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tm(t=Fe()){return/crios\//i.test(t)}function Im(t=Fe()){return/iemobile/i.test(t)}function Sm(t=Fe()){return/android/i.test(t)}function Cm(t=Fe()){return/blackberry/i.test(t)}function km(t=Fe()){return/webos/i.test(t)}function Ho(t=Fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cE(t=Fe()){var e;return Ho(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lE(){return lm()&&document.documentMode===10}function Am(t=Fe()){return Ho(t)||Sm(t)||km(t)||Cm(t)||/windows phone/i.test(t)||Im(t)}function uE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function xm(t,e=[]){let n;switch(t){case"Browser":n=ff(Fe());break;case"Worker":n=`${ff(Fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kr}/${r}`}/**
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
 */class hE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class fE{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new df(this),this.idTokenSubscription=new df(this),this.beforeStateQueue=new hE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Cr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await no(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=K1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qr(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Cr.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Om(t){return qr(t)}class df{constructor(e){this.auth=e,this.observer=null,this.addObserver=Aw(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Nm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,n){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}/**
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
 */async function kr(t,e){return X1(t,"POST","/v1/accounts:signInWithIdp",Y1(t,e))}/**
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
 */const dE="http://localhost";class rr extends Nm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Bl(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new rr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,kr(e,n)}buildRequest(){const e={requestUri:dE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wi(n)}return e}}/**
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
 */class Rm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xi extends Rm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pn extends Xi{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
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
 */class mn extends Xi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
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
 */class gn extends Xi{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
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
 */class vn extends Xi{constructor(){super("twitter.com")}static credential(e,n){return rr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
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
 */class Rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Wn._fromIdTokenResponse(e,r,i),o=pf(r);return new Rr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=pf(r);return new Rr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function pf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ro extends Bt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ro.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ro(e,n,r,i)}}function Dm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ro._fromErrorAndOperation(t,s,e,r):s})}async function pE(t,e,n=!1){const r=await Di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rr._forOperation(t,"link",r)}/**
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
 */async function mE(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Di(t,Dm(i,s,e,t),n);Q(o.idToken,i,"internal-error");const a=zl(o.idToken);Q(a,i,"internal-error");const{sub:c}=a;return Q(t.uid===c,i,"user-mismatch"),Rr._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Jt(i,"user-mismatch"),o}}/**
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
 */async function gE(t,e,n=!1){const r="signIn",i=await Dm(t,r,e),s=await Rr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}const io="__sak";/**
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
 */class Pm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(io,"1"),this.storage.removeItem(io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function vE(){const t=Fe();return Hl(t)||Ho(t)}const yE=1e3,bE=10;class Mm extends Pm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vE()&&uE(),this.fallbackToPolling=Am(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);lE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bE):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mm.type="LOCAL";const _E=Mm;/**
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
 */class Lm extends Pm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lm.type="SESSION";const Fm=Lm;/**
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
 */function wE(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new qo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await wE(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qo.receivers=[];/**
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
 */function ql(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class EE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=ql("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Lt(){return window}function TE(t){Lt().location.href=t}/**
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
 */function Um(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function IE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CE(){return Um()?self:null}/**
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
 */const $m="firebaseLocalStorageDb",kE=1,so="firebaseLocalStorage",Bm="fbase_key";class Qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ko(t,e){return t.transaction([so],e?"readwrite":"readonly").objectStore(so)}function AE(){const t=indexedDB.deleteDatabase($m);return new Qi(t).toPromise()}function Rc(){const t=indexedDB.open($m,kE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(so,{keyPath:Bm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(so)?e(r):(r.close(),await AE(),e(await Rc()))})})}async function mf(t,e,n){const r=Ko(t,!0).put({[Bm]:e,value:n});return new Qi(r).toPromise()}async function xE(t,e){const n=Ko(t,!1).get(e),r=await new Qi(n).toPromise();return r===void 0?null:r.value}function gf(t,e){const n=Ko(t,!0).delete(e);return new Qi(n).toPromise()}const OE=800,NE=3;class Vm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Um()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qo._getInstance(CE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IE(),!this.activeServiceWorker)return;this.sender=new EE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rc();return await mf(e,io,"1"),await gf(e,io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xE(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ko(i,!1).getAll();return new Qi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vm.type="LOCAL";const RE=Vm;/**
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
 */function DE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function PE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DE().appendChild(r)})}function ME(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Yi(3e4,6e4);/**
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
 */function LE(t,e){return e?Kt(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kl extends Nm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FE(t){return gE(t.auth,new Kl(t),t.bypassAuthState)}function UE(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),mE(n,new Kl(t),t.bypassAuthState)}async function $E(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),pE(n,new Kl(t),t.bypassAuthState)}/**
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
 */class jm{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FE;case"linkViaPopup":case"linkViaRedirect":return $E;case"reauthViaPopup":case"reauthViaRedirect":return UE;default:Jt(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BE=new Yi(2e3,1e4);class yr extends jm{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yr.currentPopupAction&&yr.currentPopupAction.cancel(),yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=ql();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,BE.get())};e()}}yr.currentPopupAction=null;/**
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
 */const VE="pendingRedirect",$s=new Map;class jE extends jm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$s.get(this.auth._key());if(!e){try{const r=await zE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$s.set(this.auth._key(),e)}return this.bypassAuthState||$s.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zE(t,e){const n=KE(e),r=qE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function HE(t,e){$s.set(t._key(),e)}function qE(t){return Kt(t._redirectPersistence)}function KE(t){return Us(VE,t.config.apiKey,t.name)}async function WE(t,e,n=!1){const r=Om(t),i=LE(r,e),o=await new jE(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const GE=10*60*1e3;class YE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GE&&this.cachedEventUids.clear(),this.cachedEventUids.has(vf(e))}saveEventToCache(e){this.cachedEventUids.add(vf(e)),this.lastProcessedEventTime=Date.now()}}function vf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zm(t);default:return!1}}/**
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
 */async function QE(t,e={}){return zo(t,"GET","/v1/projects",e)}/**
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
 */const JE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZE=/^https?/;async function eT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QE(t);for(const n of e)try{if(tT(n))return}catch{}Jt(t,"unauthorized-domain")}function tT(t){const e=Nc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZE.test(n))return!1;if(JE.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const nT=new Yi(3e4,6e4);function yf(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rT(t){return new Promise((e,n)=>{var r,i,s;function o(){yf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yf(),n(Mt(t,"network-request-failed"))},timeout:nT.get()})}if(!((i=(r=Lt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Lt().gapi)===null||s===void 0)&&s.load)o();else{const a=ME("iframefcb");return Lt()[a]=()=>{gapi.load?o():n(Mt(t,"network-request-failed"))},PE(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Bs=null,e})}let Bs=null;function iT(t){return Bs=Bs||rT(t),Bs}/**
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
 */const sT=new Yi(5e3,15e3),oT="__/auth/iframe",aT="emulator/auth/iframe",cT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uT(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jl(e,aT):`https://${t.config.authDomain}/${oT}`,r={apiKey:e.apiKey,appName:t.name,v:Kr},i=lT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Wi(r).slice(1)}`}async function hT(t){const e=await iT(t),n=Lt().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:uT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Mt(t,"network-request-failed"),a=Lt().setTimeout(()=>{s(o)},sT.get());function c(){Lt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const fT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dT=500,pT=600,mT="_blank",gT="http://localhost";class bf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vT(t,e,n,r=dT,i=pT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},fT),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Fe().toLowerCase();n&&(a=Tm(l)?mT:n),Em(l)&&(e=e||gT,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(cE(l)&&a!=="_self")return yT(e||"",a),new bf(null);const h=window.open(e||"",a,u);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new bf(h)}function yT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bT="__/auth/handler",_T="emulator/auth/handler";function _f(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Kr,eventId:i};if(e instanceof Rm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof Xi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${wT(t)}?${Wi(a).slice(1)}`}function wT({config:t}){return t.emulator?jl(t,_T):`https://${t.authDomain}/${bT}`}/**
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
 */const Ma="webStorageSupport";class ET{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fm,this._completeRedirectFn=WE,this._overrideRedirectResult=HE}async _openPopup(e,n,r,i){var s;Zt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=_f(e,n,r,Nc(),i);return vT(e,o,ql())}async _openRedirect(e,n,r,i){return await this._originValidation(e),TE(_f(e,n,r,Nc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hT(e),r=new YE(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ma,{type:Ma},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ma];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Am()||Hl()||Ho()}}const TT=ET;var wf="@firebase/auth",Ef="0.20.5";/**
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
 */class IT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ST(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function CT(t){tr(new Cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{Q(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),Q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xm(t)},u=new fE(a,c,l);return z1(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tr(new Cn("auth-internal",e=>{const n=Om(e.getProvider("auth").getImmediate());return(r=>new IT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(wf,Ef,ST(t)),Pt(wf,Ef,"esm2017")}/**
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
 */function kT(t=jo()){const e=Gi(t,"auth");return e.isInitialized()?e.getImmediate():j1(t,{popupRedirectResolver:TT,persistence:[RE,_E,Fm]})}CT("Browser");var AT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Wl=Wl||{},W=AT||self;function oo(){}function Dc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ji(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xT(t){return Object.prototype.hasOwnProperty.call(t,La)&&t[La]||(t[La]=++OT)}var La="closure_uid_"+(1e9*Math.random()>>>0),OT=0;function NT(t,e,n){return t.call.apply(t.bind,arguments)}function RT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function He(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?He=NT:He=RT,He.apply(null,arguments)}function bs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ge(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function On(){this.s=this.s,this.o=this.o}var DT=0;On.prototype.s=!1;On.prototype.na=function(){!this.s&&(this.s=!0,this.M(),DT!=0)&&xT(this)};On.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},qm=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function PT(t){e:{var e=SI;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Tf(t){return Array.prototype.concat.apply([],arguments)}function Gl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ao(t){return/^[\s\xa0]*$/.test(t)}var If=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Je(t,e){return t.indexOf(e)!=-1}function Fa(t,e){return t<e?-1:t>e?1:0}var Ze;e:{var Sf=W.navigator;if(Sf){var Cf=Sf.userAgent;if(Cf){Ze=Cf;break e}}Ze=""}function Yl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Km(t){const e={};for(const n in t)e[n]=t[n];return e}var kf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wm(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<kf.length;s++)n=kf[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Xl(t){return Xl[" "](t),t}Xl[" "]=oo;function MT(t){var e=UT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var LT=Je(Ze,"Opera"),Dr=Je(Ze,"Trident")||Je(Ze,"MSIE"),Gm=Je(Ze,"Edge"),Pc=Gm||Dr,Ym=Je(Ze,"Gecko")&&!(Je(Ze.toLowerCase(),"webkit")&&!Je(Ze,"Edge"))&&!(Je(Ze,"Trident")||Je(Ze,"MSIE"))&&!Je(Ze,"Edge"),FT=Je(Ze.toLowerCase(),"webkit")&&!Je(Ze,"Edge");function Xm(){var t=W.document;return t?t.documentMode:void 0}var co;e:{var Ua="",$a=function(){var t=Ze;if(Ym)return/rv:([^\);]+)(\)|;)/.exec(t);if(Gm)return/Edge\/([\d\.]+)/.exec(t);if(Dr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(FT)return/WebKit\/(\S+)/.exec(t);if(LT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($a&&(Ua=$a?$a[1]:""),Dr){var Ba=Xm();if(Ba!=null&&Ba>parseFloat(Ua)){co=String(Ba);break e}}co=Ua}var UT={};function $T(){return MT(function(){let t=0;const e=If(String(co)).split("."),n=If("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Fa(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Fa(i[2].length==0,s[2].length==0)||Fa(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Mc;if(W.document&&Dr){var Af=Xm();Mc=Af||parseInt(co,10)||void 0}else Mc=void 0;var BT=Mc,VT=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",oo,e),W.removeEventListener("test",oo,e)}catch{}return t}();function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};function Mi(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ym){e:{try{Xl(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:jT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Mi.Z.h.call(this)}}Ge(Mi,Xe);var jT={2:"touch",3:"pen",4:"mouse"};Mi.prototype.h=function(){Mi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zi="closure_listenable_"+(1e6*Math.random()|0),zT=0;function HT(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++zT,this.ca=this.fa=!1}function Wo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Go(t){this.src=t,this.g={},this.h=0}Go.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Fc(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new HT(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Lc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Hm(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Wo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Fc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Ql="closure_lm_"+(1e6*Math.random()|0),Va={};function Qm(t,e,n,r,i){if(r&&r.once)return Zm(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Qm(t,e[s],n,r,i);return null}return n=eu(n),t&&t[Zi]?t.N(e,n,Ji(r)?!!r.capture:!!r,i):Jm(t,e,n,!1,r,i)}function Jm(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ji(i)?!!i.capture:!!i,a=Zl(t);if(a||(t[Ql]=a=new Go(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=qT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)VT||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(tg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qT(){function t(n){return e.call(t.src,t.listener,n)}var e=KT;return t}function Zm(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Zm(t,e[s],n,r,i);return null}return n=eu(n),t&&t[Zi]?t.O(e,n,Ji(r)?!!r.capture:!!r,i):Jm(t,e,n,!0,r,i)}function eg(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)eg(t,e[s],n,r,i);else r=Ji(r)?!!r.capture:!!r,n=eu(n),t&&t[Zi]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Fc(s,n,r,i),-1<n&&(Wo(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Zl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Fc(e,n,r,i)),(n=-1<t?e[t]:null)&&Jl(n))}function Jl(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Zi])Lc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(tg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Zl(e))?(Lc(n,t),n.h==0&&(n.src=null,e[Ql]=null)):Wo(t)}}}function tg(t){return t in Va?Va[t]:Va[t]="on"+t}function KT(t,e){if(t.ca)t=!0;else{e=new Mi(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Jl(t),t=n.call(r,e)}return t}function Zl(t){return t=t[Ql],t instanceof Go?t:null}var ja="__closure_events_fn_"+(1e9*Math.random()>>>0);function eu(t){return typeof t=="function"?t:(t[ja]||(t[ja]=function(e){return t.handleEvent(e)}),t[ja])}function Ue(){On.call(this),this.i=new Go(this),this.P=this,this.I=null}Ge(Ue,On);Ue.prototype[Zi]=!0;Ue.prototype.removeEventListener=function(t,e,n,r){eg(this,t,e,n,r)};function qe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var i=e;e=new Xe(r,t),Wm(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=_s(o,r,!0,e)&&i}if(o=e.g=t,i=_s(o,r,!0,e)&&i,i=_s(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=_s(o,r,!1,e)&&i}Ue.prototype.M=function(){if(Ue.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Wo(n[r]);delete t.g[e],t.h--}}this.I=null};Ue.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ue.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function _s(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Lc(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var tu=W.JSON.stringify;function WT(){var t=rg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class GT{constructor(){this.h=this.g=null}add(e,n){const r=ng.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ng=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new YT,t=>t.reset());class YT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function XT(t){W.setTimeout(()=>{throw t},0)}function nu(t,e){Uc||QT(),$c||(Uc(),$c=!0),rg.add(t,e)}var Uc;function QT(){var t=W.Promise.resolve(void 0);Uc=function(){t.then(JT)}}var $c=!1,rg=new GT;function JT(){for(var t;t=WT();){try{t.h.call(t.g)}catch(n){XT(n)}var e=ng;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$c=!1}function Yo(t,e){Ue.call(this),this.h=t||1,this.g=e||W,this.j=He(this.kb,this),this.l=Date.now()}Ge(Yo,Ue);P=Yo.prototype;P.da=!1;P.S=null;P.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),qe(this,"tick"),this.da&&(ru(this),this.start()))}};P.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ru(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}P.M=function(){Yo.Z.M.call(this),ru(this),delete this.g};function iu(t,e,n){if(typeof t=="function")n&&(t=He(t,n));else if(t&&typeof t.handleEvent=="function")t=He(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function ig(t){t.g=iu(()=>{t.g=null,t.i&&(t.i=!1,ig(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ZT extends On{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ig(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Li(t){On.call(this),this.h=t,this.g={}}Ge(Li,On);var xf=[];function sg(t,e,n,r){Array.isArray(n)||(n&&(xf[0]=n.toString()),n=xf);for(var i=0;i<n.length;i++){var s=Qm(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function og(t){Yl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Jl(e)},t),t.g={}}Li.prototype.M=function(){Li.Z.M.call(this),og(this)};Li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xo(){this.g=!0}Xo.prototype.Aa=function(){this.g=!1};function eI(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function tI(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function br(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+rI(t,n)+(r?" "+r:"")})}function nI(t,e){t.info(function(){return"TIMEOUT: "+e})}Xo.prototype.info=function(){};function rI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return tu(n)}catch{return e}}var cr={},Of=null;function Qo(){return Of=Of||new Ue}cr.Ma="serverreachability";function ag(t){Xe.call(this,cr.Ma,t)}Ge(ag,Xe);function Fi(t){const e=Qo();qe(e,new ag(e))}cr.STAT_EVENT="statevent";function cg(t,e){Xe.call(this,cr.STAT_EVENT,t),this.stat=e}Ge(cg,Xe);function tt(t){const e=Qo();qe(e,new cg(e,t))}cr.Na="timingevent";function lg(t,e){Xe.call(this,cr.Na,t),this.size=e}Ge(lg,Xe);function es(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Jo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ug={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function su(){}su.prototype.h=null;function Nf(t){return t.h||(t.h=t.i())}function hg(){}var ts={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ou(){Xe.call(this,"d")}Ge(ou,Xe);function au(){Xe.call(this,"c")}Ge(au,Xe);var Bc;function Zo(){}Ge(Zo,su);Zo.prototype.g=function(){return new XMLHttpRequest};Zo.prototype.i=function(){return{}};Bc=new Zo;function ns(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Li(this),this.P=iI,t=Pc?125:void 0,this.W=new Yo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new fg}function fg(){this.i=null,this.g="",this.h=!1}var iI=45e3,Vc={},lo={};P=ns.prototype;P.setTimeout=function(t){this.P=t};function jc(t,e,n){t.K=1,t.v=ta(en(e)),t.s=n,t.U=!0,dg(t,null)}function dg(t,e){t.F=Date.now(),rs(t),t.A=en(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),_g(n.h,"t",r),t.C=0,n=t.l.H,t.h=new fg,t.g=Bg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new ZT(He(t.Ia,t,t.g),t.O)),sg(t.V,t.g,"readystatechange",t.gb),e=t.H?Km(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Fi(),eI(t.j,t.u,t.A,t.m,t.X,t.s)}P.gb=function(t){t=t.target;const e=this.L;e&&Wt(t)==3?e.l():this.Ia(t)};P.Ia=function(t){try{if(t==this.g)e:{const u=Wt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Pc||this.g&&(this.h.h||this.g.ga()||Mf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Fi(3):Fi(2)),ea(this);var n=this.g.ba();this.N=n;t:if(pg(this)){var r=Mf(this.g);t="";var i=r.length,s=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jn(this),bi(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,tI(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ao(a)){var l=a;break t}}l=null}if(n=l)br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,zc(this,n);else{this.i=!1,this.o=3,tt(12),jn(this),bi(this);break e}}this.U?(mg(this,u,o),Pc&&this.i&&u==3&&(sg(this.V,this.W,"tick",this.fb),this.W.start())):(br(this.j,this.m,o,null),zc(this,o)),u==4&&jn(this),this.i&&!this.I&&(u==4?Lg(this.l,this):(this.i=!1,rs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),jn(this),bi(this)}}}catch{}finally{}};function pg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function mg(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=sI(t,n),i==lo){e==4&&(t.o=4,tt(14),r=!1),br(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Vc){t.o=4,tt(15),br(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else br(t.j,t.m,i,null),zc(t,i);pg(t)&&i!=lo&&i!=Vc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gu(e),e.L=!0,tt(11))):(br(t.j,t.m,n,"[Invalid Chunked Response]"),jn(t),bi(t))}P.fb=function(){if(this.g){var t=Wt(this.g),e=this.g.ga();this.C<e.length&&(ea(this),mg(this,t,e),this.i&&t!=4&&rs(this))}};function sI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?lo:(n=Number(e.substring(n,r)),isNaN(n)?Vc:(r+=1,r+n>e.length?lo:(e=e.substr(r,n),t.C=r+n,e)))}P.cancel=function(){this.I=!0,jn(this)};function rs(t){t.Y=Date.now()+t.P,gg(t,t.P)}function gg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=es(He(t.eb,t),e)}function ea(t){t.B&&(W.clearTimeout(t.B),t.B=null)}P.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(nI(this.j,this.A),this.K!=2&&(Fi(),tt(17)),jn(this),this.o=2,bi(this)):gg(this,this.Y-t)};function bi(t){t.l.G==0||t.I||Lg(t.l,t)}function jn(t){ea(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ru(t.W),og(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function zc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Hc(n.i,t))){if(n.I=t.N,!t.J&&Hc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)po(n),ia(n);else break e;mu(n),tt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=es(He(n.ab,n),6e3));if(1>=Tg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else zn(n,11)}else if((t.J||n.g==t)&&po(n),!ao(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(Je(g,"spdy")||Je(g,"quic")||Je(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(uu(s,s.h),s.h=null))}if(r.D){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.sa=E,Ee(r.F,r.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=$g(r,r.H?r.la:null,r.W),o.J){Ig(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(ea(a),rs(a)),r.g=o}else Pg(r);0<n.l.length&&sa(n)}else l[0]!="stop"&&l[0]!="close"||zn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?zn(n,7):pu(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Fi(4)}catch{}}function oI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Dc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function cu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Dc(t)||typeof t=="string")qm(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Dc(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=oI(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Wr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Wr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}P=Wr.prototype;P.R=function(){lu(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};P.T=function(){return lu(this),this.g.concat()};function lu(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ir(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],ir(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}P.get=function(t,e){return ir(this.h,t)?this.h[t]:e};P.set=function(t,e){ir(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};P.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function ir(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var vg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function aI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function sr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof sr){this.g=e!==void 0?e:t.g,uo(this,t.j),this.s=t.s,ho(this,t.i),fo(this,t.m),this.l=t.l,e=t.h;var n=new Ui;n.i=e.i,e.g&&(n.g=new Wr(e.g),n.h=e.h),Rf(this,n),this.o=t.o}else t&&(n=String(t).match(vg))?(this.g=!!e,uo(this,n[1]||"",!0),this.s=_i(n[2]||""),ho(this,n[3]||"",!0),fo(this,n[4]),this.l=_i(n[5]||"",!0),Rf(this,n[6]||"",!0),this.o=_i(n[7]||"")):(this.g=!!e,this.h=new Ui(null,this.g))}sr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ui(e,Df,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ui(e,Df,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ui(n,n.charAt(0)=="/"?fI:hI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ui(n,pI)),t.join("")};function en(t){return new sr(t)}function uo(t,e,n){t.j=n?_i(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ho(t,e,n){t.i=n?_i(e,!0):e}function fo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rf(t,e,n){e instanceof Ui?(t.h=e,mI(t.h,t.g)):(n||(e=ui(e,dI)),t.h=new Ui(e,t.g))}function Ee(t,e,n){t.h.set(e,n)}function ta(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function cI(t){return t instanceof sr?en(t):new sr(t,void 0)}function lI(t,e,n,r){var i=new sr(null,void 0);return t&&uo(i,t),e&&ho(i,e),n&&fo(i,n),r&&(i.l=r),i}function _i(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ui(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,uI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function uI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Df=/[#\/\?@]/g,hI=/[#\?:]/g,fI=/[#\?]/g,dI=/[#\?@]/g,pI=/#/g;function Ui(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Nn(t){t.g||(t.g=new Wr,t.h=0,t.i&&aI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Ui.prototype;P.add=function(t,e){Nn(this),this.i=null,t=Gr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function yg(t,e){Nn(t),e=Gr(t,e),ir(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ir(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&lu(t)))}function bg(t,e){return Nn(t),e=Gr(t,e),ir(t.g.h,e)}P.forEach=function(t,e){Nn(this),this.g.forEach(function(n,r){qm(n,function(i){t.call(e,i,r,this)},this)},this)};P.T=function(){Nn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};P.R=function(t){Nn(this);var e=[];if(typeof t=="string")bg(this,t)&&(e=Tf(e,this.g.get(Gr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Tf(e,t[n])}return e};P.set=function(t,e){return Nn(this),this.i=null,t=Gr(this,t),bg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function _g(t,e,n){yg(t,e),0<n.length&&(t.i=null,t.g.set(Gr(t,e),Gl(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Gr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mI(t,e){e&&!t.j&&(Nn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(yg(this,r),_g(this,i,n))},t)),t.j=e}var gI=class{constructor(t,e){this.h=t,this.g=e}};function wg(t){this.l=t||vI,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ea&&W.g.Ea()&&W.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vI=10;function Eg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Tg(t){return t.h?1:t.g?t.g.size:0}function Hc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function uu(t,e){t.g?t.g.add(e):t.h=e}function Ig(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}wg.prototype.cancel=function(){if(this.i=Sg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Sg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Gl(t.i)}function hu(){}hu.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};hu.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function yI(){this.g=new hu}function bI(t,e,n){const r=n||"";try{cu(t,function(i,s){let o=i;Ji(i)&&(o=tu(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _I(t,e){const n=new Xo;if(W.Image){const r=new Image;r.onload=bs(ws,n,r,"TestLoadImage: loaded",!0,e),r.onerror=bs(ws,n,r,"TestLoadImage: error",!1,e),r.onabort=bs(ws,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=bs(ws,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ws(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function is(t){this.l=t.$b||null,this.j=t.ib||!1}Ge(is,su);is.prototype.g=function(){return new na(this.l,this.j)};is.prototype.i=function(t){return function(){return t}}({});function na(t,e){Ue.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=fu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ge(na,Ue);var fu=0;P=na.prototype;P.open=function(t,e){if(this.readyState!=fu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$i(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||W).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ss(this)),this.readyState=fu};P.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$i(this)),this.g&&(this.readyState=3,$i(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Cg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}P.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ss(this):$i(this),this.readyState==3&&Cg(this)}};P.Ua=function(t){this.g&&(this.response=this.responseText=t,ss(this))};P.Ta=function(t){this.g&&(this.response=t,ss(this))};P.ha=function(){this.g&&ss(this)};function ss(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$i(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $i(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(na.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wI=W.JSON.parse;function Re(t){Ue.call(this),this.headers=new Wr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=kg,this.K=this.L=!1}Ge(Re,Ue);var kg="",EI=/^https?$/i,TI=["POST","PUT"];P=Re.prototype;P.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Bc.g(),this.C=this.u?Nf(this.u):Nf(Bc),this.g.onreadystatechange=He(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Pf(this,s);return}t=n||"";const i=new Wr(this.headers);r&&cu(r,function(s,o){i.set(o,s)}),r=PT(i.T()),n=W.FormData&&t instanceof W.FormData,!(0<=Hm(TI,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Og(this),0<this.B&&((this.K=II(this.g))?(this.g.timeout=this.B,this.g.ontimeout=He(this.pa,this)):this.A=iu(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Pf(this,s)}};function II(t){return Dr&&$T()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function SI(t){return t.toLowerCase()=="content-type"}P.pa=function(){typeof Wl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function Pf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ag(t),ra(t)}function Ag(t){t.D||(t.D=!0,qe(t,"complete"),qe(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),ra(this))};P.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ra(this,!0)),Re.Z.M.call(this)};P.Fa=function(){this.s||(this.F||this.v||this.l?xg(this):this.cb())};P.cb=function(){xg(this)};function xg(t){if(t.h&&typeof Wl<"u"&&(!t.C[1]||Wt(t)!=4||t.ba()!=2)){if(t.v&&Wt(t)==4)iu(t.Fa,0,t);else if(qe(t,"readystatechange"),Wt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(vg)[1]||null;if(!i&&W.self&&W.self.location){var s=W.self.location.protocol;i=s.substr(0,s.length-1)}r=!EI.test(i?i.toLowerCase():"")}n=r}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var o=2<Wt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Ag(t)}}finally{ra(t)}}}}function ra(t,e){if(t.g){Og(t);const n=t.g,r=t.C[0]?oo:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Og(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function Wt(t){return t.g?t.g.readyState:0}P.ba=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}};P.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wI(e)}};function Mf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case kg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Da=function(){return this.m};P.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function CI(t){let e="";return Yl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function du(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=CI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function ii(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ng(t){this.za=0,this.l=[],this.h=new Xo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ii("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ii("baseRetryDelayMs",5e3,t),this.$a=ii("retryDelaySeedMs",1e4,t),this.Ya=ii("forwardChannelMaxRetries",2,t),this.ra=ii("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new wg(t&&t.concurrentRequestLimit),this.Ca=new yI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}P=Ng.prototype;P.ma=8;P.G=1;function pu(t){if(Rg(t),t.G==3){var e=t.V++,n=en(t.F);Ee(n,"SID",t.J),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),os(t,n),e=new ns(t,t.h,e,void 0),e.K=2,e.v=ta(en(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=Bg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),rs(e)}Ug(t)}P.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ia(t){t.g&&(gu(t),t.g.cancel(),t.g=null)}function Rg(t){ia(t),t.u&&(W.clearTimeout(t.u),t.u=null),po(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function za(t,e){t.l.push(new gI(t.Za++,e)),t.G==3&&sa(t)}function sa(t){Eg(t.i)||t.m||(t.m=!0,nu(t.Ha,t),t.C=0)}function kI(t,e){return Tg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=es(He(t.Ha,t,e),Fg(t,t.C)),t.C++,!0)}P.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new ns(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Km(s),Wm(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Dg(this,i,e),n=en(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),os(this,n),this.o&&s&&du(n,this.o,s),uu(this.i,i),this.Ra&&Ee(n,"TYPE","init"),this.ja?(Ee(n,"$req",e),Ee(n,"SID","null"),i.$=!0,jc(i,n,null)):jc(i,n,e),this.G=2}}else this.G==3&&(t?Lf(this,t):this.l.length==0||Eg(this.i)||Lf(this))};function Lf(t,e){var n;e?n=e.m:n=t.V++;const r=en(t.F);Ee(r,"SID",t.J),Ee(r,"RID",n),Ee(r,"AID",t.U),os(t,r),t.o&&t.s&&du(r,t.o,t.s),n=new ns(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Dg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),uu(t.i,n),jc(n,r,e)}function os(t,e){t.j&&cu({},function(n,r){Ee(e,r,n)})}function Dg(t,e,n){n=Math.min(t.l.length,n);var r=t.j?He(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=s,0>l)s=Math.max(0,i[c].h-100),a=!1;else try{bI(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Pg(t){t.g||t.u||(t.Y=1,nu(t.Ga,t),t.A=0)}function mu(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=es(He(t.Ga,t),Fg(t,t.A)),t.A++,!0)}P.Ga=function(){if(this.u=null,Mg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=es(He(this.bb,this),t)}};P.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,tt(10),ia(this),Mg(this))};function gu(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function Mg(t){t.g=new ns(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=en(t.oa);Ee(e,"RID","rpc"),Ee(e,"SID",t.J),Ee(e,"CI",t.N?"0":"1"),Ee(e,"AID",t.U),os(t,e),Ee(e,"TYPE","xmlhttp"),t.o&&t.s&&du(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ta(en(e)),n.s=null,n.U=!0,dg(n,t)}P.ab=function(){this.v!=null&&(this.v=null,ia(this),mu(this),tt(19))};function po(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function Lg(t,e){var n=null;if(t.g==e){po(t),gu(t),t.g=null;var r=2}else if(Hc(t.i,e))n=e.D,Ig(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Qo(),qe(r,new lg(r,n)),sa(t)}else Pg(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&kI(t,e)||r==2&&mu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:zn(t,5);break;case 4:zn(t,10);break;case 3:zn(t,6);break;default:zn(t,2)}}}function Fg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function zn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=He(t.jb,t);n||(n=new sr("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||uo(n,"https"),ta(n)),_I(n.toString(),r)}else tt(2);t.G=0,t.j&&t.j.va(e),Ug(t),Rg(t)}P.jb=function(t){t?(this.h.info("Successfully pinged google.com"),tt(2)):(this.h.info("Failed to ping google.com"),tt(1))};function Ug(t){t.G=0,t.I=-1,t.j&&((Sg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Gl(t.l),t.l.length=0),t.j.ua())}function $g(t,e,n){let r=cI(n);if(r.i!="")e&&ho(r,e+"."+r.i),fo(r,r.m);else{const i=W.location;r=lI(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Yl(t.aa,function(i,s){Ee(r,s,i)}),e=t.D,n=t.sa,e&&n&&Ee(r,e,n),Ee(r,"VER",t.ma),os(t,r),r}function Bg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Re(new is({ib:!0})):new Re(t.qa),e.L=t.H,e}function Vg(){}P=Vg.prototype;P.xa=function(){};P.wa=function(){};P.va=function(){};P.ua=function(){};P.Oa=function(){};function mo(){if(Dr&&!(10<=Number(BT)))throw Error("Environmental error: no available transport.")}mo.prototype.g=function(t,e){return new dt(t,e)};function dt(t,e){Ue.call(this),this.g=new Ng(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ao(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ao(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Yr(this)}Ge(dt,Ue);dt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),nu(He(t.hb,t,e))),tt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=$g(t,null,t.W),sa(t)};dt.prototype.close=function(){pu(this.g)};dt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,za(this.g,e)}else this.v?(e={},e.__data__=tu(t),za(this.g,e)):za(this.g,t)};dt.prototype.M=function(){this.g.j=null,delete this.j,pu(this.g),delete this.g,dt.Z.M.call(this)};function jg(t){ou.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ge(jg,ou);function zg(){au.call(this),this.status=1}Ge(zg,au);function Yr(t){this.g=t}Ge(Yr,Vg);Yr.prototype.xa=function(){qe(this.g,"a")};Yr.prototype.wa=function(t){qe(this.g,new jg(t))};Yr.prototype.va=function(t){qe(this.g,new zg)};Yr.prototype.ua=function(){qe(this.g,"b")};mo.prototype.createWebChannel=mo.prototype.g;dt.prototype.send=dt.prototype.u;dt.prototype.open=dt.prototype.m;dt.prototype.close=dt.prototype.close;Jo.NO_ERROR=0;Jo.TIMEOUT=8;Jo.HTTP_ERROR=6;ug.COMPLETE="complete";hg.EventType=ts;ts.OPEN="a";ts.CLOSE="b";ts.ERROR="c";ts.MESSAGE="d";Ue.prototype.listen=Ue.prototype.N;Re.prototype.listenOnce=Re.prototype.O;Re.prototype.getLastError=Re.prototype.La;Re.prototype.getLastErrorCode=Re.prototype.Da;Re.prototype.getStatus=Re.prototype.ba;Re.prototype.getResponseJson=Re.prototype.Qa;Re.prototype.getResponseText=Re.prototype.ga;Re.prototype.send=Re.prototype.ea;var AI=function(){return new mo},xI=function(){return Qo()},Ha=Jo,OI=ug,NI=cr,Ff={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},RI=is,Es=hg,DI=Re;const Uf="@firebase/firestore";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let Xr="9.9.2";/**
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
 */const or=new Ul("@firebase/firestore");function $f(){return or.logLevel}function $(t,...e){if(or.logLevel<=he.DEBUG){const n=e.map(vu);or.debug(`Firestore (${Xr}): ${t}`,...n)}}function tn(t,...e){if(or.logLevel<=he.ERROR){const n=e.map(vu);or.error(`Firestore (${Xr}): ${t}`,...n)}}function Bf(t,...e){if(or.logLevel<=he.WARN){const n=e.map(vu);or.warn(`Firestore (${Xr}): ${t}`,...n)}}function vu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${Xr}) INTERNAL ASSERTION FAILED: `+t;throw tn(e),new Error(e)}function Oe(t,e){t||ne()}function ue(t,e){return t}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class PI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class LI{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Gn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string"),new PI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new it(e)}}class FI{constructor(e,n,r){this.type="FirstParty",this.user=it.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class UI{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new FI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $I{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BI{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.p=n.token,new $I(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function VI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class jI{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=VI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function Pr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new ct(0,0))}static max(){return new re(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Bi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends Bi{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const zI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Bi{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return zI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new K(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Ce.fromString(e))}static fromName(e){return new H(Ce.fromString(e).popFirst(5))}static empty(){return new H(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Ce(e.slice()))}}function HI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new kn(i,H.empty(),e)}function qI(t){return new kn(t.readTime,t.key,-1)}class kn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new kn(re.min(),H.empty(),-1)}static max(){return new kn(re.max(),H.empty(),-1)}}function KI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const WI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function yu(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==WI)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function as(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function Vf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function oa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function YI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */bu.ot=-1;class $e{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ts(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ts(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ts(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ts(this.root,e,this.comparator,!0)}}class Ts{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:je.RED,this.left=i!=null?i:je.EMPTY,this.right=s!=null?s:je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new je(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(t,e,n,r,i){return this}insert(t,e,n){return new je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class De{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jf(this.data.getIterator())}getIteratorFrom(e){return new jf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class jf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Yn{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Yn([])}unionWith(e){let n=new De(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new We(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const XI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function An(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=XI.exec(t);if(Oe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mr(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
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
 */function Hg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qg(t){const e=t.mapValue.fields.__previous_value__;return Hg(e)?qg(e):e}function Vi(t){const e=An(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
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
 */class QI{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Lr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function aa(t){return t==null}function qc(t){return t===0&&1/t==-1/0}/**
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
 */const Is={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hg(t)?4:JI(t)?9007199254740991:10:ne()}function $t(t,e){if(t===e)return!0;const n=ar(t);if(n!==ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vi(t).isEqual(Vi(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=An(r.timestampValue),o=An(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Mr(r.bytesValue).isEqual(Mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return xe(r.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(r.geoPointValue.longitude)===xe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return xe(r.integerValue)===xe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=xe(r.doubleValue),o=xe(i.doubleValue);return s===o?qc(s)===qc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Pr(t.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Vf(s)!==Vf(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!$t(s[a],o[a])))return!1;return!0}(t,e);default:return ne()}}function ji(t,e){return(t.values||[]).find(n=>$t(n,e))!==void 0}function Fr(t,e){if(t===e)return 0;const n=ar(t),r=ar(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=xe(i.integerValue||i.doubleValue),a=xe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return zf(t.timestampValue,e.timestampValue);case 4:return zf(Vi(t),Vi(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Mr(i),a=Mr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=fe(o[c],a[c]);if(l!==0)return l}return fe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=fe(xe(i.latitude),xe(s.latitude));return o!==0?o:fe(xe(i.longitude),xe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Fr(o[c],a[c]);if(l)return l}return fe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Is.mapValue&&s===Is.mapValue)return 0;if(i===Is.mapValue)return 1;if(s===Is.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=fe(a[u],l[u]);if(h!==0)return h;const f=Fr(o[a[u]],c[l[u]]);if(f!==0)return f}return fe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ne()}}function zf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=An(t),r=An(e),i=fe(n.seconds,r.seconds);return i!==0?i:fe(n.nanos,r.nanos)}function Ar(t){return Kc(t)}function Kc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=An(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Kc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Kc(r.fields[a])}`;return s+"}"}(t.mapValue):ne();var e,n}function Wc(t){return!!t&&"integerValue"in t}function _u(t){return!!t&&"arrayValue"in t}function Hf(t){return!!t&&"nullValue"in t}function qf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qa(t){return!!t&&"mapValue"in t}function wi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return oa(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wi(n)}setAll(e){let n=ot.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=wi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];qa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){oa(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rt(wi(this.value))}}/**
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
 */class ze{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ze(e,0,re.min(),re.min(),Rt.empty(),0)}static newFoundDocument(e,n,r){return new ze(e,1,n,re.min(),r,0)}static newNoDocument(e,n){return new ze(e,2,n,re.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,re.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ZI{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function Kf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ZI(t,e,n,r,i,s,o)}function wu(t){const e=ue(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Ar(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),aa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ar(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ar(r)).join(",")),e.ut=n}return e.ut}function eS(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ar(r.value)}`;var r}).join(", ")}]`),aa(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ar(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ar(n)).join(",")),`Target(${e})`}function Eu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!cS(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!$t(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gf(t.startAt,e.startAt)&&Gf(t.endAt,e.endAt)}function Gc(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class at extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new tS(e,n,r):n==="array-contains"?new iS(e,r):n==="in"?new sS(e,r):n==="not-in"?new oS(e,r):n==="array-contains-any"?new aS(e,r):new at(e,n,r)}static ct(e,n,r){return n==="in"?new nS(e,r):new rS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Fr(n,this.value)):n!==null&&ar(this.value)===ar(n)&&this.at(Fr(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class tS extends at{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.at(n)}}class nS extends at{constructor(e,n){super(e,"in",n),this.keys=Kg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rS extends at{constructor(e,n){super(e,"not-in",n),this.keys=Kg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Kg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class iS extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _u(n)&&ji(n.arrayValue,this.value)}}class sS extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ji(this.value.arrayValue,n)}}class oS extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ji(this.value.arrayValue,n)}}class aS extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_u(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ji(this.value.arrayValue,r))}}class go{constructor(e,n){this.position=e,this.inclusive=n}}class Ei{constructor(e,n="asc"){this.field=e,this.dir=n}}function cS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Wf(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Fr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$t(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ca{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function lS(t,e,n,r,i,s,o,a){return new ca(t,e,n,r,i,s,o,a)}function Wg(t){return new ca(t)}function Yf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uS(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function hS(t){for(const e of t.filters)if(e.ht())return e.field;return null}function fS(t){return t.collectionGroup!==null}function zi(t){const e=ue(t);if(e.lt===null){e.lt=[];const n=hS(e),r=uS(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new Ei(n)),e.lt.push(new Ei(ot.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Ei(ot.keyField(),s))}}}return e.lt}function nn(t){const e=ue(t);if(!e.ft)if(e.limitType==="F")e.ft=Kf(e.path,e.collectionGroup,zi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of zi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ei(s.field,o))}const r=e.endAt?new go(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new go(e.startAt.position,e.startAt.inclusive):null;e.ft=Kf(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function Yc(t,e,n){return new ca(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function la(t,e){return Eu(nn(t),nn(e))&&t.limitType===e.limitType}function Gg(t){return`${wu(nn(t))}|lt:${t.limitType}`}function Xc(t){return`Query(target=${eS(nn(t))}; limitType=${t.limitType})`}function Tu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):H.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Wf(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,zi(n),r)||n.endAt&&!function(i,s,o){const a=Wf(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,zi(n),r))}(t,e)}function dS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Yg(t){return(e,n)=>{let r=!1;for(const i of zi(t)){const s=pS(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function pS(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Fr(a,c):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
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
 */function mS(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qc(e)?"-0":e}}function gS(t){return{integerValue:""+t}}/**
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
 */class ua{constructor(){this._=void 0}}function vS(t,e,n){return t instanceof Qc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof vo?Xg(t,e):t instanceof yo?Qg(t,e):function(r,i){const s=bS(r,i),o=Xf(s)+Xf(r._t);return Wc(s)&&Wc(r._t)?gS(o):mS(r.wt,o)}(t,e)}function yS(t,e,n){return t instanceof vo?Xg(t,e):t instanceof yo?Qg(t,e):n}function bS(t,e){return t instanceof Jc?Wc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Qc extends ua{}class vo extends ua{constructor(e){super(),this.elements=e}}function Xg(t,e){const n=Jg(e);for(const r of t.elements)n.some(i=>$t(i,r))||n.push(r);return{arrayValue:{values:n}}}class yo extends ua{constructor(e){super(),this.elements=e}}function Qg(t,e){let n=Jg(e);for(const r of t.elements)n=n.filter(i=>!$t(i,r));return{arrayValue:{values:n}}}class Jc extends ua{constructor(e,n){super(),this.wt=e,this._t=n}}function Xf(t){return xe(t.integerValue||t.doubleValue)}function Jg(t){return _u(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _S(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof vo&&r instanceof vo||n instanceof yo&&r instanceof yo?Pr(n.elements,r.elements,$t):n instanceof Jc&&r instanceof Jc?$t(n._t,r._t):n instanceof Qc&&r instanceof Qc}(t.transform,e.transform)}class Xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xn}static exists(e){return new Xn(void 0,e)}static updateTime(e){return new Xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Iu{}function Zg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ES(t.key,Xn.none()):new Su(t.key,t.data,Xn.none());{const n=t.data,r=Rt.empty();let i=new De(ot.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ha(t.key,r,new Yn(i.toArray()),Xn.none())}}function wS(t,e,n){t instanceof Su?function(r,i,s){const o=r.value.clone(),a=Jf(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ha?function(r,i,s){if(!Vs(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Jf(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(ev(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ti(t,e,n,r){return t instanceof Su?function(i,s,o,a){if(!Vs(i.precondition,s))return o;const c=i.value.clone(),l=Zf(i.fieldTransforms,a,s);return c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ha?function(i,s,o,a){if(!Vs(i.precondition,s))return o;const c=Zf(i.fieldTransforms,a,s),l=s.data;return l.setAll(ev(i)),l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(i,s,o){return Vs(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Qf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Pr(n,r,(i,s)=>_S(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Su extends Iu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ha extends Iu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ev(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Jf(t,e,n){const r=new Map;Oe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,yS(o,a,n[i]))}return r}function Zf(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,vS(s,o,e))}return r}class ES extends Iu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class TS{constructor(e){this.count=e}}/**
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
 */var Ae,se;function tv(t){if(t===void 0)return tn("GRPC error has no .code"),N.UNKNOWN;switch(t){case Ae.OK:return N.OK;case Ae.CANCELLED:return N.CANCELLED;case Ae.UNKNOWN:return N.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return N.INTERNAL;case Ae.UNAVAILABLE:return N.UNAVAILABLE;case Ae.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Ae.NOT_FOUND:return N.NOT_FOUND;case Ae.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Ae.ABORTED:return N.ABORTED;case Ae.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Ae.DATA_LOSS:return N.DATA_LOSS;default:return ne()}}(se=Ae||(Ae={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Qr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){oa(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return YI(this.inner)}size(){return this.innerSize}}/**
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
 */const IS=new $e(H.comparator);function xn(){return IS}const nv=new $e(H.comparator);function hi(...t){let e=nv;for(const n of t)e=e.insert(n.key,n);return e}function SS(t){let e=nv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Hn(){return Ii()}function rv(){return Ii()}function Ii(){return new Qr(t=>t.toString(),(t,e)=>t.isEqual(e))}new $e(H.comparator);const CS=new De(H.comparator);function ce(...t){let e=CS;for(const n of t)e=e.add(n);return e}const kS=new De(fe);function iv(){return kS}/**
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
 */class fa{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,cs.createSynthesizedTargetChangeForCurrentChange(e,n)),new fa(re.min(),r,iv(),xn(),ce())}}class cs{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new cs(We.EMPTY_BYTE_STRING,n,ce(),ce(),ce())}}/**
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
 */class js{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class sv{constructor(e,n){this.targetId=e,this.It=n}}class ov{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ed{constructor(){this.Tt=0,this.Et=nd(),this.At=We.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=ce(),n=ce(),r=ce();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new cs(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=nd()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class AS{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=xn(),this.Bt=td(),this.Lt=new De(fe)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(Gc(s))if(r===0){const o=new H(s.path);this.Kt(n,o,ze.newNoDocument(o,re.min()))}else Oe(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&Gc(a.target)){const c=new H(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,ze.newNoDocument(c,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=ce();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new fa(e,n,this.Lt,this.$t,r);return this.$t=xn(),this.Bt=td(),this.Lt=new De(fe),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new ed,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new De(fe),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new ed),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function td(){return new $e(H.comparator)}function nd(){return new $e(H.comparator)}/**
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
 */const xS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),OS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class NS{constructor(e,n){this.databaseId=e,this.dt=n}}function RS(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function DS(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Hi(t){return Oe(!!t),re.fromTimestamp(function(e){const n=An(e);return new ct(n.seconds,n.nanos)}(t))}function PS(t,e){return function(n){return new Ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function av(t){const e=Ce.fromString(t);return Oe(uv(e)),e}function Ka(t,e){const n=av(e);if(n.get(1)!==t.databaseId.projectId)throw new K(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(cv(n))}function Zc(t,e){return PS(t.databaseId,e)}function MS(t){const e=av(t);return e.length===4?Ce.emptyPath():cv(e)}function rd(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cv(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function LS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.dt?(Oe(l===void 0||typeof l=="string"),We.fromBase64String(l||"")):(Oe(l===void 0||l instanceof Uint8Array),We.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?N.UNKNOWN:tv(c.code);return new K(l,c.message||"")}(o);n=new ov(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ka(t,r.document.name),s=Hi(r.document.updateTime),o=new Rt({mapValue:{fields:r.document.fields}}),a=ze.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new js(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ka(t,r.document),s=r.readTime?Hi(r.readTime):re.min(),o=ze.newNoDocument(i,s),a=r.removedTargetIds||[];n=new js([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ka(t,r.document),s=r.removedTargetIds||[];n=new js([],s,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new TS(i),o=r.targetId;n=new sv(o,s)}}return n}function FS(t,e){return{documents:[Zc(t,e.path)]}}function US(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Zc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(qf(h.value))return{unaryFilter:{field:dr(h.field),op:"IS_NAN"}};if(Hf(h.value))return{unaryFilter:{field:dr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(qf(h.value))return{unaryFilter:{field:dr(h.field),op:"IS_NOT_NAN"}};if(Hf(h.value))return{unaryFilter:{field:dr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dr(h.field),op:jS(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:dr(u.field),direction:VS(u.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,l){return c.dt||aa(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function $S(t){let e=MS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Oe(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=lv(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ei(_r(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,aa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new go(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new go(f,h)}(n.endAt)),lS(e,i,o,s,a,"F",c,l)}function BS(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ne()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function lv(t){return t?t.unaryFilter!==void 0?[HS(t)]:t.fieldFilter!==void 0?[zS(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>lv(e)).reduce((e,n)=>e.concat(n)):ne():[]}function VS(t){return xS[t]}function jS(t){return OS[t]}function dr(t){return{fieldPath:t.canonicalString()}}function _r(t){return ot.fromServerFormat(t.fieldPath)}function zS(t){return at.create(_r(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(t.fieldFilter.op),t.fieldFilter.value)}function HS(t){switch(t.unaryFilter.op){case"IS_NAN":const e=_r(t.unaryFilter.field);return at.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=_r(t.unaryFilter.field);return at.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_r(t.unaryFilter.field);return at.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_r(t.unaryFilter.field);return at.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}function uv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class qS{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&wS(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ti(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ti(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=rv();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=Zg(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Pr(this.mutations,e.mutations,(n,r)=>Qf(n,r))&&Pr(this.baseMutations,e.baseMutations,(n,r)=>Qf(n,r))}}/**
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
 */class KS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Qn{constructor(e,n,r,i,s=re.min(),o=re.min(),a=We.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class WS{constructor(e){this.ne=e}}function GS(t){const e=$S({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yc(e,e.limit,"L"):e}/**
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
 */class YS{constructor(){this.ze=new XS}addToCollectionParentIndex(e,n){return this.ze.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(kn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(kn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class XS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new De(Ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(Ce.comparator)).toArray()}}/**
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
 */class Ur{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Ur(0)}static Rn(){return new Ur(-1)}}/**
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
 */class QS{constructor(){this.changes=new Qr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class JS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ZS{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Ti(r.mutation,i,Yn.empty(),ct.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const i=Hn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=hi();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Hn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=xn();const o=Ii(),a=Ii();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof ha)?s=s.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Ti(u.mutation,l,u.mutation.getFieldMask(),ct.now()))}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new JS(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ii();let i=new $e((o,a)=>o-a),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Yn.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||ce()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=rv();u.forEach(f=>{if(!s.has(f)){const p=Zg(n.get(f),r.get(f));p!==null&&h.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return H.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(Hn());let a=-1,c=s;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?S.resolve():this.getBaseDocument(e,u,h).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,ce())).next(u=>({batchId:a,changes:SS(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=hi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=hi();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const c=function(l,u){return new ca(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,ze.newInvalidDocument(l)))});let o=hi();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Ti(l.mutation,c,Yn.empty(),ct.now()),Tu(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):S.resolve(ze.newInvalidDocument(n))}}/**
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
 */class eC{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return S.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:Hi(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:GS(r.bundledQuery),readTime:Hi(r.readTime)}}(n)),S.resolve()}}/**
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
 */class tC{constructor(){this.overlays=new $e(H.comparator),this.Xn=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Hn();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=Hn(),s=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new $e((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=Hn(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Hn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return S.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new KS(n,r));let s=this.Xn.get(n);s===void 0&&(s=ce(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
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
 */class Cu{constructor(){this.Zn=new De(Pe.ts),this.es=new De(Pe.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Pe(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new H(new Ce([])),r=new Pe(n,e),i=new Pe(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new H(new Ce([])),r=new Pe(n,e),i=new Pe(n,e+1);let s=ce();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pe(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return H.comparator(e.key,n.key)||fe(e.ls,n.ls)}static ns(e,n){return fe(e.ls,n.ls)||H.comparator(e.key,n.key)}}/**
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
 */class nC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new De(Pe.ts)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qS(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new Pe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(fe);return n.forEach(i=>{const s=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),S.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Pe(new H(s),0);let a=new De(fe);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.ls)),!0)},o),S.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Oe(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return S.forEach(n.mutations,i=>{const s=new Pe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new Pe(n,0),i=this.ds.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rC{constructor(e){this.ps=e,this.docs=new $e(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let r=xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ze.newInvalidDocument(i))}),S.resolve(r)}getAllFromCollection(e,n,r){let i=xn();const s=new H(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||KI(qI(c),r)<=0||(i=i.insert(c.key,c.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,i){ne()}Is(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iC(this)}getSize(e){return S.resolve(this.size)}}class iC extends QS{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
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
 */class sC{constructor(e){this.persistence=e,this.Ts=new Qr(n=>wu(n),Eu),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Es=0,this.As=new Cu,this.targetCount=0,this.Rs=Ur.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),S.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Ur(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.vn(n),S.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.As.containsKey(n))}}/**
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
 */class oC{constructor(e,n){this.bs={},this.overlays={},this.Ps=new bu(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new sC(this),this.indexManager=new YS,this.remoteDocumentCache=function(r){return new rC(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new WS(n),this.Ds=new eC(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new nC(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new aC(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return S.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class aC extends GI{constructor(e){super(),this.currentSequenceNumber=e}}class ku{constructor(e){this.persistence=e,this.ks=new Cu,this.Ms=null}static Os(e){return new ku(e)}get Fs(){if(this.Ms)return this.Ms;throw ne()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),S.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Fs,r=>{const i=H.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,re.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return S.or([()=>S.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
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
 */class Au{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Au(e,n.fromCache,r,i)}}/**
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
 */class cC{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){if(Yf(n))return S.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Yc(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ki(n,a);return this.Mi(n,l,o,c.readTime)?this.Ci(e,Yc(n,null,"F")):this.Oi(e,l,n,c)}))})))}xi(e,n,r,i){return Yf(n)||i.isEqual(re.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Mi(n,o,r,i)?this.Ni(e,n):($f()<=he.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xc(n)),this.Oi(e,o,n,HI(i,-1)))})}ki(e,n){let r=new De(Yg(e));return n.forEach((i,s)=>{Tu(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return $f()<=he.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Xc(n)),this.Di.getDocumentsMatchingQuery(e,n,kn.min())}Oi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class lC{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new $e(fe),this.Bi=new Qr(s=>wu(s),Eu),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZS(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function uC(t,e,n,r){return new lC(t,e,n,r)}async function hv(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=ce();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function fv(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function hC(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.Vs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,u.addedDocuments,h)));let p=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(We.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),i=i.insert(h,p),function(g,E,b){return g.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(f,p,u)&&a.push(n.Vs.updateTargetData(s,p))});let c=xn(),l=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(fC(s,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!r.isEqual(re.min())){const u=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.$i=i,s))}function fC(t,e,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=xn();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:i}})}function dC(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new Qn(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function el(t,e,n){const r=ue(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!as(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function id(t,e,n){const r=ue(t);let i=re.min(),s=ce();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ue(a),h=u.Bi.get(l);return h!==void 0?S.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(r,o,nn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?s:ce())).next(a=>(pC(r,dS(e),a),{documents:a,ji:s})))}function pC(t,e,n){let r=re.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class sd{constructor(){this.activeTargetIds=iv()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mC{constructor(){this.Fr=new sd,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new sd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gC{Br(e){}shutdown(){}}/**
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
 */class od{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const vC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class yC{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class bC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);$("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(c=>($("RestConnection","Received: ",c),c),c=>{throw Bf("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ao(e,n,r,i,s,o){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Xr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=vC[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new DI;a.listenOnce(OI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ha.NO_ERROR:const l=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Ha.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new K(N.DEADLINE_EXCEEDED,"Request time out"));break;case Ha.HTTP_ERROR:const u=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(g)>=0?g:N.UNKNOWN}(h.status);o(new K(f,h.message))}else o(new K(N.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new K(N.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=AI(),o=xI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new RI({})),this.uo(a.initMessageHeaders,n,r),om()||cm()||_w()||lm()||ww()||am()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");$("Connection","Creating WebChannel: "+c,a);const l=s.createWebChannel(c,a);let u=!1,h=!1;const f=new yC({jr:g=>{h?$("Connection","Not sending because WebChannel is closed:",g):(u||($("Connection","Opening WebChannel transport."),l.open(),u=!0),$("Connection","WebChannel sending:",g),l.send(g))},Wr:()=>l.close()}),p=(g,E,b)=>{g.listen(E,v=>{try{b(v)}catch(_){setTimeout(()=>{throw _},0)}})};return p(l,Es.EventType.OPEN,()=>{h||$("Connection","WebChannel transport opened.")}),p(l,Es.EventType.CLOSE,()=>{h||(h=!0,$("Connection","WebChannel transport closed"),f.eo())}),p(l,Es.EventType.ERROR,g=>{h||(h=!0,Bf("Connection","WebChannel transport errored:",g),f.eo(new K(N.UNAVAILABLE,"The operation could not be completed")))}),p(l,Es.EventType.MESSAGE,g=>{var E;if(!h){const b=g.data[0];Oe(!!b);const v=b,_=v.error||((E=v[0])===null||E===void 0?void 0:E.error);if(_){$("Connection","WebChannel received error:",_);const A=_.status;let C=function(M){const ie=Ae[M];if(ie!==void 0)return tv(ie)}(A),z=_.message;C===void 0&&(C=N.INTERNAL,z="Unknown error status: "+A+" with message "+_.message),h=!0,f.eo(new K(C,z)),l.close()}else $("Connection","WebChannel received:",b),f.no(b)}}),p(o,NI.STAT_EVENT,g=>{g.stat===Ff.PROXY?$("Connection","Detected buffering proxy"):g.stat===Ff.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function Wa(){return typeof document<"u"?document:null}/**
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
 */function dv(t){return new NS(t,!0)}class pv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class _C{constructor(e,n,r,i,s,o,a,c){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new pv(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(tn(n.toString()),tn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new K(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wC extends _C{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=LS(this.wt,e),r=function(i){if(!("targetChange"in i))return re.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?re.min():s.readTime?Hi(s.readTime):re.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=rd(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=Gc(a)?{documents:FS(i,a)}:{query:US(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=DS(i,s.resumeToken):s.snapshotVersion.compareTo(re.min())>0&&(o.readTime=RS(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=BS(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=rd(this.wt),n.removeTarget=e,this.Oo(n)}}/**
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
 */class EC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new K(N.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(N.UNKNOWN,i.toString())})}ao(e,n,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(N.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class TC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(tn(n),this.su=!1):$("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class IC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{us(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ue(a);c.lu.add(4),await ls(c),c._u.set("Unknown"),c.lu.delete(4),await da(c)}(this))})}),this._u=new TC(r,i)}}async function da(t){if(us(t))for(const e of t.fu)await e(!0)}async function ls(t){for(const e of t.fu)await e(!1)}function mv(t,e){const n=ue(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Nu(n)?Ou(n):Jr(n).Co()&&xu(n,e))}function gv(t,e){const n=ue(t),r=Jr(n);n.hu.delete(e),r.Co()&&vv(n,e),n.hu.size===0&&(r.Co()?r.ko():us(n)&&n._u.set("Unknown"))}function xu(t,e){t.wu.Nt(e.targetId),Jr(t).Qo(e)}function vv(t,e){t.wu.Nt(e),Jr(t).jo(e)}function Ou(t){t.wu=new AS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Jr(t).start(),t._u.iu()}function Nu(t){return us(t)&&!Jr(t).Do()&&t.hu.size>0}function us(t){return ue(t).lu.size===0}function yv(t){t.wu=void 0}async function SC(t){t.hu.forEach((e,n)=>{xu(t,e)})}async function CC(t,e){yv(t),Nu(t)?(t._u.uu(e),Ou(t)):t._u.set("Unknown")}async function kC(t,e,n){if(t._u.set("Online"),e instanceof ov&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ad(t,r)}else if(e instanceof js?t.wu.Ut(e):e instanceof sv?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(re.min()))try{const r=await fv(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.hu.get(c);l&&i.hu.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.hu.get(a);if(!c)return;i.hu.set(a,c.withResumeToken(We.EMPTY_BYTE_STRING,c.snapshotVersion)),vv(i,a);const l=new Qn(c.target,a,1,c.sequenceNumber);xu(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await ad(t,r)}}async function ad(t,e,n){if(!as(e))throw e;t.lu.add(1),await ls(t),t._u.set("Offline"),n||(n=()=>fv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await da(t)})}async function cd(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=us(n);n.lu.add(3),await ls(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await da(n)}async function AC(t,e){const n=ue(t);e?(n.lu.delete(2),await da(n)):e||(n.lu.add(2),await ls(n),n._u.set("Unknown"))}function Jr(t){return t.mu||(t.mu=function(e,n,r){const i=ue(e);return i.tu(),new wC(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:SC.bind(null,t),Jr:CC.bind(null,t),Go:kC.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Nu(t)?Ou(t):t._u.set("Unknown")):(await t.mu.stop(),yv(t))})),t.mu}/**
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
 */class Ru{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ru(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bv(t,e){if(tn("AsyncQueue",`${e}: ${t}`),as(t))return new K(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class xr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=hi(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new xr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ld{constructor(){this.yu=new $e(H.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):ne():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class $r{constructor(e,n,r,i,s,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new $r(e,n,xr.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&la(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class xC{constructor(){this.Iu=void 0,this.listeners=[]}}class OC{constructor(){this.queries=new Qr(e=>Gg(e),la),this.onlineState="Unknown",this.Tu=new Set}}async function NC(t,e){const n=ue(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new xC),i)try{s.Iu=await n.onListen(r)}catch(o){const a=bv(o,`Initialization of query '${Xc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&Du(n)}async function RC(t,e){const n=ue(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function DC(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&Du(n)}function PC(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Du(t){t.Tu.forEach(e=>{e.next()})}class MC{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $r(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=$r.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class _v{constructor(e){this.key=e}}class wv{constructor(e){this.key=e}}class LC{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=ce(),this.mutatedKeys=ce(),this.Lu=Yg(e),this.Uu=new xr(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new ld,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),p=Tu(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let b=!1;f&&p?f.data.isEqual(p.data)?g!==E&&(r.track({type:3,doc:p}),b=!0):this.Qu(f,p)||(r.track({type:2,doc:p}),b=!0,(c&&this.Lu(p,c)>0||l&&this.Lu(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),b=!0):f&&!p&&(r.track({type:1,doc:f}),b=!0,(c||l)&&(a=!0)),b&&(p?(o=o.add(p),s=E?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((l,u)=>function(h,f){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return p(h)-p(f)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,s.length!==0||c?{snapshot:new $r(this.query,e.Uu,i,s,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new ld,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=ce(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new wv(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new _v(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=ce();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return $r.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class FC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class UC{constructor(e){this.key=e,this.Xu=!1}}class $C{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Qr(a=>Gg(a),la),this.ec=new Map,this.nc=new Set,this.sc=new $e(H.comparator),this.ic=new Map,this.rc=new Cu,this.oc={},this.uc=new Map,this.cc=Ur.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function BC(t,e){const n=WC(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await dC(n.localStore,nn(e));n.isPrimaryClient&&mv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await VC(n,e,r,a==="current")}return i}async function VC(t,e,n,r){t.hc=(u,h,f)=>async function(p,g,E,b){let v=g.view.Ku(E);v.Mi&&(v=await id(p.localStore,g.query,!1).then(({documents:C})=>g.view.Ku(C,v)));const _=b&&b.targetChanges.get(g.targetId),A=g.view.applyChanges(v,p.isPrimaryClient,_);return hd(p,g.targetId,A.zu),A.snapshot}(t,u,h,f);const i=await id(t.localStore,e,!0),s=new LC(e,i.ji),o=s.Ku(i.documents),a=cs.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=s.applyChanges(o,t.isPrimaryClient,a);hd(t,n,c.zu);const l=new FC(e,n,s);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function jC(t,e){const n=ue(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!la(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await el(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),gv(n.remoteStore,r.targetId),tl(n,r.targetId)}).catch(yu)):(tl(n,r.targetId),await el(n.localStore,r.targetId,!0))}async function Ev(t,e){const n=ue(t);try{const r=await hC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(Oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?Oe(o.Xu):i.removedDocuments.size>0&&(Oe(o.Xu),o.Xu=!1))}),await Iv(n,r,e)}catch(r){await yu(r)}}function ud(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ue(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&Du(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zC(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new $e(H.comparator);o=o.insert(s,ze.newNoDocument(s,re.min()));const a=ce().add(s),c=new fa(re.min(),new Map,new De(fe),o,a);await Ev(r,c),r.sc=r.sc.remove(s),r.ic.delete(e),Pu(r)}else await el(r.localStore,e,!1).then(()=>tl(r,e,n)).catch(yu)}function tl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||Tv(t,r)})}function Tv(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(gv(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Pu(t))}function hd(t,e,n){for(const r of n)r instanceof _v?(t.rc.addReference(r.key,e),HC(t,r)):r instanceof wv?($("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||Tv(t,r.key)):ne()}function HC(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||($("SyncEngine","New document in limbo: "+n),t.nc.add(r),Pu(t))}function Pu(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new H(Ce.fromString(e)),r=t.cc.next();t.ic.set(r,new UC(n)),t.sc=t.sc.insert(n,r),mv(t.remoteStore,new Qn(nn(Wg(n.path)),r,2,bu.ot))}}async function Iv(t,e,n){const r=ue(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,c)=>{o.push(r.hc(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),i.push(l);const u=Au.Vi(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,c){const l=ue(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.Pi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>S.forEach(h.vi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!as(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.$i.get(h),p=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(p);l.$i=l.$i.insert(h,g)}}}(r.localStore,s))}async function qC(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await hv(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new K(N.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Iv(n,r.Ki)}}function KC(t,e){const n=ue(t),r=n.ic.get(e);if(r&&r.Xu)return ce().add(r.key);{let i=ce();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function WC(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ev.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zC.bind(null,e),e.Zu.Go=DC.bind(null,e.eventManager),e.Zu.lc=PC.bind(null,e.eventManager),e}class GC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=dv(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return uC(this.persistence,new cC,e.initialUser,this.wt)}_c(e){return new oC(ku.Os,this.wt)}dc(e){return new mC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ud(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qC.bind(null,this.syncEngine),await AC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new OC}createDatastore(e){const n=dv(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new bC(i));var i;return function(s,o,a,c){return new EC(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>ud(this.syncEngine,a,0),o=od.V()?new od:new gC,new IC(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,l){const u=new $C(r,i,s,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ue(e);$("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await ls(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class XC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):tn("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class QC{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=jI.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function JC(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await hv(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ZC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ek(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>cd(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>cd(e.remoteStore,s)),t.onlineComponents=e}async function ek(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await JC(t,new GC)),t.offlineComponents}async function tk(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await ZC(t,new YC)),t.onlineComponents}async function nk(t){const e=await tk(t),n=e.eventManager;return n.onListen=BC.bind(null,e.syncEngine),n.onUnlisten=jC.bind(null,e.syncEngine),n}function rk(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new XC({next:h=>{s.enqueueAndForget(()=>RC(i,u)),h.fromCache&&a.source==="server"?c.reject(new K(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new MC(o,l,{includeMetadataChanges:!0,Du:!0});return NC(i,u)}(await nk(t),t.asyncQueue,e,n,r)),r.promise}const fd=new Map;/**
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
 */function ik(t,e,n){if(!n)throw new K(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sk(t,e,n,r){if(e===!0&&r===!0)throw new K(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dd(t){if(H.isDocumentKey(t))throw new K(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ok(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function pd(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ok(t);throw new K(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class md{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,sk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Sv{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new md({}),this._settingsFrozen=!1,e instanceof Lr?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new K(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lr(i.options.projectId)}(e))}get app(){if(!this._app)throw new K(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new md(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new MI;switch(n.type){case"gapi":const r=n.client;return Oe(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new UI(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new K(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=fd.get(e);n&&($("ComponentProvider","Removing Datastore"),fd.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Zr{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zr(this.firestore,e,this._key)}}class pa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pa(this.firestore,e,this._query)}}class Or extends pa{constructor(e,n,r){super(e,n,Wg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zr(this.firestore,null,new H(e))}withConverter(e){return new Or(this.firestore,e,this._path)}}function Mu(t,e,...n){if(t=qr(t),ik("collection","path",e),t instanceof Sv){const r=Ce.fromString(e,...n);return dd(r),new Or(t,null,r)}{if(!(t instanceof Zr||t instanceof Or))throw new K(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return dd(r),new Or(t.firestore,null,r)}}/**
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
 */class ak{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new pv(this,"async_queue_retry"),this.Kc=()=>{const n=Wa();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Wa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Wa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Gn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!as(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw tn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=Ru.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&ne()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Cv extends Sv{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new ak,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||kv(this),this._firestoreClient.terminate()}}function ck(t,e){const n=Gi(t,"firestore");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Oi(i,e))return r;throw new K(N.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e})}function lk(t=jo()){return Gi(t,"firestore").getImmediate()}function uk(t){return t._firestoreClient||kv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kv(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new QI(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new QC(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class Av{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class bo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bo(We.fromBase64String(e))}catch(n){throw new K(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bo(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hk{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}const fk=new RegExp("[~\\*/\\[\\]]");function dk(t,e,n){if(e.search(fk)>=0)throw gd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Av(...e.split("."))._internalPath}catch{throw gd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new K(N.INVALID_ARGUMENT,a+t+c)}/**
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
 */class xv{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Zr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ov("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pk extends xv{data(){return super.data()}}function Ov(t,e){return typeof e=="string"?dk(t,e):e instanceof Av?e._internalPath:e._delegate._internalPath}/**
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
 */class Ss{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mk extends xv{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ov("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zs extends mk{data(e={}){return super.data(e)}}class gk{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ss(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zs(this._firestore,this._userDataWriter,r.key,r,new Ss(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new zs(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ss(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new zs(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ss(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:vk(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
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
 */function yk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class bk{convertValue(e,n="none"){switch(ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){const r={};return oa(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new hk(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vi(e));default:return null}}convertTimestamp(e){const n=An(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);Oe(uv(r));const i=new Lr(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||tn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}class _k extends bk{constructor(e){super(),this.firestore=e}convertBytes(e){return new bo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Zr(this.firestore,null,n)}}function Lu(t){t=pd(t,pa);const e=pd(t.firestore,Cv),n=uk(e),r=new _k(e);return yk(t._query),rk(n,t._query).then(i=>new gk(e,r,t,i))}(function(t,e=!0){(function(n){Xr=n})(Kr),tr(new Cn("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Cv(i,new LI(n.getProvider("auth-internal")),new BI(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Pt(Uf,"3.4.14",t),Pt(Uf,"3.4.14","esm2017")})();/**
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
 */const Nv="firebasestorage.googleapis.com",wk="storageBucket",Ek=2*60*1e3,Tk=10*60*1e3;/**
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
 */class Vt extends Bt{constructor(e,n){super(Ga(e),`Firebase Storage: ${n} (${Ga(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Vt.prototype)}_codeEquals(e){return Ga(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Ga(t){return"storage/"+t}function Ik(){const t="An unknown error occurred, please check the error payload for server response.";return new Vt("unknown",t)}function Sk(){return new Vt("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Ck(){return new Vt("canceled","User canceled the upload/download.")}function kk(t){return new Vt("invalid-url","Invalid URL '"+t+"'.")}function Ak(t){return new Vt("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function vd(t){return new Vt("invalid-argument",t)}function Rv(){return new Vt("app-deleted","The Firebase app was deleted.")}function xk(t){return new Vt("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class St{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=St.makeFromUrl(e,n)}catch{return new St(e,"")}if(r.path==="")return r;throw Ak(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(C){C.path_=decodeURIComponent(C.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},E=n===Nv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",v=new RegExp(`^https?://${E}/${i}/${b}`,"i"),A=[{regex:a,indices:c,postModify:s},{regex:p,indices:g,postModify:l},{regex:v,indices:{bucket:1,path:2},postModify:l}];for(let C=0;C<A.length;C++){const z=A[C],M=z.regex.exec(e);if(M){const ie=M[z.indices.bucket];let F=M[z.indices.path];F||(F=""),r=new St(ie,F),z.postModify(r);break}}if(r==null)throw kk(e);return r}}class Ok{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Nk(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...b){l||(l=!0,e.apply(null,b))}function h(b){i=setTimeout(()=>{i=null,t(p,c())},b)}function f(){s&&clearTimeout(s)}function p(b,...v){if(l){f();return}if(b){f(),u.call(null,b,...v);return}if(c()||o){f(),u.call(null,b,...v);return}r<64&&(r*=2);let A;a===1?(a=2,A=0):A=(r+Math.random())*1e3,h(A)}let g=!1;function E(b){g||(g=!0,f(),!l&&(i!==null?(b||(a=2),clearTimeout(i),h(0)):b||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,E(!0)},n),E}function Rk(t){t(!1)}/**
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
 */function Dk(t){return t!==void 0}function yd(t,e,n,r){if(r<e)throw vd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw vd(`Invalid value for '${t}'. Expected ${n} or less.`)}function Pk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var _o;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_o||(_o={}));/**
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
 */class Mk{constructor(e,n,r,i,s,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Cs(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===_o.NO_ERROR,c=s.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=s.getErrorCode()===_o.ABORT;r(!1,new Cs(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Cs(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Dk(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Ik();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Rv():Ck();o(c)}else{const c=Sk();o(c)}};this.canceled_?n(!1,new Cs(!1,null,!0)):this.backoffId_=Nk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Rk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class Cs{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Lk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Fk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Uk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function $k(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Bk(t,e,n,r,i,s){const o=Pk(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return Uk(c,e),Lk(c,n),Fk(c,s),$k(c,r),new Mk(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
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
 */function Vk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function jk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class wo{constructor(e,n){this._service=e,n instanceof St?this._location=n:this._location=St.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new wo(e,n)}get root(){const e=new St(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jk(this._location.path)}get storage(){return this._service}get parent(){const e=Vk(this._location.path);if(e===null)return null;const n=new St(this._location.bucket,e);return new wo(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw xk(e)}}function bd(t,e){const n=e==null?void 0:e[wk];return n==null?null:St.makeFromBucketSpec(n,t)}class zk{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Nv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ek,this._maxUploadRetryTime=Tk,this._requests=new Set,i!=null?this._bucket=St.makeFromBucketSpec(i,this._host):this._bucket=bd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=St.makeFromBucketSpec(this._url,e):this._bucket=bd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wo(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new Ok(Rv());{const s=Bk(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const _d="@firebase/storage",wd="0.9.9";/**
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
 */const Dv="storage";function Hk(t=jo(),e){return t=qr(t),Gi(t,Dv).getImmediate({identifier:e})}function qk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new zk(n,r,i,e,Kr)}function Kk(){tr(new Cn(Dv,qk,"PUBLIC").setMultipleInstances(!0)),Pt(_d,wd,""),Pt(_d,wd,"esm2017")}Kk();const Wk={apiKey:"AIzaSyBZqhlEk13_PeiPGAyKfFAfHyj-MATUGZ4",authDomain:"portfolio-35dfd.firebaseapp.com",databaseURL:"https://portfolio-35dfd.firebaseio.com",projectId:"portfolio-35dfd",storageBucket:"portfolio-35dfd.appspot.com",messagingSenderId:"632417181065",appId:"1:632417181065:web:6d18b76dc4e23443ed9558"},Fu="tAD6hG0KxDMM1OiiRmfhRgXyY1d2";if(!A1().length){let t=k1(Wk);ck(t,{experimentalAutoDetectLongPolling:!0})}const Uu=jo();kT(Uu);const $u=lk(Uu);Hk(Uu);async function Gk(){return new Promise((t,e)=>{Lu(Mu($u,"v2",Fu,"taglines")).then(n=>{const r=[];n.docs.map(i=>{r.push(i.data())}),t(r)}).catch(n=>{e(n)})})}const lt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},Yk={props:{label:String}},Xk={class:"fish-tag","aria-label":"tag"};function Qk(t,e,n,r,i,s){return we(),ke("div",Xk,Ft(n.label.toUpperCase()),1)}const Jk=lt(Yk,[["render",Qk],["__scopeId","data-v-971cadb1"]]);function nl(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Ed(t,e){return Math.random()*(e-t+1)+t}const Zk={props:["skills"],emits:["onSentenceChanged","onWaitingForNextSentence","onStartTypingNextSentence"],data(){return{typingDelayMin:10,typingDelayMax:150,erasingDelay:20,newSentenceDelay:3e3,charIndex:0,currentSkillIndex:0,isTyping:!0,isTypingClass:"typing",typedOutText:"",displayedTag:""}},methods:{buildSentence(t){return`${t.verb} ${t.adj} ${t.noun} ${t.connection} ${t.tools.slice(1).reduce((e,n)=>e+", "+n,t.tools[0])}.`},startTyping(){this.$emit("onStartTypingNextSentence");let t=this.skills[this.currentSkillIndex],e=this.buildSentence(t);this.$emit("onSentenceChanged",t),this.isTyping=this.charIndex<e.length,this.isTyping?(this.typedOutText+=e[this.charIndex],this.charIndex++,setTimeout(this.startTyping,nl(this.typingDelayMin,this.typingDelayMax))):setTimeout(this.startErasing,this.newSentenceDelay)},startErasing(){let t=this.skills[this.currentSkillIndex],e=this.buildSentence(t);this.isTyping=this.charIndex>0,this.isTyping?(this.typedOutText=e.substring(0,this.charIndex-1),this.charIndex--,setTimeout(this.startErasing,this.erasingDelay)):(this.currentSkillIndex++,this.currentSkillIndex>=this.skills.length&&(this.currentSkillIndex=0),this.$emit("onWaitingForNextSentence"),setTimeout(this.startTyping,this.typingDelayMax+1100))}},created(){this.skills.length>0&&setTimeout(this.startTyping,this.newSentenceDelay+250)},watch:{skills:{immediate:!0,handler(t){t.length>0&&setTimeout(this.startTyping,this.newSentenceDelay+250)}}}},eA={class:"typewriter drop-shadow-dark"},tA={"aria-label":"skills shown as typewritter text"},nA=wp(" I "),rA={class:"typed-text"};function iA(t,e,n,r,i,s){return we(),ke("div",eA,[ee("p",tA,[nA,ee("span",rA,Ft(this.typedOutText),1),ee("span",{class:Br(["cursor",[i.isTyping?i.isTypingClass:""]])},"\xA0",2)])])}const sA=lt(Zk,[["render",iA],["__scopeId","data-v-a793f84a"]]);/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var Pv=function(e){return e!=null&&typeof e=="object"&&Array.isArray(e)===!1};/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var oA=Pv;function Td(t){return oA(t)===!0&&Object.prototype.toString.call(t)==="[object Object]"}var aA=function(e){var n,r;return!(Td(e)===!1||(n=e.constructor,typeof n!="function")||(r=n.prototype,Td(r)===!1)||r.hasOwnProperty("isPrototypeOf")===!1)},cA={}.toString,lA=Array.isArray||function(t){return cA.call(t)=="[object Array]"};/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var uA=lA,hA=function(e){return e!=null&&typeof e=="object"&&uA(e)===!1};/*!
 * has-values <https://github.com/jonschlinkert/has-values>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var fA=function(e,n){if(e==null)return!1;if(typeof e=="boolean")return!0;if(typeof e=="number")return!(e===0&&n===!0);if(e.length!==void 0)return e.length!==0;for(var r in e)if(e.hasOwnProperty(r))return!0;return!1};/*!
 * get-value <https://github.com/jonschlinkert/get-value>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var dA=function(t,e,n,r,i){if(!pA(t)||!e)return t;if(e=ks(e),n&&(e+="."+ks(n)),r&&(e+="."+ks(r)),i&&(e+="."+ks(i)),e in t)return t[e];for(var s=e.split("."),o=s.length,a=-1;t&&++a<o;){for(var c=s[a];c[c.length-1]==="\\";)c=c.slice(0,-1)+"."+s[++a];t=t[c]}return t};function pA(t){return t!==null&&(typeof t=="object"||typeof t=="function")}function ks(t){return t?Array.isArray(t)?t.join("."):t:""}/*!
 * has-value <https://github.com/jonschlinkert/has-value>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */var mA=hA,Id=fA,gA=dA,vA=function(t,e,n){return mA(t)?Id(gA(t,e),n):Id(t,e)};/*!
 * unset-value <https://github.com/jonschlinkert/unset-value>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */var yA=Pv,bA=vA,_A=function(e,n){if(!yA(e))throw new TypeError("expected an object.");if(e.hasOwnProperty(n))return delete e[n],!0;if(bA(e,n)){for(var r=n.split("."),i=r.pop();r.length&&r[r.length-1].slice(-1)==="\\";)i=r.pop().slice(0,-1)+"."+i;for(;r.length;)e=e[n=r.shift()];return delete e[i]}return!0},wA=aA,EA=_A,TA=function t(e,n){if(typeof e>"u")return{};if(Array.isArray(e)){for(var r=0;r<e.length;r++)e[r]=t(e[r],n);return e}if(!wA(e)||(typeof n=="string"&&(n=[n]),!Array.isArray(n)))return e;for(var i=0;i<n.length;i++)EA(e,n[i]);for(var s in e)e.hasOwnProperty(s)&&(e[s]=t(e[s],n));return e};/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var IA=function(t){return t!=null&&(Mv(t)||SA(t)||!!t._isBuffer)};function Mv(t){return!!t.constructor&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function SA(t){return typeof t.readFloatLE=="function"&&typeof t.slice=="function"&&Mv(t.slice(0,0))}var CA=IA,kA=Object.prototype.toString,AA=function(e){if(typeof e>"u")return"undefined";if(e===null)return"null";if(e===!0||e===!1||e instanceof Boolean)return"boolean";if(typeof e=="string"||e instanceof String)return"string";if(typeof e=="number"||e instanceof Number)return"number";if(typeof e=="function"||e instanceof Function)return"function";if(typeof Array.isArray<"u"&&Array.isArray(e))return"array";if(e instanceof RegExp)return"regexp";if(e instanceof Date)return"date";var n=kA.call(e);return n==="[object RegExp]"?"regexp":n==="[object Date]"?"date":n==="[object Arguments]"?"arguments":n==="[object Error]"?"error":CA(e)?"buffer":n==="[object Set]"?"set":n==="[object WeakSet]"?"weakset":n==="[object Map]"?"map":n==="[object WeakMap]"?"weakmap":n==="[object Symbol]"?"symbol":n==="[object Int8Array]"?"int8array":n==="[object Uint8Array]"?"uint8array":n==="[object Uint8ClampedArray]"?"uint8clampedarray":n==="[object Int16Array]"?"int16array":n==="[object Uint16Array]"?"uint16array":n==="[object Int32Array]"?"int32array":n==="[object Uint32Array]"?"uint32array":n==="[object Float32Array]"?"float32array":n==="[object Float64Array]"?"float64array":"object"},Lv={exports:{}};(function(t){(function(){function e(n,r){if(typeof r!="function")return n;var i={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[r(s,n[s])||s]=n[s]);return i}t.exports?t.exports=e:window.rename=e})()})(Lv);/*!
 * deep-rename-keys <https://github.com/jonschlinkert/deep-rename-keys>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */var Ya=AA,xA=Lv.exports,OA=function t(e,n){var r=Ya(e);if(r!=="object"&&r!=="array")throw new Error("expected an object");var i=[];r==="object"&&(e=xA(e,n),i={});for(var s in e)if(e.hasOwnProperty(s)){var o=e[s];Ya(o)==="object"||Ya(o)==="array"?i[s]=t(o,n):i[s]=o}return i},Bu={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(o,a,c){this.fn=o,this.context=a,this.once=c||!1}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var a=[],c,l;if(this._eventsCount===0)return a;for(l in c=this._events)e.call(c,l)&&a.push(n?l.slice(1):l);return Object.getOwnPropertySymbols?a.concat(Object.getOwnPropertySymbols(c)):a},s.prototype.listeners=function(a,c){var l=n?n+a:a,u=this._events[l];if(c)return!!u;if(!u)return[];if(u.fn)return[u.fn];for(var h=0,f=u.length,p=new Array(f);h<f;h++)p[h]=u[h].fn;return p},s.prototype.emit=function(a,c,l,u,h,f){var p=n?n+a:a;if(!this._events[p])return!1;var g=this._events[p],E=arguments.length,b,v;if(g.fn){switch(g.once&&this.removeListener(a,g.fn,void 0,!0),E){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,c),!0;case 3:return g.fn.call(g.context,c,l),!0;case 4:return g.fn.call(g.context,c,l,u),!0;case 5:return g.fn.call(g.context,c,l,u,h),!0;case 6:return g.fn.call(g.context,c,l,u,h,f),!0}for(v=1,b=new Array(E-1);v<E;v++)b[v-1]=arguments[v];g.fn.apply(g.context,b)}else{var _=g.length,A;for(v=0;v<_;v++)switch(g[v].once&&this.removeListener(a,g[v].fn,void 0,!0),E){case 1:g[v].fn.call(g[v].context);break;case 2:g[v].fn.call(g[v].context,c);break;case 3:g[v].fn.call(g[v].context,c,l);break;case 4:g[v].fn.call(g[v].context,c,l,u);break;default:if(!b)for(A=1,b=new Array(E-1);A<E;A++)b[A-1]=arguments[A];g[v].fn.apply(g[v].context,b)}}return!0},s.prototype.on=function(a,c,l){var u=new i(c,l||this),h=n?n+a:a;return this._events[h]?this._events[h].fn?this._events[h]=[this._events[h],u]:this._events[h].push(u):(this._events[h]=u,this._eventsCount++),this},s.prototype.once=function(a,c,l){var u=new i(c,l||this,!0),h=n?n+a:a;return this._events[h]?this._events[h].fn?this._events[h]=[this._events[h],u]:this._events[h].push(u):(this._events[h]=u,this._eventsCount++),this},s.prototype.removeListener=function(a,c,l,u){var h=n?n+a:a;if(!this._events[h])return this;if(!c)return--this._eventsCount===0?this._events=new r:delete this._events[h],this;var f=this._events[h];if(f.fn)f.fn===c&&(!u||f.once)&&(!l||f.context===l)&&(--this._eventsCount===0?this._events=new r:delete this._events[h]);else{for(var p=0,g=[],E=f.length;p<E;p++)(f[p].fn!==c||u&&!f[p].once||l&&f[p].context!==l)&&g.push(f[p]);g.length?this._events[h]=g.length===1?g[0]:g:--this._eventsCount===0?this._events=new r:delete this._events[h]}return this},s.prototype.removeAllListeners=function(a){var c;return a?(c=n?n+a:a,this._events[c]&&(--this._eventsCount===0?this._events=new r:delete this._events[c])):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prototype.setMaxListeners=function(){return this},s.prefixed=n,s.EventEmitter=s,t.exports=s})(Bu);function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var NA=Bu.exports,si=function(){},te={data:"state-data",cdata:"state-cdata",tagBegin:"state-tag-begin",tagName:"state-tag-name",tagEnd:"state-tag-end",attributeNameStart:"state-attribute-name-start",attributeName:"state-attribute-name",attributeNameEnd:"state-attribute-name-end",attributeValueBegin:"state-attribute-value-begin",attributeValue:"state-attribute-value"},q={lt:"action-lt",gt:"action-gt",space:"action-space",equal:"action-equal",quote:"action-quote",slash:"action-slash",char:"action-char",error:"action-error"},Ie={text:"text",openTag:"open-tag",closeTag:"close-tag",attributeName:"attribute-name",attributeValue:"attribute-value"},RA={" ":q.space,"	":q.space,"\n":q.space,"\r":q.space,"<":q.lt,">":q.gt,'"':q.quote,"'":q.quote,"=":q.equal,"/":q.slash},DA=function(e){return RA[e]||q.char},PA=function(e){var n,r,i,s,o,a,c,l,u,h;e=Object.assign({debug:!1},e);var f=new NA,p=te.data,g="",E="",b="",v="",_="",A="",C=function(ie,F){if(!(E[0]==="?"||E[0]==="!")){var J={type:ie,value:F};e.debug&&console.log("emit:",J),f.emit("data",J)}};f.stateMachine=(h={},X(h,te.data,(n={},X(n,q.lt,function(){g.trim()&&C(Ie.text,g),E="",_=!1,p=te.tagBegin}),X(n,q.char,function(M){g+=M}),n)),X(h,te.cdata,X({},q.char,function(M){g+=M,g.substr(-3)==="]]>"&&(C(Ie.text,g.slice(0,-3)),g="",p=te.data)})),X(h,te.tagBegin,(r={},X(r,q.space,si),X(r,q.char,function(M){E=M,p=te.tagName}),X(r,q.slash,function(){E="",_=!0}),r)),X(h,te.tagName,(i={},X(i,q.space,function(){_?p=te.tagEnd:(p=te.attributeNameStart,C(Ie.openTag,E))}),X(i,q.gt,function(){C(_?Ie.closeTag:Ie.openTag,E),g="",p=te.data}),X(i,q.slash,function(){p=te.tagEnd,C(Ie.openTag,E)}),X(i,q.char,function(M){E+=M,E==="![CDATA["&&(p=te.cdata,g="",E="")}),i)),X(h,te.tagEnd,(s={},X(s,q.gt,function(){C(Ie.closeTag,E),g="",p=te.data}),X(s,q.char,si),s)),X(h,te.attributeNameStart,(o={},X(o,q.char,function(M){b=M,p=te.attributeName}),X(o,q.gt,function(){g="",p=te.data}),X(o,q.space,si),X(o,q.slash,function(){_=!0,p=te.tagEnd}),o)),X(h,te.attributeName,(a={},X(a,q.space,function(){p=te.attributeNameEnd}),X(a,q.equal,function(){C(Ie.attributeName,b),p=te.attributeValueBegin}),X(a,q.gt,function(){v="",C(Ie.attributeName,b),C(Ie.attributeValue,v),g="",p=te.data}),X(a,q.slash,function(){_=!0,v="",C(Ie.attributeName,b),C(Ie.attributeValue,v),p=te.tagEnd}),X(a,q.char,function(M){b+=M}),a)),X(h,te.attributeNameEnd,(c={},X(c,q.space,si),X(c,q.equal,function(){C(Ie.attributeName,b),p=te.attributeValueBegin}),X(c,q.gt,function(){v="",C(Ie.attributeName,b),C(Ie.attributeValue,v),g="",p=te.data}),X(c,q.char,function(M){v="",C(Ie.attributeName,b),C(Ie.attributeValue,v),b=M,p=te.attributeName}),c)),X(h,te.attributeValueBegin,(l={},X(l,q.space,si),X(l,q.quote,function(M){A=M,v="",p=te.attributeValue}),X(l,q.gt,function(){v="",C(Ie.attributeValue,v),g="",p=te.data}),X(l,q.char,function(M){A="",v=M,p=te.attributeValue}),l)),X(h,te.attributeValue,(u={},X(u,q.space,function(M){A?v+=M:(C(Ie.attributeValue,v),p=te.attributeNameStart)}),X(u,q.quote,function(M){A===M?(C(Ie.attributeValue,v),p=te.attributeNameStart):v+=M}),X(u,q.gt,function(M){A?v+=M:(C(Ie.attributeValue,v),g="",p=te.data)}),X(u,q.slash,function(M){A?v+=M:(C(Ie.attributeValue,v),_=!0,p=te.tagEnd)}),X(u,q.char,function(M){v+=M}),u)),h);var z=function(ie){e.debug&&console.log(p,ie);var F=f.stateMachine[p],J=F[DA(ie)]||F[q.error]||F[q.char];J(ie)};return f.write=function(M){for(var ie=M.length,F=0;F<ie;F++)z(M[F])},f},MA={State:te,Action:q,Type:Ie,create:PA},LA=Bu.exports,Fv=MA,oi=Fv.Type,Vu={element:"element",text:"text"},Xa=function(e){return Object.assign({name:"",type:Vu.element,value:"",parent:null,attributes:{},children:[]},e)},Uv=function(e){e=Object.assign({stream:!1,parentNodes:!0,doneEvent:"done",tagPrefix:"tag:",emitTopLevelOnly:!1,debug:!1},e);var n=void 0,r=void 0,i=void 0,s=void 0,o=new LA,a=function(l){switch(l.type){case oi.openTag:if(i===null)i=r,i.name=l.value;else{var u=Xa({name:l.value,parent:i});i.children.push(u),i=u}break;case oi.closeTag:var h=i.parent;if(e.parentNodes||(i.parent=null),i.name!==l.value)break;e.stream&&h===r&&(r.children=[],i.parent=null),(!e.emitTopLevelOnly||h===r)&&(o.emit(e.tagPrefix+i.name,i),o.emit("tag",i.name,i)),i===r&&(n.removeAllListeners("data"),o.emit(e.doneEvent,i),r=null),i=h;break;case oi.text:i&&i.children.push(Xa({type:Vu.text,value:l.value,parent:e.parentNodes?i:null}));break;case oi.attributeName:s=l.value,i.attributes[s]="";break;case oi.attributeValue:i.attributes[s]=l.value;break}};return o.reset=function(){n=Fv.create({debug:e.debug}),n.on("data",a),r=Xa(),i=null,s="",o.parse=n.write},o.reset(),o},FA=function(e,n){n=Object.assign({},n,{stream:!1,tagPrefix:":"});var r=Uv(n),i=void 0;return r.on("done",function(s){i=s}),r.parse(e),i},UA={parseSync:FA,create:Uv,NodeType:Vu},$A=function(e){var n=UA.parseSync("<root>".concat(e,"</root>"),{parentNodes:!1}),r=n.children&&n.children.length>0&&n.children.every(function(i){return i.name==="svg"});if(r)return n.children.length===1?n.children[0]:n.children;throw Error("nothing to parse")},BA=function(e){return TA(e,["parent"])},VA=function(e){return OA(e,function(n){return zA(n)?n:jA(n)})},jA=function(e){return e.replace(/[-|:]([a-z])/gi,function(n,r){return r.toUpperCase()})},zA=function(e){return/^(data|aria)(-\w+)/.test(e)},HA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transformNode,i=r===void 0?function(c){return c}:r,s=n.camelcase,o=s===void 0?!1:s,a=function(l){var u;return u=BA(l),u=i(u),o&&(u=VA(u)),u};return a($A(e))};const qA=function(t){return t.split(";").reduce((e,n)=>{let[r,i]=n.split(":");return r==="fill"&&i!=="none"&&(i="currentColor"),r==="stroke"&&i!=="none"&&(i="currentColor"),e[r]=i,e},{})};function KA(t,e){const n=HA(e);n.attributes.width="1em",n.attributes.height="1em",n.attributes.xmlns="http://www.w3.org/2000/svg";const{multicolor:r,pathfill:i,twotone:s}=n.attributes,o=function(c){const{fill:l,stroke:u,style:h}=c,f=!s&&l&&["none","white","#fff"].includes(l)===!1;if(s==="true"&&l===void 0?c.fill="currentColor":(f||i!==void 0)&&(c.fill=t.color===void 0?"currentColor":t.color),u!==void 0&&u!=="none"&&(c.stroke=t.color===void 0?"currentColor":t.color),h!==void 0){const p=qA(h);c={...c,...p},c.style=""}return c},a=function(c){const{name:l,attributes:u,children:h}=c;if(r!=="true"&&(c.attributes=o(u)),Array.isArray(h)){const{attributes:f}=c;return l==="title"?Ir(l,f):Ir(l,f,h.map(a))}return Ir(l,c.attributes)};return a(n)}const WA=t=>KA(t,'<svg width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>');const GA={components:{FeLoader:WA},props:["label","active"]},YA={key:0,class:"fish-loader"},XA={key:0};function QA(t,e,n,r,i,s){const o=Ye("FeLoader");return we(),wl(Tl,null,{default:Zd(()=>[n.active?(we(),ke("div",YA,[le(o,{class:"loader-icon"}),n.label?(we(),ke("span",XA,Ft(n.label),1)):fh("",!0)])):fh("",!0)]),_:1})}const $v=lt(GA,[["render",QA]]);const JA={components:{FishTag:Jk,FishTypeWriter:sA,FishLoader:$v},created(){this._getTaglines()},data(){return{displayedTag:"",isWaiting:!0,tagShowClass:"show",tagHideClass:"hide",skills:[],isLoading:!1}},methods:{onTypeWriterSentenceChanged(t){this.displayedTag="#"+t.category},async _getTaglines(){try{this.isLoading=!0,this.skills=await Gk()}catch(t){alert(t.message)}finally{this.isLoading=!1}}}},ZA={class:"skills-overview"};function ex(t,e,n,r,i,s){const o=Ye("FishLoader"),a=Ye("FishTypeWriter"),c=Ye("FishTag");return we(),ke("div",ZA,[le(o,{active:i.isLoading,label:"Fetching skills summary from database..."},null,8,["active"]),le(a,{class:"typewriter",skills:i.skills,"aria-label":"skill overview display as animated typewritter text",onOnSentenceChanged:s.onTypeWriterSentenceChanged,onOnStartTypingNextSentence:e[0]||(e[0]=l=>this.isWaiting=!1),onOnWaitingForNextSentence:e[1]||(e[1]=l=>this.isWaiting=!0)},null,8,["skills","onOnSentenceChanged"]),le(c,{"aria-label":"skill overview category",class:Br(["fish-tag drop-shadow-dark",[i.isWaiting?i.tagHideClass:i.tagShowClass]]),label:i.displayedTag},null,8,["class","label"])])}const tx=lt(JA,[["render",ex],["__scopeId","data-v-8df90b19"]]);const nx={props:["project"],data(){return{interactionRemovalDelay:2e3,backgroundImgUrl:""}},methods:{setBackground(){return{background:`url(${this.project.imgUrl})`}},directTo(){window.open(this.project.link,"__blank")}}},rx=t=>(No("data-v-ecceed2e"),t=t(),Ro(),t),ix=rx(()=>ee("div",{class:"glow"},null,-1)),sx={class:"fish-card-overlay"},ox={class:"title","aria-label":"project title"},ax={class:"details","aria-label":"project details"};function cx(t,e,n,r,i,s){return we(),ke("div",{ref:"fishCard",class:"fish-card",style:wn(s.setBackground()),onClick:e[0]||(e[0]=(...o)=>s.directTo&&s.directTo(...o))},[ix,ee("div",sx,[ee("span",ox,Ft(n.project.title),1),ee("span",ax,Ft(n.project.details),1)])],4)}const lx=lt(nx,[["render",cx],["__scopeId","data-v-ecceed2e"]]);async function ux(){return new Promise((t,e)=>{Lu(Mu($u,"v2",Fu,"skills")).then(n=>{const r=[];n.docs.map(i=>{r.push(i.data())}),r.sort((i,s)=>i.priority-s.priority),t(r)}).catch(n=>{e(n)})})}async function hx(){return new Promise((t,e)=>{Lu(Mu($u,"v2",Fu,"projects")).then(n=>{const r=[];n.docs.map(i=>{r.push(i.data())}),r.sort(i=>{if(i.hot)return-1}),t(r)}).catch(n=>{e(n)})})}const fx={props:["label"]},Bv=t=>(No("data-v-c2862340"),t=t(),Ro(),t),dx={class:"divider-wrapper"},px=Bv(()=>ee("div",{class:"divider left"},null,-1)),mx=Bv(()=>ee("div",{class:"divider right"},null,-1));function gx(t,e,n,r,i,s){return we(),ke("div",dx,[px,ee("span",null,Ft(n.label),1),mx])}const vx=lt(fx,[["render",gx],["__scopeId","data-v-c2862340"]]);const yx={},bx=t=>(No("data-v-59dd664a"),t=t(),Ro(),t),_x={class:"fish-scroller"},wx=bx(()=>ee("div",null,[ee("span")],-1)),Ex=[wx];function Tx(t,e,n,r,i,s){return we(),ke("div",_x,Ex)}const Ix=lt(yx,[["render",Tx],["__scopeId","data-v-59dd664a"]]);const Sx={props:["title","skills"]},Cx=t=>(No("data-v-8d516c28"),t=t(),Ro(),t),kx={class:"skill-card drop-shadow-dark hover-effect"},Ax={class:"card-header","aria-label":"skill category"},xx={class:"card-body","aria-label":"skills in details"},Ox=Cx(()=>ee("div",{class:"card-foot"},null,-1));function Nx(t,e,n,r,i,s){return we(),ke("div",kx,[ee("div",Ax,[ee("h1",null,Ft(n.title.toUpperCase()),1)]),ee("div",xx,[(we(!0),ke(st,null,Ns(n.skills,o=>(we(),ke("span",{key:o,"aria-label":"individual skill label under the category"},Ft(o),1))),128))]),Ox])}const Rx=lt(Sx,[["render",Nx],["__scopeId","data-v-8d516c28"]]);const Dx={props:["size","duration"],data(){return{starStyle:{animation:"risingStar 100s linear infinite"},starClassName:"star small"}},created(){let t=parent.innerWidth,e=parent.innerHeight,n=Ed(20,50),r=Ed(0,3),i=nl(0,t);this.starStyle={position:"fixed",animation:`risingStar ${n}s linear infinite`,"animation-delay":`${r}s`,top:`${e}px`,left:`${i}px`};let s=["small","medium","large"],o=nl(0,2),a=s[o];a==="small"?this.starClassName="star small":a==="medium"?this.starClassName="star medium":a==="large"&&(this.starClassName="star large")}};function Px(t,e,n,r,i,s){return we(),ke("div",{class:Br(i.starClassName),style:wn(i.starStyle)},null,6)}const Mx=lt(Dx,[["render",Px],["__scopeId","data-v-8391f950"]]),Lx=""+new URL("avatar.42f08a86.jpeg",import.meta.url).href;const Fx={data(){return{imgUrl:Lx,imgAlt:"No Image",githubUrl:"https://github.com/xmliszt"}},methods:{openGithub(){window.open(this.githubUrl,"_blank")}}},Ux=["src","alt"];function $x(t,e,n,r,i,s){return we(),ke("div",{class:"avatar drop-shadow-light morph-hover-effect",onClick:e[0]||(e[0]=(...o)=>s.openGithub&&s.openGithub(...o))},[ee("img",{"aria-label":"profile image",src:i.imgUrl,alt:i.imgAlt},null,8,Ux)])}const Bx=lt(Fx,[["render",$x],["__scopeId","data-v-f04cbe50"]]),Vx={props:["height"],data(){return{style:{"pointer-events":"none",height:this.height,width:"100%"}}}};function jx(t,e,n,r,i,s){return we(),ke("div",{class:"fish-spacer",style:wn(i.style)},null,4)}const zx=lt(Vx,[["render",jx]]);const Hx={},qx={class:"container","aria-label":"campfire animation"},Kx=Nb('<div class="campfire-wrapper" data-v-f50c1894><div class="tree-container-back" data-v-f50c1894><div class="tree-8" data-v-f50c1894></div><div class="tree-9" data-v-f50c1894></div><div class="tree-10" data-v-f50c1894></div></div><div class="rock-container" data-v-f50c1894><div class="rock-big" data-v-f50c1894></div><div class="rock-small" data-v-f50c1894><div class="rock-1" data-v-f50c1894></div><div class="rock-2" data-v-f50c1894></div><div class="rock-3" data-v-f50c1894></div><div class="rock-4" data-v-f50c1894></div></div></div><div class="campfire-container" data-v-f50c1894><div class="smoke-container" data-v-f50c1894><svg data-v-f50c1894><path d="M 150 0 Q 200 100 100 250 C 0 450 120 400 50 600  " data-v-f50c1894></path></svg><div class="fire-container" data-v-f50c1894><div class="flame-1" data-v-f50c1894></div><div class="flame-2" data-v-f50c1894></div><div class="flame-3" data-v-f50c1894></div></div></div><div class="flame-4" data-v-f50c1894></div></div><div class="tree-container-front" data-v-f50c1894><div class="tree-1" data-v-f50c1894></div><div class="tree-2" data-v-f50c1894></div><div class="tree-3" data-v-f50c1894></div><div class="tree-4" data-v-f50c1894></div><div class="tree-5" data-v-f50c1894></div><div class="tree-6" data-v-f50c1894></div><div class="tree-7" data-v-f50c1894></div></div><div class="campfire-footer" data-v-f50c1894><p data-v-f50c1894> Campfire animation based on the work of Dave Chenell &amp; Jackie Zen (jackiezen) </p></div></div>',1),Wx=[Kx];function Gx(t,e){return we(),ke("div",qx,Wx)}const Yx=lt(Hx,[["render",Gx],["__scopeId","data-v-f50c1894"]]);const Xx={props:["label"]},Qx={class:"hot","aria-label":"hot tag"};function Jx(t,e,n,r,i,s){return we(),ke("div",Qx,Ft(n.label||"HOT"),1)}const Zx=lt(Xx,[["render",Jx],["__scopeId","data-v-3842df08"]]);const eO={components:{FishAvatar:Bx,FishStar:Mx,SkillsOverview:tx,FishCard:lx,FishDivider:vx,FishScroller:Ix,SkillCard:Rx,FishSpacer:zx,FontAwesomeIcon:mw,BottomCampFire:Yx,FishHot:Zx,FishLoader:$v},data(){return{isMenuOpen:!1,landingTitle:"Hi \u{1F64C}\u{1F3FB} I'm Li Yuxuan. I am a Software Engineer. \u{1F4BB}",authBtnOpacity:1,authBtnHidden:!1,projects:[],scrollerStyle:{opacity:1},parallaxBottomStyle:{position:"fixed",top:"0px",left:"0px",right:"0px",bottom:"0px","z-index":-2,display:"flex"},skills:[],isProjectLoading:!1,isSkillLoading:!1}},methods:{toggleMenu(){let t=document.getElementById("menu-body");t.classList.contains("show")||(t.classList.add("show"),this.isMenuOpen=!0)},navigateTo(t){location.hash="#"+t},handleMainScroll(){let t=window.scrollY;this.scrollerStyle.opacity=Math.max(0,1-t/200),this.parallaxBottomStyle.top=`${-t*.2}px`,t>300?this.$refs.avatarView.$el.classList.contains("minimized")||(this.$refs.avatarView.$el.classList.add("minimized"),this.$refs.avatarView.$el.classList.toggle("drop-shadow-dark")):(this.$refs.avatarView.$el.classList.remove("minimized"),this.$refs.avatarView.$el.classList.remove("drop-shadow-dark"))},handleMainClicked(t){!document.getElementById("menu-body").contains(t.target)&&!document.getElementById("menu").contains(t.target)&&(document.getElementById("menu-body").classList.remove("show"),this.isMenuOpen=!1)},async loadProjects(){try{this.isProjectLoading=!0,this.projects=await hx()}catch(t){alert(t.message)}finally{this.isProjectLoading=!1}},async loadSkills(){try{this.isSkillLoading=!0,this.skills=await ux()}catch(t){alert(t.message)}finally{this.isSkillLoading=!1}}},created(){this.loadProjects(),this.loadSkills()},mounted(){document.addEventListener("scroll",this.handleMainScroll),document.addEventListener("click",this.handleMainClicked)},unmounted(){document.removeEventListener("scroll",this.handleMainScroll),document.removeEventListener("click",this.handleMainClicked)}},tO={id:"top"},nO={class:"menu",id:"menu"},rO={class:"menu-body hide",id:"menu-body"},iO=ee("span",{role:"img","aria-label":"Background Sky"},null,-1),sO=[iO],oO={class:"parallax-stars"},aO={class:"parallax-title"},cO={"aria-label":"My greeting to you"},lO=ee("div",{class:"parallax-mountain"},[ee("span",{role:"img","aria-label":"Mountain Parallax"})],-1),uO={class:"content-wrapper"},hO={id:"tagline","aria-label":"tagline section"},fO={id:"projects","aria-label":"projects section"},dO={id:"skills","aria-label":"skills showcase section"},pO={class:"skills-wrapper"};function mO(t,e,n,r,i,s){const o=Ye("FishScroller"),a=Ye("FontAwesomeIcon"),c=Ye("FishStar"),l=Ye("FishAvatar"),u=Ye("FishSpacer"),h=Ye("SkillsOverview"),f=Ye("FishDivider"),p=Ye("FishLoader"),g=Ye("FishHot"),E=Ye("FishCard"),b=Ye("SkillCard"),v=Ye("BottomCampFire");return we(),ke("main",tO,[ee("div",{class:"scroller",style:wn(i.scrollerStyle)},[le(o)],4),ee("div",nO,[ee("button",{"aria-label":"page quick navigation",class:"icon-button hover-effect",onMouseover:e[0]||(e[0]=(..._)=>s.toggleMenu&&s.toggleMenu(..._))},[le(a,{icon:"fa-solid fa-bars"})],32)]),ee("div",rO,[ee("button",{onClick:e[1]||(e[1]=_=>s.navigateTo("top")),"aria-label":"navigate to top of the page"}," Top "),ee("button",{onClick:e[2]||(e[2]=_=>s.navigateTo("tagline")),"aria-label":"navigate to tagline section"}," Summary "),ee("button",{onClick:e[3]||(e[3]=_=>s.navigateTo("projects")),"aria-label":"navigate to projects section"}," Projects "),ee("button",{onClick:e[4]||(e[4]=_=>s.navigateTo("skills")),"aria-label":"navigate to skills section"}," Skills ")]),ee("div",{class:"parallax-bottom",style:wn(i.parallaxBottomStyle)},sO,4),ee("div",oO,[(we(),ke(st,null,Ns(50,_=>le(c,{key:_})),64))]),le(l,{class:"parallax-avatar",ref:"avatarView"},null,512),ee("div",aO,[ee("h1",cO,Ft(i.landingTitle),1)]),le(u,{height:"50vh"}),lO,ee("div",uO,[le(u,{height:"300px"}),ee("section",hO,[le(h)]),le(f,{label:"Projects"}),ee("section",fO,[le(p,{active:i.isProjectLoading,label:"Fetching projects information from database..."},null,8,["active"]),ee("div",null,[(we(!0),ke(st,null,Ns(i.projects,(_,A)=>(we(),ke("div",{key:A},[cb(le(g,{label:t.hot},null,8,["label"]),[[p0,_.hot]]),le(E,{class:"fish-card",project:_},null,8,["project"])]))),128))])]),le(f,{label:"Skills"}),ee("section",dO,[le(p,{active:i.isSkillLoading,label:"Fetching skills information from database..."},null,8,["active"]),ee("div",pO,[(we(!0),ke(st,null,Ns(i.skills,_=>(we(),wl(b,{key:_.title,title:_.title,skills:_.skills},null,8,["title","skills"]))),128))])]),le(v)])])}const gO=lt(eO,[["render",mO]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var vO={prefix:"fas",iconName:"angles-down",icon:[384,512,["angle-double-down"],"f103","M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"]},yO={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"]},bO={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[448,512,["external-link"],"f08e","M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"]},_O={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},wO={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32S145.7 32 128 32zM416 32h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64C448 46.31 433.7 32 416 32zM128 416H64v-64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32S145.7 416 128 416zM416 320c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96C448 334.3 433.7 320 416 320z"]};/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var EO={prefix:"far",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9898,9899,11044,61708,61915,9679],"f111","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]};Z_.add(yO,bO,vO,EO,wO,_O);v0(gO).mount("#app");
