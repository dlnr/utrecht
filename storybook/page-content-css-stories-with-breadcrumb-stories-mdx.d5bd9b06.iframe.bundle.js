/*! For license information please see page-content-css-stories-with-breadcrumb-stories-mdx.d5bd9b06.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[76297],{"../../components/page-content/css/stories/with-breadcrumb.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,withBreadcrumb:()=>withBreadcrumb});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),react_dom_server__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/server.browser.js"),_breadcrumb_css_story_template__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/breadcrumb/css/story-template.jsx"),_story_template__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../components/page-content/css/story-template.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("../../components/page-content/css/index.scss"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const withBreadcrumb=_story_template__WEBPACK_IMPORTED_MODULE_3__.JH.bind({});withBreadcrumb.storyName="With Breadcrumb",withBreadcrumb.args={..._story_template__WEBPACK_IMPORTED_MODULE_3__.sS,navHTML:react_dom_server__WEBPACK_IMPORTED_MODULE_1__.uS((0,_breadcrumb_css_story_template__WEBPACK_IMPORTED_MODULE_2__.aG)({..._breadcrumb_css_story_template__WEBPACK_IMPORTED_MODULE_2__.sS}))},withBreadcrumb.parameters={storySource:{source:"PageContent.bind({})"}};const componentMeta={title:"CSS Component/Page Content/With Breadcrumb",id:"css-page-content--breadcrumb-nav",parameters:{status:"WORK IN PROGRESS"},component:_story_template__WEBPACK_IMPORTED_MODULE_3__.JH,tags:["stories-mdx"],includeStories:["withBreadcrumb"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:["\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.h_,{id:"css-page-content--breadcrumb-nav",title:"CSS Component/Page Content/With Breadcrumb",component:_story_template__WEBPACK_IMPORTED_MODULE_3__.JH,parameters:{status:"WORK IN PROGRESS"}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h1,{id:"page-content-with-breadcrumb-navigation",children:"Page Content with breadcrumb navigation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.oG,{name:"With Breadcrumb",args:{..._story_template__WEBPACK_IMPORTED_MODULE_3__.sS,navHTML:react_dom_server__WEBPACK_IMPORTED_MODULE_1__.uS((0,_breadcrumb_css_story_template__WEBPACK_IMPORTED_MODULE_2__.aG)({..._breadcrumb_css_story_template__WEBPACK_IMPORTED_MODULE_2__.sS}))},children:_story_template__WEBPACK_IMPORTED_MODULE_3__.JH.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"../../components/page-content/css/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JH:()=>PageContent,PG:()=>argTypes,_O:()=>defaultArgs,sS:()=>exampleArgs});var html_react_parser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/html-react-parser@3.0.16_react@18.2.0/node_modules/html-react-parser/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const argTypes={asideHTML:{description:"Aside HTML content",control:"text"},navHTML:{description:"Navigation HTML content",control:"text"},innerHTML:{description:"HTML content",control:"text"}},defaultArgs={asideHTML:"",innerHTML:"",navHTML:""},exampleArgs={innerHTML:"<h1>The Quick Brown Fox Jumps Over The Lazy Dog</h1>"},PageContent=({asideHTML=defaultArgs.asideHTML,innerHTML=defaultArgs.innerHTML,navHTML=defaultArgs.navHTML})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"utrecht-page-content",children:[navHTML&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav",{className:"utrecht-page-content__nav",children:(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(navHTML)}),innerHTML&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("main",{className:"utrecht-page-content__main",children:(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(innerHTML)}),asideHTML&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("aside",{className:"utrecht-page-content__aside",children:(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(asideHTML)})]});PageContent.displayName="PageContent"},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/page-content/css/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utrecht-page-content{padding-block-end:var(--utrecht-page-content-padding-block-end);padding-block-start:var(--utrecht-page-content-padding-block-start);padding-inline-end:var(--utrecht-page-padding-inline-end);padding-inline-start:var(--utrecht-page-padding-inline-start)}.utrecht-page-content__main{grid-area:main}.utrecht-page-content__aside{grid-area:aside}","",{version:3,sources:["webpack://./../../components/page-content/css/index.scss","webpack://./../../components/page-content/css/_mixin.scss"],names:[],mappings:"AAQA,sBCDE,+DAAA,CACA,mEAAA,CACA,yDAAA,CACA,6DAAA,CDEF,4BCEE,cAAA,CDEF,6BCEE,eAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Gemeente Utrecht\n * Copyright (c) 2021 Robbert Broersma\n */\n\n@import "./mixin";\n\n.utrecht-page-content {\n  @include utrecht-page-content;\n}\n\n.utrecht-page-content__main {\n  @include utrecht-page-content__main;\n}\n\n.utrecht-page-content__aside {\n  @include utrecht-page-content__aside;\n}\n',"/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Gemeente Utrecht\n * Copyright (c) 2021 Robbert Broersma\n */\n\n@mixin utrecht-page-content {\n  padding-block-end: var(--utrecht-page-content-padding-block-end);\n  padding-block-start: var(--utrecht-page-content-padding-block-start);\n  padding-inline-end: var(--utrecht-page-padding-inline-end);\n  padding-inline-start: var(--utrecht-page-padding-inline-start);\n}\n\n@mixin utrecht-page-content__main {\n  grid-area: main;\n}\n\n@mixin utrecht-page-content__aside {\n  grid-area: aside;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../components/page-content/css/index.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/page-content/css/index.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);