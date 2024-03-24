var $="pseudo",A=["::-webkit-scrollbar-thumb"],p={hover:"hover",active:"active",focusVisible:"focus-visible",focusWithin:"focus-within",focus:"focus",visited:"visited",link:"link",target:"target"};const{DOCS_RENDERED:b,FORCE_REMOUNT:w,FORCE_RE_RENDER:D,GLOBALS_UPDATED:T,STORY_CHANGED:C,STORY_RENDERED:j,UPDATE_GLOBALS:x}=__STORYBOOK_MODULE_CORE_EVENTS__,{addons:L,useEffect:S,useMemo:N}=__STORYBOOK_MODULE_PREVIEW_API__;var P=e=>e.indexOf("@")===0,k=e=>{if(P(e))return[e];let n=[],t=0,r=0,s="";for(let o=0,a=e.length;o<a;o++){const l=e[o];if(l==="(")t+=1;else if(l===")")t-=1;else if(l==="[")r+=1;else if(l==="]")r-=1;else if(l===","&&!t&&!r){n.push(s.trim()),s="";continue}s+=l}return n.push(s.trim()),n},O=Object.values(p),g=new RegExp(`:(${O.join("|")})`),B=new RegExp(`:(${O.join("|")})`,"g"),h=new Set,m=e=>{h.has(e)||(console.warn(e),h.add(e))},y=(e,n)=>A.some(t=>e.endsWith(`${t}:${n}`)),U=({cssText:e,selectorText:n},t)=>e.replace(n,k(n).flatMap(r=>{if(r.includes(".pseudo-"))return[];if(!g.test(r))return[r];const s=[],o=r.replace(B,(i,c)=>(s.push(c),"")),a=s.reduce((i,c)=>y(r,c)?"":i.replace(new RegExp(`:${c}`,"g"),`.pseudo-${c}`),r),l=s.reduce((i,c)=>y(r,c)?"":i.replace(new RegExp(`:${c}`,"g"),`.pseudo-${c}-all`),r);if(r.startsWith(":host(")||r.startsWith("::slotted("))return[r,a,l].filter(Boolean);const u=t?`:host(${s.map(i=>`.pseudo-${i}-all`).join("")}) ${o}`:`${s.map(i=>`.pseudo-${i}-all`).join("")} ${o}`;return[r,a,u].filter(i=>i&&!i.includes(":not()"))}).join(", ")),W=(e,n,t)=>{try{let r=-1;for(const s of e.cssRules){if(r++,s.__pseudoStatesRewritten||!("selectorText"in s))continue;const o=s;if(g.test(o.selectorText)){const a=U(o,n);e.deleteRule(r),e.insertRule(a,r),n&&t&&t.add(n.host)}if(s.__pseudoStatesRewritten=!0,r>1e3){m("Reached maximum of 1000 pseudo selectors per sheet, skipping the rest.");break}}}catch(r){String(r).includes("cssRules")?m(`Can't access cssRules, likely due to CORS restrictions: ${e.href}`):console.error(r,e.href)}},f=L.getChannel(),E=new Set,v=(e,n)=>{Object.values(p).forEach(t=>{e.classList.remove(`pseudo-${t}`),e.classList.remove(`pseudo-${t}-all`)}),n.forEach(t=>e.classList.add(t))},q=(e,n={})=>{const t=new Map([[e,new Set]]),r=(s,o)=>t.set(s,new Set([...t.get(s)||[],o]));Object.entries(n||{}).forEach(([s,o])=>{typeof o=="boolean"?o&&r(e,`${s}-all`):typeof o=="string"?e.querySelectorAll(o).forEach(a=>r(a,s)):Array.isArray(o)&&o.forEach(a=>e.querySelectorAll(a).forEach(l=>r(l,s)))}),t.forEach((s,o)=>{const a=new Set;s.forEach(l=>{const u=l.replace("-all","");p[l]?a.add(`pseudo-${p[l]}`):p[u]&&a.add(`pseudo-${p[u]}-all`)}),v(o,a)})},R=e=>{const n=new Set;for(let t=e.parentElement;t;t=t.parentElement)t.className&&t.className.split(" ").filter(r=>r.indexOf("pseudo-")===0).forEach(r=>n.add(r));v(e,n)},_=e=>{const{rootSelector:n,...t}=e||{};return t},I=(e={},n={})=>e!==null&&n!==null&&Object.keys(e).length===Object.keys(n).length&&Object.keys(e).every(t=>JSON.stringify(e[t])===JSON.stringify(n[t])),M=(e,{viewMode:n,parameters:t,id:r,globals:s})=>{const{pseudo:o}=t,{pseudo:a}=s,{rootSelector:l}=o||{},u=N(()=>l?document.querySelector(l):n==="docs"?document.getElementById(`story--${r}`):document.getElementById("storybook-root")||document.getElementById("root"),[l,n,r]);return S(()=>{const i=_(o);n==="story"&&!I(i,a)&&f.emit(x,{globals:{pseudo:i}})},[o,n]),S(()=>{if(!u)return;const i=setTimeout(()=>{q(u,a||_(o)),E.forEach(R)},0);return()=>clearTimeout(i)},[u,a,o]),e()},d=e=>{var t;let n=Array.from(e?e.styleSheets:document.styleSheets);(t=e==null?void 0:e.adoptedStyleSheets)!=null&&t.length&&(n=e.adoptedStyleSheets),n.forEach(r=>W(r,e,E))};f.on(C,()=>E.clear());f.on(j,()=>d());f.on(T,()=>d());f.on(D,()=>d());f.on(w,()=>d());f.on(b,()=>d());Element.prototype.attachShadow&&(Element.prototype._attachShadow=Element.prototype.attachShadow,Element.prototype.attachShadow=function(n){const t=this._attachShadow({...n,mode:"open"});return requestAnimationFrame(()=>{d(t),R(t.host)}),t});var Y=[M],F={[$]:!1};export{Y as decorators,F as globals};
//# sourceMappingURL=preview-9b3af67a.js.map