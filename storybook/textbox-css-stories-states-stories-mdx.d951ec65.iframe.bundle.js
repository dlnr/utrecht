/*! For license information please see textbox-css-stories-states-stories-mdx.d951ec65.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[76249],{"../../components/textbox/css/stories/states.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>states_stories,disabled:()=>disabled,focus:()=>states_stories_focus,invalid:()=>invalid,readOnly:()=>readOnly,required:()=>required});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");var story_template=__webpack_require__("../../components/textbox/css/story-template.jsx"),jsx_runtime=(__webpack_require__("../../components/textbox/css/index.scss"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const disabled=story_template.fE.bind({});disabled.storyName="disabled",disabled.args={...story_template.sS,disabled:!0},disabled.parameters={storySource:{source:"Textbox.bind({})"}};const invalid=story_template.fE.bind({});invalid.storyName="invalid",invalid.args={...story_template.sS,invalid:!0},invalid.parameters={storySource:{source:"Textbox.bind({})"}};const readOnly=story_template.fE.bind({});readOnly.storyName="read-only",readOnly.args={...story_template.sS,readOnly:!0},readOnly.parameters={storySource:{source:"Textbox.bind({})"}};const required=story_template.fE.bind({});required.storyName="required",required.args={...story_template.sS,required:!0},required.parameters={storySource:{source:"Textbox.bind({})"}};const states_stories_focus=story_template.fE.bind({});states_stories_focus.storyName="focus",states_stories_focus.args={...story_template.sS,focus:!0},states_stories_focus.parameters={storySource:{source:"Textbox.bind({})"}};const componentMeta={title:"CSS Component/Textbox/States",id:"css-textbox--state",parameters:{status:{type:"WORK IN PROGRESS"}},component:story_template.fE,tags:["stories-mdx"],includeStories:["disabled","invalid","readOnly","required","focus"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n",(0,jsx_runtime.jsx)(dist.h_,{id:"css-textbox--state",title:"CSS Component/Textbox/States",component:story_template.fE,parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"text-box-component-states",children:"Text box component states"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"disabled",args:{...story_template.sS,disabled:!0},children:story_template.fE.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"invalid",children:"Invalid"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"invalid",args:{...story_template.sS,invalid:!0},children:story_template.fE.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"read-only",children:"Read-only"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"read-only",args:{...story_template.sS,readOnly:!0},children:story_template.fE.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"required",children:"Required"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{children:'\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nGebruik het `required` attribuut zodat duidelijk is dat het veld verplicht is. Browsers zullen een foutmelding tonen als een verplicht veld niet is ingevuld, en de _form submit_ blokkeren (tenzij `<form novalidate>` wordt gebruikt).\n\nGebruik `aria-required` in plaats van het `required` attribuut als de validatie-meldingen zelf wilt genereren (met de _invalid form field description_ component). De browser doet geen validatie voor `aria-required`.\n\nVoor _progressive enhancement_ gebruik je bij server-side rendering `required`, en met client-side script vervang je de `required` door `aria-required`. Als het script niet geladen kan worden heeft de gebruiker nog voordeel van `required` .\n\nScreen readers ondersteunen zowel `required` als `aria-required`.\n\nIn CSS werkt de `input:required` selector alleen bij het `required` attribuut, en niet bij het `aria-required` attribuut. Gebruik daarom de `.utrecht-textbox:required, .utrecht-textbox[aria-required="true"]` om beide varianten te ondersteunen.\n\nZie ook:\n\n- [WCAG Technique ARIA2: Identifying a required field with the `aria-required` property](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA2)\n'}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"required",args:{...story_template.sS,required:!0},children:story_template.fE.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"focus",children:"Focus"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"focus",args:{...story_template.sS,focus:!0},children:story_template.fE.bind({})})})]})}}};const states_stories=componentMeta},"../../components/textbox/css/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PG:()=>argTypes,_O:()=>defaultArgs,fE:()=>Textbox,sS:()=>exampleArgs});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const argTypes={autoComplete:{description:"Autocomplete",control:"select",options:["","additional-name","address-level1","address-level2","address-level3","address-level4","address-line1","address-line2","address-line3","bday","bday-day","bday-month","bday-year","cc-additional-name","cc-csc","cc-exp","cc-exp-month","cc-exp-year","cc-family-name","cc-given-name","cc-name","cc-number","cc-type","country","country-name","current-password","email","family-name","fax","given-name","home","honorific-prefix","honorific-suffix","impp","language","mobile","name","new-password","nickname","one-time-code","organization","organization-title","pager","photo","postal-code","sex","street-address","tel","tel-area-code","tel-country-code","tel-extension","tel-local","tel-local-prefix","tel-local-suffix","tel-national","transaction-amount","transaction-currency","url","username","work"]},dir:{description:"Direction",control:"select",options:["","auto","ltr","rtl"]},disabled:{description:"Disabled",control:"boolean"},focus:{description:"Focus",control:"boolean"},invalid:{description:"Invalid",control:"boolean"},placeholder:{description:"Set the text of the placeholder",control:"text"},placeholderDir:{description:"Placeholder direction",control:"select",options:["","auto","ltr","rtl"]},readOnly:{description:"Read-only",control:"boolean"},required:{description:"Required",control:"boolean"},spellcheck:{description:"Spellcheck",control:{type:"select"},options:["","false","true"]},type:{description:"Type",control:"select",options:["","email","number","password","search","tel","text","url"]},value:{description:"Set the value of the text box",control:"text"}},defaultArgs={autoComplete:"",dir:"auto",disabled:!1,focus:!1,invalid:!1,readOnly:!1,required:!1,placeholder:"",spellcheck:null,type:"",value:"",minLength:0},exampleArgs={value:"The Quick Brown Fox Jumps Over The Lazy Dog"},Textbox=({autoComplete=defaultArgs.autoComplete,dir=defaultArgs.dir,disabled=defaultArgs.disabled,focus=defaultArgs.focus,invalid=defaultArgs.invalid,placeholder=defaultArgs.placeholder,placeholderDir=defaultArgs.placeholderDir,readOnly=defaultArgs.readOnly,required=defaultArgs.required,spellcheck=defaultArgs.spellcheck,type=defaultArgs.type,value=defaultArgs.value,minLength=defaultArgs.minLength,className,...restProps})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{...restProps,className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("utrecht-textbox","utrecht-textbox--html-input",disabled&&"utrecht-textbox--disabled",focus&&"utrecht-textbox--focus utrecht-textbox--focus-visible",invalid&&"utrecht-textbox--invalid",readOnly&&"utrecht-textbox--readonly",required&&"utrecht-textbox--required","ltr"===placeholderDir&&"utrecht-textbox--placeholder-ltr","rtl"===placeholderDir&&"utrecht-textbox--placeholder-rtl",className),minLength:!minLength||1===minLength&&required?void 0:minLength,autoComplete:autoComplete||null,disabled:disabled||null,"aria-invalid":invalid||null,dir:dir||null,placeholder:placeholder||null,readOnly:readOnly||null,required:required||null,spellCheck:spellcheck||null,type:type||null,defaultValue:value||null});Textbox.displayName="Textbox"}}]);