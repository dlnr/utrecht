/*! For license information please see CustomCheckbox-stories.ae4f4e5a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[]).push([[3917],{"./src/CustomCheckbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,CheckedAndDisabled:()=>CheckedAndDisabled,Default:()=>Default,DesignTokens:()=>DesignTokens,Disabled:()=>Disabled,Intederminate:()=>Intederminate,IntederminateAndDisabled:()=>IntederminateAndDisabled,RequiredAndInvalid:()=>RequiredAndInvalid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CustomCheckbox_stories});var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),index_esm=__webpack_require__("../web-component-library-react/dist/index.esm.js"),design_token_story=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/design-token-story.tsx")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const CustomCheckboxStory=({checked,disabled,indeterminate,invalid,required,value})=>(0,jsx_runtime.jsx)(index_esm.m6p,{checked:checked||null,disabled:disabled||null,indeterminate:indeterminate||null,invalid:invalid||null,required:required||null,value});CustomCheckboxStory.displayName="CustomCheckboxStory";const meta={title:"Web Component/Custom checkbox",id:"web-component-custom-checkbox",component:CustomCheckboxStory,argTypes:{checked:{description:"Checked",control:"boolean"},disabled:{description:"Disabled",control:"boolean"},indeterminate:{description:"Indeterminate",control:"boolean"},invalid:{description:"Invalid",control:"boolean"},required:{description:"Required",control:"boolean"},value:{description:"Internal value represented by the checkbox",control:"text"}},args:{checked:!1,disabled:!1,indeterminate:!1,invalid:!1,required:!1,value:""},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-custom-checkbox",tokens:dist,tokensDefinition:{},docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Custom Checkbox\n"}}}},CustomCheckbox_stories=meta,Default={args:{value:"I agree"}},Checked={args:{checked:!0,value:"I agree"},name:"Checked"},Disabled={args:{disabled:!0,value:"I agree"},name:"Disabled"},CheckedAndDisabled={args:{checked:!0,disabled:!0,value:"I agree"},name:"Checked and disabled"},Intederminate={args:{indeterminate:!0,value:"I agree"},name:"Intederminate"},IntederminateAndDisabled={args:{indeterminate:!0,disabled:!0,value:"I agree"},name:"Intederminate and disabled"},RequiredAndInvalid={args:{invalid:!0,required:!0,value:"I agree"},name:"Required and invalid"},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'I agree'\n  }\n}",...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  args: {\n    checked: true,\n    value: 'I agree'\n  },\n  name: 'Checked'\n}",...Checked.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true,\n    value: 'I agree'\n  },\n  name: 'Disabled'\n}",...Disabled.parameters?.docs?.source}}},CheckedAndDisabled.parameters={...CheckedAndDisabled.parameters,docs:{...CheckedAndDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    checked: true,\n    disabled: true,\n    value: 'I agree'\n  },\n  name: 'Checked and disabled'\n}",...CheckedAndDisabled.parameters?.docs?.source}}},Intederminate.parameters={...Intederminate.parameters,docs:{...Intederminate.parameters?.docs,source:{originalSource:"{\n  args: {\n    indeterminate: true,\n    value: 'I agree'\n  },\n  name: 'Intederminate'\n}",...Intederminate.parameters?.docs?.source}}},IntederminateAndDisabled.parameters={...IntederminateAndDisabled.parameters,docs:{...IntederminateAndDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    indeterminate: true,\n    disabled: true,\n    value: 'I agree'\n  },\n  name: 'Intederminate and disabled'\n}",...IntederminateAndDisabled.parameters?.docs?.source}}},RequiredAndInvalid.parameters={...RequiredAndInvalid.parameters,docs:{...RequiredAndInvalid.parameters?.docs,source:{originalSource:"{\n  args: {\n    invalid: true,\n    required: true,\n    value: 'I agree'\n  },\n  name: 'Required and invalid'\n}",...RequiredAndInvalid.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Checked","Disabled","CheckedAndDisabled","Intederminate","IntederminateAndDisabled","RequiredAndInvalid","DesignTokens"]}}]);