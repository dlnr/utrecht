/*! For license information please see radio-button-html-stories-readme-stories-mdx.cb7eead9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[4561],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/radio-button/html/stories/readme.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_README_md__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/radio-button/README.md"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"HTML Component/Radio Button/README",id:"html-radio-button--readme",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{id:"html-radio-button--readme",title:"HTML Component/Radio Button/README"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.UG,{children:_README_md__WEBPACK_IMPORTED_MODULE_1__})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"../../components/radio-button/README.md":module=>{module.exports='\x3c!-- @license CC0-1.0 --\x3e\n\n# Radio button\n\n## Design\n\nZorg dat de radio button herkenbaar is, doordat die lijkt op radio buttons op andere websites. Maak niet heel bijzonder ontwerp dat onduidelijk is voor veel gebruikers.\n\n- Een radio button is rond, niet een vierkant of een ruit.\n- Een radio button heeft een ronde cirkel als _checked_ icoon.\n- Gebruik voor de radio button geen checkmark icoon (een vinkje), dat zou verwarrend zijn. Door een checkmark lijkt het alsof je meerdere opties kunt selecteren, terwijl dat niet zo is.\n\n## Terminologie\n\n- **radio button**: "Radio button" heeft [een Wikipedia-lemma](https://en.wikipedia.org/wiki/Radio_button), [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) noemt het ook "radio button" en "radio group".\n- **checked**: [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) en HTML noemen de staat van de radio button "checked", CSS heeft de `:checked` pseudo-class.\n\n## Class names\n\n- `.utrecht-radio-button`\n'}}]);