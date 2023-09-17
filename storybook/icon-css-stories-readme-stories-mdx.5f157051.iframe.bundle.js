/*! For license information please see icon-css-stories-readme-stories-mdx.5f157051.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[7257],{"../../components/icon/css/stories/readme.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>readme_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");const README_namespaceObject="\x3c!-- @license CC0-1.0 --\x3e\n\n# Iconen in code\n\n## Iconen gebruiken als Custom Element\n\nEén van de makkelijkste manieren om iconen te gebruiken is door ze te includen in de web component library, zodat je ze als custom element kan gebruiken. Elk icoon is beschikbaar als custom element. De naam van van het icoon (`utrecht-icon-...`) is ook de naam van het custom-element. Voorbeeld:\n\n```html\n<div>\n  <utrecht-icon-loupe></utrecht-icon-loupe>\n</div>\n```\n\nVerander de kleur van het icoon via de CSS-eigenschap `color` op een parent element of via de custom eigenschap `--utrecht-icon-color`.\n\n### `color` van de omgevings content\n\nOp onderstaande manier kan je het makkelijkst de kleur aanpassen. De kleur van de bestaande tekst zal ook op het icoon toegepast worden.\n\n```html\n<button>\n  <utrecht-icon-loupe></utrecht-icon-loupe>\n  Search\n</button>\n\n<style>\n  button {\n    background-color: rgb(0, 0, 0);\n    color: rgb(255, 255, 255);\n  }\n</style>\n```\n\n### `--utrecht-icon-color` als custom icoon kleur\n\nDeze manier is handig als je een klein verschil wilt aanbrengen tussen de tekst kleur en de kleur van het icoon. Het gebruikt een CSS custom property `--utrecht-icon-color` als de kleur van het icoon.\n\n```html\n<button>\n  <utrecht-icon-loupe></utrecht-icon-loupe>\n  Search\n</button>\n\n<style>\n  button {\n    --utrecht-icon-color: rgba(255, 255, 255, 0.75);\n    background-color: rgb(0, 0, 0);\n    color: rgb(255, 255, 255);\n  }\n</style>\n```\n\n### Icoon grootte aanpassen\n\nDe grootte van het icoon kan aangepast worden met de `--utrecht-icon-size` CSS eigenschap:\n\n```html\n<button>\n  <utrecht-icon-loupe></utrecht-icon-loupe>\n  Search\n</button>\n\n<style>\n  button {\n    --utrecht-icon-size: 42px;\n    background-color: rgb(0, 0, 0);\n    color: rgb(255, 255, 255);\n  }\n</style>\n```\n\n## Overzicht van icons\n\nWanneer het nodig is een overzicht te hebben van de beschikbare icons, gebruik dan als basis de meegeleverde JSON informatie in `dist/index.json`. Het bevat een array met onder andere de ID van elke icoon. Op dit moment is de naam van de custom element altijd gelijk aan de ID.\n";__webpack_require__("../../components/icon/css/index.scss");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n",(0,jsx_runtime.jsx)(dist.h_,{id:"css-icon--readme",title:"CSS Component/Icon/README"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"CSS Component/Icon/README",id:"css-icon--readme",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const readme_stories=componentMeta},"../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.2_sass@1.66.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js!../../components/icon/css/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utrecht-icon{block-size:var(--utrecht-icon-size);color:var(--utrecht-icon-color);display:inline-block;font-size:var(--utrecht-icon-size);inline-size:var(--utrecht-icon-size);inset-block-start:var(--utrecht-icon-inset-block-start, 0);position:relative}.utrecht-icon svg{height:100%;width:100%}","",{version:3,sources:["webpack://./../../components/icon/css/index.scss","webpack://./../../components/icon/css/_mixin.scss"],names:[],mappings:"AAQA,cCDE,mCAAA,CACA,+BAAA,CACA,oBAAA,CACA,kCAAA,CACA,oCAAA,CACA,0DAAA,CACA,iBAAA,CDDF,kBCaE,WAAA,CAGA,UAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021-2022 Gemeente Utrecht\n * Copyright (c) 2021-2022 Frameless B.V.\n */\n\n@import "./mixin";\n\n.utrecht-icon {\n  @include utrecht-icon;\n}\n\n.utrecht-icon svg {\n  @include utrecht-icon__svg;\n}\n','/**\n * @license EUPL-1.2\n * Copyright (c) 2021-2022 Gemeente Utrecht\n * Copyright (c) 2021-2022 Frameless B.V.\n */\n\n@mixin utrecht-icon {\n  block-size: var(--utrecht-icon-size);\n  color: var(--utrecht-icon-color);\n  display: inline-block;\n  font-size: var(--utrecht-icon-size);\n  inline-size: var(--utrecht-icon-size);\n  inset-block-start: var(--utrecht-icon-inset-block-start, 0);\n  position: relative;\n}\n\n@mixin utrecht-icon__svg {\n  /*\n   * Override the width of SVGs when they are hardcoded, and avoid oversized SVG icons.\n   * For example:\n   * \n   *   <svg width="128px" height="128px">\n   */\n\n  /* stylelint-disable-next-line property-disallowed-list */\n  height: 100%;\n\n  /* stylelint-disable-next-line property-disallowed-list */\n  width: 100%;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../components/icon/css/index.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_66_1_webpack_5_88_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.2_sass@1.66.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js!../../components/icon/css/index.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_66_1_webpack_5_88_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_66_1_webpack_5_88_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_66_1_webpack_5_88_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_66_1_webpack_5_88_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);