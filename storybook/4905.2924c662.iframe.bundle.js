"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[4905],{"../web-component-library-stencil/dist/esm/clsx.m-9f200cc0.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>clsx});__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.array.is-array.js");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../web-component-library-stencil/dist/esm/utrecht-sidenav.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{utrecht_sidenav:()=>Sidenav});__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.25.0/node_modules/core-js/modules/es.object.define-property.js");var _index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../web-component-library-stencil/dist/esm/index-e61b4b29.js"),_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../web-component-library-stencil/dist/esm/clsx.m-9f200cc0.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Sidenav=function(){function Sidenav(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Sidenav),(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.json=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Sidenav,[{key:"render",value:function render(){var items=JSON.parse(this.json);return(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_8__.h)("nav",{class:"utrecht-sidenav"},(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_8__.h)("ul",{class:"utrecht-sidenav__list"},items.map((function(_ref,index,array){var href=_ref.href,title=_ref.title,current=_ref.current,focus=_ref.focus,children=_ref.children,sibling=_ref.sibling,haschildren=_ref.haschildren;return(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_8__.h)("li",{key:href,class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_9__.c)("utrecht-sidenav__item",index+1===array.length&&"utrecht-sidenav__item--last",sibling&&"utrecht-sidenav__item--sibling",haschildren&&"utrecht-sidenav__item--parent")},(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_8__.h)("a",{class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_9__.c)("utrecht-sidenav__link",current&&"utrecht-sidenav__link--current",focus&&"utrecht-sidenav__link--focus",sibling&&"utrecht-sidenav__link--sibling",haschildren&&"utrecht-sidenav__link--parent"),href},(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_9__.c)("utrecht-sidenav__marker",current&&"utrecht-sidenav__marker--current")}),(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_9__.c)("utrecht-sidenav__connection",haschildren&&"utrecht-sidenav__connection--parent",sibling&&"utrecht-sidenav__connection--sibling",index+1===array.length&&"utrecht-sidenav__connection--last")}),title),children?(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_8__.h)("ul",{class:"utrecht-sidenav__list utrecht-sidenav__list--child"},children.map((function(_ref2){var href=_ref2.href,title=_ref2.title,current=_ref2.current,focus=_ref2.focus;return(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_8__.h)("li",{key:href,class:"utrecht-sidenav__item utrecht-sidenav__item--child"},(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_8__.h)("a",{class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_9__.c)("utrecht-sidenav__link","utrecht-sidenav__link--child",current&&"utrecht-sidenav__link--current",current&&"utrecht-sidenav__link--current-child",focus&&"utrecht-sidenav__link--focus"),href},(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_9__.c)("utrecht-sidenav__marker","utrecht-sidenav__marker--child",current&&"utrecht-sidenav__marker--current",current&&"utrecht-sidenav__marker--current-child")}),title))}))):"",(0,_index_e61b4b29_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"utrecht-sidenav__item-separator"}))}))))}}]),Sidenav}();Sidenav.style='.utrecht-sidenav{--utrecht-sidenav-connection-color:var(--utrecht-sidenav-item-marker-color);--utrecht-sidenav-connection-inline-size:2px;--utrecht-sidenav-marker-current-color:var(--utrecht-sidenav-link-hover-color);--utrecht-sidenav-marker-offset:26px;--utrecht-sidenav-connection-block-size:100%;--utrecht-sidenav-marker-height:8px;--utrecht-sidenav-marker-outline-width:2px;border-block-end:1px solid var(--utrecht-color-grey-80);border-block-start:1px solid var(--utrecht-color-grey-80);margin-block-end:0;margin-block-start:0;padding-block-end:0;padding-block-start:0;width:19rem}.utrecht-sidenav__list{margin-block-end:0;margin-block-start:0.2rem;padding-block-end:0;padding-block-start:0;padding-inline-start:0}.utrecht-sidenav__list--child{margin-block-start:0;padding-inline-end:0;padding-inline-start:1.4rem}.utrecht-sidenav__item{list-style:none;margin-inline-start:0;position:relative}.utrecht-sidenav__item--current{color:var(--utrecht-sidenav-item-hover-color, var(--utrecht-link-hover-color, red))}.utrecht-sidenav__item--last{border-block-end:none}.utrecht-sidenav__item-separator:not(.utrecht-sidenav__item--last .utrecht-sidenav__item-separator){border-block-end:1px solid var(--utrecht-color-grey-80);display:block;margin-inline-start:var(--utrecht-space-inline-lg)}.utrecht-sidenav__link{color:var(--utrecht-sidenav-link-color, var(--utrecht-link-color, blue));display:block;margin-inline-start:0;padding-block-end:var(--utrecht-space-block-xs);padding-block-start:var(--utrecht-space-block-xs);padding-inline-end:var(--utrecht-space-inline-3xs);padding-inline-start:var(--utrecht-space-inline-lg);text-decoration:none}.utrecht-sidenav__link:hover{color:var(--utrecht-sidenav-link-hover-color, var(--utrecht-link-hover-color, red));text-decoration:underline}.utrecht-sidenav__link--focus-visible,.utrecht-sidenav__link:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-sidenav__link--parent{padding-block-end:0}.utrecht-sidenav__connection,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:not(.utrecht-sidenav__link--sibling,.utrecht-sidenav__link--parent,.utrecht-sidenav__link--child)::after{background:var(--utrecht-sidenav-connection-color);bottom:0;content:"";display:block;height:calc(var(--utrecht-sidenav-connection-block-size) - var(--utrecht-sidenav-marker-height) - 2 * var(--utrecht-sidenav-marker-outline-width));left:3px;overflow:hidden;position:absolute;top:calc(var(--utrecht-sidenav-marker-offset));width:var(--utrecht-sidenav-connection-inline-size);z-index:5}.utrecht-sidenav__connection--last,.utrecht-sidenav__connection--parent,.utrecht-sidenav__connection--sibling{display:none}.utrecht-sidenav__marker,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link::before{background-color:var(--utrecht-sidenav-item-marker-color);border-radius:100%;content:"";height:var(--utrecht-sidenav-marker-height);left:var(--utrecht-sidenav-marker-offset);overflow:hidden;position:absolute;top:20px;transform:translateY(-50%) translateX(calc(-1 * var(--utrecht-sidenav-marker-offset)));width:8px;z-index:10}.utrecht-sidenav__marker--child,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link--child::before{background-color:transparent;border:2px solid var(--utrecht-sidenav-link-color);height:4px;left:1.2rem;top:16px;transform:translateY(-50%) translateX(-19.5px);width:4px}.utrecht-sidenav__marker--current,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link--current::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link--current-child::before{background-color:var(--utrecht-sidenav-marker-current-color)}.utrecht-sidenav__link--child,.utrecht-sidenav__link--current-child{color:var(--utrecht-sidenav-link-color, var(--utrecht-link-color, blue));margin-block-end:0;margin-block-start:0;padding-block-end:var(--utrecht-space-block-2xs);padding-block-start:var(--utrecht-space-block-2xs);padding-inline-end:var(--utrecht-space-inline-3xs);padding-inline-start:var(--utrecht-space-inline-lg);text-decoration:none}.utrecht-sidenav__link--current,.utrecht-sidenav__link--current-child{font-weight:var(--utrecht-typography-weight-scale-bold-font-weight)}.utrecht-sidenav__marker--hover,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:hover::before,.utrecht-sidenav__link:hover .utrecht-sidenav__marker,.utrecht-sidenav__link:hover .utrecht-sidenav--pseudo-elements .utrecht-sidenav__link::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:hover .utrecht-sidenav__link::before{background-color:var(--utrecht-sidenav-link-hover-color)}.utrecht-sidenav__marker--child.utrecht-sidenav__marker--hover,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__marker--child.utrecht-sidenav__link:hover::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__marker--hover.utrecht-sidenav__link--child::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link--child.utrecht-sidenav__link:hover::before,.utrecht-sidenav__link:hover .utrecht-sidenav__marker--child.utrecht-sidenav__marker,.utrecht-sidenav__link:hover .utrecht-sidenav--pseudo-elements .utrecht-sidenav__marker.utrecht-sidenav__link--child::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:hover .utrecht-sidenav__marker.utrecht-sidenav__link--child::before,.utrecht-sidenav__link:hover .utrecht-sidenav--pseudo-elements .utrecht-sidenav__marker--child.utrecht-sidenav__link::before,.utrecht-sidenav__link:hover .utrecht-sidenav--pseudo-elements .utrecht-sidenav__link.utrecht-sidenav__link--child::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:hover .utrecht-sidenav__marker--child.utrecht-sidenav__link::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:hover .utrecht-sidenav__link.utrecht-sidenav__link--child::before{background-color:var(--utrecht-sidenav-link-hover-color);border:2px solid var(--utrecht-sidenav-link-hover-color)}.utrecht-sidenav--pseudo-elements{}.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link--child::after{display:none}.utrecht-sidenav__link:focus:not(:focus-visible){box-shadow:none;outline-style:revert}'}}]);