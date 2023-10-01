import{a as l,j as e}from"./jsx-runtime-29545a09.js";import{F as h,d as N,e as V,H as q,b as t,P as $,a as B,C as H}from"./index.esm-813c862d.js";import T from"./FormField.stories-99403213.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./defineProperty-75c483e5.js";import"./clsx.m-1229b3e0.js";import"./chunk-S4VUQJ4A-01030bf9.js";import"./iframe-cb0e671c.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./index-6ce9200a.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./index-7d7aad2f.js";import"./util-83f1cb40.js";import"./index-8d47fad6.js";const w={...T.argTypes,headingLevel:{description:"Heading level for the label. Leave empty for a regular label.",control:{type:"select"},options:["","1","2","3","4","5","6"],table:{defaultValue:{summary:!1},category:"Story"}},name:{description:"Name attribute of the <input> elements",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},groupLabel:{description:"Label of the group",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},groupInvalidDescription:{description:"Description for an invalid group",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},groupId:{description:"ID of the group",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},groupDescription:{description:"Description of the group",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},ae={title:"React Component/Form Field/Checkbox group",id:"react-form-field--checkbox-group",component:h,argTypes:w,args:{groupId:"7adc261b-20ea-41b8-bc5d-8bdcad6feb91",groupLabel:"Hoe wil je dat wij contact opnemen?",options:[{id:"4e054ee1-799e-4608-9055-19d3fc0b88e9",name:"phone",value:"true",label:"Telefoon",checked:!0},{id:"238b2692-2460-4bad-93b5-b6def8c3b820",name:"email",value:"true",label:"E-mail"},{id:"6a1b86d8-f5d2-4852-9f95-b6690ac3d0e2",name:"mail",value:"true",label:"Brief"}]},render:F=>{const{groupDescription:s,groupId:o,groupInvalidDescription:c,groupLabel:p,groupName:I,headingLevel:n,invalid:_,options:D}=F,a=o&&s?`${o}-description`:void 0,d=c?`${o}-invalid-description`:void 0,k=[a,d].filter(Boolean).join(" ");return l(N,{id:o,"aria-describedby":k,invalid:_,children:[e(V,{children:n?e(q,{level:n,children:p}):p}),a?e(t,{id:a,children:s}):void 0,d?e(t,{id:d,status:"invalid",children:c}):void 0,D.map(({description:m,checked:L,id:r,invalid:u,invalidDescription:f,label:j,name:C,value:S})=>{const b=`${r}-description`,g=u?`${r}-invalid-description`:void 0;return l(h,{invalid:u,type:"checkbox",children:[e($,{className:"utrecht-form-field__label utrecht-form-field__label--checkbox",children:l(B,{type:"checkbox",htmlFor:r,children:[e(H,{className:"utrecht-form-field__input",id:r,value:S,name:C||I,defaultChecked:L,"aria-describedby":[b,g].filter(Boolean).join(" ")||void 0}),j]})}),m?e(t,{id:b,className:"utrecht-form-field__description",children:m}):void 0,f?e(t,{id:g,status:"invalid",className:"utrecht-form-field__description",children:f}):void 0]},r)})]})}},i={};var y,v,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const de=["FormFieldCheckboxGroup"];export{i as FormFieldCheckboxGroup,de as __namedExportsOrder,ae as default};
//# sourceMappingURL=FormFieldCheckboxGroup.stories-9355afba.js.map
