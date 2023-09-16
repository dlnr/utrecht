/*! For license information please see components-SkipLink-stories.6e647183.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[25826],{"../../documentation/components/ComponentTokensSection.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>ComponentTokensSection});var prop_types=__webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),DesignTokensTable=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../documentation/components/DesignTokensTable.jsx"));const isHiddenDesignToken=token=>!!token&&!!token.$extensions&&!0===token.$extensions["nl.nldesignsystem.hidden"];var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ComponentTokensTable=({component,tokens})=>{const componentPath=["utrecht",component.replace(/^(example|denhaag|utrecht)-/,"")],subset=tokens.filter((token=>componentPath.every(((name,index)=>token.path[index]===name)))).filter((token=>!isHiddenDesignToken(token)));return 0===subset.length?(0,jsx_runtime.jsxs)("p",{children:["This component has ",(0,jsx_runtime.jsx)("strong",{children:"no documented design tokens"}),"."]}):(0,jsx_runtime.jsx)(DesignTokensTable.V,{tokens:subset})};ComponentTokensTable.displayName="ComponentTokensTable",ComponentTokensTable.propTypes={component:prop_types_default().string.isRequired,tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])}))};var lodash_isplainobject=__webpack_require__("../../node_modules/.pnpm/lodash.isplainobject@4.0.6/node_modules/lodash.isplainobject/index.js"),lodash_isplainobject_default=__webpack_require__.n(lodash_isplainobject);const CopyButton=({value,textContent="Copy"})=>(0,jsx_runtime.jsx)("button",{className:"utrecht-button utrecht-button--secondary-action utrecht-button--html-button",style:{cursor:"copy"},onClick:()=>navigator.clipboard.writeText(value),type:"button",children:textContent});CopyButton.displayName="CopyButton",CopyButton.propTypes={value:prop_types_default().string.isRequired,textContent:prop_types_default().string};const traverseDeep=(root,parents,current,valueTest,callback)=>{valueTest(current)?callback(parents,current):lodash_isplainobject_default()(current)&&Object.entries(current).forEach((([key,value])=>{traverseDeep(root,[...parents,key],value,valueTest,callback)}))},isDesignTokenDefinition=value=>(value=>Object.prototype.hasOwnProperty.call(value,"value")||Object.prototype.hasOwnProperty.call(value,"$value"))(value)||Object.prototype.hasOwnProperty.call(value,"css")||Object.prototype.hasOwnProperty.call(value,"$extensions"),tokensToCSS=tokens=>{const lines=[];return((tokens,callback)=>{traverseDeep(tokens,[],tokens,isDesignTokenDefinition,callback)})(tokens,((path,value)=>{isHiddenDesignToken(value)||lines.push(`  /* --${path.join("-")}: ${value&&value.$extensions&&value.$extensions["nl.nldesignsystem.css.property"]&&value.$extensions["nl.nldesignsystem.css.property"].syntax?value.$extensions["nl.nldesignsystem.css.property"].syntax:"<value>"}; */`)})),`.your-theme {\n  /* Uncomment each custom property you need */\n${lines.join("\n")}\n}`},ExampleTokensCSS=({definition})=>{const code=tokensToCSS(definition);return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("h2",{children:["Template for ",(0,jsx_runtime.jsx)("samp",{children:"your-theme.css"})]}),(0,jsx_runtime.jsx)("p",{children:"If you do not (yet) want to manage your design tokens in JSON files, but when you just want to get started quickly to reuse our CSS component with your own design, then you can use this CSS template as a starting point to see what parts of the component you can customize with design tokens."}),(0,jsx_runtime.jsxs)("p",{children:["Combine the design tokens CSS with our"," ",(0,jsx_runtime.jsx)("a",{href:"https://npmjs.com/package/@utrecht/component-library-css",children:"CSS component library pacakge on npm"}),", and you should be able to quickly and easily create a web page with our components and your own design."]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CopyButton,{value:code,textContent:"Copy CSS"})}),(0,jsx_runtime.jsx)("pre",{children:code})]})};ExampleTokensCSS.displayName="ExampleTokensCSS",ExampleTokensCSS.propTypes={definition:prop_types_default().object.isRequired};var lodash_clonedeepwith=__webpack_require__("../../node_modules/.pnpm/lodash.clonedeepwith@4.5.0/node_modules/lodash.clonedeepwith/index.js"),lodash_clonedeepwith_default=__webpack_require__.n(lodash_clonedeepwith),lodash_mapvalues=__webpack_require__("../../node_modules/.pnpm/lodash.mapvalues@4.6.0/node_modules/lodash.mapvalues/index.js"),lodash_mapvalues_default=__webpack_require__.n(lodash_mapvalues),lodash_omitby=__webpack_require__("../../node_modules/.pnpm/lodash.omitby@4.6.0/node_modules/lodash.omitby/index.js"),lodash_omitby_default=__webpack_require__.n(lodash_omitby);const ExampleTokensJSON=({definition})=>{const filter=item=>lodash_isplainobject_default()(item.$extensions)||lodash_isplainobject_default()(item.$value)?{}:lodash_isplainobject_default()(item)?lodash_mapvalues_default()(lodash_omitby_default()(item,(item=>isHiddenDesignToken(item))),(item=>lodash_clonedeepwith_default()(item,filter))):void 0,tokens=lodash_clonedeepwith_default()(definition,filter),code=JSON.stringify(tokens,null,"  ");return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("h2",{children:["Template ",(0,jsx_runtime.jsx)("samp",{children:"tokens.json"})," for your theme"]}),(0,jsx_runtime.jsxs)("p",{children:["We use the ",(0,jsx_runtime.jsx)("a",{href:"https://design-tokens.github.io/community-group/format/",children:"Design Tokens Format"})," to store our design choices in JSON files. These ",(0,jsx_runtime.jsx)("code",{children:"tokens.json"})," files are translated into other formats such as CSS and SCSS variables, so the design choices can be imported automatically into projects with varying technical stacks."]}),(0,jsx_runtime.jsx)("p",{children:"When we develop front-end components in CSS, we avoid putting design decisions in our CSS code directly. Instead we use CSS variables that reference the design tokens. This way we don't need to change the CSS components when over time we make different design decisions, we just include the latest export of the design tokens."}),(0,jsx_runtime.jsx)("p",{children:"Because our CSS components are coded in such a way that design decisions —such as fonts, colors and sizes— are stored in an optional file that you don't have to use, you can reuse our CSS components and combine them with design decisions for your own project and brand."}),(0,jsx_runtime.jsxs)("p",{children:["Copy the JSON template below if you want to reuse this component, and replace the empty placeholder object with your own code:",(0,jsx_runtime.jsx)("code",{children:'{ "value": "#123456", "comment": "my design choice" }'}),"."]}),(0,jsx_runtime.jsxs)("p",{children:["When you have a collection of design token JSON files, you can use"," ",(0,jsx_runtime.jsx)("a",{href:"https://amzn.github.io/style-dictionary/#/",children:"Style Dictionary"})," to translate them to CSS or any other format your developers need."]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CopyButton,{value:code,textContent:"Copy JSON"})}),(0,jsx_runtime.jsx)("pre",{children:code})]})};ExampleTokensJSON.displayName="ExampleTokensJSON",ExampleTokensJSON.propTypes={definition:prop_types_default().object.isRequired};const ComponentTokensSection=({component,tokens,definition})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[definition?(0,jsx_runtime.jsx)(ExampleTokensJSON,{definition}):"",definition?(0,jsx_runtime.jsx)(ExampleTokensCSS,{definition}):"",(0,jsx_runtime.jsx)(ComponentTokensTable,{component,tokens})]});ComponentTokensSection.propTypes={component:prop_types_default().string.isRequired,definition:prop_types_default().object,tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])})).isRequired}},"../../documentation/components/DesignTokensTable.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>DesignTokensTable});var prop_types=__webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),css=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.2_sass@1.66.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js!../../components/color-sample/css/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(css.Z,options);css.Z&&css.Z.locals&&css.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ColorExample=({color})=>(0,jsx_runtime.jsx)("data",{className:"utrecht-color-sample",style:{color,outline:"1px solid silver"},value:color});ColorExample.displayName="ColorExample",ColorExample.propTypes={color:prop_types_default().string.isRequired};const visualizeToken=token=>token.$extensions&&token.$extensions["nl.nldesignsystem.css.property"]&&"<color>"===token.$extensions["nl.nldesignsystem.css.property"].syntax?(0,jsx_runtime.jsx)(ColorExample,{color:token.value}):"",DesignTokensTable=({tokens})=>(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("h2",{children:"Theme for Gemeente Utrecht"}),(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Design token name"}),(0,jsx_runtime.jsx)("th",{children:"Design token value"}),(0,jsx_runtime.jsx)("th",{}),(0,jsx_runtime.jsx)("th",{children:"Support"})]})}),(0,jsx_runtime.jsx)("tbody",{children:tokens.map((token=>{const{name,path,value}=token;return(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)("code",{children:path.join(".")})}),(0,jsx_runtime.jsx)("td",{children:value}),(0,jsx_runtime.jsx)("td",{children:visualizeToken(token)}),(0,jsx_runtime.jsx)("td",{children:token.$extensions&&!1===token.$extensions["nl.nldesignsystem.figma.supports-token"]?(0,jsx_runtime.jsx)("span",{className:"utrecht-badge-data",children:"CSS"}):"string"==typeof token.type?(0,jsx_runtime.jsxs)("div",{className:"utrecht-badge-list",children:[(0,jsx_runtime.jsx)("span",{className:"utrecht-badge-data",children:"CSS"}),(0,jsx_runtime.jsx)("span",{className:"utrecht-badge-data",children:"Figma"})]}):""})]},name)}))})]})]});DesignTokensTable.displayName="DesignTokensTable",DesignTokensTable.propTypes={tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])}))}},"./stories/components/SkipLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,RightToLeft:()=>RightToLeft,VisibleOnFocus:()=>VisibleOnFocus,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SkipLink_stories});var clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const SkipLink=(0,react.forwardRef)((({children,className,...restProps},ref)=>(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)("a",{ref,...restProps,className:(0,clsx_m.Z)("utrecht-skip-link","utrecht-skip-link--visible-on-focus",className),children})})));SkipLink.displayName="SkipLink";try{SkipLink.displayName="SkipLink",SkipLink.__docgenInfo={description:"",displayName:"SkipLink",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../component-library-react/src/SkipLink.tsx#SkipLink"]={docgenInfo:SkipLink.__docgenInfo,name:"SkipLink",path:"../component-library-react/src/SkipLink.tsx#SkipLink"})}catch(__react_docgen_typescript_loader_error){}const tokens_namespaceObject=JSON.parse('{"utrecht":{"skip-link":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"min-block-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"min-inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"text-decoration":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"none | underline","inherits":true}}},"z-index":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":false}},"focus":{"text-decoration":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"none | underline","inherits":true}}}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),util=__webpack_require__("./stories/components/util.tsx");const ExampleViewport=Story=>(0,jsx_runtime.jsx)("div",{style:{minHeight:"240px",minWidth:"320px",position:"relative",willChange:"transform"},children:Story()});ExampleViewport.displayName="ExampleViewport",ExampleViewport.displayName="ExampleViewport";try{ExampleViewport.displayName="ExampleViewport",ExampleViewport.__docgenInfo={description:"",displayName:"ExampleViewport",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/util/ExampleViewport.tsx#ExampleViewport"]={docgenInfo:ExampleViewport.__docgenInfo,name:"ExampleViewport",path:"stories/components/util/ExampleViewport.tsx#ExampleViewport"})}catch(__react_docgen_typescript_loader_error){}const SkipLinkStory=({focus,visibility,visibleOnFocus,...restProps})=>(0,jsx_runtime.jsx)(SkipLink,{className:(0,clsx_m.Z)({"utrecht-skip-link--focus":focus,"utrecht-skip-link--visible-on-focus":visibleOnFocus,"utrecht-skip-link--hidden":"hidden"===visibility,"utrecht-skip-link--visible":"visible"===visibility}),...restProps});SkipLinkStory.displayName="SkipLinkStory";const meta={title:"CSS Component/Skip link",id:"css-skip-link",component:SkipLinkStory,decorators:[ExampleViewport],argTypes:{children:{description:"Link text",type:{name:"string",required:!1}},href:{description:"Target URL",type:{name:"string",required:!0}},visibility:{description:"Visibilty",type:"select",options:["","hidden","visible"]},visibleOnFocus:{description:"Visible on focus",control:"boolean"}},args:{children:"",href:"",focus:!1,visibility:"",visibleOnFocus:!1},parameters:{tokensPrefix:"utrecht-skip-link",status:{type:"ALPHA"},tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Skip link\n\n_Skip links_ zijn belangrijk om te gebruiken op de meeste websites omdat voor sommige gebruikers het hierdoor niet onnodig veel tijd kost om je website te gebruiken. Met een _skip link_ ga je naar een andere plek op dezelfde pagina, zodat je bijvoorbeeld gelijk een artikel kan lezen en links daarin kunt aanklikken, zonder tijd te besteden aan de hoofdnavigatie.\n\n_Skip links_ zijn meestal onzichtbaar als je de pagina opent, maar ze zijn wel makkelijk vindbaar voor deze gebruikers. Met het toetsenbord vindt je een _skip link_ door op `Tab` te drukken wanneer je de pagina hebt geladen. (Voor macOS gebruikers is het nodig om de standaard-instellingen aan te passen voordat dit werkt.)\n\nMaak skip links naar de drie belangrijkste onderdelen op de pagina, in deze volgorde:\n\n1. _main content_: vaak een link naar een `<main>` of `<article>` element\n2. _main navigation_: als je een _main navigation component_ hebt, link dan hier naar als je het niet al de volgende link is in de tabvolgorde.\n3. _search form_: als je een zoekveld hebt om vanuit deze pagina de zoeken, gebruik deze _skip link_ als laatste.\n\nAls je de skip link gaat gebruiken op een website, begin dan consistent elke pagina met de skip link zodat de navigatie op een voorspelbare manier werkt ([WCAG 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation)).\n\nSkip links zijn niet nodig op een simpele pagina waar alleen tekst staat en geen navigatie. Een startpagina van een zoekmachine heeft bijvoorbeeld wel een navigatie én een zoekformulier, maar door het gebruik van `autofocus` voor het zoekveld heeft het geen zin om een skip link te gebruiken.\n\n## HTML\n\n- plaats de _skip link_ als allereerste interactieve element van de pagina, bijvoorbeeld als eerste HTML-element in `<body>`.\n- plaats de _skip link_ voor landmarks zoals het `<header>` element van de _page header component_.\n- gebruik een `<div>` of `<p>` om de link in de plaatsen, gebruik niet een losse `<a>`, zodat de link ook duidelijk is als CSS niet geladen is.\n- gebruik geen `<nav>` element voor skip links.\n\n## Hoe het niet moet\n\n### Skip links onnodig in een `<nav>` HTML-element\n\nHet is belangrijk dan gebruikers snel bij de _navigation landmark_ voor het hoofdmenu komen kunnen komen, het zou niet handig zijn als je altijd eerst de _navigation landmark_ met skip links moet overslaan.\n\nNiet:\n\n```html\n<nav class="skip-links">…</nav>\n```\n\nWel:\n\n```html\n<div class="skip-links">…</div>\n```\n\nDe pagina is beter leesbaar wanneer de CSS niet is geladen als je een _block-level_ HTML-element gebruikt zoals `div` of `p` met daarin de skip links, dan komt de HTML die volgt na de skip links netjes op een eigen regel te staan.\n\n### Skip link onleesbaar door overlap met achtergrond\n\nAls je de skip link een vaste locatie geeft met CSS `position`, dan kan de link over de inhoud van de pagina heen staan. Gebruik daarom een achtergrondkleur voor de _skip link_, zodat de link-tekst altijd leesbaar is.\n\n### Onnodig scrollen bij focus\n\nNiet:\n\n```css\n.utrecht-skip-link {\n  position: absolute;\n  /* … */\n}\n```\n\nWel:\n\n```css\n.utrecht-skip-link {\n  position: fixed;\n  /* … */\n}\n```\n\n## Privacy\n\nHet moet voor skip link gebruikers duidelijk zijn als er een _cookie consent_ is op de pagina, je wilt niet dat deze belangrijke functionaliteit wordt overgeslagen.\n\n## Links\n\n- [WCAG 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): een `link` role wordt gebruikt, het liefst door het `a` HTML-element met een _fragment identifier_ URL: `<a href="#target">`. Gebruik niet `button`.\n- [WCAG 1.3.2](https://www.w3.org/TR/WCAG21/#meaningful-sequence): een _cookie consent_ formulier moet als eerste komen, de skip link als tweede.\n- [WCAG 2.4.1](https://www.w3.org/TR/WCAG21/#bypass-blocks): gebruik een _skip link_ op alle pagina\'s waar voor de unieke inhoud van die pagina er herhalende informatie staat, zoals een header of navigatie.\n- [WCAG 2.4.3](https://www.w3.org/TR/WCAG21/#focus-order): een _cookie consent_ moet als eerste focus krijgen, direct daarna de skip links. Zet de HTML van de _skip link_ vooraan in het document. Gebruik niet `tabindex` om de gewenste focus volgorde te bereiken, want dat kan problemen opleveren met bijvoorbeeld _cookie consent_ formulieren.\n- [WCAG 2.4.7](https://www.w3.org/TR/WCAG21/#focus-visible): de _skip link_ is zichtbaar wanneer die focus heeft. Het visueel ontwerp maakt duidelijk dat het element focus heeft, doordat de stijl consistent is met andere links wanneer ze focus hebben. De skip link mag ook altijd zichtbaar zijn, het is niet verplicht ze standaard te verbergen.\n- [WCAG 2.5.2](https://www.w3.org/TR/WCAG21/#pointer-cancellation): een skip link moet geactiveerd worden bij `click`, niet bij `mousedown`.\n- [WCAG 2.5.2](https://www.w3.org/TR/WCAG21/#label-in-name)\n- [WCAG 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): skip link afmeting is ten minste 44×44px.\n- [WCAG 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation): skip link wordt consistent gebruikt op elke pagina.\n- [WCAG 3.1.3](https://www.w3.org/TR/WCAG21/#unusual-words): gebruik duidelijke taal voor het label. Bijvoorbeeld niet: "Direct naar de secundaire content met widgets".\n- [WCAG 3.2.4](https://www.w3.org/TR/WCAG21/#consistent-identification): gebruik dezelfde labels voor de _skip link_ op alle pagina\'s. Bijvoorbeeld niet: "Navigatie overslaan" op een gedeelte van de site, en "Naar de inhoud" op andere pagina\'s.\n'}}}},SkipLink_stories=meta,Default={args:{href:"#main",focus:!0,children:"Skip to main content",visibility:"visible"},parameters:{docs:{description:{story:"Styling met de `.utrecht-skip-link` en `.utrecht-skip-link--visible-on-focus` class naam."}}}},VisibleOnFocus={args:{href:"#main",focus:!0,children:"Skip to main content",visibleOnFocus:!0},name:"Visible on focus",parameters:{chromatic:{disableSnapshot:!0},docs:{description:{story:"Styling met de `.utrecht-skip-link--visible-on-focus` class naam. Standaard niet zichtbaar, wordt zichtbaar wanneer je met het toetsenbord er naar toe tabt."}}}},RightToLeft={args:{href:"#main",focus:!0,children:"تخطي إلى المحتوى الرئيسي",visibility:"visible"},name:"Right-to-left",decorators:[Story=>(0,jsx_runtime.jsx)("div",{dir:"rtl",lang:"ar",children:Story()})],parameters:{docs:{description:{story:"Skip link in right-to-left script."}}}},DesignTokens=(0,util.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: '#main',\n    focus: true,\n    children: 'Skip to main content',\n    visibility: 'visible'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `Styling met de \\`.utrecht-skip-link\\` en \\`.utrecht-skip-link--visible-on-focus\\` class naam.`\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},VisibleOnFocus.parameters={...VisibleOnFocus.parameters,docs:{...VisibleOnFocus.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: '#main',\n    focus: true,\n    children: 'Skip to main content',\n    visibleOnFocus: true\n  },\n  name: 'Visible on focus',\n  parameters: {\n    chromatic: {\n      disableSnapshot: true\n    },\n    docs: {\n      description: {\n        story: 'Styling met de `.utrecht-skip-link--visible-on-focus` class naam. Standaard niet zichtbaar, wordt zichtbaar wanneer je met het toetsenbord er naar toe tabt.'\n      }\n    }\n  }\n}",...VisibleOnFocus.parameters?.docs?.source}}},RightToLeft.parameters={...RightToLeft.parameters,docs:{...RightToLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: '#main',\n    focus: true,\n    children: 'تخطي إلى المحتوى الرئيسي',\n    visibility: 'visible'\n  },\n  name: 'Right-to-left',\n  decorators: [Story => <div dir=\"rtl\" lang=\"ar\">\n        {Story()}\n      </div>],\n  parameters: {\n    docs: {\n      description: {\n        story: `Skip link in right-to-left script.`\n      }\n    }\n  }\n}",...RightToLeft.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","VisibleOnFocus","RightToLeft","DesignTokens"]},"./stories/components/util.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/util.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"stories/components/util.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.2_sass@1.66.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js!../../components/color-sample/css/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utrecht-color-sample{background-color:var(--utrecht-color-sample-background-color, currentColor);block-size:var(--utrecht-color-sample-block-size, 2em);border-color:var(--utrecht-color-sample-border-color, var(--utrecht-color-sample-default-border-color));border-radius:var(--utrecht-color-sample-border-radius, 0);border-style:solid;border-width:var(--utrecht-color-sample-border-width, 0);box-sizing:border-box;display:inline-block;inline-size:var(--utrecht-color-sample-inline-size, 2em);-webkit-print-color-adjust:exact;print-color-adjust:exact}@media(forced-colors: active){.utrecht-color-sample{forced-color-adjust:none}}@media(forced-colors: active)and (prefers-color-scheme: dark){.utrecht-color-sample{--utrecht-color-sample-default-border-color: var(--utrecht-color-sample-dark-border-color, #000)}}@media(forced-colors: active)and (prefers-color-scheme: light){.utrecht-color-sample{--utrecht-color-sample-default-border-color: var(--utrecht-color-sample-light-border-color, #fff)}}","",{version:3,sources:["webpack://./../../components/color-sample/css/index.scss","webpack://./../../components/color-sample/css/_mixin.scss"],names:[],mappings:"AAQA,sBCDE,2EAAA,CACA,sDAAA,CACA,uGAAA,CACA,0DAAA,CACA,kBAAA,CACA,wDAAA,CACA,qBAAA,CACA,oBAAA,CACA,wDAAA,CACA,gCAAA,CACA,wBAAA,CAEA,8BACE,sBACE,wBAAA,CAAA,CAGJ,8DACE,sBACE,gGAAA,CAAA,CAGJ,+DACE,sBACE,iGAAA,CAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021-2022 Gemeente Utrecht\n * Copyright (c) 2021-2022 Frameless B.V.\n */\n\n@import "./mixin";\n\n.utrecht-color-sample {\n  @include utrecht-color-sample;\n}\n',"/**\n * @license EUPL-1.2\n * Copyright (c) 2021-2022 Gemeente Utrecht\n * Copyright (c) 2021-2022 Frameless B.V.\n */\n\n@mixin utrecht-color-sample {\n  background-color: var(--utrecht-color-sample-background-color, currentColor);\n  block-size: var(--utrecht-color-sample-block-size, 2em);\n  border-color: var(--utrecht-color-sample-border-color, var(--utrecht-color-sample-default-border-color));\n  border-radius: var(--utrecht-color-sample-border-radius, 0);\n  border-style: solid;\n  border-width: var(--utrecht-color-sample-border-width, 0);\n  box-sizing: border-box;\n  display: inline-block;\n  inline-size: var(--utrecht-color-sample-inline-size, 2em);\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n\n  @media (forced-colors: active) {\n    & {\n      forced-color-adjust: none;\n    }\n  }\n  @media (forced-colors: active) and (prefers-color-scheme: dark) {\n    & {\n      --utrecht-color-sample-default-border-color: var(--utrecht-color-sample-dark-border-color, #000);\n    }\n  }\n  @media (forced-colors: active) and (prefers-color-scheme: light) {\n    & {\n      --utrecht-color-sample-default-border-color: var(--utrecht-color-sample-light-border-color, #fff);\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);