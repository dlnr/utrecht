/*! For license information please see web-component-BadgeCounter-stories.8d08ddd9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[28716],{"./stories/web-component/BadgeCounter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,DoubleDigit:()=>DoubleDigit,FormattedTextContent:()=>FormattedTextContent,MaximumBoundary:()=>MaximumBoundary,NumberFormatDutch:()=>NumberFormatDutch,NumberFormatFinnish:()=>NumberFormatFinnish,NumberFormatUSEnglish:()=>NumberFormatUSEnglish,QuadrupleDigit:()=>QuadrupleDigit,TripleDigit:()=>TripleDigit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utrecht_components_badge_counter_README_md_raw__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/badge-counter/README.md?raw"),_utrecht_components_badge_counter_tokens_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/badge-counter/tokens.json"),_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),_components_util__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./stories/components/util.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const BadgeCounter=({textContent,locale,value,max})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("utrecht-badge-counter",{max,value,locale,children:textContent});BadgeCounter.displayName="BadgeCounter";const meta={title:"Web Component/Badge counter",id:"web-component-badge-counter",component:BadgeCounter,argTypes:{textContent:{description:"Text content",control:"text"},value:{description:"Value",control:"number"},max:{description:"Maximum",control:"number"},locale:{description:"Locale",control:"text"}},args:{textContent:""},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-badge-counter",tokens:_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_2__,tokensDefinition:_utrecht_components_badge_counter_tokens_json__WEBPACK_IMPORTED_MODULE_1__,docs:{description:{component:_utrecht_components_badge_counter_README_md_raw__WEBPACK_IMPORTED_MODULE_0__}}}},__WEBPACK_DEFAULT_EXPORT__=meta,Default={args:{value:7,textContent:"7"}},NumberFormatUSEnglish={args:{textContent:1234,value:1234,locale:"en-US"},name:"Locale/US English"},NumberFormatFinnish={args:{textContent:1234,value:1234,locale:"fi"},name:"Locale/Finnish"},NumberFormatDutch={args:{textContent:1234,value:1234,locale:"nl-NL"},name:"Locale/Dutch"},MaximumBoundary={args:{max:999,value:1024},parameters:{status:{type:"WORK IN PROGRESS"}},name:"Maximum boundary"},FormattedTextContent={args:{textContent:"1,234"},parameters:{status:{type:"WORK IN PROGRESS"}},name:"Formatted text-content"},DoubleDigit={args:{value:42,textContent:"42"},parameters:{status:{type:"WORK IN PROGRESS"}},name:"Double digit"},TripleDigit={args:{value:316,textContent:"316"},parameters:{status:{type:"WORK IN PROGRESS"}},name:"Triple digit"},QuadrupleDigit={args:{value:2148,textContent:"2148"},parameters:{status:{type:"WORK IN PROGRESS"}},name:"Quadruple digit"},DesignTokens=(0,_components_util__WEBPACK_IMPORTED_MODULE_4__.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 7,\n    textContent: '7'\n  }\n}",...Default.parameters?.docs?.source}}},NumberFormatUSEnglish.parameters={...NumberFormatUSEnglish.parameters,docs:{...NumberFormatUSEnglish.parameters?.docs,source:{originalSource:"{\n  args: {\n    textContent: 1234,\n    value: 1234,\n    locale: 'en-US'\n  },\n  name: 'Locale/US English'\n}",...NumberFormatUSEnglish.parameters?.docs?.source}}},NumberFormatFinnish.parameters={...NumberFormatFinnish.parameters,docs:{...NumberFormatFinnish.parameters?.docs,source:{originalSource:"{\n  args: {\n    textContent: 1234,\n    value: 1234,\n    locale: 'fi'\n  },\n  name: 'Locale/Finnish'\n}",...NumberFormatFinnish.parameters?.docs?.source}}},NumberFormatDutch.parameters={...NumberFormatDutch.parameters,docs:{...NumberFormatDutch.parameters?.docs,source:{originalSource:"{\n  args: {\n    textContent: 1234,\n    value: 1234,\n    locale: 'nl-NL'\n  },\n  name: 'Locale/Dutch'\n}",...NumberFormatDutch.parameters?.docs?.source}}},MaximumBoundary.parameters={...MaximumBoundary.parameters,docs:{...MaximumBoundary.parameters?.docs,source:{originalSource:"{\n  args: {\n    max: 999,\n    value: 1024\n  },\n  parameters: {\n    status: {\n      type: 'WORK IN PROGRESS'\n    }\n  },\n  name: 'Maximum boundary'\n}",...MaximumBoundary.parameters?.docs?.source}}},FormattedTextContent.parameters={...FormattedTextContent.parameters,docs:{...FormattedTextContent.parameters?.docs,source:{originalSource:"{\n  args: {\n    textContent: '1,234'\n  },\n  parameters: {\n    status: {\n      type: 'WORK IN PROGRESS'\n    }\n  },\n  name: 'Formatted text-content'\n}",...FormattedTextContent.parameters?.docs?.source}}},DoubleDigit.parameters={...DoubleDigit.parameters,docs:{...DoubleDigit.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 42,\n    textContent: '42'\n  },\n  parameters: {\n    status: {\n      type: 'WORK IN PROGRESS'\n    }\n  },\n  name: 'Double digit'\n}",...DoubleDigit.parameters?.docs?.source}}},TripleDigit.parameters={...TripleDigit.parameters,docs:{...TripleDigit.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 316,\n    textContent: '316'\n  },\n  parameters: {\n    status: {\n      type: 'WORK IN PROGRESS'\n    }\n  },\n  name: 'Triple digit'\n}",...TripleDigit.parameters?.docs?.source}}},QuadrupleDigit.parameters={...QuadrupleDigit.parameters,docs:{...QuadrupleDigit.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 2148,\n    textContent: '2148'\n  },\n  parameters: {\n    status: {\n      type: 'WORK IN PROGRESS'\n    }\n  },\n  name: 'Quadruple digit'\n}",...QuadrupleDigit.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","NumberFormatUSEnglish","NumberFormatFinnish","NumberFormatDutch","MaximumBoundary","FormattedTextContent","DoubleDigit","TripleDigit","QuadrupleDigit","DesignTokens"]}}]);