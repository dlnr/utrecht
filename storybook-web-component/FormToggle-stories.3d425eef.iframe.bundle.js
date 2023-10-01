/*! For license information please see FormToggle-stories.3d425eef.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[]).push([[289],{"./src/FormToggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,CheckedAndDisabled:()=>CheckedAndDisabled,Default:()=>Default,DesignTokens:()=>DesignTokens,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FormToggle_stories});const tokens_namespaceObject=JSON.parse('{"utrecht":{"form-toggle":{"accent-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-radius":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"track":{"border-radius":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"disabled":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}},"thumb":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"margin-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"min-inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"disabled":{"box-shadow":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}},"checked":{"accent-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"focus":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-style":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),index_esm=__webpack_require__("../web-component-library-react/dist/index.esm.js"),design_token_story=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/design-token-story.tsx")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const FormToggleStory=({checked,disabled})=>(0,jsx_runtime.jsx)(index_esm.JqQ,{checked:checked||null,disabled:disabled||null});FormToggleStory.displayName="FormToggleStory";const meta={title:"Web Component/Form toggle",id:"web-component-form-toggle",component:FormToggleStory,argTypes:{checked:{description:"Checked",control:"boolean"},disabled:{description:"Disabled",control:"boolean"}},args:{checked:!1,disabled:!1},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-form-toggle",tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Form Toggle\n\n## Anatomy\n\n- **track**: genoemd naar [`::-moz-range-track`](https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-track)\n- **thumb**: genoemd naar [`::-moz-range-thumb`](https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-thumb) en `::-webkit-slider-thumb`.\n"}}}},FormToggle_stories=meta,Default={},Checked={args:{checked:!0},name:"Checked"},Disabled={args:{disabled:!0},name:"Disabled"},CheckedAndDisabled={args:{disabled:!0,checked:!0},name:"Checked and disabled"},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  args: {\n    checked: true\n  },\n  name: 'Checked'\n}",...Checked.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  },\n  name: 'Disabled'\n}",...Disabled.parameters?.docs?.source}}},CheckedAndDisabled.parameters={...CheckedAndDisabled.parameters,docs:{...CheckedAndDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true,\n    checked: true\n  },\n  name: 'Checked and disabled'\n}",...CheckedAndDisabled.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Checked","Disabled","CheckedAndDisabled","DesignTokens"]}}]);