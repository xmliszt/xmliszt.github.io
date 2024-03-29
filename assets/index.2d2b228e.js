(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function oc(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const qv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kv=oc(qv);function Ad(t){return!!t||t===""}function Qn(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Le(r)?Yv(r):Qn(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Le(t))return t;if(Ne(t))return t}}const Wv=/;(?![^(]*\))/g,Gv=/:(.+)/;function Yv(t){const e={};return t.split(Wv).forEach(n=>{if(n){const r=n.split(Gv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Br(t){let e="";if(Le(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const r=Br(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const At=t=>Le(t)?t:t==null?"":Y(t)||Ne(t)&&(t.toString===Rd||!ee(t.toString))?JSON.stringify(t,xd,2):String(t),xd=(t,e)=>e&&e.__v_isRef?xd(t,e.value):Er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Od(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!Y(e)&&!Dd(e)?String(e):e,ge={},wr=[],kt=()=>{},Xv=()=>!1,Qv=/^on[^a-z]/,To=t=>Qv.test(t),ac=t=>t.startsWith("onUpdate:"),Ke=Object.assign,lc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jv=Object.prototype.hasOwnProperty,oe=(t,e)=>Jv.call(t,e),Y=Array.isArray,Er=t=>Io(t)==="[object Map]",Od=t=>Io(t)==="[object Set]",ee=t=>typeof t=="function",Le=t=>typeof t=="string",cc=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Nd=t=>Ne(t)&&ee(t.then)&&ee(t.catch),Rd=Object.prototype.toString,Io=t=>Rd.call(t),Zv=t=>Io(t).slice(8,-1),Dd=t=>Io(t)==="[object Object]",uc=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Os=oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),So=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ey=/-(\w)/g,Ut=So(t=>t.replace(ey,(e,n)=>n?n.toUpperCase():"")),ty=/\B([A-Z])/g,Vr=So(t=>t.replace(ty,"-$1").toLowerCase()),ko=So(t=>t.charAt(0).toUpperCase()+t.slice(1)),wa=So(t=>t?`on${ko(t)}`:""),qs=(t,e)=>!Object.is(t,e),Ea=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ks=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Pd=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Gu;const ny=()=>Gu||(Gu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Nt;class ry{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Nt&&(this.parent=Nt,this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function iy(t,e=Nt){e&&e.active&&e.effects.push(t)}const hc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Md=t=>(t.w&wn)>0,Ld=t=>(t.n&wn)>0,sy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=wn},oy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Md(i)&&!Ld(i)?i.delete(t):e[n++]=i,i.w&=~wn,i.n&=~wn}e.length=n}},el=new WeakMap;let ai=0,wn=1;const tl=30;let wt;const Hn=Symbol(""),nl=Symbol("");class fc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,iy(this,r)}run(){if(!this.active)return this.fn();let e=wt,n=yn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wt,wt=this,yn=!0,wn=1<<++ai,ai<=tl?sy(this):Yu(this),this.fn()}finally{ai<=tl&&oy(this),wn=1<<--ai,wt=this.parent,yn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(Yu(this),this.onStop&&this.onStop(),this.active=!1)}}function Yu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let yn=!0;const Fd=[];function jr(){Fd.push(yn),yn=!1}function zr(){const t=Fd.pop();yn=t===void 0?!0:t}function ft(t,e,n){if(yn&&wt){let r=el.get(t);r||el.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=hc()),Ud(i)}}function Ud(t,e){let n=!1;ai<=tl?Ld(t)||(t.n|=wn,n=!Md(t)):n=!t.has(wt),n&&(t.add(wt),wt.deps.push(t))}function Gt(t,e,n,r,i,s){const o=el.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?uc(n)&&a.push(o.get("length")):(a.push(o.get(Hn)),Er(t)&&a.push(o.get(nl)));break;case"delete":Y(t)||(a.push(o.get(Hn)),Er(t)&&a.push(o.get(nl)));break;case"set":Er(t)&&a.push(o.get(Hn));break}if(a.length===1)a[0]&&rl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);rl(hc(l))}}function rl(t,e){const n=Y(t)?t:[...t];for(const r of n)r.computed&&Xu(r);for(const r of n)r.computed||Xu(r)}function Xu(t,e){(t!==wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ay=oc("__proto__,__v_isRef,__isVue"),$d=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(cc)),ly=dc(),cy=dc(!1,!0),uy=dc(!0),Qu=hy();function hy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=de(this);for(let s=0,o=this.length;s<o;s++)ft(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(de)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){jr();const r=de(this)[e].apply(this,n);return zr(),r}}),t}function dc(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?Cy:Hd:e?zd:jd).get(r))return r;const o=Y(r);if(!t&&o&&oe(Qu,i))return Reflect.get(Qu,i,s);const a=Reflect.get(r,i,s);return(cc(i)?$d.has(i):ay(i))||(t||ft(r,"get",i),e)?a:tt(a)?o&&uc(i)?a:a.value:Ne(a)?t?qd(a):gc(a):a}}const fy=Bd(),dy=Bd(!0);function Bd(t=!1){return function(n,r,i,s){let o=n[r];if(Ci(o)&&tt(o)&&!tt(i))return!1;if(!t&&!Ci(i)&&(il(i)||(i=de(i),o=de(o)),!Y(n)&&tt(o)&&!tt(i)))return o.value=i,!0;const a=Y(n)&&uc(r)?Number(r)<n.length:oe(n,r),l=Reflect.set(n,r,i,s);return n===de(s)&&(a?qs(i,o)&&Gt(n,"set",r,i):Gt(n,"add",r,i)),l}}function py(t,e){const n=oe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Gt(t,"delete",e,void 0),r}function my(t,e){const n=Reflect.has(t,e);return(!cc(e)||!$d.has(e))&&ft(t,"has",e),n}function gy(t){return ft(t,"iterate",Y(t)?"length":Hn),Reflect.ownKeys(t)}const Vd={get:ly,set:fy,deleteProperty:py,has:my,ownKeys:gy},vy={get:uy,set(t,e){return!0},deleteProperty(t,e){return!0}},yy=Ke({},Vd,{get:cy,set:dy}),pc=t=>t,Co=t=>Reflect.getPrototypeOf(t);function ps(t,e,n=!1,r=!1){t=t.__v_raw;const i=de(t),s=de(e);n||(e!==s&&ft(i,"get",e),ft(i,"get",s));const{has:o}=Co(i),a=r?pc:n?bc:yc;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function ms(t,e=!1){const n=this.__v_raw,r=de(n),i=de(t);return e||(t!==i&&ft(r,"has",t),ft(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function gs(t,e=!1){return t=t.__v_raw,!e&&ft(de(t),"iterate",Hn),Reflect.get(t,"size",t)}function Ju(t){t=de(t);const e=de(this);return Co(e).has.call(e,t)||(e.add(t),Gt(e,"add",t,t)),this}function Zu(t,e){e=de(e);const n=de(this),{has:r,get:i}=Co(n);let s=r.call(n,t);s||(t=de(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?qs(e,o)&&Gt(n,"set",t,e):Gt(n,"add",t,e),this}function eh(t){const e=de(this),{has:n,get:r}=Co(e);let i=n.call(e,t);i||(t=de(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Gt(e,"delete",t,void 0),s}function th(){const t=de(this),e=t.size!==0,n=t.clear();return e&&Gt(t,"clear",void 0,void 0),n}function vs(t,e){return function(r,i){const s=this,o=s.__v_raw,a=de(o),l=e?pc:t?bc:yc;return!t&&ft(a,"iterate",Hn),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function ys(t,e,n){return function(...r){const i=this.__v_raw,s=de(i),o=Er(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?pc:e?bc:yc;return!e&&ft(s,"iterate",l?nl:Hn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function an(t){return function(...e){return t==="delete"?!1:this}}function by(){const t={get(s){return ps(this,s)},get size(){return gs(this)},has:ms,add:Ju,set:Zu,delete:eh,clear:th,forEach:vs(!1,!1)},e={get(s){return ps(this,s,!1,!0)},get size(){return gs(this)},has:ms,add:Ju,set:Zu,delete:eh,clear:th,forEach:vs(!1,!0)},n={get(s){return ps(this,s,!0)},get size(){return gs(this,!0)},has(s){return ms.call(this,s,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:vs(!0,!1)},r={get(s){return ps(this,s,!0,!0)},get size(){return gs(this,!0)},has(s){return ms.call(this,s,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:vs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ys(s,!1,!1),n[s]=ys(s,!0,!1),e[s]=ys(s,!1,!0),r[s]=ys(s,!0,!0)}),[t,n,e,r]}const[_y,wy,Ey,Ty]=by();function mc(t,e){const n=e?t?Ty:Ey:t?wy:_y;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(oe(n,i)&&i in r?n:r,i,s)}const Iy={get:mc(!1,!1)},Sy={get:mc(!1,!0)},ky={get:mc(!0,!1)},jd=new WeakMap,zd=new WeakMap,Hd=new WeakMap,Cy=new WeakMap;function Ay(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xy(t){return t.__v_skip||!Object.isExtensible(t)?0:Ay(Zv(t))}function gc(t){return Ci(t)?t:vc(t,!1,Vd,Iy,jd)}function Oy(t){return vc(t,!1,yy,Sy,zd)}function qd(t){return vc(t,!0,vy,ky,Hd)}function vc(t,e,n,r,i){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=xy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Tr(t){return Ci(t)?Tr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ci(t){return!!(t&&t.__v_isReadonly)}function il(t){return!!(t&&t.__v_isShallow)}function Kd(t){return Tr(t)||Ci(t)}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function Wd(t){return Ks(t,"__v_skip",!0),t}const yc=t=>Ne(t)?gc(t):t,bc=t=>Ne(t)?qd(t):t;function Ny(t){yn&&wt&&(t=de(t),Ud(t.dep||(t.dep=hc())))}function Ry(t,e){t=de(t),t.dep&&rl(t.dep)}function tt(t){return!!(t&&t.__v_isRef===!0)}function Dy(t){return tt(t)?t.value:t}const Py={get:(t,e,n)=>Dy(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return tt(i)&&!tt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Gd(t){return Tr(t)?t:new Proxy(t,Py)}class My{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new fc(e,()=>{this._dirty||(this._dirty=!0,Ry(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=de(this);return Ny(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ly(t,e,n=!1){let r,i;const s=ee(t);return s?(r=t,i=kt):(r=t.get,i=t.set),new My(r,i,s||!i,n)}function bn(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Ao(s,e,n)}return i}function bt(t,e,n,r){if(ee(t)){const s=bn(t,e,n,r);return s&&Nd(s)&&s.catch(o=>{Ao(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(bt(t[s],e,n,r));return i}function Ao(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){bn(l,null,10,[t,o,a]);return}}Fy(t,n,i,r)}function Fy(t,e,n,r=!0){console.error(t)}let Ws=!1,sl=!1;const ht=[];let Ht=0;const di=[];let li=null,pr=0;const pi=[];let fn=null,mr=0;const Yd=Promise.resolve();let _c=null,ol=null;function Uy(t){const e=_c||Yd;return t?e.then(this?t.bind(this):t):e}function $y(t){let e=Ht+1,n=ht.length;for(;e<n;){const r=e+n>>>1;Ai(ht[r])<t?e=r+1:n=r}return e}function Xd(t){(!ht.length||!ht.includes(t,Ws&&t.allowRecurse?Ht+1:Ht))&&t!==ol&&(t.id==null?ht.push(t):ht.splice($y(t.id),0,t),Qd())}function Qd(){!Ws&&!sl&&(sl=!0,_c=Yd.then(ep))}function By(t){const e=ht.indexOf(t);e>Ht&&ht.splice(e,1)}function Jd(t,e,n,r){Y(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Qd()}function Vy(t){Jd(t,li,di,pr)}function jy(t){Jd(t,fn,pi,mr)}function xo(t,e=null){if(di.length){for(ol=e,li=[...new Set(di)],di.length=0,pr=0;pr<li.length;pr++)li[pr]();li=null,pr=0,ol=null,xo(t,e)}}function Zd(t){if(xo(),pi.length){const e=[...new Set(pi)];if(pi.length=0,fn){fn.push(...e);return}for(fn=e,fn.sort((n,r)=>Ai(n)-Ai(r)),mr=0;mr<fn.length;mr++)fn[mr]();fn=null,mr=0}}const Ai=t=>t.id==null?1/0:t.id;function ep(t){sl=!1,Ws=!0,xo(t),ht.sort((n,r)=>Ai(n)-Ai(r));const e=kt;try{for(Ht=0;Ht<ht.length;Ht++){const n=ht[Ht];n&&n.active!==!1&&bn(n,null,14)}}finally{Ht=0,ht.length=0,Zd(),Ws=!1,_c=null,(ht.length||di.length||pi.length)&&ep(t)}}function zy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ge;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ge;f&&(i=n.map(p=>p.trim())),h&&(i=n.map(Pd))}let a,l=r[a=wa(e)]||r[a=wa(Ut(e))];!l&&s&&(l=r[a=wa(Vr(e))]),l&&bt(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bt(c,t,6,i)}}function tp(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ee(t)){const l=c=>{const u=tp(c,e,!0);u&&(a=!0,Ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(r.set(t,null),null):(Y(s)?s.forEach(l=>o[l]=null):Ke(o,s),r.set(t,o),o)}function Oo(t,e){return!t||!To(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,Vr(e))||oe(t,e))}let yt=null,No=null;function Gs(t){const e=yt;return yt=t,No=t&&t.type.__scopeId||null,e}function wc(t){No=t}function Ec(){No=null}function np(t,e=yt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&dh(-1);const s=Gs(e),o=t(...i);return Gs(s),r._d&&dh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ta(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:v,inheritAttrs:w}=t;let b,g;const T=Gs(t);try{if(n.shapeFlag&4){const k=i||r;b=Rt(u.call(k,k,h,s,p,f,v)),g=l}else{const k=e;b=Rt(k.length>1?k(s,{attrs:l,slots:a,emit:c}):k(s,null)),g=e.props?l:Hy(l)}}catch(k){mi.length=0,Ao(k,t,1),b=ce(Ct)}let x=b;if(g&&w!==!1){const k=Object.keys(g),{shapeFlag:z}=x;k.length&&z&7&&(o&&k.some(ac)&&(g=qy(g,o)),x=En(x,g))}return n.dirs&&(x=En(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),b=x,Gs(T),b}const Hy=t=>{let e;for(const n in t)(n==="class"||n==="style"||To(n))&&((e||(e={}))[n]=t[n]);return e},qy=(t,e)=>{const n={};for(const r in t)(!ac(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ky(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?nh(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Oo(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?nh(r,o,c):!0:!!o;return!1}function nh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Oo(n,s))return!0}return!1}function Wy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Gy=t=>t.__isSuspense;function Yy(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):jy(t)}function Xy(t,e){if(Me){let n=Me.provides;const r=Me.parent&&Me.parent.provides;r===n&&(n=Me.provides=Object.create(r)),n[t]=e}}function Ia(t,e,n=!1){const r=Me||yt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ee(e)?e.call(r.proxy):e}}const rh={};function Ns(t,e,n){return rp(t,e,n)}function rp(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=ge){const a=Me;let l,c=!1,u=!1;if(tt(t)?(l=()=>t.value,c=il(t)):Tr(t)?(l=()=>t,r=!0):Y(t)?(u=!0,c=t.some(g=>Tr(g)||il(g)),l=()=>t.map(g=>{if(tt(g))return g.value;if(Tr(g))return $n(g);if(ee(g))return bn(g,a,2)})):ee(t)?e?l=()=>bn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),bt(t,a,3,[f])}:l=kt,e&&r){const g=l;l=()=>$n(g())}let h,f=g=>{h=b.onStop=()=>{bn(g,a,4)}};if(Oi)return f=kt,e?n&&bt(e,a,3,[l(),u?[]:void 0,f]):l(),kt;let p=u?[]:rh;const v=()=>{if(!!b.active)if(e){const g=b.run();(r||c||(u?g.some((T,x)=>qs(T,p[x])):qs(g,p)))&&(h&&h(),bt(e,a,3,[g,p===rh?void 0:p,f]),p=g)}else b.run()};v.allowRecurse=!!e;let w;i==="sync"?w=v:i==="post"?w=()=>it(v,a&&a.suspense):w=()=>Vy(v);const b=new fc(l,w);return e?n?v():p=b.run():i==="post"?it(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&lc(a.scope.effects,b)}}function Qy(t,e,n){const r=this.proxy,i=Le(t)?t.includes(".")?ip(r,t):()=>r[t]:t.bind(r,r);let s;ee(e)?s=e:(s=e.handler,n=e);const o=Me;Nr(this);const a=rp(i,s.bind(r),n);return o?Nr(o):qn(),a}function ip(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function $n(t,e){if(!Ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),tt(t))$n(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)$n(t[n],e);else if(Od(t)||Er(t))t.forEach(n=>{$n(n,e)});else if(Dd(t))for(const n in t)$n(t[n],e);return t}function Jy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return cp(()=>{t.isMounted=!0}),up(()=>{t.isUnmounting=!0}),t}const gt=[Function,Array],Zy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gt,onEnter:gt,onAfterEnter:gt,onEnterCancelled:gt,onBeforeLeave:gt,onLeave:gt,onAfterLeave:gt,onLeaveCancelled:gt,onBeforeAppear:gt,onAppear:gt,onAfterAppear:gt,onAppearCancelled:gt},setup(t,{slots:e}){const n=Fb(),r=Jy();let i;return()=>{const s=e.default&&ap(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const w of s)if(w.type!==Ct){o=w;break}}const a=de(t),{mode:l}=a;if(r.isLeaving)return Sa(o);const c=ih(o);if(!c)return Sa(o);const u=al(c,a,r,n);ll(c,u);const h=n.subTree,f=h&&ih(h);let p=!1;const{getTransitionKey:v}=c.type;if(v){const w=v();i===void 0?i=w:w!==i&&(i=w,p=!0)}if(f&&f.type!==Ct&&(!Fn(c,f)||p)){const w=al(f,a,r,n);if(ll(f,w),l==="out-in")return r.isLeaving=!0,w.afterLeave=()=>{r.isLeaving=!1,n.update()},Sa(o);l==="in-out"&&c.type!==Ct&&(w.delayLeave=(b,g,T)=>{const x=op(r,f);x[String(f.key)]=f,b._leaveCb=()=>{g(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=T})}return o}}},sp=Zy;function op(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function al(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:v,onBeforeAppear:w,onAppear:b,onAfterAppear:g,onAppearCancelled:T}=e,x=String(t.key),k=op(n,t),z=(F,Z)=>{F&&bt(F,r,9,Z)},M=(F,Z)=>{const ye=Z[1];z(F,Z),Y(F)?F.every(Be=>Be.length<=1)&&ye():F.length<=1&&ye()},ie={mode:s,persisted:o,beforeEnter(F){let Z=a;if(!n.isMounted)if(i)Z=w||a;else return;F._leaveCb&&F._leaveCb(!0);const ye=k[x];ye&&Fn(t,ye)&&ye.el._leaveCb&&ye.el._leaveCb(),z(Z,[F])},enter(F){let Z=l,ye=c,Be=u;if(!n.isMounted)if(i)Z=b||l,ye=g||c,Be=T||u;else return;let U=!1;const Te=F._enterCb=mt=>{U||(U=!0,mt?z(Be,[F]):z(ye,[F]),ie.delayedLeave&&ie.delayedLeave(),F._enterCb=void 0)};Z?M(Z,[F,Te]):Te()},leave(F,Z){const ye=String(t.key);if(F._enterCb&&F._enterCb(!0),n.isUnmounting)return Z();z(h,[F]);let Be=!1;const U=F._leaveCb=Te=>{Be||(Be=!0,Z(),Te?z(v,[F]):z(p,[F]),F._leaveCb=void 0,k[ye]===t&&delete k[ye])};k[ye]=t,f?M(f,[F,U]):U()},clone(F){return al(F,e,n,r)}};return ie}function Sa(t){if(Ro(t))return t=En(t),t.children=null,t}function ih(t){return Ro(t)?t.children?t.children[0]:void 0:t}function ll(t,e){t.shapeFlag&6&&t.component?ll(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ap(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Je?(o.patchFlag&128&&i++,r=r.concat(ap(o.children,e,a))):(e||o.type!==Ct)&&r.push(a!=null?En(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Tc(t){return ee(t)?{setup:t,name:t.name}:t}const Rs=t=>!!t.type.__asyncLoader,Ro=t=>t.type.__isKeepAlive;function eb(t,e){lp(t,"a",e)}function tb(t,e){lp(t,"da",e)}function lp(t,e,n=Me){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Do(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Ro(i.parent.vnode)&&nb(r,e,n,i),i=i.parent}}function nb(t,e,n,r){const i=Do(e,t,r,!0);hp(()=>{lc(r[e],i)},n)}function Do(t,e,n=Me,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;jr(),Nr(n);const a=bt(e,n,t,o);return qn(),zr(),a});return r?i.unshift(s):i.push(s),s}}const rn=t=>(e,n=Me)=>(!Oi||t==="sp")&&Do(t,e,n),rb=rn("bm"),cp=rn("m"),ib=rn("bu"),sb=rn("u"),up=rn("bum"),hp=rn("um"),ob=rn("sp"),ab=rn("rtg"),lb=rn("rtc");function cb(t,e=Me){Do("ec",t,e)}function sh(t,e){const n=yt;if(n===null)return t;const r=Mo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=ge]=e[s];ee(o)&&(o={mounted:o,updated:o}),o.deep&&$n(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Nn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(jr(),bt(l,n,8,[t.el,a,t,e]),zr())}}const fp="components";function Ye(t,e){return hb(fp,t,!0,e)||t}const ub=Symbol();function hb(t,e,n=!0,r=!1){const i=yt||Me;if(i){const s=i.type;if(t===fp){const a=jb(s,!1);if(a&&(a===e||a===Ut(e)||a===ko(Ut(e))))return s}const o=oh(i[t]||s[t],e)||oh(i.appContext[t],e);return!o&&r?s:o}}function oh(t,e){return t&&(t[e]||t[Ut(e)]||t[ko(Ut(e))])}function ci(t,e,n,r){let i;const s=n&&n[r];if(Y(t)||Le(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Ne(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const cl=t=>t?Ip(t)?Mo(t)||t.proxy:cl(t.parent):null,Ys=Ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cl(t.parent),$root:t=>cl(t.root),$emit:t=>t.emit,$options:t=>pp(t),$forceUpdate:t=>t.f||(t.f=()=>Xd(t.update)),$nextTick:t=>t.n||(t.n=Uy.bind(t.proxy)),$watch:t=>Qy.bind(t)}),fb={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==ge&&oe(r,e))return o[e]=1,r[e];if(i!==ge&&oe(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&oe(c,e))return o[e]=3,s[e];if(n!==ge&&oe(n,e))return o[e]=4,n[e];ul&&(o[e]=0)}}const u=Ys[e];let h,f;if(u)return e==="$attrs"&&ft(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ge&&oe(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,oe(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==ge&&oe(i,e)?(i[e]=n,!0):r!==ge&&oe(r,e)?(r[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==ge&&oe(t,o)||e!==ge&&oe(e,o)||(a=s[0])&&oe(a,o)||oe(r,o)||oe(Ys,o)||oe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ul=!0;function db(t){const e=pp(t),n=t.proxy,r=t.ctx;ul=!1,e.beforeCreate&&ah(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:v,activated:w,deactivated:b,beforeDestroy:g,beforeUnmount:T,destroyed:x,unmounted:k,render:z,renderTracked:M,renderTriggered:ie,errorCaptured:F,serverPrefetch:Z,expose:ye,inheritAttrs:Be,components:U,directives:Te,filters:mt}=e;if(c&&pb(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Se in o){const be=o[Se];ee(be)&&(r[Se]=be.bind(n))}if(i){const Se=i.call(n,n);Ne(Se)&&(t.data=gc(Se))}if(ul=!0,s)for(const Se in s){const be=s[Se],jt=ee(be)?be.bind(n,n):ee(be.get)?be.get.bind(n,n):kt,ya=!ee(be)&&ee(be.set)?be.set.bind(n):kt,ei=vt({get:jt,set:ya});Object.defineProperty(r,Se,{enumerable:!0,configurable:!0,get:()=>ei.value,set:ur=>ei.value=ur})}if(a)for(const Se in a)dp(a[Se],r,n,Se);if(l){const Se=ee(l)?l.call(n):l;Reflect.ownKeys(Se).forEach(be=>{Xy(be,Se[be])})}u&&ah(u,t,"c");function Ve(Se,be){Y(be)?be.forEach(jt=>Se(jt.bind(n))):be&&Se(be.bind(n))}if(Ve(rb,h),Ve(cp,f),Ve(ib,p),Ve(sb,v),Ve(eb,w),Ve(tb,b),Ve(cb,F),Ve(lb,M),Ve(ab,ie),Ve(up,T),Ve(hp,k),Ve(ob,Z),Y(ye))if(ye.length){const Se=t.exposed||(t.exposed={});ye.forEach(be=>{Object.defineProperty(Se,be,{get:()=>n[be],set:jt=>n[be]=jt})})}else t.exposed||(t.exposed={});z&&t.render===kt&&(t.render=z),Be!=null&&(t.inheritAttrs=Be),U&&(t.components=U),Te&&(t.directives=Te)}function pb(t,e,n=kt,r=!1){Y(t)&&(t=hl(t));for(const i in t){const s=t[i];let o;Ne(s)?"default"in s?o=Ia(s.from||i,s.default,!0):o=Ia(s.from||i):o=Ia(s),tt(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function ah(t,e,n){bt(Y(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function dp(t,e,n,r){const i=r.includes(".")?ip(n,r):()=>n[r];if(Le(t)){const s=e[t];ee(s)&&Ns(i,s)}else if(ee(t))Ns(i,t.bind(n));else if(Ne(t))if(Y(t))t.forEach(s=>dp(s,e,n,r));else{const s=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(s)&&Ns(i,s,t)}}function pp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>Xs(l,c,o,!0)),Xs(l,e,o)),s.set(e,l),l}function Xs(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Xs(t,s,n,!0),i&&i.forEach(o=>Xs(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=mb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const mb={data:lh,props:Mn,emits:Mn,methods:Mn,computed:Mn,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:Mn,directives:Mn,watch:vb,provide:lh,inject:gb};function lh(t,e){return e?t?function(){return Ke(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function gb(t,e){return Mn(hl(t),hl(e))}function hl(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Qe(t,e){return t?[...new Set([].concat(t,e))]:e}function Mn(t,e){return t?Ke(Ke(Object.create(null),t),e):e}function vb(t,e){if(!t)return e;if(!e)return t;const n=Ke(Object.create(null),t);for(const r in e)n[r]=Qe(t[r],e[r]);return n}function yb(t,e,n,r=!1){const i={},s={};Ks(s,Po,1),t.propsDefaults=Object.create(null),mp(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Oy(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function bb(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=de(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Oo(t.emitsOptions,f))continue;const p=e[f];if(l)if(oe(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const v=Ut(f);i[v]=fl(l,a,v,p,t,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{mp(t,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!oe(e,h)&&((u=Vr(h))===h||!oe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=fl(l,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!oe(e,h)&&!0)&&(delete s[h],c=!0)}c&&Gt(t,"set","$attrs")}function mp(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Os(l))continue;const c=e[l];let u;i&&oe(i,u=Ut(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Oo(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=de(n),c=a||ge;for(let u=0;u<s.length;u++){const h=s[u];n[h]=fl(i,l,h,c[h],t,!oe(c,h))}}return o}function fl(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&ee(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(Nr(i),r=c[n]=l.call(null,e),qn())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Vr(n))&&(r=!0))}return r}function gp(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!ee(t)){const u=h=>{l=!0;const[f,p]=gp(h,e,!0);Ke(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return r.set(t,wr),wr;if(Y(s))for(let u=0;u<s.length;u++){const h=Ut(s[u]);ch(h)&&(o[h]=ge)}else if(s)for(const u in s){const h=Ut(u);if(ch(h)){const f=s[u],p=o[h]=Y(f)||ee(f)?{type:f}:f;if(p){const v=fh(Boolean,p.type),w=fh(String,p.type);p[0]=v>-1,p[1]=w<0||v<w,(v>-1||oe(p,"default"))&&a.push(h)}}}const c=[o,a];return r.set(t,c),c}function ch(t){return t[0]!=="$"}function uh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function hh(t,e){return uh(t)===uh(e)}function fh(t,e){return Y(e)?e.findIndex(n=>hh(n,t)):ee(e)&&hh(e,t)?0:-1}const vp=t=>t[0]==="_"||t==="$stable",Ic=t=>Y(t)?t.map(Rt):[Rt(t)],_b=(t,e,n)=>{if(e._n)return e;const r=np((...i)=>Ic(e(...i)),n);return r._c=!1,r},yp=(t,e,n)=>{const r=t._ctx;for(const i in t){if(vp(i))continue;const s=t[i];if(ee(s))e[i]=_b(i,s,r);else if(s!=null){const o=Ic(s);e[i]=()=>o}}},bp=(t,e)=>{const n=Ic(e);t.slots.default=()=>n},wb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=de(e),Ks(e,"_",n)):yp(e,t.slots={})}else t.slots={},e&&bp(t,e);Ks(t.slots,Po,1)},Eb=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=ge;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ke(i,e),!n&&a===1&&delete i._):(s=!e.$stable,yp(e,i)),o=e}else e&&(bp(t,e),o={default:1});if(s)for(const a in i)!vp(a)&&!(a in o)&&delete i[a]};function _p(){return{app:null,config:{isNativeTag:Xv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tb=0;function Ib(t,e){return function(r,i=null){ee(r)||(r=Object.assign({},r)),i!=null&&!Ne(i)&&(i=null);const s=_p(),o=new Set;let a=!1;const l=s.app={_uid:Tb++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Hb,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ee(c.install)?(o.add(c),c.install(l,...u)):ee(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=ce(r,i);return f.appContext=s,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Mo(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function dl(t,e,n,r,i=!1){if(Y(t)){t.forEach((f,p)=>dl(f,e&&(Y(e)?e[p]:e),n,r,i));return}if(Rs(r)&&!i)return;const s=r.shapeFlag&4?Mo(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ge?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Le(c)?(u[c]=null,oe(h,c)&&(h[c]=null)):tt(c)&&(c.value=null)),ee(l))bn(l,a,12,[o,u]);else{const f=Le(l),p=tt(l);if(f||p){const v=()=>{if(t.f){const w=f?u[l]:l.value;i?Y(w)&&lc(w,s):Y(w)?w.includes(s)||w.push(s):f?(u[l]=[s],oe(h,l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,oe(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,it(v,n)):v()}}}const it=Yy;function Sb(t){return kb(t)}function kb(t,e){const n=ny();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=kt,cloneNode:v,insertStaticContent:w}=t,b=(d,m,y,E=null,_=null,A=null,R=!1,C=null,O=!!m.dynamicChildren)=>{if(d===m)return;d&&!Fn(d,m)&&(E=ds(d),on(d,_,A,!0),d=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:I,ref:B,shapeFlag:L}=m;switch(I){case Sc:g(d,m,y,E);break;case Ct:T(d,m,y,E);break;case Ds:d==null&&x(m,y,E,R);break;case Je:Te(d,m,y,E,_,A,R,C,O);break;default:L&1?M(d,m,y,E,_,A,R,C,O):L&6?mt(d,m,y,E,_,A,R,C,O):(L&64||L&128)&&I.process(d,m,y,E,_,A,R,C,O,hr)}B!=null&&_&&dl(B,d&&d.ref,A,m||d,!m)},g=(d,m,y,E)=>{if(d==null)r(m.el=a(m.children),y,E);else{const _=m.el=d.el;m.children!==d.children&&c(_,m.children)}},T=(d,m,y,E)=>{d==null?r(m.el=l(m.children||""),y,E):m.el=d.el},x=(d,m,y,E)=>{[d.el,d.anchor]=w(d.children,m,y,E,d.el,d.anchor)},k=({el:d,anchor:m},y,E)=>{let _;for(;d&&d!==m;)_=f(d),r(d,y,E),d=_;r(m,y,E)},z=({el:d,anchor:m})=>{let y;for(;d&&d!==m;)y=f(d),i(d),d=y;i(m)},M=(d,m,y,E,_,A,R,C,O)=>{R=R||m.type==="svg",d==null?ie(m,y,E,_,A,R,C,O):ye(d,m,_,A,R,C,O)},ie=(d,m,y,E,_,A,R,C)=>{let O,I;const{type:B,props:L,shapeFlag:V,transition:X,patchFlag:ae,dirs:pe}=d;if(d.el&&v!==void 0&&ae===-1)O=d.el=v(d.el);else{if(O=d.el=o(d.type,A,L&&L.is,L),V&8?u(O,d.children):V&16&&Z(d.children,O,null,E,_,A&&B!=="foreignObject",R,C),pe&&Nn(d,null,E,"created"),L){for(const _e in L)_e!=="value"&&!Os(_e)&&s(O,_e,null,L[_e],A,d.children,E,_,zt);"value"in L&&s(O,"value",null,L.value),(I=L.onVnodeBeforeMount)&&Ot(I,E,d)}F(O,d,d.scopeId,R,E)}pe&&Nn(d,null,E,"beforeMount");const me=(!_||_&&!_.pendingBranch)&&X&&!X.persisted;me&&X.beforeEnter(O),r(O,m,y),((I=L&&L.onVnodeMounted)||me||pe)&&it(()=>{I&&Ot(I,E,d),me&&X.enter(O),pe&&Nn(d,null,E,"mounted")},_)},F=(d,m,y,E,_)=>{if(y&&p(d,y),E)for(let A=0;A<E.length;A++)p(d,E[A]);if(_){let A=_.subTree;if(m===A){const R=_.vnode;F(d,R,R.scopeId,R.slotScopeIds,_.parent)}}},Z=(d,m,y,E,_,A,R,C,O=0)=>{for(let I=O;I<d.length;I++){const B=d[I]=C?dn(d[I]):Rt(d[I]);b(null,B,m,y,E,_,A,R,C)}},ye=(d,m,y,E,_,A,R)=>{const C=m.el=d.el;let{patchFlag:O,dynamicChildren:I,dirs:B}=m;O|=d.patchFlag&16;const L=d.props||ge,V=m.props||ge;let X;y&&Rn(y,!1),(X=V.onVnodeBeforeUpdate)&&Ot(X,y,m,d),B&&Nn(m,d,y,"beforeUpdate"),y&&Rn(y,!0);const ae=_&&m.type!=="foreignObject";if(I?Be(d.dynamicChildren,I,C,y,E,ae,A):R||jt(d,m,C,null,y,E,ae,A,!1),O>0){if(O&16)U(C,m,L,V,y,E,_);else if(O&2&&L.class!==V.class&&s(C,"class",null,V.class,_),O&4&&s(C,"style",L.style,V.style,_),O&8){const pe=m.dynamicProps;for(let me=0;me<pe.length;me++){const _e=pe[me],_t=L[_e],fr=V[_e];(fr!==_t||_e==="value")&&s(C,_e,_t,fr,_,d.children,y,E,zt)}}O&1&&d.children!==m.children&&u(C,m.children)}else!R&&I==null&&U(C,m,L,V,y,E,_);((X=V.onVnodeUpdated)||B)&&it(()=>{X&&Ot(X,y,m,d),B&&Nn(m,d,y,"updated")},E)},Be=(d,m,y,E,_,A,R)=>{for(let C=0;C<m.length;C++){const O=d[C],I=m[C],B=O.el&&(O.type===Je||!Fn(O,I)||O.shapeFlag&70)?h(O.el):y;b(O,I,B,null,E,_,A,R,!0)}},U=(d,m,y,E,_,A,R)=>{if(y!==E){for(const C in E){if(Os(C))continue;const O=E[C],I=y[C];O!==I&&C!=="value"&&s(d,C,I,O,R,m.children,_,A,zt)}if(y!==ge)for(const C in y)!Os(C)&&!(C in E)&&s(d,C,y[C],null,R,m.children,_,A,zt);"value"in E&&s(d,"value",y.value,E.value)}},Te=(d,m,y,E,_,A,R,C,O)=>{const I=m.el=d?d.el:a(""),B=m.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:V,slotScopeIds:X}=m;X&&(C=C?C.concat(X):X),d==null?(r(I,y,E),r(B,y,E),Z(m.children,y,B,_,A,R,C,O)):L>0&&L&64&&V&&d.dynamicChildren?(Be(d.dynamicChildren,V,y,_,A,R,C),(m.key!=null||_&&m===_.subTree)&&wp(d,m,!0)):jt(d,m,y,B,_,A,R,C,O)},mt=(d,m,y,E,_,A,R,C,O)=>{m.slotScopeIds=C,d==null?m.shapeFlag&512?_.ctx.activate(m,y,E,R,O):cr(m,y,E,_,A,R,O):Ve(d,m,O)},cr=(d,m,y,E,_,A,R)=>{const C=d.component=Lb(d,E,_);if(Ro(d)&&(C.ctx.renderer=hr),Ub(C),C.asyncDep){if(_&&_.registerDep(C,Se),!d.el){const O=C.subTree=ce(Ct);T(null,O,m,y)}return}Se(C,d,m,y,_,A,R)},Ve=(d,m,y)=>{const E=m.component=d.component;if(Ky(d,m,y))if(E.asyncDep&&!E.asyncResolved){be(E,m,y);return}else E.next=m,By(E.update),E.update();else m.el=d.el,E.vnode=m},Se=(d,m,y,E,_,A,R)=>{const C=()=>{if(d.isMounted){let{next:B,bu:L,u:V,parent:X,vnode:ae}=d,pe=B,me;Rn(d,!1),B?(B.el=ae.el,be(d,B,R)):B=ae,L&&Ea(L),(me=B.props&&B.props.onVnodeBeforeUpdate)&&Ot(me,X,B,ae),Rn(d,!0);const _e=Ta(d),_t=d.subTree;d.subTree=_e,b(_t,_e,h(_t.el),ds(_t),d,_,A),B.el=_e.el,pe===null&&Wy(d,_e.el),V&&it(V,_),(me=B.props&&B.props.onVnodeUpdated)&&it(()=>Ot(me,X,B,ae),_)}else{let B;const{el:L,props:V}=m,{bm:X,m:ae,parent:pe}=d,me=Rs(m);if(Rn(d,!1),X&&Ea(X),!me&&(B=V&&V.onVnodeBeforeMount)&&Ot(B,pe,m),Rn(d,!0),L&&_a){const _e=()=>{d.subTree=Ta(d),_a(L,d.subTree,d,_,null)};me?m.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=Ta(d);b(null,_e,y,E,d,_,A),m.el=_e.el}if(ae&&it(ae,_),!me&&(B=V&&V.onVnodeMounted)){const _e=m;it(()=>Ot(B,pe,_e),_)}(m.shapeFlag&256||pe&&Rs(pe.vnode)&&pe.vnode.shapeFlag&256)&&d.a&&it(d.a,_),d.isMounted=!0,m=y=E=null}},O=d.effect=new fc(C,()=>Xd(I),d.scope),I=d.update=()=>O.run();I.id=d.uid,Rn(d,!0),I()},be=(d,m,y)=>{m.component=d;const E=d.vnode.props;d.vnode=m,d.next=null,bb(d,m.props,E,y),Eb(d,m.children,y),jr(),xo(void 0,d.update),zr()},jt=(d,m,y,E,_,A,R,C,O=!1)=>{const I=d&&d.children,B=d?d.shapeFlag:0,L=m.children,{patchFlag:V,shapeFlag:X}=m;if(V>0){if(V&128){ei(I,L,y,E,_,A,R,C,O);return}else if(V&256){ya(I,L,y,E,_,A,R,C,O);return}}X&8?(B&16&&zt(I,_,A),L!==I&&u(y,L)):B&16?X&16?ei(I,L,y,E,_,A,R,C,O):zt(I,_,A,!0):(B&8&&u(y,""),X&16&&Z(L,y,E,_,A,R,C,O))},ya=(d,m,y,E,_,A,R,C,O)=>{d=d||wr,m=m||wr;const I=d.length,B=m.length,L=Math.min(I,B);let V;for(V=0;V<L;V++){const X=m[V]=O?dn(m[V]):Rt(m[V]);b(d[V],X,y,null,_,A,R,C,O)}I>B?zt(d,_,A,!0,!1,L):Z(m,y,E,_,A,R,C,O,L)},ei=(d,m,y,E,_,A,R,C,O)=>{let I=0;const B=m.length;let L=d.length-1,V=B-1;for(;I<=L&&I<=V;){const X=d[I],ae=m[I]=O?dn(m[I]):Rt(m[I]);if(Fn(X,ae))b(X,ae,y,null,_,A,R,C,O);else break;I++}for(;I<=L&&I<=V;){const X=d[L],ae=m[V]=O?dn(m[V]):Rt(m[V]);if(Fn(X,ae))b(X,ae,y,null,_,A,R,C,O);else break;L--,V--}if(I>L){if(I<=V){const X=V+1,ae=X<B?m[X].el:E;for(;I<=V;)b(null,m[I]=O?dn(m[I]):Rt(m[I]),y,ae,_,A,R,C,O),I++}}else if(I>V)for(;I<=L;)on(d[I],_,A,!0),I++;else{const X=I,ae=I,pe=new Map;for(I=ae;I<=V;I++){const ut=m[I]=O?dn(m[I]):Rt(m[I]);ut.key!=null&&pe.set(ut.key,I)}let me,_e=0;const _t=V-ae+1;let fr=!1,qu=0;const ti=new Array(_t);for(I=0;I<_t;I++)ti[I]=0;for(I=X;I<=L;I++){const ut=d[I];if(_e>=_t){on(ut,_,A,!0);continue}let xt;if(ut.key!=null)xt=pe.get(ut.key);else for(me=ae;me<=V;me++)if(ti[me-ae]===0&&Fn(ut,m[me])){xt=me;break}xt===void 0?on(ut,_,A,!0):(ti[xt-ae]=I+1,xt>=qu?qu=xt:fr=!0,b(ut,m[xt],y,null,_,A,R,C,O),_e++)}const Ku=fr?Cb(ti):wr;for(me=Ku.length-1,I=_t-1;I>=0;I--){const ut=ae+I,xt=m[ut],Wu=ut+1<B?m[ut+1].el:E;ti[I]===0?b(null,xt,y,Wu,_,A,R,C,O):fr&&(me<0||I!==Ku[me]?ur(xt,y,Wu,2):me--)}}},ur=(d,m,y,E,_=null)=>{const{el:A,type:R,transition:C,children:O,shapeFlag:I}=d;if(I&6){ur(d.component.subTree,m,y,E);return}if(I&128){d.suspense.move(m,y,E);return}if(I&64){R.move(d,m,y,hr);return}if(R===Je){r(A,m,y);for(let L=0;L<O.length;L++)ur(O[L],m,y,E);r(d.anchor,m,y);return}if(R===Ds){k(d,m,y);return}if(E!==2&&I&1&&C)if(E===0)C.beforeEnter(A),r(A,m,y),it(()=>C.enter(A),_);else{const{leave:L,delayLeave:V,afterLeave:X}=C,ae=()=>r(A,m,y),pe=()=>{L(A,()=>{ae(),X&&X()})};V?V(A,ae,pe):pe()}else r(A,m,y)},on=(d,m,y,E=!1,_=!1)=>{const{type:A,props:R,ref:C,children:O,dynamicChildren:I,shapeFlag:B,patchFlag:L,dirs:V}=d;if(C!=null&&dl(C,null,y,d,!0),B&256){m.ctx.deactivate(d);return}const X=B&1&&V,ae=!Rs(d);let pe;if(ae&&(pe=R&&R.onVnodeBeforeUnmount)&&Ot(pe,m,d),B&6)Hv(d.component,y,E);else{if(B&128){d.suspense.unmount(y,E);return}X&&Nn(d,null,m,"beforeUnmount"),B&64?d.type.remove(d,m,y,_,hr,E):I&&(A!==Je||L>0&&L&64)?zt(I,m,y,!1,!0):(A===Je&&L&384||!_&&B&16)&&zt(O,m,y),E&&zu(d)}(ae&&(pe=R&&R.onVnodeUnmounted)||X)&&it(()=>{pe&&Ot(pe,m,d),X&&Nn(d,null,m,"unmounted")},y)},zu=d=>{const{type:m,el:y,anchor:E,transition:_}=d;if(m===Je){zv(y,E);return}if(m===Ds){z(d);return}const A=()=>{i(y),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:C}=_,O=()=>R(y,A);C?C(d.el,A,O):O()}else A()},zv=(d,m)=>{let y;for(;d!==m;)y=f(d),i(d),d=y;i(m)},Hv=(d,m,y)=>{const{bum:E,scope:_,update:A,subTree:R,um:C}=d;E&&Ea(E),_.stop(),A&&(A.active=!1,on(R,d,m,y)),C&&it(C,m),it(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},zt=(d,m,y,E=!1,_=!1,A=0)=>{for(let R=A;R<d.length;R++)on(d[R],m,y,E,_)},ds=d=>d.shapeFlag&6?ds(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),Hu=(d,m,y)=>{d==null?m._vnode&&on(m._vnode,null,null,!0):b(m._vnode||null,d,m,null,null,null,y),Zd(),m._vnode=d},hr={p:b,um:on,m:ur,r:zu,mt:cr,mc:Z,pc:jt,pbc:Be,n:ds,o:t};let ba,_a;return e&&([ba,_a]=e(hr)),{render:Hu,hydrate:ba,createApp:Ib(Hu,ba)}}function Rn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function wp(t,e,n=!1){const r=t.children,i=e.children;if(Y(r)&&Y(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=dn(i[s]),a.el=o.el),n||wp(o,a))}}function Cb(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Ab=t=>t.__isTeleport,Je=Symbol(void 0),Sc=Symbol(void 0),Ct=Symbol(void 0),Ds=Symbol(void 0),mi=[];let Tt=null;function ve(t=!1){mi.push(Tt=t?null:[])}function xb(){mi.pop(),Tt=mi[mi.length-1]||null}let xi=1;function dh(t){xi+=t}function Ep(t){return t.dynamicChildren=xi>0?Tt||wr:null,xb(),xi>0&&Tt&&Tt.push(t),t}function Ce(t,e,n,r,i,s){return Ep(H(t,e,n,r,i,s,!0))}function gi(t,e,n,r,i){return Ep(ce(t,e,n,r,i,!0))}function pl(t){return t?t.__v_isVNode===!0:!1}function Fn(t,e){return t.type===e.type&&t.key===e.key}const Po="__vInternal",Tp=({key:t})=>t!=null?t:null,Ps=({ref:t,ref_key:e,ref_for:n})=>t!=null?Le(t)||tt(t)||ee(t)?{i:yt,r:t,k:e,f:!!n}:t:null;function H(t,e=null,n=null,r=0,i=null,s=t===Je?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tp(e),ref:e&&Ps(e),scopeId:No,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Cc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Le(n)?8:16),xi>0&&!o&&Tt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Tt.push(l),l}const ce=Ob;function Ob(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===ub)&&(t=Ct),pl(t)){const a=En(t,e,!0);return n&&Cc(a,n),xi>0&&!s&&Tt&&(a.shapeFlag&6?Tt[Tt.indexOf(t)]=a:Tt.push(a)),a.patchFlag|=-2,a}if(zb(t)&&(t=t.__vccOpts),e){e=Nb(e);let{class:a,style:l}=e;a&&!Le(a)&&(e.class=Br(a)),Ne(l)&&(Kd(l)&&!Y(l)&&(l=Ke({},l)),e.style=Qn(l))}const o=Le(t)?1:Gy(t)?128:Ab(t)?64:Ne(t)?4:ee(t)?2:0;return H(t,e,n,r,i,o,s,!0)}function Nb(t){return t?Kd(t)||Po in t?Ke({},t):t:null}function En(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Db(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Tp(a),ref:e&&e.ref?n&&i?Y(i)?i.concat(Ps(e)):[i,Ps(e)]:Ps(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&En(t.ssContent),ssFallback:t.ssFallback&&En(t.ssFallback),el:t.el,anchor:t.anchor}}function kc(t=" ",e=0){return ce(Sc,null,t,e)}function Rb(t,e){const n=ce(Ds,null,t);return n.staticCount=e,n}function ph(t="",e=!1){return e?(ve(),gi(Ct,null,t)):ce(Ct,null,t)}function Rt(t){return t==null||typeof t=="boolean"?ce(Ct):Y(t)?ce(Je,null,t.slice()):typeof t=="object"?dn(t):ce(Sc,null,String(t))}function dn(t){return t.el===null||t.memo?t:En(t)}function Cc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Cc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Po in e)?e._ctx=yt:i===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),r&64?(n=16,e=[kc(e)]):n=8);t.children=e,t.shapeFlag|=n}function Db(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Br([e.class,r.class]));else if(i==="style")e.style=Qn([e.style,r.style]);else if(To(i)){const s=e[i],o=r[i];o&&s!==o&&!(Y(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Ot(t,e,n,r=null){bt(t,e,7,[n,r])}const Pb=_p();let Mb=0;function Lb(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Pb,s={uid:Mb++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new ry(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gp(r,i),emitsOptions:tp(r,i),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:r.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=zy.bind(null,s),t.ce&&t.ce(s),s}let Me=null;const Fb=()=>Me||yt,Nr=t=>{Me=t,t.scope.on()},qn=()=>{Me&&Me.scope.off(),Me=null};function Ip(t){return t.vnode.shapeFlag&4}let Oi=!1;function Ub(t,e=!1){Oi=e;const{props:n,children:r}=t.vnode,i=Ip(t);yb(t,n,i,e),wb(t,r);const s=i?$b(t,e):void 0;return Oi=!1,s}function $b(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Wd(new Proxy(t.ctx,fb));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Vb(t):null;Nr(t),jr();const s=bn(r,t,0,[t.props,i]);if(zr(),qn(),Nd(s)){if(s.then(qn,qn),e)return s.then(o=>{mh(t,o,e)}).catch(o=>{Ao(o,t,0)});t.asyncDep=s}else mh(t,s,e)}else Sp(t,e)}function mh(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=Gd(e)),Sp(t,n)}let gh;function Sp(t,e,n){const r=t.type;if(!t.render){if(!e&&gh&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Ke(Ke({isCustomElement:s,delimiters:a},o),l);r.render=gh(i,c)}}t.render=r.render||kt}Nr(t),jr(),db(t),zr(),qn()}function Bb(t){return new Proxy(t.attrs,{get(e,n){return ft(t,"get","$attrs"),e[n]}})}function Vb(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Bb(t))},slots:t.slots,emit:t.emit,expose:e}}function Mo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Gd(Wd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ys)return Ys[n](t)}}))}function jb(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function zb(t){return ee(t)&&"__vccOpts"in t}const vt=(t,e)=>Ly(t,e,Oi);function Ir(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!Y(e)?pl(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&pl(n)&&(n=[n]),ce(t,e,n))}const Hb="3.2.37",qb="http://www.w3.org/2000/svg",Un=typeof document<"u"?document:null,vh=Un&&Un.createElement("template"),Kb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Un.createElementNS(qb,t):Un.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Un.createTextNode(t),createComment:t=>Un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{vh.innerHTML=r?`<svg>${t}</svg>`:t;const a=vh.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Wb(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Gb(t,e,n){const r=t.style,i=Le(n);if(n&&!i){for(const s in n)ml(r,s,n[s]);if(e&&!Le(e))for(const s in e)n[s]==null&&ml(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const yh=/\s*!important$/;function ml(t,e,n){if(Y(n))n.forEach(r=>ml(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Yb(t,e);yh.test(n)?t.setProperty(Vr(r),n.replace(yh,""),"important"):t[r]=n}}const bh=["Webkit","Moz","ms"],ka={};function Yb(t,e){const n=ka[e];if(n)return n;let r=Ut(e);if(r!=="filter"&&r in t)return ka[e]=r;r=ko(r);for(let i=0;i<bh.length;i++){const s=bh[i]+r;if(s in t)return ka[e]=s}return e}const _h="http://www.w3.org/1999/xlink";function Xb(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_h,e.slice(6,e.length)):t.setAttributeNS(_h,e,n);else{const s=Kv(e);n==null||s&&!Ad(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Qb(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ad(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[kp,Jb]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let gl=0;const Zb=Promise.resolve(),e0=()=>{gl=0},t0=()=>gl||(Zb.then(e0),gl=kp());function n0(t,e,n,r){t.addEventListener(e,n,r)}function r0(t,e,n,r){t.removeEventListener(e,n,r)}function i0(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=s0(e);if(r){const c=s[e]=o0(r,i);n0(t,a,c,l)}else o&&(r0(t,a,o,l),s[e]=void 0)}}const wh=/(?:Once|Passive|Capture)$/;function s0(t){let e;if(wh.test(t)){e={};let n;for(;n=t.match(wh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Vr(t.slice(2)),e]}function o0(t,e){const n=r=>{const i=r.timeStamp||kp();(Jb||i>=n.attached-1)&&bt(a0(r,n.value),e,5,[r])};return n.value=t,n.attached=t0(),n}function a0(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Eh=/^on[a-z]/,l0=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?Wb(t,r,i):e==="style"?Gb(t,n,r):To(e)?ac(e)||i0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):c0(t,e,r,i))?Qb(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Xb(t,e,r,i))};function c0(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Eh.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Eh.test(e)&&Le(n)?!1:e in t}const ln="transition",ni="animation",Ac=(t,{slots:e})=>Ir(sp,u0(t),e);Ac.displayName="Transition";const Cp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ac.props=Ke({},sp.props,Cp);const Dn=(t,e=[])=>{Y(t)?t.forEach(n=>n(...e)):t&&t(...e)},Th=t=>t?Y(t)?t.some(e=>e.length>1):t.length>1:!1;function u0(t){const e={};for(const U in t)U in Cp||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,v=h0(i),w=v&&v[0],b=v&&v[1],{onBeforeEnter:g,onEnter:T,onEnterCancelled:x,onLeave:k,onLeaveCancelled:z,onBeforeAppear:M=g,onAppear:ie=T,onAppearCancelled:F=x}=e,Z=(U,Te,mt)=>{Pn(U,Te?u:a),Pn(U,Te?c:o),mt&&mt()},ye=(U,Te)=>{U._isLeaving=!1,Pn(U,h),Pn(U,p),Pn(U,f),Te&&Te()},Be=U=>(Te,mt)=>{const cr=U?ie:T,Ve=()=>Z(Te,U,mt);Dn(cr,[Te,Ve]),Ih(()=>{Pn(Te,U?l:s),cn(Te,U?u:a),Th(cr)||Sh(Te,r,w,Ve)})};return Ke(e,{onBeforeEnter(U){Dn(g,[U]),cn(U,s),cn(U,o)},onBeforeAppear(U){Dn(M,[U]),cn(U,l),cn(U,c)},onEnter:Be(!1),onAppear:Be(!0),onLeave(U,Te){U._isLeaving=!0;const mt=()=>ye(U,Te);cn(U,h),p0(),cn(U,f),Ih(()=>{!U._isLeaving||(Pn(U,h),cn(U,p),Th(k)||Sh(U,r,b,mt))}),Dn(k,[U,mt])},onEnterCancelled(U){Z(U,!1),Dn(x,[U])},onAppearCancelled(U){Z(U,!0),Dn(F,[U])},onLeaveCancelled(U){ye(U),Dn(z,[U])}})}function h0(t){if(t==null)return null;if(Ne(t))return[Ca(t.enter),Ca(t.leave)];{const e=Ca(t);return[e,e]}}function Ca(t){return Pd(t)}function cn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Pn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Ih(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let f0=0;function Sh(t,e,n,r){const i=t._endId=++f0,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=d0(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),s()},f=p=>{p.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function d0(t,e){const n=window.getComputedStyle(t),r=v=>(n[v]||"").split(", "),i=r(ln+"Delay"),s=r(ln+"Duration"),o=kh(i,s),a=r(ni+"Delay"),l=r(ni+"Duration"),c=kh(a,l);let u=null,h=0,f=0;e===ln?o>0&&(u=ln,h=o,f=s.length):e===ni?c>0&&(u=ni,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?ln:ni:null,f=u?u===ln?s.length:l.length:0);const p=u===ln&&/\b(transform|all)(,|$)/.test(n[ln+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:p}}function kh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ch(n)+Ch(t[r])))}function Ch(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function p0(){return document.body.offsetHeight}const Ah={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ri(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ri(t,!0),r.enter(t)):r.leave(t,()=>{ri(t,!1)}):ri(t,e))},beforeUnmount(t,{value:e}){ri(t,e)}};function ri(t,e){t.style.display=e?t._vod:"none"}const m0=Ke({patchProp:l0},Kb);let xh;function g0(){return xh||(xh=Sb(m0))}const v0=(...t)=>{const e=g0().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=y0(r);if(!i)return;const s=e._component;!ee(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function y0(t){return Le(t)?document.querySelector(t):t}/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Oh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Oh(Object(n),!0).forEach(function(r){w0(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Oh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Qs(t){return Qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qs(t)}function b0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Nh(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _0(t,e,n){return e&&Nh(t.prototype,e),n&&Nh(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function w0(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xc(t,e){return T0(t)||S0(t,e)||Ap(t,e)||C0()}function Lo(t){return E0(t)||I0(t)||Ap(t)||k0()}function E0(t){if(Array.isArray(t))return vl(t)}function T0(t){if(Array.isArray(t))return t}function I0(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function S0(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function Ap(t,e){if(!!t){if(typeof t=="string")return vl(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vl(t,e)}}function vl(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function k0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Rh=function(){},Oc={},xp={},Op=null,Np={mark:Rh,measure:Rh};try{typeof window<"u"&&(Oc=window),typeof document<"u"&&(xp=document),typeof MutationObserver<"u"&&(Op=MutationObserver),typeof performance<"u"&&(Np=performance)}catch{}var A0=Oc.navigator||{},Dh=A0.userAgent,Ph=Dh===void 0?"":Dh,Tn=Oc,we=xp,Mh=Op,bs=Np;Tn.document;var sn=!!we.documentElement&&!!we.head&&typeof we.addEventListener=="function"&&typeof we.createElement=="function",Rp=~Ph.indexOf("MSIE")||~Ph.indexOf("Trident/"),Yt="___FONT_AWESOME___",yl=16,Dp="fa",Pp="svg-inline--fa",Jn="data-fa-i2svg",bl="data-fa-pseudo-element",x0="data-fa-pseudo-element-pending",Nc="data-prefix",Rc="data-icon",Lh="fontawesome-i2svg",O0="async",N0=["HTML","HEAD","STYLE","SCRIPT"],Mp=function(){try{return!0}catch{return!1}}(),Dc={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Js={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Lp={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},R0={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},D0=/fa[srltdbk]?[\-\ ]/,Fp="fa-layers-text",P0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,M0={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Up=[1,2,3,4,5,6,7,8,9,10],L0=Up.concat([11,12,13,14,15,16,17,18,19,20]),F0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Bn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},U0=[].concat(Lo(Object.keys(Js)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Bn.GROUP,Bn.SWAP_OPACITY,Bn.PRIMARY,Bn.SECONDARY]).concat(Up.map(function(t){return"".concat(t,"x")})).concat(L0.map(function(t){return"w-".concat(t)})),$p=Tn.FontAwesomeConfig||{};function $0(t){var e=we.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function B0(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(we&&typeof we.querySelector=="function"){var V0=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];V0.forEach(function(t){var e=xc(t,2),n=e[0],r=e[1],i=B0($0(n));i!=null&&($p[r]=i)})}var j0={familyPrefix:Dp,styleDefault:"solid",replacementClass:Pp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},vi=D(D({},j0),$p);vi.autoReplaceSvg||(vi.observeMutations=!1);var j={};Object.keys(vi).forEach(function(t){Object.defineProperty(j,t,{enumerable:!0,set:function(n){vi[t]=n,Ms.forEach(function(r){return r(j)})},get:function(){return vi[t]}})});Tn.FontAwesomeConfig=j;var Ms=[];function z0(t){return Ms.push(t),function(){Ms.splice(Ms.indexOf(t),1)}}var un=yl,Pt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function H0(t){if(!(!t||!sn)){var e=we.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=we.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return we.head.insertBefore(e,r),t}}var q0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ni(){for(var t=12,e="";t-- >0;)e+=q0[Math.random()*62|0];return e}function Hr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Pc(t){return t.classList?Hr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Bp(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function K0(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Bp(t[n]),'" ')},"").trim()}function Fo(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Mc(t){return t.size!==Pt.size||t.x!==Pt.x||t.y!==Pt.y||t.rotate!==Pt.rotate||t.flipX||t.flipY}function W0(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function G0(t){var e=t.transform,n=t.width,r=n===void 0?yl:n,i=t.height,s=i===void 0?yl:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&Rp?l+="translate(".concat(e.x/un-r/2,"em, ").concat(e.y/un-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/un,"em), calc(-50% + ").concat(e.y/un,"em)) "):l+="translate(".concat(e.x/un,"em, ").concat(e.y/un,"em) "),l+="scale(".concat(e.size/un*(e.flipX?-1:1),", ").concat(e.size/un*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Y0=`:root, :host {
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
}`;function Vp(){var t=Dp,e=Pp,n=j.familyPrefix,r=j.replacementClass,i=Y0;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Fh=!1;function Aa(){j.autoAddCss&&!Fh&&(H0(Vp()),Fh=!0)}var X0={mixout:function(){return{dom:{css:Vp,insertCss:Aa}}},hooks:function(){return{beforeDOMElementCreation:function(){Aa()},beforeI2svg:function(){Aa()}}}},Xt=Tn||{};Xt[Yt]||(Xt[Yt]={});Xt[Yt].styles||(Xt[Yt].styles={});Xt[Yt].hooks||(Xt[Yt].hooks={});Xt[Yt].shims||(Xt[Yt].shims=[]);var It=Xt[Yt],jp=[],Q0=function t(){we.removeEventListener("DOMContentLoaded",t),Zs=1,jp.map(function(e){return e()})},Zs=!1;sn&&(Zs=(we.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(we.readyState),Zs||we.addEventListener("DOMContentLoaded",Q0));function J0(t){!sn||(Zs?setTimeout(t,0):jp.push(t))}function Wi(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Bp(t):"<".concat(e," ").concat(K0(r),">").concat(s.map(Wi).join(""),"</").concat(e,">")}function Uh(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Z0=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},xa=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?Z0(n,i):n,l,c,u;for(r===void 0?(l=1,u=e[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function e_(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function _l(t){var e=e_(t);return e.length===1?e[0].toString(16):null}function t_(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function $h(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function wl(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=$h(e);typeof It.hooks.addPack=="function"&&!i?It.hooks.addPack(t,$h(e)):It.styles[t]=D(D({},It.styles[t]||{}),s),t==="fas"&&wl("fa",e)}var yi=It.styles,n_=It.shims,r_=Object.values(Lp),Lc=null,zp={},Hp={},qp={},Kp={},Wp={},i_=Object.keys(Dc);function s_(t){return~U0.indexOf(t)}function o_(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!s_(i)?i:null}var Gp=function(){var e=function(s){return xa(yi,function(o,a,l){return o[l]=xa(a,s,{}),o},{})};zp=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Hp=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),Wp=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in yi||j.autoFetchSvg,r=xa(n_,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});qp=r.names,Kp=r.unicodes,Lc=Uo(j.styleDefault)};z0(function(t){Lc=Uo(t.styleDefault)});Gp();function Fc(t,e){return(zp[t]||{})[e]}function a_(t,e){return(Hp[t]||{})[e]}function gr(t,e){return(Wp[t]||{})[e]}function Yp(t){return qp[t]||{prefix:null,iconName:null}}function l_(t){var e=Kp[t],n=Fc("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function In(){return Lc}var Uc=function(){return{prefix:null,iconName:null,rest:[]}};function Uo(t){var e=Dc[t],n=Js[t]||Js[e],r=t in It.styles?t:null;return n||r||null}function $o(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,s=t.reduce(function(o,a){var l=o_(j.familyPrefix,a);if(yi[a]?(a=r_.includes(a)?R0[a]:a,i=a,o.prefix=a):i_.indexOf(a)>-1?(i=a,o.prefix=Uo(a)):l?o.iconName=l:a!==j.replacementClass&&o.rest.push(a),!r&&o.prefix&&o.iconName){var c=i==="fa"?Yp(o.iconName):{},u=gr(o.prefix,o.iconName);c.prefix&&(i=null),o.iconName=c.iconName||u||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!yi.far&&yi.fas&&!j.autoFetchSvg&&(o.prefix="fas")}return o},Uc());return(s.prefix==="fa"||i==="fa")&&(s.prefix=In()||"fas"),s}var c_=function(){function t(){b0(this,t),this.definitions={}}return _0(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),o[a]),wl(a,o[a]);var l=Lp[a];l&&wl(l,o[a]),Gp()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),Bh=[],vr={},Sr={},u_=Object.keys(Sr);function h_(t,e){var n=e.mixoutsTo;return Bh=t,vr={},Object.keys(Sr).forEach(function(r){u_.indexOf(r)===-1&&delete Sr[r]}),Bh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Qs(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){vr[o]||(vr[o]=[]),vr[o].push(s[o])})}r.provides&&r.provides(Sr)}),n}function El(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=vr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Zn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=vr[t]||[];i.forEach(function(s){s.apply(null,n)})}function Qt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Sr[t]?Sr[t].apply(null,e):void 0}function Tl(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||In();if(!!e)return e=gr(n,e)||e,Uh(Xp.definitions,n,e)||Uh(It.styles,n,e)}var Xp=new c_,f_=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,Zn("noAuto")},d_={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return sn?(Zn("beforeI2svg",e),Qt("pseudoElements2svg",e),Qt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,J0(function(){m_({autoReplaceSvgRoot:n}),Zn("watch",e)})}},p_={icon:function(e){if(e===null)return null;if(Qs(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:gr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Uo(e[0]);return{prefix:r,iconName:gr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(j.familyPrefix,"-"))>-1||e.match(D0))){var i=$o(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||In(),iconName:gr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=In();return{prefix:s,iconName:gr(s,e)||e}}}},pt={noAuto:f_,config:j,dom:d_,parse:p_,library:Xp,findIconDefinition:Tl,toHtml:Wi},m_=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?we:n;(Object.keys(It.styles).length>0||j.autoFetchSvg)&&sn&&j.autoReplaceSvg&&pt.dom.i2svg({node:r})};function Bo(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Wi(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!sn){var r=we.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function g_(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Mc(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=Fo(D(D({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function v_(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(j.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:o}),children:r}]}]}function $c(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,p=f===void 0?!1:f,v=r.found?r:n,w=v.width,b=v.height,g=i==="fak",T=[j.replacementClass,s?"".concat(j.familyPrefix,"-").concat(s):""].filter(function(Z){return h.classes.indexOf(Z)===-1}).filter(function(Z){return Z!==""||!!Z}).concat(h.classes).join(" "),x={children:[],attributes:D(D({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:T,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(b)})},k=g&&!~h.classes.indexOf("fa-fw")?{width:"".concat(w/b*16*.0625,"em")}:{};p&&(x.attributes[Jn]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||Ni())},children:[l]}),delete x.attributes.title);var z=D(D({},x),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:D(D({},k),h.styles)}),M=r.found&&n.found?Qt("generateAbstractMask",z)||{children:[],attributes:{}}:Qt("generateAbstractIcon",z)||{children:[],attributes:{}},ie=M.children,F=M.attributes;return z.children=ie,z.attributes=F,a?v_(z):g_(z)}function Vh(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=D(D(D({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[Jn]="");var u=D({},o.styles);Mc(i)&&(u.transform=G0({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=Fo(u);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function y_(t){var e=t.content,n=t.title,r=t.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Fo(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Oa=It.styles;function Il(t){var e=t[0],n=t[1],r=t.slice(4),i=xc(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(j.familyPrefix,"-").concat(Bn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(Bn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(Bn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var b_={found:!1,width:512,height:512};function __(t,e){!Mp&&!j.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Sl(t,e){var n=e;return e==="fa"&&j.styleDefault!==null&&(e=In()),new Promise(function(r,i){if(Qt("missingIconAbstract"),n==="fa"){var s=Yp(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Oa[e]&&Oa[e][t]){var o=Oa[e][t];return r(Il(o))}__(t,e),r(D(D({},b_),{},{icon:j.showMissingIcons&&t?Qt("missingIconAbstract")||{}:{}}))})}var jh=function(){},kl=j.measurePerformance&&bs&&bs.mark&&bs.measure?bs:{mark:jh,measure:jh},ui='FA "6.1.2"',w_=function(e){return kl.mark("".concat(ui," ").concat(e," begins")),function(){return Qp(e)}},Qp=function(e){kl.mark("".concat(ui," ").concat(e," ends")),kl.measure("".concat(ui," ").concat(e),"".concat(ui," ").concat(e," begins"),"".concat(ui," ").concat(e," ends"))},Bc={begin:w_,end:Qp},Ls=function(){};function zh(t){var e=t.getAttribute?t.getAttribute(Jn):null;return typeof e=="string"}function E_(t){var e=t.getAttribute?t.getAttribute(Nc):null,n=t.getAttribute?t.getAttribute(Rc):null;return e&&n}function T_(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(j.replacementClass)}function I_(){if(j.autoReplaceSvg===!0)return Fs.replace;var t=Fs[j.autoReplaceSvg];return t||Fs.replace}function S_(t){return we.createElementNS("http://www.w3.org/2000/svg",t)}function k_(t){return we.createElement(t)}function Jp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?S_:k_:n;if(typeof t=="string")return we.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(Jp(o,{ceFn:r}))}),i}function C_(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Fs={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Jp(i),n)}),n.getAttribute(Jn)===null&&j.keepOriginalSource){var r=we.createComment(C_(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Pc(n).indexOf(j.replacementClass))return Fs.replace(e);var i=new RegExp("".concat(j.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===j.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Wi(a)}).join(`
`);n.setAttribute(Jn,""),n.innerHTML=o}};function Hh(t){t()}function Zp(t,e){var n=typeof e=="function"?e:Ls;if(t.length===0)n();else{var r=Hh;j.mutateApproach===O0&&(r=Tn.requestAnimationFrame||Hh),r(function(){var i=I_(),s=Bc.begin("mutate");t.map(i),s(),n()})}}var Vc=!1;function em(){Vc=!0}function Cl(){Vc=!1}var eo=null;function qh(t){if(!!Mh&&!!j.observeMutations){var e=t.treeCallback,n=e===void 0?Ls:e,r=t.nodeCallback,i=r===void 0?Ls:r,s=t.pseudoElementsCallback,o=s===void 0?Ls:s,a=t.observeMutationsRoot,l=a===void 0?we:a;eo=new Mh(function(c){if(!Vc){var u=In();Hr(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!zh(h.addedNodes[0])&&(j.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&j.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&zh(h.target)&&~F0.indexOf(h.attributeName))if(h.attributeName==="class"&&E_(h.target)){var f=$o(Pc(h.target)),p=f.prefix,v=f.iconName;h.target.setAttribute(Nc,p||u),v&&h.target.setAttribute(Rc,v)}else T_(h.target)&&i(h.target)})}}),sn&&eo.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function A_(){!eo||eo.disconnect()}function x_(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function O_(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=$o(Pc(t));return i.prefix||(i.prefix=In()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=a_(i.prefix,t.innerText)||Fc(i.prefix,_l(t.innerText))),!i.iconName&&j.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function N_(t){var e=Hr(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return j.autoA11y&&(n?e["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(r||Ni()):(e["aria-hidden"]="true",e.focusable="false")),e}function R_(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Pt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Kh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=O_(t),r=n.iconName,i=n.prefix,s=n.rest,o=N_(t),a=El("parseNodeAttributes",{},t),l=e.styleParser?x_(t):[];return D({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Pt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var D_=It.styles;function tm(t){var e=j.autoReplaceSvg==="nest"?Kh(t,{styleParser:!1}):Kh(t);return~e.extra.classes.indexOf(Fp)?Qt("generateLayersText",t,e):Qt("generateSvgReplacementMutation",t,e)}function Wh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!sn)return Promise.resolve();var n=we.documentElement.classList,r=function(h){return n.add("".concat(Lh,"-").concat(h))},i=function(h){return n.remove("".concat(Lh,"-").concat(h))},s=j.autoFetchSvg?Object.keys(Dc):Object.keys(D_);s.includes("fa")||s.push("fa");var o=[".".concat(Fp,":not([").concat(Jn,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Jn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Hr(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Bc.begin("onTree"),c=a.reduce(function(u,h){try{var f=tm(h);f&&u.push(f)}catch(p){Mp||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(f){Zp(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(f){l(),h(f)})})}function P_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;tm(t).then(function(n){n&&Zp([n],e)})}function M_(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Tl(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Tl(i||{})),t(r,D(D({},n),{},{mask:i}))}}var L_=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Pt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,f=h===void 0?null:h,p=n.titleId,v=p===void 0?null:p,w=n.classes,b=w===void 0?[]:w,g=n.attributes,T=g===void 0?{}:g,x=n.styles,k=x===void 0?{}:x;if(!!e){var z=e.prefix,M=e.iconName,ie=e.icon;return Bo(D({type:"icon"},e),function(){return Zn("beforeDOMElementCreation",{iconDefinition:e,params:n}),j.autoA11y&&(f?T["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(v||Ni()):(T["aria-hidden"]="true",T.focusable="false")),$c({icons:{main:Il(ie),mask:l?Il(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:M,transform:D(D({},Pt),i),symbol:o,title:f,maskId:u,titleId:v,extra:{attributes:T,styles:k,classes:b}})})}},F_={mixout:function(){return{icon:M_(L_)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Wh,n.nodeCallback=P_,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?we:r,s=n.callback,o=s===void 0?function(){}:s;return Wh(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,h=r.maskId,f=r.extra;return new Promise(function(p,v){Promise.all([Sl(i,a),u.iconName?Sl(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var b=xc(w,2),g=b[0],T=b[1];p([n,$c({icons:{main:g,mask:T},prefix:a,iconName:i,transform:l,symbol:c,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Fo(a);l.length>0&&(i.style=l);var c;return Mc(o)&&(c=Qt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},U_={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Bo({type:"layer"},function(){Zn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(j.familyPrefix,"-layers")].concat(Lo(s)).join(" ")},children:o}]})}}}},$_={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,h=u===void 0?{}:u;return Bo({type:"counter",content:n},function(){return Zn("beforeDOMElementCreation",{content:n,params:r}),y_({content:n.toString(),title:s,extra:{attributes:c,styles:h,classes:["".concat(j.familyPrefix,"-layers-counter")].concat(Lo(a))}})})}}}},B_={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Pt:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,h=u===void 0?{}:u,f=r.styles,p=f===void 0?{}:f;return Bo({type:"text",content:n},function(){return Zn("beforeDOMElementCreation",{content:n,params:r}),Vh({content:n,transform:D(D({},Pt),s),title:a,extra:{attributes:h,styles:p,classes:["".concat(j.familyPrefix,"-layers-text")].concat(Lo(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(Rp){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return j.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Vh({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},V_=new RegExp('"',"ug"),Gh=[1105920,1112319];function j_(t){var e=t.replace(V_,""),n=t_(e,0),r=n>=Gh[0]&&n<=Gh[1],i=e.length===2?e[0]===e[1]:!1;return{value:_l(i?e[0]:e),isSecondary:r||i}}function Yh(t,e){var n="".concat(x0).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Hr(t.children),o=s.filter(function(M){return M.getAttribute(bl)===e})[0],a=Tn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(P0),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Js[l[2].toLowerCase()]:M0[c],p=j_(h),v=p.value,w=p.isSecondary,b=l[0].startsWith("FontAwesome"),g=Fc(f,v),T=g;if(b){var x=l_(v);x.iconName&&x.prefix&&(g=x.iconName,f=x.prefix)}if(g&&!w&&(!o||o.getAttribute(Nc)!==f||o.getAttribute(Rc)!==T)){t.setAttribute(n,T),o&&t.removeChild(o);var k=R_(),z=k.extra;z.attributes[bl]=e,Sl(g,f).then(function(M){var ie=$c(D(D({},k),{},{icons:{main:M,mask:Uc()},prefix:f,iconName:T,extra:z,watchable:!0})),F=we.createElement("svg");e==="::before"?t.insertBefore(F,t.firstChild):t.appendChild(F),F.outerHTML=ie.map(function(Z){return Wi(Z)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function z_(t){return Promise.all([Yh(t,"::before"),Yh(t,"::after")])}function H_(t){return t.parentNode!==document.head&&!~N0.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(bl)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Xh(t){if(!!sn)return new Promise(function(e,n){var r=Hr(t.querySelectorAll("*")).filter(H_).map(z_),i=Bc.begin("searchPseudoElements");em(),Promise.all(r).then(function(){i(),Cl(),e()}).catch(function(){i(),Cl(),n()})})}var q_={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Xh,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?we:r;j.searchPseudoElements&&Xh(i)}}},Qh=!1,K_={mixout:function(){return{dom:{unwatch:function(){em(),Qh=!0}}}},hooks:function(){return{bootstrap:function(){qh(El("mutationObserverCallbacks",{}))},noAuto:function(){A_()},watch:function(n){var r=n.observeMutationsRoot;Qh?Cl():qh(El("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Jh=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},W_={mixout:function(){return{parse:{transform:function(n){return Jh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Jh(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:h,path:f};return{tag:"g",attributes:D({},p.outer),children:[{tag:"g",attributes:D({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),p.path)}]}]}}}},Na={x:0,y:0,width:"100%",height:"100%"};function Zh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function G_(t){return t.tag==="g"?t.children:[t]}var Y_={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?$o(i.split(" ").map(function(o){return o.trim()})):Uc();return s.prefix||(s.prefix=In()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,h=o.width,f=o.icon,p=W0({transform:l,containerWidth:h,iconWidth:c}),v={tag:"rect",attributes:D(D({},Na),{},{fill:"white"})},w=u.children?{children:u.children.map(Zh)}:{},b={tag:"g",attributes:D({},p.inner),children:[Zh(D({tag:u.tag,attributes:D(D({},u.attributes),p.path)},w))]},g={tag:"g",attributes:D({},p.outer),children:[b]},T="mask-".concat(a||Ni()),x="clip-".concat(a||Ni()),k={tag:"mask",attributes:D(D({},Na),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,g]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:G_(f)},k]};return r.push(z,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(T,")")},Na)}),{children:r,attributes:i}}}},X_={provides:function(e){var n=!1;Tn.matchMedia&&(n=Tn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=D(D({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Q_={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},J_=[X0,F_,U_,$_,B_,q_,K_,W_,Y_,X_,Q_];h_(J_,{mixoutsTo:pt});pt.noAuto;var nm=pt.config,Z_=pt.library;pt.dom;var to=pt.parse;pt.findIconDefinition;pt.toHtml;var ew=pt.icon;pt.layer;var tw=pt.text;pt.counter;function ef(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Et(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ef(Object(n),!0).forEach(function(r){rt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ef(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function no(t){return no=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},no(t)}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function nw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rw(t,e){if(t==null)return{};var n=nw(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Al(t){return iw(t)||sw(t)||ow(t)||aw()}function iw(t){if(Array.isArray(t))return xl(t)}function sw(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ow(t,e){if(!!t){if(typeof t=="string")return xl(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xl(t,e)}}function xl(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function aw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var lw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},rm={exports:{}};(function(t){(function(e){var n=function(g,T,x){if(!c(T)||h(T)||f(T)||p(T)||l(T))return T;var k,z=0,M=0;if(u(T))for(k=[],M=T.length;z<M;z++)k.push(n(g,T[z],x));else{k={};for(var ie in T)Object.prototype.hasOwnProperty.call(T,ie)&&(k[g(ie,x)]=n(g,T[ie],x))}return k},r=function(g,T){T=T||{};var x=T.separator||"_",k=T.split||/(?=[A-Z])/;return g.split(k).join(x)},i=function(g){return v(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(T,x){return x?x.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},s=function(g){var T=i(g);return T.substr(0,1).toUpperCase()+T.substr(1)},o=function(g,T){return r(g,T).toLowerCase()},a=Object.prototype.toString,l=function(g){return typeof g=="function"},c=function(g){return g===Object(g)},u=function(g){return a.call(g)=="[object Array]"},h=function(g){return a.call(g)=="[object Date]"},f=function(g){return a.call(g)=="[object RegExp]"},p=function(g){return a.call(g)=="[object Boolean]"},v=function(g){return g=g-0,g===g},w=function(g,T){var x=T&&"process"in T?T.process:T;return typeof x!="function"?g:function(k,z){return x(k,g,z)}},b={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(g,T){return n(w(i,T),g)},decamelizeKeys:function(g,T){return n(w(o,T),g,T)},pascalizeKeys:function(g,T){return n(w(s,T),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})(lw)})(rm);var cw=rm.exports,uw=["class","style"];function hw(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=cw.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function fw(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function jc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return jc(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=fw(u);break;case"style":l.style=hw(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=rw(n,uw);return Ir(t.tag,Et(Et(Et({},e),{},{class:i.class,style:Et(Et({},i.style),o)},i.attrs),a),r)}var im=!1;try{im=!0}catch{}function dw(){if(!im&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function bi(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?rt({},t,e):{}}function pw(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},rt(e,"fa-".concat(t.size),t.size!==null),rt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),rt(e,"fa-pull-".concat(t.pull),t.pull!==null),rt(e,"fa-swap-opacity",t.swapOpacity),rt(e,"fa-bounce",t.bounce),rt(e,"fa-shake",t.shake),rt(e,"fa-beat",t.beat),rt(e,"fa-fade",t.fade),rt(e,"fa-beat-fade",t.beatFade),rt(e,"fa-flash",t.flash),rt(e,"fa-spin-pulse",t.spinPulse),rt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function tf(t){if(t&&no(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(to.icon)return to.icon(t);if(t===null)return null;if(no(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var mw=Tc({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=vt(function(){return tf(e.icon)}),s=vt(function(){return bi("classes",pw(e))}),o=vt(function(){return bi("transform",typeof e.transform=="string"?to.transform(e.transform):e.transform)}),a=vt(function(){return bi("mask",tf(e.mask))}),l=vt(function(){return ew(i.value,Et(Et(Et(Et({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Ns(l,function(u){if(!u)return dw("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=vt(function(){return l.value?jc(l.value.abstract[0],{},r):null});return function(){return c.value}}});Tc({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=nm.familyPrefix,s=vt(function(){return["".concat(i,"-layers")].concat(Al(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return Ir("div",{class:s.value},r.default?r.default():[])}}});Tc({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=nm.familyPrefix,s=vt(function(){return bi("classes",[].concat(Al(e.counter?["".concat(i,"-layers-counter")]:[]),Al(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=vt(function(){return bi("transform",typeof e.transform=="string"?to.transform(e.transform):e.transform)}),a=vt(function(){var c=tw(e.value.toString(),Et(Et({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=vt(function(){return jc(a.value,{},r)});return function(){return l.value}}});/**
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
 */const sm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},om={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const v=c<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},vw=function(t){const e=sm(t);return om.encodeByteArray(e,!0)},am=function(t){return vw(t).replace(/\./g,"")},yw=function(t){try{return om.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function cm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function um(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _w(){return Fe().indexOf("Electron/")>=0}function hm(){const t=Fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ww(){return Fe().indexOf("MSAppHost/")>=0}function Ew(){return typeof indexedDB=="object"}function Tw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Iw="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Iw,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gi.prototype.create)}}class Gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Sw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bt(i,a,r)}}function Sw(t,e){return t.replace(kw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const kw=/\{\$([^}]+)}/g;function Cw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ri(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(nf(s)&&nf(o)){if(!Ri(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function nf(t){return t!==null&&typeof t=="object"}/**
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
 */function Yi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Aw(t,e){const n=new xw(t,e);return n.subscribe.bind(n)}class xw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ow(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ra),i.error===void 0&&(i.error=Ra),i.complete===void 0&&(i.complete=Ra);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ow(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ra(){}/**
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
 */function qr(t){return t&&t._delegate?t._delegate:t}class Sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ln="[DEFAULT]";/**
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
 */class Nw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dw(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rw(t){return t===Ln?void 0:t}function Dw(t){return t.instantiationMode==="EAGER"}/**
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
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const Mw={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Lw=he.INFO,Fw={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Uw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Fw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zc{constructor(e){this.name=e,this._logLevel=Lw,this._logHandler=Uw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const $w=(t,e)=>e.some(n=>t instanceof n);let rf,sf;function Bw(){return rf||(rf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vw(){return sf||(sf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fm=new WeakMap,Ol=new WeakMap,dm=new WeakMap,Da=new WeakMap,Hc=new WeakMap;function jw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_n(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fm.set(n,t)}).catch(()=>{}),Hc.set(e,t),e}function zw(t){if(Ol.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ol.set(t,e)}let Nl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ol.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hw(t){Nl=t(Nl)}function qw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pa(this),e,...n);return dm.set(r,e.sort?e.sort():[e]),_n(r)}:Vw().includes(t)?function(...e){return t.apply(Pa(this),e),_n(fm.get(this))}:function(...e){return _n(t.apply(Pa(this),e))}}function Kw(t){return typeof t=="function"?qw(t):(t instanceof IDBTransaction&&zw(t),$w(t,Bw())?new Proxy(t,Nl):t)}function _n(t){if(t instanceof IDBRequest)return jw(t);if(Da.has(t))return Da.get(t);const e=Kw(t);return e!==t&&(Da.set(t,e),Hc.set(e,t)),e}const Pa=t=>Hc.get(t);function Ww(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=_n(o);return r&&o.addEventListener("upgradeneeded",l=>{r(_n(o.result),l.oldVersion,l.newVersion,_n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Gw=["get","getKey","getAll","getAllKeys","count"],Yw=["put","add","delete","clear"],Ma=new Map;function of(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ma.get(e))return Ma.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Yw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gw.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ma.set(e,s),s}Hw(t=>({...t,get:(e,n,r)=>of(e,n)||t.get(e,n,r),has:(e,n)=>!!of(e,n)||t.has(e,n)}));/**
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
 */class Xw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rl="@firebase/app",af="0.7.31";/**
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
 */const er=new zc("@firebase/app"),Jw="@firebase/app-compat",Zw="@firebase/analytics-compat",e1="@firebase/analytics",t1="@firebase/app-check-compat",n1="@firebase/app-check",r1="@firebase/auth",i1="@firebase/auth-compat",s1="@firebase/database",o1="@firebase/database-compat",a1="@firebase/functions",l1="@firebase/functions-compat",c1="@firebase/installations",u1="@firebase/installations-compat",h1="@firebase/messaging",f1="@firebase/messaging-compat",d1="@firebase/performance",p1="@firebase/performance-compat",m1="@firebase/remote-config",g1="@firebase/remote-config-compat",v1="@firebase/storage",y1="@firebase/storage-compat",b1="@firebase/firestore",_1="@firebase/firestore-compat",w1="firebase",E1="9.9.3";/**
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
 */const pm="[DEFAULT]",T1={[Rl]:"fire-core",[Jw]:"fire-core-compat",[e1]:"fire-analytics",[Zw]:"fire-analytics-compat",[n1]:"fire-app-check",[t1]:"fire-app-check-compat",[r1]:"fire-auth",[i1]:"fire-auth-compat",[s1]:"fire-rtdb",[o1]:"fire-rtdb-compat",[a1]:"fire-fn",[l1]:"fire-fn-compat",[c1]:"fire-iid",[u1]:"fire-iid-compat",[h1]:"fire-fcm",[f1]:"fire-fcm-compat",[d1]:"fire-perf",[p1]:"fire-perf-compat",[m1]:"fire-rc",[g1]:"fire-rc-compat",[v1]:"fire-gcs",[y1]:"fire-gcs-compat",[b1]:"fire-fst",[_1]:"fire-fst-compat","fire-js":"fire-js",[w1]:"fire-js-all"};/**
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
 */const Di=new Map,Dl=new Map;function I1(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tr(t){const e=t.name;if(Dl.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;Dl.set(e,t);for(const n of Di.values())I1(n,t);return!0}function Xi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const S1={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nr=new Gi("app","Firebase",S1);/**
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
 */class k1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
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
 */const Kr=E1;function C1(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:pm,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw nr.create("bad-app-name",{appName:String(r)});const i=Di.get(r);if(i){if(Ri(t,i.options)&&Ri(n,i.config))return i;throw nr.create("duplicate-app",{appName:r})}const s=new Pw(r);for(const a of Dl.values())s.addComponent(a);const o=new k1(t,n,s);return Di.set(r,o),o}function Vo(t=pm){const e=Di.get(t);if(!e)throw nr.create("no-app",{appName:t});return e}function A1(){return Array.from(Di.values())}function Mt(t,e,n){var r;let i=(r=T1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(a.join(" "));return}tr(new Sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const x1="firebase-heartbeat-database",O1=1,Pi="firebase-heartbeat-store";let La=null;function mm(){return La||(La=Ww(x1,O1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pi)}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),La}async function N1(t){var e;try{return(await mm()).transaction(Pi).objectStore(Pi).get(gm(t))}catch(n){if(n instanceof Bt)er.warn(n.message);else{const r=nr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});er.warn(r.message)}}}async function lf(t,e){var n;try{const i=(await mm()).transaction(Pi,"readwrite");return await i.objectStore(Pi).put(e,gm(t)),i.done}catch(r){if(r instanceof Bt)er.warn(r.message);else{const i=nr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});er.warn(i.message)}}}function gm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const R1=1024,D1=30*24*60*60*1e3;class P1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new L1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=cf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=D1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cf(),{heartbeatsToSend:n,unsentEntries:r}=M1(this._heartbeatsCache.heartbeats),i=am(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function cf(){return new Date().toISOString().substring(0,10)}function M1(t,e=R1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),uf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),uf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class L1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ew()?Tw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await N1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function uf(t){return am(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function F1(t){tr(new Sn("platform-logger",e=>new Xw(e),"PRIVATE")),tr(new Sn("heartbeat",e=>new P1(e),"PRIVATE")),Mt(Rl,af,t),Mt(Rl,af,"esm2017"),Mt("fire-js","")}F1("");var U1="firebase",$1="9.9.3";/**
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
 */Mt(U1,$1,"app");function qc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function vm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const B1=vm,ym=new Gi("auth","Firebase",vm());/**
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
 */const hf=new zc("@firebase/auth");function Us(t,...e){hf.logLevel<=he.ERROR&&hf.error(`Auth (${Kr}): ${t}`,...e)}/**
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
 */function Jt(t,...e){throw Kc(t,...e)}function Lt(t,...e){return Kc(t,...e)}function V1(t,e,n){const r=Object.assign(Object.assign({},B1()),{[e]:n});return new Gi("auth","Firebase",r).create(e,{appName:t.name})}function Kc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ym.create(t,...e)}function J(t,e,...n){if(!t)throw Kc(e,...n)}function qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Us(e),new Error(e)}function Zt(t,e){t||qt(e)}/**
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
 */const ff=new Map;function Kt(t){Zt(t instanceof Function,"Expected a class definition");let e=ff.get(t);return e?(Zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ff.set(t,e),e)}/**
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
 */function j1(t,e){const n=Xi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ri(s,e!=null?e:{}))return i;Jt(i,"already-initialized")}return n.initialize({options:e})}function z1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Pl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function H1(){return df()==="http:"||df()==="https:"}function df(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function q1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(H1()||cm()||"connection"in navigator)?navigator.onLine:!0}function K1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zt(n>e,"Short delay should be less than long delay!"),this.isMobile=lm()||um()}get(){return q1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wc(t,e){Zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class bm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const G1=new Qi(3e4,6e4);function Y1(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jo(t,e,n,r,i={}){return _m(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Yi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),bm.fetch()(wm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function _m(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},W1),e);try{const i=new Q1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _s(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _s(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _s(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw _s(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw V1(t,u,c);Jt(t,u)}}catch(i){if(i instanceof Bt)throw i;Jt(t,"network-request-failed")}}async function X1(t,e,n,r,i={}){const s=await jo(t,e,n,r,i);return"mfaPendingCredential"in s&&Jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function wm(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wc(t.config,i):`${t.config.apiScheme}://${i}`}class Q1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),G1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _s(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Lt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function J1(t,e){return jo(t,"POST","/v1/accounts:delete",e)}async function Z1(t,e){return jo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function _i(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eE(t,e=!1){const n=qr(t),r=await n.getIdToken(e),i=Gc(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_i(Fa(i.auth_time)),issuedAtTime:_i(Fa(i.iat)),expirationTime:_i(Fa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fa(t){return Number(t)*1e3}function Gc(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Us("JWT malformed, contained fewer than 3 sections"),null;try{const s=yw(r);return s?JSON.parse(s):(Us("Failed to decode base64 JWT payload"),null)}catch(s){return Us("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function tE(t){const e=Gc(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&nE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Em{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_i(this.lastLoginAt),this.creationTime=_i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ro(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Mi(t,Z1(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?oE(s.providerUserInfo):[],a=sE(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Em(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function iE(t){const e=qr(t);await ro(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sE(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function oE(t){return t.map(e=>{var{providerId:n}=e,r=qc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function aE(t,e){const n=await _m(t,{},async()=>{const r=Yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=wm(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await aE(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Li;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
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
 */function hn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Em(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Mi(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eE(this,e)}reload(){return iE(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ro(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mi(this,J1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:x,emailVerified:k,isAnonymous:z,providerData:M,stsTokenManager:ie}=n;J(x&&ie,e,"internal-error");const F=Li.fromJSON(this.name,ie);J(typeof x=="string",e,"internal-error"),hn(h,e.name),hn(f,e.name),J(typeof k=="boolean",e,"internal-error"),J(typeof z=="boolean",e,"internal-error"),hn(p,e.name),hn(v,e.name),hn(w,e.name),hn(b,e.name),hn(g,e.name),hn(T,e.name);const Z=new Kn({uid:x,auth:e,email:f,emailVerified:k,displayName:h,isAnonymous:z,photoURL:v,phoneNumber:p,tenantId:w,stsTokenManager:F,createdAt:g,lastLoginAt:T});return M&&Array.isArray(M)&&(Z.providerData=M.map(ye=>Object.assign({},ye))),b&&(Z._redirectEventId=b),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Li;i.updateFromServerResponse(n);const s=new Kn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ro(s),s}}/**
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
 */class Tm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Tm.type="NONE";const pf=Tm;/**
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
 */function $s(t,e,n){return`firebase:${t}:${e}:${n}`}class kr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=$s(this.userKey,i.apiKey,s),this.fullPersistenceKey=$s("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new kr(Kt(pf),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Kt(pf);const o=$s(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Kn._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new kr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new kr(s,e,r))}}/**
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
 */function mf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(km(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Im(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Am(e))return"Blackberry";if(xm(e))return"Webos";if(Yc(e))return"Safari";if((e.includes("chrome/")||Sm(e))&&!e.includes("edge/"))return"Chrome";if(Cm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Im(t=Fe()){return/firefox\//i.test(t)}function Yc(t=Fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sm(t=Fe()){return/crios\//i.test(t)}function km(t=Fe()){return/iemobile/i.test(t)}function Cm(t=Fe()){return/android/i.test(t)}function Am(t=Fe()){return/blackberry/i.test(t)}function xm(t=Fe()){return/webos/i.test(t)}function zo(t=Fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lE(t=Fe()){var e;return zo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cE(){return hm()&&document.documentMode===10}function Om(t=Fe()){return zo(t)||Cm(t)||xm(t)||Am(t)||/windows phone/i.test(t)||km(t)}function uE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Nm(t,e=[]){let n;switch(t){case"Browser":n=mf(Fe());break;case"Worker":n=`${mf(Fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kr}/${r}`}/**
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
 */class hE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class fE{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gf(this),this.idTokenSubscription=new gf(this),this.beforeStateQueue=new hE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ym,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await kr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ro(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=K1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qr(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await kr.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Rm(t){return qr(t)}class gf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Aw(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Dm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,n){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}/**
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
 */async function Cr(t,e){return X1(t,"POST","/v1/accounts:signInWithIdp",Y1(t,e))}/**
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
 */const dE="http://localhost";class rr extends Dm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new rr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cr(e,n)}buildRequest(){const e={requestUri:dE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yi(n)}return e}}/**
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
 */class Pm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ji extends Pm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pn extends Ji{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
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
 */class mn extends Ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
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
 */class gn extends Ji{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
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
 */class vn extends Ji{constructor(){super("twitter.com")}static credential(e,n){return rr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
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
 */class Rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kn._fromIdTokenResponse(e,r,i),o=vf(r);return new Rr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=vf(r);return new Rr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function vf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class io extends Bt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,io.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new io(e,n,r,i)}}function Mm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?io._fromErrorAndOperation(t,s,e,r):s})}async function pE(t,e,n=!1){const r=await Mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rr._forOperation(t,"link",r)}/**
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
 */async function mE(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Mi(t,Mm(i,s,e,t),n);J(o.idToken,i,"internal-error");const a=Gc(o.idToken);J(a,i,"internal-error");const{sub:l}=a;return J(t.uid===l,i,"user-mismatch"),Rr._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Jt(i,"user-mismatch"),o}}/**
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
 */async function gE(t,e,n=!1){const r="signIn",i=await Mm(t,r,e),s=await Rr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}const so="__sak";/**
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
 */class Lm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(so,"1"),this.storage.removeItem(so),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function vE(){const t=Fe();return Yc(t)||zo(t)}const yE=1e3,bE=10;class Fm extends Lm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vE()&&uE(),this.fallbackToPolling=Om(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);cE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bE):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fm.type="LOCAL";const _E=Fm;/**
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
 */class Um extends Lm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Um.type="SESSION";const $m=Um;/**
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
 */class Ho{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ho(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await wE(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ho.receivers=[];/**
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
 */function Xc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class EE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Xc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ft(){return window}function TE(t){Ft().location.href=t}/**
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
 */function Bm(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function IE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kE(){return Bm()?self:null}/**
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
 */const Vm="firebaseLocalStorageDb",CE=1,oo="firebaseLocalStorage",jm="fbase_key";class Zi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qo(t,e){return t.transaction([oo],e?"readwrite":"readonly").objectStore(oo)}function AE(){const t=indexedDB.deleteDatabase(Vm);return new Zi(t).toPromise()}function Ml(){const t=indexedDB.open(Vm,CE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(oo,{keyPath:jm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(oo)?e(r):(r.close(),await AE(),e(await Ml()))})})}async function yf(t,e,n){const r=qo(t,!0).put({[jm]:e,value:n});return new Zi(r).toPromise()}async function xE(t,e){const n=qo(t,!1).get(e),r=await new Zi(n).toPromise();return r===void 0?null:r.value}function bf(t,e){const n=qo(t,!0).delete(e);return new Zi(n).toPromise()}const OE=800,NE=3;class zm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ml(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ho._getInstance(kE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IE(),!this.activeServiceWorker)return;this.sender=new EE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ml();return await yf(e,so,"1"),await bf(e,so),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xE(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=qo(i,!1).getAll();return new Zi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zm.type="LOCAL";const RE=zm;/**
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
 */function DE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function PE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Lt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DE().appendChild(r)})}function ME(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Qi(3e4,6e4);/**
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
 */function LE(t,e){return e?Kt(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qc extends Dm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FE(t){return gE(t.auth,new Qc(t),t.bypassAuthState)}function UE(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),mE(n,new Qc(t),t.bypassAuthState)}async function $E(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),pE(n,new Qc(t),t.bypassAuthState)}/**
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
 */class Hm{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FE;case"linkViaPopup":case"linkViaRedirect":return $E;case"reauthViaPopup":case"reauthViaRedirect":return UE;default:Jt(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BE=new Qi(2e3,1e4);class yr extends Hm{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yr.currentPopupAction&&yr.currentPopupAction.cancel(),yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=Xc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,BE.get())};e()}}yr.currentPopupAction=null;/**
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
 */const VE="pendingRedirect",Bs=new Map;class jE extends Hm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bs.get(this.auth._key());if(!e){try{const r=await zE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bs.set(this.auth._key(),e)}return this.bypassAuthState||Bs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zE(t,e){const n=KE(e),r=qE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function HE(t,e){Bs.set(t._key(),e)}function qE(t){return Kt(t._redirectPersistence)}function KE(t){return $s(VE,t.config.apiKey,t.name)}async function WE(t,e,n=!1){const r=Rm(t),i=LE(r,e),o=await new jE(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const GE=10*60*1e3;class YE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GE&&this.cachedEventUids.clear(),this.cachedEventUids.has(_f(e))}saveEventToCache(e){this.cachedEventUids.add(_f(e)),this.lastProcessedEventTime=Date.now()}}function _f(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qm(t);default:return!1}}/**
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
 */async function QE(t,e={}){return jo(t,"GET","/v1/projects",e)}/**
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
 */const JE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZE=/^https?/;async function eT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QE(t);for(const n of e)try{if(tT(n))return}catch{}Jt(t,"unauthorized-domain")}function tT(t){const e=Pl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZE.test(n))return!1;if(JE.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const nT=new Qi(3e4,6e4);function wf(){const t=Ft().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rT(t){return new Promise((e,n)=>{var r,i,s;function o(){wf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wf(),n(Lt(t,"network-request-failed"))},timeout:nT.get()})}if(!((i=(r=Ft().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ft().gapi)===null||s===void 0)&&s.load)o();else{const a=ME("iframefcb");return Ft()[a]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},PE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Vs=null,e})}let Vs=null;function iT(t){return Vs=Vs||rT(t),Vs}/**
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
 */const sT=new Qi(5e3,15e3),oT="__/auth/iframe",aT="emulator/auth/iframe",lT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uT(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wc(e,aT):`https://${t.config.authDomain}/${oT}`,r={apiKey:e.apiKey,appName:t.name,v:Kr},i=cT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Yi(r).slice(1)}`}async function hT(t){const e=await iT(t),n=Ft().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:uT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),a=Ft().setTimeout(()=>{s(o)},sT.get());function l(){Ft().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const fT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dT=500,pT=600,mT="_blank",gT="http://localhost";class Ef{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vT(t,e,n,r=dT,i=pT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},fT),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Fe().toLowerCase();n&&(a=Sm(c)?mT:n),Im(c)&&(e=e||gT,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,v])=>`${f}${p}=${v},`,"");if(lE(c)&&a!=="_self")return yT(e||"",a),new Ef(null);const h=window.open(e||"",a,u);J(h,t,"popup-blocked");try{h.focus()}catch{}return new Ef(h)}function yT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bT="__/auth/handler",_T="emulator/auth/handler";function Tf(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Kr,eventId:i};if(e instanceof Pm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof Ji){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${wT(t)}?${Yi(a).slice(1)}`}function wT({config:t}){return t.emulator?Wc(t,_T):`https://${t.authDomain}/${bT}`}/**
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
 */const Ua="webStorageSupport";class ET{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$m,this._completeRedirectFn=WE,this._overrideRedirectResult=HE}async _openPopup(e,n,r,i){var s;Zt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Tf(e,n,r,Pl(),i);return vT(e,o,Xc())}async _openRedirect(e,n,r,i){return await this._originValidation(e),TE(Tf(e,n,r,Pl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hT(e),r=new YE(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ua,{type:Ua},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ua];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Om()||Yc()||zo()}}const TT=ET;var If="@firebase/auth",Sf="0.20.5";/**
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
 */class IT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ST(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kT(t){tr(new Sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{J(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),J(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nm(t)},u=new fE(a,l,c);return z1(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tr(new Sn("auth-internal",e=>{const n=Rm(e.getProvider("auth").getImmediate());return(r=>new IT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(If,Sf,ST(t)),Mt(If,Sf,"esm2017")}/**
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
 */function CT(t=Vo()){const e=Xi(t,"auth");return e.isInitialized()?e.getImmediate():j1(t,{popupRedirectResolver:TT,persistence:[RE,_E,$m]})}kT("Browser");var AT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Jc=Jc||{},G=AT||self;function ao(){}function Ll(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function es(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xT(t){return Object.prototype.hasOwnProperty.call(t,$a)&&t[$a]||(t[$a]=++OT)}var $a="closure_uid_"+(1e9*Math.random()>>>0),OT=0;function NT(t,e,n){return t.call.apply(t.bind,arguments)}function RT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function He(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?He=NT:He=RT,He.apply(null,arguments)}function ws(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ge(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function xn(){this.s=this.s,this.o=this.o}var DT=0;xn.prototype.s=!1;xn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),DT!=0)&&xT(this)};xn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Km=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Wm=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function PT(t){e:{var e=SI;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function kf(t){return Array.prototype.concat.apply([],arguments)}function Zc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function lo(t){return/^[\s\xa0]*$/.test(t)}var Cf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ze(t,e){return t.indexOf(e)!=-1}function Ba(t,e){return t<e?-1:t>e?1:0}var et;e:{var Af=G.navigator;if(Af){var xf=Af.userAgent;if(xf){et=xf;break e}}et=""}function eu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Gm(t){const e={};for(const n in t)e[n]=t[n];return e}var Of="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ym(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Of.length;s++)n=Of[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function tu(t){return tu[" "](t),t}tu[" "]=ao;function MT(t){var e=UT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var LT=Ze(et,"Opera"),Dr=Ze(et,"Trident")||Ze(et,"MSIE"),Xm=Ze(et,"Edge"),Fl=Xm||Dr,Qm=Ze(et,"Gecko")&&!(Ze(et.toLowerCase(),"webkit")&&!Ze(et,"Edge"))&&!(Ze(et,"Trident")||Ze(et,"MSIE"))&&!Ze(et,"Edge"),FT=Ze(et.toLowerCase(),"webkit")&&!Ze(et,"Edge");function Jm(){var t=G.document;return t?t.documentMode:void 0}var co;e:{var Va="",ja=function(){var t=et;if(Qm)return/rv:([^\);]+)(\)|;)/.exec(t);if(Xm)return/Edge\/([\d\.]+)/.exec(t);if(Dr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(FT)return/WebKit\/(\S+)/.exec(t);if(LT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ja&&(Va=ja?ja[1]:""),Dr){var za=Jm();if(za!=null&&za>parseFloat(Va)){co=String(za);break e}}co=Va}var UT={};function $T(){return MT(function(){let t=0;const e=Cf(String(co)).split("."),n=Cf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Ba(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Ba(i[2].length==0,s[2].length==0)||Ba(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Ul;if(G.document&&Dr){var Nf=Jm();Ul=Nf||parseInt(co,10)||void 0}else Ul=void 0;var BT=Ul,VT=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",ao,e),G.removeEventListener("test",ao,e)}catch{}return t}();function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};function Fi(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Qm){e:{try{tu(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:jT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fi.Z.h.call(this)}}Ge(Fi,Xe);var jT={2:"touch",3:"pen",4:"mouse"};Fi.prototype.h=function(){Fi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ts="closure_listenable_"+(1e6*Math.random()|0),zT=0;function HT(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++zT,this.ca=this.fa=!1}function Ko(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Wo(t){this.src=t,this.g={},this.h=0}Wo.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Bl(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new HT(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function $l(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Km(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ko(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Bl(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var nu="closure_lm_"+(1e6*Math.random()|0),Ha={};function Zm(t,e,n,r,i){if(r&&r.once)return tg(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Zm(t,e[s],n,r,i);return null}return n=su(n),t&&t[ts]?t.N(e,n,es(r)?!!r.capture:!!r,i):eg(t,e,n,!1,r,i)}function eg(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=es(i)?!!i.capture:!!i,a=iu(t);if(a||(t[nu]=a=new Wo(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=qT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)VT||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(rg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qT(){function t(n){return e.call(t.src,t.listener,n)}var e=KT;return t}function tg(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)tg(t,e[s],n,r,i);return null}return n=su(n),t&&t[ts]?t.O(e,n,es(r)?!!r.capture:!!r,i):eg(t,e,n,!0,r,i)}function ng(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)ng(t,e[s],n,r,i);else r=es(r)?!!r.capture:!!r,n=su(n),t&&t[ts]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Bl(s,n,r,i),-1<n&&(Ko(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=iu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Bl(e,n,r,i)),(n=-1<t?e[t]:null)&&ru(n))}function ru(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ts])$l(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(rg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=iu(e))?($l(n,t),n.h==0&&(n.src=null,e[nu]=null)):Ko(t)}}}function rg(t){return t in Ha?Ha[t]:Ha[t]="on"+t}function KT(t,e){if(t.ca)t=!0;else{e=new Fi(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&ru(t),t=n.call(r,e)}return t}function iu(t){return t=t[nu],t instanceof Wo?t:null}var qa="__closure_events_fn_"+(1e9*Math.random()>>>0);function su(t){return typeof t=="function"?t:(t[qa]||(t[qa]=function(e){return t.handleEvent(e)}),t[qa])}function Ue(){xn.call(this),this.i=new Wo(this),this.P=this,this.I=null}Ge(Ue,xn);Ue.prototype[ts]=!0;Ue.prototype.removeEventListener=function(t,e,n,r){ng(this,t,e,n,r)};function qe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var i=e;e=new Xe(r,t),Ym(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Es(o,r,!0,e)&&i}if(o=e.g=t,i=Es(o,r,!0,e)&&i,i=Es(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Es(o,r,!1,e)&&i}Ue.prototype.M=function(){if(Ue.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ko(n[r]);delete t.g[e],t.h--}}this.I=null};Ue.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ue.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Es(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&$l(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var ou=G.JSON.stringify;function WT(){var t=sg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class GT{constructor(){this.h=this.g=null}add(e,n){const r=ig.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ig=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new YT,t=>t.reset());class YT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function XT(t){G.setTimeout(()=>{throw t},0)}function au(t,e){Vl||QT(),jl||(Vl(),jl=!0),sg.add(t,e)}var Vl;function QT(){var t=G.Promise.resolve(void 0);Vl=function(){t.then(JT)}}var jl=!1,sg=new GT;function JT(){for(var t;t=WT();){try{t.h.call(t.g)}catch(n){XT(n)}var e=ig;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jl=!1}function Go(t,e){Ue.call(this),this.h=t||1,this.g=e||G,this.j=He(this.kb,this),this.l=Date.now()}Ge(Go,Ue);P=Go.prototype;P.da=!1;P.S=null;P.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),qe(this,"tick"),this.da&&(lu(this),this.start()))}};P.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lu(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}P.M=function(){Go.Z.M.call(this),lu(this),delete this.g};function cu(t,e,n){if(typeof t=="function")n&&(t=He(t,n));else if(t&&typeof t.handleEvent=="function")t=He(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function og(t){t.g=cu(()=>{t.g=null,t.i&&(t.i=!1,og(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ZT extends xn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:og(this)}M(){super.M(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ui(t){xn.call(this),this.h=t,this.g={}}Ge(Ui,xn);var Rf=[];function ag(t,e,n,r){Array.isArray(n)||(n&&(Rf[0]=n.toString()),n=Rf);for(var i=0;i<n.length;i++){var s=Zm(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function lg(t){eu(t.g,function(e,n){this.g.hasOwnProperty(n)&&ru(e)},t),t.g={}}Ui.prototype.M=function(){Ui.Z.M.call(this),lg(this)};Ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Yo(){this.g=!0}Yo.prototype.Aa=function(){this.g=!1};function eI(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function tI(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function br(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+rI(t,n)+(r?" "+r:"")})}function nI(t,e){t.info(function(){return"TIMEOUT: "+e})}Yo.prototype.info=function(){};function rI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ou(n)}catch{return e}}var lr={},Df=null;function Xo(){return Df=Df||new Ue}lr.Ma="serverreachability";function cg(t){Xe.call(this,lr.Ma,t)}Ge(cg,Xe);function $i(t){const e=Xo();qe(e,new cg(e))}lr.STAT_EVENT="statevent";function ug(t,e){Xe.call(this,lr.STAT_EVENT,t),this.stat=e}Ge(ug,Xe);function nt(t){const e=Xo();qe(e,new ug(e,t))}lr.Na="timingevent";function hg(t,e){Xe.call(this,lr.Na,t),this.size=e}Ge(hg,Xe);function ns(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var Qo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function uu(){}uu.prototype.h=null;function Pf(t){return t.h||(t.h=t.i())}function dg(){}var rs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function hu(){Xe.call(this,"d")}Ge(hu,Xe);function fu(){Xe.call(this,"c")}Ge(fu,Xe);var zl;function Jo(){}Ge(Jo,uu);Jo.prototype.g=function(){return new XMLHttpRequest};Jo.prototype.i=function(){return{}};zl=new Jo;function is(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ui(this),this.P=iI,t=Fl?125:void 0,this.W=new Go(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new pg}function pg(){this.i=null,this.g="",this.h=!1}var iI=45e3,Hl={},uo={};P=is.prototype;P.setTimeout=function(t){this.P=t};function ql(t,e,n){t.K=1,t.v=ea(en(e)),t.s=n,t.U=!0,mg(t,null)}function mg(t,e){t.F=Date.now(),ss(t),t.A=en(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Eg(n.h,"t",r),t.C=0,n=t.l.H,t.h=new pg,t.g=jg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new ZT(He(t.Ia,t,t.g),t.O)),ag(t.V,t.g,"readystatechange",t.gb),e=t.H?Gm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),$i(),eI(t.j,t.u,t.A,t.m,t.X,t.s)}P.gb=function(t){t=t.target;const e=this.L;e&&Wt(t)==3?e.l():this.Ia(t)};P.Ia=function(t){try{if(t==this.g)e:{const u=Wt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Fl||this.g&&(this.h.h||this.g.ga()||Uf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?$i(3):$i(2)),Zo(this);var n=this.g.ba();this.N=n;t:if(gg(this)){var r=Uf(this.g);t="";var i=r.length,s=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),wi(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,tI(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!lo(a)){var c=a;break t}}c=null}if(n=c)br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Kl(this,n);else{this.i=!1,this.o=3,nt(12),Vn(this),wi(this);break e}}this.U?(vg(this,u,o),Fl&&this.i&&u==3&&(ag(this.V,this.W,"tick",this.fb),this.W.start())):(br(this.j,this.m,o,null),Kl(this,o)),u==4&&Vn(this),this.i&&!this.I&&(u==4?Ug(this.l,this):(this.i=!1,ss(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),Vn(this),wi(this)}}}catch{}finally{}};function gg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function vg(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=sI(t,n),i==uo){e==4&&(t.o=4,nt(14),r=!1),br(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Hl){t.o=4,nt(15),br(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else br(t.j,t.m,i,null),Kl(t,i);gg(t)&&i!=uo&&i!=Hl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,nt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),wu(e),e.L=!0,nt(11))):(br(t.j,t.m,n,"[Invalid Chunked Response]"),Vn(t),wi(t))}P.fb=function(){if(this.g){var t=Wt(this.g),e=this.g.ga();this.C<e.length&&(Zo(this),vg(this,t,e),this.i&&t!=4&&ss(this))}};function sI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?uo:(n=Number(e.substring(n,r)),isNaN(n)?Hl:(r+=1,r+n>e.length?uo:(e=e.substr(r,n),t.C=r+n,e)))}P.cancel=function(){this.I=!0,Vn(this)};function ss(t){t.Y=Date.now()+t.P,yg(t,t.P)}function yg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ns(He(t.eb,t),e)}function Zo(t){t.B&&(G.clearTimeout(t.B),t.B=null)}P.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(nI(this.j,this.A),this.K!=2&&($i(),nt(17)),Vn(this),this.o=2,wi(this)):yg(this,this.Y-t)};function wi(t){t.l.G==0||t.I||Ug(t.l,t)}function Vn(t){Zo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,lu(t.W),lg(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Kl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Wl(n.i,t))){if(n.I=t.N,!t.J&&Wl(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)mo(n),ra(n);else break e;_u(n),nt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=ns(He(n.ab,n),6e3));if(1>=Sg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else jn(n,11)}else if((t.J||n.g==t)&&mo(n),!lo(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;!s.g&&(Ze(v,"spdy")||Ze(v,"quic")||Ze(v,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(mu(s,s.h),s.h=null))}if(r.D){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.sa=w,Ee(r.F,r.D,w))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Vg(r,r.H?r.la:null,r.W),o.J){kg(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Zo(a),ss(a)),r.g=o}else Lg(r);0<n.l.length&&ia(n)}else c[0]!="stop"&&c[0]!="close"||jn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?jn(n,7):bu(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}$i(4)}catch{}}function oI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Ll(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function du(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ll(t)||typeof t=="string")Wm(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Ll(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=oI(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Wr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Wr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}P=Wr.prototype;P.R=function(){pu(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};P.T=function(){return pu(this),this.g.concat()};function pu(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ir(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],ir(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}P.get=function(t,e){return ir(this.h,t)?this.h[t]:e};P.set=function(t,e){ir(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};P.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function ir(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var bg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function aI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function sr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof sr){this.g=e!==void 0?e:t.g,ho(this,t.j),this.s=t.s,fo(this,t.i),po(this,t.m),this.l=t.l,e=t.h;var n=new Bi;n.i=e.i,e.g&&(n.g=new Wr(e.g),n.h=e.h),Mf(this,n),this.o=t.o}else t&&(n=String(t).match(bg))?(this.g=!!e,ho(this,n[1]||"",!0),this.s=Ei(n[2]||""),fo(this,n[3]||"",!0),po(this,n[4]),this.l=Ei(n[5]||"",!0),Mf(this,n[6]||"",!0),this.o=Ei(n[7]||"")):(this.g=!!e,this.h=new Bi(null,this.g))}sr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(hi(e,Lf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(hi(e,Lf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(hi(n,n.charAt(0)=="/"?fI:hI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",hi(n,pI)),t.join("")};function en(t){return new sr(t)}function ho(t,e,n){t.j=n?Ei(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function fo(t,e,n){t.i=n?Ei(e,!0):e}function po(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Mf(t,e,n){e instanceof Bi?(t.h=e,mI(t.h,t.g)):(n||(e=hi(e,dI)),t.h=new Bi(e,t.g))}function Ee(t,e,n){t.h.set(e,n)}function ea(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function lI(t){return t instanceof sr?en(t):new sr(t,void 0)}function cI(t,e,n,r){var i=new sr(null,void 0);return t&&ho(i,t),e&&fo(i,e),n&&po(i,n),r&&(i.l=r),i}function Ei(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function hi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,uI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function uI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Lf=/[#\/\?@]/g,hI=/[#\?:]/g,fI=/[#\?]/g,dI=/[#\?@]/g,pI=/#/g;function Bi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function On(t){t.g||(t.g=new Wr,t.h=0,t.i&&aI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Bi.prototype;P.add=function(t,e){On(this),this.i=null,t=Gr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function _g(t,e){On(t),e=Gr(t,e),ir(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ir(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&pu(t)))}function wg(t,e){return On(t),e=Gr(t,e),ir(t.g.h,e)}P.forEach=function(t,e){On(this),this.g.forEach(function(n,r){Wm(n,function(i){t.call(e,i,r,this)},this)},this)};P.T=function(){On(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};P.R=function(t){On(this);var e=[];if(typeof t=="string")wg(this,t)&&(e=kf(e,this.g.get(Gr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=kf(e,t[n])}return e};P.set=function(t,e){return On(this),this.i=null,t=Gr(this,t),wg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Eg(t,e,n){_g(t,e),0<n.length&&(t.i=null,t.g.set(Gr(t,e),Zc(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Gr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mI(t,e){e&&!t.j&&(On(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(_g(this,r),Eg(this,i,n))},t)),t.j=e}var gI=class{constructor(t,e){this.h=t,this.g=e}};function Tg(t){this.l=t||vI,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ea&&G.g.Ea()&&G.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vI=10;function Ig(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Sg(t){return t.h?1:t.g?t.g.size:0}function Wl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function mu(t,e){t.g?t.g.add(e):t.h=e}function kg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Tg.prototype.cancel=function(){if(this.i=Cg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Cg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Zc(t.i)}function gu(){}gu.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};gu.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function yI(){this.g=new gu}function bI(t,e,n){const r=n||"";try{du(t,function(i,s){let o=i;es(i)&&(o=ou(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _I(t,e){const n=new Yo;if(G.Image){const r=new Image;r.onload=ws(Ts,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ws(Ts,n,r,"TestLoadImage: error",!1,e),r.onabort=ws(Ts,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ws(Ts,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ts(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function os(t){this.l=t.$b||null,this.j=t.ib||!1}Ge(os,uu);os.prototype.g=function(){return new ta(this.l,this.j)};os.prototype.i=function(t){return function(){return t}}({});function ta(t,e){Ue.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=vu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ge(ta,Ue);var vu=0;P=ta.prototype;P.open=function(t,e){if(this.readyState!=vu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Vi(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||G).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,as(this)),this.readyState=vu};P.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ag(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ag(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}P.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?as(this):Vi(this),this.readyState==3&&Ag(this)}};P.Ua=function(t){this.g&&(this.response=this.responseText=t,as(this))};P.Ta=function(t){this.g&&(this.response=t,as(this))};P.ha=function(){this.g&&as(this)};function as(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Vi(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Vi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wI=G.JSON.parse;function Re(t){Ue.call(this),this.headers=new Wr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=xg,this.K=this.L=!1}Ge(Re,Ue);var xg="",EI=/^https?$/i,TI=["POST","PUT"];P=Re.prototype;P.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():zl.g(),this.C=this.u?Pf(this.u):Pf(zl),this.g.onreadystatechange=He(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Ff(this,s);return}t=n||"";const i=new Wr(this.headers);r&&du(r,function(s,o){i.set(o,s)}),r=PT(i.T()),n=G.FormData&&t instanceof G.FormData,!(0<=Km(TI,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Rg(this),0<this.B&&((this.K=II(this.g))?(this.g.timeout=this.B,this.g.ontimeout=He(this.pa,this)):this.A=cu(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ff(this,s)}};function II(t){return Dr&&$T()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function SI(t){return t.toLowerCase()=="content-type"}P.pa=function(){typeof Jc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function Ff(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Og(t),na(t)}function Og(t){t.D||(t.D=!0,qe(t,"complete"),qe(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),na(this))};P.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),na(this,!0)),Re.Z.M.call(this)};P.Fa=function(){this.s||(this.F||this.v||this.l?Ng(this):this.cb())};P.cb=function(){Ng(this)};function Ng(t){if(t.h&&typeof Jc<"u"&&(!t.C[1]||Wt(t)!=4||t.ba()!=2)){if(t.v&&Wt(t)==4)cu(t.Fa,0,t);else if(qe(t,"readystatechange"),Wt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(bg)[1]||null;if(!i&&G.self&&G.self.location){var s=G.self.location.protocol;i=s.substr(0,s.length-1)}r=!EI.test(i?i.toLowerCase():"")}n=r}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var o=2<Wt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Og(t)}}finally{na(t)}}}}function na(t,e){if(t.g){Rg(t);const n=t.g,r=t.C[0]?ao:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Rg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function Wt(t){return t.g?t.g.readyState:0}P.ba=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}};P.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wI(e)}};function Uf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case xg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Da=function(){return this.m};P.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function kI(t){let e="";return eu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function yu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=kI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function ii(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Dg(t){this.za=0,this.l=[],this.h=new Yo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ii("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ii("baseRetryDelayMs",5e3,t),this.$a=ii("retryDelaySeedMs",1e4,t),this.Ya=ii("forwardChannelMaxRetries",2,t),this.ra=ii("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Tg(t&&t.concurrentRequestLimit),this.Ca=new yI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}P=Dg.prototype;P.ma=8;P.G=1;function bu(t){if(Pg(t),t.G==3){var e=t.V++,n=en(t.F);Ee(n,"SID",t.J),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),ls(t,n),e=new is(t,t.h,e,void 0),e.K=2,e.v=ea(en(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=jg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ss(e)}Bg(t)}P.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ra(t){t.g&&(wu(t),t.g.cancel(),t.g=null)}function Pg(t){ra(t),t.u&&(G.clearTimeout(t.u),t.u=null),mo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Ka(t,e){t.l.push(new gI(t.Za++,e)),t.G==3&&ia(t)}function ia(t){Ig(t.i)||t.m||(t.m=!0,au(t.Ha,t),t.C=0)}function CI(t,e){return Sg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ns(He(t.Ha,t,e),$g(t,t.C)),t.C++,!0)}P.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new is(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Gm(s),Ym(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Mg(this,i,e),n=en(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),ls(this,n),this.o&&s&&yu(n,this.o,s),mu(this.i,i),this.Ra&&Ee(n,"TYPE","init"),this.ja?(Ee(n,"$req",e),Ee(n,"SID","null"),i.$=!0,ql(i,n,null)):ql(i,n,e),this.G=2}}else this.G==3&&(t?$f(this,t):this.l.length==0||Ig(this.i)||$f(this))};function $f(t,e){var n;e?n=e.m:n=t.V++;const r=en(t.F);Ee(r,"SID",t.J),Ee(r,"RID",n),Ee(r,"AID",t.U),ls(t,r),t.o&&t.s&&yu(r,t.o,t.s),n=new is(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Mg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),mu(t.i,n),ql(n,r,e)}function ls(t,e){t.j&&du({},function(n,r){Ee(e,r,n)})}function Mg(t,e,n){n=Math.min(t.l.length,n);var r=t.j?He(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=s,0>c)s=Math.max(0,i[l].h-100),a=!1;else try{bI(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Lg(t){t.g||t.u||(t.Y=1,au(t.Ga,t),t.A=0)}function _u(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ns(He(t.Ga,t),$g(t,t.A)),t.A++,!0)}P.Ga=function(){if(this.u=null,Fg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ns(He(this.bb,this),t)}};P.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,nt(10),ra(this),Fg(this))};function wu(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function Fg(t){t.g=new is(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=en(t.oa);Ee(e,"RID","rpc"),Ee(e,"SID",t.J),Ee(e,"CI",t.N?"0":"1"),Ee(e,"AID",t.U),ls(t,e),Ee(e,"TYPE","xmlhttp"),t.o&&t.s&&yu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ea(en(e)),n.s=null,n.U=!0,mg(n,t)}P.ab=function(){this.v!=null&&(this.v=null,ra(this),_u(this),nt(19))};function mo(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Ug(t,e){var n=null;if(t.g==e){mo(t),wu(t),t.g=null;var r=2}else if(Wl(t.i,e))n=e.D,kg(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Xo(),qe(r,new hg(r,n)),ia(t)}else Lg(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&CI(t,e)||r==2&&_u(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:jn(t,5);break;case 4:jn(t,10);break;case 3:jn(t,6);break;default:jn(t,2)}}}function $g(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function jn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=He(t.jb,t);n||(n=new sr("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||ho(n,"https"),ea(n)),_I(n.toString(),r)}else nt(2);t.G=0,t.j&&t.j.va(e),Bg(t),Pg(t)}P.jb=function(t){t?(this.h.info("Successfully pinged google.com"),nt(2)):(this.h.info("Failed to ping google.com"),nt(1))};function Bg(t){t.G=0,t.I=-1,t.j&&((Cg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Zc(t.l),t.l.length=0),t.j.ua())}function Vg(t,e,n){let r=lI(n);if(r.i!="")e&&fo(r,e+"."+r.i),po(r,r.m);else{const i=G.location;r=cI(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&eu(t.aa,function(i,s){Ee(r,s,i)}),e=t.D,n=t.sa,e&&n&&Ee(r,e,n),Ee(r,"VER",t.ma),ls(t,r),r}function jg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Re(new os({ib:!0})):new Re(t.qa),e.L=t.H,e}function zg(){}P=zg.prototype;P.xa=function(){};P.wa=function(){};P.va=function(){};P.ua=function(){};P.Oa=function(){};function go(){if(Dr&&!(10<=Number(BT)))throw Error("Environmental error: no available transport.")}go.prototype.g=function(t,e){return new dt(t,e)};function dt(t,e){Ue.call(this),this.g=new Dg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!lo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!lo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Yr(this)}Ge(dt,Ue);dt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),au(He(t.hb,t,e))),nt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Vg(t,null,t.W),ia(t)};dt.prototype.close=function(){bu(this.g)};dt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ka(this.g,e)}else this.v?(e={},e.__data__=ou(t),Ka(this.g,e)):Ka(this.g,t)};dt.prototype.M=function(){this.g.j=null,delete this.j,bu(this.g),delete this.g,dt.Z.M.call(this)};function Hg(t){hu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ge(Hg,hu);function qg(){fu.call(this),this.status=1}Ge(qg,fu);function Yr(t){this.g=t}Ge(Yr,zg);Yr.prototype.xa=function(){qe(this.g,"a")};Yr.prototype.wa=function(t){qe(this.g,new Hg(t))};Yr.prototype.va=function(t){qe(this.g,new qg)};Yr.prototype.ua=function(){qe(this.g,"b")};go.prototype.createWebChannel=go.prototype.g;dt.prototype.send=dt.prototype.u;dt.prototype.open=dt.prototype.m;dt.prototype.close=dt.prototype.close;Qo.NO_ERROR=0;Qo.TIMEOUT=8;Qo.HTTP_ERROR=6;fg.COMPLETE="complete";dg.EventType=rs;rs.OPEN="a";rs.CLOSE="b";rs.ERROR="c";rs.MESSAGE="d";Ue.prototype.listen=Ue.prototype.N;Re.prototype.listenOnce=Re.prototype.O;Re.prototype.getLastError=Re.prototype.La;Re.prototype.getLastErrorCode=Re.prototype.Da;Re.prototype.getStatus=Re.prototype.ba;Re.prototype.getResponseJson=Re.prototype.Qa;Re.prototype.getResponseText=Re.prototype.ga;Re.prototype.send=Re.prototype.ea;var AI=function(){return new go},xI=function(){return Xo()},Wa=Qo,OI=fg,NI=lr,Bf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},RI=os,Is=dg,DI=Re;const Vf="@firebase/firestore";/**
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
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
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
 */const or=new zc("@firebase/firestore");function jf(){return or.logLevel}function $(t,...e){if(or.logLevel<=he.DEBUG){const n=e.map(Eu);or.debug(`Firestore (${Xr}): ${t}`,...n)}}function tn(t,...e){if(or.logLevel<=he.ERROR){const n=e.map(Eu);or.error(`Firestore (${Xr}): ${t}`,...n)}}function zf(t,...e){if(or.logLevel<=he.WARN){const n=e.map(Eu);or.warn(`Firestore (${Xr}): ${t}`,...n)}}function Eu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class PI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class LI{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Wn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Wn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string"),new PI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new st(e)}}class FI{constructor(e,n,r){this.type="FirstParty",this.user=st.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class UI{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new FI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $I{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BI{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.p=n.token,new $I(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new lt(0,0))}static max(){return new re(new lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ji{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ji.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ji?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends ji{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const zI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends ji{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return zI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ke.fromString(e))}static fromName(e){return new q(ke.fromString(e).popFirst(5))}static empty(){return new q(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ke(e.slice()))}}function HI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new kn(i,q.empty(),e)}function qI(t){return new kn(t.readTime,t.key,-1)}class kn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new kn(re.min(),q.empty(),-1)}static max(){return new kn(re.max(),q.empty(),-1)}}function KI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */async function Tu(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==WI)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function cs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Iu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function Hf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function sa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function YI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Iu.ot=-1;class $e{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ss(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ss(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ss(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ss(this.root,e,this.comparator,!0)}}class Ss{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:je.RED,this.left=i!=null?i:je.EMPTY,this.right=s!=null?s:je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new je(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(t,e,n,r,i){return this}insert(t,e,n){return new je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class De{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qf(this.data.getIterator())}getIteratorFrom(e){return new qf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class qf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gn{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Gn([])}unionWith(e){let n=new De(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new We(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const XI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cn(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=XI.exec(t);if(Oe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mr(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
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
 */function Kg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wg(t){const e=t.mapValue.fields.__previous_value__;return Kg(e)?Wg(e):e}function zi(t){const e=Cn(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
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
 */class QI{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Lr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function oa(t){return t==null}function Gl(t){return t===0&&1/t==-1/0}/**
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
 */const ks={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kg(t)?4:JI(t)?9007199254740991:10:ne()}function $t(t,e){if(t===e)return!0;const n=ar(t);if(n!==ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zi(t).isEqual(zi(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Cn(r.timestampValue),o=Cn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Mr(r.bytesValue).isEqual(Mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return xe(r.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(r.geoPointValue.longitude)===xe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return xe(r.integerValue)===xe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=xe(r.doubleValue),o=xe(i.doubleValue);return s===o?Gl(s)===Gl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Pr(t.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Hf(s)!==Hf(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!$t(s[a],o[a])))return!1;return!0}(t,e);default:return ne()}}function Hi(t,e){return(t.values||[]).find(n=>$t(n,e))!==void 0}function Fr(t,e){if(t===e)return 0;const n=ar(t),r=ar(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=xe(i.integerValue||i.doubleValue),a=xe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Kf(t.timestampValue,e.timestampValue);case 4:return Kf(zi(t),zi(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Mr(i),a=Mr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=fe(o[l],a[l]);if(c!==0)return c}return fe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=fe(xe(i.latitude),xe(s.latitude));return o!==0?o:fe(xe(i.longitude),xe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Fr(o[l],a[l]);if(c)return c}return fe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ks.mapValue&&s===ks.mapValue)return 0;if(i===ks.mapValue)return 1;if(s===ks.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=fe(a[u],c[u]);if(h!==0)return h;const f=Fr(o[a[u]],l[c[u]]);if(f!==0)return f}return fe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ne()}}function Kf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=Cn(t),r=Cn(e),i=fe(n.seconds,r.seconds);return i!==0?i:fe(n.nanos,r.nanos)}function Ar(t){return Yl(t)}function Yl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Cn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Yl(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Yl(r.fields[a])}`;return s+"}"}(t.mapValue):ne();var e,n}function Xl(t){return!!t&&"integerValue"in t}function Su(t){return!!t&&"arrayValue"in t}function Wf(t){return!!t&&"nullValue"in t}function Gf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ga(t){return!!t&&"mapValue"in t}function Ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return sa(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ga(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ti(n)}setAll(e){let n=ot.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ti(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ga(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ga(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){sa(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(Ti(this.value))}}/**
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
 */class ze{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ze(e,0,re.min(),re.min(),Dt.empty(),0)}static newFoundDocument(e,n,r){return new ze(e,1,n,re.min(),r,0)}static newNoDocument(e,n){return new ze(e,2,n,re.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,re.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ZI{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function Yf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ZI(t,e,n,r,i,s,o)}function ku(t){const e=ue(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Ar(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),oa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ar(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ar(r)).join(",")),e.ut=n}return e.ut}function eS(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ar(r.value)}`;var r}).join(", ")}]`),oa(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ar(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ar(n)).join(",")),`Target(${e})`}function Cu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!lS(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!$t(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qf(t.startAt,e.startAt)&&Qf(t.endAt,e.endAt)}function Ql(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class at extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new tS(e,n,r):n==="array-contains"?new iS(e,r):n==="in"?new sS(e,r):n==="not-in"?new oS(e,r):n==="array-contains-any"?new aS(e,r):new at(e,n,r)}static ct(e,n,r){return n==="in"?new nS(e,r):new rS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Fr(n,this.value)):n!==null&&ar(this.value)===ar(n)&&this.at(Fr(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class tS extends at{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.at(n)}}class nS extends at{constructor(e,n){super(e,"in",n),this.keys=Gg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rS extends at{constructor(e,n){super(e,"not-in",n),this.keys=Gg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class iS extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Su(n)&&Hi(n.arrayValue,this.value)}}class sS extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hi(this.value.arrayValue,n)}}class oS extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Hi(this.value.arrayValue,n)}}class aS extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Su(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hi(this.value.arrayValue,r))}}class vo{constructor(e,n){this.position=e,this.inclusive=n}}class Ii{constructor(e,n="asc"){this.field=e,this.dir=n}}function lS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Xf(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Fr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$t(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class aa{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function cS(t,e,n,r,i,s,o,a){return new aa(t,e,n,r,i,s,o,a)}function Yg(t){return new aa(t)}function Jf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uS(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function hS(t){for(const e of t.filters)if(e.ht())return e.field;return null}function fS(t){return t.collectionGroup!==null}function qi(t){const e=ue(t);if(e.lt===null){e.lt=[];const n=hS(e),r=uS(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new Ii(n)),e.lt.push(new Ii(ot.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Ii(ot.keyField(),s))}}}return e.lt}function nn(t){const e=ue(t);if(!e.ft)if(e.limitType==="F")e.ft=Yf(e.path,e.collectionGroup,qi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of qi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ii(s.field,o))}const r=e.endAt?new vo(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new vo(e.startAt.position,e.startAt.inclusive):null;e.ft=Yf(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function Jl(t,e,n){return new aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function la(t,e){return Cu(nn(t),nn(e))&&t.limitType===e.limitType}function Xg(t){return`${ku(nn(t))}|lt:${t.limitType}`}function Zl(t){return`Query(target=${eS(nn(t))}; limitType=${t.limitType})`}function Au(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Xf(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,qi(n),r)||n.endAt&&!function(i,s,o){const a=Xf(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,qi(n),r))}(t,e)}function dS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qg(t){return(e,n)=>{let r=!1;for(const i of qi(t)){const s=pS(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function pS(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Fr(a,l):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
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
 */function mS(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gl(e)?"-0":e}}function gS(t){return{integerValue:""+t}}/**
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
 */class ca{constructor(){this._=void 0}}function vS(t,e,n){return t instanceof ec?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof yo?Jg(t,e):t instanceof bo?Zg(t,e):function(r,i){const s=bS(r,i),o=Zf(s)+Zf(r._t);return Xl(s)&&Xl(r._t)?gS(o):mS(r.wt,o)}(t,e)}function yS(t,e,n){return t instanceof yo?Jg(t,e):t instanceof bo?Zg(t,e):n}function bS(t,e){return t instanceof tc?Xl(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ec extends ca{}class yo extends ca{constructor(e){super(),this.elements=e}}function Jg(t,e){const n=ev(e);for(const r of t.elements)n.some(i=>$t(i,r))||n.push(r);return{arrayValue:{values:n}}}class bo extends ca{constructor(e){super(),this.elements=e}}function Zg(t,e){let n=ev(e);for(const r of t.elements)n=n.filter(i=>!$t(i,r));return{arrayValue:{values:n}}}class tc extends ca{constructor(e,n){super(),this.wt=e,this._t=n}}function Zf(t){return xe(t.integerValue||t.doubleValue)}function ev(t){return Su(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _S(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof yo&&r instanceof yo||n instanceof bo&&r instanceof bo?Pr(n.elements,r.elements,$t):n instanceof tc&&r instanceof tc?$t(n._t,r._t):n instanceof ec&&r instanceof ec}(t.transform,e.transform)}class Yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yn}static exists(e){return new Yn(void 0,e)}static updateTime(e){return new Yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function js(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xu{}function tv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ES(t.key,Yn.none()):new Ou(t.key,t.data,Yn.none());{const n=t.data,r=Dt.empty();let i=new De(ot.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ua(t.key,r,new Gn(i.toArray()),Yn.none())}}function wS(t,e,n){t instanceof Ou?function(r,i,s){const o=r.value.clone(),a=td(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ua?function(r,i,s){if(!js(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=td(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(nv(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Si(t,e,n,r){return t instanceof Ou?function(i,s,o,a){if(!js(i.precondition,s))return o;const l=i.value.clone(),c=nd(i.fieldTransforms,a,s);return l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ua?function(i,s,o,a){if(!js(i.precondition,s))return o;const l=nd(i.fieldTransforms,a,s),c=s.data;return c.setAll(nv(i)),c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(i,s,o){return js(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function ed(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Pr(n,r,(i,s)=>_S(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ou extends xu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ua extends xu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function nv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function td(t,e,n){const r=new Map;Oe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,yS(o,a,n[i]))}return r}function nd(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,vS(s,o,e))}return r}class ES extends xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */var Ae,se;function rv(t){if(t===void 0)return tn("GRPC error has no .code"),N.UNKNOWN;switch(t){case Ae.OK:return N.OK;case Ae.CANCELLED:return N.CANCELLED;case Ae.UNKNOWN:return N.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return N.INTERNAL;case Ae.UNAVAILABLE:return N.UNAVAILABLE;case Ae.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Ae.NOT_FOUND:return N.NOT_FOUND;case Ae.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Ae.ABORTED:return N.ABORTED;case Ae.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Ae.DATA_LOSS:return N.DATA_LOSS;default:return ne()}}(se=Ae||(Ae={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Qr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){sa(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return YI(this.inner)}size(){return this.innerSize}}/**
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
 */const IS=new $e(q.comparator);function An(){return IS}const iv=new $e(q.comparator);function fi(...t){let e=iv;for(const n of t)e=e.insert(n.key,n);return e}function SS(t){let e=iv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zn(){return ki()}function sv(){return ki()}function ki(){return new Qr(t=>t.toString(),(t,e)=>t.isEqual(e))}new $e(q.comparator);const kS=new De(q.comparator);function le(...t){let e=kS;for(const n of t)e=e.add(n);return e}const CS=new De(fe);function ov(){return CS}/**
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
 */class ha{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,us.createSynthesizedTargetChangeForCurrentChange(e,n)),new ha(re.min(),r,ov(),An(),le())}}class us{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new us(We.EMPTY_BYTE_STRING,n,le(),le(),le())}}/**
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
 */class zs{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class av{constructor(e,n){this.targetId=e,this.It=n}}class lv{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class rd{constructor(){this.Tt=0,this.Et=sd(),this.At=We.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=le(),n=le(),r=le();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new us(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=sd()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class AS{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=An(),this.Bt=id(),this.Lt=new De(fe)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(Ql(s))if(r===0){const o=new q(s.path);this.Kt(n,o,ze.newNoDocument(o,re.min()))}else Oe(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&Ql(a.target)){const l=new q(a.target.path);this.$t.get(l)!==null||this.Xt(o,l)||this.Kt(o,l,ze.newNoDocument(l,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=le();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ht(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new ha(e,n,this.Lt,this.$t,r);return this.$t=An(),this.Bt=id(),this.Lt=new De(fe),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new rd,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new De(fe),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new rd),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function id(){return new $e(q.comparator)}function sd(){return new $e(q.comparator)}/**
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
 */const xS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),OS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class NS{constructor(e,n){this.databaseId=e,this.dt=n}}function RS(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function DS(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Ki(t){return Oe(!!t),re.fromTimestamp(function(e){const n=Cn(e);return new lt(n.seconds,n.nanos)}(t))}function PS(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function cv(t){const e=ke.fromString(t);return Oe(fv(e)),e}function Ya(t,e){const n=cv(e);if(n.get(1)!==t.databaseId.projectId)throw new W(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(uv(n))}function nc(t,e){return PS(t.databaseId,e)}function MS(t){const e=cv(t);return e.length===4?ke.emptyPath():uv(e)}function od(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uv(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function LS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,c){return l.dt?(Oe(c===void 0||typeof c=="string"),We.fromBase64String(c||"")):(Oe(c===void 0||c instanceof Uint8Array),We.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?N.UNKNOWN:rv(l.code);return new W(c,l.message||"")}(o);n=new lv(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ya(t,r.document.name),s=Ki(r.document.updateTime),o=new Dt({mapValue:{fields:r.document.fields}}),a=ze.newFoundDocument(i,s,o),l=r.targetIds||[],c=r.removedTargetIds||[];n=new zs(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ya(t,r.document),s=r.readTime?Ki(r.readTime):re.min(),o=ze.newNoDocument(i,s),a=r.removedTargetIds||[];n=new zs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ya(t,r.document),s=r.removedTargetIds||[];n=new zs([],s,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new TS(i),o=r.targetId;n=new av(o,s)}}return n}function FS(t,e){return{documents:[nc(t,e.path)]}}function US(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=nc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=nc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(u=>function(h){if(h.op==="=="){if(Gf(h.value))return{unaryFilter:{field:dr(h.field),op:"IS_NAN"}};if(Wf(h.value))return{unaryFilter:{field:dr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Gf(h.value))return{unaryFilter:{field:dr(h.field),op:"IS_NOT_NAN"}};if(Wf(h.value))return{unaryFilter:{field:dr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dr(h.field),op:jS(h.op),value:h.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:dr(u.field),direction:VS(u.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,c){return l.dt||oa(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function $S(t){let e=MS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Oe(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=hv(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ii(_r(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,oa(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new vo(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new vo(f,h)}(n.endAt)),cS(e,i,o,s,a,"F",l,c)}function BS(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ne()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function hv(t){return t?t.unaryFilter!==void 0?[HS(t)]:t.fieldFilter!==void 0?[zS(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>hv(e)).reduce((e,n)=>e.concat(n)):ne():[]}function VS(t){return xS[t]}function jS(t){return OS[t]}function dr(t){return{fieldPath:t.canonicalString()}}function _r(t){return ot.fromServerFormat(t.fieldPath)}function zS(t){return at.create(_r(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(t.fieldFilter.op),t.fieldFilter.value)}function HS(t){switch(t.unaryFilter.op){case"IS_NAN":const e=_r(t.unaryFilter.field);return at.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=_r(t.unaryFilter.field);return at.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_r(t.unaryFilter.field);return at.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_r(t.unaryFilter.field);return at.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}function fv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class qS{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&wS(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Si(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Si(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=sv();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=tv(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Pr(this.mutations,e.mutations,(n,r)=>ed(n,r))&&Pr(this.baseMutations,e.baseMutations,(n,r)=>ed(n,r))}}/**
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
 */class Xn{constructor(e,n,r,i,s=re.min(),o=re.min(),a=We.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class WS{constructor(e){this.ne=e}}function GS(t){const e=$S({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jl(e,e.limit,"L"):e}/**
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
 */class YS{constructor(){this.ze=new XS}addToCollectionParentIndex(e,n){return this.ze.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(kn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(kn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class XS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new De(ke.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(ke.comparator)).toArray()}}/**
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
 */class ZS{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Si(r.mutation,i,Gn.empty(),lt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=zn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=fi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=An();const o=ki(),a=ki();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof ua)?s=s.insert(c.key,c):u!==void 0&&(o.set(c.key,u.mutation.getFieldMask()),Si(u.mutation,c,u.mutation.getFieldMask(),lt.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new JS(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ki();let i=new $e((o,a)=>o-a),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Gn.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||le()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=sv();u.forEach(f=>{if(!s.has(f)){const p=tv(n.get(f),r.get(f));p!==null&&h.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(zn());let a=-1,l=s;return o.next(c=>S.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?S.resolve():this.getBaseDocument(e,u,h).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,le())).next(u=>({batchId:a,changes:SS(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=fi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=fi();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(c,u){return new aa(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,ze.newInvalidDocument(c)))});let o=fi();return i.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Si(c.mutation,l,Gn.empty(),lt.now()),Au(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):S.resolve(ze.newInvalidDocument(n))}}/**
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
 */class ek{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return S.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ki(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:GS(r.bundledQuery),readTime:Ki(r.readTime)}}(n)),S.resolve()}}/**
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
 */class tk{constructor(){this.overlays=new $e(q.comparator),this.Xn=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zn();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=zn(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new $e((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=zn(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=zn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return S.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new KS(n,r));let s=this.Xn.get(n);s===void 0&&(s=le(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
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
 */class Nu{constructor(){this.Zn=new De(Pe.ts),this.es=new De(Pe.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Pe(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new q(new ke([])),r=new Pe(n,e),i=new Pe(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new q(new ke([])),r=new Pe(n,e),i=new Pe(n,e+1);let s=le();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pe(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return q.comparator(e.key,n.key)||fe(e.ls,n.ls)}static ns(e,n){return fe(e.ls,n.ls)||q.comparator(e.key,n.key)}}/**
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
 */class nk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new De(Pe.ts)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qS(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new Pe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(fe);return n.forEach(i=>{const s=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),S.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Pe(new q(s),0);let a=new De(fe);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.ls)),!0)},o),S.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Oe(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return S.forEach(n.mutations,i=>{const s=new Pe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new Pe(n,0),i=this.ds.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rk{constructor(e){this.ps=e,this.docs=new $e(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ze.newInvalidDocument(i))}),S.resolve(r)}getAllFromCollection(e,n,r){let i=An();const s=new q(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||KI(qI(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,i){ne()}Is(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ik(this)}getSize(e){return S.resolve(this.size)}}class ik extends QS{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
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
 */class sk{constructor(e){this.persistence=e,this.Ts=new Qr(n=>ku(n),Cu),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Es=0,this.As=new Nu,this.targetCount=0,this.Rs=Ur.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),S.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Ur(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.vn(n),S.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.As.containsKey(n))}}/**
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
 */class ok{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Iu(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new sk(this),this.indexManager=new YS,this.remoteDocumentCache=function(r){return new rk(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new WS(n),this.Ds=new ek(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new nk(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new ak(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return S.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class ak extends GI{constructor(e){super(),this.currentSequenceNumber=e}}class Ru{constructor(e){this.persistence=e,this.ks=new Nu,this.Ms=null}static Os(e){return new Ru(e)}get Fs(){if(this.Ms)return this.Ms;throw ne()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),S.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Fs,r=>{const i=q.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,re.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return S.or([()=>S.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
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
 */class Du{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Du(e,n.fromCache,r,i)}}/**
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
 */class lk{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){if(Jf(n))return S.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jl(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ki(n,a);return this.Mi(n,c,o,l.readTime)?this.Ci(e,Jl(n,null,"F")):this.Oi(e,c,n,l)}))})))}xi(e,n,r,i){return Jf(n)||i.isEqual(re.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Mi(n,o,r,i)?this.Ni(e,n):(jf()<=he.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zl(n)),this.Oi(e,o,n,HI(i,-1)))})}ki(e,n){let r=new De(Qg(e));return n.forEach((i,s)=>{Au(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return jf()<=he.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Zl(n)),this.Di.getDocumentsMatchingQuery(e,n,kn.min())}Oi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class ck{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new $e(fe),this.Bi=new Qr(s=>ku(s),Cu),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZS(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function uk(t,e,n,r){return new ck(t,e,n,r)}async function dv(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=le();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({Ki:c,removedBatchIds:o,addedBatchIds:a}))})})}function pv(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function hk(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.Vs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,u.addedDocuments,h)));let p=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(We.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),i=i.insert(h,p),function(v,w,b){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(f,p,u)&&a.push(n.Vs.updateTargetData(s,p))});let l=An(),c=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(fk(s,o,e.documentUpdates).next(u=>{l=u.Gi,c=u.Qi})),!r.isEqual(re.min())){const u=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.$i=i,s))}function fk(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=An();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Gi:o,Qi:i}})}function dk(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new Xn(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function rc(t,e,n){const r=ue(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!cs(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function ad(t,e,n){const r=ue(t);let i=re.min(),s=le();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ue(a),h=u.Bi.get(c);return h!==void 0?S.resolve(u.$i.get(h)):u.Vs.getTargetData(l,c)}(r,o,nn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?s:le())).next(a=>(pk(r,dS(e),a),{documents:a,ji:s})))}function pk(t,e,n){let r=re.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class ld{constructor(){this.activeTargetIds=ov()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mk{constructor(){this.Fr=new ld,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new ld,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gk{Br(e){}shutdown(){}}/**
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
 */class cd{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const vk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class yk{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class bk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);$("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(l=>($("RestConnection","Received: ",l),l),l=>{throw zf("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ao(e,n,r,i,s,o){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Xr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=vk[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new DI;a.listenOnce(OI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Wa.NO_ERROR:const c=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(c)),s(c);break;case Wa.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new W(N.DEADLINE_EXCEEDED,"Request time out"));break;case Wa.HTTP_ERROR:const u=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const v=p.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(v)>=0?v:N.UNKNOWN}(h.status);o(new W(f,h.message))}else o(new W(N.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new W(N.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=AI(),o=xI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new RI({})),this.uo(a.initMessageHeaders,n,r),lm()||um()||_w()||hm()||ww()||cm()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");$("Connection","Creating WebChannel: "+l,a);const c=s.createWebChannel(l,a);let u=!1,h=!1;const f=new yk({jr:v=>{h?$("Connection","Not sending because WebChannel is closed:",v):(u||($("Connection","Opening WebChannel transport."),c.open(),u=!0),$("Connection","WebChannel sending:",v),c.send(v))},Wr:()=>c.close()}),p=(v,w,b)=>{v.listen(w,g=>{try{b(g)}catch(T){setTimeout(()=>{throw T},0)}})};return p(c,Is.EventType.OPEN,()=>{h||$("Connection","WebChannel transport opened.")}),p(c,Is.EventType.CLOSE,()=>{h||(h=!0,$("Connection","WebChannel transport closed"),f.eo())}),p(c,Is.EventType.ERROR,v=>{h||(h=!0,zf("Connection","WebChannel transport errored:",v),f.eo(new W(N.UNAVAILABLE,"The operation could not be completed")))}),p(c,Is.EventType.MESSAGE,v=>{var w;if(!h){const b=v.data[0];Oe(!!b);const g=b,T=g.error||((w=g[0])===null||w===void 0?void 0:w.error);if(T){$("Connection","WebChannel received error:",T);const x=T.status;let k=function(M){const ie=Ae[M];if(ie!==void 0)return rv(ie)}(x),z=T.message;k===void 0&&(k=N.INTERNAL,z="Unknown error status: "+x+" with message "+T.message),h=!0,f.eo(new W(k,z)),c.close()}else $("Connection","WebChannel received:",b),f.no(b)}}),p(o,NI.STAT_EVENT,v=>{v.stat===Bf.PROXY?$("Connection","Detected buffering proxy"):v.stat===Bf.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function Xa(){return typeof document<"u"?document:null}/**
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
 */function mv(t){return new NS(t,!0)}class gv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class _k{constructor(e,n,r,i,s,o,a,l){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new gv(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(tn(n.toString()),tn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new W(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wk extends _k{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=LS(this.wt,e),r=function(i){if(!("targetChange"in i))return re.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?re.min():s.readTime?Ki(s.readTime):re.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=od(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=Ql(a)?{documents:FS(i,a)}:{query:US(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=DS(i,s.resumeToken):s.snapshotVersion.compareTo(re.min())>0&&(o.readTime=RS(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=BS(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=od(this.wt),n.removeTarget=e,this.Oo(n)}}/**
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
 */class Ek extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new W(N.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(N.UNKNOWN,i.toString())})}ao(e,n,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(N.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class Tk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class Ik{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{fs(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ue(a);l.lu.add(4),await hs(l),l._u.set("Unknown"),l.lu.delete(4),await fa(l)}(this))})}),this._u=new Tk(r,i)}}async function fa(t){if(fs(t))for(const e of t.fu)await e(!0)}async function hs(t){for(const e of t.fu)await e(!1)}function vv(t,e){const n=ue(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Lu(n)?Mu(n):Jr(n).Co()&&Pu(n,e))}function yv(t,e){const n=ue(t),r=Jr(n);n.hu.delete(e),r.Co()&&bv(n,e),n.hu.size===0&&(r.Co()?r.ko():fs(n)&&n._u.set("Unknown"))}function Pu(t,e){t.wu.Nt(e.targetId),Jr(t).Qo(e)}function bv(t,e){t.wu.Nt(e),Jr(t).jo(e)}function Mu(t){t.wu=new AS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Jr(t).start(),t._u.iu()}function Lu(t){return fs(t)&&!Jr(t).Do()&&t.hu.size>0}function fs(t){return ue(t).lu.size===0}function _v(t){t.wu=void 0}async function Sk(t){t.hu.forEach((e,n)=>{Pu(t,e)})}async function kk(t,e){_v(t),Lu(t)?(t._u.uu(e),Mu(t)):t._u.set("Unknown")}async function Ck(t,e,n){if(t._u.set("Online"),e instanceof lv&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ud(t,r)}else if(e instanceof zs?t.wu.Ut(e):e instanceof av?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(re.min()))try{const r=await pv(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.hu.get(l);c&&i.hu.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.hu.get(a);if(!l)return;i.hu.set(a,l.withResumeToken(We.EMPTY_BYTE_STRING,l.snapshotVersion)),bv(i,a);const c=new Xn(l.target,a,1,l.sequenceNumber);Pu(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await ud(t,r)}}async function ud(t,e,n){if(!cs(e))throw e;t.lu.add(1),await hs(t),t._u.set("Offline"),n||(n=()=>pv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await fa(t)})}async function hd(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=fs(n);n.lu.add(3),await hs(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await fa(n)}async function Ak(t,e){const n=ue(t);e?(n.lu.delete(2),await fa(n)):e||(n.lu.add(2),await hs(n),n._u.set("Unknown"))}function Jr(t){return t.mu||(t.mu=function(e,n,r){const i=ue(e);return i.tu(),new wk(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:Sk.bind(null,t),Jr:kk.bind(null,t),Go:Ck.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Lu(t)?Mu(t):t._u.set("Unknown")):(await t.mu.stop(),_v(t))})),t.mu}/**
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
 */class Fu{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Fu(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wv(t,e){if(tn("AsyncQueue",`${e}: ${t}`),cs(t))return new W(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class xr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=fi(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new xr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class fd{constructor(){this.yu=new $e(q.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):ne():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class $r{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new $r(e,n,xr.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&la(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class xk{constructor(){this.Iu=void 0,this.listeners=[]}}class Ok{constructor(){this.queries=new Qr(e=>Xg(e),la),this.onlineState="Unknown",this.Tu=new Set}}async function Nk(t,e){const n=ue(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new xk),i)try{s.Iu=await n.onListen(r)}catch(o){const a=wv(o,`Initialization of query '${Zl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&Uu(n)}async function Rk(t,e){const n=ue(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Dk(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&Uu(n)}function Pk(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Uu(t){t.Tu.forEach(e=>{e.next()})}class Mk{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $r(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=$r.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class Ev{constructor(e){this.key=e}}class Tv{constructor(e){this.key=e}}class Lk{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=le(),this.mutatedKeys=le(),this.Lu=Qg(e),this.Uu=new xr(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new fd,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),p=Au(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let b=!1;f&&p?f.data.isEqual(p.data)?v!==w&&(r.track({type:3,doc:p}),b=!0):this.Qu(f,p)||(r.track({type:2,doc:p}),b=!0,(l&&this.Lu(p,l)>0||c&&this.Lu(p,c)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),b=!0):f&&!p&&(r.track({type:1,doc:f}),b=!0,(l||c)&&(a=!0)),b&&(p?(o=o.add(p),s=w?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((c,u)=>function(h,f){const p=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return p(h)-p(f)}(c.type,u.type)||this.Lu(c.doc,u.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,l=a!==this.$u;return this.$u=a,s.length!==0||l?{snapshot:new $r(this.query,e.Uu,i,s,e.mutatedKeys,a===0,l,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new fd,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=le(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new Tv(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new Ev(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=le();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return $r.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Fk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Uk{constructor(e){this.key=e,this.Xu=!1}}class $k{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Qr(a=>Xg(a),la),this.ec=new Map,this.nc=new Set,this.sc=new $e(q.comparator),this.ic=new Map,this.rc=new Nu,this.oc={},this.uc=new Map,this.cc=Ur.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function Bk(t,e){const n=Wk(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await dk(n.localStore,nn(e));n.isPrimaryClient&&vv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Vk(n,e,r,a==="current")}return i}async function Vk(t,e,n,r){t.hc=(u,h,f)=>async function(p,v,w,b){let g=v.view.Ku(w);g.Mi&&(g=await ad(p.localStore,v.query,!1).then(({documents:k})=>v.view.Ku(k,g)));const T=b&&b.targetChanges.get(v.targetId),x=v.view.applyChanges(g,p.isPrimaryClient,T);return pd(p,v.targetId,x.zu),x.snapshot}(t,u,h,f);const i=await ad(t.localStore,e,!0),s=new Lk(e,i.ji),o=s.Ku(i.documents),a=us.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);pd(t,n,l.zu);const c=new Fk(e,n,s);return t.tc.set(e,c),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),l.snapshot}async function jk(t,e){const n=ue(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!la(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await rc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),yv(n.remoteStore,r.targetId),ic(n,r.targetId)}).catch(Tu)):(ic(n,r.targetId),await rc(n.localStore,r.targetId,!0))}async function Iv(t,e){const n=ue(t);try{const r=await hk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(Oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?Oe(o.Xu):i.removedDocuments.size>0&&(Oe(o.Xu),o.Xu=!1))}),await kv(n,r,e)}catch(r){await Tu(r)}}function dd(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ue(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Eu(o)&&(l=!0)}),l&&Uu(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zk(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new $e(q.comparator);o=o.insert(s,ze.newNoDocument(s,re.min()));const a=le().add(s),l=new ha(re.min(),new Map,new De(fe),o,a);await Iv(r,l),r.sc=r.sc.remove(s),r.ic.delete(e),$u(r)}else await rc(r.localStore,e,!1).then(()=>ic(r,e,n)).catch(Tu)}function ic(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||Sv(t,r)})}function Sv(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(yv(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),$u(t))}function pd(t,e,n){for(const r of n)r instanceof Ev?(t.rc.addReference(r.key,e),Hk(t,r)):r instanceof Tv?($("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||Sv(t,r.key)):ne()}function Hk(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||($("SyncEngine","New document in limbo: "+n),t.nc.add(r),$u(t))}function $u(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new q(ke.fromString(e)),r=t.cc.next();t.ic.set(r,new Uk(n)),t.sc=t.sc.insert(n,r),vv(t.remoteStore,new Xn(nn(Yg(n.path)),r,2,Iu.ot))}}async function kv(t,e,n){const r=ue(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,l)=>{o.push(r.hc(l,e,n).then(c=>{if(c){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),i.push(c);const u=Du.Vi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,l){const c=ue(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(l,h=>S.forEach(h.Pi,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>S.forEach(h.vi,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!cs(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.$i.get(h),p=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(p);c.$i=c.$i.insert(h,v)}}}(r.localStore,s))}async function qk(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await dv(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new W(N.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await kv(n,r.Ki)}}function Kk(t,e){const n=ue(t),r=n.ic.get(e);if(r&&r.Xu)return le().add(r.key);{let i=le();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function Wk(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Iv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zk.bind(null,e),e.Zu.Go=Dk.bind(null,e.eventManager),e.Zu.lc=Pk.bind(null,e.eventManager),e}class Gk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=mv(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return uk(this.persistence,new lk,e.initialUser,this.wt)}_c(e){return new ok(Ru.Os,this.wt)}dc(e){return new mk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qk.bind(null,this.syncEngine),await Ak(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ok}createDatastore(e){const n=mv(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new bk(i));var i;return function(s,o,a,l){return new Ek(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>dd(this.syncEngine,a,0),o=cd.V()?new cd:new gk,new Ik(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,c){const u=new $k(r,i,s,o,a,l);return c&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ue(e);$("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await hs(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class Xk{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):tn("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Qk{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=jI.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jk(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dv(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Zk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eC(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>hd(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>hd(e.remoteStore,s)),t.onlineComponents=e}async function eC(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await Jk(t,new Gk)),t.offlineComponents}async function tC(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await Zk(t,new Yk)),t.onlineComponents}async function nC(t){const e=await tC(t),n=e.eventManager;return n.onListen=Bk.bind(null,e.syncEngine),n.onUnlisten=jk.bind(null,e.syncEngine),n}function rC(t,e,n={}){const r=new Wn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const c=new Xk({next:h=>{s.enqueueAndForget(()=>Rk(i,u)),h.fromCache&&a.source==="server"?l.reject(new W(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Mk(o,c,{includeMetadataChanges:!0,Du:!0});return Nk(i,u)}(await nC(t),t.asyncQueue,e,n,r)),r.promise}const md=new Map;/**
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
 */function iC(t,e,n){if(!n)throw new W(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sC(t,e,n,r){if(e===!0&&r===!0)throw new W(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gd(t){if(q.isDocumentKey(t))throw new W(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oC(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function vd(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oC(t);throw new W(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class yd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new W(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,sC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Cv{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yd({}),this._settingsFrozen=!1,e instanceof Lr?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new W(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lr(i.options.projectId)}(e))}get app(){if(!this._app)throw new W(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new MI;switch(n.type){case"gapi":const r=n.client;return Oe(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new UI(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new W(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=md.get(e);n&&($("ComponentProvider","Removing Datastore"),md.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Zr{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zr(this.firestore,e,this._key)}}class da{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new da(this.firestore,e,this._query)}}class Or extends da{constructor(e,n,r){super(e,n,Yg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zr(this.firestore,null,new q(e))}withConverter(e){return new Or(this.firestore,e,this._path)}}function pa(t,e,...n){if(t=qr(t),iC("collection","path",e),t instanceof Cv){const r=ke.fromString(e,...n);return gd(r),new Or(t,null,r)}{if(!(t instanceof Zr||t instanceof Or))throw new W(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return gd(r),new Or(t.firestore,null,r)}}/**
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
 */class aC{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new gv(this,"async_queue_retry"),this.Kc=()=>{const n=Xa();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Xa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Xa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Wn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!cs(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw tn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=Fu.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&ne()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Av extends Cv{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new aC,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||xv(this),this._firestoreClient.terminate()}}function lC(t,e){const n=Xi(t,"firestore");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ri(i,e))return r;throw new W(N.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e})}function cC(t=Vo()){return Xi(t,"firestore").getImmediate()}function uC(t){return t._firestoreClient||xv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xv(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new QI(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Qk(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class Ov{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _o{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _o(We.fromBase64String(e))}catch(n){throw new W(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _o(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hC{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}const fC=new RegExp("[~\\*/\\[\\]]");function dC(t,e,n){if(e.search(fC)>=0)throw bd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ov(...e.split("."))._internalPath}catch{throw bd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new W(N.INVALID_ARGUMENT,a+t+l)}/**
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
 */class Nv{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Zr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Rv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pC extends Nv{data(){return super.data()}}function Rv(t,e){return typeof e=="string"?dC(t,e):e instanceof Ov?e._internalPath:e._delegate._internalPath}/**
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
 */class Cs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mC extends Nv{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Rv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hs extends mC{data(e={}){return super.data(e)}}class gC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Cs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Hs(this._firestore,this._userDataWriter,r.key,r,new Cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Hs(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Cs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Hs(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Cs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:vC(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
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
 */function yC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class bC{convertValue(e,n="none"){switch(ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){const r={};return sa(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new hC(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zi(e));default:return null}}convertTimestamp(e){const n=Cn(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);Oe(fv(r));const i=new Lr(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||tn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}class _C extends bC{constructor(e){super(),this.firestore=e}convertBytes(e){return new _o(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Zr(this.firestore,null,n)}}function ma(t){t=vd(t,da);const e=vd(t.firestore,Av),n=uC(e),r=new _C(e);return yC(t._query),rC(n,t._query).then(i=>new gC(e,r,t,i))}(function(t,e=!0){(function(n){Xr=n})(Kr),tr(new Sn("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Av(i,new LI(n.getProvider("auth-internal")),new BI(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Mt(Vf,"3.4.14",t),Mt(Vf,"3.4.14","esm2017")})();/**
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
 */const Dv="firebasestorage.googleapis.com",wC="storageBucket",EC=2*60*1e3,TC=10*60*1e3;/**
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
 */class Vt extends Bt{constructor(e,n){super(Qa(e),`Firebase Storage: ${n} (${Qa(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Vt.prototype)}_codeEquals(e){return Qa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Qa(t){return"storage/"+t}function IC(){const t="An unknown error occurred, please check the error payload for server response.";return new Vt("unknown",t)}function SC(){return new Vt("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function kC(){return new Vt("canceled","User canceled the upload/download.")}function CC(t){return new Vt("invalid-url","Invalid URL '"+t+"'.")}function AC(t){return new Vt("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function _d(t){return new Vt("invalid-argument",t)}function Pv(){return new Vt("app-deleted","The Firebase app was deleted.")}function xC(t){return new Vt("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class St{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=St.makeFromUrl(e,n)}catch{return new St(e,"")}if(r.path==="")return r;throw AC(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(k){k.path_=decodeURIComponent(k.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),v={bucket:1,path:3},w=n===Dv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",g=new RegExp(`^https?://${w}/${i}/${b}`,"i"),x=[{regex:a,indices:l,postModify:s},{regex:p,indices:v,postModify:c},{regex:g,indices:{bucket:1,path:2},postModify:c}];for(let k=0;k<x.length;k++){const z=x[k],M=z.regex.exec(e);if(M){const ie=M[z.indices.bucket];let F=M[z.indices.path];F||(F=""),r=new St(ie,F),z.postModify(r);break}}if(r==null)throw CC(e);return r}}class OC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function NC(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...b){c||(c=!0,e.apply(null,b))}function h(b){i=setTimeout(()=>{i=null,t(p,l())},b)}function f(){s&&clearTimeout(s)}function p(b,...g){if(c){f();return}if(b){f(),u.call(null,b,...g);return}if(l()||o){f(),u.call(null,b,...g);return}r<64&&(r*=2);let x;a===1?(a=2,x=0):x=(r+Math.random())*1e3,h(x)}let v=!1;function w(b){v||(v=!0,f(),!c&&(i!==null?(b||(a=2),clearTimeout(i),h(0)):b||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function RC(t){t(!1)}/**
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
 */function DC(t){return t!==void 0}function wd(t,e,n,r){if(r<e)throw _d(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _d(`Invalid value for '${t}'. Expected ${n} or less.`)}function PC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var wo;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(wo||(wo={}));/**
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
 */class MC{constructor(e,n,r,i,s,o,a,l,c,u,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new As(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===wo.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const u=s.getErrorCode()===wo.ABORT;r(!1,new As(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new As(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());DC(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=IC();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Pv():kC();o(l)}else{const l=SC();o(l)}};this.canceled_?n(!1,new As(!1,null,!0)):this.backoffId_=NC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&RC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class As{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function LC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function FC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function UC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function $C(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function BC(t,e,n,r,i,s){const o=PC(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return UC(l,e),LC(l,n),FC(l,s),$C(l,r),new MC(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
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
 */function VC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function jC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Eo{constructor(e,n){this._service=e,n instanceof St?this._location=n:this._location=St.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Eo(e,n)}get root(){const e=new St(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jC(this._location.path)}get storage(){return this._service}get parent(){const e=VC(this._location.path);if(e===null)return null;const n=new St(this._location.bucket,e);return new Eo(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw xC(e)}}function Ed(t,e){const n=e==null?void 0:e[wC];return n==null?null:St.makeFromBucketSpec(n,t)}class zC{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Dv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=EC,this._maxUploadRetryTime=TC,this._requests=new Set,i!=null?this._bucket=St.makeFromBucketSpec(i,this._host):this._bucket=Ed(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=St.makeFromBucketSpec(this._url,e):this._bucket=Ed(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){wd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){wd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Eo(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new OC(Pv());{const s=BC(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Td="@firebase/storage",Id="0.9.9";/**
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
 */const Mv="storage";function HC(t=Vo(),e){return t=qr(t),Xi(t,Mv).getImmediate({identifier:e})}function qC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new zC(n,r,i,e,Kr)}function KC(){tr(new Sn(Mv,qC,"PUBLIC").setMultipleInstances(!0)),Mt(Td,Id,""),Mt(Td,Id,"esm2017")}KC();const WC={apiKey:"AIzaSyBZqhlEk13_PeiPGAyKfFAfHyj-MATUGZ4",authDomain:"portfolio-35dfd.firebaseapp.com",databaseURL:"https://portfolio-35dfd.firebaseio.com",projectId:"portfolio-35dfd",storageBucket:"portfolio-35dfd.appspot.com",messagingSenderId:"632417181065",appId:"1:632417181065:web:6d18b76dc4e23443ed9558"},ga="tAD6hG0KxDMM1OiiRmfhRgXyY1d2";if(!A1().length){let t=C1(WC);lC(t,{experimentalAutoDetectLongPolling:!0})}const Bu=Vo();CT(Bu);const va=cC(Bu);HC(Bu);async function GC(){return new Promise((t,e)=>{ma(pa(va,"v2",ga,"taglines")).then(n=>{const r=[];n.docs.map(i=>{r.push(i.data())}),t(r)}).catch(n=>{e(n)})})}const ct=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},YC={props:{label:String}},XC={class:"fish-tag","aria-label":"tag"};function QC(t,e,n,r,i,s){return ve(),Ce("div",XC,At(n.label.toUpperCase()),1)}const JC=ct(YC,[["render",QC],["__scopeId","data-v-971cadb1"]]);function sc(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Sd(t,e){return Math.random()*(e-t+1)+t}const ZC={props:["skills"],emits:["onSentenceChanged","onWaitingForNextSentence","onStartTypingNextSentence"],data(){return{typingDelayMin:10,typingDelayMax:150,erasingDelay:20,newSentenceDelay:3e3,charIndex:0,currentSkillIndex:0,isTyping:!0,isTypingClass:"typing",typedOutText:"",displayedTag:""}},methods:{buildSentence(t){return`${t.verb} ${t.adj} ${t.noun} ${t.connection} ${t.tools.slice(1).reduce((e,n)=>e+", "+n,t.tools[0])}.`},startTyping(){this.$emit("onStartTypingNextSentence");let t=this.skills[this.currentSkillIndex],e=this.buildSentence(t);this.$emit("onSentenceChanged",t),this.isTyping=this.charIndex<e.length,this.isTyping?(this.typedOutText+=e[this.charIndex],this.charIndex++,setTimeout(this.startTyping,sc(this.typingDelayMin,this.typingDelayMax))):setTimeout(this.startErasing,this.newSentenceDelay)},startErasing(){let t=this.skills[this.currentSkillIndex],e=this.buildSentence(t);this.isTyping=this.charIndex>0,this.isTyping?(this.typedOutText=e.substring(0,this.charIndex-1),this.charIndex--,setTimeout(this.startErasing,this.erasingDelay)):(this.currentSkillIndex++,this.currentSkillIndex>=this.skills.length&&(this.currentSkillIndex=0),this.$emit("onWaitingForNextSentence"),setTimeout(this.startTyping,this.typingDelayMax+1100))}},created(){this.skills.length>0&&setTimeout(this.startTyping,this.newSentenceDelay+250)},watch:{skills:{immediate:!0,handler(t){t.length>0&&setTimeout(this.startTyping,this.newSentenceDelay+250)}}}},eA={class:"typewriter drop-shadow-dark"},tA={"aria-label":"skills shown as typewritter text"},nA=kc(" I "),rA={class:"typed-text"};function iA(t,e,n,r,i,s){return ve(),Ce("div",eA,[H("p",tA,[nA,H("span",rA,At(this.typedOutText),1),H("span",{class:Br(["cursor",[i.isTyping?i.isTypingClass:""]])},"\xA0",2)])])}const sA=ct(ZC,[["render",iA],["__scopeId","data-v-858daca8"]]);/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var Lv=function(e){return e!=null&&typeof e=="object"&&Array.isArray(e)===!1};/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var oA=Lv;function kd(t){return oA(t)===!0&&Object.prototype.toString.call(t)==="[object Object]"}var aA=function(e){var n,r;return!(kd(e)===!1||(n=e.constructor,typeof n!="function")||(r=n.prototype,kd(r)===!1)||r.hasOwnProperty("isPrototypeOf")===!1)},lA={}.toString,cA=Array.isArray||function(t){return lA.call(t)=="[object Array]"};/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var uA=cA,hA=function(e){return e!=null&&typeof e=="object"&&uA(e)===!1};/*!
 * has-values <https://github.com/jonschlinkert/has-values>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var fA=function(e,n){if(e==null)return!1;if(typeof e=="boolean")return!0;if(typeof e=="number")return!(e===0&&n===!0);if(e.length!==void 0)return e.length!==0;for(var r in e)if(e.hasOwnProperty(r))return!0;return!1};/*!
 * get-value <https://github.com/jonschlinkert/get-value>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var dA=function(t,e,n,r,i){if(!pA(t)||!e)return t;if(e=xs(e),n&&(e+="."+xs(n)),r&&(e+="."+xs(r)),i&&(e+="."+xs(i)),e in t)return t[e];for(var s=e.split("."),o=s.length,a=-1;t&&++a<o;){for(var l=s[a];l[l.length-1]==="\\";)l=l.slice(0,-1)+"."+s[++a];t=t[l]}return t};function pA(t){return t!==null&&(typeof t=="object"||typeof t=="function")}function xs(t){return t?Array.isArray(t)?t.join("."):t:""}/*!
 * has-value <https://github.com/jonschlinkert/has-value>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */var mA=hA,Cd=fA,gA=dA,vA=function(t,e,n){return mA(t)?Cd(gA(t,e),n):Cd(t,e)};/*!
 * unset-value <https://github.com/jonschlinkert/unset-value>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */var yA=Lv,bA=vA,_A=function(e,n){if(!yA(e))throw new TypeError("expected an object.");if(e.hasOwnProperty(n))return delete e[n],!0;if(bA(e,n)){for(var r=n.split("."),i=r.pop();r.length&&r[r.length-1].slice(-1)==="\\";)i=r.pop().slice(0,-1)+"."+i;for(;r.length;)e=e[n=r.shift()];return delete e[i]}return!0},wA=aA,EA=_A,TA=function t(e,n){if(typeof e>"u")return{};if(Array.isArray(e)){for(var r=0;r<e.length;r++)e[r]=t(e[r],n);return e}if(!wA(e)||(typeof n=="string"&&(n=[n]),!Array.isArray(n)))return e;for(var i=0;i<n.length;i++)EA(e,n[i]);for(var s in e)e.hasOwnProperty(s)&&(e[s]=t(e[s],n));return e};/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var IA=function(t){return t!=null&&(Fv(t)||SA(t)||!!t._isBuffer)};function Fv(t){return!!t.constructor&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function SA(t){return typeof t.readFloatLE=="function"&&typeof t.slice=="function"&&Fv(t.slice(0,0))}var kA=IA,CA=Object.prototype.toString,AA=function(e){if(typeof e>"u")return"undefined";if(e===null)return"null";if(e===!0||e===!1||e instanceof Boolean)return"boolean";if(typeof e=="string"||e instanceof String)return"string";if(typeof e=="number"||e instanceof Number)return"number";if(typeof e=="function"||e instanceof Function)return"function";if(typeof Array.isArray<"u"&&Array.isArray(e))return"array";if(e instanceof RegExp)return"regexp";if(e instanceof Date)return"date";var n=CA.call(e);return n==="[object RegExp]"?"regexp":n==="[object Date]"?"date":n==="[object Arguments]"?"arguments":n==="[object Error]"?"error":kA(e)?"buffer":n==="[object Set]"?"set":n==="[object WeakSet]"?"weakset":n==="[object Map]"?"map":n==="[object WeakMap]"?"weakmap":n==="[object Symbol]"?"symbol":n==="[object Int8Array]"?"int8array":n==="[object Uint8Array]"?"uint8array":n==="[object Uint8ClampedArray]"?"uint8clampedarray":n==="[object Int16Array]"?"int16array":n==="[object Uint16Array]"?"uint16array":n==="[object Int32Array]"?"int32array":n==="[object Uint32Array]"?"uint32array":n==="[object Float32Array]"?"float32array":n==="[object Float64Array]"?"float64array":"object"},Uv={exports:{}};(function(t){(function(){function e(n,r){if(typeof r!="function")return n;var i={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[r(s,n[s])||s]=n[s]);return i}t.exports?t.exports=e:window.rename=e})()})(Uv);/*!
 * deep-rename-keys <https://github.com/jonschlinkert/deep-rename-keys>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */var Ja=AA,xA=Uv.exports,OA=function t(e,n){var r=Ja(e);if(r!=="object"&&r!=="array")throw new Error("expected an object");var i=[];r==="object"&&(e=xA(e,n),i={});for(var s in e)if(e.hasOwnProperty(s)){var o=e[s];Ja(o)==="object"||Ja(o)==="array"?i[s]=t(o,n):i[s]=o}return i},Vu={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(o,a,l){this.fn=o,this.context=a,this.once=l||!1}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var a=[],l,c;if(this._eventsCount===0)return a;for(c in l=this._events)e.call(l,c)&&a.push(n?c.slice(1):c);return Object.getOwnPropertySymbols?a.concat(Object.getOwnPropertySymbols(l)):a},s.prototype.listeners=function(a,l){var c=n?n+a:a,u=this._events[c];if(l)return!!u;if(!u)return[];if(u.fn)return[u.fn];for(var h=0,f=u.length,p=new Array(f);h<f;h++)p[h]=u[h].fn;return p},s.prototype.emit=function(a,l,c,u,h,f){var p=n?n+a:a;if(!this._events[p])return!1;var v=this._events[p],w=arguments.length,b,g;if(v.fn){switch(v.once&&this.removeListener(a,v.fn,void 0,!0),w){case 1:return v.fn.call(v.context),!0;case 2:return v.fn.call(v.context,l),!0;case 3:return v.fn.call(v.context,l,c),!0;case 4:return v.fn.call(v.context,l,c,u),!0;case 5:return v.fn.call(v.context,l,c,u,h),!0;case 6:return v.fn.call(v.context,l,c,u,h,f),!0}for(g=1,b=new Array(w-1);g<w;g++)b[g-1]=arguments[g];v.fn.apply(v.context,b)}else{var T=v.length,x;for(g=0;g<T;g++)switch(v[g].once&&this.removeListener(a,v[g].fn,void 0,!0),w){case 1:v[g].fn.call(v[g].context);break;case 2:v[g].fn.call(v[g].context,l);break;case 3:v[g].fn.call(v[g].context,l,c);break;case 4:v[g].fn.call(v[g].context,l,c,u);break;default:if(!b)for(x=1,b=new Array(w-1);x<w;x++)b[x-1]=arguments[x];v[g].fn.apply(v[g].context,b)}}return!0},s.prototype.on=function(a,l,c){var u=new i(l,c||this),h=n?n+a:a;return this._events[h]?this._events[h].fn?this._events[h]=[this._events[h],u]:this._events[h].push(u):(this._events[h]=u,this._eventsCount++),this},s.prototype.once=function(a,l,c){var u=new i(l,c||this,!0),h=n?n+a:a;return this._events[h]?this._events[h].fn?this._events[h]=[this._events[h],u]:this._events[h].push(u):(this._events[h]=u,this._eventsCount++),this},s.prototype.removeListener=function(a,l,c,u){var h=n?n+a:a;if(!this._events[h])return this;if(!l)return--this._eventsCount===0?this._events=new r:delete this._events[h],this;var f=this._events[h];if(f.fn)f.fn===l&&(!u||f.once)&&(!c||f.context===c)&&(--this._eventsCount===0?this._events=new r:delete this._events[h]);else{for(var p=0,v=[],w=f.length;p<w;p++)(f[p].fn!==l||u&&!f[p].once||c&&f[p].context!==c)&&v.push(f[p]);v.length?this._events[h]=v.length===1?v[0]:v:--this._eventsCount===0?this._events=new r:delete this._events[h]}return this},s.prototype.removeAllListeners=function(a){var l;return a?(l=n?n+a:a,this._events[l]&&(--this._eventsCount===0?this._events=new r:delete this._events[l])):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prototype.setMaxListeners=function(){return this},s.prefixed=n,s.EventEmitter=s,t.exports=s})(Vu);function Q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var NA=Vu.exports,si=function(){},te={data:"state-data",cdata:"state-cdata",tagBegin:"state-tag-begin",tagName:"state-tag-name",tagEnd:"state-tag-end",attributeNameStart:"state-attribute-name-start",attributeName:"state-attribute-name",attributeNameEnd:"state-attribute-name-end",attributeValueBegin:"state-attribute-value-begin",attributeValue:"state-attribute-value"},K={lt:"action-lt",gt:"action-gt",space:"action-space",equal:"action-equal",quote:"action-quote",slash:"action-slash",char:"action-char",error:"action-error"},Ie={text:"text",openTag:"open-tag",closeTag:"close-tag",attributeName:"attribute-name",attributeValue:"attribute-value"},RA={" ":K.space,"	":K.space,"\n":K.space,"\r":K.space,"<":K.lt,">":K.gt,'"':K.quote,"'":K.quote,"=":K.equal,"/":K.slash},DA=function(e){return RA[e]||K.char},PA=function(e){var n,r,i,s,o,a,l,c,u,h;e=Object.assign({debug:!1},e);var f=new NA,p=te.data,v="",w="",b="",g="",T="",x="",k=function(ie,F){if(!(w[0]==="?"||w[0]==="!")){var Z={type:ie,value:F};e.debug&&console.log("emit:",Z),f.emit("data",Z)}};f.stateMachine=(h={},Q(h,te.data,(n={},Q(n,K.lt,function(){v.trim()&&k(Ie.text,v),w="",T=!1,p=te.tagBegin}),Q(n,K.char,function(M){v+=M}),n)),Q(h,te.cdata,Q({},K.char,function(M){v+=M,v.substr(-3)==="]]>"&&(k(Ie.text,v.slice(0,-3)),v="",p=te.data)})),Q(h,te.tagBegin,(r={},Q(r,K.space,si),Q(r,K.char,function(M){w=M,p=te.tagName}),Q(r,K.slash,function(){w="",T=!0}),r)),Q(h,te.tagName,(i={},Q(i,K.space,function(){T?p=te.tagEnd:(p=te.attributeNameStart,k(Ie.openTag,w))}),Q(i,K.gt,function(){k(T?Ie.closeTag:Ie.openTag,w),v="",p=te.data}),Q(i,K.slash,function(){p=te.tagEnd,k(Ie.openTag,w)}),Q(i,K.char,function(M){w+=M,w==="![CDATA["&&(p=te.cdata,v="",w="")}),i)),Q(h,te.tagEnd,(s={},Q(s,K.gt,function(){k(Ie.closeTag,w),v="",p=te.data}),Q(s,K.char,si),s)),Q(h,te.attributeNameStart,(o={},Q(o,K.char,function(M){b=M,p=te.attributeName}),Q(o,K.gt,function(){v="",p=te.data}),Q(o,K.space,si),Q(o,K.slash,function(){T=!0,p=te.tagEnd}),o)),Q(h,te.attributeName,(a={},Q(a,K.space,function(){p=te.attributeNameEnd}),Q(a,K.equal,function(){k(Ie.attributeName,b),p=te.attributeValueBegin}),Q(a,K.gt,function(){g="",k(Ie.attributeName,b),k(Ie.attributeValue,g),v="",p=te.data}),Q(a,K.slash,function(){T=!0,g="",k(Ie.attributeName,b),k(Ie.attributeValue,g),p=te.tagEnd}),Q(a,K.char,function(M){b+=M}),a)),Q(h,te.attributeNameEnd,(l={},Q(l,K.space,si),Q(l,K.equal,function(){k(Ie.attributeName,b),p=te.attributeValueBegin}),Q(l,K.gt,function(){g="",k(Ie.attributeName,b),k(Ie.attributeValue,g),v="",p=te.data}),Q(l,K.char,function(M){g="",k(Ie.attributeName,b),k(Ie.attributeValue,g),b=M,p=te.attributeName}),l)),Q(h,te.attributeValueBegin,(c={},Q(c,K.space,si),Q(c,K.quote,function(M){x=M,g="",p=te.attributeValue}),Q(c,K.gt,function(){g="",k(Ie.attributeValue,g),v="",p=te.data}),Q(c,K.char,function(M){x="",g=M,p=te.attributeValue}),c)),Q(h,te.attributeValue,(u={},Q(u,K.space,function(M){x?g+=M:(k(Ie.attributeValue,g),p=te.attributeNameStart)}),Q(u,K.quote,function(M){x===M?(k(Ie.attributeValue,g),p=te.attributeNameStart):g+=M}),Q(u,K.gt,function(M){x?g+=M:(k(Ie.attributeValue,g),v="",p=te.data)}),Q(u,K.slash,function(M){x?g+=M:(k(Ie.attributeValue,g),T=!0,p=te.tagEnd)}),Q(u,K.char,function(M){g+=M}),u)),h);var z=function(ie){e.debug&&console.log(p,ie);var F=f.stateMachine[p],Z=F[DA(ie)]||F[K.error]||F[K.char];Z(ie)};return f.write=function(M){for(var ie=M.length,F=0;F<ie;F++)z(M[F])},f},MA={State:te,Action:K,Type:Ie,create:PA},LA=Vu.exports,$v=MA,oi=$v.Type,ju={element:"element",text:"text"},Za=function(e){return Object.assign({name:"",type:ju.element,value:"",parent:null,attributes:{},children:[]},e)},Bv=function(e){e=Object.assign({stream:!1,parentNodes:!0,doneEvent:"done",tagPrefix:"tag:",emitTopLevelOnly:!1,debug:!1},e);var n=void 0,r=void 0,i=void 0,s=void 0,o=new LA,a=function(c){switch(c.type){case oi.openTag:if(i===null)i=r,i.name=c.value;else{var u=Za({name:c.value,parent:i});i.children.push(u),i=u}break;case oi.closeTag:var h=i.parent;if(e.parentNodes||(i.parent=null),i.name!==c.value)break;e.stream&&h===r&&(r.children=[],i.parent=null),(!e.emitTopLevelOnly||h===r)&&(o.emit(e.tagPrefix+i.name,i),o.emit("tag",i.name,i)),i===r&&(n.removeAllListeners("data"),o.emit(e.doneEvent,i),r=null),i=h;break;case oi.text:i&&i.children.push(Za({type:ju.text,value:c.value,parent:e.parentNodes?i:null}));break;case oi.attributeName:s=c.value,i.attributes[s]="";break;case oi.attributeValue:i.attributes[s]=c.value;break}};return o.reset=function(){n=$v.create({debug:e.debug}),n.on("data",a),r=Za(),i=null,s="",o.parse=n.write},o.reset(),o},FA=function(e,n){n=Object.assign({},n,{stream:!1,tagPrefix:":"});var r=Bv(n),i=void 0;return r.on("done",function(s){i=s}),r.parse(e),i},UA={parseSync:FA,create:Bv,NodeType:ju},$A=function(e){var n=UA.parseSync("<root>".concat(e,"</root>"),{parentNodes:!1}),r=n.children&&n.children.length>0&&n.children.every(function(i){return i.name==="svg"});if(r)return n.children.length===1?n.children[0]:n.children;throw Error("nothing to parse")},BA=function(e){return TA(e,["parent"])},VA=function(e){return OA(e,function(n){return zA(n)?n:jA(n)})},jA=function(e){return e.replace(/[-|:]([a-z])/gi,function(n,r){return r.toUpperCase()})},zA=function(e){return/^(data|aria)(-\w+)/.test(e)},HA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transformNode,i=r===void 0?function(l){return l}:r,s=n.camelcase,o=s===void 0?!1:s,a=function(c){var u;return u=BA(c),u=i(u),o&&(u=VA(u)),u};return a($A(e))};const qA=function(t){return t.split(";").reduce((e,n)=>{let[r,i]=n.split(":");return r==="fill"&&i!=="none"&&(i="currentColor"),r==="stroke"&&i!=="none"&&(i="currentColor"),e[r]=i,e},{})};function KA(t,e){const n=HA(e);n.attributes.width="1em",n.attributes.height="1em",n.attributes.xmlns="http://www.w3.org/2000/svg";const{multicolor:r,pathfill:i,twotone:s}=n.attributes,o=function(l){const{fill:c,stroke:u,style:h}=l,f=!s&&c&&["none","white","#fff"].includes(c)===!1;if(s==="true"&&c===void 0?l.fill="currentColor":(f||i!==void 0)&&(l.fill=t.color===void 0?"currentColor":t.color),u!==void 0&&u!=="none"&&(l.stroke=t.color===void 0?"currentColor":t.color),h!==void 0){const p=qA(h);l={...l,...p},l.style=""}return l},a=function(l){const{name:c,attributes:u,children:h}=l;if(r!=="true"&&(l.attributes=o(u)),Array.isArray(h)){const{attributes:f}=l;return c==="title"?Ir(c,f):Ir(c,f,h.map(a))}return Ir(c,l.attributes)};return a(n)}const WA=t=>KA(t,'<svg width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>');const GA={components:{FeLoader:WA},props:["label","active"]},YA={key:0,class:"fish-loader"},XA={key:0};function QA(t,e,n,r,i,s){const o=Ye("FeLoader");return ve(),gi(Ac,null,{default:np(()=>[n.active?(ve(),Ce("div",YA,[ce(o,{class:"loader-icon"}),n.label?(ve(),Ce("span",XA,At(n.label),1)):ph("",!0)])):ph("",!0)]),_:1})}const Vv=ct(GA,[["render",QA]]);const JA={components:{FishTag:JC,FishTypeWriter:sA,FishLoader:Vv},created(){this._getTaglines()},data(){return{displayedTag:"",isWaiting:!0,tagShowClass:"show",tagHideClass:"hide",skills:[],isLoading:!1}},methods:{onTypeWriterSentenceChanged(t){this.displayedTag="#"+t.category},async _getTaglines(){try{this.isLoading=!0,this.skills=await GC()}catch(t){alert(t.message)}finally{this.isLoading=!1}}}},ZA={class:"skills-overview"};function ex(t,e,n,r,i,s){const o=Ye("FishLoader"),a=Ye("FishTypeWriter"),l=Ye("FishTag");return ve(),Ce("div",ZA,[ce(o,{active:i.isLoading,label:"Fetching skills summary from database..."},null,8,["active"]),ce(a,{class:"typewriter",skills:i.skills,"aria-label":"skill overview display as animated typewritter text",onOnSentenceChanged:s.onTypeWriterSentenceChanged,onOnStartTypingNextSentence:e[0]||(e[0]=c=>this.isWaiting=!1),onOnWaitingForNextSentence:e[1]||(e[1]=c=>this.isWaiting=!0)},null,8,["skills","onOnSentenceChanged"]),ce(l,{"aria-label":"skill overview category",class:Br(["fish-tag drop-shadow-dark",[i.isWaiting?i.tagHideClass:i.tagShowClass]]),label:i.displayedTag},null,8,["class","label"])])}const tx=ct(JA,[["render",ex],["__scopeId","data-v-8df90b19"]]);const nx={props:["label"]},rx={class:"hot","aria-label":"hot tag"};function ix(t,e,n,r,i,s){return ve(),Ce("div",rx,At(n.label||"HOT"),1)}const sx=ct(nx,[["render",ix],["__scopeId","data-v-62f90d3d"]]);const ox={components:{FishHot:sx},props:["project"],data(){return{interactionRemovalDelay:2e3,backgroundImgUrl:""}},methods:{directTo(){window.open(this.project.link,"__blank")}}},ax=["src"],lx={class:"bottom"},cx={class:"title","aria-label":"project title"},ux={class:"title-subtag"},hx=["src"],fx={class:"details","aria-label":"project details"};function dx(t,e,n,r,i,s){const o=Ye("FishHot");return ve(),Ce("div",{ref:"fishCardSimple",class:"fish-card-simple hover-effect drop-shadow-dark",onClick:e[0]||(e[0]=(...a)=>s.directTo&&s.directTo(...a))},[sh(ce(o,{label:"HOT"},null,512),[[Ah,n.project.hot]]),H("img",{class:"image",src:n.project.imgUrl,alt:"project thumbnail"},null,8,ax),H("div",lx,[H("div",cx,[kc(At(n.project.title)+" ",1),sh(H("span",ux,[H("img",{alt:"Static Badge",src:n.project.titleTag},null,8,hx)],512),[[Ah,n.project.titleTag!==void 0]])]),H("div",fx,At(n.project.details),1)])],512)}const px=ct(ox,[["render",dx],["__scopeId","data-v-d95917e3"]]);const mx={props:["label"]},jv=t=>(wc("data-v-7608a16c"),t=t(),Ec(),t),gx={class:"divider-wrapper"},vx=jv(()=>H("div",{class:"divider left"},null,-1)),yx=jv(()=>H("div",{class:"divider right"},null,-1));function bx(t,e,n,r,i,s){return ve(),Ce("div",gx,[vx,H("span",null,At(n.label),1),yx])}const _x=ct(mx,[["render",bx],["__scopeId","data-v-7608a16c"]]);const wx={},Ex=t=>(wc("data-v-59dd664a"),t=t(),Ec(),t),Tx={class:"fish-scroller"},Ix=Ex(()=>H("div",null,[H("span")],-1)),Sx=[Ix];function kx(t,e,n,r,i,s){return ve(),Ce("div",Tx,Sx)}const Cx=ct(wx,[["render",kx],["__scopeId","data-v-59dd664a"]]);const Ax={props:["title","skills"]},xx=t=>(wc("data-v-4bdc030b"),t=t(),Ec(),t),Ox={class:"skill-card drop-shadow-dark"},Nx={class:"card-header","aria-label":"skill category"},Rx={class:"card-body","aria-label":"skills in details"},Dx=xx(()=>H("div",{class:"card-foot"},null,-1));function Px(t,e,n,r,i,s){return ve(),Ce("div",Ox,[H("div",Nx,[H("h1",null,At(n.title.toUpperCase()),1)]),H("div",Rx,[(ve(!0),Ce(Je,null,ci(n.skills,o=>(ve(),Ce("span",{key:o,"aria-label":"individual skill label under the category"},At(o),1))),128))]),Dx])}const Mx=ct(Ax,[["render",Px],["__scopeId","data-v-4bdc030b"]]);const Lx={props:["size","duration"],data(){return{starStyle:{animation:"risingStar 100s linear infinite"},starClassName:"star small"}},created(){let t=parent.innerWidth,e=parent.innerHeight,n=Sd(20,50),r=Sd(0,3),i=sc(0,t);this.starStyle={position:"fixed",animation:`risingStar ${n}s linear infinite`,"animation-delay":`${r}s`,top:`${e}px`,left:`${i}px`};let s=["small","medium","large"],o=sc(0,2),a=s[o];a==="small"?this.starClassName="star small":a==="medium"?this.starClassName="star medium":a==="large"&&(this.starClassName="star large")}};function Fx(t,e,n,r,i,s){return ve(),Ce("div",{class:Br(i.starClassName),style:Qn(i.starStyle)},null,6)}const Ux=ct(Lx,[["render",Fx],["__scopeId","data-v-8391f950"]]);const $x={data(){return{imgUrl:"https://github.com/xmliszt/resources/blob/main/portfolio/avatar.png?raw=true",imgAlt:"No Image",githubUrl:"/blogs"}},methods:{openGithub(){window.open(this.githubUrl)}}},Bx=["src","alt"];function Vx(t,e,n,r,i,s){return ve(),Ce("div",{class:"avatar drop-shadow-light",onClick:e[0]||(e[0]=(...o)=>s.openGithub&&s.openGithub(...o))},[H("img",{"aria-label":"profile image",src:i.imgUrl,alt:i.imgAlt},null,8,Bx)])}const jx=ct($x,[["render",Vx],["__scopeId","data-v-e9bd454b"]]),zx={props:["height"],data(){return{style:{"pointer-events":"none",height:this.height,width:"100%"}}}};function Hx(t,e,n,r,i,s){return ve(),Ce("div",{class:"fish-spacer",style:Qn(i.style)},null,4)}const qx=ct(zx,[["render",Hx]]);const Kx={},Wx={class:"container","aria-label":"campfire animation"},Gx=Rb('<div class="campfire-wrapper" data-v-f50c1894><div class="tree-container-back" data-v-f50c1894><div class="tree-8" data-v-f50c1894></div><div class="tree-9" data-v-f50c1894></div><div class="tree-10" data-v-f50c1894></div></div><div class="rock-container" data-v-f50c1894><div class="rock-big" data-v-f50c1894></div><div class="rock-small" data-v-f50c1894><div class="rock-1" data-v-f50c1894></div><div class="rock-2" data-v-f50c1894></div><div class="rock-3" data-v-f50c1894></div><div class="rock-4" data-v-f50c1894></div></div></div><div class="campfire-container" data-v-f50c1894><div class="smoke-container" data-v-f50c1894><svg data-v-f50c1894><path d="M 150 0 Q 200 100 100 250 C 0 450 120 400 50 600  " data-v-f50c1894></path></svg><div class="fire-container" data-v-f50c1894><div class="flame-1" data-v-f50c1894></div><div class="flame-2" data-v-f50c1894></div><div class="flame-3" data-v-f50c1894></div></div></div><div class="flame-4" data-v-f50c1894></div></div><div class="tree-container-front" data-v-f50c1894><div class="tree-1" data-v-f50c1894></div><div class="tree-2" data-v-f50c1894></div><div class="tree-3" data-v-f50c1894></div><div class="tree-4" data-v-f50c1894></div><div class="tree-5" data-v-f50c1894></div><div class="tree-6" data-v-f50c1894></div><div class="tree-7" data-v-f50c1894></div></div><div class="campfire-footer" data-v-f50c1894><p data-v-f50c1894> Campfire animation based on the work of Dave Chenell &amp; Jackie Zen (jackiezen) </p></div></div>',1),Yx=[Gx];function Xx(t,e){return ve(),Ce("div",Wx,Yx)}const Qx=ct(Kx,[["render",Xx],["__scopeId","data-v-f50c1894"]]);async function Jx(){return new Promise((t,e)=>{ma(pa(va,"v2",ga,"packages")).then(n=>{const r=[];n.docs.map(i=>{r.push(i.data())}),r.sort((i,s)=>i.priority-s.priority),r.sort(i=>{if(i.hot)return-1}),console.log(r),t(r)}).catch(n=>{e(n)})})}async function Zx(){return new Promise((t,e)=>{ma(pa(va,"v2",ga,"skills")).then(n=>{const r=[];n.docs.map(i=>{r.push(i.data())}),r.sort((i,s)=>i.priority-s.priority),t(r)}).catch(n=>{e(n)})})}async function eO(){return new Promise((t,e)=>{ma(pa(va,"v2",ga,"projects")).then(n=>{const r=[];n.docs.map(i=>{r.push(i.data())}),r.sort((i,s)=>{var a,l,c,u;const o=Number((a=s.hot)!=null?a:!1)-Number((l=i.hot)!=null?l:!1);return o===0?((c=i.priority)!=null?c:999)-((u=s.priority)!=null?u:999):o}),t(r)}).catch(n=>{e(n)})})}const tO={components:{FishAvatar:jx,FishStar:Ux,SkillsOverview:tx,FishCardSimple:px,FishDivider:_x,FishScroller:Cx,SkillCard:Mx,FishSpacer:qx,FontAwesomeIcon:mw,BottomCampFire:Qx,FishLoader:Vv},data(){return{isMenuOpen:!1,landingTitle:"Hi \u{1F64C}\u{1F3FB} I'm Li Yuxuan",landingSubtitle:"a software engineer, who loves about creative learning \u{1F393}",authBtnOpacity:1,authBtnHidden:!1,projects:[],scrollerStyle:{opacity:1},parallaxBottomStyle:{position:"fixed",top:"0px",left:"0px",right:"0px",bottom:"0px","z-index":-2,display:"flex"},skills:[],isPackageLoading:!1,isProjectLoading:!1,isSkillLoading:!1}},methods:{toggleMenu(){let t=document.getElementById("menu-body");t.classList.contains("show")||(t.classList.add("show"),this.isMenuOpen=!0)},redirectTo(t){location.href=t},navigateTo(t){location.hash="#"+t},handleMainScroll(){let t=window.scrollY;this.scrollerStyle.opacity=Math.max(0,1-t/200),this.parallaxBottomStyle.top=`${-t*.2}px`,t>300?this.$refs.avatarView.$el.classList.contains("minimized")||(this.$refs.avatarView.$el.classList.add("minimized"),this.$refs.avatarView.$el.classList.toggle("drop-shadow-dark")):(this.$refs.avatarView.$el.classList.remove("minimized"),this.$refs.avatarView.$el.classList.remove("drop-shadow-dark"))},handleMainClicked(t){!document.getElementById("menu-body").contains(t.target)&&!document.getElementById("menu").contains(t.target)&&(document.getElementById("menu-body").classList.remove("show"),this.isMenuOpen=!1)},async loadProjects(){try{this.isProjectLoading=!0,this.projects=await eO()}catch(t){alert(t.message)}finally{this.isProjectLoading=!1}},async loadSkills(){try{this.isSkillLoading=!0,this.skills=await Zx()}catch(t){alert(t.message)}finally{this.isSkillLoading=!1}},async loadPackages(){try{this.isPackageLoading=!0,this.packages=await Jx()}catch(t){alert(t.message)}finally{this.isPackageLoading=!1}}},created(){this.loadPackages(),this.loadProjects(),this.loadSkills()},mounted(){document.addEventListener("scroll",this.handleMainScroll),document.addEventListener("click",this.handleMainClicked)},unmounted(){document.removeEventListener("scroll",this.handleMainScroll),document.removeEventListener("click",this.handleMainClicked)}},nO={id:"top"},rO={class:"menu",id:"menu"},iO={class:"menu-body hide",id:"menu-body"},sO=H("span",{role:"img","aria-label":"Background Sky"},null,-1),oO=[sO],aO={class:"parallax-stars"},lO={class:"parallax-title"},cO={"aria-label":"My greeting to you"},uO={"aria-label":"Subtitle"},hO=H("a",{href:"/blogs"},[H("button",{class:"parallax-button"},"I Blog About EdTech \u{1F393}")],-1),fO=H("div",{class:"parallax-mountain"},[H("span",{role:"img","aria-label":"Mountain Parallax"})],-1),dO={class:"content-wrapper"},pO={id:"tagline","aria-label":"tagline section"},mO={id:"section-packages","aria-label":"packages section"},gO={id:"section-projects","aria-label":"projects section"},vO={id:"section-skills","aria-label":"skills showcase section"},yO={class:"skills-wrapper"};function bO(t,e,n,r,i,s){const o=Ye("FishScroller"),a=Ye("FontAwesomeIcon"),l=Ye("FishStar"),c=Ye("FishAvatar"),u=Ye("FishSpacer"),h=Ye("SkillsOverview"),f=Ye("FishDivider"),p=Ye("FishLoader"),v=Ye("FishCardSimple"),w=Ye("SkillCard"),b=Ye("BottomCampFire");return ve(),Ce("main",nO,[H("div",{class:"scroller",style:Qn(i.scrollerStyle)},[ce(o)],4),H("div",rO,[H("button",{"aria-label":"page quick navigation",class:"icon-button hover-effect",onMouseover:e[0]||(e[0]=(...g)=>s.toggleMenu&&s.toggleMenu(...g))},[ce(a,{icon:"fa-solid fa-bars"})],32)]),H("div",iO,[H("button",{onClick:e[1]||(e[1]=g=>s.navigateTo("top")),"aria-label":"navigate to top of the page"}," Top "),H("button",{onClick:e[2]||(e[2]=g=>s.navigateTo("tagline")),"aria-label":"navigate to tagline section"}," Summary "),H("button",{onClick:e[3]||(e[3]=g=>s.navigateTo("packages")),"aria-label":"navigate to packages section"}," Packages "),H("button",{onClick:e[4]||(e[4]=g=>s.navigateTo("projects")),"aria-label":"navigate to projects section"}," Projects "),H("button",{onClick:e[5]||(e[5]=g=>s.navigateTo("skills")),"aria-label":"navigate to skills section"}," Skills "),H("button",{id:"blog-button","aria-label":"navigate to my blogs",onClick:e[6]||(e[6]=g=>s.redirectTo("/blogs"))}," Blogs ")]),H("div",{class:"parallax-bottom",style:Qn(i.parallaxBottomStyle)},oO,4),H("div",aO,[(ve(),Ce(Je,null,ci(50,g=>ce(l,{key:g})),64))]),ce(c,{class:"parallax-avatar",ref:"avatarView"},null,512),H("div",lO,[H("h1",cO,At(i.landingTitle),1),H("p",uO,At(i.landingSubtitle),1),hO]),fO,H("div",dO,[ce(u,{height:"300px"}),H("section",pO,[ce(h)]),ce(f,{label:"Packages",id:"packages"}),H("section",mO,[ce(p,{active:i.isPackageLoading,label:"Fetching packages information from database..."},null,8,["active"]),H("div",null,[(ve(!0),Ce(Je,null,ci(t.packages,(g,T)=>(ve(),gi(v,{key:T,class:"fish-card",project:g},null,8,["project"]))),128))])]),ce(f,{label:"Projects",id:"projects"}),H("section",gO,[ce(p,{active:i.isProjectLoading,label:"Fetching projects information from database..."},null,8,["active"]),H("div",null,[(ve(!0),Ce(Je,null,ci(i.projects,(g,T)=>(ve(),gi(v,{key:T,class:"fish-card",project:g},null,8,["project"]))),128))])]),ce(f,{label:"Skills",id:"skills"}),H("section",vO,[ce(p,{active:i.isSkillLoading,label:"Fetching skills information from database..."},null,8,["active"]),H("div",yO,[(ve(!0),Ce(Je,null,ci(i.skills,g=>(ve(),gi(w,{key:g.title,title:g.title,skills:g.skills},null,8,["title","skills"]))),128))])]),ce(b)])])}const _O=ct(tO,[["render",bO]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var wO={prefix:"fas",iconName:"angles-down",icon:[384,512,["angle-double-down"],"f103","M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"]},EO={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"]},TO={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[448,512,["external-link"],"f08e","M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"]},IO={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},SO={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32S145.7 32 128 32zM416 32h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64C448 46.31 433.7 32 416 32zM128 416H64v-64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32S145.7 416 128 416zM416 320c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96C448 334.3 433.7 320 416 320z"]};/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var kO={prefix:"far",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9898,9899,11044,61708,61915,9679],"f111","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]};Z_.add(EO,TO,wO,kO,SO,IO);v0(_O).mount("#app");
