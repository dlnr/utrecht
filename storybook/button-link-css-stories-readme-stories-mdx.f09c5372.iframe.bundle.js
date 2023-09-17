/*! For license information please see button-link-css-stories-readme-stories-mdx.f09c5372.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[6620],{"../../components/button-link/css/stories/readme.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>readme_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");const README_namespaceObject='\x3c!-- @license CC0-1.0 --\x3e\n\n# Button link: link die er uit ziet als button\n\nEen link die er uitziet als een button, om gebruikers aan te sporen op de link te klikken en actie te gaan ondernemen.\n\n## Toepassing\n\nEen link button mag alleen gebruikt worden voor navigatie naar een pagina waar je een actie uitvoert, de link klikken mag niet gelijk een _side-effect_ hebben.\n\nWel:\n\n- Log in met eIDAS (navigeert naar formulier voor inloggen)\n- Maak een afspraak (navigeert naar formulier)\n\nNiet:\n\n- Uitloggen (logt direct uit)\n- Stop de parkeermeter (je mag hierna niet meer parkeren)\n\n## Activeren\n\nEen link button moet op dezelfde manier geactiveerd kunnen worden als een button:\n\n- Klikken\n- `Enter` op toetsenbord\n- `Space` op toetsenbord\n\nEen HTML `a` element wordt standaard niet geactiveerd met `Space`, daarvoor is ondersteunende JavaScript nodig. Gebruik `role="button"` alleen wanneer je door extra JavaScript ook met `Space` de link activeert.\n\n## States\n\n- hover\n- focus\n- focus-visible\n\nDe link button heeft geen disabled state, net als de normale link: die heeft ook geen disabled state.\n\nDe link button heeft geen `visited` state zoals normale links, maar ziet er altijd hetzelfde uit zoals een normale button.\n';var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n",(0,jsx_runtime.jsx)(dist.h_,{id:"css-button-link--readme",title:"CSS Component/Link that looks like a button/README"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"CSS Component/Link that looks like a button/README",id:"css-button-link--readme",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const readme_stories=componentMeta}}]);