"use strict";(self.webpackChunk_utrecht_storybook_react=self.webpackChunk_utrecht_storybook_react||[]).push([[771],{"../web-component-library-stencil/dist/esm/clsx.m-9f200cc0.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>clsx});__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.array.is-array.js");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../web-component-library-stencil/dist/esm/utrecht-pagination.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{utrecht_pagination:()=>Pagination});__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.array.sort.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.object.define-property.js");var _index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../web-component-library-stencil/dist/esm/index-e61b4b29.js"),_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../web-component-library-stencil/dist/esm/clsx.m-9f200cc0.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Pagination=function(){function Pagination(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Pagination),(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_10__.r)(this,hostRef),this.links=void 0,this.next=void 0,this.prev=void 0,this.currentIndex=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Pagination,[{key:"render",value:function render(){var currentIndex=this.currentIndex,links="string"==typeof this.links?JSON.parse(this.links):null,next="string"==typeof this.next?JSON.parse(this.next):null,prev="string"==typeof this.prev?JSON.parse(this.next):null,RelativeLink=function RelativeLink(_ref){var _ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$href=_ref.href,href=void 0===_ref$href?"":_ref$href,_ref$rel=_ref.rel,rel=void 0===_ref$rel?null:_ref$rel,_ref$textContent=_ref.textContent,textContent=void 0===_ref$textContent?"":_ref$textContent,_ref$title=_ref.title,title=void 0===_ref$title?"":_ref$title;return disabled?(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_10__.h)("span",{class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_11__.c)("utrecht-pagination__relative-link",disabled&&"utrecht-pagination__relative-link--disabled","next"===rel&&"utrecht-pagination__relative-link--next","prev"===rel&&"utrecht-pagination__relative-link--prev"),"aria-label":title||null},textContent):(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_10__.h)("a",{href,class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_11__.c)("utrecht-pagination__relative-link",disabled&&"utrecht-pagination__relative-link--disabled","next"===rel&&"utrecht-pagination__relative-link--next","prev"===rel&&"utrecht-pagination__relative-link--prev"),rel,"aria-label":title||null},textContent)};return(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_10__.h)("nav",{class:"utrecht-pagination"},(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_10__.h)("span",{class:"utrecht-pagination__before"},prev?RelativeLink(Object.assign(Object.assign({},prev),{rel:"prev",textContent:"Vorige"})):""),(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_10__.h)("span",{role:"group",class:"utrecht-pagination__pages"},links.sort((function(a,b){return a.index===b.index?0:a.index>b.index?1:-1})).map((function(link,arrayIndex){var index="number"==typeof link.index?link.index:arrayIndex;return Object.assign({index,current:"number"==typeof currentIndex&&index===currentIndex,rel:"number"==typeof currentIndex?index===currentIndex+1?"next":index===currentIndex-1?"prev":null:null,textContent:link.index||index},link)})).map((function(link){return function PageLink(_ref2){var _ref2$current=_ref2.current,current=void 0!==_ref2$current&&_ref2$current,_ref2$href=_ref2.href,href=void 0===_ref2$href?"":_ref2$href,_ref2$rel=_ref2.rel,rel=void 0===_ref2$rel?null:_ref2$rel,_ref2$textContent=_ref2.textContent,textContent=void 0===_ref2$textContent?"":_ref2$textContent;return(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_10__.h)("a",{class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_11__.c)("utrecht-pagination__page-link",current&&"utrecht-pagination__page-link--current"),href,"aria-current":current?"true":null,rel},textContent)}(link)}))),(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_10__.h)("span",{class:"utrecht-pagination__before"},next?RelativeLink(Object.assign(Object.assign({},next),{rel:"next",textContent:"Volgende"})):""))}}]),Pagination}();Pagination.style=".utrecht-pagination__page-link:focus,.utrecht-pagination__relative-link:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-pagination__page-link:focus:not(:focus-visible),.utrecht-pagination__relative-link:focus:not(:focus-visible){box-shadow:none;outline-style:revert}.utrecht-pagination{font-family:var(--utrecht-pagination-font-family, var(--utrecht-document-font-family));font-size:var(--utrecht-pagination-font-size, var(--utrecht-document-font-family));margin-block-end:calc(var(--utrecht-space-around, 0) * var(--utrecht-pagination-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0) * var(--utrecht-pagination-margin-block-start, 0))}.utrecht-pagination--distanced{--utrecht-space-around:1}.utrecht-pagination__relative-link{background-color:var(--utrecht-pagination-relative-link-background-color);border-color:var(--utrecht-pagination-relative-link-border-color);border-radius:var(--utrecht-pagination-relative-link-border-radius);border-style:solid;border-width:var(--utrecht-pagination-relative-link-border-width, 0);color:var(--utrecht-pagination-relative-link-color);display:inline-block;font-weight:var(--utrecht-pagination-relative-link-font-weight);padding-block-end:var(--utrecht-pagination-relative-link-padding-block-end);padding-block-start:var(--utrecht-pagination-relative-link-padding-block-start);padding-inline-end:var(--utrecht-pagination-relative-link-padding-inline-end);padding-inline-start:var(--utrecht-pagination-relative-link-padding-inline-start);text-decoration:var(--utrecht-pagination-relative-link-text-decoration);text-transform:var(--utrecht-pagination-relative-link-text-transform)}.utrecht-pagination__relative-link--next{margin-inline-start:var(--utrecht-pagination-relative-link-distanced-margin-inline-start)}.utrecht-pagination__relative-link--prev{margin-inline-end:var(--utrecht-pagination-relative-link-distanced-margin-inline-end)}.utrecht-pagination__relative-link--disabled{background-color:var(--utrecht-pagination-relative-link-disabled-background-color, var(--utrecht-pagination-relative-link-background-color));color:var(--utrecht-pagination-relative-link-disabled-color, var(--utrecht-pagination-relative-link-color))}.utrecht-pagination__relative-link--hover,.utrecht-pagination__relative-link:hover{background-color:var(--utrecht-pagination-relative-link-hover-background-color, var(--utrecht-pagination-relative-link-background-color));border-color:var(--utrecht-pagination-relative-link-hover-border-color, var(--utrecht-pagination-relative-link-border-color));color:var(--utrecht-pagination-relative-link-hover-color, var(--utrecht-pagination-relative-link-color))}.utrecht-pagination__page-link{background-color:var(--utrecht-pagination-page-link-background-color);border-color:var(--utrecht-pagination-page-link-border-color, 0);border-radius:var(--utrecht-pagination-page-link-border-radius);border-style:solid;border-width:var(--utrecht-pagination-page-link-border-width);color:var(--utrecht-pagination-page-link-color);display:inline-block;font-weight:var(--utrecht-pagination-page-link-font-weight);padding-block-end:var(--utrecht-pagination-page-link-padding-block-end);padding-block-start:var(--utrecht-pagination-page-link-padding-block-start);padding-inline-end:var(--utrecht-pagination-page-link-padding-inline-end);padding-inline-start:var(--utrecht-pagination-page-link-padding-inline-start);text-decoration:var(--utrecht-pagination-page-link-text-decoration)}.utrecht-pagination__page-link--current{--utrecht-pagination-page-link-background-color:var(--utrecht-pagination-page-link-current-background-color);--utrecht-pagination-page-link-border-color:var(--utrecht-pagination-page-link-current-border-color);--utrecht-pagination-page-link-color:var(--utrecht-pagination-page-link-current-color)}.utrecht-pagination__page-link~.utrecht-pagination__page-link{margin-inline-start:var(--utrecht-pagination-page-link-distanced-margin-inline-start)}.utrecht-pagination__page-link--hover,.utrecht-pagination__page-link:hover{background-color:var(--utrecht-pagination-page-link-hover-background-color, var(--utrecht-pagination-page-link-background-color));border-color:var(--utrecht-pagination-page-link-hover-border-color, var(--utrecht-pagination-page-link-border-color));color:var(--utrecht-pagination-page-link-hover-color, var(--utrecht-pagination-page-link-color))}.utrecht-pagination__page-link:focus,.utrecht-pagination__relative-link:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-pagination__page-link:focus:not(:focus-visible),.utrecht-pagination__relative-link:focus:not(:focus-visible){box-shadow:none;outline-style:revert}:host{display:block}:host([hidden]){display:none !important}"}}]);