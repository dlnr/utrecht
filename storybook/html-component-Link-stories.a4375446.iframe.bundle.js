/*! For license information please see html-component-Link-stories.a4375446.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[7253],{"./stories/html-component/Link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlternateLang:()=>AlternateLang,CurrentLang:()=>CurrentLang,Default:()=>Default,DesignTokens:()=>DesignTokens,Email:()=>Email,External:()=>External,Telephone:()=>Telephone,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utrecht_components_link_README_md_raw__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/link/README.md?raw"),_utrecht_components_link_tokens_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/link/tokens.json"),_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),_decorator__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./stories/html-component/decorator.tsx")),_components_util__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./stories/components/util.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Link=({children,href,current,lang,hrefLang,alternate=!1,external=!1})=>{return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a",{href:null===href?"#":href,"aria-current":current||void 0,hrefLang:hrefLang||void 0,lang:lang||void 0,rel:(str=`${alternate?"alternate":""} ${external?"external noopener noreferrer":""}`,str.replace(/\s+/g," ").trim()||void 0),children});var str};Link.displayName="Link";const meta={title:"HTML Component/Link",id:"html-link",component:Link,decorators:[_decorator__WEBPACK_IMPORTED_MODULE_4__.j],argTypes:{children:{description:"Content of the link",control:"text"},alternate:{description:"Target document is an alternate version of the current page",type:"boolean"},current:{description:"Current page is the same as the link target",control:{type:"select"},options:["","date","false","location","page","step","time","true"]},external:{description:"Link is external link",type:"boolean"},href:{description:"Link href",control:"text"},hrefLang:{description:"Language of the target document",control:"text"},lang:{description:"Language of the link text",control:"text"}},args:{alternate:!1,children:[],external:!1,hrefLang:"",lang:""},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-link",tokens:_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_2__,tokensDefinition:_utrecht_components_link_tokens_json__WEBPACK_IMPORTED_MODULE_1__,docs:{description:{component:_utrecht_components_link_README_md_raw__WEBPACK_IMPORTED_MODULE_0__}}}},__WEBPACK_DEFAULT_EXPORT__=meta,Default={args:{children:"The Quick Brown Fox Jumps Over The Lazy Dog",href:"https://example.com/"},parameters:{docs:{description:{story:"Markup using the `<a>` element."}}}},Email={args:{href:"mailto:info@example.com",children:"info@example.com"},name:"E-mail",parameters:{docs:{description:{story:"Styling via the `<a>` element when `href` attribute starts with `mailto:`."}}}},External={args:{children:"The Quick Brown Fox Jumps Over The Lazy Dog",external:!0,href:"https://example.com/"},name:"External",parameters:{docs:{description:{story:'Styling via het `<a>` element wanneer `rel="external"` is gezet:'}}}},Telephone={args:{href:"tel:+31555385385",children:"+31 555 385 385"},name:"Telephone",parameters:{docs:{description:{story:"Styling via the `<a>` element when `href` attribute starts with `tel:`."}}}},AlternateLang={args:{alternate:!0,href:"https://example.com/en/",hrefLang:"en",lang:"en",children:"EN",ariaLabel:"This page in English"},name:"Alternate language"},CurrentLang={args:{current:!0,href:"https://example.com/en/",hrefLang:"en",lang:"en",children:"EN",ariaLabel:"This page in English"},name:"Current language"},DesignTokens=(0,_components_util__WEBPACK_IMPORTED_MODULE_5__.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',\n    href: 'https://example.com/'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `<a>` element.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Email.parameters={...Email.parameters,docs:{...Email.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: 'mailto:info@example.com',\n    children: 'info@example.com'\n  },\n  name: 'E-mail',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling via the `<a>` element when `href` attribute starts with `mailto:`.'\n      }\n    }\n  }\n}",...Email.parameters?.docs?.source}}},External.parameters={...External.parameters,docs:{...External.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',\n    external: true,\n    href: 'https://example.com/'\n  },\n  name: 'External',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling via het `<a>` element wanneer `rel=\"external\"` is gezet:'\n      }\n    }\n  }\n}",...External.parameters?.docs?.source}}},Telephone.parameters={...Telephone.parameters,docs:{...Telephone.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: 'tel:+31555385385',\n    children: '+31 555 385 385'\n  },\n  name: 'Telephone',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling via the `<a>` element when `href` attribute starts with `tel:`.'\n      }\n    }\n  }\n}",...Telephone.parameters?.docs?.source}}},AlternateLang.parameters={...AlternateLang.parameters,docs:{...AlternateLang.parameters?.docs,source:{originalSource:"{\n  args: {\n    alternate: true,\n    href: 'https://example.com/en/',\n    hrefLang: 'en',\n    lang: 'en',\n    children: 'EN',\n    ariaLabel: 'This page in English'\n  },\n  name: 'Alternate language'\n}",...AlternateLang.parameters?.docs?.source}}},CurrentLang.parameters={...CurrentLang.parameters,docs:{...CurrentLang.parameters?.docs,source:{originalSource:"{\n  args: {\n    current: true,\n    href: 'https://example.com/en/',\n    hrefLang: 'en',\n    lang: 'en',\n    children: 'EN',\n    ariaLabel: 'This page in English'\n  },\n  name: 'Current language'\n}",...CurrentLang.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Email","External","Telephone","AlternateLang","CurrentLang","DesignTokens"]},"./stories/html-component/decorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>htmlContentDecorator});var _utrecht_component_library_react_dist_css_module__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../component-library-react/dist/css-module/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const htmlContentDecorator=(Story,storyContext)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_utrecht_component_library_react_dist_css_module__WEBPACK_IMPORTED_MODULE_2__.pu,{dir:storyContext?.args?.dir,lang:storyContext?.args?.lang,children:Story()});htmlContentDecorator.displayName="htmlContentDecorator"}}]);