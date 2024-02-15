/*! For license information please see LinkList-stories.371102ac.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_css=self.webpackChunk_utrecht_storybook_css||[]).push([[1515],{"./src/LinkList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColumnWidth:()=>ColumnWidth,Default:()=>Default,DesignTokens:()=>DesignTokens,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LinkList_stories});var index_esm=__webpack_require__("../component-library-react/dist/index.esm.js");const tokens_namespaceObject=JSON.parse('{"utrecht":{"link-list":{"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"item":{"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"column-gap":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}},"icon":{"size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"inset-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),dist_index_esm=__webpack_require__("../web-component-library-react/dist/index.esm.js"),design_token_story=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/design-token-story.tsx")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const meta={title:"CSS Component/Link list",id:"css-link-list",component:index_esm.Mc,argTypes:{children:{},icon:{},links:{description:"Links"}},args:{links:[]},parameters:{tokensPrefix:"utrecht-link-list",status:{type:"WORK IN PROGRESS"},tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Link list\n\nLinks met een pijl als voorloopteken worden gebruikt aan het einde van een tekst. Ze verwijzen naar gerelateerde informatie over het onderwerp wat er in de voorafgaande tekst is besproken.\n\n## Huisstijl gemeente Utrecht\n\nDe links zijn donkerblauw (`#2A5587`), bold en hebben een pijl (>) als voorloopteken. Dit type link wordt ook gebruikt in de linklijst en de subnavigatie.\n"}}}},LinkList_stories=meta,Default={args:{icon:()=>(0,jsx_runtime.jsx)(dist_index_esm.IEm,{}),links:[{href:"#",children:"Link 1 with so much content wow look how long!"},{href:"#",children:"Link 2"},{href:"#",children:"Link 3"}]},parameters:{docs:{description:{story:"The CSS code is currently very specific to Utrecht, and has no white label design tokens yet."}}}},ColumnWidth={args:{icon:()=>(0,jsx_runtime.jsx)(dist_index_esm.IEm,{}),links:[{href:"#",children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Learn about ",(0,jsx_runtime.jsx)("i",{lang:"fr",children:"joi de vivre"}),", an essential foreign phrase!"]})},{href:"#",children:"Link 2"},{href:"#",children:"Link 3"}]},parameters:{docs:{description:{story:"The CSS code is currently very specific to Utrecht, and has no white label design tokens yet."}}},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{inlineSize:"20em"},children:Story()})]},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: () => <UtrechtIconChevronRight />,\n    links: [{\n      href: '#',\n      children: 'Link 1 with so much content wow look how long!'\n    }, {\n      href: '#',\n      children: 'Link 2'\n    }, {\n      href: '#',\n      children: 'Link 3'\n    }]\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'The CSS code is currently very specific to Utrecht, and has no white label design tokens yet.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},ColumnWidth.parameters={...ColumnWidth.parameters,docs:{...ColumnWidth.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: () => <UtrechtIconChevronRight />,\n    links: [{\n      href: '#',\n      children: <>\n            Learn about <i lang=\"fr\">joi de vivre</i>, an essential foreign phrase!\n          </>\n    }, {\n      href: '#',\n      children: 'Link 2'\n    }, {\n      href: '#',\n      children: 'Link 3'\n    }]\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'The CSS code is currently very specific to Utrecht, and has no white label design tokens yet.'\n      }\n    }\n  },\n  decorators: [Story => <div style={{\n    inlineSize: '20em'\n  }}>{Story()}</div>]\n}",...ColumnWidth.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","ColumnWidth","DesignTokens"]},"./src/design-token-story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/design-token-story.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"src/design-token-story.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}}}]);