import{j as o}from"./jsx-runtime-29545a09.js";import{t as g,d as y}from"./util-0feaf78f.js";import{B as b}from"./ButtonGroup-6a06084d.js";import{B as r}from"./Button-e950cc69.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";import"./clsx.m-1229b3e0.js";const h=`<!-- @license CC0-1.0 -->

# Button group

De _button group_ is een container voor een aantal buttons, of voor een losstaande button.

## Terminologie

- **button**: van het \`<button>\` HTML element, \`role="button"\` in ARIA.
- **group**: van \`role="group"\` in ARIA.

## Verticale variant

Voor smalle schermen bij plaatsing in smalle panelen (zoals een sidebar) is er een variant waar buttons onder elkaar staan, in plaats van naast elkaar. Gebruik deze variant niet wanneer er voldoende ruimte is voor de standaard variant. Je kunt bijvoorbeeld CSS media queries gebruiken om deze variant toe te passen voor kleine schermen.
`,k={"button-group":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"column-gap":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},comment:"'column-gap', for lack of a better existing property"},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"row-gap":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},comment:"'row-gap', for lack of a better existing property"}}},x={utrecht:k},v={title:"React Component/Button group",id:"react-button-group",component:b,args:{},argTypes:{direction:{description:"Layout of the button group",control:"select",options:{"":void 0,column:"column",row:"row"}}},parameters:{tokensPrefix:"utrecht-button-group",tokens:g,tokensDefinition:x,docs:{description:{component:h}}}},e={args:{children:[o(r,{appearance:"primary-action-button",children:"Save and continue"}),o(r,{appearance:"secondary-action-button",children:"Back"})]}},n={args:{...e.args,direction:"column"}},t=y(v);var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: [<Button appearance="primary-action-button">Save and continue</Button>, <Button appearance="secondary-action-button">Back</Button>]
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: 'column'
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var l,m,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"designTokenStory(meta)",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const j=["Default","DirectionColumn","DesignTokens"];export{e as Default,t as DesignTokens,n as DirectionColumn,j as __namedExportsOrder,v as default};
//# sourceMappingURL=ButtonGroup.stories-a5fcbc63.js.map
