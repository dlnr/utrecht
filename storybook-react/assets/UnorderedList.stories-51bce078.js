import{j as n}from"./jsx-runtime-29545a09.js";import{t as m,d as c}from"./util-c59842d4.js";import{a as p,U as s}from"./UnorderedListItem-ec0b975e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";import"./clsx.m-1229b3e0.js";const g='<!-- @license CC0-1.0 -->\n\n# Lijsten\n\nLijsten worden gebruikt voor opsommingen op een contentpagina. Hier gaan opsommingen vooraf met een bullet of een cijfer. De marge tussen twee list items (li) is 0.5em (8px).\n\nGebruik `role="list"` om te voorkomen dat de component niet toegankelijkheid is in combinatie met een eigen icoon voor elke list item, wanneer je `list-style: none` gebruikt om de browser-icoon uit te zetten. ([Safari behandelt lijsten met eigen `list-style` anders dan normaal.](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html))\n\n## Terminologie\n\n- **unordered list**: uitgeschreven versie van de HTML afkorting `<ul>`\n- **list item**: uitgeschreven van van [HTML `<li>`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element). Ook [in ARIA is het `role="listitem"`](https://www.w3.org/TR/wai-aria-1.2/#listitem)\n- **marker**: zoals in de [CSS pseudo-selector `::marker`](https://drafts.csswg.org/css-pseudo-4/#marker-pseudo)\n\n## Class names\n\n- `utrecht-unordered-list`\n- `utrecht-unordered-list--distanced`: standaard heeft een component geen marge, gebruik deze class name om in een bepaalde context de standaard-marge toe te passen\n- `utrecht-unordered-list--nested`\n- `utrecht-unordered-list__item`: misschien moet nog aangepast worden naar `utrecht-unordered-list__listitem` of - `utrecht-unordered-list__list-item`\n- `utrecht-unordered-list__marker`\n\n## Design tokens\n\n- Document\n  - `--utrecht-document-font-family`\n  - `--utrecht-document-font-size`\n  - `--utrecht-document-line-height`\n- Paragraph\n  - `--utrecht-paragraph-margin-block-start`\n  - `--utrecht-paragraph-margin-block-end`\n- List\n  - `--utrecht-unordered-list-margin-block-start`\n  - `--utrecht-unordered-list-margin-block-end`\n  - List item\n    - `--utrecht-unordered-list-item-margin-block-start`\n    - `--utrecht-unordered-list-item-margin-block-end`\n  - Marker\n    - `--utrecht-unordered-list-marker-color`\n',u={"unordered-list":{"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"fontSizes"},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"lineHeights"},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1},type:"spacing"},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1},type:"spacing"},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},item:{"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"}},marker:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}}}},h={utrecht:u},y={title:"React Component/Unordered List",id:"react-unordered-list",component:p,argTypes:{},args:{children:[n(s,{children:"List item 1"}),n(s,{children:"List item 2"}),n(s,{children:"List item 3"})]},parameters:{tokensPrefix:"utrecht-unordered-list",tokens:m,tokensDefinition:h,docs:{description:{component:g}}}},e={},t=c(y);var r,i,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var a,l,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"designTokenStory(meta)",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const _=["Default","DesignTokens"];export{e as Default,t as DesignTokens,_ as __namedExportsOrder,y as default};
//# sourceMappingURL=UnorderedList.stories-51bce078.js.map
