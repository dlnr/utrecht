(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({39:"SpotlightSection-stories",255:"Alert-stories",289:"FormToggle-stories",390:"Textarea-stories",449:"PageContent-stories",520:"FormFieldTextarea-stories",796:"web-component-stories-mdx",1212:"NumberData-stories",1271:"Heading4-stories",1464:"IBANData-stories",1853:"Heading-stories",2134:"web-component-library-vue-stories-mdx",2201:"LogoButton-stories",2295:"CodeBlock-stories",2324:"Code-stories",2756:"Page-stories",2829:"FormFieldDescription-stories",2903:"BadgeStatus-stories",3674:"Icon-stories",3755:"PageHeader-stories",3917:"CustomCheckbox-stories",4059:"FlexWrapFallback-stories",4066:"DataList-stories",4248:"EidasLogo-stories",4303:"BreadcrumbNav-stories",4643:"Surface-stories",4853:"Separator-stories",4900:"Mark-stories",4962:"Table-stories",5044:"FormFieldTextbox-stories",5322:"ColumnLayout-stories",5571:"web-component-library-react-stories-mdx",5706:"Iconset-stories",5847:"DigidLogo-stories",5897:"PageFooter-stories",5978:"FormFieldCheckbox-stories",6005:"BadgeData-stories",6130:"Article-stories",6278:"Emphasis-stories",6323:"Heading3-stories",6372:"LogoImage-stories",6463:"Button-stories",6730:"Textbox-stories",6845:"Document-stories",6869:"BadgeList-stories",6878:"Checkbox-stories",6883:"SideNav-stories",6886:"FormFieldErrorMessage-stories",7049:"Logo-stories",7124:"HTMLContent-stories",7171:"ButtonLink-stories",7302:"Backdrop-stories",7525:"URLData-stories",7589:"Link-stories",7818:"BadgeCounter-stories",7901:"MapMarker-stories",7990:"Heading2-stories",8071:"Paragraph-stories",8100:"Heading1-stories",8704:"ColorSample-stories",8765:"Heading6-stories",8912:"ButtonGroup-stories",8960:"Heading5-stories",9179:"web-component-library-angular-stories-mdx",9270:"DigidButton-stories",9443:"Pagination-stories",9479:"SkipLink-stories",9667:"EherkenningLogo-stories",9710:"Drawer-stories",9742:"LinkButton-stories",9851:"ContactCardTemplate-stories"}[chunkId]||chunkId)+"."+{35:"a03c8bd9",39:"a8ceb4c5",73:"3fe66c5f",97:"ac9c7f7f",164:"16237613",210:"a03c5539",255:"399ac027",289:"3d425eef",317:"d03cecce",326:"25b18d43",380:"e8181c04",390:"2b1361a0",396:"09caa955",410:"875c0787",417:"01660460",431:"a34dec08",449:"eb2e4fcc",453:"69f64372",461:"1e53aa88",520:"1baa82e7",608:"8964ba7f",609:"788f441d",616:"bf07697a",645:"9f20a0c2",717:"55760c0f",746:"f1a01836",776:"90f73f83",795:"615b6212",796:"663b0ef5",804:"7bf6284e",816:"f89f888d",861:"e807fb4c",967:"cb9970d4",997:"a1962e8c",1002:"a784aaeb",1127:"d1295d3a",1183:"5bd0ec9f",1212:"3f7ffe4f",1223:"9e735dac",1233:"ba6d07bf",1271:"e768911c",1290:"2b5d9c9b",1336:"9aaf5e0b",1397:"d70cf7e2",1464:"c10a1393",1477:"ee7e3fb9",1542:"08473c07",1660:"4f70a7f4",1793:"bf6fc9af",1795:"c1cd3c97",1805:"83ad3a0a",1830:"8875183c",1853:"c5fc74a8",1865:"51016f50",1870:"bb907348",1884:"2249fdbc",1897:"24e22091",1968:"af9c8bb8",1994:"ea39a3b3",2058:"05bc60e3",2134:"a75adca7",2138:"9b4c3fae",2184:"48f4a839",2201:"342b9135",2295:"edfe995d",2324:"e8a4d182",2399:"119bbd00",2424:"a18807ab",2496:"139e6e06",2520:"f3c52a32",2549:"89fc8db9",2592:"acef2357",2756:"20f01591",2829:"921cd11a",2834:"058488c3",2845:"82e8ebc6",2868:"b9dee1b7",2888:"fdb7fcfe",2903:"3d5e4e6b",2904:"9ffb7d11",2906:"31b9208f",2925:"a005c038",3001:"887ff147",3030:"73867bb8",3034:"a95ab499",3083:"0826d562",3148:"23124b80",3188:"37345bec",3345:"9235dde0",3376:"a3bdef3b",3456:"2a6ddc0d",3469:"d2bd0010",3493:"a6d63ed0",3537:"bf97c502",3545:"ade14bd5",3592:"a964e486",3593:"eadf0112",3634:"1cc4528e",3655:"44dcf6a5",3674:"65da7f3f",3721:"323f135e",3728:"7a067dba",3732:"15c52c14",3755:"3bb2fa64",3765:"be2ac7d0",3771:"a4dda88b",3775:"0f110882",3793:"23062f97",3822:"db821aad",3844:"89ac60f2",3895:"2e5daf93",3901:"c24ddc71",3917:"ae4f4e5a",3918:"89061b49",3927:"f849f8c9",3954:"a2567c4b",4022:"0188c208",4059:"44dc3c69",4066:"4733123a",4141:"995685ba",4160:"e2b7dff7",4223:"b6baadc1",4248:"ea8fe902",4284:"3e12b4db",4299:"3dbcacf0",4303:"0b6e1aaa",4307:"eb50fbf0",4329:"bff57230",4342:"39ea03ab",4351:"65712874",4384:"d6143914",4394:"c657d7da",4402:"c1d22fec",4404:"93fb86f1",4445:"75c3aaea",4501:"b1b1378f",4587:"fe5b2c71",4630:"036b64ee",4643:"f79dfe1c",4750:"00d7267e",4756:"c403ee1d",4758:"823b1b99",4828:"c67548e9",4844:"347b4573",4853:"38779cec",4881:"4f727ef5",4900:"2bc5471b",4951:"3adcfb25",4952:"1e410687",4962:"33fb524e",4978:"d1481d8a",5019:"9488f4c5",5044:"59b05767",5048:"3d44fa53",5050:"0a660f59",5071:"618895d6",5076:"0ee41196",5084:"8f70404c",5087:"e91c2cd8",5117:"7c1ca3ca",5133:"a8b01bd8",5157:"d2a08318",5170:"2710b070",5269:"b2a30da9",5322:"0f0208ac",5324:"c968974d",5364:"4f990f18",5373:"7e6ed97b",5420:"27e0903a",5433:"dcf6d03d",5439:"0e48b176",5512:"94010482",5546:"d07ae9b5",5569:"e6d62790",5571:"b506f2ea",5660:"e3369f3e",5706:"31706906",5780:"db563442",5788:"cfda8398",5792:"7f1f1520",5803:"fdc3fbc7",5821:"bcfb396e",5836:"e424fec1",5841:"25fbd00d",5845:"99be85ab",5847:"0630fb87",5897:"c690c0e7",5920:"9400c4d2",5978:"badd04ce",5982:"c182c5d2",6005:"0b72eb54",6058:"29086033",6063:"bfae3822",6066:"2b7aa592",6092:"5df04b43",6093:"1a6f6db9",6100:"5c00e562",6130:"176f77a4",6176:"3104e298",6196:"ee8e80f3",6278:"69217f13",6287:"c76ddb5e",6293:"18912ea7",6323:"7632d8d3",6342:"989caed3",6366:"bb9773ca",6372:"2b977580",6424:"c1625afe",6450:"b1f86f2f",6463:"66ca7a4b",6466:"82500f0b",6488:"3bbcb9ae",6500:"1c13fbe8",6505:"1dd2b48a",6511:"9abe3559",6517:"370e6e41",6526:"0e69d748",6540:"11cd060e",6562:"775ddd87",6576:"0a128050",6730:"7b2b3850",6797:"077950d5",6845:"e5f6eda2",6869:"c18247b3",6878:"97017b41",6883:"0dd16fe1",6886:"877e5282",6903:"f0dd4e8f",6919:"8d1e6ae7",6962:"1464e64e",6998:"22419d17",7e3:"9ade92f8",7002:"45bf699f",7040:"96a69421",7049:"c3de1d13",7098:"c64d47ec",7122:"4923f77b",7124:"b05ec247",7125:"46aa7c31",7167:"433e2ab9",7171:"3d2ce4ec",7178:"91786f13",7269:"bb70ecbe",7302:"b7eb5954",7374:"47eab776",7410:"1738f6e8",7457:"38f5179f",7525:"2aa9e678",7526:"a76d8968",7573:"8285bd08",7576:"02aa7438",7589:"e64b34dc",7615:"628699b8",7668:"652933cb",7675:"0d2df382",7680:"c3ef70e6",7735:"f60f8488",7742:"e328b5bc",7751:"a8b692b0",7763:"8490e919",7766:"58c3e771",7768:"b4a77565",7797:"da2a01b1",7818:"14b69248",7831:"78a26a6d",7871:"e53f55b8",7901:"76e08d2d",7939:"91d2e47b",7956:"071683af",7987:"e0930748",7990:"46b56ab1",8e3:"9ef94089",8010:"cdecdefc",8071:"87096827",8088:"626b36ad",8100:"4f162124",8106:"e111b97b",8188:"fe7b6e82",8277:"39596495",8281:"fd3ca96e",8332:"2cdbd46b",8392:"b09b5ec8",8393:"897e078d",8565:"db233987",8577:"a7f3a0b7",8626:"1d0990e3",8702:"d9b20a1d",8704:"6bae8616",8765:"8c28e04c",8805:"678d5e52",8807:"daf8dac6",8830:"230cc324",8852:"5cc12340",8854:"137d4f36",8856:"b8455a2c",8895:"8c2ae672",8900:"4393699a",8912:"722bb995",8924:"4a14d50c",8960:"d6dc0bf3",8970:"cd4e364f",9001:"00de6cf2",9024:"dbc1a8c4",9074:"e501e93f",9119:"51106877",9127:"eea9cac6",9177:"80d28f83",9179:"9ed2fada",9194:"63a56063",9234:"f5894c04",9270:"912ef183",9276:"27749455",9347:"4ebde883",9370:"9640806e",9377:"ef87870f",9443:"9e6c2ac2",9479:"bc192c2c",9500:"eca85559",9527:"0b487d26",9545:"906436d6",9630:"ff179551",9667:"a85e4d88",9706:"d3d57b99",9710:"567afe0b",9742:"381f3cbc",9838:"aa95fdb2",9851:"365b1f7d",9901:"2e4bb29e",9970:"87bdde42",9999:"984c8243"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@utrecht/storybook-web-component:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@utrecht/storybook-web-component:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();