/*! For license information please see page-footer-css-stories-default-stories-mdx.01414a13.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[9057],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/page-footer/css/stories/default.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>default_stories,defaultStory:()=>defaultStory});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),html_react_parser=__webpack_require__("../../node_modules/.pnpm/html-react-parser@3.0.16_react@18.2.0/node_modules/html-react-parser/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={innerHTML:{description:"HTML content",control:"text"}},defaultArgs={innerHTML:""},exampleArgs={innerHTML:'<address class="utrecht-page-footer__address utrecht-page-footer__address--reset-address">\n    <h2 class="utrecht-heading-2 utrecht-heading-2--reset-h2">Gemeente Utrecht</h2>\n    <section>\n      <h3 class="utrecht-heading-3 utrecht-heading-3--distanced">Telefoon</h3>\n      <p class="utrecht-paragraph utrecht-paragraph--distanced">\n        <a href="tel:+31302860000" class="utrecht-link utrecht-link--telephone">14 030</a>\n      </p>\n    </section>\n    <section>\n      <h3 class="utrecht-heading-3 utrecht-heading-3--distanced">Adres</h3>\n      <p class="utrecht-paragraph utrecht-paragraph--distanced">\n        <strong>Stadskantoor</strong><br>\n        Stadsplateau 1<br>\n        3521AZ\n      </p>\n    </section>\n  </address>\n  <div class="utrecht-page-footer__navigation">\n    <ul class="utrecht-link-list utrecht-link-list--chevron">\n      <li class="utrecht-link-list__item">\n        <a href="/contact/" class="utrecht-link">Meer contactinformatie</a>\n      </li>\n      <li class="utrecht-link-list__item">\n        <a href="/over-deze-website" class="utrecht-link">Over deze website</a>\n      </li>\n    </ul>\n  </div>'},PageFooter=({innerHTML=defaultArgs.innerHTML})=>(0,jsx_runtime.jsx)("footer",{className:"utrecht-page-footer",children:(0,html_react_parser.ZP)(innerHTML)});PageFooter.displayName="PageFooter";var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),css=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/page-footer/css/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(css.Z,options);css.Z&&css.Z.locals&&css.Z.locals;const defaultStory=PageFooter.bind({});defaultStory.storyName="Default",defaultStory.args=exampleArgs,defaultStory.parameters={storySource:{source:"PageFooter.bind({})"}};const componentMeta={title:"CSS Component/Page Footer",id:"css-page-footer",parameters:{status:"WORK IN PROGRESS"},component:PageFooter,args:defaultArgs,argTypes,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n",(0,jsx_runtime.jsx)(dist.h_,{id:"css-page-footer",title:"CSS Component/Page Footer",component:PageFooter,argTypes,args:defaultArgs,parameters:{status:"WORK IN PROGRESS"}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"page-footer",children:"Page Footer"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",args:exampleArgs,children:PageFooter.bind({})})}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"Default"})]})}}};const default_stories=componentMeta},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/page-footer/css/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utrecht-page-footer{--utrecht-document-color: currentColor;--utrecht-heading-color: currentColor;--utrecht-link-color: currentColor;--utrecht-link-focus-color: currentColor;--utrecht-link-hover-color: currentColor;--utrecht-link-active-color: currentColor;--utrecht-link-visited-color: currentColor;background-color:var(--utrecht-page-footer-background-color);background-image:var(--utrecht-page-footer-background-image);color:var(--utrecht-page-footer-color);font-family:var(--utrecht-document-font-family);font-size:var(--utrecht-document-font-size);padding-block-end:var(--utrecht-page-footer-padding-block-end);padding-block-start:var(--utrecht-page-footer-padding-block-start);padding-inline-end:var(--utrecht-page-footer-padding-inline-end);padding-inline-start:var(--utrecht-page-footer-padding-inline-start)}.utrecht-page-footer .utrecht-link--telephone{color:#fff}.utrecht-page-footer .utrecht-paragraph{color:#fff}.utrecht-page-footer__address--reset-address{font-style:inherit;margin-block-end:0;margin-block-start:0}","",{version:3,sources:["webpack://./../../components/page-footer/css/index.scss","webpack://./../../components/page-footer/css/_mixin.scss"],names:[],mappings:"AAQA,qBCME,sCAAA,CACA,qCAAA,CACA,kCAAA,CACA,wCAAA,CACA,wCAAA,CACA,yCAAA,CACA,0CAAA,CAEA,4DAAA,CACA,4DAAA,CACA,sCAAA,CACA,+CAAA,CACA,2CAAA,CACA,8DAAA,CACA,kEAAA,CACA,gEAAA,CACA,oEAAA,CDlBF,8CACE,UAAA,CAGF,wCACE,UAAA,CAGF,6CCZE,kBAAA,CACA,kBAAA,CACA,oBAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Gemeente Utrecht\n * Copyright (c) 2021 Robbert Broersma\n */\n\n@import "./mixin";\n\n.utrecht-page-footer {\n  @include utrecht-page-footer;\n}\n\n.utrecht-page-footer .utrecht-link--telephone {\n  color: #fff;\n}\n\n.utrecht-page-footer .utrecht-paragraph {\n  color: #fff;\n}\n\n.utrecht-page-footer__address--reset-address {\n  @include utrecht-page-footer__address--reset-address;\n}\n',"/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Gemeente Utrecht\n * Copyright (c) 2021 Robbert Broersma\n */\n\n@mixin reset-address {\n  /* reset <address> */\n  font-style: inherit;\n  margin-block-end: 0;\n  margin-block-start: 0;\n}\n\n@mixin utrecht-page-footer {\n  --utrecht-document-color: currentColor;\n  --utrecht-heading-color: currentColor;\n  --utrecht-link-color: currentColor;\n  --utrecht-link-focus-color: currentColor;\n  --utrecht-link-hover-color: currentColor;\n  --utrecht-link-active-color: currentColor;\n  --utrecht-link-visited-color: currentColor;\n\n  background-color: var(--utrecht-page-footer-background-color);\n  background-image: var(--utrecht-page-footer-background-image);\n  color: var(--utrecht-page-footer-color);\n  font-family: var(--utrecht-document-font-family);\n  font-size: var(--utrecht-document-font-size);\n  padding-block-end: var(--utrecht-page-footer-padding-block-end);\n  padding-block-start: var(--utrecht-page-footer-padding-block-start);\n  padding-inline-end: var(--utrecht-page-footer-padding-inline-end);\n  padding-inline-start: var(--utrecht-page-footer-padding-inline-start);\n}\n\n@mixin utrecht-page-footer__address--reset-address {\n  @include reset-address;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);