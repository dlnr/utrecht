/*! For license information please see Heading-stories.c5fc74a8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[]).push([[1853],{"./src/Heading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,Heading11:()=>Heading11,Heading2:()=>Heading2,Heading3:()=>Heading3,Heading4:()=>Heading4,Heading5:()=>Heading5,Heading6:()=>Heading6,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Heading_stories});const tokens_namespaceObject=JSON.parse('{"utrecht":{"heading":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"font-family":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true}}},"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),index_esm=__webpack_require__("../web-component-library-react/dist/index.esm.js"),design_token_story=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/design-token-story.tsx")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const HeadingStory=({children,level})=>(0,jsx_runtime.jsx)(index_esm.Qhb,{level,children});HeadingStory.displayName="HeadingStory";const meta={title:"Web Component/Heading",id:"web-component-heading",component:HeadingStory,argTypes:{level:{description:"Heading level",type:{name:"number",required:!0}},children:{description:"Set the content of the heading",control:"text"}},args:{children:"",level:1},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-heading",tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Gebruik en toegankelijkheid van headings (koppen)\n\n- Gebruik altijd maar één H1 heading op een pagina met digitale content.\n- Gebruik alleen een heading als er content onder staat.\n- Gebruikers van screenreaders gebruiken headings vaak om een indruk te krijgen van de structuur van een pagina.\n- Gebruik headings niet voor de opmaak maar alleen voor tekstuele hiërarchie van de content.\n- Sla geen niveaus over met het gebruik van headings, bijvoorbeeld geen H3 gebruiken zonder dat er een voorgaande H2 is.\n- Beperk het aantal headings op een pagina. In de meeste gevallen hebben teksten niet meer dan `<h2>` koppen nodig en heel soms een `<h3>`. Alleen voor uitzonderlijk lange of complexe pagina\'s zouden `<h5>` en `<h6>` nodig zijn.\n\n## Terminologie\n\n- **heading**: [de HTML specificatie van `h1`/`h2`/`h3`/`h4`/`h5`/`h6`](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements). "h1" is nogal kortaf, daarom beschrijven we de token als "heading-1".\n\nIn HTML wordt de term "heading" gebruikt, niet "header" (dat is ook iets anders). Let dus op om niet per ongeluk "header" te schrijven in plaats van "heading".\n'}}}},Heading_stories=meta,Default={args:{level:1,children:"The Quick Brown Fox Jumps Over The Lazy Dog"},parameters:{status:{type:"ALPHA"}}},Heading2={args:{level:2,children:"The Quick Brown Fox Jumps Over The Lazy Dog"},parameters:{status:{type:"ALPHA"}}},Heading3={args:{level:3,children:"The Quick Brown Fox Jumps Over The Lazy Dog"},parameters:{status:{type:"ALPHA"}}},Heading4={args:{level:4,children:"The Quick Brown Fox Jumps Over The Lazy Dog"},parameters:{status:{type:"ALPHA"}}},Heading5={args:{level:5,children:"The Quick Brown Fox Jumps Over The Lazy Dog"},parameters:{status:{type:"ALPHA"}}},Heading6={args:{level:6,children:"The Quick Brown Fox Jumps Over The Lazy Dog"},parameters:{status:{type:"ALPHA"}}},Heading11={args:{level:11,children:"These go to eleven!"},parameters:{docs:{description:{story:'Heading levels of 7 and greater are not possible to achieve with HTML elements. It is possible to set `aria-level="7"`, but there are various disadvantages. Not all screen readers support it, and having headings at this level might be bad for screen reader user experience.\n\nThe web component implementation must decide to use `aria-level="7"`, to cap the level at the highest supported level, or to not render a `role="header"` element at all.'}},status:{type:"WORK IN PROGRESS"}}},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    level: 1,\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  parameters: {\n    status: {\n      type: 'ALPHA'\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Heading2.parameters={...Heading2.parameters,docs:{...Heading2.parameters?.docs,source:{originalSource:"{\n  args: {\n    level: 2,\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  parameters: {\n    status: {\n      type: 'ALPHA'\n    }\n  }\n}",...Heading2.parameters?.docs?.source}}},Heading3.parameters={...Heading3.parameters,docs:{...Heading3.parameters?.docs,source:{originalSource:"{\n  args: {\n    level: 3,\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  parameters: {\n    status: {\n      type: 'ALPHA'\n    }\n  }\n}",...Heading3.parameters?.docs?.source}}},Heading4.parameters={...Heading4.parameters,docs:{...Heading4.parameters?.docs,source:{originalSource:"{\n  args: {\n    level: 4,\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  parameters: {\n    status: {\n      type: 'ALPHA'\n    }\n  }\n}",...Heading4.parameters?.docs?.source}}},Heading5.parameters={...Heading5.parameters,docs:{...Heading5.parameters?.docs,source:{originalSource:"{\n  args: {\n    level: 5,\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  parameters: {\n    status: {\n      type: 'ALPHA'\n    }\n  }\n}",...Heading5.parameters?.docs?.source}}},Heading6.parameters={...Heading6.parameters,docs:{...Heading6.parameters?.docs,source:{originalSource:"{\n  args: {\n    level: 6,\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  parameters: {\n    status: {\n      type: 'ALPHA'\n    }\n  }\n}",...Heading6.parameters?.docs?.source}}},Heading11.parameters={...Heading11.parameters,docs:{...Heading11.parameters?.docs,source:{originalSource:'{\n  args: {\n    level: 11,\n    children: \'These go to eleven!\'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `Heading levels of 7 and greater are not possible to achieve with HTML elements. It is possible to set \\`aria-level="7"\\`, but there are various disadvantages. Not all screen readers support it, and having headings at this level might be bad for screen reader user experience.\n\nThe web component implementation must decide to use \\`aria-level="7"\\`, to cap the level at the highest supported level, or to not render a \\`role="header"\\` element at all.`\n      }\n    },\n    status: {\n      type: \'WORK IN PROGRESS\'\n    }\n  }\n}',...Heading11.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Heading2","Heading3","Heading4","Heading5","Heading6","Heading11","DesignTokens"]}}]);