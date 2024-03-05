(self.webpackChunk_utrecht_storybook_angular=self.webpackChunk_utrecht_storybook_angular||[]).push([[641],{"../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/stories/Textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Focus:()=>Focus,FocusVisible:()=>FocusVisible,Hover:()=>Hover,Invalid:()=>Invalid,LeftToRight:()=>LeftToRight,Required:()=>Required,Value:()=>Value,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Textarea_stories});var tslib_es6=__webpack_require__("../../node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs"),textareangResource=__webpack_require__("../component-library-angular/src/textarea/index.scss?ngResource"),textareangResource_default=__webpack_require__.n(textareangResource),core=__webpack_require__("../../node_modules/.pnpm/@angular+core@17.1.0_rxjs@7.8.1_zone.js@0.14.3/node_modules/@angular/core/fesm2022/core.mjs");let UtrechtTextareaAttr=class UtrechtTextareaAttr{constructor(){this.dir="",this.disabled=!1,this.invalid=!1,this.required=!1,this.readonly=!1}static#_=this.ctorParameters=()=>[];static#_2=this.propDecorators={dir:[{type:core.Input}],disabled:[{type:core.Input}],invalid:[{type:core.Input}],required:[{type:core.Input}],readonly:[{type:core.Input}]}};UtrechtTextareaAttr=(0,tslib_es6.gn)([(0,core.Component)({selector:"textarea[utrecht-textarea]",template:"",changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,host:{"[attr.aria-invalid]":"invalid || undefined","[attr.dir]":'dir || "auto"',"[attr.name]":"name || null","[attr.readonly]":"readonly || null","[class.utrecht-textarea--disabled]":"disabled","[class.utrecht-textarea--html-textarea]":"true","[class.utrecht-textarea--invalid]":"invalid","[class.utrecht-textarea--readonly]":"readonly","[class.utrecht-textarea--required]":"required","[class.utrecht-textarea--url]":'type === "email" || type === "url"',"[class.utrecht-textarea]":"true","[attr.disabled]":'disabled ? "disabled": null',"[attr.required]":'required ? "required": null'},styles:[textareangResource_default()]})],UtrechtTextareaAttr);const Textarea_stories={title:"Angular Component/Textarea",id:"angular-textarea",component:UtrechtTextareaAttr,argTypes:{dir:{name:"dir",type:{name:"string",required:!1},control:"select",options:["","auto","ltr","rtl"],table:{category:"DOM API",defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{category:"DOM API",defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{category:"Component API",defaultValue:{summary:!1}}},required:{name:"checked",type:{name:"boolean",required:!1},table:{category:"DOM API",defaultValue:{summary:!1}}},value:{name:"value",type:{name:"string",required:!1},table:{category:"DOM API",defaultValue:{summary:!1}}}}},Template={render:args=>({props:args,template:'<textarea [invalid]="invalid" [value]="value" [dir]="dir" [disabled]="disabled" utrecht-textarea></textarea>',component:UtrechtTextareaAttr})},Default={...Template,args:{value:""}},Value={...Template,args:{value:"Hello world"}},Hover={...Template,parameters:{pseudo:{hover:!0}},args:{value:""}},Focus={...Template,parameters:{pseudo:{focus:!0}},args:{value:""}},FocusVisible={...Template,parameters:{pseudo:{focusVisible:!0}},args:{value:""}},Disabled={...Template,args:{disabled:!0,value:""}},Invalid={...Template,args:{invalid:!0,value:""}},Required={...Template,args:{required:!0,value:""}},LeftToRight={...Template,args:{dir:"ltr",value:""}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    value: ''\n  }\n}",...Default.parameters?.docs?.source}}},Value.parameters={...Value.parameters,docs:{...Value.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    value: 'Hello world'\n  }\n}",...Value.parameters?.docs?.source}}},Hover.parameters={...Hover.parameters,docs:{...Hover.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  parameters: {\n    pseudo: {\n      hover: true\n    }\n  },\n  args: {\n    value: ''\n  }\n}",...Hover.parameters?.docs?.source}}},Focus.parameters={...Focus.parameters,docs:{...Focus.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  parameters: {\n    pseudo: {\n      focus: true\n    }\n  },\n  args: {\n    value: ''\n  }\n}",...Focus.parameters?.docs?.source}}},FocusVisible.parameters={...FocusVisible.parameters,docs:{...FocusVisible.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  parameters: {\n    pseudo: {\n      focusVisible: true\n    }\n  },\n  args: {\n    value: ''\n  }\n}",...FocusVisible.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    disabled: true,\n    value: ''\n  }\n}",...Disabled.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    invalid: true,\n    value: ''\n  }\n}",...Invalid.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    required: true,\n    value: ''\n  }\n}",...Required.parameters?.docs?.source}}},LeftToRight.parameters={...LeftToRight.parameters,docs:{...LeftToRight.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    dir: 'ltr',\n    value: ''\n  }\n}",...LeftToRight.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Value","Hover","Focus","FocusVisible","Disabled","Invalid","Required","LeftToRight"]},"../component-library-angular/src/textarea/index.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Robbert Broersma\n */\n/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Gemeente Utrecht\n * Copyright (c) 2021 Robbert Broersma\n */\n/* stylelint-disable-next-line block-no-empty */\n/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Robbert Broersma\n */\n/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Gemeente Utrecht\n * Copyright (c) 2021 Robbert Broersma\n */\n/* stylelint-disable-next-line block-no-empty */\n/* TODO: Enable ordering properties when the plugin supports logical CSS properties\n * https://github.com/hudochenkov/stylelint-order/pull/162 */\n/* stylelint-disable order/properties-alphabetical-order */\n.utrecht-textarea {\n  /* Fall back to `resize: vertical` for browsers that don\'t support `resize: block` */\n  background-color: var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color));\n  block-size: initial; /* harden */\n  border-width: var(--utrecht-textarea-border-width, var(--utrecht-form-control-border-width));\n  border-block-end-width: var(--utrecht-textarea-border-bottom-width, var(--utrecht-textarea-border-width, var(--utrecht-form-control-border-width)));\n  border-color: var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color));\n  border-radius: var(--utrecht-textarea-border-radius, var(--utrecht-form-control-border-radius, 0));\n  border-style: solid;\n  box-sizing: border-box;\n  color: var(--utrecht-textarea-color, var(--utrecht-form-control-color));\n  font-family: var(--utrecht-textarea-font-family, var(--utrecht-form-control-font-family));\n  font-size: var(--utrecht-textarea-font-size, var(--utrecht-form-control-font-size, inherit));\n  font-weight: initial; /* harden */\n  inline-size: 100%;\n  line-height: var(--utrecht-textarea-line-height, initial);\n  max-inline-size: var(--utrecht-textarea-max-inline-size, var(--utrecht-form-control-max-inline-size));\n  min-block-size: var(--utrecht-textarea-min-block-size, var(--utrecht-pointer-target-min-size, 44px));\n  min-inline-size: var(--utrecht-pointer-target-min-size, 44px);\n  padding-block-end: var(--utrecht-textarea-padding-block-end, var(--utrecht-form-control-padding-block-end, 0));\n  padding-block-start: var(--utrecht-textarea-padding-block-start, var(--utrecht-form-control-padding-block-start, 0));\n  padding-inline-end: var(--utrecht-textarea-padding-inline-end, var(--utrecht-form-control-padding-inline-end, initial));\n  padding-inline-start: var(--utrecht-textarea-padding-inline-start, var(--utrecht-form-control-padding-inline-start, initial));\n  resize: vertical;\n  resize: block;\n}\n\n.utrecht-textarea--invalid {\n  --_utrecht-textarea-border-width: var(\n    --utrecht-textarea-invalid-border-width,\n    var(\n      --utrecht-form-control-invalid-border-width,\n      var(--utrecht-textarea-border-width, var(--utrecht-form-control-border-width))\n    )\n  );\n  background-color: var(--utrecht-textarea-invalid-background-color, var(--utrecht-form-control-invalid-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));\n  border-width: var(--_utrecht-textarea-border-width);\n  border-block-end-width: var(--utrecht-textarea-invalid-border-bottom-width, var(--utrecht-form-control-invalid-border-bottom-width, var(--utrecht-textarea-border-bottom-width, var(--utrecht-form-control-border-bottom-width, var(--_utrecht-textarea-border-width)))));\n  border-color: var(--utrecht-textarea-invalid-border-color, var(--utrecht-form-control-invalid-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));\n  color: var(--utrecht-textarea-invalid-color, var(--utrecht-form-control-invalid-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));\n}\n\n.utrecht-textarea--disabled {\n  background-color: var(--utrecht-textarea-disabled-background-color, var(--utrecht-form-control-disabled-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));\n  border-color: var(--utrecht-textarea-disabled-border-color, var(--utrecht-form-control-disabled-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));\n  color: var(--utrecht-textarea-disabled-color, var(--utrecht-form-control-disabled-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));\n  cursor: var(--utrecht-action-disabled-cursor, not-allowed);\n}\n\n.utrecht-textarea--focus {\n  background-color: var(--utrecht-textarea-focus-background-color, var(--utrecht-form-control-focus-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));\n  border-color: var(--utrecht-textarea-focus-border-color, var(--utrecht-form-control-focus-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));\n  color: var(--utrecht-textarea-focus-color, var(--utrecht-form-control-focus-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));\n}\n\n.utrecht-textarea--focus-visible {\n  /* - The browser default focus ring should apply when these CSS custom properties are not set.\n   * - Make the `box-shadow` value available, so components that have their own `box-shadow`\n   *   can combine it with the focus ring box shadow.\n   */\n  --_utrecht-focus-ring-box-shadow: 0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);\n  box-shadow: var(--_utrecht-focus-ring-box-shadow);\n  outline-color: var(--utrecht-focus-outline-color, revert);\n  outline-offset: var(--utrecht-focus-outline-offset, revert);\n  outline-style: var(--utrecht-focus-outline-style, revert);\n  outline-width: var(--utrecht-focus-outline-width, revert);\n}\n\n.utrecht-textarea--read-only {\n  background-color: var(--utrecht-textarea-read-only-border, var(--utrecht-form-control-read-only-background-color, var(--utrecht-textarea-border, var(--utrecht-form-control-background-color))));\n  border-color: var(--utrecht-textarea-read-only-border, var(--utrecht-form-control-read-only-border-color, var(--utrecht-textarea-border, var(--utrecht-form-control-border-color))));\n  color: var(--utrecht-textarea-read-only-color, var(--utrecht-form-control-read-only-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));\n}\n\n.utrecht-textarea__placeholder {\n  color: var(--utrecht-textarea-placeholder-color, var(--utrecht-form-control-placeholder-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));\n  font-style: var(--utrecht-form-control-placeholder-font-style);\n  opacity: 100%;\n}\n\n.utrecht-textarea--html-textarea {\n  /* The `textarea:read-only` pseudo selector applies to both `<textarea readonly>` and `<textarea disabled>` */\n  /*\n   * The `textarea:disabled` pseudo selector applies to `<textarea disabled>`, but not to `<textarea aria-disabled="true">`\n   *\n   * We consider `disabled` more specific than `read-only`, so the `:disabled` selector should come after the `:read-only` selector.\n   */\n}\n.utrecht-textarea--html-textarea:focus {\n  background-color: var(--utrecht-textarea-focus-background-color, var(--utrecht-form-control-focus-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));\n  border-color: var(--utrecht-textarea-focus-border-color, var(--utrecht-form-control-focus-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));\n  color: var(--utrecht-textarea-focus-color, var(--utrecht-form-control-focus-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));\n  /* - The browser default focus ring should apply when these CSS custom properties are not set.\n   * - Make the `box-shadow` value available, so components that have their own `box-shadow`\n   *   can combine it with the focus ring box shadow.\n   */\n  --_utrecht-focus-ring-box-shadow: 0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);\n  box-shadow: var(--_utrecht-focus-ring-box-shadow);\n  outline-color: var(--utrecht-focus-outline-color, revert);\n  outline-offset: var(--utrecht-focus-outline-offset, revert);\n  outline-style: var(--utrecht-focus-outline-style, revert);\n  outline-width: var(--utrecht-focus-outline-width, revert);\n}\n.utrecht-textarea--html-textarea:focus:not(:focus-visible) {\n  /* undo focus ring */\n  box-shadow: none;\n  outline-style: revert;\n}\n.utrecht-textarea--html-textarea:invalid, .utrecht-textarea--html-textarea[aria-invalid=true] {\n  --_utrecht-textarea-border-width: var(\n    --utrecht-textarea-invalid-border-width,\n    var(\n      --utrecht-form-control-invalid-border-width,\n      var(--utrecht-textarea-border-width, var(--utrecht-form-control-border-width))\n    )\n  );\n  background-color: var(--utrecht-textarea-invalid-background-color, var(--utrecht-form-control-invalid-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));\n  border-width: var(--_utrecht-textarea-border-width);\n  border-block-end-width: var(--utrecht-textarea-invalid-border-bottom-width, var(--utrecht-form-control-invalid-border-bottom-width, var(--utrecht-textarea-border-bottom-width, var(--utrecht-form-control-border-bottom-width, var(--_utrecht-textarea-border-width)))));\n  border-color: var(--utrecht-textarea-invalid-border-color, var(--utrecht-form-control-invalid-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));\n  color: var(--utrecht-textarea-invalid-color, var(--utrecht-form-control-invalid-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));\n}\n.utrecht-textarea--html-textarea:read-only {\n  background-color: var(--utrecht-textarea-read-only-border, var(--utrecht-form-control-read-only-background-color, var(--utrecht-textarea-border, var(--utrecht-form-control-background-color))));\n  border-color: var(--utrecht-textarea-read-only-border, var(--utrecht-form-control-read-only-border-color, var(--utrecht-textarea-border, var(--utrecht-form-control-border-color))));\n  color: var(--utrecht-textarea-read-only-color, var(--utrecht-form-control-read-only-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));\n}\n.utrecht-textarea--html-textarea:disabled {\n  background-color: var(--utrecht-textarea-disabled-background-color, var(--utrecht-form-control-disabled-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));\n  border-color: var(--utrecht-textarea-disabled-border-color, var(--utrecht-form-control-disabled-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));\n  color: var(--utrecht-textarea-disabled-color, var(--utrecht-form-control-disabled-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));\n  cursor: var(--utrecht-action-disabled-cursor, not-allowed);\n}\n.utrecht-textarea--html-textarea::placeholder {\n  color: var(--utrecht-textarea-placeholder-color, var(--utrecht-form-control-placeholder-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));\n  font-style: var(--utrecht-form-control-placeholder-font-style);\n  opacity: 100%;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);