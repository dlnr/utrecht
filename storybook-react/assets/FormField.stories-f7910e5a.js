import{a as u,j as t}from"./jsx-runtime-670450c2.js";import{s as i,T as f,P as r}from"./index-4ba24e52.js";import{t as g,d as b}from"./util-10016f4d.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const v='<!-- @license CC0-1.0 -->\n\n# Form field\n\nGebruik het _form field_ component om een alle onderdelen van een formulierveld in te verzamelen: het label, de _form control_, eventueel een extra beschrijving of de status en eventueel een validatiemelding of foutmelding.\n\nDe volgende componenten zijn vaak onderdeel van een _form field_:\n\n- _form label_ component\n- _form field description_ component met extra beschrijving\n- _form field description_ component met een validatiemelding\n- een form control component zoals bijvoorbeeld:\n  - _textbox_ component\n  - _textarea_ component\n  - _checkbox_ component\n  - _radio button_ component\n  - _form select_ component\n  - etcetera\n- _form field description_ component met een foutmelding\n- _form field description_ component status van component\n\n## HTML\n\nGebruik een element `<div>` element voor formuliervelden met één _form control_. Een formulierveld moet meerdere `<p>` elementen kunnen bevatten, gebruik daarom geen `<p>` element voor de form field. Je moet geen _landmark role_ gebruiken voor een formulierveld (dus geen `<section>`) element.\n\nVoor formuliervelden met meerdere _form controls_ mag je een `<fieldset>` element gebruiken, bijvoorbeeld voor: jaar, maand en dag. Voor CSS is het handig om dan nog steeds een `<div>` om de fieldset heen te hebben: `<div><fieldset>...</fieldset></div>`.\n\n## Gebruikte termen\n\n- `form` komt van `<form>` in HTML en `role="form"` in WAI-ARIA.\n- `field` komt van `<fieldset>` in HTML.\n- `invalid` komt van `aria-invalid` in WAI-ARIA.\n- `radio` komt van `<input type="radio">` in HTML.\n- `checkbox` komt van `<input type="checkbox">` in HTML.\n- `label` komt van `<label>` in HTML en `aria-labelledby` in WAI-ARIA.\n- `description` komt van `aria-describedby` in WAI-ARIA.\n\n## Relevante WCAG regels\n\n- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de tekst van het label moet duidelijk zijn\n- [WCAG eis 3.3.9](https://www.w3.org/TR/WCAG22/#redundant-entry): gebruik niet een formulierveld voor informatie die de gebruiker eerder al heeft ingevuld.\n  - Vraag gebruikers niet twee keer achter elkaar identieke gegevens in te vullen, bijvoorbeeld om typfouten te herkennen en daarmee fouten te voorkomen. Bied liever een mogelijkheid aan om de gegevens te controleren als laatste stap.\n  - Vul bestaande gegevens in als standaardwaarde wanneer je de gegevens al hebt maar je graag zeker wilt weken of de oude gegevens nog juist zijn.\n',h={"form-field":{"margin-block-start":{css:{syntax:"<length>",inherits:!0}},"margin-block-end":{css:{syntax:"<length>",inherits:!0}},"max-inline-size":{css:{syntax:"<length>",inherits:!0}},invalid:{"border-inline-start-color":{color:{css:{syntax:"<color>",inherits:!0}}},"border-inline-start-width":{css:{syntax:"<length>",inherits:!0}},"padding-inline-start":{css:{syntax:"<length>",inherits:!0}}},label:{"margin-block-end":{css:{syntax:"<length>",inherits:!0}}}}},k={utrecht:h},_={title:"React Component/Form Field/Textbox",id:"react-form-field",component:i,argTypes:{disabled:{description:"Disabled",control:"boolean",table:{category:"Component",defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{category:"Component",defaultValue:{summary:!1}}},type:{name:"type",control:{type:"select"},options:["","checkbox","radio","text"],table:{category:"Component",defaultValue:{summary:!1}}}},tags:["autodocs"],parameters:{tokensPrefix:"utrecht-form-field",tokens:g,tokensDefinition:k,docs:{description:{component:v}}}},y=l=>{const{description:s,invalid:d,label:m,type:c,input:p}=l;return u(i,{invalid:d,type:c,children:[t(r,{className:"utrecht-form-field__label",children:m}),t(r,{className:"utrecht-form-field__input",children:p}),s]})},e=y.bind({});e.args={description:"Maximaal 140 karakters",disabled:!1,id:"3a43bbe9-635c-46c2-86cd-b0aa63855598",invalid:!0,invalidDescription:"Fout: het veld is nog leeg. Vul een bericht in.",label:"Tweet",name:"message",value:"",required:!0,type:"text",Input:f};const n=b(_);var o;e.parameters={...e.parameters,storySource:{source:`args => {
  const {
    description,
    invalid,
    label,
    type,
    input
  } = args;
  return <FormField invalid={invalid} type={type}>
      <Paragraph className="utrecht-form-field__label">{label}</Paragraph>
      <Paragraph className="utrecht-form-field__input">{input}</Paragraph>
      {description}
    </FormField>;
}`,...(o=e.parameters)==null?void 0:o.storySource}};var a;n.parameters={...n.parameters,storySource:{source:"designTokenStory(meta)",...(a=n.parameters)==null?void 0:a.storySource}};const I=["FormFieldStory","DesignTokens"];export{n as DesignTokens,e as FormFieldStory,I as __namedExportsOrder,_ as default};
//# sourceMappingURL=FormField.stories-f7910e5a.js.map