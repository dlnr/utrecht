"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[72408],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/developers/aria.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>aria_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.0_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");const ariaraw_namespaceObject='\x3c!-- @license CC0-1.0 --\x3e\n\n# Design system ten op zichte van ARIA\n\n## `role="alert"`\n\n- _Alert_ component\n- _Form field description_ component\n\n## `role="alertdialog"`\n\n- _Alert dialog_ component\n\n## `role="article"`\n\n- _Article_ component\n\n## `role="banner"`\n\n- _Page header_ component\n\n## `role="button"`\n\n- Button component\n- _Button that looks like a link_ component\n\n## `role="cell"`\n\n- _data cell_ element van de _table_ component\n\n## `role="checkbox"`\n\n- _Checkbox component_\n- _Custom checkbox component_\n\n## `role="combobox"`\n\n- _Combobox_ component\n\n## `role="complementary"`\n\n- _Aside_ variant van de _blockquote_ component\n- _Aside_ variant van de _spotlight section_ component\n\n## `role="columnheader"`\n\n- _Table header cell_ element van de _table_ component\n\n## `role="contentinfo"`\n\n- _Page footer_ component\n\n## `role="dialog"`\n\n- _Dialog_ component\n\n## `role="document"`\n\n- _Document_ component\n\n## `role="form"`\n\n- _Form_ component\n\n## `role="group"`\n\n- _Button group_ component\n\n## `role="heading"`\n\n- _Heading_ component\n- _Heading 1_ component\n- _Heading 2_ component\n- _Heading 3_ component\n- _Heading 4_ component\n- _Heading 5_ component\n- _Heading 6_ component\n\n## `role="img"`\n\n- _Image_ component\n- _Logo_ component\n\n## `role="link"`\n\n- _Link_ component\n\n## `role="list"`\n\n- _Ordered list_ component\n- _Unordered list_ component\n\n## `role="listitem"`\n\n- _List item_ element van de _ordered list_ component\n- _List item_ element van de _unordered list_ component\n\n## `role="listbox"`\n\n- _Select_ component\n\n## `role="main"`\n\n- _main content_ element van het _page content_ component\n\n## `role="mark"`\n\n- _Mark_ component\n\n## `role="navigation"`\n\n- _Alternate language navigation_\n- _Breadcrumb navigation_\n\n## `role="option"`\n\n- _option_ element van de _select_ component\n\n## `role="radio"`\n\n- _Radio button_ element van de _table_ component\n\n## `role="radiogroup"`\n\n- _Fieldset_ component\n\n## `role="row"`\n\n- _Table row_ element van de _table_ component\n\n## `role="rowheader"`\n\n- _Table header cell_ element van de _table_ component\n\n## `role="separator"`\n\n- _Separator_ component\n\n## `role="search"`\n\n- _Search bar_ component\n\n## `role="status"`\n\n- _Form field description_ component\n\n## `role="switch"`\n\n- _Form toggle_ component\n\n## `role="table"`\n\n- _Table_ component\n\n## `aria-description`\n\n`aria-description` wordt overgeslagen door veel hulpmiddelen om automatisch vertalingen van webpagina\'s te maken.\n\nGebruik liever `aria-describedby`.\n\n## `aria-label`\n\n`aria-label` wordt overgeslagen door veel hulpmiddelen om automatisch vertalingen van webpagina\'s te maken. Google Translate vertaalt `aria-label` vaak wel, maar veel andere software niet. Dit is in 2023 nog getest door Adrian Roselli: [aria-label Does Not Translate\n](https://adrianroselli.com/2019/11/aria-label-does-not-translate.html).\nDaarnaast is een labeltekst die met `aria-label` wordt toegevoegd alleen aanwezig in de codelaag, en niet zichtbaar op het scherm. Dit vergroot het risico dat iemand zo\'n label vergeet aan te passen bij wijzigingen, wat vervolgens gebruikers in de weg kan zitten.\n\nGebruik liever `aria-labelledby`.\n';var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Utrecht/Developers/ARIA"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:ariaraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Utrecht/Developers/ARIA",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const aria_stories=componentMeta}}]);