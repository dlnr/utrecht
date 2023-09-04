/*! For license information please see web-component-Textbox-stories.a2110db8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[31632],{"./stories/web-component/Textbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,Disabled:()=>Disabled,Invalid:()=>Invalid,Number:()=>Number,Placeholder:()=>Placeholder,ReadOnly:()=>ReadOnly,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utrecht_components_textbox_README_md_raw__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/textbox/README.md?raw"),_utrecht_components_textbox_tokens_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/textbox/tokens.json"),_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),_components_util__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./stories/components/util.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Textbox=({autoComplete,disabled,invalid,min,max,pattern,placeholder,readOnly,required,type,value})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("utrecht-textbox",{autoComplete:autoComplete||null,disabled:disabled||null,invalid:invalid||null,min:min||null,max:max||null,pattern:pattern||null,placeholder:placeholder||null,readOnly:readOnly||null,required:required||null,value,type:type||null});Textbox.displayName="Textbox";const meta={title:"Web Component/Textbox",id:"web-component-textbox",component:Textbox,argTypes:{autoComplete:{description:"Autocomplete",control:{type:"select"},options:["","additional-name","address-level1","address-level2","address-level3","address-level4","address-line1","address-line2","address-line3","bday","bday-day","bday-month","bday-year","cc-additional-name","cc-csc","cc-exp","cc-exp-month","cc-exp-year","cc-family-name","cc-given-name","cc-name","cc-number","cc-type","country","country-name","current-password","email","family-name","fax","given-name","home","honorific-prefix","honorific-suffix","impp","language","mobile","name","new-password","nickname","one-time-code","organization","organization-title","pager","photo","postal-code","sex","street-address","tel","tel-area-code","tel-country-code","tel-extension","tel-local","tel-local-prefix","tel-local-suffix","tel-national","transaction-amount","transaction-currency","url","username","work"]},disabled:{description:"Disabled",control:"boolean"},invalid:{description:"Invalid",control:"boolean"},min:{description:"Minimum",control:"number"},max:{description:"Maximum",control:"number"},pattern:{description:"Pattern",control:"text"},placeholder:{description:"Placeholder",control:"text"},readOnly:{description:"Read-only",control:"boolean"},required:{description:"Required",control:"boolean"},value:{description:"Value",control:"text"},type:{description:"Type",control:{type:"select"},options:["","email","password","search","tel","text","url"]}},args:{autoComplete:"",disabled:!1,invalid:!1,min:null,max:null,pattern:"",placeholder:"",readOnly:!1,required:!1,type:"",value:""},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-textbox",tokens:_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_2__,tokensDefinition:_utrecht_components_textbox_tokens_json__WEBPACK_IMPORTED_MODULE_1__,docs:{description:{component:_utrecht_components_textbox_README_md_raw__WEBPACK_IMPORTED_MODULE_0__}}}},__WEBPACK_DEFAULT_EXPORT__=meta,Default={args:{value:"The Quick Brown Fox Jumps Over The Lazy Dog"}},Number={args:{min:0,max:100,type:"number",value:"42"},name:"Number"},Invalid={args:{invalid:!0,value:"The Quick Brown Fox Jumps Over The Lazy Dog"},name:"Invalid"},Disabled={args:{disabled:!0,value:"The Quick Brown Fox Jumps Over The Lazy Dog"},name:"Disabled"},ReadOnly={args:{readOnly:!0,value:"The Quick Brown Fox Jumps Over The Lazy Dog"},name:"Read-only"},Placeholder={args:{placeholder:"The Quick Brown Fox Jumps Over The Lazy Dog",value:""},name:"Placeholder"},DesignTokens=(0,_components_util__WEBPACK_IMPORTED_MODULE_4__.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  }\n}",...Default.parameters?.docs?.source}}},Number.parameters={...Number.parameters,docs:{...Number.parameters?.docs,source:{originalSource:"{\n  args: {\n    min: 0,\n    max: 100,\n    type: 'number',\n    value: '42'\n  },\n  name: 'Number'\n}",...Number.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  args: {\n    invalid: true,\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  name: 'Invalid'\n}",...Invalid.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true,\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  name: 'Disabled'\n}",...Disabled.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    readOnly: true,\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  name: 'Read-only'\n}",...ReadOnly.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'The Quick Brown Fox Jumps Over The Lazy Dog',\n    value: ''\n  },\n  name: 'Placeholder'\n}",...Placeholder.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Number","Invalid","Disabled","ReadOnly","Placeholder","DesignTokens"]},"./stories/components/util.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/util.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"stories/components/util.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}},"../../components/textbox/README.md?raw":module=>{module.exports='\x3c!-- @license CC0-1.0 --\x3e\n\n# Text box\n\n## Metadata van veelgebruikte formuliervelden\n\n| Data type                                        | `autocomplete`                                   | `spellcheck` | `translate` | value component | input direction |\n| ------------------------------------------------ | ------------------------------------------------ | ------------ | ----------- | --------------- | --------------- |\n| Naam                                             | `name`                                           | `false`      | `no`        | `bdi`           | `auto`          |\n| Voornaam (1 of meerdere)                         | `given-name`                                     | `false`      | `no`        | `bdi`           | leeg of `auto`  |\n| Voorvoegsel                                      |                                                  | `false`      | `no`        | `bdi`           | `auto`          |\n| Achternaam                                       | `family-name`                                    | `false`      | `no`        | `bdi`           | `auto`          |\n| Adresregel 1                                     | `address-line1`                                  |              | `no`        | -               | -               |\n| Adresregel 2                                     | `address-line2`                                  |              | `no`        | -               | -               |\n| Adresregel 3                                     | `address-line3`                                  |              | `no`        | -               | -               |\n| Postcode                                         | `postal-code`                                    | `false`      | `no`        | -               | -               |\n| Straatnaam                                       |                                                  |              | `no`        | -               | -               |\n| Huisnummer                                       |                                                  |              | `no`        | -               | -               |\n| Huisletter                                       |                                                  |              | `no`        | -               | -               |\n| Huisnummer toevoeging                            |                                                  | `false`      | `no`        | -               | -               |\n| Woonplaats                                       |                                                  |              |             | -               | -               |\n| Burgerservicenummer                              |                                                  | `false`      | `no`        | -               | -               |\n| E-mailadres                                      | `email`                                          | `false`      | `no`        | `URLValue`      | `ltr`           |\n| Website                                          | `url`                                            | `false`      | `no`        | `URLValue`      | `ltr`           |\n| Bestandsnaam                                     |                                                  |              | `no`        | `URLValue`      | -               |\n| Wachtwoord                                       | `password` / `new-password` / `current-password` | `false`      | `no`        | `URLValue`      | -               |\n| Geboortedatum                                    | `bday`                                           |              |             |                 | -               |\n| Telefoonnummer (Europa en internationaal)        | `tel`                                            | `false`      |             |                 | `ltr`           |\n| Mobiel telefoonnummer (Europa en internationaal) | `mobile tel`                                     | `false`      |             |                 | `ltr`           |\n| Telefoonnummer thuis (Europa en internationaal)  | `home tel`                                       | `false`      |             |                 | `ltr`           |\n| Telefoonnummer werk (Europa en internationaal)   | `work tel`                                       | `false`      |             |                 | `ltr`           |\n| Faxnummer (Europa en internationaal)             | `fax tel`                                        | `false`      |             |                 | `ltr`           |\n| Telefoonnummer binnen Nederland                  | `tel-national`                                   | `false`      |             |                 | `ltr`           |\n| Mobiel telefoonnummer binnen Nederland           | `mobile tel-national`                            | `false`      |             |                 | `ltr`           |\n| Telefoonnummer thuis binnen Nederland            | `home tel-national`                              | `false`      |             |                 | `ltr`           |\n| Telefoonnummer werk binnen Nederland             | `work tel-national`                              | `false`      |             |                 | `ltr`           |\n| Faxnummer binnen Nederland                       | `fax tel-national`                               | `false`      |             |                 | `ltr`           |\n| Kenteken                                         |                                                  | `false`      |             |                 | -               |\n\n_Let op:_\n\n- Straatnaam moet niet `autocomplete="street-address"` gebruiken, `street-address` is voor een textarea.\n\n## Terminologie\n\n- **textbox**: [`role="textbox"` in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/#textbox), [Text box lemma op Wikipedia](https://en.wikipedia.org/wiki/Text_box). HTML noemt het "text control" en text edit control". [MDN noemt het](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) "text field" en "text input".\n- **invalid**: ...\n- **disabled**: ...\n- **read-only**: ...\n\n## Class names\n\n- `.utrecht-textbox`\n- `.utrecht-textbox--invalid`\n- `.utrecht-textbox--disabled`\n- `.utrecht-textbox--read-only`\n\n## Design Tokens\n\n- Textbox:\n  - `--utrecht-textbox-border-bottom-width`\n  - `--utrecht-textbox-border-color`\n  - `--utrecht-textbox-border-radius`\n  - `--utrecht-textbox-border-width`\n  - `--utrecht-textbox-color`\n  - `--utrecht-textbox-font-family`\n  - `--utrecht-textbox-font-size`\n  - `--utrecht-textbox-max-inline-size`\n  - `--utrecht-textbox-padding-block-end`\n  - `--utrecht-textbox-padding-block-start`\n  - `--utrecht-textbox-padding-inline-end`\n  - `--utrecht-textbox-padding-inline-start`\n  - Modifier: `disabled`\n    - `--utrecht-textbox-disabled-border-color`\n    - `--utrecht-textbox-disabled-color`\n  - Modifier: `invalid`\n    - `--utrecht-textbox-invalid-border-color`\n    - `--utrecht-textbox-invalid-border-width`\n  - Modifier: `read-only`:\n    - `--utrecht-textbox-read-only-border-color`\n    - `--utrecht-textbox-read-only-color`\n\n## Privacy\n\nGebruik `spellcheck="false"` voor velden die gevoelige informatie kunnen bevatten, zoals wachtwoorden en persoonsgegevens. Sommige _browser extensions_ voor spellingcontrole sturen deze informatie naar externe servers.\n'}}]);