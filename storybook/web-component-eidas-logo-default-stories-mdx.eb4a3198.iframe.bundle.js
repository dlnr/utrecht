/*! For license information please see web-component-eidas-logo-default-stories-mdx.eb4a3198.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[96101],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/web-component/eidas-logo/default.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>default_stories,defaultStory:()=>defaultStory});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const EidasLogo=()=>(0,jsx_runtime.jsx)("utrecht-eidas-logo",{});EidasLogo.displayName="EidasLogo";const defaultStory=EidasLogo.bind({});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:"EidasLogo.bind({})"}};const componentMeta={title:"Web Component/eIDAS Logo",id:"web-component-eidas-logo",parameters:{status:{type:"WORK IN PROGRESS"}},component:EidasLogo,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n",(0,jsx_runtime.jsx)(dist.h_,{id:"web-component-eidas-logo",title:"Web Component/eIDAS Logo",component:EidasLogo,parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"eidas-logo",children:"eIDAS Logo"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",children:EidasLogo.bind({})})})]})}}};const default_stories=componentMeta}}]);