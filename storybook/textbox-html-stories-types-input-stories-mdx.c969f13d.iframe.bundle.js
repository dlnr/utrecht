/*! For license information please see textbox-html-stories-types-input-stories-mdx.c969f13d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[41972],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/textbox/html/stories/types-input.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,number:()=>number,password:()=>password,url:()=>url});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_story_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/textbox/html/story-template.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const number=_story_template__WEBPACK_IMPORTED_MODULE_1__.fE.bind({});number.storyName="Number",number.args={min:0,value:"42",max:100,type:"number"},number.parameters={storySource:{source:"Textbox.bind({})"}};const password=_story_template__WEBPACK_IMPORTED_MODULE_1__.fE.bind({});password.storyName="Password",password.args={autoComplete:"current-password",required:!0,value:"very$ecret2021",type:"password"},password.parameters={storySource:{source:"Textbox.bind({})"}};const url=_story_template__WEBPACK_IMPORTED_MODULE_1__.fE.bind({});url.storyName="URL",url.args={type:"url",value:"https://example.fi/"},url.parameters={storySource:{source:"Textbox.bind({})"}};const componentMeta={title:"HTML Component/Textbox/Type",id:"html-textbox--type",parameters:{status:{type:"WORK IN PROGRESS"}},component:_story_template__WEBPACK_IMPORTED_MODULE_1__.fE,tags:["stories-mdx"],includeStories:["number","password","url"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{id:"html-textbox--type",title:"HTML Component/Textbox/Type",component:_story_template__WEBPACK_IMPORTED_MODULE_1__.fE,parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"text-box-component-types",children:"Text box component types"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"with-number-input",children:"with number input"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Number",args:{min:0,value:"42",max:100,type:"number"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.fE.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"with-password-input",children:"with password input"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Password",args:{autoComplete:"current-password",required:!0,value:"very$ecret2021",type:"password"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.fE.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"with-url-input",children:"with URL input"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"URL",args:{type:"url",value:"https://example.fi/"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.fE.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"../../components/textbox/html/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PG:()=>argTypes,_O:()=>defaultArgs,fE:()=>Textbox,sS:()=>exampleArgs});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={autoComplete:{description:"Autocomplete type",control:"text"},disabled:{description:"Disabled",control:"boolean"},invalid:{description:"Invalid",control:"boolean"},min:{description:"Minimum",control:"number"},max:{description:"Maximum",control:"number"},pattern:{description:"Pattern",control:"text"},placeholder:{description:"Placeholder",control:"text"},readOnly:{description:"Read-only",control:"boolean"},required:{description:"Required",control:"boolean"},type:{description:"Type",control:"select",options:["","email","number","password","search","tel","text","url"]},value:{description:"Set the value of the text box",control:"text"}},defaultArgs={autoComplete:null,disabled:!1,invalid:!1,min:"",max:"",pattern:"",placeholder:"",readOnly:!1,required:!1,type:"text",value:""},exampleArgs={value:"The Quick Brown Fox Jumps Over The Lazy Dog"},Textbox=({autoComplete=defaultArgs.autoComplete,disabled=defaultArgs.disabled,invalid=defaultArgs.invalid,min=defaultArgs.min,max=defaultArgs.max,pattern=defaultArgs.pattern,placeholder=defaultArgs.placeholder,readOnly=defaultArgs.readOnly,required=defaultArgs.required,type=defaultArgs.type,value=defaultArgs.value})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"utrecht-html",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type,"aria-invalid":invalid||null,disabled:disabled||null,min:min||null,max:max||null,patter:pattern||null,placeholder:placeholder||null,required:required||null,readOnly:readOnly||null,value,autoComplete:autoComplete||null})});Textbox.displayName="Textbox"}}]);