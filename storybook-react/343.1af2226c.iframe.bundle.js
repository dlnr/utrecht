"use strict";(self.webpackChunk_utrecht_storybook_react=self.webpackChunk_utrecht_storybook_react||[]).push([[343],{"../web-component-library-stencil/dist/esm/clsx.m-25174a58.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>clsx});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../web-component-library-stencil/dist/esm/utrecht-checkbox.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{utrecht_checkbox:()=>Checkbox});__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-component-library-stencil/dist/esm/index-31022c39.js"),_clsx_m_25174a58_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-component-library-stencil/dist/esm/clsx.m-25174a58.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Checkbox=function(){function Checkbox(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Checkbox),(0,_index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.utrechtBlur=(0,_index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"utrechtBlur",7),this.utrechtChange=(0,_index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"utrechtChange",7),this.utrechtFocus=(0,_index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"utrechtFocus",7),this.utrechtInput=(0,_index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"utrechtInput",7),this.disabled=!1,this.readOnly=!1,this.checked=!1,this.value=""}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Checkbox,[{key:"render",value:function render(){var _this=this,checked=this.checked,disabled=this.disabled,value=this.value;return(0,_index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__.h)("input",{class:(0,_clsx_m_25174a58_js__WEBPACK_IMPORTED_MODULE_2__.c)("utrecht-checkbox"),type:"checkbox",checked,disabled,value,onBlur:function onBlur(evt){return _this.utrechtBlur.emit(evt)},onChange:function onChange(evt){return _this.utrechtChange.emit(evt)},onFocus:function onFocus(evt){return _this.utrechtFocus.emit(evt)},onInput:function onInput(evt){_this.checked=evt.target.checked,_this.utrechtInput.emit(evt)}})}}]),Checkbox}();Checkbox.style=".utrecht-checkbox{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0}.utrecht-checkbox--disabled{cursor:var(--utrecht-action-disabled-cursor)}.utrecht-checkbox--focus-visible{box-shadow:0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);outline-color:var(--utrecht-focus-outline-color, transparent);outline-offset:var(--utrecht-focus-outline-offset, 0);outline-style:var(--utrecht-focus-outline-style, solid);outline-width:var(--utrecht-focus-outline-width, 0)}.utrecht-checkbox--html-input:disabled{cursor:var(--utrecht-action-disabled-cursor)}.utrecht-checkbox--html-input:focus{box-shadow:0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);outline-color:var(--utrecht-focus-outline-color, transparent);outline-offset:var(--utrecht-focus-outline-offset, 0);outline-style:var(--utrecht-focus-outline-style, solid);outline-width:var(--utrecht-focus-outline-width, 0)}.utrecht-checkbox--html-input:focus:not(:focus-visible){box-shadow:none;outline-style:none}:host{display:block}:host([hidden]){display:none !important}"}}]);