/*! For license information please see BreadcrumbNavAlternate-stories.e439f6eb.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_css=self.webpackChunk_utrecht_storybook_css||[]).push([[3818],{"./src/BreadcrumbNavAlternate.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Arrows:()=>Arrows,ArrowsDisabledCurrent:()=>ArrowsDisabledCurrent,Current:()=>Current,Default:()=>Default,Disabled:()=>Disabled,DisabledCurrent:()=>DisabledCurrent,Home:()=>Home,Icons:()=>Icons,LineWrap:()=>LineWrap,ManyLinks:()=>ManyLinks,Rel:()=>Rel,RightToLeft:()=>RightToLeft,RightToLeftSeparator:()=>RightToLeftSeparator,SeparatorChar:()=>SeparatorChar,SeparatorIcon:()=>SeparatorIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BreadcrumbNavAlternate_stories});var READMEraw=__webpack_require__("../../components/breadcrumb-nav/README.md?raw"),_relraw=__webpack_require__("../../components/breadcrumb-nav/_rel.md?raw"),_rtl_separatorraw=__webpack_require__("../../components/breadcrumb-nav/_rtl-separator.md?raw"),tokens=__webpack_require__("../../components/breadcrumb-nav/tokens.json"),dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),index_esm=__webpack_require__("../web-component-library-react/dist/index.esm.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),dist_index_esm=__webpack_require__("../component-library-react/dist/index.esm.js"),clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const useMicrodataItem=({prop,type})=>({itemScope:!0,itemType:type,itemProp:prop}),useMicrodataProp=prop=>({itemProp:prop}),BreadcrumbNav=(0,react.forwardRef)((({appearance,children,className,label,...restProps},ref)=>{const headingId=label?(0,react.useId)():void 0;return(0,jsx_runtime.jsx)("nav",{...restProps,ref,className:(0,clsx_m.Z)("utrecht-breadcrumb-nav",{"utrecht-breadcrumb-nav--arrows":"arrows"===appearance},className),"aria-labelledby":headingId,children:(0,jsx_runtime.jsxs)("p",{className:"utrecht-breadcrumb-nav__list utrecht-breadcrumb-nav__list--html-p",...useMicrodataItem({type:"https://schema.org/BreadcrumbList"}),children:[label&&(0,jsx_runtime.jsxs)("span",{id:headingId,className:"utrecht-breadcrumb-nav__heading","aria-hidden":"true",children:[label," "]}),children]})})}));BreadcrumbNav.displayName="BreadcrumbNav";const BreadcrumbNavSeparator=(0,react.forwardRef)((({className,children,...restProps},ref)=>(0,jsx_runtime.jsx)("span",{className:(0,clsx_m.Z)("utrecht-breadcrumb-nav__separator","utrecht-breadcrumb-nav__separator--html-li",className),ref,...restProps,children})));BreadcrumbNavSeparator.displayName="BreadcrumbNavSeparator";const BreadcrumbNavLink=(0,react.forwardRef)((({children,disabled,current,href,index,rel,role,Link=dist_index_esm.rU,className,...restProps},ref)=>{const LinkComponent=Link||Link;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[" ",(0,jsx_runtime.jsxs)(LinkComponent,{className:(0,clsx_m.Z)("utrecht-breadcrumb-nav__link",className,{"utrecht-breadcrumb-nav__link--current":current,"utrecht-breadcrumb-nav__link--disabled":disabled}),href:disabled?void 0:href,rel,role:role||(disabled?"link":void 0),"aria-current":current&&"page","aria-disabled":disabled?"true":void 0,...useMicrodataProp("item"),...restProps,ref,children:[(0,jsx_runtime.jsx)("span",{className:"utrecht-breadcrumb-nav__text",...useMicrodataProp("name"),children}),"number"==typeof index?(0,jsx_runtime.jsx)("meta",{...useMicrodataProp("position"),content:String(index+1)}):null]})]})}));BreadcrumbNavLink.displayName="BreadcrumbNavLink";try{BreadcrumbNav.displayName="BreadcrumbNav",BreadcrumbNav.__docgenInfo={description:"This file provides an alternative implementation of the breadcrumb navigation component,\nwith alternative markup. The default React breadcrumb navigation is preferred.\n\nThis file exist to test that the CSS is flexible and supports various markup approaches.",displayName:"BreadcrumbNav",props:{appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode | ReactNode[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/BreadcrumbNav.tsx#BreadcrumbNav"]={docgenInfo:BreadcrumbNav.__docgenInfo,name:"BreadcrumbNav",path:"src/BreadcrumbNav.tsx#BreadcrumbNav"})}catch(__react_docgen_typescript_loader_error){}const BreadcrumbNavAlternate_stories={title:"CSS Component/Breadcrumb navigation/Alternate markup",id:"css-breadcrumb-nav--html-p",component:BreadcrumbNav,args:{},argTypes:{appearance:{description:"Appearance",control:{type:"select"},options:["","arrows"]}},parameters:{tokensPrefix:"css-breadcrumb-nav",status:"IN DEVELOPMENT",tokens:dist,tokensDefinition:tokens,docs:{description:{component:READMEraw}}}},Default={args:{label:"Kruimelpad:",children:[(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/",rel:"home",index:0,children:"Home"}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/",index:1,children:"Wonen en leven"}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/b/",rel:"up",index:2,children:"Afval"})]},parameters:{status:{type:"EXPERIMENTAL"}}},Arrows={args:{appearance:"arrows",label:"Kruimelpad:",children:[(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/",rel:"home",index:0,children:"Home"}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/",index:1,children:"Wonen en leven"}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/b/",rel:"up",index:2,children:"Afval"})]},name:"Arrows",parameters:{status:{type:"EXPERIMENTAL"}}},ArrowsDisabledCurrent={args:{appearance:"arrows",label:"Kruimelpad:",children:[(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/",rel:"home",index:0,children:"Home"}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/",index:1,children:"Wonen en leven"}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/b/",rel:"up",index:2,children:"Afval"}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/b/c/",index:3,current:!0,disabled:!0,children:"Kliko"})]},name:"Arrows: current link is disabled",parameters:{status:{type:"EXPERIMENTAL"}}},Current={args:{label:"Kruimelpad:",children:[(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/",rel:"home",index:0,children:"Home"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:(0,jsx_runtime.jsx)(index_esm.IEm,{})}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/",index:1,children:"Wonen en leven"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:(0,jsx_runtime.jsx)(index_esm.IEm,{})}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/b/",current:!0,index:2,children:"Afval"})]},name:"Current page",parameters:{status:{type:"EXPERIMENTAL"}}},Disabled={args:{label:"Kruimelpad:",children:[(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/",rel:"home",index:0,children:"Home"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:(0,jsx_runtime.jsx)(index_esm.IEm,{})}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/",index:1,children:"Wonen en leven"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:(0,jsx_runtime.jsx)(index_esm.IEm,{})}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/b/",disabled:!0,index:2,children:"Afval"})]},name:"Disabled link",parameters:{status:{type:"EXPERIMENTAL"}}},DisabledCurrent={args:{label:"Kruimelpad:",children:[(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/",rel:"home",index:0,children:"Home"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:(0,jsx_runtime.jsx)(index_esm.IEm,{})}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/",index:1,children:"Wonen en leven"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:(0,jsx_runtime.jsx)(index_esm.IEm,{})}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/b/",current:!0,disabled:!0,index:2,children:"Afval"})]},name:"Current page link is disabled",parameters:{status:{type:"EXPERIMENTAL"}}},Home={args:{label:"Home only",children:[(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/",rel:"home",index:0,current:!0,disabled:!0,children:"Home"})]},parameters:{status:{type:"ALPHA"}}},Icons={args:{label:"Kruimelpad:",children:[(0,jsx_runtime.jsxs)(BreadcrumbNavLink,{href:"https://example.com/",rel:"home",index:0,children:[(0,jsx_runtime.jsx)(index_esm.ml,{}),"Home"]}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/",index:1,children:"Wonen en leven"}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/b/",rel:"up",index:2,children:"Afval"})]},parameters:{status:{type:"WORK IN PROGRESS"}}},SeparatorChar={args:{label:"Kruimelpad:",children:[(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/",rel:"home",index:0,children:"Home"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:"/"}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/",index:1,children:"Wonen en leven"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:"/"}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/b/",rel:"up",index:2,children:"Afval"})]},name:"Separator character",parameters:{status:{type:"EXPERIMENTAL"}}},SeparatorIcon={args:{label:"Kruimelpad:",children:[(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/",rel:"home",index:0,children:"Home"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:(0,jsx_runtime.jsx)(index_esm.IEm,{})}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/",index:1,children:"Wonen en leven"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:(0,jsx_runtime.jsx)(index_esm.IEm,{})}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/b/",rel:"up",index:2,children:"Afval"})]},name:"Separator icon",parameters:{status:{type:"EXPERIMENTAL"}}},Rel={args:{...Default.args,children:[(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/",rel:"home",index:0,children:"Home"}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/search",rel:"up",index:1,children:"Zoeken"}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/search?q=openingstijden+zwembad",rel:"first",index:2,children:"“openingstijden zwembad”"})]},parameters:{docs:{description:{story:_relraw}},status:{type:"EXPERIMENTAL"}}},RTLStoryDecorator=Story=>(0,jsx_runtime.jsx)("div",{lang:"ar",dir:"rtl",children:(0,jsx_runtime.jsx)(Story,{})});RTLStoryDecorator.displayName="RTLStoryDecorator";const RightToLeft={decorators:[RTLStoryDecorator],args:{children:[(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/",rel:"home",index:0,children:"الصفحة الرئيسية"}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/",index:1,children:"المستوى 1"}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/b/",index:2,children:"المستوي 2"}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/b/c/",rel:"up",index:3,children:"المستوي 3"})]},name:"Right-to-left",parameters:{status:{type:"EXPERIMENTAL"}}},RightToLeftSeparator={decorators:[RTLStoryDecorator],args:{children:[(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/",rel:"home",index:0,children:"الصفحة الرئيسية"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:(0,jsx_runtime.jsx)(index_esm.Qkd,{})}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/",index:1,children:"المستوى 1"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:(0,jsx_runtime.jsx)(index_esm.Qkd,{})}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/b/",index:2,children:"المستوي 2"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:(0,jsx_runtime.jsx)(index_esm.Qkd,{})}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/a/b/c/",rel:"up",index:3,children:"المستوي 3"})]},name:"Right-to-left separator",parameters:{docs:{description:{story:_rtl_separatorraw}},status:{type:"EXPERIMENTAL"}}},ManyLinks={args:{children:[(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/",rel:"home",index:0,children:"Home"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:(0,jsx_runtime.jsx)(index_esm.IEm,{})}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/wonen-en-level/",index:1,children:"Wonen en leven"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:(0,jsx_runtime.jsx)(index_esm.IEm,{})}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/wonen-en-level/parken-en-groen/",index:2,children:"Parken en groen"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:(0,jsx_runtime.jsx)(index_esm.IEm,{})}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/wonen-en-level/parken-en-groen/dieren/",index:3,children:"Dieren"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:(0,jsx_runtime.jsx)(index_esm.IEm,{})}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/wonen-en-level/parken-en-groen/dieren/wilde-dieren-helpen/",index:4,children:"Wilde dieren helpen"}),(0,jsx_runtime.jsx)(BreadcrumbNavSeparator,{children:(0,jsx_runtime.jsx)(index_esm.IEm,{})}),(0,jsx_runtime.jsx)(BreadcrumbNavLink,{href:"https://example.com/wonen-en-level/parken-en-groen/dieren/wilde-dieren-helpen/diervriendelijk-bouwen/",rel:"up",index:5,children:"Diervriendelijk bouwen"})]},name:"Many links"},LineWrap={args:{...ManyLinks.args},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{maxInlineSize:"320px"},children:Story()})],name:"Line wrap"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: \'Kruimelpad:\',\n    children: [<BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>\n        Home\n      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/a/" index={1}>\n        Wonen en leven\n      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/a/b/" rel="up" index={2}>\n        Afval\n      </BreadcrumbNavLink>]\n  },\n  parameters: {\n    status: {\n      type: \'EXPERIMENTAL\'\n    }\n  }\n}',...Default.parameters?.docs?.source}}},Arrows.parameters={...Arrows.parameters,docs:{...Arrows.parameters?.docs,source:{originalSource:'{\n  args: {\n    appearance: \'arrows\',\n    label: \'Kruimelpad:\',\n    children: [<BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>\n        Home\n      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/a/" index={1}>\n        Wonen en leven\n      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/a/b/" rel="up" index={2}>\n        Afval\n      </BreadcrumbNavLink>]\n  },\n  name: \'Arrows\',\n  parameters: {\n    status: {\n      type: \'EXPERIMENTAL\'\n    }\n  }\n}',...Arrows.parameters?.docs?.source}}},ArrowsDisabledCurrent.parameters={...ArrowsDisabledCurrent.parameters,docs:{...ArrowsDisabledCurrent.parameters?.docs,source:{originalSource:'{\n  args: {\n    appearance: \'arrows\',\n    label: \'Kruimelpad:\',\n    children: [<BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>\n        Home\n      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/a/" index={1}>\n        Wonen en leven\n      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/a/b/" rel="up" index={2}>\n        Afval\n      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/a/b/c/" index={3} current disabled>\n        Kliko\n      </BreadcrumbNavLink>]\n  },\n  name: \'Arrows: current link is disabled\',\n  parameters: {\n    status: {\n      type: \'EXPERIMENTAL\'\n    }\n  }\n}',...ArrowsDisabledCurrent.parameters?.docs?.source}}},Current.parameters={...Current.parameters,docs:{...Current.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: \'Kruimelpad:\',\n    children: [<BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>\n        Home\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>\n        <UtrechtIconChevronRight />\n      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/a/" index={1}>\n        Wonen en leven\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>\n        <UtrechtIconChevronRight />\n      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/a/b/" current index={2}>\n        Afval\n      </BreadcrumbNavLink>]\n  },\n  name: \'Current page\',\n  parameters: {\n    status: {\n      type: \'EXPERIMENTAL\'\n    }\n  }\n}',...Current.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: \'Kruimelpad:\',\n    children: [<BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>\n        Home\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>\n        <UtrechtIconChevronRight />\n      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/a/" index={1}>\n        Wonen en leven\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>\n        <UtrechtIconChevronRight />\n      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/a/b/" disabled index={2}>\n        Afval\n      </BreadcrumbNavLink>]\n  },\n  name: \'Disabled link\',\n  parameters: {\n    status: {\n      type: \'EXPERIMENTAL\'\n    }\n  }\n}',...Disabled.parameters?.docs?.source}}},DisabledCurrent.parameters={...DisabledCurrent.parameters,docs:{...DisabledCurrent.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: \'Kruimelpad:\',\n    children: [<BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>\n        Home\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>\n        <UtrechtIconChevronRight />\n      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/a/" index={1}>\n        Wonen en leven\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>\n        <UtrechtIconChevronRight />\n      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/a/b/" current disabled index={2}>\n        Afval\n      </BreadcrumbNavLink>]\n  },\n  name: \'Current page link is disabled\',\n  parameters: {\n    status: {\n      type: \'EXPERIMENTAL\'\n    }\n  }\n}',...DisabledCurrent.parameters?.docs?.source}}},Home.parameters={...Home.parameters,docs:{...Home.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Home only',\n    children: [<BreadcrumbNavLink href=\"https://example.com/\" rel=\"home\" index={0} current disabled>\n        Home\n      </BreadcrumbNavLink>]\n  },\n  parameters: {\n    status: {\n      type: 'ALPHA'\n    }\n  }\n}",...Home.parameters?.docs?.source}}},Icons.parameters={...Icons.parameters,docs:{...Icons.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: \'Kruimelpad:\',\n    children: [<BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>\n        <UtrechtIconDakloos />\n        Home\n      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/a/" index={1}>\n        Wonen en leven\n      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/a/b/" rel="up" index={2}>\n        Afval\n      </BreadcrumbNavLink>]\n  },\n  parameters: {\n    status: {\n      type: \'WORK IN PROGRESS\'\n    }\n  }\n}',...Icons.parameters?.docs?.source}}},SeparatorChar.parameters={...SeparatorChar.parameters,docs:{...SeparatorChar.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: \'Kruimelpad:\',\n    children: [<BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>\n        Home\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>/</BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/a/" index={1}>\n        Wonen en leven\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>/</BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/a/b/" rel="up" index={2}>\n        Afval\n      </BreadcrumbNavLink>]\n  },\n  name: \'Separator character\',\n  parameters: {\n    status: {\n      type: \'EXPERIMENTAL\'\n    }\n  }\n}',...SeparatorChar.parameters?.docs?.source}}},SeparatorIcon.parameters={...SeparatorIcon.parameters,docs:{...SeparatorIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: \'Kruimelpad:\',\n    children: [<BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>\n        Home\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>\n        <UtrechtIconChevronRight />\n      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/a/" index={1}>\n        Wonen en leven\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>\n        <UtrechtIconChevronRight />\n      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/a/b/" rel="up" index={2}>\n        Afval\n      </BreadcrumbNavLink>]\n  },\n  name: \'Separator icon\',\n  parameters: {\n    status: {\n      type: \'EXPERIMENTAL\'\n    }\n  }\n}',...SeparatorIcon.parameters?.docs?.source}}},Rel.parameters={...Rel.parameters,docs:{...Rel.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    children: [<BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>\n        Home\n      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/search" rel="up" index={1}>\n        Zoeken\n      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/search?q=openingstijden+zwembad" rel="first" index={2}>\n        “openingstijden zwembad”\n      </BreadcrumbNavLink>]\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: relDocs\n      }\n    },\n    status: {\n      type: \'EXPERIMENTAL\'\n    }\n  }\n}',...Rel.parameters?.docs?.source}}},RightToLeft.parameters={...RightToLeft.parameters,docs:{...RightToLeft.parameters?.docs,source:{originalSource:'{\n  decorators: [RTLStoryDecorator],\n  args: {\n    children: [<BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>\n        الصفحة الرئيسية\n      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/a/" index={1}>\n        المستوى 1\n      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/a/b/" index={2}>\n        المستوي 2\n      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/a/b/c/" rel="up" index={3}>\n        المستوي 3\n      </BreadcrumbNavLink>]\n  },\n  name: \'Right-to-left\',\n  parameters: {\n    status: {\n      type: \'EXPERIMENTAL\'\n    }\n  }\n}',...RightToLeft.parameters?.docs?.source}}},RightToLeftSeparator.parameters={...RightToLeftSeparator.parameters,docs:{...RightToLeftSeparator.parameters?.docs,source:{originalSource:'{\n  decorators: [RTLStoryDecorator],\n  args: {\n    children: [<BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>\n        الصفحة الرئيسية\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>\n        <UtrechtIconChevronLeft />\n      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/a/" index={1}>\n        المستوى 1\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>\n        <UtrechtIconChevronLeft />\n      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/a/b/" index={2}>\n        المستوي 2\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>\n        <UtrechtIconChevronLeft />\n      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/a/b/c/" rel="up" index={3}>\n        المستوي 3\n      </BreadcrumbNavLink>]\n  },\n  name: \'Right-to-left separator\',\n  parameters: {\n    docs: {\n      description: {\n        story: rtlSeparatorDocs\n      }\n    },\n    status: {\n      type: \'EXPERIMENTAL\'\n    }\n  }\n}',...RightToLeftSeparator.parameters?.docs?.source}}},ManyLinks.parameters={...ManyLinks.parameters,docs:{...ManyLinks.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: [<BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>\n        Home\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>\n        <UtrechtIconChevronRight />\n      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/wonen-en-level/" index={1}>\n        Wonen en leven\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>\n        <UtrechtIconChevronRight />\n      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/wonen-en-level/parken-en-groen/" index={2}>\n        Parken en groen\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>\n        <UtrechtIconChevronRight />\n      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/wonen-en-level/parken-en-groen/dieren/" index={3}>\n        Dieren\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>\n        <UtrechtIconChevronRight />\n      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/wonen-en-level/parken-en-groen/dieren/wilde-dieren-helpen/" index={4}>\n        Wilde dieren helpen\n      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>\n        <UtrechtIconChevronRight />\n      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="https://example.com/wonen-en-level/parken-en-groen/dieren/wilde-dieren-helpen/diervriendelijk-bouwen/" rel="up" index={5}>\n        Diervriendelijk bouwen\n      </BreadcrumbNavLink>]\n  },\n  name: \'Many links\'\n}',...ManyLinks.parameters?.docs?.source}}},LineWrap.parameters={...LineWrap.parameters,docs:{...LineWrap.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...ManyLinks.args\n  },\n  decorators: [Story => <div style={{\n    maxInlineSize: '320px'\n  }}>{Story()}</div>],\n  name: 'Line wrap'\n}",...LineWrap.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Arrows","ArrowsDisabledCurrent","Current","Disabled","DisabledCurrent","Home","Icons","SeparatorChar","SeparatorIcon","Rel","RightToLeft","RightToLeftSeparator","ManyLinks","LineWrap"]},"../../components/breadcrumb-nav/README.md?raw":module=>{module.exports='\x3c!-- @license CC0-1.0 --\x3e\n\n# Breadcrumb navigation\n\nBreadcrumb navigation, ook wel "kruimelpad" genoemd, gebruik je als de pagina\'s van je site georganiseerd zijn in een boomstructuur. Als je site teveel pagina\'s heeft om naar elke pagina een link te maken op de homepage bijvoorbeeld. De eerste link is altijd naar de homepage.\n\nHet kruimelpad moet alleen links bevatten naar hogere niveau\'s of eerdere stappen. De pagina zelf is niet onderdeel van het kruimelpad. Gebruik geen breadcrumb navigation op de homepage, want die heeft geen hogere niveaus.\n\n## HTML\n\nGebruik een `nav` element, want het is handig dat het kruimelpad een _navigation landmark_ is. Het kruimelpad is zelden de enige _navigation landmark_ op de pagina en landmarks moeten wel duidelijk te onderscheiden zijn. Gebruik daarom `aria-label` of `aria-labelledby` met een duidelijk label.\n\nGebruik een heading element met `aria-labelledby`, zodat het label zichtbaar is wanneer de CSS niet geladen kan worden. Zonder stijl is het kruimelpad niet duidelijk herkenbaar, dan maakt de heading dat duidelijk.\n\nDe _breadcrumb navigation_ is niet een onderdeel dat opgezocht wordt via heading navigatie van een _screen reader_. Verberg de heading met `aria-hidden="true"` zodat de headings uit de main content sneller te vinden zijn.\n\nBijvoorbeeld:\n\n```html\n<nav aria-labelledby="breadcrumb-heading">\n  <h2 id="breadcrumb-heading" aria-hidden="true">Kruimelpad</h2>\n  ...kruimelpad...\n</nav>\n```\n\nGebruik `rel` om duidelijk te maken wat het doel is van de links. ([WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)). Gebruik [`rel="home"`](https://microformats.org/wiki/rel-home) voor de link naar de homepage (deze relatie is nog slechts een voorstel). Gebruik [`rel="up"`](https://microformats.org/wiki/rel-up) voor pagina\'s die één niveau hoger zijn in een hierarchie. Gebruik `rel="first"` voor de eerste pagina in een serie.\n\n## Hoe het niet moet\n\n### Navigatie in de verkeerde _landmark_\n\nPlaats het `<nav>` HTML-element met de breadcrumb navigation niet binnen de _main page content_, ofwel het `<main>` HTML-element.\n\nNiet:\n\n```html\n<main>\n  <nav class="breadcrumbs">\n    <a href="/">Home</a> /\n    <a href="/contact" aria-current="page">Contact</a>\n  </nav>\n  <h1>Contact</h1>\n</main>\n```\n\nWel:\n\n```html\n<nav class="breadcrumbs">\n  <a href="/">Home</a> /\n  <a href="/contact" aria-current="page">Contact</a>\n</nav>\n<main>\n  <h1>Contact</h1>\n</main>\n```\n\n## Related info\n\n- [Google Search Central - Advanced SEO - Breadcrumb](https://developers.google.com/search/docs/data-types/breadcrumb)\n- [Homepage Links Remain a Necessity — Nielsen Norman Group](https://www.nngroup.com/articles/homepage-links/)\n- [Breadcrumbs — Adobe Spectrum Design System](https://spectrum.adobe.com/page/breadcrumbs/)\n- [Exploring Markup for Breadcrumbs — Chris Coyier](https://css-tricks.com/markup-for-breadcrumbs/)\n\n## Relevante WCAG regels\n\n- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): gebruik het `<nav>` element voor de `navigation` landmark role.\n- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)\n- [WCAG eis 2.4.5](https://www.w3.org/TR/WCAG21/#multiple-ways)\n- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de `navigation` landmark maakt duidelijk dat het om het broodkruimelpad gaat. Zie ook: [Using `aria-label` to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5).\n- [WCAG eis 2.4.8](https://www.w3.org/TR/WCAG21/#location):\n  - gebruik `<a aria-current="location">` om de huidige pagina te markeren\n  - een kruimelpad is een manier om duidelijk te maken waar de gebruiker zich bevind in de context van een site met meerdere pagina\'s.\n'},"../../components/breadcrumb-nav/_rel.md?raw":module=>{module.exports='\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nStel je voor: je hebt _breacrumb navigation_ op de derde pagina met zoekresultaten voor “openingstijden zwembad”.\nDe huidige URL is `https://example.com/search?q=openingstijden+zwembad?page=3`.\nDan kan het handig zijn om terug te gaan naar de eerste pagina van de zoekresultaten.\nHet kan ook handig zijn om terug te gaan naar de zoekpagina, om andere zoektermen te kiezen.\n\n- **Home**: `rel="home"`\n- **Zoeken**: `rel="up"`\n- **Pagina 1** van “openingstijden zwembad”: `rel="first"`\n'},"../../components/breadcrumb-nav/_rtl-separator.md?raw":module=>{module.exports="\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nIn _right-to-left_ pagina's wijzen de iconen van pijltjes ook in de tekstrichting, dus ook van rechts naar links. Arrow of chevron iconen worden dan gespiegeld ten opzichte van _left-to-right_ pagina's.\n"},"../../components/breadcrumb-nav/tokens.json":module=>{module.exports=JSON.parse('{"utrecht":{"breadcrumb-nav":{"min-block-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"font-family":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true}}},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"text-transform":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"inherit | none | uppercase","inherits":true}}},"item":{"padding-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}},"link":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"focus":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"text-decoration":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"inherit | none | underline","inherits":true}}}},"hover":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"text-decoration":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"inherit | none | underline","inherits":true}}}},"current":{"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}}}},"disabled":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}},"separator":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"icon":{"size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}}},"arrows":{"link":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"focus":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}}}}}}')}}]);