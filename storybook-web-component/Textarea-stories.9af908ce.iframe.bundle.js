/*! For license information please see Textarea-stories.9af908ce.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[]).push([[390],{"./src/Textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,Disabled:()=>Disabled,Invalid:()=>Invalid,Placeholder:()=>Placeholder,ReadOnly:()=>ReadOnly,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Textarea_stories});const tokens_namespaceObject=JSON.parse('{"utrecht":{"textarea":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.background-color"]},"type":"color"},"border-block-end-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.border-block-end-width"]},"type":"borderWidth"},"border-bottom-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.deprecated":true},"type":"borderWidth"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.border-color"]},"type":"color"},"border-radius":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length-percentage>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.border-radius"]},"type":"borderRadius"},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.border-width"]},"type":"borderWidth"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.color"]},"type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.font-family"]},"type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.font-size"]},"type":"fontSizes"},"line-height":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.line-height"]},"type":"lineHeights"},"max-inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.max-inline-size"]},"type":"sizing"},"min-block-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.pointer-target.min-size"]},"type":"sizing"},"padding-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-block-end"]},"type":"spacing"},"padding-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-block-start"]},"type":"spacing"},"padding-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-inline-end"]},"type":"spacing"},"padding-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-inline-start"]},"type":"spacing"},"placeholder":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.textarea.color","utrecht.form-control.color"]},"type":"color"}},"disabled":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.background-color","utrecht.textarea.background-color","utrecht.form-control.background-color"]},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.border-color","utrecht.textarea.border-color","utrecht.form-control.border-color"]},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.color","utrecht.textarea.color","utrecht.form-control.color"]},"type":"color"}},"focus":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.background-color","utrecht.textarea.background-color","utrecht.form-control.background-color"]},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.border-color","utrecht.textarea.border-color","utrecht.form-control.border-color"]},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.color","utrecht.textarea.color","utrecht.form-control.color"]},"type":"color"}},"invalid":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.background-color","utrecht.textarea.background-color","utrecht.form-control.background-color"]},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.border-color","utrecht.textarea.border-color","utrecht.form-control.border-color"]},"type":"color"},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.border-width","utrecht.textarea.border-width","utrecht.form-control.border-width"]},"type":"borderWidth"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.color","utrecht.textarea.color","utrecht.form-control.color"]},"type":"color"}},"read-only":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.read-only.background-color","utrecht.textarea.background-color","utrecht.form-control.background-color"]},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.read-only.border-color","utrecht.textarea.border-color","utrecht.form-control.border-color"]},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.form-control.read-only.color","utrecht.textarea.color","utrecht.form-control.color"]},"type":"color"}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),index_esm=__webpack_require__("../web-component-library-react/dist/index.esm.js"),design_token_story=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/design-token-story.tsx")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const TextareaStory=({autocomplete,cols,disabled,invalid,placeholder,readOnly,required,rows,spellcheck,value})=>(0,jsx_runtime.jsx)(index_esm.VYs,{autocomplete:autocomplete||null,cols:cols||null,disabled:disabled||null,invalid:invalid||null,placeholder:placeholder||null,readOnly:readOnly||null,required:required||null,rows:rows||null,spellcheck,value});TextareaStory.displayName="TextareaStory";const meta={title:"Web Component/Textarea",id:"web-component-textarea",component:TextareaStory,argTypes:{autocomplete:{description:"Autocomplete",control:"select",options:["","off","on","street-address"]},cols:{description:"Cols",control:"number"},disabled:{description:"Disabled",control:"boolean"},invalid:{description:"Invalid",control:"boolean"},placeholder:{description:"Placeholder",control:"text"},readOnly:{description:"Read-only",control:"boolean"},required:{description:"Required",control:"boolean"},rows:{description:"Rows",control:"number"},spellcheck:{description:"Spellcheck",control:"select",options:{"":void 0,false:!1,true:!1}},value:{description:"Value",control:"text"}},args:{cols:20,disabled:!1,invalid:!1,placeholder:"",readOnly:!1,required:!1,rows:2,value:""},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-textarea",tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Textarea\n\n## Terminologie\n\n- **textarea**: van het `<textarea>` element in HTML.\n\n## HTML\n\nGebruik in de meeste gevallen `dir="auto"` om tekstinvoer mogelijk te maken in een taal naar keuze.\n\nIn sommige gevallen gebruik je `dir="ltr"`, bijvoorbeeld voor:\n\n- code van programmeertalen\n- lijst met URLs\n- lijst met e-mailadressen\n- lijst met telefoonnummers\n\n## Class names\n\n- `.utrecht-textarea`\n- `.utrecht-textarea--invalid`\n- `.utrecht-textarea--disabled`\n- `.utrecht-textarea--read-only`\n\n## Design tokens\n\n- Textarea:\n  - `--utrecht-textarea-border-bottom-width`\n  - `--utrecht-textarea-border-color`\n  - `--utrecht-textarea-border-radius`\n  - `--utrecht-textarea-border-width`\n  - `--utrecht-textarea-color`\n  - `--utrecht-textarea-font-family`\n  - `--utrecht-textarea-font-size`\n  - `--utrecht-textarea-max-inline-size`\n  - `--utrecht-textarea-padding-block-end`\n  - `--utrecht-textarea-padding-block-start`\n  - `--utrecht-textarea-padding-inline-end`\n  - `--utrecht-textarea-padding-inline-start`\n  - Modifier: `disabled`\n    - `--utrecht-textarea-disabled-border-color`\n    - `--utrecht-textarea-disabled-color`\n  - Modifier: `invalid`\n    - `--utrecht-textarea-invalid-border-color`\n    - `--utrecht-textarea-invalid-border-width`\n  - Modifier: `read-only`:\n    - `--utrecht-textarea-read-only-border-color`\n    - `--utrecht-textarea-read-only-color`\n\n## Privacy\n\nGebruik `spellcheck="false"` voor velden die gevoelige informatie kunnen bevatten, zoals berichten van klokkenluiders, over _responsible disclosure_ van beveiligsproblemen, berichten met medische gegevens, etcetera. Sommige _browser extensions_ voor spellingcontrole sturen deze informatie naar externe servers.\n'}}}},Textarea_stories=meta,Default={args:{value:"The Quick Brown Fox Jumps Over The Lazy Dog"}},Invalid={args:{invalid:!0,value:"The Quick Brown Fox Jumps Over The Lazy Dog"},name:"Invalid"},Disabled={args:{disabled:!0,value:"The Quick Brown Fox Jumps Over The Lazy Dog"},name:"Disabled"},ReadOnly={args:{readOnly:!0,value:"The Quick Brown Fox Jumps Over The Lazy Dog"},name:"Read-only"},Required={args:{required:!0,value:"The Quick Brown Fox Jumps Over The Lazy Dog"},name:"Required"},Placeholder={args:{placeholder:"The Quick Brown Fox Jumps Over The Lazy Dog",value:""},name:"Placeholder"},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  }\n}",...Default.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  args: {\n    invalid: true,\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  name: 'Invalid'\n}",...Invalid.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true,\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  name: 'Disabled'\n}",...Disabled.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    readOnly: true,\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  name: 'Read-only'\n}",...ReadOnly.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  args: {\n    required: true,\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  name: 'Required'\n}",...Required.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'The Quick Brown Fox Jumps Over The Lazy Dog',\n    value: ''\n  },\n  name: 'Placeholder'\n}",...Placeholder.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Invalid","Disabled","ReadOnly","Required","Placeholder","DesignTokens"]}}]);