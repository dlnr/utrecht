import{V as E,c as P,F as W}from"./index-5e5470b5.js";import{t as B,d as G}from"./util-0feaf78f.js";import"./slicedToArray-b6353f72.js";import"./clsx.m-c1fc4751.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-29545a09.js";import"./objectDestructuringEmpty-24e23e90.js";import"./extends-98964cd2.js";import"./index-8d47fad6.js";const O=`<!-- @license CC0-1.0 -->

# Radio button

## Design

Zorg dat de radio button herkenbaar is, doordat die lijkt op radio buttons op andere websites. Maak niet heel bijzonder ontwerp dat onduidelijk is voor veel gebruikers.

- Een radio button is rond, niet een vierkant of een ruit.
- Een radio button heeft een ronde cirkel als _checked_ icoon.
- Gebruik voor de radio button geen checkmark icoon (een vinkje), dat zou verwarrend zijn. Door een checkmark lijkt het alsof je meerdere opties kunt selecteren, terwijl dat niet zo is.

## Terminologie

- **radio button**: "Radio button" heeft [een Wikipedia-lemma](https://en.wikipedia.org/wiki/Radio_button), [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) noemt het ook "radio button" en "radio group".
- **checked**: [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) en HTML noemen de staat van de radio button "checked", CSS heeft de \`:checked\` pseudo-class.

## Class names

- \`.utrecht-radio-button\`
`,Z={"radio-button":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<percentage>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},active:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},checked:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},active:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},hover:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},hover:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},disabled:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},invalid:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}},J={utrecht:Z},K={title:"React Component/Radio Button",id:"react-radio-button",component:E,subcomponents:{FormLabel:P,FormField:W},parameters:{tokensPrefix:"utrecht-radio-button",tokens:B,tokensDefinition:J,docs:{description:{component:O}}},argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1},category:"HTML attribute"}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1},category:"HTML attribute"}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1},category:"HTML attribute"}},value:{name:"value",type:{name:"string",required:!1},table:{category:"HTML attribute"}}}},s={},r={parameters:{pseudo:{hover:!0}}},n={parameters:{pseudo:{focus:!0}}},t={parameters:{pseudo:{focusVisible:!0}}},e={args:{checked:!0,value:"checked"}};e.args={checked:!0,value:"checked"};const o={args:{checked:!0,disabled:!0}},i={args:{disabled:!0}},a={args:{invalid:!0}},c={args:{required:!0}},l=G(K);var d,u,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var y,m,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,x,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var k,$,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true
    }
  }
}`,...(f=($=t.parameters)==null?void 0:$.docs)==null?void 0:f.source}}};var v,w,S;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    checked: true,
    value: 'checked'
  }
}`,...(S=(w=e.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var T,R,q;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(q=(R=o.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var D,A,C;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var V,j,F;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(F=(j=a.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var H,z,I;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(I=(z=c.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var L,M,_;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:"designTokenStory(meta)",...(_=(M=l.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};const oe=["Default","Hover","Focus","FocusVisible","Checked","CheckedAndDisabled","Disabled","Invalid","Required","DesignTokens"];export{e as Checked,o as CheckedAndDisabled,s as Default,l as DesignTokens,i as Disabled,n as Focus,t as FocusVisible,r as Hover,a as Invalid,c as Required,oe as __namedExportsOrder,K as default};
//# sourceMappingURL=RadioButton.stories-88c526dd.js.map
