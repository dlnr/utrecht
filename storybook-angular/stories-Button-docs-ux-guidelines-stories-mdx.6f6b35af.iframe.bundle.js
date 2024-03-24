/*! For license information please see stories-Button-docs-ux-guidelines-stories-mdx.6f6b35af.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_angular=self.webpackChunk_utrecht_storybook_angular||[]).push([[655],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/.pnpm/@storybook+addon-docs@7.6.4_@types+react-dom@18.2.17_@types+react@18.2.45_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("../../node_modules/.pnpm/@storybook+addon-docs@7.6.4_@types+react-dom@18.2.17_@types+react@18.2.45_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.4_@types+react-dom@18.2.17_@types+react@18.2.45_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs")},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/Button/docs/ux-guidelines.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>ux_guidelines_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+addon-docs@7.6.4_@types+react-dom@18.2.17_@types+react@18.2.45_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");const ux_guidelines_namespaceObject='\x3c!-- @license CC0-1.0 --\x3e\n\n# UX Guidelines\n\n## Tekst in de button\n\nButtons moeten duidelijk en voorspelbaar zijn. Een gebruiker moet zonder moeite kunnen voorspellen wat er gebeurt als hij op een button drukt. De tekst op een button moet daarom overdreven duidelijk zijn.\n\nDe tekst in een button moet beginnen met een duidelijk werkwoord dat vraagt om actie. Om gebruikers context te geven zodat ze weten wat een button gat doen, kan je de volgende formule gebruken: {werkwoord} + {zelfstandig naamwoord}. Een uitzondering hier op zijn generieke acties, zoals "Sluiten", "Cancel" of "OK".\n\nDe tekst in buttons begint altijd met een hoofdletter. Als er meerdere woorden in een button staan heeft alleen de eerste letter van het eerste woord een hoofdletter.\n\nProbeer lidwoorden te vermijden.\n\n## Do\n\n- Buttons moeten een duidelijke en precieze tekst hebben.\n- Gebruik een duidelijk werkwoord in de tekst die een actie aangeeft.\n- Buttons moeten de juiste kleur in de juiste context hebben. Gebruik alleen een afwijkende kleur als een actie bijvoorbeeld onomkeerbaar is.\n- Probeer zo min mogelijk buttons te gebruiker op één pagina. Teveel opties hebben is verwarrend voor de gebruiker.\n- Zorg dat buttons consistent op dezelfde plek staan over verschillende pagina\'s heen.\n\n## Don\'ts\n\n- Zorg dat de gebruikers nooit moeten gokken wat een button doet, zeker als de actie van de button onomkeerbaar is.\n- Gebruik buttons nooit als navigatie, gebruik daar links voor.\n- Zorg dat button tekst nooit langer is dan 1 regel.\n\n## Buttons versus links\n\nGebruik buttons voor acties. Bijvoorbeeld "Toevoegen", "Sluiten", "Annuleren" of "Opslaan." Gebruik links om te navigeren.\n\n## UX Referenties\n\n- [5 rules for choosing the right words on button labels](https://uxmovement.com/buttons/5-rules-for-choosing-the-right-words-on-button-labels/).\n- [7 basic rules for button design](https://uxplanet.org/7-basic-rules-for-button-design-63dcdf5676b4).\n- [Comprehensive guide to button design](https://www.invisionapp.com/inside-design/comprehensive-guide-designing-ux-buttons/).\n';var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Angular Component/Button/UX Guidelines"}),"\n","\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:ux_guidelines_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Angular Component/Button/UX Guidelines",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const ux_guidelines_stories=componentMeta,__namedExportsOrder=["__page"]}}]);