"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[97209],{"../web-component-library-stencil/dist/esm/utrecht-iban-data.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{utrecht_iban_data:()=>IBANData});var _index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-component-library-stencil/dist/esm/index-380964e2.js");const IBANData=class{constructor(hostRef){(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.value=void 0}render(){const{value}=this,normalized=value.replace(/[\s+\W]+/g,"").toUpperCase();const formatted=normalized.replace(/(.{4})(?!$)/g,"$1 ");return(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("data",{class:"utrecht-iban-data"},formatted)}};IBANData.style=".utrecht-iban-data{font-variant-numeric:lining-nums slashed-zero tabular-nums;white-space:nowrap}:host{display:inline}:host([hidden]){display:none !important}"}}]);