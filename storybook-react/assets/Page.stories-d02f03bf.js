import{j as o}from"./jsx-runtime-670450c2.js";import{Z as m}from"./index-3790cfb7.js";import{t as d,d as h}from"./util-b8ce874c.js";import{Default as e}from"./PageContent.stories-ad7aa182.js";import{Default as a}from"./PageFooter.stories-2aba0405.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-b4f9149a.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const u=`<!-- @license CC0-1.0 -->

# Page component

Component that centers the page. The page maximizes the width of the content for large viewports, to keep the line length of texts readable and avoid large horizontal distances between related components.

Typically the contents of the page component are:

- Page Header component
- Page Content component
  - Main content
  - Complimentary content
- Page Footer component

## API

- CSS class name: \`utrecht-page\`
- Web component: \`<utrecht-page>\`
- Angular/React/Vue.js component: \`UtrechtPage\`

## CSS implementation

### Margin

To create some transparent space around the page, \`margin-inline\` CSS variables are provided. However, to automatically horizontally center the page \`margin-inline: auto\` needs to be used.

Achieving both goals is made possible by implementing the \`margin-inline\` as \`padding-inline\` on a transparent container element. The only downside to this approach is that margin collapsing won't work anymore, but that doesn't seem like anyone would ever need for a component that realistically is only used once per document.

### Padding

Padding is not applied directly in the page component itself, but in the child components such as Page Header, Page Content and Page Footer.

## Relevante WCAG regels

- [WCAG eis 2.4.1](https://www.w3.org/TR/WCAG21/#bypass-blocks): gebruik de skip link zodat gebruikers direct naar de _main page content_ kunnen gaan.
- [WCAG eis 2.4.2](https://www.w3.org/TR/WCAG21/#page-titled): de pagina moet een duidelijke titel hebben
`,y={page:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}},f={utrecht:y},b={title:"React Component/Page",id:"react-page",component:m,subcomponents:{PageContent:e,PageFooter:a,PageHeader:e},tags:["autodocs"],parameters:{tokensPrefix:"utrecht-page",tokens:d,tokensDefinition:f,docs:{description:{component:u}}}},k=g=>o(m,{...g}),n=k.bind({});n.args={children:[o(e,{...e.args}),o(e,{...e.args}),o(a,{...a.args})]};const t=h(b);var s,r,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:"args => <Page {...args} />",...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var p,c,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"designTokenStory(meta)",...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const W=["Default","DesignTokens"];export{n as Default,t as DesignTokens,W as __namedExportsOrder,b as default};
//# sourceMappingURL=Page.stories-d02f03bf.js.map
