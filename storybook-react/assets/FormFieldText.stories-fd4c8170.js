import{a as _,j as e}from"./jsx-runtime-29545a09.js";import{F as d,T as S,P as c,a as I,b as m,c as k}from"./index.esm-54580a0c.js";import N from"./FormField.stories-a10dbc07.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-c1fc4751.js";import"./objectDestructuringEmpty-24e23e90.js";import"./extends-98964cd2.js";import"./index-4af3d3b2.js";import"./slicedToArray-b6353f72.js";import"./util-332b7e19.js";import"./index-8d47fad6.js";const j={...N.argTypes,required:{description:"Required",control:"boolean",table:{category:"Story",defaultValue:{summary:!1}}},id:{description:"ID",type:{name:"text",required:!0},table:{category:"Story",defaultValue:{summary:""}}},name:{description:"Name",control:"text",table:{category:"Story",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"Story",defaultValue:{summary:""}}},label:{name:"label",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},invalidDescription:{name:"invalidDescription",description:"Description for invalid input",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},description:{description:"Description",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},G={title:"React Component/Form Field/Textbox",id:"react-form-field",component:d,argTypes:j,args:{description:"Maximaal 140 karakters",disabled:!1,id:"3a43bbe9-635c-46c2-86cd-b0aa63855598",invalid:!0,invalidDescription:"Fout: het veld is nog leeg. Vul een bericht in.",label:"Tweet",name:"message",value:"",required:!0,type:"text",Input:S},render:g=>{const{description:i,disabled:l,id:a,Input:v,invalid:s,invalidDescription:o,label:F,name:h,required:T,value:D,type:n}=g,V=i?`${a}-description`:null,q=o?`${a}-invalid-description`:null;return _(d,{invalid:s,type:n,children:[e(c,{className:"utrecht-form-field__label",children:e(I,{disabled:l,htmlFor:a,children:F})}),e(c,{className:"utrecht-form-field__input",children:e(v,{id:a,disabled:l,invalid:s,name:h,type:n,required:T,value:D})}),i?e(m,{id:V,className:"utrecht-form-field__description",children:i}):void 0,o?e(m,{id:q,invalid:!0,className:"utrecht-form-field__description",children:o}):void 0]})}},r={},t={args:{description:"Maximaal 140 karakters",disabled:!1,id:"3a43bbe9-635c-46c2-86cd-b0aa63855598",invalid:!0,invalidDescription:"Fout: het veld is nog leeg. Vul een bericht in.",label:"Tweet",name:"message",value:"",required:!0,type:"text",Input:k}};var u,p,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,f,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const H=["FormFieldTextbox","FormFieldTextarea"];export{t as FormFieldTextarea,r as FormFieldTextbox,H as __namedExportsOrder,G as default};
//# sourceMappingURL=FormFieldText.stories-fd4c8170.js.map
