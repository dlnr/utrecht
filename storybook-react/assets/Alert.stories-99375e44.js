import{a as W,j as a}from"./jsx-runtime-29545a09.js";import{t as T,d as q}from"./util-c44c6156.js";import{c as L}from"./clsx.m-1229b3e0.js";import{r as N}from"./index-76fb7be0.js";import{H as R}from"./Heading1-fe98ef9d.js";import{P as E}from"./Paragraph-e67a9fcb.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const l=N.forwardRef(({children:d,className:D,icon:c,type:n,...G},S)=>W("div",{...G,ref:S,className:L("utrecht-alert",{"utrecht-alert--error":n==="error","utrecht-alert--info":n==="info","utrecht-alert--ok":n==="ok","utrecht-alert--warning":n==="warning"},D),children:[c&&a("div",{className:"utrecht-alert__icon",children:c}),a("div",{className:"utrecht-alert__message",children:d})]}));l.displayName="Alert";try{l.displayName="Alert",l.__docgenInfo={description:"",displayName:"Alert",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}}}}}catch{}const H=`<!-- @license CC0-1.0 -->

# Alert

De _alert component_ is er voor berichten die de gebruiker snel moet weten, omdat ze belangrijk zijn voor het uitvoeren van de huidige taak. De alert is alleen voor eenvoudige berichten. Gebruik in de alert geen buttons, geen formulier-componenten en geen complexe opmaak zoals tabellen.

Let op: de alert component gebruiken kan essentieël zijn voor gebruikers van een schermvoorlezer, maar onjuist gebruik kan heel erg vervelend zijn.

Gebruik niet een alert voor een algemene aankondiging die op meerdere pagina's staat, als het niet per se relevant is voor de huidige taak van de bezoeker. De alert wordt door schermvoorlezers als eerste voorgelezen op elke pagina waar de alert staat, het kan lastig zijn de website te gebruiken als de schermlezer elke keer wordt geblokkeerd met steeds dezelfde melding. Gebruik in die situaties de notification banner component.

## Componenten die lijken op alert

- de _alert_: wordt zo snel mogelijk aangekondigd.
- de _notification banner_: wordt ook snel aangekondigd, omdat het één van eerste onderdelen van de pagina is als je de banner plaatst aan het begin van de page header. Je kunt de banner overslaan een _skip link_.
- de _error appearance_ van de _form field description_: voor feedback in een formulier die hoort bij een form control. Wordt aangekondigd door schermlezers wanneer de form control focus heeft.

## Tekst

Schrijf een bericht voor de alert die ook duidelijk is als de gebruiker geen icoon of signaalkleur ziet.

Let op: als de tekst met een script aangepast wordt dan wordt de alert in zijn geheel nogmaals voorgelezen door een schermvoorlezer. Een tekst met een veranderend onderdeel zoals "Over 14 minuten en 59 seconden verloopt je sessie.", heeft als effect dat de schermlezer alleen nog de alert voorleest en de pagina verder onbruikbaar is.

## HTML

Het belangrijkste onderdeel van de alert is het bericht, plaats die in een \`<div role="alert">\`.

Gebruik bij voorkeur een _paragraph component_ voor de inhoud van het bericht, voor een goede \`font-size\` en \`line-height\` en zodat de alert \`margin\` heeft wanneer de CSS niet geladen kan worden.

Als je wel een button gebruikt (bijvoorbeeld om de alert te verbergen), plaats die dan nooit binnen het element met \`role="alert"\`, maar daarbuiten.

\`\`\`html
<div class="utrecht-alert">
  <div class="utrecht-alert__icon">
    <!-- optioneel: een icon -->
  </div>
  <div class="utrecht-alert__message" role="alert">
    <!-- het bericht, bijvoorbeeld: -->
    <p class="utrecht-paragraph">Let op: er is nu een storing waardoor...</p>
  </div>
  <!-- optioneel en nog niet ondersteund: een button, buiten het bericht -->
</div>
\`\`\`

## Relevante WCAG eisen

- [WCAG eis 1.1.1](https://www.w3.org/TR/WCAG21/#non-text-content): als de alert een icoon gebruikt met een bepaalde betekenis, moet de betekenis ook uit de tekst blijken.
- [WCAG eis 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color): als de alert een signaalkleur gebruikt moet de tekst datzelfde ook duidelijk maken, bijvoorbeeld met signaalwoorden. Gebruik bijvoorbeeld "Let op:" voor een waarschuwing.
- [WCAG eis 2.2.1](https://www.w3.org/TR/WCAG21/#timing-adjustable): laat de alert niet automatisch verdwijnen na een bepaalde tijd (lees de WCAG specificatie voor enkele uitzonderingen).
`,O={alert:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},warning:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},error:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},ok:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},icon:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},gap:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},error:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},warning:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},ok:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}}},I={utrecht:O},P={title:"React Component/Alert",id:"react-alert",component:l,args:{children:[a(R,{children:"Lorem ipsum"}),a(E,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]},parameters:{tokensPrefix:"utrecht-alert",tokens:T,tokensDefinition:I,docs:{description:{component:H}}}},e={},r={args:{...e.args,type:"info"}},t={args:{...e.args,type:"ok"}},s={args:{...e.args,type:"warning"}},o={args:{...e.args,type:"error"}},i=q(P);var p,g,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,h,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'info'
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var k,b,x;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'ok'
  }
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,f,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'warning'
  }
}`,...(w=(f=s.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var _,j,$;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'error'
  }
}`,...($=(j=o.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var z,A,C;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:"designTokenStory(meta)",...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const X=["Default","Info","OK","Warning","Error","DesignTokens"];export{e as Default,i as DesignTokens,o as Error,r as Info,t as OK,s as Warning,X as __namedExportsOrder,P as default};
//# sourceMappingURL=Alert.stories-99375e44.js.map
