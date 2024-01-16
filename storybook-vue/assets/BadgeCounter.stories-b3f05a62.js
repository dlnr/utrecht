import{f as t}from"./component-library-vue-fc921df8.js";import{c as a}from"./util-0757423d.js";import"./vue.esm-bundler-4be3a786.js";import"./chunk-HLWAVYOI-586e5007.js";import"./iframe-aefd0879.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-4fb43917.js";import"./index-356e4a49.js";const i=`<!-- @license CC0-1.0 -->

# Counter badge
`,c={"badge-counter":{"background-color":{comment:"Default background color for badge components",$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-radius":{comment:"Default corner radius for badge components",$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}},type:"borderRadius"},color:{comment:"Default text color for badge components",$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"fontSizes"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},"padding-block":{comment:"Default block padding for badge components",$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline":{comment:"Default inline padding color for badge components",$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"}}},p={utrecht:c},l={id:"vue-badge-counter",title:"Vue.js Component/Badge Counter",component:t,tags:["autodocs"],args:{value:"42"},argTypes:{value:{name:"Value",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}}},parameters:{status:{type:"ALPHA"},tokenPrefix:"utrecht-badge-counter",tokens:p,docs:{description:{component:i}}},render:r=>({components:{BadgeCounter:t},setup(){return{args:r}},template:`
      <BadgeCounter v-bind="$props">
        <slot></slot>
      </BadgeCounter>
    `})},e=a(l,{args:{slot:"42"}});var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`createStory(meta, {
  args: {
    slot: '42'
  }
})`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,l as default};
