/*! For license information please see Textarea-stories.1fcff9c7.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_html=self.webpackChunk_utrecht_storybook_html||[]).push([[390],{"./src/Textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,Disabled:()=>Disabled,Hidden:()=>Hidden,Invalid:()=>Invalid,Placeholder:()=>Placeholder,ReadOnly:()=>ReadOnly,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Textarea_stories});const tokens_namespaceObject=JSON.parse('{"utrecht":{"textarea":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.background-color"]},"type":"color"},"border-block-end-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.border-block-end-width"]},"type":"borderWidth"},"border-bottom-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.deprecated":true},"type":"borderWidth"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.border-color"]},"type":"color"},"border-radius":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length-percentage>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.border-radius"]},"type":"borderRadius"},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.border-width"]},"type":"borderWidth"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.color"]},"type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.font-family"]},"type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.font-size"]},"type":"fontSizes"},"line-height":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.line-height"]},"type":"lineHeights"},"max-inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.max-inline-size"]},"type":"sizing"},"min-block-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.pointer-target.min-size"]},"type":"sizing"},"padding-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-block-end"]},"type":"spacing"},"padding-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-block-start"]},"type":"spacing"},"padding-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-inline-end"]},"type":"spacing"},"padding-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-inline-start"]},"type":"spacing"},"placeholder":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.textarea.color","utrecht.form-control.color"]},"type":"color"}},"disabled":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.background-color","utrecht.textarea.background-color","utrecht.form-control.background-color"]},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.border-color","utrecht.textarea.border-color","utrecht.form-control.border-color"]},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.color","utrecht.textarea.color","utrecht.form-control.color"]},"type":"color"}},"focus":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.background-color","utrecht.textarea.background-color","utrecht.form-control.background-color"]},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.border-color","utrecht.textarea.border-color","utrecht.form-control.border-color"]},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.color","utrecht.textarea.color","utrecht.form-control.color"]},"type":"color"}},"invalid":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.background-color","utrecht.textarea.background-color","utrecht.form-control.background-color"]},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.border-color","utrecht.textarea.border-color","utrecht.form-control.border-color"]},"type":"color"},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.border-width","utrecht.textarea.border-width","utrecht.form-control.border-width"]},"type":"borderWidth"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.color","utrecht.textarea.color","utrecht.form-control.color"]},"type":"color"}},"read-only":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.read-only.background-color","utrecht.textarea.background-color","utrecht.form-control.background-color"]},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.read-only.border-color","utrecht.textarea.border-color","utrecht.form-control.border-color"]},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.read-only.color","utrecht.textarea.color","utrecht.form-control.color"]},"type":"color"}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),_hiddenraw=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/_hidden.md?raw")),decorator=__webpack_require__("./src/decorator.tsx"),design_token_story=__webpack_require__("./src/design-token-story.tsx"),htmlArgTypes=__webpack_require__("./src/util/htmlArgTypes.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Textarea=({disabled,invalid,placeholder,readOnly,required,value,...restProps})=>(0,jsx_runtime.jsx)("textarea",{disabled:disabled||void 0,"aria-invalid":invalid||void 0,placeholder:placeholder||void 0,readOnly:readOnly||void 0,required:required||void 0,defaultValue:value,...restProps});Textarea.displayName="Textarea";const meta={title:"HTML Component/Textarea",id:"html-textarea",component:Textarea,decorators:[decorator.j],argTypes:{invalid:{description:"Invalid",control:"boolean"},readOnly:{description:"Read-only",control:"boolean"},disabled:{description:"Disabled",control:"boolean"},hidden:htmlArgTypes.a,placeholder:{description:"Placeholder",control:"text"},required:{description:"Required",control:"boolean"},value:{description:"Set the content of the textarea",control:"text"}},args:{disabled:!1,hidden:!1,invalid:!1,placeholder:"",readOnly:!1,required:!1,value:""},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-textarea",tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Textarea\n\n## Terminologie\n\n- **textarea**: van het `<textarea>` element in HTML.\n\n## HTML\n\nGebruik in de meeste gevallen `dir="auto"` om tekstinvoer mogelijk te maken in een taal naar keuze.\n\nIn sommige gevallen gebruik je `dir="ltr"`, bijvoorbeeld voor:\n\n- code van programmeertalen\n- lijst met URLs\n- lijst met e-mailadressen\n- lijst met telefoonnummers\n\n## Class names\n\n- `.utrecht-textarea`\n- `.utrecht-textarea--invalid`\n- `.utrecht-textarea--disabled`\n- `.utrecht-textarea--read-only`\n\n## Design tokens\n\n- Textarea:\n  - `--utrecht-textarea-border-bottom-width`\n  - `--utrecht-textarea-border-color`\n  - `--utrecht-textarea-border-radius`\n  - `--utrecht-textarea-border-width`\n  - `--utrecht-textarea-color`\n  - `--utrecht-textarea-font-family`\n  - `--utrecht-textarea-font-size`\n  - `--utrecht-textarea-max-inline-size`\n  - `--utrecht-textarea-padding-block-end`\n  - `--utrecht-textarea-padding-block-start`\n  - `--utrecht-textarea-padding-inline-end`\n  - `--utrecht-textarea-padding-inline-start`\n  - Modifier: `disabled`\n    - `--utrecht-textarea-disabled-border-color`\n    - `--utrecht-textarea-disabled-color`\n  - Modifier: `invalid`\n    - `--utrecht-textarea-invalid-border-color`\n    - `--utrecht-textarea-invalid-border-width`\n  - Modifier: `read-only`:\n    - `--utrecht-textarea-read-only-border-color`\n    - `--utrecht-textarea-read-only-color`\n\n## Privacy\n\nGebruik `spellcheck="false"` voor velden die gevoelige informatie kunnen bevatten, zoals berichten van klokkenluiders, over _responsible disclosure_ van beveiligsproblemen, berichten met medische gegevens, etcetera. Sommige _browser extensions_ voor spellingcontrole sturen deze informatie naar externe servers.\n'}}}},Textarea_stories=meta,Default={args:{value:"The Quick Brown Fox Jumps Over The Lazy Dog"},parameters:{docs:{description:{story:"Markup using the `<textarea>` element."}}}},Placeholder={args:{placeholder:"The Quick Brown Fox Jumps Over The Lazy Dog",value:void 0},name:"Placeholder",parameters:{docs:{description:{story:"Markup using the `placeholder` attribute."}}}},Invalid={args:{invalid:!0,value:"The Quick Brown Fox Jumps Over The Lazy Dog"},name:"Invalid",parameters:{docs:{description:{story:'Markup using the `aria-invalid="true"` attribute.'}}}},Disabled={args:{disabled:!0,value:"The Quick Brown Fox Jumps Over The Lazy Dog"},name:"Disabled",parameters:{docs:{description:{story:"Markup using the `disabled` attribute."}}}},ReadOnly={args:{readOnly:!0,value:"The Quick Brown Fox Jumps Over The Lazy Dog"},name:"Read-only",parameters:{docs:{description:{story:"Markup using the `readonly` attribute."}}}},Required={args:{required:!0,value:"The Quick Brown Fox Jumps Over The Lazy Dog"},name:"Required",parameters:{docs:{description:{story:'Markup using the `required` or `aria-required="true"` attribute.'}}}},Hidden={args:{...Default.args,hidden:!0},parameters:{docs:{description:{story:_hiddenraw}}}},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `<textarea>` element.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'The Quick Brown Fox Jumps Over The Lazy Dog',\n    value: undefined\n  },\n  name: 'Placeholder',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `placeholder` attribute.'\n      }\n    }\n  }\n}",...Placeholder.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  args: {\n    invalid: true,\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  name: 'Invalid',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `aria-invalid=\"true\"` attribute.'\n      }\n    }\n  }\n}",...Invalid.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true,\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  name: 'Disabled',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `disabled` attribute.'\n      }\n    }\n  }\n}",...Disabled.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    readOnly: true,\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  name: 'Read-only',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `readonly` attribute.'\n      }\n    }\n  }\n}",...ReadOnly.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  args: {\n    required: true,\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  name: 'Required',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `required` or `aria-required=\"true\"` attribute.'\n      }\n    }\n  }\n}",...Required.parameters?.docs?.source}}},Hidden.parameters={...Hidden.parameters,docs:{...Hidden.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    hidden: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: hiddenDocs\n      }\n    }\n  }\n}",...Hidden.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Placeholder","Invalid","Disabled","ReadOnly","Required","Hidden","DesignTokens"]},"./src/util/htmlArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>hidden});const hidden={description:"Hidden",control:"boolean"}},"./src/_hidden.md?raw":module=>{module.exports="\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nThe global HTML attribute `hidden` should work as expected, and CSS properties such as `display: inline`, `display: block`, `display: flex` or `display: inline-flex` from the component stylesheet should not interfere with this behavior.\n"}}]);