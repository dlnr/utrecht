"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[9549],{"../web-component-library-stencil/dist/esm/clsx.m-9f200cc0.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{c:()=>clsx})},"../web-component-library-stencil/dist/esm/utrecht-form-field-textbox.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{utrecht_form_field_textbox:()=>FormFieldTextbox});var _index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-component-library-stencil/dist/esm/index-380964e2.js"),_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-component-library-stencil/dist/esm/clsx.m-9f200cc0.js");const FormFieldTextbox=class{constructor(hostRef){(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.utrechtBlur=(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"utrechtBlur",7),this.utrechtChange=(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"utrechtChange",7),this.utrechtFocus=(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"utrechtFocus",7),this.utrechtInput=(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"utrechtInput",7),this.autoComplete="",this.disabled=!1,this.invalid=!1,this.min="",this.max="",this.pattern="",this.placeholder="",this.readOnly=!1,this.required=!1,this.type="",this.value=""}render(){const{autoComplete,disabled,invalid,min,max,pattern,placeholder,readOnly,required,type,value}=this;return(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"utrecht-form-field-textbox utrecht-form-field--textbox"},(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{id:"input",class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__.c)("utrecht-form-field__input","utrecht-textbox","utrecht-textbox--html-input",disabled&&"utrecht-textbox--disabled",invalid&&"utrecht-textbox--invalid",readOnly&&"utrecht-textbox--readonly"),type:type||"text",autoComplete:autoComplete||null,disabled,min:min||null,max:max||null,pattern:pattern||null,placeholder:placeholder||null,readonly:readOnly,required,value,onBlur:evt=>this.utrechtBlur.emit(evt),onChange:evt=>this.utrechtChange.emit(evt),onFocus:evt=>this.utrechtFocus.emit(evt),onInput:evt=>{this.value=evt.target.value,this.utrechtInput.emit(evt)}}),(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{class:"utrecht-form-field__label utrecht-form-label",htmlFor:"input"},(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}};FormFieldTextbox.style='.utrecht-form-label{color:var(--utrecht-form-label-color);font-size:var(--utrecht-form-label-font-size);font-weight:var(--utrecht-form-label-font-weight)}.utrecht-form-label--checkbox{color:var(--utrecht-form-label-checkbox-color, var(--utrecht-form-label-color));cursor:var(--utrecht-action-activate-cursor, revert);font-weight:var(--utrecht-form-label-checkbox-font-weight, var(--utrecht-form-label-font-weight))}.utrecht-form-label--checked{font-weight:var(--utrecht-form-label-checked-font-weight, var(--utrecht-form-label-font-weight))}.utrecht-form-label--disabled{cursor:var(--utrecht-action-disabled-cursor, revert);font-weight:var(--utrecht-form-label-disabled-color, var(--utrecht-form-label-color))}.utrecht-form-label--radio{color:var(--utrecht-form-label-checkbox-color, var(--utrecht-form-label-color));cursor:var(--utrecht-action-activate-cursor, revert);font-weight:var(--utrecht-form-label-radio-font-weight, var(--utrecht-form-label-font-weight))}.utrecht-textbox{background-color:var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color));block-size:initial;border-width:var(--utrecht-textbox-border-width, var(--utrecht-form-control-border-width));border-block-end-width:var(--utrecht-textbox-border-bottom-width, var(--utrecht-textbox-border-width, var(--utrecht-form-control-border-width)));border-color:var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color));border-radius:var(--utrecht-textbox-border-radius, var(--utrecht-form-control-border-radius, 0));border-style:solid;box-sizing:border-box;color:var(--utrecht-textbox-color, var(--utrecht-form-control-color));font-family:var(--utrecht-textbox-font-family, var(--utrecht-form-control-font-family));font-size:var(--utrecht-textbox-font-size, var(--utrecht-form-control-font-size, inherit));font-weight:initial;inline-size:100%;line-height:var(--utrecht-textbox-line-height, var(--utrecht-form-control-line-height, initial));max-inline-size:var(--utrecht-textbox-max-inline-size, var(--utrecht-form-control-max-inline-size));padding-block-end:var(--utrecht-textbox-padding-block-end, var(--utrecht-form-control-padding-block-end, 0));padding-block-start:var(--utrecht-textbox-padding-block-start, var(--utrecht-form-control-padding-block-start, 0));padding-inline-end:var(--utrecht-textbox-padding-inline-end, var(--utrecht-form-control-padding-inline-end, initial));padding-inline-start:var(--utrecht-textbox-padding-inline-start, var(--utrecht-form-control-padding-inline-start, initial))}.utrecht-textbox--invalid{--_utrecht-textbox-border-width:var(\n    --utrecht-textbox-invalid-border-width,\n    var(\n      --utrecht-form-control-invalid-border-width,\n      var(--utrecht-textbox-border-width, var(--utrecht-form-control-border-width))\n    )\n  );background-color:var(--utrecht-textbox-invalid-background-color, var(--utrecht-form-control-invalid-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-width:var(--_utrecht-textbox-border-width);border-block-end-width:var(--utrecht-textbox-invalid-border-bottom-width, var(--utrecht-form-control-invalid-border-bottom-width, var(--utrecht-textbox-border-bottom-width, var(--utrecht-form-control-border-bottom-width, var(--_utrecht-textbox-border-width)))));border-color:var(--utrecht-textbox-invalid-border-color, var(--utrecht-form-control-invalid-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-invalid-color, var(--utrecht-form-control-invalid-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))))}.utrecht-textbox--disabled{background-color:var(--utrecht-textbox-disabled-background-color, var(--utrecht-form-control-disabled-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-disabled-border-color, var(--utrecht-form-control-disabled-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-disabled-color, var(--utrecht-form-control-disabled-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));cursor:var(--utrecht-action-disabled-cursor)}.utrecht-textbox--focus{background-color:var(--utrecht-textbox-focus-background-color, var(--utrecht-form-control-focus-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-focus-border-color, var(--utrecht-form-control-focus-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-focus-color, var(--utrecht-form-control-focus-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))))}.utrecht-textbox--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-textbox--read-only{background-color:var(--utrecht-textbox-read-only-background-color, var(--utrecht-form-control-read-only-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-read-only-border-color, var(--utrecht-form-control-read-only-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-read-only-color, var(--utrecht-form-control-read-only-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))))}.utrecht-textbox__placeholder{color:var(--utrecht-textbox-placeholder-color, var(--utrecht-form-control-placeholder-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))));font-style:var(--utrecht-form-control-placeholder-font-style);opacity:100%}.utrecht-textbox--numeric{-moz-appearance:textfield;font-variant-numeric:lining-nums tabular-nums}.utrecht-textbox--password{font-variant-ligatures:none;font-variant-numeric:slashed-zero}.utrecht-textbox--placeholder-ltr::placeholder,.utrecht-textbox--placeholder-ltr:placeholder-shown{direction:ltr}.utrecht-textbox--placeholder-rtl::placeholder,.utrecht-textbox--placeholder-rtl:placeholder-shown{direction:rtl}.utrecht-textbox--url{font-variant-ligatures:none}.utrecht-textbox--html-input{}.utrecht-textbox--html-input:focus{background-color:var(--utrecht-textbox-focus-background-color, var(--utrecht-form-control-focus-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-focus-border-color, var(--utrecht-form-control-focus-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-focus-color, var(--utrecht-form-control-focus-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-textbox--html-input:focus:not(:focus-visible){box-shadow:none;outline-style:revert}.utrecht-textbox--html-input:invalid,.utrecht-textbox--html-input[aria-invalid=true]{--_utrecht-textbox-border-width:var(\n    --utrecht-textbox-invalid-border-width,\n    var(\n      --utrecht-form-control-invalid-border-width,\n      var(--utrecht-textbox-border-width, var(--utrecht-form-control-border-width))\n    )\n  );background-color:var(--utrecht-textbox-invalid-background-color, var(--utrecht-form-control-invalid-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-width:var(--_utrecht-textbox-border-width);border-block-end-width:var(--utrecht-textbox-invalid-border-bottom-width, var(--utrecht-form-control-invalid-border-bottom-width, var(--utrecht-textbox-border-bottom-width, var(--utrecht-form-control-border-bottom-width, var(--_utrecht-textbox-border-width)))));border-color:var(--utrecht-textbox-invalid-border-color, var(--utrecht-form-control-invalid-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-invalid-color, var(--utrecht-form-control-invalid-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))))}.utrecht-textbox--html-input:read-only{background-color:var(--utrecht-textbox-read-only-background-color, var(--utrecht-form-control-read-only-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-read-only-border-color, var(--utrecht-form-control-read-only-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-read-only-color, var(--utrecht-form-control-read-only-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))))}.utrecht-textbox--html-input:disabled{background-color:var(--utrecht-textbox-disabled-background-color, var(--utrecht-form-control-disabled-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-disabled-border-color, var(--utrecht-form-control-disabled-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-disabled-color, var(--utrecht-form-control-disabled-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));cursor:var(--utrecht-action-disabled-cursor)}.utrecht-textbox--html-input::placeholder{color:var(--utrecht-textbox-placeholder-color, var(--utrecht-form-control-placeholder-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))));font-style:var(--utrecht-form-control-placeholder-font-style);opacity:100%}.utrecht-textbox--html-input[type=password i]{font-variant-ligatures:none;font-variant-numeric:slashed-zero}.utrecht-textbox--html-input[type=url i],.utrecht-textbox--html-input[type=email i],.utrecht-textbox--html-input[inputMode=email i],.utrecht-textbox--html-input[inputMode=url i]{font-variant-ligatures:none}.utrecht-textbox--html-input[pattern="\\\\d*"],.utrecht-textbox--html-input[pattern="[0-9]*"],.utrecht-textbox--html-input[type=number i],.utrecht-textbox--html-input[type=tel i],.utrecht-textbox--html-input[inputMode=numeric i],.utrecht-textbox--html-input[inputMode=decimal i],.utrecht-textbox--html-input[inputMode=tel i]{-moz-appearance:textfield;font-variant-numeric:lining-nums tabular-nums}:host{display:block}:host([hidden]){display:none !important}'}}]);