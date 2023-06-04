/*! For license information please see heading-group-css-stories-pre-heading-stories-mdx.eb9e4ae2.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[69441],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/heading-group/css/stories/pre-heading.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_story_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/heading-group/css/story-template.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const defaultStory=_story_template__WEBPACK_IMPORTED_MODULE_1__.OX.bind({});defaultStory.storyName="Default",defaultStory.args={innerHTML:'\n      <h1 class="utrecht-heading-1">The Quick Brown Fox Jumps Over The Lazy Dog</h1>\n      <p class="utrecht-pre-heading">The Quick Brown Fox Jumps Over The Lazy Dog</p>\n      '},defaultStory.parameters={storySource:{source:"HeadingGroup.bind({})"}};const componentMeta={title:"CSS Component/Heading Group/Pre-heading",id:"css-heading-group--pre-heading",parameters:{status:{type:"ALPHA"}},component:_story_template__WEBPACK_IMPORTED_MODULE_1__.OX,args:_story_template__WEBPACK_IMPORTED_MODULE_1__._O,argTypes:_story_template__WEBPACK_IMPORTED_MODULE_1__.PG,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{id:"css-heading-group--pre-heading",component:_story_template__WEBPACK_IMPORTED_MODULE_1__.OX,argTypes:_story_template__WEBPACK_IMPORTED_MODULE_1__.PG,args:_story_template__WEBPACK_IMPORTED_MODULE_1__._O,title:"CSS Component/Heading Group/Pre-heading",parameters:{status:{type:"ALPHA"}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"heading-group-with-pre-heading",children:"Heading Group with pre-heading"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Default",args:{innerHTML:'\n      <h1 class="utrecht-heading-1">The Quick Brown Fox Jumps Over The Lazy Dog</h1>\n      <p class="utrecht-pre-heading">The Quick Brown Fox Jumps Over The Lazy Dog</p>\n      '},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.OX.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.$4,{story:"Default"})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"../../components/heading-group/css/story-template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OX:()=>HeadingGroup,PG:()=>argTypes,_O:()=>defaultArgs,sS:()=>exampleArgs});var html_react_parser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/html-react-parser@3.0.16_react@18.2.0/node_modules/html-react-parser/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const argTypes={innerHTML:{description:"Set the HTML content of the heading group",control:"text"}},defaultArgs={innerHTML:""},exampleArgs={innerHTML:'\n    <h1 class="utrecht-heading-1">The Quick Brown Fox Jumps Over The Lazy Dog</h1>\n    <p class="utrecht-paragraph">The Quick Brown Fox Jumps Over The Lazy Dog</p>\n'},HeadingGroup=({innerHTML=defaultArgs.innerHTML,children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("hgroup",{className:"utrecht-heading-group",children:[children,innerHTML?(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(innerHTML):void 0]});HeadingGroup.displayName="HeadingGroup"}}]);