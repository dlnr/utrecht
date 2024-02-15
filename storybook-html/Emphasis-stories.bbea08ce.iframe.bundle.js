/*! For license information please see Emphasis-stories.bbea08ce.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_html=self.webpackChunk_utrecht_storybook_html||[]).push([[6278],{"./src/Emphasis.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,Hidden:()=>Hidden,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utrecht_components_emphasis_README_md_raw__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/emphasis/README.md?raw"),_utrecht_components_emphasis_tokens_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/emphasis/tokens.json"),_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),_hidden_md_raw__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/_hidden.md?raw")),_decorator__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/decorator.tsx"),_design_token_story__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/design-token-story.tsx"),_util_htmlArgTypes__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/util/htmlArgTypes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Emphasis=({...restProps})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("em",{...restProps});Emphasis.displayName="Emphasis";const meta={title:"HTML Component/Emphasis",id:"html-emphasis",component:Emphasis,decorators:[_decorator__WEBPACK_IMPORTED_MODULE_5__.j],argTypes:{children:{description:"Content of the emphasis"},hidden:_util_htmlArgTypes__WEBPACK_IMPORTED_MODULE_7__.a},args:{children:"",hidden:!1},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-emphasis",tokens:_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_2__,tokensDefinition:_utrecht_components_emphasis_tokens_json__WEBPACK_IMPORTED_MODULE_1__,docs:{description:{component:_utrecht_components_emphasis_README_md_raw__WEBPACK_IMPORTED_MODULE_0__}}}},__WEBPACK_DEFAULT_EXPORT__=meta,Default={args:{children:"The Quick Brown Fox Jumps Over The Lazy Dog"},parameters:{docs:{description:{story:"Markup using the `<em>` element."}}}},Hidden={args:{...Default.args,hidden:!0},parameters:{docs:{description:{story:_hidden_md_raw__WEBPACK_IMPORTED_MODULE_4__}}}},DesignTokens=(0,_design_token_story__WEBPACK_IMPORTED_MODULE_6__.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `<em>` element.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Hidden.parameters={...Hidden.parameters,docs:{...Hidden.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    hidden: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: hiddenDocs\n      }\n    }\n  }\n}",...Hidden.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Hidden","DesignTokens"]},"./src/util/htmlArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>hidden});const hidden={description:"Hidden",control:"boolean"}},"../../components/emphasis/README.md?raw":module=>{module.exports="\x3c!-- @license CC0-1.0 --\x3e\n\n# Emphasis\n"},"./src/_hidden.md?raw":module=>{module.exports="\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nThe global HTML attribute `hidden` should work as expected, and CSS properties such as `display: inline`, `display: block`, `display: flex` or `display: inline-flex` from the component stylesheet should not interfere with this behavior.\n"},"../../components/emphasis/tokens.json":module=>{module.exports=JSON.parse('{"utrecht":{"emphasis":{"stressed":{"font-style":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"inherit | italic | normal","inherits":true}}}},"strong":{"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}}}}}}}')}}]);