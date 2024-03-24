/*! For license information please see Select-stories.359bfe45.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_html=self.webpackChunk_utrecht_storybook_html||[]).push([[3779],{"./src/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,Disabled:()=>Disabled,Hidden:()=>Hidden,Invalid:()=>Invalid,Multiple:()=>Multiple,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Select_stories});const tokens_namespaceObject=JSON.parse('{"utrecht":{"select":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.background-color"]}},"border-block-end-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.border-block-end-width"]}},"border-bottom-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.deprecated":true}},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.border-color"]}},"border-radius":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length-percentage>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.border-radius"]}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.border-width"]}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.color"]}},"font-family":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.font-family"]}},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.font-size"]}},"max-inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.max-inline-size"]}},"padding-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-block-end"]}},"padding-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-block-start"]}},"padding-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-inline-end"]}},"padding-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-inline-start"]}},"disabled":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.background-color","utrecht.select.background-color","utrecht.form-control.background-color"]}},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.border-color","utrecht.select.border-color","utrecht.form-control.border-color"]}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.color","utrecht.select.color","utrecht.form-control.color"]}}},"focus":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.background-color","utrecht.select.background-color","utrecht.form-control.background-color"]}},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.border-color","utrecht.select.border-color","utrecht.form-control.border-color"]}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.color","utrecht.select.color","utrecht.form-control.color"]}}},"invalid":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.background-color","utrecht.select.background-color","utrecht.form-control.background-color"]}},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.border-color","utrecht.select.border-color","utrecht.form-control.border-color"]}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.border-width","utrecht.select.border-width","utrecht.form-control.border-width"]}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),_hiddenraw=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/_hidden.md?raw")),decorator=__webpack_require__("./src/decorator.tsx"),design_token_story=__webpack_require__("./src/design-token-story.tsx"),htmlArgTypes=__webpack_require__("./src/util/htmlArgTypes.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Select=({disabled,invalid,options,required,value,...restProps})=>(0,jsx_runtime.jsx)("select",{"aria-invalid":invalid||void 0,disabled:disabled||void 0,required:required||void 0,defaultValue:value,...restProps,children:options.map((({label,selected,value})=>(0,jsx_runtime.jsx)("option",{selected:selected||void 0,value:value||void 0,children:label})))});Select.displayName="Select";const meta={title:"HTML Component/Select",id:"html-select",component:Select,decorators:[decorator.j],argTypes:{disabled:{description:"Disabled",control:"boolean"},hidden:htmlArgTypes.a,invalid:{description:"Invalid",control:"boolean"},multiple:{description:"Multiple",control:"boolean"},options:{description:"Options",type:{name:"array",required:!0}},required:{description:"Required",control:"boolean"},value:{description:"Set the value of the text box",control:"text"}},args:{disabled:!1,hidden:!1,invalid:!1,options:[],required:!1,value:""},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-select",tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Form Select component\n\n## Terminology\n\n- **select**: like the `<select>` element in HTML.\n\n## Class names\n\n- `.utrecht-select`\n- `.utrecht-select--disabled`\n- `.utrecht-select--focus`\n- `.utrecht-select--html-input`\n- `.utrecht-select--invalid`\n- `.utrecht-select--read-only`\n- `.utrecht-select--required`\n"}}}},Select_stories=meta,Default={args:{options:[{value:"1",label:"Option #1"},{value:"2",label:"Option #2",selected:!0},{value:"3",label:"Option #3"}]},parameters:{docs:{description:{story:"Markup using the `<select>` element."}}}},Invalid={args:{...Default.args,invalid:!0},name:"Invalid",parameters:{docs:{description:{story:'Markup using the `aria-invalid="true"` attribute.'}}}},Disabled={args:{...Default.args,disabled:!0},name:"Disabled",parameters:{docs:{description:{story:"Markup using the `disabled` attribute."}}}},Required={args:{...Default.args,required:!0},name:"Required",parameters:{docs:{description:{story:'Markup using the `required` or `aria-required="true"` attribute.'}}}},Multiple={args:{...Default.args,multiple:!0},name:"Multiple",parameters:{docs:{description:{story:"\x3c!-- @license CC0-1.0 --\x3e\n\nMarkup using the `multiple` attribute.\n\nAvoid the multiple select component, and use a checkbox group instead. The multiple select has significant usability disadvantages.\n"}}}},Hidden={args:{...Default.args,hidden:!0},parameters:{docs:{description:{story:_hiddenraw}}}},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: [{\n      value: '1',\n      label: 'Option #1'\n    }, {\n      value: '2',\n      label: 'Option #2',\n      selected: true\n    }, {\n      value: '3',\n      label: 'Option #3'\n    }]\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `<select>` element.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    invalid: true\n  },\n  name: 'Invalid',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `aria-invalid=\"true\"` attribute.'\n      }\n    }\n  }\n}",...Invalid.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    disabled: true\n  },\n  name: 'Disabled',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `disabled` attribute.'\n      }\n    }\n  }\n}",...Disabled.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    required: true\n  },\n  name: 'Required',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `required` or `aria-required=\"true\"` attribute.'\n      }\n    }\n  }\n}",...Required.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    multiple: true\n  },\n  name: 'Multiple',\n  parameters: {\n    docs: {\n      description: {\n        story: multipleDocs\n      }\n    }\n  }\n}",...Multiple.parameters?.docs?.source}}},Hidden.parameters={...Hidden.parameters,docs:{...Hidden.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    hidden: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: hiddenDocs\n      }\n    }\n  }\n}",...Hidden.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Invalid","Disabled","Required","Multiple","Hidden","DesignTokens"]},"./src/util/htmlArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>hidden});const hidden={description:"Hidden",control:"boolean"}},"./src/_hidden.md?raw":module=>{module.exports="\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nThe global HTML attribute `hidden` should work as expected, and CSS properties such as `display: inline`, `display: block`, `display: flex` or `display: inline-flex` from the component stylesheet should not interfere with this behavior.\n"}}]);