import{d as u,r as k,o as r,c as a,t as U,a as _,b as g,e as o,n as p,g as $,f as q,h as x,w as S,m as h,i as v,j as b,v as C,k as I,l as V,F as w,p as N,q as B,s as M}from"./vue.esm-bundler-759e87b8.js";const D=u({name:"UtrechtAlertDialog",props:{icon:{type:String,default:null},type:{type:String,default:null}},setup(t){return{dialogRef:k(null),props:t}}}),c=(t,e)=>{const n=t.__vccOpts||t;for(const[s,l]of e)n[s]=l;return n},H={key:0,class:"utrecht-alert-dialog__icon"},P={class:"utrecht-alert-dialog__message"};function T(t,e,n,s,l,i){return r(),a("dialog",{ref:"dialogRef",class:p(["utrecht-alert-dialog",{"utrecht-alert-dialog--error":t.type==="error","utrecht-alert-dialog--info":t.type==="info","utrecht-alert-dialog--warning":t.type==="warning"}])},[t.icon?(r(),a("div",H,U(t.icon),1)):_("",!0),g("div",P,[o(t.$slots,"default")])],2)}const Qr=c(D,[["render",T]]),F=u({name:"UtrechtArticle"}),R={class:"utrecht-article"};function O(t,e,n,s,l,i){return r(),a("article",R,[o(t.$slots,"default")])}const Wr=c(F,[["render",O]]),A=u({name:"UtrechtBadgeCounter",props:{value:{type:[Number,String],required:!1,default:void 0}}}),E=["value"],j={key:1,class:"utrecht-badge-counter"};function z(t,e,n,s,l,i){return typeof t.value<"u"?(r(),a("data",{key:0,class:"utrecht-badge-counter",value:t.value?String(t.value):void 0},[o(t.$slots,"default")],8,E)):(r(),a("span",j,[o(t.$slots,"default")]))}const Xr=c(A,[["render",z]]),G=u({name:"UtrechtBadgeStatus",props:{status:{type:String,required:!1,default:void 0}}});function K(t,e,n,s,l,i){return r(),a("span",{class:p([{[`utrecht-badge-status--${t.status}`]:!0},"utrecht-badge-status"])},[o(t.$slots,"default")],2)}const Yr=c(G,[["render",K]]),J=u({name:"UtrechtLink",props:{external:{type:Boolean,required:!1,default:!1}}}),Q=["rel"];function W(t,e,n,s,l,i){return r(),a("a",{class:p(["utrecht-link","utrecht-link--html-a",{"utrecht-link--external":t.external}]),rel:t.external?"external noopener noreferrer":void 0},[o(t.$slots,"default")],10,Q)}const X=c(J,[["render",W]]),L=({prop:t,type:e})=>({itemscope:!0,itemtype:e,itemprop:t}),Y=t=>({itemprop:t}),Z=u({name:"UtrechtBreadcrumbNavLink",components:{UtrechtLink:X},props:{href:{type:String,required:!0},current:{type:Boolean,required:!1,default:!1},rel:{type:String,required:!1,default:""},index:{type:Number,required:!1,default:void 0}},methods:{ref:k,useMicrodataProp:Y,useMicrodataItem:L,getCurrentInstance:$}}),tt=["content"];function et(t,e,n,s,l,i){const d=q("UtrechtLink");return r(),a("li",h({class:"utrecht-breadcrumb-nav__item"},t.useMicrodataItem({type:"https://schema.org/ListItem",prop:"itemListElement"})),[x(d,h({...t.useMicrodataProp("item")},{ref:t.ref,class:"utrecht-breadcrumb-nav__link","aria-current":t.current&&"location",href:t.href,rel:t.rel}),{default:S(()=>[g("span",h({class:"utrecht-breadcrumb-nav__text"},{...t.useMicrodataProp("name")}),[o(t.$slots,"default")],16),typeof t.index=="number"?(r(),a("meta",h({key:0},{...t.useMicrodataProp("position")},{content:String(t.index+1)}),null,16,tt)):_("",!0)]),_:3},16,["aria-current","href","rel"])],16)}const Zr=c(Z,[["render",et]]),rt=u({name:"UtrechtHeading",props:{level:{type:Number,required:!0,default:6}}}),at={key:0,class:"utrecht-heading-1"},nt={key:1,class:"utrecht-heading-2"},st={key:2,class:"utrecht-heading-3"},lt={key:3,class:"utrecht-heading-4"},ot={key:4,class:"utrecht-heading-5"},ut={key:5,class:"utrecht-heading-6"};function ct(t,e,n,s,l,i){return t.level==1?(r(),a("h1",at,[o(t.$slots,"default",{},void 0,!0)])):t.level==2?(r(),a("h2",nt,[o(t.$slots,"default",{},void 0,!0)])):t.level==3?(r(),a("h3",st,[o(t.$slots,"default",{},void 0,!0)])):t.level==4?(r(),a("h4",lt,[o(t.$slots,"default",{},void 0,!0)])):t.level==5?(r(),a("h5",ot,[o(t.$slots,"default",{},void 0,!0)])):(r(),a("h6",ut,[o(t.$slots,"default",{},void 0,!0)]))}const it=c(rt,[["render",ct],["__scopeId","data-v-7324134c"]]);function f(t,e,n="modelValue"){return M({get:()=>t.modelValue,set:s=>e(`update:${n}`,s)})}const dt=u({name:"UtrechtBreadcrumbNav",components:{UtrechtHeading:it},props:{appearance:{type:String,required:!1,default:"arrows"},headingLevel:{type:Number,required:!1,default:2},label:{type:String,required:!1,default:""}},setup(t,{emit:e}){return{value:f(t,e)}},data(){var t;return{headingId:this.$props.label?String((t=$())==null?void 0:t.uid):void 0}},methods:{useMicrodataItem:L,getCurrentInstance:$}}),ht=["aria-labelledby"];function pt(t,e,n,s,l,i){const d=q("UtrechtHeading");return r(),a("nav",{class:p(["utrecht-breadcrumb-nav",{"utrecht-breadcrumb-nav--arrows":t.appearance==="arrows"}]),"aria-labelledby":t.headingId},[x(d,{id:t.headingId,class:"utrecht-breadcrumb-nav__heading",level:t.headingLevel??2,"aria-hidden":"true"},{default:S(()=>[v(U(t.label),1)]),_:1},8,["id","level"]),g("ol",h({class:"utrecht-breadcrumb-nav__list utrecht-breadcrumb-nav__list--html-ol"},{...t.useMicrodataItem({type:"https://schema.org/BreadcrumbList"})}),[o(t.$slots,"default")],16)],10,ht)}const ta=c(dt,[["render",pt]]),ft=u({name:"UtrechtButton",props:{appearance:{type:String,required:!1,default:void 0},type:{type:String,required:!1,default:"button"},busy:{type:Boolean,required:!1,default:!1},pressed:{type:Boolean,required:!1,default:void 0}}}),mt=["aria-busy","aria-pressed","type"];function vt(t,e,n,s,l,i){return r(),a("button",{"aria-busy":t.busy||void 0,"aria-pressed":t.pressed,class:p(["utrecht-button",{"utrecht-button--busy":t.busy},{"utrecht-button--pressed":t.pressed},{"utrecht-button--primary-action":t.appearance==="primary-action-button"},{"utrecht-button--secondary-action":t.appearance==="secondary-action-button"},{"utrecht-button--submit":t.type==="submit"},{"utrecht-button--subtle":t.appearance==="subtle-button"}]),type:t.type},[o(t.$slots,"default")],10,mt)}const ea=c(ft,[["render",vt]]),bt=u({name:"UtrechtButtonGroup"}),yt={class:"utrecht-button-group"};function gt(t,e,n,s,l,i){return r(),a("div",yt,[o(t.$slots,"default")])}const ra=c(bt,[["render",gt]]),$t=u({name:"UtrechtCheckbox",props:{appearance:{type:String,required:!1,default:"custom"},invalid:{type:Boolean,required:!1},modelValue:{type:[String,Number,Boolean],required:!1,default:""}},setup(t,{emit:e}){return{value:f(t,e)}}}),Ut=["aria-invalid"];function _t(t,e,n,s,l,i){return b((r(),a("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d),type:"checkbox","aria-invalid":t.invalid||void 0,class:p(["utrecht-checkbox","utrecht-checkbox--html-input",{"utrecht-checkbox--invalid":t.invalid},{"utrecht-checkbox--custom":t.appearance==="custom"}])},null,10,Ut)),[[C,t.value]])}const aa=c($t,[["render",_t]]),kt=u({name:"UtrechtCode"}),qt={class:"utrecht-code"};function xt(t,e,n,s,l,i){return r(),a("code",qt,[o(t.$slots,"default")])}const na=c(kt,[["render",xt]]),St=u({name:"UtrechtCodeBlock"}),Bt={class:"utrecht-code-block"},Lt={class:"utrecht-code-block__content"};function Ct(t,e,n,s,l,i){return r(),a("pre",Bt,[v("      "),g("code",Lt,[v(`
          `),o(t.$slots,"default"),v(`
      `)]),v(`
  `)])}const sa=c(St,[["render",Ct]]),It=u({name:"UtrechtDataList",props:{appearance:{type:String,required:!1,default:"rows"}}});function Vt(t,e,n,s,l,i){return r(),a("dl",{class:p([{"utrecht-data-list--rows":t.appearance==="rows"},"utrecht-data-list utrecht-data-list--html-dl"])},[o(t.$slots,"default")],2)}const la=c(It,[["render",Vt]]),wt=u({name:"UtrechtDataListItem"}),Nt={class:"utrecht-data-list__item"};function Mt(t,e,n,s,l,i){return r(),a("div",Nt,[o(t.$slots,"default")])}const oa=c(wt,[["render",Mt]]),Dt=u({name:"UtrechtDataListKey"}),Ht={class:"utrecht-data-list__item-key"};function Pt(t,e,n,s,l,i){return r(),a("dt",Ht,[o(t.$slots,"default")])}const ua=c(Dt,[["render",Pt]]),Tt=u({name:"UtrechtDataListValue",props:{value:{type:[Number,String],required:!1,default:""},emptyDescription:{type:String,required:!1,default:""},multiline:{type:Boolean,required:!1},notranslate:{type:Boolean,required:!1}},data(){return{empty:this.$props.value===""||this.$props.value===void 0}}}),Ft=["translate"],Rt=["aria-label"];function Ot(t,e,n,s,l,i){return r(),a("dd",{class:p(["utrecht-data-list__item-value utrecht-data-list__item-value--html-dd",{"utrecht-data-list__item-value--multiline":t.multiline}]),translate:typeof t.notranslate=="boolean"?t.notranslate?"no":"yes":void 0},[t.empty?(r(),a("span",{key:0,"aria-label":t.emptyDescription},"-",8,Rt)):o(t.$slots,"default",{key:1})],10,Ft)}const ca=c(Tt,[["render",Ot]]),At=u({name:"UtrechtDocument"}),Et={class:"utrecht-document"};function jt(t,e,n,s,l,i){return r(),a("div",Et,[o(t.$slots,"default")])}const ia=c(At,[["render",jt]]),zt=u({name:"UtrechtEmphasis"});function Gt(t,e,n,s,l,i){return r(),a("em",h(t.$attrs,{class:"utrecht-emphasis utrecht-emphasis--stressed"}),[o(t.$slots,"default")],16)}const da=c(zt,[["render",Gt]]),Kt=u({name:"UtrechtFigure"});function Jt(t,e,n,s,l,i){return r(),a("figure",h(t.$attrs,{class:"utrecht-figure"}),[o(t.$slots,"default")],16)}const ha=c(Kt,[["render",Jt]]),Qt=u({name:"UtrechtFigureCaption"});function Wt(t,e,n,s,l,i){return r(),a("figcaption",h(t.$attrs,{class:"utrecht-figure__caption"}),[o(t.$slots,"default")],16)}const pa=c(Qt,[["render",Wt]]),Xt=u({name:"UtrechtFormField",props:{invalid:{type:Boolean,required:!1,default:!1},type:{type:String,required:!1,default:void 0}}});function Yt(t,e,n,s,l,i){return r(),a("div",{class:p(["utrecht-form-field",{"utrecht-form-field--invalid":t.invalid},{"utrecht-form-field--checkbox":t.type==="checkbox"},{"utrecht-form-field--radio":t.type==="radio"},{"utrecht-form-field--text":!t.type||t.type==="text"}])},[o(t.$slots,"default")],2)}const fa=c(Xt,[["render",Yt]]),Zt=u({name:"UtrechtFormLabel",props:{checked:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},type:{type:String,required:!1,default:void 0}}});function te(t,e,n,s,l,i){return r(),a("label",{class:p(["utrecht-form-label",{"utrecht-form-label--checked":t.checked},{"utrecht-form-label--disabled":t.disabled},{[`utrecht-form-label--${t.type}`]:t.type}])},[o(t.$slots,"default")],2)}const ma=c(Zt,[["render",te]]),ee=u({name:"UtrechtHeading1"}),re={class:"utrecht-heading-1"};function ae(t,e,n,s,l,i){return r(),a("h1",re,[o(t.$slots,"default")])}const va=c(ee,[["render",ae]]),ne=u({name:"UtrechtHeading2"}),se={class:"utrecht-heading-2"};function le(t,e,n,s,l,i){return r(),a("h2",se,[o(t.$slots,"default")])}const ba=c(ne,[["render",le]]),oe=u({name:"UtrechtHeading3"}),ue={class:"utrecht-heading-3"};function ce(t,e,n,s,l,i){return r(),a("h3",ue,[o(t.$slots,"default")])}const ya=c(oe,[["render",ce]]),ie=u({name:"UtrechtHeading4"}),de={class:"utrecht-heading-4"};function he(t,e,n,s,l,i){return r(),a("h4",de,[o(t.$slots,"default")])}const ga=c(ie,[["render",he]]),pe=u({name:"UtrechtHeading5"}),fe={class:"utrecht-heading-5"};function me(t,e,n,s,l,i){return r(),a("h5",fe,[o(t.$slots,"default")])}const $a=c(pe,[["render",me]]),ve=u({name:"UtrechtHeading6"}),be={class:"utrecht-heading-6"};function ye(t,e,n,s,l,i){return r(),a("h6",be,[o(t.$slots,"default")])}const Ua=c(ve,[["render",ye]]),ge=u({name:"UtrechtImage",props:{photo:{type:Boolean,default:!1,required:!1}}}),$e=["alt","src","height","width"];function Ue(t,e,n,s,l,i){var d,y,m;return r(),a("img",h({class:"utrecht-img"},t.$attrs,{class:{"utrecht-img--photo":t.photo},alt:(d=t.$attrs)==null?void 0:d.alt,src:t.$attrs.src,height:(y=t.$attrs)==null?void 0:y.height,width:(m=t.$attrs)==null?void 0:m.width}),null,16,$e)}const _a=c(ge,[["render",Ue]]),_e=u({name:"UtrechtLinkSocial",props:{external:{type:Boolean,default:!1,required:!1}}}),ke=["rel"];function qe(t,e,n,s,l,i){return r(),a("a",h({class:"utrecht-link-social"},t.$attrs,{rel:t.external!==!1?"external noopener noreferrer":void 0}),[o(t.$slots,"default")],16,ke)}const ka=c(_e,[["render",qe]]),xe=u({name:"UtrechtListSocial",props:{external:{type:Boolean,default:!1,required:!1}}});function Se(t,e,n,s,l,i){return r(),a("ul",h({class:"utrecht-list-social"},t.$attrs),[o(t.$slots,"default")],16)}const qa=c(xe,[["render",Se]]),Be=u({name:"UtrechtListSocialItem"});function Le(t,e,n,s,l,i){return r(),a("li",h({class:"utrecht-list-social__item"},t.$attrs),[o(t.$slots,"default")],16)}const xa=c(Be,[["render",Le]]),Ce=u({name:"UtrechtOrderedList"});function Ie(t,e,n,s,l,i){return r(),a("ol",h({class:"utrecht-ordered-list"},t.$attrs),[o(t.$slots,"default")],16)}const Sa=c(Ce,[["render",Ie]]),Ve=u({name:"UtrechtOrderedListItem"});function we(t,e,n,s,l,i){return r(),a("li",h({class:"utrecht-ordered-list__item"},t.$attrs),[o(t.$slots,"default")],16)}const Ba=c(Ve,[["render",we]]),Ne=u({name:"UtrechtNumberData",props:{value:{type:[Number,String],required:!1,default:void 0}}}),Me=["value"];function De(t,e,n,s,l,i){return r(),a("data",{value:typeof t.value=="string"||typeof t.value=="number"?String(t.value):void 0,class:"utrecht-number-data"},[o(t.$slots,"default")],8,Me)}const La=c(Ne,[["render",De]]),He=u({name:"UtrechtPage"}),Pe={class:"utrecht-page"};function Te(t,e,n,s,l,i){return r(),a("div",Pe,[o(t.$slots,"default")])}const Ca=c(He,[["render",Te]]),Fe=u({name:"UtrechtPageContent"}),Re={class:"utrecht-page-content"};function Oe(t,e,n,s,l,i){return r(),a("div",Re,[o(t.$slots,"default")])}const Ia=c(Fe,[["render",Oe]]),Ae=u({name:"UtrechtPageFooter"}),Ee={class:"utrecht-page-footer"};function je(t,e,n,s,l,i){return r(),a("footer",Ee,[o(t.$slots,"default")])}const Va=c(Ae,[["render",je]]),ze=u({name:"UtrechtPageHeader"}),Ge={class:"utrecht-page-header"};function Ke(t,e,n,s,l,i){return r(),a("header",Ge,[o(t.$slots,"default")])}const wa=c(ze,[["render",Ke]]),Je=u({name:"UtrechtParagraph",props:{lead:{type:Boolean,required:!1,default:!1},small:{type:Boolean,required:!1,default:!1}}}),Qe={key:0,class:"utrecht-paragraph__small"};function We(t,e,n,s,l,i){return r(),a("p",{class:p(["utrecht-paragraph",{"utrecht-paragraph--lead":t.lead,"utrecht-paragraph--small":t.small}])},[t.small?(r(),a("small",Qe,[o(t.$slots,"default")])):o(t.$slots,"default",{key:1})],2)}const Na=c(Je,[["render",We]]),Xe=u({name:"UtrechtRadioButton",props:{invalid:{type:Boolean,required:!1},modelValue:{type:[String,Number,Boolean],required:!1,default:""}},setup(t,{emit:e}){return{value:f(t,e)}}}),Ye=["aria-invalid"];function Ze(t,e,n,s,l,i){return b((r(),a("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d),type:"radio","aria-invalid":t.invalid||void 0,class:p(["utrecht-radio-button","utrecht-radio-button--html-input",{"utrecht-radio-button--invalid":t.invalid}])},null,10,Ye)),[[I,t.value]])}const Ma=c(Xe,[["render",Ze]]),tr=u({name:"UtrechtSelect",props:{invalid:{type:Boolean,required:!1},readonly:{type:Boolean,required:!1},options:{type:[Array,Object],required:!0},modelValue:{type:[String,Number,Boolean],required:!1,default:""}},setup(t,{emit:e}){return{selected:f(t,e)}}}),er=["aria-invalid","readonly"],rr=["value","disabled"];function ar(t,e,n,s,l,i){return b((r(),a("select",{"onUpdate:modelValue":e[0]||(e[0]=d=>t.selected=d),"aria-invalid":t.invalid||void 0,class:p([{"utrecht-select--invalid":t.invalid},{"utrecht-select--readonly":t.readonly},"utrecht-select--html-select","utrecht-select"]),readonly:t.readonly},[t.options&&t.options.length>0?(r(!0),a(w,{key:0},N(t.options,({value:d,label:y,disabled:m})=>(r(),a("option",{key:d,value:d,class:p([{"utrecht-select__option--disabled":m},"utrecht-select__option"]),disabled:m},U(y),11,rr))),128)):_("",!0)],10,er)),[[V,t.selected]])}const Da=c(tr,[["render",ar]]),nr=u({name:"UtrechtSeparator"});function sr(t,e,n,s,l,i){return r(),a("hr",h({class:"utrecht-separator"},t.$attrs),null,16)}const Ha=c(nr,[["render",sr]]),lr=u({name:"UtrechtSkipLink",props:{href:{type:String,default:void 0,required:!1}}}),or=["href"];function ur(t,e,n,s,l,i){return r(),a("a",h(t.$attrs,{href:t.$props.href,class:"utrecht-skip-link utrecht-skip-link--visible-on-focus"}),[o(t.$slots,"default")],16,or)}const Pa=c(lr,[["render",ur]]),cr=u({name:"UtrechtStrong"});function ir(t,e,n,s,l,i){return r(),a("strong",h(t.$attrs,{class:"utrecht-emphasis utrecht-emphasis--strong"}),[o(t.$slots,"default")],16)}const Ta=c(cr,[["render",ir]]),dr=u({name:"UtrechtTable"}),hr={class:"utrecht-table"};function pr(t,e,n,s,l,i){return r(),a("table",hr,[o(t.$slots,"default")])}const Fa=c(dr,[["render",pr]]),fr=u({name:"UtrechtTableBody"}),mr={class:"utrecht-table__body"};function vr(t,e,n,s,l,i){return r(),a("tbody",mr,[o(t.$slots,"default")])}const Ra=c(fr,[["render",vr]]),br=u({name:"UtrechtTableCaption"}),yr={class:"utrecht-table__caption"};function gr(t,e,n,s,l,i){return r(),a("caption",yr,[o(t.$slots,"default")])}const Oa=c(br,[["render",gr]]),$r=u({name:"UtrechtTableCell"}),Ur={class:"utrecht-table__cell"};function _r(t,e,n,s,l,i){return r(),a("td",Ur,[o(t.$slots,"default")])}const Aa=c($r,[["render",_r]]),kr=u({name:"UtrechtTableFooter"}),qr={class:"utrecht-table__footer"};function xr(t,e,n,s,l,i){return r(),a("tfoot",qr,[o(t.$slots,"default")])}const Ea=c(kr,[["render",xr]]),Sr=u({name:"UtrechtTableHeader"}),Br={class:"utrecht-table__header"};function Lr(t,e,n,s,l,i){return r(),a("thead",Br,[o(t.$slots,"default")])}const ja=c(Sr,[["render",Lr]]),Cr=u({name:"UtrechtTableHeaderCell"}),Ir={class:"utrecht-table__header-cell"};function Vr(t,e,n,s,l,i){return r(),a("th",Ir,[o(t.$slots,"default")])}const za=c(Cr,[["render",Vr]]),wr=u({name:"UtrechtTableRow"}),Nr={class:"utrecht-table__row"};function Mr(t,e,n,s,l,i){return r(),a("tr",Nr,[o(t.$slots,"default")])}const Ga=c(wr,[["render",Mr]]),Dr=u({name:"UtrechtTextarea",props:{dir:{type:String,required:!1,default:"auto"},invalid:{type:Boolean,required:!1},modelValue:{type:[String,Number,Boolean],require:!1,default:""}},setup(t,{emit:e}){return{value:f(t,e)}}}),Hr=["aria-invalid","dir"];function Pr(t,e,n,s,l,i){return b((r(),a("textarea",{"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d),"aria-invalid":t.invalid||void 0,class:p([{"utrecht-textarea--invalid":t.invalid},"utrecht-textarea","utrecht-textarea--html-textarea"]),dir:t.dir},null,10,Hr)),[[B,t.value]])}const Ka=c(Dr,[["render",Pr]]),Tr=u({name:"UtrechtTextbox",props:{dir:{type:String,required:!1,default:"auto"},invalid:{type:Boolean,required:!1},modelValue:{type:[String,Number,Boolean],require:!1,default:""}},setup(t,{emit:e}){return{value:f(t,e)}}}),Fr=["aria-invalid","dir"];function Rr(t,e,n,s,l,i){return b((r(),a("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d),"aria-invalid":t.invalid||void 0,class:p([{"utrecht-textbox--invalid":t.invalid},"utrecht-textbox","utrecht-textbox--html-input"]),dir:t.dir},null,10,Fr)),[[B,t.value]])}const Ja=c(Tr,[["render",Rr]]),Or=u({name:"UtrechtUnorderedList"});function Ar(t,e,n,s,l,i){return r(),a("ul",h({class:"utrecht-unordered-list"},t.$attrs),[o(t.$slots,"default")],16)}const Qa=c(Or,[["render",Ar]]),Er=u({name:"UtrechtOrderedListItem"});function jr(t,e,n,s,l,i){return r(),a("li",h({class:"utrecht-ordered-list__item"},t.$attrs),[o(t.$slots,"default")],16)}const Wa=c(Er,[["render",jr]]),zr=u({name:"UtrechtURLData"}),Gr={translate:"no",class:"utrecht-url-data"};function Kr(t,e,n,s,l,i){return r(),a("bdi",Gr,[o(t.$slots,"default")])}const Xa=c(zr,[["render",Kr]]);export{na as $,La as A,ua as B,va as C,ya as D,Ca as E,ba as F,Na as G,ga as H,_a as I,Da as J,Ma as K,sa as L,Sa as M,Ua as N,Ia as O,xa as P,Pa as Q,Ba as R,fa as S,$a as T,da as U,qa as V,Ha as W,Ta as X,Fa as Y,Ra as Z,Xa as _,Qr as a,ta as a0,Zr as a1,Yr as a2,Xr as a3,Wr as a4,ea as b,Ja as c,Qa as d,it as e,Oa as f,ca as g,la as h,Ga as i,Va as j,X as k,Wa as l,ha as m,za as n,Ka as o,aa as p,pa as q,ja as r,Ea as s,Aa as t,ra as u,ia as v,ka as w,ma as x,oa as y,wa as z};
//# sourceMappingURL=component-library-vue-84bb6690.js.map
