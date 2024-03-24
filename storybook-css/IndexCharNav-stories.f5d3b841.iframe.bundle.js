/*! For license information please see IndexCharNav-stories.f5d3b841.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_css=self.webpackChunk_utrecht_storybook_css||[]).push([[8583],{"./src/IndexCharNav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Button:()=>Button,ButtonDisabled:()=>ButtonDisabled,ButtonMixed:()=>ButtonMixed,ButtonPressed:()=>ButtonPressed,Default:()=>Default,DesignTokens:()=>DesignTokens,Greek:()=>Greek,LinkCurrent:()=>LinkCurrent,LinkDisabled:()=>LinkDisabled,LinkMixed:()=>LinkMixed,Ukranian:()=>Ukranian,__namedExportsOrder:()=>__namedExportsOrder,default:()=>IndexCharNav_stories});var css_module=__webpack_require__("../component-library-react/dist/css-module/index.mjs");const tokens_namespaceObject=JSON.parse('{"utrecht":{"index-char-nav":{"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"gap":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"link":{"current":{"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}}}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),design_token_story=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/design-token-story.tsx")),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),css=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.2_sass@1.69.5_webpack@5.89.0/node_modules/sass-loader/dist/cjs.js!../../components/index-char-nav/css/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(css.Z,options);css.Z&&css.Z.locals&&css.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const latinAlphabet="A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",IndexCharNavStory=({characters,availability,...restProps})=>{let charactersData="string"==typeof characters?characters.trim().split(/\s+/g).map((char=>({char,href:`./${char.toLocaleLowerCase()}/`}))):characters;return"none"===availability?charactersData=charactersData.map((({...props})=>({...props,disabled:!0}))):"mixed"===availability&&(charactersData=charactersData.map((({...props},index)=>({...props,disabled:index%3==0})))),(0,jsx_runtime.jsx)(css_module.G3,{characters:charactersData,...restProps})};IndexCharNavStory.displayName="IndexCharNavStory";const meta={title:"CSS Component/Index character navigation",id:"css-index-char-nav",component:IndexCharNavStory,argTypes:{availability:{control:{type:"radio"},options:{all:"all",none:"none",mixed:"mixed"}},currentChar:{control:"text",description:"The current character."},characters:{control:"text",description:"Space separated list of index characters."},component:{options:["link","button"],control:{type:"radio"},description:"The component to use for the navigation."}},args:{availability:"all"},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-index-char-nav",tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Index character navigation\n\nNavigate using sorted [index characters](https://cldr.unicode.org/development/development-process/design-proposals/index-characters). Index characters have differences between locales, because the characters or the alphabetical order can be different.\n"}}}},IndexCharNav_stories=meta,Default={args:{characters:latinAlphabet,component:"link"},name:"Link"},LinkCurrent={args:{characters:latinAlphabet,component:"link",currentChar:"A"},name:"Current page"},LinkDisabled={args:{availability:"none",characters:latinAlphabet,component:"link"},name:"Disabled link"},LinkMixed={args:{availability:"mixed",characters:latinAlphabet,component:"link"},name:"Links with mixed availability"},Button={args:{characters:latinAlphabet,component:"button",onLinkClick:char=>char},name:"Button"},ButtonPressed={args:{currentChar:"A",characters:latinAlphabet,component:"button"},name:"Pressed button"},ButtonMixed={args:{availability:"mixed",characters:latinAlphabet,component:"button",onLinkClick:char=>char},name:"Buttons with mixed availability"},ButtonDisabled={args:{availability:"none",characters:latinAlphabet,component:"button"},name:"Disabled button"},Greek={args:{characters:"Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω",component:"button"},decorators:[Story=>(0,jsx_runtime.jsx)("div",{lang:"el",children:Story()})],name:"Greek index characters",parameters:{chromatic:{disableSnapshot:!0}}},Ukranian={args:{characters:"А\tБ\tВ\tГ\tҐ\tД\tЕ\tЄ\tЖ\tЗ\tИ І\tЇ\tЙ\tК\tЛ\tМ\tН\tО\tП\tР\tС Т\tУ\tФ\tХ\tЦ\tЧ\tШ\tЩ\tЬ\tЮ\tЯ",component:"button"},decorators:[Story=>(0,jsx_runtime.jsx)("div",{lang:"uk",children:Story()})],name:"Ukranian index characters",parameters:{chromatic:{disableSnapshot:!0}}},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    characters: latinAlphabet,\n    component: 'link'\n  },\n  name: 'Link'\n}",...Default.parameters?.docs?.source}}},LinkCurrent.parameters={...LinkCurrent.parameters,docs:{...LinkCurrent.parameters?.docs,source:{originalSource:"{\n  args: {\n    characters: latinAlphabet,\n    component: 'link',\n    currentChar: 'A'\n  },\n  name: 'Current page'\n}",...LinkCurrent.parameters?.docs?.source}}},LinkDisabled.parameters={...LinkDisabled.parameters,docs:{...LinkDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    availability: 'none',\n    characters: latinAlphabet,\n    component: 'link'\n  },\n  name: 'Disabled link'\n}",...LinkDisabled.parameters?.docs?.source}}},LinkMixed.parameters={...LinkMixed.parameters,docs:{...LinkMixed.parameters?.docs,source:{originalSource:"{\n  args: {\n    availability: 'mixed',\n    characters: latinAlphabet,\n    component: 'link'\n  },\n  name: 'Links with mixed availability'\n}",...LinkMixed.parameters?.docs?.source}}},Button.parameters={...Button.parameters,docs:{...Button.parameters?.docs,source:{originalSource:"{\n  args: {\n    characters: latinAlphabet,\n    component: 'button',\n    onLinkClick: char => char\n  },\n  name: 'Button'\n}",...Button.parameters?.docs?.source}}},ButtonPressed.parameters={...ButtonPressed.parameters,docs:{...ButtonPressed.parameters?.docs,source:{originalSource:"{\n  args: {\n    currentChar: 'A',\n    characters: latinAlphabet,\n    component: 'button'\n  },\n  name: 'Pressed button'\n}",...ButtonPressed.parameters?.docs?.source}}},ButtonMixed.parameters={...ButtonMixed.parameters,docs:{...ButtonMixed.parameters?.docs,source:{originalSource:"{\n  args: {\n    availability: 'mixed',\n    characters: latinAlphabet,\n    component: 'button',\n    onLinkClick: char => char\n  },\n  name: 'Buttons with mixed availability'\n}",...ButtonMixed.parameters?.docs?.source}}},ButtonDisabled.parameters={...ButtonDisabled.parameters,docs:{...ButtonDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    availability: 'none',\n    characters: latinAlphabet,\n    component: 'button'\n  },\n  name: 'Disabled button'\n}",...ButtonDisabled.parameters?.docs?.source}}},Greek.parameters={...Greek.parameters,docs:{...Greek.parameters?.docs,source:{originalSource:"{\n  args: {\n    characters: greekAlphabet,\n    component: 'button'\n  },\n  decorators: [Story => <div lang=\"el\">{Story()}</div>],\n  name: 'Greek index characters',\n  parameters: {\n    chromatic: {\n      disableSnapshot: true\n    }\n  }\n}",...Greek.parameters?.docs?.source}}},Ukranian.parameters={...Ukranian.parameters,docs:{...Ukranian.parameters?.docs,source:{originalSource:"{\n  args: {\n    characters: ukranianAlphabet,\n    component: 'button'\n  },\n  decorators: [Story => <div lang=\"uk\">{Story()}</div>],\n  name: 'Ukranian index characters',\n  parameters: {\n    chromatic: {\n      disableSnapshot: true\n    }\n  }\n}",...Ukranian.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","LinkCurrent","LinkDisabled","LinkMixed","Button","ButtonPressed","ButtonMixed","ButtonDisabled","Greek","Ukranian","DesignTokens"]},"./src/design-token-story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/design-token-story.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"src/design-token-story.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.2_sass@1.69.5_webpack@5.89.0/node_modules/sass-loader/dist/cjs.js!../../components/index-char-nav/css/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utrecht-index-char-nav{--utrecht-button-padding-inline-start: 1ch;--utrecht-button-padding-inline-end: 1ch;display:flex;flex-wrap:wrap;gap:var(--utrecht-index-char-nav-gap);margin-block-end:var(--utrecht-index-char-nav-margin-block-end);margin-block-start:var(--utrecht-index-char-nav-margin-block-start)}.utrecht-index-char-nav__link--current{--utrecht-button-primary-action-font-weight: var(--utrecht-index-char-nav-link-current-font-weight);--utrecht-button-link-primary-action-font-weight: var(--utrecht-index-char-nav-link-current-font-weight)}.utrecht-index-char-nav__link--disabled{pointer-events:none}","",{version:3,sources:["webpack://./../../components/index-char-nav/css/index.scss","webpack://./../../components/index-char-nav/css/_mixin.scss"],names:[],mappings:"AAQA,wBCDE,0CAAA,CACA,wCAAA,CAEA,YAAA,CACA,cAAA,CACA,qCAAA,CACA,+DAAA,CACA,mEAAA,CDEF,uCCME,mGAAA,CACA,wGAAA,CDHF,wCCOE,mBAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2020-2022 Gemeente Utrecht\n * Copyright (c) 2020-2022 Frameless B.V.\n */\n\n@import "./mixin";\n\n.utrecht-index-char-nav {\n  @include utrecht-index-char-nav;\n}\n\n.utrecht-index-char-nav__link {\n  @include utrecht-index-char-nav__link;\n}\n\n.utrecht-index-char-nav__link--current {\n  @include utrecht-index-char-nav__link--current;\n}\n\n.utrecht-index-char-nav__link--disabled {\n  @include utrecht-index-char-nav__link--disabled;\n}\n',"/**\n * @license EUPL-1.2\n * Copyright (c) 2020-2022 Gemeente Utrecht\n * Copyright (c) 2020-2022 Frameless B.V.\n */\n\n@mixin utrecht-index-char-nav {\n  --utrecht-button-padding-inline-start: 1ch;\n  --utrecht-button-padding-inline-end: 1ch;\n\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--utrecht-index-char-nav-gap);\n  margin-block-end: var(--utrecht-index-char-nav-margin-block-end);\n  margin-block-start: var(--utrecht-index-char-nav-margin-block-start);\n}\n\n/* stylelint-disable-next-line block-no-empty */\n@mixin utrecht-index-char-nav__link {\n}\n\n@mixin utrecht-index-char-nav__link--current {\n  --utrecht-button-primary-action-font-weight: var(--utrecht-index-char-nav-link-current-font-weight);\n  --utrecht-button-link-primary-action-font-weight: var(--utrecht-index-char-nav-link-current-font-weight);\n}\n\n@mixin utrecht-index-char-nav__link--disabled {\n  pointer-events: none;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);