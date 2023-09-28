/*! For license information please see BadgeData-stories.0b72eb54.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[]).push([[6005],{"./src/BadgeData.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BadgeData_stories});const tokens_namespaceObject=JSON.parse('{"utrecht":{"badge-data":{"letter-spacing":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"text-transform":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"inherit | uppercase","inherits":true}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),index_esm=__webpack_require__("../web-component-library-react/dist/index.esm.js"),design_token_story=__webpack_require__("./src/design-token-story.tsx");const meta={title:"Web Component/Badge data",id:"web-component-badge-data",component:index_esm.tXE,argTypes:{children:{description:"Text content",control:"text"}},args:{children:""},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-badge-data",tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Data badge\n\n## HTML\n\nGebruik een inline HTML-element voor de _badge component_, zodat de badge binnen een `p` HTML-element gebruikt kan worden. Bijvoorbeeld een `span`, `time` of `data` element:\n\n```html\n<p>\n  Belangrijke gegevens: <span class="utrecht-badge-data">≥ 250㎡</span>\n  <span class="utrecht-badge-data">Energielabel A</span>\n</p>\n```\n\nGebruik niet een `div`:\n\n```html\n<p>Belangrijke gegevens: <div>≥ 250㎡</div> <div>Energielabel A</div></p>\n```\n\nEen `div` in een `p` element wordt door de parser gezien als het einde van een `p` element, waardoor je eigenlijk dit bereikt:\n\n```html\n<p>Belangrijke gegevens:</p>\n<div>≥ 250㎡</div>\n<div>Energielabel A</div>\n</p>\n```\n\n### Computer-leesbare datum en tijd\n\nGebruik een `time` element wanneer je een datum of een datum en tijd hebt:\n\n```html\n<time class="utrecht-badge-data" datetime="2038-01-19T03:14:08Z">19 januari 2038 om 03:14:08</time>\n```\n\nGebruik een `time` element wanneer je een een tijdsduur hebt, in het `datetime` attribuut moet periode in [ISO 8601 notatie](https://en.wikipedia.org/wiki/ISO_8601#Durations).\n\n```html\n<time class="utrecht-badge-data" datetime="PT1H39M">1 uur en 39 minuten</time>\n```\n\n### Overige computer-leesbare data\n\nGebruik een `data` element wanneer je een `value` hebt met een waarde die voor de computer duidelijk is. De gewone tekst kan dan voor mensen leesbaar zijn. Je kunt de `value` bijvoorbeeld gebruiken om een tabel te sorteren op die waarde. Gebruik nooit een `<data>` element zonder `value`.\n\n```html\n<tr>\n  <th>Koningsweg 13</th>\n  <td>\n    <data class="utrecht-badge-data" value="259">≥ 250㎡</data>\n  </td>\n</tr>\n```\n\n## CSS\n\nAls je de data badge verschillende designs wilt geven, dan kan dat met eigen CSS. De data badge component heeft standaard maar design tokens voor een soort kleur. Je kunt een class name maken om de kleur aan te passen:\n\n```css\n.utrecht-badge-data--myprefix-numeric {\n  --utrecht-badge-background-color: var(--myprefix-color-blue);\n  --utrecht-badge-color: var(--myprefix-color-offwhite);\n}\n\n.utrecht-badge-data--myprefix-date {\n  --utrecht-badge-background-color: var(--myprefix-color-red);\n  --utrecht-badge-color: var(--myprefix-color-offwhite);\n}\n```\n\nJe kunt voor de modifier class name een eigen prefix gebruiken (zoals `example-`), zodat je er in de toekomst geen last van hebt als deze component toevallig een identieke uitbreiding krijgt.\n'}}}},BadgeData_stories=meta,Default={args:{children:"Festivals"}},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Festivals'\n  }\n}",...Default.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DesignTokens"]}}]);