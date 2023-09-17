"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[7758],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/design-tokens/design-tokens.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>design_tokens_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.0_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),design_tokens_dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),DesignTokensTable=__webpack_require__("../../documentation/components/DesignTokensTable.jsx");const design_tokensraw_namespaceObject="\x3c!-- @license CC0-1.0 --\x3e\n\n# Design tokens\n";var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Utrecht/Design Tokens/Design Tokens"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:design_tokensraw_namespaceObject}),"\n",(0,jsx_runtime.jsxs)("p",{children:["There currently are ",design_tokens_dist.length," design tokens in total."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"brand-tokens",children:"Brand tokens"}),"\n",(0,jsx_runtime.jsx)(DesignTokensTable.V,{tokens:design_tokens_dist.filter((({filePath})=>filePath.includes("src/brand/")))}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"common-tokens",children:"Common tokens"}),"\n",(0,jsx_runtime.jsx)(DesignTokensTable.V,{tokens:design_tokens_dist.filter((({filePath})=>filePath.includes("src/common/")))}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"component-tokens",children:"Component tokens"}),"\n",(0,jsx_runtime.jsx)(DesignTokensTable.V,{tokens:design_tokens_dist.filter((({filePath})=>filePath.includes("src/component/")))})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Utrecht/Design Tokens/Design Tokens",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const design_tokens_stories=componentMeta}}]);