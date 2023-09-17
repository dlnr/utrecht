/*! For license information please see components-FormToggle-stories.628b0f0f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[5715],{"../../documentation/components/ComponentTokensSection.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>ComponentTokensSection});var prop_types=__webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),DesignTokensTable=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../documentation/components/DesignTokensTable.jsx"));const isHiddenDesignToken=token=>!!token&&!!token.$extensions&&!0===token.$extensions["nl.nldesignsystem.hidden"];var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ComponentTokensTable=({component,tokens})=>{const componentPath=["utrecht",component.replace(/^(example|denhaag|utrecht)-/,"")],subset=tokens.filter((token=>componentPath.every(((name,index)=>token.path[index]===name)))).filter((token=>!isHiddenDesignToken(token)));return 0===subset.length?(0,jsx_runtime.jsxs)("p",{children:["This component has ",(0,jsx_runtime.jsx)("strong",{children:"no documented design tokens"}),"."]}):(0,jsx_runtime.jsx)(DesignTokensTable.V,{tokens:subset})};ComponentTokensTable.displayName="ComponentTokensTable",ComponentTokensTable.propTypes={component:prop_types_default().string.isRequired,tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])}))};var lodash_isplainobject=__webpack_require__("../../node_modules/.pnpm/lodash.isplainobject@4.0.6/node_modules/lodash.isplainobject/index.js"),lodash_isplainobject_default=__webpack_require__.n(lodash_isplainobject);const CopyButton=({value,textContent="Copy"})=>(0,jsx_runtime.jsx)("button",{className:"utrecht-button utrecht-button--secondary-action utrecht-button--html-button",style:{cursor:"copy"},onClick:()=>navigator.clipboard.writeText(value),type:"button",children:textContent});CopyButton.displayName="CopyButton",CopyButton.propTypes={value:prop_types_default().string.isRequired,textContent:prop_types_default().string};const traverseDeep=(root,parents,current,valueTest,callback)=>{valueTest(current)?callback(parents,current):lodash_isplainobject_default()(current)&&Object.entries(current).forEach((([key,value])=>{traverseDeep(root,[...parents,key],value,valueTest,callback)}))},isDesignTokenDefinition=value=>(value=>Object.prototype.hasOwnProperty.call(value,"value")||Object.prototype.hasOwnProperty.call(value,"$value"))(value)||Object.prototype.hasOwnProperty.call(value,"css")||Object.prototype.hasOwnProperty.call(value,"$extensions"),tokensToCSS=tokens=>{const lines=[];return((tokens,callback)=>{traverseDeep(tokens,[],tokens,isDesignTokenDefinition,callback)})(tokens,((path,value)=>{isHiddenDesignToken(value)||lines.push(`  /* --${path.join("-")}: ${value&&value.$extensions&&value.$extensions["nl.nldesignsystem.css.property"]&&value.$extensions["nl.nldesignsystem.css.property"].syntax?value.$extensions["nl.nldesignsystem.css.property"].syntax:"<value>"}; */`)})),`.your-theme {\n  /* Uncomment each custom property you need */\n${lines.join("\n")}\n}`},ExampleTokensCSS=({definition})=>{const code=tokensToCSS(definition);return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("h2",{children:["Template for ",(0,jsx_runtime.jsx)("samp",{children:"your-theme.css"})]}),(0,jsx_runtime.jsx)("p",{children:"If you do not (yet) want to manage your design tokens in JSON files, but when you just want to get started quickly to reuse our CSS component with your own design, then you can use this CSS template as a starting point to see what parts of the component you can customize with design tokens."}),(0,jsx_runtime.jsxs)("p",{children:["Combine the design tokens CSS with our"," ",(0,jsx_runtime.jsx)("a",{href:"https://npmjs.com/package/@utrecht/component-library-css",children:"CSS component library pacakge on npm"}),", and you should be able to quickly and easily create a web page with our components and your own design."]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CopyButton,{value:code,textContent:"Copy CSS"})}),(0,jsx_runtime.jsx)("pre",{children:code})]})};ExampleTokensCSS.displayName="ExampleTokensCSS",ExampleTokensCSS.propTypes={definition:prop_types_default().object.isRequired};var lodash_clonedeepwith=__webpack_require__("../../node_modules/.pnpm/lodash.clonedeepwith@4.5.0/node_modules/lodash.clonedeepwith/index.js"),lodash_clonedeepwith_default=__webpack_require__.n(lodash_clonedeepwith),lodash_mapvalues=__webpack_require__("../../node_modules/.pnpm/lodash.mapvalues@4.6.0/node_modules/lodash.mapvalues/index.js"),lodash_mapvalues_default=__webpack_require__.n(lodash_mapvalues),lodash_omitby=__webpack_require__("../../node_modules/.pnpm/lodash.omitby@4.6.0/node_modules/lodash.omitby/index.js"),lodash_omitby_default=__webpack_require__.n(lodash_omitby);const ExampleTokensJSON=({definition})=>{const filter=item=>lodash_isplainobject_default()(item.$extensions)||lodash_isplainobject_default()(item.$value)?{}:lodash_isplainobject_default()(item)?lodash_mapvalues_default()(lodash_omitby_default()(item,(item=>isHiddenDesignToken(item))),(item=>lodash_clonedeepwith_default()(item,filter))):void 0,tokens=lodash_clonedeepwith_default()(definition,filter),code=JSON.stringify(tokens,null,"  ");return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("h2",{children:["Template ",(0,jsx_runtime.jsx)("samp",{children:"tokens.json"})," for your theme"]}),(0,jsx_runtime.jsxs)("p",{children:["We use the ",(0,jsx_runtime.jsx)("a",{href:"https://design-tokens.github.io/community-group/format/",children:"Design Tokens Format"})," to store our design choices in JSON files. These ",(0,jsx_runtime.jsx)("code",{children:"tokens.json"})," files are translated into other formats such as CSS and SCSS variables, so the design choices can be imported automatically into projects with varying technical stacks."]}),(0,jsx_runtime.jsx)("p",{children:"When we develop front-end components in CSS, we avoid putting design decisions in our CSS code directly. Instead we use CSS variables that reference the design tokens. This way we don't need to change the CSS components when over time we make different design decisions, we just include the latest export of the design tokens."}),(0,jsx_runtime.jsx)("p",{children:"Because our CSS components are coded in such a way that design decisions —such as fonts, colors and sizes— are stored in an optional file that you don't have to use, you can reuse our CSS components and combine them with design decisions for your own project and brand."}),(0,jsx_runtime.jsxs)("p",{children:["Copy the JSON template below if you want to reuse this component, and replace the empty placeholder object with your own code:",(0,jsx_runtime.jsx)("code",{children:'{ "value": "#123456", "comment": "my design choice" }'}),"."]}),(0,jsx_runtime.jsxs)("p",{children:["When you have a collection of design token JSON files, you can use"," ",(0,jsx_runtime.jsx)("a",{href:"https://amzn.github.io/style-dictionary/#/",children:"Style Dictionary"})," to translate them to CSS or any other format your developers need."]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CopyButton,{value:code,textContent:"Copy JSON"})}),(0,jsx_runtime.jsx)("pre",{children:code})]})};ExampleTokensJSON.displayName="ExampleTokensJSON",ExampleTokensJSON.propTypes={definition:prop_types_default().object.isRequired};const ComponentTokensSection=({component,tokens,definition})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[definition?(0,jsx_runtime.jsx)(ExampleTokensJSON,{definition}):"",definition?(0,jsx_runtime.jsx)(ExampleTokensCSS,{definition}):"",(0,jsx_runtime.jsx)(ComponentTokensTable,{component,tokens})]});ComponentTokensSection.propTypes={component:prop_types_default().string.isRequired,definition:prop_types_default().object,tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])})).isRequired}},"./stories/components/FormToggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,DesignTokens:()=>DesignTokens,Disabled:()=>Disabled,DisabledChecked:()=>DisabledChecked,Focus:()=>Focus,FocusVisible:()=>FocusVisible,Hover:()=>Hover,InputCheckbox:()=>InputCheckbox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FormToggle_stories});const tokens_namespaceObject=JSON.parse('{"utrecht":{"form-toggle":{"accent-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-radius":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"track":{"border-radius":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"disabled":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}},"thumb":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"margin-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"min-inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"disabled":{"box-shadow":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}},"checked":{"accent-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"focus":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-style":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),jsx_runtime=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const FormToggleDiv=({checked,disabled,hover,focus,focusVisible,...restProps})=>(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("utrecht-form-toggle","utrecht-form-toggle--html-div",checked&&"utrecht-form-toggle--checked",!checked&&"utrecht-form-toggle--not-checked",disabled&&"utrecht-form-toggle--disabled",focus&&"utrecht-form-toggle--focus",focusVisible&&"utrecht-form-toggle--focus-visible",hover&&"utrecht-form-toggle--hover"),role:"switch",tabIndex:0,"aria-checked":checked||null,"aria-disabled":disabled||null,...restProps,children:(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("utrecht-form-toggle__track",checked&&"utrecht-form-toggle__track--checked",!checked&&"utrecht-form-toggle__track--not-checked",disabled&&"utrecht-form-toggle__track--disabled"),children:(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("utrecht-form-toggle__thumb",checked&&"utrecht-form-toggle__thumb--checked",!checked&&"utrecht-form-toggle__thumb--not-checked",disabled&&"utrecht-form-toggle__thumb--disabled")})})});FormToggleDiv.displayName="FormToggleDiv";const FormToggleCheckbox=({checked,disabled,id})=>(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)("utrecht-form-toggle","utrecht-form-toggle--html-checkbox"),children:[(0,jsx_runtime.jsx)("input",{id,type:"checkbox",className:"utrecht-form-toggle__checkbox",defaultChecked:checked||null,disabled:disabled||null}),(0,jsx_runtime.jsx)("label",{htmlFor:id,className:(0,clsx_m.Z)("utrecht-form-toggle__track"),children:(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("utrecht-form-toggle__thumb")})})]});FormToggleCheckbox.displayName="FormToggleCheckbox";const FormToggleStory=({element,...restProps})=>"div"===element?(0,jsx_runtime.jsx)(FormToggleDiv,{...restProps}):(0,jsx_runtime.jsx)(FormToggleCheckbox,{...restProps});try{FormToggleStory.displayName="FormToggleStory",FormToggleStory.__docgenInfo={description:"",displayName:"FormToggleStory",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"boolean"}},focus:{defaultValue:null,description:"",name:"focus",required:!1,type:{name:"boolean"}},focusVisible:{defaultValue:null,description:"",name:"focusVisible",required:!1,type:{name:"boolean"}},element:{defaultValue:null,description:"",name:"element",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/FormToggle.tsx#FormToggleStory"]={docgenInfo:FormToggleStory.__docgenInfo,name:"FormToggleStory",path:"stories/components/FormToggle.tsx#FormToggleStory"})}catch(__react_docgen_typescript_loader_error){}var util=__webpack_require__("./stories/components/util.tsx");const meta={title:"CSS Component/Form Toggle",id:"css-form-toggle",component:FormToggleStory,argTypes:{checked:{description:"Checked",control:"boolean"},disabled:{description:"Disabled",control:"boolean"},element:{description:"HTML element",control:"select",options:["div","input"]},focus:{description:"Focus",control:"boolean"},focusVisible:{description:"Focus-visible",control:"boolean"},hover:{description:"Hover",control:"boolean"},id:{description:"id",control:"text"}},args:{checked:!1,disabled:!1,focus:!1,focusVisible:!1,hover:!1},parameters:{tokensPrefix:"utrecht-form-toggle",status:{type:"WORK IN PROGRESS"},tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Form Toggle\n\n## Anatomy\n\n- **track**: genoemd naar [`::-moz-range-track`](https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-track)\n- **thumb**: genoemd naar [`::-moz-range-thumb`](https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-thumb) en `::-webkit-slider-thumb`.\n"}}}},FormToggle_stories=meta,Default={args:{},parameters:{docs:{description:{story:"Styling via `utrecht-form-toggle` class name."}}}},InputCheckbox={args:{element:"input",hover:!0,id:"0e73edcc-6479-4a9f-9854-9669e5a79ee8"},name:'With invisible `<input type="checkbox">`'},Hover={args:{element:"div",hover:!0},name:"Hover"},Focus={args:{element:"div",focus:!0},name:"Focus"},FocusVisible={args:{element:"div",focus:!0,focusVisible:!0},name:"Focus-visible"},Checked={args:{checked:!0},name:"Checked"},Disabled={args:{disabled:!0},name:"Disabled"},DisabledChecked={args:{checked:!0,disabled:!0},name:"Checked and disabled"},DesignTokens=(0,util.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {},\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling via `utrecht-form-toggle` class name.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},InputCheckbox.parameters={...InputCheckbox.parameters,docs:{...InputCheckbox.parameters?.docs,source:{originalSource:"{\n  args: {\n    element: 'input',\n    hover: true,\n    id: '0e73edcc-6479-4a9f-9854-9669e5a79ee8'\n  },\n  name: 'With invisible `<input type=\"checkbox\">`'\n}",...InputCheckbox.parameters?.docs?.source}}},Hover.parameters={...Hover.parameters,docs:{...Hover.parameters?.docs,source:{originalSource:"{\n  args: {\n    // The React component doesn't support `hover` simulation.\n    // use the <div> implementation for visual regression tests.\n    element: 'div',\n    hover: true\n  },\n  name: 'Hover'\n}",...Hover.parameters?.docs?.source}}},Focus.parameters={...Focus.parameters,docs:{...Focus.parameters?.docs,source:{originalSource:"{\n  args: {\n    // The React component doesn't support `focus` simulation.\n    // use the <div> implementation for visual regression tests.\n    element: 'div',\n    focus: true\n  },\n  name: 'Focus'\n}",...Focus.parameters?.docs?.source}}},FocusVisible.parameters={...FocusVisible.parameters,docs:{...FocusVisible.parameters?.docs,source:{originalSource:"{\n  args: {\n    // The React component doesn't support `focus-visible` simulation.\n    // use the <div> implementation for visual regression tests.\n    element: 'div',\n    focus: true,\n    focusVisible: true\n  },\n  name: 'Focus-visible'\n}",...FocusVisible.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  args: {\n    checked: true\n  },\n  name: 'Checked'\n}",...Checked.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  },\n  name: 'Disabled'\n}",...Disabled.parameters?.docs?.source}}},DisabledChecked.parameters={...DisabledChecked.parameters,docs:{...DisabledChecked.parameters?.docs,source:{originalSource:"{\n  args: {\n    checked: true,\n    disabled: true\n  },\n  name: 'Checked and disabled'\n}",...DisabledChecked.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","InputCheckbox","Hover","Focus","FocusVisible","Checked","Disabled","DisabledChecked","DesignTokens"]},"./stories/components/util.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/util.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"stories/components/util.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}}}]);