import{r as s,c as e,h as u}from"./preview-8244d8dd.js";import{c as h}from"./clsx.m-9f200cc0-1229b3e0.js";import"./tiny-invariant-dd7d57d2.js";import"./component-library-vue-53971873.js";import"./vue.esm-bundler-de98d0ed.js";import"./iframe-e6a3f12b.js";import"../sb-preview/runtime.js";const i=`.utrecht-checkbox{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;cursor:var(--utrecht-action-activate-cursor, revert);-webkit-user-select:none;user-select:none}.utrecht-checkbox--disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)
    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-checkbox--html-input:disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--html-input:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)
    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-checkbox--html-input:focus:not(:focus-visible){box-shadow:none;outline-style:revert}:host{display:block}:host([hidden]){display:none !important}`,n=class{constructor(r){s(this,r),this.utrechtBlur=e(this,"utrechtBlur",7),this.utrechtChange=e(this,"utrechtChange",7),this.utrechtFocus=e(this,"utrechtFocus",7),this.utrechtInput=e(this,"utrechtInput",7),this.disabled=!1,this.readOnly=!1,this.checked=!1,this.value=""}render(){const{checked:r,disabled:c,value:o}=this;return u("input",{class:h("utrecht-checkbox"),type:"checkbox",checked:r,disabled:c,value:o,onBlur:t=>this.utrechtBlur.emit(t),onChange:t=>this.utrechtChange.emit(t),onFocus:t=>this.utrechtFocus.emit(t),onInput:t=>{this.checked=t.target.checked,this.utrechtInput.emit(t)}})}};n.style=i;export{n as utrecht_checkbox};
//# sourceMappingURL=utrecht-checkbox.entry-45daa313.js.map
