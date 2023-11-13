/*! For license information please see Button-stories.da18238b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_html=self.webpackChunk_utrecht_storybook_html||[]).push([[6463],{"./src/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Busy:()=>Busy,BusyAndDisabled:()=>BusyAndDisabled,Default:()=>Default,DesignTokens:()=>DesignTokens,Disabled:()=>Disabled,DisabledAndFocusable:()=>DisabledAndFocusable,Hidden:()=>Hidden,Submit:()=>Submit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});const tokens_namespaceObject=JSON.parse('{"utrecht":{"button":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-radius":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"borderRadius"},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"borderWidth"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true}},"type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}},"type":"fontWeights"},"inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"line-height":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"lineHeights"},"margin-block-start":{"$extensions":{"nl.nldesignsystem.hidden":true,"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-end":{"$extensions":{"nl.nldesignsystem.hidden":true,"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-inline-start":{"$extensions":{"nl.nldesignsystem.hidden":true,"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-inline-end":{"$extensions":{"nl.nldesignsystem.hidden":true,"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"min-block-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"sizing"},"min-inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"sizing"},"padding-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"spacing"},"padding-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"spacing"},"padding-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"spacing"},"padding-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"spacing"},"text-transform":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"inherit | uppercase","inherits":true}}},"active":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"icon":{"gap":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"spacing"},"size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"sizing"}},"disabled":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"focus":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"scale":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true},"nl.nldesignsystem.figma.supports-token":false}}},"hover":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"scale":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true},"nl.nldesignsystem.figma.supports-token":false}}},"pressed":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"primary-action":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}},"type":"fontWeights"},"active":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"disabled":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"hover":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"scale":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}}}},"focus":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"pressed":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}}},"secondary-action":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}},"type":"fontWeights"},"active":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"disabled":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"hover":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"focus":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"pressed":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}}},"subtle":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}},"type":"fontWeights"},"active":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"disabled":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"hover":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"focus":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}},"pressed":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json");__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _hiddenraw=__webpack_require__("./src/_hidden.md?raw"),decorator=__webpack_require__("./src/decorator.tsx"),design_token_story=__webpack_require__("./src/design-token-story.tsx"),htmlArgTypes=__webpack_require__("./src/util/htmlArgTypes.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Button=({...attributes})=>(0,jsx_runtime.jsx)("button",{...attributes});Button.displayName="Button";const meta={title:"HTML Component/Button",id:"html-button",component:Button,decorators:[decorator.j],argTypes:{"aria-busy":{description:"Busy",control:"boolean"},children:{description:"Content of the button"},disabled:{description:"Disabled",control:"boolean"},hidden:htmlArgTypes.a,tabindex:{description:"Tabindex",control:"boolean"},type:{description:"Type",control:{type:"select"},options:["","button","reset","submit"]}},args:{disabled:!1,hidden:!1,type:"button"},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-button",tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Button\n\nDe button component gebruik je zodat de gebruiker acties kan uit te voeren en de _user interface_ kan bedienen.\n\nVaak gebruik je een button in combinatie met de _button group_ component: plaats de button in een _button group_ als je ruimte tussen de button en andere componenten wilt.\n\n## Toepassing\n\n### Gebruik je een button of link?\n\nSommige ontwerpen hebben een button om naar een andere pagina te gaan. Sommige ontwerpen hebben link in een formulier om naar de vorige pagina te gaan, terwijl de gegevens wel tussentijds verstuurd en opgeslagen worden. Het is belangrijk dat je het goede HTML-element gebruikt dat past bij de actie, in plaats van het HTML-element kiest dat past bij het ontwerp.\n\nOm deze patronen te gebruiken zijn er vier componenten nodig:\n\n- link\n- link die eruit ziet als button\n- button\n- button die eruit ziet als link\n\nGebruik alleen een `<a>` element wanneer er geen gevolgen zijn. Gebruik een `<button>` element als je niet de browser back button kan gebruiken om het effect ongedaan te maken.\n\nEnkele voorbeelden waar je een link gebruikt:\n\n- een _call to action_ om te registreren: een link.\n- een knop om naar het loginformulier te gaan: een link\n- dezelfde pagina in een andere taal bekijken: een link.\n\nEnkele voorbeelden waar je een button gebruikt:\n\n- "Volgende stap" of "vorige stap" in een formulier. Gebruik een submit button wanneer gegevens tussendoor opgeslagen worden of verstuurd worden.\n- Uitloggen: button. Log niet uit met een link! Je navigatie moet het ondersteunen om zowel links als button dezelfde stijl te geven.\n- de voorkeurstaal aanpassen en dezelfde pagina in een andere taal bekijken: een button.\n\n## Anatomie\n\n### Terminologie\n\n- **button**: van het `<button>` HTML element, `role="button"` in ARIA.\n- **appearance**: van de [CSS `appearance` property](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance) (bijvoorbeeld: `appearance: push-button`).\n\n### States\n\n- `normal`\n- `active`: de gebruiker activeert de button op dit moment. Bijvoorbeeld door er op te klikken. De `active` state duurt maar heel kort.\n- `pressed`: een ingedrukte button, bijvoorbeeld de _bold button_ in een toolbar van een rich text editor, of de button van een date picker popup. Een button kan lange tijd `pressed` zijn, in tegenstelling tot `active`.\n- `hover`: de gebruiker heeft de aanwijzer boven de button. Bijvoorbeeld door met de muiscursor er over te \'zweven\'.\n- `focus`\n- `focus` en `focus-visible`: de link heeft de focus door de `Tab` knop van het keyboard.\n- `disabled`\n- `disabled` en `focus-visible`: als een button disabled is (zeker een _primary action button_), dan moet wel duidelijk zijn dat de button er is en wat je kunt doen om verder te komen. Screen reader gebruikers moeten daarom focus kunnen hebben op een disabled button, om de bijbehorende uitleg te horen.\n\n## Design\n\nMaak elke button 44×44px of groter ([WCAG 2.5.5](https://www.w3.org/TR/WCAG21/#target-size)).\n\n## HTML\n\nGebruik het `<button type="button">` element in HTML om een button te maken.\n\nEen alternatief op `<button>` is bijvoorbeeld `<input type="button">`, maar die heeft minder mogelijkheden voor de inhoud van de button. Je kunt er bijvoorbeeld geen SVG icon in plaatsen. Nog een alternatief is `<div role="button" tabindex="0">`, maar `<button>` heeft het voordeel dat die ook werkt zonder CSS en zonder JavaScript.\n\n### Formulieren verzenden\n\nVoor formulieren verzenden gebruik je `<button type="submit">`. Gebruik ook de `submit` event van een formulier en niet alleen de `click` event van de button, zodat je ook vanuit een formulierveld op `Enter` kan drukken om het formulier te verzenden.\n\n## Hoe het niet moet\n\n### Geen koppeling met uitleg over button\n\nNiet:\n\n```html\n<p>\n  <label for="upload">Bijlage:</label>\n  <input type="file" id="upload" />\n</p>\n<p>Je mag een JPG of een PDF uploaden.</p>\n```\n\nWel:\n\n```html\n<p>\n  <label for="upload">Bijlage:</label>\n  <input type="file" id="upload" aria-describedby="upload-description" />\n</p>\n<p id="upload-description">Je mag een JPG of een PDF uploaden.</p>\n```\n\n---\n\nNiet:\n\n```html\n<p>\n  <button type="submit">Verzenden</button>\n</p>\n<p>Door het formulier te verzenden ga je akkoord met de algemene voorwaarden.</p>\n```\n\nWel:\n\n```html\n<p>\n  <button type="submit" aria-describedby="submit-description">Verzenden</button>\n</p>\n<p id="submit-description">Door het formulier te verzenden ga je akkoord met de algemene voorwaarden.</p>\n```\n\n### Geen koppeling met foutmelding bij een button\n\nNiet:\n\n```html\n<p>\n  <button type="submit">Opslaan</button>\n</p>\n<p class="error">Je bent uitgelogd. Log opnieuw in om je wijzigingen op te slaan.</p>\n```\n\nWel:\n\n```html\n<p>\n  <label for="upload">Bijlage:</label>\n  <input type="file" id="upload" aria-describedby="upload-description" />\n</p>\n<p id="upload-description" class="error">Je mag een JPG of een PDF uploaden.</p>\n```\n\n## Relevante WCAG regels\n\n- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): je kan de button activeren met `Enter` of `Space`, en het is mogelijk met `Tab` de button te focussen. `Space` gebruiken heeft dan niet het effect dat de pagina scrollt.\n- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de button moet duidelijk zijn\n- [WCAG eis 2.5.2](https://www.w3.org/TR/WCAG21/#pointer-cancellation):\n  - gebruik niet de `mousedown` event om de button te activeren, gebruik liever de `click` event\n  - `mousedown` mag alleen gebruikt worden als `mouseup` het effect weer ongedaan maakt, bijvoorbeeld een "_fast foward_" button om audio of video door te spoelen.\n- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de button moet groot genoeg zijn om aan te klikken, en kleine buttons moeten niet te dicht op een andere button staan.\n'}}}},Button_stories=meta,Default={args:{children:"The Quick Brown Fox Jumps Over The Lazy Dog",type:"button"},parameters:{docs:{description:{story:"Markup using the `<button>` element."}}}},Disabled={args:{children:"The Quick Brown Fox Jumps Over The Lazy Dog",disabled:!0,type:"button"},parameters:{docs:{description:{story:"Button with `disabled` attribute."}}}},DisabledAndFocusable={args:{children:"The Quick Brown Fox Jumps Over The Lazy Dog","aria-disabled":!0,type:"button"},name:"disabled and focusable",parameters:{docs:{description:{story:'\x3c!-- @license CC0-1.0 --\x3e\n\n\x3c!-- markdownlint-disable first-line-h1 --\x3e\n\nButton with `disabled` state that remains focusable.\n\nSince the `disabled` attribute on HTML makes it impossible to focus the element, the `aria-disabled="true"` attribute is used instead. Any script handling the activation of such button must first check wether the button is disabled before executing the script, because without the `disabled` attribute the browser no longer prevents activation. For `type="reset"` and `type="submit"` additional scripting is required too, to prevent default behavior.\n\nConsiderations for the focusable disabled button:\n\n- must display a focus ring when focused\n- must not appear interactive\n  - must not change appearance for the active state\n  - must not change appearance for the focus state\n  - must not change appearance for the hover state\n'}}}},Busy={args:{"aria-busy":!0,children:"The Quick Brown Fox Jumps Over The Lazy Dog",type:"button"},name:"busy",parameters:{chromatic:{disableSnapshot:!0},docs:{description:{story:"Button with `aria-busy` attribute."}}}},BusyAndDisabled={args:{"aria-busy":!0,children:"The Quick Brown Fox Jumps Over The Lazy Dog",disabled:!0,type:"button"},name:"busy and disabled",parameters:{chromatic:{disableSnapshot:!0},docs:{description:{story:"Button that is both busy and disabled. The busy cursor should have precedence over the disabled cursor."}}}},Submit={args:{children:"The Quick Brown Fox Jumps Over The Lazy Dog",type:"submit"},name:"busy Submit",parameters:{chromatic:{disableSnapshot:!0},docs:{description:{story:'Button with `type="submit"` attribute.'}}}},Hidden={args:{...Default.args,hidden:!0},parameters:{docs:{description:{story:_hiddenraw}}}},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',\n    type: 'button'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `<button>` element.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',\n    disabled: true,\n    type: 'button'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Button with `disabled` attribute.'\n      }\n    }\n  }\n}",...Disabled.parameters?.docs?.source}}},DisabledAndFocusable.parameters={...DisabledAndFocusable.parameters,docs:{...DisabledAndFocusable.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',\n    'aria-disabled': true,\n    type: 'button'\n  },\n  name: 'disabled and focusable',\n  parameters: {\n    docs: {\n      description: {\n        story: buttonDisabledTabindexMarkdown\n      }\n    }\n  }\n}",...DisabledAndFocusable.parameters?.docs?.source}}},Busy.parameters={...Busy.parameters,docs:{...Busy.parameters?.docs,source:{originalSource:"{\n  args: {\n    'aria-busy': true,\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',\n    type: 'button'\n  },\n  name: 'busy',\n  parameters: {\n    // `cursor` cannot be tested using visual regression testing, ignore this story\n    chromatic: {\n      disableSnapshot: true\n    },\n    docs: {\n      description: {\n        story: 'Button with `aria-busy` attribute.'\n      }\n    }\n  }\n}",...Busy.parameters?.docs?.source}}},BusyAndDisabled.parameters={...BusyAndDisabled.parameters,docs:{...BusyAndDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    'aria-busy': true,\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',\n    disabled: true,\n    type: 'button'\n  },\n  name: 'busy and disabled',\n  parameters: {\n    // `cursor` cannot be tested using visual regression testing, ignore this story\n    chromatic: {\n      disableSnapshot: true\n    },\n    docs: {\n      description: {\n        story: 'Button that is both busy and disabled. The busy cursor should have precedence over the disabled cursor.'\n      }\n    }\n  }\n}",...BusyAndDisabled.parameters?.docs?.source}}},Submit.parameters={...Submit.parameters,docs:{...Submit.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',\n    type: 'submit'\n  },\n  name: 'busy Submit',\n  parameters: {\n    // `cursor` cannot be tested using visual regression testing, ignore this story\n    chromatic: {\n      disableSnapshot: true\n    },\n    docs: {\n      description: {\n        story: 'Button with `type=\"submit\"` attribute.'\n      }\n    }\n  }\n}",...Submit.parameters?.docs?.source}}},Hidden.parameters={...Hidden.parameters,docs:{...Hidden.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    hidden: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: hiddenDocs\n      }\n    }\n  }\n}",...Hidden.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","DisabledAndFocusable","Busy","BusyAndDisabled","Submit","Hidden","DesignTokens"]},"./src/util/htmlArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>hidden});const hidden={description:"Hidden",control:"boolean"}},"./src/_hidden.md?raw":module=>{module.exports="\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nThe global HTML attribute `hidden` should work as expected, and CSS properties such as `display: inline`, `display: block`, `display: flex` or `display: inline-flex` from the component stylesheet should not interfere with this behavior.\n"}}]);