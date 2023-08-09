/*! For license information please see link-list-css-stories-default-stories-mdx.3b3aeb96.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[89921],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/link-list/css/stories/default.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>default_stories,defaultStory:()=>defaultStory});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),story_template=__webpack_require__("../../components/link/css/story-template.jsx"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const LinkList=({links=[]})=>(0,jsx_runtime.jsx)("ul",{className:"utrecht-link-list utrecht-link-list--html-ul",children:links.map((link=>(0,jsx_runtime.jsx)("li",{className:"utrecht-link-list__item",children:(0,jsx_runtime.jsx)(story_template.rU,{...link})})))});LinkList.displayName="LinkList";var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),css=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/link-list/css/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(css.Z,options);css.Z&&css.Z.locals&&css.Z.locals;const defaultStory=LinkList.bind({});defaultStory.storyName="Default",defaultStory.args={links:[{href:"#",textContent:"Link 1"},{href:"#",textContent:"Link 2"},{href:"#",textContent:"Link 3"}]},defaultStory.parameters={storySource:{source:"LinkList.bind({})"}};const componentMeta={title:"CSS Component/Link List",id:"css-link-list",parameters:{status:{type:"WORK IN PROGRESS"}},component:LinkList,argTypes:{links:{description:"Links",type:{name:"array",required:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n",(0,jsx_runtime.jsx)(dist.h_,{id:"css-link-list",title:"CSS Component/Link List",component:LinkList,argTypes:{links:{description:"Links",type:{name:"array",required:!0}}},parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"link-list",children:"Link List"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The CSS code is currently very specific to Utrecht, and has no white label design tokens yet."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",args:{links:[{href:"#",textContent:"Link 1"},{href:"#",textContent:"Link 2"},{href:"#",textContent:"Link 3"}]},children:LinkList.bind({})})}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"Default"})]})}}};const default_stories=componentMeta},"../../components/link/css/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PG:()=>argTypes,_O:()=>defaultArgs,rU:()=>Link,sS:()=>exampleArgs});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const argTypes={active:{description:"Active",control:"boolean"},ariaLabel:{description:"Provide the full accessible name here if the accessible name cannot be used as text content.",control:"text"},boxContent:{description:"Content is a box, such as an image or a section, not just text",control:"boolean"},external:{description:"External",control:"boolean"},hover:{description:"Hover",control:"boolean"},focus:{description:"Focus",control:"boolean"},focusVisible:{description:"Focus visible",control:"boolean"},href:{description:"Target URL",type:{name:"string",required:!0}},tabIndex:{description:"Tabindex",type:{name:"string",required:!1}},telephone:{description:"Link to telephone number",control:"boolean"},textContent:{description:"Link text",type:{name:"string",required:!0}},visited:{description:"Visited",control:"boolean"},placeholder:{description:"Placeholder for a link",control:"boolean"}},defaultArgs={active:!1,ariaLabel:"",boxContent:!1,current:!1,external:!1,hrefLang:"",hover:!1,lang:"",focus:!1,focusVisible:!1,href:null,placeholder:!1,tabIndex:"",telephone:!1,textContent:"",visited:!1,iconleft:!1},exampleArgs={textContent:"Voorbeeldlink"},Link=({active=defaultArgs.active,ariaLabel=defaultArgs.ariaLabel,boxContent=defaultArgs.boxContent,children,current=defaultArgs.current,external=defaultArgs.external,hrefLang=defaultArgs.hrefLang,hover=defaultArgs.hover,lang=defaultArgs.lang,focus=defaultArgs.focus,focusVisible=defaultArgs.focusVisible,href=defaultArgs.href,placeholder=defaultArgs.placeholder,tabIndex=defaultArgs.tabIndex,telephone=defaultArgs.telephone,textContent=defaultArgs.textContent,visited=defaultArgs.visited,iconleft=defaultArgs.iconleft,...restProps})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:placeholder?null:null===href?`https://example.com/${lang}`:href,className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("utrecht-link",{"utrecht-link--active":active,"utrecht-link--alternate-lang":lang&&!current,"utrecht-link--box-content":boxContent,"utrecht-link--current-lang":lang&&current,"utrecht-link--external":external,"utrecht-link--focus":focus,"utrecht-link--focus-visible":focusVisible,"utrecht-link--hover":hover,"utrecht-link--placeholder":placeholder,"utrecht-link--telephone":telephone,"utrecht-link--visited":visited,"utrecht-link--icon-left":iconleft}),rel:external?"external noopener noreferrer":null,"aria-label":ariaLabel||null,"aria-current":current?"page":null,"aria-disabled":placeholder?"true":null,role:placeholder?"link":null,hrefLang:hrefLang||null,lang:lang||null,tabIndex:tabIndex||null,...restProps,children:[children,textContent]});Link.displayName="Link"},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/link-list/css/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.utrecht-link-list,.utrecht-link-list--html-ul{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;padding-inline-start:0}.utrecht-link-list>li,.utrecht-link-list--html-ul>li{list-style:none}.utrecht-link-list{--utrecht-link-text-decoration: none;--utrecht-link-hover-text-decoration: underline;--utrecht-link-focus-text-decoration: underline;margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-link-list-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-link-list-margin-block-start, 0))}.utrecht-link-list--distanced{--utrecht-space-around: 1}.utrecht-link-list__marker,.utrecht-link-list__item>a::before{background-image:var(--utrecht-link-list-marker-background-image);background-position-x:left;background-position-y:bottom;background-repeat:no-repeat;display:inline-block;inline-size:var(--utrecht-link-list-marker-inline-size)}.utrecht-link-list__item{display:block;font-weight:var(--utrecht-link-list-item-font-weight)}.utrecht-link-list__item+.utrecht-link-list__item{margin-block-start:var(--utrecht-link-list-item-margin-block-start)}.utrecht-link-list__item>a{display:block}.utrecht-link-list__item>a::before{block-size:1em;content:"";display:inline-block}',"",{version:3,sources:["webpack://./../../components/link-list/css/index.scss"],names:[],mappings:"AAmBA,+CAZE,kBAAA,CACA,oBAAA,CACA,mBAAA,CACA,qBAAA,CACA,sBAAA,CAYA,qDARA,eAAA,CAaF,mBACE,oCAAA,CACA,+CAAA,CACA,+CAAA,CAEA,kGAAA,CACA,sGAAA,CAGF,8BACE,yBAAA,CAGF,8DACE,iEAAA,CACA,0BAAA,CACA,4BAAA,CACA,2BAAA,CACA,oBAAA,CACA,uDAAA,CAGF,yBACE,aAAA,CACA,qDAAA,CAGF,kDACE,mEAAA,CAGF,2BACE,aAAA,CAEF,mCACE,cAAA,CACA,UAAA,CACA,oBAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Gemeente Utrecht\n * Copyright (c) 2021 Robbert Broersma\n */\n\n@mixin reset-ul() {\n  margin-block-end: 0;\n  margin-block-start: 0;\n  margin-inline-end: 0;\n  margin-inline-start: 0;\n  padding-inline-start: 0;\n}\n\n@mixin reset-li() {\n  list-style: none;\n}\n\n/* reset before other stylesheets */\n.utrecht-link-list,\n.utrecht-link-list--html-ul {\n  @include reset-ul;\n\n  & > li {\n    @include reset-li;\n  }\n}\n\n.utrecht-link-list {\n  --utrecht-link-text-decoration: none;\n  --utrecht-link-hover-text-decoration: underline;\n  --utrecht-link-focus-text-decoration: underline;\n\n  margin-block-end: calc(var(--utrecht-space-around, 0) * var(--utrecht-link-list-margin-block-end, 0));\n  margin-block-start: calc(var(--utrecht-space-around, 0) * var(--utrecht-link-list-margin-block-start, 0));\n}\n\n.utrecht-link-list--distanced {\n  --utrecht-space-around: 1;\n}\n\n.utrecht-link-list__marker {\n  background-image: var(--utrecht-link-list-marker-background-image);\n  background-position-x: left;\n  background-position-y: bottom;\n  background-repeat: no-repeat;\n  display: inline-block;\n  inline-size: var(--utrecht-link-list-marker-inline-size);\n}\n\n.utrecht-link-list__item {\n  display: block;\n  font-weight: var(--utrecht-link-list-item-font-weight);\n}\n\n.utrecht-link-list__item + .utrecht-link-list__item {\n  margin-block-start: var(--utrecht-link-list-item-margin-block-start);\n}\n\n.utrecht-link-list__item > a {\n  display: block;\n}\n.utrecht-link-list__item > a::before {\n  block-size: 1em;\n  content: "";\n  display: inline-block;\n  @extend .utrecht-link-list__marker;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);