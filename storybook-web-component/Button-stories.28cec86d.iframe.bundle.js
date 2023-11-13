/*! For license information please see Button-stories.28cec86d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[]).push([[6463],{"./src/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Busy:()=>Busy,CollapseButton:()=>CollapseButton,Default:()=>Default,DesignTokens:()=>DesignTokens,ExpandButton:()=>ExpandButton,FormAttributes:()=>FormAttributes,Submit:()=>Submit,ToggleButton:()=>ToggleButton,ToggleButtonPressed:()=>ToggleButtonPressed,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});const tokens_namespaceObject=JSON.parse('{"utrecht":{"button":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-radius":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"borderRadius"},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"borderWidth"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true}},"type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}},"type":"fontWeights"},"inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"line-height":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"lineHeights"},"margin-block-start":{"$extensions":{"nl.nldesignsystem.hidden":true,"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-end":{"$extensions":{"nl.nldesignsystem.hidden":true,"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-inline-start":{"$extensions":{"nl.nldesignsystem.hidden":true,"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-inline-end":{"$extensions":{"nl.nldesignsystem.hidden":true,"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"min-block-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"sizing"},"min-inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"sizing"},"padding-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"spacing"},"padding-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"spacing"},"padding-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"spacing"},"padding-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"spacing"},"text-transform":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"inherit | uppercase","inherits":true}}},"active":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"icon":{"gap":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"spacing"},"size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"sizing"}},"disabled":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"focus":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"scale":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true},"nl.nldesignsystem.figma.supports-token":false}}},"hover":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"scale":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true},"nl.nldesignsystem.figma.supports-token":false}}},"pressed":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"primary-action":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}},"type":"fontWeights"},"active":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"disabled":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"hover":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"scale":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}}}},"focus":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"pressed":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}}},"secondary-action":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}},"type":"fontWeights"},"active":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"disabled":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"hover":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"focus":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"pressed":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}}},"subtle":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}},"type":"fontWeights"},"active":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"disabled":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"hover":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"focus":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"pressed":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),index_esm=__webpack_require__("../web-component-library-react/dist/index.esm.js"),design_token_story=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/design-token-story.tsx")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ButtonStory=({appearance,busy,children,disabled,form,formAction,formEnctype,formMethod,formNoValidate,formTarget,name,popoverTarget,popoverTargetAction,pressed,type,value,...restProps})=>(0,jsx_runtime.jsx)(index_esm.uzW,{appearance,busy:busy||null,disabled:disabled||null,form:form||void 0,formAction:formAction||void 0,formEnctype:formEnctype||void 0,formMethod:formMethod||void 0,formNoValidate:formNoValidate||void 0,formTarget:formTarget||void 0,name:name||void 0,popoverTarget:popoverTarget||void 0,popoverTargetAction:popoverTargetAction||void 0,pressed:pressed||void 0,type:type||null,value:value||void 0,...restProps,children});ButtonStory.displayName="ButtonStory";const meta={title:"Web Component/Button",id:"web-component-button",component:ButtonStory,argTypes:{appearance:{description:"Appearance",control:{type:"select"},options:["","button","primary-action-button","secondary-action-button","subtle-button"]},busy:{description:"Busy",control:"boolean"},children:{description:"Button text",control:"text"},disabled:{description:"Disabled",control:"boolean"},expanded:{description:"Expanded",control:"select",options:{"":void 0,false:"false",true:"true"}},pressed:{description:"Pressed",control:"select",options:{"":void 0,false:"false",true:"true"}},type:{description:"Type",control:"select",options:["","button","reset","submit"]},form:{description:"Optional. ID of associated form, when the button is not inside that <form> element.",control:"text"},formAction:{description:"Optional. Submit the form to another URL than the `action` of the associated <form> element.",control:"text"},formEnctype:{description:'Optional. "application/x-www-form-urlencoded" is default. You should probably use "multipart/form-data" when the form contains a file upload form field.',control:"select",options:["","application/x-www-form-urlencoded","multipart/form-data"]},formMethod:{description:"Optional. Any standard HTTP method, or any custom method. Overrides the method of the associated <form> element.",control:"select",options:["","GET","POST","PUT","DELETE","PATCH"]},formNovalidate:{description:"Optional. Disable browser form validation, use this button to submit the form regardless of validation state.",control:"boolean"},formTarget:{description:"Optional. Submit the form to a specific window or frame.",control:"text"}},args:{busy:!1,disabled:!1,children:"",type:"",name:"",value:"",form:"",formaction:"",formenctype:"",formmethod:"",formnovalidate:!1,popoverTarget:"",popoverTargetAction:""},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-button",tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Button\n\nDe button component gebruik je zodat de gebruiker acties kan uit te voeren en de _user interface_ kan bedienen.\n\nVaak gebruik je een button in combinatie met de _button group_ component: plaats de button in een _button group_ als je ruimte tussen de button en andere componenten wilt.\n\n## Toepassing\n\n### Gebruik je een button of link?\n\nSommige ontwerpen hebben een button om naar een andere pagina te gaan. Sommige ontwerpen hebben link in een formulier om naar de vorige pagina te gaan, terwijl de gegevens wel tussentijds verstuurd en opgeslagen worden. Het is belangrijk dat je het goede HTML-element gebruikt dat past bij de actie, in plaats van het HTML-element kiest dat past bij het ontwerp.\n\nOm deze patronen te gebruiken zijn er vier componenten nodig:\n\n- link\n- link die eruit ziet als button\n- button\n- button die eruit ziet als link\n\nGebruik alleen een `<a>` element wanneer er geen gevolgen zijn. Gebruik een `<button>` element als je niet de browser back button kan gebruiken om het effect ongedaan te maken.\n\nEnkele voorbeelden waar je een link gebruikt:\n\n- een _call to action_ om te registreren: een link.\n- een knop om naar het loginformulier te gaan: een link\n- dezelfde pagina in een andere taal bekijken: een link.\n\nEnkele voorbeelden waar je een button gebruikt:\n\n- "Volgende stap" of "vorige stap" in een formulier. Gebruik een submit button wanneer gegevens tussendoor opgeslagen worden of verstuurd worden.\n- Uitloggen: button. Log niet uit met een link! Je navigatie moet het ondersteunen om zowel links als button dezelfde stijl te geven.\n- de voorkeurstaal aanpassen en dezelfde pagina in een andere taal bekijken: een button.\n\n## Anatomie\n\n### Terminologie\n\n- **button**: van het `<button>` HTML element, `role="button"` in ARIA.\n- **appearance**: van de [CSS `appearance` property](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance) (bijvoorbeeld: `appearance: push-button`).\n\n### States\n\n- `normal`\n- `active`: de gebruiker activeert de button op dit moment. Bijvoorbeeld door er op te klikken. De `active` state duurt maar heel kort.\n- `pressed`: een ingedrukte button, bijvoorbeeld de _bold button_ in een toolbar van een rich text editor, of de button van een date picker popup. Een button kan lange tijd `pressed` zijn, in tegenstelling tot `active`.\n- `hover`: de gebruiker heeft de aanwijzer boven de button. Bijvoorbeeld door met de muiscursor er over te \'zweven\'.\n- `focus`\n- `focus` en `focus-visible`: de link heeft de focus door de `Tab` knop van het keyboard.\n- `disabled`\n- `disabled` en `focus-visible`: als een button disabled is (zeker een _primary action button_), dan moet wel duidelijk zijn dat de button er is en wat je kunt doen om verder te komen. Screen reader gebruikers moeten daarom focus kunnen hebben op een disabled button, om de bijbehorende uitleg te horen.\n\n## Design\n\nMaak elke button 44×44px of groter ([WCAG 2.5.5](https://www.w3.org/TR/WCAG21/#target-size)).\n\n## HTML\n\nGebruik het `<button type="button">` element in HTML om een button te maken.\n\nEen alternatief op `<button>` is bijvoorbeeld `<input type="button">`, maar die heeft minder mogelijkheden voor de inhoud van de button. Je kunt er bijvoorbeeld geen SVG icon in plaatsen. Nog een alternatief is `<div role="button" tabindex="0">`, maar `<button>` heeft het voordeel dat die ook werkt zonder CSS en zonder JavaScript.\n\n### Formulieren verzenden\n\nVoor formulieren verzenden gebruik je `<button type="submit">`. Gebruik ook de `submit` event van een formulier en niet alleen de `click` event van de button, zodat je ook vanuit een formulierveld op `Enter` kan drukken om het formulier te verzenden.\n\n## Hoe het niet moet\n\n### Geen koppeling met uitleg over button\n\nNiet:\n\n```html\n<p>\n  <label for="upload">Bijlage:</label>\n  <input type="file" id="upload" />\n</p>\n<p>Je mag een JPG of een PDF uploaden.</p>\n```\n\nWel:\n\n```html\n<p>\n  <label for="upload">Bijlage:</label>\n  <input type="file" id="upload" aria-describedby="upload-description" />\n</p>\n<p id="upload-description">Je mag een JPG of een PDF uploaden.</p>\n```\n\n---\n\nNiet:\n\n```html\n<p>\n  <button type="submit">Verzenden</button>\n</p>\n<p>Door het formulier te verzenden ga je akkoord met de algemene voorwaarden.</p>\n```\n\nWel:\n\n```html\n<p>\n  <button type="submit" aria-describedby="submit-description">Verzenden</button>\n</p>\n<p id="submit-description">Door het formulier te verzenden ga je akkoord met de algemene voorwaarden.</p>\n```\n\n### Geen koppeling met foutmelding bij een button\n\nNiet:\n\n```html\n<p>\n  <button type="submit">Opslaan</button>\n</p>\n<p class="error">Je bent uitgelogd. Log opnieuw in om je wijzigingen op te slaan.</p>\n```\n\nWel:\n\n```html\n<p>\n  <label for="upload">Bijlage:</label>\n  <input type="file" id="upload" aria-describedby="upload-description" />\n</p>\n<p id="upload-description" class="error">Je mag een JPG of een PDF uploaden.</p>\n```\n\n## Relevante WCAG regels\n\n- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): je kan de button activeren met `Enter` of `Space`, en het is mogelijk met `Tab` de button te focussen. `Space` gebruiken heeft dan niet het effect dat de pagina scrollt.\n- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de button moet duidelijk zijn\n- [WCAG eis 2.5.2](https://www.w3.org/TR/WCAG21/#pointer-cancellation):\n  - gebruik niet de `mousedown` event om de button te activeren, gebruik liever de `click` event\n  - `mousedown` mag alleen gebruikt worden als `mouseup` het effect weer ongedaan maakt, bijvoorbeeld een "_fast foward_" button om audio of video door te spoelen.\n- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de button moet groot genoeg zijn om aan te klikken, en kleine buttons moeten niet te dicht op een andere button staan.\n'}}}},Button_stories=meta,Default={args:{children:"Read more..."}},Submit={args:{children:"Send",type:"submit"}},Busy={args:{busy:!0,children:"Send",type:"submit"}},ToggleButton={args:{children:"Open menu",pressed:!1}},ToggleButtonPressed={args:{children:"Open menu",pressed:!0}},ExpandButton={args:{children:"Open section",expanded:!1}},CollapseButton={args:{children:"Close section",expanded:!0}},FormAttributes={args:{children:"Use all form attributes at once!",form:"id-of-form",formMethod:"PATCH",formEnctype:"multipart/form-data",formNoValidate:!0,formTarget:"_blank"},decorators:[Story=>(0,jsx_runtime.jsxs)(index_esm.HhP,{children:["You can ",Story(),", if you need to."]})],parameters:{chromatic:{disableSnapshot:!0},docs:{description:{story:"Many of the attributes for `<button>` are available for `<utrecht-button>` too: `form`, `formmethod`, `formenctype`, `formnovalidate`."}}}},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Read more...'\n  }\n}",...Default.parameters?.docs?.source}}},Submit.parameters={...Submit.parameters,docs:{...Submit.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Send',\n    type: 'submit'\n  }\n}",...Submit.parameters?.docs?.source}}},Busy.parameters={...Busy.parameters,docs:{...Busy.parameters?.docs,source:{originalSource:"{\n  args: {\n    busy: true,\n    children: 'Send',\n    type: 'submit'\n  }\n}",...Busy.parameters?.docs?.source}}},ToggleButton.parameters={...ToggleButton.parameters,docs:{...ToggleButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Open menu',\n    pressed: false\n  }\n}",...ToggleButton.parameters?.docs?.source}}},ToggleButtonPressed.parameters={...ToggleButtonPressed.parameters,docs:{...ToggleButtonPressed.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Open menu',\n    pressed: true\n  }\n}",...ToggleButtonPressed.parameters?.docs?.source}}},ExpandButton.parameters={...ExpandButton.parameters,docs:{...ExpandButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Open section',\n    expanded: false\n  }\n}",...ExpandButton.parameters?.docs?.source}}},CollapseButton.parameters={...CollapseButton.parameters,docs:{...CollapseButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Close section',\n    expanded: true\n  }\n}",...CollapseButton.parameters?.docs?.source}}},FormAttributes.parameters={...FormAttributes.parameters,docs:{...FormAttributes.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Use all form attributes at once!',\n    form: 'id-of-form',\n    formMethod: 'PATCH',\n    formEnctype: 'multipart/form-data',\n    formNoValidate: true,\n    formTarget: '_blank'\n  },\n  decorators: [Story => <UtrechtParagraph>You can {Story()}, if you need to.</UtrechtParagraph>],\n  parameters: {\n    // These attributes have no visible effects\n    chromatic: {\n      disableSnapshot: true\n    },\n    docs: {\n      description: {\n        story: 'Many of the attributes for `<button>` are available for `<utrecht-button>` too: `form`, `formmethod`, `formenctype`, `formnovalidate`.'\n      }\n    }\n  }\n}",...FormAttributes.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Submit","Busy","ToggleButton","ToggleButtonPressed","ExpandButton","CollapseButton","FormAttributes","DesignTokens"]}}]);