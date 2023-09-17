/*! For license information please see BadgeCounter-stories.14b69248.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[]).push([[7818],{"./src/BadgeCounter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,DoubleDigit:()=>DoubleDigit,FormattedTextContent:()=>FormattedTextContent,MaximumBoundary:()=>MaximumBoundary,NumberFormatDutch:()=>NumberFormatDutch,NumberFormatFinnish:()=>NumberFormatFinnish,NumberFormatUSEnglish:()=>NumberFormatUSEnglish,QuadrupleDigit:()=>QuadrupleDigit,TripleDigit:()=>TripleDigit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BadgeCounter_stories});const tokens_namespaceObject=JSON.parse('{"utrecht":{"badge-counter":{"background-color":{"comment":"Default background color for badge components","$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-radius":{"comment":"Default corner radius for badge components","$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length-percentage>","inherits":true}},"type":"borderRadius"},"color":{"comment":"Default text color for badge components","$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}},"type":"fontWeights"},"padding-block":{"comment":"Default block padding for badge components","$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"spacing"},"padding-inline":{"comment":"Default inline padding color for badge components","$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"spacing"}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),index_esm=__webpack_require__("../web-component-library-react/dist/index.esm.js"),design_token_story=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/design-token-story.tsx")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const BadgeCounterStory=({children,locale,value,max})=>(0,jsx_runtime.jsx)(index_esm.$jp,{max,value,locale,children});BadgeCounterStory.displayName="BadgeCounterStory";const meta={title:"Web Component/Badge counter",id:"web-component-badge-counter",component:BadgeCounterStory,argTypes:{children:{description:"Text content",control:"text"},value:{description:"Value",control:"number"},max:{description:"Maximum",control:"number"},locale:{description:"Locale",control:"text"}},args:{children:""},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-badge-counter",tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Counter badge\n"}}}},BadgeCounter_stories=meta,Default={args:{value:7,children:"7"}},NumberFormatUSEnglish={args:{children:1234,value:1234,locale:"en-US"},name:"Locale/US English"},NumberFormatFinnish={args:{children:1234,value:1234,locale:"fi"},name:"Locale/Finnish"},NumberFormatDutch={args:{children:1234,value:1234,locale:"nl-NL"},name:"Locale/Dutch"},MaximumBoundary={args:{max:999,value:1024},parameters:{status:{type:"WORK IN PROGRESS"}},name:"Maximum boundary"},FormattedTextContent={args:{children:"1,234"},parameters:{status:{type:"WORK IN PROGRESS"}},name:"Formatted text-content"},DoubleDigit={args:{value:42,children:"42"},parameters:{status:{type:"WORK IN PROGRESS"}},name:"Double digit"},TripleDigit={args:{value:316,children:"316"},parameters:{status:{type:"WORK IN PROGRESS"}},name:"Triple digit"},QuadrupleDigit={args:{value:2148,children:"2148"},parameters:{status:{type:"WORK IN PROGRESS"}},name:"Quadruple digit"},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 7,\n    children: '7'\n  }\n}",...Default.parameters?.docs?.source}}},NumberFormatUSEnglish.parameters={...NumberFormatUSEnglish.parameters,docs:{...NumberFormatUSEnglish.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 1234,\n    value: 1234,\n    locale: 'en-US'\n  },\n  name: 'Locale/US English'\n}",...NumberFormatUSEnglish.parameters?.docs?.source}}},NumberFormatFinnish.parameters={...NumberFormatFinnish.parameters,docs:{...NumberFormatFinnish.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 1234,\n    value: 1234,\n    locale: 'fi'\n  },\n  name: 'Locale/Finnish'\n}",...NumberFormatFinnish.parameters?.docs?.source}}},NumberFormatDutch.parameters={...NumberFormatDutch.parameters,docs:{...NumberFormatDutch.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 1234,\n    value: 1234,\n    locale: 'nl-NL'\n  },\n  name: 'Locale/Dutch'\n}",...NumberFormatDutch.parameters?.docs?.source}}},MaximumBoundary.parameters={...MaximumBoundary.parameters,docs:{...MaximumBoundary.parameters?.docs,source:{originalSource:"{\n  args: {\n    max: 999,\n    value: 1024\n  },\n  parameters: {\n    status: {\n      type: 'WORK IN PROGRESS'\n    }\n  },\n  name: 'Maximum boundary'\n}",...MaximumBoundary.parameters?.docs?.source}}},FormattedTextContent.parameters={...FormattedTextContent.parameters,docs:{...FormattedTextContent.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: '1,234'\n  },\n  parameters: {\n    status: {\n      type: 'WORK IN PROGRESS'\n    }\n  },\n  name: 'Formatted text-content'\n}",...FormattedTextContent.parameters?.docs?.source}}},DoubleDigit.parameters={...DoubleDigit.parameters,docs:{...DoubleDigit.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 42,\n    children: '42'\n  },\n  parameters: {\n    status: {\n      type: 'WORK IN PROGRESS'\n    }\n  },\n  name: 'Double digit'\n}",...DoubleDigit.parameters?.docs?.source}}},TripleDigit.parameters={...TripleDigit.parameters,docs:{...TripleDigit.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 316,\n    children: '316'\n  },\n  parameters: {\n    status: {\n      type: 'WORK IN PROGRESS'\n    }\n  },\n  name: 'Triple digit'\n}",...TripleDigit.parameters?.docs?.source}}},QuadrupleDigit.parameters={...QuadrupleDigit.parameters,docs:{...QuadrupleDigit.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 2148,\n    children: '2148'\n  },\n  parameters: {\n    status: {\n      type: 'WORK IN PROGRESS'\n    }\n  },\n  name: 'Quadruple digit'\n}",...QuadrupleDigit.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","NumberFormatUSEnglish","NumberFormatFinnish","NumberFormatDutch","MaximumBoundary","FormattedTextContent","DoubleDigit","TripleDigit","QuadrupleDigit","DesignTokens"]}}]);