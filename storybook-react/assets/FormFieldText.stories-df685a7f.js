import{a as _,j as e}from"./jsx-runtime-91a467a5.js";import{F as d,T as S,P as m,d as I,c,e as k}from"./index.esm-4e479a00.js";import N from"./FormField.stories-78988be2.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./defineProperty-a128c648.js";import"./clsx.m-1229b3e0.js";import"./chunk-PCJTTTQV-e6b3616c.js";import"./iframe-27bd8a70.js";import"../sb-preview/runtime.mjs";import"./react-18-ff2c0a32.js";import"./index-8ce4a492.js";import"./index-7e3f6bb9.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-9d29e343.js";import"./index-356e4a49.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-2493ee1a.js";import"./util-340805f9.js";import"./index-1fc0ca9a.js";const j={...N.argTypes,required:{description:"Required",control:"boolean",table:{category:"Story",defaultValue:{summary:!1}}},id:{description:"ID",type:{name:"text",required:!0},table:{category:"Story",defaultValue:{summary:""}}},name:{description:"Name",control:"text",table:{category:"Story",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"Story",defaultValue:{summary:""}}},label:{name:"label",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},invalidDescription:{name:"invalidDescription",description:"Description for invalid input",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},description:{description:"Description",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},re={title:"React Component/Form Field/Textbox",id:"react-form-field",component:d,argTypes:j,args:{description:"Maximaal 140 karakters",disabled:!1,id:"3a43bbe9-635c-46c2-86cd-b0aa63855598",invalid:!0,invalidDescription:"Fout: het veld is nog leeg. Vul een bericht in.",label:"Tweet",name:"message",value:"",required:!0,type:"text",Input:S},render:g=>{const{description:i,disabled:l,id:r,Input:v,invalid:s,invalidDescription:o,label:F,name:h,required:T,value:D,type:n}=g,V=i?`${r}-description`:null,q=o?`${r}-invalid-description`:null;return _(d,{invalid:s,type:n,children:[e(m,{className:"utrecht-form-field__label",children:e(I,{disabled:l,htmlFor:r,children:F})}),e(m,{className:"utrecht-form-field__input",children:e(v,{id:r,disabled:l,invalid:s,name:h,type:n,required:T,value:D})}),i?e(c,{id:V,className:"utrecht-form-field__description",children:i}):void 0,o?e(c,{id:q,invalid:!0,className:"utrecht-form-field__description",children:o}):void 0]})}},t={},a={args:{description:"Maximaal 140 karakters",disabled:!1,id:"3a43bbe9-635c-46c2-86cd-b0aa63855598",invalid:!0,invalidDescription:"Fout: het veld is nog leeg. Vul een bericht in.",label:"Tweet",name:"message",value:"",required:!0,type:"text",Input:k}};var p,u,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,f,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    description: 'Maximaal 140 karakters',
    disabled: false,
    id: '3a43bbe9-635c-46c2-86cd-b0aa63855598',
    invalid: true,
    invalidDescription: 'Fout: het veld is nog leeg. Vul een bericht in.',
    label: 'Tweet',
    name: 'message',
    value: '',
    required: true,
    type: 'text',
    Input: Textarea
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const te=["FormFieldTextbox","FormFieldTextarea"];export{a as FormFieldTextarea,t as FormFieldTextbox,te as __namedExportsOrder,re as default};
//# sourceMappingURL=FormFieldText.stories-df685a7f.js.map