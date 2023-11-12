import{r as h,h as r}from"./index.esm-1adcab01.js";import{c as o}from"./clsx.m-9f200cc0-1229b3e0.js";import"./objectWithoutProperties-8df67654.js";import"./typeof-7fd5df1e.js";import"./getPrototypeOf-624f05c9.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./iframe-cffe6816.js";import"../sb-preview/runtime.js";const d=`.utrecht-pagination__page-link:focus,.utrecht-pagination__relative-link:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)
    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-pagination__page-link:focus:not(:focus-visible),.utrecht-pagination__relative-link:focus:not(:focus-visible){box-shadow:none;outline-style:revert}.utrecht-pagination{font-family:var(--utrecht-pagination-font-family, var(--utrecht-document-font-family));font-size:var(--utrecht-pagination-font-size, var(--utrecht-document-font-family));margin-block-end:calc(var(--utrecht-space-around, 0) * var(--utrecht-pagination-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0) * var(--utrecht-pagination-margin-block-start, 0))}.utrecht-pagination--distanced{--utrecht-space-around:1}.utrecht-pagination__relative-link{background-color:var(--utrecht-pagination-relative-link-background-color);border-color:var(--utrecht-pagination-relative-link-border-color);border-radius:var(--utrecht-pagination-relative-link-border-radius);border-style:solid;border-width:var(--utrecht-pagination-relative-link-border-width, 0);color:var(--utrecht-pagination-relative-link-color);display:inline-block;font-weight:var(--utrecht-pagination-relative-link-font-weight);padding-block-end:var(--utrecht-pagination-relative-link-padding-block-end);padding-block-start:var(--utrecht-pagination-relative-link-padding-block-start);padding-inline-end:var(--utrecht-pagination-relative-link-padding-inline-end);padding-inline-start:var(--utrecht-pagination-relative-link-padding-inline-start);text-decoration:var(--utrecht-pagination-relative-link-text-decoration);text-transform:var(--utrecht-pagination-relative-link-text-transform)}.utrecht-pagination__relative-link--next{margin-inline-start:var(--utrecht-pagination-relative-link-distanced-margin-inline-start)}.utrecht-pagination__relative-link--prev{margin-inline-end:var(--utrecht-pagination-relative-link-distanced-margin-inline-end)}.utrecht-pagination__relative-link--disabled{background-color:var(--utrecht-pagination-relative-link-disabled-background-color, var(--utrecht-pagination-relative-link-background-color));color:var(--utrecht-pagination-relative-link-disabled-color, var(--utrecht-pagination-relative-link-color))}.utrecht-pagination__relative-link--hover,.utrecht-pagination__relative-link:hover{background-color:var(--utrecht-pagination-relative-link-hover-background-color, var(--utrecht-pagination-relative-link-background-color));border-color:var(--utrecht-pagination-relative-link-hover-border-color, var(--utrecht-pagination-relative-link-border-color));color:var(--utrecht-pagination-relative-link-hover-color, var(--utrecht-pagination-relative-link-color))}.utrecht-pagination__page-link{background-color:var(--utrecht-pagination-page-link-background-color);border-color:var(--utrecht-pagination-page-link-border-color, 0);border-radius:var(--utrecht-pagination-page-link-border-radius);border-style:solid;border-width:var(--utrecht-pagination-page-link-border-width);color:var(--utrecht-pagination-page-link-color);display:inline-block;font-weight:var(--utrecht-pagination-page-link-font-weight);padding-block-end:var(--utrecht-pagination-page-link-padding-block-end);padding-block-start:var(--utrecht-pagination-page-link-padding-block-start);padding-inline-end:var(--utrecht-pagination-page-link-padding-inline-end);padding-inline-start:var(--utrecht-pagination-page-link-padding-inline-start);text-decoration:var(--utrecht-pagination-page-link-text-decoration)}.utrecht-pagination__page-link--current{--utrecht-pagination-page-link-background-color:var(--utrecht-pagination-page-link-current-background-color);--utrecht-pagination-page-link-border-color:var(--utrecht-pagination-page-link-current-border-color);--utrecht-pagination-page-link-color:var(--utrecht-pagination-page-link-current-color)}.utrecht-pagination__page-link~.utrecht-pagination__page-link{margin-inline-start:var(--utrecht-pagination-page-link-distanced-margin-inline-start)}.utrecht-pagination__page-link--hover,.utrecht-pagination__page-link:hover{background-color:var(--utrecht-pagination-page-link-hover-background-color, var(--utrecht-pagination-page-link-background-color));border-color:var(--utrecht-pagination-page-link-hover-border-color, var(--utrecht-pagination-page-link-border-color));color:var(--utrecht-pagination-page-link-hover-color, var(--utrecht-pagination-page-link-color))}.utrecht-pagination__page-link:focus,.utrecht-pagination__relative-link:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)
    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-pagination__page-link:focus:not(:focus-visible),.utrecht-pagination__relative-link:focus:not(:focus-visible){box-shadow:none;outline-style:revert}:host{display:block}:host([hidden]){display:none !important}`,v=class{constructor(e){h(this,e),this.links=void 0,this.next=void 0,this.prev=void 0,this.currentIndex=void 0}render(){const{currentIndex:e}=this,p=typeof this.links=="string"?JSON.parse(this.links):null,l=typeof this.next=="string"?JSON.parse(this.next):null,c=typeof this.prev=="string"?JSON.parse(this.next):null,u=({disabled:t=!1,href:i="",rel:n=null,textContent:a="",title:g=""})=>t?r("span",{class:o("utrecht-pagination__relative-link",t&&"utrecht-pagination__relative-link--disabled",n==="next"&&"utrecht-pagination__relative-link--next",n==="prev"&&"utrecht-pagination__relative-link--prev"),"aria-label":g||null},a):r("a",{href:i,class:o("utrecht-pagination__relative-link",t&&"utrecht-pagination__relative-link--disabled",n==="next"&&"utrecht-pagination__relative-link--next",n==="prev"&&"utrecht-pagination__relative-link--prev"),rel:n,"aria-label":g||null},a),s=({current:t=!1,href:i="",rel:n=null,textContent:a=""})=>r("a",{class:o("utrecht-pagination__page-link",t&&"utrecht-pagination__page-link--current"),href:i,"aria-current":t?"true":null,rel:n},a);return r("nav",{class:"utrecht-pagination"},r("span",{class:"utrecht-pagination__before"},c?u(Object.assign(Object.assign({},c),{rel:"prev",textContent:"Vorige"})):""),r("span",{role:"group",class:"utrecht-pagination__pages"},p.sort((t,i)=>t.index===i.index?0:t.index>i.index?1:-1).map((t,i)=>{const n=typeof t.index=="number"?t.index:i;return Object.assign({index:n,current:typeof e=="number"&&n===e,rel:typeof e=="number"?n===e+1?"next":n===e-1?"prev":null:null,textContent:t.index||n},t)}).map(t=>s(t))),r("span",{class:"utrecht-pagination__before"},l?u(Object.assign(Object.assign({},l),{rel:"next",textContent:"Volgende"})):""))}};v.style=d;export{v as utrecht_pagination};
//# sourceMappingURL=utrecht-pagination.entry-0d5ac7d6.js.map
