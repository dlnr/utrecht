"use strict";(self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[]).push([[3655],{"../web-component-library-stencil/dist/esm/clsx.m-9f200cc0.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{c:()=>clsx})},"../web-component-library-stencil/dist/esm/utrecht-checkbox.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{utrecht_checkbox:()=>Checkbox});var _index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-component-library-stencil/dist/esm/index-380964e2.js"),_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-component-library-stencil/dist/esm/clsx.m-9f200cc0.js");const Checkbox=class{constructor(hostRef){(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.utrechtBlur=(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"utrechtBlur",7),this.utrechtChange=(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"utrechtChange",7),this.utrechtFocus=(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"utrechtFocus",7),this.utrechtInput=(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"utrechtInput",7),this.disabled=!1,this.readOnly=!1,this.checked=!1,this.value=""}render(){const{checked,disabled,value}=this;return(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__.c)("utrecht-checkbox"),type:"checkbox",checked,disabled,value,onBlur:evt=>this.utrechtBlur.emit(evt),onChange:evt=>this.utrechtChange.emit(evt),onFocus:evt=>this.utrechtFocus.emit(evt),onInput:evt=>{this.checked=evt.target.checked,this.utrechtInput.emit(evt)}})}};Checkbox.style=".utrecht-checkbox{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;cursor:var(--utrecht-action-activate-cursor, revert);-webkit-user-select:none;user-select:none}.utrecht-checkbox--disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-checkbox--html-input:disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--html-input:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-checkbox--html-input:focus:not(:focus-visible){box-shadow:none;outline-style:revert}:host{display:block}:host([hidden]){display:none !important}"}}]);