import{j as e,a as t,F as b}from"./jsx-runtime-29545a09.js";import{t as U,d as N}from"./util-0feaf78f.js";import{m as l,n as R}from"./index.esm-1d984a1e.js";import{c as x}from"./clsx.m-1229b3e0.js";import{r as S}from"./index-76fb7be0.js";import{L as I}from"./Link-040f8057.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./objectWithoutProperties-7f9e7ae4.js";import"./typeof-7fd5df1e.js";import"./getPrototypeOf-624f05c9.js";import"./index-d3ea75b5.js";import"./iframe-4246b192.js";import"../sb-preview/runtime.js";const n=S.forwardRef(({className:i,icon:r,children:s,...d},p)=>e("li",{className:x("utrecht-link-list__item",i),children:t(I,{className:"utrecht-link-list__link",...d,ref:p,children:[r,e("span",{className:"utrecht-link-list__link-text",children:s})]})}));n.displayName="LinkListLink";const C=S.forwardRef(({children:i,icon:r,links:s,className:d,...p},_)=>t("ul",{ref:_,className:x("utrecht-link-list","utrecht-link-list--html-ul",d),...p,children:[i,Array.isArray(s)&&s.map((j,w)=>e(n,{icon:typeof r=="function"?r():void 0,...j},w))]}));C.displayName="LinkList";try{n.displayName="LinkListLink",n.__docgenInfo={description:"",displayName:"LinkListLink",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},boxContent:{defaultValue:null,description:"",name:"boxContent",required:!1,type:{name:"boolean"}},external:{defaultValue:null,description:"",name:"external",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"boolean"}}}}}catch{}const T=`<!-- @license CC0-1.0 -->

# Link list

Links met een pijl als voorloopteken worden gebruikt aan het einde van een tekst. Ze verwijzen naar gerelateerde informatie over het onderwerp wat er in de voorafgaande tekst is besproken.

## Huisstijl gemeente Utrecht

De links zijn donkerblauw (\`#2A5587\`), bold en hebben een pijl (>) als voorloopteken. Dit type link wordt ook gebruikt in de linklijst en de subnavigatie.
`,D={"link-list":{"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},item:{"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"column-gap":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},z={utrecht:D},$={title:"React Component/Link list",id:"react-link-list",component:C,args:{children:""},parameters:{tokensPrefix:"utrecht-link-list",tokens:U,tokensDefinition:z,docs:{description:{component:T}}}},o={args:{children:t(b,{children:[t(n,{href:"#",icon:e(l,{}),children:["Learn about ",e("i",{lang:"fr",children:"joi de vivre"}),", an essential foreign phrase!"]}),e(n,{href:"#",icon:e(l,{}),children:"Link 2"}),e(n,{href:"#",icon:e(l,{}),children:"Link 3"})]})},parameters:{docs:{description:{story:"The CSS code is currently very specific to Utrecht, and has no white label design tokens yet."}}},decorators:[i=>e("div",{style:{inlineSize:"20em"},children:i()})]},a={args:{icon:()=>e(l,{}),links:[{href:"#",icon:e(R,{}),children:"Custom icon"},{href:"#",children:t(b,{children:["Learn about ",e("i",{lang:"fr",children:"joi de vivre"}),", an essential foreign phrase!"]})},{href:"#",children:"Link 3"}]},name:"Links property",parameters:{docs:{description:{story:"The CSS code is currently very specific to Utrecht, and has no white label design tokens yet."}}}},c=N($);var h,m,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <>
        <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
          Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
        </LinkListLink>
        <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
          Link 2
        </LinkListLink>
        <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
          Link 3
        </LinkListLink>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'The CSS code is currently very specific to Utrecht, and has no white label design tokens yet.'
      }
    }
  },
  decorators: [Story => <div style={{
    inlineSize: '20em'
  }}>{Story()}</div>]
}`,...(k=(m=o.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var u,g,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    icon: () => <UtrechtIconChevronRight />,
    links: [{
      href: '#',
      icon: <UtrechtIconHuisEnOmgeving />,
      children: 'Custom icon'
    }, {
      href: '#',
      children: <>
            Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
          </>
    }, {
      href: '#',
      children: 'Link 3'
    }]
  },
  name: 'Links property',
  parameters: {
    docs: {
      description: {
        story: 'The CSS code is currently very specific to Utrecht, and has no white label design tokens yet.'
      }
    }
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var L,f,v;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:"designTokenStory(meta)",...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Q=["Default","LinksProperty","DesignTokens"];export{o as Default,c as DesignTokens,a as LinksProperty,Q as __namedExportsOrder,$ as default};
//# sourceMappingURL=LinkList.stories-e7054d98.js.map
