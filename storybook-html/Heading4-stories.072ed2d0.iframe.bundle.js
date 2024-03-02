/*! For license information please see Heading4-stories.072ed2d0.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_html=self.webpackChunk_utrecht_storybook_html||[]).push([[1271],{"./src/Heading4.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,Hidden:()=>Hidden,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Heading4_stories});const tokens_namespaceObject=JSON.parse('{"utrecht":{"heading-4":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.heading.color","utrecht.document.color"]},"type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true},"nl.nldesignsystem.fallback":["utrecht.heading.font-family","utrecht.document.font-family"]},"type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true},"nl.nldesignsystem.fallback":["utrecht.heading.font-weight"]},"type":"fontWeights"},"line-height":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"lineHeights"},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.figma.supports-token":false},"type":"spacing"},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.figma.supports-token":false},"type":"spacing"}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),_hiddenraw=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/_hidden.md?raw")),decorator=__webpack_require__("./src/decorator.tsx"),design_token_story=__webpack_require__("./src/design-token-story.tsx"),htmlArgTypes=__webpack_require__("./src/util/htmlArgTypes.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Heading4=({...restProps})=>(0,jsx_runtime.jsx)("h4",{...restProps});Heading4.displayName="Heading4";const meta={title:"HTML Component/Heading/Heading 4",id:"html-heading-4",component:Heading4,decorators:[decorator.j],argTypes:{children:{description:"Content of the heading"},hidden:htmlArgTypes.a},args:{children:"",hidden:!1},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-heading-4",tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Heading 4\n"}}}},Heading4_stories=meta,Default={args:{children:"The Quick Brown Fox Jumps Over The Lazy Dog"},parameters:{docs:{description:{story:"Markup using the `<h4>` element."}}}},Hidden={args:{...Default.args,hidden:!0},parameters:{docs:{description:{story:_hiddenraw}}}},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `<h4>` element.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Hidden.parameters={...Hidden.parameters,docs:{...Hidden.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    hidden: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: hiddenDocs\n      }\n    }\n  }\n}",...Hidden.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Hidden","DesignTokens"]},"./src/util/htmlArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>hidden});const hidden={description:"Hidden",control:"boolean"}},"./src/_hidden.md?raw":module=>{module.exports="\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nThe global HTML attribute `hidden` should work as expected, and CSS properties such as `display: inline`, `display: block`, `display: flex` or `display: inline-flex` from the component stylesheet should not interfere with this behavior.\n"}}]);