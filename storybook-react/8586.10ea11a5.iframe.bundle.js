"use strict";(self.webpackChunk_utrecht_storybook_react=self.webpackChunk_utrecht_storybook_react||[]).push([[8586],{"../web-component-library-stencil/dist/esm/clsx.m-25174a58.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>clsx});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../web-component-library-stencil/dist/esm/utrecht-custom-checkbox.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{utrecht_custom_checkbox:()=>CustomCheckbox});__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-component-library-stencil/dist/esm/index-31022c39.js"),_clsx_m_25174a58_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-component-library-stencil/dist/esm/clsx.m-25174a58.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var CustomCheckbox=function(){function CustomCheckbox(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,CustomCheckbox),(0,_index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.utrechtBlur=(0,_index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"utrechtBlur",7),this.utrechtChange=(0,_index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"utrechtChange",7),this.utrechtFocus=(0,_index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"utrechtFocus",7),this.utrechtInput=(0,_index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"utrechtInput",7),this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.invalid=!1,this.required=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(CustomCheckbox,[{key:"render",value:function render(){var _this=this,checked=this.checked,disabled=this.disabled,indeterminate=this.indeterminate,invalid=this.invalid,required=this.required,toggleInteraction=function toggleInteraction(){_this.disabled||(_this.checked=!_this.checked,_this.utrechtInput.emit(_this),_this.utrechtChange.emit(_this))};return(0,_index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"utrecht-custom-checkbox",role:"checkbox",tabIndex:disabled?null:0,"aria-checked":indeterminate?"mixed":checked?"true":"false","aria-disabled":disabled?"true":null,"aria-invalid":invalid?"true":null,"aria-required":required?"true":null,onClick:function handleClick(){toggleInteraction()},onKeyPress:function handleKeyPress(evt){"Space"!==evt.code&&" "!==evt.key||evt.preventDefault()},onKeyUp:function handleKeyUp(evt){"Space"!==evt.code&&" "!==evt.key||toggleInteraction()}},(0,_index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:(0,_clsx_m_25174a58_js__WEBPACK_IMPORTED_MODULE_2__.c)("utrecht-custom-checkbox__box",!1,checked&&"utrecht-custom-checkbox__box--checked",!checked&&"utrecht-custom-checkbox__box--not-checked",disabled&&"utrecht-custom-checkbox__box--disabled",invalid&&"utrecht-custom-checkbox__box--invalid",indeterminate&&"utrecht-custom-checkbox__box--indeterminate")},checked&&(0,_index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__.h)("utrecht-icon-checkmark",{class:"utrecht-custom-checkbox__icon"},"✔"),indeterminate&&(0,_index_31022c39_js__WEBPACK_IMPORTED_MODULE_1__.h)("utrecht-icon-indeterminate",{class:"utrecht-custom-checkbox__icon"},"■")))}}]),CustomCheckbox}();CustomCheckbox.style=".utrecht-checkbox{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0}.utrecht-checkbox--disabled{cursor:var(--utrecht-action-disabled-cursor)}.utrecht-checkbox--focus-visible{box-shadow:0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);outline-color:var(--utrecht-focus-outline-color, transparent);outline-offset:var(--utrecht-focus-outline-offset, 0);outline-style:var(--utrecht-focus-outline-style, solid);outline-width:var(--utrecht-focus-outline-width, 0)}.utrecht-checkbox--html-input:disabled{cursor:var(--utrecht-action-disabled-cursor)}.utrecht-checkbox--html-input:focus{box-shadow:0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);outline-color:var(--utrecht-focus-outline-color, transparent);outline-offset:var(--utrecht-focus-outline-offset, 0);outline-style:var(--utrecht-focus-outline-style, solid);outline-width:var(--utrecht-focus-outline-width, 0)}.utrecht-checkbox--html-input:focus:not(:focus-visible){box-shadow:none;outline-style:none}.utrecht-checkbox{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0}.utrecht-checkbox--disabled{cursor:var(--utrecht-action-disabled-cursor)}.utrecht-checkbox--focus-visible{box-shadow:0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);outline-color:var(--utrecht-focus-outline-color, transparent);outline-offset:var(--utrecht-focus-outline-offset, 0);outline-style:var(--utrecht-focus-outline-style, solid);outline-width:var(--utrecht-focus-outline-width, 0)}.utrecht-checkbox--html-input:disabled{cursor:var(--utrecht-action-disabled-cursor)}.utrecht-checkbox--html-input:focus{box-shadow:0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);outline-color:var(--utrecht-focus-outline-color, transparent);outline-offset:var(--utrecht-focus-outline-offset, 0);outline-style:var(--utrecht-focus-outline-style, solid);outline-width:var(--utrecht-focus-outline-width, 0)}.utrecht-checkbox--html-input:focus:not(:focus-visible){box-shadow:none;outline-style:none}.utrecht-custom-checkbox{--utrecht-icon-size:var(--utrecht-custom-checkbox-icon-size, calc(0.75 * var(--utrecht-custom-checkbox-size)));display:inline-block;height:var(--utrecht-custom-checkbox-size);position:relative;width:var(--utrecht-custom-checkbox-size)}.utrecht-custom-checkbox__input{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;height:var(--utrecht-custom-checkbox-size);left:0;opacity:0%;position:absolute;top:0;width:var(--utrecht-custom-checkbox-size);z-index:10}.utrecht-custom-checkbox__box{align-items:center;background-color:var(--utrecht-custom-checkbox-background-color);border-color:var(--utrecht-custom-checkbox-border-color, var(--utrecht-form-input-border-color));border-radius:var(--utrecht-custom-checkbox-border-radius, var(--utrecht-form-input-border-radius));border-style:solid;border-width:var(--utrecht-custom-checkbox-border-width, var(--utrecht-form-input-border-width));box-sizing:border-box;color:var(--utrecht-custom-checkbox-color);display:flex;height:var(--utrecht-custom-checkbox-size);justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:var(--utrecht-custom-checkbox-size);z-index:1000}.utrecht-custom-checkbox__box--checked{background-color:var(--utrecht-custom-checkbox-checked-background-color, var(--utrecht-custom-checkbox-background-color));border-color:var(--utrecht-custom-checkbox-checked-border-color, var(--utrecht-custom-checkbox-border-color));border-width:var(--utrecht-custom-checkbox-checked-border-width, var(--utrecht-custom-checkbox-border-width));color:var(--utrecht-custom-checkbox-checked-color, var(--utrecht-custom-checkbox-color))}.utrecht-custom-checkbox__box--disabled{background-color:var(--utrecht-custom-checkbox-disabled-background-color, var(--utrecht-custom-checkbox-background-color));border-color:var(--utrecht-custom-checkbox-disabled-border-color, var(--utrecht-custom-checkbox-border-color));border-width:var(--utrecht-custom-checkbox-disabled-border-width, var(--utrecht-custom-checkbox-border-width));color:var(--utrecht-custom-checkbox-disabled-color, var(--utrecht-custom-checkbox-color));cursor:var(--utrecht-action-disabled-cursor)}.utrecht-custom-checkbox__box--indeterminate{color:var(--utrecht-custom-checkbox-indeterminate-color, var(--utrecht-custom-checkbox-color))}.utrecht-custom-checkbox__box--invalid{background-color:var(--utrecht-custom-checkbox-invalid-background-color, var(--utrecht-custom-checkbox-background-color));border-color:var(--utrecht-custom-checkbox-invalid-border-color, var(--utrecht-custom-checkbox-border-color));border-width:var(--utrecht-custom-checkbox-invalid-border-width, var(--utrecht-custom-checkbox-border-width));color:var(--utrecht-custom-checkbox-invalid-color, var(--utrecht-custom-checkbox-color))}.utrecht-custom-checkbox__box--active{background-color:var(--utrecht-custom-checkbox-active-background-color, var(--utrecht-custom-checkbox-background-color));border-color:var(--utrecht-custom-checkbox-active-border-color, var(--utrecht-custom-checkbox-border-color));border-width:var(--utrecht-custom-checkbox-active-border-width, var(--utrecht-custom-checkbox-border-width));color:var(--utrecht-custom-checkbox-active-color, var(--utrecht-custom-checkbox-color))}.utrecht-custom-checkbox__box--focus{background-color:var(--utrecht-custom-checkbox-focus-background-color, var(--utrecht-custom-checkbox-background-color));border-color:var(--utrecht-custom-checkbox-focus-border-color, var(--utrecht-custom-checkbox-border-color));border-width:var(--utrecht-custom-checkbox-focus-border-width, var(--utrecht-custom-checkbox-border-width));color:var(--utrecht-custom-checkbox-focus-color, var(--utrecht-custom-checkbox-color))}.utrecht-custom-checkbox__box--focus-visible{box-shadow:0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);outline-color:var(--utrecht-focus-outline-color, transparent);outline-offset:var(--utrecht-focus-outline-offset, 0);outline-style:var(--utrecht-focus-outline-style, solid);outline-width:var(--utrecht-focus-outline-width, 0)}.utrecht-custom-checkbox__input:indeterminate~.utrecht-custom-checkbox__box{color:var(--utrecht-custom-checkbox-indeterminate-color, var(--utrecht-custom-checkbox-color))}.utrecht-custom-checkbox__input:focus~.utrecht-custom-checkbox__box{background-color:var(--utrecht-custom-checkbox-focus-background-color, var(--utrecht-custom-checkbox-background-color));border-color:var(--utrecht-custom-checkbox-focus-border-color, var(--utrecht-custom-checkbox-border-color));border-width:var(--utrecht-custom-checkbox-focus-border-width, var(--utrecht-custom-checkbox-border-width));color:var(--utrecht-custom-checkbox-focus-color, var(--utrecht-custom-checkbox-color));box-shadow:0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);outline-color:var(--utrecht-focus-outline-color, transparent);outline-offset:var(--utrecht-focus-outline-offset, 0);outline-style:var(--utrecht-focus-outline-style, solid);outline-width:var(--utrecht-focus-outline-width, 0)}.utrecht-custom-checkbox__input:focus:not(:focus-visible)~.utrecht-custom-checkbox__box{box-shadow:none;outline-style:none}.utrecht-custom-checkbox__icon--checked,.utrecht-custom-checkbox__icon--indeterminate{display:none}.utrecht-custom-checkbox__box--checked .utrecht-custom-checkbox__icon--checked{display:block}.utrecht-custom-checkbox__box--indeterminate .utrecht-custom-checkbox__icon--indeterminate{display:block}:host{display:block}:host([hidden]){display:none !important}"}}]);