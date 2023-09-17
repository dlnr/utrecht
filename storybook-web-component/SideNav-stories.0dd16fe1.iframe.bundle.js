/*! For license information please see SideNav-stories.0dd16fe1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[]).push([[6883],{"./src/SideNav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SideNav_stories});var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),index_esm=__webpack_require__("../web-component-library-react/dist/index.esm.js"),design_token_story=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/design-token-story.tsx")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const SideNavStory=({json})=>(0,jsx_runtime.jsx)(index_esm.VVS,{json:JSON.stringify(json)});SideNavStory.displayName="SideNavStory";const meta={title:"Web Component/Side navigation",id:"web-component-sidenav",component:SideNavStory,argTypes:{json:{description:"JSON",control:"array"}},args:{json:[]},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-sidenav",tokens:dist,tokensDefinition:{},docs:{description:{component:'\x3c!-- @license CC0-1.0 --\x3e\n\n\x3c!-- \\*Status: **In development\\*** --\x3e\n\n# 1. Navigatie - Sidenav\n\nEen hierarchische, verticaal weergegeven manier om te navigeren die geplaatst is aan de zijkant van een pagina.\n\n## 1.1 Structuur \x3c!-- wat is het doel van 1.1?--\x3e\n\n- `utrecht-sidenav`\n  - `__list`\n    - `__item`\n      - `__link`\n\n## 1.2 Gedrag\n\n### 1.2.1 Current page\n\nDe current page krijgt nadruk om te laten zien waar de bezoeker zich op het moment begeeft in de hierarchie.\n\n### 1.2.2 Pagina\'s zonder kinderen\n\nAls de sidenav staat op een pagina zonder kinderen wordt er een andere weergave van de sidenav getoond. De huidige pagina en de broertjes en zusjes worden in een geneste lijst getoond.\n\n![Screenshot van sidenav in een pagina zonder kinderen](././static/screenshot_sidenav_003.png "Screenshot sidenav 3")\n\n### 1.2.3 Links als block\n\nLinks worden als block gedefinieerd om het zo makkelijk mogelijk te maken voor de gebruiker om te navigeren. Hierdoor hoeven ze niet precies op de link te staan met de muis en kunnen ze dus sneller naar de pagina waar ze naar toe willen.\n\n## 1.3 UX richtlijnen\n\n### 1.3.1 Wanneer gebruik je dit component?\n\nJe gebruikt dit component om...\n\n- ...de gebruiker overzicht te geven en te helpen navigeren door _een site_ met een diepte van één tot drie lagen.\n- ...de gebruiker overzicht te geven en te helpen navigeren door _een gedeelte van een site_ met een diepte van één tot drie lagen.\n\n### 1.3.2 Alternatieven en gerelateerde componenten\n\nJe kan beter kijken naar een alternatief als...\n\n- ...het om een kleine site gaat met minder dan vijf pagina\'s. Probeer de site dan horizontaal in te delen zonder navigatie hierarchie. Het Topnav component biedt dan uitkomst.\n- ...het toevoegen van een sidenav meer verwarring geeft dan overzicht. Bijvoorbeeld als er veel manieren om te navigeren zijn.\n- ...de componenten die weergegeven worden in de sidenav geen logisch verband met elkaar hebben en de gebruiker niet helpen met het geven van overzicht.\n\n### 1.3.3 Variaties\n\nEr is één variatie op de sidenav beschikbaar. In deze variatie worden de broertjes en zusjes van de actieve pagina niet getoond.\n\n![Screenshot van sidenav met broertjes en zusjes](././static/screenshot_sidenav_001.png "Screenshot sidenav 1")\n\n![Screenshot van sidenav zonder broertjes en zusjes](././static/screenshot_sidenav_002.png "Screenshot sidenav 2")\n\n### 1.3.4 Anatomie \x3c!-- wat is het doel van 1.3.4?--\x3e\n\nDescribe the atanomy of a component, for example:\n\n- ul\n- li\n- a\n- active li\n- sibling\n\n## 1.4 Design tokens\n\n### 1.4.1 Global design tokens \x3c!-- wat is het doel van 1.4.1?--\x3e\n\nDeze global design tokens worden gebruikt in dit component:\n\n- --utrecht-document-font-family\n- --utrecht-space-inline-2xs\n- --utrecht-space-inline-xs\n- --utrecht-space-inline-md\n- --utrecht-grey-80\n- --utrecht-link-color\n- --utrecht-link-hover-color\n\n### 1.4.2 Interactive states \x3c!-- wat is het doel van 1.4.2?--\x3e\n\n- Hover\n- Focus\n- Active\n\n## 1.5 Best practices\n\n- Hou de tekst van de links in de sidebar kort. Verkort desnoods de naam naar een gedeelte van de pagina titel.\n- Test altijd de sidenav. Zeker bij een langere hierarchie is het soms nodig om het eindproduct te zien. Mogelijk valt een gedeelte van de navigatie weg van de onderkant van het scherm.\n\n## 1.6 Referenties\n\n1. [U.S. Web Design System (USWDS) - Side Navigation](https://designsystem.digital.gov/components/side-navigation/)\n\n# 2. Navigatie - Top Nav\n\n## 2.1 Structuur\n\n- `utrecht-topnav`\n  - `__list`\n    - `__item`\n      - `__link`\n\n## 2.2 UX richtlijnen\n\n### 2.2.1 Wanneer gebruik je dit component?\n\nSome information on the Demo component. Where can it be used, what types of information can it contain?\n\n### 2.2.2 Alternatieven en gerelateerde componenten\n\n- Example component can be used instead of the demo component\n\n### 2.2.3 Variaties\n\nList of Variations\n\n- Variation 1\n- Variation 2\n\n### 2.2.4 Anatomie\n\nDescribe the atanomy of a component, for example:\n\n- A container\n- With a content block\n- And a header\n\n## 2.3 Design tokens\n\n### 2.3.1 Global design tokens\n\nDescribe which global brand tokens should be used by this component. Semantic colors, Borders, Border-radius, typography, etc\n\n-\n-\n\n### 2.3.2 Interactive states\n\nDescribe which interactive states this component can have and which design tokens should then be used\n\n## 2.4 Best practices\n\n### 2.4.1 Do\n\n-\n-\n\n### 2.4.2 Don\'t\n\n-\n-\n\n### 2.4.3 Referenties\n\n-\n-\n'}}}},SideNav_stories=meta,Default={args:{json:[{href:"#",title:"Home"},{href:"#",title:"Wonen en leven"},{href:"#",title:"Parken en groen"},{href:"#",title:"Bomen",haschildren:!0,children:[{href:"#",title:"Bomennieuws"},{href:"#",title:"Bomen planten en kappen",current:!0},{href:"#",title:"Bomenzorg en bomenbeleid"},{href:"#",title:"Ziekten en plagen"},{href:"#",title:"Overlast bomen"},{href:"#",title:"Zorgvuldig met bomen omgaan"}]},{href:"#",title:"Parken en plantsoenen",sibling:!0},{href:"#",title:"Landgoederen Amelisweerd en Rhijnauwen",sibling:!0},{href:"#",title:"Begraafplaatsen",sibling:!0},{href:"#",title:"Volkstuinen en stadslandbouw",sibling:!0},{href:"#",title:"Dieren",sibling:!0},{href:"#",title:"Groenonderhoud",sibling:!0},{href:"#",title:"Zelfbeheer",sibling:!0}]}},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    json: [{\n      href: '#',\n      title: 'Home'\n    }, {\n      href: '#',\n      title: 'Wonen en leven'\n    }, {\n      href: '#',\n      title: 'Parken en groen'\n    }, {\n      href: '#',\n      title: 'Bomen',\n      haschildren: true,\n      children: [{\n        href: '#',\n        title: 'Bomennieuws'\n      }, {\n        href: '#',\n        title: 'Bomen planten en kappen',\n        current: true\n      }, {\n        href: '#',\n        title: 'Bomenzorg en bomenbeleid'\n      }, {\n        href: '#',\n        title: 'Ziekten en plagen'\n      }, {\n        href: '#',\n        title: 'Overlast bomen'\n      }, {\n        href: '#',\n        title: 'Zorgvuldig met bomen omgaan'\n      }]\n    }, {\n      href: '#',\n      title: 'Parken en plantsoenen',\n      sibling: true\n    }, {\n      href: '#',\n      title: 'Landgoederen Amelisweerd en Rhijnauwen',\n      sibling: true\n    }, {\n      href: '#',\n      title: 'Begraafplaatsen',\n      sibling: true\n    }, {\n      href: '#',\n      title: 'Volkstuinen en stadslandbouw',\n      sibling: true\n    }, {\n      href: '#',\n      title: 'Dieren',\n      sibling: true\n    }, {\n      href: '#',\n      title: 'Groenonderhoud',\n      sibling: true\n    }, {\n      href: '#',\n      title: 'Zelfbeheer',\n      sibling: true\n    }]\n  }\n}",...Default.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DesignTokens"]}}]);