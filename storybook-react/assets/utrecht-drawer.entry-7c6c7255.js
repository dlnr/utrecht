import{r as i,h as t}from"./index.esm-07da6e0f.js";import{c as n}from"./clsx.m-9f200cc0-1229b3e0.js";import"./objectWithoutProperties-8df67654.js";import"./typeof-7fd5df1e.js";import"./getPrototypeOf-624f05c9.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./iframe-eec3f5e0.js";import"../sb-preview/runtime.js";const d=".utrecht-drawer{--_utrecht-drawer-backdrop-min-size:max(var(--utrecht-drawer-backdrop-min-size), 44px);background-color:var(--utrecht-drawer-background-color, Canvas);border-color:var(--utrecht-drawer-border-color, currentColor);border-width:var(--utrecht-drawer-border-width, 0);box-sizing:border-box;color:var(--utrecht-drawer-color, CanvasText);overflow:auto;padding-block-end:var(--utrecht-drawer-padding-block-end);padding-block-start:var(--utrecht-drawer-padding-block-start);padding-inline-end:var(--utrecht-drawer-padding-inline-end);padding-inline-start:var(--utrecht-drawer-padding-inline-start);position:fixed;z-index:var(--utrecht-drawer-z-index, 1)}.utrecht-drawer::backdrop{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-opacity);--_utrecht-backdrop-fade-in-animation-duration:var(--utrecht-backdrop-fade-in-animation-duration, 0);animation-duration:min(var(--utrecht-motion-max-animation-duration, var(--_utrecht-backdrop-fade-in-animation-duration)), var(--_utrecht-backdrop-fade-in-animation-duration, 0));animation-name:utrecht-backdrop-fade-in;animation-timing-function:ease-in-out;background-color:var(--utrecht-backdrop-background-color);color:var(--utrecht-backdrop-color);opacity:var(--_utrecht-backdrop-opacity);-webkit-user-select:none;user-select:none}@keyframes utrecht-backdrop-fade-in{from{opacity:0%}to{opacity:var(--_utrecht-backdrop-opacity)}}@media (prefers-reduced-motion: reduce){.utrecht-drawer::backdrop{--_utrecht-backdrop-fade-in-animation-duration:0}}@media (prefers-reduced-transparency: reduce){.utrecht-drawer::backdrop{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-reduced-transparency-opacity, 100%)}}.utrecht-drawer--inline-start{block-size:100%;inset-block-end:0;inset-block-start:0;max-block-size:100%;max-inline-size:min(var(--utrecht-drawer-max-inline-size, 100%), 100% - var(--_utrecht-drawer-backdrop-min-size, 44px));min-inline-size:var(--utrecht-drawer-min-inline-size, calc(320px - var(--_utrecht-drawer-backdrop-min-size)));border-end-end-radius:var(--utrecht-drawer-border-radius);border-inline-start-width:0;border-start-end-radius:var(--utrecht-drawer-border-radius);inset-inline-end:auto;inset-inline-start:0}.utrecht-drawer--inline-end{block-size:100%;inset-block-end:0;inset-block-start:0;max-block-size:100%;max-inline-size:min(var(--utrecht-drawer-max-inline-size, 100%), 100% - var(--_utrecht-drawer-backdrop-min-size, 44px));min-inline-size:var(--utrecht-drawer-min-inline-size, calc(320px - var(--_utrecht-drawer-backdrop-min-size)));border-end-start-radius:var(--utrecht-drawer-border-radius);border-inline-end-width:0;border-start-start-radius:var(--utrecht-drawer-border-radius);inset-inline-end:0;inset-inline-start:auto}.utrecht-drawer--block-start{block-size:fit-content;inline-size:100%;inset-inline-end:0;inset-inline-start:0;max-block-size:min(var(--utrecht-drawer-max-block-size), 100% - var(--_utrecht-drawer-backdrop-min-size));max-inline-size:100%;min-block-size:var(--utrecht-drawer-min-block-size, calc(256px - var(--_utrecht-drawer-backdrop-min-size)));border-block-start-width:0;border-end-end-radius:var(--utrecht-drawer-border-radius);border-end-start-radius:var(--utrecht-drawer-border-radius);inset-block-end:auto;inset-block-start:0}.utrecht-drawer--block-end{block-size:fit-content;inline-size:100%;inset-inline-end:0;inset-inline-start:0;max-block-size:min(var(--utrecht-drawer-max-block-size), 100% - var(--_utrecht-drawer-backdrop-min-size));max-inline-size:100%;min-block-size:var(--utrecht-drawer-min-block-size, calc(256px - var(--_utrecht-drawer-backdrop-min-size)));border-block-end-width:0;border-start-end-radius:var(--utrecht-drawer-border-radius);border-start-start-radius:var(--utrecht-drawer-border-radius);inset-block-end:0;inset-block-start:auto}:host{display:contents}:host([hidden]){display:none !important}",o=class{constructor(r){i(this,r),this.align=void 0,this.open=!1}render(){const{align:r,open:e}=this;return t("dialog",{ref:a=>this.dialogElement=a,class:n("utrecht-drawer",{"utrecht-drawer--block-end":r==="block-end","utrecht-drawer--block-start":r==="block-start","utrecht-drawer--inline-end":r==="inline-end"||!r,"utrecht-drawer--inline-start":r==="inline-start"}),open:e},t("slot",null))}async close(){var r;(r=this.dialogElement)===null||r===void 0||r.close()}async showModal(){var r,e;(r=this.dialogElement)===null||r===void 0||r.close(),(e=this.dialogElement)===null||e===void 0||e.showModal()}};o.style=d;export{o as utrecht_drawer};
//# sourceMappingURL=utrecht-drawer.entry-7c6c7255.js.map
