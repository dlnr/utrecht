import{j as h}from"./jsx-runtime-29545a09.js";import{t as v}from"./tokens-d9dc99be.js";import{t as f,d as j}from"./util-c59842d4.js";import{D as T}from"./DataBadge-82cc77af.js";import{P as w}from"./Paragraph-e67a9fcb.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";import"./clsx.m-1229b3e0.js";const y='<!-- @license CC0-1.0 -->\n\n# Data badge\n\n## HTML\n\nGebruik een inline HTML-element voor de _badge component_, zodat de badge binnen een `p` HTML-element gebruikt kan worden. Bijvoorbeeld een `span`, `time` of `data` element:\n\n```html\n<p>\n  Belangrijke gegevens: <span class="utrecht-badge-data">≥ 250㎡</span>\n  <span class="utrecht-badge-data">Energielabel A</span>\n</p>\n```\n\nGebruik niet een `div`:\n\n```html\n<p>Belangrijke gegevens: <div>≥ 250㎡</div> <div>Energielabel A</div></p>\n```\n\nEen `div` in een `p` element wordt door de parser gezien als het einde van een `p` element, waardoor je eigenlijk dit bereikt:\n\n```html\n<p>Belangrijke gegevens:</p>\n<div>≥ 250㎡</div>\n<div>Energielabel A</div>\n</p>\n```\n\n### Computer-leesbare datum en tijd\n\nGebruik een `time` element wanneer je een datum of een datum en tijd hebt:\n\n```html\n<time class="utrecht-badge-data" datetime="2038-01-19T03:14:08Z">19 januari 2038 om 03:14:08</time>\n```\n\nGebruik een `time` element wanneer je een een tijdsduur hebt, in het `datetime` attribuut moet periode in [ISO 8601 notatie](https://en.wikipedia.org/wiki/ISO_8601#Durations).\n\n```html\n<time class="utrecht-badge-data" datetime="PT1H39M">1 uur en 39 minuten</time>\n```\n\n### Overige computer-leesbare data\n\nGebruik een `data` element wanneer je een `value` hebt met een waarde die voor de computer duidelijk is. De gewone tekst kan dan voor mensen leesbaar zijn. Je kunt de `value` bijvoorbeeld gebruiken om een tabel te sorteren op die waarde. Gebruik nooit een `<data>` element zonder `value`.\n\n```html\n<tr>\n  <th>Koningsweg 13</th>\n  <td>\n    <data class="utrecht-badge-data" value="259">≥ 250㎡</data>\n  </td>\n</tr>\n```\n\n## CSS\n\nAls je de data badge verschillende designs wilt geven, dan kan dat met eigen CSS. De data badge component heeft standaard maar design tokens voor een soort kleur. Je kunt een class name maken om de kleur aan te passen:\n\n```css\n.utrecht-badge-data--myprefix-numeric {\n  --utrecht-badge-background-color: var(--myprefix-color-blue);\n  --utrecht-badge-color: var(--myprefix-color-offwhite);\n}\n\n.utrecht-badge-data--myprefix-date {\n  --utrecht-badge-background-color: var(--myprefix-color-red);\n  --utrecht-badge-color: var(--myprefix-color-offwhite);\n}\n```\n\nJe kunt voor de modifier class name een eigen prefix gebruiken (zoals `example-`), zodat je er in de toekomst geen last van hebt als deze component toevallig een identieke uitbreiding krijgt.\n',x={title:"React Component/Data badge",id:"react-data-badge",component:T,args:{children:"Utrecht"},argTypes:{dateTime:{name:"dateTime",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}},value:{name:"value",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}}},parameters:{tokensPrefix:"utrecht-badge-data",tokens:f,tokensDefinition:v,docs:{description:{component:y}}},decorators:[k=>h(w,{children:k()})]},e={},n={args:{children:"50,000",value:"50000"}},a={args:{children:"19 januari 2038 om 03:14:08",dateTime:"2038-01-19T03:14:08Z"}},t=j(x);var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,s,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: '50,000',
    value: '50000'
  }
}`,...(m=(s=n.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var l,c,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: '19 januari 2038 om 03:14:08',
    dateTime: '2038-01-19T03:14:08Z'
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,g,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"designTokenStory(meta)",...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const H=["Default","Value","Time","DesignTokens"];export{e as Default,t as DesignTokens,a as Time,n as Value,H as __namedExportsOrder,x as default};
//# sourceMappingURL=DataBadge.stories-2cb2a302.js.map
