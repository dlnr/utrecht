/*! For license information please see button-css-stories-description-stories-mdx.71f5df9b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[5589],{"../../components/button/css/stories/description.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonWithDescription:()=>ButtonWithDescription,__namedExportsOrder:()=>__namedExportsOrder,default:()=>description_stories,descriptionWithDisclamer:()=>descriptionWithDisclamer,descriptionWithErrorMessage:()=>descriptionWithErrorMessage,descriptionWithValidationMessage:()=>descriptionWithValidationMessage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.4_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");const _description_namespaceObject='\x3c!-- @license CC0-1.0 --\x3e\n\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nDe beschrijving bij een button moet in de HTML vóór de button komen ([WCAG eis 1.3.2](https://www.w3.org/TR/WCAG21/#meaningful-sequence)), wanneer het informatie is die de gebruiker moet weten vóór het activeren van de button. De visuele volgorde mag met CSS omgedraaid worden, bijvoorbeeld met flexbox `order`. Feedback die veroorzaakt is doordat de gebruiker de button activeert kun je juist het beste ná de button plaatsen.\n\nDe beschrijving moet gekoppeld worden aan de button met `aria-describedby`. Gebruik een element zonder interactieve onderdelen als beschrijving. Bijvoorbeeld: als de beschrijving in een _alert_ component staat*, koppel dan aan het \\_message* gedeelte, zodat een eventuele dismiss button niet de beschrijving wordt van een andere button.\n\nWanneer een fout optreed bij het activeren van de button, gebruik zowel een `role="alert"` als `aria-describedby`. De foutmelding wordt dan zo snel mogelijk aangekondigd door schermvoorlezers, en de foutmelding wordt ook aangekondigd wanneer de button focus krijgt.\n\nJe kunt voor de beschrijving de _form field description_ component gebruiken.\n\nZie ook:\n\n- [Using `aria-describedby` property to provide more detailed information about the button — Techniques for WCAG 2.1](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1#example-2-using-aria-describedby-property-to-provide-more-detailed-information-about-the-button)\n';var story_template=__webpack_require__("../../components/form-field-description/css/story-template.jsx"),css_story_template=__webpack_require__("../../components/paragraph/css/story-template.jsx"),button_css_story_template=__webpack_require__("../../components/button/css/story-template.jsx"),jsx_runtime=(__webpack_require__("../../components/button/css/index.scss"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const ButtonWithDescription=({id,description,small,status,alertType,...restProps})=>{const _components=Object.assign({div:"div"},(0,lib.ah)()),descriptionId=description?`${id}-description`:id;return(0,jsx_runtime.jsxs)(_components.div,{children:[!(!description||alertType)&&(0,jsx_runtime.jsx)(story_template.ue,{id:descriptionId,status,children:(0,jsx_runtime.jsx)(css_story_template.nv,{small,children:description})}),(0,jsx_runtime.jsx)(button_css_story_template.hE,{children:(0,jsx_runtime.jsx)(button_css_story_template.zx,{...restProps,"aria-describedby":descriptionId})}),!(!description||!alertType)&&(0,jsx_runtime.jsx)(button_css_story_template.bZ,{type:alertType,children:(0,jsx_runtime.jsx)(css_story_template.nv,{id:descriptionId,children:description})})]})};function _createMdxContent(props){const _components=Object.assign({div:"div",h1:"h1",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{id:"css-button--description",title:"CSS Component/Button",component:ButtonWithDescription,argTypes:button_css_story_template.PG,args:button_css_story_template._O,decorators:[Story=>(0,jsx_runtime.jsx)(_components.div,{style:{"--utrecht-space-around":1},children:Story()})],parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"button-with-description",children:"Button with description"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"description-with-disclaimer",children:"Description with disclaimer"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{children:_description_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Description with disclamer",args:{id:"4f426303-538c-42fe-9eaa-04c4175bde17",appearance:"primary-action-button",textContent:"Doorgaan naar iDEAL",type:"submit",small:!0,description:"Als je op ‘Doorgaan naar iDEAL’ klikt, ga je ermee akkoord dat de verkoopvoorwaarden gelden voor je bestelling en we een factuur naar je e-mailadres sturen."},children:ButtonWithDescription.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"description-with-validation-message",children:"Description with validation message"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Description with validation message",args:{id:"b4f338f9-cc8a-4d20-bbd2-542439d124fd",appearance:"primary-action-button",textContent:"Verzenden",type:"submit",status:"invalid",description:"Vul eerst de verplichten velden in: Naam en E-mailadres."},children:ButtonWithDescription.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"description-with-error-message",children:"Description with error message"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Description with error message",args:{id:"64cd1500-a938-49b0-9644-de410b8a1d02",appearance:"primary-action-button",textContent:"Opslaan en later verder gaan",type:"submit",alertType:"error",description:"Opslaan is niet gelukt omdat geen contact gemaakt kan worden met de server. Wacht even en probeer het nog een keer."},children:ButtonWithDescription.bind({})})})]})}const descriptionWithDisclamer=ButtonWithDescription.bind({});descriptionWithDisclamer.storyName="Description with disclamer",descriptionWithDisclamer.args={id:"4f426303-538c-42fe-9eaa-04c4175bde17",appearance:"primary-action-button",textContent:"Doorgaan naar iDEAL",type:"submit",small:!0,description:"Als je op ‘Doorgaan naar iDEAL’ klikt, ga je ermee akkoord dat de verkoopvoorwaarden gelden voor je bestelling en we een factuur naar je e-mailadres sturen."},descriptionWithDisclamer.parameters={storySource:{source:"({\n  id,\n  description,\n  small,\n  status,\n  alertType,\n  ...restProps\n}) => {\n  const descriptionId = description ? `${id}-description` : id;\n  return <div>\n      {!!(description && !alertType) && <FormFieldDescription id={descriptionId} status={status}>\n          <Paragraph small={small}>{description}</Paragraph>\n        </FormFieldDescription>}\n      <ButtonGroup>\n        <Button {...restProps} aria-describedby={descriptionId} />\n      </ButtonGroup>\n      {description && alertType ? <Alert type={alertType}>\n          <Paragraph id={descriptionId}>{description}</Paragraph>\n        </Alert> : false}\n    </div>;\n}"}};const descriptionWithValidationMessage=ButtonWithDescription.bind({});descriptionWithValidationMessage.storyName="Description with validation message",descriptionWithValidationMessage.args={id:"b4f338f9-cc8a-4d20-bbd2-542439d124fd",appearance:"primary-action-button",textContent:"Verzenden",type:"submit",status:"invalid",description:"Vul eerst de verplichten velden in: Naam en E-mailadres."},descriptionWithValidationMessage.parameters={storySource:{source:"({\n  id,\n  description,\n  small,\n  status,\n  alertType,\n  ...restProps\n}) => {\n  const descriptionId = description ? `${id}-description` : id;\n  return <div>\n      {!!(description && !alertType) && <FormFieldDescription id={descriptionId} status={status}>\n          <Paragraph small={small}>{description}</Paragraph>\n        </FormFieldDescription>}\n      <ButtonGroup>\n        <Button {...restProps} aria-describedby={descriptionId} />\n      </ButtonGroup>\n      {description && alertType ? <Alert type={alertType}>\n          <Paragraph id={descriptionId}>{description}</Paragraph>\n        </Alert> : false}\n    </div>;\n}"}};const descriptionWithErrorMessage=ButtonWithDescription.bind({});descriptionWithErrorMessage.storyName="Description with error message",descriptionWithErrorMessage.args={id:"64cd1500-a938-49b0-9644-de410b8a1d02",appearance:"primary-action-button",textContent:"Opslaan en later verder gaan",type:"submit",alertType:"error",description:"Opslaan is niet gelukt omdat geen contact gemaakt kan worden met de server. Wacht even en probeer het nog een keer."},descriptionWithErrorMessage.parameters={storySource:{source:"({\n  id,\n  description,\n  small,\n  status,\n  alertType,\n  ...restProps\n}) => {\n  const descriptionId = description ? `${id}-description` : id;\n  return <div>\n      {!!(description && !alertType) && <FormFieldDescription id={descriptionId} status={status}>\n          <Paragraph small={small}>{description}</Paragraph>\n        </FormFieldDescription>}\n      <ButtonGroup>\n        <Button {...restProps} aria-describedby={descriptionId} />\n      </ButtonGroup>\n      {description && alertType ? <Alert type={alertType}>\n          <Paragraph id={descriptionId}>{description}</Paragraph>\n        </Alert> : false}\n    </div>;\n}"}};const componentMeta={title:"CSS Component/Button",id:"css-button--description",parameters:{status:{type:"WORK IN PROGRESS"}},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{"--utrecht-space-around":1},children:Story()})],component:ButtonWithDescription,args:button_css_story_template._O,argTypes:button_css_story_template.PG,tags:["stories-mdx"],includeStories:["descriptionWithDisclamer","descriptionWithValidationMessage","descriptionWithErrorMessage"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const description_stories=componentMeta,__namedExportsOrder=["ButtonWithDescription","descriptionWithDisclamer","descriptionWithValidationMessage","descriptionWithErrorMessage"]},"../../components/form-field-description/css/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ue:()=>FormFieldDescription});var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),html_react_parser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/html-react-parser@3.0.16_react@18.2.0/node_modules/html-react-parser/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const defaultArgs_id=null,defaultArgs_innerHTML="",defaultArgs_status="",defaultArgs_distanced=!1,FormFieldDescription=({id=defaultArgs_id,innerHTML=defaultArgs_innerHTML,status=defaultArgs_status,distanced=defaultArgs_distanced,className,children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{id,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("utrecht-form-field-description",distanced&&"utrecht-form-field-description--distanced","invalid"===status&&"utrecht-form-field-description--invalid","valid"===status&&"utrecht-form-field-description--valid","warning"===status&&"utrecht-form-field-description--warning",className),children:[children,(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(innerHTML)]});FormFieldDescription.displayName="FormFieldDescription";FormFieldDescription.__docgenInfo={description:"",methods:[],displayName:"FormFieldDescription",props:{id:{defaultValue:{value:"null",computed:!1},required:!1},innerHTML:{defaultValue:{value:"''",computed:!1},required:!1},status:{defaultValue:{value:"''",computed:!1},required:!1},distanced:{defaultValue:{value:"false",computed:!1},required:!1}}}},"../../components/paragraph/css/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nv:()=>Paragraph});var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),html_react_parser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/html-react-parser@3.0.16_react@18.2.0/node_modules/html-react-parser/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const defaultArgs_distanced=!1,defaultArgs_lead=!1,defaultArgs_innerHTML="",defaultArgs_small=!1,Paragraph=({children,distanced=defaultArgs_distanced,innerHTML=defaultArgs_innerHTML,lead=defaultArgs_lead,small=defaultArgs_small,...restProps})=>{const content=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[children,(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(innerHTML)]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("utrecht-paragraph",{"utrecht-paragraph--distanced":distanced,"utrecht-paragraph--lead":lead,"utrecht-paragraph--small":small}),...restProps,children:lead?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b",{className:"utrecht-paragraph__b",children:content}):small?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("small",{className:"utrecht-paragraph__small",children:content}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:content})})};Paragraph.displayName="Paragraph";const Paragraphs=({items=[]})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:[items.map(((args,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Paragraph,{...args},index)))]});Paragraphs.displayName="Paragraphs";Paragraph.__docgenInfo={description:"",methods:[],displayName:"Paragraph",props:{distanced:{defaultValue:{value:"false",computed:!1},required:!1},innerHTML:{defaultValue:{value:"''",computed:!1},required:!1},lead:{defaultValue:{value:"false",computed:!1},required:!1},small:{defaultValue:{value:"false",computed:!1},required:!1}}},Paragraphs.__docgenInfo={description:"",methods:[],displayName:"Paragraphs",props:{items:{defaultValue:{value:"[]",computed:!1},required:!1}}}}}]);