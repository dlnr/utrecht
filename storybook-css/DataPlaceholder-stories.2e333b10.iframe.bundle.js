/*! For license information please see DataPlaceholder-stories.2e333b10.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_css=self.webpackChunk_utrecht_storybook_css||[]).push([[2057],{"./src/DataPlaceholder.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DataListPlaceholder:()=>DataListPlaceholder,Default:()=>Default,DesignTokens:()=>DesignTokens,ForcedColors:()=>ForcedColors,HeadingPlaceholder:()=>HeadingPlaceholder,HighContrast:()=>HighContrast,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DataPlaceholder_stories});var index_esm=__webpack_require__("../component-library-react/dist/index.esm.js"),css_module=__webpack_require__("../component-library-react/dist/css-module/index.mjs");const tokens_namespaceObject=JSON.parse('{"utrecht":{"data-placeholder":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"max-inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"min-inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"high-contrast":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),design_token_story=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/design-token-story.tsx")),jsx_runtime=(__webpack_require__("../../components/alert/css/index.scss"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const meta={title:"CSS Component/Data placeholder",id:"css-data-placeholder",argTypes:{loading:{description:"Loading",control:"boolean"},forcedColors:{description:"Forced colors",control:"boolean"},highContrast:{description:"High contrast",control:"boolean"}},args:{},render:({loading,forcedColors,highContrast,...props})=>(0,jsx_runtime.jsx)(css_module.nv,{children:(0,jsx_runtime.jsx)(index_esm.hM,{className:(0,clsx_m.Z)({"utrecht-data-placeholder--loading":loading,"utrecht-data-placeholder--forced-colors":forcedColors,"utrecht-data-placeholder--high-contrast":highContrast}),...props})}),tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-data-placeholder",tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Data placeholder\n\nGebruik deze component op plaatsen waar de user interface al getoond wordt en data nog geladen wordt.\n\n_Help wanted_: deze component is alleen voor korte teksten, zoals voornaam, adres, etcetera. Er is nog geen ondersteuning voor data placeholders van meerdere regels, placeholders voor hele blokken, en placeholders voor vierkante en ronde afbeeldingen.\n"}}}},DataPlaceholder_stories=meta,Default={parameters:{status:{type:"ALPHA"}}},Loading={args:{loading:!0},parameters:{status:{type:"WORK IN PROGRESS"},docs:{description:{story:"Help wanted: animatie voor de _loading_ state (alleen voor `@media (prefers-reduced-motion: no-preference)`."}}}},ForcedColors={args:{forcedColors:!0},parameters:{status:{type:"WORK IN PROGRESS"}}},HighContrast={args:{highContrast:!0},parameters:{status:{type:"WORK IN PROGRESS"}}},DataListPlaceholder={args:{},parameters:{docs:{description:{story:"Help wanted: overzicht maken van de `min-inline-size` en `max-inline-size` van veelgebruikte datatypes."}},status:{type:"WORK IN PROGRESS"}},render:()=>(0,jsx_runtime.jsxs)(css_module.FR,{children:[(0,jsx_runtime.jsxs)(css_module.LC,{style:{"--utrecht-data-placeholder-max-inline-size":"20em"},children:[(0,jsx_runtime.jsx)(css_module.rt,{children:"Straatnaam"}),(0,jsx_runtime.jsx)(css_module.JL,{children:(0,jsx_runtime.jsx)(index_esm.hM,{loading:!0})})]}),(0,jsx_runtime.jsxs)(css_module.LC,{style:{"--utrecht-data-placeholder-min-inline-size":"1ch","--utrecht-data-placeholder-max-inline-size":"5ch"},children:[(0,jsx_runtime.jsx)(css_module.rt,{children:"Huisnummer"}),(0,jsx_runtime.jsx)(css_module.JL,{children:(0,jsx_runtime.jsx)(index_esm.hM,{loading:!0})})]}),(0,jsx_runtime.jsxs)(css_module.LC,{style:{"--utrecht-data-placeholder-min-inline-size":"1em"},children:[(0,jsx_runtime.jsx)(css_module.rt,{children:"Huisletter"}),(0,jsx_runtime.jsx)(css_module.JL,{children:(0,jsx_runtime.jsx)(index_esm.hM,{loading:!0})})]}),(0,jsx_runtime.jsxs)(css_module.LC,{style:{"--utrecht-data-placeholder-min-inline-size":"calc(0.67em + 0.34ch)","--utrecht-data-placeholder-max-inline-size":"calc((0.67em + 0.34ch) * 4)"},children:[(0,jsx_runtime.jsx)(css_module.rt,{children:"Huistoevoeging"}),(0,jsx_runtime.jsx)(css_module.JL,{children:(0,jsx_runtime.jsx)(index_esm.hM,{loading:!0})})]})]})},HeadingPlaceholder={args:{},render:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(css_module.nL,{role:"presentation",children:(0,jsx_runtime.jsx)(index_esm.hM,{loading:!0})}),(0,jsx_runtime.jsx)(css_module.XJ,{role:"presentation",children:(0,jsx_runtime.jsx)(index_esm.hM,{loading:!0})}),(0,jsx_runtime.jsx)(css_module.aC,{role:"presentation",children:(0,jsx_runtime.jsx)(index_esm.hM,{loading:!0})}),(0,jsx_runtime.jsx)(css_module.k8,{role:"presentation",children:(0,jsx_runtime.jsx)(index_esm.hM,{loading:!0})})]}),parameters:{docs:{description:{story:'Help wanted: documentatie dat je geen lege _heading role_ in het document moet hebben, en dat daarom `role="presentation"` nodig is.'}},status:{type:"WORK IN PROGRESS"}}},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    status: {\n      type: 'ALPHA'\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  args: {\n    loading: true\n  },\n  parameters: {\n    status: {\n      type: 'WORK IN PROGRESS'\n    },\n    docs: {\n      description: {\n        story: `Help wanted: animatie voor de _loading_ state (alleen voor \\`@media (prefers-reduced-motion: no-preference)\\`.`\n      }\n    }\n  }\n}",...Loading.parameters?.docs?.source}}},ForcedColors.parameters={...ForcedColors.parameters,docs:{...ForcedColors.parameters?.docs,source:{originalSource:"{\n  args: {\n    forcedColors: true\n  },\n  parameters: {\n    status: {\n      type: 'WORK IN PROGRESS'\n    }\n  }\n}",...ForcedColors.parameters?.docs?.source}}},HighContrast.parameters={...HighContrast.parameters,docs:{...HighContrast.parameters?.docs,source:{originalSource:"{\n  args: {\n    highContrast: true\n  },\n  parameters: {\n    status: {\n      type: 'WORK IN PROGRESS'\n    }\n  }\n}",...HighContrast.parameters?.docs?.source}}},DataListPlaceholder.parameters={...DataListPlaceholder.parameters,docs:{...DataListPlaceholder.parameters?.docs,source:{originalSource:"{\n  args: {},\n  parameters: {\n    docs: {\n      description: {\n        story: `Help wanted: overzicht maken van de \\`min-inline-size\\` en \\`max-inline-size\\` van veelgebruikte datatypes.`\n      }\n    },\n    status: {\n      type: 'WORK IN PROGRESS'\n    }\n  },\n  render: () => {\n    return <DataList>\n        <DataListItem style={{\n        '--utrecht-data-placeholder-max-inline-size': '20em'\n      }}>\n          <DataListKey>Straatnaam</DataListKey>\n          <DataListValue>\n            <DataPlaceholder loading />\n          </DataListValue>\n        </DataListItem>\n        <DataListItem style={{\n        '--utrecht-data-placeholder-min-inline-size': '1ch',\n        '--utrecht-data-placeholder-max-inline-size': '5ch'\n      }}>\n          <DataListKey>Huisnummer</DataListKey>\n          <DataListValue>\n            <DataPlaceholder loading />\n          </DataListValue>\n        </DataListItem>\n        <DataListItem style={{\n        '--utrecht-data-placeholder-min-inline-size': '1em'\n      }}>\n          <DataListKey>Huisletter</DataListKey>\n          <DataListValue>\n            <DataPlaceholder loading />\n          </DataListValue>\n        </DataListItem>\n        <DataListItem style={{\n        '--utrecht-data-placeholder-min-inline-size': 'calc(0.67em + 0.34ch)',\n        '--utrecht-data-placeholder-max-inline-size': 'calc((0.67em + 0.34ch) * 4)'\n      }}>\n          <DataListKey>Huistoevoeging</DataListKey>\n          <DataListValue>\n            <DataPlaceholder loading />\n          </DataListValue>\n        </DataListItem>\n      </DataList>;\n  }\n}",...DataListPlaceholder.parameters?.docs?.source}}},HeadingPlaceholder.parameters={...HeadingPlaceholder.parameters,docs:{...HeadingPlaceholder.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: () => {\n    return <>\n        <Heading1 role="presentation">\n          <DataPlaceholder loading />\n        </Heading1>\n        <Heading2 role="presentation">\n          <DataPlaceholder loading />\n        </Heading2>\n        <Heading3 role="presentation">\n          <DataPlaceholder loading />\n        </Heading3>\n        <Heading4 role="presentation">\n          <DataPlaceholder loading />\n        </Heading4>\n      </>;\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `Help wanted: documentatie dat je geen lege _heading role_ in het document moet hebben, en dat daarom \\`role="presentation"\\` nodig is.`\n      }\n    },\n    status: {\n      type: \'WORK IN PROGRESS\'\n    }\n  }\n}',...HeadingPlaceholder.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Loading","ForcedColors","HighContrast","DataListPlaceholder","HeadingPlaceholder","DesignTokens"]},"./src/design-token-story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/design-token-story.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"src/design-token-story.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.2_sass@1.69.5_webpack@5.89.0/node_modules/sass-loader/dist/cjs.js!../../components/alert/css/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.utrecht-alert{background-color:var(--_utrecht-alert-background-color, var(--utrecht-alert-background-color));border-color:var(--_utrecht-alert-border-color, var(--utrecht-alert-border-color));border-radius:var(--utrecht-alert-border-radius, 0);border-style:solid;border-width:var(--_utrecht-alert-border-width, var(--utrecht-alert-border-width, 0));color:var(--_utrecht-alert-color, var(--utrecht-alert-color));display:grid;gap:var(--utrecht-alert-icon-gap);grid-template-areas:"icon message";grid-template-columns:0fr 100fr;margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-alert-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-alert-margin-block-start, 0));padding-block-end:var(--utrecht-alert-padding-block-end);padding-block-start:var(--utrecht-alert-padding-block-start);padding-inline-end:var(--utrecht-alert-padding-inline-end);padding-inline-start:var(--utrecht-alert-padding-inline-start)}.utrecht-alert__icon{--utrecht-icon-color: var(--_utrecht-alert-icon-color, var(--utrecht-alert-icon-color));grid-area:icon}.utrecht-alert__message{grid-area:message}.utrecht-alert--info{--_utrecht-alert-icon-color: var(--utrecht-alert-icon-info-color);--_utrecht-alert-background-color: var(--utrecht-alert-info-background-color);--_utrecht-alert-border-color: var(--utrecht-alert-info-border-color);--_utrecht-alert-border-width: var(--utrecht-alert-info-border-width);--_utrecht-alert-color: var(--utrecht-alert-info-color)}.utrecht-alert--ok{--_utrecht-alert-icon-color: var(--utrecht-alert-icon-ok-color);--_utrecht-alert-background-color: var(--utrecht-alert-ok-background-color);--_utrecht-alert-border-color: var(--utrecht-alert-ok-border-color);--_utrecht-alert-border-width: var(--utrecht-alert-ok-border-width);--_utrecht-alert-color: var(--utrecht-alert-ok-color)}.utrecht-alert--warning{--_utrecht-alert-icon-color: var(--utrecht-alert-icon-warning-color);--_utrecht-alert-background-color: var(--utrecht-alert-warning-background-color);--_utrecht-alert-border-color: var(--utrecht-alert-warning-border-color);--_utrecht-alert-border-width: var(--utrecht-alert-warning-border-width);--_utrecht-alert-color: var(--utrecht-alert-warning-color)}.utrecht-alert--error{--_utrecht-alert-icon-color: var(--utrecht-alert-icon-error-color);--_utrecht-alert-background-color: var(--utrecht-alert-error-background-color);--_utrecht-alert-border-color: var(--utrecht-alert-error-border-color);--_utrecht-alert-border-width: var(--utrecht-alert-error-border-width);--_utrecht-alert-color: var(--utrecht-alert-error-color)}',"",{version:3,sources:["webpack://./../../components/alert/css/index.scss","webpack://./../../components/alert/css/_mixin.scss"],names:[],mappings:"AAQA,eCDE,8FAAA,CACA,kFAAA,CACA,mDAAA,CACA,kBAAA,CACA,qFAAA,CACA,6DAAA,CACA,YAAA,CACA,iCAAA,CACA,kCAAA,CACA,+BAAA,CACA,8FAAA,CACA,kGAAA,CACA,wDAAA,CACA,4DAAA,CACA,0DAAA,CACA,8DAAA,CDVF,qBCcE,uFAAA,CAEA,cAAA,CDZF,wBCgBE,iBAAA,CDZF,qBCgBE,iEAAA,CACA,6EAAA,CACA,qEAAA,CACA,qEAAA,CACA,uDAAA,CDhBF,mBCYE,+DAAA,CACA,2EAAA,CACA,mEAAA,CACA,mEAAA,CACA,qDAAA,CDZF,wBCQE,oEAAA,CACA,gFAAA,CACA,wEAAA,CACA,wEAAA,CACA,0DAAA,CDRF,sBCIE,kEAAA,CACA,8EAAA,CACA,sEAAA,CACA,sEAAA,CACA,wDAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2020-2022 Gemeente Utrecht\n * Copyright (c) 2020-2022 Frameless B.V.\n */\n\n@import "./mixin";\n\n.utrecht-alert {\n  @include utrecht-alert;\n}\n\n.utrecht-alert__icon {\n  @include utrecht-alert__icon;\n}\n\n.utrecht-alert__message {\n  @include utrecht-alert__message;\n}\n\n.utrecht-alert--info {\n  @include utrecht-alert-type("info");\n}\n\n.utrecht-alert--ok {\n  @include utrecht-alert-type("ok");\n}\n\n.utrecht-alert--warning {\n  @include utrecht-alert-type("warning");\n}\n\n.utrecht-alert--error {\n  @include utrecht-alert-type("error");\n}\n','/**\n * @license EUPL-1.2\n * Copyright (c) 2020-2022 Gemeente Utrecht\n * Copyright (c) 2020-2022 Frameless B.V.\n */\n\n@mixin utrecht-alert {\n  background-color: var(--_utrecht-alert-background-color, var(--utrecht-alert-background-color));\n  border-color: var(--_utrecht-alert-border-color, var(--utrecht-alert-border-color));\n  border-radius: var(--utrecht-alert-border-radius, 0);\n  border-style: solid;\n  border-width: var(--_utrecht-alert-border-width, var(--utrecht-alert-border-width, 0));\n  color: var(--_utrecht-alert-color, var(--utrecht-alert-color));\n  display: grid;\n  gap: var(--utrecht-alert-icon-gap);\n  grid-template-areas: "icon message";\n  grid-template-columns: 0fr 100fr;\n  margin-block-end: calc(var(--utrecht-space-around, 0) * var(--utrecht-alert-margin-block-end, 0));\n  margin-block-start: calc(var(--utrecht-space-around, 0) * var(--utrecht-alert-margin-block-start, 0));\n  padding-block-end: var(--utrecht-alert-padding-block-end);\n  padding-block-start: var(--utrecht-alert-padding-block-start);\n  padding-inline-end: var(--utrecht-alert-padding-inline-end);\n  padding-inline-start: var(--utrecht-alert-padding-inline-start);\n}\n\n@mixin utrecht-alert__icon {\n  --utrecht-icon-color: var(--_utrecht-alert-icon-color, var(--utrecht-alert-icon-color));\n\n  grid-area: icon;\n}\n\n@mixin utrecht-alert__message {\n  grid-area: message;\n}\n\n@mixin utrecht-alert-type($type) {\n  --_utrecht-alert-icon-color: var(--utrecht-alert-icon-#{$type}-color);\n  --_utrecht-alert-background-color: var(--utrecht-alert-#{$type}-background-color);\n  --_utrecht-alert-border-color: var(--utrecht-alert-#{$type}-border-color);\n  --_utrecht-alert-border-width: var(--utrecht-alert-#{$type}-border-width);\n  --_utrecht-alert-color: var(--utrecht-alert-#{$type}-color);\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../components/alert/css/index.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_69_5_webpack_5_89_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.2_sass@1.69.5_webpack@5.89.0/node_modules/sass-loader/dist/cjs.js!../../components/alert/css/index.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_3_webpack_5_89_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_69_5_webpack_5_89_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_69_5_webpack_5_89_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_69_5_webpack_5_89_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_69_5_webpack_5_89_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);