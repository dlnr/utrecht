/*! For license information please see user-research-research_0001-stories-mdx.a1bd2f04.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[5083],{"./stories/user-research/research_0001.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>research_0001_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.0_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),Markdown=__webpack_require__("../../documentation/components/Markdown.jsx");const research_0001raw_namespaceObject='---\ntitle: Onderzoek online meldingen\nhide_title: true\nhide_table_of_contents: false\nsidebar_label: Onderzoek online meldingen\nsidebar_position: 2\npagination_label: Onderzoek online meldingen\ndescription: Gebruikersonderzoek potentiele nieuwe versie online melding bij de gemeente Utrecht.\nkeywords:\n  - toegankelijkheid\n  - online melding\n  - digitaal gebruikersonderzoek\n  - gebruikersonderzoek\n---\n\n\x3c!-- @license CC0-1.0 --\x3e\n\n# Onderzoek online meldingen\n\n**tl;dr: Online meldingen doen met Signalen werkt goed voor iedereen behalve blinden en slechtzienden.**\n\n## Doel van het onderzoek\n\nOnderzoeken of de potentiele nieuwe versie voor het doen van een online melding bij de gemeente Utrecht gebruikersvriendelijk en toegankelijk is.\n\n## Opzet\n\nWe hebben digitaal gebruikersonderzoek gedaan met twaalf respondenten. Deze respondenten kregen een case voorgelezen waarna ze in de test-omgeving moesten proberen hun melding te doen.\nVan de respondenten waren er drie blind of slechtziend en drie ex-laaggeletterd.\n\n## Belangrijkste inzichten\n\nDe belangrijkste inzichten zijn:\n\n### Blinden en slechtzienden lopen vast in het proces\n\nHet is voor de blinden niet duidelijk dat er een verplicht invulveld zit in de kaart om het adres in te vullen. Ze vullen het niet in en gaan door in het formulier. Dit, gecombineerd met een onduidelijke foutmelding zorgt er voor dat ze vast komen te zitten en uit het proces vallen.\n\nBij de overige respondenten is er geen verwarring in het doorlopen van de testomgeving. De volgorde van stappen worden begrepen en zonder moeite doorlopen.\n\n### Notificaties geven vertrouwen\n\nDe notificatie e-mails worden als fijn ervaren. Het is belangrijk om de bevestiging te krijgen dat jouw melding serieus genomen wordt en opgepakt wordt. Ook is het belangrijk dat ze te weten krijgen wanneer het opgelost is. Daarnaast worden de smileys in de 3e mail aangeklikt. De e-mails worden wel als veel ervaren (3 is misschien 1 te veel), maar dit kan ook komen omdat er nu geen tijd tussen zit.\n\n### Toegankelijkheidsfouten zorgen voor ruis\n\n- Het zoomen in de kaart op de mobiel ging niet soepel op mobiel, dit kan ook komen doordat Teams tegelijkertijd werd gebruikt.\n- Wanneer je geen adres aanklikt wordt is er voor het systeem geen adres ingevuld.\n- Als iets niet correct is ingevuld op de eerste pagina is dit niet zichtbaar wanneer je aan de onderkant van de pagina zit. Dit zorgt voor verwarring > waarom kan ik niet op volgende klikken\n\n## Wie hebben het onderzocht\n\n- [René Olling, UX Designer](mailto:r.olling@utrecht.nl)\n- [Jeroen du Chatinier, UX Designer](mailto:j.du.chatinier@utrecht.nl)\n- [Rosaly Buitendijk, UX Designer](mailto:rosaly.buitendijk@utrecht.nl)\n\n## Inzichten\n\n### 001 - Blinden en slechtzienden lopen vast in het proces\n\nHet is voor de blinden niet duidelijk dat er een verplicht invulveld zit in de kaart om het adres in te vullen. Ze vullen het niet in en gaan door in het formulier. Dit, gecombineerd met een onduidelijke foutmelding zorgt er voor dat ze vast komen te zitten en uit het proces vallen.\n\nBij de overige respondenten is er geen verwarring in het doorlopen van de testomgeving. De volgorde van stappen worden begrepen en zonder moeite doorlopen.\n\nDit inzicht heeft geleid tot specifieke inzichten in het Button component. Deze zijn daar te vinden onder het Documentatie > Onderzoek.\n\n### 002 - Notificaties geven vertrouwen\n\nDe notificatie e-mails worden als fijn ervaren. Het is belangrijk om de bevestiging te krijgen dat jouw melding serieus genomen wordt en opgepakt wordt. Ook is het belangrijk dat ze te weten krijgen wanneer het opgelost is. Daarnaast worden de smileys in de 3e mail aangeklikt. De e-mails worden wel als veel ervaren (3 is misschien 1 te veel), maar dit kan ook komen omdat er nu geen tijd tussen zit.\n\n### 003 - Toegankelijkheidsfouten zorgen voor ruis\n\n- Het zoomen in de kaart op de mobiel ging niet soepel op mobiel, dit kan ook komen doordat Teams tegelijkertijd werd gebruikt.\n- Wanneer je geen adres aanklikt wordt is er voor het systeem geen adres ingevuld.\n- Als iets niet correct is ingevuld op de eerste pagina is dit niet zichtbaar wanneer je aan de onderkant van de pagina zit. Dit zorgt voor verwarring > waarom kan ik niet op volgende klikken\n\n### 004 - Interessant voor verder onderzoek\n\nEr waren een aantal geïnterviewden die aangaven dat ze op de kaart al gemelde meldingen willen zien. Dit hebben we niet kunnen testen want die functionaliteit is er nog niet. Het roept ook veel vragen op. Het zou tof zijn om dit verder te kunnen onderzoeken. Niemand begint hiermee, dit komt pas boven aan het einde van het onderzoek.\n\n### 005 - Adres invullen voor blinden en slechtzienden gaat niet goed\n\n- Blinden zien niet dat er een kaart is en krijgen geen audio-prompt dat er een kaart is. Als je dan niet precies weet waar je je melding wil doen, zit je vast.\n- De label die wordt voorgelezen bij het adresveld geeft geen duidelijke beschrijving van de actie die de melder moet doen, namelijk het invullen van het adres van de melding.\n- Het adresveld genereert een lege keuzelijst, deze lege lijst werkt verwarrend voor iemand die voorlees software gebruikt, deze leest "deze lijst is leeg".\n\n### 006 - Foutmelding als de kaart niet goed is ingevuld werkt niet goed\n\n- Doordat blinden en slechtziende niet goed met de kaart en het adres invoer veld overweg kunnen komt er een error. Er gebeurt niets als er een error is, de error wordt niet kenbaar gemaakt, een blinde is dan de weg kwijt en stopt met een melding doen.\n- De error is alleen visueel. De tekst van de error maakt ook niet duidelijk dat het een error is. Voor blinden/slechtzienden is dit gewoon een stukje tekst die vraagt een adres in te vullen, maar dat was nou juist het probleem.\n- Blinden en slecht zienden moeten kunnen horen wat ze moeten doen of wat er verkeerd gaat\n\n### 007 - Bevestiging na keuze\n\n- Punten op de kaart worden voorgelezen als nummer (lon/lat), dit voegt niets toe voor iemand die blind is.\n- Na het kiezen van een adres is het niet duidelijk dat dit adres gekozen is.\n\n## Resultaat\n\nHet formulier waarin de melder het adres moet invullen wordt aangepast door de makers zodat ook blinden en slechtzienden een melding kunnen doen.\n\n## Wat ook opmerkelijk was\n\nWe kregen van de blinden en slechtzienden de volgende tips waarin ziende mensen zich goed kunnen inleven in de wereld van blinden en slechtzienden:\n\n- Doe een melding zonder je muis te gebruiken\n- Gebruik voorleessoftware (Supernova, Jaws NVDA) en doe een melding met je ogen dicht\n- Gebruik de apple toegankelijkheids stand (Toegankelijkheid>voice over) en probeer met je ogen dicht een melding te doen.\n';var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Utrecht/Gebruikersonderzoek/Online meldingen"}),"\n",(0,jsx_runtime.jsx)(Markdown.U,{children:research_0001raw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Utrecht/Gebruikersonderzoek/Online meldingen",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const research_0001_stories=componentMeta},"../../documentation/components/Markdown.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Markdown});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const Markdown=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.UG,{children:children.replace(/(^|\r?\n)---[\s|\D|\w]+\r?\n---/gm,"")});Markdown.displayName="Markdown"}}]);