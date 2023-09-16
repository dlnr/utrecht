/*! For license information please see web-component-Paragraph-stories.9dfa912d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[64652],{"./stories/web-component/Paragraph.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,Lead:()=>Lead,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utrecht_components_paragraph_README_md_raw__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/paragraph/README.md?raw"),_utrecht_components_paragraph_tokens_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/paragraph/tokens.json"),_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),_components_util__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./stories/components/util.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Paragraph=({children,lead})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("utrecht-paragraph",{lead:lead||null,children});Paragraph.displayName="Paragraph";const meta={title:"Web Component/Paragraph",id:"web-component-paragraph",component:Paragraph,argTypes:{children:{description:"Content of the paragraph"}},args:{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]},tags:["autodocs"],parameters:{status:{type:"ALPHA"},tokensPrefix:"utrecht-paragraph",tokens:_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_2__,tokensDefinition:_utrecht_components_paragraph_tokens_json__WEBPACK_IMPORTED_MODULE_1__,docs:{description:{component:_utrecht_components_paragraph_README_md_raw__WEBPACK_IMPORTED_MODULE_0__}}}},__WEBPACK_DEFAULT_EXPORT__=meta,Default={parameters:{status:{type:"ALPHA"}}},Lead={args:{lead:!0},parameters:{docs:{description:{story:'Currently the API is a boolean attribute, but that will lead to conflicting expectations when another boolean attribute for appearance is introduced. Perhaps this API will be changed to `appearance="lead"`.'}},status:{type:"WORK IN PROGRESS"}}},DesignTokens=(0,_components_util__WEBPACK_IMPORTED_MODULE_4__.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    status: {\n      type: 'ALPHA'\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Lead.parameters={...Lead.parameters,docs:{...Lead.parameters?.docs,source:{originalSource:"{\n  args: {\n    lead: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Currently the API is a boolean attribute, but that will lead to conflicting expectations when another boolean attribute for appearance is introduced. Perhaps this API will be changed to `appearance=\"lead\"`.'\n      }\n    },\n    status: {\n      type: 'WORK IN PROGRESS'\n    }\n  }\n}",...Lead.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Lead","DesignTokens"]}}]);