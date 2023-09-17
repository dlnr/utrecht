/*! For license information please see components-DataBadge-stories.5d2b6f02.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[7213],{"../../node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../documentation/components/ComponentTokensSection.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>ComponentTokensSection});var prop_types=__webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),DesignTokensTable=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../documentation/components/DesignTokensTable.jsx"));const isHiddenDesignToken=token=>!!token&&!!token.$extensions&&!0===token.$extensions["nl.nldesignsystem.hidden"];var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ComponentTokensTable=({component,tokens})=>{const componentPath=["utrecht",component.replace(/^(example|denhaag|utrecht)-/,"")],subset=tokens.filter((token=>componentPath.every(((name,index)=>token.path[index]===name)))).filter((token=>!isHiddenDesignToken(token)));return 0===subset.length?(0,jsx_runtime.jsxs)("p",{children:["This component has ",(0,jsx_runtime.jsx)("strong",{children:"no documented design tokens"}),"."]}):(0,jsx_runtime.jsx)(DesignTokensTable.V,{tokens:subset})};ComponentTokensTable.displayName="ComponentTokensTable",ComponentTokensTable.propTypes={component:prop_types_default().string.isRequired,tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])}))};var lodash_isplainobject=__webpack_require__("../../node_modules/.pnpm/lodash.isplainobject@4.0.6/node_modules/lodash.isplainobject/index.js"),lodash_isplainobject_default=__webpack_require__.n(lodash_isplainobject);const CopyButton=({value,textContent="Copy"})=>(0,jsx_runtime.jsx)("button",{className:"utrecht-button utrecht-button--secondary-action utrecht-button--html-button",style:{cursor:"copy"},onClick:()=>navigator.clipboard.writeText(value),type:"button",children:textContent});CopyButton.displayName="CopyButton",CopyButton.propTypes={value:prop_types_default().string.isRequired,textContent:prop_types_default().string};const traverseDeep=(root,parents,current,valueTest,callback)=>{valueTest(current)?callback(parents,current):lodash_isplainobject_default()(current)&&Object.entries(current).forEach((([key,value])=>{traverseDeep(root,[...parents,key],value,valueTest,callback)}))},isDesignTokenDefinition=value=>(value=>Object.prototype.hasOwnProperty.call(value,"value")||Object.prototype.hasOwnProperty.call(value,"$value"))(value)||Object.prototype.hasOwnProperty.call(value,"css")||Object.prototype.hasOwnProperty.call(value,"$extensions"),tokensToCSS=tokens=>{const lines=[];return((tokens,callback)=>{traverseDeep(tokens,[],tokens,isDesignTokenDefinition,callback)})(tokens,((path,value)=>{isHiddenDesignToken(value)||lines.push(`  /* --${path.join("-")}: ${value&&value.$extensions&&value.$extensions["nl.nldesignsystem.css.property"]&&value.$extensions["nl.nldesignsystem.css.property"].syntax?value.$extensions["nl.nldesignsystem.css.property"].syntax:"<value>"}; */`)})),`.your-theme {\n  /* Uncomment each custom property you need */\n${lines.join("\n")}\n}`},ExampleTokensCSS=({definition})=>{const code=tokensToCSS(definition);return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("h2",{children:["Template for ",(0,jsx_runtime.jsx)("samp",{children:"your-theme.css"})]}),(0,jsx_runtime.jsx)("p",{children:"If you do not (yet) want to manage your design tokens in JSON files, but when you just want to get started quickly to reuse our CSS component with your own design, then you can use this CSS template as a starting point to see what parts of the component you can customize with design tokens."}),(0,jsx_runtime.jsxs)("p",{children:["Combine the design tokens CSS with our"," ",(0,jsx_runtime.jsx)("a",{href:"https://npmjs.com/package/@utrecht/component-library-css",children:"CSS component library pacakge on npm"}),", and you should be able to quickly and easily create a web page with our components and your own design."]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CopyButton,{value:code,textContent:"Copy CSS"})}),(0,jsx_runtime.jsx)("pre",{children:code})]})};ExampleTokensCSS.displayName="ExampleTokensCSS",ExampleTokensCSS.propTypes={definition:prop_types_default().object.isRequired};var lodash_clonedeepwith=__webpack_require__("../../node_modules/.pnpm/lodash.clonedeepwith@4.5.0/node_modules/lodash.clonedeepwith/index.js"),lodash_clonedeepwith_default=__webpack_require__.n(lodash_clonedeepwith),lodash_mapvalues=__webpack_require__("../../node_modules/.pnpm/lodash.mapvalues@4.6.0/node_modules/lodash.mapvalues/index.js"),lodash_mapvalues_default=__webpack_require__.n(lodash_mapvalues),lodash_omitby=__webpack_require__("../../node_modules/.pnpm/lodash.omitby@4.6.0/node_modules/lodash.omitby/index.js"),lodash_omitby_default=__webpack_require__.n(lodash_omitby);const ExampleTokensJSON=({definition})=>{const filter=item=>lodash_isplainobject_default()(item.$extensions)||lodash_isplainobject_default()(item.$value)?{}:lodash_isplainobject_default()(item)?lodash_mapvalues_default()(lodash_omitby_default()(item,(item=>isHiddenDesignToken(item))),(item=>lodash_clonedeepwith_default()(item,filter))):void 0,tokens=lodash_clonedeepwith_default()(definition,filter),code=JSON.stringify(tokens,null,"  ");return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("h2",{children:["Template ",(0,jsx_runtime.jsx)("samp",{children:"tokens.json"})," for your theme"]}),(0,jsx_runtime.jsxs)("p",{children:["We use the ",(0,jsx_runtime.jsx)("a",{href:"https://design-tokens.github.io/community-group/format/",children:"Design Tokens Format"})," to store our design choices in JSON files. These ",(0,jsx_runtime.jsx)("code",{children:"tokens.json"})," files are translated into other formats such as CSS and SCSS variables, so the design choices can be imported automatically into projects with varying technical stacks."]}),(0,jsx_runtime.jsx)("p",{children:"When we develop front-end components in CSS, we avoid putting design decisions in our CSS code directly. Instead we use CSS variables that reference the design tokens. This way we don't need to change the CSS components when over time we make different design decisions, we just include the latest export of the design tokens."}),(0,jsx_runtime.jsx)("p",{children:"Because our CSS components are coded in such a way that design decisions —such as fonts, colors and sizes— are stored in an optional file that you don't have to use, you can reuse our CSS components and combine them with design decisions for your own project and brand."}),(0,jsx_runtime.jsxs)("p",{children:["Copy the JSON template below if you want to reuse this component, and replace the empty placeholder object with your own code:",(0,jsx_runtime.jsx)("code",{children:'{ "value": "#123456", "comment": "my design choice" }'}),"."]}),(0,jsx_runtime.jsxs)("p",{children:["When you have a collection of design token JSON files, you can use"," ",(0,jsx_runtime.jsx)("a",{href:"https://amzn.github.io/style-dictionary/#/",children:"Style Dictionary"})," to translate them to CSS or any other format your developers need."]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CopyButton,{value:code,textContent:"Copy JSON"})}),(0,jsx_runtime.jsx)("pre",{children:code})]})};ExampleTokensJSON.displayName="ExampleTokensJSON",ExampleTokensJSON.propTypes={definition:prop_types_default().object.isRequired};const ComponentTokensSection=({component,tokens,definition})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[definition?(0,jsx_runtime.jsx)(ExampleTokensJSON,{definition}):"",definition?(0,jsx_runtime.jsx)(ExampleTokensCSS,{definition}):"",(0,jsx_runtime.jsx)(ComponentTokensTable,{component,tokens})]});ComponentTokensSection.propTypes={component:prop_types_default().string.isRequired,definition:prop_types_default().object,tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])})).isRequired}},"./stories/components/DataBadge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DateTimeValue:()=>DateTimeValue,DateValue:()=>DateValue,Default:()=>Default,DesignTokens:()=>DesignTokens,DurationValue:()=>DurationValue,Value:()=>Value,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DataBadge_stories});var css_module=__webpack_require__("../component-library-react/dist/css-module/index.mjs");const tokens_namespaceObject=JSON.parse('{"utrecht":{"badge-data":{"letter-spacing":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"text-transform":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"inherit | uppercase","inherits":true}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),util=__webpack_require__("./stories/components/util.tsx");const meta={title:"CSS Component/Badge/Data Badge",id:"css-data-badge",component:css_module.Ou,args:{children:""},argTypes:{children:{description:"Text content",control:"text"}},parameters:{tokensPrefix:"utrecht-badge-data",status:{type:"WORK IN PROGRESS"},tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Data badge\n\n## HTML\n\nGebruik een inline HTML-element voor de _badge component_, zodat de badge binnen een `p` HTML-element gebruikt kan worden. Bijvoorbeeld een `span`, `time` of `data` element:\n\n```html\n<p>\n  Belangrijke gegevens: <span class="utrecht-badge-data">≥ 250㎡</span>\n  <span class="utrecht-badge-data">Energielabel A</span>\n</p>\n```\n\nGebruik niet een `div`:\n\n```html\n<p>Belangrijke gegevens: <div>≥ 250㎡</div> <div>Energielabel A</div></p>\n```\n\nEen `div` in een `p` element wordt door de parser gezien als het einde van een `p` element, waardoor je eigenlijk dit bereikt:\n\n```html\n<p>Belangrijke gegevens:</p>\n<div>≥ 250㎡</div>\n<div>Energielabel A</div>\n</p>\n```\n\n### Computer-leesbare datum en tijd\n\nGebruik een `time` element wanneer je een datum of een datum en tijd hebt:\n\n```html\n<time class="utrecht-badge-data" datetime="2038-01-19T03:14:08Z">19 januari 2038 om 03:14:08</time>\n```\n\nGebruik een `time` element wanneer je een een tijdsduur hebt, in het `datetime` attribuut moet periode in [ISO 8601 notatie](https://en.wikipedia.org/wiki/ISO_8601#Durations).\n\n```html\n<time class="utrecht-badge-data" datetime="PT1H39M">1 uur en 39 minuten</time>\n```\n\n### Overige computer-leesbare data\n\nGebruik een `data` element wanneer je een `value` hebt met een waarde die voor de computer duidelijk is. De gewone tekst kan dan voor mensen leesbaar zijn. Je kunt de `value` bijvoorbeeld gebruiken om een tabel te sorteren op die waarde. Gebruik nooit een `<data>` element zonder `value`.\n\n```html\n<tr>\n  <th>Koningsweg 13</th>\n  <td>\n    <data class="utrecht-badge-data" value="259">≥ 250㎡</data>\n  </td>\n</tr>\n```\n\n## CSS\n\nAls je de data badge verschillende designs wilt geven, dan kan dat met eigen CSS. De data badge component heeft standaard maar design tokens voor een soort kleur. Je kunt een class name maken om de kleur aan te passen:\n\n```css\n.utrecht-badge-data--myprefix-numeric {\n  --utrecht-badge-background-color: var(--myprefix-color-blue);\n  --utrecht-badge-color: var(--myprefix-color-offwhite);\n}\n\n.utrecht-badge-data--myprefix-date {\n  --utrecht-badge-background-color: var(--myprefix-color-red);\n  --utrecht-badge-color: var(--myprefix-color-offwhite);\n}\n```\n\nJe kunt voor de modifier class name een eigen prefix gebruiken (zoals `example-`), zodat je er in de toekomst geen last van hebt als deze component toevallig een identieke uitbreiding krijgt.\n'}}}},DataBadge_stories=meta,Default={args:{children:"Festivals"},parameters:{docs:{description:{story:"Styling via the `.utrecht-badge-data` class name."}}}},Value={args:{children:"≥ 250㎡",value:"259"},name:"Machine-readable value",parameters:{chromatic:{disableSnapshot:!0},docs:{description:{story:'Markup using the `<data value="…">…</data>` HTML element.'}}}},DateValue={args:{children:"vrijdag 18 augustus",dateTime:"2023-08-18"},name:"Machine-readable date",parameters:{chromatic:{disableSnapshot:!0},docs:{description:{story:'Markup using the `<time datetime="…">…</time>` HTML element, with a programmatically determinable ISO 8601 value in the `datetime` attribute.'}}}},DateTimeValue={args:{children:"21:45",dateTime:"2023-08-18T21:45+02:00"},name:"Machine-readable date and time",parameters:{chromatic:{disableSnapshot:!0},docs:{description:{story:'Markup using the `<time datetime="…">…</time>` HTML element, with a programmatically determinable ISO 8601 value in the `datetime` attribute.'}}}},DurationValue={args:{children:"1 uur en 39 minuten",dateTime:"PT1H39M"},name:"Machine-readable duration",parameters:{chromatic:{disableSnapshot:!0},docs:{description:{story:'Markup using the `<time datetime="…">…</time>` HTML element, with a programmatically determinable ISO 8601 value in the `datetime` attribute.'}}}},DesignTokens=(0,util.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Festivals'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling via the `.utrecht-badge-data` class name.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Value.parameters={...Value.parameters,docs:{...Value.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: '≥ 250㎡',\n    value: '259'\n  },\n  name: 'Machine-readable value',\n  parameters: {\n    // HTML markup cannot be tested using visual regression testing, ignore this story\n    chromatic: {\n      disableSnapshot: true\n    },\n    docs: {\n      description: {\n        story: 'Markup using the `<data value=\"…\">…</data>` HTML element.'\n      }\n    }\n  }\n}",...Value.parameters?.docs?.source}}},DateValue.parameters={...DateValue.parameters,docs:{...DateValue.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'vrijdag 18 augustus',\n    dateTime: '2023-08-18'\n  },\n  name: 'Machine-readable date',\n  parameters: {\n    // HTML markup cannot be tested using visual regression testing, ignore this story\n    chromatic: {\n      disableSnapshot: true\n    },\n    docs: {\n      description: {\n        story: 'Markup using the `<time datetime=\"…\">…</time>` HTML element, with a programmatically determinable ISO 8601 value in the `datetime` attribute.'\n      }\n    }\n  }\n}",...DateValue.parameters?.docs?.source}}},DateTimeValue.parameters={...DateTimeValue.parameters,docs:{...DateTimeValue.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: '21:45',\n    dateTime: '2023-08-18T21:45+02:00'\n  },\n  name: 'Machine-readable date and time',\n  parameters: {\n    // HTML markup cannot be tested using visual regression testing, ignore this story\n    chromatic: {\n      disableSnapshot: true\n    },\n    docs: {\n      description: {\n        story: 'Markup using the `<time datetime=\"…\">…</time>` HTML element, with a programmatically determinable ISO 8601 value in the `datetime` attribute.'\n      }\n    }\n  }\n}",...DateTimeValue.parameters?.docs?.source}}},DurationValue.parameters={...DurationValue.parameters,docs:{...DurationValue.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: '1 uur en 39 minuten',\n    dateTime: 'PT1H39M'\n  },\n  name: 'Machine-readable duration',\n  parameters: {\n    // HTML markup cannot be tested using visual regression testing, ignore this story\n    chromatic: {\n      disableSnapshot: true\n    },\n    docs: {\n      description: {\n        story: 'Markup using the `<time datetime=\"…\">…</time>` HTML element, with a programmatically determinable ISO 8601 value in the `datetime` attribute.'\n      }\n    }\n  }\n}",...DurationValue.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Value","DateValue","DateTimeValue","DurationValue","DesignTokens"]},"./stories/components/util.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/util.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"stories/components/util.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}}}]);