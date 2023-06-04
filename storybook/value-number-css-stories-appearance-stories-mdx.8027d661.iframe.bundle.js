/*! For license information please see value-number-css-stories-appearance-stories-mdx.8027d661.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[95009],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/value-number/css/stories/appearance.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,negative:()=>negative,positive:()=>positive});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_story_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/value-number/css/story-template.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../components/value-number/css/index.scss"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const positive=_story_template__WEBPACK_IMPORTED_MODULE_1__.bt.bind({});positive.storyName="Positive",positive.args={value:123,textContent:"123",appearance:"positive"},positive.parameters={storySource:{source:"NumberValue.bind({})"}};const negative=_story_template__WEBPACK_IMPORTED_MODULE_1__.bt.bind({});negative.storyName="Negative",negative.args={value:-123,textContent:"-123",appearance:"negative"},negative.parameters={storySource:{source:"NumberValue.bind({})"}};const componentMeta={title:"CSS Component/Number Value/Appearance",id:"css-value-number--appearance",parameters:{status:{type:"WORK IN PROGRESS"}},component:_story_template__WEBPACK_IMPORTED_MODULE_1__.bt,tags:["stories-mdx"],includeStories:["positive","negative"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{id:"css-value-number--appearance",title:"CSS Component/Number Value/Appearance",component:_story_template__WEBPACK_IMPORTED_MODULE_1__.bt,parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"number-value-appearance",children:"Number value appearance"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"positive",children:"Positive"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{args:{value:123,textContent:"123",appearance:"positive"},name:"Positive",children:_story_template__WEBPACK_IMPORTED_MODULE_1__.bt.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"negative",children:"Negative"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{args:{value:-123,textContent:"-123",appearance:"negative"},name:"Negative",children:_story_template__WEBPACK_IMPORTED_MODULE_1__.bt.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"../../components/value-number/css/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PG:()=>argTypes,_O:()=>defaultArgs,bt:()=>NumberValue,sS:()=>exampleArgs});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const argTypes={value:{description:"Value",type:{name:"text",required:!1}},appearance:{description:"Appearance",options:["","positive","negative"],control:{type:"select"},type:{required:!1}},textContent:{description:"Children",type:"text"}},defaultArgs={textContent:"",value:"",appearance:""},exampleArgs={textContent:"137438953471",value:137438953471},NumberValue=({textContent=defaultArgs.textContent,appearance=defaultArgs.appearance,value=defaultArgs.value})=>{const className=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("utrecht-value-number","negative"===appearance&&"utrecht-value-number--negative","positive"===appearance&&"utrecht-value-number--positive");return value?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("data",{value:String(value),className,children:textContent}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className,children:textContent})}},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/value-number/css/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utrecht-value-number{font-variant-numeric:lining-nums tabular-nums}.utrecht-value-number--positive{color:var(--utrecht-value-number-positive-color)}.utrecht-value-number--negative{color:var(--utrecht-value-number-negative-color)}","",{version:3,sources:["webpack://./../../components/value-number/css/index.scss","webpack://./../../components/value-number/css/_mixin.scss"],names:[],mappings:"AAQA,sBCDE,6CAAA,CDKF,gCCDE,gDAAA,CDKF,gCCDE,gDAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2020-2022 Gemeente Utrecht\n * Copyright (c) 2020-2022 Frameless B.V.\n */\n\n@import "./mixin";\n\n.utrecht-value-number {\n  @include utrecht-value-number;\n}\n\n.utrecht-value-number--positive {\n  @include utrecht-value-number--positive;\n}\n\n.utrecht-value-number--negative {\n  @include utrecht-value-number--negative;\n}\n',"/**\n * @license EUPL-1.2\n * Copyright (c) 2020-2022 Gemeente Utrecht\n * Copyright (c) 2020-2022 Frameless B.V.\n */\n\n@mixin utrecht-value-number {\n  font-variant-numeric: lining-nums tabular-nums;\n}\n\n@mixin utrecht-value-number--positive {\n  color: var(--utrecht-value-number-positive-color);\n}\n\n@mixin utrecht-value-number--negative {\n  color: var(--utrecht-value-number-negative-color);\n}\n\n@mixin invisible-but-accessible {\n  block-size: 1px !important;\n\n  /* Source: https://kittygiraudel.com/snippets/sr-only-class/ */\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  -webkit-clip-path: inset(50%) !important;\n  clip-path: inset(50%) !important;\n  inline-size: 1px !important;\n  /* stylelint-disable-next-line property-disallowed-list */\n  margin: -1px !important;\n  overflow: hidden !important;\n  /* stylelint-disable-next-line property-disallowed-list */\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../components/value-number/css/index.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/value-number/css/index.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);