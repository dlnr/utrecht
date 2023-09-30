import{a2 as J}from"./component-library-vue-7f29fc47.js";import{c as e}from"./util-4d47a83c.js";import"./vue.esm-bundler-759e87b8.js";import"./chunk-S4VUQJ4A-c9a2d9e7.js";import"./iframe-07504962.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-8bfd3a25.js";import"./index-356e4a49.js";const K=`<!-- @license CC0-1.0 -->

# Status badge
`,M={"badge-status":{"letter-spacing":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}}}},Q={utrecht:M},t={id:"vue-badge-status",title:"Vue.js Component/Status badge",component:J,tags:["autodocs"],argTypes:{textContent:{type:"string",table:{defaultValue:{summary:""}}},status:{type:"string",options:["neutral","danger","safe","invalid","valid","error","warning","success","inactive","active"],table:{defaultValue:{summary:""}}}},args:{},parameters:{status:{type:"ALPHA"},tokens:Q,tokenPrefix:"utrecht-badge-status",docs:{description:{component:K},source:{code:'<UtrechtBadgeStatus v-bind="$props"><slot></slot></UtrechtBadgeStatus>'}}}},a=e(t,{name:"Status badge",args:{textContent:"Neutral"}}),r=e(t,{name:"Neutral",args:{status:"neutral",textContent:"Neutral"}}),s=e(t,{name:"Danger",args:{status:"danger",textContent:"Danger"}}),n=e(t,{name:"Safe",args:{status:"safe",textContent:"Safe"}}),o=e(t,{name:"Invalid",args:{status:"invalid",textContent:"Invalid"}}),c=e(t,{name:"Valid",args:{status:"valid",textContent:"Valid"}}),i=e(t,{name:"Error",args:{status:"error",textContent:"Error"}}),m=e(t,{name:"Warning",args:{status:"warning",textContent:"Warning"}}),u=e(t,{name:"Success",args:{status:"success",textContent:"Success"}}),d=e(t,{name:"Active",args:{status:"active",textContent:"Active"}}),p=e(t,{name:"Inactive",args:{status:"inactive",textContent:"Inactive"}});var g,l,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`createStory(meta, {
  name: 'Status badge',
  args: {
    textContent: 'Neutral'
  }
})`,...(S=(l=a.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};var v,x,C;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`createStory(meta, {
  name: 'Neutral',
  args: {
    status: 'neutral',
    textContent: 'Neutral'
  }
})`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var y,f,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`createStory(meta, {
  name: 'Danger',
  args: {
    status: 'danger',
    textContent: 'Danger'
  }
})`,...(I=(f=s.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var b,h,V;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`createStory(meta, {
  name: 'Safe',
  args: {
    status: 'safe',
    textContent: 'Safe'
  }
})`,...(V=(h=n.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var A,D,N;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`createStory(meta, {
  name: 'Invalid',
  args: {
    status: 'invalid',
    textContent: 'Invalid'
  }
})`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var E,W,w;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`createStory(meta, {
  name: 'Valid',
  args: {
    status: 'valid',
    textContent: 'Valid'
  }
})`,...(w=(W=c.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var $,k,B;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`createStory(meta, {
  name: 'Error',
  args: {
    status: 'error',
    textContent: 'Error'
  }
})`,...(B=(k=i.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var P,U,_;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`createStory(meta, {
  name: 'Warning',
  args: {
    status: 'warning',
    textContent: 'Warning'
  }
})`,...(_=(U=m.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var j,H,L;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`createStory(meta, {
  name: 'Success',
  args: {
    status: 'success',
    textContent: 'Success'
  }
})`,...(L=(H=u.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var O,T,q;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`createStory(meta, {
  name: 'Active',
  args: {
    status: 'active',
    textContent: 'Active'
  }
})`,...(q=(T=d.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var z,F,G;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`createStory(meta, {
  name: 'Inactive',
  args: {
    status: 'inactive',
    textContent: 'Inactive'
  }
})`,...(G=(F=p.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const oe=["Default","Neutral","Danger","Safe","Invalid","Valid","Error","Warning","Success","Active","Inactive"];export{d as Active,s as Danger,a as Default,i as Error,p as Inactive,o as Invalid,r as Neutral,n as Safe,u as Success,c as Valid,m as Warning,oe as __namedExportsOrder,t as default};
//# sourceMappingURL=BadgeStatus.stories-3112da63.js.map
