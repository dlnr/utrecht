"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[4982],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/nl-design-system/contributing-html.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>contributing_html_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.4_@types+react-dom@18.2.17_@types+react@18.2.45_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");const contributing_htmlraw_namespaceObject='\x3c!-- @license CC0-1.0 --\x3e\n\n# Contribution Guidelines for HTML\n\n## Do not use inline styles\n\nDo not use the `style` attribute in templates, only apply style using class names.\n\n```html\n<table style="border-collapse: collapse"></table>\n```\n\nReplace the `style` attribute with a class name:\n\n```html\n<table class="example-table example-table--reset"></table>\n```\n\nConfigure the CSS in a separate file:\n\n```css\n.example-table--reset {\n  border-collapse: collapse;\n}\n```\n\n## Use the parts of HTML that are well-supported by assistive technologies\n\nWhile HTML and ARIA are well-established web standards, you will find that some parts are better supported than others — especially when you consider assistive technologies and not just the most popular browsers. In addition to the popular [Can I Use... ?](https://caniuse.com) also consult websites such as [Accessibility Support](https://a11ysupport.io) to compare support for assistive technologies.\n';var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"NL Design System/Contributing/HTML"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:contributing_htmlraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"NL Design System/Contributing/HTML",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const contributing_html_stories=componentMeta,__namedExportsOrder=["__page"]}}]);