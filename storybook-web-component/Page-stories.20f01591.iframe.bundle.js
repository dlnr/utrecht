/*! For license information please see Page-stories.20f01591.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[]).push([[2756],{"./src/Page.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Page_stories});const tokens_namespaceObject=JSON.parse('{"utrecht":{"page":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"margin-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"max-inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),index_esm=__webpack_require__("../web-component-library-react/dist/index.esm.js"),design_token_story=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/design-token-story.tsx")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const meta={title:"Web Component/Page",id:"web-component-page",component:index_esm.z0p,argTypes:{children:{description:"Content of the page"}},args:{children:[(0,jsx_runtime.jsx)("utrecht-page-header",{children:"Header content"}),(0,jsx_runtime.jsx)("utrecht-page-content",{children:"Page content"}),(0,jsx_runtime.jsx)("utrecht-page-footer",{children:"Footer content"})]},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-page",tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Page component\n\nComponent that centers the page. The page maximizes the width of the content for large viewports, to keep the line length of texts readable and avoid large horizontal distances between related components.\n\nTypically the contents of the page component are:\n\n- Page Header component\n- Page Content component\n  - Main content\n  - Complimentary content\n- Page Footer component\n\n## API\n\n- CSS class name: `utrecht-page`\n- Web component: `<utrecht-page>`\n- Angular/React/Vue.js component: `UtrechtPage`\n\n## CSS implementation\n\n### Margin\n\nTo create some transparent space around the page, `margin-inline` CSS variables are provided. However, to automatically horizontally center the page `margin-inline: auto` needs to be used.\n\nAchieving both goals is made possible by implementing the `margin-inline` as `padding-inline` on a transparent container element. The only downside to this approach is that margin collapsing won't work anymore, but that doesn't seem like anyone would ever need for a component that realistically is only used once per document.\n\n### Padding\n\nPadding is not applied directly in the page component itself, but in the child components such as Page Header, Page Content and Page Footer.\n\n## Relevante WCAG regels\n\n- [WCAG eis 2.4.1](https://www.w3.org/TR/WCAG21/#bypass-blocks): gebruik de skip link zodat gebruikers direct naar de _main page content_ kunnen gaan.\n- [WCAG eis 2.4.2](https://www.w3.org/TR/WCAG21/#page-titled): de pagina moet een duidelijke titel hebben\n"}}}},Page_stories=meta,Default={},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DesignTokens"]}}]);