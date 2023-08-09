/*! For license information please see web-component-badge-status-status-stories-mdx.ea004e47.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[62984],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/web-component/badge-status/status.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{active:()=>active,danger:()=>danger,default:()=>__WEBPACK_DEFAULT_EXPORT__,error:()=>error,inactive:()=>inactive,invalid:()=>invalid,neutral:()=>neutral,safe:()=>safe,success:()=>success,valid:()=>valid,warning:()=>warning});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_story_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/web-component/badge-status/story-template.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const neutral=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});neutral.storyName="Neutral",neutral.args={status:"neutral",textContent:"neutral"},neutral.parameters={storySource:{source:"BadgeStatus.bind({})"}};const success=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});success.storyName="Success",success.args={status:"success",textContent:"success"},success.parameters={storySource:{source:"BadgeStatus.bind({})"}};const warning=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});warning.storyName="Warning",warning.args={status:"warning",textContent:"warning"},warning.parameters={storySource:{source:"BadgeStatus.bind({})"}};const error=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});error.storyName="Error",error.args={status:"error",textContent:"error"},error.parameters={storySource:{source:"BadgeStatus.bind({})"}};const safe=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});safe.storyName="Safe",safe.args={status:"safe",textContent:"safe"},safe.parameters={storySource:{source:"BadgeStatus.bind({})"}};const danger=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});danger.storyName="Danger",danger.args={status:"danger",textContent:"danger"},danger.parameters={storySource:{source:"BadgeStatus.bind({})"}};const active=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});active.storyName="Active",active.args={status:"active",textContent:"active"},active.parameters={storySource:{source:"BadgeStatus.bind({})"}};const inactive=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});inactive.storyName="Inactive",inactive.args={status:"inactive",textContent:"inactive"},inactive.parameters={storySource:{source:"BadgeStatus.bind({})"}};const valid=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});valid.storyName="Valid",valid.args={status:"valid",textContent:"valid"},valid.parameters={storySource:{source:"BadgeStatus.bind({})"}};const invalid=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});invalid.storyName="Invalid",invalid.args={status:"invalid",textContent:"invalid"},invalid.parameters={storySource:{source:"BadgeStatus.bind({})"}};const componentMeta={title:"Web Component/Badge/Status Badge/Status",id:"web-component-status-badge",parameters:{status:{type:"WORK IN PROGRESS"}},component:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO,tags:["stories-mdx"],includeStories:["neutral","success","warning","error","safe","danger","active","inactive","valid","invalid"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{id:"web-component-status-badge",title:"Web Component/Badge/Status Badge/Status",component:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO,parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"status-badge",children:"Status badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"neutral",children:"Neutral"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Neutral",args:{status:"neutral",textContent:"neutral"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"success",children:"Success"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Success",args:{status:"success",textContent:"success"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"warning",children:"Warning"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Warning",args:{status:"warning",textContent:"warning"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"error",children:"Error"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Error",args:{status:"error",textContent:"error"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"safe",children:"Safe"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Safe",args:{status:"safe",textContent:"safe"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"danger",children:"Danger"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Danger",args:{status:"danger",textContent:"danger"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"active",children:"Active"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Active",args:{status:"active",textContent:"active"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"inactive",children:"Inactive"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Inactive",args:{status:"inactive",textContent:"inactive"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"valid",children:"Valid"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Valid",args:{status:"valid",textContent:"valid"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"invalid-badge",children:"Invalid badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Invalid",args:{status:"invalid",textContent:"invalid"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./stories/web-component/badge-status/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PG:()=>argTypes,_O:()=>defaultArgs,eO:()=>BadgeStatus,sS:()=>exampleArgs});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={textContent:{description:"Text content",control:"text"},status:{control:{type:"select"},description:"Status",options:["error","success","valid","invalid","active","inactive","neutral","danger","warning","safe"]}},defaultArgs={status:"neutral",textContent:""},exampleArgs={status:"neutral",textContent:"normaal"},BadgeStatus=({status=defaultArgs.status,textContent=defaultArgs.textContent})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("utrecht-badge-status",{status,children:textContent});BadgeStatus.displayName="BadgeStatus"}}]);