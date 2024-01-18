import{a as n,j as r}from"./jsx-runtime-29545a09.js";import{F as s,P as F,c as _,C as D,d as m}from"./index-5e5470b5.js";import S from"./FormField.stories-4573a0f5.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./slicedToArray-b6353f72.js";import"./clsx.m-c1fc4751.js";import"./objectDestructuringEmpty-24e23e90.js";import"./extends-98964cd2.js";import"./util-0feaf78f.js";import"./index-8d47fad6.js";const V={...S.argTypes,checked:{description:"Checked",control:"boolean",table:{category:"Story",defaultValue:{summary:!1}}},required:{description:"Required",control:"boolean",table:{category:"Story",defaultValue:{summary:!1}}},id:{description:"ID",type:{name:"text",required:!0},table:{category:"Story",defaultValue:{summary:""}}},name:{description:"Name",control:"text",table:{category:"Story",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"Story",defaultValue:{summary:""}}},label:{name:"label",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},invalidDescription:{name:"invalidDescription",description:"Description for invalid input",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},description:{description:"Description",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},A={title:"React Component/Form Field/Checkbox",id:"react-form-field--checkbox",component:s,argTypes:V,args:{checked:!1,description:"U kunt ons echt vertrouwen!",disabled:!1,id:"43f471c8-c6f1-4867-bc53-9602c06b8a32",invalid:!0,invalidDescription:"U moet akkoord gaan met de algemene voorwaarden, anders kunt u niet verder.",label:"Ik ga akkoord met de algemene voorwaarden",name:"consent",value:"true",required:!0,type:"checkbox"},render:y=>{const{checked:b,description:a,disabled:i,id:e,invalid:l,invalidDescription:o,label:h,name:k,required:v,value:g,type:x}=y,d=a?`${e}-description`:null,c=o?`${e}-invalid-description`:null;return n(s,{invalid:l,type:x,children:[r(F,{className:"utrecht-form-field__label utrecht-form-field__label--checkbox",children:n(_,{disabled:i,type:"checkbox",htmlFor:e,children:[r(D,{"aria-describedby":[d,c].filter(Boolean).join(" ")||null,className:"utrecht-form-field__input",defaultChecked:b,disabled:i,id:e,invalid:l,required:v,name:k,value:g}),h]})}),a?r(m,{id:d,className:"utrecht-form-field__description",children:a}):void 0,o?r(m,{id:c,invalid:!0,className:"utrecht-form-field__description",children:o}):void 0]})}},t={};var u,p,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const B=["FormFieldCheckbox"];export{t as FormFieldCheckbox,B as __namedExportsOrder,A as default};
//# sourceMappingURL=FormFieldCheckbox.stories-b84d6263.js.map
