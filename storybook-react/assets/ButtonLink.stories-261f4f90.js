import{t as K,d as N}from"./util-950d32d4.js";import{B as O}from"./ButtonLink-27568c91.js";import"./jsx-runtime-29545a09.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";import"./clsx.m-1229b3e0.js";const U=`<!-- @license CC0-1.0 -->

# Button link: link die er uit ziet als button

Een link die er uitziet als een button, om gebruikers aan te sporen op de link te klikken en actie te gaan ondernemen.

## Toepassing

Een link button mag alleen gebruikt worden voor navigatie naar een pagina waar je een actie uitvoert, de link klikken mag niet gelijk een _side-effect_ hebben.

Wel:

- Log in met eIDAS (navigeert naar formulier voor inloggen)
- Maak een afspraak (navigeert naar formulier)

Niet:

- Uitloggen (logt direct uit)
- Stop de parkeermeter (je mag hierna niet meer parkeren)

## Activeren

Een link button moet op dezelfde manier geactiveerd kunnen worden als een button:

- Klikken
- \`Enter\` op toetsenbord
- \`Space\` op toetsenbord

Een HTML \`a\` element wordt standaard niet geactiveerd met \`Space\`, daarvoor is ondersteunende JavaScript nodig. Gebruik \`role="button"\` alleen wanneer je door extra JavaScript ook met \`Space\` de link activeert.

## States

- hover
- focus
- focus-visible

De link button heeft geen disabled state, net als de normale link: die heeft ook geen disabled state.

De link button heeft geen \`visited\` state zoals normale links, maar ziet er altijd hetzelfde uit zoals een normale button.
`,W={"button-link":{}},Q={utrecht:W},X={title:"React Component/Link that looks like a button",id:"react-button-link",component:O,parameters:{tokensPrefix:"utrecht-button-link",tokens:K,tokensDefinition:Q,docs:{description:{component:U}}},args:{children:"Read more...",href:"#"},argTypes:{appearance:{description:"Appearance",control:{type:"select"},options:["","button","primary-action-button","secondary-action-button","subtle-button"],table:{category:"API",defaultValue:{summary:""}}},external:{type:"boolean",table:{category:"API",defaultValue:{summary:!1}}},placeholder:{name:"placeholder",type:"boolean",table:{category:"API",defaultValue:{summary:!1}}},href:{type:"string",table:{category:"API",defaultValue:{summary:"",required:!0}}}}},e={},r={args:{children:"Read more...",href:"https://example.com/",external:!0}},a={args:{...e.args,placeholder:!0}},n={name:"Primary",args:{...e.args,appearance:"primary-action-button"}},t={args:{...e.args,appearance:"secondary-action-button"}},o={args:{...e.args,appearance:"subtle-button"}},s={args:{...e.args,appearance:"subtle-button"},parameters:{pseudo:{hover:!0}}},c={args:{...e.args},parameters:{pseudo:{focus:!0}}},i={args:{...e.args},parameters:{pseudo:{active:!0}}},u={args:{...e.args},parameters:{pseudo:{focusVisible:!0,focus:!0}}},p=N(X);var l,m,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,b,k;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Read more...',
    href: 'https://example.com/',
    external: true
  }
}`,...(k=(b=r.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var f,h,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    placeholder: true
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,v,D;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Primary',
  args: {
    ...Default.args,
    appearance: 'primary-action-button'
  }
}`,...(D=(v=n.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var x,P,A;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(A=(P=t.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var E,L,V;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(V=(L=o.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var z,T,F;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(F=(T=s.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var j,w,B;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(B=(w=c.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var I,R,_;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...(_=(R=i.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var C,H,J;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  }
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var M,q,G;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:"designTokenStory(meta)",...(G=(q=p.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const te=["Default","External","PlaceholderForLink","PrimaryButtonLink","Secondary","Subtle","Hover","Focus","Active","FocusVisible","DesignTokens"];export{i as Active,e as Default,p as DesignTokens,r as External,c as Focus,u as FocusVisible,s as Hover,a as PlaceholderForLink,n as PrimaryButtonLink,t as Secondary,o as Subtle,te as __namedExportsOrder,X as default};
//# sourceMappingURL=ButtonLink.stories-261f4f90.js.map
