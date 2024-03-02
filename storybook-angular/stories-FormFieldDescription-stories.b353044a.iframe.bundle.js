(self.webpackChunk_utrecht_storybook_angular=self.webpackChunk_utrecht_storybook_angular||[]).push([[585],{"../component-library-angular/src/checkbox/component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>UtrechtCheckboxAttr});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs"),_index_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../component-library-angular/src/checkbox/index.scss?ngResource"),_index_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_index_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/@angular+core@17.1.0_rxjs@7.8.1_zone.js@0.14.3/node_modules/@angular/core/fesm2022/core.mjs");let UtrechtCheckboxAttr=class UtrechtCheckboxAttr{constructor(){this.invalid=!1,this.disabled=!1,this.checked=!1,this.required=!1,this.noValidate=!1,this.appearance="custom"}static#_=this.ctorParameters=()=>[];static#_2=this.propDecorators={invalid:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],checked:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],required:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],noValidate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],appearance:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]}};UtrechtCheckboxAttr=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:'input[type="checkbox"][utrecht-checkbox]',template:"",changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,host:{"[attr.aria-invalid]":"invalid || undefined","[attr.aria-required]":"required && noValidate || undefined","[attr.required]":'required && !noValidate ? "required": null',"[attr.disabled]":'disabled ? "disabled": null',"[attr.checked]":'checked ? "checked": null',"[class.utrecht-checkbox--invalid]":"invalid","[class.utrecht-checkbox--html-input]":"true","[class.utrecht-checkbox--custom]":'appearance === "custom"',"[class.utrecht-checkbox]":"true"},styles:[_index_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default()]})],UtrechtCheckboxAttr)},"../component-library-angular/src/form-label/component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>UtrechtFormLabelAttr});var tslib_es6=__webpack_require__("../../node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs");var form_labelngResource=__webpack_require__("../component-library-angular/src/form-label/index.scss?ngResource"),form_labelngResource_default=__webpack_require__.n(form_labelngResource),core=__webpack_require__("../../node_modules/.pnpm/@angular+core@17.1.0_rxjs@7.8.1_zone.js@0.14.3/node_modules/@angular/core/fesm2022/core.mjs");let UtrechtFormLabelAttr=class UtrechtFormLabelAttr{constructor(){}static#_=this.ctorParameters=()=>[]};UtrechtFormLabelAttr=(0,tslib_es6.gn)([(0,core.Component)({selector:"[utrecht-form-label]",template:"<ng-content></ng-content>\n",changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,inputs:["disabled","checked","type"],host:{"[class.utrecht-form-label]":"true","[class.utrecht-form-label--checkbox]":'type === "checkbox"',"[class.utrecht-form-label--checked]":"checked","[class.utrecht-form-label--disabled]":"disabled","[class.utrecht-form-label--radio]":'type === "radio"'},styles:[form_labelngResource_default()]})],UtrechtFormLabelAttr)},"../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/stories/FormFieldDescription.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Invalid:()=>Invalid,Valid:()=>Valid,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FormFieldDescription_stories});var common=__webpack_require__("../../node_modules/.pnpm/@angular+common@17.1.0_@angular+core@17.1.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+angular@7.6.4_@angular-devkit+architect@0.1701.0_@angular-devkit+build-angular@17._ema6and72lyyccaucscmxxnica/node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("../../node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs");var form_field_descriptionngResource=__webpack_require__("../component-library-angular/src/form-field-description/index.scss?ngResource"),form_field_descriptionngResource_default=__webpack_require__.n(form_field_descriptionngResource),core=__webpack_require__("../../node_modules/.pnpm/@angular+core@17.1.0_rxjs@7.8.1_zone.js@0.14.3/node_modules/@angular/core/fesm2022/core.mjs");let UtrechtFormFieldDescription=class UtrechtFormFieldDescription{constructor(){this.invalid=!1,this.valid=!1,this.warning=!1}static#_=this.ctorParameters=()=>[];static#_2=this.propDecorators={invalid:[{type:core.Input}],valid:[{type:core.Input}],warning:[{type:core.Input}],class:[{type:core.Input}]}};UtrechtFormFieldDescription=(0,tslib_es6.gn)([(0,core.Component)({selector:"utrecht-form-field-description",template:"<div\n  [ngClass]=\"{\n  'utrecht-form-field-description': true,\n  'utrecht-form-field-description--invalid': invalid,\n  'utrecht-form-field-description--valid': valid,\n  'utrecht-form-field-description--warning': warning\n}\"\n  [class]=\"class\"\n>\n  <ng-content></ng-content>\n</div>\n",changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,styles:[form_field_descriptionngResource_default()]})],UtrechtFormFieldDescription);var component=__webpack_require__("../component-library-angular/src/checkbox/component.ts"),form_label_component=__webpack_require__("../component-library-angular/src/form-label/component.ts");const FormFieldDescription_stories={title:"Angular Component/Form field description",id:"angular-component-form-field-description",argTypes:{invalid:{type:{name:"boolean",required:!1},description:"indicates if the related form field is invalid",defaultValue:!1,table:{defaultValue:{summary:!1},category:"Component API"}},valid:{type:{name:"boolean",required:!1},description:"indicates if the related form field is valid",defaultValue:!1,table:{defaultValue:{summary:!1},category:"Component API"}},warning:{type:{name:"boolean",required:!1},description:"indicates if the description contains a warning",defaultValue:!1,table:{defaultValue:{summary:!1},category:"Component API"}},textContent:{type:{name:"string",required:!0},description:"Description",defaultValue:"",table:{defaultValue:{summary:""},category:"Story"}}},decorators:[(0,dist.moduleMetadata)({declarations:[UtrechtFormFieldDescription,component._,form_label_component.h],imports:[common.CommonModule]})],component:UtrechtFormFieldDescription},Template={render:args=>({props:args,template:'\n  <utrecht-form-field-description [invalid]="invalid" [valid]="valid" [warning]="warning">\n    {{textContent}}\n  </utrecht-form-field-description>\n',component:UtrechtFormFieldDescription})},Default={...Template,args:{textContent:"Your password must contain at least 16 characters."},parameters:{status:"ALPHA"}},Invalid={...Template,args:{invalid:!0,textContent:"This is a required field and must not be left empty."},parameters:{status:"ALPHA"}},Valid={...Template,args:{valid:!0,textContent:"This is a very safe password!"},parameters:{status:"WORK IN PROGRESS"}},Warning={...Template,args:{warning:!0,textContent:"When you proceed without providing a mobile number, you will be locked out of your account when you forget the password."},parameters:{status:"WORK IN PROGRESS"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    textContent: 'Your password must contain at least 16 characters.'\n  },\n  parameters: {\n    status: 'ALPHA'\n  }\n}",...Default.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    invalid: true,\n    textContent: 'This is a required field and must not be left empty.'\n  },\n  parameters: {\n    status: 'ALPHA'\n  }\n}",...Invalid.parameters?.docs?.source}}},Valid.parameters={...Valid.parameters,docs:{...Valid.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    valid: true,\n    textContent: 'This is a very safe password!'\n  },\n  parameters: {\n    status: 'WORK IN PROGRESS'\n  }\n}",...Valid.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    warning: true,\n    textContent: 'When you proceed without providing a mobile number, you will be locked out of your account when you forget the password.'\n  },\n  parameters: {\n    status: 'WORK IN PROGRESS'\n  }\n}",...Warning.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Invalid","Valid","Warning"]},"../component-library-angular/src/checkbox/index.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Robbert Broersma\n */\n/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Gemeente Utrecht\n * Copyright (c) 2021 Robbert Broersma\n */\n/* stylelint-disable-next-line block-no-empty */\n/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Robbert Broersma\n */\n/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Gemeente Utrecht\n * Copyright (c) 2021 Robbert Broersma\n */\n/* stylelint-disable-next-line block-no-empty */\n/* stylelint-disable-next-line block-no-empty */\n.utrecht-checkbox {\n  margin-block-end: 0; /* reset native margin for input[type=\"checkbox\"] */\n  margin-block-start: 0;\n  margin-inline-end: 0;\n  margin-inline-start: 0;\n  cursor: var(--utrecht-action-activate-cursor, revert);\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n/* stylelint-disable-next-line block-no-empty */\n.utrecht-checkbox--disabled {\n  cursor: var(--utrecht-action-disabled-cursor, revert);\n}\n\n.utrecht-checkbox--focus-visible {\n  /* - The browser default focus ring should apply when these CSS custom properties are not set.\n   * - Make the `box-shadow` value available, so components that have their own `box-shadow`\n   *   can combine it with the focus ring box shadow.\n   */\n  --_utrecht-focus-ring-box-shadow: 0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);\n  box-shadow: var(--_utrecht-focus-ring-box-shadow);\n  outline-color: var(--utrecht-focus-outline-color, revert);\n  outline-offset: var(--utrecht-focus-outline-offset, revert);\n  outline-style: var(--utrecht-focus-outline-style, revert);\n  outline-width: var(--utrecht-focus-outline-width, revert);\n}\n\n.utrecht-checkbox--html-input:disabled {\n  cursor: var(--utrecht-action-disabled-cursor, revert);\n}\n.utrecht-checkbox--html-input:focus {\n  /* - The browser default focus ring should apply when these CSS custom properties are not set.\n   * - Make the `box-shadow` value available, so components that have their own `box-shadow`\n   *   can combine it with the focus ring box shadow.\n   */\n  --_utrecht-focus-ring-box-shadow: 0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);\n  box-shadow: var(--_utrecht-focus-ring-box-shadow);\n  outline-color: var(--utrecht-focus-outline-color, revert);\n  outline-offset: var(--utrecht-focus-outline-offset, revert);\n  outline-style: var(--utrecht-focus-outline-style, revert);\n  outline-width: var(--utrecht-focus-outline-width, revert);\n}\n.utrecht-checkbox--html-input:focus:not(:focus-visible) {\n  /* undo focus ring */\n  box-shadow: none;\n  outline-style: revert;\n}\n\n/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Robbert Broersma\n */\n/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Robbert Broersma\n */\n/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Gemeente Utrecht\n * Copyright (c) 2021 Robbert Broersma\n */\n/* stylelint-disable-next-line block-no-empty */\n.utrecht-checkbox--custom,\n.utrecht-custom-checkbox {\n  /*\n   * Use 24x24px as hardcoded minimum target size, to meet WCAG 2.5.8 standards.\n   * https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html\n   */\n  appearance: none;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  block-size: var(--utrecht-checkbox-size, 1em);\n  border-color: var(--utrecht-checkbox-border-color);\n  border-radius: var(--utrecht-checkbox-border-radius, 0);\n  border-style: solid;\n  border-width: var(--utrecht-checkbox-border-width);\n  cursor: var(--utrecht-action-activate-cursor, revert);\n  inline-size: var(--utrecht-checkbox-size, 1em);\n  margin-block-start: var(--utrecht-checkbox-margin-block-start);\n  min-block-size: 24px;\n  min-inline-size: 24px;\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n  vertical-align: top;\n}\n\n.utrecht-checkbox--custom.utrecht-checkbox--checked,\n.utrecht-custom-checkbox--checked {\n  background-color: var(--utrecht-checkbox-checked-background-color, var(--utrecht-checkbox-background-color));\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");\n  border-color: var(--utrecht-checkbox-checked-border-color, var(--utrecht-checkbox-border-color));\n  border-width: var(--utrecht-checkbox-checked-border-width, var(--utrecht-checkbox-border-width));\n}\n\n.utrecht-checkbox--custom.utrecht-checkbox--disabled,\n.utrecht-custom-checkbox--disabled {\n  border-color: var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color));\n  border-width: var(--utrecht-checkbox-disabled-border-width, var(--utrecht-checkbox-border-width));\n  cursor: var(--utrecht-action-disabled-cursor, not-allowed);\n}\n.utrecht-checkbox--custom.utrecht-checkbox--disabled:checked,\n.utrecht-custom-checkbox--disabled:checked {\n  background-color: var(--utrecht-checkbox-disabled-background-color, var(--utrecht-checkbox-background-color));\n  border-color: var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color));\n}\n.utrecht-checkbox--custom.utrecht-checkbox--disabled:active,\n.utrecht-custom-checkbox--disabled:active {\n  border-color: var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color));\n}\n\n.utrecht-checkbox--custom.utrecht-checkbox--indeterminate,\n.utrecht-custom-checkbox--indeterminate {\n  background-color: var(--utrecht-checkbox-indeterminate-background-color, var(--utrecht-checkbox-background-color));\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\");\n  border-color: var(--utrecht-checkbox-indeterminate-border-color, var(--utrecht-checkbox-border-color));\n  border-width: var(--utrecht-checkbox-indeterminate-border-width, var(--utrecht-checkbox-border-width));\n  color: var(--utrecht-checkbox-indeterminate-color, var(--utrecht-checkbox-color));\n}\n\n.utrecht-checkbox--custom.utrecht-checkbox--invalid,\n.utrecht-custom-checkbox--invalid {\n  border-color: var(--utrecht-checkbox-invalid-border-color, var(--utrecht-checkbox-border-color));\n  border-width: var(--utrecht-checkbox-invalid-border-width, var(--utrecht-checkbox-border-width));\n}\n\n.utrecht-checkbox--custom.utrecht-checkbox--active,\n.utrecht-custom-checkbox--active {\n  background-color: var(--utrecht-checkbox-active-background-color, var(--utrecht-checkbox-background-color));\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");\n  border-color: var(--utrecht-checkbox-active-border-color, var(--utrecht-checkbox-border-color));\n  border-width: var(--utrecht-checkbox-active-border-width, var(--utrecht-checkbox-border-width));\n  color: var(--utrecht-checkbox-active-color, var(--utrecht-checkbox-color));\n}\n\n.utrecht-checkbox--custom.utrecht-checkbox--hover,\n.utrecht-custom-checkbox--hover {\n  background-color: var(--utrecht-checkbox-hover-background-color, var(--utrecht-checkbox-background-color));\n  border-color: var(--utrecht-checkbox-hover-border-color, var(--utrecht-checkbox-border-color));\n  border-width: var(--utrecht-checkbox-hover-border-width, var(--utrecht-checkbox-border-width));\n}\n\n.utrecht-checkbox--custom.utrecht-checkbox--focus,\n.utrecht-custom-checkbox--focus {\n  background-color: var(--utrecht-checkbox-focus-background-color, var(--utrecht-checkbox-background-color));\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");\n  border-color: var(--utrecht-checkbox-focus-border-color, var(--utrecht-checkbox-border-color));\n  border-width: var(--utrecht-checkbox-focus-border-width, var(--utrecht-checkbox-border-width));\n}\n\n.utrecht-checkbox--custom.utrecht-checkbox--focus-visible,\n.utrecht-custom-checkbox--focus-visible {\n  /* - The browser default focus ring should apply when these CSS custom properties are not set.\n   * - Make the `box-shadow` value available, so components that have their own `box-shadow`\n   *   can combine it with the focus ring box shadow.\n   */\n  --_utrecht-focus-ring-box-shadow: 0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);\n  box-shadow: var(--_utrecht-focus-ring-box-shadow);\n  outline-color: var(--utrecht-focus-outline-color, revert);\n  outline-offset: var(--utrecht-focus-outline-offset, revert);\n  outline-style: var(--utrecht-focus-outline-style, revert);\n  outline-width: var(--utrecht-focus-outline-width, revert);\n}\n\n.utrecht-checkbox--custom.utrecht-checkbox--html-input:disabled,\n.utrecht-custom-checkbox--html-input:disabled {\n  border-color: var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color));\n  border-width: var(--utrecht-checkbox-disabled-border-width, var(--utrecht-checkbox-border-width));\n  cursor: var(--utrecht-action-disabled-cursor, not-allowed);\n}\n.utrecht-checkbox--custom.utrecht-checkbox--html-input:disabled:checked,\n.utrecht-custom-checkbox--html-input:disabled:checked {\n  background-color: var(--utrecht-checkbox-disabled-background-color, var(--utrecht-checkbox-background-color));\n  border-color: var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color));\n}\n.utrecht-checkbox--custom.utrecht-checkbox--html-input:disabled:active,\n.utrecht-custom-checkbox--html-input:disabled:active {\n  border-color: var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color));\n}\n.utrecht-checkbox--custom.utrecht-checkbox--html-input:hover,\n.utrecht-custom-checkbox--html-input:hover {\n  background-color: var(--utrecht-checkbox-hover-background-color, var(--utrecht-checkbox-background-color));\n  border-color: var(--utrecht-checkbox-hover-border-color, var(--utrecht-checkbox-border-color));\n  border-width: var(--utrecht-checkbox-hover-border-width, var(--utrecht-checkbox-border-width));\n}\n.utrecht-checkbox--custom.utrecht-checkbox--html-input:focus,\n.utrecht-custom-checkbox--html-input:focus {\n  background-color: var(--utrecht-checkbox-focus-background-color, var(--utrecht-checkbox-background-color));\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");\n  border-color: var(--utrecht-checkbox-focus-border-color, var(--utrecht-checkbox-border-color));\n  border-width: var(--utrecht-checkbox-focus-border-width, var(--utrecht-checkbox-border-width));\n}\n.utrecht-checkbox--custom.utrecht-checkbox--html-input:focus-visible,\n.utrecht-custom-checkbox--html-input:focus-visible {\n  /* - The browser default focus ring should apply when these CSS custom properties are not set.\n   * - Make the `box-shadow` value available, so components that have their own `box-shadow`\n   *   can combine it with the focus ring box shadow.\n   */\n  --_utrecht-focus-ring-box-shadow: 0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);\n  box-shadow: var(--_utrecht-focus-ring-box-shadow);\n  outline-color: var(--utrecht-focus-outline-color, revert);\n  outline-offset: var(--utrecht-focus-outline-offset, revert);\n  outline-style: var(--utrecht-focus-outline-style, revert);\n  outline-width: var(--utrecht-focus-outline-width, revert);\n}\n.utrecht-checkbox--custom.utrecht-checkbox--html-input:invalid, .utrecht-checkbox--custom.utrecht-checkbox--html-input[aria-invalid=true],\n.utrecht-custom-checkbox--html-input:invalid,\n.utrecht-custom-checkbox--html-input[aria-invalid=true] {\n  border-color: var(--utrecht-checkbox-invalid-border-color, var(--utrecht-checkbox-border-color));\n  border-width: var(--utrecht-checkbox-invalid-border-width, var(--utrecht-checkbox-border-width));\n}\n.utrecht-checkbox--custom.utrecht-checkbox--html-input:active,\n.utrecht-custom-checkbox--html-input:active {\n  background-color: var(--utrecht-checkbox-active-background-color, var(--utrecht-checkbox-background-color));\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");\n  border-color: var(--utrecht-checkbox-active-border-color, var(--utrecht-checkbox-border-color));\n  border-width: var(--utrecht-checkbox-active-border-width, var(--utrecht-checkbox-border-width));\n  color: var(--utrecht-checkbox-active-color, var(--utrecht-checkbox-color));\n}\n.utrecht-checkbox--custom.utrecht-checkbox--html-input:checked,\n.utrecht-custom-checkbox--html-input:checked {\n  background-color: var(--utrecht-checkbox-checked-background-color, var(--utrecht-checkbox-background-color));\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");\n  border-color: var(--utrecht-checkbox-checked-border-color, var(--utrecht-checkbox-border-color));\n  border-width: var(--utrecht-checkbox-checked-border-width, var(--utrecht-checkbox-border-width));\n}\n.utrecht-checkbox--custom.utrecht-checkbox--html-input:indeterminate,\n.utrecht-custom-checkbox--html-input:indeterminate {\n  background-color: var(--utrecht-checkbox-indeterminate-background-color, var(--utrecht-checkbox-background-color));\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\");\n  border-color: var(--utrecht-checkbox-indeterminate-border-color, var(--utrecht-checkbox-border-color));\n  border-width: var(--utrecht-checkbox-indeterminate-border-width, var(--utrecht-checkbox-border-width));\n  color: var(--utrecht-checkbox-indeterminate-color, var(--utrecht-checkbox-color));\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"../component-library-angular/src/form-field-description/index.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Robbert Broersma\n */\n/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Robbert Broersma\n */\n.utrecht-form-field-description {\n  --utrecht-document-color: currentColor;\n  color: var(--utrecht-form-field-description-color);\n  font-family: var(--utrecht-document-font-family, inherit);\n  font-size: var(--utrecht-form-field-description-font-size, inherit);\n  font-style: var(--utrecht-form-field-description-font-style);\n  margin-block-end: calc(var(--utrecht-space-around, 0) * var(--utrecht-form-field-description-margin-block-end, var(--utrecht-paragraph-margin-block-end, 0)));\n  margin-block-start: calc(var(--utrecht-space-around, 0) * var(--utrecht-form-field-description-margin-block-start, var(--utrecht-paragraph-margin-block-start, 0)));\n}\n.utrecht-form-field-description > * {\n  --utrecht-space-around: 1;\n}\n\n.utrecht-form-field-description--distanced {\n  --utrecht-space-around: 1;\n}\n\n.utrecht-form-field-description--invalid {\n  color: var(--utrecht-form-field-description-invalid-color, var(--utrecht-feedback-invalid-color, var(--utrecht-feedback-danger-color)));\n}\n\n.utrecht-form-field-description--valid {\n  color: var(--utrecht-form-field-description-valid-color, var(--utrecht-feedback-valid-color, var(--utrecht-feedback-safe-color)));\n}\n\n.utrecht-form-field-description--warning {\n  color: var(--utrecht-form-field-description-warning-color, var(--utrecht-feedback-warning-color));\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"../component-library-angular/src/form-label/index.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Robbert Broersma\n */\n/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Robbert Broersma\n */\n.utrecht-form-label {\n  color: var(--utrecht-form-label-color);\n  font-size: var(--utrecht-form-label-font-size);\n  font-weight: var(--utrecht-form-label-font-weight);\n}\n\n.utrecht-form-label--checkbox {\n  color: var(--utrecht-form-label-checkbox-color, var(--utrecht-form-label-color));\n  cursor: var(--utrecht-action-activate-cursor, revert);\n  font-weight: var(--utrecht-form-label-checkbox-font-weight, var(--utrecht-form-label-font-weight));\n}\n\n.utrecht-form-label--checked {\n  font-weight: var(--utrecht-form-label-checked-font-weight, var(--utrecht-form-label-font-weight));\n}\n\n.utrecht-form-label--disabled {\n  color: var(--utrecht-form-label-disabled-color, var(--utrecht-form-label-color));\n  cursor: var(--utrecht-action-disabled-cursor, revert);\n}\n\n.utrecht-form-label--radio {\n  color: var(--utrecht-form-label-checkbox-color, var(--utrecht-form-label-color));\n  cursor: var(--utrecht-action-activate-cursor, revert);\n  font-weight: var(--utrecht-form-label-radio-font-weight, var(--utrecht-form-label-font-weight));\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);