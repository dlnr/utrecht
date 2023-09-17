/*! For license information please see components-MapControlButton-stories.e6e86f9a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[1667],{"../../documentation/components/ComponentTokensSection.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>ComponentTokensSection});var prop_types=__webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),DesignTokensTable=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../documentation/components/DesignTokensTable.jsx"));const isHiddenDesignToken=token=>!!token&&!!token.$extensions&&!0===token.$extensions["nl.nldesignsystem.hidden"];var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ComponentTokensTable=({component,tokens})=>{const componentPath=["utrecht",component.replace(/^(example|denhaag|utrecht)-/,"")],subset=tokens.filter((token=>componentPath.every(((name,index)=>token.path[index]===name)))).filter((token=>!isHiddenDesignToken(token)));return 0===subset.length?(0,jsx_runtime.jsxs)("p",{children:["This component has ",(0,jsx_runtime.jsx)("strong",{children:"no documented design tokens"}),"."]}):(0,jsx_runtime.jsx)(DesignTokensTable.V,{tokens:subset})};ComponentTokensTable.displayName="ComponentTokensTable",ComponentTokensTable.propTypes={component:prop_types_default().string.isRequired,tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])}))};var lodash_isplainobject=__webpack_require__("../../node_modules/.pnpm/lodash.isplainobject@4.0.6/node_modules/lodash.isplainobject/index.js"),lodash_isplainobject_default=__webpack_require__.n(lodash_isplainobject);const CopyButton=({value,textContent="Copy"})=>(0,jsx_runtime.jsx)("button",{className:"utrecht-button utrecht-button--secondary-action utrecht-button--html-button",style:{cursor:"copy"},onClick:()=>navigator.clipboard.writeText(value),type:"button",children:textContent});CopyButton.displayName="CopyButton",CopyButton.propTypes={value:prop_types_default().string.isRequired,textContent:prop_types_default().string};const traverseDeep=(root,parents,current,valueTest,callback)=>{valueTest(current)?callback(parents,current):lodash_isplainobject_default()(current)&&Object.entries(current).forEach((([key,value])=>{traverseDeep(root,[...parents,key],value,valueTest,callback)}))},isDesignTokenDefinition=value=>(value=>Object.prototype.hasOwnProperty.call(value,"value")||Object.prototype.hasOwnProperty.call(value,"$value"))(value)||Object.prototype.hasOwnProperty.call(value,"css")||Object.prototype.hasOwnProperty.call(value,"$extensions"),tokensToCSS=tokens=>{const lines=[];return((tokens,callback)=>{traverseDeep(tokens,[],tokens,isDesignTokenDefinition,callback)})(tokens,((path,value)=>{isHiddenDesignToken(value)||lines.push(`  /* --${path.join("-")}: ${value&&value.$extensions&&value.$extensions["nl.nldesignsystem.css.property"]&&value.$extensions["nl.nldesignsystem.css.property"].syntax?value.$extensions["nl.nldesignsystem.css.property"].syntax:"<value>"}; */`)})),`.your-theme {\n  /* Uncomment each custom property you need */\n${lines.join("\n")}\n}`},ExampleTokensCSS=({definition})=>{const code=tokensToCSS(definition);return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("h2",{children:["Template for ",(0,jsx_runtime.jsx)("samp",{children:"your-theme.css"})]}),(0,jsx_runtime.jsx)("p",{children:"If you do not (yet) want to manage your design tokens in JSON files, but when you just want to get started quickly to reuse our CSS component with your own design, then you can use this CSS template as a starting point to see what parts of the component you can customize with design tokens."}),(0,jsx_runtime.jsxs)("p",{children:["Combine the design tokens CSS with our"," ",(0,jsx_runtime.jsx)("a",{href:"https://npmjs.com/package/@utrecht/component-library-css",children:"CSS component library pacakge on npm"}),", and you should be able to quickly and easily create a web page with our components and your own design."]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CopyButton,{value:code,textContent:"Copy CSS"})}),(0,jsx_runtime.jsx)("pre",{children:code})]})};ExampleTokensCSS.displayName="ExampleTokensCSS",ExampleTokensCSS.propTypes={definition:prop_types_default().object.isRequired};var lodash_clonedeepwith=__webpack_require__("../../node_modules/.pnpm/lodash.clonedeepwith@4.5.0/node_modules/lodash.clonedeepwith/index.js"),lodash_clonedeepwith_default=__webpack_require__.n(lodash_clonedeepwith),lodash_mapvalues=__webpack_require__("../../node_modules/.pnpm/lodash.mapvalues@4.6.0/node_modules/lodash.mapvalues/index.js"),lodash_mapvalues_default=__webpack_require__.n(lodash_mapvalues),lodash_omitby=__webpack_require__("../../node_modules/.pnpm/lodash.omitby@4.6.0/node_modules/lodash.omitby/index.js"),lodash_omitby_default=__webpack_require__.n(lodash_omitby);const ExampleTokensJSON=({definition})=>{const filter=item=>lodash_isplainobject_default()(item.$extensions)||lodash_isplainobject_default()(item.$value)?{}:lodash_isplainobject_default()(item)?lodash_mapvalues_default()(lodash_omitby_default()(item,(item=>isHiddenDesignToken(item))),(item=>lodash_clonedeepwith_default()(item,filter))):void 0,tokens=lodash_clonedeepwith_default()(definition,filter),code=JSON.stringify(tokens,null,"  ");return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("h2",{children:["Template ",(0,jsx_runtime.jsx)("samp",{children:"tokens.json"})," for your theme"]}),(0,jsx_runtime.jsxs)("p",{children:["We use the ",(0,jsx_runtime.jsx)("a",{href:"https://design-tokens.github.io/community-group/format/",children:"Design Tokens Format"})," to store our design choices in JSON files. These ",(0,jsx_runtime.jsx)("code",{children:"tokens.json"})," files are translated into other formats such as CSS and SCSS variables, so the design choices can be imported automatically into projects with varying technical stacks."]}),(0,jsx_runtime.jsx)("p",{children:"When we develop front-end components in CSS, we avoid putting design decisions in our CSS code directly. Instead we use CSS variables that reference the design tokens. This way we don't need to change the CSS components when over time we make different design decisions, we just include the latest export of the design tokens."}),(0,jsx_runtime.jsx)("p",{children:"Because our CSS components are coded in such a way that design decisions —such as fonts, colors and sizes— are stored in an optional file that you don't have to use, you can reuse our CSS components and combine them with design decisions for your own project and brand."}),(0,jsx_runtime.jsxs)("p",{children:["Copy the JSON template below if you want to reuse this component, and replace the empty placeholder object with your own code:",(0,jsx_runtime.jsx)("code",{children:'{ "value": "#123456", "comment": "my design choice" }'}),"."]}),(0,jsx_runtime.jsxs)("p",{children:["When you have a collection of design token JSON files, you can use"," ",(0,jsx_runtime.jsx)("a",{href:"https://amzn.github.io/style-dictionary/#/",children:"Style Dictionary"})," to translate them to CSS or any other format your developers need."]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CopyButton,{value:code,textContent:"Copy JSON"})}),(0,jsx_runtime.jsx)("pre",{children:code})]})};ExampleTokensJSON.displayName="ExampleTokensJSON",ExampleTokensJSON.propTypes={definition:prop_types_default().object.isRequired};const ComponentTokensSection=({component,tokens,definition})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[definition?(0,jsx_runtime.jsx)(ExampleTokensJSON,{definition}):"",definition?(0,jsx_runtime.jsx)(ExampleTokensCSS,{definition}):"",(0,jsx_runtime.jsx)(ComponentTokensTable,{component,tokens})]});ComponentTokensSection.propTypes={component:prop_types_default().string.isRequired,definition:prop_types_default().object,tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])})).isRequired}},"./stories/components/MapControlButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,Disabled:()=>Disabled,Focus:()=>Focus,FocusVisible:()=>FocusVisible,Hover:()=>Hover,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MapControlButton_stories});const tokens_namespaceObject=JSON.parse('{"utrecht":{"mapcontrolbutton":{"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"focus-transform-scale":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}}},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"min-block-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"min-inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"disabled":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"hover-background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"primary-action":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"hover-background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),icon_dist=__webpack_require__("../../components/icon/dist/index.json"),clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),jsx_runtime=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const MapControlButtonIcon=({children})=>(0,jsx_runtime.jsx)("span",{className:"utrecht-mapcontrolbutton__icon",children});MapControlButtonIcon.displayName="MapControlButtonIcon";const MapControlButtonLabel=({children})=>(0,jsx_runtime.jsx)("span",{className:"utrecht-mapcontrolbutton__label",children});MapControlButtonLabel.displayName="MapControlButtonLabel";const MapControlButton=({className,disabled,label,icon,...restProps})=>(0,jsx_runtime.jsxs)("button",{type:"button",className:(0,clsx_m.Z)("utrecht-mapcontrolbutton",{"utrecht-mapcontrolbutton--disabled":disabled},className),"aria-disabled":disabled||null,...restProps,children:[icon&&(0,jsx_runtime.jsx)(MapControlButtonIcon,{children:icon}),label&&(0,jsx_runtime.jsx)(MapControlButtonLabel,{children:label})]});MapControlButton.displayName="MapControlButton";try{MapControlButtonIcon.displayName="MapControlButtonIcon",MapControlButtonIcon.__docgenInfo={description:"",displayName:"MapControlButtonIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/MapControlButton.tsx#MapControlButtonIcon"]={docgenInfo:MapControlButtonIcon.__docgenInfo,name:"MapControlButtonIcon",path:"stories/components/MapControlButton.tsx#MapControlButtonIcon"})}catch(__react_docgen_typescript_loader_error){}try{MapControlButtonLabel.displayName="MapControlButtonLabel",MapControlButtonLabel.__docgenInfo={description:"",displayName:"MapControlButtonLabel",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/MapControlButton.tsx#MapControlButtonLabel"]={docgenInfo:MapControlButtonLabel.__docgenInfo,name:"MapControlButtonLabel",path:"stories/components/MapControlButton.tsx#MapControlButtonLabel"})}catch(__react_docgen_typescript_loader_error){}try{MapControlButton.displayName="MapControlButton",MapControlButton.__docgenInfo={description:"",displayName:"MapControlButton",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/MapControlButton.tsx#MapControlButton"]={docgenInfo:MapControlButton.__docgenInfo,name:"MapControlButton",path:"stories/components/MapControlButton.tsx#MapControlButton"})}catch(__react_docgen_typescript_loader_error){}var util=__webpack_require__("./stories/components/util.tsx");const MapControlButtonStory=({hover,focus,focusVisible,icon,label,labelVisible,...restProps})=>{const IconElement=icon;return(0,jsx_runtime.jsx)(MapControlButton,{...restProps,className:(0,clsx_m.Z)({"utrecht-mapcontrolbutton--hover":hover,"utrecht-mapcontrolbutton--focus":focus,"utrecht-mapcontrolbutton--focus-visible":focusVisible}),icon:(0,jsx_runtime.jsx)(IconElement,{}),label:labelVisible?label:null,"aria-label":labelVisible?null:label})};MapControlButtonStory.displayName="MapControlButtonStory";const meta={title:"CSS Component/Map control button",id:"css-map-control-button",component:MapControlButtonStory,argTypes:{focus:{description:"Focus",control:"boolean"},focusVisible:{description:"Focus visible",control:"boolean"},hover:{description:"Hover",control:"boolean"},disabled:{description:"Disabled",control:"boolean"},icon:{description:"Icon",control:{type:"select"},options:["",...icon_dist.map((({id})=>id))]},label:{description:"Label",control:"text"},labelVisible:{description:"Label is visible",control:"boolean"}},args:{disabled:!1,focus:!1,focusVisible:!1,hover:!1,icon:"",label:"",labelVisible:!1},parameters:{tokensPrefix:"utrecht-mapcontrolbutton",status:{type:"WORK IN PROGRESS"},tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Button\n\n## Tekstbutton\n\nTekstlinks zijn standaard donkerblauw (#2A5587) en onderstreept. In sommige gevallen zijn tekstlinks zwart of wit. Dit geldt bij teksten op een gekleurde achtergrond, waar blauw niet voldoende contrast biedt. Kijk voor meer informatie over de contrastrichtlijnen bij kleuren (link naar kleuren).\n\n### Voorbeeld\n\nU kunt tegelijk een paspoort en een ID-kaart hebben. Met een paspoort kunt u naar alle landen reizen. Een ID-kaart is goedkoper, maar u kunt hiermee niet naar alle landen reizen.\n\n## Button met pijl\n\nLinks met een pijl als voorloopteken worden gebruikt aan het einde van een tekst. Ze verwijzen naar gerelateerde informatie over het onderwerp wat er in de voorafgaande tekst is besproken. De links zijn donkerblauw (#2A5587), bold en hebben een pijl (>) als voorloopteken. Dit type link wordt ook gebruikt in de linklijst en de subnavigatie.\n\n## Terminologie\n\n- **button**: van het `<button>` HTML element, `role="button"` in ARIA.\n\n## States\n\n- `hover`\n- `focus`\n- `disabled`\n\n## Class names\n\n- `.utrecht-button`\n- `.utrecht-button--focus`\n- `.utrecht-button--hover`\n- `.utrecht-button--disabled`\n\n## Design tokens\n\n- Button\n  - `--utrecht-button-border-radius`\n  - `--utrecht-button-border-width`\n  - `--utrecht-button-hover-scale`\n  - `--utrecht-button-font-size`\n  - `--utrecht-button-margin-block-start`\n  - `--utrecht-button-margin-block-end`\n  - `--utrecht-button-margin-inline-start`\n  - `--utrecht-button-margin-inline-end`\n  - `--utrecht-button-padding-block-start`\n  - `--utrecht-button-padding-block-end`\n  - `--utrecht-button-padding-inline-start`\n  - `--utrecht-button-padding-inline-end`\n  - Modifier: primary action\n    - `--utrecht-button-primary-action-background-color`\n    - `--utrecht-button-primary-action-color`\n    - `--utrecht-button-primary-action-hover-background-color`\n  - Modifier: disabled\n    - `--utrecht-button-disabled-background-color`\n    - `--utrecht-button-disabled-color`\n'}}}},MapControlButton_stories=meta,Default={args:{icon:"utrecht-icon-zoomin",label:"Zoom in"},parameters:{docs:{description:{story:"Styling via `utrecht-mapcontrolbutton` class name."}}}},WithLabel={args:{icon:"utrecht-icon-filter",label:"Filter",labelVisible:!0},name:"With label"},Hover={args:{...Default.args,hover:!0},name:"Hover",parameters:{docs:{description:{story:"Styling is simulated via `utrecht-mapcontrolbutton--hover` class name."},source:{state:"closed"}}}},Focus={args:{...Default.args,focus:!0},name:"Focus",parameters:{docs:{description:{story:"Styling is simulated via `utrecht-mapcontrolbutton--focus` class name."}},source:{state:"closed"}}},FocusVisible={args:{...Default.args,focus:!0,focusVisible:!0},name:"Focus visible",parameters:{docs:{description:{story:"Styling is simulated via `utrecht-mapcontrolbutton--focus` and `utrecht-mapcontrolbutton--focus-visible` class names."},source:{state:"closed"}}}},Disabled={args:{...Default.args,disabled:!0},name:"Disabled",parameters:{docs:{description:{story:"Styling is simulated via `utrecht-mapcontrolbutton--disabled` class name."},source:{state:"closed"}}}},DesignTokens=(0,util.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: 'utrecht-icon-zoomin',\n    label: 'Zoom in'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling via `utrecht-mapcontrolbutton` class name.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: 'utrecht-icon-filter',\n    label: 'Filter',\n    labelVisible: true\n  },\n  name: 'With label'\n}",...WithLabel.parameters?.docs?.source}}},Hover.parameters={...Hover.parameters,docs:{...Hover.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    hover: true\n  },\n  name: 'Hover',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling is simulated via `utrecht-mapcontrolbutton--hover` class name.'\n      },\n      source: {\n        state: 'closed'\n      }\n    }\n  }\n}",...Hover.parameters?.docs?.source}}},Focus.parameters={...Focus.parameters,docs:{...Focus.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    focus: true\n  },\n  name: 'Focus',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling is simulated via `utrecht-mapcontrolbutton--focus` class name.'\n      }\n    },\n    source: {\n      state: 'closed'\n    }\n  }\n}",...Focus.parameters?.docs?.source}}},FocusVisible.parameters={...FocusVisible.parameters,docs:{...FocusVisible.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    focus: true,\n    focusVisible: true\n  },\n  name: 'Focus visible',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling is simulated via `utrecht-mapcontrolbutton--focus` and `utrecht-mapcontrolbutton--focus-visible` class names.'\n      },\n      source: {\n        state: 'closed'\n      }\n    }\n  }\n}",...FocusVisible.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    disabled: true\n  },\n  name: 'Disabled',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling is simulated via `utrecht-mapcontrolbutton--disabled` class name.'\n      },\n      source: {\n        state: 'closed'\n      }\n    }\n  }\n}",...Disabled.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithLabel","Hover","Focus","FocusVisible","Disabled","DesignTokens"]},"./stories/components/util.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/util.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"stories/components/util.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}},"../../components/icon/dist/index.json":module=>{module.exports=JSON.parse('[{"id":"utrecht-icon-afspraak-maken","src":"afspraak-maken.svg"},{"id":"utrecht-icon-afval-container","src":"afval-container.svg"},{"id":"utrecht-icon-afval-containerpas","src":"afval-containerpas.svg"},{"id":"utrecht-icon-afval-kalender","src":"afval-kalender.svg"},{"id":"utrecht-icon-afval-pmd","src":"afval-pmd.svg"},{"id":"utrecht-icon-afval-scheiden","src":"afval-scheiden.svg"},{"id":"utrecht-icon-afval","src":"afval.svg"},{"id":"utrecht-icon-afvalkalender","src":"afvalkalender.svg"},{"id":"utrecht-icon-alleen","src":"alleen.svg"},{"id":"utrecht-icon-arrow","src":"arrow.svg"},{"id":"utrecht-icon-auto","src":"auto.svg"},{"id":"utrecht-icon-begroting","src":"begroting.svg"},{"id":"utrecht-icon-bestemmingsplan","src":"bestemmingsplan.svg"},{"id":"utrecht-icon-betaaldatum","src":"betaaldatum.svg"},{"id":"utrecht-icon-bewijsstukken","src":"bewijsstukken.svg"},{"id":"utrecht-icon-bijstand","src":"bijstand.svg"},{"id":"utrecht-icon-blad","src":"blad.svg"},{"id":"utrecht-icon-bouwproject","src":"bouwproject.svg"},{"id":"utrecht-icon-brandgevaar","src":"brandgevaar.svg"},{"id":"utrecht-icon-brief-betalen","src":"brief-betalen.svg"},{"id":"utrecht-icon-checkmark","src":"checkmark.svg"},{"id":"utrecht-icon-chevron-down","src":"chevron-down.svg"},{"id":"utrecht-icon-chevron-left","src":"chevron-left.svg"},{"id":"utrecht-icon-chevron-right","src":"chevron-right.svg"},{"id":"utrecht-icon-chevron-up","src":"chevron-up.svg"},{"id":"utrecht-icon-close","src":"close.svg"},{"id":"utrecht-icon-college-b-w","src":"college-b-w.svg"},{"id":"utrecht-icon-container-bio","src":"container-bio.svg"},{"id":"utrecht-icon-container-glas","src":"container-glas.svg"},{"id":"utrecht-icon-container-groenafval","src":"container-groenafval.svg"},{"id":"utrecht-icon-container-met-zak","src":"container-met-zak.svg"},{"id":"utrecht-icon-container-papier","src":"container-papier.svg"},{"id":"utrecht-icon-container-pmd","src":"container-pmd.svg"},{"id":"utrecht-icon-container-restafval","src":"container-restafval.svg"},{"id":"utrecht-icon-container-textiel","src":"container-textiel.svg"},{"id":"utrecht-icon-cross","src":"cross.svg"},{"id":"utrecht-icon-dakloos","src":"dakloos.svg"},{"id":"utrecht-icon-dementie","src":"dementie.svg"},{"id":"utrecht-icon-documenten","src":"documenten.svg"},{"id":"utrecht-icon-duurzaam","src":"duurzaam.svg"},{"id":"utrecht-icon-eenzaamheid","src":"eenzaamheid.svg"},{"id":"utrecht-icon-eikenprocessie","src":"eikenprocessie.svg"},{"id":"utrecht-icon-elektrisch-rijden","src":"elektrisch-rijden.svg"},{"id":"utrecht-icon-energie-vergoeding","src":"energie-vergoeding.svg"},{"id":"utrecht-icon-energietransitie","src":"energietransitie.svg"},{"id":"utrecht-icon-error","src":"error.svg"},{"id":"utrecht-icon-evenementen","src":"evenementen.svg"},{"id":"utrecht-icon-facebook","src":"facebook.svg"},{"id":"utrecht-icon-fiets","src":"fiets.svg"},{"id":"utrecht-icon-filter","src":"filter.svg"},{"id":"utrecht-icon-geboorte","src":"geboorte.svg"},{"id":"utrecht-icon-gebruiker-centraal","src":"gebruiker-centraal.svg"},{"id":"utrecht-icon-gebruiker-ingelogd","src":"gebruiker-ingelogd.svg"},{"id":"utrecht-icon-gegevenswoordenboek","src":"gegevenswoordenboek.svg"},{"id":"utrecht-icon-geluid","src":"geluid.svg"},{"id":"utrecht-icon-gemeente-locatie","src":"gemeente-locatie.svg"},{"id":"utrecht-icon-gemeenteraad","src":"gemeenteraad.svg"},{"id":"utrecht-icon-gereedschap","src":"gereedschap.svg"},{"id":"utrecht-icon-gezicht","src":"gezicht.svg"},{"id":"utrecht-icon-gezin","src":"gezin.svg"},{"id":"utrecht-icon-glas-afval","src":"glas-afval.svg"},{"id":"utrecht-icon-glijbaan","src":"glijbaan.svg"},{"id":"utrecht-icon-grafiek","src":"grafiek.svg"},{"id":"utrecht-icon-grofvuil-ophalen","src":"grofvuil-ophalen.svg"},{"id":"utrecht-icon-grofvuil","src":"grofvuil.svg"},{"id":"utrecht-icon-hamburger-menu","src":"hamburger-menu.svg"},{"id":"utrecht-icon-herdenking","src":"herdenking.svg"},{"id":"utrecht-icon-hondenbelasting","src":"hondenbelasting.svg"},{"id":"utrecht-icon-horeca","src":"horeca.svg"},{"id":"utrecht-icon-horecavergunning","src":"horecavergunning.svg"},{"id":"utrecht-icon-huis-en-omgeving","src":"huis-en-omgeving.svg"},{"id":"utrecht-icon-huis","src":"huis.svg"},{"id":"utrecht-icon-huishoudelijk-geweld","src":"huishoudelijk-geweld.svg"},{"id":"utrecht-icon-hulp-huishouden","src":"hulp-huishouden.svg"},{"id":"utrecht-icon-hulp-vervoer","src":"hulp-vervoer.svg"},{"id":"utrecht-icon-hulp-zorg","src":"hulp-zorg.svg"},{"id":"utrecht-icon-hulpmiddelen-gezin","src":"hulpmiddelen-gezin.svg"},{"id":"utrecht-icon-hulpverlening","src":"hulpverlening.svg"},{"id":"utrecht-icon-idee","src":"idee.svg"},{"id":"utrecht-icon-informatie","src":"informatie.svg"},{"id":"utrecht-icon-information","src":"information.svg"},{"id":"utrecht-icon-innovatie","src":"innovatie.svg"},{"id":"utrecht-icon-inspraak-inwoners","src":"inspraak-inwoners.svg"},{"id":"utrecht-icon-instagram","src":"instagram.svg"},{"id":"utrecht-icon-kalender","src":"kalender.svg"},{"id":"utrecht-icon-kennis","src":"kennis.svg"},{"id":"utrecht-icon-kerstbomen","src":"kerstbomen.svg"},{"id":"utrecht-icon-klachten","src":"klachten.svg"},{"id":"utrecht-icon-kroon","src":"kroon.svg"},{"id":"utrecht-icon-laadpaal","src":"laadpaal.svg"},{"id":"utrecht-icon-language","src":"language.svg"},{"id":"utrecht-icon-lantaarnpaal-oud","src":"lantaarnpaal-oud.svg"},{"id":"utrecht-icon-lantaarnpaal","src":"lantaarnpaal.svg"},{"id":"utrecht-icon-leren","src":"leren.svg"},{"id":"utrecht-icon-let-op","src":"let-op.svg"},{"id":"utrecht-icon-linkedin","src":"linkedin.svg"},{"id":"utrecht-icon-list-check","src":"list-check.svg"},{"id":"utrecht-icon-list-number","src":"list-number.svg"},{"id":"utrecht-icon-list","src":"list.svg"},{"id":"utrecht-icon-loupe","src":"loupe.svg"},{"id":"utrecht-icon-markt","src":"markt.svg"},{"id":"utrecht-icon-melding-boom","src":"melding-boom.svg"},{"id":"utrecht-icon-melding-klacht","src":"melding-klacht.svg"},{"id":"utrecht-icon-melding-openbareruimte","src":"melding-openbareruimte.svg"},{"id":"utrecht-icon-melding-verlichting","src":"melding-verlichting.svg"},{"id":"utrecht-icon-melding","src":"melding.svg"},{"id":"utrecht-icon-menselijk","src":"menselijk.svg"},{"id":"utrecht-icon-menu-dot-open","src":"menu-dot-open.svg"},{"id":"utrecht-icon-menu-dot","src":"menu-dot.svg"},{"id":"utrecht-icon-meterkast","src":"meterkast.svg"},{"id":"utrecht-icon-milieu-ontheffing","src":"milieu-ontheffing.svg"},{"id":"utrecht-icon-milieu-zone","src":"milieu-zone.svg"},{"id":"utrecht-icon-minus-vertical","src":"minus-vertical.svg"},{"id":"utrecht-icon-minus","src":"minus.svg"},{"id":"utrecht-icon-mobiliteit","src":"mobiliteit.svg"},{"id":"utrecht-icon-natuur","src":"natuur.svg"},{"id":"utrecht-icon-nieuw-huis","src":"nieuw-huis.svg"},{"id":"utrecht-icon-nummerbord","src":"nummerbord.svg"},{"id":"utrecht-icon-om-het-huis","src":"om-het-huis.svg"},{"id":"utrecht-icon-omgeving","src":"omgeving.svg"},{"id":"utrecht-icon-omgevingsvisie","src":"omgevingsvisie.svg"},{"id":"utrecht-icon-omgevingswet","src":"omgevingswet.svg"},{"id":"utrecht-icon-onderhoud","src":"onderhoud.svg"},{"id":"utrecht-icon-ondernemen","src":"ondernemen.svg"},{"id":"utrecht-icon-openingstijden","src":"openingstijden.svg"},{"id":"utrecht-icon-over-de-stad","src":"over-de-stad.svg"},{"id":"utrecht-icon-overlijden","src":"overlijden.svg"},{"id":"utrecht-icon-panden","src":"panden.svg"},{"id":"utrecht-icon-park","src":"park.svg"},{"id":"utrecht-icon-parkeerkaart","src":"parkeerkaart.svg"},{"id":"utrecht-icon-parkeervergunning","src":"parkeervergunning.svg"},{"id":"utrecht-icon-parken","src":"parken.svg"},{"id":"utrecht-icon-parkeren-bedrijven","src":"parkeren-bedrijven.svg"},{"id":"utrecht-icon-parkeren-betaalautomaat","src":"parkeren-betaalautomaat.svg"},{"id":"utrecht-icon-parkeren-betalen","src":"parkeren-betalen.svg"},{"id":"utrecht-icon-parkeren","src":"parkeren.svg"},{"id":"utrecht-icon-participatie-campagne","src":"participatie-campagne.svg"},{"id":"utrecht-icon-participatie-like","src":"participatie-like.svg"},{"id":"utrecht-icon-participatie-pitch","src":"participatie-pitch.svg"},{"id":"utrecht-icon-paspoort","src":"paspoort.svg"},{"id":"utrecht-icon-presentatie","src":"presentatie.svg"},{"id":"utrecht-icon-prijskaartje","src":"prijskaartje.svg"},{"id":"utrecht-icon-read-aloud","src":"read-aloud.svg"},{"id":"utrecht-icon-rijbewijs","src":"rijbewijs.svg"},{"id":"utrecht-icon-rioolheffing","src":"rioolheffing.svg"},{"id":"utrecht-icon-rolstoel","src":"rolstoel.svg"},{"id":"utrecht-icon-schild-gemeente-utrecht","src":"schild-gemeente-utrecht.svg"},{"id":"utrecht-icon-search","src":"search.svg"},{"id":"utrecht-icon-shoppen","src":"shoppen.svg"},{"id":"utrecht-icon-sinterklaas","src":"sinterklaas.svg"},{"id":"utrecht-icon-slechtziende-hoordende","src":"slechtziende-hoordende.svg"},{"id":"utrecht-icon-sport-en-cultuur","src":"sport-en-cultuur.svg"},{"id":"utrecht-icon-sport-voetbal","src":"sport-voetbal.svg"},{"id":"utrecht-icon-sport","src":"sport.svg"},{"id":"utrecht-icon-stookverbod","src":"stookverbod.svg"},{"id":"utrecht-icon-strand","src":"strand.svg"},{"id":"utrecht-icon-strooien","src":"strooien.svg"},{"id":"utrecht-icon-subsidie-gezin","src":"subsidie-gezin.svg"},{"id":"utrecht-icon-subsidie","src":"subsidie.svg"},{"id":"utrecht-icon-t-shirt","src":"t-shirt.svg"},{"id":"utrecht-icon-thuiswerken","src":"thuiswerken.svg"},{"id":"utrecht-icon-toeslag","src":"toeslag.svg"},{"id":"utrecht-icon-trein","src":"trein.svg"},{"id":"utrecht-icon-trouwen","src":"trouwen.svg"},{"id":"utrecht-icon-twitter","src":"twitter.svg"},{"id":"utrecht-icon-user","src":"user.svg"},{"id":"utrecht-icon-uw-wijk","src":"uw-wijk.svg"},{"id":"utrecht-icon-vaccinatie","src":"vaccinatie.svg"},{"id":"utrecht-icon-veilige-wijk","src":"veilige-wijk.svg"},{"id":"utrecht-icon-vergaderen","src":"vergaderen.svg"},{"id":"utrecht-icon-vergaderendigitaal","src":"vergaderendigitaal.svg"},{"id":"utrecht-icon-vergoeding","src":"vergoeding.svg"},{"id":"utrecht-icon-verhuizen","src":"verhuizen.svg"},{"id":"utrecht-icon-verkeerslicht","src":"verkeerslicht.svg"},{"id":"utrecht-icon-verkiezingen","src":"verkiezingen.svg"},{"id":"utrecht-icon-verslaving","src":"verslaving.svg"},{"id":"utrecht-icon-vervoersvoorziening","src":"vervoersvoorziening.svg"},{"id":"utrecht-icon-virus","src":"virus.svg"},{"id":"utrecht-icon-vluchtelingen","src":"vluchtelingen.svg"},{"id":"utrecht-icon-voorzieningen-vervoer","src":"voorzieningen-vervoer.svg"},{"id":"utrecht-icon-vrijwilligerswerk","src":"vrijwilligerswerk.svg"},{"id":"utrecht-icon-vuilnisbak","src":"vuilnisbak.svg"},{"id":"utrecht-icon-vuilniszak","src":"vuilniszak.svg"},{"id":"utrecht-icon-vuurwerk","src":"vuurwerk.svg"},{"id":"utrecht-icon-wandelstok","src":"wandelstok.svg"},{"id":"utrecht-icon-warm","src":"warm.svg"},{"id":"utrecht-icon-warning","src":"warning.svg"},{"id":"utrecht-icon-werken","src":"werken.svg"},{"id":"utrecht-icon-werkzaamheden","src":"werkzaamheden.svg"},{"id":"utrecht-icon-whatsapp","src":"whatsapp.svg"},{"id":"utrecht-icon-wonen-kosten","src":"wonen-kosten.svg"},{"id":"utrecht-icon-woning-zoeken","src":"woning-zoeken.svg"},{"id":"utrecht-icon-x","src":"x.svg"},{"id":"utrecht-icon-youtube","src":"youtube.svg"},{"id":"utrecht-icon-zelfstandig-wonen","src":"zelfstandig-wonen.svg"},{"id":"utrecht-icon-zoom-minus","src":"zoom-minus.svg"},{"id":"utrecht-icon-zoom-plus","src":"zoom-plus.svg"},{"id":"utrecht-icon-zoomin","src":"zoomin.svg"},{"id":"utrecht-icon-zoomout","src":"zoomout.svg"},{"id":"utrecht-icon-zorg-huis","src":"zorg-huis.svg"},{"id":"utrecht-icon-zweefpaal","src":"zweefpaal.svg"},{"id":"utrecht-icon-zwemmen","src":"zwemmen.svg"}]')}}]);