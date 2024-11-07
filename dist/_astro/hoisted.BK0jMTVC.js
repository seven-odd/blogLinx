import{s as v}from"./config.DYAGWhG_.js";const y="data-astro-transition-persist";function te(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function ne(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function oe(e){for(const t of Array.from(document.head.children)){const n=se(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function re(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${y}]`)){const o=n.getAttribute(y),r=e.querySelector(`[${y}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&ae(n)&&!ce(n,r)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const ie=()=>{const e=document.activeElement;if(e?.closest(`[${y}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>R({activeElement:e,start:t,end:n})}return()=>R({activeElement:e})}else return()=>R({activeElement:null})},R=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},se=(e,t)=>{const n=e.getAttribute(y),o=n&&t.head.querySelector(`[${y}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},ae=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},ce=(e,t)=>e.getAttribute("props")===t.getAttribute("props"),le=e=>{te(e),ne(e),oe(e);const t=ie();re(e.body,document.body),t()},ue="astro:before-preparation",de="astro:after-preparation",fe="astro:before-swap",me="astro:after-swap",he=e=>document.dispatchEvent(new Event(e));class U extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,s,u,a,l,d,c){super(t,n),this.from=o,this.to=r,this.direction=s,this.navigationType=u,this.sourceElement=a,this.info=l,this.newDocument=d,this.signal=c,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class ge extends U{formData;loader;constructor(t,n,o,r,s,u,a,l,d,c){super(ue,{cancelable:!0},t,n,o,r,s,u,a,l),this.formData=d,this.loader=c.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class pe extends U{direction;viewTransition;swap;constructor(t,n){super(fe,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>le(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function we(e,t,n,o,r,s,u,a,l){const d=new ge(e,t,n,o,r,s,window.document,u,a,l);return document.dispatchEvent(d)&&(await d.loader(),d.defaultPrevented||(he(de),d.navigationType!=="traverse"&&x({scrollX,scrollY}))),d}function ye(e,t){const n=new pe(e,t);return document.dispatchEvent(n),n.swap(),n}const be=history.pushState.bind(history),E=history.replaceState.bind(history),x=e=>{history.state&&(history.scrollRestoration="manual",E({...history.state,...e},""))},N=!!document.startViewTransition,M=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),V=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let f,p,S;const W=e=>document.dispatchEvent(new Event(e)),j=()=>W("astro:page-load"),Te=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},F="data-astro-transition-persist",_="data-astro-transition",P="data-astro-transition-fallback";let C,b=0;history.state?(b=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):M()&&(E({index:b,scrollX,scrollY},""),history.scrollRestoration="manual");async function ve(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function K(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function Ee(){let e=Promise.resolve();for(const t of document.getElementsByTagName("script")){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const s=new Promise(u=>{o.onload=o.onerror=u});e=e.then(()=>s)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const G=(e,t,n,o,r)=>{const s=V(t,e),u=document.title;document.title=o;let a=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const l=history.state;E({...n.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",e.href)}else be({...n.state,index:++b,scrollX:0,scrollY:0},"",e.href);if(document.title=u,S=e,s||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const l=history.state;location.href=e.href,history.state||(E(l,""),s&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Ae(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${F}="${n.getAttribute(F)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(s=>o.addEventListener(s,r)),document.head.append(o)}))}return t}async function X(e,t,n,o,r){async function s(l){function d(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const c=document.getAnimations();document.documentElement.setAttribute(P,l);const g=document.getAnimations().filter(h=>!c.includes(h)&&!d(h));return Promise.allSettled(g.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await s("old")}catch{}const u=document.title,a=ye(e,n.viewTransition);G(a.to,a.from,t,u,o),W(me),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?s("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Se(){return f?.controller.abort(),f={controller:new AbortController}}async function z(e,t,n,o,r){const s=Se();if(!M()||location.origin!==n.origin){s===f&&(f=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&x({scrollX,scrollY}),V(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){G(n,t,o,document.title,r),s===f&&(f=void 0);return}const a=await we(t,n,e,u,o.sourceElement,o.info,s.controller.signal,o.formData,l);if(a.defaultPrevented||a.signal.aborted){s===f&&(f=void 0),a.signal.aborted||(location.href=n.href);return}async function l(i){const g=i.to.href,h={signal:i.signal};if(i.formData){h.method="POST";const w=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");h.body=w?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const m=await ve(g,h);if(m===null){i.preventDefault();return}if(m.redirected){const w=new URL(m.redirected);if(w.origin!==i.to.origin){i.preventDefault();return}i.to=w}if(C??=new DOMParser,i.newDocument=C.parseFromString(m.html,m.mediaType),i.newDocument.querySelectorAll("noscript").forEach(w=>w.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const k=Ae(i.newDocument);k.length&&!i.signal.aborted&&await Promise.all(k)}async function d(){if(p&&p.viewTransition){try{p.viewTransition.skipTransition()}catch{}try{await p.viewTransition.updateCallbackDone}catch{}}return p={transitionSkipped:!1}}const c=await d();if(a.signal.aborted){s===f&&(f=void 0);return}if(document.documentElement.setAttribute(_,a.direction),N)c.viewTransition=document.startViewTransition(async()=>await X(a,o,c,r));else{const i=(async()=>{await Promise.resolve(),await X(a,o,c,r,K())})();c.viewTransition={updateCallbackDone:i,ready:i,finished:new Promise(g=>c.viewTransitionFinished=g),skipTransition:()=>{c.transitionSkipped=!0,document.documentElement.removeAttribute(P)}}}c.viewTransition?.updateCallbackDone.finally(async()=>{await Ee(),j(),Te()}),c.viewTransition?.finished.finally(()=>{c.viewTransition=void 0,c===p&&(p=void 0),s===f&&(f=void 0),document.documentElement.removeAttribute(_),document.documentElement.removeAttribute(P)});try{await c.viewTransition?.updateCallbackDone}catch(i){const g=i;console.log("[astro]",g.name,g.message,g.stack)}}async function Y(e,t){await z("forward",S,new URL(e,location.href),t??{})}function Le(e){if(!M()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>b?"forward":"back";b=n,z(o,S,new URL(location.href),{},t)}const q=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&x({scrollX,scrollY})};{if(N||K()!=="none")if(S=new URL(location.href),addEventListener("popstate",Le),addEventListener("load",j),"onscrollend"in window)addEventListener("scrollend",q);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,q();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.getElementsByTagName("script"))e.dataset.astroExec=""}const J=new Set,A=new WeakSet;let D,Q,$=!1;function ke(e){$||($=!0,D??=e?.prefetchAll,Q??=e?.defaultStrategy??"hover",Re(),Pe(),De(),xe())}function Re(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{T(t.target,"tap")&&L(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Pe(){let e;document.body.addEventListener("focusin",o=>{T(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),H(()=>{for(const o of document.getElementsByTagName("a"))A.has(o)||T(o,"hover")&&(A.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{L(r)},80)}function n(){e&&(clearTimeout(e),e=0)}}function De(){let e;H(()=>{for(const t of document.getElementsByTagName("a"))A.has(t)||T(t,"viewport")&&(A.add(t),e??=Ie(),e.observe(t))})}function Ie(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,s=e.get(r);o.isIntersecting?(s&&clearTimeout(s),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),L(r.href)},300))):s&&(clearTimeout(s),e.delete(r))}})}function xe(){H(()=>{for(const e of document.getElementsByTagName("a"))T(e,"load")&&L(e.href)})}function L(e,t){e=e.replace(/#.*/,"");const n=t?.ignoreSlowConnection??!1;if(Ne(e,n))if(J.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e,{priority:"low"})}function Ne(e,t){if(!navigator.onLine||!t&&Z())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!J.has(e)}catch{}return!1}function T(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||D)&&Z()?!0:n==null&&D||n===""?t===Q:n===t}function Z(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function H(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Me(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function B(e){return e.dataset.astroReload!==void 0}(N||Me()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;B(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),Y(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||B(t))return;const n=t,o=e.submitter,r=new FormData(n,o),s=typeof n.action=="string"?n.action:n.getAttribute("action"),u=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??s??location.pathname;const l=o?.getAttribute("formmethod")??u??"get";if(l==="dialog"||location.origin!==new URL(a,location.href).origin)return;const d={sourceElement:o??n};if(l==="get"){const c=new URLSearchParams(r),i=new URL(a);i.search=c.toString(),a=i.toString()}else d.formData=r;e.preventDefault(),Y(a,d)}),ke({prefetchAll:!0}));const O=window.matchMedia("(prefers-color-scheme: dark)");O.addEventListener("change",()=>I(document.querySelectorAll("[data-theme-switcher]")));function I(e){const t=v.default_theme==="system"?O.matches?"dark":"light":v.default_theme,o=(localStorage.getItem("theme")||t)==="dark";e.forEach(r=>r.checked=o),document.documentElement.classList.toggle("dark",o)}const ee=()=>{const e=document.querySelectorAll("[data-theme-switcher]");I(e),e.forEach(t=>{t.addEventListener("click",function(){const n=v.default_theme==="system"?O.matches?"dark":"light":v.default_theme,r=(localStorage.getItem("theme")||n)==="light"?"dark":"light";localStorage.setItem("theme",r),I(e)})})};ee();document.addEventListener("astro:after-swap",ee);
