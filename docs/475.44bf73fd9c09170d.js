"use strict";(self.webpackChunkeuro_jackpot=self.webpackChunkeuro_jackpot||[]).push([[475],{4475:(_n,N,h)=>{h.r(N),h.d(N,{EuroJackpotResultsModule:()=>Cn});var d=h(9808),U=h(2803),s=h(4893),W=h(438);let zt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({}),e})();var Qt=h(1135),Nt=h(8306),K=h(6451),T=h(7579);function J(e){for(let n in e){let t=e[n]||"";switch(n){case"display":e.display="flex"===t?["-webkit-flex","flex"]:"inline-flex"===t?["-webkit-inline-flex","inline-flex"]:t;break;case"align-items":case"align-self":case"align-content":case"flex":case"flex-basis":case"flex-flow":case"flex-grow":case"flex-shrink":case"flex-wrap":case"justify-content":e["-webkit-"+n]=t;break;case"flex-direction":t=t||"row",e["-webkit-flex-direction"]=t,e["flex-direction"]=t;break;case"order":e.order=e["-webkit-"+n]=isNaN(+t)?"0":t}}return e}const Y="inline",E=["row","column","row-reverse","column-reverse"];function X(e){let[n,t,i]=function tt(e){var n;e=null!==(n=null==e?void 0:e.toLowerCase())&&void 0!==n?n:"";let[t,i,l]=e.split(" ");return E.find(r=>r===t)||(t=E[0]),i===Y&&(i=l!==Y?l:"",l=Y),[t,Ut(i),!!l]}(e);return function Wt(e,n=null,t=!1){return{display:t?"inline-flex":"flex","box-sizing":"border-box","flex-direction":e,"flex-wrap":n||null}}(n,t,i)}function Ut(e){if(e)switch(e.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":e="wrap-reverse";break;case"no":case"none":case"nowrap":e="nowrap";break;default:e="wrap"}return e}var P=h(9300),Zt=h(8505);const Jt={provide:s.tb,useFactory:function Kt(e,n){return()=>{if((0,d.NF)(n)){const t=Array.from(e.querySelectorAll(`[class*=${et}]`)),i=/\bflex-layout-.+?\b/g;t.forEach(l=>{l.classList.contains(`${et}ssr`)&&l.parentNode?l.parentNode.removeChild(l):l.className.replace(i,"")})}}},deps:[d.K0,s.Lbi],multi:!0},et="flex-layout-";let j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({providers:[Jt]}),e})();class F{constructor(n=!1,t="all",i="",l="",r=0){this.matches=n,this.mediaQuery=t,this.mqAlias=i,this.suffix=l,this.priority=r,this.property=""}clone(){return new F(this.matches,this.mediaQuery,this.mqAlias,this.suffix)}}let Xt=(()=>{class e{constructor(){this.stylesheet=new Map}addStyleToElement(t,i,l){const r=this.stylesheet.get(t);r?r.set(i,l):this.stylesheet.set(t,new Map([[i,l]]))}clearStyles(){this.stylesheet.clear()}getStyleForElement(t,i){const l=this.stylesheet.get(t);let r="";if(l){const o=l.get(i);("number"==typeof o||"string"==typeof o)&&(r=o+"")}return r}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const V={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0,printWithBreakpoints:[],mediaTriggerAutoRestore:!0,ssrObserveBreakpoints:[],multiplier:void 0,defaultUnit:"px",detectLayoutDisplay:!1},A=new s.OlP("Flex Layout token, config options for the library",{providedIn:"root",factory:()=>V}),S=new s.OlP("FlexLayoutServerLoaded",{providedIn:"root",factory:()=>!1}),$=new s.OlP("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:()=>null});function it(e,n){return e=e?e.clone():new F,n&&(e.mqAlias=n.alias,e.mediaQuery=n.mediaQuery,e.suffix=n.suffix,e.priority=n.priority),e}class x{constructor(){this.shouldCache=!0}sideEffect(n,t,i){}}let u=(()=>{class e{constructor(t,i,l,r){this._serverStylesheet=t,this._serverModuleLoaded=i,this._platformId=l,this.layoutConfig=r}applyStyleToElement(t,i,l=null){let r={};"string"==typeof i&&(r[i]=l,i=r),r=this.layoutConfig.disableVendorPrefixes?i:J(i),this._applyMultiValueStyleToElement(r,t)}applyStyleToElements(t,i=[]){const l=this.layoutConfig.disableVendorPrefixes?t:J(t);i.forEach(r=>{this._applyMultiValueStyleToElement(l,r)})}getFlowDirection(t){const i="flex-direction";let l=this.lookupStyle(t,i);return[l||"row",this.lookupInlineStyle(t,i)||(0,d.PM)(this._platformId)&&this._serverModuleLoaded?l:""]}hasWrap(t){return"wrap"===this.lookupStyle(t,"flex-wrap")}lookupAttributeValue(t,i){var l;return null!==(l=t.getAttribute(i))&&void 0!==l?l:""}lookupInlineStyle(t,i){return(0,d.NF)(this._platformId)?t.style.getPropertyValue(i):function te(e,n){var t;return null!==(t=st(e)[n])&&void 0!==t?t:""}(t,i)}lookupStyle(t,i,l=!1){let r="";return t&&((r=this.lookupInlineStyle(t,i))||((0,d.NF)(this._platformId)?l||(r=getComputedStyle(t).getPropertyValue(i)):this._serverModuleLoaded&&(r=this._serverStylesheet.getStyleForElement(t,i)))),r?r.trim():""}_applyMultiValueStyleToElement(t,i){Object.keys(t).sort().forEach(l=>{const r=t[l],o=Array.isArray(r)?r:[r];o.sort();for(let a of o)a=a?a+"":"",(0,d.NF)(this._platformId)||!this._serverModuleLoaded?(0,d.NF)(this._platformId)?i.style.setProperty(l,a):ee(i,l,a):this._serverStylesheet.addStyleToElement(i,l,a)})}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(Xt),s.LFG(S),s.LFG(s.Lbi),s.LFG(A))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function ee(e,n,t){n=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();const i=st(e);i[n]=null!=t?t:"",function ie(e,n){let t="";for(const i in n)n[i]&&(t+=`${i}:${n[i]};`);e.setAttribute("style",t)}(e,i)}function st(e){const n={},t=e.getAttribute("style");if(t){const i=t.split(/;+/g);for(let l=0;l<i.length;l++){const r=i[l].trim();if(r.length>0){const o=r.indexOf(":");if(-1===o)throw new Error(`Invalid CSS style: ${r}`);n[r.substr(0,o).trim()]=r.substr(o+1).trim()}}}return n}function L(e,n){return(n&&n.priority||0)-(e&&e.priority||0)}function se(e,n){return(e.priority||0)-(n.priority||0)}let q=(()=>{class e{constructor(t,i,l){this._zone=t,this._platformId=i,this._document=l,this.source=new Qt.X(new F(!0)),this.registry=new Map,this.pendingRemoveListenerFns=[],this._observable$=this.source.asObservable()}get activations(){const t=[];return this.registry.forEach((i,l)=>{i.matches&&t.push(l)}),t}isActive(t){var i;const l=this.registry.get(t);return null!==(i=null==l?void 0:l.matches)&&void 0!==i?i:this.registerQuery(t).some(r=>r.matches)}observe(t,i=!1){if(t&&t.length){const l=this._observable$.pipe((0,P.h)(o=>!i||t.indexOf(o.mediaQuery)>-1)),r=new Nt.y(o=>{const a=this.registerQuery(t);if(a.length){const g=a.pop();a.forEach(p=>{o.next(p)}),this.source.next(g)}o.complete()});return(0,K.T)(r,l)}return this._observable$}registerQuery(t){const i=Array.isArray(t)?t:[t],l=[];return function ne(e,n){const t=e.filter(i=>!nt[i]);if(t.length>0){const i=t.join(", ");try{const l=n.createElement("style");l.setAttribute("type","text/css"),l.styleSheet||l.appendChild(n.createTextNode(`\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ${i} {.fx-query-test{ }}\n`)),n.head.appendChild(l),t.forEach(r=>nt[r]=l)}catch(l){console.error(l)}}}(i,this._document),i.forEach(r=>{const o=g=>{this._zone.run(()=>this.source.next(new F(g.matches,r)))};let a=this.registry.get(r);a||(a=this.buildMQL(r),a.addListener(o),this.pendingRemoveListenerFns.push(()=>a.removeListener(o)),this.registry.set(r,a)),a.matches&&l.push(new F(!0,r))}),l}ngOnDestroy(){let t;for(;t=this.pendingRemoveListenerFns.pop();)t()}buildMQL(t){return function le(e,n){return n&&window.matchMedia("all").addListener?window.matchMedia(e):{matches:"all"===e||""===e,media:e,addListener:()=>{},removeListener:()=>{},onchange:null,addEventListener(){},removeEventListener(){},dispatchEvent:()=>!1}}(t,(0,d.NF)(this._platformId))}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(s.R0b),s.LFG(s.Lbi),s.LFG(d.K0))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const nt={},re=[{alias:"xs",mediaQuery:"screen and (min-width: 0px) and (max-width: 599.98px)",priority:1e3},{alias:"sm",mediaQuery:"screen and (min-width: 600px) and (max-width: 959.98px)",priority:900},{alias:"md",mediaQuery:"screen and (min-width: 960px) and (max-width: 1279.98px)",priority:800},{alias:"lg",mediaQuery:"screen and (min-width: 1280px) and (max-width: 1919.98px)",priority:700},{alias:"xl",mediaQuery:"screen and (min-width: 1920px) and (max-width: 4999.98px)",priority:600},{alias:"lt-sm",overlapping:!0,mediaQuery:"screen and (max-width: 599.98px)",priority:950},{alias:"lt-md",overlapping:!0,mediaQuery:"screen and (max-width: 959.98px)",priority:850},{alias:"lt-lg",overlapping:!0,mediaQuery:"screen and (max-width: 1279.98px)",priority:750},{alias:"lt-xl",overlapping:!0,priority:650,mediaQuery:"screen and (max-width: 1919.98px)"},{alias:"gt-xs",overlapping:!0,mediaQuery:"screen and (min-width: 600px)",priority:-950},{alias:"gt-sm",overlapping:!0,mediaQuery:"screen and (min-width: 960px)",priority:-850},{alias:"gt-md",overlapping:!0,mediaQuery:"screen and (min-width: 1280px)",priority:-750},{alias:"gt-lg",overlapping:!0,mediaQuery:"screen and (min-width: 1920px)",priority:-650}],lt="(orientation: portrait) and (max-width: 599.98px)",rt="(orientation: landscape) and (max-width: 959.98px)",ot="(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)",at="(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)",dt="(orientation: portrait) and (min-width: 840px)",gt="(orientation: landscape) and (min-width: 1280px)",w={HANDSET:`${lt}, ${rt}`,TABLET:`${ot} , ${at}`,WEB:`${dt}, ${gt} `,HANDSET_PORTRAIT:`${lt}`,TABLET_PORTRAIT:`${ot} `,WEB_PORTRAIT:`${dt}`,HANDSET_LANDSCAPE:`${rt}`,TABLET_LANDSCAPE:`${at}`,WEB_LANDSCAPE:`${gt}`},oe=[{alias:"handset",priority:2e3,mediaQuery:w.HANDSET},{alias:"handset.landscape",priority:2e3,mediaQuery:w.HANDSET_LANDSCAPE},{alias:"handset.portrait",priority:2e3,mediaQuery:w.HANDSET_PORTRAIT},{alias:"tablet",priority:2100,mediaQuery:w.TABLET},{alias:"tablet.landscape",priority:2100,mediaQuery:w.TABLET_LANDSCAPE},{alias:"tablet.portrait",priority:2100,mediaQuery:w.TABLET_PORTRAIT},{alias:"web",priority:2200,mediaQuery:w.WEB,overlapping:!0},{alias:"web.landscape",priority:2200,mediaQuery:w.WEB_LANDSCAPE,overlapping:!0},{alias:"web.portrait",priority:2200,mediaQuery:w.WEB_PORTRAIT,overlapping:!0}],ae=/(\.|-|_)/g;function de(e){let n=e.length>0?e.charAt(0):"",t=e.length>1?e.slice(1):"";return n.toUpperCase()+t}const fe=new s.OlP("Token (@angular/flex-layout) Breakpoints",{providedIn:"root",factory:()=>{const e=(0,s.f3M)($),n=(0,s.f3M)(A),t=[].concat.apply([],(e||[]).map(l=>Array.isArray(l)?l:[l]));return function ce(e,n=[]){const t={};return e.forEach(i=>{t[i.alias]=i}),n.forEach(i=>{t[i.alias]?function v(e,...n){if(null==e)throw TypeError("Cannot convert undefined or null to object");for(let t of n)if(null!=t)for(let i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}(t[i.alias],i):t[i.alias]=i}),function ue(e){return e.forEach(n=>{n.suffix||(n.suffix=function ge(e){return e.replace(ae,"|").split("|").map(de).join("")}(n.alias),n.overlapping=!!n.overlapping)}),e}(Object.keys(t).map(i=>t[i]))}((n.disableDefaultBps?[]:re).concat(n.addOrientationBps?oe:[]),t)}});let H=(()=>{class e{constructor(t){this.findByMap=new Map,this.items=[...t].sort(se)}findByAlias(t){return t?this.findWithPredicate(t,i=>i.alias===t):null}findByQuery(t){return this.findWithPredicate(t,i=>i.mediaQuery===t)}get overlappings(){return this.items.filter(t=>t.overlapping)}get aliases(){return this.items.map(t=>t.alias)}get suffixes(){return this.items.map(t=>{var i;return null!==(i=null==t?void 0:t.suffix)&&void 0!==i?i:""})}findWithPredicate(t,i){var l;let r=this.findByMap.get(t);return r||(r=null!==(l=this.items.find(i))&&void 0!==l?l:null,this.findByMap.set(t,r)),null!=r?r:null}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(fe))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _="print",xe={alias:_,mediaQuery:_,priority:1e3};let me=(()=>{class e{constructor(t,i,l){this.breakpoints=t,this.layoutConfig=i,this._document=l,this.registeredBeforeAfterPrintHooks=!1,this.isPrintingBeforeAfterEvent=!1,this.beforePrintEventListeners=[],this.afterPrintEventListeners=[],this.formerActivations=null,this.isPrinting=!1,this.queue=new he,this.deactivations=[]}withPrintQuery(t){return[...t,_]}isPrintEvent(t){return t.mediaQuery.startsWith(_)}get printAlias(){var t;return[...null!==(t=this.layoutConfig.printWithBreakpoints)&&void 0!==t?t:[]]}get printBreakPoints(){return this.printAlias.map(t=>this.breakpoints.findByAlias(t)).filter(t=>null!==t)}getEventBreakpoints({mediaQuery:t}){const i=this.breakpoints.findByQuery(t);return(i?[...this.printBreakPoints,i]:this.printBreakPoints).sort(L)}updateEvent(t){var i;let l=this.breakpoints.findByQuery(t.mediaQuery);return this.isPrintEvent(t)&&(l=this.getEventBreakpoints(t)[0],t.mediaQuery=null!==(i=null==l?void 0:l.mediaQuery)&&void 0!==i?i:""),it(t,l)}registerBeforeAfterPrintHooks(t){if(!this._document.defaultView||this.registeredBeforeAfterPrintHooks)return;this.registeredBeforeAfterPrintHooks=!0;const i=()=>{this.isPrinting||(this.isPrintingBeforeAfterEvent=!0,this.startPrinting(t,this.getEventBreakpoints(new F(!0,_))),t.updateStyles())},l=()=>{this.isPrintingBeforeAfterEvent=!1,this.isPrinting&&(this.stopPrinting(t),t.updateStyles())};this._document.defaultView.addEventListener("beforeprint",i),this._document.defaultView.addEventListener("afterprint",l),this.beforePrintEventListeners.push(i),this.afterPrintEventListeners.push(l)}interceptEvents(t){return i=>{this.isPrintEvent(i)?i.matches&&!this.isPrinting?(this.startPrinting(t,this.getEventBreakpoints(i)),t.updateStyles()):!i.matches&&this.isPrinting&&!this.isPrintingBeforeAfterEvent&&(this.stopPrinting(t),t.updateStyles()):this.collectActivations(t,i)}}blockPropagation(){return t=>!(this.isPrinting||this.isPrintEvent(t))}startPrinting(t,i){this.isPrinting=!0,this.formerActivations=t.activatedBreakpoints,t.activatedBreakpoints=this.queue.addPrintBreakpoints(i)}stopPrinting(t){t.activatedBreakpoints=this.deactivations,this.deactivations=[],this.formerActivations=null,this.queue.clear(),this.isPrinting=!1}collectActivations(t,i){if(!this.isPrinting||this.isPrintingBeforeAfterEvent){if(!this.isPrintingBeforeAfterEvent)return void(this.deactivations=[]);if(!i.matches){const l=this.breakpoints.findByQuery(i.mediaQuery);if(l){const r=this.formerActivations&&this.formerActivations.includes(l),o=!this.formerActivations&&t.activatedBreakpoints.includes(l);(r||o)&&(this.deactivations.push(l),this.deactivations.sort(L))}}}}ngOnDestroy(){this._document.defaultView&&(this.beforePrintEventListeners.forEach(t=>this._document.defaultView.removeEventListener("beforeprint",t)),this.afterPrintEventListeners.forEach(t=>this._document.defaultView.removeEventListener("afterprint",t)))}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(H),s.LFG(A),s.LFG(d.K0))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class he{constructor(){this.printBreakpoints=[]}addPrintBreakpoints(n){return n.push(xe),n.sort(L),n.forEach(t=>this.addBreakpoint(t)),this.printBreakpoints}addBreakpoint(n){n&&void 0===this.printBreakpoints.find(i=>i.mediaQuery===n.mediaQuery)&&(this.printBreakpoints=function ye(e){var n;return null!==(n=null==e?void 0:e.mediaQuery.startsWith(_))&&void 0!==n&&n}(n)?[n,...this.printBreakpoints]:[...this.printBreakpoints,n])}clear(){this.printBreakpoints=[]}}let c=(()=>{class e{constructor(t,i,l){this.matchMedia=t,this.breakpoints=i,this.hook=l,this._useFallbacks=!0,this._activatedBreakpoints=[],this.elementMap=new Map,this.elementKeyMap=new WeakMap,this.watcherMap=new WeakMap,this.updateMap=new WeakMap,this.clearMap=new WeakMap,this.subject=new T.x,this.observeActivations()}get activatedAlias(){var t,i;return null!==(i=null===(t=this.activatedBreakpoints[0])||void 0===t?void 0:t.alias)&&void 0!==i?i:""}set activatedBreakpoints(t){this._activatedBreakpoints=[...t]}get activatedBreakpoints(){return[...this._activatedBreakpoints]}set useFallbacks(t){this._useFallbacks=t}onMediaChange(t){const i=this.findByQuery(t.mediaQuery);if(i){t=it(t,i);const l=this.activatedBreakpoints.indexOf(i);t.matches&&-1===l?(this._activatedBreakpoints.push(i),this._activatedBreakpoints.sort(L),this.updateStyles()):!t.matches&&-1!==l&&(this._activatedBreakpoints.splice(l,1),this._activatedBreakpoints.sort(L),this.updateStyles())}}init(t,i,l,r,o=[]){ut(this.updateMap,t,i,l),ut(this.clearMap,t,i,r),this.buildElementKeyMap(t,i),this.watchExtraTriggers(t,i,o)}getValue(t,i,l){const r=this.elementMap.get(t);if(r){const o=void 0!==l?r.get(l):this.getActivatedValues(r,i);if(o)return o.get(i)}}hasValue(t,i){const l=this.elementMap.get(t);if(l){const r=this.getActivatedValues(l,i);if(r)return void 0!==r.get(i)||!1}return!1}setValue(t,i,l,r){var o;let a=this.elementMap.get(t);if(a){const p=(null!==(o=a.get(r))&&void 0!==o?o:new Map).set(i,l);a.set(r,p),this.elementMap.set(t,a)}else a=(new Map).set(r,(new Map).set(i,l)),this.elementMap.set(t,a);const g=this.getValue(t,i);void 0!==g&&this.updateElement(t,i,g)}trackValue(t,i){return this.subject.asObservable().pipe((0,P.h)(l=>l.element===t&&l.key===i))}updateStyles(){this.elementMap.forEach((t,i)=>{const l=new Set(this.elementKeyMap.get(i));let r=this.getActivatedValues(t);r&&r.forEach((o,a)=>{this.updateElement(i,a,o),l.delete(a)}),l.forEach(o=>{if(r=this.getActivatedValues(t,o),r){const a=r.get(o);this.updateElement(i,o,a)}else this.clearElement(i,o)})})}clearElement(t,i){const l=this.clearMap.get(t);if(l){const r=l.get(i);r&&(r(),this.subject.next({element:t,key:i,value:""}))}}updateElement(t,i,l){const r=this.updateMap.get(t);if(r){const o=r.get(i);o&&(o(l),this.subject.next({element:t,key:i,value:l}))}}releaseElement(t){const i=this.watcherMap.get(t);i&&(i.forEach(r=>r.unsubscribe()),this.watcherMap.delete(t));const l=this.elementMap.get(t);l&&(l.forEach((r,o)=>l.delete(o)),this.elementMap.delete(t))}triggerUpdate(t,i){const l=this.elementMap.get(t);if(l){const r=this.getActivatedValues(l,i);r&&(i?this.updateElement(t,i,r.get(i)):r.forEach((o,a)=>this.updateElement(t,a,o)))}}buildElementKeyMap(t,i){let l=this.elementKeyMap.get(t);l||(l=new Set,this.elementKeyMap.set(t,l)),l.add(i)}watchExtraTriggers(t,i,l){if(l&&l.length){let r=this.watcherMap.get(t);if(r||(r=new Map,this.watcherMap.set(t,r)),!r.get(i)){const a=(0,K.T)(...l).subscribe(()=>{const g=this.getValue(t,i);this.updateElement(t,i,g)});r.set(i,a)}}}findByQuery(t){return this.breakpoints.findByQuery(t)}getActivatedValues(t,i){for(let r=0;r<this.activatedBreakpoints.length;r++){const a=t.get(this.activatedBreakpoints[r].alias);if(a&&(void 0===i||a.has(i)&&null!=a.get(i)))return a}if(!this._useFallbacks)return;const l=t.get("");return void 0===i||l&&l.has(i)?l:void 0}observeActivations(){const t=this.breakpoints.items.map(i=>i.mediaQuery);this.hook.registerBeforeAfterPrintHooks(this),this.matchMedia.observe(this.hook.withPrintQuery(t)).pipe((0,Zt.b)(this.hook.interceptEvents(this)),(0,P.h)(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this))}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(q),s.LFG(H),s.LFG(me))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function ut(e,n,t,i){var l;if(void 0!==i){const r=null!==(l=e.get(n))&&void 0!==l?l:new Map;r.set(t,i),e.set(n,r)}}let f=(()=>{class e{constructor(t,i,l,r){this.elementRef=t,this.styleBuilder=i,this.styler=l,this.marshal=r,this.DIRECTIVE_KEY="",this.inputs=[],this.mru={},this.destroySubject=new T.x,this.styleCache=new Map}get parentElement(){return this.elementRef.nativeElement.parentElement}get nativeElement(){return this.elementRef.nativeElement}get activatedValue(){return this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY)}set activatedValue(t){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,t,this.marshal.activatedAlias)}ngOnChanges(t){Object.keys(t).forEach(i=>{if(-1!==this.inputs.indexOf(i)){const l=i.split(".").slice(1).join(".");this.setValue(t[i].currentValue,l)}})}ngOnDestroy(){this.destroySubject.next(),this.destroySubject.complete(),this.marshal.releaseElement(this.nativeElement)}init(t=[]){this.marshal.init(this.elementRef.nativeElement,this.DIRECTIVE_KEY,this.updateWithValue.bind(this),this.clearStyles.bind(this),t)}addStyles(t,i){const l=this.styleBuilder,r=l.shouldCache;let o=this.styleCache.get(t);(!o||!r)&&(o=l.buildStyles(t,i),r&&this.styleCache.set(t,o)),this.mru=Object.assign({},o),this.applyStyleToElement(o),l.sideEffect(t,o,i)}clearStyles(){Object.keys(this.mru).forEach(t=>{this.mru[t]=""}),this.applyStyleToElement(this.mru),this.mru={},this.currentValue=void 0}triggerUpdate(){this.marshal.triggerUpdate(this.nativeElement,this.DIRECTIVE_KEY)}getFlexFlowDirection(t,i=!1){if(t){const[l,r]=this.styler.getFlowDirection(t);if(!r&&i){const o=X(l);this.styler.applyStyleToElements(o,[t])}return l.trim()}return"row"}hasWrap(t){return this.styler.hasWrap(t)}applyStyleToElement(t,i,l=this.nativeElement){this.styler.applyStyleToElement(l,t,i)}setValue(t,i){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,t,i)}updateWithValue(t){this.currentValue!==t&&(this.addStyles(t),this.currentValue=t)}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(s.SBq),s.Y36(x),s.Y36(u),s.Y36(c))},e.\u0275dir=s.lG2({type:e,features:[s.TTD]}),e})();var M=h(2722);let ve=(()=>{class e extends x{buildStyles(t,{display:i}){const l=X(t);return Object.assign(Object.assign({},l),{display:"none"===i?i:l.display})}}return e.\u0275fac=function(){let n;return function(i){return(n||(n=s.n5z(e)))(i||e)}}(),e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const we=["fxLayout","fxLayout.xs","fxLayout.sm","fxLayout.md","fxLayout.lg","fxLayout.xl","fxLayout.lt-sm","fxLayout.lt-md","fxLayout.lt-lg","fxLayout.lt-xl","fxLayout.gt-xs","fxLayout.gt-sm","fxLayout.gt-md","fxLayout.gt-lg"];let Ce=(()=>{class e extends f{constructor(t,i,l,r,o){super(t,l,i,r),this._config=o,this.DIRECTIVE_KEY="layout",this.init()}updateWithValue(t){var i;const r=this._config.detectLayoutDisplay?this.styler.lookupStyle(this.nativeElement,"display"):"";this.styleCache=null!==(i=ht.get(r))&&void 0!==i?i:new Map,ht.set(r,this.styleCache),this.currentValue!==t&&(this.addStyles(t,{display:r}),this.currentValue=t)}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(s.SBq),s.Y36(u),s.Y36(ve),s.Y36(c),s.Y36(A))},e.\u0275dir=s.lG2({type:e,features:[s.qOj]}),e})(),mt=(()=>{class e extends Ce{constructor(){super(...arguments),this.inputs=we}}return e.\u0275fac=function(){let n;return function(i){return(n||(n=s.n5z(e)))(i||e)}}(),e.\u0275dir=s.lG2({type:e,selectors:[["","fxLayout",""],["","fxLayout.xs",""],["","fxLayout.sm",""],["","fxLayout.md",""],["","fxLayout.lg",""],["","fxLayout.xl",""],["","fxLayout.lt-sm",""],["","fxLayout.lt-md",""],["","fxLayout.lt-lg",""],["","fxLayout.lt-xl",""],["","fxLayout.gt-xs",""],["","fxLayout.gt-sm",""],["","fxLayout.gt-md",""],["","fxLayout.gt-lg",""]],inputs:{fxLayout:"fxLayout","fxLayout.xs":"fxLayout.xs","fxLayout.sm":"fxLayout.sm","fxLayout.md":"fxLayout.md","fxLayout.lg":"fxLayout.lg","fxLayout.xl":"fxLayout.xl","fxLayout.lt-sm":"fxLayout.lt-sm","fxLayout.lt-md":"fxLayout.lt-md","fxLayout.lt-lg":"fxLayout.lt-lg","fxLayout.lt-xl":"fxLayout.lt-xl","fxLayout.gt-xs":"fxLayout.gt-xs","fxLayout.gt-sm":"fxLayout.gt-sm","fxLayout.gt-md":"fxLayout.gt-md","fxLayout.gt-lg":"fxLayout.gt-lg"},features:[s.qOj]}),e})();const ht=new Map;let At=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[j,zt]]}),e})(),Ci=(()=>{class e{constructor(){this.date=new Date}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["lottoland-result-date"]],inputs:{date:"date"},decls:3,vars:4,template:function(t,i){1&t&&(s.TgZ(0,"label"),s._uU(1),s.ALo(2,"date"),s.qZA()),2&t&&(s.xp6(1),s.Oqu(s.xi3(2,1,i.date,"fullDate")))},pipes:[d.uU],styles:[""],changeDetection:0}),e})();function Fi(e,n){if(1&e&&(s.TgZ(0,"span",4),s._uU(1),s.qZA()),2&e){const t=n.$implicit;s.xp6(1),s.Oqu(t)}}function Di(e,n){if(1&e&&(s.TgZ(0,"span",4),s._uU(1),s.qZA()),2&e){const t=n.$implicit;s.xp6(1),s.Oqu(t)}}let Si=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["lottoland-winner-number"]],inputs:{numbers:"numbers",redNumbers:"redNumbers"},decls:7,vars:2,consts:[[1,"d-flex","flex-row","winners"],[1,"d-flex","flex-row","numbers"],["class","m-1",4,"ngFor","ngForOf"],[1,"d-flex","flex-row","euro-numbers"],[1,"m-1"]],template:function(t,i){1&t&&(s.TgZ(0,"div",0)(1,"div",1),s.YNc(2,Fi,2,1,"span",2),s.TgZ(3,"label"),s._uU(4," + "),s.qZA()(),s.TgZ(5,"div",3),s.YNc(6,Di,2,1,"span",2),s.qZA()()),2&t&&(s.xp6(2),s.Q6J("ngForOf",i.numbers),s.xp6(4),s.Q6J("ngForOf",i.redNumbers))},directives:[d.sg],styles:[".winners[_ngcontent-%COMP%]{flex-wrap:wrap}span[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border-radius:50%;border:1px solid gray;width:40px;height:40px}.euro-numbers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-color:#ca7f26!important}label[_ngcontent-%COMP%]{margin:10px 20px}"],changeDetection:0}),e})(),_i=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["lottoland-result-item"]],inputs:{resultItem:"resultItem"},decls:23,vars:9,consts:[[1,"m-2","item"],[1,"d-flex","flex-row"],[1,"w-50"],[1,"w-50",2,"flex-wrap","wrap"]],template:function(t,i){1&t&&(s.TgZ(0,"div",0)(1,"div",1)(2,"b",2),s._uU(3,"Tier"),s.qZA(),s.TgZ(4,"label",2),s._uU(5),s.qZA()(),s.TgZ(6,"div",1)(7,"b",2),s._uU(8,"Match"),s.qZA(),s.TgZ(9,"label",3),s._uU(10),s.qZA()(),s.TgZ(11,"div",1)(12,"b",2),s._uU(13,"Winner numbers"),s.qZA(),s.TgZ(14,"label",2),s._uU(15),s.ALo(16,"number"),s.qZA()(),s.TgZ(17,"div",1)(18,"b",2),s._uU(19,"Amount"),s.qZA(),s.TgZ(20,"label",2),s._uU(21),s.ALo(22,"currency"),s.qZA()()()),2&t&&(s.xp6(5),s.Oqu(null==i.resultItem?null:i.resultItem.tier),s.xp6(5),s.Oqu(null==i.resultItem?null:i.resultItem.match),s.xp6(5),s.hij("",s.lcZ(16,4,null==i.resultItem?null:i.resultItem.winners),"x"),s.xp6(6),s.Oqu(s.xi3(22,6,null==i.resultItem?null:i.resultItem.amount,"EUR")))},pipes:[d.JJ,d.H9],styles:[""],changeDetection:0}),e})();h(2313);let Bi=(()=>{class e extends f{constructor(t,i,l,r,o,a,g){super(t,null,i,l),this.ngClassInstance=g,this.DIRECTIVE_KEY="ngClass",this.ngClassInstance||(this.ngClassInstance=new d.mk(r,o,t,a)),this.init(),this.setValue("","")}set klass(t){this.ngClassInstance.klass=t,this.setValue(t,"")}updateWithValue(t){this.ngClassInstance.ngClass=t,this.ngClassInstance.ngDoCheck()}ngDoCheck(){this.ngClassInstance.ngDoCheck()}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(s.SBq),s.Y36(u),s.Y36(c),s.Y36(s.ZZ4),s.Y36(s.aQg),s.Y36(s.Qsj),s.Y36(d.mk,10))},e.\u0275dir=s.lG2({type:e,inputs:{klass:["class","klass"]},features:[s.qOj]}),e})();const ki=["ngClass","ngClass.xs","ngClass.sm","ngClass.md","ngClass.lg","ngClass.xl","ngClass.lt-sm","ngClass.lt-md","ngClass.lt-lg","ngClass.lt-xl","ngClass.gt-xs","ngClass.gt-sm","ngClass.gt-md","ngClass.gt-lg"];let vt=(()=>{class e extends Bi{constructor(){super(...arguments),this.inputs=ki}}return e.\u0275fac=function(){let n;return function(i){return(n||(n=s.n5z(e)))(i||e)}}(),e.\u0275dir=s.lG2({type:e,selectors:[["","ngClass",""],["","ngClass.xs",""],["","ngClass.sm",""],["","ngClass.md",""],["","ngClass.lg",""],["","ngClass.xl",""],["","ngClass.lt-sm",""],["","ngClass.lt-md",""],["","ngClass.lt-lg",""],["","ngClass.lt-xl",""],["","ngClass.gt-xs",""],["","ngClass.gt-sm",""],["","ngClass.gt-md",""],["","ngClass.gt-lg",""]],inputs:{ngClass:"ngClass","ngClass.xs":"ngClass.xs","ngClass.sm":"ngClass.sm","ngClass.md":"ngClass.md","ngClass.lg":"ngClass.lg","ngClass.xl":"ngClass.xl","ngClass.lt-sm":"ngClass.lt-sm","ngClass.lt-md":"ngClass.lt-md","ngClass.lt-lg":"ngClass.lt-lg","ngClass.lt-xl":"ngClass.lt-xl","ngClass.gt-xs":"ngClass.gt-xs","ngClass.gt-sm":"ngClass.gt-sm","ngClass.gt-md":"ngClass.gt-md","ngClass.gt-lg":"ngClass.gt-lg"},features:[s.qOj]}),e})(),Ii=(()=>{class e extends x{buildStyles(t,i){return{display:"true"===t?i.display||(i.isServer?"initial":""):"none"}}}return e.\u0275fac=function(){let n;return function(i){return(n||(n=s.n5z(e)))(i||e)}}(),e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Ti=(()=>{class e extends f{constructor(t,i,l,r,o,a,g){super(t,i,l,r),this.layoutConfig=o,this.platformId=a,this.serverModuleLoaded=g,this.DIRECTIVE_KEY="show-hide",this.display="",this.hasLayout=!1,this.hasFlexChild=!1}ngAfterViewInit(){this.trackExtraTriggers();const t=Array.from(this.nativeElement.children);for(let l=0;l<t.length;l++)if(this.marshal.hasValue(t[l],"flex")){this.hasFlexChild=!0;break}z.has(this.nativeElement)?this.display=z.get(this.nativeElement):(this.display=this.getDisplayStyle(),z.set(this.nativeElement,this.display)),this.init();const i=this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY,"");void 0===i||""===i?this.setValue(!0,""):this.triggerUpdate()}ngOnChanges(t){Object.keys(t).forEach(i=>{if(-1!==this.inputs.indexOf(i)){const l=i.split("."),r=l.slice(1).join("."),o=t[i].currentValue;let a=""===o||0!==o&&function C(e){return null!=e&&"false"!=`${e}`}(o);"fxHide"===l[0]&&(a=!a),this.setValue(a,r)}})}trackExtraTriggers(){this.hasLayout=this.marshal.hasValue(this.nativeElement,"layout"),["layout","layout-align"].forEach(t=>{this.marshal.trackValue(this.nativeElement,t).pipe((0,M.R)(this.destroySubject)).subscribe(this.triggerUpdate.bind(this))})}getDisplayStyle(){return this.hasLayout||this.hasFlexChild&&this.layoutConfig.addFlexToParent?"flex":this.styler.lookupStyle(this.nativeElement,"display",!0)}updateWithValue(t=!0){if(""===t)return;const i=(0,d.PM)(this.platformId);this.addStyles(t?"true":"false",{display:this.display,isServer:i}),i&&this.serverModuleLoaded&&this.nativeElement.style.setProperty("display",""),this.marshal.triggerUpdate(this.parentElement,"layout-gap")}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(s.SBq),s.Y36(Ii),s.Y36(u),s.Y36(c),s.Y36(A),s.Y36(s.Lbi),s.Y36(S))},e.\u0275dir=s.lG2({type:e,features:[s.qOj,s.TTD]}),e})();const z=new WeakMap,Yi=["fxShow","fxShow.print","fxShow.xs","fxShow.sm","fxShow.md","fxShow.lg","fxShow.xl","fxShow.lt-sm","fxShow.lt-md","fxShow.lt-lg","fxShow.lt-xl","fxShow.gt-xs","fxShow.gt-sm","fxShow.gt-md","fxShow.gt-lg","fxHide","fxHide.print","fxHide.xs","fxHide.sm","fxHide.md","fxHide.lg","fxHide.xl","fxHide.lt-sm","fxHide.lt-md","fxHide.lt-lg","fxHide.lt-xl","fxHide.gt-xs","fxHide.gt-sm","fxHide.gt-md","fxHide.gt-lg"];let wt=(()=>{class e extends Ti{constructor(){super(...arguments),this.inputs=Yi}}return e.\u0275fac=function(){let n;return function(i){return(n||(n=s.n5z(e)))(i||e)}}(),e.\u0275dir=s.lG2({type:e,selectors:[["","fxShow",""],["","fxShow.print",""],["","fxShow.xs",""],["","fxShow.sm",""],["","fxShow.md",""],["","fxShow.lg",""],["","fxShow.xl",""],["","fxShow.lt-sm",""],["","fxShow.lt-md",""],["","fxShow.lt-lg",""],["","fxShow.lt-xl",""],["","fxShow.gt-xs",""],["","fxShow.gt-sm",""],["","fxShow.gt-md",""],["","fxShow.gt-lg",""],["","fxHide",""],["","fxHide.print",""],["","fxHide.xs",""],["","fxHide.sm",""],["","fxHide.md",""],["","fxHide.lg",""],["","fxHide.xl",""],["","fxHide.lt-sm",""],["","fxHide.lt-md",""],["","fxHide.lt-lg",""],["","fxHide.lt-xl",""],["","fxHide.gt-xs",""],["","fxHide.gt-sm",""],["","fxHide.gt-md",""],["","fxHide.gt-lg",""]],inputs:{fxShow:"fxShow","fxShow.print":"fxShow.print","fxShow.xs":"fxShow.xs","fxShow.sm":"fxShow.sm","fxShow.md":"fxShow.md","fxShow.lg":"fxShow.lg","fxShow.xl":"fxShow.xl","fxShow.lt-sm":"fxShow.lt-sm","fxShow.lt-md":"fxShow.lt-md","fxShow.lt-lg":"fxShow.lt-lg","fxShow.lt-xl":"fxShow.lt-xl","fxShow.gt-xs":"fxShow.gt-xs","fxShow.gt-sm":"fxShow.gt-sm","fxShow.gt-md":"fxShow.gt-md","fxShow.gt-lg":"fxShow.gt-lg",fxHide:"fxHide","fxHide.print":"fxHide.print","fxHide.xs":"fxHide.xs","fxHide.sm":"fxHide.sm","fxHide.md":"fxHide.md","fxHide.lg":"fxHide.lg","fxHide.xl":"fxHide.xl","fxHide.lt-sm":"fxHide.lt-sm","fxHide.lt-md":"fxHide.lt-md","fxHide.lt-lg":"fxHide.lt-lg","fxHide.lt-xl":"fxHide.lt-xl","fxHide.gt-xs":"fxHide.gt-xs","fxHide.gt-sm":"fxHide.gt-sm","fxHide.gt-md":"fxHide.gt-md","fxHide.gt-lg":"fxHide.gt-lg"},features:[s.qOj]}),e})(),Mt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[j]]}),e})();function zi(e,n){if(1&e&&(s.TgZ(0,"tr")(1,"td"),s._uU(2),s.qZA(),s.TgZ(3,"td"),s._uU(4),s.qZA(),s.TgZ(5,"td"),s._uU(6),s.ALo(7,"number"),s.qZA(),s.TgZ(8,"td"),s._uU(9),s.ALo(10,"currency"),s.qZA()()),2&e){const t=n.$implicit;s.xp6(2),s.Oqu(t.tier),s.xp6(2),s.Oqu(t.match),s.xp6(2),s.hij("",s.lcZ(7,4,t.winners),"x"),s.xp6(3),s.Oqu(s.xi3(10,6,t.amount,"EUR"))}}let Qi=(()=>{class e{constructor(){}ngOnInit(){console.log("result-grid",this.result)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["lottoland-result-grid"]],inputs:{result:"result"},decls:13,vars:1,consts:[[1,"table"],["scope","col"],[4,"ngFor","ngForOf"]],template:function(t,i){1&t&&(s.TgZ(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),s._uU(4,"Tier"),s.qZA(),s.TgZ(5,"th",1),s._uU(6,"Match"),s.qZA(),s.TgZ(7,"th",1),s._uU(8,"Winner numbers"),s.qZA(),s.TgZ(9,"th",1),s._uU(10,"Amount"),s.qZA()()(),s.TgZ(11,"tbody"),s.YNc(12,zi,11,9,"tr",2),s.qZA()()),2&t&&(s.xp6(12),s.Q6J("ngForOf",i.result))},directives:[d.sg],pipes:[d.JJ,d.H9],styles:[""],changeDetection:0}),e})();function Ni(e,n){if(1&e&&s._UZ(0,"lottoland-result-item",7),2&e){const i=n.index;s.Q6J("resultItem",n.$implicit)("ngClass",i%2==0?"even":"odd")}}let Ui=(()=>{class e{constructor(t,i){this.route=t,this.loaderServ=i,this.title="Eurojackpot results & Winning numbers"}ngOnInit(){this.route.data.subscribe({next:t=>{this.loaderServ.stopLoading();const i=t.results.last;this.numbers=[...i.numbers],this.euroNumbers=[...i.euroNumbers],this.resultItems=Object.entries(i.odds).filter(l=>"rank0"!==l[0]).map(l=>(0,U.r2)(l)),console.log(this.resultItems)},error:t=>{console.error("results error",t),this.loaderServ.stopLoading()}})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(W.gz),s.Y36(U.D1))},e.\u0275cmp=s.Xpm({type:e,selectors:[["lottoland-main-results"]],decls:14,vars:7,consts:[["fxLayout","row wrap"],[1,"lottery-primary","me-2","mb-2"],[1,"me-2","mb-2"],[1,"d-flex","flex-column"],[1,"mb-4",3,"numbers","redNumbers"],["class","w-100","fxHide","","fxShow.lt-md","",3,"resultItem","ngClass",4,"ngFor","ngForOf"],["fxHide","","fxShow.gt-sm","",3,"result"],["fxHide","","fxShow.lt-md","",1,"w-100",3,"resultItem","ngClass"]],template:function(t,i){1&t&&(s.TgZ(0,"h3"),s._uU(1),s.ALo(2,"uppercase"),s.qZA(),s._UZ(3,"hr"),s.TgZ(4,"div",0)(5,"label",1),s._uU(6,"Eurojackpot"),s.qZA(),s.TgZ(7,"label",2),s._uU(8,"Results for"),s.qZA(),s._UZ(9,"lottoland-result-date"),s.qZA(),s.TgZ(10,"div",3),s._UZ(11,"lottoland-winner-number",4),s.YNc(12,Ni,1,2,"lottoland-result-item",5),s._UZ(13,"lottoland-result-grid",6),s.qZA()),2&t&&(s.xp6(1),s.Oqu(s.lcZ(2,5,i.title)),s.xp6(10),s.Q6J("numbers",i.numbers)("redNumbers",i.euroNumbers),s.xp6(1),s.Q6J("ngForOf",i.resultItems),s.xp6(1),s.Q6J("result",i.resultItems))},directives:[mt,Ci,Si,d.sg,_i,wt,d.mk,vt,Qi],pipes:[d.gd],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding:10px 20px;width:100%}.even[_ngcontent-%COMP%]{background-color:#e9ecef}lottoland-result-item[_ngcontent-%COMP%]{border-bottom:1px solid lightgrey;border-right:1px solid lightgrey;border-left:1px solid lightgrey}lottoland-result-item[_ngcontent-%COMP%]:first-of-type{border-top:1px solid lightgrey}.lottery-primary[_ngcontent-%COMP%]{color:#ca7f26}"],changeDetection:0}),e})(),Wi=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[d.ez]]}),e})(),kt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[j]]}),e})(),pn=(()=>{class e{constructor(t,i){(0,d.PM)(i)&&!t&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}static withConfig(t,i=[]){return{ngModule:e,providers:t.serverLoaded?[{provide:A,useValue:Object.assign(Object.assign({},V),t)},{provide:$,useValue:i,multi:!0},{provide:S,useValue:!0}]:[{provide:A,useValue:Object.assign(Object.assign({},V),t)},{provide:$,useValue:i,multi:!0}]}}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(S),s.LFG(s.Lbi))},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[At,Mt,kt],At,Mt,kt]}),e})();var k=h(520),I=h(4882);let It=(()=>{class e{constructor(t){this.http=t}get(t,i=new k.LE){return this.http.get(`${t}`,{headers:this.headers,params:i})}post(t,i){return console.log("post",t,i),this.http.post(`${t}`,JSON.stringify(i),{headers:this.headers})}put(t,i){return this.http.put(`${t}`,JSON.stringify(i),{headers:this.headers})}delete(t){return this.http.delete(`${t}`,{headers:this.headers})}get headers(){return new k.WM({"Content-Type":"application/json",Accept:"application/json"})}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(k.eN))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac}),e})(),Tt=(()=>{class e{constructor(t){this.apiService=t}get(t,i=new k.LE){return this.apiService.get(`${I.N.api_url}${t}`,i)}post(t,i){return this.apiService.post(I.N.api_url+t,i)}put(t,i){return this.apiService.put(`${I.N.api_url}${t}`,i)}delete(t,i){return this.apiService.delete(`${I.N.api_url}${t}`)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(It))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac}),e})(),Yt=(()=>{class e{constructor(t){this.restService=t}getResults(){return this.restService.get("/drawings/euroJackpot/")}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(Tt))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac}),e})(),An=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({providers:[It],imports:[[d.ez]]}),e})(),vn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({providers:[Yt,Tt],imports:[[d.ez,An]]}),e})(),Pt=(()=>{class e{constructor(t){this.euroDataServ=t}resolve(){return this.euroDataServ.getResults()}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(Yt))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac}),e})();const wn=[{path:"",component:Ui,resolve:{results:Pt}},{path:"**",redirectTo:""}];let Cn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({providers:[Pt],imports:[[d.ez,vn,Wi,pn,W.Bz.forChild(wn)]]}),e})()}}]);