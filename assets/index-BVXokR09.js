(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();var f0={exports:{}},Vr={},m0={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),Q2=Symbol.for("react.portal"),K2=Symbol.for("react.fragment"),Y2=Symbol.for("react.strict_mode"),G2=Symbol.for("react.profiler"),X2=Symbol.for("react.provider"),Z2=Symbol.for("react.context"),J2=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.memo"),nd=Symbol.for("react.lazy"),Va=Symbol.iterator;function sd(e){return e===null||typeof e!="object"?null:(e=Va&&e[Va]||e["@@iterator"],typeof e=="function"?e:null)}var p0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x0=Object.assign,k0={};function Fs(e,t,s){this.props=e,this.context=t,this.refs=k0,this.updater=s||p0}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function g0(){}g0.prototype=Fs.prototype;function Di(e,t,s){this.props=e,this.context=t,this.refs=k0,this.updater=s||p0}var Oi=Di.prototype=new g0;Oi.constructor=Di;x0(Oi,Fs.prototype);Oi.isPureReactComponent=!0;var Ha=Array.isArray,j0=Object.prototype.hasOwnProperty,Ai={current:null},y0={key:!0,ref:!0,__self:!0,__source:!0};function v0(e,t,s){var o,r={},l=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)j0.call(t,o)&&!y0.hasOwnProperty(o)&&(r[o]=t[o]);var a=arguments.length-2;if(a===1)r.children=s;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];r.children=c}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)r[o]===void 0&&(r[o]=a[o]);return{$$typeof:$o,type:e,key:l,ref:i,props:r,_owner:Ai.current}}function od(e,t){return{$$typeof:$o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ui(e){return typeof e=="object"&&e!==null&&e.$$typeof===$o}function rd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(s){return t[s]})}var qa=/\/+/g;function cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rd(""+e.key):t.toString(36)}function tr(e,t,s,o,r){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case $o:case Q2:i=!0}}if(i)return i=e,r=r(i),e=o===""?"."+cl(i,0):o,Ha(r)?(s="",e!=null&&(s=e.replace(qa,"$&/")+"/"),tr(r,t,s,"",function(u){return u})):r!=null&&(Ui(r)&&(r=od(r,s+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(qa,"$&/")+"/")+e)),t.push(r)),1;if(i=0,o=o===""?".":o+":",Ha(e))for(var a=0;a<e.length;a++){l=e[a];var c=o+cl(l,a);i+=tr(l,t,s,c,r)}else if(c=sd(e),typeof c=="function")for(e=c.call(e),a=0;!(l=e.next()).done;)l=l.value,c=o+cl(l,a++),i+=tr(l,t,s,c,r);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Ro(e,t,s){if(e==null)return e;var o=[],r=0;return tr(e,o,"","",function(l){return t.call(s,l,r++)}),o}function ld(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(s){(e._status===0||e._status===-1)&&(e._status=1,e._result=s)},function(s){(e._status===0||e._status===-1)&&(e._status=2,e._result=s)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var kt={current:null},nr={transition:null},id={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:nr,ReactCurrentOwner:Ai};function z0(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:Ro,forEach:function(e,t,s){Ro(e,function(){t.apply(this,arguments)},s)},count:function(e){var t=0;return Ro(e,function(){t++}),t},toArray:function(e){return Ro(e,function(t){return t})||[]},only:function(e){if(!Ui(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Component=Fs;me.Fragment=K2;me.Profiler=G2;me.PureComponent=Di;me.StrictMode=Y2;me.Suspense=ed;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=id;me.act=z0;me.cloneElement=function(e,t,s){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=x0({},e.props),r=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Ai.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)j0.call(t,c)&&!y0.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=s;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];o.children=a}return{$$typeof:$o,type:e.type,key:r,ref:l,props:o,_owner:i}};me.createContext=function(e){return e={$$typeof:Z2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:X2,_context:e},e.Consumer=e};me.createElement=v0;me.createFactory=function(e){var t=v0.bind(null,e);return t.type=e,t};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:J2,render:e}};me.isValidElement=Ui;me.lazy=function(e){return{$$typeof:nd,_payload:{_status:-1,_result:e},_init:ld}};me.memo=function(e,t){return{$$typeof:td,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=nr.transition;nr.transition={};try{e()}finally{nr.transition=t}};me.unstable_act=z0;me.useCallback=function(e,t){return kt.current.useCallback(e,t)};me.useContext=function(e){return kt.current.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e){return kt.current.useDeferredValue(e)};me.useEffect=function(e,t){return kt.current.useEffect(e,t)};me.useId=function(){return kt.current.useId()};me.useImperativeHandle=function(e,t,s){return kt.current.useImperativeHandle(e,t,s)};me.useInsertionEffect=function(e,t){return kt.current.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return kt.current.useLayoutEffect(e,t)};me.useMemo=function(e,t){return kt.current.useMemo(e,t)};me.useReducer=function(e,t,s){return kt.current.useReducer(e,t,s)};me.useRef=function(e){return kt.current.useRef(e)};me.useState=function(e){return kt.current.useState(e)};me.useSyncExternalStore=function(e,t,s){return kt.current.useSyncExternalStore(e,t,s)};me.useTransition=function(){return kt.current.useTransition()};me.version="18.3.1";m0.exports=me;var j=m0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad=j,cd=Symbol.for("react.element"),ud=Symbol.for("react.fragment"),dd=Object.prototype.hasOwnProperty,hd=ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fd={key:!0,ref:!0,__self:!0,__source:!0};function w0(e,t,s){var o,r={},l=null,i=null;s!==void 0&&(l=""+s),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)dd.call(t,o)&&!fd.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:cd,type:e,key:l,ref:i,props:r,_owner:hd.current}}Vr.Fragment=ud;Vr.jsx=w0;Vr.jsxs=w0;f0.exports=Vr;var n=f0.exports,N0={exports:{}},Pt={},b0={exports:{}},S0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,X){var ee=D.length;D.push(X);e:for(;0<ee;){var ze=ee-1>>>1,qe=D[ze];if(0<r(qe,X))D[ze]=X,D[ee]=qe,ee=ze;else break e}}function s(D){return D.length===0?null:D[0]}function o(D){if(D.length===0)return null;var X=D[0],ee=D.pop();if(ee!==X){D[0]=ee;e:for(var ze=0,qe=D.length,gn=qe>>>1;ze<gn;){var bt=2*(ze+1)-1,Ft=D[bt],E=bt+1,I=D[E];if(0>r(Ft,ee))E<qe&&0>r(I,Ft)?(D[ze]=I,D[E]=ee,ze=E):(D[ze]=Ft,D[bt]=ee,ze=bt);else if(E<qe&&0>r(I,ee))D[ze]=I,D[E]=ee,ze=E;else break e}}return X}function r(D,X){var ee=D.sortIndex-X.sortIndex;return ee!==0?ee:D.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var c=[],u=[],x=1,g=null,m=3,y=!1,w=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(D){for(var X=s(u);X!==null;){if(X.callback===null)o(u);else if(X.startTime<=D)o(u),X.sortIndex=X.expirationTime,t(c,X);else break;X=s(u)}}function z(D){if(v=!1,p(D),!w)if(s(c)!==null)w=!0,ct(C);else{var X=s(u);X!==null&&K(z,X.startTime-D)}}function C(D,X){w=!1,v&&(v=!1,h(_),_=-1),y=!0;var ee=m;try{for(p(X),g=s(c);g!==null&&(!(g.expirationTime>X)||D&&!W());){var ze=g.callback;if(typeof ze=="function"){g.callback=null,m=g.priorityLevel;var qe=ze(g.expirationTime<=X);X=e.unstable_now(),typeof qe=="function"?g.callback=qe:g===s(c)&&o(c),p(X)}else o(c);g=s(c)}if(g!==null)var gn=!0;else{var bt=s(u);bt!==null&&K(z,bt.startTime-X),gn=!1}return gn}finally{g=null,m=ee,y=!1}}var M=!1,S=null,_=-1,T=5,$=-1;function W(){return!(e.unstable_now()-$<T)}function le(){if(S!==null){var D=e.unstable_now();$=D;var X=!0;try{X=S(!0,D)}finally{X?de():(M=!1,S=null)}}else M=!1}var de;if(typeof f=="function")de=function(){f(le)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,Re=He.port2;He.port1.onmessage=le,de=function(){Re.postMessage(null)}}else de=function(){b(le,0)};function ct(D){S=D,M||(M=!0,de())}function K(D,X){_=b(function(){D(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,ct(C))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return s(c)},e.unstable_next=function(D){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var ee=m;m=X;try{return D()}finally{m=ee}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ee=m;m=D;try{return X()}finally{m=ee}},e.unstable_scheduleCallback=function(D,X,ee){var ze=e.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ze+ee:ze):ee=ze,D){case 1:var qe=-1;break;case 2:qe=250;break;case 5:qe=1073741823;break;case 4:qe=1e4;break;default:qe=5e3}return qe=ee+qe,D={id:x++,callback:X,priorityLevel:D,startTime:ee,expirationTime:qe,sortIndex:-1},ee>ze?(D.sortIndex=ee,t(u,D),s(c)===null&&D===s(u)&&(v?(h(_),_=-1):v=!0,K(z,ee-ze))):(D.sortIndex=qe,t(c,D),w||y||(w=!0,ct(C))),D},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(D){var X=m;return function(){var ee=m;m=X;try{return D.apply(this,arguments)}finally{m=ee}}}})(S0);b0.exports=S0;var md=b0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd=j,Tt=md;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C0=new Set,fo={};function rs(e,t){Cs(e,t),Cs(e+"Capture",t)}function Cs(e,t){for(fo[e]=t,e=0;e<t.length;e++)C0.add(t[e])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Il=Object.prototype.hasOwnProperty,xd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qa={},Ka={};function kd(e){return Il.call(Ka,e)?!0:Il.call(Qa,e)?!1:xd.test(e)?Ka[e]=!0:(Qa[e]=!0,!1)}function gd(e,t,s,o){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jd(e,t,s,o){if(t===null||typeof t>"u"||gd(e,t,s,o))return!0;if(o)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,s,o,r,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=s,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){it[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];it[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){it[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){it[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){it[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){it[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){it[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){it[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){it[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wi=/[\-:]([a-z])/g;function Bi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wi,Bi);it[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wi,Bi);it[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wi,Bi);it[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){it[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});it.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){it[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vi(e,t,s,o){var r=it.hasOwnProperty(t)?it[t]:null;(r!==null?r.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jd(t,s,r,o)&&(s=null),o||r===null?kd(t)&&(s===null?e.removeAttribute(t):e.setAttribute(t,""+s)):r.mustUseProperty?e[r.propertyName]=s===null?r.type===3?!1:"":s:(t=r.attributeName,o=r.attributeNamespace,s===null?e.removeAttribute(t):(r=r.type,s=r===3||r===4&&s===!0?"":""+s,o?e.setAttributeNS(o,t,s):e.setAttribute(t,s))))}var kn=pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),cs=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),Hi=Symbol.for("react.strict_mode"),Dl=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),M0=Symbol.for("react.context"),qi=Symbol.for("react.forward_ref"),Ol=Symbol.for("react.suspense"),Al=Symbol.for("react.suspense_list"),Qi=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),E0=Symbol.for("react.offscreen"),Ya=Symbol.iterator;function As(e){return e===null||typeof e!="object"?null:(e=Ya&&e[Ya]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Object.assign,ul;function Xs(e){if(ul===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);ul=t&&t[1]||""}return`
`+ul+e}var dl=!1;function hl(e,t){if(!e||dl)return"";dl=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var o=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){o=u}e.call(t.prototype)}else{try{throw Error()}catch(u){o=u}e()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),l=o.stack.split(`
`),i=r.length-1,a=l.length-1;1<=i&&0<=a&&r[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(r[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||r[i]!==l[a]){var c=`
`+r[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=a);break}}}finally{dl=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?Xs(e):""}function yd(e){switch(e.tag){case 5:return Xs(e.type);case 16:return Xs("Lazy");case 13:return Xs("Suspense");case 19:return Xs("SuspenseList");case 0:case 2:case 15:return e=hl(e.type,!1),e;case 11:return e=hl(e.type.render,!1),e;case 1:return e=hl(e.type,!0),e;default:return""}}function Ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case us:return"Fragment";case cs:return"Portal";case Dl:return"Profiler";case Hi:return"StrictMode";case Ol:return"Suspense";case Al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M0:return(e.displayName||"Context")+".Consumer";case _0:return(e._context.displayName||"Context")+".Provider";case qi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qi:return t=e.displayName||null,t!==null?t:Ul(e.type)||"Memo";case wn:t=e._payload,e=e._init;try{return Ul(e(t))}catch{}}return null}function vd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ul(t);case 8:return t===Hi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function In(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zd(e){var t=$0(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var r=s.get,l=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(i){o=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Do(e){e._valueTracker||(e._valueTracker=zd(e))}function T0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),o="";return e&&(o=$0(e)?e.checked?"true":"false":e.value),e=o,e!==s?(t.setValue(e),!0):!1}function pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wl(e,t){var s=t.checked;return Ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function Ga(e,t){var s=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;s=In(t.value!=null?t.value:s),e._wrapperState={initialChecked:o,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function P0(e,t){t=t.checked,t!=null&&Vi(e,"checked",t,!1)}function Bl(e,t){P0(e,t);var s=In(t.value),o=t.type;if(s!=null)o==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vl(e,t.type,s):t.hasOwnProperty("defaultValue")&&Vl(e,t.type,In(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xa(e,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,s||t===e.value||(e.value=t),e.defaultValue=t}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function Vl(e,t,s){(t!=="number"||pr(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var Zs=Array.isArray;function vs(e,t,s,o){if(e=e.options,t){t={};for(var r=0;r<s.length;r++)t["$"+s[r]]=!0;for(s=0;s<e.length;s++)r=t.hasOwnProperty("$"+e[s].value),e[s].selected!==r&&(e[s].selected=r),r&&o&&(e[s].defaultSelected=!0)}else{for(s=""+In(s),t=null,r=0;r<e.length;r++){if(e[r].value===s){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return Ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Za(e,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(O(92));if(Zs(s)){if(1<s.length)throw Error(O(93));s=s[0]}t=s}t==null&&(t=""),s=t}e._wrapperState={initialValue:In(s)}}function L0(e,t){var s=In(t.value),o=In(t.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),t.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),o!=null&&(e.defaultValue=""+o)}function Ja(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function F0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ql(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?F0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oo,R0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,s,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,s,o,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mo(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wd=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(e){wd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),no[t]=no[e]})});function I0(e,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||no.hasOwnProperty(e)&&no[e]?(""+t).trim():t+"px"}function D0(e,t){e=e.style;for(var s in t)if(t.hasOwnProperty(s)){var o=s.indexOf("--")===0,r=I0(s,t[s],o);s==="float"&&(s="cssFloat"),o?e.setProperty(s,r):e[s]=r}}var Nd=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ql(e,t){if(t){if(Nd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function Kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yl=null;function Ki(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gl=null,zs=null,ws=null;function ec(e){if(e=Lo(e)){if(typeof Gl!="function")throw Error(O(280));var t=e.stateNode;t&&(t=Yr(t),Gl(e.stateNode,e.type,t))}}function O0(e){zs?ws?ws.push(e):ws=[e]:zs=e}function A0(){if(zs){var e=zs,t=ws;if(ws=zs=null,ec(e),t)for(e=0;e<t.length;e++)ec(t[e])}}function U0(e,t){return e(t)}function W0(){}var fl=!1;function B0(e,t,s){if(fl)return e(t,s);fl=!0;try{return U0(e,t,s)}finally{fl=!1,(zs!==null||ws!==null)&&(W0(),A0())}}function po(e,t){var s=e.stateNode;if(s===null)return null;var o=Yr(s);if(o===null)return null;s=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(O(231,t,typeof s));return s}var Xl=!1;if(hn)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){Xl=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{Xl=!1}function bd(e,t,s,o,r,l,i,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(s,u)}catch(x){this.onError(x)}}var so=!1,xr=null,kr=!1,Zl=null,Sd={onError:function(e){so=!0,xr=e}};function Cd(e,t,s,o,r,l,i,a,c){so=!1,xr=null,bd.apply(Sd,arguments)}function _d(e,t,s,o,r,l,i,a,c){if(Cd.apply(this,arguments),so){if(so){var u=xr;so=!1,xr=null}else throw Error(O(198));kr||(kr=!0,Zl=u)}}function ls(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function V0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tc(e){if(ls(e)!==e)throw Error(O(188))}function Md(e){var t=e.alternate;if(!t){if(t=ls(e),t===null)throw Error(O(188));return t!==e?null:e}for(var s=e,o=t;;){var r=s.return;if(r===null)break;var l=r.alternate;if(l===null){if(o=r.return,o!==null){s=o;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===s)return tc(r),e;if(l===o)return tc(r),t;l=l.sibling}throw Error(O(188))}if(s.return!==o.return)s=r,o=l;else{for(var i=!1,a=r.child;a;){if(a===s){i=!0,s=r,o=l;break}if(a===o){i=!0,o=r,s=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===s){i=!0,s=l,o=r;break}if(a===o){i=!0,o=l,s=r;break}a=a.sibling}if(!i)throw Error(O(189))}}if(s.alternate!==o)throw Error(O(190))}if(s.tag!==3)throw Error(O(188));return s.stateNode.current===s?e:t}function H0(e){return e=Md(e),e!==null?q0(e):null}function q0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=q0(e);if(t!==null)return t;e=e.sibling}return null}var Q0=Tt.unstable_scheduleCallback,nc=Tt.unstable_cancelCallback,Ed=Tt.unstable_shouldYield,$d=Tt.unstable_requestPaint,Ke=Tt.unstable_now,Td=Tt.unstable_getCurrentPriorityLevel,Yi=Tt.unstable_ImmediatePriority,K0=Tt.unstable_UserBlockingPriority,gr=Tt.unstable_NormalPriority,Pd=Tt.unstable_LowPriority,Y0=Tt.unstable_IdlePriority,Hr=null,tn=null;function Ld(e){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Hr,e,void 0,(e.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:Id,Fd=Math.log,Rd=Math.LN2;function Id(e){return e>>>=0,e===0?32:31-(Fd(e)/Rd|0)|0}var Ao=64,Uo=4194304;function Js(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jr(e,t){var s=e.pendingLanes;if(s===0)return 0;var o=0,r=e.suspendedLanes,l=e.pingedLanes,i=s&268435455;if(i!==0){var a=i&~r;a!==0?o=Js(a):(l&=i,l!==0&&(o=Js(l)))}else i=s&~r,i!==0?o=Js(i):l!==0&&(o=Js(l));if(o===0)return 0;if(t!==0&&t!==o&&!(t&r)&&(r=o&-o,l=t&-t,r>=l||r===16&&(l&4194240)!==0))return t;if(o&4&&(o|=s&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)s=31-Qt(t),r=1<<s,o|=e[s],t&=~r;return o}function Dd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Od(e,t){for(var s=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Qt(l),a=1<<i,c=r[i];c===-1?(!(a&s)||a&o)&&(r[i]=Dd(a,t)):c<=t&&(e.expiredLanes|=a),l&=~a}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function G0(){var e=Ao;return Ao<<=1,!(Ao&4194240)&&(Ao=64),e}function ml(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function To(e,t,s){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qt(t),e[t]=s}function Ad(e,t){var s=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<s;){var r=31-Qt(s),l=1<<r;t[r]=0,o[r]=-1,e[r]=-1,s&=~l}}function Gi(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var o=31-Qt(s),r=1<<o;r&t|e[o]&t&&(e[o]|=t),s&=~r}}var Se=0;function X0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Z0,Xi,J0,eu,tu,ei=!1,Wo=[],Mn=null,En=null,$n=null,xo=new Map,ko=new Map,bn=[],Ud="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sc(e,t){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":xo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(t.pointerId)}}function Ws(e,t,s,o,r,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:s,eventSystemFlags:o,nativeEvent:l,targetContainers:[r]},t!==null&&(t=Lo(t),t!==null&&Xi(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Wd(e,t,s,o,r){switch(t){case"focusin":return Mn=Ws(Mn,e,t,s,o,r),!0;case"dragenter":return En=Ws(En,e,t,s,o,r),!0;case"mouseover":return $n=Ws($n,e,t,s,o,r),!0;case"pointerover":var l=r.pointerId;return xo.set(l,Ws(xo.get(l)||null,e,t,s,o,r)),!0;case"gotpointercapture":return l=r.pointerId,ko.set(l,Ws(ko.get(l)||null,e,t,s,o,r)),!0}return!1}function nu(e){var t=Kn(e.target);if(t!==null){var s=ls(t);if(s!==null){if(t=s.tag,t===13){if(t=V0(s),t!==null){e.blockedOn=t,tu(e.priority,function(){J0(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=ti(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);Yl=o,s.target.dispatchEvent(o),Yl=null}else return t=Lo(s),t!==null&&Xi(t),e.blockedOn=s,!1;t.shift()}return!0}function oc(e,t,s){sr(e)&&s.delete(t)}function Bd(){ei=!1,Mn!==null&&sr(Mn)&&(Mn=null),En!==null&&sr(En)&&(En=null),$n!==null&&sr($n)&&($n=null),xo.forEach(oc),ko.forEach(oc)}function Bs(e,t){e.blockedOn===t&&(e.blockedOn=null,ei||(ei=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,Bd)))}function go(e){function t(r){return Bs(r,e)}if(0<Wo.length){Bs(Wo[0],e);for(var s=1;s<Wo.length;s++){var o=Wo[s];o.blockedOn===e&&(o.blockedOn=null)}}for(Mn!==null&&Bs(Mn,e),En!==null&&Bs(En,e),$n!==null&&Bs($n,e),xo.forEach(t),ko.forEach(t),s=0;s<bn.length;s++)o=bn[s],o.blockedOn===e&&(o.blockedOn=null);for(;0<bn.length&&(s=bn[0],s.blockedOn===null);)nu(s),s.blockedOn===null&&bn.shift()}var Ns=kn.ReactCurrentBatchConfig,yr=!0;function Vd(e,t,s,o){var r=Se,l=Ns.transition;Ns.transition=null;try{Se=1,Zi(e,t,s,o)}finally{Se=r,Ns.transition=l}}function Hd(e,t,s,o){var r=Se,l=Ns.transition;Ns.transition=null;try{Se=4,Zi(e,t,s,o)}finally{Se=r,Ns.transition=l}}function Zi(e,t,s,o){if(yr){var r=ti(e,t,s,o);if(r===null)Nl(e,t,o,vr,s),sc(e,o);else if(Wd(r,e,t,s,o))o.stopPropagation();else if(sc(e,o),t&4&&-1<Ud.indexOf(e)){for(;r!==null;){var l=Lo(r);if(l!==null&&Z0(l),l=ti(e,t,s,o),l===null&&Nl(e,t,o,vr,s),l===r)break;r=l}r!==null&&o.stopPropagation()}else Nl(e,t,o,null,s)}}var vr=null;function ti(e,t,s,o){if(vr=null,e=Ki(o),e=Kn(e),e!==null)if(t=ls(e),t===null)e=null;else if(s=t.tag,s===13){if(e=V0(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vr=e,null}function su(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Td()){case Yi:return 1;case K0:return 4;case gr:case Pd:return 16;case Y0:return 536870912;default:return 16}default:return 16}}var Cn=null,Ji=null,or=null;function ou(){if(or)return or;var e,t=Ji,s=t.length,o,r="value"in Cn?Cn.value:Cn.textContent,l=r.length;for(e=0;e<s&&t[e]===r[e];e++);var i=s-e;for(o=1;o<=i&&t[s-o]===r[l-o];o++);return or=r.slice(e,1<o?1-o:void 0)}function rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bo(){return!0}function rc(){return!1}function Lt(e){function t(s,o,r,l,i){this._reactName=s,this._targetInst=r,this.type=o,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(s=e[a],this[a]=s?s(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Bo:rc,this.isPropagationStopped=rc,this}return Ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),t}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=Lt(Rs),Po=Ve({},Rs,{view:0,detail:0}),qd=Lt(Po),pl,xl,Vs,qr=Ve({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vs&&(Vs&&e.type==="mousemove"?(pl=e.screenX-Vs.screenX,xl=e.screenY-Vs.screenY):xl=pl=0,Vs=e),pl)},movementY:function(e){return"movementY"in e?e.movementY:xl}}),lc=Lt(qr),Qd=Ve({},qr,{dataTransfer:0}),Kd=Lt(Qd),Yd=Ve({},Po,{relatedTarget:0}),kl=Lt(Yd),Gd=Ve({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Xd=Lt(Gd),Zd=Ve({},Rs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jd=Lt(Zd),e1=Ve({},Rs,{data:0}),ic=Lt(e1),t1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=s1[e])?!!t[e]:!1}function ta(){return o1}var r1=Ve({},Po,{key:function(e){if(e.key){var t=t1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?n1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ta,charCode:function(e){return e.type==="keypress"?rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),l1=Lt(r1),i1=Ve({},qr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ac=Lt(i1),a1=Ve({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ta}),c1=Lt(a1),u1=Ve({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),d1=Lt(u1),h1=Ve({},qr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f1=Lt(h1),m1=[9,13,27,32],na=hn&&"CompositionEvent"in window,oo=null;hn&&"documentMode"in document&&(oo=document.documentMode);var p1=hn&&"TextEvent"in window&&!oo,ru=hn&&(!na||oo&&8<oo&&11>=oo),cc=" ",uc=!1;function lu(e,t){switch(e){case"keyup":return m1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ds=!1;function x1(e,t){switch(e){case"compositionend":return iu(t);case"keypress":return t.which!==32?null:(uc=!0,cc);case"textInput":return e=t.data,e===cc&&uc?null:e;default:return null}}function k1(e,t){if(ds)return e==="compositionend"||!na&&lu(e,t)?(e=ou(),or=Ji=Cn=null,ds=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ru&&t.locale!=="ko"?null:t.data;default:return null}}var g1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!g1[e.type]:t==="textarea"}function au(e,t,s,o){O0(o),t=zr(t,"onChange"),0<t.length&&(s=new ea("onChange","change",null,s,o),e.push({event:s,listeners:t}))}var ro=null,jo=null;function j1(e){ju(e,0)}function Qr(e){var t=ms(e);if(T0(t))return e}function y1(e,t){if(e==="change")return t}var cu=!1;if(hn){var gl;if(hn){var jl="oninput"in document;if(!jl){var hc=document.createElement("div");hc.setAttribute("oninput","return;"),jl=typeof hc.oninput=="function"}gl=jl}else gl=!1;cu=gl&&(!document.documentMode||9<document.documentMode)}function fc(){ro&&(ro.detachEvent("onpropertychange",uu),jo=ro=null)}function uu(e){if(e.propertyName==="value"&&Qr(jo)){var t=[];au(t,jo,e,Ki(e)),B0(j1,t)}}function v1(e,t,s){e==="focusin"?(fc(),ro=t,jo=s,ro.attachEvent("onpropertychange",uu)):e==="focusout"&&fc()}function z1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qr(jo)}function w1(e,t){if(e==="click")return Qr(t)}function N1(e,t){if(e==="input"||e==="change")return Qr(t)}function b1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:b1;function yo(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),o=Object.keys(t);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var r=s[o];if(!Il.call(t,r)||!Yt(e[r],t[r]))return!1}return!0}function mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pc(e,t){var s=mc(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=t&&o>=t)return{node:s,offset:t-e};e=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=mc(s)}}function du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hu(){for(var e=window,t=pr();t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=pr(e.document)}return t}function sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function S1(e){var t=hu(),s=e.focusedElem,o=e.selectionRange;if(t!==s&&s&&s.ownerDocument&&du(s.ownerDocument.documentElement,s)){if(o!==null&&sa(s)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(e,s.value.length);else if(e=(t=s.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=s.textContent.length,l=Math.min(o.start,r);o=o.end===void 0?l:Math.min(o.end,r),!e.extend&&l>o&&(r=o,o=l,l=r),r=pc(s,l);var i=pc(s,o);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),l>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=s;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)e=t[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var C1=hn&&"documentMode"in document&&11>=document.documentMode,hs=null,ni=null,lo=null,si=!1;function xc(e,t,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;si||hs==null||hs!==pr(o)||(o=hs,"selectionStart"in o&&sa(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&yo(lo,o)||(lo=o,o=zr(ni,"onSelect"),0<o.length&&(t=new ea("onSelect","select",null,t,s),e.push({event:t,listeners:o}),t.target=hs)))}function Vo(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var fs={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},yl={},fu={};hn&&(fu=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Kr(e){if(yl[e])return yl[e];if(!fs[e])return e;var t=fs[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in fu)return yl[e]=t[s];return e}var mu=Kr("animationend"),pu=Kr("animationiteration"),xu=Kr("animationstart"),ku=Kr("transitionend"),gu=new Map,kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,t){gu.set(e,t),rs(t,[e])}for(var vl=0;vl<kc.length;vl++){var zl=kc[vl],_1=zl.toLowerCase(),M1=zl[0].toUpperCase()+zl.slice(1);Un(_1,"on"+M1)}Un(mu,"onAnimationEnd");Un(pu,"onAnimationIteration");Un(xu,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(ku,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E1=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function gc(e,t,s){var o=e.type||"unknown-event";e.currentTarget=s,_d(o,t,void 0,e),e.currentTarget=null}function ju(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],r=o.event;o=o.listeners;e:{var l=void 0;if(t)for(var i=o.length-1;0<=i;i--){var a=o[i],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==l&&r.isPropagationStopped())break e;gc(r,a,u),l=c}else for(i=0;i<o.length;i++){if(a=o[i],c=a.instance,u=a.currentTarget,a=a.listener,c!==l&&r.isPropagationStopped())break e;gc(r,a,u),l=c}}}if(kr)throw e=Zl,kr=!1,Zl=null,e}function Pe(e,t){var s=t[ai];s===void 0&&(s=t[ai]=new Set);var o=e+"__bubble";s.has(o)||(yu(t,e,2,!1),s.add(o))}function wl(e,t,s){var o=0;t&&(o|=4),yu(s,e,o,t)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function vo(e){if(!e[Ho]){e[Ho]=!0,C0.forEach(function(s){s!=="selectionchange"&&(E1.has(s)||wl(s,!1,e),wl(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ho]||(t[Ho]=!0,wl("selectionchange",!1,t))}}function yu(e,t,s,o){switch(su(t)){case 1:var r=Vd;break;case 4:r=Hd;break;default:r=Zi}s=r.bind(null,t,s,e),r=void 0,!Xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,s,{capture:!0,passive:r}):e.addEventListener(t,s,!0):r!==void 0?e.addEventListener(t,s,{passive:r}):e.addEventListener(t,s,!1)}function Nl(e,t,s,o,r){var l=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var a=o.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(i===4)for(i=o.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;i=i.return}for(;a!==null;){if(i=Kn(a),i===null)return;if(c=i.tag,c===5||c===6){o=l=i;continue e}a=a.parentNode}}o=o.return}B0(function(){var u=l,x=Ki(s),g=[];e:{var m=gu.get(e);if(m!==void 0){var y=ea,w=e;switch(e){case"keypress":if(rr(s)===0)break e;case"keydown":case"keyup":y=l1;break;case"focusin":w="focus",y=kl;break;case"focusout":w="blur",y=kl;break;case"beforeblur":case"afterblur":y=kl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=c1;break;case mu:case pu:case xu:y=Xd;break;case ku:y=d1;break;case"scroll":y=qd;break;case"wheel":y=f1;break;case"copy":case"cut":case"paste":y=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ac}var v=(t&4)!==0,b=!v&&e==="scroll",h=v?m!==null?m+"Capture":null:m;v=[];for(var f=u,p;f!==null;){p=f;var z=p.stateNode;if(p.tag===5&&z!==null&&(p=z,h!==null&&(z=po(f,h),z!=null&&v.push(zo(f,z,p)))),b)break;f=f.return}0<v.length&&(m=new y(m,w,null,s,x),g.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&s!==Yl&&(w=s.relatedTarget||s.fromElement)&&(Kn(w)||w[fn]))break e;if((y||m)&&(m=x.window===x?x:(m=x.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=s.relatedTarget||s.toElement,y=u,w=w?Kn(w):null,w!==null&&(b=ls(w),w!==b||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(v=lc,z="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=ac,z="onPointerLeave",h="onPointerEnter",f="pointer"),b=y==null?m:ms(y),p=w==null?m:ms(w),m=new v(z,f+"leave",y,s,x),m.target=b,m.relatedTarget=p,z=null,Kn(x)===u&&(v=new v(h,f+"enter",w,s,x),v.target=p,v.relatedTarget=b,z=v),b=z,y&&w)t:{for(v=y,h=w,f=0,p=v;p;p=as(p))f++;for(p=0,z=h;z;z=as(z))p++;for(;0<f-p;)v=as(v),f--;for(;0<p-f;)h=as(h),p--;for(;f--;){if(v===h||h!==null&&v===h.alternate)break t;v=as(v),h=as(h)}v=null}else v=null;y!==null&&jc(g,m,y,v,!1),w!==null&&b!==null&&jc(g,b,w,v,!0)}}e:{if(m=u?ms(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var C=y1;else if(dc(m))if(cu)C=N1;else{C=z1;var M=v1}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=w1);if(C&&(C=C(e,u))){au(g,C,s,x);break e}M&&M(e,m,u),e==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&Vl(m,"number",m.value)}switch(M=u?ms(u):window,e){case"focusin":(dc(M)||M.contentEditable==="true")&&(hs=M,ni=u,lo=null);break;case"focusout":lo=ni=hs=null;break;case"mousedown":si=!0;break;case"contextmenu":case"mouseup":case"dragend":si=!1,xc(g,s,x);break;case"selectionchange":if(C1)break;case"keydown":case"keyup":xc(g,s,x)}var S;if(na)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ds?lu(e,s)&&(_="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(_="onCompositionStart");_&&(ru&&s.locale!=="ko"&&(ds||_!=="onCompositionStart"?_==="onCompositionEnd"&&ds&&(S=ou()):(Cn=x,Ji="value"in Cn?Cn.value:Cn.textContent,ds=!0)),M=zr(u,_),0<M.length&&(_=new ic(_,e,null,s,x),g.push({event:_,listeners:M}),S?_.data=S:(S=iu(s),S!==null&&(_.data=S)))),(S=p1?x1(e,s):k1(e,s))&&(u=zr(u,"onBeforeInput"),0<u.length&&(x=new ic("onBeforeInput","beforeinput",null,s,x),g.push({event:x,listeners:u}),x.data=S))}ju(g,t)})}function zo(e,t,s){return{instance:e,listener:t,currentTarget:s}}function zr(e,t){for(var s=t+"Capture",o=[];e!==null;){var r=e,l=r.stateNode;r.tag===5&&l!==null&&(r=l,l=po(e,s),l!=null&&o.unshift(zo(e,l,r)),l=po(e,t),l!=null&&o.push(zo(e,l,r))),e=e.return}return o}function as(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jc(e,t,s,o,r){for(var l=t._reactName,i=[];s!==null&&s!==o;){var a=s,c=a.alternate,u=a.stateNode;if(c!==null&&c===o)break;a.tag===5&&u!==null&&(a=u,r?(c=po(s,l),c!=null&&i.unshift(zo(s,c,a))):r||(c=po(s,l),c!=null&&i.push(zo(s,c,a)))),s=s.return}i.length!==0&&e.push({event:t,listeners:i})}var $1=/\r\n?/g,T1=/\u0000|\uFFFD/g;function yc(e){return(typeof e=="string"?e:""+e).replace($1,`
`).replace(T1,"")}function qo(e,t,s){if(t=yc(t),yc(e)!==t&&s)throw Error(O(425))}function wr(){}var oi=null,ri=null;function li(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ii=typeof setTimeout=="function"?setTimeout:void 0,P1=typeof clearTimeout=="function"?clearTimeout:void 0,vc=typeof Promise=="function"?Promise:void 0,L1=typeof queueMicrotask=="function"?queueMicrotask:typeof vc<"u"?function(e){return vc.resolve(null).then(e).catch(F1)}:ii;function F1(e){setTimeout(function(){throw e})}function bl(e,t){var s=t,o=0;do{var r=s.nextSibling;if(e.removeChild(s),r&&r.nodeType===8)if(s=r.data,s==="/$"){if(o===0){e.removeChild(r),go(t);return}o--}else s!=="$"&&s!=="$?"&&s!=="$!"||o++;s=r}while(s);go(t)}function Tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return e;t--}else s==="/$"&&t++}e=e.previousSibling}return null}var Is=Math.random().toString(36).slice(2),en="__reactFiber$"+Is,wo="__reactProps$"+Is,fn="__reactContainer$"+Is,ai="__reactEvents$"+Is,R1="__reactListeners$"+Is,I1="__reactHandles$"+Is;function Kn(e){var t=e[en];if(t)return t;for(var s=e.parentNode;s;){if(t=s[fn]||s[en]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=zc(e);e!==null;){if(s=e[en])return s;e=zc(e)}return t}e=s,s=e.parentNode}return null}function Lo(e){return e=e[en]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ms(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function Yr(e){return e[wo]||null}var ci=[],ps=-1;function Wn(e){return{current:e}}function Fe(e){0>ps||(e.current=ci[ps],ci[ps]=null,ps--)}function $e(e,t){ps++,ci[ps]=e.current,e.current=t}var Dn={},mt=Wn(Dn),zt=Wn(!1),es=Dn;function _s(e,t){var s=e.type.contextTypes;if(!s)return Dn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r={},l;for(l in s)r[l]=t[l];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function wt(e){return e=e.childContextTypes,e!=null}function Nr(){Fe(zt),Fe(mt)}function wc(e,t,s){if(mt.current!==Dn)throw Error(O(168));$e(mt,t),$e(zt,s)}function vu(e,t,s){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return s;o=o.getChildContext();for(var r in o)if(!(r in t))throw Error(O(108,vd(e)||"Unknown",r));return Ve({},s,o)}function br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,es=mt.current,$e(mt,e),$e(zt,zt.current),!0}function Nc(e,t,s){var o=e.stateNode;if(!o)throw Error(O(169));s?(e=vu(e,t,es),o.__reactInternalMemoizedMergedChildContext=e,Fe(zt),Fe(mt),$e(mt,e)):Fe(zt),$e(zt,s)}var an=null,Gr=!1,Sl=!1;function zu(e){an===null?an=[e]:an.push(e)}function D1(e){Gr=!0,zu(e)}function Bn(){if(!Sl&&an!==null){Sl=!0;var e=0,t=Se;try{var s=an;for(Se=1;e<s.length;e++){var o=s[e];do o=o(!0);while(o!==null)}an=null,Gr=!1}catch(r){throw an!==null&&(an=an.slice(e+1)),Q0(Yi,Bn),r}finally{Se=t,Sl=!1}}return null}var xs=[],ks=0,Sr=null,Cr=0,It=[],Dt=0,ts=null,cn=1,un="";function qn(e,t){xs[ks++]=Cr,xs[ks++]=Sr,Sr=e,Cr=t}function wu(e,t,s){It[Dt++]=cn,It[Dt++]=un,It[Dt++]=ts,ts=e;var o=cn;e=un;var r=32-Qt(o)-1;o&=~(1<<r),s+=1;var l=32-Qt(t)+r;if(30<l){var i=r-r%5;l=(o&(1<<i)-1).toString(32),o>>=i,r-=i,cn=1<<32-Qt(t)+r|s<<r|o,un=l+e}else cn=1<<l|s<<r|o,un=e}function oa(e){e.return!==null&&(qn(e,1),wu(e,1,0))}function ra(e){for(;e===Sr;)Sr=xs[--ks],xs[ks]=null,Cr=xs[--ks],xs[ks]=null;for(;e===ts;)ts=It[--Dt],It[Dt]=null,un=It[--Dt],It[Dt]=null,cn=It[--Dt],It[Dt]=null}var $t=null,Et=null,Oe=!1,qt=null;function Nu(e,t){var s=Ot(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=e,t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)}function bc(e,t){switch(e.tag){case 5:var s=e.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$t=e,Et=Tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$t=e,Et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=ts!==null?{id:cn,overflow:un}:null,e.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=Ot(18,null,null,0),s.stateNode=t,s.return=e,e.child=s,$t=e,Et=null,!0):!1;default:return!1}}function ui(e){return(e.mode&1)!==0&&(e.flags&128)===0}function di(e){if(Oe){var t=Et;if(t){var s=t;if(!bc(e,t)){if(ui(e))throw Error(O(418));t=Tn(s.nextSibling);var o=$t;t&&bc(e,t)?Nu(o,s):(e.flags=e.flags&-4097|2,Oe=!1,$t=e)}}else{if(ui(e))throw Error(O(418));e.flags=e.flags&-4097|2,Oe=!1,$t=e}}}function Sc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$t=e}function Qo(e){if(e!==$t)return!1;if(!Oe)return Sc(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!li(e.type,e.memoizedProps)),t&&(t=Et)){if(ui(e))throw bu(),Error(O(418));for(;t;)Nu(e,t),t=Tn(t.nextSibling)}if(Sc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(t===0){Et=Tn(e.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}e=e.nextSibling}Et=null}}else Et=$t?Tn(e.stateNode.nextSibling):null;return!0}function bu(){for(var e=Et;e;)e=Tn(e.nextSibling)}function Ms(){Et=$t=null,Oe=!1}function la(e){qt===null?qt=[e]:qt.push(e)}var O1=kn.ReactCurrentBatchConfig;function Hs(e,t,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(O(309));var o=s.stateNode}if(!o)throw Error(O(147,e));var r=o,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=r.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(O(284));if(!s._owner)throw Error(O(290,e))}return e}function Ko(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cc(e){var t=e._init;return t(e._payload)}function Su(e){function t(h,f){if(e){var p=h.deletions;p===null?(h.deletions=[f],h.flags|=16):p.push(f)}}function s(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function o(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function r(h,f){return h=Rn(h,f),h.index=0,h.sibling=null,h}function l(h,f,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<f?(h.flags|=2,f):p):(h.flags|=2,f)):(h.flags|=1048576,f)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,f,p,z){return f===null||f.tag!==6?(f=Pl(p,h.mode,z),f.return=h,f):(f=r(f,p),f.return=h,f)}function c(h,f,p,z){var C=p.type;return C===us?x(h,f,p.props.children,z,p.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wn&&Cc(C)===f.type)?(z=r(f,p.props),z.ref=Hs(h,f,p),z.return=h,z):(z=hr(p.type,p.key,p.props,null,h.mode,z),z.ref=Hs(h,f,p),z.return=h,z)}function u(h,f,p,z){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=Ll(p,h.mode,z),f.return=h,f):(f=r(f,p.children||[]),f.return=h,f)}function x(h,f,p,z,C){return f===null||f.tag!==7?(f=Jn(p,h.mode,z,C),f.return=h,f):(f=r(f,p),f.return=h,f)}function g(h,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Pl(""+f,h.mode,p),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Io:return p=hr(f.type,f.key,f.props,null,h.mode,p),p.ref=Hs(h,null,f),p.return=h,p;case cs:return f=Ll(f,h.mode,p),f.return=h,f;case wn:var z=f._init;return g(h,z(f._payload),p)}if(Zs(f)||As(f))return f=Jn(f,h.mode,p,null),f.return=h,f;Ko(h,f)}return null}function m(h,f,p,z){var C=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(h,f,""+p,z);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Io:return p.key===C?c(h,f,p,z):null;case cs:return p.key===C?u(h,f,p,z):null;case wn:return C=p._init,m(h,f,C(p._payload),z)}if(Zs(p)||As(p))return C!==null?null:x(h,f,p,z,null);Ko(h,p)}return null}function y(h,f,p,z,C){if(typeof z=="string"&&z!==""||typeof z=="number")return h=h.get(p)||null,a(f,h,""+z,C);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Io:return h=h.get(z.key===null?p:z.key)||null,c(f,h,z,C);case cs:return h=h.get(z.key===null?p:z.key)||null,u(f,h,z,C);case wn:var M=z._init;return y(h,f,p,M(z._payload),C)}if(Zs(z)||As(z))return h=h.get(p)||null,x(f,h,z,C,null);Ko(f,z)}return null}function w(h,f,p,z){for(var C=null,M=null,S=f,_=f=0,T=null;S!==null&&_<p.length;_++){S.index>_?(T=S,S=null):T=S.sibling;var $=m(h,S,p[_],z);if($===null){S===null&&(S=T);break}e&&S&&$.alternate===null&&t(h,S),f=l($,f,_),M===null?C=$:M.sibling=$,M=$,S=T}if(_===p.length)return s(h,S),Oe&&qn(h,_),C;if(S===null){for(;_<p.length;_++)S=g(h,p[_],z),S!==null&&(f=l(S,f,_),M===null?C=S:M.sibling=S,M=S);return Oe&&qn(h,_),C}for(S=o(h,S);_<p.length;_++)T=y(S,h,_,p[_],z),T!==null&&(e&&T.alternate!==null&&S.delete(T.key===null?_:T.key),f=l(T,f,_),M===null?C=T:M.sibling=T,M=T);return e&&S.forEach(function(W){return t(h,W)}),Oe&&qn(h,_),C}function v(h,f,p,z){var C=As(p);if(typeof C!="function")throw Error(O(150));if(p=C.call(p),p==null)throw Error(O(151));for(var M=C=null,S=f,_=f=0,T=null,$=p.next();S!==null&&!$.done;_++,$=p.next()){S.index>_?(T=S,S=null):T=S.sibling;var W=m(h,S,$.value,z);if(W===null){S===null&&(S=T);break}e&&S&&W.alternate===null&&t(h,S),f=l(W,f,_),M===null?C=W:M.sibling=W,M=W,S=T}if($.done)return s(h,S),Oe&&qn(h,_),C;if(S===null){for(;!$.done;_++,$=p.next())$=g(h,$.value,z),$!==null&&(f=l($,f,_),M===null?C=$:M.sibling=$,M=$);return Oe&&qn(h,_),C}for(S=o(h,S);!$.done;_++,$=p.next())$=y(S,h,_,$.value,z),$!==null&&(e&&$.alternate!==null&&S.delete($.key===null?_:$.key),f=l($,f,_),M===null?C=$:M.sibling=$,M=$);return e&&S.forEach(function(le){return t(h,le)}),Oe&&qn(h,_),C}function b(h,f,p,z){if(typeof p=="object"&&p!==null&&p.type===us&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Io:e:{for(var C=p.key,M=f;M!==null;){if(M.key===C){if(C=p.type,C===us){if(M.tag===7){s(h,M.sibling),f=r(M,p.props.children),f.return=h,h=f;break e}}else if(M.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wn&&Cc(C)===M.type){s(h,M.sibling),f=r(M,p.props),f.ref=Hs(h,M,p),f.return=h,h=f;break e}s(h,M);break}else t(h,M);M=M.sibling}p.type===us?(f=Jn(p.props.children,h.mode,z,p.key),f.return=h,h=f):(z=hr(p.type,p.key,p.props,null,h.mode,z),z.ref=Hs(h,f,p),z.return=h,h=z)}return i(h);case cs:e:{for(M=p.key;f!==null;){if(f.key===M)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){s(h,f.sibling),f=r(f,p.children||[]),f.return=h,h=f;break e}else{s(h,f);break}else t(h,f);f=f.sibling}f=Ll(p,h.mode,z),f.return=h,h=f}return i(h);case wn:return M=p._init,b(h,f,M(p._payload),z)}if(Zs(p))return w(h,f,p,z);if(As(p))return v(h,f,p,z);Ko(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(s(h,f.sibling),f=r(f,p),f.return=h,h=f):(s(h,f),f=Pl(p,h.mode,z),f.return=h,h=f),i(h)):s(h,f)}return b}var Es=Su(!0),Cu=Su(!1),_r=Wn(null),Mr=null,gs=null,ia=null;function aa(){ia=gs=Mr=null}function ca(e){var t=_r.current;Fe(_r),e._currentValue=t}function hi(e,t,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===s)break;e=e.return}}function bs(e,t){Mr=e,ia=gs=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(vt=!0),e.firstContext=null)}function Ut(e){var t=e._currentValue;if(ia!==e)if(e={context:e,memoizedValue:t,next:null},gs===null){if(Mr===null)throw Error(O(308));gs=e,Mr.dependencies={lanes:0,firstContext:e}}else gs=gs.next=e;return t}var Yn=null;function ua(e){Yn===null?Yn=[e]:Yn.push(e)}function _u(e,t,s,o){var r=t.interleaved;return r===null?(s.next=s,ua(t)):(s.next=r.next,r.next=s),t.interleaved=s,mn(e,o)}function mn(e,t){e.lanes|=t;var s=e.alternate;for(s!==null&&(s.lanes|=t),s=e,e=e.return;e!==null;)e.childLanes|=t,s=e.alternate,s!==null&&(s.childLanes|=t),s=e,e=e.return;return s.tag===3?s.stateNode:null}var Nn=!1;function da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,xe&2){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,mn(e,s)}return r=o.interleaved,r===null?(t.next=t,ua(o)):(t.next=r.next,r.next=t),o.interleaved=t,mn(e,s)}function lr(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,s|=o,t.lanes=s,Gi(e,s)}}function _c(e,t){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var r=null,l=null;if(s=s.firstBaseUpdate,s!==null){do{var i={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};l===null?r=l=i:l=l.next=i,s=s.next}while(s!==null);l===null?r=l=t:l=l.next=t}else r=l=t;s={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:o.shared,effects:o.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}function Er(e,t,s,o){var r=e.updateQueue;Nn=!1;var l=r.firstBaseUpdate,i=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var c=a,u=c.next;c.next=null,i===null?l=u:i.next=u,i=c;var x=e.alternate;x!==null&&(x=x.updateQueue,a=x.lastBaseUpdate,a!==i&&(a===null?x.firstBaseUpdate=u:a.next=u,x.lastBaseUpdate=c))}if(l!==null){var g=r.baseState;i=0,x=u=c=null,a=l;do{var m=a.lane,y=a.eventTime;if((o&m)===m){x!==null&&(x=x.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,v=a;switch(m=t,y=s,v.tag){case 1:if(w=v.payload,typeof w=="function"){g=w.call(y,g,m);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,m=typeof w=="function"?w.call(y,g,m):w,m==null)break e;g=Ve({},g,m);break e;case 2:Nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},x===null?(u=x=y,c=g):x=x.next=y,i|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(x===null&&(c=g),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=x,t=r.shared.interleaved,t!==null){r=t;do i|=r.lane,r=r.next;while(r!==t)}else l===null&&(r.shared.lanes=0);ss|=i,e.lanes=i,e.memoizedState=g}}function Mc(e,t,s){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(r!==null){if(o.callback=null,o=s,typeof r!="function")throw Error(O(191,r));r.call(o)}}}var Fo={},nn=Wn(Fo),No=Wn(Fo),bo=Wn(Fo);function Gn(e){if(e===Fo)throw Error(O(174));return e}function ha(e,t){switch($e(bo,t),$e(No,e),$e(nn,Fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ql(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ql(t,e)}Fe(nn),$e(nn,t)}function $s(){Fe(nn),Fe(No),Fe(bo)}function Eu(e){Gn(bo.current);var t=Gn(nn.current),s=ql(t,e.type);t!==s&&($e(No,e),$e(nn,s))}function fa(e){No.current===e&&(Fe(nn),Fe(No))}var We=Wn(0);function $r(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cl=[];function ma(){for(var e=0;e<Cl.length;e++)Cl[e]._workInProgressVersionPrimary=null;Cl.length=0}var ir=kn.ReactCurrentDispatcher,_l=kn.ReactCurrentBatchConfig,ns=0,Be=null,Ze=null,st=null,Tr=!1,io=!1,So=0,A1=0;function ut(){throw Error(O(321))}function pa(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!Yt(e[s],t[s]))return!1;return!0}function xa(e,t,s,o,r,l){if(ns=l,Be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ir.current=e===null||e.memoizedState===null?V1:H1,e=s(o,r),io){l=0;do{if(io=!1,So=0,25<=l)throw Error(O(301));l+=1,st=Ze=null,t.updateQueue=null,ir.current=q1,e=s(o,r)}while(io)}if(ir.current=Pr,t=Ze!==null&&Ze.next!==null,ns=0,st=Ze=Be=null,Tr=!1,t)throw Error(O(300));return e}function ka(){var e=So!==0;return So=0,e}function Jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Be.memoizedState=st=e:st=st.next=e,st}function Wt(){if(Ze===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=st===null?Be.memoizedState:st.next;if(t!==null)st=t,Ze=e;else{if(e===null)throw Error(O(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},st===null?Be.memoizedState=st=e:st=st.next=e}return st}function Co(e,t){return typeof t=="function"?t(e):t}function Ml(e){var t=Wt(),s=t.queue;if(s===null)throw Error(O(311));s.lastRenderedReducer=e;var o=Ze,r=o.baseQueue,l=s.pending;if(l!==null){if(r!==null){var i=r.next;r.next=l.next,l.next=i}o.baseQueue=r=l,s.pending=null}if(r!==null){l=r.next,o=o.baseState;var a=i=null,c=null,u=l;do{var x=u.lane;if((ns&x)===x)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:e(o,u.action);else{var g={lane:x,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=g,i=o):c=c.next=g,Be.lanes|=x,ss|=x}u=u.next}while(u!==null&&u!==l);c===null?i=o:c.next=a,Yt(o,t.memoizedState)||(vt=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=c,s.lastRenderedState=o}if(e=s.interleaved,e!==null){r=e;do l=r.lane,Be.lanes|=l,ss|=l,r=r.next;while(r!==e)}else r===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function El(e){var t=Wt(),s=t.queue;if(s===null)throw Error(O(311));s.lastRenderedReducer=e;var o=s.dispatch,r=s.pending,l=t.memoizedState;if(r!==null){s.pending=null;var i=r=r.next;do l=e(l,i.action),i=i.next;while(i!==r);Yt(l,t.memoizedState)||(vt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),s.lastRenderedState=l}return[l,o]}function $u(){}function Tu(e,t){var s=Be,o=Wt(),r=t(),l=!Yt(o.memoizedState,r);if(l&&(o.memoizedState=r,vt=!0),o=o.queue,ga(Fu.bind(null,s,o,e),[e]),o.getSnapshot!==t||l||st!==null&&st.memoizedState.tag&1){if(s.flags|=2048,_o(9,Lu.bind(null,s,o,r,t),void 0,null),ot===null)throw Error(O(349));ns&30||Pu(s,t,r)}return r}function Pu(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function Lu(e,t,s,o){t.value=s,t.getSnapshot=o,Ru(t)&&Iu(e)}function Fu(e,t,s){return s(function(){Ru(t)&&Iu(e)})}function Ru(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!Yt(e,s)}catch{return!0}}function Iu(e){var t=mn(e,1);t!==null&&Kt(t,e,1,-1)}function Ec(e){var t=Jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:e},t.queue=e,e=e.dispatch=B1.bind(null,Be,e),[t.memoizedState,e]}function _o(e,t,s,o){return e={tag:e,create:t,destroy:s,deps:o,next:null},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.lastEffect=e.next=e):(s=t.lastEffect,s===null?t.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,t.lastEffect=e)),e}function Du(){return Wt().memoizedState}function ar(e,t,s,o){var r=Jt();Be.flags|=e,r.memoizedState=_o(1|t,s,void 0,o===void 0?null:o)}function Xr(e,t,s,o){var r=Wt();o=o===void 0?null:o;var l=void 0;if(Ze!==null){var i=Ze.memoizedState;if(l=i.destroy,o!==null&&pa(o,i.deps)){r.memoizedState=_o(t,s,l,o);return}}Be.flags|=e,r.memoizedState=_o(1|t,s,l,o)}function $c(e,t){return ar(8390656,8,e,t)}function ga(e,t){return Xr(2048,8,e,t)}function Ou(e,t){return Xr(4,2,e,t)}function Au(e,t){return Xr(4,4,e,t)}function Uu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wu(e,t,s){return s=s!=null?s.concat([e]):null,Xr(4,4,Uu.bind(null,t,e),s)}function ja(){}function Bu(e,t){var s=Wt();t=t===void 0?null:t;var o=s.memoizedState;return o!==null&&t!==null&&pa(t,o[1])?o[0]:(s.memoizedState=[e,t],e)}function Vu(e,t){var s=Wt();t=t===void 0?null:t;var o=s.memoizedState;return o!==null&&t!==null&&pa(t,o[1])?o[0]:(e=e(),s.memoizedState=[e,t],e)}function Hu(e,t,s){return ns&21?(Yt(s,t)||(s=G0(),Be.lanes|=s,ss|=s,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=s)}function U1(e,t){var s=Se;Se=s!==0&&4>s?s:4,e(!0);var o=_l.transition;_l.transition={};try{e(!1),t()}finally{Se=s,_l.transition=o}}function qu(){return Wt().memoizedState}function W1(e,t,s){var o=Fn(e);if(s={lane:o,action:s,hasEagerState:!1,eagerState:null,next:null},Qu(e))Ku(t,s);else if(s=_u(e,t,s,o),s!==null){var r=xt();Kt(s,e,o,r),Yu(s,t,o)}}function B1(e,t,s){var o=Fn(e),r={lane:o,action:s,hasEagerState:!1,eagerState:null,next:null};if(Qu(e))Ku(t,r);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,s);if(r.hasEagerState=!0,r.eagerState=a,Yt(a,i)){var c=t.interleaved;c===null?(r.next=r,ua(t)):(r.next=c.next,c.next=r),t.interleaved=r;return}}catch{}finally{}s=_u(e,t,r,o),s!==null&&(r=xt(),Kt(s,e,o,r),Yu(s,t,o))}}function Qu(e){var t=e.alternate;return e===Be||t!==null&&t===Be}function Ku(e,t){io=Tr=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function Yu(e,t,s){if(s&4194240){var o=t.lanes;o&=e.pendingLanes,s|=o,t.lanes=s,Gi(e,s)}}var Pr={readContext:Ut,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},V1={readContext:Ut,useCallback:function(e,t){return Jt().memoizedState=[e,t===void 0?null:t],e},useContext:Ut,useEffect:$c,useImperativeHandle:function(e,t,s){return s=s!=null?s.concat([e]):null,ar(4194308,4,Uu.bind(null,t,e),s)},useLayoutEffect:function(e,t){return ar(4194308,4,e,t)},useInsertionEffect:function(e,t){return ar(4,2,e,t)},useMemo:function(e,t){var s=Jt();return t=t===void 0?null:t,e=e(),s.memoizedState=[e,t],e},useReducer:function(e,t,s){var o=Jt();return t=s!==void 0?s(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=W1.bind(null,Be,e),[o.memoizedState,e]},useRef:function(e){var t=Jt();return e={current:e},t.memoizedState=e},useState:Ec,useDebugValue:ja,useDeferredValue:function(e){return Jt().memoizedState=e},useTransition:function(){var e=Ec(!1),t=e[0];return e=U1.bind(null,e[1]),Jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,s){var o=Be,r=Jt();if(Oe){if(s===void 0)throw Error(O(407));s=s()}else{if(s=t(),ot===null)throw Error(O(349));ns&30||Pu(o,t,s)}r.memoizedState=s;var l={value:s,getSnapshot:t};return r.queue=l,$c(Fu.bind(null,o,l,e),[e]),o.flags|=2048,_o(9,Lu.bind(null,o,l,s,t),void 0,null),s},useId:function(){var e=Jt(),t=ot.identifierPrefix;if(Oe){var s=un,o=cn;s=(o&~(1<<32-Qt(o)-1)).toString(32)+s,t=":"+t+"R"+s,s=So++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=A1++,t=":"+t+"r"+s.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},H1={readContext:Ut,useCallback:Bu,useContext:Ut,useEffect:ga,useImperativeHandle:Wu,useInsertionEffect:Ou,useLayoutEffect:Au,useMemo:Vu,useReducer:Ml,useRef:Du,useState:function(){return Ml(Co)},useDebugValue:ja,useDeferredValue:function(e){var t=Wt();return Hu(t,Ze.memoizedState,e)},useTransition:function(){var e=Ml(Co)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:$u,useSyncExternalStore:Tu,useId:qu,unstable_isNewReconciler:!1},q1={readContext:Ut,useCallback:Bu,useContext:Ut,useEffect:ga,useImperativeHandle:Wu,useInsertionEffect:Ou,useLayoutEffect:Au,useMemo:Vu,useReducer:El,useRef:Du,useState:function(){return El(Co)},useDebugValue:ja,useDeferredValue:function(e){var t=Wt();return Ze===null?t.memoizedState=e:Hu(t,Ze.memoizedState,e)},useTransition:function(){var e=El(Co)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:$u,useSyncExternalStore:Tu,useId:qu,unstable_isNewReconciler:!1};function Vt(e,t){if(e&&e.defaultProps){t=Ve({},t),e=e.defaultProps;for(var s in e)t[s]===void 0&&(t[s]=e[s]);return t}return t}function fi(e,t,s,o){t=e.memoizedState,s=s(o,t),s=s==null?t:Ve({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Zr={isMounted:function(e){return(e=e._reactInternals)?ls(e)===e:!1},enqueueSetState:function(e,t,s){e=e._reactInternals;var o=xt(),r=Fn(e),l=dn(o,r);l.payload=t,s!=null&&(l.callback=s),t=Pn(e,l,r),t!==null&&(Kt(t,e,r,o),lr(t,e,r))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var o=xt(),r=Fn(e),l=dn(o,r);l.tag=1,l.payload=t,s!=null&&(l.callback=s),t=Pn(e,l,r),t!==null&&(Kt(t,e,r,o),lr(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=xt(),o=Fn(e),r=dn(s,o);r.tag=2,t!=null&&(r.callback=t),t=Pn(e,r,o),t!==null&&(Kt(t,e,o,s),lr(t,e,o))}};function Tc(e,t,s,o,r,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,i):t.prototype&&t.prototype.isPureReactComponent?!yo(s,o)||!yo(r,l):!0}function Gu(e,t,s){var o=!1,r=Dn,l=t.contextType;return typeof l=="object"&&l!==null?l=Ut(l):(r=wt(t)?es:mt.current,o=t.contextTypes,l=(o=o!=null)?_s(e,r):Dn),t=new t(s,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zr,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),t}function Pc(e,t,s,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,o),t.state!==e&&Zr.enqueueReplaceState(t,t.state,null)}function mi(e,t,s,o){var r=e.stateNode;r.props=s,r.state=e.memoizedState,r.refs={},da(e);var l=t.contextType;typeof l=="object"&&l!==null?r.context=Ut(l):(l=wt(t)?es:mt.current,r.context=_s(e,l)),r.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(fi(e,t,l,s),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Zr.enqueueReplaceState(r,r.state,null),Er(e,s,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Ts(e,t){try{var s="",o=t;do s+=yd(o),o=o.return;while(o);var r=s}catch(l){r=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:r,digest:null}}function $l(e,t,s){return{value:e,source:null,stack:s??null,digest:t??null}}function pi(e,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var Q1=typeof WeakMap=="function"?WeakMap:Map;function Xu(e,t,s){s=dn(-1,s),s.tag=3,s.payload={element:null};var o=t.value;return s.callback=function(){Fr||(Fr=!0,bi=o),pi(e,t)},s}function Zu(e,t,s){s=dn(-1,s),s.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=t.value;s.payload=function(){return o(r)},s.callback=function(){pi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(s.callback=function(){pi(e,t),typeof o!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),s}function Lc(e,t,s){var o=e.pingCache;if(o===null){o=e.pingCache=new Q1;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(s)||(r.add(s),e=ih.bind(null,e,t,s),t.then(e,e))}function Fc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Rc(e,t,s,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=dn(-1,1),t.tag=2,Pn(s,t,1))),s.lanes|=1),e)}var K1=kn.ReactCurrentOwner,vt=!1;function pt(e,t,s,o){t.child=e===null?Cu(t,null,s,o):Es(t,e.child,s,o)}function Ic(e,t,s,o,r){s=s.render;var l=t.ref;return bs(t,r),o=xa(e,t,s,o,l,r),s=ka(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,pn(e,t,r)):(Oe&&s&&oa(t),t.flags|=1,pt(e,t,o,r),t.child)}function Dc(e,t,s,o,r){if(e===null){var l=s.type;return typeof l=="function"&&!Ca(l)&&l.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=l,Ju(e,t,l,o,r)):(e=hr(s.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&r)){var i=l.memoizedProps;if(s=s.compare,s=s!==null?s:yo,s(i,o)&&e.ref===t.ref)return pn(e,t,r)}return t.flags|=1,e=Rn(l,o),e.ref=t.ref,e.return=t,t.child=e}function Ju(e,t,s,o,r){if(e!==null){var l=e.memoizedProps;if(yo(l,o)&&e.ref===t.ref)if(vt=!1,t.pendingProps=o=l,(e.lanes&r)!==0)e.flags&131072&&(vt=!0);else return t.lanes=e.lanes,pn(e,t,r)}return xi(e,t,s,o,r)}function e2(e,t,s){var o=t.pendingProps,r=o.children,l=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(ys,Mt),Mt|=s;else{if(!(s&1073741824))return e=l!==null?l.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$e(ys,Mt),Mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=l!==null?l.baseLanes:s,$e(ys,Mt),Mt|=o}else l!==null?(o=l.baseLanes|s,t.memoizedState=null):o=s,$e(ys,Mt),Mt|=o;return pt(e,t,r,s),t.child}function t2(e,t){var s=t.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function xi(e,t,s,o,r){var l=wt(s)?es:mt.current;return l=_s(t,l),bs(t,r),s=xa(e,t,s,o,l,r),o=ka(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,pn(e,t,r)):(Oe&&o&&oa(t),t.flags|=1,pt(e,t,s,r),t.child)}function Oc(e,t,s,o,r){if(wt(s)){var l=!0;br(t)}else l=!1;if(bs(t,r),t.stateNode===null)cr(e,t),Gu(t,s,o),mi(t,s,o,r),o=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var c=i.context,u=s.contextType;typeof u=="object"&&u!==null?u=Ut(u):(u=wt(s)?es:mt.current,u=_s(t,u));var x=s.getDerivedStateFromProps,g=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==o||c!==u)&&Pc(t,i,o,u),Nn=!1;var m=t.memoizedState;i.state=m,Er(t,o,i,r),c=t.memoizedState,a!==o||m!==c||zt.current||Nn?(typeof x=="function"&&(fi(t,s,x,o),c=t.memoizedState),(a=Nn||Tc(t,s,a,o,m,c,u))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),i.props=o,i.state=c,i.context=u,o=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,Mu(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Vt(t.type,a),i.props=u,g=t.pendingProps,m=i.context,c=s.contextType,typeof c=="object"&&c!==null?c=Ut(c):(c=wt(s)?es:mt.current,c=_s(t,c));var y=s.getDerivedStateFromProps;(x=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==g||m!==c)&&Pc(t,i,o,c),Nn=!1,m=t.memoizedState,i.state=m,Er(t,o,i,r);var w=t.memoizedState;a!==g||m!==w||zt.current||Nn?(typeof y=="function"&&(fi(t,s,y,o),w=t.memoizedState),(u=Nn||Tc(t,s,u,o,m,w,c)||!1)?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,w,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,w,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=w),i.props=o,i.state=w,i.context=c,o=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),o=!1)}return ki(e,t,s,o,l,r)}function ki(e,t,s,o,r,l){t2(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return r&&Nc(t,s,!1),pn(e,t,l);o=t.stateNode,K1.current=t;var a=i&&typeof s.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=Es(t,e.child,null,l),t.child=Es(t,null,a,l)):pt(e,t,a,l),t.memoizedState=o.state,r&&Nc(t,s,!0),t.child}function n2(e){var t=e.stateNode;t.pendingContext?wc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wc(e,t.context,!1),ha(e,t.containerInfo)}function Ac(e,t,s,o,r){return Ms(),la(r),t.flags|=256,pt(e,t,s,o),t.child}var gi={dehydrated:null,treeContext:null,retryLane:0};function ji(e){return{baseLanes:e,cachePool:null,transitions:null}}function s2(e,t,s){var o=t.pendingProps,r=We.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),$e(We,r&1),e===null)return di(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=o.children,e=o.fallback,l?(o=t.mode,l=t.child,i={mode:"hidden",children:i},!(o&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=tl(i,o,0,null),e=Jn(e,o,s,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ji(s),t.memoizedState=gi,e):ya(t,i));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Y1(e,t,i,o,a,r,s);if(l){l=o.fallback,i=t.mode,r=e.child,a=r.sibling;var c={mode:"hidden",children:o.children};return!(i&1)&&t.child!==r?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=Rn(r,c),o.subtreeFlags=r.subtreeFlags&14680064),a!==null?l=Rn(a,l):(l=Jn(l,i,s,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,i=e.child.memoizedState,i=i===null?ji(s):{baseLanes:i.baseLanes|s,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~s,t.memoizedState=gi,o}return l=e.child,e=l.sibling,o=Rn(l,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=s),o.return=t,o.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=o,t.memoizedState=null,o}function ya(e,t){return t=tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yo(e,t,s,o){return o!==null&&la(o),Es(t,e.child,null,s),e=ya(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Y1(e,t,s,o,r,l,i){if(s)return t.flags&256?(t.flags&=-257,o=$l(Error(O(422))),Yo(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=o.fallback,r=t.mode,o=tl({mode:"visible",children:o.children},r,0,null),l=Jn(l,r,i,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,t.mode&1&&Es(t,e.child,null,i),t.child.memoizedState=ji(i),t.memoizedState=gi,l);if(!(t.mode&1))return Yo(e,t,i,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var a=o.dgst;return o=a,l=Error(O(419)),o=$l(l,o,void 0),Yo(e,t,i,o)}if(a=(i&e.childLanes)!==0,vt||a){if(o=ot,o!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|i)?0:r,r!==0&&r!==l.retryLane&&(l.retryLane=r,mn(e,r),Kt(o,e,r,-1))}return Sa(),o=$l(Error(O(421))),Yo(e,t,i,o)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=ah.bind(null,e),r._reactRetry=t,null):(e=l.treeContext,Et=Tn(r.nextSibling),$t=t,Oe=!0,qt=null,e!==null&&(It[Dt++]=cn,It[Dt++]=un,It[Dt++]=ts,cn=e.id,un=e.overflow,ts=t),t=ya(t,o.children),t.flags|=4096,t)}function Uc(e,t,s){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),hi(e.return,t,s)}function Tl(e,t,s,o,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:r}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=s,l.tailMode=r)}function o2(e,t,s){var o=t.pendingProps,r=o.revealOrder,l=o.tail;if(pt(e,t,o.children,s),o=We.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uc(e,s,t);else if(e.tag===19)Uc(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if($e(We,o),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(s=t.child,r=null;s!==null;)e=s.alternate,e!==null&&$r(e)===null&&(r=s),s=s.sibling;s=r,s===null?(r=t.child,t.child=null):(r=s.sibling,s.sibling=null),Tl(t,!1,r,s,l);break;case"backwards":for(s=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&$r(e)===null){t.child=r;break}e=r.sibling,r.sibling=s,s=r,r=e}Tl(t,!0,s,null,l);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pn(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),ss|=t.lanes,!(s&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,s=Rn(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=Rn(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function G1(e,t,s){switch(t.tag){case 3:n2(t),Ms();break;case 5:Eu(t);break;case 1:wt(t.type)&&br(t);break;case 4:ha(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;$e(_r,o._currentValue),o._currentValue=r;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?($e(We,We.current&1),t.flags|=128,null):s&t.child.childLanes?s2(e,t,s):($e(We,We.current&1),e=pn(e,t,s),e!==null?e.sibling:null);$e(We,We.current&1);break;case 19:if(o=(s&t.childLanes)!==0,e.flags&128){if(o)return o2(e,t,s);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$e(We,We.current),o)break;return null;case 22:case 23:return t.lanes=0,e2(e,t,s)}return pn(e,t,s)}var r2,yi,l2,i2;r2=function(e,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}};yi=function(){};l2=function(e,t,s,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,Gn(nn.current);var l=null;switch(s){case"input":r=Wl(e,r),o=Wl(e,o),l=[];break;case"select":r=Ve({},r,{value:void 0}),o=Ve({},o,{value:void 0}),l=[];break;case"textarea":r=Hl(e,r),o=Hl(e,o),l=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=wr)}Ql(s,o);var i;s=null;for(u in r)if(!o.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(i in a)a.hasOwnProperty(i)&&(s||(s={}),s[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fo.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in o){var c=o[u];if(a=r!=null?r[u]:void 0,o.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(s||(s={}),s[i]="");for(i in c)c.hasOwnProperty(i)&&a[i]!==c[i]&&(s||(s={}),s[i]=c[i])}else s||(l||(l=[]),l.push(u,s)),s=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(l=l||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Pe("scroll",e),l||a===c||(l=[])):(l=l||[]).push(u,c))}s&&(l=l||[]).push("style",s);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};i2=function(e,t,s,o){s!==o&&(t.flags|=4)};function qs(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function dt(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(t)for(var r=e.child;r!==null;)s|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)s|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=s,t}function X1(e,t,s){var o=t.pendingProps;switch(ra(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(t),null;case 1:return wt(t.type)&&Nr(),dt(t),null;case 3:return o=t.stateNode,$s(),Fe(zt),Fe(mt),ma(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Qo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qt!==null&&(_i(qt),qt=null))),yi(e,t),dt(t),null;case 5:fa(t);var r=Gn(bo.current);if(s=t.type,e!==null&&t.stateNode!=null)l2(e,t,s,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(O(166));return dt(t),null}if(e=Gn(nn.current),Qo(t)){o=t.stateNode,s=t.type;var l=t.memoizedProps;switch(o[en]=t,o[wo]=l,e=(t.mode&1)!==0,s){case"dialog":Pe("cancel",o),Pe("close",o);break;case"iframe":case"object":case"embed":Pe("load",o);break;case"video":case"audio":for(r=0;r<eo.length;r++)Pe(eo[r],o);break;case"source":Pe("error",o);break;case"img":case"image":case"link":Pe("error",o),Pe("load",o);break;case"details":Pe("toggle",o);break;case"input":Ga(o,l),Pe("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!l.multiple},Pe("invalid",o);break;case"textarea":Za(o,l),Pe("invalid",o)}Ql(s,l),r=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?o.textContent!==a&&(l.suppressHydrationWarning!==!0&&qo(o.textContent,a,e),r=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&qo(o.textContent,a,e),r=["children",""+a]):fo.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&Pe("scroll",o)}switch(s){case"input":Do(o),Xa(o,l,!0);break;case"textarea":Do(o),Ja(o);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(o.onclick=wr)}o=r,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=F0(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(s,{is:o.is}):(e=i.createElement(s),s==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,s),e[en]=t,e[wo]=o,r2(e,t,!1,!1),t.stateNode=e;e:{switch(i=Kl(s,o),s){case"dialog":Pe("cancel",e),Pe("close",e),r=o;break;case"iframe":case"object":case"embed":Pe("load",e),r=o;break;case"video":case"audio":for(r=0;r<eo.length;r++)Pe(eo[r],e);r=o;break;case"source":Pe("error",e),r=o;break;case"img":case"image":case"link":Pe("error",e),Pe("load",e),r=o;break;case"details":Pe("toggle",e),r=o;break;case"input":Ga(e,o),r=Wl(e,o),Pe("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=Ve({},o,{value:void 0}),Pe("invalid",e);break;case"textarea":Za(e,o),r=Hl(e,o),Pe("invalid",e);break;default:r=o}Ql(s,r),a=r;for(l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="style"?D0(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&R0(e,c)):l==="children"?typeof c=="string"?(s!=="textarea"||c!=="")&&mo(e,c):typeof c=="number"&&mo(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(fo.hasOwnProperty(l)?c!=null&&l==="onScroll"&&Pe("scroll",e):c!=null&&Vi(e,l,c,i))}switch(s){case"input":Do(e),Xa(e,o,!1);break;case"textarea":Do(e),Ja(e);break;case"option":o.value!=null&&e.setAttribute("value",""+In(o.value));break;case"select":e.multiple=!!o.multiple,l=o.value,l!=null?vs(e,!!o.multiple,l,!1):o.defaultValue!=null&&vs(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=wr)}switch(s){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return dt(t),null;case 6:if(e&&t.stateNode!=null)i2(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(O(166));if(s=Gn(bo.current),Gn(nn.current),Qo(t)){if(o=t.stateNode,s=t.memoizedProps,o[en]=t,(l=o.nodeValue!==s)&&(e=$t,e!==null))switch(e.tag){case 3:qo(o.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qo(o.nodeValue,s,(e.mode&1)!==0)}l&&(t.flags|=4)}else o=(s.nodeType===9?s:s.ownerDocument).createTextNode(o),o[en]=t,t.stateNode=o}return dt(t),null;case 13:if(Fe(We),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&Et!==null&&t.mode&1&&!(t.flags&128))bu(),Ms(),t.flags|=98560,l=!1;else if(l=Qo(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(O(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(O(317));l[en]=t}else Ms(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dt(t),l=!1}else qt!==null&&(_i(qt),qt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=s,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||We.current&1?Je===0&&(Je=3):Sa())),t.updateQueue!==null&&(t.flags|=4),dt(t),null);case 4:return $s(),yi(e,t),e===null&&vo(t.stateNode.containerInfo),dt(t),null;case 10:return ca(t.type._context),dt(t),null;case 17:return wt(t.type)&&Nr(),dt(t),null;case 19:if(Fe(We),l=t.memoizedState,l===null)return dt(t),null;if(o=(t.flags&128)!==0,i=l.rendering,i===null)if(o)qs(l,!1);else{if(Je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=$r(e),i!==null){for(t.flags|=128,qs(l,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=s,s=t.child;s!==null;)l=s,e=o,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return $e(We,We.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ke()>Ps&&(t.flags|=128,o=!0,qs(l,!1),t.lanes=4194304)}else{if(!o)if(e=$r(i),e!==null){if(t.flags|=128,o=!0,s=e.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),qs(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Oe)return dt(t),null}else 2*Ke()-l.renderingStartTime>Ps&&s!==1073741824&&(t.flags|=128,o=!0,qs(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(s=l.last,s!==null?s.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ke(),t.sibling=null,s=We.current,$e(We,o?s&1|2:s&1),t):(dt(t),null);case 22:case 23:return ba(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Mt&1073741824&&(dt(t),t.subtreeFlags&6&&(t.flags|=8192)):dt(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function Z1(e,t){switch(ra(t),t.tag){case 1:return wt(t.type)&&Nr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $s(),Fe(zt),Fe(mt),ma(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fa(t),null;case 13:if(Fe(We),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));Ms()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(We),null;case 4:return $s(),null;case 10:return ca(t.type._context),null;case 22:case 23:return ba(),null;case 24:return null;default:return null}}var Go=!1,ft=!1,J1=typeof WeakSet=="function"?WeakSet:Set,B=null;function js(e,t){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(o){Qe(e,t,o)}else s.current=null}function vi(e,t,s){try{s()}catch(o){Qe(e,t,o)}}var Wc=!1;function eh(e,t){if(oi=yr,e=hu(),sa(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var r=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{s.nodeType,l.nodeType}catch{s=null;break e}var i=0,a=-1,c=-1,u=0,x=0,g=e,m=null;t:for(;;){for(var y;g!==s||r!==0&&g.nodeType!==3||(a=i+r),g!==l||o!==0&&g.nodeType!==3||(c=i+o),g.nodeType===3&&(i+=g.nodeValue.length),(y=g.firstChild)!==null;)m=g,g=y;for(;;){if(g===e)break t;if(m===s&&++u===r&&(a=i),m===l&&++x===o&&(c=i),(y=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=y}s=a===-1||c===-1?null:{start:a,end:c}}else s=null}s=s||{start:0,end:0}}else s=null;for(ri={focusedElem:e,selectionRange:s},yr=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,b=w.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:Vt(t.type,v),b);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(z){Qe(t,t.return,z)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return w=Wc,Wc=!1,w}function ao(e,t,s){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var l=r.destroy;r.destroy=void 0,l!==void 0&&vi(t,s,l)}r=r.next}while(r!==o)}}function Jr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var o=s.create;s.destroy=o()}s=s.next}while(s!==t)}}function zi(e){var t=e.ref;if(t!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof t=="function"?t(e):t.current=e}}function a2(e){var t=e.alternate;t!==null&&(e.alternate=null,a2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[en],delete t[wo],delete t[ai],delete t[R1],delete t[I1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function c2(e){return e.tag===5||e.tag===3||e.tag===4}function Bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||c2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wi(e,t,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(e,t):s.insertBefore(e,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(e,s)):(t=s,t.appendChild(e)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=wr));else if(o!==4&&(e=e.child,e!==null))for(wi(e,t,s),e=e.sibling;e!==null;)wi(e,t,s),e=e.sibling}function Ni(e,t,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ni(e,t,s),e=e.sibling;e!==null;)Ni(e,t,s),e=e.sibling}var rt=null,Ht=!1;function yn(e,t,s){for(s=s.child;s!==null;)u2(e,t,s),s=s.sibling}function u2(e,t,s){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Hr,s)}catch{}switch(s.tag){case 5:ft||js(s,t);case 6:var o=rt,r=Ht;rt=null,yn(e,t,s),rt=o,Ht=r,rt!==null&&(Ht?(e=rt,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):rt.removeChild(s.stateNode));break;case 18:rt!==null&&(Ht?(e=rt,s=s.stateNode,e.nodeType===8?bl(e.parentNode,s):e.nodeType===1&&bl(e,s),go(e)):bl(rt,s.stateNode));break;case 4:o=rt,r=Ht,rt=s.stateNode.containerInfo,Ht=!0,yn(e,t,s),rt=o,Ht=r;break;case 0:case 11:case 14:case 15:if(!ft&&(o=s.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var l=r,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&vi(s,t,i),r=r.next}while(r!==o)}yn(e,t,s);break;case 1:if(!ft&&(js(s,t),o=s.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=s.memoizedProps,o.state=s.memoizedState,o.componentWillUnmount()}catch(a){Qe(s,t,a)}yn(e,t,s);break;case 21:yn(e,t,s);break;case 22:s.mode&1?(ft=(o=ft)||s.memoizedState!==null,yn(e,t,s),ft=o):yn(e,t,s);break;default:yn(e,t,s)}}function Vc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new J1),t.forEach(function(o){var r=ch.bind(null,e,o);s.has(o)||(s.add(o),o.then(r,r))})}}function Bt(e,t){var s=t.deletions;if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,Ht=!1;break e;case 3:rt=a.stateNode.containerInfo,Ht=!0;break e;case 4:rt=a.stateNode.containerInfo,Ht=!0;break e}a=a.return}if(rt===null)throw Error(O(160));u2(l,i,r),rt=null,Ht=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){Qe(r,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)d2(t,e),t=t.sibling}function d2(e,t){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Bt(t,e),Gt(e),o&4){try{ao(3,e,e.return),Jr(3,e)}catch(v){Qe(e,e.return,v)}try{ao(5,e,e.return)}catch(v){Qe(e,e.return,v)}}break;case 1:Bt(t,e),Gt(e),o&512&&s!==null&&js(s,s.return);break;case 5:if(Bt(t,e),Gt(e),o&512&&s!==null&&js(s,s.return),e.flags&32){var r=e.stateNode;try{mo(r,"")}catch(v){Qe(e,e.return,v)}}if(o&4&&(r=e.stateNode,r!=null)){var l=e.memoizedProps,i=s!==null?s.memoizedProps:l,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&P0(r,l),Kl(a,i);var u=Kl(a,l);for(i=0;i<c.length;i+=2){var x=c[i],g=c[i+1];x==="style"?D0(r,g):x==="dangerouslySetInnerHTML"?R0(r,g):x==="children"?mo(r,g):Vi(r,x,g,u)}switch(a){case"input":Bl(r,l);break;case"textarea":L0(r,l);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?vs(r,!!l.multiple,y,!1):m!==!!l.multiple&&(l.defaultValue!=null?vs(r,!!l.multiple,l.defaultValue,!0):vs(r,!!l.multiple,l.multiple?[]:"",!1))}r[wo]=l}catch(v){Qe(e,e.return,v)}}break;case 6:if(Bt(t,e),Gt(e),o&4){if(e.stateNode===null)throw Error(O(162));r=e.stateNode,l=e.memoizedProps;try{r.nodeValue=l}catch(v){Qe(e,e.return,v)}}break;case 3:if(Bt(t,e),Gt(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{go(t.containerInfo)}catch(v){Qe(e,e.return,v)}break;case 4:Bt(t,e),Gt(e);break;case 13:Bt(t,e),Gt(e),r=e.child,r.flags&8192&&(l=r.memoizedState!==null,r.stateNode.isHidden=l,!l||r.alternate!==null&&r.alternate.memoizedState!==null||(wa=Ke())),o&4&&Vc(e);break;case 22:if(x=s!==null&&s.memoizedState!==null,e.mode&1?(ft=(u=ft)||x,Bt(t,e),ft=u):Bt(t,e),Gt(e),o&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!x&&e.mode&1)for(B=e,x=e.child;x!==null;){for(g=B=x;B!==null;){switch(m=B,y=m.child,m.tag){case 0:case 11:case 14:case 15:ao(4,m,m.return);break;case 1:js(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){o=m,s=m.return;try{t=o,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){Qe(o,s,v)}}break;case 5:js(m,m.return);break;case 22:if(m.memoizedState!==null){qc(g);continue}}y!==null?(y.return=m,B=y):qc(g)}x=x.sibling}e:for(x=null,g=e;;){if(g.tag===5){if(x===null){x=g;try{r=g.stateNode,u?(l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=g.stateNode,c=g.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=I0("display",i))}catch(v){Qe(e,e.return,v)}}}else if(g.tag===6){if(x===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(v){Qe(e,e.return,v)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;x===g&&(x=null),g=g.return}x===g&&(x=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Bt(t,e),Gt(e),o&4&&Vc(e);break;case 21:break;default:Bt(t,e),Gt(e)}}function Gt(e){var t=e.flags;if(t&2){try{e:{for(var s=e.return;s!==null;){if(c2(s)){var o=s;break e}s=s.return}throw Error(O(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(mo(r,""),o.flags&=-33);var l=Bc(e);Ni(e,l,r);break;case 3:case 4:var i=o.stateNode.containerInfo,a=Bc(e);wi(e,a,i);break;default:throw Error(O(161))}}catch(c){Qe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function th(e,t,s){B=e,h2(e)}function h2(e,t,s){for(var o=(e.mode&1)!==0;B!==null;){var r=B,l=r.child;if(r.tag===22&&o){var i=r.memoizedState!==null||Go;if(!i){var a=r.alternate,c=a!==null&&a.memoizedState!==null||ft;a=Go;var u=ft;if(Go=i,(ft=c)&&!u)for(B=r;B!==null;)i=B,c=i.child,i.tag===22&&i.memoizedState!==null?Qc(r):c!==null?(c.return=i,B=c):Qc(r);for(;l!==null;)B=l,h2(l),l=l.sibling;B=r,Go=a,ft=u}Hc(e)}else r.subtreeFlags&8772&&l!==null?(l.return=r,B=l):Hc(e)}}function Hc(e){for(;B!==null;){var t=B;if(t.flags&8772){var s=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ft||Jr(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ft)if(s===null)o.componentDidMount();else{var r=t.elementType===t.type?s.memoizedProps:Vt(t.type,s.memoizedProps);o.componentDidUpdate(r,s.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Mc(t,l,o);break;case 3:var i=t.updateQueue;if(i!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}Mc(t,i,s)}break;case 5:var a=t.stateNode;if(s===null&&t.flags&4){s=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&s.focus();break;case"img":c.src&&(s.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var x=u.memoizedState;if(x!==null){var g=x.dehydrated;g!==null&&go(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}ft||t.flags&512&&zi(t)}catch(m){Qe(t,t.return,m)}}if(t===e){B=null;break}if(s=t.sibling,s!==null){s.return=t.return,B=s;break}B=t.return}}function qc(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var s=t.sibling;if(s!==null){s.return=t.return,B=s;break}B=t.return}}function Qc(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{Jr(4,t)}catch(c){Qe(t,s,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var r=t.return;try{o.componentDidMount()}catch(c){Qe(t,r,c)}}var l=t.return;try{zi(t)}catch(c){Qe(t,l,c)}break;case 5:var i=t.return;try{zi(t)}catch(c){Qe(t,i,c)}}}catch(c){Qe(t,t.return,c)}if(t===e){B=null;break}var a=t.sibling;if(a!==null){a.return=t.return,B=a;break}B=t.return}}var nh=Math.ceil,Lr=kn.ReactCurrentDispatcher,va=kn.ReactCurrentOwner,At=kn.ReactCurrentBatchConfig,xe=0,ot=null,Ge=null,lt=0,Mt=0,ys=Wn(0),Je=0,Mo=null,ss=0,el=0,za=0,co=null,yt=null,wa=0,Ps=1/0,ln=null,Fr=!1,bi=null,Ln=null,Xo=!1,_n=null,Rr=0,uo=0,Si=null,ur=-1,dr=0;function xt(){return xe&6?Ke():ur!==-1?ur:ur=Ke()}function Fn(e){return e.mode&1?xe&2&&lt!==0?lt&-lt:O1.transition!==null?(dr===0&&(dr=G0()),dr):(e=Se,e!==0||(e=window.event,e=e===void 0?16:su(e.type)),e):1}function Kt(e,t,s,o){if(50<uo)throw uo=0,Si=null,Error(O(185));To(e,s,o),(!(xe&2)||e!==ot)&&(e===ot&&(!(xe&2)&&(el|=s),Je===4&&Sn(e,lt)),Nt(e,o),s===1&&xe===0&&!(t.mode&1)&&(Ps=Ke()+500,Gr&&Bn()))}function Nt(e,t){var s=e.callbackNode;Od(e,t);var o=jr(e,e===ot?lt:0);if(o===0)s!==null&&nc(s),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(s!=null&&nc(s),t===1)e.tag===0?D1(Kc.bind(null,e)):zu(Kc.bind(null,e)),L1(function(){!(xe&6)&&Bn()}),s=null;else{switch(X0(o)){case 1:s=Yi;break;case 4:s=K0;break;case 16:s=gr;break;case 536870912:s=Y0;break;default:s=gr}s=y2(s,f2.bind(null,e))}e.callbackPriority=t,e.callbackNode=s}}function f2(e,t){if(ur=-1,dr=0,xe&6)throw Error(O(327));var s=e.callbackNode;if(Ss()&&e.callbackNode!==s)return null;var o=jr(e,e===ot?lt:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Ir(e,o);else{t=o;var r=xe;xe|=2;var l=p2();(ot!==e||lt!==t)&&(ln=null,Ps=Ke()+500,Zn(e,t));do try{rh();break}catch(a){m2(e,a)}while(!0);aa(),Lr.current=l,xe=r,Ge!==null?t=0:(ot=null,lt=0,t=Je)}if(t!==0){if(t===2&&(r=Jl(e),r!==0&&(o=r,t=Ci(e,r))),t===1)throw s=Mo,Zn(e,0),Sn(e,o),Nt(e,Ke()),s;if(t===6)Sn(e,o);else{if(r=e.current.alternate,!(o&30)&&!sh(r)&&(t=Ir(e,o),t===2&&(l=Jl(e),l!==0&&(o=l,t=Ci(e,l))),t===1))throw s=Mo,Zn(e,0),Sn(e,o),Nt(e,Ke()),s;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(O(345));case 2:Qn(e,yt,ln);break;case 3:if(Sn(e,o),(o&130023424)===o&&(t=wa+500-Ke(),10<t)){if(jr(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){xt(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=ii(Qn.bind(null,e,yt,ln),t);break}Qn(e,yt,ln);break;case 4:if(Sn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,r=-1;0<o;){var i=31-Qt(o);l=1<<i,i=t[i],i>r&&(r=i),o&=~l}if(o=r,o=Ke()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*nh(o/1960))-o,10<o){e.timeoutHandle=ii(Qn.bind(null,e,yt,ln),o);break}Qn(e,yt,ln);break;case 5:Qn(e,yt,ln);break;default:throw Error(O(329))}}}return Nt(e,Ke()),e.callbackNode===s?f2.bind(null,e):null}function Ci(e,t){var s=co;return e.current.memoizedState.isDehydrated&&(Zn(e,t).flags|=256),e=Ir(e,t),e!==2&&(t=yt,yt=s,t!==null&&_i(t)),e}function _i(e){yt===null?yt=e:yt.push.apply(yt,e)}function sh(e){for(var t=e;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var o=0;o<s.length;o++){var r=s[o],l=r.getSnapshot;r=r.value;try{if(!Yt(l(),r))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t){for(t&=~za,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var s=31-Qt(t),o=1<<s;e[s]=-1,t&=~o}}function Kc(e){if(xe&6)throw Error(O(327));Ss();var t=jr(e,0);if(!(t&1))return Nt(e,Ke()),null;var s=Ir(e,t);if(e.tag!==0&&s===2){var o=Jl(e);o!==0&&(t=o,s=Ci(e,o))}if(s===1)throw s=Mo,Zn(e,0),Sn(e,t),Nt(e,Ke()),s;if(s===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qn(e,yt,ln),Nt(e,Ke()),null}function Na(e,t){var s=xe;xe|=1;try{return e(t)}finally{xe=s,xe===0&&(Ps=Ke()+500,Gr&&Bn())}}function os(e){_n!==null&&_n.tag===0&&!(xe&6)&&Ss();var t=xe;xe|=1;var s=At.transition,o=Se;try{if(At.transition=null,Se=1,e)return e()}finally{Se=o,At.transition=s,xe=t,!(xe&6)&&Bn()}}function ba(){Mt=ys.current,Fe(ys)}function Zn(e,t){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,P1(s)),Ge!==null)for(s=Ge.return;s!==null;){var o=s;switch(ra(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Nr();break;case 3:$s(),Fe(zt),Fe(mt),ma();break;case 5:fa(o);break;case 4:$s();break;case 13:Fe(We);break;case 19:Fe(We);break;case 10:ca(o.type._context);break;case 22:case 23:ba()}s=s.return}if(ot=e,Ge=e=Rn(e.current,null),lt=Mt=t,Je=0,Mo=null,za=el=ss=0,yt=co=null,Yn!==null){for(t=0;t<Yn.length;t++)if(s=Yn[t],o=s.interleaved,o!==null){s.interleaved=null;var r=o.next,l=s.pending;if(l!==null){var i=l.next;l.next=r,o.next=i}s.pending=o}Yn=null}return e}function m2(e,t){do{var s=Ge;try{if(aa(),ir.current=Pr,Tr){for(var o=Be.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Tr=!1}if(ns=0,st=Ze=Be=null,io=!1,So=0,va.current=null,s===null||s.return===null){Je=1,Mo=t,Ge=null;break}e:{var l=e,i=s.return,a=s,c=t;if(t=lt,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,x=a,g=x.tag;if(!(x.mode&1)&&(g===0||g===11||g===15)){var m=x.alternate;m?(x.updateQueue=m.updateQueue,x.memoizedState=m.memoizedState,x.lanes=m.lanes):(x.updateQueue=null,x.memoizedState=null)}var y=Fc(i);if(y!==null){y.flags&=-257,Rc(y,i,a,l,t),y.mode&1&&Lc(l,u,t),t=y,c=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(c),t.updateQueue=v}else w.add(c);break e}else{if(!(t&1)){Lc(l,u,t),Sa();break e}c=Error(O(426))}}else if(Oe&&a.mode&1){var b=Fc(i);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Rc(b,i,a,l,t),la(Ts(c,a));break e}}l=c=Ts(c,a),Je!==4&&(Je=2),co===null?co=[l]:co.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=Xu(l,c,t);_c(l,h);break e;case 1:a=c;var f=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ln===null||!Ln.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var z=Zu(l,a,t);_c(l,z);break e}}l=l.return}while(l!==null)}k2(s)}catch(C){t=C,Ge===s&&s!==null&&(Ge=s=s.return);continue}break}while(!0)}function p2(){var e=Lr.current;return Lr.current=Pr,e===null?Pr:e}function Sa(){(Je===0||Je===3||Je===2)&&(Je=4),ot===null||!(ss&268435455)&&!(el&268435455)||Sn(ot,lt)}function Ir(e,t){var s=xe;xe|=2;var o=p2();(ot!==e||lt!==t)&&(ln=null,Zn(e,t));do try{oh();break}catch(r){m2(e,r)}while(!0);if(aa(),xe=s,Lr.current=o,Ge!==null)throw Error(O(261));return ot=null,lt=0,Je}function oh(){for(;Ge!==null;)x2(Ge)}function rh(){for(;Ge!==null&&!Ed();)x2(Ge)}function x2(e){var t=j2(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,t===null?k2(e):Ge=t,va.current=null}function k2(e){var t=e;do{var s=t.alternate;if(e=t.return,t.flags&32768){if(s=Z1(s,t),s!==null){s.flags&=32767,Ge=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Je=6,Ge=null;return}}else if(s=X1(s,t,Mt),s!==null){Ge=s;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);Je===0&&(Je=5)}function Qn(e,t,s){var o=Se,r=At.transition;try{At.transition=null,Se=1,lh(e,t,s,o)}finally{At.transition=r,Se=o}return null}function lh(e,t,s,o){do Ss();while(_n!==null);if(xe&6)throw Error(O(327));s=e.finishedWork;var r=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var l=s.lanes|s.childLanes;if(Ad(e,l),e===ot&&(Ge=ot=null,lt=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Xo||(Xo=!0,y2(gr,function(){return Ss(),null})),l=(s.flags&15990)!==0,s.subtreeFlags&15990||l){l=At.transition,At.transition=null;var i=Se;Se=1;var a=xe;xe|=4,va.current=null,eh(e,s),d2(s,e),S1(ri),yr=!!oi,ri=oi=null,e.current=s,th(s),$d(),xe=a,Se=i,At.transition=l}else e.current=s;if(Xo&&(Xo=!1,_n=e,Rr=r),l=e.pendingLanes,l===0&&(Ln=null),Ld(s.stateNode),Nt(e,Ke()),t!==null)for(o=e.onRecoverableError,s=0;s<t.length;s++)r=t[s],o(r.value,{componentStack:r.stack,digest:r.digest});if(Fr)throw Fr=!1,e=bi,bi=null,e;return Rr&1&&e.tag!==0&&Ss(),l=e.pendingLanes,l&1?e===Si?uo++:(uo=0,Si=e):uo=0,Bn(),null}function Ss(){if(_n!==null){var e=X0(Rr),t=At.transition,s=Se;try{if(At.transition=null,Se=16>e?16:e,_n===null)var o=!1;else{if(e=_n,_n=null,Rr=0,xe&6)throw Error(O(331));var r=xe;for(xe|=4,B=e.current;B!==null;){var l=B,i=l.child;if(B.flags&16){var a=l.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(B=u;B!==null;){var x=B;switch(x.tag){case 0:case 11:case 15:ao(8,x,l)}var g=x.child;if(g!==null)g.return=x,B=g;else for(;B!==null;){x=B;var m=x.sibling,y=x.return;if(a2(x),x===u){B=null;break}if(m!==null){m.return=y,B=m;break}B=y}}}var w=l.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}B=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,B=i;else e:for(;B!==null;){if(l=B,l.flags&2048)switch(l.tag){case 0:case 11:case 15:ao(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,B=h;break e}B=l.return}}var f=e.current;for(B=f;B!==null;){i=B;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,B=p;else e:for(i=f;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jr(9,a)}}catch(C){Qe(a,a.return,C)}if(a===i){B=null;break e}var z=a.sibling;if(z!==null){z.return=a.return,B=z;break e}B=a.return}}if(xe=r,Bn(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Hr,e)}catch{}o=!0}return o}finally{Se=s,At.transition=t}}return!1}function Yc(e,t,s){t=Ts(s,t),t=Xu(e,t,1),e=Pn(e,t,1),t=xt(),e!==null&&(To(e,1,t),Nt(e,t))}function Qe(e,t,s){if(e.tag===3)Yc(e,e,s);else for(;t!==null;){if(t.tag===3){Yc(t,e,s);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ln===null||!Ln.has(o))){e=Ts(s,e),e=Zu(t,e,1),t=Pn(t,e,1),e=xt(),t!==null&&(To(t,1,e),Nt(t,e));break}}t=t.return}}function ih(e,t,s){var o=e.pingCache;o!==null&&o.delete(t),t=xt(),e.pingedLanes|=e.suspendedLanes&s,ot===e&&(lt&s)===s&&(Je===4||Je===3&&(lt&130023424)===lt&&500>Ke()-wa?Zn(e,0):za|=s),Nt(e,t)}function g2(e,t){t===0&&(e.mode&1?(t=Uo,Uo<<=1,!(Uo&130023424)&&(Uo=4194304)):t=1);var s=xt();e=mn(e,t),e!==null&&(To(e,t,s),Nt(e,s))}function ah(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),g2(e,s)}function ch(e,t){var s=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(s=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(O(314))}o!==null&&o.delete(t),g2(e,s)}var j2;j2=function(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps||zt.current)vt=!0;else{if(!(e.lanes&s)&&!(t.flags&128))return vt=!1,G1(e,t,s);vt=!!(e.flags&131072)}else vt=!1,Oe&&t.flags&1048576&&wu(t,Cr,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;cr(e,t),e=t.pendingProps;var r=_s(t,mt.current);bs(t,s),r=xa(null,t,o,e,r,s);var l=ka();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,wt(o)?(l=!0,br(t)):l=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,da(t),r.updater=Zr,t.stateNode=r,r._reactInternals=t,mi(t,o,e,s),t=ki(null,t,o,!0,l,s)):(t.tag=0,Oe&&l&&oa(t),pt(null,t,r,s),t=t.child),t;case 16:o=t.elementType;e:{switch(cr(e,t),e=t.pendingProps,r=o._init,o=r(o._payload),t.type=o,r=t.tag=dh(o),e=Vt(o,e),r){case 0:t=xi(null,t,o,e,s);break e;case 1:t=Oc(null,t,o,e,s);break e;case 11:t=Ic(null,t,o,e,s);break e;case 14:t=Dc(null,t,o,Vt(o.type,e),s);break e}throw Error(O(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Vt(o,r),xi(e,t,o,r,s);case 1:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Vt(o,r),Oc(e,t,o,r,s);case 3:e:{if(n2(t),e===null)throw Error(O(387));o=t.pendingProps,l=t.memoizedState,r=l.element,Mu(e,t),Er(t,o,null,s);var i=t.memoizedState;if(o=i.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){r=Ts(Error(O(423)),t),t=Ac(e,t,o,s,r);break e}else if(o!==r){r=Ts(Error(O(424)),t),t=Ac(e,t,o,s,r);break e}else for(Et=Tn(t.stateNode.containerInfo.firstChild),$t=t,Oe=!0,qt=null,s=Cu(t,null,o,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Ms(),o===r){t=pn(e,t,s);break e}pt(e,t,o,s)}t=t.child}return t;case 5:return Eu(t),e===null&&di(t),o=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,i=r.children,li(o,r)?i=null:l!==null&&li(o,l)&&(t.flags|=32),t2(e,t),pt(e,t,i,s),t.child;case 6:return e===null&&di(t),null;case 13:return s2(e,t,s);case 4:return ha(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Es(t,null,o,s):pt(e,t,o,s),t.child;case 11:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Vt(o,r),Ic(e,t,o,r,s);case 7:return pt(e,t,t.pendingProps,s),t.child;case 8:return pt(e,t,t.pendingProps.children,s),t.child;case 12:return pt(e,t,t.pendingProps.children,s),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,l=t.memoizedProps,i=r.value,$e(_r,o._currentValue),o._currentValue=i,l!==null)if(Yt(l.value,i)){if(l.children===r.children&&!zt.current){t=pn(e,t,s);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var c=a.firstContext;c!==null;){if(c.context===o){if(l.tag===1){c=dn(-1,s&-s),c.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var x=u.pending;x===null?c.next=c:(c.next=x.next,x.next=c),u.pending=c}}l.lanes|=s,c=l.alternate,c!==null&&(c.lanes|=s),hi(l.return,s,t),a.lanes|=s;break}c=c.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(O(341));i.lanes|=s,a=i.alternate,a!==null&&(a.lanes|=s),hi(i,s,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}pt(e,t,r.children,s),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,bs(t,s),r=Ut(r),o=o(r),t.flags|=1,pt(e,t,o,s),t.child;case 14:return o=t.type,r=Vt(o,t.pendingProps),r=Vt(o.type,r),Dc(e,t,o,r,s);case 15:return Ju(e,t,t.type,t.pendingProps,s);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Vt(o,r),cr(e,t),t.tag=1,wt(o)?(e=!0,br(t)):e=!1,bs(t,s),Gu(t,o,r),mi(t,o,r,s),ki(null,t,o,!0,e,s);case 19:return o2(e,t,s);case 22:return e2(e,t,s)}throw Error(O(156,t.tag))};function y2(e,t){return Q0(e,t)}function uh(e,t,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,s,o){return new uh(e,t,s,o)}function Ca(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dh(e){if(typeof e=="function")return Ca(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qi)return 11;if(e===Qi)return 14}return 2}function Rn(e,t){var s=e.alternate;return s===null?(s=Ot(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function hr(e,t,s,o,r,l){var i=2;if(o=e,typeof e=="function")Ca(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case us:return Jn(s.children,r,l,t);case Hi:i=8,r|=8;break;case Dl:return e=Ot(12,s,t,r|2),e.elementType=Dl,e.lanes=l,e;case Ol:return e=Ot(13,s,t,r),e.elementType=Ol,e.lanes=l,e;case Al:return e=Ot(19,s,t,r),e.elementType=Al,e.lanes=l,e;case E0:return tl(s,r,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _0:i=10;break e;case M0:i=9;break e;case qi:i=11;break e;case Qi:i=14;break e;case wn:i=16,o=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=Ot(i,s,t,r),t.elementType=e,t.type=o,t.lanes=l,t}function Jn(e,t,s,o){return e=Ot(7,e,o,t),e.lanes=s,e}function tl(e,t,s,o){return e=Ot(22,e,o,t),e.elementType=E0,e.lanes=s,e.stateNode={isHidden:!1},e}function Pl(e,t,s){return e=Ot(6,e,null,t),e.lanes=s,e}function Ll(e,t,s){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hh(e,t,s,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ml(0),this.expirationTimes=ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ml(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _a(e,t,s,o,r,l,i,a,c){return e=new hh(e,t,s,a,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ot(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:o,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},da(l),e}function fh(e,t,s){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cs,key:o==null?null:""+o,children:e,containerInfo:t,implementation:s}}function v2(e){if(!e)return Dn;e=e._reactInternals;e:{if(ls(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var s=e.type;if(wt(s))return vu(e,s,t)}return t}function z2(e,t,s,o,r,l,i,a,c){return e=_a(s,o,!0,e,r,l,i,a,c),e.context=v2(null),s=e.current,o=xt(),r=Fn(s),l=dn(o,r),l.callback=t??null,Pn(s,l,r),e.current.lanes=r,To(e,r,o),Nt(e,o),e}function nl(e,t,s,o){var r=t.current,l=xt(),i=Fn(r);return s=v2(s),t.context===null?t.context=s:t.pendingContext=s,t=dn(l,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Pn(r,t,i),e!==null&&(Kt(e,r,i,l),lr(e,r,i)),i}function Dr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function Ma(e,t){Gc(e,t),(e=e.alternate)&&Gc(e,t)}function mh(){return null}var w2=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ea(e){this._internalRoot=e}sl.prototype.render=Ea.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));nl(e,t,null,null)};sl.prototype.unmount=Ea.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;os(function(){nl(null,e,null,null)}),t[fn]=null}};function sl(e){this._internalRoot=e}sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=eu();e={blockedOn:null,target:e,priority:t};for(var s=0;s<bn.length&&t!==0&&t<bn[s].priority;s++);bn.splice(s,0,e),s===0&&nu(e)}};function $a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xc(){}function ph(e,t,s,o,r){if(r){if(typeof o=="function"){var l=o;o=function(){var u=Dr(i);l.call(u)}}var i=z2(t,o,e,0,null,!1,!1,"",Xc);return e._reactRootContainer=i,e[fn]=i.current,vo(e.nodeType===8?e.parentNode:e),os(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var a=o;o=function(){var u=Dr(c);a.call(u)}}var c=_a(e,0,!1,null,null,!1,!1,"",Xc);return e._reactRootContainer=c,e[fn]=c.current,vo(e.nodeType===8?e.parentNode:e),os(function(){nl(t,c,s,o)}),c}function rl(e,t,s,o,r){var l=s._reactRootContainer;if(l){var i=l;if(typeof r=="function"){var a=r;r=function(){var c=Dr(i);a.call(c)}}nl(t,i,e,r)}else i=ph(s,t,e,r,o);return Dr(i)}Z0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var s=Js(t.pendingLanes);s!==0&&(Gi(t,s|1),Nt(t,Ke()),!(xe&6)&&(Ps=Ke()+500,Bn()))}break;case 13:os(function(){var o=mn(e,1);if(o!==null){var r=xt();Kt(o,e,1,r)}}),Ma(e,1)}};Xi=function(e){if(e.tag===13){var t=mn(e,134217728);if(t!==null){var s=xt();Kt(t,e,134217728,s)}Ma(e,134217728)}};J0=function(e){if(e.tag===13){var t=Fn(e),s=mn(e,t);if(s!==null){var o=xt();Kt(s,e,t,o)}Ma(e,t)}};eu=function(){return Se};tu=function(e,t){var s=Se;try{return Se=e,t()}finally{Se=s}};Gl=function(e,t,s){switch(t){case"input":if(Bl(e,s),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var o=s[t];if(o!==e&&o.form===e.form){var r=Yr(o);if(!r)throw Error(O(90));T0(o),Bl(o,r)}}}break;case"textarea":L0(e,s);break;case"select":t=s.value,t!=null&&vs(e,!!s.multiple,t,!1)}};U0=Na;W0=os;var xh={usingClientEntryPoint:!1,Events:[Lo,ms,Yr,O0,A0,Na]},Qs={findFiberByHostInstance:Kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kh={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=H0(e),e===null?null:e.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||mh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Hr=Zo.inject(kh),tn=Zo}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xh;Pt.createPortal=function(e,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$a(t))throw Error(O(200));return fh(e,t,null,s)};Pt.createRoot=function(e,t){if(!$a(e))throw Error(O(299));var s=!1,o="",r=w2;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=_a(e,1,!1,null,null,s,!1,o,r),e[fn]=t.current,vo(e.nodeType===8?e.parentNode:e),new Ea(t)};Pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=H0(t),e=e===null?null:e.stateNode,e};Pt.flushSync=function(e){return os(e)};Pt.hydrate=function(e,t,s){if(!ol(t))throw Error(O(200));return rl(null,e,t,!0,s)};Pt.hydrateRoot=function(e,t,s){if(!$a(e))throw Error(O(405));var o=s!=null&&s.hydratedSources||null,r=!1,l="",i=w2;if(s!=null&&(s.unstable_strictMode===!0&&(r=!0),s.identifierPrefix!==void 0&&(l=s.identifierPrefix),s.onRecoverableError!==void 0&&(i=s.onRecoverableError)),t=z2(t,null,e,1,s??null,r,!1,l,i),e[fn]=t.current,vo(e),o)for(e=0;e<o.length;e++)s=o[e],r=s._getVersion,r=r(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,r]:t.mutableSourceEagerHydrationData.push(s,r);return new sl(t)};Pt.render=function(e,t,s){if(!ol(t))throw Error(O(200));return rl(null,e,t,!1,s)};Pt.unmountComponentAtNode=function(e){if(!ol(e))throw Error(O(40));return e._reactRootContainer?(os(function(){rl(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1};Pt.unstable_batchedUpdates=Na;Pt.unstable_renderSubtreeIntoContainer=function(e,t,s,o){if(!ol(s))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return rl(e,t,s,!1,o)};Pt.version="18.3.1-next-f1338f8080-20240426";function N2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N2)}catch(e){console.error(e)}}N2(),N0.exports=Pt;var gh=N0.exports,b2,Zc=gh;b2=Zc.createRoot,Zc.hydrateRoot;const S2="yudoz-lang",C2=j.createContext(null);function jh(){try{const e=window.localStorage.getItem(S2);if(e==="ko"||e==="zh")return e}catch{}return"ko"}function yh(e,t){return typeof e=="string"?e:e[t]}function vh({children:e}){const[t,s]=j.useState(jh);return j.useEffect(()=>{document.documentElement.lang=t==="ko"?"ko":"zh-Hant";try{window.localStorage.setItem(S2,t)}catch{}},[t]),n.jsx(C2.Provider,{value:{lang:t,setLang:s,t:o=>yh(o,t)},children:e})}function Q(){const e=j.useContext(C2);if(!e)throw new Error("useLang must be used within LangProvider");return e}const A={slideToOpen:{ko:"쓸어올려서 열기",zh:"向上滑動以打開"},enterPasscode:{ko:"암호 입력",zh:"輸入密碼"},cancel:{ko:"취소",zh:"取消"},erase:{ko:"삭제",zh:"刪除"},emergency:{ko:"긴급",zh:"緊急"},now:{ko:"지금",zh:"現在"},back:{ko:"뒤로",zh:"返回"},chats:{ko:"채팅",zh:"聊天"},friends:{ko:"친구",zh:"好友"},messageInput:{ko:"메시지 입력",zh:"輸入訊息"},send:{ko:"전송",zh:"傳送"},incomingCall:{ko:"휴대전화",zh:"行動電話"},accept:{ko:"응답",zh:"接聽"},decline:{ko:"거절",zh:"拒絕"},endCall:{ko:"통화 종료",zh:"結束通話"},missed:{ko:"부재중 전화",zh:"未接來電"},incoming:{ko:"수신 전화",zh:"來電"},outgoing:{ko:"발신 전화",zh:"撥出電話"},recents:{ko:"최근 기록",zh:"最近通話"},notes:{ko:"메모",zh:"備忘錄"},photos:{ko:"사진",zh:"照片"},library:{ko:"보관함",zh:"圖庫"},messages:{ko:"메시지",zh:"訊息"},phone:{ko:"전화",zh:"電話"},calendar:{ko:"캘린더",zh:"行事曆"},settings:{ko:"설정",zh:"設定"},search:{ko:"검색",zh:"搜尋"},recentSearches:{ko:"최근 검색어",zh:"最近搜尋"},kakao:{ko:"카카오톡",zh:"KakaoTalk"},ai:{ko:"ChatGPT",zh:"ChatGPT"},voiceMemos:{ko:"음성 메모",zh:"語音備忘錄"},restart:{ko:"스토리 다시 시작",zh:"重新開始故事"},toLock:{ko:"잠금화면으로",zh:"回到鎖定畫面"},toSelect:{ko:"다른 폰 고르기",zh:"選擇另一支手機"},aboutText:{ko:"TWS 신유·도훈을 모티브로 한 팬메이드 허구의 이야기입니다. 실제 인물·소속사와 관계없으며, 등장하는 대화와 기록은 모두 창작입니다. 이 화면의 설정은 웹사이트 안에서만 바뀝니다.",zh:"本網站為以 TWS 申惟、道勳為靈感的粉絲自製虛構故事，與本人及經紀公司無關，所有對話與紀錄皆為創作。此畫面的設定只會在網站內變更。"},hint:{ko:"힌트: 잠금화면 알림을 잘 보세요",zh:"提示：仔細看看鎖定畫面的通知"},today:{ko:"오늘",zh:"今天"},allDay:{ko:"하루 종일",zh:"整天"},noItems:{ko:"항목 없음",zh:"沒有項目"}};function k(e){const[t,s]=e.split(" ");return`${t}T${s}:00+09:00`}function On(e){const t=new Date(new Date(e).getTime()+324e5);return{y:t.getUTCFullYear(),m:t.getUTCMonth()+1,d:t.getUTCDate(),h:t.getUTCHours(),min:t.getUTCMinutes(),wd:t.getUTCDay()}}const Ta=["일","월","화","수","목","금","토"],Pa=["日","一","二","三","四","五","六"],Ae=e=>String(e).padStart(2,"0");function La(e){const t=On(e);return`${Ae(t.h)}:${Ae(t.min)}`}function Ye(e,t){const s=On(e),o=s.h%12===0?12:s.h%12;return t==="ko"?`${s.h<12?"오전":"오후"} ${o}:${Ae(s.min)}`:`${s.h<12?"上午":"下午"}${o}:${Ae(s.min)}`}function _2(e,t){const s=On(e);return t==="ko"?`${s.m}월 ${s.d}일 ${Ta[s.wd]}요일`:`${s.m}月${s.d}日 星期${Pa[s.wd]}`}function sn(e,t){const s=On(e);return t==="ko"?`${s.y}년 ${s.m}월 ${s.d}일 ${Ta[s.wd]}요일`:`${s.y}年${s.m}月${s.d}日 星期${Pa[s.wd]}`}function Or(e){const t=On(e);return Date.UTC(t.y,t.m-1,t.d)/864e5}function Mi(e,t){return Or(e)===Or(t)}function xn(e,t,s){const o=Or(t)-Or(e);if(o<=0)return Ye(e,s);if(o===1)return s==="ko"?"어제":"昨天";const r=On(e);return r.y===On(t).y?s==="ko"?`${r.m}월 ${r.d}일`:`${r.m}月${r.d}日`:`${r.y}. ${r.m}. ${r.d}.`}function Fa(e,t){const s=On(e);return t==="ko"?`${s.m}월 ${s.d}일 (${Ta[s.wd]})`:`${s.m}月${s.d}日（${Pa[s.wd]}）`}function Ar(e,t){const s=Math.floor(e/60),o=e%60;return t==="ko"?s?`${s}분 ${Ae(o)}초`:`${o}초`:s?`${s}分${Ae(o)}秒`:`${o}秒`}const q=e=>new Date(e).getTime();let Ks=null,ho=null,fr=null,M2=!1,E2=.6,Ur=!1,Ei=!0;function $2(){try{return Ks||(Ks=new AudioContext),Ks.state==="suspended"&&Ks.resume(),Ks}catch{return null}}function $i(){$2()}function zh(e,t,s=Ur,o=Ei){M2=e,E2=t,Ur=s,Ei=o}let Fl=null;const wh=()=>typeof navigator<"u"&&/iPhone|iPad|iPod/.test(navigator.userAgent);function Nh(){try{if(!Fl){const e=document.createElement("input");e.type="checkbox",e.setAttribute("switch",""),e.id="yudoz-haptic",e.style.cssText="position:fixed;opacity:0;pointer-events:none;width:0;height:0";const t=document.createElement("label");t.htmlFor=e.id,t.style.cssText="position:fixed;opacity:0;pointer-events:none;width:0;height:0",document.body.append(e,t),Fl=t}Fl.click()}catch{}}function ll(e){if(!Ei)return;const t=Array.isArray(e)?e:[e];try{if(navigator.vibrate){navigator.vibrate(t);return}}catch{}if(wh()){let s=0;t.forEach((o,r)=>{r%2===0&&window.setTimeout(Nh,s),s+=o})}}function bh(){var e;fr!==null&&window.clearInterval(fr),fr=null;try{(e=navigator.vibrate)==null||e.call(navigator,0)}catch{}}function is(e,t=!1){if(M2)return;const s=$2();if(!s)return;const o=s.createGain();o.gain.value=E2*1.4,o.connect(s.destination);for(const r of e)(t?[1,4,10]:[1]).forEach((i,a)=>{const c=s.createOscillator(),u=s.createGain();c.type=r.type??"sine",c.frequency.value=r.f*i;const x=(r.vol??.08)*(a===0?1:a===1?.18:.05),g=s.currentTime+r.at;u.gain.setValueAtTime(0,g),u.gain.linearRampToValueAtTime(x,g+.006),u.gain.exponentialRampToValueAtTime(1e-4,g+r.len*(a===0?1:.4)),c.connect(u).connect(o),c.start(g),c.stop(g+r.len+.05)})}function Sh(){Ur||(is([{f:1175,at:0,len:.14,vol:.09},{f:1568,at:.1,len:.28,vol:.09}],!0),ll([60,70,60]))}function T2(){Ur||(is([{f:1318,at:0,len:.16,vol:.07},{f:1661,at:.12,len:.16,vol:.07},{f:1976,at:.24,len:.3,vol:.07}],!0),ll(70))}function P2(){is([{f:2200,at:0,len:.03,vol:.03,type:"triangle"}])}function Ch(){is([{f:880,at:0,len:.06,vol:.04,type:"triangle"},{f:1320,at:.05,len:.08,vol:.04,type:"triangle"}])}function _h(){is([{f:400,at:0,len:.05,vol:.08,type:"square"},{f:220,at:.06,len:.06,vol:.06,type:"square"}])}function Mh(){on();const e=()=>is([{f:440,at:0,len:1,vol:.04},{f:480,at:0,len:1,vol:.04}]);e(),ho=window.setInterval(e,3e3)}function L2(){on();const e=[659,988,1319,988,1319,1760,1319,988],t=()=>is(e.map((o,r)=>({f:o,at:r*.15,len:.32,vol:.075})),!0);t(),ho=window.setInterval(t,2400);const s=()=>ll([400,200,400]);s(),fr=window.setInterval(s,2400)}function on(){ho!==null&&window.clearInterval(ho),ho=null,bh()}const d=(e,t)=>({ko:e,zh:t}),nt=e=>e,P={who:["누구","주웠","주운","폰주","본인","你是誰","你是谁","撿到","捡到","是誰","本人","誰"],bday:["생일","축하","생축","生日","快樂","快乐","生快"],cake:["케이크","케잌","蛋糕","촛불","蠟燭"],cookie:["두쫀쿠","쿠키","두바이","杜拜","餅乾","饼干","q餅"],gift:["선물","볼링공","禮物","礼物"],letter:["편지","信"],bowling:["볼링","레인","保齡球","保龄球","球道"],love:["사랑","좋아해","보고싶","想你","喜歡","喜欢","愛你","爱你","好想"],cry:["울어","울었","울지","울 것","눈물","哭","眼淚"],sorry:["미안","죄송","對不起","对不起","抱歉"],thanks:["고마","감사","땡큐","謝謝","谢谢","感謝"],food:["밥","배고","먹었","먹자","라면","야식","吃","餓","饿","泡麵","泡面","宵夜"],sleep:["졸려","잘자","자라","자요","굿밤","잘게","睡","晚安","睏","困"],tired:["피곤","힘들","지쳐","累","辛苦"],cold:["추워","춥","날씨","눈와","冷","天氣","下雪"],practice:["연습","안무","춤","練習","跳舞","舞"],song:["노래","음악","앨범","歌","音樂","專輯"],fans:["42","팬","사이","粉絲","粉丝"],schedule:["스케줄","내일","출발","몇시","行程","明天","幾點"],sofa:["소파","담요","沙發","沙发","毯子"],corner:["구석","꼰대","角落"],mic:["마이크","麥克風"],shoes:["신발","鞋"],heart:["손하트","하트","愛心"],game:["게임","롤","遊戲"],photo:["사진","셀카","照片","自拍"],members:["경민","지훈","영재","한진","炅潣","志薰","英宰","韓振"],yes:["응","어어","ㅇㅇ","그래","알겠","오케이","ok","好","嗯","對"],no:["아니","싫어","안돼","不要","不是","才不"],hi:["안녕","하이","hi","hello","뭐해","뭐함","머해","모해","在幹嘛","在干嘛","你好","嗨","哈囉","在嗎"]},L=(e,...t)=>({keys:e,sets:t}),Eh={dohoon:{rules:[L(P.who,[d("...누구세요?","……請問是誰？"),d("이거 신유형 폰 아니에요?","這不是申惟哥的手機嗎？"),d("주우신 거면 숙소 경비실에 맡겨주세요 🙏","如果是撿到的，麻煩交給宿舍管理室 🙏")],[d("형 장난치는 거죠","哥在開玩笑吧"),d("말투가 형이 아닌데","語氣不像哥欸")]),L(P.bday,[d("형 기억하네요 ㅋㅋ","哥記得嘛ㅋㅋ"),d("고마워요 🐺","謝謝 🐺")],[d("또 축하해줘요?","又祝我生日快樂？"),d("형 오늘 축하 몇 번째예요 ㅋㅋㅋ","哥今天第幾次祝我了ㅋㅋㅋ")],[d("생일은 12시 정각이 국룰이죠","生日就是要十二點整，這是規矩"),d("형이 맨날 그러잖아요","哥每年都這樣")]),L(P.cake,[d("케이크요?? 무슨 케이크요","蛋糕?? 什麼蛋糕"),d("...냉장고 안 봤어요 진짜로","……我真的沒看冰箱")],[d("김치통 밑에 있는 거요?","泡菜盒下面那個嗎？"),d("아 아무것도 아니에요","啊沒事")]),L(P.cookie,[d("두쫀쿠!!!","杜拜Q餅!!!"),d("형 그거 구했어요?? 품절이던데","哥你買到了?? 不是都賣完了嗎")],[d("하나만 먹고 하나는 형 줄게요","我吃一個，另一個給哥"),d("...아니다 두 개 다 먹을래요","……不對，我兩個都要吃")]),L(P.gift,[d("선물 없어도 되는데","不用禮物啦"),d("...있으면 좋고요 🐺","……有的話更好 🐺")],[d("형 선물 고르는 센스 의심해요","我懷疑哥挑禮物的品味"),d("작년에 양말 준 거 기억하죠","記得去年送襪子嗎")]),L(P.letter,[d("편지요?","信？"),d("형 편지 쓰면 맨날 세 줄이잖아요","哥寫信每次都只有三行"),d("...이번엔 길어요?","……這次比較長嗎？")],[d('메모장에 "최종의최종" 있는 거 경민이가 말해줬어요',"炅潣跟我說備忘錄裡有「最終的最終版」"),d("기대할게요","我會期待的")]),L(P.bowling,[d("또 지고 싶어요? ㅋㅋ","又想輸了嗎？ㅋㅋ")],[d("리매치 콜 🎳","復仇戰來啊 🎳"),d("근데 레인 탓 금지","但是不准怪球道")],[d("118 대 121 기억나요?","記得 118 比 121 嗎？"),d("3점 차이는 실력이에요 형","差三分就是實力差距啊哥")]),L(P.love,[d("...형 오늘 이상해요","……哥今天怪怪的"),d("뭐 잘못 먹었어요?","吃錯東西了嗎？")],[d("알아요 🐺","我知道 🐺")],[d("갑자기 그러면 할 말이 없잖아요","突然這樣我都不知道說什麼了"),d("...저도요","……我也是")]),L(P.cry,[d("형 울어요??","哥在哭嗎??"),d("사진 찍으러 갈게요","我要去拍照")],[d("안 울었어요","我沒哭"),d("눈에 뭐 들어간 거예요","是眼睛跑進東西了")]),L(P.sorry,[d("뭐가 미안한데요","有什麼好抱歉的"),d("괜찮아요 형","沒關係啦哥")],[d("형이 사과하면 더 무서워요","哥道歉反而更可怕")]),L(P.thanks,[d("형이 고맙다고 하면 무서운데요 ㅋㅋ","哥說謝謝我反而有點怕ㅋㅋ")],[d("뭘요","不客氣"),d("형도 맨날 챙겨주잖아요","哥也每天都在照顧我啊")]),L(P.sofa,[d("오늘은 방에서 잘 거예요","今天會在房間睡啦"),d("...아마도","……大概")],[d("담요 형이 덮어준 거죠","毯子是哥幫我蓋的吧"),d("다 알아요","我都知道")]),L(P.corner,[d("또 구석이요?","又是角落？"),d("어깨동무 하지 마요","不准勾肩膀")],[d("젊은 꼰대 모먼트 ㅋㅋㅋ","年輕老古板時刻ㅋㅋㅋ"),d("살롱드립에서 다 말했는데","我在沙龍都說出來了")]),L(P.mic,[d("그 얘기 하지 마요","不要提那件事"),d("마이크 켜진 줄 진짜 몰랐어요","我真的不知道麥克風開著")]),L(P.shoes,[d("빌린 신발 사진 아직 있어요 ㅋㅋㅋ","借鞋的照片我還留著ㅋㅋㅋ"),d("여고생 시절","女高中生時期")]),L(P.heart,[d("🫶","🫶"),d("연습생 때 생각나네요","想起練習生的時候了")],[d("형 그때 엄청 당황했잖아요","哥那時候超慌張的"),d("근데 나중엔 같이 해줬고","不過後來也會一起比了")]),L(P.food,[d("라면 끓여줄 거예요?","要幫我煮泡麵嗎？"),d("구석에서?","在角落？")],[d("저 아까 먹었어요","我剛剛吃過了"),d("형은요?","哥呢？")],[d("야식 금지 아니었어요?","不是禁止宵夜嗎？"),d("...근데 배고프다","……可是好餓")]),L(P.sleep,[d("형이나 자요","哥你自己先睡啦")],[d("안 졸린데요","我不睏"),d("형 기다리는 중","在等哥")]),L(P.tired,[d("형 오늘 고생했어요","哥今天辛苦了"),d("리더 힘들죠","當隊長很累吧")],[d("어깨 주물러 줄까요","要幫你按摩肩膀嗎"),d("...구석 말고 거실에서","……不要在角落，在客廳")]),L(P.cold,[d("밖에 진짜 추워요","外面真的很冷"),d("형 목도리 하고 나가요","哥出門要戴圍巾")]),L(P.practice,[d("내일 연습 몇 시예요?","明天幾點練習？"),d("저 그 파트 아직 헷갈려요","那段我還是會搞混")],[d("형 거울 앞에서 표정 연습 또 해요?","哥又要在鏡子前練表情嗎？"),d("비주얼 모니터링 ㅋㅋ","視覺監看ㅋㅋ")]),L(P.song,[d("제가 보낸 플레이리스트 들었어요?","我傳的歌單聽了嗎？"),d("첫 곡부터 들어야 돼요","要從第一首開始聽")]),L(P.fans,[d("42 보고 싶다","好想 42"),d("내일 서포트 온대요 🩵","聽說明天有應援 🩵")]),L(P.schedule,[d("10시 출발이요","十點出發"),d("형이 깨워줘요","哥叫我起床")],[d("내일 늦잠 자면 형 탓이에요","明天睡過頭就怪哥")]),L(P.game,[d("지금요? 한 판만?","現在？就一場？"),d("형 또 질 텐데","哥又會輸喔")]),L(P.photo,[d("어떤 사진이요?","什麼照片？"),d('"형 웃긴거" 폴더에서 골라줄까요',"要從「哥好笑的」資料夾挑給你嗎")]),L(P.members,[d("걔네 지금 다 자는 척하고 있어요","他們現在都在裝睡"),d("수상해요","很可疑")]),L(P.no,[d("왜요 ㅋㅋ","為什麼ㅋㅋ")],[d("형 고집","哥好固執")]),L(P.yes,[d("넹","好喔")],[d("오 웬일로 바로 대답해요","喔 怎麼這麼快就回")]),L(P.hi,[d("형 왜요","哥幹嘛")],[d("?","?"),d("뭐 해요 형","哥在幹嘛")],[d("형 아직 안 자요?","哥還沒睡？")])],fallback:[[d("ㅋㅋㅋ","ㅋㅋㅋ")],[d("형 뭐라는 거예요","哥在說什麼啦")],[d("넹","好喔")],[d("알겠어요 🐺","知道了 🐺")],[d("?","?"),d("형 오타났어요","哥打錯字了")],[d("갑자기요?","突然？")],[d("형 오늘 말 많다","哥今天話好多")],[d("ㅇㅋ","OK")]],sticker:[[d("ㅋㅋㅋㅋ 그 이모티콘 뭐예요","ㅋㅋㅋㅋ 那個貼圖是怎樣")],[nt("🐺")],[d("형 그거 새로 샀어요?","哥那個是新買的嗎？")]],photo:[[d("이거 언제 찍었어요??","這什麼時候拍的??"),d("지워요","刪掉")],[d("잘 나왔네","拍得不錯嘛"),d("저 보내줘요","傳給我")]],call:{answer:!0,lines:[d("여보세요?","喂？"),d("형 왜 전화했어요 ㅋㅋ","哥幹嘛打電話來ㅋㅋ"),d("...카톡으로 하면 되잖아요","……傳 Kakao 不就好了"),d("목소리 듣고 싶었어요? ㅋㅋㅋ","想聽我的聲音？ㅋㅋㅋ"),d("아 알겠어요. 끊어요 🐺","啊好啦，掛了 🐺")]}},kyungmin:{rules:[L(P.who,[d("헐 누구세요??","天啊你是誰??"),d("신유형!!! 형 폰 잃어버렸어요??","申惟哥!!! 你手機掉了嗎??")]),L(P.bday,[d("도훈이형 생일!! 준비 완료예요 🎂","道勳哥生日!! 準備完成 🎂")],[d("초 24개 맞죠?","蠟燭 24 根對吧？")]),L(P.cake,[d("케이크 김치통 밑에 있어요 쉿","蛋糕在泡菜盒下面 噓")],[d("제가 들고 갈까요?","要我拿過去嗎？")]),L(P.letter,[d("형 편지 다 썼어요?","哥信寫完了嗎？"),d("최종의최종의최종 아니죠?","不是最終的最終的最終版吧？")]),L(P.cookie,[d("두쫀쿠 저도 하나만요 🥺","杜拜Q餅也給我一個 🥺")]),L(P.love,[d("형 저도요!!! 🩵","哥我也是!!! 🩵")]),L(P.food,[d("형 야식 금지라면서요","哥不是說禁止宵夜嗎"),d("...저도 끼워줘요","……也算我一份")]),L(P.practice,[d("형 내일 저랑 그 파트 맞춰봐요","哥明天跟我對一下那段"),d("제가 자꾸 반 박자 빨라요","我老是快半拍")]),L(P.sleep,[d("저 지금 자는 척 중이에요","我現在在裝睡"),d("도훈이형 의심해요","道勳哥在懷疑")]),L(P.hi,[d("형!! 왜요왜요","哥!! 幹嘛幹嘛")])],fallback:[[d("ㅋㅋㅋㅋㅋㅋ","ㅋㅋㅋㅋㅋㅋ")],[d("넵 리더님!","是的隊長！")],[d("형 편지는요??","哥信呢??")],[d("형 오늘 기분 좋아 보여요","哥今天心情好像很好")],[d("🐰","🐰")]],sticker:[[nt("🐰🐰🐰")],[d("ㅋㅋㅋ 귀여워요","ㅋㅋㅋ 好可愛")]],photo:[[d("오 이 사진 단톡에 올려도 돼요?","喔 這張可以傳到群組嗎？")]],call:{answer:!0,lines:[d("형!!","哥!!"),d("저 지금 도훈이형 방 앞인데요","我現在在道勳哥房門口"),d("불 아직 켜져 있어요 쉿","燈還亮著 噓"),d("12시 되면 바로 들어갈게요!","十二點一到我就衝進去！")]}},jihoon:{rules:[L(P.who,[d("...?","……?"),d("이 번호 신유형 거 아닌가요","這不是申惟哥的號碼嗎")]),L(P.food,[d("형 저도 배고파요","哥我也餓了"),d("라면 콜?","泡麵約嗎？")]),L(P.sofa,[d("도훈이형 지금 소파에 없어요","道勳哥現在不在沙發上"),d("방에 들어갔어요 수상하게","可疑地進房間了")]),L(P.cake,[d("케이크 제가 망보고 있어요","蛋糕我在把風")]),L(P.hi,[d("네 형","是 哥")])],fallback:[[d("넵","好")],[d("ㅋㅋㅋ 형","ㅋㅋㅋ 哥")],[d("도훈이형한테는 비밀이죠?","要對道勳哥保密吧？")],[d("형 내일 몇 시 기상이에요?","哥明天幾點起床？")]],sticker:[[nt("👍")]],photo:[[d("오 잘 나왔다","喔 拍得不錯")]],call:{answer:!0,lines:[d("네 형","是 哥"),d("지금 거실이요? 저 바로 갈게요","在客廳嗎？我馬上過去")]}},youngjae:{rules:[L(P.cake,[d("초는 내가 챙겼어","蠟燭我準備好了")]),L(P.sleep,[d("난 이미 누웠어","我已經躺平了")]),L(P.hi,[d("왜","怎樣")])],fallback:[[d("ㅇㅋ","OK")],[d("ㅋㅋㅋ","ㅋㅋㅋ")],[d("12시에 보자","十二點見")],[d("신유야 너무 긴장하지 마","申惟 不要太緊張")]],sticker:[[nt("ㅋㅋ")]],photo:[[d("이거 나 보내줘","這張傳給我")]],call:{answer:!0,lines:[d("어 신유야","喔 申惟"),d("12시 맞춰서 나갈게","我會算準十二點出去"),d("도훈이 아직 몰라. 걱정 마","道勳還不知道，別擔心")]}},hanjin:{rules:[L(P.bday,[d("생일 축하합니다~ 🎶","祝你生日快樂～🎶")]),L(P.song,[d("제가 생일 노래 화음 넣을게요","生日歌我來加和聲")]),L(P.hi,[d("형 안녕하세요!","哥你好！")])],fallback:[[d("네!","好！")],[d("형 ㅋㅋㅋ","哥ㅋㅋㅋ")],[nt("🐼")],[d("형 한국어 맞아요?","哥這是韓文嗎？")]],sticker:[[nt("🐼💕")]],photo:[[d("귀여워요","好可愛")]],call:{answer:!0,lines:[d("형! 네네","哥！好好"),d("저 초 들고 있어요 ㅋㅋ","我拿著蠟燭ㅋㅋ")]}},mom:{rules:[L(P.food,[d("아들 밥은 꼭 챙겨 먹어","兒子飯一定要吃")],[d("엄마가 반찬 좀 보낼까?","媽媽寄點小菜給你？")]),L(P.cookie,[d("쿠키 두 개 맞지?","餅乾是兩個對吧？"),d("경비실에 맡겨놨다더라","說是放在管理室了")]),L(P.love,[d("엄마도 사랑해 아들 ❤️","媽媽也愛你兒子 ❤️")]),L(P.cold,[d("패딩 꼭 입고 다녀","一定要穿羽絨外套"),d("감기 걸리면 큰일이야","感冒就糟了")]),L(P.tired,[d("힘들면 쉬어 가면서 해","累了就休息一下"),d("엄마는 항상 아들 편이야","媽媽永遠站在你這邊")]),L(P.bday,[d("도훈이 생일이구나","是道勳生日啊"),d("엄마가 축하한다고 전해줘","幫媽媽說聲生日快樂")]),L(P.sleep,[d("그래 일찍 자","好 早點睡"),d("핸드폰 그만 보고","別再看手機了")])],fallback:[[d("응 그래","嗯好")],[d("늦게 자지 말고","不要太晚睡")],[d("추운데 따뜻하게 입어","天氣冷穿暖一點")],[d("엄마 지금 드라마 본다","媽媽在看連續劇")],[d("이번 주말에 전화해","這週末打電話給我")]],sticker:[[d("이모티콘 귀엽네 ㅎㅎ","貼圖好可愛呵呵")],[nt("👍")]],photo:[[d("우리 아들 잘생겼네","我兒子真帥")],[d("사진 더 보내봐","多傳幾張來")]],call:{answer:!0,lines:[d("어 아들~","喔 兒子～"),d("밥은 먹었어?","吃飯了嗎？"),d("도훈이 생일 선물은 잘 챙겼고?","道勳的生日禮物準備好了嗎？"),d("그래, 일찍 자라. 사랑해","好，早點睡。愛你")]}},noona:{rules:[L(P.cookie,[d("두쫀쿠 나도 하나 남겨","杜拜Q餅也留一個給我")]),L(P.gift,[d("선물 또 양말 아니지?","禮物不會又是襪子吧？")]),L(P.letter,[d("편지 쓴다고? 니가?","你要寫信？你？"),d("누나가 맞춤법 봐줄까","姊姊幫你檢查錯字嗎")])],fallback:[[d("왜","幹嘛")],[d("ㅋㅋㅋ 알겠어","ㅋㅋㅋ 知道了")],[d("도훈이한테 안부 전해줘","幫我跟道勳問好")],[d("엄마한테 전화 좀 해","打個電話給媽")]],sticker:[[nt("?")]],photo:[[d("오 도훈이 잘 지내네","喔 道勳過得不錯嘛")]],call:{answer:!0,lines:[d("왜~","幹嘛～"),d("선물 뭐 샀는지 자랑하려고?","要炫耀買了什麼禮物嗎？"),d("ㅋㅋ 알았어 끊어","ㅋㅋ 好啦掛了")]}},moon:{rules:[L(P.who,[d("...형 아니죠","……不是哥吧"),d("이 방은 형이랑 나만 아는데","這個聊天室只有哥跟我知道"),d("모르는 척해줄게요. 대신 아무한테도 말하지 마요","我會裝作不知道。但不要跟任何人說")]),L(P.love,[d("나도요","我也是"),d("단톡에선 절대 못 하는 말","在群組絕對說不出口的話"),d("여기선 백 번 해도 돼요","在這裡說一百次都可以")],[d("형 오늘 왜 이렇게 솔직해요","哥今天怎麼這麼坦率"),d("...좋아요 🌙","……我喜歡 🌙")]),L(P.bday,[d("형 생일 0시 땡 하자마자 보낸 거 나예요","哥生日零點一到就傳訊息的是我"),d("원래 계정은 1분 늦게 보냈어요. 들킬까 봐","原本的帳號晚了一分鐘傳。怕被發現")]),L(P.sofa,[d("소파에서 잠든 척한 거 아직도 기억해요","到現在還記得在沙發上裝睡的那次"),d("담요 덮어준 손 떨렸던 것도","連幫我蓋毯子的手在發抖也記得")]),L(P.corner,[d("구석은 우리 둘만 아는 자리잖아요","角落是只有我們知道的位置"),d("오늘도 거기서 기다릴게요","今天也在那裡等你")]),L(P.members,[d("경민이형 눈치 진짜 빨라요","炅潣哥真的很會看臉色"),d("오늘도 목걸이 숨기느라 혼났어요","今天為了藏項鍊累死了")]),L(P.sleep,[d("잘 자요 형","晚安 哥"),d("벽 두 번 두드리면 나도 두 번 할게요","你敲牆兩下，我也敲兩下")]),L(P.sorry,[d("형이 뭘 미안해요","哥有什麼好抱歉的"),d("우리 이렇게 몰래 하는 거, 나 하나도 안 힘들어요","我們這樣偷偷的，我一點也不覺得累")]),L(P.heart,[d("🫶","🫶"),d("형이 먼저 하면 반칙이에요","哥先比是犯規")])],fallback:[[d("형","哥")],[d("여기선 거짓말 안 하기로 했잖아요","說好在這裡不說謊的")],[d("보고 싶어요. 방금 봤는데도","好想你。明明才剛見過")],[d("🌙","🌙")],[d("형 지금 무슨 표정인지 알 것 같아요","我好像知道哥現在是什麼表情")]],sticker:[[nt("🌙")],[d("형 이모티콘 귀여운 거 쓰는 거 나만 알아요","只有我知道哥會用可愛的貼圖")]],photo:[[d("...이거 지워요 형","……快刪掉啦哥"),d("아니다 저장했어요","算了 我存了")]],call:{answer:!0,lines:[d("...형","……哥"),d("왜 이 번호로 전화해요. 누가 들으면 어떡해","幹嘛用這個號碼打。被聽到怎麼辦"),d("...목소리 들으니까 좋다","……聽到聲音真好"),d("끊어요. 이따 베란다에서 봐요","掛了。等等陽台見")]}},manager:{rules:[L(P.schedule,[d("내일 10시 숙소 앞","明天十點宿舍前"),d("늦으면 안 된다","不准遲到")])],fallback:[[d("확인","收到")],[d("내일 10시 늦지 마","明天十點不要遲到")],[d("일찍 자라","早點睡")]],sticker:[[nt("👍")]],photo:[[d("확인","收到")]],call:{answer:!1,lines:[],missedMsg:d("회의 중이라 이따 전화할게. 급하면 카톡 남겨","在開會，等等回電。急的話傳 Kakao")}}},$h={shinyu:{rules:[L(P.who,[d("...누구세요?","……請問是誰？"),d("이거 도훈이 폰인데","這是道勳的手機"),d("주우신 거면 연락 주세요. 제가 찾으러 갈게요","如果是撿到的請聯絡我，我會去拿")],[d("도훈이 아니죠","你不是道勳吧"),d("도훈이는 이렇게 말 안 해","道勳不會這樣說話")]),L(P.bday,[d("내 생일 아직인데 ㅋㅋ","我生日還沒到啊ㅋㅋ"),d("...너네 뭐 하지","……你們在搞什麼")],[d("또 그 얘기야?","又說這個？"),d("수상하다 진짜","真的很可疑")]),L(P.cake,[d("케이크?","蛋糕？"),d("...못 들은 걸로 할게","……我當沒聽到")],[d("냉장고에 뭐 넣었어?","你在冰箱放了什麼？")]),L(P.gift,[d("선물 사지 마","不要買禮物"),d("...샀어?","……買了？")],[d("그 쇼핑백 볼링공 모양이던데","那個購物袋看起來像保齡球")]),L(P.letter,[d("편지?","信？"),d("...작년에 내가 쓴 거 아직 갖고 있어?","……我去年寫的你還留著嗎？")]),L(P.bowling,[d("118 대 121","118 比 121"),d("3점이다 3점","三分，才三分")],[d("다음엔 이긴다","下次會贏"),d("레인 탓 아니고 진짜로","不是怪球道，是真的")]),L(P.love,[d("...갑자기?","……突然？"),d("나도 🩵","我也是 🩵")],[d("너 오늘 왜 그래 ㅋㅋ","你今天怎麼了ㅋㅋ"),d("...싫진 않다","……不討厭")]),L(P.cry,[d("누가 울어","誰在哭"),d("나 안 울어","我不會哭")]),L(P.sorry,[d("뭐가","什麼"),d("괜찮아 도훈아","沒關係啦道勳")]),L(P.thanks,[d("뭐가 ㅋㅋ","謝什麼ㅋㅋ")],[d("나도 고마워","我也謝謝你"),d("맨날","每天都是")]),L(P.sofa,[d("소파에서 자지 말고 방 가서 자","不要在沙發上睡，回房間"),d("담요는 덮어줄게","毯子我會幫你蓋")],[d("너 일부러 소파에서 자지","你是故意睡沙發的吧")]),L(P.corner,[d("구석으로 와","來角落"),d("할 말 있어","有話跟你說")],[d("꼰대 아니라니까","我說了我不是老古板")]),L(P.mic,[d("마이크 사건 ㅋㅋㅋ","麥克風事件ㅋㅋㅋ"),d("영상 아직 있다","影片我還留著")]),L(P.heart,[d("🫶","🫶"),d("3월 14일","3月14日")]),L(P.food,[d("라면 끓여줄까","要幫你煮泡麵嗎")],[d("야식 금지인데","說好禁止宵夜的"),d("...한 입만","……一口就好")]),L(P.sleep,[d("너나 일찍 자","你才要早點睡")],[d("잘 자 도훈아","晚安 道勳")]),L(P.tired,[d("오늘 고생했어","今天辛苦了"),d("내일은 내가 깨워줄게","明天我叫你起床")]),L(P.practice,[d("내일 그 파트 다시 맞춰보자","明天那段再對一次"),d("너 잘하고 있어","你做得很好")]),L(P.schedule,[d("11시 출발","十一點出發"),d("늦잠 자면 깨우러 간다","睡過頭我就去叫你")]),L(P.members,[d("걔네 다 어디 갔어","他們都去哪了"),d("거실이 너무 조용해","客廳太安靜了")]),L(P.yes,[d("응","嗯")],[d("그래 ㅋㅋ","好啦ㅋㅋ")]),L(P.no,[d("왜 ㅋㅋ","為什麼ㅋㅋ")]),L(P.hi,[d("왜 도훈아","怎麼了道勳")],[d("응 말해","嗯 說吧")])],fallback:[[d("ㅋㅋ","ㅋㅋ")],[d("응","嗯")],[d("알겠어","知道了")],[d("도훈아 왜 그래 ㅋㅋ","道勳你怎麼了ㅋㅋ")],[d("그래서?","所以？")],[d("너 지금 어디야","你現在在哪")],[d("...뭐야","……什麼啦")]],sticker:[[d("ㅋㅋㅋ 그게 뭐야","ㅋㅋㅋ 那是什麼")],[nt("🩵")]],photo:[[d("이거 언제 찍었냐","這什麼時候拍的"),d("지워라","刪掉")],[d('"형 웃긴거" 폴더 몇 장까지 있는 거야',"「哥好笑的」資料夾到底有幾張")]],call:{answer:!0,lines:[d("어 도훈아","喔 道勳"),d("왜 전화했어 ㅋㅋ","幹嘛打電話ㅋㅋ"),d("...너 지금 어디야? 문 앞에서 소리 나는데","……你現在在哪？門口有聲音欸"),d("알겠어. 일찍 자","知道了。早點睡")]}},kyungmin:{rules:[L(P.bday,[d("형 쉿!!! 신유형 아직 몰라요","哥噓!!! 申惟哥還不知道")]),L(P.cake,[d("케이크 냉장고 맨 아래요","蛋糕在冰箱最下層")]),L(P.hi,[d("형!! 왜요","哥!! 幹嘛")])],fallback:[[d("ㅋㅋㅋㅋ","ㅋㅋㅋㅋ")],[d("넵!","是！")],[d("저 입 꾹 닫고 있어요","我嘴巴閉得緊緊的")],[d("아까 형한테 들킬 뻔했어요","剛剛差點被哥發現")]],sticker:[[nt("🤐")]],photo:[[d("오 이거 대박","喔 這張讚")]],call:{answer:!0,lines:[d("형!","哥！"),d("저 지금 숨 참고 있어요 ㅋㅋ","我現在在憋氣ㅋㅋ")]}},jihoon:{rules:[L(P.hi,[d("네 형","是 哥")])],fallback:[[d("넵","好")],[d("형 문 앞 대기 중","哥我在門口待命")],[d("신유형 방 불 꺼질 것 같아요","申惟哥房間燈好像要關了")]],sticker:[[nt("👍")]],photo:[[d("ㅋㅋㅋ","ㅋㅋㅋ")]],call:{answer:!0,lines:[d("네 형","是 哥"),d("신유형 방 불 아직 켜져 있어요","申惟哥房間燈還亮著")]}},youngjae:{rules:[L(P.cake,[d("케이크 냉장고에 넣어놨어","蛋糕放冰箱了")]),L(P.letter,[d("편지 꼭 보내","信一定要傳"),d("신유 그런 거 좋아해","申惟喜歡那種")])],fallback:[[d("ㅇㅋ","OK")],[d("도훈아 니가 먼저 보내","道勳你先傳")],[d("긴장하지 마","別緊張")]],sticker:[[nt("ㅋㅋ")]],photo:[[d("잘 찍었네","拍得不錯")]],call:{answer:!0,lines:[d("어 도훈아","喔 道勳"),d("케이크 픽업 완료. 걱정 마","蛋糕取好了，別擔心")]}},hanjin:{rules:[L(P.song,[d("생일 노래 화음 연습했어요!","生日歌和聲練好了！")])],fallback:[[d("네 형!","好的哥！")],[nt("🐼")],[d("형 웃음 참기 힘들어요","哥我快憋不住笑了")]],sticker:[[nt("🐼💕")]],photo:[[d("귀여워요","好可愛")]],call:{answer:!0,lines:[d("형!","哥！"),d("웃음 참는 중이에요 ㅋㅋ","我在憋笑ㅋㅋ")]}},mom:{rules:[L(P.food,[d("밥 잘 챙겨 먹고","飯要好好吃")]),L(P.love,[d("엄마도 사랑해 ❤️","媽媽也愛你 ❤️")]),L(P.gift,[d("볼링공 잘 받았어?","保齡球收到了嗎？"),d("신유가 좋아하겠다","申惟會喜歡的")]),L(P.cold,[d("비 온다더라 우산 챙겨","聽說會下雨，帶傘")])],fallback:[[d("응 그래 도훈아","嗯好 道勳")],[d("신유한테 생일 축하한다고 전해줘","幫我跟申惟說生日快樂")],[d("늦게 자지 마","別太晚睡")]],sticker:[[d("ㅎㅎ","呵呵")]],photo:[[d("잘 나왔네 우리 아들","我兒子拍得真好")]],call:{answer:!0,lines:[d("어 도훈아~","喔 道勳～"),d("볼링공은 잘 받았어?","保齡球收到了嗎？"),d("신유한테 생일 축하한다고 전해줘","幫我跟申惟說生日快樂")]}},sky:{rules:[L(P.who,[d("...도훈이 아니지","……不是道勳吧"),d("이 방은 나랑 걔만 아는 곳인데","這裡只有我跟他知道"),d("부탁할게. 못 본 걸로 해줘","拜託你。當作沒看到")]),L(P.love,[d("나도","我也是"),d("꽤 오래전부터","從很久以前開始"),d("리더 말고 그냥 신유로 하는 말","不是以隊長，是以申惟的身分說的")],[d("너 이런 말 여기서만 하는 거 알지","你知道你只在這裡說這種話吧"),d("...좋다 🩵","……真好 🩵")]),L(P.bday,[d("생일 0시 1초 컷은 늘 나야","生日零點一秒傳訊息的永遠是我"),d("원래 계정은 일부러 1분 늦게","原本的帳號故意晚一分鐘")]),L(P.bowling,[d("볼링 리매치는 핑계야","保齡球復仇戰只是藉口"),d("캘린더 보면 알잖아","看行事曆就知道了吧")]),L(P.members,[d("경민이가 오늘 또 이상한 눈으로 봤어","炅潣今天又用奇怪的眼神看我"),d("목폴라는 이제 못 쓴다","高領的藉口不能再用了")]),L(P.sleep,[d("잘 자 도훈아","晚安 道勳"),d("벽 두 번","敲牆兩下")]),L(P.sorry,[d("사과하지 마","不要道歉"),d("숨기는 건 내가 정한 거야. 네 잘못 아니야","要保密是我決定的。不是你的錯")]),L(P.heart,[d("🫶","🫶"),d("이번에도 내가 먼저","這次也是我先")]),L(P.food,[d("바나나우유 사놨어","買好香蕉牛奶了"),d("편의점 앞 벤치","便利商店前的長椅")])],fallback:[[d("도훈아","道勳")],[d("여기선 그냥 말해도 돼","在這裡直接說就好")],[d("보고 싶다","想你")],[d("🩵","🩵")],[d("너 방금 웃었지. 다 보여","你剛剛笑了吧。都看得到")]],sticker:[[nt("🩵")],[d("ㅋㅋ 그 이모티콘 나만 보여줘","ㅋㅋ 那個貼圖只給我看")]],photo:[[d("...저장했다","……存了"),d("이건 숨긴 앨범으로","這張放進隱藏相簿")]],call:{answer:!0,lines:[d("...도훈아?","……道勳？"),d("이 번호로 전화하면 안 된다니까","就說不能用這個號碼打"),d("...그래도 좋다","……不過還是很開心"),d("이따 편의점 앞에서 봐","等等便利商店前見")]}},manager:{rules:[],fallback:[[d("확인","收到")],[d("내일 11시","明天十一點")]],sticker:[[nt("👍")]],photo:[[d("확인","收到")]],call:{answer:!1,lines:[],missedMsg:d("운전 중. 이따 연락할게","在開車，等等聯絡你")}}},il={shinyu:Eh,dohoon:$h},Jc=e=>e.replace(/[\s.,!?~…ㅋㅎㅠㅜ^]+/g,"").toLowerCase();function Ra(e,t,s){const o=Jc(t);if(o){for(const r of e.rules)if(r.keys.some(l=>o.includes(Jc(l))))return r.sets[s%r.sets.length]}return e.fallback[s%e.fallback.length]}const Jo=1400;function Ti(e){return{fired:[],done:[],added:[],readIds:[],readRooms:[],clock:e.startAt,pendingReply:null,seq:1,calls:[],notices:[],freeCount:{}}}function Th(e){try{const t=window.sessionStorage.getItem(`yudoz-${e.id}-v1`);if(t)return{...Ti(e),...JSON.parse(t)}}catch{}return Ti(e)}const e0=e=>e.replace(/[\s.,!?~…ㅋㅎㅠㅜ^]+/g,"").toLowerCase();function Ph(e,t){const s=e0(t);if(!s)return null;for(const o of e)if(o.keys.some(r=>s.includes(e0(r))))return o;return null}const F2=j.createContext(null);function Lh({story:e,children:t}){const[s,o]=j.useState({kind:"lock"}),[r,l]=j.useState(null),[i,a]=j.useState(()=>Th(e)),[c,u]=j.useState(null),[x,g]=j.useState(null),m=j.useRef(i),y=j.useRef({screen:s,openRoom:r});y.current={screen:s,openRoom:r};const w=j.useRef([]),v=j.useRef(new Set),b=j.useRef(null),h=j.useRef({}),f=j.useRef(()=>{}),p=j.useRef(()=>{}),z=j.useCallback(E=>{m.current=E,a(E)},[]),C=j.useCallback(()=>{const E=m.current;return E.liveFrom?new Date(q(E.clock)+Date.now()-E.liveFrom).toISOString():E.clock},[]),[,M]=j.useState(0);j.useEffect(()=>{if(!i.liveFrom)return;const E=window.setInterval(()=>M(I=>I+1),5e3);return()=>window.clearInterval(E)},[i.liveFrom]),j.useEffect(()=>{try{window.sessionStorage.setItem(`yudoz-${e.id}-v1`,JSON.stringify(i))}catch{}},[i,e.id]),j.useEffect(()=>()=>w.current.forEach(E=>window.clearTimeout(E)),[]);const S=(E,I)=>{w.current.push(window.setTimeout(E,I))},_=j.useCallback(E=>{const I=e.contacts[E];return I?I.name:E},[e]),T=j.useCallback((E,I)=>{const Z=e.rooms.find(Y=>Y.id===E);if(Z!=null&&Z.group){const Y=_(I),pe=Z.group.name,te=(re,we)=>typeof re=="string"?re:re[we];return{ko:`${te(pe,"ko")} · ${te(Y,"ko")}`,zh:`${te(pe,"zh")} · ${te(Y,"zh")}`}}return _(I)},[e,_]),$=j.useCallback((E,I,Z,Y)=>{const pe=m.current;if(pe.added.some(we=>we.id===E))return;const te={id:E,room:I,from:Z,at:C(),seq:pe.seq,...Y},re=y.current.screen.kind==="app"&&y.current.screen.app==="kakao"&&y.current.openRoom===I;if(z({...pe,seq:pe.seq+1,added:[...pe.added,te],readIds:re?[...pe.readIds,E]:pe.readIds}),Sh(),!re){const we={key:E,room:I,sender:T(I,Z),text:"text"in Y?Y.text:"photo"in Y?{ko:"사진을 보냈습니다.",zh:"傳送了照片。"}:{ko:"이모티콘을 보냈습니다.",zh:"傳送了貼圖。"}};u(we),m.current={...m.current,notices:[...m.current.notices,{...we,at:C()}]},a(m.current)}},[z,T,C]),W=j.useRef(()=>{}),le=j.useCallback((E,I,Z)=>{if(v.current.has(E))return;v.current.add(E);let Y=0;const pe=()=>{for(;Y<I.length&&m.current.done.includes(`${E}#${Y}`);)Y++;if(Y>=I.length){v.current.delete(E),window.setTimeout(()=>f.current(),1200);return}const te=I[Y],re=`${E}#${Y}`,we=()=>{const Me=m.current;Me.done.includes(re)||z({...Me,done:[...Me.done,re]}),Y++};switch(te.t){case"msg":case"sticker":{const Me=e.rooms.find(St=>St.id===te.room),jn=te.from??(Me==null?void 0:Me.contactId)??"";$(re,te.room,jn,te.t==="msg"?{text:te.text}:{sticker:te.sticker}),we(),S(pe,te.gap??Jo);return}case"photo":{const Me=e.rooms.find(jn=>jn.id===te.room);$(re,te.room,te.from??(Me==null?void 0:Me.contactId)??"",{photo:te.caption}),we(),S(pe,te.gap??Jo);return}case"end":z({...m.current,ended:!0}),we(),S(pe,100);return;case"clock":z({...m.current,clock:te.at,liveFrom:Date.now()}),we(),S(pe,300);return;case"wait":we(),S(pe,te.ms);return;case"reply":if(m.current.pendingReply||z({...m.current,pendingReply:{actionId:re,room:te.room,branches:te.branches}}),v.current.delete(E),h.current[te.room]){const Me=h.current[te.room];delete h.current[te.room],S(()=>p.current(te.room,Me),900)}return;case"call":g({key:re,from:te.from,lines:te.lines,declinedMsg:te.declinedMsg,state:"ringing"}),v.current.delete(E);return}};S(pe,Z)},[z,$,e]),de=j.useCallback(E=>{for(const I of e.script)I.when!==E||m.current.fired.includes(I.id)||(z({...m.current,fired:[...m.current.fired,I.id]}),le(I.id,I.actions,I.delay??800))},[e,z,le]);W.current=de,j.useEffect(()=>{for(const E of e.script){if(!m.current.fired.includes(E.id))continue;E.actions.some((Z,Y)=>!m.current.done.includes(`${E.id}#${Y}`))&&le(E.id,E.actions,1200)}},[]);const He=E=>{const I=e.script.find(Z=>E.startsWith(`${Z.id}#`));I&&le(I.id,I.actions,600)},Re=E=>{var te;if(l(E),!E)return;u(re=>(re==null?void 0:re.room)===E?null:re);const I=m.current,Z=I.added.filter(re=>re.room===E&&re.from!=="me"&&!I.readIds.includes(re.id)).map(re=>re.id),Y=((te=e.rooms.find(re=>re.id===E))==null?void 0:te.unread)&&!I.readRooms.includes(E),pe=I.notices.filter(re=>re.room!==E);(Z.length||Y||pe.length!==I.notices.length)&&z({...I,notices:pe,readIds:[...I.readIds,...Z],readRooms:Y?[...I.readRooms,E]:I.readRooms}),de(`open:${E}`)},ct=E=>e.script.some(I=>m.current.fired.includes(I.id)&&I.actions.some((Z,Y)=>!m.current.done.includes(`${I.id}#${Y}`)&&"room"in Z&&Z.room===E)),K=j.useRef({});f.current=()=>{var E;for(const[I,Z]of Object.entries(h.current))ct(I)||((E=m.current.pendingReply)==null?void 0:E.room)===I||(delete h.current[I],D(I,"text",Z))};const D=(E,I,Z)=>{var jn;const Y=e.rooms.find(St=>St.id===E);if(!Y||ct(E))return;const pe=il[e.id]??{},te=Y.contactId?[Y.contactId]:((jn=Y.group)==null?void 0:jn.members)??[],re=m.current,we=Y.contactId?te:te.filter((St,Ct)=>(re.seq+Ct)%3===0).slice(0,2);!we.length&&te.length&&we.push(te[re.seq%te.length]),S(()=>{const St=m.current;z({...St,added:St.added.map(Ct=>Ct.room===E&&Ct.from==="me"?{...Ct,unreadByThem:!1}:Ct)})},900+Math.random()*900);let Me=2200;we.forEach(St=>{const Ct=pe[St];if(!Ct)return;const Os=m.current.freeCount[St]??0,Wa=I==="sticker"?Ct.sticker[Os%Ct.sticker.length]:I==="photo"?Ct.photo[Os%Ct.photo.length]:Ra(Ct,Z,Os);z({...m.current,freeCount:{...m.current.freeCount,[St]:Os+1}}),Wa.forEach((H2,Ba)=>{const q2=`free-${E}-${St}-${Os}-${Ba}`;S(()=>$(q2,E,St,{text:H2}),Me+Ba*1300)}),Me+=Wa.length*1300+600})},X=(E,I)=>{var Me;const Z=m.current,Y=typeof I=="string"?I.trim():"";if(typeof I=="string"&&!Y)return;const pe=`me-${Z.seq}`,te=typeof I=="string"?{text:Y}:I,re={id:pe,room:E,from:"me",at:C(),seq:Z.seq,unreadByThem:!0,...te};if(((Me=Z.pendingReply)==null?void 0:Me.room)===E){z({...Z,seq:Z.seq+1,added:[...Z.added,re]}),Y&&ee(E,Y);return}if(ct(E)){z({...Z,seq:Z.seq+1,added:[...Z.added,re]}),Y&&(h.current[E]=Y);return}z({...Z,seq:Z.seq+1,added:[...Z.added,re]}),window.clearTimeout(K.current[E]);const we=typeof I=="string"?"text":"sticker"in I?"sticker":"photo";K.current[E]=window.setTimeout(()=>D(E,we,Y),1600)},ee=(E,I)=>{var te;const Z=m.current;if(((te=Z.pendingReply)==null?void 0:te.room)!==E)return;const Y=Ph(Z.pendingReply.branches,I);if(!Y)return;const pe=Z.pendingReply;z({...Z,pendingReply:null}),S(()=>{const re=m.current;z({...re,added:re.added.map(we=>we.room===E&&we.from==="me"?{...we,unreadByThem:!1}:we)})},700),Y.replies.forEach((re,we)=>{S(()=>{const Me=e.rooms.find(jn=>jn.id===E);$(`${pe.actionId}:${Y.id}:${we}`,E,re.from??(Me==null?void 0:Me.contactId)??"",{text:re.text})},1800+we*Jo)}),S(()=>{const re=m.current;z({...re,done:[...re.done,pe.actionId]}),de(`branch:${E}`),de(`branch:${E}:${Y.id}`),He(pe.actionId)},1800+Y.replies.length*Jo+400)};p.current=ee;const ze=(E,I)=>{const Z=e.rooms.find(Y=>Y.contactId===E);Z&&$(`push-${E}-${m.current.seq}-${Date.now()}`,Z.id,E,{text:I})},qe=(E,I)=>{var pe;if(!x)return;const Z=m.current;z({...Z,done:[...Z.done,x.key],calls:[...Z.calls,{at:C(),contactId:x.from,type:E,seconds:I}]});const Y=x.key;if(g(null),E==="missed"&&x.declinedMsg){const te=(pe=e.rooms.find(re=>re.contactId===x.from))==null?void 0:pe.id;te&&S(()=>$(`${Y}:declined`,te,x.from,{text:x.declinedMsg}),1500)}de(E==="missed"?"call:declined":"call:accepted"),de("call:done"),He(Y)},gn=j.useMemo(()=>e.rooms.map(E=>({...E,live:i.added.filter(I=>I.room===E.id)})).sort((E,I)=>{var we,Me;const Z=E.live.length?E.live[E.live.length-1].at:((we=E.messages[E.messages.length-1])==null?void 0:we.at)??"",Y=I.live.length?I.live[I.live.length-1].at:((Me=I.messages[I.messages.length-1])==null?void 0:Me.at)??"",pe=q(Y)-q(Z);if(pe)return pe;const te=E.live.length?E.live[E.live.length-1].seq:0;return(I.live.length?I.live[I.live.length-1].seq:0)-te}),[e,i.added]),bt=j.useMemo(()=>{const E={};for(const I of e.rooms)I.unread&&!i.readRooms.includes(I.id)&&(E[I.id]=I.unread);for(const I of i.added)I.from!=="me"&&!i.readIds.includes(I.id)&&(E[I.room]=(E[I.room]??0)+1);return E},[e,i]),Ft={story:e,screen:s,setScreen:E=>{(E.kind!=="app"||E.app!=="kakao")&&l(null),o(E)},unlock:()=>{const E=b.current;b.current=null,o(E?{kind:"app",app:"kakao"}:{kind:"home"}),de("unlock"),E&&window.setTimeout(()=>Re(E),0)},queueRoom:E=>{b.current=E},clock:C(),ended:!!i.ended,rooms:gn,unreadByRoom:bt,totalUnread:Object.entries(bt).reduce((E,[I,Z])=>{var Y;return E+((Y=e.rooms.find(pe=>pe.id===I))!=null&&Y.hidden?0:Z)},0),openRoom:r,setOpenRoom:Re,canReply:()=>!0,awaiting:E=>{var I;return((I=i.pendingReply)==null?void 0:I.room)===E},send:X,pushMessage:ze,banner:c,dismissBanner:()=>u(null),call:x,acceptCall:()=>g(E=>E&&{...E,state:"active"}),declineCall:()=>qe("missed",0),finishCall:E=>qe("incoming",E),extraCalls:i.calls,addCall:(E,I,Z)=>{const Y=m.current;z({...Y,calls:[...Y.calls,{at:C(),contactId:E,type:I,seconds:Z}]})},notices:i.notices,clearNotices:()=>z({...m.current,notices:[]}),restart:()=>{w.current.forEach(E=>window.clearTimeout(E)),w.current=[],v.current.clear(),z(Ti(e)),u(null),g(null),l(null),o({kind:"lock"})}};return n.jsx(F2.Provider,{value:Ft,children:t})}function se(){const e=j.useContext(F2);if(!e)throw new Error("useStory outside provider");return e}const Fh=[{id:"fic-s0",pinned:!0,title:{ko:"📖 새벽 세 시, 거실의 불 (목차)",zh:"📖 凌晨三點，客廳的燈（目錄）"},at:k("2026-01-29 23:20"),body:{ko:`📖 새벽 세 시, 거실의 불

혼자 쓰는 글. 도훈이 절대 보면 안 됨.
(보면... 그냥 모른 척해 줘)

1. 처음 — 2023년 봄, 연습실
2. 데뷔 전날 — 2024년 1월, 옥상
3. 말하지 못한 계절 — 2025년
4. 12월 24일 — 베란다
5. D+36 — 오늘 밤

작가의 말
쓰다 보니 다 너였다.`,zh:`📖 凌晨三點，客廳的燈

自己一個人寫的東西。道勳絕對不能看。
（看了的話……就裝作不知道吧）

1. 初次 — 2023年春，練習室
2. 出道前一天 — 2024年1月，頂樓
3. 說不出口的季節 — 2025年
4. 12月24日 — 陽台
5. D+36 — 今晚

作者的話
寫著寫著，全都是你。`}},{id:"fic-s1",title:{ko:"1. 처음",zh:"1. 初次"},at:k("2026-01-05 02:40"),body:{ko:`1. 처음

그 애가 처음 연습실에 온 날은 비가 왔다.

나는 거울 앞에서 같은 8카운트를 스무 번째 반복하고 있었다. 오른쪽 어깨가 반 박자 늦었다. 고치려고 하면 왼쪽이 무너졌다. 연습생이 된 지 몇 년이 지나도 그런 날은 있었다. 몸이 내 말을 안 듣는 날.

문이 열렸다. 매니저 형 뒤로 키 큰 남자애 하나가 서 있었다. 젖은 후드 끝에서 물이 떨어지고 있었다.

"인사해. 오늘부터 같이 연습할 도훈이."
"안녕하세요."

목소리가 생각보다 낮았다. 그리고 생각보다 떨렸다.

나는 음악을 끄고 수건을 하나 건넸다. 그 애는 수건을 받더니 머리 대신 바닥에 떨어진 물부터 닦았다. 연습실 바닥이 젖으면 미끄럽다는 걸, 누가 알려주지 않아도 아는 애였다.

"머리부터 닦아. 감기 걸려."
"아, 네."

그게 우리 첫 대화였다. 별거 없었다. 그런데 이상하게 그날 밤, 나는 그 애가 바닥을 닦던 뒷모습을 몇 번이나 떠올렸다.

*

도훈이는 말이 없었다. 연습이 끝나면 다들 편의점으로 몰려갔지만 그 애는 늘 남았다. 거울 맨 뒷줄, 조명이 반쯤 닿는 자리에서 혼자 동작을 맞췄다.

어느 날 나도 남았다. 이유는 오른쪽 어깨 때문이라고 해 두자.

새벽 두 시쯤, 음악이 끊긴 사이에 그 애가 말했다.
"형은 왜 맨날 남아요?"
"너는?"
"저는... 아직 못 따라가서요."
"나도 그래."

그 애가 거울 속에서 나를 봤다. 믿지 않는 눈이었다. 형이 못 따라가는 게 어디 있냐는 눈.

"진짜야. 오른쪽 어깨가 맨날 늦어."
"아."
그 애는 잠깐 생각하더니 내 뒤로 와서 섰다.
"형, 다시 해봐요. 제가 봐줄게요."

들어온 지 일주일 된 애가 나를 봐준다고 했다. 웃겼는데, 웃지 않았다. 음악을 다시 틀었다.

8카운트가 끝나고 그 애가 말했다.
"형, 숨을 오른쪽 어깨 들 때 쉬어요. 그래서 늦는 거예요."

그다음 8카운트는 맞았다. 몇 주 동안 혼자 못 고친 걸, 새벽 두 시에 일주일 된 연습생이 고쳤다.

"...너 뭐야."
"도훈인데요."
그 애가 처음으로 웃었다. 입꼬리가 한쪽만 먼저 올라가는 웃음이었다. 나는 그 웃음을 오래 봤다. 너무 오래 봐서, 그 애가 고개를 갸웃했다.

*

그날 이후로 우리는 같이 남았다.

세 시쯤 되면 배가 고팠다. 나는 편의점에서 바나나우유를 두 개 사 왔다. 그 애는 처음엔 "괜찮아요" 했고, 두 번째엔 "감사합니다" 했고, 세 번째부터는 내가 문을 열고 들어오면 먼저 손을 내밀었다.

빨대를 꽂아서 주면, 그 애는 꼭 한 모금 마시고 나서 "형 이거 맛있어요" 했다. 매번 같은 말이었는데 매번 처음 마시는 사람 같았다.

3월 14일. 쉬는 시간에 나는 거울에 대고 손하트를 만들었다. 혼자 하는 장난이었다. 오늘도 수고했다, 같은.

거울 속, 내 손하트 옆에 하트가 하나 더 생겼다.
도훈이가 내 뒤에서 손을 뻗어 있었다.

두 개의 하트가 거울 속에서 나란히 서 있었다. 나는 웃었고, 그 애도 웃었다. 그 순간 휴대폰을 꺼내 사진을 찍었다. 왜 찍었는지는 그때도 몰랐다.

그 사진은 2년 뒤에 내 게시물에 올라간다. 그리고 그 애는 댓글을 단다. "형 손하트 옆에 하나 더 있는데요."

알아. 처음부터 알았어.

*

작가의 말
처음이라는 건 이상하다. 그땐 그게 처음인 줄 모른다.`,zh:`1. 初次

那孩子第一次來練習室的那天，下著雨。

我在鏡子前重複同一個八拍，已經第二十次了。右肩慢了半拍。想修正，左邊又垮了。成為練習生好幾年了，還是會有這種日子。身體不聽我話的日子。

門開了。經紀人哥身後站著一個高個子的男孩。濕掉的帽T邊緣正在滴水。

「打個招呼。從今天開始一起練習的道勳。」
「你們好。」

聲音比想像中低。也比想像中抖。

我關掉音樂，遞了一條毛巾給他。他接過毛巾，不是先擦頭髮，而是先擦掉地板上的水。練習室地板濕了會滑——不用人教，他就知道。

「先擦頭髮。會感冒。」
「啊，好。」

那就是我們的第一段對話。沒什麼特別的。可是那天晚上，我莫名地想了好幾次他擦地板的背影。

*

道勳話很少。練習結束後大家都湧去便利商店，他總是留下來。鏡子最後一排，燈光只照到一半的位置，一個人對動作。

有一天我也留下來了。理由就說是右肩吧。

凌晨兩點左右，音樂中斷的空檔，他開口了。
「哥為什麼每天都留下來？」
「你呢？」
「我……還跟不上。」
「我也是。」

他從鏡子裡看我。是不相信的眼神。好像在說哥怎麼可能跟不上。

「真的。右肩每次都慢。」
「啊。」
他想了一下，走到我身後站著。
「哥，再跳一次。我幫你看。」

進來一週的孩子說要幫我看。很好笑，但我沒笑。重新放了音樂。

八拍結束，他說：
「哥，你在抬右肩的時候換氣。所以才會慢。」

下一個八拍對了。好幾週一個人改不掉的東西，凌晨兩點被一個來了一週的練習生改好了。

「……你是誰啊。」
「我是道勳。」
他第一次笑了。是嘴角只先揚起一邊的笑。我看著那個笑看了很久。久到他歪了歪頭。

*

從那天起，我們一起留下來。

三點左右就會餓。我去便利商店買了兩瓶香蕉牛奶。他第一次說「不用了」，第二次說「謝謝」，從第三次開始，我一開門進來，他就先伸出手。

我把吸管插好遞給他，他一定會先喝一口，然後說「哥這個好好喝」。每次都是同樣的話，每次都像第一次喝的人。

3月14日。休息時間，我對著鏡子比了手指愛心。一個人的小把戲。像是「今天也辛苦了」那種。

鏡子裡，我的愛心旁邊多了一個愛心。
道勳從我身後伸出了手。

兩顆愛心在鏡子裡並排站著。我笑了，他也笑了。那一瞬間我拿出手機拍了照。為什麼拍，當時也不知道。

那張照片兩年後會出現在我的貼文裡。而他會留言：「哥的手指愛心旁邊還有一個欸。」

我知道。從一開始就知道。

*

作者的話
「第一次」這種東西很奇怪。當下並不知道那是第一次。`}},{id:"fic-s2",title:{ko:"2. 데뷔 전날",zh:"2. 出道前一天"},at:k("2026-01-10 03:10"),body:{ko:`2. 데뷔 전날

2024년 1월 21일. 내일이면 우리는 이름을 갖는다.

숙소는 조용했다. 아무도 자지 못하는 조용함이었다. 지훈이는 이불 속에서 휴대폰 불빛을 깜빡였고, 경민이는 물을 세 번째 마시러 나왔다가 나랑 눈이 마주치자 멋쩍게 웃었다.

나는 옥상으로 올라갔다. 1월 밤공기가 폐 끝까지 차갑게 들어왔다. 그게 좋았다. 머릿속이 하얘져서.

리더. 내일부터 나는 리더다. 그 단어가 얼마나 무거운지, 연습생 때는 몰랐다. 여섯 명의 내일이 내 어깨 어딘가에 걸려 있는 것 같았다.

철문이 끼익 열렸다.

"형 여기 있을 줄 알았어요."
도훈이였다. 후드 위에 패딩을 걸치고, 손에는 바나나우유 두 개.
"편의점 갔다 왔어?"
"형이 맨날 사 줬으니까, 오늘은 제가요."

그 애가 빨대를 꽂아서 내밀었다. 내가 늘 하던 방식 그대로. 받아 드는데 손끝이 닿았다. 그 애 손이 나보다 더 차가웠다. 편의점까지 뛰어갔다 왔구나, 생각했다.

우리는 난간에 기대 서서 아무 말 없이 마셨다. 서울의 불빛이 멀리서 깜빡였다. 저 불빛 중 몇 개는 내일 우리를 보겠지.

"형 떨려요?"
"응."
"형도 떨리는구나."
"리더라고 안 떨리는 거 아니야."
"알아요."

그 애가 빈 우유팩을 손에서 굴리다가 말했다.
"근데 형, 저는 형 옆이면 안 떨려요."

바람이 불었다. 그 애 목소리가 바람에 섞여서 잘못 들은 줄 알았다.

"...뭐?"
"무대에서요. 형 옆자리면 안 떨린다고요. 연습할 때도 그랬어요. 형이 옆에 있으면 박자가 맞아요."

그 애는 아무렇지 않게 말했다. 동선 얘기를 하듯이. 그런데 나는 그 말을 아무렇지 않게 들을 수가 없었다. 심장이 한 번, 이상한 박자로 뛰었다. 오른쪽 어깨가 늦던 그 반 박자처럼.

아, 하고 생각했다.
아, 큰일 났다.

"그럼 내일 내 옆에 서."
"동선상 형 옆 아닌데요."
"그럼 마음만."
그 애가 웃었다. 한쪽 입꼬리가 먼저.

"형, 우리 오래 해요."
"응."
"진짜 오래요. 형이 할아버지 돼도."
"너도 할아버지잖아 그때."
"그러니까 같이요."

같이. 나는 그 단어를 바나나우유 마지막 모금이랑 같이 삼켰다. 달았다. 이상할 만큼.

*

내려가는 계단에서 그 애가 내 패딩 모자를 씌워 줬다.
"형 귀 빨개요. 추워서."
"응. 추워서."

추워서가 아니었다. 그건 그날 밤 나만 알았다.

다음 날 우리는 데뷔했다. 무대 위에서 그 애는 동선상 내 옆이 아니었다. 그래도 엔딩 때 눈이 마주쳤다. 그 애가 입 모양으로 말했다.

안 떨려요.

나는 그날 처음으로, 리더라는 단어가 가볍다고 느꼈다. 같이 드는 사람이 있으면 무거운 것도 가벼워진다는 걸.

*

작가의 말
그날부터 귀가 빨개지면 추워서라고 했다. 거짓말이 1년 넘게 갔다.`,zh:`2. 出道前一天

2024年1月21日。明天開始，我們就有名字了。

宿舍很安靜。是誰都睡不著的那種安靜。志薰在被窩裡讓手機的光一閃一閃，炅潣第三次出來喝水，和我對上眼，尷尬地笑了笑。

我上了頂樓。一月的夜風冰冷地灌進肺的最深處。我喜歡那樣。腦袋會變得一片空白。

隊長。從明天開始，我就是隊長了。這個詞有多重，練習生時期並不知道。六個人的明天，好像掛在我肩膀的某個地方。

鐵門吱呀一聲打開了。

「我就知道哥會在這裡。」
是道勳。帽T外面套著羽絨外套，手上拿著兩瓶香蕉牛奶。
「你去便利商店了？」
「哥每次都買給我，今天換我。」

他插好吸管遞過來。和我一直以來的方式一模一樣。接過來的時候指尖碰到了。他的手比我還冰。原來是跑去便利商店又跑回來的，我想。

我們靠著欄杆站著，什麼都沒說地喝。首爾的燈火在遠處閃爍。那些燈火裡，明天會有幾盞看著我們吧。

「哥會緊張嗎？」
「嗯。」
「原來哥也會緊張。」
「不是當隊長就不會緊張。」
「我知道。」

他在手裡滾著空掉的牛奶盒，說：
「可是哥，我在哥旁邊就不會緊張。」

風吹過來。他的聲音混在風裡，我以為是自己聽錯了。

「……什麼？」
「在舞台上。在哥旁邊就不會緊張。練習的時候也是。哥在旁邊，拍子就對了。」

他說得很自然。像在講走位一樣。可我沒辦法自然地聽。心臟用奇怪的拍子跳了一下。就像那個總是慢半拍的右肩。

啊，我想。
啊，糟了。

「那明天站我旁邊。」
「走位上不是哥旁邊。」
「那就心站在旁邊。」
他笑了。一邊嘴角先揚起。

「哥，我們要做很久喔。」
「嗯。」
「真的很久。久到哥變成爺爺。」
「那時候你也是爺爺。」
「所以才說一起啊。」

一起。我把這個詞和香蕉牛奶最後一口一起嚥下去。好甜。甜得奇怪。

*

下樓梯的時候，他幫我把羽絨外套的帽子戴上。
「哥耳朵好紅。因為冷。」
「嗯。因為冷。」

不是因為冷。那天晚上只有我知道。

隔天我們出道了。舞台上他在走位上不是我旁邊。但ending的時候我們對上了眼。他用嘴型說：

不緊張。

那天我第一次覺得，隊長這個詞很輕。只要有人一起扛，重的東西也會變輕。

*

作者的話
從那天起，耳朵紅了我都說是因為冷。這個謊撐了一年多。`}},{id:"fic-s3",title:{ko:"3. 말하지 못한 계절",zh:"3. 說不出口的季節"},at:k("2026-01-16 02:20"),body:{ko:`3. 말하지 못한 계절

좋아한다는 걸 알고 나면, 모든 게 증거가 된다.

봄. 도훈이가 무대에서 실수한 날, 대기실 구석에서 혼자 이어폰을 끼고 있었다. 나는 옆에 앉아서 이어폰 한쪽을 뺏었다. 우리 노래가 아니라 비 소리였다. "형, 이거 들으면 마음이 정리돼요." 그날 이후 내 플레이리스트에도 비 소리가 생겼다.

여름. 장마 첫날, 우산은 하나였다. 숙소까지 걷는 동안 우리는 우산을 서로 쪽으로 밀었다. 엘리베이터 거울 앞에서 그 애가 내 앞머리 물방울을 털어 주다가 멈췄다. "형." "응." "...아니에요." 그 '아니에요'를 나는 반년 동안 해석했다. 해석할 때마다 결론이 바뀌었다. 좋아한다는 뜻일까. 아니면 그냥, 아니라는 뜻일까.

가을. 새벽 세 시, 거실 불이 켜져 있었다. 그 애가 소파에서 내 파트 영상을 틀어 놓고 잠들어 있었다. 담요를 덮어 주며 말했다. 아주 작게. 좋아해.

그리고 도망쳤다. 방문을 닫고 등을 기대고 섰다. 심장 소리가 문에 부딪혀서 거실까지 들릴 것 같았다.

다음 날 아침 그 애는 말했다. "형 담요 고마워요. 완전 깊이 잤어요. 아무것도 못 들을 만큼."

못 들었구나. 다행이다, 하고 생각했다. 정말로 다행이라고 생각했을까. 이제 와서 보면 그 말은 너무 길었다. 아무것도 못 들은 사람은 "아무것도 못 들을 만큼"이라고 말하지 않는다.

*

11월 7일, 내 생일.

0시가 되자 휴대폰이 쉬지 않고 울렸다. 멤버들, 회사, 친구들. 나는 하나씩 답장하면서 사실은 한 이름만 기다렸다.

0시 1분. 없다.
0시 2분. 없다. 지훈이가 두 번째로 보냈다.
0시 3분.

"형 생축🎂"

네 글자. 이모지 하나. 그게 다였다. 그런데 나는 그 네 글자를 보고 웃었다. 소리 내서. 혼자 있는 방에서.

나중에 알았다. 그 3분 동안 그 애가 썼다 지운 문장이 몇 개였는지. "태어나줘서 고마워요"를 지우고, "형 좋아해요"를 지우고, 남은 게 네 글자였다는 걸.

우리는 둘 다 같은 3분을 보냈던 거다. 하나는 기다리면서, 하나는 지우면서.

*

12월. 나는 결심했다.

크리스마스이브에 말하자. 말하고, 안 되면 리더로 돌아가자. 아무 일도 없었던 것처럼. 할 수 있을까. 할 수 있어야 했다. 팀이 있으니까.

목도리를 사러 갔다. 남색, 아니 버건디. 그 애 피부에는 버건디가 어울렸다. 가게에서 한참을 고르다가, 손이 떨려서, 계산대에 올려놓은 건 양말이었다. 볼링공 그림이 그려진 양말.

숙소에 돌아와서 양말을 보며 한숨을 쉬었다. 바보. 리더라는 사람이 목도리 하나를 못 산다.

그날 밤 그 애가 선물을 받고 크게 웃었다. "형 이거 저 볼링 못 친다고 놀리는 거죠?" "응." "복수할 거예요."

복수는 12월 24일에 왔다. 버건디 목도리로. 내가 사려다 못 산, 바로 그 색으로.

*

작가의 말
나는 1년 동안 말하지 못했고, 그 애는 1년 동안 기다렸다. 우리가 서로를 좋아한 시간은 똑같았는데, 용기를 낸 건 그 애가 먼저였다.`,zh:`3. 說不出口的季節

一旦知道自己喜歡上了，所有事都會變成證據。

春天。道勳在舞台上失誤的那天，一個人在休息室角落戴著耳機。我坐到他旁邊，搶走一邊耳機。不是我們的歌，是雨聲。「哥，聽這個心情會整理好。」從那天起，我的播放清單裡也有了雨聲。

夏天。梅雨季第一天，傘只有一把。走回宿舍的路上，我們一直把傘往對方那邊推。在電梯鏡子前，他幫我撥瀏海上的水珠，手停住了。「哥。」「嗯。」「……沒事。」那句「沒事」我解讀了半年。每次解讀結論都不一樣。是喜歡的意思嗎。還是，真的只是沒事。

秋天。凌晨三點，客廳的燈亮著。他開著我那段的影片，在沙發上睡著了。我幫他蓋上毯子，說了。非常小聲。我喜歡你。

然後逃走了。關上房門，背靠著門站著。心跳聲撞在門上，好像會傳到客廳去。

隔天早上他說：「哥，謝謝你的毯子。我睡得超熟。熟到什麼都沒聽到。」

他沒聽到。幸好，我想。我真的覺得幸好嗎。現在回頭看，那句話太長了。什麼都沒聽到的人，不會說「熟到什麼都沒聽到」。

*

11月7日，我的生日。

零點一到，手機響個不停。成員們、公司、朋友們。我一則一則回覆，其實只在等一個名字。

零點一分。沒有。
零點二分。沒有。志薰第二個傳來了。
零點三分。

「哥生快🎂」

四個字。一個表情符號。就這樣。可是我看著那四個字笑了。笑出聲來。在只有我一個人的房間裡。

後來才知道。那三分鐘裡他寫了又刪了多少句子。刪掉「謝謝哥出生」，刪掉「我喜歡哥」，剩下的就是那四個字。

我們度過了同樣的三分鐘。一個在等待，一個在刪除。

*

十二月。我下定決心了。

平安夜告訴他。說出來，如果不行，就回到隊長的身分。就像什麼都沒發生過。做得到嗎。必須做得到。因為還有團隊。

我去買圍巾。深藍，不，酒紅色。他的膚色適合酒紅。在店裡挑了好久，手在抖，最後放上收銀台的是襪子。畫著保齡球的襪子。

回到宿舍看著襪子嘆氣。笨蛋。當隊長的人連一條圍巾都買不了。

那天晚上他收到禮物大笑。「哥這是在笑我不會打保齡球吧？」「嗯。」「我要報仇。」

報仇在12月24日到來。用一條酒紅色的圍巾。正是我想買卻沒買成的那個顏色。

*

作者的話
我一整年說不出口，他等了一整年。我們喜歡對方的時間一樣長，先鼓起勇氣的卻是他。`}},{id:"fic-s4",title:{ko:"4. 12월 24일",zh:"4. 12月24日"},at:k("2025-12-25 04:00"),body:{ko:`4. 12월 24일

파티가 끝난 건 자정이 조금 넘어서였다. 거실 바닥에 포장지와 리본이 흩어져 있었다. 지훈이가 케이크 상자를 접으며 하품을 했고, 영재는 소파에서 이미 반쯤 잠들어 있었다.

도훈이는 아까부터 휴대폰만 봤다. 무릎 위 버건디 목도리 상자를 손가락으로 톡톡 두드리면서.

"다들 자자." 내가 말했다. 리더의 목소리로.

방에 들어와 불을 껐다. 침대에 누워서 천장을 봤다. 오늘 말하려고 했는데. 파티 분위기에 휩쓸려서, 멤버들 웃음소리에 묻혀서, 또 못 했다. 내일 말하자. 아니, 내일은 실내 스케줄이고, 그다음은 연말 무대 준비고—

휴대폰이 울렸다. 모르는 계정이었다. 프로필 사진도 없이, 이름 대신 점 하나.

"형"
"이 계정 저예요"

심장이 먼저 알았다. 손가락보다 먼저.

"...도훈이?"
"단톡이랑 원래 계정은 다들 볼 수 있잖아요"
"목도리 준 거 사실 이유 있어요"

나는 침대에서 일어나 앉았다. 이불이 바닥으로 미끄러졌다.

"양말 복수라며"
"그건 핑계고요"

화면 위 점 세 개가 깜빡였다. 사라졌다. 다시 깜빡였다. 그 애도 지금 쓰고 지우고 있구나. 11월 7일 0시의 그 3분처럼.

"형이 맨날 우산 제 쪽으로 기울이는 거"
"소파에서 자면 담요 덮어주는 거"
"다 알고 있었어요"

그리고.

"좋아해요 형"

*

나는 그 메시지를 6분 동안 봤다.

답장을 못 한 게 아니었다. 그 다섯 글자를 오래 보고 싶었다. 1년 동안 내가 하지 못한 말을, 그 애가 먼저 해 줬다는 게 믿기지 않아서. 화면을 끄면 사라질 것 같아서.

손가락이 떨렸다. 자판을 세 번 틀렸다.

"6분 동안 답장 못 한 거 생각하느라 그런 거야"
"나도"
"꽤 오래전부터"

보내고 나서 휴대폰을 가슴에 대고 누웠다. 휴대폰이 바로 다시 울렸다.

"형 지금 방이에요?"
"응"
"베란다로 나와요"
"목도리 하고"

*

베란다 문을 열자 12월 공기가 얼굴을 때렸다. 옆 방 베란다와는 낮은 칸막이 하나로 나뉘어 있었다. 그 애가 거기 서 있었다. 내가 준 볼링공 양말을 신고, 슬리퍼를 신고, 목도리를 목에 감고.

나도 목도리를 하고 있었다. 버건디. 똑같은 색.

"형 진짜 했네요."
"하라며."

우리는 칸막이를 사이에 두고 한참 서 있었다. 할 말은 많았는데 하나도 나오지 않았다. 입김만 하얗게 흩어졌다.

그 애가 먼저 손을 내밀었다. 칸막이 위로.
나는 그 손을 잡았다. 차가웠다. 데뷔 전날 옥상에서처럼.

"형 손 엄청 차가워요."
"네가 더 차가워."
"그럼 잡고 있으면 되겠네요."

그 애가 손에 힘을 줬다. 나도 줬다. 칸막이가 낮아서 다행이라고, 처음 생각했다.

"형."
"응."
"1년 전 엘리베이터에서요. 제가 '아니에요' 했던 거."
"...응."
"그때도 이 말 하려고 했어요."
"알아."
"알았어요?"
"반년 동안 해석했어."

그 애가 웃었다. 한쪽 입꼬리가 먼저. 내가 처음 반한 그 웃음.

"그리고 형, 소파에서요."
"...들었어?"
"숨 참느라 죽는 줄 알았어요."

나는 이마를 그 애 어깨에 묻었다. 칸막이 너머로, 목도리 위로. 부끄러워서. 그리고 너무 좋아서.

그 애가 내 뒷머리를 조심스럽게 쓸었다. 무대 오르기 전 내가 그 애 앞머리를 정리해 주던 손길처럼. 이번엔 반대였다.

"형, 메리 크리스마스."
"메리 크리스마스."

우리는 그렇게 한참 있었다. 손을 잡고, 목도리를 하고, 칸막이 하나를 사이에 두고. 서울 어딘가에서 캐럴이 희미하게 들렸다. 하늘엔 달이 떠 있었다.

"형, 형 폰에서 저 이름 뭘로 저장할 거예요?"
"🌙"
"왜 달이에요?"
"너 맨날 새벽에 거실 불 보러 나오잖아. 달 보러 나오는 늑대처럼."
"...형 그거 알고 있었어요?"
"응. 그래서 켜 둔 거야."

그 애가 잠깐 말이 없더니, 내 손을 한 번 더 꽉 쥐었다.
"그럼 형은 🩵 해요. 우리 팀 색. 형이 제일 아끼는 거."

새벽 세 시마다 거실 불을 켜 둔 이유를, 나는 그날 처음 소리 내서 말했다.

*

작가의 말
캘린더에는 🎄 하나만 표시했다. 비밀번호도 그날로 했다. 1224. 잊을 리 없는 숫자.`,zh:`4. 12月24日

派對結束時已經過了午夜。客廳地板上散落著包裝紙和緞帶。志薰一邊折蛋糕盒一邊打呵欠，英宰已經在沙發上半睡著了。

道勳從剛剛開始就一直看著手機。用手指輕敲著膝上酒紅色圍巾的盒子。

「大家去睡吧。」我說。用隊長的聲音。

我回房關了燈。躺在床上看著天花板。今天本來想說的。被派對的氣氛捲走，被成員們的笑聲淹沒，又沒說成。明天說吧。不，明天是室內行程，接下來還要準備年末舞台——

手機響了。是陌生的帳號。沒有大頭貼，名字只有一個點。

「哥」
「這個帳號是我」

心臟比手指先知道了。

「……道勳？」
「群組和原本的帳號大家都看得到嘛」
「送圍巾其實是有原因的」

我從床上坐起來。被子滑到地上。

「不是說報復襪子嗎」
「那只是藉口」

螢幕上的三個點閃了閃。消失了。又閃了。他現在也在寫了又刪吧。就像11月7日零點的那三分鐘。

「哥每次都把傘往我這邊斜」
「我睡沙發就幫我蓋毯子」
「我都知道」

然後。

「我喜歡你 哥」

*

我盯著那則訊息看了六分鐘。

不是回不出來。是想一直看著那幾個字。我一整年說不出口的話，他先說了，我不敢相信。好像一關掉螢幕就會消失。

手指在抖。打錯了三次字。

「這六分鐘沒回，是因為在想」
「我也是」
「從很久以前開始」

傳出去後，我把手機貼在胸口躺下。手機馬上又響了。

「哥現在在房間？」
「嗯」
「來陽台」
「戴著圍巾」

*

打開陽台的門，十二月的空氣打在臉上。和隔壁房間的陽台只隔著一道矮矮的隔板。他站在那裡。穿著我送的保齡球襪子、拖鞋，脖子上圍著圍巾。

我也圍著圍巾。酒紅色。一模一樣的顏色。

「哥真的戴了。」
「你叫我戴的。」

我們隔著隔板站了好久。想說的話很多，卻一句也說不出來。只有白色的呼氣散開。

他先伸出了手。越過隔板。
我握住那隻手。好冰。就像出道前一天在頂樓那樣。

「哥的手好冰。」
「你的更冰。」
「那牽著就好了。」

他握緊了手。我也握緊了。第一次覺得，幸好隔板很矮。

「哥。」
「嗯。」
「一年前在電梯裡。我說『沒事』的那次。」
「……嗯。」
「那時候也是想說這句話。」
「我知道。」
「你知道？」
「我解讀了半年。」

他笑了。一邊嘴角先揚起。是我第一次心動的那個笑。

「還有哥，沙發那次。」
「……你聽到了？」
「憋氣憋到差點死掉。」

我把額頭埋進他的肩膀。越過隔板，貼在圍巾上。因為太害羞了。也因為太開心了。

他小心翼翼地撫過我的後腦。就像上台前我幫他整理瀏海的手勢。這次反過來了。

「哥，聖誕快樂。」
「聖誕快樂。」

我們就那樣待了好久。牽著手，圍著圍巾，隔著一道隔板。首爾的某處隱約傳來聖誕歌。天上掛著月亮。

「哥，你手機裡要把我存成什麼名字？」
「🌙」
「為什麼是月亮？」
「你每天凌晨都會出來看客廳的燈啊。像出來看月亮的狼一樣。」
「……哥你知道？」
「嗯。所以才開著的。」

他沉默了一下，又用力握了一次我的手。
「那哥就用 🩵。我們團的顏色。哥最珍惜的東西。」

每天凌晨三點把客廳的燈開著的理由，那天我第一次說出口。

*

作者的話
行事曆上只標了一個 🎄。密碼也用那天。1224。不可能會忘的數字。`}},{id:"fic-s5",title:{ko:"5. D+36",zh:"5. D+36"},at:k("2026-01-29 23:30"),body:{ko:`5. D+36

지금은 1월 29일 밤 11시 30분이다.

책상 위에 편지가 있다. 다섯 번 다시 썼다. 처음 쓴 건 너무 길었고, 두 번째는 너무 리더 같았고, 세 번째는 울면서 써서 글씨가 번졌고, 네 번째는 "좋아해"가 일곱 번 나왔다. 다섯 번째에서 겨우 멈췄다.

볼링공은 침대 밑에 있다. 손가락 구멍 옆에 작게 🎄를 새겼다. 그 애는 각인 문구를 이미 맞혔다. "🎄 이거죠." 하고. 들켜서 억울했는데, 맞혀 줘서 좋았다. 그 애는 내 생각을 너무 잘 안다.

김치통 밑에는 케이크가 있다. 영재가 "도훈이형 냄새 잘 맡는데요" 했지만, 김치 냄새가 이길 것이다. 이겨야 한다.

*

36일 동안 많은 일이 있었다.

편의점에서 첫 데이트를 했다. 라면에 계란을 두 개 넣어 줬더니 그 애는 그게 데이트라고 했다. 데이트 맞다. 내 인생에서 제일 좋은 라면이었으니까.

연말 무대에서 신호를 정했다. 귀를 만지면 좋아해. 나는 그날 귀를 세 번 만졌고, 팬들은 움짤을 만들었고, 경민이는 "형 인이어 고장 났어요?" 했다. 고장 난 건 내 심장이었다.

처음 싸웠다. 조심하다가 멀어졌다. 그 애가 말했다. "우리 숨기는 건 사랑이지 거리가 아니에요." 연습실 거울 앞에서 나는 울었고, 그 애는 "네, 안 울었어요" 하고 넘어가 줬다. 그런 애다. 내 체면까지 챙겨 주는.

도쿄에서는 여섯 층이 떨어져 있었다. 같은 타워를 찍어 보냈다. 다음 날 아침 계란말이를 세 개 줬다. 경민이가 서운해했다. 미안, 경민아. 사랑은 원래 공평하지 않다.

새벽 두 시에 그 애가 무섭다고 했다. 들키면 어떡하냐고. 형이 다 떠안을까 봐 무섭다고. 나는 리더가 아니라 신유로 대답했다. 무서운 건 반반 하자. 네 거니까.

*

11시 45분. 휴대폰을 본다.

카톡, 위버스, 인스타. 세 군데 다 메시지를 미리 써 뒀다. 0시 0분 0초에 보낼 것이다. 작년의 그 애가 3분 늦었던 만큼, 올해의 나는 1초도 늦지 않을 것이다.

그리고 숨긴 채팅방에는, 다른 말을 보낼 것이다. 단톡에는 다 같이 축하하는 척하고, 진짜는 여기서.

거실에서 발소리가 난다. 지훈이가 케이크를 확인하러 나온 모양이다. 아니면 그 애가 또 거실 불을 보러 나온 걸까.

나는 일부러 방문을 조금 열어 둔다. 불빛이 새어 나가게.

달처럼.

*

11시 58분.

이 글은 여기서 멈춘다. 나머지는 2분 뒤에 직접 말할 거니까.

도훈아, 생일 축하해.
태어나줘서 고마워. 그리고 나를 좋아해 줘서.
너를 좋아하는 일은, 하나도 무섭지 않아.

*

작가의 말
이 글을 언젠가 네가 본다면, 그날은 아마 우리가 더 이상 숨기지 않아도 되는 날이겠지. 그날도 거실 불은 켜 둘게.`,zh:`5. D+36

現在是1月29日晚上11點30分。

桌上有一封信。重寫了五次。第一封太長，第二封太像隊長，第三封邊哭邊寫，字都暈開了，第四封出現了七次「我喜歡你」。到第五封才終於停下來。

保齡球在床底下。指洞旁邊刻了一個小小的 🎄。他已經猜到刻的字了。「是 🎄 吧。」被猜中很不甘心，但他猜中了我很開心。他太懂我在想什麼了。

泡菜盒底下有蛋糕。英宰說「道勳哥鼻子很靈欸」，但泡菜味會贏。必須贏。

*

三十六天裡發生了很多事。

在便利商店第一次約會。我在泡麵裡加了兩顆蛋，他說那就是約會。是約會沒錯。因為那是我人生中最好吃的泡麵。

年末舞台定了暗號。摸耳朵就是喜歡你。那天我摸了三次耳朵，粉絲做了動圖，炅潣問「哥耳返壞了嗎？」壞掉的是我的心臟。

第一次吵架。太小心反而疏遠了。他說：「我們要藏的是愛，不是距離。」在練習室的鏡子前我哭了，他說「好，沒有哭」就這樣帶過。他就是這樣的孩子。連我的面子都幫我顧著。

在東京差了六層樓。我們拍了同一座鐵塔傳給對方。隔天早上我給了他三個玉子燒。炅潣很難過。對不起，炅潣。愛本來就不公平。

凌晨兩點他說他害怕。怕被發現怎麼辦。怕哥一個人扛下所有。我沒用隊長的身分，而是用申惟的身分回答。害怕的部分我們一人一半。因為我是你的。

*

11點45分。我看著手機。

KakaoTalk、Weverse、Instagram。三個地方的訊息都事先寫好了。零點零分零秒要傳出去。去年的他晚了三分鐘，今年的我一秒都不會遲到。

然後在隱藏聊天室裡，我要傳另一句話。在群組就假裝大家一起祝福，真的那句在這裡說。

客廳傳來腳步聲。大概是志薰出來確認蛋糕。還是他又出來看客廳的燈了呢。

我故意把房門留了一條縫。讓燈光透出去。

像月亮一樣。

*

11點58分。

這篇文章就寫到這裡。剩下的，兩分鐘後我要親口說。

道勳，生日快樂。
謝謝你出生。還有謝謝你喜歡我。
喜歡你這件事，一點也不可怕。

*

作者的話
如果有一天你看到這篇，那天大概是我們不用再隱藏的日子吧。那天我也會把客廳的燈開著。`}}],ge=(e,t)=>({ko:e,zh:t}),ie="yu.42_",fe="hoon.wolf",vn=e=>e.map(([t,s,o,r])=>({at:k(t),from:s,text:ge(o,r)}));function Rh(e){var o,r;const t=e.extra.instagram;t.feed.push({id:"my1",by:ie,pic:{emoji:"🫶",tint:"#f7e3ea"},caption:ge("연습실 거울 🪞 오늘도 열심히","練習室鏡子 🪞 今天也努力了"),likes:880120,at:k("2025-03-14 23:00"),comments:[{by:fe,text:ge("형 손하트 옆에 하나 더 있는데요","哥的手指愛心旁邊還有一個欸")},{by:ie,text:ge("@hoon.wolf 누구 거지","@hoon.wolf 是誰的呢")},{by:fe,text:ge("@yu.42_ 🐺","@yu.42_ 🐺")},{by:"yudoz.archive",text:ge("거울 오른쪽 아래 손 하나 더 있음 ㅠㅠㅠ","鏡子右下角還有一隻手 ㅠㅠㅠ")}]},{id:"my2",by:ie,pic:{emoji:"☔",tint:"#9fb4c7"},caption:ge("장마 시작 ☔ 우산 꼭 챙겨요 42","梅雨季開始 ☔ 42 記得帶傘"),likes:912003,at:k("2025-07-02 22:00"),comments:[{by:fe,text:ge("형은 우산 왜 반만 써요","哥為什麼傘只撐一半")},{by:ie,text:ge("@hoon.wolf 반은 누구 줬지","@hoon.wolf 另一半給誰了呢")},{by:"kyungmin.p",text:ge("둘 다 젖어서 들어왔잖아요","你們兩個明明都濕著回來")}]},{id:"my3",by:ie,pic:{emoji:"🌊",tint:"#a7d3e8"},caption:ge("바다 🌊 촬영 쉬는 시간","海邊 🌊 拍攝休息時間"),likes:1023400,at:k("2025-08-15 19:00"),comments:[{by:fe,text:ge("형 이 사진 누가 찍었어요","哥這張是誰拍的")},{by:ie,text:ge("@hoon.wolf 너","@hoon.wolf 你")},{by:fe,text:ge("@yu.42_ 아 맞다 제가 잘 찍었네요","@yu.42_ 啊對 我拍得真好")},{by:"42.moonlight",text:ge("사진 찍는 사람 시선이 느껴진다...","感受得到拍照的人的視線……")}]},{id:"my4",by:ie,pic:{emoji:"🎂",tint:"#f7e3ea"},caption:ge("생일 축하해줘서 고마워요 42 🩵 0시 3분에 온 축하도 고마워","謝謝 42 祝我生日快樂 🩵 零點三分來的祝福也謝謝"),likes:1452e3,at:k("2025-11-07 12:00"),comments:[{by:fe,text:ge("3분은 반올림하면 0분이에요","三分四捨五入就是零分")},{by:ie,text:ge("@hoon.wolf 그런 반올림은 없어","@hoon.wolf 沒有這種四捨五入")},{by:"jihoon_06",text:ge("저는 2분이었어요 형!!","我是二分喔哥!!")},{by:"yudoz.archive",text:ge("0시 3분 = 도훈 (위버스 기록 있음)","零點三分＝道勳（Weverse有紀錄）")}]},{id:"my5",by:ie,pic:{emoji:"🎄",tint:"#1f3b2c"},caption:ge("메리 크리스마스 🎄 따뜻한 밤 보내요","聖誕快樂 🎄 祝你們有溫暖的夜晚"),likes:1302200,at:k("2025-12-24 21:00"),comments:[{by:fe,text:ge("형 오늘 밤 따뜻할 거예요","哥今晚會很溫暖的")},{by:ie,text:ge("@hoon.wolf 왜","@hoon.wolf 為什麼")},{by:fe,text:ge("@yu.42_ 그냥요 🧣","@yu.42_ 就是覺得 🧣")},{by:"young.jae",text:ge("형들 무슨 얘기해요","哥哥們在說什麼")}]},{id:"my6",by:ie,pic:{emoji:"🩵",tint:"#cfe6f7"},caption:ge("2주년 🩵 42 덕분에 여기까지 왔어요. 그리고 옆에 있는 사람들 덕분에","兩週年 🩵 多虧了 42 才走到這裡。還有身邊的人"),likes:1611e3,at:k("2026-01-22 00:10"),comments:[{by:fe,text:ge("옆에 있는 사람 = 저","身邊的人＝我")},{by:"kyungmin.p",text:ge('@hoon.wolf 사람"들"이야',"@hoon.wolf 是「們」")},{by:fe,text:ge("@kyungmin.p 들 중에 저","@kyungmin.p 們裡面的我")}]});const s=l=>{const i=t.dms.find(a=>a.with===l.with);i?(i.messages=[...i.messages,...l.messages].sort((a,c)=>q(a.at)-q(c.at)),l.unread&&(i.unread=!0)):t.dms.push(l)};s({with:fe,unread:!0,messages:vn([["2025-03-14 23:10",fe,"형 게시물에 제 손 나왔어요","哥的貼文拍到我的手了"],["2025-03-14 23:11",ie,"알아","知道"],["2025-03-14 23:11",fe,"알고 올린 거예요?","你是知道才傳的？"],["2025-03-14 23:13",ie,"응","嗯"],["2025-03-14 23:13",fe,"...왜요","……為什麼"],["2025-03-14 23:15",ie,"그 사진이 제일 잘 나와서","因為那張拍得最好"],["2025-07-02 23:40",fe,"형 감기 걸리면 제 탓이에요","哥感冒的話是我害的"],["2025-07-02 23:41",ie,"왜 네 탓이야","為什麼是你害的"],["2025-07-02 23:41",fe,"우산 제 쪽으로 계속 밀었잖아요","你一直把傘往我這邊推"],["2025-07-02 23:42",ie,"너도 밀었잖아","你也推了啊"],["2025-07-02 23:42",fe,"그럼 반반 탓","那就一人一半的錯"],["2025-07-02 23:43",ie,"반반 좋네","一人一半不錯"],["2025-08-15 23:20",fe,"[사진 12장]","[照片 12 張]"],["2025-08-15 23:20",fe,"형 바다 사진 다 보내요","哥的海邊照片全部傳給你"],["2025-08-15 23:21",ie,"12장이나 찍었어?","你拍了12張？"],["2025-08-15 23:21",fe,"40장 찍었는데 12장만 보내는 거예요","我拍了40張，只傳12張"],["2025-08-15 23:22",ie,"나머지 28장은","剩下的28張呢"],["2025-08-15 23:22",fe,"제 거요 🐺","我的 🐺"],["2025-10-03 10:15",fe,"형 어제 담요 고마워요","哥昨天謝謝你的毯子"],["2025-10-03 10:20",ie,"푹 잤어?","睡得好嗎？"],["2025-10-03 10:22",fe,"...네 완전 깊이 잤어요","……嗯 睡得超熟"],["2025-10-03 10:22",fe,"아무것도 못 들을 만큼","熟到什麼都沒聽到"],["2025-10-03 10:25",ie,"그래 다행이다","那就好"],["2025-11-07 00:04",fe,"형 생축 🎂","哥生快 🎂"],["2025-11-07 00:04",fe,"(3분 늦었음 미안)","（晚了三分鐘 抱歉）"],["2025-11-07 00:05",ie,"안 기다렸어","沒在等"],["2025-11-07 00:05",fe,'형 0시 1분에 "읽음" 떴는데요',"哥零點一分就顯示「已讀」了欸"],["2025-11-07 00:06",ie,"...자라","……去睡"],["2025-12-24 21:05",fe,"형 게시물 댓글 보고 웃었어요?","哥看到我的留言有笑嗎？"],["2025-12-24 21:06",ie,"무슨 뜻이야. 따뜻할 거라는 거","什麼意思。說會很溫暖"],["2025-12-24 21:06",fe,"12시 넘으면 알려줄게요","過了十二點告訴你"],["2025-12-24 21:07",ie,"지금 알려줘","現在告訴我"],["2025-12-24 21:07",fe,"안 돼요. 목도리 포장 아직 안 끝났어요","不行。圍巾還沒包好"],["2025-12-24 21:08",ie,"...목도리?","……圍巾？"],["2025-12-24 21:08",fe,"아 이거 말하면 안 되는 거였는데","啊這個不能說的"],["2026-01-07 03:00",fe,"형 지금 내 머리 사진 왜 찍었어요","哥剛剛為什麼拍我的頭髮"],["2026-01-07 03:01",ie,"오늘 정리 제일 잘 됐어서","今天整理得最好"],["2026-01-07 03:01",fe,"눈은 빨간데","眼睛卻是紅的"],["2026-01-07 03:02",ie,"그것도 기록","那也是紀錄"],["2026-01-29 23:40",fe,"형 아직 안 자요?","哥還沒睡？"],["2026-01-29 23:41",fe,"20분 뒤에 뭐 있는 거 아니죠","二十分鐘後不會有什麼吧"],["2026-01-29 23:41",fe,"아무것도 없는 거죠","什麼都沒有吧"],["2026-01-29 23:42",fe,"형 왜 읽고 답 안 해요 ㅋㅋㅋ","哥為什麼已讀不回 ㅋㅋㅋ"]])}),s({with:"kyungmin.p",messages:vn([["2026-01-02 14:00","kyungmin.p","형 요즘 귀 자주 만지시네요","哥最近很常摸耳朵"],["2026-01-02 14:05",ie,"인이어 때문에","因為耳返"],["2026-01-02 14:05","kyungmin.p","무대 아닐 때도요?","不是在舞台上也是？"],["2026-01-02 14:06",ie,"버릇 됐어","變成習慣了"],["2026-01-02 14:06","kyungmin.p","도훈이형 볼 때만요?","只有看道勳哥的時候？"],["2026-01-02 14:10",ie,"경민아 연습 가자","炅潣 去練習吧"],["2026-01-02 14:10","kyungmin.p","ㅋㅋㅋㅋㅋ 네 형","ㅋㅋㅋㅋㅋ 好的哥"],["2026-01-13 09:00","kyungmin.p","형 계란말이 1:3 사건 팬 계정에 올라왔어요","哥玉子燒1:3事件被粉絲帳號貼出來了"],["2026-01-13 09:01",ie,"도훈이가 배고파 보여서","道勳看起來很餓"],["2026-01-13 09:01","kyungmin.p","저도 배고팠어요","我也很餓"],["2026-01-13 09:02",ie,"내일 네 거 다섯 개","明天給你五個"],["2026-01-13 09:02","kyungmin.p","그럼 도훈이형은 여섯 개 주겠죠","那道勳哥就會拿到六個吧"]])}),s({with:"jihoon_06",unread:!0,messages:vn([["2026-01-03 13:30","jihoon_06","형!! 도훈이형 달 사진 계정 아세요?","哥!! 你知道道勳哥那個存月亮照片的帳號嗎？"],["2026-01-03 13:31","jihoon_06","완전 감성이에요 🌙","超有感覺 🌙"],["2026-01-03 13:35",ie,"...그래?","……是喔？"],["2026-01-03 13:35","jihoon_06","저도 팔로우하고 싶은데 비공개래요","我也想追蹤，但他說是私人的"],["2026-01-03 13:36",ie,"달 사진은 원래 혼자 보는 거야","月亮照片本來就是一個人看的"],["2026-01-03 13:36","jihoon_06","아 그렇구나 역시 형 감성","啊原來如此 果然是哥的感性"],["2026-01-26 20:00","jihoon_06","형 도훈이형 생일 선물 뭐 해요?","哥你送道勳哥什麼生日禮物？"],["2026-01-26 20:01","jihoon_06","저는 양말이요!!","我送襪子!!"],["2026-01-26 20:02",ie,"양말은 내가 작년에 했어","襪子我去年送過了"],["2026-01-26 20:02","jihoon_06","헉 그럼 저는 목도리!!","嚇 那我送圍巾!!"],["2026-01-26 20:03",ie,"목도리도 안 돼","圍巾也不行"],["2026-01-26 20:03","jihoon_06","왜요??","為什麼??"],["2026-01-26 20:05",ie,"이미 있어","他已經有了"],["2026-01-29 23:30","jihoon_06","형 0시에 문 앞에서 만나요!! 케이크 들고!!","哥零點門口見!! 拿著蛋糕!!"],["2026-01-29 23:31","jihoon_06","근데 형이 1등으로 축하하는 거죠? 3년째 국룰 ㅋㅋ","不過哥要第一個祝福吧？連續三年的定律 ㅋㅋ"]])}),s({with:"young.jae",messages:vn([["2026-01-28 16:00","young.jae","형 케이크 김치통 밑에 숨기는 거 진심이에요?","哥你真的要把蛋糕藏在泡菜盒下面？"],["2026-01-28 16:02",ie,"도훈이는 김치통 절대 안 열어","道勳絕對不會打開泡菜盒"],["2026-01-28 16:02","young.jae","도훈이형 냄새 잘 맡는데요","道勳哥鼻子很靈欸"],["2026-01-28 16:03",ie,"김치 냄새가 이긴다","泡菜味會贏"],["2026-01-28 16:03","young.jae","ㅋㅋㅋㅋ 형 이런 거 진짜 진지하네요","ㅋㅋㅋㅋ 哥對這種事真的很認真"],["2026-01-28 16:05","young.jae","근데 형","不過哥"],["2026-01-28 16:05","young.jae","도훈이형 생일 준비할 때 형 표정이 제일 좋아 보여요","準備道勳哥生日的時候，哥的表情看起來最好"],["2026-01-28 16:08",ie,"...그래?","……是嗎？"],["2026-01-28 16:08","young.jae","네. 그냥 그렇다구요 🙂","嗯。只是這樣覺得 🙂"]])}),s({with:"hanjin.zz",messages:vn([["2026-01-15 22:00","hanjin.zz","형 저 그림 그렸어요","哥我畫了圖"],["2026-01-15 22:00","hanjin.zz","[사진] 늑대랑 달","[照片] 狼和月亮"],["2026-01-15 22:01",ie,"귀엽다. 왜 늑대랑 달이야?","好可愛。為什麼是狼和月亮？"],["2026-01-15 22:01","hanjin.zz","도훈이형은 늑대고 형은... 그냥 달 같아서요","道勳哥是狼，哥……就是覺得像月亮"],["2026-01-15 22:02","hanjin.zz","늑대는 달 보고 우니까요","因為狼會對著月亮嚎叫"],["2026-01-15 22:05",ie,"한진아 이거 나 가져도 돼?","韓振 這個可以給我嗎？"],["2026-01-15 22:05","hanjin.zz","네!! 도훈이형한테도 보내줄까요?","可以!! 也要傳給道勳哥嗎？"],["2026-01-15 22:06",ie,"응. 꼭","嗯。一定要"]])}),(o=t.users)["yudoz.archive"]??(o["yudoz.archive"]={name:ge("유도즈 아카이브","惟勳存檔"),posts:412,followers:"88K",following:"7"}),(r=t.users)["42.moonlight"]??(r["42.moonlight"]={name:"42 🌙",posts:51,followers:"3.2K",following:"120"}),t.users["bowling.kr"]={name:ge("스트라이크 볼링","Strike 保齡球"),posts:220,followers:"12K",following:"30",verified:!0},s({with:"42.moonlight",request:!0,unread:!0,messages:vn([["2026-01-20 01:00","42.moonlight","신유님 안녕하세요 🩵 혹시 보실까 봐 남겨요","申惟你好 🩵 想說你可能會看到所以留言"],["2026-01-20 01:00","42.moonlight","요즘 무대에서 웃는 얼굴이 정말 행복해 보여서 저도 행복해요","最近你在舞台上的笑容看起來真的好幸福，我也跟著幸福"],["2026-01-20 01:01","42.moonlight","무슨 일이 있는지는 몰라도 계속 그렇게 웃어주세요","雖然不知道發生了什麼，但請一直這樣笑下去"]])}),s({with:"yudoz.archive",request:!0,messages:vn([["2026-01-01 00:40","yudoz.archive","안녕하세요 팬 계정입니다 ㅠㅠ 귀 만지시는 거 혹시 의미 있나요...","你好我是粉絲帳號 ㅠㅠ 請問摸耳朵是有什麼意義嗎……"],["2026-01-01 00:41","yudoz.archive","답 안 해주셔도 괜찮아요 그냥 너무 궁금해서","不回也沒關係，只是太好奇了"]])}),s({with:"bowling.kr",request:!0,messages:vn([["2026-01-25 13:10","bowling.kr","안녕하세요 신유님! 각인 이모지 🎄 확인차 연락드렸어요. 위치는 손가락 구멍 옆 맞으실까요?","申惟您好！來確認刻字表情 🎄。位置是在指洞旁邊對嗎？"]])})}const F=(e,t)=>({ko:e,zh:t});function Ih(e){const t=e.extra.instagram;t.users["yudoz.archive"]={name:F("유도즈 아카이브","惟勳存檔"),bio:F("fan account · 사진 출처 표기","fan account · 照片標註出處"),posts:412,followers:"88K",following:"7"},t.users["42.moonlight"]={name:"42 🌙",posts:51,followers:"3.2K",following:"120"},t.feed.push({id:"sw1",by:"hoon.wolf",pic:{emoji:"🧣",tint:"#7a2e3b"},caption:F("메리 크리스마스 🎄 (목도리 선물 아님. 그냥 산 거임)","聖誕快樂 🎄（圍巾不是禮物。只是自己買的）"),likes:934210,at:k("2025-12-25 12:00"),comments:[{by:"yu.42_",text:F("잘 어울린다","很適合你")},{by:"kyungmin.p",text:F("형 어제 이거 두 개 샀던데","哥昨天明明買了兩條")},{by:"hoon.wolf",text:F("@kyungmin.p 하나는 예비용","@kyungmin.p 一條是備用的")},{by:"yudoz.archive",text:F("신유 오늘 출근길 목도리 색이랑 똑같은데요...?","跟申惟今天上班路的圍巾顏色一模一樣……？")}]},{id:"sw2",by:"yu.42_",pic:{emoji:"🎆",tint:"#20264a"},caption:F("올해도 잘 부탁해 🩵","今年也請多指教 🩵"),likes:1102003,at:k("2026-01-01 00:05"),comments:[{by:"hoon.wolf",text:F("올해만요?","只有今年？")},{by:"yu.42_",text:F("@hoon.wolf 계속","@hoon.wolf 一直")},{by:"jihoon_06",text:F("형들 둘이 뭐해요","哥哥們你們兩個在幹嘛")},{by:"42.moonlight",text:F("계속.......? 계속이요......?","一直……？一直嗎……？")}]},{id:"sw3",by:"hoon.wolf",pic:{emoji:"🌙",tint:"#1c1f33"},caption:F("달 사진 저장용 🌙","存月亮照片用 🌙"),likes:721004,at:k("2026-01-03 22:20"),comments:[{by:"jihoon_06",text:F("아 감성~","喔～好有感覺")},{by:"yu.42_",text:F("예쁘다","好漂亮")},{by:"hoon.wolf",text:F("@yu.42_ 달이요?","@yu.42_ 月亮嗎？")},{by:"yu.42_",text:F("@hoon.wolf 응 달","@hoon.wolf 嗯 月亮")}]},{id:"sw4",by:"yu.42_",pic:{emoji:"🗼",tint:"#2a2140"},caption:F("도쿄 🗼 18층","東京 🗼 18樓"),likes:988120,at:k("2026-01-13 00:10"),comments:[{by:"hoon.wolf",text:F("12층에서도 보여요","12樓也看得到")},{by:"hanjin.zz",text:F("저는 3층이라 안 보여요 형들","我在3樓看不到 哥哥們")},{by:"yudoz.archive",text:F("층수 공개하는 아이돌 처음 봄","第一次看到公開樓層的偶像")}]},{id:"sw5",by:"yudoz.archive",pic:{emoji:"🍳",tint:"#f6e7a8"},caption:F("[직캠 캡처] 도쿄 조식 비하인드: 계란말이 경민 1개 도훈 3개. 리더의 공평함 어디 감","[直拍截圖] 東京早餐幕後：玉子燒 炅潣1個 道勳3個。隊長的公平去哪了"),likes:41200,at:k("2026-01-14 19:00"),comments:[{by:"kyungmin.p",text:F("이거 저도 봤어요 서운합니다","這個我也看到了 很難過")}]});const s={by:"hoon.wolf",frames:[{emoji:"🍋",tint:"#f6e7a8",text:F("목 아픈 사람 보세요","給喉嚨痛的人")},{emoji:"🌙",tint:"#1c1f33",text:F("내일 생일인 사람이 아니라 내일 생일인 사람 챙기는 사람 챙기는 중","不是在照顧明天生日的人，是在照顧那個照顧明天生日的人的人")}]},o=t.stories.find(i=>i.by===s.by);o?o.frames=[...s.frames,...o.frames]:t.stories.unshift(s),t.highlights.unshift({title:"🧣",frames:[{emoji:"🧣",tint:"#7a2e3b",text:F("따뜻함","很暖")},{emoji:"🎄",tint:"#1f3b2c",text:F("12.24","12.24")}]});const r=t.dms.find(i=>i.with==="hoon.wolf");r&&(r.messages.push({from:"hoon.wolf",text:F('형 게시물 댓글 "계속" 이거 뭐예요',"哥貼文留言的「一直」是什麼"),at:k("2026-01-01 00:20")},{from:"hoon.wolf",text:F("팬분들 지금 난리났어요","粉絲現在炸鍋了"),at:k("2026-01-01 00:20")},{from:"yu.42_",text:F("올해만이냐길래","因為有人問只有今年嗎"),at:k("2026-01-01 00:22")},{from:"hoon.wolf",text:F("...그건 🌙 에서 대답해야죠","……那應該在 🌙 回答吧"),at:k("2026-01-01 00:22")},{from:"yu.42_",text:F("거기서도 했어","那邊也回了"),at:k("2026-01-01 00:23")},{from:"hoon.wolf",text:F("[게시물 공유] 귀 만지는 신유 모음.zip","[分享貼文] 摸耳朵的申惟合集.zip"),at:k("2026-01-02 02:10")},{from:"hoon.wolf",text:F("형 이거 12개예요","哥這有12個"),at:k("2026-01-02 02:10")},{from:"yu.42_",text:F("12번 좋아한 거네","那就是喜歡了12次"),at:k("2026-01-02 02:12")},{from:"hoon.wolf",text:F("형 DM에서 그런 말 하면 안 돼요 🐺","哥不能在DM說這種話 🐺"),at:k("2026-01-02 02:12")}),r.messages.sort((i,a)=>q(i.at)-q(a.at)));const l=e.extra.x;l.accounts.ear_touch_42={name:F("신유 귀 만지기 카운터","申惟摸耳朵計數器"),bio:F("세는 중","計數中"),followers:"11K",following:"2"},l.timeline.push({id:"sw-t1",by:"yudoz_moment",text:F("연말무대 엔딩 신유 귀 3번 만짐 + 도훈 대각선에서 인이어 고치는 척 귀 1번... 이거 우연 아니지","年末舞台ending申惟摸了3次耳朵 + 道勳在斜對角假裝調耳返摸了1次……這不是巧合吧"),at:k("2025-12-31 23:10"),likes:52100,rts:21e3,replies:1400,pic:{emoji:"👂",tint:"#f6d4d9"}},{id:"sw-t2",by:"ear_touch_42",text:F("1월 누적: 신유 귀 만지기 47회. 그중 41회 도훈 시야 안","一月累計：申惟摸耳朵47次。其中41次在道勳視線範圍內"),at:k("2026-01-28 23:00"),likes:30100,rts:12e3,replies:900},{id:"sw-t3",by:"42_daily",text:F('도훈 목도리랑 신유 목도리 같은 브랜드 같은 색임. 근데 둘 다 "그냥 샀다"고 함',"道勳和申惟的圍巾是同品牌同顏色。但兩人都說「只是自己買的」"),at:k("2025-12-26 11:20"),likes:22300,rts:8100,replies:610,pic:{emoji:"🧣",tint:"#7a2e3b"}},{id:"sw-t4",by:"yudoz_moment",text:F('팬미팅 "제일 편한 멤버" 질문에 서로 이름 말하고 신유 대답 직후 귀 만짐. 저는 이제 귀만 봅니다',"粉絲見面會「最自在的成員」問題，兩人互說對方名字，申惟回答完馬上摸耳朵。我現在只看耳朵了"),at:k("2026-01-19 22:40"),likes:47800,rts:19e3,replies:1200},{id:"sw-t5",by:"tws_sparkle",text:F("대기실 브이로그에서 신유가 무대 전에 도훈 앞머리 정리해주는 거 또 나옴 🥹 이거 데뷔 때부터 하던 거잖아 아직도 해","休息室vlog又出現申惟上台前幫道勳整理瀏海 🥹 這是從出道就在做的事，到現在還在做"),at:k("2026-01-08 18:00"),likes:18800,rts:5200,replies:330,pic:{emoji:"🪞",tint:"#e2e8f0"}}),l.trends.push({tag:F("#귀만지는_신유","#摸耳朵的申惟"),count:F("게시물 2.2만","2.2 萬則貼文")}),e.extra.music.push({id:"pl-sw1",title:F("🌙 듣는 중","🌙 正在聽"),by:F("신유","申惟"),pic:{emoji:"🌙",tint:"#1c1f33"},songs:[{title:"내가 S면 넌 나의 N이 되어줘",artist:"TWS",dur:182},{title:"Moonlight Hallway",artist:"Lullaby Room",dur:214},{title:"첫 만남은 계획대로 되지 않아",artist:"TWS",dur:176},{title:"Two Umbrellas",artist:"Rainy Notes",dur:198},{title:"Scarf Weather",artist:"Lullaby Room",dur:201}]},{id:"pl-sw2",title:F("편의점 가는 길","去便利商店的路上"),by:F("도훈 → 신유","道勳 → 申惟"),pic:{emoji:"🍜",tint:"#2b2f45"},songs:[{title:"Hey! Hey!",artist:"TWS",dur:170},{title:"2AM Ramen",artist:"Midnight Store",dur:188},{title:"BFF",artist:"TWS",dur:192}]}),e.extra.places.push({id:"cvs",name:F("숙소 앞 편의점","宿舍前的便利商店"),x:54,y:56,emoji:"🍜",kind:F("즐겨찾기","收藏"),note:F("12/28 첫 데이트. 계란 두 개","12/28 第一次約會。兩顆蛋")},{id:"roof",name:F("숙소 옥상","宿舍頂樓"),x:46,y:40,emoji:"🌙",kind:F("저장됨","已儲存"),note:F("달 잘 보이는 곳 (도훈이 발견)","看月亮最清楚的地方（道勳發現的）")},{id:"walk",name:F("새벽 산책길","凌晨散步路線"),x:38,y:58,emoji:"🌌",kind:F("저장됨","已儲存"),note:F("가로등 3개째에서 손 잡기 (규칙)","走到第3盞路燈牽手（規則）")},{id:"shop",name:F("목도리 산 가게","買圍巾的店"),x:66,y:50,emoji:"🧣",kind:F("최근","最近"),note:F("같은 색 하나 더 남아 있었음. 다행","同色還剩一條。幸好")}),e.extra.mails.push({id:"sw-m1",from:"Strike Pro Shop",subject:F("각인 주문이 접수되었습니다","刻字訂單已受理"),body:F(`각인 문구: 🎄
※ 이모지 각인은 레이저로 진행되며 3일 소요됩니다.
요청 사항: "공 안쪽 손가락 구멍 옆에 작게"`,`刻字內容：🎄
※ 表情符號以雷射刻製，需 3 天。
備註：「刻在球內側指洞旁邊，小小的」`),at:k("2026-01-25 13:02")},{id:"sw-m2",from:"실버 공방",subject:F("[배송 완료] 체인 목걸이 2개","[已送達] 項鍊鍊子 2 條"),body:F(`반지 걸이용 체인 (45cm) × 2
선물 포장: 1개만`,`掛戒指用的鍊子（45cm）× 2
禮物包裝：只包 1 條`),at:k("2025-12-30 16:40")},{id:"sw-m3",from:"포토 인화",subject:F("인화 주문 완료 (1장)","沖印訂單完成（1 張）"),body:F(`사이즈: 지갑 사진
파일명: 12_25_balcony.jpg`,`尺寸：錢包照
檔名：12_25_balcony.jpg`),at:k("2026-01-10 11:00")}),e.voice.push({id:"sw-v4",title:F("연습실 새벽 (도훈 카운트)","練習室凌晨（道勳數拍子）"),at:k("2025-03-20 02:40"),seconds:26,transcript:F("파이브 식스 세븐 에잇... 형 숨 여기서 쉬어요. 여기. ...맞았다! 형 맞았어요! (웃음) 형 박수 쳐 줘요.","five six seven eight……哥在這裡換氣。這裡。……對了！哥對了！（笑）哥給我拍手。")},{id:"sw-v5",title:F("빗소리 (도훈이가 추천)","雨聲（道勳推薦的）"),at:k("2025-04-18 23:10"),seconds:60,transcript:F("(빗소리) ...(작게) 이거 들으면 마음이 정리된대. 정리 안 된다. 네 생각만 더 난다.","（雨聲）……（小聲）聽說聽這個心情會整理好。整理不好。只會更想你。")},{id:"sw-v6",title:F("12월 25일 새벽","12月25日凌晨"),at:k("2025-12-25 01:40"),seconds:33,transcript:F("(숨 고르는 소리) ...방금 있었던 일 잊어버릴까 봐 녹음해 둠. 도훈이가 좋아한대. 나를. (웃음) 칸막이가 낮아서 다행이다. 진짜 다행이다.","（調整呼吸的聲音）……怕忘記剛剛發生的事所以錄下來。道勳說他喜歡。我。（笑）幸好隔板很矮。真的太好了。")},{id:"sw-v7",title:F("콧노래 (생일 노래 편곡)","哼歌（生日歌改編）"),at:k("2026-01-22 03:00"),seconds:52,transcript:F("흠~ 흠흠~ 생일 축하합니다~ 여기서 화음 올리고... 도훈이 파트는 내가 낮게... 아 이거 들키면 안 되는데.","哼～哼哼～祝你生日快樂～這裡和聲往上……道勳的部分我唱低一點……啊，這個不能被發現。")},{id:"sw-v1",title:F("잠꼬대 (도훈)","夢話（道勳）"),at:k("2026-01-13 07:05"),seconds:14,transcript:F("(작게) 형... 계란 두 개... 아니 세 개... (웃음 참는 소리) ...형 거.","（小聲）哥……兩顆蛋……不對三顆……（憋笑的聲音）……哥的。")},{id:"sw-v2",title:F("베란다","陽台"),at:k("2026-01-27 02:35"),seconds:22,transcript:F("(바람 소리) ...춥다. (옆 창문 열리는 소리) 왔네. ...아무 말 안 해도 되는 거 좋다.","（風聲）……好冷。（旁邊窗戶打開的聲音）來了。……不說話也可以的感覺，真好。")},{id:"sw-v3",title:F("편지 소리 내서 읽기 (7번째)","把信唸出來（第 7 次）"),at:k("2026-01-29 22:50"),seconds:41,transcript:F("도훈아 생일 축하해. 처음 연습실에서 거울 보고 손하트 했던 날 기억나? ...아 여기서 목소리 떨린다. 다시.","道勳，生日快樂。還記得第一次在練習室對著鏡子比手指愛心的那天嗎？……啊，這裡聲音在抖。重來。")}),e.voice.sort((i,a)=>q(a.at)-q(i.at)),e.searches.unshift({q:F("같은 색 목도리 티 나나","同色圍巾會不會很明顯"),result:[{title:F("커플템 들키지 않는 법","情侶單品不被發現的方法"),body:F("브랜드는 같게, 매는 방법은 다르게…","品牌一樣，圍法不一樣…")}]},{q:F("귀 만지는 버릇 의미","摸耳朵習慣的意義"),result:[{title:F("귀를 자주 만지는 사람의 심리","常摸耳朵的人的心理"),body:F("긴장하거나, 좋아하는 사람 앞에서…","緊張的時候，或是在喜歡的人面前…")}]},{q:F("유자차 꿀 몇 스푼","柚子茶加幾匙蜂蜜"),result:[{title:F("목에 좋은 유자차 황금 비율","對喉嚨好的柚子茶黃金比例"),body:F("꿀 두 스푼이면 충분해요","兩匙蜂蜜就夠了")}]}),e.calls.push({at:k("2026-01-13 00:30"),contactId:"moon",type:"incoming",seconds:4820},{at:k("2026-01-27 02:22"),contactId:"moon",type:"outgoing",seconds:1210}),e.calls.sort((i,a)=>q(a.at)-q(i.at)),e.alarms.push({time:"07:50",label:F("🌙 깨우기 (문 두 번 노크)","叫 🌙 起床（敲門兩下）"),on:!0}),e.notes.push({id:"sw-n1",title:F("도훈이가 좋아하는 것","道勳喜歡的東西"),at:k("2026-01-20 01:30"),body:F(`도훈이가 좋아하는 것

- 바나나우유 (빨대 꽂아서 주면 더 좋아함)
- 라면에 계란 두 개
- 소파 왼쪽 자리
- 내가 앞머리 넘겨주는 거 (말은 안 함)
- 달 사진
- 볼링에서 나 이기는 거
- 내가 귀 만지는 거 ← 최근 추가
- 새벽 산책 가로등 세 번째

싫어하는 것
- 내가 멀어지는 거 (1/6에 배움)`,`道勳喜歡的東西

- 香蕉牛奶（插好吸管給他會更開心）
- 泡麵加兩顆蛋
- 沙發左邊的位子
- 我幫他撥瀏海（雖然他不說）
- 月亮照片
- 打保齡球贏我
- 我摸耳朵 ← 最近新增
- 凌晨散步的第三盞路燈

討厭的東西
- 我變得疏遠（1/6 學到的）`)},{id:"sw-n2",title:F("같이 하고 싶은 것","想一起做的事"),at:k("2026-01-02 02:00"),body:F(`같이 하고 싶은 것

☑ 베란다에서 같이 하늘 보기
☑ 편의점 데이트
☑ 무대에서 몰래 신호 보내기
☑ 같은 거 보면서 통화하기 (도쿄)
☐ 벚꽃 보러 가기 (새벽에, 마스크 쓰고)
☐ 바다 (촬영 말고)
☐ 도훈이 생일 0시에 1등 하기
☐ 언젠가 볼링 이기기
☐ 1년 뒤에도 이 리스트 보면서 웃기`,`想一起做的事

☑ 在陽台一起看天空
☑ 便利商店約會
☑ 在舞台上偷偷傳暗號
☑ 看著同樣的東西講電話（東京）
☐ 去看櫻花（凌晨，戴口罩）
☐ 海邊（不是拍攝）
☐ 道勳生日零點拿第一
☐ 總有一天打保齡球贏他
☐ 一年後看著這份清單也能笑`)}),e.photos.push({id:"sw-p1",at:k("2025-12-25 08:30"),emoji:"🧣",tint:"#7a2e3b",caption:F("출근길 거울 셀카 (목도리)","上班路上的鏡子自拍（圍巾）")},{id:"sw-p2",at:k("2026-01-13 08:15"),emoji:"🍳",tint:"#f6e7a8",caption:F("조식. 계란말이 세 개 담긴 접시 (내 거 아님)","早餐。裝了三個玉子燒的盤子（不是我的）")},{id:"sw-p3",at:k("2026-01-19 21:00"),emoji:"🎤",tint:"#f6d4d9",caption:F("팬미팅 대기실, 도훈이 뒷모습","粉絲見面會休息室，道勳的背影")}),e.calendar.push({date:"2026-01-12",title:F("도쿄 (6층 차이)","東京（差 6 層樓）"),color:"#ff375f"},{date:"2026-03-14",title:F("🫶 3주년","🫶 三週年"),color:"#ff375f"},{date:"2026-04-05",title:F("벚꽃? (새벽)","櫻花？（凌晨）"),color:"#ff375f"}),e.ai.push({id:"g-sweet",when:"week",title:F("생일 0시에 보낼 한 문장","生日零點要傳的一句話"),turns:[{q:F("제일 소중한 사람 생일 0시에 보낼 한 문장 추천해줘. 길면 안 돼","推薦一句要在最重要的人生日零點傳的話。不能太長"),a:F(`짧고 오래 남는 문장 몇 가지예요.

1. **"올해 첫 번째로 축하하고 싶었어."**
2. **"태어나줘서 고마워. 그리고 내 옆에 있어줘서."**
3. **"오늘은 네가 주인공이야. 나는 1등 관객."**

둘만 아는 기호(이모지 하나)를 끝에 붙이면 더 특별해져요.`,`幾句簡短又能留很久的話：

1. **「想當今年第一個祝福你的人。」**
2. **「謝謝你出生。還有謝謝你在我身邊。」**
3. **「今天你是主角，我是第一排的觀眾。」**

最後加上只有你們懂的符號（一個表情符號），會更特別。`)},{q:F("2번에 🌙 붙이면 이상해?","第2句加上 🌙 會很奇怪嗎？"),a:F("전혀요. 두 분에게 의미가 있는 기호라면 **그 하나가 문장 전체보다 많은 말을 해요.** 🌙","完全不會。如果那是對兩位有意義的符號，**那一個符號會比整句話說得更多。** 🌙")}]})}const ht=e=>e.map(([t,s,o,r])=>({at:k(t),from:s,text:{ko:o,zh:r}})),Pi=(e,t,s,o)=>({at:k(e),from:t,photo:{ko:s,zh:o}}),Dh=(e,t,s)=>({at:k(e),from:t,sticker:s}),J="me",G="dohoon",Oh=[...ht([["2025-09-03 01:12",G,"형 자요?","哥睡了嗎？"],["2025-09-03 01:12",G,"옆방 코 고는 소리 벽 뚫고 들려요","隔壁的打呼聲穿牆過來了"],["2025-09-03 01:13",J,"지훈이야?","是志薰嗎？"],["2025-09-03 01:13",G,"아마도요… 영재형일 수도","大概吧……也可能是英宰哥"],["2025-09-03 01:14",J,"베개 들고 와","帶枕頭過來"],["2025-09-03 01:14",G,"진짜요?","真的嗎？"],["2025-09-03 01:15",J,"문 열어놨다","門開著了"],["2025-09-03 08:30",G,"형 코는 안 골던데 잠꼬대 함","哥不打呼，但會說夢話"],["2025-09-03 08:31",J,"뭐라고 했는데","我說了什麼"],["2025-09-03 08:31",G,'"레인 탓 아니야"',"「不是球道的問題」"],["2025-09-03 08:32",J,"거짓말","騙人"],["2025-09-03 08:32",G,"ㅋㅋㅋㅋㅋㅋㅋ","ㅋㅋㅋㅋㅋㅋㅋ"]]),...ht([["2025-09-21 18:02",G,"형 우산 있어요?","哥有傘嗎？"],["2025-09-21 18:03",J,"하나 있어","有一把"],["2025-09-21 18:03",G,"같이 써요 저 회사 앞이에요","一起撐吧 我在公司門口"],["2025-09-21 18:04",J,"나와 있어","出來等我"],["2025-09-21 19:20",G,"형 어깨 다 젖었잖아요","哥你肩膀都濕了"],["2025-09-21 19:21",J,"괜찮아","沒事"],["2025-09-21 19:21",G,"우산 제 쪽으로 다 기울여놓고","傘都往我這邊斜"],["2025-09-21 19:22",J,"너 감기 걸리면 스케줄 꼬여","你感冒的話行程會亂掉"],["2025-09-21 19:22",G,"형이 걸리면요","那哥感冒呢"],["2025-09-21 19:23",J,"난 안 걸려","我不會感冒"]]),Pi("2025-10-05 15:40",J,"핑크 염색 직후 셀카","剛染完粉紅色的自拍"),...ht([["2025-10-05 15:40",J,"어때","怎麼樣"],["2025-10-05 15:42",G,"...형 딸기우유 같아요","……哥像草莓牛奶"],["2025-10-05 15:42",G,"근데 잘 어울려요 진짜로","不過真的很適合"],["2025-10-05 15:43",J,"너는 검정 그대로?","你維持黑色？"],["2025-10-05 15:43",G,"네","對"],["2025-10-05 15:44",G,"팬분들이 우리 블랙핑크래요 ㅋㅋㅋ","粉絲說我們是 BLACKPINK ㅋㅋㅋ"],["2025-10-05 15:45",J,"그럼 너가 블랙이네","那你是 BLACK"],["2025-10-05 15:45",G,"형이 핑크 🩷","哥是 PINK 🩷"]]),...ht([["2025-10-19 23:10",G,"형","哥"],["2025-10-19 23:10",G,"저 열나요","我發燒了"]]),Pi("2025-10-19 23:11",G,"체온계 38.2","體溫計 38.2"),...ht([["2025-10-19 23:11",J,"약 먹었어?","吃藥了嗎？"],["2025-10-19 23:12",G,"아직요","還沒"],["2025-10-19 23:12",J,"내가 갖다줄게. 뭐 먹고 싶어","我拿給你。想吃什麼"],["2025-10-19 23:13",G,"...전복죽","……鮑魚粥"],["2025-10-19 23:13",J,"이 시간에?","這個時間？"],["2025-10-19 23:14",G,"농담이에요 그냥 약만요","開玩笑的 藥就好"],["2025-10-20 00:02",J,"문 앞에 둠","放門口了"],["2025-10-20 00:03",G,"...진짜 전복죽 사왔어요?","……你真的買了鮑魚粥？"],["2025-10-20 00:03",J,"24시간 하는 데 있더라","有家 24 小時營業的"],["2025-10-20 00:05",G,"형 최고 🥹","哥最棒 🥹"],["2025-10-20 13:30",G,"형 덕분에 다 나았어요","託哥的福全好了"],["2025-10-20 13:31",G,"형 감기 옮으면 이번엔 제가 죽 사줄게요","如果傳染給哥，這次換我買粥"],["2025-10-20 13:32",J,"안 옮아","不會傳染"]]),...ht([["2025-11-02 01:40",G,"형 안 떨려요?","哥不緊張嗎？"],["2025-11-02 01:41",J,"떨려","緊張啊"],["2025-11-02 01:41",G,"형도 떨리는구나","原來哥也會緊張"],["2025-11-02 01:43",J,"근데 너 옆에 있으니까 괜찮아","不過你在旁邊就沒事"],["2025-11-02 01:44",G,"형 그런 말 하면 더 떨려요","哥說這種話我更緊張了"],["2025-11-02 01:44",J,"ㅋㅋ 자라","ㅋㅋ 睡吧"],["2025-11-13 19:05",G,"형 우리 1위 했어요","哥我們拿一位了"],["2025-11-13 19:05",G,"진짜로","真的"],["2025-11-13 19:06",J,"알아 옆에 있었잖아","我知道啊我就在旁邊"],["2025-11-13 19:06",G,"형이 먼저 울었어요","是哥先哭的"],["2025-11-13 19:07",J,"너도 울었잖아","你也哭了啊"],["2025-11-13 19:07",G,"전 땀이에요","我那是汗"]]),...ht([["2025-11-28 22:31",G,"형 숙소 정전됐어요","哥宿舍停電了"],["2025-11-28 22:31",G,"무서운 거 아니고요","我不是在怕喔"],["2025-11-28 22:32",J,"플래시 켜고 거실로 와","開手電筒來客廳"],["2025-11-28 22:35",G,"다들 거실 모였네요 ㅋㅋ","大家都在客廳集合了ㅋㅋ"],["2025-11-28 22:36",J,"귀신 얘기 하지 마라 한진이 운다","不准講鬼故事 韓振會哭"],["2025-11-28 22:36",G,"형이 제일 무서워하면서","明明哥最怕"]]),...ht([["2025-12-05 09:12",G,"형 제 이어폰 한쪽 형 가방에 있어요","哥我一邊耳機在你包包裡"],["2025-12-05 09:12",G,"어제 차에서 같이 들었잖아요","昨天在車上一起聽的"],["2025-12-05 09:20",J,"찾았다","找到了"],["2025-12-05 09:20",J,"근데 무슨 노래였지","不過那是什麼歌來著"],["2025-12-05 09:21",G,"제가 플레이리스트에 넣어놨어요","我放進歌單了"],["2025-12-05 09:21",G,'"도훈이가 추천한 노래"',"「道勳推薦的歌」"],["2025-12-05 09:22",J,"그거 니가 이름 지은 거였어?","那名字是你取的？"],["2025-12-05 09:22",G,"네 🐺","對 🐺"]]),...ht([["2025-12-24 23:58",G,"형 메리크리스마스 🎄","哥聖誕快樂 🎄"],["2025-12-24 23:58",G,"문 앞에 선물 뒀어요","禮物放在門口了"],["2025-12-25 00:04",J,"목도리네","是圍巾欸"],["2025-12-25 00:04",J,"작년 양말 복수냐","這是報復去年的襪子嗎"],["2025-12-25 00:05",G,"ㅋㅋㅋㅋ 형이 우산 맨날 제 쪽으로 기울이잖아요","ㅋㅋㅋㅋ 哥每次都把傘往我這邊斜"],["2025-12-25 00:05",G,"목 따뜻하게 하고 다녀요","脖子要保暖"],["2025-12-25 00:06",J,"...고맙다","……謝了"]]),...ht([["2025-12-31 23:57",G,"형 3분 남았어요","哥剩三分鐘"],["2025-12-31 23:57",J,"알아","知道"],["2025-12-31 23:58",G,"올해 고마웠어요","今年謝謝你"],["2025-12-31 23:59",J,"나도","我也是"],["2026-01-01 00:00",J,"새해 복 많이 받아 도훈아","新年快樂 道勳"],["2026-01-01 00:00",G,"형 1초 컷 ㅋㅋㅋ","哥一秒就傳ㅋㅋㅋ"],["2026-01-01 00:01",G,"새해엔 볼링 이겨요","新的一年要贏保齡球喔"]]),...ht([["2026-01-15 03:12",G,"형 자요?","哥睡了嗎？"],["2026-01-15 03:12",G,"꿈 꿨어요","做夢了"],["2026-01-15 03:13",G,"무대에서 가사 다 까먹는 꿈","夢到在舞台上歌詞全忘了"],["2026-01-15 03:14",J,"그거 다들 꿔","那個大家都會夢到"],["2026-01-15 03:14",J,"거실 나와 핫초코 타줄게","來客廳 我泡熱可可給你"],["2026-01-15 03:15",G,"형도 깨 있었어요?","哥也醒著？"],["2026-01-15 03:15",J,"편지 쓰고 있었…","在寫信……"],["2026-01-15 03:15",J,"아니 그냥","沒事"],["2026-01-15 03:16",G,"편지요??","信??"]]),Dh("2026-01-15 03:16",G,"👀")],Ah=[{id:"kyungmin",contactId:"kyungmin",messages:ht([["2026-01-12 16:20","kyungmin","형 질문 있어요","哥我有問題"],["2026-01-12 16:20","kyungmin","형은 왜 도훈이형한테만 라면 끓여줘요?","哥為什麼只幫道勳哥煮泡麵？"],["2026-01-12 16:25",J,"너도 끓여줬잖아","也幫你煮過啊"],["2026-01-12 16:25","kyungmin","그건 제가 졸라서고요","那是我拜託的"],["2026-01-12 16:26","kyungmin","도훈이형은 말도 안 했는데 끓여주던데","道勳哥什麼都沒說你就煮了"],["2026-01-12 16:27",J,"배고파 보였어","他看起來很餓"],["2026-01-12 16:27","kyungmin","흠 🧐","嗯 🧐"],["2026-01-28 22:10","kyungmin","형 편지 몇 장 썼어요?","哥信寫幾張了？"],["2026-01-28 22:30",J,"비밀","祕密"],["2026-01-28 22:31","kyungmin",'메모장에 "최종의최종" 있는 거 다 봤어요',"我看到備忘錄裡的「最終的最終版」了"],["2026-01-28 22:31",J,"언제 봤어","什麼時候看的"],["2026-01-28 22:32","kyungmin","형이 소파에 폰 두고 갔을 때요 ㅋㅋ","哥把手機忘在沙發上的時候ㅋㅋ"],["2026-01-28 22:32","kyungmin","비번 너무 쉬워요","密碼太好猜了"]])},{id:"jihoon",contactId:"jihoon",messages:[...ht([["2026-01-04 02:20","jihoon","형","哥"],["2026-01-04 02:20","jihoon","도훈이형 또 소파예요","道勳哥又在沙發上了"]]),Pi("2026-01-04 02:21","jihoon","소파에서 자는 도훈이형 (제보)","在沙發上睡著的道勳哥（爆料）"),...ht([["2026-01-04 02:28",J,"담요 덮어줌","幫他蓋毯子了"],["2026-01-04 02:28","jihoon","역시","果然"],["2026-01-04 02:29","jihoon","형은 왜 깨우진 않아요?","哥為什麼不叫醒他？"],["2026-01-04 02:30",J,"깨우면 안 자","叫醒他就睡不著了"],["2026-01-20 23:40","jihoon","형 도훈이형이 형 볼링 영상 계속 돌려봐요","哥 道勳哥一直重看你打保齡球的影片"],["2026-01-20 23:41","jihoon","웃으면서","邊看邊笑"],["2026-01-20 23:42",J,"지워달라고 해","叫他刪掉"],["2026-01-20 23:42","jihoon",'"형 웃긴거" 폴더래요',"他說是「哥好笑的」資料夾"]])]},{id:"youngjae",contactId:"youngjae",messages:ht([["2026-01-27 00:30","youngjae","신유야","申惟"],["2026-01-27 00:30","youngjae","너 도훈이 생일 편지 몇 번 고쳤냐","你給道勳的生日信改了幾次"],["2026-01-27 00:41",J,"네 번","四次"],["2026-01-27 00:41","youngjae","거짓말 다섯 번이지","騙人 五次吧"],["2026-01-27 00:42",J,"어떻게 알아","你怎麼知道"],["2026-01-27 00:42","youngjae","벽 너머로 한숨 소리 다섯 번 들림","隔著牆聽到五次嘆氣聲"],["2026-01-27 00:43","youngjae","그냥 평소 말투로 써","就用平常的語氣寫"],["2026-01-27 00:43","youngjae","도훈이 그런 거 다 알아","道勳都懂的"],["2026-01-27 00:44",J,"...고맙다","……謝了"]])},{id:"hanjin",contactId:"hanjin",messages:ht([["2026-01-23 15:00","hanjin","형! 질문이요","哥！我有問題"],["2026-01-23 15:00","hanjin",'"태어나줘서 고마워"는 언제 써요?',"「謝謝你出生」什麼時候用？"],["2026-01-23 15:05",J,"생일에","生日的時候"],["2026-01-23 15:05",J,"진짜 소중한 사람한테","對真正珍貴的人"],["2026-01-23 15:06","hanjin","오오 형 도훈이형한테 쓸 거죠","喔喔 哥要寫給道勳哥吧"],["2026-01-23 15:06",J,"...한국어 공부 열심히 하네","……韓文學得很認真嘛"],["2026-01-23 15:07","hanjin","ㅋㅋㅋ 형 말 돌렸다","ㅋㅋㅋ 哥轉移話題了"]])}],Uh=[{id:"porridge",title:{ko:"도훈이 아플 때",zh:"道勳生病的時候"},at:k("2025-10-19 23:20"),body:{ko:`도훈이 아플 때

- 해열제: 거실 서랍 두 번째 칸
- 전복죽: 역 앞 24시간 죽집
- 이불 두 개 (본인은 하나면 된다고 함, 거짓말)
- 물 자주
- "괜찮아요"라고 하면 안 괜찮은 거임`,zh:`道勳生病的時候

- 退燒藥：客廳抽屜第二層
- 鮑魚粥：車站前 24 小時粥店
- 兩條被子（他說一條就好，騙人）
- 常喝水
- 他說「沒事」就是有事`}},{id:"first",title:{ko:"1위 한 날",zh:"拿一位的那天"},at:k("2025-11-13 23:40"),body:{ko:`1위 한 날

이름 불렸을 때 도훈이가 제일 먼저 내 손을 잡았다.
울지 말자고 했는데 내가 먼저 울었다.
도훈이는 땀이라고 우긴다.

42 고마워요. 오늘을 잊지 않을게요.`,zh:`拿一位的那天

被叫到名字的時候，道勳第一個抓住我的手。
說好不哭的，結果是我先哭了。
道勳堅持說那是汗。

謝謝 42。我不會忘記今天。`}},{id:"december",title:{ko:"12월에 한 것들",zh:"十二月做過的事"},at:k("2025-12-31 23:50"),body:{ko:`12월에 한 것들

✔︎ 이어폰 한쪽씩 나눠 듣기 (차 안)
✔︎ 목도리 받음 (양말 복수)
✔︎ 볼링 87점 (레인 탓 아님)
✔︎ 정전 때 거실 모임
□ 0시에 제일 먼저 새해 인사 ← 이따가`,zh:`十二月做過的事

✔︎ 一人一邊耳機（車上）
✔︎ 收到圍巾（襪子的報復）
✔︎ 保齡球 87 分（不是球道的問題）
✔︎ 停電時客廳集合
□ 零點第一個說新年快樂 ← 等一下`}}],Wh=[{id:"m1",at:k("2025-09-03 01:20"),emoji:"🏨",tint:"#e2e8f0",caption:{ko:"일본 호텔, 베개 들고 온 도훈이",zh:"日本飯店，抱著枕頭過來的道勳"}},{id:"m2",at:k("2025-09-21 19:25"),emoji:"☔",tint:"#c9d8f5",caption:{ko:"우산 하나 (내 어깨는 젖음)",zh:"一把傘（我的肩膀濕了）"}},{id:"m3",at:k("2025-10-05 15:39"),emoji:"🩷",tint:"#fbd3e0",caption:{ko:"핑크 염색",zh:"染成粉紅色"}},{id:"m4",at:k("2025-10-20 00:01"),emoji:"🥣",tint:"#f3e6cf",caption:{ko:"전복죽 (문 앞 배달)",zh:"鮑魚粥（放門口）"}},{id:"m5",at:k("2025-11-13 19:00"),emoji:"🏆",tint:"#fff1c2",caption:{ko:"첫 1위 트로피",zh:"第一個一位獎盃"}},{id:"m6",at:k("2025-11-28 22:40"),emoji:"🔦",tint:"#2b2f3a",caption:{ko:"정전 거실 모임",zh:"停電客廳集合"}},{id:"m7",at:k("2025-12-25 00:05"),emoji:"🧣",tint:"#e8d3c8",caption:{ko:"도훈이가 준 목도리",zh:"道勳送的圍巾"}},{id:"m8",at:k("2026-01-15 03:20"),emoji:"☕",tint:"#d9c2a8",caption:{ko:"새벽 3시 핫초코 두 잔",zh:"凌晨三點的兩杯熱可可"}}],Bh=[{q:{ko:"열 내리는 법",zh:"怎麼退燒"},result:[{title:{ko:"고열일 때 집에서 할 수 있는 것",zh:"高燒時在家可以做的事"},body:{ko:"충분한 수분 섭취, 미지근한 물수건, 해열제 복용 후 경과를 보세요.",zh:"補充足夠水分、用溫毛巾擦拭、服用退燒藥後觀察狀況。"}}]},{q:{ko:"24시간 전복죽",zh:"24小時 鮑魚粥"},result:[{title:{ko:"역 앞 24시 죽집",zh:"車站前 24 小時粥店"},body:{ko:"전복죽 · 포장 가능 · 새벽 배달",zh:"鮑魚粥 · 可外帶 · 凌晨外送"}}]},{q:{ko:"핑크 염색 유지 기간",zh:"粉紅色染髮 維持多久"},result:[{title:{ko:"파스텔 핑크, 얼마나 갈까?",zh:"粉彩粉紅能維持多久？"},body:{ko:"보통 2~3주. 컬러 샴푸를 쓰면 더 오래가요.",zh:"通常 2～3 週，用護色洗髮精可以更久。"}}]},{q:{ko:"악몽 꿨을 때 따뜻한 음료",zh:"做惡夢 溫熱飲料"},result:[{title:{ko:"잠들기 좋은 음료 5가지",zh:"好入睡的 5 種飲料"},body:{ko:"따뜻한 우유, 핫초코, 캐모마일…",zh:"溫牛奶、熱可可、洋甘菊……"}}]}],Vh=[{date:"2026-01-01",title:{ko:"0시 새해 인사 ✔︎",zh:"零點新年問候 ✔︎"},color:"#7fb4ff"},{date:"2026-01-15",title:{ko:"정기 연습",zh:"定期練習"},time:"13:00",color:"#30d158"},{date:"2026-01-24",title:{ko:"팬사인회",zh:"簽名會"},time:"16:00",color:"#ff9f0a"}],Hh=[{id:"mom-open",when:"open:mom",delay:1500,actions:[{t:"msg",room:"mom",text:{ko:"아들 아직 안 자?",zh:"兒子還沒睡？"}},{t:"msg",room:"mom",text:{ko:"쿠키는 경비실에서 잘 찾았고?",zh:"餅乾從管理室拿到了嗎？"}},{t:"msg",room:"mom",text:{ko:"도훈이한테 엄마가 생일 축하한다고 전해줘",zh:"幫媽媽跟道勳說生日快樂"}}]},{id:"kyungmin-open",when:"open:kyungmin",delay:1200,actions:[{t:"msg",room:"kyungmin",text:{ko:"형!! 방금 도훈이형이 형 방 앞에서 서성였어요",zh:"哥!! 剛剛道勳哥在你房門口晃來晃去"}},{t:"msg",room:"kyungmin",text:{ko:"뭔가 눈치챈 것 같아요 😱",zh:"好像察覺到什麼了 😱"}}]},{id:"jihoon-open",when:"open:jihoon",delay:1200,actions:[{t:"photo",room:"jihoon",caption:{ko:"오늘 소파 비어 있음 (방에서 자는 척 중)",zh:"今天沙發是空的（在房間裝睡）"}},{t:"msg",room:"jihoon",text:{ko:"형 오늘은 담요 안 덮어줘도 돼요 ㅋㅋ",zh:"哥今天不用幫他蓋毯子了ㅋㅋ"}}]},{id:"noona-open",when:"open:noona",delay:1200,actions:[{t:"msg",room:"noona",text:{ko:"12시에 보내는 거 잊지 마라",zh:"別忘了十二點傳"}}]}],qh={instagram:{me:"yu.42_",users:{"yu.42_":{name:{ko:"신유",zh:"申惟"},bio:{ko:`🩵 42
레인 탓 아님`,zh:`🩵 42
不是球道的問題`},posts:6,followers:"2.1M",following:"5"},"hoon.wolf":{name:{ko:"도훈",zh:"道勳"},bio:{ko:"🐺 줏대 있게",zh:"🐺 活得有主見"},posts:9,followers:"1.9M",following:"5"},"kyungmin.p":{name:{ko:"경민",zh:"炅潣"},posts:7,followers:"1.6M",following:"5"},jihoon_06:{name:{ko:"지훈",zh:"志薰"},posts:5,followers:"1.5M",following:"5"},"young.jae":{name:{ko:"영재",zh:"英宰"},posts:4,followers:"1.4M",following:"5"},"hanjin.zz":{name:{ko:"한진",zh:"韓振"},posts:6,followers:"1.5M",following:"5"},tws_official:{name:"TWS",verified:!0,posts:812,followers:"3.8M",following:"0"}},feed:[{id:"f1",by:"hoon.wolf",pic:{emoji:"🎳",tint:"#c9d8f5"},caption:{ko:"87 : 152 🐺 (형 허락받음)",zh:"87 : 152 🐺（已經哥同意）"},likes:812345,at:k("2025-12-14 23:30"),comments:[{by:"yu.42_",text:{ko:"허락 안 했는데",zh:"我沒同意啊"}},{by:"kyungmin.p",text:{ko:"형 레인 탓 하실 차례예요",zh:"哥輪到你怪球道了"}}]},{id:"f2",by:"tws_official",pic:{emoji:"🩵",tint:"#cfe6f7"},caption:{ko:"TWS 데뷔 2주년 🩵 42와 함께한 모든 순간에 감사해요 #TWS #2ndAnniversary",zh:"TWS 出道兩週年 🩵 感謝和 42 一起的每個瞬間 #TWS #2ndAnniversary"},likes:1203400,at:k("2026-01-22 00:00"),comments:[{by:"hanjin.zz",text:"🩵🩵🩵"}]},{id:"f3",by:"kyungmin.p",pic:{emoji:"🍜",tint:"#f3dcc4"},caption:{ko:"야식 금지인데 형들이 먼저 먹음",zh:"說好禁止宵夜，結果哥哥們先吃了"},likes:503120,at:k("2026-01-17 01:12"),comments:[{by:"hoon.wolf",text:{ko:"신유형이 끓였음",zh:"是申惟哥煮的"}},{by:"yu.42_",text:{ko:"구석에서 몰래 먹었는데 어떻게 알았지",zh:"明明躲在角落偷吃的，怎麼會知道"}}]},{id:"f4",by:"jihoon_06",pic:{emoji:"🛋️",tint:"#d8d1ea"},caption:{ko:"우리 집 소파 주인 🐺",zh:"我們家沙發的主人 🐺"},likes:620004,at:k("2026-01-05 10:20"),comments:[{by:"hoon.wolf",text:{ko:"지워",zh:"刪掉"}}]},{id:"f5",by:"young.jae",pic:{emoji:"📸",tint:"#e2e8f0"},caption:{ko:"형라인 🫶",zh:"哥哥線 🫶"},likes:701555,at:k("2026-01-26 19:00"),comments:[{by:"yu.42_",text:"🫶"}]}],stories:[{by:"hoon.wolf",frames:[{emoji:"🎤",tint:"#f6d4d9",text:{ko:"오늘 마이크 켜져 있었던 거 잊어주세요",zh:"請忘記今天麥克風開著那件事"}}]},{by:"kyungmin.p",frames:[{emoji:"🍪",tint:"#e9dcc0",text:{ko:"두쫀쿠 줄 1시간째",zh:"杜拜Q餅排隊第一小時"}},{emoji:"😇",tint:"#fff3c4",text:{ko:"품절",zh:"賣完了"}}]},{by:"hanjin.zz",frames:[{emoji:"🌙",tint:"#1f2a4d",text:{ko:"잘 자요 42",zh:"晚安 42"}}]},{by:"tws_official",frames:[{emoji:"🎂",tint:"#f7e3ea",text:{ko:"D-1 🐺",zh:"D-1 🐺"}}]}],highlights:[{title:{ko:"볼링",zh:"保齡球"},frames:[{emoji:"🎳",tint:"#c9d8f5",text:{ko:"언젠가 이긴다",zh:"總有一天會贏"}}]},{title:{ko:"연습실",zh:"練習室"},frames:[{emoji:"🪞",tint:"#e2e8f0",text:{ko:"비주얼 모니터링 중",zh:"視覺監看中"}}]},{title:"🩵",frames:[{emoji:"🩵",tint:"#cfe6f7",text:{ko:"42 고마워요",zh:"謝謝 42"}}]}],dms:[{with:"hoon.wolf",messages:[{from:"hoon.wolf",text:{ko:"형 이 릴스 봐요 ㅋㅋㅋ",zh:"哥看這支 Reels ㅋㅋㅋ"},at:k("2026-01-20 01:02")},{from:"hoon.wolf",text:{ko:"[릴스] 볼링 못 치는 사람 특징",zh:"[Reels] 不會打保齡球的人的特徵"},at:k("2026-01-20 01:02")},{from:"yu.42_",text:{ko:"이거 나 저격이지",zh:"這是在針對我吧"},at:k("2026-01-20 01:05")},{from:"hoon.wolf",text:{ko:"아닌데요 🐺",zh:"才不是 🐺"},at:k("2026-01-20 01:05")},{from:"yu.42_",text:{ko:"자라 빨리",zh:"快去睡"},at:k("2026-01-20 01:06")}]},{with:"kyungmin.p",messages:[{from:"kyungmin.p",text:{ko:"형 도훈이형 생일 편지 몇 장 썼어요?",zh:"哥你給道勳哥的生日信寫幾張了？"},at:k("2026-01-28 22:10")},{from:"yu.42_",text:{ko:"비밀",zh:"祕密"},at:k("2026-01-28 22:30")},{from:"kyungmin.p",text:{ko:'메모장에 "최종의최종" 있는 거 다 봤어요',zh:"我看到備忘錄裡的「最終的最終版」了"},at:k("2026-01-28 22:31")}]}]},x:{mine:["tws_shinyu_","yu_diary"],accounts:{tws_shinyu_:{name:{ko:"신유 🩵",zh:"申惟 🩵"},bio:{ko:"TWS 리더 · 42 🩵",zh:"TWS 隊長 · 42 🩵"},followers:"1.2M",following:"6"},yu_diary:{name:{ko:".",zh:"."},bio:{ko:"혼잣말",zh:"自言自語"},locked:!0,followers:"0",following:"0"},"42_daily":{name:{ko:"사이 일기",zh:"42 日記"},bio:"",followers:"18K",following:"300"},yudoz_moment:{name:{ko:"유도즈 모먼트 아카이브",zh:"惟勳時刻存檔"},bio:"",followers:"42K",following:"12"},tws_sparkle:{name:{ko:"반짝반짝 투어스",zh:"閃閃發光 TWS"},bio:"",followers:"9K",following:"420"}},timeline:[{id:"t1",by:"yudoz_moment",text:{ko:"오늘 무대 끝나고 신유가 도훈이 어깨동무하고 구석으로 데려가는 거 또 찍힘ㅋㅋㅋㅋ 살롱드립 이후로 안 한다며",zh:"今天表演結束後又拍到申惟勾著道勳肩膀把人帶去角落ㅋㅋㅋㅋ 不是說上完沙龍就不做了嗎"},at:k("2026-01-29 22:40"),likes:18400,rts:6200,replies:320,pic:{emoji:"📸",tint:"#dfe7f1"}},{id:"t2",by:"42_daily",text:{ko:"내일 도훈이 생일인데 신유 12시 정각에 또 1등으로 축하할 듯. 3년째 국룰",zh:"明天道勳生日，申惟大概又會十二點整第一個祝福。連續三年的定律"},at:k("2026-01-29 23:10"),likes:9210,rts:2300,replies:88},{id:"t3",by:"tws_sparkle",text:{ko:"#도훈이_생일축하해 트친분들 내일 0시에 같이 달려요 🐺🎂",zh:"#道勳生日快樂 推友們明天零點一起刷 🐺🎂"},at:k("2026-01-29 21:00"),likes:4400,rts:3100,replies:51},{id:"t4",by:"tws_shinyu_",text:{ko:"42 오늘도 고마웠어요 🩵 따뜻하게 입고 자요",zh:"42 今天也謝謝你們 🩵 穿暖一點睡覺"},at:k("2026-01-29 20:30"),likes:21e4,rts:40200,replies:12e3}],posts:{tws_shinyu_:[{id:"m1",by:"tws_shinyu_",text:{ko:"42 오늘도 고마웠어요 🩵 따뜻하게 입고 자요",zh:"42 今天也謝謝你們 🩵 穿暖一點睡覺"},at:k("2026-01-29 20:30"),likes:21e4,rts:40200,replies:12e3},{id:"m2",by:"tws_shinyu_",text:{ko:"데뷔 2주년 🩵 앞으로도 같이 걸어가요",zh:"出道兩週年 🩵 以後也一起走下去吧"},at:k("2026-01-22 00:00"),likes:38e4,rts:91e3,replies:3e4}],yu_diary:[{id:"d5",by:"yu_diary",text:{ko:"전복죽 24시간 하는 데 찾느라 30분 걸림. 말 안 할 거임",zh:"為了找 24 小時的鮑魚粥花了三十分鐘。不會告訴他"},at:k("2025-10-20 00:10"),likes:0,rts:0,replies:0},{id:"d6",by:"yu_diary",text:{ko:"1위. 이름 불렸을 때 도훈이가 제일 먼저 손 잡았다",zh:"一位。被叫到名字時道勳第一個抓住我的手"},at:k("2025-11-13 23:50"),likes:0,rts:0,replies:0},{id:"d7",by:"yu_diary",text:{ko:"목도리 따뜻함. 양말 준 거 조금 미안해짐",zh:"圍巾很暖。開始對送襪子這件事有點抱歉"},at:k("2025-12-25 00:10"),likes:0,rts:0,replies:0},{id:"d8",by:"yu_diary",text:{ko:"새벽 3시 핫초코. 편지 쓰다 들킬 뻔",zh:"凌晨三點的熱可可。寫信差點被發現"},at:k("2026-01-15 03:30"),likes:0,rts:0,replies:0},{id:"d1",by:"yu_diary",text:{ko:"편지 다섯 번째 다시 씀. 왜 말로 하는 것보다 쓰는 게 더 어렵지",zh:"信重寫第五次了。為什麼寫比說還難"},at:k("2026-01-29 23:45"),likes:0,rts:0,replies:0},{id:"d2",by:"yu_diary",text:{ko:"3월 14일. 손하트 처음 받은 날. 이건 비밀번호로 써도 안 까먹을 듯",zh:"3月14日。第一次收到手指愛心的日子。拿來當密碼應該也不會忘"},at:k("2026-01-18 02:14"),likes:0,rts:0,replies:0},{id:"d3",by:"yu_diary",text:{ko:"소파에 또 담요 덮어줌. 내일은 모른 척해야지",zh:"又幫他在沙發上蓋了毯子。明天要裝作不知道"},at:k("2026-01-04 02:33"),likes:0,rts:0,replies:0},{id:"d4",by:"yu_diary",text:{ko:"118 : 121. 3점. 진짜 다음엔 이긴다",zh:"118 : 121。三分。下次真的會贏"},at:k("2026-01-11 23:58"),likes:0,rts:0,replies:0}]},trends:[{tag:"#도훈이_생일축하해",count:{ko:"게시물 12.4만",zh:"12.4 萬則貼文"}},{tag:"#TWS",count:{ko:"게시물 58만",zh:"58 萬則貼文"}},{tag:"#유도즈",count:{ko:"게시물 3.1만",zh:"3.1 萬則貼文"}},{tag:{ko:"두쫀쿠",zh:"杜拜Q餅"},count:{ko:"게시물 9.8만",zh:"9.8 萬則貼文"}}]},music:[{id:"pl1",title:{ko:"도훈이가 추천한 노래",zh:"道勳推薦的歌"},by:{ko:"신유",zh:"申惟"},pic:{emoji:"🐺",tint:"#d8d1ea"},songs:[{title:"첫 만남은 계획대로 되지 않아",artist:"TWS",dur:191},{title:"unplugged boy",artist:"TWS",dur:176},{title:"BFF",artist:"TWS",dur:183},{title:"내가 S면 넌 나의 N이 되어줘",artist:"TWS",dur:170}]},{id:"pl2",title:{ko:"연습실 반복재생",zh:"練習室循環播放"},by:{ko:"신유",zh:"申惟"},pic:{emoji:"🪞",tint:"#e2e8f0"},songs:[{title:"마지막 축제",artist:"TWS",dur:188},{title:"Oh Mymy : 7s",artist:"TWS",dur:172},{title:"첫 만남은 계획대로 되지 않아",artist:"TWS",dur:191}]},{id:"pl3",title:{ko:"잠 안 올 때",zh:"睡不著的時候"},by:{ko:"신유",zh:"申惟"},pic:{emoji:"🌙",tint:"#1f2a4d"},songs:[{title:"Happy Birthday (Piano)",artist:"Lullaby Room",dur:142},{title:"Snow on the Window",artist:"Lullaby Room",dur:205}]}],places:[{id:"dorm",name:{ko:"숙소",zh:"宿舍"},x:48,y:46,emoji:"🏠",kind:{ko:"집",zh:"住家"},note:{ko:"거실 소파 = 도훈이 자리",zh:"客廳沙發 = 道勳的位子"}},{id:"studio",name:{ko:"연습실",zh:"練習室"},x:70,y:28,emoji:"🪞",kind:{ko:"회사",zh:"公司"},note:{ko:"구석 자리 (상담용)",zh:"角落的位置（談心用）"}},{id:"bowl",name:{ko:"스트라이크 볼링장",zh:"Strike 保齡球館"},x:25,y:68,emoji:"🎳",kind:{ko:"즐겨찾기",zh:"收藏"},note:{ko:"1/31 22:00 예약 · 리매치",zh:"1/31 22:00 預約 · 復仇戰"}},{id:"cafe",name:{ko:"동네 카페",zh:"社區咖啡廳"},x:62,y:74,emoji:"🍪",kind:{ko:"최근",zh:"最近"},note:{ko:"두쫀쿠 파는 곳 (엄마 제보)",zh:"有賣杜拜Q餅（媽媽提供情報）"}},{id:"cake",name:{ko:"케이크 공방",zh:"蛋糕工作室"},x:30,y:22,emoji:"🎂",kind:{ko:"최근",zh:"最近"},note:{ko:"생크림 과일 케이크 픽업",zh:"取鮮奶油水果蛋糕"}}],mails:[{id:"m1",from:"PLEDIS 스케줄팀",subject:{ko:"[공지] 1/30(금) 스케줄 안내",zh:"[公告] 1/30（五）行程通知"},body:{ko:`10:00 숙소 출발
11:30 현장 도착 및 리허설
※ 도훈 멤버 생일 현장 서포트 예정`,zh:`10:00 宿舍出發
11:30 抵達現場並彩排
※ 道勳成員生日，現場將有應援`},at:k("2026-01-29 18:00"),unread:!0},{id:"m2",from:"Strike Bowling",subject:{ko:"예약이 확정되었습니다",zh:"預約已確認"},body:{ko:`신유 님, 1월 31일 22:00 레인 2개 예약이 확정되었습니다.
볼링화는 현장에서 대여 가능합니다.`,zh:`申惟先生，1月31日 22:00 兩條球道的預約已確認。
保齡球鞋可在現場租借。`},at:k("2026-01-26 18:01")},{id:"m3",from:"Apple",subject:{ko:"메모 암호를 재설정하셨습니다",zh:"您已重設備忘錄密碼"},body:{ko:`안녕하세요, 신유 님.
잠긴 메모의 암호가 변경되었습니다.

암호 힌트: "처음 받은 날 (MMDD)"

본인이 변경하지 않았다면 Apple 지원에 문의하세요.`,zh:`申惟您好：
上鎖備忘錄的密碼已變更。

密碼提示：「第一次收到的日子（MMDD）」

若非本人操作，請聯絡 Apple 支援。`},at:k("2026-01-18 02:20")},{id:"m4",from:"쇼핑",subject:{ko:"주문하신 상품이 배송 완료되었습니다",zh:"您訂購的商品已送達"},body:{ko:"두바이 쫀득쿠키 2입 · 경비실 보관",zh:"杜拜Q彈餅乾 2入 · 存放於管理室"},at:k("2026-01-29 14:23")},{id:"draft1",box:"draft",from:"나",subject:{ko:"(제목 없음)",zh:"（無主旨）"},body:{ko:`도훈아

말로 하면 장난처럼 들릴까 봐 메일로 써본다.
…아니다 이건 너무 이상하다. 카톡으로 보내자.`,zh:`道勳啊

怕用說的聽起來像開玩笑，所以試著用信寫。
……不對這也太奇怪了。還是用 Kakao 傳吧。`},at:k("2026-01-29 23:20")}],weather:{city:{ko:"서울",zh:"首爾"},now:-4,desc:{ko:"맑음",zh:"晴"},hi:1,lo:-7,hours:[["지금","🌙",-4],["01","🌙",-5],["02","🌙",-5],["03","🌙",-6],["04","☁️",-6],["05","☁️",-7],["06","☁️",-7],["07","🌅",-6]],days:[[{ko:"오늘",zh:"今天"},"☀️",-7,1],[{ko:"금",zh:"週五"},"🌤️",-6,2],[{ko:"토",zh:"週六"},"❄️",-8,-1],[{ko:"일",zh:"週日"},"☁️",-5,3],[{ko:"월",zh:"週一"},"☀️",-4,4]]},lockedNote:{title:{ko:"🔒 열지 마",zh:"🔒 不准打開"},password:"0314",hint:{ko:"처음 받은 날",zh:"第一次收到的日子"},at:k("2026-01-18 02:16"),body:{ko:`열지 마

연습생 때 3월 14일.
처음 보는 애가 나 볼 때마다 손하트를 했다.
그때는 장난인 줄 알았는데
나중에 알았다. 내가 낯가리는 거 보고 일부러 한 거였다는 거.

그날부터 걔 앞에서는 덜 긴장했다.

리더라서 챙기는 게 아니다.
그냥 도훈이라서 챙기는 거다.

이건 편지에 못 쓰겠다.`,zh:`不准打開

練習生時期的3月14日。
第一次見的孩子每次看到我都比手指愛心。
那時候以為只是在開玩笑，
後來才知道。他是看我怕生，故意那樣做的。

從那天起，在他面前就沒那麼緊張了。

不是因為我是隊長才照顧他。
只是因為他是道勳，所以照顧他。

這個寫不進信裡。`}},hiddenPhotos:[{id:"h1",at:k("2026-01-04 02:31"),emoji:"😴",tint:"#d8d1ea",caption:{ko:"소파에서 자는 도훈이 (담요 덮기 전)",zh:"在沙發上睡著的道勳（蓋毯子前）"}},{id:"h2",at:k("2025-03-14 18:00"),emoji:"🫶",tint:"#f7e3ea",caption:{ko:"연습실 거울 앞 손하트 (3월 14일)",zh:"練習室鏡子前的手指愛心（3月14日）"}},{id:"h3",at:k("2026-01-22 00:05"),emoji:"🎂",tint:"#cfe6f7",caption:{ko:"2주년 케이크 앞에서 도훈이",zh:"兩週年蛋糕前的道勳"}}],deletedPhotos:[{id:"x1",at:k("2026-01-29 23:50"),emoji:"📝",tint:"#fff3c4",caption:{ko:"편지 손글씨 버전 (너무 오글거려서 지움)",zh:"手寫版的信（太肉麻所以刪了）"}}]},Qh=[{id:"g-spell",when:"today",title:{ko:"편지 맞춤법 검사",zh:"信件錯字檢查"},turns:[{q:{ko:'이거 맞춤법 틀린 거 있어? "앞으로도 형이랑 더 많은 추억 쌓자. 태어나줘서 고마워"',zh:"這有錯字嗎？「以後也跟哥一起累積更多回憶吧。謝謝你出生」"},a:{ko:`맞춤법은 **모두 맞아요!** 👍

- "쌓자" ✔
- "태어나줘서" ✔ (붙여 써도 자연스러워요)

문장도 따뜻하고 좋아요. 다만 앞부분에 "생일 축하해"가 한 번 더 나오면 마무리가 더 또렷해질 수 있어요.`,zh:`錯字**完全沒有！** 👍

- 「쌓자」✔
- 「태어나줘서」✔（連寫也很自然）

句子也很溫暖。不過如果前面再出現一次「生日快樂」，結尾會更明確。`}},{q:{ko:"너무 오글거리진 않지?",zh:"不會太肉麻吧？"},a:{ko:"전혀요. 구체적인 추억(손하트, 볼링, 소파)이 들어가 있어서 진심으로 읽혀요. 오글거림은 보통 **추상적인 칭찬만** 있을 때 생겨요.",zh:"完全不會。裡面有具體的回憶（手指愛心、保齡球、沙發），讀起來很真誠。肉麻通常是**只有抽象稱讚**的時候才會出現。"}}]},{id:"g-first",when:"today",title:{ko:"생일 편지 첫 문장 추천",zh:"生日信第一句推薦"},turns:[{q:{ko:"동생한테 쓰는 생일 편지 첫 문장 추천해줘. 너무 딱딱하지 않게",zh:"推薦寫給弟弟的生日信第一句，不要太生硬"},a:{ko:`이런 건 어때요?

1. "생일 축하해. 이번에도 12시 땡 하자마자 보내는 거 알지?"
2. "벌써 또 1년이네. 생일 축하해!"
3. "오늘만큼은 형이 먼저 말할게."

평소 말투를 그대로 살리는 게 제일 자연스러워요.`,zh:`這些怎麼樣？

1. 「生日快樂。這次也是十二點一到就傳，你知道吧？」
2. 「又過了一年呢，生日快樂！」
3. 「至少今天，讓哥先說。」

保留平常的說話方式最自然。`}}]},{id:"g-sofa",when:"yesterday",title:{ko:"룸메가 소파에서만 자는 이유",zh:"室友總是睡沙發的原因"},turns:[{q:{ko:"같이 사는 동생이 방 놔두고 맨날 거실 소파에서 자. 왜 그럴까?",zh:"一起住的弟弟放著房間不睡，每天都睡客廳沙發。為什麼？"},a:{ko:`흔한 이유는 이런 것들이에요.

- **피곤해서** 앉은 자리에서 바로 잠듦
- 거실에 **사람 소리**가 있어서 안심됨
- 누군가 챙겨주는 걸 은근히 좋아함

혹시 누가 담요를 덮어주고 있다면… 마지막 이유일 가능성도 있어요 🙂`,zh:`常見原因有這些：

- **太累**，坐著就睡著了
- 客廳有**人的聲音**比較安心
- 暗自喜歡被人照顧

如果有人一直幫他蓋毯子的話……也可能是最後一個原因喔 🙂`}},{q:{ko:"담요 덮어주는 사람 나야",zh:"幫他蓋毯子的人是我"},a:{ko:"그렇다면 동생분은 아마 알고 있을 거예요. 그리고 꽤 고마워하고 있을 거고요.",zh:"那麼弟弟大概知道喔。而且應該很感謝你。"}}]},{id:"g-bowling",when:"week",title:{ko:"볼링 점수 올리는 법",zh:"提升保齡球分數的方法"},turns:[{q:{ko:"볼링 맨날 100점 근처야. 동생한테 이기고 싶어",zh:"保齡球每次都一百分左右，想贏弟弟"},a:{ko:`100점대에서 바로 효과 보는 팁이에요.

1. **스페어 처리**부터: 스트라이크보다 점수 차이가 커요
2. 핀 말고 **레인의 화살표**를 보고 던지기
3. 공 무게는 체중의 10% 정도
4. 마지막 스텝에서 서두르지 않기

그리고… 레인 탓은 점수에 도움이 안 돼요 😅`,zh:`一百分左右馬上見效的技巧：

1. 先練**補中**：分數差距比全倒還大
2. 不要看球瓶，看**球道上的箭頭**
3. 球重約體重的 10%
4. 最後一步不要急

還有……怪球道對分數沒有幫助 😅`}}]},{id:"g-cookie",when:"week",title:{ko:"두쫀쿠 칼로리",zh:"杜拜Q餅的熱量"},turns:[{q:{ko:"두바이 쫀득쿠키 하나 몇 칼로리야?",zh:"杜拜Q彈餅乾一個幾大卡？"},a:{ko:"제품마다 다르지만 보통 **개당 300~450kcal** 정도예요. 피스타치오 크림과 카다이프가 들어가서 꽤 높은 편이에요. 선물용이라면 칼로리 얘기는 안 하는 걸 추천해요 🍪",zh:"依產品不同，通常**每個約 300～450 大卡**。因為有開心果醬和卡達伊夫麵，熱量偏高。如果是送禮用，建議不要提熱量 🍪"}}]},{id:"g-leader",when:"week",title:{ko:"리더로서 멤버 챙기는 법",zh:"身為隊長怎麼照顧成員"},turns:[{q:{ko:"팀 리더인데 멤버들 챙기는 게 맞게 하고 있는지 모르겠어",zh:"我是隊長，不知道自己照顧成員的方式對不對"},a:{ko:`그런 고민을 한다는 것 자체가 잘하고 있다는 신호예요.

- 문제를 **바로 해결**하려 하기보다 먼저 들어주기
- 단체 앞이 아니라 **따로 불러서** 이야기하기
- 리더도 기대도 된다는 걸 보여주기

특히 마지막이 중요해요. 리더가 힘든 티를 안 내면 멤버들도 힘든 걸 숨기게 돼요.`,zh:`會有這種煩惱本身就代表你做得很好。

- 先傾聽，不要急著**馬上解決**問題
- 不要在大家面前，**單獨找他**談
- 讓大家知道隊長也可以依靠別人

最後一點特別重要。隊長不表現出辛苦，成員也會把辛苦藏起來。`}},{q:{ko:"따로 불러서 얘기하는 거 구석으로 끌고 가는 거랑 같은 거야?",zh:"單獨找他談，跟把人拖到角落是一樣的嗎？"},a:{ko:"목적은 비슷해요 😄 다만 어깨동무는 상대가 편해할 때만 추천해요.",zh:"目的差不多 😄 不過勾肩膀只建議在對方覺得自在的時候。"}}]},{id:"g-cake",when:"week",title:{ko:"케이크 몰래 숨기기",zh:"偷偷藏蛋糕"},turns:[{q:{ko:"룸메 몰래 생크림 케이크 냉장고에 숨기려면?",zh:"怎麼瞞著室友把鮮奶油蛋糕藏進冰箱？"},a:{ko:`1. 맨 아래 칸 안쪽에 두기
2. 앞에 **큰 반찬통**으로 가리기
3. 냄새가 강한 김치 옆은 피하기(향이 배요)
4. 상자에 "건드리지 마시오" 쓰기 ← 오히려 수상해요`,zh:`1. 放在最下層的最裡面
2. 用**大保鮮盒**擋在前面
3. 避開味道重的泡菜（會沾到味道）
4. 在盒子上寫「請勿觸碰」← 反而更可疑`}}]},{id:"g-lyrics",when:"month",title:{ko:"가사 아이디어: 12시",zh:"歌詞靈感：十二點"},turns:[{q:{ko:'"12시 정각"을 주제로 가사 몇 줄 써줘',zh:"用「十二點整」為主題寫幾句歌詞"},a:{ko:`시계 바늘이 겹치는 순간
제일 먼저 너를 부를게
하루가 바뀌는 그 1초에
내 첫마디는 늘 너였으면 해`,zh:`時針重疊的那一刻
我會第一個呼喚你
在日子交替的那一秒
希望我的第一句話永遠是你`}}]},{id:"g-english",when:"month",title:{ko:"영어 생일 축하 표현",zh:"英文生日祝福"},turns:[{q:{ko:"친한 동생한테 쓸 영어 생일 문구",zh:"寫給親近弟弟的英文生日句子"},a:{ko:`- Happy birthday, little bro! 🐺
- Thanks for always being there.
- Another year of being my favorite troublemaker.
- Let's make more memories together.`,zh:`- Happy birthday, little bro! 🐺
- Thanks for always being there.
- Another year of being my favorite troublemaker.
- Let's make more memories together.`}}]}],Kh=[{id:"g-send",when:"today",title:{ko:"편지 보낼까 말까",zh:"信要不要傳"},turns:[{q:{ko:"형한테 생일 편지 썼는데 보낼까 말까 30분째 고민 중",zh:"給哥寫了生日信，猶豫要不要傳已經三十分鐘了"},a:{ko:`보내는 걸 추천해요. 이유는 세 가지예요.

1. 받는 사람 입장에서 **손해 볼 게 없어요**
2. 30분이나 고민했다는 건 그만큼 **진심**이라는 뜻이에요
3. 보내지 않은 편지는 아무것도 바꾸지 못해요

12시 정각에 맞춰 보내는 것도 좋은 방법이에요.`,zh:`建議傳出去。理由有三個：

1. 對收信的人來說**沒有任何損失**
2. 猶豫了三十分鐘，代表那是**真心**
3. 沒傳出去的信什麼都改變不了

剛好十二點整傳出去也是好方法。`}}]},{id:"g-surprise",when:"today",title:{ko:"형 생일 서프라이즈 아이디어",zh:"哥生日驚喜點子"},turns:[{q:{ko:"같이 사는 형 생일 0시 서프라이즈 아이디어 줘. 멤버 5명이 같이 해",zh:"給我一起住的哥哥生日零點驚喜點子，五個成員一起"},a:{ko:`5명이면 역할을 나누는 게 핵심이에요.

- **1명**: 0시 직전까지 대화로 시간 끌기
- **1명**: 케이크·초 담당
- **2명**: 문 앞 대기 + 불 끄기
- **1명**: 영상 촬영

그리고 제일 중요한 건, 0시 정각에 **가장 친한 사람이 먼저 연락하는 것**이에요.`,zh:`五個人的話，重點是分工：

- **1 人**：零點前用聊天拖延時間
- **1 人**：負責蛋糕和蠟燭
- **2 人**：在門口待命 + 關燈
- **1 人**：錄影

還有最重要的是，零點整**由最親近的人先聯絡**。`}},{q:{ko:"시간 끄는 역할이 나야",zh:"負責拖時間的是我"},a:{ko:'그럼 자연스럽게 평소처럼 대화하세요. 들키지 않는 비결은 "아무것도 아니에요"를 너무 많이 말하지 않는 거예요 😉',zh:"那就像平常一樣自然地聊天。不被發現的祕訣是不要一直說「沒什麼」😉"}}]},{id:"g-ball",when:"yesterday",title:{ko:"볼링공 무게 추천",zh:"保齡球重量推薦"},turns:[{q:{ko:"키 180 넘는 남자 선물용 볼링공 몇 파운드?",zh:"送給身高 180 以上男生的保齡球要幾磅？"},a:{ko:"보통 **12~14파운드**가 무난해요. 볼링을 자주 치지 않는다면 12파운드가 컨트롤하기 좋아요. 이니셜 각인을 넣으면 선물 느낌이 확 살아요 🎳",zh:"通常 **12～14 磅**比較合適。如果不常打，12 磅比較好控制。刻上縮寫會很有禮物的感覺 🎳"}}]},{id:"g-lettering",when:"yesterday",title:{ko:"케이크 레터링 문구",zh:"蛋糕上的字"},turns:[{q:{ko:"형 생일 케이크 레터링 짧게 추천",zh:"推薦哥生日蛋糕上的短句"},a:{ko:`- 형 생일 축하해요 🐺
- 올해는 내가 먼저
- 우리 리더 최고
- 118점도 사랑해요

마지막은 볼링 얘기를 아는 사람만 웃을 수 있는 버전이에요.`,zh:`- 哥生日快樂 🐺
- 今年換我先
- 我們隊長最棒
- 118 分也愛你

最後一句是只有懂保齡球梗的人才會笑的版本。`}}]},{id:"g-thanks",when:"week",title:{ko:"형에게 고맙다고 말하는 법",zh:"怎麼跟哥說謝謝"},turns:[{q:{ko:"맨날 챙겨주는 형한테 고맙다고 말하고 싶은데 말로 하면 어색해. 어떻게 해?",zh:"想跟總是照顧我的哥說謝謝，可是用說的很尷尬。怎麼辦？"},a:{ko:"말로 하기 어렵다면 그 사람이 해왔던 방식을 그대로 돌려주는 것도 좋아요. 예를 들어 상대가 늘 먼저 연락해 줬다면, 이번엔 당신이 먼저 연락해 보세요. 행동이 말보다 먼저 전해질 때가 많아요.",zh:"如果用說的很難，可以用對方一直以來的方式回報他。例如對方總是先聯絡你，這次就換你先聯絡。很多時候行動比話語更早傳達心意。"}}]},{id:"g-sofa2",when:"week",title:{ko:"소파에서 자는 습관",zh:"睡沙發的習慣"},turns:[{q:{ko:"자꾸 소파에서 잠드는데 누가 담요 덮어주는 게 좋아서 그런 것 같아. 이거 고쳐야 돼?",zh:"我一直在沙發上睡著，好像是因為喜歡有人幫我蓋毯子。這要改嗎？"},a:{ko:"허리 건강을 생각하면 침대가 좋아요. 다만 담요를 덮어주는 사람에게 고맙다는 말은 꼭 해 주세요. 그 사람도 아마 알고 있을 거예요.",zh:"為了腰部健康，還是睡床比較好。不過一定要跟幫你蓋毯子的人說聲謝謝。那個人大概也知道吧。"}}]},{id:"g-mic",when:"month",title:{ko:"마이크 켜진 실수 수습법",zh:"麥克風沒關的補救方法"},turns:[{q:{ko:"시상식에서 마이크 켜진 줄 모르고 노래 흥얼거림… 어떻게 수습해?",zh:"頒獎典禮上不知道麥克風開著就哼起歌來……怎麼補救？"},a:{ko:'이미 지나간 일은 **웃음으로 넘기는 게** 최고예요. 팬들은 오히려 귀엽게 기억하는 경우가 많아요. 다음에 비슷한 상황이 오면 "오늘은 마이크 확인했어요" 같은 셀프 농담도 좋아요.',zh:"已經發生的事最好**一笑置之**。粉絲反而常常覺得很可愛。下次遇到類似情況，可以自嘲「今天有確認麥克風了」。"}}]},{id:"g-juttae",when:"month",title:{ko:'"줏대" 뜻',zh:"「줏대」的意思"},turns:[{q:{ko:"줏대 있게 살자 영어로 하면?",zh:"「活得有主見」用英文怎麼說？"},a:{ko:`- Live by your own compass.
- Stay true to yourself.
- Stand your ground.

프로필 문구라면 "Stay true to yourself 🐺"가 깔끔해요.`,zh:`- Live by your own compass.
- Stay true to yourself.
- Stand your ground.

當個人簡介的話，「Stay true to yourself 🐺」很俐落。`}}]}],Xt=e=>e.map(([t,s,o,r])=>({at:k(t),from:s,text:{ko:o,zh:r}})),Ie="me",ce="moon",Yh=["moon",{name:"🌙",status:{ko:".",zh:"."}}],Li={id:"moon",contactId:"moon",hidden:!0,messages:[...Xt([["2025-12-25 00:20",ce,"형","哥"],["2025-12-25 00:20",ce,"이 계정 저예요","這個帳號是我"],["2025-12-25 00:21",Ie,"...도훈이?","……道勳？"],["2025-12-25 00:21",ce,"단톡이랑 원래 계정은 다들 볼 수 있잖아요","群組和原本的帳號大家都看得到嘛"],["2025-12-25 00:22",ce,"목도리 준 거 사실 이유 있어요","送圍巾其實是有原因的"],["2025-12-25 00:24",Ie,"양말 복수라며","不是說報復襪子嗎"],["2025-12-25 00:24",ce,"그건 핑계고요","那只是藉口"],["2025-12-25 00:26",ce,"형이 맨날 우산 제 쪽으로 기울이는 거","哥每次都把傘往我這邊斜"],["2025-12-25 00:26",ce,"소파에서 자면 담요 덮어주는 거","我睡沙發就幫我蓋毯子"],["2025-12-25 00:27",ce,"다 알고 있었어요","我都知道"],["2025-12-25 00:29",ce,"좋아해요 형","我喜歡你 哥"],["2025-12-25 00:35",Ie,"...","……"],["2025-12-25 00:36",Ie,"6분 동안 답장 못 한 거 생각하느라 그런 거야","這六分鐘沒回，是因為在想"],["2025-12-25 00:37",Ie,"나도","我也是"],["2025-12-25 00:37",Ie,"꽤 오래전부터","從很久以前開始"],["2025-12-25 00:38",ce,"형 지금 방이에요?","哥現在在房間？"],["2025-12-25 00:38",Ie,"응","嗯"],["2025-12-25 00:38",ce,"베란다로 나와요","來陽台"],["2025-12-25 00:39",ce,"목도리 하고","戴著圍巾"]]),...Xt([["2026-01-01 00:00",ce,"형 새해 복 많이 받아요","哥新年快樂"],["2026-01-01 00:00",ce,"단톡에 보낸 거 말고 이게 진짜","不是群組那則，這則才是真的"],["2026-01-01 00:01",Ie,"올해도 잘 부탁해","今年也請多指教"],["2026-01-01 00:01",ce,"올해만요?","只有今年？"],["2026-01-01 00:02",Ie,"...계속","……一直"]]),...Xt([["2026-01-02 01:10",ce,"형 우리 규칙 정해요","哥我們來定規則"],["2026-01-02 01:11",ce,"1. 단톡에선 티 내지 않기","1. 在群組不要露餡"],["2026-01-02 01:11",Ie,"2. 연습실에선 프로답게","2. 在練習室要專業"],["2026-01-02 01:12",ce,"3. 구석으로 끌고 가는 건 여기서만 말하기","3. 拖去角落這種事只准在這裡說"],["2026-01-02 01:12",Ie,"ㅋㅋㅋ 그게 뭐야","ㅋㅋㅋ 那是什麼"],["2026-01-02 01:13",ce,"형 구석에서 할 말 있다고 할 때마다 심장 떨어져요","每次哥說角落有話要說，我心臟都要停了"],["2026-01-02 01:13",Ie,"4. 비밀번호는 그날로","4. 密碼用那天"],["2026-01-02 01:14",ce,"좋아요 🎄","好 🎄"]]),...Xt([["2026-01-04 02:40",ce,"형","哥"],["2026-01-04 02:40",ce,"아까 담요 덮어줄 때 저 깨어 있었어요","剛剛幫我蓋毯子的時候我是醒著的"],["2026-01-04 02:41",Ie,"...언제부터","……從什麼時候"],["2026-01-04 02:41",ce,"형이 머리 한 번 쓰다듬은 것부터요","從哥摸了一下我的頭開始"],["2026-01-04 02:42",Ie,"자라","睡覺"],["2026-01-04 02:42",ce,"형 귀 빨개진 거 보여요 여기서도","從這裡都看得到哥耳朵紅了"],["2026-01-04 02:43",Ie,"어두워서 안 보이거든","這麼暗根本看不到"]]),...Xt([["2026-01-09 23:20",ce,"형 이거 받아요","哥收下這個"]]),{at:k("2026-01-09 23:20"),from:ce,photo:{ko:"은색 반지 두 개",zh:"兩個銀色戒指"}},...Xt([["2026-01-09 23:22",Ie,"...끼고 다니면 다들 알아챌 텐데","……戴著的話大家會發現"],["2026-01-09 23:22",ce,"그래서 체인도 샀어요","所以我也買了鍊子"],["2026-01-09 23:23",ce,"목걸이로 하면 티셔츠 안에 숨겨져요","當項鍊戴的話會藏在 T 恤裡"],["2026-01-09 23:25",Ie,"무대에선 빼야 돼","上台要拿下來"],["2026-01-09 23:25",ce,"알아요. 그 외엔 계속이요","我知道。其他時候都戴著"]]),...Xt([["2026-01-10 21:30",ce,"아까 대기실 사진","剛剛休息室的照片"],["2026-01-10 21:30",ce,'"형 웃긴거" 폴더에 넣은 척했는데',"假裝放進「哥好笑的」資料夾"],["2026-01-10 21:31",ce,'사실 "내 거" 폴더예요',"其實是「我的」資料夾"],["2026-01-10 21:33",Ie,"그런 폴더 이름 짓지 마","不要取那種資料夾名字"],["2026-01-10 21:33",ce,"🌙 폴더로 바꿀게요","改成 🌙 資料夾"]]),...Xt([["2026-01-15 03:40",ce,"핫초코 맛있었어요","熱可可很好喝"],["2026-01-15 03:40",ce,"형 손 따뜻했고","哥的手很溫暖"],["2026-01-15 03:41",Ie,"이제 무서운 꿈 안 꿀 것 같아?","現在不會做惡夢了吧？"],["2026-01-15 03:42",ce,"형이 꿈에 나오면요","如果哥出現在夢裡的話"],["2026-01-15 03:42",Ie,"...빨리 자","……快睡"]]),...Xt([["2026-01-22 00:03",ce,"데뷔 2주년이고","出道兩週年"],["2026-01-22 00:03",ce,"우리는 D+29","我們是 D+29"],["2026-01-22 00:04",Ie,"세고 있었어?","你有在數？"],["2026-01-22 00:04",ce,"형은 안 세요?","哥沒在數嗎？"],["2026-01-22 00:05",Ie,"캘린더에 그날 표시해놨어","我在行事曆上標了那天"],["2026-01-22 00:05",Ie,"🎄 이것만","只標了 🎄"]]),...Xt([["2026-01-29 21:20",ce,"형 오늘 단톡에서 휴대폰만 본다고 한 거","今天在群組說你一直看手機"],["2026-01-29 21:20",ce,"여기서 하는 말이에요","這是在這裡說的"],["2026-01-29 21:21",ce,"편지 쓰는 거 다 알아요","我知道你在寫信"],["2026-01-29 21:22",Ie,"모른 척해","裝作不知道"],["2026-01-29 21:22",ce,"네 🌙","好 🌙"]])]},Gh=[{id:"moon-open",when:"open:moon",delay:1500,actions:[{t:"msg",room:"moon",text:{ko:"형",zh:"哥"}},{t:"msg",room:"moon",text:{ko:"여기 들어온 거 보니까",zh:"看你進來這裡了"}},{t:"msg",room:"moon",text:{ko:"단톡엔 다 같이 축하하는 척하고",zh:"在群組就假裝大家一起祝福"}},{t:"msg",room:"moon",text:{ko:"진짜는 여기서 해줘요",zh:"真的那句在這裡說給我聽"},gap:2600},{t:"sticker",room:"moon",sticker:"🌙"}]}],Xh=[{id:"rules",title:{ko:"볼링 규칙",zh:"保齡球規則"},at:k("2026-01-02 01:20"),body:{ko:`볼링 규칙

1. 단체 레인에선 티 내지 않기
2. 연습 때는 프로답게
3. "구석" 얘기는 🌙 에서만
4. 비번은 그날 🎄
5. 지는 사람이 라면 끓이기 (거의 나)`,zh:`保齡球規則

1. 在團體球道不要露餡
2. 練習時要專業
3. 「角落」的事只在 🌙 說
4. 密碼用那天 🎄
5. 輸的人煮泡麵（幾乎都是我）`}},{id:"novel",title:{ko:"12월 24일",zh:"12月24日"},at:k("2025-12-25 02:10"),body:{ko:`12월 24일

베란다는 생각보다 추웠다.
도훈이는 내가 목도리를 하고 나온 걸 보고 먼저 웃었다.
"진짜 하고 나왔네요."
"하고 나오라며."

입김이 하얗게 번졌다. 숙소 불은 다 꺼져 있었고, 멀리서 누가 틀어놓은 캐럴이 작게 들렸다.
도훈이는 난간에 팔을 걸치고 한참 아무 말도 안 했다. 그러다 내 목도리 끝을 손가락으로 한 번 잡아당겼다.

"형, 아까 6분 동안 뭐 생각했어요?"
"너 처음 봤을 때."
"차가워 보였다면서요."
"응. 근데 손하트를 했잖아."

도훈이가 고개를 숙였다. 귀가 빨갰다. 추워서인지, 아닌지는 묻지 않았다.

"단톡엔 비밀로 해요."
"응."
"구석으로 끌고 가는 건 계속 해도 돼요."
"...그건 왜."
"그때마다 형이 진짜로 할 말 있는 거니까."

그날 밤 우리는 목도리 하나를 반씩 나눠 둘렀다.
누가 봤다면 웃었을 것이다. 아무도 보지 않아서 다행이었다.`,zh:`12月24日

陽台比想像中冷。
道勳看到我戴著圍巾出來，先笑了。
「你真的戴出來了。」
「不是你叫我戴的嗎。」

呼出的白氣散開。宿舍的燈都關了，遠處有人放的聖誕歌小小聲地傳過來。
道勳把手臂靠在欄杆上，好一陣子都沒說話。然後用手指輕輕拉了一下我圍巾的末端。

「哥，剛剛那六分鐘在想什麼？」
「第一次見到你的時候。」
「不是說我看起來很冷淡嗎。」
「嗯。可是你比了手指愛心。」

道勳低下頭。耳朵紅紅的。是因為冷還是別的，我沒有問。

「在群組要保密喔。」
「嗯。」
「把我拖去角落這件事，可以繼續。」
「……為什麼。」
「因為每次那樣，哥都是真的有話要說。」

那天晚上，我們把一條圍巾分成兩半圍著。
要是有人看到，大概會笑吧。幸好誰都沒看到。`}}],Zh=[{id:"s1",at:k("2025-12-25 00:50"),emoji:"🧣",tint:"#3a3f5c",caption:{ko:"베란다, 목도리 하나 둘이서",zh:"陽台，兩個人一條圍巾"}},{id:"s2",at:k("2026-01-09 23:30"),emoji:"💍",tint:"#e5e7eb",caption:{ko:"체인에 끼운 반지",zh:"穿在鍊子上的戒指"}}],Jh=[{date:"2025-12-24",title:"🎄",color:"#ff375f"}],ef={id:"pl-1224",title:"1224",by:{ko:"신유",zh:"申惟"},pic:{emoji:"🌙",tint:"#3a3f5c"},songs:[{title:"Snow on the Window",artist:"Lullaby Room",dur:205},{title:"첫 만남은 계획대로 되지 않아",artist:"TWS",dur:191},{title:"Happy Birthday (Piano)",artist:"Lullaby Room",dur:142}]},_t=e=>e.map(([t,s,o,r])=>({at:k(t),from:s,text:{ko:o,zh:r}})),tf=(e,t,s)=>({at:k(e),from:t,sticker:s}),ne="me",U="moon",nf=[..._t([["2025-12-25 01:12",U,"형 손 엄청 차가웠어요","哥的手好冰"],["2025-12-25 01:12",ne,"네가 너무 오래 잡고 있어서 그래","是你握太久了"],["2025-12-25 01:13",U,"그럼 놔줄 걸 그랬나","那早知道就放開了"],["2025-12-25 01:13",ne,"아니","不要"],["2025-12-25 01:14",U,'...형 방금 "아니" 한 글자에 나 잠 다 깼어요',"……哥剛剛那一句「不要」讓我睡意全沒了"],["2025-12-25 01:16",ne,"목도리 내일도 할게","圍巾明天也會戴"],["2025-12-25 01:16",U,"내일은 실내 스케줄인데요","明天是室內行程欸"],["2025-12-25 01:17",ne,"그래도","還是要"]]),..._t([["2025-12-26 09:40",U,"형","哥"],["2025-12-26 09:40",U,"담요 밑에서 손 잡은 거","在毯子底下牽手的事"],["2025-12-26 09:41",U,"매니저형 백미러로 봤을까요","經紀人哥有從後照鏡看到嗎"],["2025-12-26 09:42",ne,"형 운전할 때 앞만 봐","哥開車只看前面"],["2025-12-26 09:42",U,"지훈이가 계속 담요 같이 덮자고 해서 식은땀 났어요","志薰一直說要一起蓋毯子，我冷汗都流出來了"],["2025-12-26 09:43",ne,'그래서 네가 "나 추워서 혼자 덮을래" 한 거야?',"所以你才說「我很冷要自己蓋」？"],["2025-12-26 09:43",U,"연기 대상 받아야 돼요","我應該要拿演技大賞"],["2025-12-26 09:44",ne,"근데 손은 왜 계속 꼼지락거려","那你的手幹嘛一直動來動去"],["2025-12-26 09:44",U,"형 손금 세고 있었어요","在數哥的掌紋"]]),..._t([["2025-12-28 01:30",U,"형 아직 안 자죠","哥還沒睡吧"],["2025-12-28 01:30",U,"모자 쓰고 마스크 쓰고 5분 뒤에 엘리베이터 앞","戴帽子戴口罩，五分鐘後電梯前"],["2025-12-28 01:31",ne,"어디 가게","要去哪"],["2025-12-28 01:31",U,"데이트요","約會"],["2025-12-28 01:31",U,"편의점까지만","只到便利商店"],["2025-12-28 02:48",U,"오늘 첫 데이트였던 거 알죠","你知道今天是第一次約會吧"],["2025-12-28 02:48",ne,"편의점 라면이 첫 데이트야?","便利商店泡麵是第一次約會？"],["2025-12-28 02:49",U,"형이 계란 두 개 넣어줬잖아요","哥幫我加了兩顆蛋啊"],["2025-12-28 02:49",U,"그럼 데이트 맞아요","那就是約會沒錯"],["2025-12-28 02:50",ne,"다음엔 진짜 데이트 하자","下次來真的約會"],["2025-12-28 02:50",U,"진짜 데이트 = 편의점 두 군데","真的約會＝兩間便利商店"],["2025-12-28 02:51",ne,"ㅋㅋㅋㅋ","ㅋㅋㅋㅋ"]]),..._t([["2025-12-31 15:20",U,"형 오늘 무대에서 신호 정해요","哥今天在舞台上定個暗號"],["2025-12-31 15:21",ne,"무슨 신호","什麼暗號"],["2025-12-31 15:21",U,'귀 만지면 "좋아해"',"摸耳朵就是「喜歡你」"],["2025-12-31 15:22",ne,"나 원래 귀 자주 만지는데","我本來就很常摸耳朵"],["2025-12-31 15:22",U,"알아요. 그래서 들킬 일 없어요","我知道。所以不會被發現"],["2025-12-31 15:23",U,"그리고 원래 형이 귀 만질 때마다 나 혼자 좋아해로 들었어요","而且以前哥每次摸耳朵，我都自己當成「喜歡你」來聽"],["2025-12-31 15:24",ne,"...언제부터","……從什麼時候開始"],["2025-12-31 15:24",U,"비밀","祕密"],["2025-12-31 22:47",U,"형 엔딩 때 귀 세 번 만졌어요","哥ending的時候摸了三次耳朵"],["2025-12-31 22:47",ne,"카메라 안 잡혔어","鏡頭沒拍到"],["2025-12-31 22:48",U,"잡혔어요. 지금 트위터에 움짤 돌아요","拍到了。現在推特上有動圖在傳"],["2025-12-31 22:48",U,'"신유 귀 만지는 버릇 귀여워" 래요',"說「申惟摸耳朵的習慣好可愛」"],["2025-12-31 22:49",ne,"버릇 맞아. 오늘부터","是習慣沒錯。從今天開始"]]),..._t([["2026-01-03 13:05",U,"형 방금 지훈이가 내 폰 화면 봤어요","哥剛剛志薰看到我手機畫面了"],["2026-01-03 13:05",ne,"뭐 봤는데","看到什麼"],["2026-01-03 13:06",U,"🌙 이거요","這個 🌙"],["2026-01-03 13:06",U,'"형 이거 누구예요? 여친?" 하길래',"他問「哥這是誰？女朋友？」"],["2026-01-03 13:07",U,'"달 사진 저장용 계정" 이라고 했어요',"我說「是存月亮照片用的帳號」"],["2026-01-03 13:07",ne,"그걸 믿었어?","他信了？"],["2026-01-03 13:08",U,'"아 감성~" 하고 갔어요',"他說「喔～好有感覺」就走了"],["2026-01-03 13:08",ne,"지훈이 착하다","志薰好單純"],["2026-01-03 13:09",U,"그래서 오늘부터 진짜 달 사진도 올려야 돼요","所以從今天起真的要開始傳月亮照片了"]]),{at:k("2026-01-03 22:10"),from:U,photo:{ko:"숙소 옥상에서 찍은 초승달",zh:"在宿舍頂樓拍的新月"}},..._t([["2026-01-03 22:10",U,"증거 사진","證據照片"],["2026-01-03 22:11",ne,"예쁘다","好漂亮"],["2026-01-03 22:11",U,"달이요 나요","是說月亮還是我"],["2026-01-03 22:12",ne,"둘 다 안 보이는데 둘 다","兩個都看不到，但兩個都是"]]),..._t([["2026-01-06 23:40",U,"형","哥"],["2026-01-06 23:41",U,"오늘 대기실에서 나 일부러 피했죠","今天在休息室你故意躲我吧"],["2026-01-06 23:44",ne,"스태프 많았잖아","工作人員很多啊"],["2026-01-06 23:45",U,"알아요","我知道"],["2026-01-06 23:45",U,"근데 원래 하던 것도 안 하니까","但你連原本會做的事都不做了"],["2026-01-06 23:46",U,"원래 형 내 머리 정리해줬잖아요. 무대 올라가기 전에","哥以前上台前都會幫我整理頭髮"],["2026-01-06 23:46",U,"오늘은 경민이 머리 해주고 나는 그냥 지나갔어요","今天你幫炅潣弄頭髮，我就直接走過去了"],["2026-01-06 23:52",ne,"조심하다 보니까 그랬어","是太小心才會這樣"],["2026-01-06 23:52",ne,"미안해","對不起"],["2026-01-06 23:55",U,"사귀기 전보다 더 멀어지면","如果比交往前還要疏遠"],["2026-01-06 23:55",U,"그게 더 티 나요","那反而更明顯"],["2026-01-07 00:20",ne,"연습실 와","來練習室"],["2026-01-07 00:20",ne,"아무도 없어","沒有人"],["2026-01-07 02:05",U,"형 아까 거울 앞에서 내 머리 정리해준 거","哥剛剛在鏡子前幫我整理頭髮"],["2026-01-07 02:05",U,"무대도 아닌데 왜 해줬어요","又不是要上台，幹嘛幫我弄"],["2026-01-07 02:06",ne,"오늘 못 한 거 채우려고","補今天沒做到的"],["2026-01-07 02:06",ne,"내일부터는 원래대로 할게. 사람 많아도","明天開始照以前那樣。人多也一樣"],["2026-01-07 02:07",U,"...형 우는 거 처음 봤어요","……第一次看到哥哭"],["2026-01-07 02:07",ne,"안 울었어","沒有哭"],["2026-01-07 02:07",U,"네 안 울었어요 🌙","好，沒有哭 🌙"]]),..._t([["2026-01-09 23:10",U,"형 목소리 아까 쉬었던데","哥剛剛聲音有點啞"],["2026-01-09 23:10",U,"방문 앞 보세요","看一下房門口"],["2026-01-09 23:12",ne,"유자차?","柚子茶？"],["2026-01-09 23:12",U,"꿀 두 스푼 넣었어요","加了兩匙蜂蜜"],["2026-01-09 23:13",U,"노크하면 들킬까 봐 그냥 두고 감","怕敲門被發現，放了就走"],["2026-01-09 23:13",ne,'포스트잇에 "🌙" 이것만 쓰면 어떡해 ㅋㅋ',"便利貼上只寫「🌙」是怎樣 ㅋㅋ"],["2026-01-09 23:14",U,"형만 알아보면 돼요","只要哥看得懂就好"],["2026-01-09 23:15",ne,"포스트잇 지갑에 넣었다","便利貼放進錢包了"]]),..._t([["2026-01-12 23:30",U,"형 방 몇 층이에요","哥房間幾樓"],["2026-01-12 23:30",ne,"18층","18樓"],["2026-01-12 23:31",U,"저 12층이에요","我12樓"],["2026-01-12 23:31",U,"6층 차이","差6層樓"],["2026-01-12 23:32",ne,"창문 밖 봐","看窗外"]]),{at:k("2026-01-12 23:33"),from:ne,photo:{ko:"18층 창밖 도쿄 야경",zh:"18樓窗外的東京夜景"}},{at:k("2026-01-12 23:34"),from:U,photo:{ko:"12층 창밖 같은 도쿄 타워",zh:"12樓窗外同一座東京鐵塔"}},..._t([["2026-01-12 23:34",U,"같은 거 보고 있어요","我們在看一樣的東西"],["2026-01-12 23:35",ne,"이걸로 된 걸로 하자","就當作這樣也算見面了"],["2026-01-12 23:35",U,"안 돼요. 내일 아침 조식 옆자리","不行。明天早餐坐旁邊"],["2026-01-13 08:20",U,"형 계란말이 제 접시에 몰래 올린 거 다 봤어요","哥偷偷把玉子燒放到我盤子裡，我都看到了"],["2026-01-13 08:20",ne,"경민이도 줬어","我也給炅潣了"],["2026-01-13 08:21",U,"경민이는 한 개, 나는 세 개","炅潣一個，我三個"]]),..._t([["2026-01-19 22:15",U,'형 오늘 "멤버 중 제일 편한 사람" 질문',"哥今天那個「成員中最自在的人」的問題"],["2026-01-19 22:15",U,"나 형 이름 말하고 형은 나 말했잖아요","我說了哥的名字，哥說了我"],["2026-01-19 22:16",ne,"그거 원래 대답이잖아. 작년에도 그랬어","那本來就是標準答案。去年也是這樣"],["2026-01-19 22:16",U,"근데 오늘은 형이 대답하고 나서 귀 만졌어요","但今天哥回答完之後摸了耳朵"],["2026-01-19 22:17",ne,"...봤어?","……看到了？"],["2026-01-19 22:17",U,"저 형만 봐요 무대에서","我在台上只看哥"],["2026-01-19 22:18",ne,"그러다 동선 틀린다","這樣會走錯走位"],["2026-01-19 22:18",U,"오늘 안 틀렸어요. 형이 내 쪽으로 와서","今天沒錯。因為哥往我這邊走"]]),..._t([["2026-01-27 02:10",U,"형 자요?","哥睡了嗎？"],["2026-01-27 02:11",ne,"아니","沒"],["2026-01-27 02:12",U,"가끔 무서워요","有時候會怕"],["2026-01-27 02:12",U,"들키면 어떡하지. 우리 팀은","如果被發現怎麼辦。我們團怎麼辦"],["2026-01-27 02:13",U,"형이 리더라서 형이 다 떠안을까 봐","怕哥因為是隊長，什麼都自己扛"],["2026-01-27 02:16",ne,"도훈아","道勳"],["2026-01-27 02:16",ne,"나 이거 시작할 때 다 생각했어","開始這段的時候我全都想過了"],["2026-01-27 02:17",ne,"그래도 너였어","想完還是你"],["2026-01-27 02:17",ne,"무서운 건 반반 하자. 리더라서가 아니라 네 거니까","害怕的部分我們一人一半。不是因為我是隊長，是因為我是你的"],["2026-01-27 02:19",U,"형 지금 그거 원래 계정이었으면 캡처해서 액자 했어요","哥這段如果是用原本帳號說的，我會截圖裱框"],["2026-01-27 02:19",ne,"여기서도 캡처 되잖아","這裡也能截圖啊"],["2026-01-27 02:20",U,"했어요","截了"]]),tf("2026-01-27 02:20",U,"🌙"),..._t([["2026-01-28 20:30",U,"형 요즘 형 검색 기록 안 지워요?","哥最近不刪搜尋紀錄嗎？"],["2026-01-28 20:31",ne,"왜","為什麼這樣問"],["2026-01-28 20:31",U,'아까 형 폰 잠깐 빌렸을 때 "볼링공 각인" 떠 있었어요',"剛剛借哥手機的時候跳出「保齡球 刻字」"],["2026-01-28 20:32",ne,"...못 본 걸로","……當作沒看到"],["2026-01-28 20:32",U,"이미 기대 중이에요","已經在期待了"],["2026-01-28 20:33",ne,"각인 문구는 절대 모를 거다","刻的字你絕對猜不到"],["2026-01-28 20:33",U,'"🎄" 이거죠',"是「🎄」吧"],["2026-01-28 20:34",ne,"...","……"],["2026-01-28 20:34",U,"ㅋㅋㅋㅋㅋ 맞았다","ㅋㅋㅋㅋㅋ 猜中了"]])],sf=[{id:"n-s1",title:{ko:"우리만 아는 계절 1 — 우산",zh:"只有我們知道的季節 1 — 雨傘"},at:k("2025-07-02 01:40"),body:{ko:`우리만 아는 계절 1 — 우산

장마가 시작된 날이었다. 우산은 하나였고, 우리는 둘이었다.

"형 어깨 다 젖었어요."
"괜찮아."
도훈이는 우산 손잡이를 빼앗아 가더니 내 쪽으로 기울였다. 그러자 이번엔 도훈이 어깨가 젖기 시작했다.
우리는 숙소까지 걷는 내내 우산을 서로 쪽으로 밀었다. 결국 둘 다 반쯤 젖었다.

엘리베이터 거울에 비친 우리는 꼴이 웃겼다.
도훈이가 내 앞머리에서 물방울을 털어주다가 손을 멈췄다.
"형."
"응."
"...아니에요."

그 '아니에요'가 뭐였는지, 나는 그날 밤 내내 생각했다.
우산을 내 쪽으로 기울이는 건 내가 형이라서라고, 나는 그렇게 정리했다.
틀린 정리라는 걸 알면서.`,zh:`只有我們知道的季節 1 — 雨傘

那天是梅雨季的第一天。傘只有一把，而我們有兩個人。

「哥肩膀都濕了。」
「沒關係。」
道勳把傘柄搶過去，往我這邊斜。結果這次換道勳的肩膀開始濕。
我們走回宿舍的一路上，一直把傘往對方那邊推。最後兩個人都濕了一半。

電梯鏡子裡的我們看起來很好笑。
道勳幫我撥掉瀏海上的水珠，手忽然停住。
「哥。」
「嗯。」
「……沒事。」

那句「沒事」到底是什麼，我想了整整一晚。
他把傘往我這邊斜，是因為我是哥哥——我是這樣整理的。
明知道那是錯的整理。`}},{id:"n-s2",title:{ko:"우리만 아는 계절 2 — 소파",zh:"只有我們知道的季節 2 — 沙發"},at:k("2025-10-03 03:15"),body:{ko:`우리만 아는 계절 2 — 소파

새벽 세 시, 거실 불이 켜져 있었다.
도훈이가 소파에서 휴대폰을 든 채로 자고 있었다. 화면에는 우리 연습 영상이 멈춰 있었다. 내 파트에서.

담요를 가져와서 덮어줬다. 손이 이상하게 떨렸다.
잠든 얼굴은 데뷔 전이랑 똑같았다. 연습생 때 처음 본 그 얼굴.

"...좋아해."
소리가 났는지 안 났는지 모를 만큼 작게 말했다.
그러고는 도망치듯 방으로 들어갔다.

다음 날 아침, 도훈이는 아무렇지 않게 "형 담요 고마워요"라고 했다.
그래서 나는 안심했다. 못 들었구나.

석 달 뒤에야 알았다.
그날 도훈이는 자고 있지 않았다는 걸.
담요 밑에서 숨을 참고 있었다는 걸.`,zh:`只有我們知道的季節 2 — 沙發

凌晨三點，客廳的燈亮著。
道勳拿著手機在沙發上睡著了。畫面停在我們的練習影片上，停在我的段落。

我拿了毯子幫他蓋上。手莫名地在抖。
他睡著的臉和出道前一模一樣。練習生時期第一次見到的那張臉。

「……我喜歡你。」
小聲到我自己都不確定有沒有發出聲音。
說完就像逃跑一樣回了房間。

隔天早上，道勳若無其事地說「哥，謝謝你的毯子」。
所以我鬆了一口氣。他沒聽到。

三個月後我才知道。
那天道勳根本沒有睡著。
他在毯子底下憋著氣。`}},{id:"n-s3",title:{ko:"우리만 아는 계절 3 — 귀",zh:"只有我們知道的季節 3 — 耳朵"},at:k("2026-01-01 03:00"),body:{ko:`우리만 아는 계절 3 — 귀

연말 무대는 조명이 뜨거웠다.
엔딩 포즈를 잡고 숨을 고르는데, 대각선 앞에 도훈이가 보였다.
도훈이는 카메라를 보고 있었다. 프로처럼.
그런데 인이어를 고치는 척 왼쪽 귀를 한 번 만졌다.

좋아해.

나는 웃음이 나오는 걸 참느라 입술을 깨물었다.
그리고 나도 귀를 만졌다. 한 번, 두 번, 세 번.
카메라에 잡히든 말든.

대기실로 돌아오자 경민이가 말했다.
"형 오늘 귀 왜 이렇게 만져요? 인이어 고장 났어요?"
"응, 좀."
도훈이가 물을 마시다가 사레가 들렸다.

새해가 되기 10분 전이었다.
나는 올해 마지막으로, 그리고 내년 처음으로 같은 사람을 생각했다.`,zh:`只有我們知道的季節 3 — 耳朵

年末舞台的燈光很燙。
擺好ending姿勢調整呼吸時，我看到斜前方的道勳。
道勳看著鏡頭，非常專業。
但他假裝調整耳返，摸了一下左耳。

喜歡你。

我為了忍住笑咬住嘴唇。
然後我也摸了耳朵。一次、兩次、三次。
不管鏡頭有沒有拍到。

回到休息室，炅潣說：
「哥今天怎麼一直摸耳朵？耳返壞了嗎？」
「嗯，有一點。」
道勳喝水喝到嗆到。

那是新年前十分鐘。
我在今年的最後、也在明年的最初，想著同一個人。`}},{id:"n-s4",title:{ko:"우리만 아는 계절 4 — 거울",zh:"只有我們知道的季節 4 — 鏡子"},at:k("2026-01-07 03:30"),body:{ko:`우리만 아는 계절 4 — 거울

조심하는 것과 멀어지는 것은 다르다.
그걸 오늘 도훈이한테 배웠다.

새벽 연습실에는 거울만 가득했다. 불은 반만 켰다.
도훈이는 문 앞에 서서 들어오지도 않고 나를 봤다.
"화 안 났어요. 그냥 서운했어요."
화난 것보다 그 말이 더 아팠다.

나는 도훈이를 거울 앞에 세웠다. 늘 무대 오르기 전에 하던 것처럼.
앞머리를 손가락으로 쓸어 넘기고, 옆머리를 정리하고, 옷깃을 폈다.
거울 속 도훈이 눈이 빨개졌다. 아니, 내 눈이었나.

"형 왜 울어요."
"안 울어."
"네."

도훈이가 거울 속의 나를 보며 말했다.
"형, 우리 숨기는 건 사랑이지 거리가 아니에요."
동생한테 혼나는 리더라니.
나는 웃으면서 한 번 더 앞머리를 넘겨줬다.
내일도, 사람이 많아도, 이렇게 해 줄 것이다.`,zh:`只有我們知道的季節 4 — 鏡子

小心翼翼和漸行漸遠是不一樣的。
這是今天道勳教我的。

凌晨的練習室裡只有滿滿的鏡子。燈只開了一半。
道勳站在門口，沒有進來，只是看著我。
「我沒有生氣。只是覺得難過。」
那句話比生氣還要痛。

我讓道勳站到鏡子前。就像每次上台前那樣。
用手指把瀏海往後撥，整理鬢角，把衣領拉平。
鏡子裡道勳的眼睛紅了。不對，是我的眼睛嗎。

「哥為什麼哭。」
「沒哭。」
「好。」

道勳看著鏡子裡的我說：
「哥，我們要藏的是愛，不是距離。」
被弟弟訓話的隊長。
我笑著又幫他撥了一次瀏海。
明天也是，就算人很多，我也會這樣做。`}},{id:"n-s5",title:{ko:"우리만 아는 계절 5 — 6층",zh:"只有我們知道的季節 5 — 六層樓"},at:k("2026-01-13 00:40"),body:{ko:`우리만 아는 계절 5 — 6층

도쿄의 호텔은 조용했다. 방 배정표에서 우리 이름은 여섯 층이나 떨어져 있었다.

창문에 이마를 대고 아래를 내려다봤다. 12층 어딘가에 도훈이가 있다.
휴대폰이 울렸다. 사진 한 장. 같은 도쿄 타워, 조금 더 크게.

여섯 층 아래에서 찍은 사진이 여섯 층 위의 나보다 타워에 더 가까웠다.
그게 이상하게 좋았다. 네가 나보다 조금 더 가까운 곳에서 같은 걸 보고 있다는 게.

다음 날 아침 조식.
나는 계란말이를 경민이 접시에 한 개, 도훈이 접시에 세 개 올렸다.
공평하지 않다는 건 알았다.
사랑은 원래 공평하지 않은 거라고, 커피를 마시며 생각했다.`,zh:`只有我們知道的季節 5 — 六層樓

東京的飯店很安靜。房間分配表上，我們的名字差了整整六層樓。

我把額頭貼在窗上往下看。12樓的某個地方有道勳。
手機響了。一張照片。同一座東京鐵塔，大了一點。

從六層樓下拍的照片，比六層樓上的我更靠近鐵塔。
那莫名讓我很開心。你在比我近一點的地方，看著同樣的東西。

隔天早餐。
我在炅潣盤子裡放了一個玉子燒，在道勳盤子裡放了三個。
我知道這不公平。
愛本來就是不公平的——我一邊喝咖啡一邊這麼想。`}},{id:"n-s6",title:{ko:"우리만 아는 계절 6 — 반반",zh:"只有我們知道的季節 6 — 一人一半"},at:k("2026-01-27 03:00"),body:{ko:`우리만 아는 계절 6 — 반반

"가끔 무서워요."
새벽 두 시에 도착한 메시지는 그게 다였다.

나는 답장을 쓰다 지우고, 쓰다 지웠다.
리더로서 할 말은 많았다. 회사, 팬들, 멤버들, 앞으로의 일정.
그런데 그 말들은 하나도 도훈이를 안심시키지 못할 것 같았다.

그래서 리더 말고, 그냥 신유로 썼다.
"무서운 건 반반 하자."

보내고 나서 베란다에 나갔다. 1월의 새벽은 칼처럼 차가웠다.
잠시 뒤 옆 창문이 열렸다. 도훈이가 목도리를 하고 나와 있었다. 크리스마스에 나한테 준 것과 같은 색.
우리는 아무 말도 하지 않고 같은 하늘을 봤다.
달은 없었다. 대신 🌙 이 내 휴대폰 안에 있었다.

사흘 뒤면 도훈이 생일이다.
볼링공에 새긴 글자는 이미 들켰지만, 편지는 아직이다.
편지에는 이 말을 쓸 생각이다.
너를 좋아하는 일은 하나도 무섭지 않다고.`,zh:`只有我們知道的季節 6 — 一人一半

「有時候會怕。」
凌晨兩點收到的訊息只有這一句。

我寫了回覆又刪掉，寫了又刪。
以隊長的身分，能說的話很多。公司、粉絲、成員、之後的行程。
但那些話，好像沒有一句能讓道勳安心。

所以我不用隊長的身分，只用申惟的身分寫。
「害怕的部分我們一人一半。」

送出後我走到陽台。一月的凌晨冷得像刀。
過了一會兒，旁邊的窗戶打開了。道勳圍著圍巾走出來。和聖誕節送我的是同一個顏色。
我們什麼話都沒說，看著同一片天空。
天上沒有月亮。取而代之的是，🌙 在我的手機裡。

再三天就是道勳的生日。
保齡球上刻的字已經被猜到了，但信還沒有。
我打算在信裡寫這句話：
喜歡你這件事，一點也不可怕。`}},{id:"n-s0",title:{ko:"보내지 못한 말들",zh:"沒能傳出去的話"},at:k("2025-12-20 02:00"),body:{ko:`보내지 못한 말들 (고백 전에 쓰고 안 보낸 것들)

3/14 연습실. 손하트 같이 한 거 나만 기억하나
5/2 오늘 네가 웃을 때 나도 모르게 따라 웃음. 경민이가 "형 왜 웃어요" 함
7/2 우산. 너 어깨 젖은 거 신경 쓰여서 잠 못 잠
8/15 바다 촬영. 네가 파도 보고 있을 때 나는 너 봤다
10/3 소파. 들었으면 어떡하지. 못 들었겠지
11/7 내 생일. 0시에 네가 3분 늦게 보낸 거. 3분 동안 기다린 거 너는 모르지
12/20 목도리 사러 갔다가 양말 샀다. 바보
12/24 ← 이 날은 꼭 말할 거다`,zh:`沒能傳出去的話（告白前寫了卻沒傳的）

3/14 練習室。一起比手指愛心的事，只有我記得嗎
5/2 今天你笑的時候我也不自覺跟著笑。炅潣問「哥你笑什麼」
7/2 雨傘。在意你肩膀濕掉，睡不著
8/15 海邊拍攝。你看著海浪的時候，我在看你
10/3 沙發。萬一被聽到怎麼辦。應該沒聽到吧
11/7 我的生日。零點你晚了三分鐘才傳。那三分鐘我在等，你不知道吧
12/20 去買圍巾結果買了襪子。笨蛋
12/24 ← 這一天一定要說`}}],of=[{id:"sx1",at:k("2025-12-28 02:20"),emoji:"🍜",tint:"#2b2f45",caption:{ko:"첫 데이트: 편의점 라면, 계란 두 개",zh:"第一次約會：便利商店泡麵，兩顆蛋"}},{id:"sx2",at:k("2026-01-03 22:10"),emoji:"🌙",tint:"#1c1f33",caption:{ko:"도훈이가 보낸 초승달",zh:"道勳傳來的新月"}},{id:"sx3",at:k("2026-01-09 23:14"),emoji:"🍋",tint:"#f6e7a8",caption:{ko:"방문 앞 유자차와 🌙 포스트잇",zh:"房門口的柚子茶和 🌙 便利貼"}},{id:"sx4",at:k("2026-01-12 23:33"),emoji:"🗼",tint:"#2a2140",caption:{ko:"18층에서 본 도쿄 타워",zh:"從18樓看到的東京鐵塔"}},{id:"sx5",at:k("2026-01-27 02:30"),emoji:"🧣",tint:"#7a2e3b",caption:{ko:"옆 창문, 같은 색 목도리",zh:"隔壁窗戶，同色的圍巾"}}],rf=[{date:"2025-12-28",title:{ko:"🍜",zh:"🍜"},color:"#ff375f"},{date:"2026-01-24",title:{ko:"🎄 D+31",zh:"🎄 D+31"},color:"#ff375f"}],lf=[{id:"sd1",by:"yu_diary",text:{ko:"귀 만지는 버릇 생김. 이유는 비밀",zh:"養成了摸耳朵的習慣。原因保密"},at:k("2026-01-01 00:30"),likes:0,rts:0,replies:0},{id:"sd2",by:"yu_diary",text:{ko:"조심하는 거랑 멀어지는 건 다르다. 오늘 배움",zh:"小心和疏遠是不一樣的。今天學到了"},at:k("2026-01-07 03:10"),likes:0,rts:0,replies:0},{id:"sd3",by:"yu_diary",text:{ko:"지갑에 포스트잇 한 장 추가",zh:"錢包裡多了一張便利貼"},at:k("2026-01-09 23:20"),likes:0,rts:0,replies:0},{id:"sd4",by:"yu_diary",text:{ko:"6층 차이. 같은 타워",zh:"差六層樓。同一座鐵塔"},at:k("2026-01-12 23:50"),likes:0,rts:0,replies:0},{id:"sd5",by:"yu_diary",text:{ko:"반반",zh:"一人一半"},at:k("2026-01-27 02:40"),likes:0,rts:0,replies:0}],af=[{id:"g-sorry",when:"month",title:{ko:"서운하게 한 사람에게 사과하기",zh:"向被我弄難過的人道歉"},turns:[{q:{ko:"소중한 사람을 조심하느라 일부러 거리를 뒀는데 상대가 서운해했어. 어떻게 사과해?",zh:"為了小心，我故意跟重要的人保持距離，結果對方很難過。要怎麼道歉？"},a:{ko:`마음이 많이 쓰이셨겠어요. 이런 상황에서는 이렇게 해 보세요.

1. **이유보다 마음을 먼저**: "조심하느라 그랬어"보다 "서운하게 해서 미안해"가 먼저 나오면 좋아요.
2. **구체적으로 인정하기**: 어떤 행동이 서운했는지 상대의 말을 그대로 받아 주세요.
3. **앞으로의 약속**: 거리를 두는 대신 "이건 계속할게"라고 지킬 수 있는 작은 행동을 정해 보세요.

조심하는 것과 멀어지는 것은 상대에게 다르게 느껴질 수 있어요.`,zh:`你一定很在意吧。這種情況可以這樣做：

1. **先講心情再講理由**：比起「我是因為小心」，先說「讓你難過了，對不起」會更好。
2. **具體承認**：對方因為哪個行為難過，就照著對方的話接住它。
3. **之後的約定**：與其保持距離，不如約定一個做得到的小動作：「這個我會繼續做」。

小心和疏遠，對對方來說感受可能完全不同。`}},{q:{ko:"예전에 하던 걸 다시 해주면 될까? 머리 정리해주는 거 같은",zh:"把以前常做的事重新做給他就可以嗎？像是幫他整理頭髮"},a:{ko:'아주 좋은 방법이에요. 익숙한 행동이 돌아오면 **"우리 사이는 그대로야"**라는 메시지가 말보다 확실하게 전해져요. 오늘 한 번, 그리고 내일 사람들 앞에서도 한 번 해 주세요.',zh:"非常好的方法。熟悉的動作回來了，**「我們之間沒有變」**這個訊息會比話語更確實地傳達。今天做一次，明天在大家面前也再做一次吧。"}}]},{id:"g-quiet",when:"month",title:{ko:"티 안 나게 챙겨주는 법",zh:"不著痕跡地照顧人的方法"},turns:[{q:{ko:"단체 생활 중에 한 사람만 티 안 나게 챙겨주는 방법 있어?",zh:"團體生活中，有沒有不著痕跡只照顧一個人的方法？"},a:{ko:`몇 가지 아이디어예요.

- **모두에게 하되 한 사람에게 조금 더**: 간식을 다 같이 나누고, 그 사람 것만 좋아하는 맛으로.
- **둘만 아는 표식**: 포스트잇에 이름 대신 작은 기호 하나.
- **루틴 활용**: 원래 하던 일(정리, 물 챙기기)에 자연스럽게 섞기.

가장 중요한 건, 상대가 **알아채 주는 것**이에요. 티는 안 나도 그 사람에게는 보여야 해요.`,zh:`給你幾個點子：

- **對大家都做，但對那個人多一點**：零食大家一起分，只有他那份是他喜歡的口味。
- **只有兩人懂的記號**：便利貼上不寫名字，只畫一個小符號。
- **利用日常習慣**：自然地混進本來就會做的事（整理、遞水）。

最重要的是，對方要**察覺得到**。不著痕跡，但對那個人來說要看得見。`}}]}],zn=e=>e.map(([t,s,o,r])=>({at:k(t),from:s,text:{ko:o,zh:r}})),he="me",Le={id:"shinyu",owner:{name:{ko:"신유",zh:"申惟"},device:{ko:"신유의 iPhone",zh:"申惟的 iPhone"},status:{ko:"42 🩵",zh:"42 🩵"}},accent:"#7fb4ff",wallpaper:"radial-gradient(110% 65% at 10% 0%, #e3eeff 0%, transparent 55%), radial-gradient(90% 60% at 100% 30%, #8fb5ff 0%, transparent 60%), radial-gradient(120% 70% at 20% 85%, #3d5fc4 0%, transparent 65%), radial-gradient(100% 60% at 100% 100%, #1a2457 0%, transparent 70%), linear-gradient(165deg, #b9d3ff, #4a68c2 55%, #1d2a63)",lockEmoji:"🩵",passcode:"0130",startAt:k("2026-01-29 23:58"),wifi:"TWS_42_5G",devices:[{ko:"신유의 AirPods",zh:"申惟的 AirPods"},{ko:"숙소 거실 TV",zh:"宿舍客廳電視"}],lockNotices:[{app:"kakao",icon:"💬",title:{ko:"몰래 준비방 (도훈 X) · 경민이",zh:"秘密準備群（道勳不在）· 炅潣"},body:{ko:"형 폰 비번 아직도 그거예요? 도훈이형 생일ㅋㅋ 너무 티나요",zh:"哥手機密碼還是那個嗎？道勳哥的生日ㅋㅋ 也太明顯了吧"},time:{ko:"1분 전",zh:"1 分鐘前"}},{app:"calendar",icon:"📅",title:{ko:"캘린더 · 내일",zh:"行事曆 · 明天"},body:{ko:"🎂 도훈이 생일 (1월 30일)",zh:"🎂 道勳生日（1月30日）"},time:{ko:"오후 9:00",zh:"下午9:00"}}],contacts:{dohoon:{name:{ko:"도훈이🐺",zh:"道勳🐺"},status:{ko:"줏대 있게 살자",zh:"活得有主見一點"},phone:"010-0130-2005"},kyungmin:{name:{ko:"경민이",zh:"炅潣"},phone:"010-2007-0416"},jihoon:{name:{ko:"지훈이",zh:"志薰"},phone:"010-2006-0328"},youngjae:{name:{ko:"영재",zh:"英宰"},phone:"010-2005-0531"},hanjin:{name:{ko:"한진이",zh:"韓振"},phone:"010-2006-0102"},mom:{name:{ko:"엄마",zh:"媽媽"},phone:"010-5123-0871"},noona:{name:{ko:"큰누나",zh:"大姊"},phone:"010-4402-7719"},manager:{name:{ko:"매니저형",zh:"經紀人哥"},phone:"010-3392-1180"},bowling:{name:{ko:"스트라이크 볼링장",zh:"Strike 保齡球館"}}},rooms:[{id:"dohoon",contactId:"dohoon",messages:[...zn([["2025-12-14 22:10","dohoon","형 오늘 볼링 몇 점이었죠","哥今天保齡球幾分來著"],["2025-12-14 22:10",he,"몰라","不知道"],["2025-12-14 22:11","dohoon","87점ㅋㅋㅋㅋㅋ","87分ㅋㅋㅋㅋㅋ"],["2025-12-14 22:11","dohoon","나 152","我152"],["2025-12-14 22:12",he,"오늘 레인이 이상했어","今天球道怪怪的"],["2025-12-14 22:12","dohoon","형 레인 탓 세 번째예요","哥這是第三次怪球道了"],["2025-12-14 22:13",he,"다음 주에 다시 해","下禮拜再比一次"],["2025-12-14 22:13","dohoon","콜 🐺","來啊 🐺"]]),{at:k("2025-12-20 01:12"),from:"dohoon",photo:{ko:"연습생 때 빌려 신었던 신발 두 켤레",zh:"練習生時借來穿的兩雙鞋"}},...zn([["2025-12-20 01:12","dohoon","형 이거 기억나요?ㅋㅋㅋㅋ","哥記得這個嗎？ㅋㅋㅋㅋ"],["2025-12-20 01:13",he,"이거 어디서 났어ㅋㅋㅋㅋㅋ","你哪來的這張ㅋㅋㅋㅋㅋ"],["2025-12-20 01:13","dohoon","앨범 정리하다가 나옴","整理相簿翻到的"],["2025-12-20 01:14",he,"그때 왜 그렇게 웃겼지","那時候怎麼會那麼好笑"],["2025-12-20 01:14","dohoon","형이 신발 바꿔 신자고 했잖아요","是哥說要換鞋穿的欸"],["2025-12-20 01:15",he,"아니 니가 먼저 했어","明明是你先的"],["2025-12-20 01:15","dohoon","아닌데요","才不是"],["2025-12-20 01:16",he,"아 맞다 그날 우리 학교에서 사진 엄청 찍었는데","啊對 那天我們在學校拍了超多照片"],["2025-12-20 01:16","dohoon","여고생들처럼ㅋㅋㅋ","像女高中生一樣ㅋㅋㅋ"],["2025-12-20 01:17",he,"빨리 자 내일 7시 기상","快睡 明天七點起床"],["2025-12-20 01:17","dohoon","넹","嗯嗯"],["2025-12-27 15:40",he,"도훈아 잠깐 구석으로 와봐","道勳啊 過來角落一下"],["2025-12-27 15:40","dohoon","또요?","又來？"],["2025-12-27 15:41","dohoon","형 그거 살롱드립 이후로 금지라니까요","哥那個在上完沙龍之後就禁止了啦"],["2025-12-27 15:41",he,"진짜 할 말 있어서 그래","是真的有話要說"],["2025-12-27 15:42","dohoon","...어깨동무 하지 마요","……不准勾肩膀喔"],["2025-12-27 15:42",he,"알겠어","知道了"],["2025-12-27 15:50","dohoon","했잖아요","你明明勾了"],["2025-12-27 15:50",he,"ㅋㅋㅋㅋㅋㅋ","ㅋㅋㅋㅋㅋㅋ"],["2026-01-04 02:31",he,"너 또 소파에서 자지","你又在沙發上睡了吧"],["2026-01-04 02:31",he,"방 가서 자","回房間睡"],["2026-01-04 07:02","dohoon","형이 어떻게 알아요","哥怎麼知道的"],["2026-01-04 07:02","dohoon","그리고 이 담요 뭐예요","還有這條毯子是怎樣"],["2026-01-04 07:05",he,"감기 걸리면 나만 고생해","你感冒的話辛苦的是我"],["2026-01-04 07:05","dohoon","형이 왜 고생해요ㅋㅋ","為什麼是哥辛苦ㅋㅋ"],["2026-01-04 07:06",he,"리더니까","因為我是隊長"],["2026-01-04 07:06","dohoon","그 말 진짜 자주 쓴다","這句話哥真的很常用欸"]]),{at:k("2026-01-10 21:20"),from:"dohoon",photo:{ko:"대기실 소파에서 졸고 있는 신유 (도촬)",zh:"在休息室沙發上打瞌睡的申惟（偷拍）"}},...zn([["2026-01-10 21:20","dohoon","형 아까 대기실에서 졸던 거","哥剛剛在休息室打瞌睡的樣子"],["2026-01-10 21:21",he,"지워라","刪掉"],["2026-01-10 21:21","dohoon","싫은데요","不要"],["2026-01-10 21:21","dohoon",'이미 앨범에 "형 웃긴거" 폴더 만듦',"已經在相簿建了「哥好笑的」資料夾"],["2026-01-10 21:22",he,"그 폴더 몇 장인데","那資料夾有幾張"],["2026-01-10 21:22","dohoon","비밀","祕密"],["2026-01-10 21:23",he,"...너 오늘 마이크 켜진 거 모르고 노래한 거 나도 찍었어","……你今天不知道麥克風開著還在唱歌，我也錄下來了"],["2026-01-10 21:23","dohoon","형 그건 반칙이에요","哥那個犯規"],["2026-01-10 21:23","dohoon","지워요 진짜로","真的刪掉"],["2026-01-10 21:24",he,"싫은데요","不要"],["2026-01-18 14:02","dohoon","형 두쫀쿠 먹어봤어요?","哥吃過杜拜Q餅嗎？"],["2026-01-18 14:05",he,"그게 뭔데","那是什麼"],["2026-01-18 14:05","dohoon","두바이 쫀득 쿠키요","杜拜 Q 彈餅乾啊"],["2026-01-18 14:06","dohoon","요즘 다들 줄 서서 산대요","最近大家都排隊在買"],["2026-01-18 14:06","dohoon","먹어보고 싶다","好想吃吃看"],["2026-01-18 14:10",he,"그래","是喔"],["2026-01-18 14:10","dohoon","반응이 왜 그래요","你那什麼反應"],["2026-01-22 00:01",he,"데뷔 2주년 축하해 도훈아","出道兩週年快樂 道勳啊"],["2026-01-22 00:01","dohoon","형도요!!","哥也是!!"],["2026-01-22 00:02","dohoon","형 12시 땡 하자마자 보냈네","哥十二點一到就傳了欸"],["2026-01-22 00:02",he,"원래 그래","本來就這樣"],["2026-01-22 00:03","dohoon","알아요 🐺","我知道 🐺"],["2026-01-29 19:30","dohoon","형 내일 스케줄 몇 시죠","哥明天行程幾點"],["2026-01-29 19:41",he,"10시 출발","十點出發"],["2026-01-29 19:41","dohoon","넹","好"],["2026-01-29 21:15","dohoon","형 근데 오늘 왜 계속 휴대폰만 봐요","哥你今天怎麼一直在看手機"],["2026-01-29 21:18",he,"아무것도 아니야","沒什麼"],["2026-01-29 21:18","dohoon","수상하다","可疑"],["2026-01-29 21:19",he,"빨리 자라","快去睡"],["2026-01-29 22:41","dohoon","형도요","哥也是"]])]},{id:"secret",group:{name:{ko:"몰래 준비방 (도훈 X)",zh:"秘密準備群（道勳不在）"},members:["youngjae","hanjin","jihoon","kyungmin"]},unread:2,messages:zn([["2026-01-25 20:00",he,"30일 0시에 도훈이 서프라이즈 할 사람","30號零點要給道勳驚喜的人"],["2026-01-25 20:00","kyungmin","저요!!","我!!"],["2026-01-25 20:01","hanjin","저도요 🎂","我也是 🎂"],["2026-01-25 20:01","youngjae","케이크는 누가 사","蛋糕誰買"],["2026-01-25 20:02",he,"내가 살게","我買"],["2026-01-25 20:02","jihoon","형 도훈이형 좋아하는 맛 알아요?","哥知道道勳哥喜歡什麼口味嗎？"],["2026-01-25 20:03",he,"당연하지","當然"],["2026-01-25 20:03","kyungmin","오 바로 대답함","喔秒答"],["2026-01-29 18:20","hanjin","케이크 냉장고 맨 아래칸에 숨겼어요","蛋糕藏在冰箱最下層了"],["2026-01-29 18:20","jihoon","도훈이형 냉장고 열면 끝","道勳哥一開冰箱就完了"],["2026-01-29 18:21","youngjae","그래서 내가 위에 김치통 올려놨어","所以我在上面放了泡菜盒"],["2026-01-29 23:40","kyungmin","형 편지는 다 썼어요?","哥信寫完了嗎？"],["2026-01-29 23:41",he,"쓰는 중","在寫"],["2026-01-29 23:41","kyungmin","아직도요??","還在寫??"],["2026-01-29 23:57","kyungmin","형 폰 비번 아직도 그거예요? 도훈이형 생일ㅋㅋ 너무 티나요","哥手機密碼還是那個嗎？道勳哥的生日ㅋㅋ 也太明顯了吧"],["2026-01-29 23:57","jihoon","도훈이형이 맨날 형 폰 열어보는 이유가 있었네","難怪道勳哥每天都能打開哥的手機"]])},{id:"tws",group:{name:"TWS 🩵",members:["dohoon","youngjae","hanjin","jihoon","kyungmin"]},messages:zn([["2026-01-29 22:02","dohoon","다들 내일 늦잠 금지","大家明天不准睡過頭"],["2026-01-29 22:02","jihoon","도훈이형이나요","道勳哥你自己吧"],["2026-01-29 22:03","hanjin","ㅋㅋㅋㅋㅋㅋ","ㅋㅋㅋㅋㅋㅋ"],["2026-01-29 22:04","youngjae","난 이미 누움","我已經躺平了"],["2026-01-29 22:05",he,"10시 출발이다","十點出發"],["2026-01-29 22:05","kyungmin","넵 리더님","是的隊長"],["2026-01-29 22:06","dohoon","근데 왜 오늘 다들 일찍 자요?","可是今天大家怎麼都這麼早睡？"],["2026-01-29 22:06","dohoon","수상한데","好可疑"],["2026-01-29 22:09","youngjae","피곤해서","因為很累"]])},{id:"noona",contactId:"noona",messages:zn([["2026-01-28 19:12","noona","도훈이 생일 이번 주지?","道勳生日是這禮拜吧？"],["2026-01-28 19:20",he,"응 금요일","嗯 禮拜五"],["2026-01-28 19:20","noona","선물 뭐 샀어","買什麼禮物了"],["2026-01-28 19:23",he,"비밀","祕密"],["2026-01-28 19:23","noona","두쫀쿠 샀구나","你買了杜拜Q餅吧"],["2026-01-28 19:24",he,"어떻게 알았어","你怎麼知道"],["2026-01-28 19:24","noona","너 어제 엄마한테 파는 데 물어봤잖아","你昨天問媽哪裡有在賣啊"]])},{id:"mom",contactId:"mom",messages:zn([["2026-01-27 12:30","mom","아들 밥은 먹었니","兒子吃飯了嗎"],["2026-01-27 13:02",he,"응 먹었어","嗯 吃了"],["2026-01-27 13:03","mom","두바이 뭐 쿠키 그거 동네 카페에 있더라","杜拜什麼餅乾那個 我們社區咖啡廳有在賣"],["2026-01-27 13:03",he,"헐 진짜? 나 대신 사줄 수 있어?","天啊真的嗎？可以幫我買嗎？"],["2026-01-27 13:05","mom","누구 주게?","要送誰？"],["2026-01-27 13:05",he,"도훈이","道勳"],["2026-01-27 13:06","mom","도훈이 거면 두 개 사야지","道勳的話要買兩個啊"]])},{id:"manager",contactId:"manager",messages:zn([["2026-01-29 20:10","manager","내일 10시 숙소 앞 출발","明天十點宿舍前出發"],["2026-01-29 20:10","manager","도훈이 생일이라 현장에서 팬분들 서포트 있을 예정","因為是道勳生日，現場會有粉絲應援"],["2026-01-29 20:15",he,"넵 알겠습니다","好的 知道了"]])}],sms:[{id:"parcel",from:{ko:"택배",zh:"宅配"},messages:[{at:k("2026-01-29 14:22"),text:{ko:`[Web발신]
고객님의 상품(두바이 쫀득쿠키 2입)이 배송 완료되었습니다. 경비실 보관`,zh:`[網路發送]
您的商品（杜拜Q彈餅乾 2入）已送達，存放於管理室`}}]},{id:"bowling",from:{ko:"스트라이크 볼링장",zh:"Strike 保齡球館"},messages:[{at:k("2026-01-26 18:00"),text:{ko:`[Web발신]
1/31(토) 22:00 레인 2개 예약 완료. 신유 님`,zh:`[網路發送]
1/31（六）22:00 預約兩條球道完成。申惟 先生`}}]},{id:"dohoonsms",from:{ko:"도훈이🐺",zh:"道勳🐺"},contactId:"dohoon",messages:[{at:k("2026-01-08 03:12"),text:{ko:"형 카톡 안 봐서 문자 보냄",zh:"哥沒看 Kakao 所以傳簡訊"}},{at:k("2026-01-08 03:12"),text:{ko:"거실 불 끄고 자요",zh:"客廳的燈關了再睡"}},{at:k("2026-01-08 08:40"),text:{ko:"너도 소파에서 자지 마",zh:"你也別在沙發上睡"},me:!0}]}],calls:[{at:k("2026-01-12 23:10"),contactId:"dohoon",type:"incoming",seconds:1520},{at:k("2026-01-20 18:02"),contactId:"mom",type:"outgoing",seconds:214},{at:k("2026-01-25 19:55"),contactId:"kyungmin",type:"outgoing",seconds:88},{at:k("2026-01-27 13:20"),contactId:"mom",type:"incoming",seconds:132},{at:k("2026-01-28 01:44"),contactId:"dohoon",type:"missed",seconds:0},{at:k("2026-01-28 01:45"),contactId:"dohoon",type:"outgoing",seconds:63},{at:k("2026-01-29 20:12"),contactId:"manager",type:"incoming",seconds:95}],notes:[{id:"letter",pinned:!0,title:{ko:"도훈이 생일 편지 (최종의최종)",zh:"給道勳的生日信（最終的最終版）"},at:k("2026-01-29 23:56"),body:{ko:`도훈이 생일 편지 (최종의최종)

도훈아 생일 축하해.

이번에도 12시 땡 하자마자 보내는 거 알지? 원래 그래.

연습생 때 처음 봤을 때 너 진짜 차가워 보였는데
내가 낯 가리는 거 알고 볼 때마다 손하트 해준 거
그거 형은 아직도 기억한다.
그때 그게 별거 아닌 것 같아도 나한텐 진짜 컸어.

구석으로 끌고 가는 거, 이제 안 한다고 했는데
사실 너한테 하고 싶은 말이 있을 때만 그런 거야.
(이건 비밀로 해줘)

소파에서 자지 마. 담요는 계속 덮어줄 거지만.
볼링은 다음엔 진짜 이긴다. 레인 탓 아니고.

앞으로도 형이랑 더 많은 추억 쌓자.
태어나줘서 고마워, 도훈아.

— 신유가`,zh:`給道勳的生日信（最終的最終版）

道勳啊，生日快樂。

這次也是十二點一到就傳，你知道吧？本來就這樣。

練習生時第一次見到你，你看起來真的很冷淡，
可是你知道我怕生，每次看到我都比手指愛心，
那件事哥到現在都還記得。
那時候看起來好像沒什麼，對我來說真的很重要。

把你拖到角落那件事，雖然說過不會再做了，
其實只有在有話想對你說的時候才會那樣。
（這個要幫我保密）

不要在沙發上睡。不過毯子我還是會繼續幫你蓋。
保齡球下次一定贏。不是球道的問題。

以後也跟哥一起累積更多回憶吧。
謝謝你出生，道勳。

—— 申惟`}},{id:"letter-old",title:{ko:"도훈이 생일 편지 (최종)",zh:"給道勳的生日信（最終版）"},at:k("2026-01-29 22:30"),body:{ko:`도훈이 생일 편지 (최종)

도훈아 생일 축하한다
앞으로도 열심히 하자
화이팅

→ 너무 짧음. 경민이가 이건 단체 공지 같다고 함`,zh:`給道勳的生日信（最終版）

道勳啊生日快樂
以後也一起努力吧
加油

→ 太短了。炅潣說這看起來像團體公告`}},{id:"bowling",title:{ko:"볼링 전적",zh:"保齡球戰績"},at:k("2026-01-25 23:10"),body:{ko:`볼링 전적

12/7  신유 92 : 도훈 140
12/14 신유 87 : 도훈 152
1/11  신유 118 : 도훈 121 (거의 이김)

1/31 예약함. 이번엔 진짜.`,zh:`保齡球戰績

12/7  申惟 92 : 道勳 140
12/14 申惟 87 : 道勳 152
1/11  申惟 118 : 道勳 121（差點贏）

1/31 已預約。這次是真的。`}},{id:"gift",title:{ko:"선물 후보",zh:"禮物候選"},at:k("2026-01-19 01:20"),body:{ko:`선물 후보

- 두쫀쿠 (본인이 먹고 싶다고 함 → 엄마한테 부탁 완료, 두 개)
- 볼링공? (이기면 의미 없음)
- 담요 (이미 내 거 덮고 잠)
- 편지 ← 제일 중요`,zh:`禮物候選

- 杜拜Q餅（他自己說想吃 → 已拜託媽媽，兩個）
- 保齡球？（他贏了就沒意義）
- 毯子（已經蓋著我的在睡了）
- 信 ← 最重要`}}],photos:[{id:"p1",at:k("2025-12-14 22:05"),emoji:"🎳",tint:"#c9d8f5",caption:{ko:"볼링 점수판 87 : 152",zh:"保齡球計分板 87 : 152"}},{id:"p2",at:k("2025-12-20 01:13"),emoji:"👟",tint:"#f3dcc4",caption:{ko:"빌려 신은 신발 인증샷",zh:"借來的鞋子認證照"}},{id:"p3",at:k("2026-01-04 02:30"),emoji:"🛋️",tint:"#d8d1ea",caption:{ko:"소파에서 자는 도훈이 (담요 덮어줌)",zh:"在沙發上睡著的道勳（幫他蓋了毯子）"}},{id:"p4",at:k("2026-01-10 21:23"),emoji:"🎤",tint:"#f6d4d9",caption:{ko:"마이크 켜진 줄 모르는 도훈이",zh:"不知道麥克風開著的道勳"}},{id:"p5",at:k("2026-01-22 00:00"),emoji:"🩵",tint:"#cfe6f7",caption:{ko:"데뷔 2주년 단체 사진",zh:"出道兩週年團體照"}},{id:"p6",at:k("2026-01-29 14:30"),emoji:"🍪",tint:"#e9dcc0",caption:{ko:"두쫀쿠 2개 (숨겨둠)",zh:"兩個杜拜Q餅（藏好了）"}},{id:"p7",at:k("2026-01-29 18:22"),emoji:"🎂",tint:"#f7e3ea",caption:{ko:"냉장고 맨 아래칸 케이크",zh:"冰箱最下層的蛋糕"}}],searches:[{q:{ko:"두바이 쫀득쿠키 파는 곳",zh:"杜拜Q彈餅乾 哪裡買"},result:[{title:{ko:"요즘 품절 대란 두쫀쿠, 어디서 살 수 있을까",zh:"最近大缺貨的杜拜Q餅，哪裡買得到？"},body:{ko:"오픈 30분 만에 품절되는 매장이 많아 동네 카페를 노리는 것이 좋습니다…",zh:"很多店開門 30 分鐘就賣完，建議找社區咖啡廳…"}}]},{q:{ko:"볼링 스트라이크 치는 법",zh:"保齡球 怎麼打出全倒"},result:[{title:{ko:"초보자 볼링 스트라이크 각도",zh:"新手保齡球全倒角度"},body:{ko:"레인 탓을 하기 전에 스텝과 릴리스 타이밍을 먼저 점검하세요.",zh:"在怪球道之前，先檢查步伐和出手時機。"}}]},{q:{ko:"동생 생일 편지 감동",zh:"給弟弟的生日信 感動"},result:[{title:{ko:"생일 편지 잘 쓰는 법 3가지",zh:"寫好生日信的三個方法"},body:{ko:"1. 같이 있었던 구체적인 순간 2. 평소에 못 한 말 3. 앞으로의 약속",zh:"1. 一起經歷的具體瞬間 2. 平常說不出口的話 3. 對未來的約定"}}]},{q:{ko:"케이크 냉장고 몇 시간 보관",zh:"蛋糕 冰箱 可以放幾小時"},result:[{title:{ko:"생크림 케이크 보관법",zh:"鮮奶油蛋糕保存方法"},body:{ko:"냄새가 강한 음식(김치 등) 옆에 두면 향이 밸 수 있습니다.",zh:"放在味道重的食物（如泡菜）旁邊可能會沾到味道。"}}]},{q:{ko:"늑대 이모티콘",zh:"狼 表情符號"},result:[{title:"🐺",body:{ko:"Wolf Face · U+1F43A",zh:"Wolf Face · U+1F43A"}}]}],ai:[...Qh,{id:"a1",title:{ko:"무뚝뚝한 척하는 동생에게 편지",zh:"寫信給裝酷的弟弟"},turns:[{q:{ko:"평소에 무뚝뚝한 척하는데 사실 엄청 잘 챙겨주는 동생한테 생일 편지 쓰고 싶어. 너무 오글거리지 않게.",zh:"想寫生日信給平常裝酷、其實超會照顧人的弟弟。不要太肉麻。"},a:{ko:'좋아요! 오글거림을 줄이려면 "고마워"를 직접 말하기 전에, 함께 있었던 구체적인 장면을 먼저 꺼내 보세요. 예를 들어 "그때 네가 ○○ 해준 거 아직 기억해" 같은 문장이요. 마지막은 장난스러운 한 줄로 마무리하면 상대도 부담 없이 받을 수 있어요.',zh:"好的！想減少肉麻感，可以在直接說「謝謝」之前，先提起你們一起經歷的具體場景，例如「那時候你為我做的○○，我到現在還記得」。結尾用一句俏皮話收尾，對方收到也不會有負擔。"}},{q:{ko:"볼링 진 얘기 넣어도 돼?",zh:"可以寫保齡球輸掉的事嗎？"},a:{ko:'물론이죠. 웃음 포인트는 진심을 더 잘 전달해 줘요. 다만 "레인 탓"은 한 번만 하세요.',zh:"當然可以。笑點能讓真心更容易傳達。不過「怪球道」只能用一次喔。"}}]},{id:"a2",title:{ko:"12시 정각 연락",zh:"十二點整傳訊息"},turns:[{q:{ko:"생일 12시 땡 하자마자 연락하는 거 부담스러울까?",zh:"生日十二點一到就傳訊息會不會造成負擔？"},a:{ko:'매년 그렇게 해왔다면 상대는 이미 기다리고 있을 가능성이 커요. 오히려 늦으면 "왜 안 오지?" 하고 먼저 연락할지도 몰라요.',zh:"如果你每年都這樣做，對方很可能已經在等了。反而晚了的話，他說不定會先傳訊息來問「怎麼還沒來？」"}}]}],calendar:[{date:"2026-01-22",title:{ko:"데뷔 2주년 🩵",zh:"出道兩週年 🩵"},color:"#7fb4ff"},{date:"2026-01-29",title:{ko:"0시 서프라이즈 준비",zh:"準備零點驚喜"},time:"23:30",color:"#ff9f0a"},{date:"2026-01-30",title:{ko:"🎂 도훈이 생일",zh:"🎂 道勳生日"},color:"#ff375f"},{date:"2026-01-30",title:{ko:"스케줄 (10시 출발)",zh:"行程（十點出發）"},time:"10:00",color:"#30d158"},{date:"2026-01-31",title:{ko:"볼링 리매치",zh:"保齡球復仇戰"},time:"22:00",color:"#bf5af2"}],voice:[{id:"v1",title:{ko:"편지 읽기 연습",zh:"練習念信"},at:k("2026-01-29 23:20"),seconds:47,transcript:{ko:"(헛기침) 도훈아 생일 축하해. 이번에도 12시 땡 하자마자… 아 아니야 다시. (웃음) 이걸 어떻게 소리 내서 읽어… 경민아 웃지 마. 문 닫아.",zh:"（清喉嚨）道勳啊生日快樂。這次也是十二點一到就……啊不對重來。（笑）這要怎麼念出聲啦……炅潣不要笑。把門關上。"}}],alarms:[{time:"07:00",label:{ko:"기상",zh:"起床"},on:!0},{time:"09:30",label:{ko:"출발 준비 (10시)",zh:"準備出發（十點）"},on:!0},{time:"23:55",label:{ko:"케이크 꺼내기 (김치통 밑)",zh:"拿出蛋糕（泡菜盒下面）"},on:!0},{time:"00:00",label:{ko:"🐺 12시 땡 편지 보내기",zh:"🐺 十二點整傳信"},on:!0}],extra:qh,script:[{id:"start",when:"unlock",delay:1200,actions:[{t:"msg",room:"secret",from:"hanjin",text:{ko:"형!! 2분 남았어요",zh:"哥!! 剩兩分鐘"}},{t:"msg",room:"secret",from:"youngjae",text:{ko:"초는 몇 개 꽂아",zh:"蠟燭要插幾根"},gap:2600},{t:"msg",room:"dohoon",text:{ko:"형 자요?",zh:"哥睡了嗎？"}}]},{id:"secret-open",when:"open:secret",delay:900,actions:[{t:"msg",room:"secret",from:"jihoon",text:{ko:"도훈이형 방 불 아직 켜져 있어요",zh:"道勳哥房間燈還亮著"}},{t:"msg",room:"secret",from:"kyungmin",text:{ko:"형 편지 12시 땡 하면 보내는 거죠?",zh:"哥信是十二點一到就傳對吧？"}}]},{id:"dohoon-open",when:"open:dohoon",delay:1e3,actions:[{t:"msg",room:"dohoon",text:{ko:"안 자는 거 다 알아요",zh:"我知道你沒睡"}},{t:"msg",room:"dohoon",text:{ko:"거실 불 켜져 있던데",zh:"客廳燈還亮著"}},{t:"msg",room:"dohoon",text:{ko:"형 뭐 해요?",zh:"哥在幹嘛？"}},{t:"reply",room:"dohoon",branches:[{id:"honest",keys:["안자","안잤","안 자","기다","생일","보고싶","편지","너생각","네생각","할말","왜","응","ㅇㅇ","깨어","沒睡","没睡","還沒","还没","等","生日","想你","信","怎麼","怎么","嗯","醒著"],replies:[{text:{ko:"역시ㅋㅋ",zh:"果然ㅋㅋ"}},{text:{ko:"형 나 기다리는 거죠",zh:"哥在等我對吧"}},{text:{ko:"1분 남았다 🐺",zh:"剩一分鐘了 🐺"}}]},{id:"deny",keys:["자","잘","졸려","피곤","아무것도","몰라","아니","그냥","睡","沒事","没事","不知道","累","沒有","没有","没什么","沒什麼"],replies:[{text:{ko:"에이 거짓말",zh:"騙人"}},{text:{ko:"자는 사람이 1초 만에 읽어요?",zh:"睡著的人會一秒已讀嗎？"}},{text:{ko:"1분 남았어요 형",zh:"剩一分鐘了哥"}}]}]}]},{id:"midnight",when:"branch:dohoon",delay:1500,actions:[{t:"clock",at:k("2026-01-30 00:00")},{t:"msg",room:"secret",from:"kyungmin",text:{ko:"12시!!!!!",zh:"十二點!!!!!"},gap:900},{t:"msg",room:"secret",from:"hanjin",text:"🎂🎂🎂",gap:900},{t:"msg",room:"secret",from:"jihoon",text:{ko:"형 빨리 보내요",zh:"哥快傳啊"},gap:1800},{t:"call",from:"dohoon",lines:[{ko:"형.",zh:"哥。"},{ko:"12시 됐어요.",zh:"十二點了。"},{ko:"형이 제일 먼저 보낼 줄 알았는데, 안 와서 내가 먼저 전화했어요.",zh:"我以為哥會第一個傳，結果沒來，所以我先打過來了。"},{ko:"(웃음) 거실이죠? 나 지금 문 앞이에요.",zh:"（笑）在客廳對吧？我現在在門口。"},{ko:"아 그리고— 냉장고에 케이크 있는 거, 사실 아까 봤어요. 김치통 밑에.",zh:"啊還有——冰箱裡有蛋糕，其實我剛剛看到了。在泡菜盒下面。"},{ko:"모른 척해 줄게요. 형이 편지 보내 주면.",zh:"我會假裝不知道。只要哥把信傳給我。"}],declinedMsg:{ko:"형 왜 끊어요 🥲",zh:"哥幹嘛掛掉 🥲"}}]},{id:"after-call",when:"call:done",delay:1200,actions:[{t:"msg",room:"secret",from:"youngjae",text:{ko:"도훈이 거실 나왔다 불 꺼",zh:"道勳出來客廳了 關燈"}},{t:"msg",room:"secret",from:"hanjin",text:{ko:"생일 축하합니다~🎶",zh:"祝你生日快樂～🎶"}},{t:"msg",room:"dohoon",text:{ko:"형 편지 기다린다",zh:"哥我在等信喔"}},{t:"msg",room:"dohoon",text:{ko:"메모장에 써놓은 거 다 알아요",zh:"我知道你寫在備忘錄裡"}},{t:"reply",room:"dohoon",branches:[{id:"letter",keys:[""],replies:[{text:{ko:"...",zh:"……"}},{text:{ko:"형 이거 읽다가 울 뻔했잖아요",zh:"哥我看到差點哭出來欸"}},{text:{ko:"나도 고마워요. 진짜로.",zh:"我也謝謝哥。真的。"}},{text:{ko:"내년에도 형이 제일 먼저 해줘요 🐺",zh:"明年也要哥第一個說喔 🐺"}}]}]}]},{id:"epilogue",when:"branch:dohoon:letter",delay:6e3,actions:[{t:"msg",room:"secret",from:"youngjae",text:{ko:"케이크 들고 간다 불 꺼",zh:"拿蛋糕過去了 關燈"}},{t:"msg",room:"secret",from:"hanjin",text:{ko:"도훈이형 표정 ㅋㅋㅋㅋㅋ",zh:"道勳哥的表情ㅋㅋㅋㅋㅋ"},gap:2600},{t:"photo",room:"secret",from:"kyungmin",caption:{ko:"케이크 앞 도훈이형 (울기 직전)",zh:"蛋糕前的道勳哥（快哭了）"}},{t:"msg",room:"secret",from:"kyungmin",text:{ko:"신유형도 울 뻔한 거 다 찍혔어요",zh:"申惟哥差點哭出來也全拍到了"},gap:4e3},{t:"msg",room:"dohoon",text:{ko:"형",zh:"哥"}},{t:"msg",room:"dohoon",text:{ko:"아까 케이크 앞에서 형이 더 울 뻔한 거 봤어요",zh:"剛剛在蛋糕前，我看到哥比我還要快哭了"}},{t:"msg",room:"dohoon",text:{ko:"모른 척해줄게요 🐺",zh:"我會裝作不知道的 🐺"},gap:14e3},{t:"msg",room:"dohoon",text:{ko:"아 그리고 냉장고에 두쫀쿠 두 개 있던데",zh:"啊還有，冰箱裡有兩個杜拜Q餅"}},{t:"msg",room:"dohoon",text:{ko:"이거 형이 산 거예요??",zh:"這是哥買的嗎??"}},{t:"sticker",room:"dohoon",sticker:"🥹",gap:2400},{t:"msg",room:"dohoon",text:{ko:"먹고 싶다고 한 거 기억했네",zh:"你記得我說想吃"},gap:2e4},{t:"msg",room:"tws",from:"jihoon",text:{ko:"도훈이형 생일 축하해요!!! 🎂",zh:"道勳哥生日快樂!!! 🎂"}},{t:"msg",room:"tws",from:"youngjae",text:{ko:"도훈아 생축",zh:"道勳 生快"}},{t:"msg",room:"tws",from:"dohoon",text:{ko:"다들 고마워요 🐺🩵 진짜로",zh:"謝謝大家 🐺🩵 真的"}},{t:"msg",room:"tws",from:"kyungmin",text:{ko:"이제 다들 자요 내일 10시 출발",zh:"大家快睡 明天十點出發"},gap:3e4},{t:"msg",room:"dohoon",text:{ko:"형 자요?",zh:"哥睡了嗎？"}},{t:"msg",room:"dohoon",text:{ko:"오늘 진짜 좋았어요",zh:"今天真的很開心"}},{t:"msg",room:"dohoon",text:{ko:"내일 볼링 리매치 잊지 마요 🎳",zh:"別忘了明天的保齡球復仇戰 🎳"}},{t:"msg",room:"dohoon",text:{ko:"잘 자요 형",zh:"晚安 哥"}},{t:"end"}]}]},R2=(e,t)=>q(e.at)-q(t.at),t0=Le.rooms.find(e=>e.id==="dohoon");t0.messages=[...Oh,...t0.messages].sort(R2);Le.rooms.push(...Ah);Le.notes.push(...Uh);Le.photos.push(...Wh);Le.searches.push(...Bh);Le.calendar.push(...Vh);Le.script.push(...Hh);{const[e,t]=Yh;Le.contacts[e]=t,Le.rooms.push(Li),Le.notes.push(...Xh),Le.extra.hiddenPhotos.push(...Zh),Le.calendar.push(...Jh),Le.extra.music.push(ef),Le.script.push(...Gh)}Li.messages=[...Li.messages,...nf].sort(R2);Le.notes.push(...sf);Le.extra.hiddenPhotos.push(...of);Le.calendar.push(...rf);Le.extra.x.posts.yu_diary=[...Le.extra.x.posts.yu_diary??[],...lf].sort((e,t)=>q(t.at)-q(e.at));Le.ai.push(...af);Ih(Le);Rh(Le);Le.notes.push(...Fh);const cf=[{id:"fic-d0",pinned:!0,title:{ko:"📖 늑대는 달을 본다 (목차)",zh:"📖 狼看著月亮（目錄）"},at:k("2026-11-06 22:00"),body:{ko:`📖 늑대는 달을 본다

형이 쓴 거 몰래 봤다. (형 폰 비번 내 생일임)
그래서 나도 쓴다. 공평하게.

1. 형의 등 — 2023년, 연습실 맨 뒷줄
2. 3분 — 2025년 11월 7일
3. 6분 — 2025년 12월 24일
4. 들킬 뻔한 날들 — 2026년 봄~여름
5. 👍 — 2026년 10월
6. 23:59 — 오늘 밤

작가의 말
형은 달이고 나는 늑대다. 늑대는 달을 보고 운다고들 하는데, 사실은 그냥 보는 거다. 너무 예뻐서.`,zh:`📖 狼看著月亮

偷看了哥寫的東西。（哥的手機密碼是我生日）
所以我也要寫。這樣才公平。

1. 哥的背影 — 2023年，練習室最後一排
2. 三分鐘 — 2025年11月7日
3. 六分鐘 — 2025年12月24日
4. 差點被發現的日子 — 2026年春～夏
5. 👍 — 2026年10月
6. 23:59 — 今晚

作者的話
哥是月亮，我是狼。大家都說狼對著月亮嚎叫，其實只是在看。因為太美了。`}},{id:"fic-d1",title:{ko:"1. 형의 등",zh:"1. 哥的背影"},at:k("2026-02-02 02:30"),body:{ko:`1. 형의 등

연습실에 처음 간 날, 나는 문 앞에서 우산을 접는 걸 잊었다. 후드가 다 젖었다. 매니저 형이 문을 여는 순간 음악이 멈췄고, 거울 앞에 서 있던 사람이 돌아봤다.

땀에 젖은 앞머리. 숨이 찬 어깨. 그리고 나를 보자마자 수건을 집어 드는 손.

"머리부터 닦아. 감기 걸려."

그게 형이었다. 나는 수건으로 바닥부터 닦았다. 머리 닦으라는 말을 들었는데 바닥을 닦았다. 너무 긴장해서. 형이 그걸 보고 조금 웃었던 것 같다. 나중에 물어보니 형은 "그때 너 바닥 닦는 거 보고 괜찮은 애구나 했어" 했다. 바보 같은 짓이 첫인상이 됐다.

*

나는 거울 맨 뒷줄에 섰다. 거기서는 형 등이 보였다.

형은 늘 맨 앞에 있었다. 동작이 틀리면 혼자 스무 번씩 다시 했다. 다른 사람들이 편의점에 갈 때도 남았다. 나는 그게 신기했다. 저렇게 잘하는 사람이 왜 남지?

그래서 나도 남았다. 처음엔 형을 따라 하려고. 나중엔... 형 등을 보려고.

형은 오른쪽 어깨가 반 박자 늦었다. 거울 맨 뒷줄에서 보면 그게 보였다. 형이 숨을 쉬는 타이밍이 이상했다. 어깨를 들 때 숨을 들이마셨다. 나는 일주일 동안 그것만 봤다. 형 숨소리, 형 어깨, 형 등.

새벽 두 시, 형이 물었다. "너는 왜 맨날 남아?"
형 보려고요, 라고 할 수는 없었다.
"저는 아직 못 따라가서요."

형이 오른쪽 어깨 얘기를 했을 때, 나는 일주일 동안 본 걸 말했다. 숨을 바꿔 보라고. 형이 해 봤고, 맞았다.

"...너 뭐야."

형이 거울 속에서 나를 봤다. 처음으로 제대로. 맨 뒷줄에 서 있던 애가 아니라, 도훈이라는 사람으로.

나는 웃었다. 너무 좋아서. 형이 나를 봐서.

*

형은 바나나우유를 사 왔다. 빨대를 꽂아서. 나는 처음엔 사양했다. 형 돈인데. 두 번째엔 고맙다고 했다. 세 번째부터는 손을 먼저 내밀었다. 형이 문을 열고 들어오는 소리만 들려도 손이 먼저 나갔다.

"형 이거 맛있어요."
매번 그 말을 했다. 매번 진심이었다. 바나나우유가 맛있는 게 아니라, 형이 빨대를 꽂아서 준 게 맛있었다. 그걸 알게 된 건 혼자 사 먹은 바나나우유가 하나도 맛이 없었던 날이다.

3월 14일. 형이 거울에 대고 손하트를 했다. 혼자서. 수고했다는 듯이.

나는 형 뒤에 섰다. 그리고 거울 속 형 손하트 옆에 내 손하트를 붙였다. 손이 먼저 움직였다. 생각보다 먼저.

거울 속에서 하트 두 개가 나란히 섰다. 형이 거울로 나를 보고 웃었다. 찰칵. 형이 사진을 찍었다.

그 사진은 2년 뒤 형 인스타에 올라왔다. 거울 오른쪽 아래 손 하나. 내 손. 나는 댓글을 달았다. "형 손하트 옆에 하나 더 있는데요." 형이 대답했다. "누구 거지."

형은 알고 있었다. 2년 동안 그 사진을 갖고 있었다.

*

작가의 말
맨 뒷줄은 좋은 자리다. 형 등이 다 보인다. 지금은 형 옆자리가 더 좋지만.`,zh:`1. 哥的背影

第一次去練習室那天，我在門口忘了收傘。帽T全濕了。經紀人哥開門的瞬間音樂停了，站在鏡子前的人回過頭。

被汗浸濕的瀏海。喘著氣的肩膀。還有一看到我就拿起毛巾的手。

「先擦頭髮。會感冒。」

那就是哥。我拿毛巾先擦了地板。明明叫我擦頭髮，我卻擦了地板。太緊張了。哥看到好像笑了一下。後來我問他，他說「那時候看你擦地板，覺得是個不錯的孩子」。蠢事變成了第一印象。

*

我站在鏡子最後一排。從那裡看得到哥的背影。

哥總是站在最前面。動作錯了就一個人重來二十次。別人去便利商店的時候他也留下來。我覺得很神奇。那麼厲害的人為什麼要留下來？

所以我也留下來。一開始是為了模仿哥。後來……是為了看哥的背影。

哥的右肩慢半拍。從鏡子最後一排看得出來。哥換氣的時機很怪。抬肩的時候吸氣。我一整週只看那個。哥的呼吸聲、哥的肩膀、哥的背影。

凌晨兩點，哥問：「你為什麼每天都留下來？」
不能說是為了看哥。
「我還跟不上。」

哥說到右肩的時候，我把那一週看到的說出來了。叫他換個呼吸。哥試了，對了。

「……你是誰啊。」

哥從鏡子裡看著我。第一次好好地看我。不是站在最後一排的孩子，而是一個叫道勳的人。

我笑了。因為太開心了。因為哥看著我。

*

哥買了香蕉牛奶。插好吸管。一開始我推辭了。那是哥的錢。第二次我說謝謝。從第三次開始我先伸手。只要聽到哥開門進來的聲音，手就先伸出去了。

「哥這個好好喝。」
每次都說這句。每次都是真心的。好喝的不是香蕉牛奶，是哥插好吸管遞給我。我是在某天自己買了香蕉牛奶、卻一點也不好喝的時候才明白的。

3月14日。哥對著鏡子比手指愛心。一個人。像在說辛苦了。

我站到哥身後。把我的手指愛心貼到鏡子裡哥的愛心旁邊。手先動了。比思考還快。

鏡子裡兩顆愛心並排站著。哥從鏡子看著我笑。喀嚓。哥拍了照。

那張照片兩年後出現在哥的IG上。鏡子右下角的一隻手。我的手。我留言：「哥的手指愛心旁邊還有一個欸。」哥回：「是誰的呢。」

哥知道。那張照片他留了兩年。

*

作者的話
最後一排是好位置。看得到哥的整個背影。雖然現在哥旁邊的位置更好。`}},{id:"fic-d2",title:{ko:"2. 3분",zh:"2. 三分鐘"},at:k("2026-04-20 02:00"),body:{ko:`2. 3분

2025년 11월 6일 밤 11시 59분. 나는 이불 속에서 휴대폰을 들고 있었다.

메시지 창에는 이미 문장이 있었다.
"형 생일 축하해요. 태어나줘서 고마워요."

0시가 됐다. 엄지가 전송 버튼 위에서 멈췄다.

태어나줘서 고마워요. 이건 너무 티가 나지 않나. 동생이 형한테 하는 말 치고는 너무 무겁지 않나. 지웠다.

"형 생일 축하해요. 형이 리더라서 좋아요."
이건 너무 공식적이다. 위버스에 쓰는 말 같다. 지웠다.

"형 생일 축하해요. 형 좋아해요."
...
손이 떨렸다. 지웠다. 빨리 지웠다. 혹시라도 실수로 보내질까 봐 화면을 뒤집었다.

0시 2분. 단톡에 지훈이가 "신유형 생축!!! 🎂🎂" 을 보냈다. 경민이형이 케이크 이모티콘을 보냈다. 형은 아직 아무 대답도 안 했다. 형도 누군가를 기다리고 있을까. 그게 나였으면.

0시 3분. 나는 결국 제일 바보 같은 걸 보냈다.

"형 생축🎂"

네 글자. 3분 동안 쓴 문장 중에 제일 짧은 것.

1초 만에 "읽음"이 떴다. 형이 답장했다. "안 기다렸어." 나는 화면을 보며 웃었다. 0시 1분부터 읽음이 떠 있었다는 건 말하지 않았다. 형은 기다렸다. 나를.

*

그날 밤 나는 잠을 못 잤다.

새벽 세 시, 거실에 나갔다. 거실 불이 켜져 있었다. 언제나처럼. 형은 새벽 세 시가 되면 거실 불을 켜 둔다. 이유는 모른다. 그냥 나는, 그 불이 켜져 있으면 나가 보게 된다.

형이 소파에 앉아서 휴대폰을 보고 있었다. 화면에 내 메시지가 열려 있었다. 네 글자. 형은 그걸 보며 웃고 있었다.

나는 들키기 전에 방으로 돌아왔다. 그리고 결심했다.

내년에는 1등을 하자.
0시 0분 0초에.
네 글자 말고, 진짜 하고 싶은 말을.

*

몇 달 뒤 형 비밀 계정을 찾았다. (형 폰 비번이 내 생일이라는 걸 알게 된 날, 나는 30분 동안 화장실에 앉아 있었다.)

거기 이렇게 쓰여 있었다.

"0시. 안 옴. 1분. 안 옴. 3분. 왔다. 생축 네 글자에 웃음."

나는 그걸 읽고 울었다. 조금. 아니 많이. 형이 그 3분을 세고 있었다는 게. 내가 지운 문장들 대신, 형은 그 3분을 기억하고 있었다는 게.

미안해요 형. 내년엔, 아니 올해는 안 늦을게요.

*

작가의 말
11월 6일 23:59 알람의 이름은 "1등". 1년 전에 정했다.`,zh:`2. 三分鐘

2025年11月6日晚上11點59分。我在被窩裡拿著手機。

訊息框裡已經有一句話了。
「哥生日快樂。謝謝你出生。」

零點到了。大拇指停在傳送鍵上。

謝謝你出生。這會不會太明顯。以弟弟對哥哥說的話來說會不會太重。刪掉了。

「哥生日快樂。哥是隊長真好。」
這太官方了。像寫在Weverse上的話。刪掉了。

「哥生日快樂。我喜歡哥。」
……
手在抖。刪掉了。很快地刪掉了。怕不小心傳出去，還把螢幕翻過去。

零點二分。志薰在群組傳了「申惟哥生快!!! 🎂🎂」。炅潣哥傳了蛋糕貼圖。哥還沒回任何話。哥也在等誰嗎。希望那是我。

零點三分。我最後傳了最笨的那句。

「哥生快🎂」

四個字。三分鐘裡寫的句子中最短的一句。

一秒就顯示「已讀」。哥回了。「沒在等。」我看著螢幕笑了。零點一分就顯示已讀的事，我沒說。哥在等。等我。

*

那天晚上我睡不著。

凌晨三點，我走到客廳。客廳的燈亮著。一如往常。每到凌晨三點，哥就會把客廳的燈開著。不知道為什麼。只是那盞燈一亮，我就會出去看看。

哥坐在沙發上看手機。螢幕上開著我的訊息。四個字。哥看著那四個字在笑。

我在被發現之前回到房間。然後下定決心。

明年要拿第一。
在零點零分零秒。
不傳四個字，要傳真正想說的話。

*

幾個月後我找到了哥的祕密帳號。（知道哥手機密碼是我生日的那天，我在廁所坐了三十分鐘。）

上面寫著：

「零點。沒來。一分。沒來。三分。來了。四個字就讓我笑了。」

我讀完哭了。一點點。不，很多。哥在數那三分鐘。比起我刪掉的那些句子，哥記住的是那三分鐘。

對不起，哥。明年，不，今年不會遲到了。

*

作者的話
11月6日23:59的鬧鐘名稱叫「第一名」。一年前就決定好了。`}},{id:"fic-d3",title:{ko:"3. 6분",zh:"3. 六分鐘"},at:k("2025-12-25 03:30"),body:{ko:`3. 6분

목도리를 산 건 12월 20일이었다. 버건디. 형 피부에는 버건디가 어울린다. 매장 직원이 "선물이세요?" 물었을 때 "네" 하고 대답하는 목소리가 떨렸다.

두 개 샀다. 하나는 형 거, 하나는 내 거. 경민이형이 쇼핑백을 보고 "왜 두 개야?" 했다. "하나는 예비용이요." 예비용 목도리 같은 건 세상에 없다.

*

12월 24일, 파티가 끝났다. 형은 "다들 자자" 했다. 리더 목소리로. 형이 그 목소리를 쓸 때는 뭔가를 참고 있을 때다. 1년 넘게 형 등을 본 사람은 안다.

방에 들어와서 계정을 만들었다. 프로필 사진도 없이. 이름 대신 점 하나. 손이 너무 떨려서 비밀번호를 세 번 틀렸다.

"형"
"이 계정 저예요"

보냈다. 이번엔 지우지 않았다. 11월 7일의 3분을 생각했다. 이번엔 안 지운다. 끝까지 보낸다.

우산, 담요, 다 알고 있었다는 것까지 보냈다. 그리고.

"좋아해요 형"

*

6분.

인생에서 제일 긴 6분이었다.

1분. 읽음이 떴다. 형이 봤다.
2분. 답이 없다. 화면을 껐다 켰다.
3분. 형 방에서 아무 소리도 안 난다. 벽에 귀를 댔다. 아무것도 안 들렸다.
4분. 단톡에 들어가 봤다. 형은 아무 데도 없었다. 다른 사람이랑 얘기하는 게 아니었다. 그냥, 내 메시지를 보고 있었다.
5분. 후회했다. 형이 리더라서, 팀이 있어서, 이건 해서는 안 되는 말이었을까. 내일 아침 형이 아무렇지 않게 "잘 잤어?" 하면 나는 어떡하지.
6분.

"6분 동안 답장 못 한 거 생각하느라 그런 거야"
"나도"
"꽤 오래전부터"

나는 휴대폰을 떨어뜨렸다. 이불 위로. 다시 주웠다. 다시 읽었다. 나도. 꽤 오래전부터.

꽤 오래전부터.

그 말에 1년이 다 들어 있었다. 우산도, 담요도, 3분도.

*

베란다 칸막이는 낮았다. 형이 목도리를 하고 나왔다. 내가 준 거. 버건디.

형 얼굴을 보는데 할 말이 하나도 생각나지 않았다. 6분 동안 그렇게 많은 걸 생각했는데. 입김만 나왔다.

그래서 손을 내밀었다. 말 대신.

형이 잡았다. 형 손이 차가웠다. "형 손 엄청 차가워요." "네가 더 차가워." 그럼 잡고 있으면 된다. 잡고 있으면 둘 다 따뜻해진다.

형이 이마를 내 어깨에 묻었다. 목도리 위로. 형 머리카락에서 샴푸 냄새가 났다. 나는 형 뒷머리를 쓸었다. 형이 무대 오르기 전에 내 앞머리를 넘겨 주던 것처럼. 1년 동안 받기만 했던 걸, 처음으로 돌려줬다.

"소파에서요. 숨 참느라 죽는 줄 알았어요."
형이 어깨에 얼굴을 묻은 채로 웃었다. 진동이 목도리를 타고 전해졌다.

*

방에 돌아와서 계정 이름을 바꿨다. 형이 바꿔 줬다. 형 폰에서 나는 🌙 이고, 내 폰에서 형은 🩵 이다.

형 폰 속의 나는 달이다. 형이 새벽마다 켜 둔 거실 불을 보러 나가는 늑대가, 형 폰에선 달이 됐다. 이상하고, 좋다.

캘린더에 🎄 하나를 표시했다. 형도 그랬을 거다. 우리는 생각보다 많이 닮았으니까.

*

작가의 말
6분 동안 형은 내 메시지를 보고 있었다고 했다. 오래 보고 싶어서. 그 말을 들은 날, 나는 6분이 하나도 길지 않았다고 생각하기로 했다.`,zh:`3. 六分鐘

買圍巾是12月20日。酒紅色。哥的膚色適合酒紅。店員問「是送禮嗎？」我回答「是」的聲音在抖。

買了兩條。一條哥的，一條我的。炅潣哥看到購物袋問「為什麼兩條？」「一條是備用的。」世界上根本沒有備用圍巾這種東西。

*

12月24日，派對結束了。哥說「大家去睡吧」。用隊長的聲音。哥用那個聲音的時候，就是在忍著什麼。看了哥的背影一年多的人都知道。

我回房間建了帳號。沒有大頭貼。名字只有一個點。手抖得太厲害，密碼打錯三次。

「哥」
「這個帳號是我」

傳出去了。這次沒有刪。我想著11月7日的那三分鐘。這次不刪。要傳到最後。

雨傘、毯子，連我都知道這件事都傳了。然後。

「我喜歡你 哥」

*

六分鐘。

人生中最長的六分鐘。

一分。顯示已讀。哥看到了。
二分。沒有回覆。我把螢幕關了又開。
三分。哥的房間沒有任何聲音。我把耳朵貼在牆上。什麼都沒聽到。
四分。我點進群組看。哥哪裡都不在。不是在跟別人說話。只是，在看我的訊息。
五分。我後悔了。因為哥是隊長、因為還有團隊，這是不是不該說的話。明天早上哥若無其事地說「睡得好嗎？」我該怎麼辦。
六分。

「這六分鐘沒回，是因為在想」
「我也是」
「從很久以前開始」

我手機掉了。掉在被子上。撿起來。再讀一次。我也是。從很久以前開始。

從很久以前開始。

那句話裡裝著一整年。雨傘、毯子、三分鐘。

*

陽台的隔板很矮。哥圍著圍巾出來了。我送的。酒紅色。

看著哥的臉，一句話都想不起來。明明六分鐘裡想了那麼多。只有白色的呼氣。

所以我伸出了手。代替說話。

哥握住了。哥的手好冰。「哥的手好冰。」「你的更冰。」那牽著就好了。牽著，兩個人就都會變暖。

哥把額頭埋進我的肩膀。貼在圍巾上。哥的頭髮有洗髮精的味道。我撫著哥的後腦。就像哥上台前幫我撥瀏海那樣。一整年都只是在接受，第一次還給他。

「沙發那次。我憋氣憋到差點死掉。」
哥把臉埋在我肩上笑了。震動順著圍巾傳過來。

*

回到房間，帳號名字改了。是哥幫我取的。在哥的手機裡我是 🌙，在我的手機裡哥是 🩵。

哥手機裡的我是月亮。每天凌晨跑出去看哥開著的客廳燈的狼，在哥的手機裡變成了月亮。很奇怪，但很好。

行事曆上標了一個 🎄。哥應該也是。因為我們比想像中更像。

*

作者的話
哥說那六分鐘他一直在看我的訊息。因為想多看一會兒。聽到那句話的那天，我決定把那六分鐘當作一點也不長。`}},{id:"fic-d4",title:{ko:"4. 들킬 뻔한 날들",zh:"4. 差點被發現的日子"},at:k("2026-08-25 02:10"),body:{ko:`4. 들킬 뻔한 날들

비밀연애를 하면 하루에 세 번쯤 심장이 떨어진다.

*

2월 14일. 초콜릿 틀을 샀다. 별 모양 다섯 개, 하트 하나. 멤버들 몫으로 별을 만들고, 남은 하트 틀에는 아주 조심해서 초콜릿을 부었다. 굳는 동안 냉장고 앞에서 떠나지 못했다.

"형 것만 왜 하트예요?" 영재형이 물었다.
"틀이 하나 남아서요."
형은 아무 말 없이 하트 초콜릿을 받아 들었다. 그리고 먹지 않았다. 냉동실에 넣었다.

"왜 안 먹어요."
"아까워서."
"그럼 언제 먹어요."
"1주년 때."

1주년. 형이 그 단어를 너무 당연하게 말해서, 나는 냉동실 문을 열어 놓은 채로 한참 서 있었다. 냉기 때문인지 눈이 시렸다.

*

3월 22일. 컴백 무대. 귀 신호는 이제 팬들이 다 안다. 그래서 형이 새로 정했다. 마이크 두 번 톡톡.

엔딩 요정 차례였다. 카메라가 내 얼굴로 다가왔다. 그때 형이 톡, 톡. 좋아해. 그리고 또 톡, 톡.

미리 말 안 했다. 반칙이다. 나는 카메라 앞에서 웃어 버렸다. 엔딩 요정 대신 웃음 요정. 직캠 조회수는 50만이 넘었다.

"형 그거 반칙이에요."
"미리 말하면 네가 안 웃잖아."

형은 내가 웃는 얼굴을 보고 싶어서 반칙을 했다. 50만 명이 본 그 웃음은 사실 한 사람한테 보낸 거였다.

*

4월 5일. 새벽 세 시의 석촌호수. 마스크를 두 개 챙기라고 했다. 형이. "산책 신청"이라고 했다. 데이트 신청이라고 하면 형은 귀가 빨개진다.

벚꽃이 바람에 날렸다. 형 머리에 꽃잎이 하나 내려앉았다. 떼 주려다가 말았다. 너무 예뻐서.

형도 알고 있었다. 집에 와서 거울을 보고 알았다고 했다. 그리고 형도 내 후드 모자 안에 꽃잎을 하나 넣어 두었다. 내가 호수를 보고 있을 때. 나는 호수를 안 보고 있었는데. 형을 보고 있었는데.

그 꽃잎은 지금 내 폰케이스 안에 있다. 형은 그걸 보고 "어디서 났어" 하고 댓글을 달았다. 형 머리에서요, 라고 답했다. 경민이형이 점 세 개를 달았다. 그때 이미 알고 있었던 거다.

*

5월 2일. 경민이형이 내 목걸이를 봤다. 셔츠 단추 사이로 체인이 반짝였다. 반지가 걸려 있는 체인.

"그거 뭐야?"
"팬분이 준 거요."
거짓말이 너무 빨리 나왔다. 형한테 카톡을 보냈다. 큰일 났어요. 형이 물었다. 뭐라고 했어. 팬분이 준 거라고. 형이 말했다. ...형 것도 똑같은데.

그날 형은 5월에 목폴라를 입었다. 목이 쉬었다는 핑계로. 형은 그날 목이 안 쉬었다. 그 대신 다음 주에 진짜로 목이 쉬었다. 거짓말이 진짜가 됐다고, 형은 메모장에 써서 나한테 보여 줬다. 목소리가 안 나와서.

*

6월 25일. 장마 첫날. 형이 정문 앞에 서 있었다. 가방 옆 주머니에 우산을 꽂은 채로. "우산 없어요?" "없어."

나는 모른 척하고 우산을 폈다. 이번엔 내가 들었다. 형 쪽으로 기울였다. 형은 밀어내지 않았다. 1년 전엔 서로 밀었는데.

엘리베이터. 1년 전과 같은 거울. 형 앞머리 물방울을 털어 주다가, 이번엔 멈추지 않았다.

"형 어깨 젖는 거 싫어요. 형 좋아해서."
"...1년 늦었어."
"알아요. 그래서 이번엔 끝까지 말했잖아요."

1년 전의 "아니에요"가, 1년 걸려서 대답을 받았다.

*

8월 22일, 타이베이. 야시장에서 망고빙수를 샀다. 숟가락은 하나만 받았다. 일부러. 형이 그걸 눈치채고 귀를 만졌다.

한진이가 봤다. "형들 숟가락 하나밖에 안 줬어요? 제가 더 받아올게요!" 하고 뛰어갔다. 한진이가 숟가락을 들고 돌아왔을 때 빙수는 이미 반이 없었다.

그날 밤 한진이가 DM을 보냈다. "...아!! 형들 행복하세요 🥭"
한진아, 너 뭐 알아? 물었더니 한진이가 답했다. "아무것도 몰라요. 늑대랑 달 그림 그린 것밖에."

1월에 한진이는 늑대랑 달을 그렸다. 형한테 줬다. 우리는 생각보다 잘 숨기지 못하고 있었다. 그리고 우리 주변 사람들은 생각보다 훨씬 다정했다.

*

작가의 말
들킬 뻔한 날들을 쓰다 보니, 사실은 다들 알고 있었는데 모른 척해 준 날들이었다.`,zh:`4. 差點被發現的日子

談祕密戀愛，一天大概會心臟停三次。

*

2月14日。我買了巧克力模具。五顆星星、一顆愛心。成員們的份做成星星，剩下的愛心模具，我小心翼翼地倒進巧克力。等它凝固的時候，我一直守在冰箱前面。

「為什麼只有哥的是愛心？」英宰哥問。
「模具剩一個。」
哥什麼都沒說，接過愛心巧克力。然後沒有吃。放進了冷凍庫。

「為什麼不吃。」
「捨不得。」
「那什麼時候吃。」
「一週年的時候。」

一週年。哥把這個詞說得太理所當然，我開著冷凍庫的門站了好久。不知道是不是冷氣的關係，眼睛有點酸。

*

3月22日。回歸舞台。摸耳朵的暗號現在粉絲都知道了。所以哥重新定了一個。敲麥克風兩下。

輪到ending妖精了。鏡頭朝我靠近。這時哥叩、叩。喜歡你。然後又叩、叩。

沒先說。是犯規。我在鏡頭前笑了出來。不是ending妖精，是笑場妖精。直拍觀看數超過五十萬。

「哥那是犯規。」
「先說了你就不會笑了。」

哥因為想看我笑而犯規。五十萬人看到的那個笑容，其實是給一個人的。

*

4月5日。凌晨三點的石村湖。哥叫我帶兩個口罩。說是「約散步」。如果說是約會，哥的耳朵就會紅。

櫻花在風中飛舞。一片花瓣落在哥頭上。我想幫他拿掉，又停住了。因為太美了。

哥也知道。回家照鏡子才發現的。而且哥也在我的帽T帽子裡放了一片花瓣。在我看湖的時候。可是我沒在看湖。我在看哥。

那片花瓣現在在我的手機殼裡。哥看到後留言「哪來的」。我回：哥的頭上。炅潣哥留了三個點。那時候他就已經知道了。

*

5月2日。炅潣哥看到了我的項鍊。鍊子從襯衫鈕扣之間閃了一下。掛著戒指的鍊子。

「那是什麼？」
「粉絲送的。」
謊話說得太快了。我傳KakaoTalk給哥。大事不好了。哥問。你怎麼說。說是粉絲送的。哥說。……我的也是一樣的。

那天哥在五月穿了高領。藉口是喉嚨啞了。哥那天喉嚨沒啞。反倒是下一週真的啞了。謊話變成真的了——哥在備忘錄上這樣寫給我看。因為發不出聲音。

*

6月25日。梅雨季第一天。哥站在正門口。包包側袋插著傘。「沒帶傘嗎？」「沒有。」

我裝作不知道，撐開傘。這次換我撐。往哥那邊斜。哥沒有推回來。一年前我們明明互相推。

電梯。和一年前同一面鏡子。我幫哥撥掉瀏海上的水珠，這次沒有停下來。

「我不想看哥肩膀濕掉。因為我喜歡哥。」
「……晚了一年。」
「我知道。所以這次我有說完啊。」

一年前的「沒事」，花了一年才得到回答。

*

8月22日，台北。在夜市買了芒果冰。湯匙只拿一根。故意的。哥發現了，摸了耳朵。

韓振看到了。「他們只給一根湯匙嗎？我再去拿！」就跑走了。韓振拿著湯匙回來的時候，冰已經少了一半。

那天晚上韓振傳了DM。「……啊!! 哥哥們要幸福喔 🥭」
我問：韓振，你知道什麼？韓振回：「什麼都不知道。只畫過狼和月亮的圖。」

一月的時候韓振畫了狼和月亮。送給了哥。我們沒有想像中那麼會藏。而我們身邊的人，比想像中溫柔得多。

*

作者的話
寫著差點被發現的日子，才發現那其實是大家早就知道、卻裝作不知道的日子。`}},{id:"fic-d5",title:{ko:"5. 👍",zh:"5. 👍"},at:k("2026-10-11 04:00"),body:{ko:`5. 👍

시작은 아주 작은 말이었다.

"형, 저 경민이형한테는 말하고 싶어요."

10월 9일 새벽 한 시. 나는 그 말을 오래 참았다. 경민이형은 이미 알고 있을 것 같았다. 형 볼 때 내 눈이 어떤지, 내가 형 후드를 입고 나오는 날이 며칠인지. 알면서 모른 척해 주는 사람한테 계속 거짓말하는 게 싫었다.

2분 뒤에 답이 왔다.
"아직은 아니야."

"언제요."
"모르겠어. 내가 준비가 안 됐어."

그 말이 이상하게 서운했다. 형은 늘 혼자 준비한다. 데뷔할 때도, 무대 사고가 났을 때도, 회사랑 얘기할 때도. 형 혼자 다 준비하고, 다 끝난 다음에 "괜찮아" 한다.

"형은 맨날 형 혼자 준비해요."
"반반 하자면서요."

15분 동안 답이 없었다. 그리고.
"오늘은 그만 얘기하자."

*

그다음 이틀이 1년 중 제일 길었다.

우리는 싸우지 않았다. 소리도 안 질렀다. 그냥, 말을 안 했다. 단톡에서 형이 "내일 10시 출발"이라고 쓰면 나는 👍 를 눌렀다. 그게 다였다.

👍 하나를 누르는 데 손가락이 그렇게 무거울 줄 몰랐다. 형 메시지 밑에 엄지 하나. 예전엔 그 밑에 "네 형 🐺" 이나 "형 일찍 자요" 를 썼는데. 엄지 하나는 너무 작았다. 그 작은 엄지 안에 하고 싶은 말이 다 눌려 있었다.

연습실에서 형은 내 앞머리를 정리해 줬다. 무대 전에. 사람들 앞에서. 1월에 약속한 거니까. 형 손가락이 이마에 닿는데, 형 눈은 나를 안 봤다. 그게 더 아팠다. 약속은 지키는데 마음은 닫혀 있는 거.

*

10월 10일 밤 11시 58분. 나는 숨긴 채팅방을 열었다.

"형"
"이틀 동안 형이랑 말 안 하니까"
"단톡에서 형 말에 리액션만 하는 거 너무 힘들어요"

보내고 휴대폰을 엎었다. 6분을 기다릴 각오를 했다. 아니 60분이라도.

1분도 안 걸렸다.
"나도"
"연습실"

*

연습실 불은 반만 켜져 있었다. 형은 거울 앞에 앉아 있었다. 무릎을 끌어안고. 리더가 아니라, 그냥 스물몇 살 남자애처럼.

나는 형 옆에 앉았다. 거울 속에 우리 둘이 나란히 앉아 있었다. 3월 14일처럼. 하트는 없었지만.

한참 있다가 형이 말했다.
"나는 내가 다 지키면 되는 줄 알았어."
거울 속 형 눈이 빨갰다.
"너도, 팀도, 이것도. 내가 잘 숨기고 잘 버티면 된다고. 그게 리더니까."
"..."
"근데 네가 같이 지키고 싶다고 하는 거. 그게 더 든든하더라. 이틀 동안 그 생각만 했어."

형이 나를 봤다. 거울 말고, 진짜로.

"경민이한테 같이 말하자. 내가 먼저 말할게."
"형이 먼저 하면 반칙인데."
"이번 반칙은 봐줘."

나는 형 어깨에 머리를 기댔다. 형이 내 손을 잡았다. 우리는 거울 속 우리를 오래 봤다. 반쯤 켜진 불 아래서.

"형."
"응."
"다음에 싸우면 👍 말고 다른 거 보내요."
"뭐."
"🫶"
형이 웃었다. 코끝이 빨간 채로. "싸우면서 손하트 보내는 사람이 어딨어." "여기요."

*

10월 12일, 경민이형한테 말했다. 형이 먼저 입을 열었다. 손이 떨렸다. 형 손이. 리더 형이.

경민이형은 잠깐 우리를 보더니 말했다.
"알았어요. 1월부터."
"...어떻게?"
"형 귀요."

그리고 경민이형은 웃으면서 말했다. "축하해요. 근데 연습실에선 티 좀 덜 내요." 형이 물었다. 우리 티 냈어? 경민이형이 말했다. "형 도훈이 볼 때 눈이 하트예요."

형은 그건 못 고친다고 했다. 나도 못 고친다.

*

작가의 말
그날 밤 경민이형이 DM을 보냈다. "행복해?" 나는 "네. 엄청요." 라고 답했다. 엄지 말고, 글자로.`,zh:`5. 👍

開始是一句很小的話。

「哥，我想跟炅潣哥說。」

10月9日凌晨一點。這句話我忍了很久。炅潣哥好像早就知道了。我看著哥的眼神是怎樣、我穿哥的帽T出門的有幾天。我不想一直對裝作不知道的人說謊。

兩分鐘後回覆來了。
「現在還不行。」

「那要什麼時候。」
「不知道。我還沒準備好。」

那句話莫名地讓我難過。哥總是一個人準備。出道的時候、舞台出事的時候、跟公司談的時候。哥一個人全部準備好，等一切都結束了才說「沒事」。

「哥總是一個人在準備。」
「不是說好一人一半嗎。」

十五分鐘沒有回覆。然後。
「今天先別說了。」

*

接下來的兩天是一年中最長的兩天。

我們沒有吵架。沒有大聲。只是，不說話。群組裡哥寫「明天十點出發」，我就按 👍。只有這樣。

我不知道按一個 👍 手指會這麼沉重。哥的訊息下面一個大拇指。以前下面會寫「好的哥 🐺」或是「哥早點睡」。一個大拇指太小了。想說的話全都壓在那個小小的大拇指裡面。

在練習室，哥幫我整理了瀏海。上台前。在大家面前。因為一月的時候約好了。哥的手指碰到我的額頭，哥的眼睛卻沒有看我。那更痛。約定守住了，心卻關著。

*

10月10日晚上11點58分。我打開了隱藏聊天室。

「哥」
「兩天沒跟哥說話」
「在群組只能對哥的話按反應，好累」

傳完把手機蓋過去。做好等六分鐘的準備。不，六十分鐘也可以。

不到一分鐘。
「我也是」
「練習室」

*

練習室的燈只開了一半。哥坐在鏡子前。抱著膝蓋。不是隊長，只是一個二十幾歲的男生。

我坐到哥旁邊。鏡子裡我們兩個並排坐著。像3月14日那樣。雖然沒有愛心。

過了好久哥開口了。
「我以為只要我一個人全部守住就好。」
鏡子裡哥的眼睛是紅的。
「你、團隊、還有這段感情。只要我藏好、撐好就可以了。因為那是隊長。」
「……」
「可是你說想一起守。那讓我更安心。這兩天我一直在想這件事。」

哥看著我。不是鏡子裡的我，是真的我。

「一起跟炅潣說吧。我先開口。」
「哥先說是犯規。」
「這次犯規就原諒我吧。」

我把頭靠在哥的肩膀上。哥握住我的手。我們看著鏡子裡的我們看了好久。在只開一半的燈下。

「哥。」
「嗯。」
「下次吵架不要傳 👍，傳別的。」
「什麼。」
「🫶」
哥笑了。鼻尖還紅紅的。「哪有人吵架傳手指愛心的。」「這裡。」

*

10月12日，我們跟炅潣哥說了。哥先開口的。手在抖。是哥的手。隊長哥的手。

炅潣哥看了我們一下，說：
「我知道啊。從一月開始。」
「……怎麼知道的？」
「哥的耳朵。」

然後炅潣哥笑著說：「恭喜。不過在練習室收斂一點。」哥問，我們有露餡嗎？炅潣哥說：「哥看道勳的時候眼睛是愛心。」

哥說那個改不了。我也改不了。

*

作者的話
那天晚上炅潣哥傳DM問：「你幸福嗎？」我回：「嗯。超級。」不是大拇指，是用字。`}},{id:"fic-d6",title:{ko:"6. 23:59",zh:"6. 23:59"},at:k("2026-11-06 23:40"),body:{ko:`6. 23:59

지금은 11월 6일 밤 11시 40분. 알람까지 19분.

볼링공은 경민이형이 픽업해 줬다. 대가는 딸기우유. 바나나우유는 안 된다고 했다. 그건 형 거니까. 경민이형은 "...딸기우유로 할게" 하고 웃었다. 우리를 지켜 주는 사람이 하나 생겼다.

케이크는 영재형이 들고 온다. 레터링은 "1등 🐺". 초는 숫자 초 두 개랑, 달 모양 초 하나. 공방 사장님이 노란색이랑 흰색 중에 뭐로 하냐고 물었다. 노란색. 형은 할로윈 때 노란 머리띠를 하고 달이라고 우겼다. 나는 바나나라고 놀렸다. 노란 달 초를 보면 형은 귀가 빨개질 거다.

지훈이는 23시 55분에 형 방문을 두드린다. 한진이는 풍선을 분다. 그리고 나는—

나는 0시 0분 0초에 보낸다.

*

1년 동안 많은 걸 배웠다.

형은 달을 좋아한다. 정확히는, 새벽에 거실 불을 켜 두고 누군가 나와 주기를 기다리는 걸 좋아한다. 그 누군가가 나라는 걸, 이제 형도 안다.

형은 지는 걸 싫어한다. 볼링만 빼고. 볼링은 87:152 이후로 포기했다. 대신 "언젠가 이긴다"는 하이라이트를 만들었다. 나는 그 하이라이트를 일주일에 한 번씩 본다.

형은 무서울 때 혼자 버틴다. 그게 리더라서가 아니라, 그냥 형이 그런 사람이라서. 그래서 나는 형이 버티는 자리 옆에 앉는 법을 배웠다. 아무 말 안 하고. 어깨만 기대고.

형은 사랑한다는 말을 잘 안 한다. 대신 귀를 만진다. 마이크를 두 번 톡톡 친다. 계란말이를 세 개 준다. 빨대를 꽂아서 준다. 우산을 기울인다. 나는 1년 동안 형의 사랑한다는 말을 수백 개쯤 들었다. 소리 없이.

*

11시 50분.

메시지는 써 놨다. 카톡, 위버스, 인스타. 형이 1월에 내 생일에 했던 것처럼. 손가락 세 개로 동시에 보낼 거다.

숨긴 채팅방에는 다른 말을 쓴다. 1년 전에 3분 동안 쓰고 지웠던 문장들. 이번엔 하나도 안 지운다.

"형 생일 축하해요."
"태어나줘서 고마워요."
"형이 리더라서 좋아요. 근데 리더 아닐 때가 더 좋아요."
"형 좋아해요."
"작년에 이거 다 쓰고 지웠어요. 3분 동안."
"올해는 1초도 안 걸렸어요."

*

11시 55분. 지훈이 발소리가 들린다. 형 방문 앞에서 멈춘다. 똑똑.

형이 "누구야?" 한다. 모른 척하는 목소리. 형은 다 안다. 다 알면서 모른 척해 준다. 우리가 서프라이즈를 준비할 수 있게.

11시 58분. 거실 불이 켜져 있다. 오늘은 내가 켰다.

11시 59분. 알람이 울린다. 화면에 "1등" 이라는 글자가 뜬다.

나는 엄지 세 개를 화면 위에 올려놓는다. 숨을 들이마신다. 형한테 배운 대로, 어깨를 들 때 말고 내릴 때.

1년 전 나는 3분 늦었다.
오늘 나는 1초도 늦지 않는다.

그리고 그 1초 뒤에, 형은 아마 귀를 만질 것이다.

*

작가의 말
이 글은 여기서 멈춘다. 나머지는 형 얼굴 보면서 직접 말할 거니까.
형, 생일 축하해요. 🩵`,zh:`6. 23:59

現在是11月6日晚上11點40分。距離鬧鐘還有19分鐘。

保齡球是炅潣哥幫我拿的。代價是草莓牛奶。我說香蕉牛奶不行。那是哥的。炅潣哥笑著說「……那我要草莓牛奶」。我們多了一個守護我們的人。

蛋糕英宰哥會拿來。寫字是「第一名 🐺」。蠟燭是兩根數字蠟燭和一根月亮蠟燭。工作室老闆問要黃色還是白色。黃色。萬聖節的時候哥戴著黃色髮箍堅持自己是月亮。我笑他是香蕉。看到黃色的月亮蠟燭，哥的耳朵會紅吧。

志薰會在23點55分敲哥的房門。韓振在吹氣球。而我——

我要在零點零分零秒傳出去。

*

這一年學到很多事。

哥喜歡月亮。正確來說，是喜歡凌晨把客廳的燈開著，等某個人出來。那個人是我——現在哥也知道了。

哥討厭輸。除了保齡球。保齡球在87:152之後就放棄了。取而代之做了一個「總有一天會贏」的精選。我每週都會看一次那個精選。

哥害怕的時候會一個人撐著。不是因為他是隊長，只是因為哥就是那樣的人。所以我學會了坐在哥撐著的地方旁邊。什麼都不說。只是靠著肩膀。

哥不太說「我愛你」。取而代之的是摸耳朵。敲兩下麥克風。給我三個玉子燒。插好吸管再遞給我。把傘斜過來。這一年我聽了哥的「我愛你」大概幾百次。沒有聲音的那種。

*

11點50分。

訊息已經寫好了。KakaoTalk、Weverse、Instagram。就像哥一月在我生日時做的那樣。要用三根手指同時傳。

隱藏聊天室裡要寫別的話。一年前在三分鐘裡寫了又刪的那些句子。這次一句都不刪。

「哥生日快樂。」
「謝謝你出生。」
「哥是隊長真好。可是不當隊長的時候更好。」
「我喜歡哥。」
「去年這些全部寫了又刪了。花了三分鐘。」
「今年一秒都不用。」

*

11點55分。聽到志薰的腳步聲。停在哥的房門前。叩叩。

哥說「誰啊？」裝作不知道的聲音。哥全都知道。全都知道還裝作不知道。好讓我們能準備驚喜。

11點58分。客廳的燈亮著。今天是我開的。

11點59分。鬧鐘響了。螢幕上跳出「第一名」三個字。

我把三根大拇指放在螢幕上。吸一口氣。照哥教我的，不是在抬肩的時候，是在放下的時候。

一年前我晚了三分鐘。
今天我一秒都不會遲到。

然後在那一秒之後，哥大概會摸耳朵吧。

*

作者的話
這篇文章就寫到這裡。剩下的，我要看著哥的臉親口說。
哥，生日快樂。🩵`}}],je=(e,t)=>({ko:e,zh:t}),ae="hoon.wolf",ke="yu.42_",Vn=e=>e.map(([t,s,o,r])=>({at:k(t),from:s,text:je(o,r)}));function uf(e){var o,r;const t=e.extra.instagram;t.feed.push({id:"my1",by:ae,pic:{emoji:"🎂",tint:"#f7e3ea"},caption:je("생일 축하해줘서 고마워요 42 🐺 올해 1등은 0시 0분 0초에 온 사람","謝謝 42 祝我生日快樂 🐺 今年第一名是零點零分零秒傳來的人"),likes:1520300,at:k("2026-01-30 13:00"),comments:[{by:ke,text:je("1등 했다","拿到第一了")},{by:"jihoon_06",text:je("저 0시 0분 2초였는데...","我是零點零分二秒……")},{by:ae,text:je("@jihoon_06 2등 축하해","@jihoon_06 恭喜第二名")},{by:"yudoz.archive",text:je("1등이 누군지 다 알아서 말 안 함","大家都知道第一名是誰所以不說")}]},{id:"my2",by:ae,pic:{emoji:"🍫",tint:"#5a3a2e"},caption:je("발렌타인 🍫 멤버들 거 만들었어요. 별 모양 다섯 개 + 틀 남은 거 하나","情人節 🍫 做了成員們的份。五顆星星＋剩下的模具一個"),likes:1188e3,at:k("2026-02-14 20:00"),comments:[{by:"young.jae",text:je("하나 남은 틀이 왜 하트예요?","剩下的那個模具為什麼是愛心？")},{by:ae,text:je("@young.jae 그것만 남았어","@young.jae 只剩那個")},{by:ke,text:je("맛있겠다","看起來很好吃")},{by:"kyungmin.p",text:je("@yu.42_ 형 그거 안 먹고 냉동실에 넣던데요","@yu.42_ 哥你不是沒吃，放進冷凍庫了嗎")}]},{id:"my3",by:ae,pic:{emoji:"🫶",tint:"#f7e3ea"},caption:je("0314 🫶 원조","0314 🫶 正宗"),likes:1290100,at:k("2026-03-14 20:10"),comments:[{by:ke,text:je("🫶","🫶")},{by:"hanjin.zz",text:je("무슨 날이에요?","是什麼日子？")},{by:ae,text:je("@hanjin.zz 손하트 기념일","@hanjin.zz 手指愛心紀念日")},{by:"wolf.and.moon",text:je("2025년 3월 14일 신유 게시물 거울 속 손 = 이 사람","2025年3月14日申惟貼文鏡子裡的手＝這個人")}]},{id:"my4",by:ae,pic:{emoji:"🎤",tint:"#f6d4d9"},caption:je("오늘은 우리 리더 몫까지 말했어요. 목 빨리 낫기를 🍯","今天把我們隊長的份也說了。希望喉嚨快點好 🍯"),likes:1102500,at:k("2026-05-20 22:00"),comments:[{by:ke,text:je("(목소리 없음) 고마워","（沒有聲音）謝謝")},{by:ae,text:je("@yu.42_ 댓글은 목 안 써도 돼요","@yu.42_ 留言不用喉嚨")},{by:"yudoz.archive",text:je('"우리 리더" 이 한 단어에 오늘 하루 버팀',"靠「我們隊長」這幾個字撐過今天")}]},{id:"my5",by:ae,pic:{emoji:"🌊",tint:"#a7d3e8"},caption:je("바다 🌊 작년이랑 같은 바다","海邊 🌊 跟去年同一片海"),likes:134e4,at:k("2026-08-04 20:00"),comments:[{by:ke,text:je("작년엔 40장 찍었잖아","你去年拍了40張")},{by:ae,text:je("@yu.42_ 올해는 80장이요","@yu.42_ 今年80張")},{by:"kyungmin.p",text:je("형들 저도 바다에 있었어요","哥哥們我也在海邊喔")}]},{id:"my6",by:ae,pic:{emoji:"🥮",tint:"#f3e2c7"},caption:je("추석 🌕 엄마가 송편 싸주셨어요. 멤버 몫 (특히 한 명 몫 많이)","中秋 🌕 媽媽幫我包了松餅。成員的份（特別是某一個人的份很多）"),likes:1066e3,at:k("2026-09-28 18:00"),comments:[{by:ke,text:je("어머님께 감사하다고 전해줘","幫我跟伯母說謝謝")},{by:"jihoon_06",text:je("한 명이 누구예요?","某一個人是誰？")},{by:ae,text:je("@jihoon_06 너","@jihoon_06 你")},{by:"jihoon_06",text:je("@hoon.wolf 진짜요?? 🥹","@hoon.wolf 真的嗎?? 🥹")}]});const s=l=>{const i=t.dms.find(a=>a.with===l.with);i?(i.messages=[...i.messages,...l.messages].sort((a,c)=>q(a.at)-q(c.at)),l.unread&&(i.unread=!0)):t.dms.push(l)};s({with:ke,unread:!0,messages:Vn([["2026-01-30 00:00",ke,"생일 축하해 도훈아 🐺","生日快樂 道勳 🐺"],["2026-01-30 00:00",ke,"(카톡, 위버스, 여기 다 1등 함)","（KakaoTalk、Weverse、這裡全部第一）"],["2026-01-30 00:01",ae,"형 세 군데 동시에 어떻게 보냈어요","哥你怎麼三個地方同時傳的"],["2026-01-30 00:01",ke,"미리 써놓고 손가락 세 개로","先寫好，用三根手指"],["2026-01-30 00:02",ae,"형 진짜 이런 거에 진심이다","哥對這種事真的很認真"],["2026-01-30 00:02",ke,"너한테만","只對你"],["2026-02-14 20:30",ke,"하트 모양 사진은 왜 안 올렸어","為什麼沒傳愛心形的照片"],["2026-02-14 20:31",ae,"그건 형만 보라고요","那個只給哥看"],["2026-02-14 20:31",ke,"[사진] 냉동실 안 하트 초콜릿","[照片] 冷凍庫裡的愛心巧克力"],["2026-02-14 20:32",ae,"형 그거 먹으라니까요 ㅋㅋㅋ","哥就叫你吃了 ㅋㅋㅋ"],["2026-02-14 20:32",ke,"1주년 때 먹을게","一週年的時候吃"],["2026-04-05 03:40",ae,"형 후드에 꽃잎 넣은 거 언제 했어요","哥你什麼時候把花瓣放進我帽子裡的"],["2026-04-05 03:41",ke,"네가 호수 보고 있을 때","你在看湖的時候"],["2026-04-05 03:41",ae,"저 호수 안 보고 있었는데요","我沒在看湖"],["2026-04-05 03:42",ke,"그럼 뭐 봤는데","那你在看什麼"],["2026-04-05 03:42",ae,"형이요","哥"],["2026-04-05 03:44",ke,"...자라","……去睡"],["2026-05-20 23:10",ke,"[음성 메시지 0:04]","[語音訊息 0:04]"],["2026-05-20 23:10",ae,"형 목소리 안 나오는데 음성은 왜 보내요","哥聲音都出不來了幹嘛傳語音"],["2026-05-20 23:11",ke,"숨소리라도","至少有呼吸聲"],["2026-05-20 23:11",ae,"...4초 동안 형 숨소리 열 번 들었어요","……那四秒我聽了哥的呼吸聲十遍"],["2026-06-25 21:10",ke,"오늘 정문에서","今天在正門"],["2026-06-25 21:10",ke,"우산 내가 가방에 있는 거 알면서 모른 척했지","你明明知道我包包裡有傘還裝作不知道吧"],["2026-06-25 21:11",ae,"형도 있으면서 없다고 했잖아요","哥你也明明有還說沒有"],["2026-06-25 21:11",ke,"그럼 공범","那就是共犯"],["2026-06-25 21:12",ae,"1년짜리 공범이요","一年期的共犯"],["2026-08-04 22:00",ke,"바다 80장 중에 내가 몇 장이야","海邊80張裡我有幾張"],["2026-08-04 22:01",ae,"79장","79張"],["2026-08-04 22:01",ke,"나머지 1장은","剩下那張呢"],["2026-08-04 22:02",ae,"형이 찍어준 저요. 형 손가락 나옴","哥幫我拍的我。拍到哥的手指"],["2026-10-10 22:00",ae,"형","哥"],["2026-10-10 22:30",ae,"그냥 불러봤어요","只是想叫叫你"],["2026-10-10 23:00",ke,"나도 그냥 읽어봤어","我也只是讀一下"],["2026-10-31 23:30",ke,"[게시물 공유] 늑대가 달 보고 울부짖는 이유","[分享貼文] 狼對著月亮嚎叫的原因"],["2026-10-31 23:31",ke,'"달이 너무 멀어서"래',"說是「因為月亮太遠了」"],["2026-10-31 23:31",ae,"형은 안 멀잖아요","哥又不遠"],["2026-10-31 23:32",ke,"그러니까 울지 마","所以不要哭"],["2026-11-06 21:40",ke,"도훈아","道勳"],["2026-11-06 21:40",ke,"다들 이상하게 바쁘다","大家都怪怪地很忙"],["2026-11-06 21:41",ke,"너도 바빠?","你也在忙？"],["2026-11-06 21:45",ke,"읽고 답 안 하는 거 작년 나 같다 ㅋㅋ","已讀不回，跟去年的我一樣 ㅋㅋ"]])}),s({with:"kyungmin.p",messages:Vn([["2026-10-12 23:00","kyungmin.p","도훈아 하나만 물어봐도 돼?","道勳 可以問一件事嗎？"],["2026-10-12 23:01",ae,"네 형","好啊哥"],["2026-10-12 23:01","kyungmin.p","행복해?","你幸福嗎？"],["2026-10-12 23:03",ae,"네. 엄청요","嗯。超級"],["2026-10-12 23:03","kyungmin.p","그럼 됐어","那就好了"],["2026-10-12 23:04","kyungmin.p","앞으로 숙소에서 망보는 건 내가 할게","以後在宿舍把風的事我來"],["2026-10-12 23:04",ae,"형 ㅠㅠ","哥 ㅠㅠ"],["2026-11-05 14:00","kyungmin.p","볼링공 픽업 내가 대신 갈까? 신유형 오늘 회사 근처래","保齡球我幫你去拿？申惟哥今天在公司附近"],["2026-11-05 14:01",ae,"형 최고예요","哥最棒"],["2026-11-05 14:01","kyungmin.p","대신 바나나우유 하나","代價是一瓶香蕉牛奶"],["2026-11-05 14:02",ae,"바나나우유는 안 돼요 그건 형 거예요","香蕉牛奶不行，那是哥的"],["2026-11-05 14:02","kyungmin.p","...딸기우유로 할게","……那我要草莓牛奶"]])}),s({with:"jihoon_06",unread:!0,messages:Vn([["2026-07-29 10:00","jihoon_06","형 어제 신유형 방에서 뭐 했어요? 손하트 소리 났어요","哥昨天在申惟哥房間做什麼？有比愛心的聲音"],["2026-07-29 10:02",ae,"손하트는 소리가 안 나","比愛心不會有聲音"],["2026-07-29 10:02","jihoon_06",'"87!" "88!" 이렇게 세는 소리요',"是「87！」「88！」這種數數的聲音"],["2026-07-29 10:03",ae,"...운동했어","……在運動"],["2026-07-29 10:03","jihoon_06","아 손가락 운동!! 저도 끼워주세요","啊手指運動!! 也算我一個"],["2026-10-20 09:00","jihoon_06","형 그 후드 신유형 거 아니에요?","哥那件帽T不是申惟哥的嗎？"],["2026-10-20 09:02",ae,"바꿔 입었어","換著穿的"],["2026-10-20 09:02","jihoon_06","왜요?","為什麼？"],["2026-10-20 09:03",ae,"따뜻해서","因為暖"],["2026-10-20 09:03","jihoon_06","저도 형 후드 입어봐도 돼요?","我也可以穿哥的帽T嗎？"],["2026-10-20 09:04",ae,"그건 안 돼","那個不行"],["2026-11-06 22:00","jihoon_06","형 작전 23:55 맞죠? 케이크는 영재형이!!","哥作戰是23:55對吧？蛋糕英宰哥拿!!"],["2026-11-06 22:01","jihoon_06","근데 형은 0시에 어디 있을 거예요?","不過哥零點會在哪裡？"]])}),s({with:"hanjin.zz",messages:Vn([["2026-08-23 00:30","hanjin.zz","형 아까 숟가락 늦게 가져가서 죄송해요 ㅠㅠ","哥剛剛湯匙拿太晚了對不起 ㅠㅠ"],["2026-08-23 00:31",ae,"아니야 딱 좋았어","不會 剛剛好"],["2026-08-23 00:31","hanjin.zz","네? 늦었는데요?","咦？明明很晚啊？"],["2026-08-23 00:32",ae,"그래서 딱 좋았다고","所以才說剛剛好"],["2026-08-23 00:35","hanjin.zz","...아!! 형들 행복하세요 🥭","……啊!! 哥哥們要幸福喔 🥭"],["2026-08-23 00:35",ae,"한진아 너 뭐 알아?","韓振你知道什麼？"],["2026-08-23 00:36","hanjin.zz","아무것도 몰라요 늑대랑 달 그림 그린 것밖에","什麼都不知道，只畫過狼和月亮的圖"]])}),s({with:"young.jae",messages:Vn([["2026-11-06 20:00","young.jae",'케이크 레터링 "1등 🐺" 맞지?',"蛋糕寫字是「第一名 🐺」對吧？"],["2026-11-06 20:01",ae,"네 그리고 달 초 하나","對，還有一根月亮蠟燭"],["2026-11-06 20:01","young.jae","달 초는 왜?","為什麼要月亮蠟燭？"],["2026-11-06 20:02",ae,"형이 달 좋아해서요","因為哥喜歡月亮"],["2026-11-06 20:03","young.jae","그런 거 다 아는 거 신기하다 너","你連這種事都知道，好神奇"],["2026-11-06 20:03",ae,"1년 동안 공부했어요","研究了一年"]])}),(o=t.users)["yudoz.archive"]??(o["yudoz.archive"]={name:je("유도즈 아카이브","惟勳存檔"),posts:688,followers:"121K",following:"7"}),(r=t.users)["wolf.and.moon"]??(r["wolf.and.moon"]={name:"🐺🌙",posts:73,followers:"5.4K",following:"98"}),t.users["cake.atelier"]={name:je("케이크 공방","蛋糕工作室"),posts:540,followers:"31K",following:"80",verified:!0},s({with:"wolf.and.moon",request:!0,unread:!0,messages:Vn([["2026-11-01 02:00","wolf.and.moon","도훈님 🐺 혹시 보실까 봐요","道勳 🐺 想說你可能會看到"],["2026-11-01 02:00","wolf.and.moon","도훈님이 신유님 볼 때 웃는 얼굴이 제일 좋아요","我最喜歡道勳看著申惟時的笑臉"],["2026-11-01 02:01","wolf.and.moon","내일도 그렇게 웃어주세요 🌙","明天也請那樣笑 🌙"]])}),s({with:"cake.atelier",request:!0,messages:Vn([["2026-11-02 14:10","cake.atelier","도훈님 안녕하세요! 달 모양 초는 노란색/흰색 중 어떤 걸로 준비할까요? 🌙","道勳您好！月亮蠟燭要準備黃色還是白色呢？🌙"]])})}const R=(e,t)=>({ko:e,zh:t});function df(e){const t=e.extra.instagram;t.users["yudoz.archive"]={name:R("유도즈 아카이브","惟勳存檔"),bio:R("fan account · 사진 출처 표기","fan account · 照片標註出處"),posts:688,followers:"121K",following:"7"},t.users["wolf.and.moon"]={name:"🐺🌙",posts:73,followers:"5.4K",following:"98"},t.feed.push({id:"sw1",by:"yu.42_",pic:{emoji:"🌸",tint:"#f7d6e0"},caption:R("봄 🌸","春天 🌸"),likes:1320400,at:k("2026-04-05 12:00"),comments:[{by:"hoon.wolf",text:R("형 머리에 꽃잎 붙었어요","哥頭上沾到花瓣了")},{by:"yu.42_",text:R("@hoon.wolf 알아. 일부러 둔 거","@hoon.wolf 知道。故意留著的")},{by:"young.jae",text:R("이거 새벽에 찍은 거 아니에요? 저 자고 있었는데","這不是凌晨拍的嗎？我那時在睡覺")},{by:"yudoz.archive",text:R("도훈 어제 위버스 라이브 후드에서 꽃잎 나왔던 거 기억하는 사람","有人記得道勳昨天直播時帽T裡掉出花瓣嗎")}]},{id:"sw2",by:"hoon.wolf",pic:{emoji:"📱",tint:"#e9e4f5"},caption:R("폰케이스 꾸미기 🌸 (재료 출처 비밀)","裝飾手機殼 🌸（材料來源保密）"),likes:1011200,at:k("2026-04-06 20:00"),comments:[{by:"yu.42_",text:R("어디서 났어","哪來的")},{by:"hoon.wolf",text:R("@yu.42_ 누구 머리에서요","@yu.42_ 某人的頭上")},{by:"kyungmin.p",text:R("...","……")}]},{id:"sw3",by:"yu.42_",pic:{emoji:"☔",tint:"#9fb4c7"},caption:R("장마 시작. 우산은 하나면 충분","梅雨季開始。傘一把就夠了"),likes:1140300,at:k("2026-06-25 21:00"),comments:[{by:"hoon.wolf",text:R("형 가방에 우산 있던데","哥包包裡明明有傘")},{by:"yu.42_",text:R("@hoon.wolf 없었어","@hoon.wolf 沒有")},{by:"wolf.and.moon",text:R("도훈이 어깨만 젖어 있던 출근길 사진 여기 있습니다","只有道勳肩膀濕掉的上班路照片在這裡")}]},{id:"sw4",by:"hoon.wolf",pic:{emoji:"🥭",tint:"#ffcf5c"},caption:R("타이베이 🥭 1인 1숟가락 (지키지 못함)","台北 🥭 一人一根湯匙（沒做到）"),likes:1255e3,at:k("2026-08-23 01:00"),comments:[{by:"hanjin.zz",text:R("제가 숟가락 갖다 드렸잖아요!!","我不是幫你們拿湯匙了嗎!!")},{by:"hoon.wolf",text:R("@hanjin.zz 늦었어","@hanjin.zz 太晚了")},{by:"yu.42_",text:R("맛있었다","很好吃")}]},{id:"sw5",by:"yu.42_",pic:{emoji:"🌙",tint:"#3b3b4f"},caption:R("Happy Halloween 🌙 저는 달입니다","Happy Halloween 🌙 我是月亮"),likes:1402e3,at:k("2026-10-31 23:00"),comments:[{by:"hoon.wolf",text:R("바나나 아니고요?","不是香蕉嗎？")},{by:"yu.42_",text:R("@hoon.wolf 늑대는 달 보고 우는 거야","@hoon.wolf 狼是對著月亮嚎叫的")},{by:"hoon.wolf",text:R("@yu.42_ 🐺","@yu.42_ 🐺")},{by:"yudoz.archive",text:R("서사를 본인들이 쓰면 저희는 뭐 합니까","故事都自己寫了，那我們要幹嘛")}]});const s={by:"yu.42_",frames:[{emoji:"🍌",tint:"#fff1a8",text:R("바나나우유 두 개 샀는데 하나가 사라짐","買了兩瓶香蕉牛奶，有一瓶不見了")},{emoji:"🐺",tint:"#3b3b4f",text:R("범인 찾음","找到犯人了")}]},o=t.stories.find(i=>i.by===s.by);o?o.frames=[...s.frames,...o.frames]:t.stories.unshift(s),t.highlights.unshift({title:"🌸",frames:[{emoji:"🌸",tint:"#f7d6e0",text:R("04.05 새벽","04.05 凌晨")},{emoji:"📱",tint:"#e9e4f5",text:R("여기 보관 중","保存在這裡")}]});const r=t.dms.find(i=>i.with==="yu.42_");r&&(r.messages.push({from:"yu.42_",text:R("[릴스 공유] 도훈 엔딩 대참사 50만뷰","[分享Reels] 道勳ending大慘案 50萬觀看"),at:k("2026-03-24 00:10")},{from:"yu.42_",text:R("이거 내가 제일 많이 봤을 듯","這個應該是我看最多次"),at:k("2026-03-24 00:10")},{from:"hoon.wolf",text:R("형 때문에 생긴 참사예요","是哥害的慘案"),at:k("2026-03-24 00:12")},{from:"yu.42_",text:R("알아. 그래서 보는 거야","我知道。所以才看"),at:k("2026-03-24 00:12")},{from:"hoon.wolf",text:R("[게시물 공유] 망고빙수 맛집 타이베이 TOP 5","[分享貼文] 台北芒果冰 TOP 5"),at:k("2026-08-10 23:00")},{from:"hoon.wolf",text:R("형 여기 가요. 숟가락 하나만 받아서","哥我們去這間。只拿一根湯匙"),at:k("2026-08-10 23:00")},{from:"yu.42_",text:R("그거 계획이었어?","那是計畫好的？"),at:k("2026-08-10 23:03")},{from:"hoon.wolf",text:R("네 🐺","對 🐺"),at:k("2026-08-10 23:03")}),r.messages.sort((i,a)=>q(i.at)-q(a.at)));const l=e.extra.x;l.accounts.mic_tap_42={name:R("마이크 톡톡 분석","麥克風叩叩分析"),bio:R("신유 마이크 두드리는 횟수 기록","記錄申惟敲麥克風的次數"),followers:"14K",following:"1"},l.timeline.push({id:"sw-t1",by:"mic_tap_42",text:R("3/22 엔딩 직전 신유 마이크 톡톡 4회. 도훈 엔딩 요정 중 웃음 터짐. 인과관계 있다고 봅니다","3/22 ending前申惟敲麥克風4次。道勳ending妖精途中笑場。我認為有因果關係"),at:k("2026-03-22 22:30"),likes:61200,rts:24e3,replies:2100,pic:{emoji:"🎤",tint:"#f6d4d9"}},{id:"sw-t2",by:"yudoz_moment",text:R("장마 첫날 출근길: 우산 하나, 도훈이 들고 있음, 신유 쪽으로 기울어짐, 도훈 왼쪽 어깨만 젖음. 1년 전엔 반대였음 (사진 비교)","梅雨季第一天上班路：一把傘，道勳撐，往申惟那邊斜，只有道勳左肩濕掉。一年前是反過來的（照片對比）"),at:k("2026-06-25 20:10"),likes:73400,rts:30100,replies:2600,pic:{emoji:"☔",tint:"#9fb4c7"}},{id:"sw-t3",by:"42_daily",text:R("타이베이 야시장 목격담: 망고빙수 하나에 숟가락 하나. 한진이 숟가락 들고 뛰어옴. 한진아 고마워","台北夜市目擊：一碗芒果冰一根湯匙。韓振拿著湯匙跑過來。韓振謝謝你"),at:k("2026-08-22 23:30"),likes:44100,rts:15200,replies:980},{id:"sw-t4",by:"yudoz_moment",text:R('예능에서 신유가 MC랑 손하트 한 다음 날 도훈 위버스: "손하트는 원조가 있습니다" 🫠',"綜藝上申惟跟MC比手指愛心的隔天，道勳Weverse：「手指愛心是有正宗的」🫠"),at:k("2026-07-29 13:00"),likes:39800,rts:14400,replies:1100},{id:"sw-t5",by:"tws_sparkle",text:R('할로윈 라이브 늑대 도훈 + 달(바나나) 신유. 댓글 "늑대가 달 보고 울부짖네" 진짜 명작',"萬聖節直播狼道勳＋月亮（香蕉）申惟。留言「狼對著月亮嚎叫」真的是名作"),at:k("2026-10-31 22:50"),likes:28800,rts:9900,replies:700,pic:{emoji:"🐺",tint:"#3b3b4f"}},{id:"sw-t6",by:"42_daily",text:R("도훈 폰케이스 안에 말린 꽃잎 있음. 4월 5일 신유 게시물 머리 위 꽃잎이랑 모양 같은 거 저만 보이나요","道勳手機殼裡有壓乾的花瓣。跟4月5日申惟貼文頭上那片花瓣形狀一樣，只有我看到嗎"),at:k("2026-04-07 12:00"),likes:35200,rts:12800,replies:1500,pic:{emoji:"🌸",tint:"#f7d6e0"}}),l.trends.push({tag:R("#마이크톡톡","#麥克風叩叩"),count:R("게시물 3.4만","3.4 萬則貼文")}),e.extra.music.push({id:"pl-sw1",title:R("형 목소리","哥的聲音"),by:R("도훈","道勳"),pic:{emoji:"🎤",tint:"#f6d4d9"},songs:[{title:"마지막 축제",artist:"TWS",dur:188},{title:"내가 S면 넌 나의 N이 되어줘",artist:"TWS",dur:182},{title:"Countdown!",artist:"TWS",dur:175},{title:"(신유 허밍 녹음본)",artist:"🩵",dur:48}]},{id:"pl-sw2",title:R("벚꽃 새벽 산책","櫻花凌晨散步"),by:R("도훈","道勳"),pic:{emoji:"🌸",tint:"#f7d6e0"},songs:[{title:"Petal on Your Hair",artist:"Spring Hours",dur:203},{title:"첫 만남은 계획대로 되지 않아",artist:"TWS",dur:176},{title:"3AM Lake Walk",artist:"Midnight Store",dur:221}]}),e.extra.places.push({id:"lake",name:R("석촌호수","石村湖"),x:68,y:40,emoji:"🌸",kind:R("저장됨","已儲存"),note:R("4/5 새벽 3시. 형 머리에 꽃잎","4/5 凌晨三點。哥頭上的花瓣")},{id:"bench",name:R("편의점 앞 벤치","便利商店前的長椅"),x:54,y:56,emoji:"🍌",kind:R("즐겨찾기","收藏"),note:R("100일 · 바나나우유 두 개 · 11/7 00:10 예정","100天 · 兩瓶香蕉牛奶 · 預計 11/7 00:10")},{id:"gate",name:R("회사 정문","公司正門"),x:60,y:24,emoji:"☔",kind:R("저장됨","已儲存"),note:R("1년 늦은 대답 한 곳","說出晚了一年的回答的地方")},{id:"roof",name:R("숙소 옥상","宿舍頂樓"),x:46,y:40,emoji:"🌕",kind:R("저장됨","已儲存"),note:R("추석 영상통화 (형은 본가 옥상)","中秋視訊（哥在老家頂樓）")}),e.extra.mails.push({id:"sw-m1",from:"Strike Pro Shop",subject:R("각인 볼링공 제작 완료","刻字保齡球製作完成"),body:R(`각인 문구: S.Y. 🩵
추가 요청: 손가락 구멍 옆 "🎄" (작게)
픽업: 11/6 18:00 이후`,`刻字內容：S.Y. 🩵
追加要求：指洞旁「🎄」（小小的）
取貨：11/6 18:00 以後`),at:k("2026-11-05 17:20")},{id:"sw-m2",from:"DIY 공방",subject:R("[배송] 레진 폰케이스 키트","[出貨] 樹脂手機殼套組"),body:R(`압화 레진 키트 1세트
※ 생화는 3일 이상 눌러 말린 뒤 사용하세요`,`壓花樹脂套組 1 組
※ 鮮花請壓乾 3 天以上再使用`),at:k("2026-04-05 10:12")},{id:"sw-m3",from:"케이크 공방",subject:R("[예약 확정] 11/6 23:20 픽업","[預約確認] 11/6 23:20 取貨"),body:R(`생크림 딸기 케이크 1호
레터링: "1등 🐺"
초: 숫자 초 + 달 모양 초 1개`,`鮮奶油草莓蛋糕 1 號
寫字：「第一名 🐺」
蠟燭：數字蠟燭＋月亮造型蠟燭 1 根`),at:k("2026-11-02 14:00")}),e.voice.push({id:"sw-v4",title:R("형 잠꼬대","哥的夢話"),at:k("2026-01-14 07:10"),seconds:11,transcript:R("(작게) 도훈아... 계란말이 세 개... 경민이 몰래... (뒤척이는 소리)","（小聲）道勳……玉子燒三個……瞞著炅潣……（翻身的聲音）")},{id:"sw-v5",title:R("석촌호수 새벽","石村湖凌晨"),at:k("2026-04-05 03:05"),seconds:40,transcript:R("(바람 소리) 형 머리에 꽃잎... 아니에요. 그냥 예뻐서요. (형: 뭐가) 벚꽃이요. (형 웃음) ...형이요.","（風聲）哥頭上有花瓣……沒事。只是覺得很美。（哥：什麼）櫻花。（哥的笑聲）……是哥。")},{id:"sw-v6",title:R("형 메모장 소리 내서 읽기 (목소리 없는 날)","把哥的備忘錄唸出來（沒聲音的那天）"),at:k("2026-05-20 15:00"),seconds:24,transcript:R('형이 써 준 거 읽을게요. "오늘 네가 내 목소리야." ...형 이런 거 쓰면 제가 무대에서 어떻게 말해요.',"我唸哥寫給我的。「今天你就是我的聲音。」……哥寫這種東西，我在台上要怎麼說話。")},{id:"sw-v7",title:R("추석 옥상 통화 (일부)","中秋頂樓通話（片段）"),at:k("2026-09-26 22:40"),seconds:35,transcript:R("형 거기도 달 보여요? (형: 응. 엄청 크다) 같은 달이에요. 형이 저번에 같은 거 보면 된 걸로 하자고 했잖아요. 오늘은 된 걸로 할게요.","哥那邊也看得到月亮嗎？（哥：嗯。好大）是同一個月亮。哥之前說看著同樣的東西就算見面了。今天就算見面了。")},{id:"sw-v1",title:R("형 허밍 (몰래)","哥的哼歌（偷錄）"),at:k("2026-05-21 01:10"),seconds:48,transcript:R("(작은 허밍) 음~ 음음~ ...(목 아픈데도 계속 부름) ...도훈아 자? (조용) ...잘 자.","（小小的哼歌）嗯～嗯嗯～……（喉嚨痛還繼續哼）……道勳，睡了嗎？（安靜）……晚安。")},{id:"sw-v2",title:R("빗소리","雨聲"),at:k("2026-06-25 19:50"),seconds:30,transcript:R("(우산에 비 떨어지는 소리) 형 왼쪽으로 와요. 더. ...이제 1년 전이랑 반대네요. (형 웃음소리)","（雨打在傘上的聲音）哥往左邊來。再過來一點。……現在跟一年前反過來了呢。（哥的笑聲）")},{id:"sw-v3",title:R("23:59 연습","23:59 練習"),at:k("2026-11-06 22:40"),seconds:19,transcript:R("형 태어나줘서 고마워요. 그리고... 나 좋아해줘서. ...아 이거 소리 내서 하니까 너무 부끄럽다. 문자로 보내야지.","哥，謝謝你出生。還有……謝謝你喜歡我。……啊，唸出來好害羞。還是用傳的吧。")}),e.voice.sort((i,a)=>q(a.at)-q(i.at)),e.searches.unshift({q:R("벚꽃잎 말리는 법","櫻花瓣怎麼壓乾"),result:[{title:R("꽃잎 압화 하는 방법","花瓣壓花的方法"),body:R("두꺼운 책 사이에 키친타월을 깔고…","在厚書之間鋪上廚房紙巾…")}]},{q:R("알람 1초 전에 울리게","讓鬧鐘提早一秒響"),result:[{title:R("iPhone 알람은 분 단위만 설정 가능해요","iPhone 鬧鐘只能設定到分鐘"),body:R("23:59에 맞추고 미리 메시지를 써 두세요","設在 23:59 並先把訊息寫好")}]},{q:R("타이베이 망고빙수 숟가락","台北芒果冰 湯匙"),result:[{title:R("야시장 망고빙수 추천","夜市芒果冰推薦"),body:R("2인이면 큰 사이즈 하나에 숟가락 두 개…","兩個人點一份大碗配兩根湯匙…")}]}),e.calls.push({at:k("2026-09-26 22:05"),contactId:"sky",type:"outgoing",seconds:6130},{at:k("2026-10-11 00:03"),contactId:"sky",type:"incoming",seconds:95},{at:k("2026-05-20 23:50"),contactId:"sky",type:"incoming",seconds:1800}),e.calls.sort((i,a)=>q(a.at)-q(i.at)),e.alarms.unshift({time:"23:59",label:R("1등 🩵","第一名 🩵"),on:!0}),e.notes.push({id:"sw-n1",title:R("형이 좋아하는 것","哥喜歡的東西"),at:k("2026-09-01 02:00"),body:R(`형이 좋아하는 것 (계속 추가 중)

- 내가 웃는 거 (본인 피셜. 마이크 사건)
- 계란말이 나눠주기 (나한테 세 개)
- 귀 만지기 ← 이건 나 좋아한다는 뜻
- 우산 하나
- 바나나우유는 내가 좋아하는 건데 형도 좋아하게 됨
- 새벽 산책
- 내가 "형" 하고 부르는 거 (부르면 고개 돌리는 속도가 다름)
- 리더 말고 그냥 신유로 있는 시간

형이 싫어하는 것
- 내가 혼자 무서워하는 거
- 지는 거 (볼링 빼고. 볼링은 이제 포기함)`,`哥喜歡的東西（持續新增中）

- 我笑（本人說的。麥克風事件）
- 分玉子燒（給我三個）
- 摸耳朵 ← 這是喜歡我的意思
- 一把傘
- 香蕉牛奶本來是我喜歡的，結果哥也喜歡上了
- 凌晨散步
- 我叫他「哥」（被叫的時候轉頭的速度不一樣）
- 不當隊長、只當申惟的時間

哥討厭的東西
- 我一個人害怕
- 輸（保齡球除外。保齡球他已經放棄了）`)},{id:"sw-n2",title:R("형이랑 하고 싶은 것 (1년)","想跟哥做的事（一年）"),at:k("2026-11-06 21:30"),body:R(`형이랑 하고 싶은 것

☑ 벚꽃 새벽 산책 (4/5)
☑ 비 오는 날 내가 우산 들기 (6/25)
☑ 바다 (8/4, 촬영 말고는 반쯤 성공)
☑ 해외에서 같이 야시장 (8/22)
☑ 경민이형한테 같이 말하기 (10/12)
☑ 할로윈 커플 의상 (10/31, 바나나 논란)
☐ 형 생일 0시 1초 컷 ← 오늘
☐ 볼링 공식전 이기기
☐ 첫눈 오는 날 베란다
☐ 1224 1주년. 이번엔 내가 목도리 말고 다른 거
☐ 내년에도 이 리스트 새로 쓰기`,`想跟哥做的事

☑ 凌晨櫻花散步（4/5）
☑ 下雨天換我撐傘（6/25）
☑ 海邊（8/4，除了拍攝以外算成功一半）
☑ 在國外一起逛夜市（8/22）
☑ 一起跟炅潣哥說（10/12）
☑ 萬聖節情侶裝（10/31，香蕉爭議）
☐ 哥生日零點一秒就傳 ← 今天
☐ 正式保齡球比賽贏他
☐ 初雪那天的陽台
☐ 1224 一週年。這次送圍巾以外的東西
☐ 明年也重新寫一份這個清單`)}),e.photos.push({id:"sw-p1",at:k("2026-03-22 21:30"),emoji:"🎤",tint:"#f6d4d9",caption:R("엔딩 대참사 직캠 캡처 (형이 보내줌)","ending大慘案直拍截圖（哥傳給我的）")},{id:"sw-p2",at:k("2026-06-25 19:45"),emoji:"☔",tint:"#9fb4c7",caption:R("우산 아래, 형 쪽만 마른 어깨","傘下，只有哥那邊是乾的肩膀")},{id:"sw-p3",at:k("2026-10-31 21:10"),emoji:"🍌",tint:"#fff1a8",caption:R("달(이라고 주장하는) 머리띠","（他堅持是）月亮的髮箍")},{id:"sw-p4",at:k("2026-11-06 18:30"),emoji:"🎳",tint:"#c9d8f5",caption:R("픽업한 볼링공. 🎄 작게 보임","取回來的保齡球。看得到小小的 🎄")}),e.calendar.push({date:"2026-12-24",title:R("1주년 🎄 (볼링 리매치 아님)","一週年 🎄（不是保齡球復仇戰）"),color:"#bf5af2"},{date:"2026-11-07",title:R("🎂 형 생일 · 0시 1등","🎂 哥生日 · 零點第一"),color:"#ff375f"}),e.ai.push({id:"g-sweet",when:"week",title:R("1주년 선물 아이디어","一週年禮物點子"),turns:[{q:R("곧 1주년인데 작년엔 목도리 줬어. 이번엔 뭐가 좋을까","快一週年了，去年送了圍巾。今年送什麼好"),a:R(`작년 선물과 **이어지는** 선물이면 의미가 깊어져요.

- **목도리와 세트인 장갑**: "작년의 따뜻함 + 올해의 따뜻함"
- **1년 사진을 모은 작은 앨범**: 둘만 아는 날짜만 적어서
- **같은 장소 다시 가기**: 처음 마음을 전한 곳에서 같은 시간에

선물보다 **"기억하고 있었어"**가 전해지는 게 가장 중요해요.`,`能和去年的禮物**連在一起**，意義會更深。

- **和圍巾成套的手套**：「去年的溫暖＋今年的溫暖」
- **收集一年照片的小相簿**：只寫下你們兩人懂的日期
- **再去同一個地方**：在第一次說出心意的地方、同一個時間

比禮物更重要的是傳達出**「我一直記得」**。`)}]})}const Rt=e=>e.map(([t,s,o,r])=>({at:k(t),from:s,text:{ko:o,zh:r}})),hf=(e,t,s,o)=>({at:k(e),from:t,photo:{ko:s,zh:o}}),n0=(e,t,s)=>({at:k(e),from:t,sticker:s}),ue="me",Ce="shinyu",ff=[...Rt([["2025-11-07 00:03",ue,"형 생일 축하해요!!","哥生日快樂!!"],["2025-11-07 00:04",Ce,"3분 늦었다","晚了三分鐘"],["2025-11-07 00:04",Ce,"경민이가 1등","炅潣第一個"],["2025-11-07 00:05",ue,"경민이가 먼저 보냈어요??","炅潣先傳了??"],["2025-11-07 00:05",ue,"아 연습실에서 폰 없었어요ㅠ","啊我在練習室沒拿手機ㅠ"],["2025-11-07 00:06",Ce,"ㅋㅋ 괜찮아 고마워","ㅋㅋ 沒關係 謝謝"],["2025-11-07 00:07",ue,"내년엔 제가 꼭 1등 할게요","明年我一定第一個"],["2025-11-07 00:07",Ce,"기대한다","期待喔"]]),...Rt([["2026-02-14 21:10",ue,"형 팬분들이 준 초콜릿 너무 많아요","哥粉絲送的巧克力太多了"],["2026-02-14 21:11",Ce,"나눠 먹자","一起分著吃"],["2026-02-14 21:11",ue,"거실로 와요","來客廳"],["2026-02-14 21:40",Ce,"너 딸기 맛만 골라 먹었지","你只挑草莓口味吃吧"],["2026-02-14 21:41",ue,"형 거 남겨놨어요 다크","留了哥的 黑巧克力"],["2026-02-14 21:41",Ce,"내가 다크 좋아하는 거 어떻게 알았냐","你怎麼知道我喜歡黑巧克力"],["2026-02-14 21:42",ue,"형 좋아하는 것 (몰래 조사) 메모 있어요","我有「哥喜歡的東西（偷偷調查）」的備忘錄"],["2026-02-14 21:42",Ce,"...?","……?"]]),...Rt([["2026-03-14 20:00",ue,"형 오늘 무슨 날인지 알아요?","哥知道今天是什麼日子嗎？"],["2026-03-14 20:02",Ce,"화이트데이","白色情人節"],["2026-03-14 20:02",Ce,"...그리고 3월 14일","……還有3月14日"],["2026-03-14 20:03",ue,"기억하네요","你記得"],["2026-03-14 20:03",Ce,"손하트 같이 처음 한 날","第一次一起比手指愛心的日子"]]),n0("2026-03-14 20:04",ue,"🫶"),n0("2026-03-14 20:04",Ce,"🫶"),...Rt([["2026-04-09 02:20",Ce,"도훈아 아직 연습실이야?","道勳還在練習室？"],["2026-04-09 02:21",ue,"네 그 파트 한 번만 더요","對 那段再一次就好"],["2026-04-09 02:21",Ce,"편의점 갈래","要去便利商店嗎"],["2026-04-09 02:22",ue,"바나나우유요","香蕉牛奶"],["2026-04-09 02:22",Ce,"알아","知道"],["2026-04-09 02:40",Ce,"문 앞에 놓고 간다","放門口了"],["2026-04-09 02:41",ue,"형 들어와서 봐줘요","哥進來幫我看一下"],["2026-04-09 02:41",ue,"그 파트","那一段"],["2026-04-09 03:30",Ce,"이제 완벽해. 자러 가자","現在很完美了。去睡吧"]]),...Rt([["2026-05-20 10:05",Ce,"도훈아 나 목 쉬었어","道勳 我喉嚨啞了"],["2026-05-20 10:05",ue,"형 말하지 마요","哥不要說話"],["2026-05-20 10:06",ue,"카톡으로만 해요","只准用 Kakao"],["2026-05-20 10:06",ue,"꿀물 타서 방 앞에 둘게요","我泡蜂蜜水放你房門口"],["2026-05-20 10:20",Ce,"고마워","謝謝"],["2026-05-20 10:21",ue,"오늘 인터뷰는 제가 형 몫까지 말할게요","今天的訪談我把哥的份也說了"],["2026-05-20 10:21",Ce,"너 말 많아지는 거 싫은데","我不想讓你變得話太多"],["2026-05-20 10:22",ue,"작년에 형이 저 죽 사다준 거 갚는 거예요","這是在回報去年哥幫我買粥"]]),...Rt([["2026-06-13 23:10",ue,"형 방 몇 호예요","哥房間幾號"],["2026-06-13 23:10",Ce,"1204","1204"],["2026-06-13 23:11",ue,"저 1205예요 옆방","我 1205 隔壁"],["2026-06-13 23:11",ue,"벽 두드리면 대답해줘요","我敲牆的話要回應我"],["2026-06-13 23:12",Ce,"똑똑","叩叩"],["2026-06-13 23:12",ue,"ㅋㅋㅋㅋㅋ 진짜 들렸어요","ㅋㅋㅋㅋㅋ 真的聽到了"],["2026-06-13 23:13",Ce,"자라","睡吧"],["2026-06-13 23:13",ue,"똑","叩"]]),hf("2026-08-04 17:40",ue,"바다에서 눈 감은 형 (도촬)","在海邊閉著眼睛的哥（偷拍）"),...Rt([["2026-08-04 17:41",Ce,"또 찍었냐","又拍了"],["2026-08-04 17:41",ue,'"형 웃긴거" 아니고 "형 멋있는거" 폴더예요 이건',"這張不是「哥好笑的」，是「哥帥的」資料夾"],["2026-08-04 17:42",Ce,"폴더가 두 개야?","有兩個資料夾？"],["2026-08-04 17:42",ue,"비밀","祕密"]]),...Rt([["2026-09-26 15:00",ue,"형 우리 엄마가 형 송편 갖다주래요","哥我媽說要拿松片給你"],["2026-09-26 15:01",Ce,"어머님 감사하다고 전해줘","幫我謝謝伯母"],["2026-09-26 15:02",ue,"엄마가 형 팬이에요","我媽是哥的粉絲"],["2026-09-26 15:02",Ce,"ㅋㅋㅋ 진짜?","ㅋㅋㅋ 真的？"],["2026-09-26 15:03",ue,'"신유는 왜 이렇게 듬직하니" 이러셨어요',"她說「申惟怎麼這麼可靠」"],["2026-09-26 15:03",Ce,"너보다?","比你可靠？"],["2026-09-26 15:04",ue,"그건 아니고요","那倒不是"]])],mf=[{id:"kyungmin",contactId:"kyungmin",messages:Rt([["2026-11-02 23:00","kyungmin","형 저 비밀 지키는 거 자신 없어요","哥我沒自信能保守祕密"],["2026-11-02 23:01",ue,"경민아","炅潣"],["2026-11-02 23:01",ue,"작년에 형 생일 1등 한 거 너잖아","去年哥生日第一個祝福的是你吧"],["2026-11-02 23:02","kyungmin","헉 그거 아직도 기억해요?","天啊你還記得？"],["2026-11-02 23:02",ue,"올해는 내가 할 거야","今年換我"],["2026-11-02 23:03","kyungmin","알겠어요 형 양보할게요 🐰","好啦哥我讓你 🐰"],["2026-11-06 22:12","kyungmin","형 아까 진짜 들킬 뻔했어요","哥剛剛真的差點被發現"],["2026-11-06 22:12","kyungmin",'신유형이 "너 왜 웃어" 했어요',"申惟哥問我「你在笑什麼」"],["2026-11-06 22:13",ue,"그래서","然後呢"],["2026-11-06 22:13","kyungmin","방으로 뛰었어요","我就衝回房間了"]])},{id:"jihoon",contactId:"jihoon",messages:Rt([["2026-09-30 02:00","jihoon","형 또 소파예요?","哥又睡沙發？"],["2026-09-30 02:05",ue,"어떻게 알았어","你怎麼知道"],["2026-09-30 02:05","jihoon","방에 형 없어요","房間裡沒有哥"],["2026-09-30 02:06","jihoon","그리고 신유형 지금 담요 들고 거실 가는 소리 남","而且聽到申惟哥拿著毯子走去客廳的聲音"],["2026-09-30 02:06",ue,"...모른 척해","……裝作不知道"],["2026-09-30 02:07","jihoon","맨날 모른 척하는 중이에요 ㅋㅋ","我每天都在裝作不知道ㅋㅋ"]])},{id:"youngjae",contactId:"youngjae",messages:Rt([["2026-11-04 15:00","youngjae","케이크 레터링 뭐라고 할래","蛋糕上要寫什麼字"],["2026-11-04 15:02",ue,'"형 생일 축하해요 🐺"',"「哥生日快樂 🐺」"],["2026-11-04 15:02","youngjae","너무 너 같은데","也太像你了"],["2026-11-04 15:03",ue,"그래야 형이 알죠","這樣哥才會知道"],["2026-11-06 23:22","youngjae","픽업 완료. 생각보다 무겁다","取好了。比想像中重"],["2026-11-06 23:22",ue,"과일 많이 넣어달라고 했어요","我請他們多放水果"]])},{id:"hanjin",contactId:"hanjin",messages:Rt([["2026-11-05 20:00","hanjin","형 생일 노래 화음 연습해도 돼요?","哥我可以練生日歌和聲嗎？"],["2026-11-05 20:01",ue,"신유형 몰래","要瞞著申惟哥"],["2026-11-05 20:01","hanjin","화장실에서 할게요 🐼","我在廁所練 🐼"],["2026-11-05 20:30","hanjin","형 화장실 울려서 더 잘 들려요 ㅋㅋㅋ","哥廁所有回音更大聲了ㅋㅋㅋ"],["2026-11-05 20:31",ue,"...베란다로 가","……去陽台"]])}],pf=[{id:"voice",title:{ko:"형 목 쉬었을 때",zh:"哥喉嚨啞的時候"},at:k("2026-05-20 10:30"),body:{ko:`형 목 쉬었을 때

- 꿀물 (따뜻하게, 뜨겁지 않게)
- 말 걸지 않기
- 인터뷰 형 몫까지 대답하기
- 형이 "괜찮아"라고 써도 안 괜찮은 거임

작년에 형이 나한테 해준 거 그대로.`,zh:`哥喉嚨啞的時候

- 蜂蜜水（溫的，不要燙）
- 不要跟他說話
- 訪談把哥的份也回答
- 哥寫「沒事」就是有事

照著去年哥為我做的那樣。`}},{id:"folders",title:{ko:"사진 폴더 정리",zh:"照片資料夾整理"},at:k("2026-08-04 18:00"),body:{ko:`사진 폴더 정리

📁 형 웃긴거 (27)
📁 형 멋있는거 (14)
📁 형이 찍어준 나 (3) ← 너무 적음

→ 형한테 사진 좀 찍어달라고 하기`,zh:`照片資料夾整理

📁 哥好笑的（27）
📁 哥帥的（14）
📁 哥幫我拍的（3）← 太少了

→ 叫哥多幫我拍照`}}],xf=[{id:"m1",at:k("2026-02-14 21:30"),emoji:"🍫",tint:"#d9c2a8",caption:{ko:"나눠 먹은 초콜릿 (형은 다크)",zh:"分著吃的巧克力（哥是黑巧克力）"}},{id:"m2",at:k("2026-03-14 20:05"),emoji:"🫶",tint:"#f7e3ea",caption:{ko:"3월 14일 손하트",zh:"3月14日 手指愛心"}},{id:"m3",at:k("2026-04-09 02:45"),emoji:"🍌",tint:"#fff1b8",caption:{ko:"새벽 연습실 바나나우유",zh:"凌晨練習室的香蕉牛奶"}},{id:"m4",at:k("2026-05-20 10:10"),emoji:"🍯",tint:"#f6dfa4",caption:{ko:"형 방 앞 꿀물",zh:"放在哥房門口的蜂蜜水"}},{id:"m5",at:k("2026-06-13 23:15"),emoji:"🏨",tint:"#e2e8f0",caption:{ko:"1204 | 1205",zh:"1204 | 1205"}},{id:"m6",at:k("2026-08-04 17:40"),emoji:"🌊",tint:"#bfe3f5",caption:{ko:"형 멋있는거 #14 바다",zh:"哥帥的 #14 海邊"}},{id:"m7",at:k("2026-09-26 15:10"),emoji:"🥮",tint:"#e6e0cf",caption:{ko:"엄마가 싸준 송편",zh:"媽媽包的松片"}}],kf=[{q:{ko:"목 쉬었을 때 꿀물",zh:"喉嚨啞 蜂蜜水"},result:[{title:{ko:"목이 쉬었을 때 좋은 음료",zh:"喉嚨啞時適合的飲料"},body:{ko:"미지근한 꿀물, 배숙, 생강차. 말을 줄이는 게 가장 중요해요.",zh:"溫的蜂蜜水、梨湯、薑茶。最重要的是少說話。"}}]},{q:{ko:"다크초콜릿 추천",zh:"黑巧克力 推薦"},result:[{title:{ko:"카카오 70% 이상 다크초콜릿 TOP 5",zh:"可可 70% 以上黑巧克力 TOP 5"},body:{ko:"쌉싸름한 맛을 좋아한다면…",zh:"如果喜歡微苦的味道……"}}]},{q:{ko:"호텔 옆방 벽 두께",zh:"飯店 隔壁房 牆壁厚度"},result:[{title:{ko:"호텔 소음, 왜 들릴까",zh:"飯店噪音為什麼聽得到"},body:{ko:"일반적인 객실 벽은 노크 소리 정도는 전달돼요.",zh:"一般客房的牆壁會傳出敲門聲程度的聲音。"}}]}],gf=[{date:"2026-11-03",title:{ko:"볼링공 각인 주문",zh:"訂刻字保齡球"},color:"#bf5af2"},{date:"2026-11-05",title:{ko:"한진이 화음 연습 (베란다)",zh:"韓振練和聲（陽台）"},time:"20:00",color:"#ff9f0a"}],jf=[{id:"mom-open",when:"open:mom",delay:1500,actions:[{t:"msg",room:"mom",text:{ko:"도훈아 내일 신유 생일이지?",zh:"道勳 明天是申惟生日吧？"}},{t:"msg",room:"mom",text:{ko:"엄마가 미역국 끓이는 법 보내줄까",zh:"要媽媽傳海帶湯的做法給你嗎"}}]},{id:"kyungmin-open",when:"open:kyungmin",delay:1200,actions:[{t:"msg",room:"kyungmin",text:{ko:"형 저 지금 진짜 입 꾹 닫고 있어요 🤐",zh:"哥我現在嘴巴真的閉得緊緊的 🤐"}}]},{id:"jihoon-open",when:"open:jihoon",delay:1200,actions:[{t:"msg",room:"jihoon",text:{ko:"신유형 방 불 꺼졌다 켜졌다 해요",zh:"申惟哥房間的燈一下關一下開"}},{t:"msg",room:"jihoon",text:{ko:"편지 쓰는 거 아닐까요",zh:"該不會也在寫信吧"}}]},{id:"youngjae-open",when:"open:youngjae",delay:1200,actions:[{t:"photo",room:"youngjae",caption:{ko:"냉장고 맨 아래칸 케이크 상자",zh:"冰箱最下層的蛋糕盒"}}]}],yf={instagram:{me:"hoon.wolf",users:{"hoon.wolf":{name:{ko:"도훈",zh:"道勳"},bio:{ko:`🐺 줏대 있게
0314 🫶`,zh:`🐺 活得有主見
0314 🫶`},posts:9,followers:"1.9M",following:"5"},"yu.42_":{name:{ko:"신유",zh:"申惟"},bio:{ko:"🩵 42",zh:"🩵 42"},posts:7,followers:"2.2M",following:"5"},"kyungmin.p":{name:{ko:"경민",zh:"炅潣"},posts:8,followers:"1.7M",following:"5"},jihoon_06:{name:{ko:"지훈",zh:"志薰"},posts:6,followers:"1.6M",following:"5"},"young.jae":{name:{ko:"영재",zh:"英宰"},posts:5,followers:"1.5M",following:"5"},"hanjin.zz":{name:{ko:"한진",zh:"韓振"},posts:7,followers:"1.6M",following:"5"},tws_official:{name:"TWS",verified:!0,posts:1032,followers:"4.1M",following:"0"}},feed:[{id:"f1",by:"yu.42_",pic:{emoji:"🍜",tint:"#f3dcc4"},caption:{ko:"구석 라면 (사진: 도훈)",zh:"角落泡麵（攝影：道勳）"},likes:902100,at:k("2026-07-15 00:30"),comments:[{by:"hoon.wolf",text:{ko:"사진 잘 찍었죠",zh:"照片拍得不錯吧"}},{by:"jihoon_06",text:{ko:"저는 왜 안 불렀어요",zh:"為什麼沒叫我"}}]},{id:"f2",by:"hoon.wolf",pic:{emoji:"🫶",tint:"#f7e3ea"},caption:{ko:"0314 🫶 (아는 사람만 아는 날)",zh:"0314 🫶（只有知道的人才懂的日子）"},likes:1100340,at:k("2026-03-14 21:00"),comments:[{by:"yu.42_",text:"🫶"},{by:"kyungmin.p",text:{ko:"뭔 날인데요??",zh:"是什麼日子??"}}]},{id:"f3",by:"hanjin.zz",pic:{emoji:"🎳",tint:"#c9d8f5"},caption:{ko:"형들 볼링 대결 관전 중 (신유형 118)",zh:"觀戰哥哥們的保齡球對決（申惟哥 118）"},likes:540800,at:k("2026-08-23 23:10"),comments:[{by:"yu.42_",text:{ko:"숫자는 왜 쓰는데",zh:"為什麼要寫分數"}}]},{id:"f4",by:"tws_official",pic:{emoji:"🎂",tint:"#fbe3ec"},caption:{ko:"D-1 🩵 #신유 #SHINYU",zh:"D-1 🩵 #申惟 #SHINYU"},likes:830220,at:k("2026-11-06 12:00"),comments:[{by:"hoon.wolf",text:"🩵"}]}],stories:[{by:"yu.42_",frames:[{emoji:"🛋️",tint:"#e2d6cc",text:{ko:"누가 또 소파에서 잠",zh:"有人又在沙發上睡著了"}}]},{by:"young.jae",frames:[{emoji:"📦",tint:"#efe3d2",text:{ko:"(뭔가 픽업함)",zh:"（取了某樣東西）"}}]},{by:"kyungmin.p",frames:[{emoji:"🤐",tint:"#fff3c4",text:{ko:"아무것도 모름",zh:"什麼都不知道"}}]}],highlights:[{title:{ko:"형 웃긴거",zh:"哥好笑的"},frames:[{emoji:"😴",tint:"#d9d3ef",text:{ko:"#1 대기실",zh:"#1 休息室"}},{emoji:"🎳",tint:"#c9d8f5",text:{ko:"#2 레인 탓",zh:"#2 怪球道"}}]},{title:{ko:"연습생",zh:"練習生"},frames:[{emoji:"👟",tint:"#f3dcc4",text:{ko:"빌린 신발",zh:"借來的鞋"}}]}],dms:[{with:"yu.42_",messages:[{from:"yu.42_",text:{ko:"이 사진 언제 찍었냐",zh:"這張照片什麼時候拍的"},at:k("2026-11-02 00:40")},{from:"hoon.wolf",text:{ko:"형 웃긴거 폴더 #27",zh:"哥好笑的資料夾 #27"},at:k("2026-11-02 00:41")},{from:"yu.42_",text:{ko:"몇 장까지 있는 건데",zh:"到底有幾張"},at:k("2026-11-02 00:41")},{from:"hoon.wolf",text:{ko:"비밀 🐺",zh:"祕密 🐺"},at:k("2026-11-02 00:42")}]},{with:"young.jae",messages:[{from:"young.jae",text:{ko:"케이크 레터링 뭐라고 할래",zh:"蛋糕上要寫什麼字"},at:k("2026-11-04 15:00")},{from:"hoon.wolf",text:{ko:'"형 생일 축하해요 🐺"',zh:"「哥生日快樂 🐺」"},at:k("2026-11-04 15:02")},{from:"young.jae",text:{ko:"너무 너 같은데",zh:"也太像你了"},at:k("2026-11-04 15:02")}]}]},x:{mine:["tws_dohoon_","wolf_note"],accounts:{tws_dohoon_:{name:{ko:"도훈 🐺",zh:"道勳 🐺"},bio:{ko:"TWS · 42 🐺",zh:"TWS · 42 🐺"},followers:"1.1M",following:"6"},wolf_note:{name:"🐺",bio:{ko:"메모장",zh:"筆記本"},locked:!0,followers:"0",following:"0"},"42_daily":{name:{ko:"사이 일기",zh:"42 日記"},bio:"",followers:"21K",following:"300"},yudoz_moment:{name:{ko:"유도즈 모먼트 아카이브",zh:"惟勳時刻存檔"},bio:"",followers:"58K",following:"12"}},timeline:[{id:"t1",by:"42_daily",text:{ko:"내일 신유 생일 🩵 작년엔 신유가 도훈이 생일 0시에 제일 먼저 축하했는데 올해는 도훈이가 갚을 차례",zh:"明天是申惟生日 🩵 去年申惟在道勳生日零點第一個祝福，今年輪到道勳回報了"},at:k("2026-11-06 22:00"),likes:12100,rts:4300,replies:210},{id:"t2",by:"yudoz_moment",text:{ko:"오늘 출근길 도훈이 손에 든 쇼핑백 볼링공 모양 아님?? 🎳",zh:"今天上班路上道勳手上的購物袋不是保齡球的形狀嗎?? 🎳"},at:k("2026-11-06 11:40"),likes:22400,rts:8100,replies:640,pic:{emoji:"🛍️",tint:"#e8f0d8"}},{id:"t3",by:"tws_dohoon_",text:{ko:"42 내일 다들 바빠요 🐺",zh:"42 明天大家都很忙喔 🐺"},at:k("2026-11-06 21:12"),likes:19e4,rts:35e3,replies:9800}],posts:{tws_dohoon_:[{id:"m1",by:"tws_dohoon_",text:{ko:"42 내일 다들 바빠요 🐺",zh:"42 明天大家都很忙喔 🐺"},at:k("2026-11-06 21:12"),likes:19e4,rts:35e3,replies:9800}],wolf_note:[{id:"d4",by:"wolf_note",text:{ko:"3분 늦었다. 내년엔 무조건 1등",zh:"晚了三分鐘。明年一定要第一個"},at:k("2025-11-07 00:10"),likes:0,rts:0,replies:0},{id:"d5",by:"wolf_note",text:{ko:"형 목소리 없는 날. 내가 형 몫까지 말함. 생각보다 힘들다 형은 맨날 이걸 했구나",zh:"哥沒有聲音的一天。我把哥的份也說了。比想像中累，原來哥每天都在做這種事"},at:k("2026-05-20 23:00"),likes:0,rts:0,replies:0},{id:"d6",by:"wolf_note",text:{ko:"벽 너머 똑똑. 이게 뭐라고 좋냐",zh:"牆的另一邊叩叩。這有什麼好開心的"},at:k("2026-06-13 23:20"),likes:0,rts:0,replies:0},{id:"d7",by:"wolf_note",text:{ko:"형 멋있는거 폴더 14장째. 형한테는 비밀",zh:"「哥帥的」資料夾第 14 張。對哥保密"},at:k("2026-08-04 18:10"),likes:0,rts:0,replies:0},{id:"d1",by:"wolf_note",text:{ko:"편지 써놓고 보낼까 말까 30분째",zh:"寫好信之後猶豫要不要傳已經三十分鐘了"},at:k("2026-11-06 23:35"),likes:0,rts:0,replies:0},{id:"d2",by:"wolf_note",text:{ko:"형이 작년에 해준 거 그대로 돌려주기. 12시 정각.",zh:"把哥去年為我做的原封不動還給他。十二點整。"},at:k("2026-11-01 19:20"),likes:0,rts:0,replies:0},{id:"d3",by:"wolf_note",text:{ko:"3월 14일은 형이 처음 손하트 같이 해준 날. 메모 비번 이걸로 함",zh:"3月14日是哥第一次跟我一起比手指愛心的日子。備忘錄密碼就用這個"},at:k("2026-10-18 16:40"),likes:0,rts:0,replies:0}]},trends:[{tag:"#신유_생일축하해",count:{ko:"게시물 15.2만",zh:"15.2 萬則貼文"}},{tag:"#TWS",count:{ko:"게시물 61만",zh:"61 萬則貼文"}},{tag:"#유도즈",count:{ko:"게시물 4.8만",zh:"4.8 萬則貼文"}}]},music:[{id:"pl1",title:{ko:"형 생일 BGM",zh:"哥生日 BGM"},by:{ko:"도훈",zh:"道勳"},pic:{emoji:"🎂",tint:"#fbe3ec"},songs:[{title:"Happy Birthday (Piano)",artist:"Lullaby Room",dur:142},{title:"마지막 축제",artist:"TWS",dur:188},{title:"BFF",artist:"TWS",dur:183}]},{id:"pl2",title:{ko:"신유형한테 추천할 노래",zh:"要推薦給申惟哥的歌"},by:{ko:"도훈",zh:"道勳"},pic:{emoji:"🩵",tint:"#cfe6f7"},songs:[{title:"첫 만남은 계획대로 되지 않아",artist:"TWS",dur:191},{title:"unplugged boy",artist:"TWS",dur:176},{title:"내가 S면 넌 나의 N이 되어줘",artist:"TWS",dur:170}]}],places:[{id:"dorm",name:{ko:"숙소",zh:"宿舍"},x:48,y:46,emoji:"🏠",kind:{ko:"집",zh:"住家"},note:{ko:"신유형 방 = 작전 장소",zh:"申惟哥房間 = 作戰地點"}},{id:"bakery",name:{ko:"케이크 공방",zh:"蛋糕工作室"},x:30,y:22,emoji:"🎂",kind:{ko:"최근",zh:"最近"},note:{ko:"23:20 픽업 (영재형)",zh:"23:20 取貨（英宰哥）"}},{id:"ball",name:{ko:"볼링샵",zh:"保齡球用品店"},x:72,y:66,emoji:"🎁",kind:{ko:"최근",zh:"最近"},note:{ko:"이니셜 각인 S.Y.",zh:"刻縮寫 S.Y."}},{id:"bowl",name:{ko:"스트라이크 볼링장",zh:"Strike 保齡球館"},x:25,y:68,emoji:"🎳",kind:{ko:"즐겨찾기",zh:"收藏"},note:{ko:"118 : 121 의 성지",zh:"118 : 121 的聖地"}}],mails:[{id:"m1",from:"PLEDIS 스케줄팀",subject:{ko:"[공지] 11/7(토) 스케줄 안내",zh:"[公告] 11/7（六）行程通知"},body:{ko:`11:00 숙소 출발
※ 신유 멤버 생일 현장 서포트 예정`,zh:`11:00 宿舍出發
※ 申惟成員生日，現場將有應援`},at:k("2026-11-06 18:00"),unread:!0},{id:"m2",from:"볼링샵",subject:{ko:"각인 주문 제작이 완료되었습니다",zh:"刻字訂製已完成"},body:{ko:`각인 문구: S.Y.
볼 무게: 12파운드
"선물용 포장" 옵션이 적용되었습니다.`,zh:`刻字內容：S.Y.
球重：12 磅
已套用「禮品包裝」選項。`},at:k("2026-11-03 15:02")},{id:"m3",from:"Apple",subject:{ko:"메모 암호를 설정하셨습니다",zh:"您已設定備忘錄密碼"},body:{ko:'잠긴 메모 암호 힌트: "같이 해준 날"',zh:"上鎖備忘錄密碼提示：「一起比的日子」"},at:k("2026-10-18 16:42")},{id:"draft1",box:"draft",from:"나",subject:{ko:"형한테",zh:"給哥"},body:{ko:"(카톡으로 보낼 거임. 여기엔 연습만)",zh:"（會用 Kakao 傳。這裡只是練習）"},at:k("2026-11-06 23:30")}],weather:{city:{ko:"서울",zh:"首爾"},now:9,desc:{ko:"흐림",zh:"多雲"},hi:14,lo:6,hours:[["지금","☁️",9],["00","☁️",9],["01","☁️",8],["02","🌧️",8],["03","🌧️",7],["04","☁️",7],["05","☁️",6],["06","🌅",6]],days:[[{ko:"오늘",zh:"今天"},"☁️",6,14],[{ko:"토",zh:"週六"},"⛅",7,15],[{ko:"일",zh:"週日"},"☀️",5,13],[{ko:"월",zh:"週一"},"🌧️",8,12],[{ko:"화",zh:"週二"},"☁️",6,11]]},lockedNote:{title:{ko:"🔒 형한테 못 한 말",zh:"🔒 沒對哥說出口的話"},password:"0314",hint:{ko:"같이 해준 날",zh:"一起比的日子"},at:k("2026-10-18 16:45"),body:{ko:`형한테 못 한 말

처음엔 손하트를 나 혼자 했다.
3월 14일에 형이 처음으로 같이 해줬다.
그날 연습 끝나고 집 가는 길이 좀 좋았다.

형은 맨날 "리더니까"라고 하는데
나는 형이 리더가 아니어도 형 옆에 있을 거다.

소파에서 자는 건, 사실
형이 담요 덮어주러 오는 발소리 듣는 게 좋아서다.

이건 절대 말 안 할 거다.`,zh:`沒對哥說出口的話

一開始只有我一個人比手指愛心。
3月14日，哥第一次跟我一起比。
那天練習結束回家的路上有點開心。

哥總是說「因為我是隊長」，
可是就算哥不是隊長，我也會在哥身邊。

睡沙發這件事，其實是因為
我喜歡聽哥來幫我蓋毯子的腳步聲。

這個我絕對不會說出口。`}},hiddenPhotos:[{id:"h1",at:k("2026-01-10 21:20"),emoji:"😴",tint:"#d9d3ef",caption:{ko:"형 웃긴거 #1 대기실에서 조는 형",zh:"哥好笑的 #1 在休息室打瞌睡的哥"}},{id:"h2",at:k("2026-01-31 22:41"),emoji:"😤",tint:"#c9d8f5",caption:{ko:"형 웃긴거 #9 118점 보고 레인 탓하는 형",zh:"哥好笑的 #9 看到118分在怪球道的哥"}},{id:"h3",at:k("2026-07-15 00:12"),emoji:"🍜",tint:"#f3dcc4",caption:{ko:"형 웃긴거 #18 라면 끓이다 젓가락 떨어뜨린 형",zh:"哥好笑的 #18 煮泡麵時筷子掉了的哥"}},{id:"h4",at:k("2026-11-02 00:30"),emoji:"🙈",tint:"#f7e3ea",caption:{ko:"형 웃긴거 #27 (형한테 들킴)",zh:"哥好笑的 #27（被哥發現了）"}}],deletedPhotos:[{id:"x1",at:k("2026-11-06 23:40"),emoji:"💌",tint:"#fbe3ec",caption:{ko:"편지 캡처 (보낼까 말까 하다 지움)",zh:"信的截圖（猶豫要不要傳，後來刪了）"}}]},rn=e=>e.map(([t,s,o,r])=>({at:k(t),from:s,text:{ko:o,zh:r}})),De="me",ve="sky",vf=["sky",{name:"🩵",status:{ko:".",zh:"."}}],Fi={id:"sky",contactId:"sky",hidden:!0,messages:[...rn([["2025-12-25 00:20",De,"형","哥"],["2025-12-25 00:20",De,"이 계정 저예요","這個帳號是我"],["2025-12-25 00:29",De,"좋아해요 형","我喜歡你 哥"],["2025-12-25 00:36",ve,"6분 동안 답장 못 한 거 생각하느라 그런 거야","這六分鐘沒回，是因為在想"],["2025-12-25 00:37",ve,"나도","我也是"],["2025-12-25 00:37",ve,"꽤 오래전부터","從很久以前開始"],["2025-12-25 00:38",De,"베란다로 나와요","來陽台"],["2025-12-25 00:39",De,"목도리 하고","戴著圍巾"],["2025-12-25 01:30",ve,"이 계정 이름 🩵 로 바꿨다","我把這個帳號改名成 🩵 了"],["2025-12-25 01:30",ve,"너는 🌙","你是 🌙"]]),...rn([["2026-01-30 00:00",ve,"생일 축하해","生日快樂"],["2026-01-30 00:00",ve,"편지는 원래 계정으로 보냈고","信用原本的帳號傳了"],["2026-01-30 00:01",ve,"이건 편지에 못 쓴 말","這是信裡寫不進去的話"],["2026-01-30 00:01",ve,"태어나줘서 고마워. 그리고 나 좋아해줘서","謝謝你出生。還有謝謝你喜歡我"],["2026-01-30 00:02",De,"형 오늘 나 울리려고 작정했죠","哥今天是決心要讓我哭吧"]]),...rn([["2026-04-02 23:59",De,"형 1분 뒤에 100일이에요","哥再一分鐘就一百天了"],["2026-04-03 00:00",ve,"100일 축하해 도훈아","一百天快樂 道勳"],["2026-04-03 00:00",De,"형 또 1초 컷","哥又是一秒就傳"],["2026-04-03 00:01",ve,"원래 그래","本來就這樣"],["2026-04-03 00:02",ve,"연습실 끝나고 편의점 앞 벤치","練習結束後便利商店前的長椅"],["2026-04-03 00:02",ve,"바나나우유 두 개 사놨어","買好兩瓶香蕉牛奶了"]]),...rn([["2026-05-02 14:10",De,"형 큰일 났어요","哥大事不好了"],["2026-05-02 14:10",De,"경민이가 제 목걸이 봤어요","炅潣看到我的項鍊了"],["2026-05-02 14:12",ve,"뭐라고 했어","你怎麼說"],["2026-05-02 14:12",De,'"팬분이 준 거"라고',"說「粉絲送的」"],["2026-05-02 14:13",ve,"...형 것도 똑같은데","……我的也是一樣的"],["2026-05-02 14:13",De,"그래서 형은 오늘 목폴라 입어요","所以哥今天穿高領"],["2026-05-02 14:14",ve,"5월인데?","五月欸？"],["2026-05-02 14:14",De,"형 목 쉬었잖아요 핑계 있음","哥喉嚨啞了，有藉口"]]),...rn([["2026-06-13 23:30",ve,"벽 한 번 더 두드려봐","再敲一次牆"],["2026-06-13 23:30",De,"똑똑","叩叩"],["2026-06-13 23:31",ve,"들려","聽到了"],["2026-06-13 23:31",ve,"벽 하나 차이인데 보고 싶다","只隔一面牆，卻好想見你"],["2026-06-13 23:32",De,"형 그런 말 원래 계정으론 절대 안 하잖아요","哥用原本的帳號絕對不會說這種話"],["2026-06-13 23:32",ve,"그래서 여기 있는 거야","所以才有這裡"]]),...rn([["2026-07-12 00:00",ve,"200일","兩百天"],["2026-07-12 00:01",De,"형 기억력 무서워요","哥的記憶力好可怕"],["2026-07-12 00:01",ve,"캘린더에 다 써놨다","我都寫在行事曆上了"],["2026-07-12 00:02",De,'"볼링 리매치"라고 써놓은 거 다 기념일이죠',"寫成「保齡球復仇戰」的那些全都是紀念日吧"],["2026-07-12 00:02",ve,"들켰네","被發現了"]]),...rn([["2026-08-04 21:00",De,"형 아까 바다에서 눈 감은 거","哥剛剛在海邊閉著眼睛"],["2026-08-04 21:00",De,"무슨 생각 했어요?","在想什麼？"],["2026-08-04 21:03",ve,"내년에도 너랑 오고 싶다","明年也想跟你一起來"],["2026-08-04 21:03",ve,"촬영 말고","不是拍攝"]]),...rn([["2026-10-20 00:00",De,"형 300일이에요","哥三百天了"],["2026-10-20 00:00",De,"이번엔 제가 먼저","這次我先"],["2026-10-20 00:01",ve,"...졌다","……輸了"],["2026-10-20 00:01",De,"볼링도 이거 하나만 이기면 돼요","保齡球只要贏這一次就好"]]),...rn([["2026-11-06 21:05",ve,"도훈아","道勳"],["2026-11-06 21:05",ve,"다들 나 피하는 거 서프라이즈지","大家都在躲我是因為驚喜吧"],["2026-11-06 21:06",De,"여기선 거짓말 안 하기로 했으니까","說好在這裡不說謊"],["2026-11-06 21:06",De,"대답 안 할게요","我不回答"],["2026-11-06 21:07",ve,"ㅋㅋㅋ 그게 대답이야","ㅋㅋㅋ 那就是答案了"],["2026-11-06 21:07",ve,"모르는 척할게","我會裝作不知道"]])]},zf=[{id:"sky-open",when:"open:sky",delay:1500,actions:[{t:"msg",room:"sky",text:{ko:"여기 들어왔네",zh:"你進來這裡了"}},{t:"msg",room:"sky",text:{ko:"단톡이랑 원래 계정은 너네 작전용이고",zh:"群組和原本的帳號是你們的作戰用"}},{t:"msg",room:"sky",text:{ko:"여기선 그냥 말해도 돼",zh:"在這裡就直接說吧"},gap:2600},{t:"sticker",room:"sky",sticker:"🩵"}]}],wf=[{id:"rules",title:{ko:"볼링 규칙 (형이 정함)",zh:"保齡球規則（哥定的）"},at:k("2026-01-02 01:20"),body:{ko:`볼링 규칙 (형이 정함)

1. 단체 레인에선 티 내지 않기
2. 연습 땐 프로답게
3. 구석 얘기는 🩵 에서만
4. 비번은 그날 🎄
5. 기념일은 캘린더에 "볼링 리매치"로 쓰기 ← 형 아이디어`,zh:`保齡球規則（哥定的）

1. 在團體球道不要露餡
2. 練習時要專業
3. 角落的事只在 🩵 說
4. 密碼用那天 🎄
5. 紀念日在行事曆上寫成「保齡球復仇戰」← 哥的點子`}},{id:"novel",title:{ko:"4월 3일, 편의점 앞",zh:"4月3日，便利商店前"},at:k("2026-04-03 02:30"),body:{ko:`4월 3일, 편의점 앞

연습이 끝난 건 새벽 한 시였다.
형은 먼저 나가서 편의점 앞 벤치에 앉아 있었다. 바나나우유 두 개가 형 옆에 나란히 놓여 있었다.

"100일인데 바나나우유예요?"
"너 이거 좋아하잖아."
맞는 말이라 할 말이 없었다.

형 옆에 앉자 형이 빨대를 꽂아서 내 쪽으로 밀었다.
봄인데도 밤바람은 차가웠다. 형 후드 안에서 체인이 살짝 반짝였다.

"형, 우리 이거 언제까지 비밀로 해요?"
"...너는 어떻게 하고 싶은데."
"지금이 좋아요. 아무도 몰라도."
형이 웃었다. 리더 말고, 그냥 신유형 얼굴로.

편의점 불빛 아래에서 형이 내 손등을 한 번 톡 쳤다.
손하트. 연습생 때 내가 형한테 하던 거.
이번엔 형이 먼저였다.`,zh:`4月3日，便利商店前

練習結束時已經凌晨一點。
哥先出去，坐在便利商店前的長椅上。兩瓶香蕉牛奶整齊地放在他旁邊。

「一百天就送香蕉牛奶？」
「你不是喜歡這個嗎。」
他說得對，我無話可說。

我在哥旁邊坐下，他插好吸管推到我這邊。
明明是春天，晚風還是很冷。哥的連帽衫裡，鍊子微微閃了一下。

「哥，我們要保密到什麼時候？」
「……你想怎麼做。」
「我喜歡現在這樣。就算沒有人知道。」
哥笑了。不是隊長的表情，只是申惟哥的表情。

在便利商店的燈光下，哥輕輕敲了一下我的手背。
手指愛心。是我練習生時期對哥做的那個。
這次，是哥先比的。`}}],Nf=[{id:"s1",at:k("2026-04-03 01:20"),emoji:"🍌",tint:"#3a3f5c",caption:{ko:"편의점 앞 벤치, 바나나우유 두 개",zh:"便利商店前的長椅，兩瓶香蕉牛奶"}},{id:"s2",at:k("2026-05-02 14:20"),emoji:"💍",tint:"#e5e7eb",caption:{ko:"티셔츠 안에 숨긴 체인",zh:"藏在 T 恤裡的鍊子"}}],bf=[{date:"2026-04-03",title:{ko:"볼링 리매치",zh:"保齡球復仇戰"},color:"#bf5af2"},{date:"2026-07-12",title:{ko:"볼링 리매치",zh:"保齡球復仇戰"},color:"#bf5af2"},{date:"2026-10-20",title:{ko:"볼링 리매치",zh:"保齡球復仇戰"},color:"#bf5af2"}],Sf={id:"pl-1224",title:"1224",by:{ko:"도훈",zh:"道勳"},pic:{emoji:"🩵",tint:"#3a3f5c"},songs:[{title:"Snow on the Window",artist:"Lullaby Room",dur:205},{title:"unplugged boy",artist:"TWS",dur:176},{title:"마지막 축제",artist:"TWS",dur:188}]},jt=e=>e.map(([t,s,o,r])=>({at:k(t),from:s,text:{ko:o,zh:r}})),Cf=(e,t,s)=>({at:k(e),from:t,sticker:s}),V="me",H="sky",Hn="kyungmin",_f=[...jt([["2026-02-14 22:30",V,"형 단톡에 돌린 초콜릿이요","哥，在群組發的那些巧克力"],["2026-02-14 22:30",V,"하트 모양은 하나뿐이었어요","心形的只有一個"],["2026-02-14 22:31",H,"알아. 내 거만 하트였어","我知道。只有我的是心形"],["2026-02-14 22:31",H,'영재가 "형 것만 왜 하트예요?" 했을 때',"英宰問「為什麼只有哥的是心形？」的時候"],["2026-02-14 22:32",V,"틀이 하나 남아서요 라고 했죠","我說「模具剩一個」"],["2026-02-14 22:32",H,"근데 다른 틀은 다 별이었어","可是其他模具都是星星"],["2026-02-14 22:33",V,"형 그거 먹었어요?","哥吃了嗎？"],["2026-02-14 22:33",H,"아니. 냉동실","沒有。在冷凍庫"],["2026-02-14 22:34",V,"먹으라고 만든 건데요","是做給你吃的欸"],["2026-02-14 22:34",H,"아까워서","捨不得"]]),...jt([["2026-04-05 01:50",H,"석촌호수 지금 사람 없대","聽說石村湖現在沒人"],["2026-04-05 01:50",H,"마스크 두 개 챙겨","帶兩個口罩"],["2026-04-05 01:51",V,"형 지금 데이트 신청하는 거죠","哥現在是在約我吧"],["2026-04-05 01:51",H,"산책 신청","是約散步"],["2026-04-05 03:20",V,"형 머리에 꽃잎 붙은 거 일부러 안 떼줬어요","哥頭上沾的花瓣我故意沒幫你拿掉"],["2026-04-05 03:20",H,"알아. 거울 보고 알았다","我知道。照鏡子才發現"],["2026-04-05 03:21",H,"나도 네 후드에 하나 넣어놨어","我也在你帽T的帽子裡放了一片"],["2026-04-05 03:22",V,"...진짜 있네","……真的有"],["2026-04-05 03:22",V,"이거 말려서 폰케이스에 넣을 거예요","我要把它壓乾放進手機殼"]]),...jt([["2026-03-22 19:40",H,"오늘 신호 바꿀까","今天換個暗號吧"],["2026-03-22 19:40",H,"귀는 이제 팬들이 다 알아","耳朵現在粉絲都知道了"],["2026-03-22 19:41",V,"그럼 뭐로 해요","那要用什麼"],["2026-03-22 19:41",H,"마이크 두 번 톡톡","麥克風敲兩下"],["2026-03-22 19:42",V,"형 그거 원래 음향 체크할 때 하는 거잖아요","哥那本來就是試音時會做的"],["2026-03-22 19:42",H,"그래서 완벽하지","所以才完美"],["2026-03-22 21:15",V,"형 오늘 엔딩 때 마이크 톡톡 네 번 했어요","哥今天ending敲了四下麥克風"],["2026-03-22 21:16",H,"두 번은 좋아해. 두 번은 많이","兩下是喜歡你。另外兩下是很多"],["2026-03-22 21:16",V,"그런 건 미리 말해줘야죠 나 무대에서 웃었잖아요","這種事要先說啊，我在台上笑出來了"],["2026-03-22 21:17",H,"그 웃음 직캠 조회수 50만","那個笑容的直拍觀看數五十萬"]]),...jt([["2026-05-20 13:10",H,"오늘 말 못 함","今天不能說話"],["2026-05-20 13:10",H,"대신 여기서 수다 떨 거임","所以要在這裡講個夠"],["2026-05-20 13:11",V,"형 쉬어야죠. 손가락도","哥要休息啊。手指也是"],["2026-05-20 13:11",H,"손가락은 멀쩡함","手指好好的"],["2026-05-20 13:12",H,"오늘 네가 내 파트 대신 말할 때","今天你代替我講我那段的時候"],["2026-05-20 13:12",H,'"우리 리더가 오늘 목이 아파서요" 한 거',"說「我們隊長今天喉嚨痛」"],["2026-05-20 13:13",H,'"우리" 할 때 좀 설렜다',"說「我們」的時候有點心動"],["2026-05-20 13:13",V,"형 목소리 없으니까 더 솔직해졌어요","哥沒有聲音之後變得更坦率了"],["2026-05-20 13:14",H,"목 나을 때까지 이렇게 할까","在喉嚨好之前都這樣吧"],["2026-05-20 13:14",V,"목 나아도 이렇게 해요","喉嚨好了也這樣"]]),...jt([["2026-06-25 18:30",V,"형 우산 있어요?","哥有傘嗎？"],["2026-06-25 18:31",H,"있는데 없다고 할게","有，但我會說沒有"],["2026-06-25 18:31",V,"ㅋㅋㅋㅋ 정문 앞이요","ㅋㅋㅋㅋ 正門口"],["2026-06-25 19:40",V,"1년 전에 우산 같이 쓸 때","一年前一起撐傘的時候"],["2026-06-25 19:40",V,'엘리베이터에서 "형" 하고 "아니에요" 한 거 기억해요?',"在電梯裡我叫了「哥」又說「沒事」，你記得嗎？"],["2026-06-25 19:41",H,"그거 1년 동안 생각했어","那件事我想了一整年"],["2026-06-25 19:42",V,"그때 하려던 말","那時候想說的話"],["2026-06-25 19:42",V,"형 어깨 젖는 거 싫어요. 형 좋아해서","我不想看哥肩膀濕掉。因為我喜歡哥"],["2026-06-25 19:43",H,"...1년 늦었어","……晚了一年"],["2026-06-25 19:43",V,"그래서 오늘은 우산 제가 들었잖아요","所以今天是我撐傘啊"]]),...jt([["2026-07-28 23:05",V,"형 오늘 예능에서","哥今天在綜藝上"],["2026-07-28 23:05",V,"그 MC형이랑 손하트 했죠","跟那個MC哥比了手指愛心吧"],["2026-07-28 23:06",H,"대본이었어","是劇本"],["2026-07-28 23:06",V,"알아요","我知道"],["2026-07-28 23:06",V,"그냥 손하트는 제 거라서","只是手指愛心是我的"],["2026-07-28 23:08",H,"도훈아 너 지금 질투하는 거야?","道勳，你現在是在吃醋嗎？"],["2026-07-28 23:08",V,"네","對"],["2026-07-28 23:09",H,"...솔직하네","……真坦率"],["2026-07-28 23:09",H,"방으로 갈게. 손하트 100번 해줄게","我去你房間。比一百次愛心給你"],["2026-07-28 23:10",V,"세볼 거예요","我會數"]]),Cf("2026-07-28 23:40",H,"🫶"),...jt([["2026-07-28 23:40",H,"100번 완료","一百次完成"],["2026-07-28 23:41",V,"87번이었어요","是八十七次"],["2026-07-28 23:41",H,"...다시 갈게","……我再過去"]]),...jt([["2026-08-22 23:50",H,"야시장에서 네가 사준 망고빙수","你在夜市買給我的芒果冰"],["2026-08-22 23:50",H,"숟가락 하나로 먹은 거 스태프 아무도 못 봤지","只用一根湯匙吃的事，工作人員都沒看到吧"],["2026-08-22 23:51",V,"한진이가 봤어요","韓振看到了"],["2026-08-22 23:51",H,"...뭐래","……他說什麼"],["2026-08-22 23:52",V,'"형들 숟가락 하나밖에 안 줬어요? 제가 더 받아올게요" 하고 뛰어갔어요',"他說「他們只給一根湯匙嗎？我再去拿」就跑走了"],["2026-08-22 23:52",H,"한진이 천사다","韓振是天使"],["2026-08-22 23:53",V,'오늘 팬분들이 "도훈 신유 사랑해" 중국어로 외쳤어요',"今天粉絲用中文喊「道勳申惟我愛你們」"],["2026-08-22 23:53",H,'"我也是" 라고 할 뻔했다',"我差點回「我也是」"]]),...jt([["2026-09-26 22:00",V,"형 엄마가 아까","哥，我媽剛剛"],["2026-09-26 22:00",V,'"요즘 연애하니? 얼굴이 폈다" 했어요',"問我「最近在談戀愛嗎？氣色變好了」"],["2026-09-26 22:01",H,"뭐라고 했어","你怎麼說"],["2026-09-26 22:01",V,'"신유형이 잘 챙겨줘서요"',"我說「因為申惟哥很照顧我」"],["2026-09-26 22:02",H,"그거 거의 고백인데","那根本就是告白"],["2026-09-26 22:02",V,'엄마가 "신유한테 송편 싸 줘라" 하셨어요',"我媽說「包點松餅給申惟帶去」"],["2026-09-26 22:03",H,"어머님 최고","伯母最棒"],["2026-09-26 22:03",V,"형 영상통화 돼요?","哥可以視訊嗎？"],["2026-09-26 22:04",H,"이어폰 끼고 옥상 올라갈게","我戴耳機上頂樓"]]),...jt([["2026-10-09 01:10",V,"형 저 경민이형한테는 말하고 싶어요","哥，我想跟炅潣哥說"],["2026-10-09 01:12",H,"아직은 아니야","現在還不行"],["2026-10-09 01:12",V,"언제요","那要什麼時候"],["2026-10-09 01:14",H,"모르겠어. 내가 준비가 안 됐어","不知道。我還沒準備好"],["2026-10-09 01:15",V,"형은 맨날 형 혼자 준비해요","哥總是一個人在準備"],["2026-10-09 01:15",V,"반반 하자면서요","不是說好一人一半嗎"],["2026-10-09 01:30",H,"오늘은 그만 얘기하자","今天先別說了"],["2026-10-10 23:58",V,"형","哥"],["2026-10-10 23:58",V,"이틀 동안 형이랑 말 안 하니까","兩天沒跟哥說話"],["2026-10-10 23:59",V,"단톡에서 형 말에 리액션만 하는 거 너무 힘들어요","在群組只能對哥的話按反應，好累"],["2026-10-11 00:01",H,"나도","我也是"],["2026-10-11 00:02",H,"연습실","練習室"],["2026-10-11 02:30",H,"아까 한 말 진심이야","剛剛說的是真心的"],["2026-10-11 02:30",H,"경민이한테 같이 말하자. 내가 먼저 말할게","一起跟炅潣說吧。我先開口"],["2026-10-11 02:31",V,"형이 먼저 하면 반칙인데","哥先說是犯規"],["2026-10-11 02:31",H,"이번 반칙은 봐줘","這次犯規就原諒我吧"]]),...jt([["2026-10-12 21:40",V,"형 경민이형 반응","哥，炅潣哥的反應"],["2026-10-12 21:40",V,'"알았어요. 1월부터"',"「我知道啊。從一月開始」"],["2026-10-12 21:41",H,"1월부터 알았대. 귀 때문에","說從一月就知道了。因為耳朵"],["2026-10-12 21:41",V,'그리고 "축하해요. 근데 연습실에선 티 좀 덜 내요" 래요',"然後說「恭喜。不過在練習室收斂一點」"],["2026-10-12 21:42",H,"우리 티 냈어?","我們有露餡嗎？"],["2026-10-12 21:42",V,"형 저 볼 때 눈이 하트래요","說哥看我的時候眼睛是愛心"],["2026-10-12 21:43",H,"...그건 못 고친다","……那個改不了"]]),...jt([["2026-10-31 20:00",H,"할로윈 라이브 의상","萬聖節直播的服裝"],["2026-10-31 20:00",H,"너 늑대 하고 나 달 하자","你當狼，我當月亮"],["2026-10-31 20:01",V,"달 의상이 어딨어요","哪有月亮的服裝"],["2026-10-31 20:01",H,"노란 머리띠","黃色髮箍"],["2026-10-31 20:02",V,"형 그거 그냥 바나나 같아요","哥那看起來就是香蕉"],["2026-10-31 20:02",H,"바나나우유 좋아하잖아","你不是喜歡香蕉牛奶嗎"],["2026-10-31 22:30",V,'라이브 댓글 "늑대가 달 보고 울부짖네" 래요',"直播留言說「狼對著月亮嚎叫」"],["2026-10-31 22:30",H,"팬들이 우리보다 서사 잘 짠다","粉絲比我們還會寫故事"]]),...jt([["2026-11-01 00:10",V,"형 생일 알람 맞춰놨어요","哥的生日鬧鐘設好了"],["2026-11-01 00:10",V,"11월 6일 23:59","11月6日 23:59"],["2026-11-01 00:11",H,"1분 전 알람은 왜","為什麼要提早一分鐘"],["2026-11-01 00:11",V,"작년엔 3분 늦었으니까요","因為去年晚了三分鐘"],["2026-11-01 00:12",V,"올해는 1등 할 거예요. 1초 컷","今年要拿第一。一秒就傳"],["2026-11-01 00:12",H,"...작년 3분 기다린 거 어떻게 알았어","……你怎麼知道我去年等了三分鐘"],["2026-11-01 00:13",V,"형 X 비밀 계정이요","哥的X祕密帳號"],["2026-11-01 00:13",H,"그거 어떻게 찾았어","你怎麼找到的"],["2026-11-01 00:14",V,"형 폰 비번 제 생일이잖아요","哥的手機密碼是我生日啊"]])],Mf=jt([["2026-10-12 22:30",Hn,"도훈아","道勳"],["2026-10-12 22:30",Hn,"아까 말해줘서 고마워","謝謝你們剛剛告訴我"],["2026-10-12 22:31",Hn,"신유형 말할 때 손 떨리더라","申惟哥說的時候手在抖"],["2026-10-12 22:31",V,"형이요?","哥？"],["2026-10-12 22:32",Hn,"응. 우리 리더가","嗯。我們的隊長耶"],["2026-10-12 22:32",Hn,"그러니까 잘해라. 형 많이 용기 낸 거야","所以你要好好對他。哥鼓起很大的勇氣"],["2026-10-12 22:33",V,"알아요. 고마워요 형","我知道。謝謝哥"],["2026-10-12 22:33",Hn,"대신 숙소에서 둘이 같은 후드 입고 나오는 건 좀 자제","不過在宿舍兩個人穿同一件帽T出來這種事收斂一點"],["2026-10-12 22:34",V,"그건 형 후드였는데","那件是哥的帽T"],["2026-10-12 22:34",Hn,"그러니까 더 자제","所以才更要收斂"]]),Ef=[{id:"n-d1",title:{ko:"우리만 아는 계절 — 도훈 1. 거울 앞",zh:"只有我們知道的季節 — 道勳 1. 鏡子前"},at:k("2026-03-14 23:30"),body:{ko:`우리만 아는 계절 — 도훈 1. 거울 앞

연습생 때, 형은 늘 거울 맨 앞줄에 있었다.
나는 두 줄 뒤에서 형 어깨를 보며 동작을 따라 했다.

어느 날 쉬는 시간, 형이 거울에 대고 손하트를 만들었다. 혼자 하는 장난이었다.
나는 형 뒤에서, 거울 속 형 손하트 옆에 내 손하트를 붙였다.
거울 속에서 하트 두 개가 나란히 섰다.

형이 거울로 나를 보고 웃었다.
그게 3월 14일이었다.

그날 이후로 나는 거울을 볼 때 형을 먼저 찾는다.
무대 모니터에서도, 엘리베이터에서도, 숙소 화장실 거울에서도.
형은 모른다. 아니, 이제는 안다.
이 메모를 쓰는 지금, 형은 내 옆에서 자고 있으니까.`,zh:`只有我們知道的季節 — 道勳 1. 鏡子前

練習生時期，哥總是在鏡子的最前排。
我在後面兩排，看著哥的肩膀跟著做動作。

有一天休息時間，哥對著鏡子比了手指愛心。是一個人玩的小把戲。
我站在哥後面，把我的手指愛心貼到鏡子裡哥的愛心旁邊。
鏡子裡，兩顆愛心並排站著。

哥從鏡子裡看著我笑了。
那天是3月14日。

從那天起，我看鏡子時都會先找哥。
舞台監視器、電梯、宿舍廁所的鏡子都是。
哥不知道。不對，現在他知道了。
因為寫這則備忘錄的現在，哥就睡在我旁邊。`}},{id:"n-d2",title:{ko:"우리만 아는 계절 — 도훈 2. 3분",zh:"只有我們知道的季節 — 道勳 2. 三分鐘"},at:k("2026-04-20 02:00"),body:{ko:`우리만 아는 계절 — 도훈 2. 3분

작년 11월 7일, 나는 형 생일 축하 메시지를 3분 늦게 보냈다.
이유는 간단하다. 쓰고 지우느라.

"형 생일 축하해요"는 너무 평범했고,
"형 태어나줘서 고마워요"는 너무 티가 났고,
"형 좋아해요"는 보낼 수 없었다.

결국 0시 3분에 "형 생축🎂"을 보냈다. 제일 바보 같은 버전으로.

그 3분 동안 형이 휴대폰을 보며 기다렸다는 건, 형의 비밀 계정을 보고 알았다.
"0시. 안 옴. 1분. 안 옴. 3분. 왔다. 생축 네 글자에 웃음."

그 글을 읽고 나는 화장실에 가서 조금 울었다.
그리고 결심했다.
내년에는 1등을 하자. 1초 컷으로.
그리고 네 글자 말고, 진짜 하고 싶은 말을 보내자.`,zh:`只有我們知道的季節 — 道勳 2. 三分鐘

去年11月7日，我晚了三分鐘才傳哥的生日祝福。
原因很簡單。寫了又刪。

「哥生日快樂」太普通，
「謝謝哥出生」太明顯，
「我喜歡哥」不能傳。

最後零點三分，我傳了「哥生快🎂」。最笨的那個版本。

那三分鐘哥一直盯著手機在等——我是看了哥的祕密帳號才知道的。
「零點。沒來。一分。沒來。三分。來了。四個字就讓我笑了。」

讀完那篇，我跑去廁所哭了一下。
然後下定決心。
明年要拿第一。一秒就傳。
而且不傳四個字，要傳真正想說的話。`}},{id:"n-d3",title:{ko:"우리만 아는 계절 — 도훈 3. 마이크",zh:"只有我們知道的季節 — 道勳 3. 麥克風"},at:k("2026-03-23 01:30"),body:{ko:`우리만 아는 계절 — 도훈 3. 마이크

엔딩 요정 차례였다. 카메라가 내 얼굴로 다가왔다.
그때 형이 마이크를 톡, 톡 두 번 쳤다.
좋아해.

그리고 또 톡, 톡.
많이.

나는 카메라 앞에서 웃어버렸다. 엔딩 요정이 아니라 그냥 웃는 사람이 됐다.
팬들은 그 장면을 "도훈 엔딩 대참사"라고 불렀고, 조회수는 50만이 넘었다.

대기실에서 형은 아무렇지 않게 물을 마셨다.
"형 그거 반칙이에요."
"뭐가."
"미리 말 안 하고 두 번 더 한 거."
형은 물병 뚜껑을 닫으며 작게 말했다.
"미리 말하면 네가 안 웃잖아."

나는 형이 내 웃는 얼굴을 그렇게까지 보고 싶어 하는 줄 몰랐다.
50만 명이 본 그 웃음은, 사실 한 사람한테 보낸 거였다.`,zh:`只有我們知道的季節 — 道勳 3. 麥克風

輪到ending妖精了。鏡頭朝我的臉靠近。
這時哥敲了麥克風兩下。叩、叩。
喜歡你。

然後又叩、叩。
很多。

我在鏡頭前笑了出來。不是ending妖精，只是一個在笑的人。
粉絲把那一幕叫做「道勳ending大慘案」，觀看數超過五十萬。

在休息室，哥若無其事地喝水。
「哥那是犯規。」
「什麼。」
「沒先說就多敲兩下。」
哥一邊蓋上水瓶一邊小聲說：
「先說了你就不會笑了。」

我不知道哥那麼想看我笑。
五十萬人看到的那個笑容，其實是給一個人的。`}},{id:"n-d4",title:{ko:"우리만 아는 계절 — 도훈 4. 1년 늦은 대답",zh:"只有我們知道的季節 — 道勳 4. 晚了一年的回答"},at:k("2026-06-26 00:30"),body:{ko:`우리만 아는 계절 — 도훈 4. 1년 늦은 대답

다시 장마였다. 정문 앞에 형이 서 있었다. 손에는 아무것도 없이.
"우산 없어요?"
"없어."
형 가방 옆 주머니에 접이식 우산이 꽂혀 있는 게 보였다. 나는 모른 척했다.

이번엔 내가 우산을 들었다. 그리고 형 쪽으로 기울였다.
형은 밀어내지 않았다. 그게 1년 전과 달랐다.

엘리베이터 거울. 1년 전과 같은 자리.
형 앞머리의 물방울을 털어주다가, 이번엔 손을 멈추지 않았다.
"형."
"응."
"형 어깨 젖는 거 싫어요. 형 좋아해서."

형이 거울 속에서 나를 봤다.
"1년 늦었어."
"알아요. 그래서 이번엔 끝까지 말했잖아요."

엘리베이터가 도착하는 소리가 났다.
문이 열리기 직전, 형이 내 손등을 톡 쳤다.
1년 전 그 "아니에요"가, 1년 걸려 대답을 받았다.`,zh:`只有我們知道的季節 — 道勳 4. 晚了一年的回答

又是梅雨季。哥站在正門口，手上什麼都沒拿。
「沒帶傘嗎？」
「沒有。」
我看到哥包包側袋插著一把摺疊傘。我裝作沒看到。

這次換我撐傘。然後往哥那邊斜。
哥沒有推回來。這是和一年前不一樣的地方。

電梯的鏡子。和一年前同樣的位置。
我幫哥撥掉瀏海上的水珠，這次手沒有停下來。
「哥。」
「嗯。」
「我不想看哥肩膀濕掉。因為我喜歡哥。」

哥在鏡子裡看著我。
「晚了一年。」
「我知道。所以這次我有說完啊。」

電梯到了的聲音響起。
門打開前的那一瞬間，哥輕輕敲了一下我的手背。
一年前的那句「沒事」，花了一年才得到回答。`}},{id:"n-d5",title:{ko:"우리만 아는 계절 — 도훈 5. 반칙",zh:"只有我們知道的季節 — 道勳 5. 犯規"},at:k("2026-10-11 03:30"),body:{ko:`우리만 아는 계절 — 도훈 5. 반칙

이틀 동안 형이랑 말을 안 했다.
단톡에서 형이 "내일 10시"라고 쓰면 나는 👍 를 눌렀다. 그게 다였다.
👍 하나 누르는 데 손가락이 이렇게 무거울 줄 몰랐다.

자정 1분 전에 결국 내가 먼저 보냈다. 힘들다고.
형은 "나도"라고 했다. 그리고 "연습실".

연습실 불은 이번에도 반만 켜져 있었다.
형은 거울 앞에 앉아 있었다. 그날처럼.
"나는 내가 다 지키면 되는 줄 알았어."
형이 거울을 보며 말했다.
"근데 네가 같이 지키고 싶다고 하는 거, 그게 더 든든하더라."

형은 경민이형한테 같이 말하자고 했다. 자기가 먼저 말하겠다고.
"형이 먼저 하면 반칙인데."
"이번 반칙은 봐줘."

나는 봐줬다.
형이 먼저 하는 반칙은, 언제나 내가 지고 싶은 게임이니까.`,zh:`只有我們知道的季節 — 道勳 5. 犯規

我和哥兩天沒說話。
群組裡哥寫「明天十點」，我就按 👍。只有這樣。
我不知道按一個 👍 手指會這麼沉重。

午夜前一分鐘，終究是我先傳了。說我好累。
哥說「我也是」。然後是「練習室」。

練習室的燈這次也只開了一半。
哥坐在鏡子前。就像那天一樣。
「我以為只要我一個人守住就好。」
哥看著鏡子說。
「可是你說想一起守，那讓我更安心。」

哥說要一起跟炅潣哥說。說他會先開口。
「哥先說是犯規。」
「這次犯規就原諒我吧。」

我原諒了。
哥先出手的犯規，永遠是我想輸的那場比賽。`}},{id:"n-d6",title:{ko:"우리만 아는 계절 — 도훈 6. 23:59",zh:"只有我們知道的季節 — 道勳 6. 23:59"},at:k("2026-11-06 20:00"),body:{ko:`우리만 아는 계절 — 도훈 6. 23:59

오늘 밤 11시 59분에 알람이 울린다.
알람 이름은 "1등".

준비한 것:
- 볼링공 (형 이름, 그리고 🩵)
- 편지 (다섯 번 다시 씀. 형이 작년에 한 것처럼)
- 바나나우유 두 개 (편의점 앞 벤치용)
- 멤버들 작전 (형은 모르는 척하는 중)

보낼 말은 정해놨다. 네 글자 말고.
"형, 태어나줘서 고마워요. 그리고 나를 좋아해줘서."
작년 형 생일에 하고 싶었던 말이고, 올해 1월 형이 나한테 해준 말이다.

1년 전 나는 3분 늦었다.
올해 나는 1초도 늦지 않을 것이다.
그리고 그 1초 뒤에, 형은 아마 귀를 만질 것이다.`,zh:`只有我們知道的季節 — 道勳 6. 23:59

今晚11點59分鬧鐘會響。
鬧鐘名稱是「第一名」。

準備好的東西：
- 保齡球（刻著哥的名字，還有 🩵）
- 信（重寫了五次。就像哥去年那樣）
- 兩瓶香蕉牛奶（便利商店前長椅用）
- 成員們的作戰（哥正在裝作不知道）

要傳的話已經決定好了。不是四個字。
「哥，謝謝你出生。還有謝謝你喜歡我。」
那是去年哥生日時我想說的話，也是今年一月哥對我說的話。

一年前我晚了三分鐘。
今年我一秒都不會遲到。
然後在那一秒之後，哥大概會摸耳朵吧。`}}],$f=[{id:"sx1",at:k("2026-02-14 21:00"),emoji:"🍫",tint:"#5a3a2e",caption:{ko:"별 모양 다섯 개, 하트 하나",zh:"五顆星星，一顆愛心"}},{id:"sx2",at:k("2026-04-05 02:40"),emoji:"🌸",tint:"#f7d6e0",caption:{ko:"석촌호수 새벽, 형 머리 위 꽃잎",zh:"石村湖凌晨，哥頭上的花瓣"}},{id:"sx3",at:k("2026-04-06 12:00"),emoji:"📱",tint:"#e9e4f5",caption:{ko:"폰케이스 안 말린 벚꽃잎",zh:"手機殼裡壓乾的櫻花瓣"}},{id:"sx4",at:k("2026-08-22 22:10"),emoji:"🥭",tint:"#ffcf5c",caption:{ko:"타이베이 야시장 망고빙수, 숟가락 하나",zh:"台北夜市芒果冰，一根湯匙"}},{id:"sx5",at:k("2026-09-26 22:30"),emoji:"🌕",tint:"#1d2238",caption:{ko:"추석 보름달 영상통화 캡처",zh:"中秋滿月視訊截圖"}},{id:"sx6",at:k("2026-10-31 21:00"),emoji:"🐺",tint:"#3b3b4f",caption:{ko:"늑대와 (바나나 같은) 달",zh:"狼和（像香蕉的）月亮"}}],Tf=[{date:"2026-02-14",title:{ko:"볼링 리매치",zh:"保齡球復仇戰"},color:"#bf5af2"},{date:"2026-04-05",title:{ko:"🌸",zh:"🌸"},color:"#bf5af2"},{date:"2026-10-12",title:{ko:"경민이형 ✔",zh:"炅潣哥 ✔"},color:"#bf5af2"},{date:"2026-11-06",title:{ko:"23:59 알람 = 1등",zh:"23:59 鬧鐘＝第一名"},color:"#bf5af2"}],Pf=[{id:"sd1",by:"wolf_note",text:{ko:"냉동실에 하트 하나. 안 먹는대. 아깝대",zh:"冷凍庫裡一顆愛心。說不吃。說捨不得"},at:k("2026-02-14 23:00"),likes:0,rts:0,replies:0},{id:"sd2",by:"wolf_note",text:{ko:"톡톡 = 좋아해. 톡톡 = 많이. 무대에서 웃은 이유",zh:"叩叩＝喜歡你。叩叩＝很多。在台上笑出來的原因"},at:k("2026-03-22 23:30"),likes:0,rts:0,replies:0},{id:"sd3",by:"wolf_note",text:{ko:"1년 늦은 대답 완료",zh:"晚了一年的回答，完成"},at:k("2026-06-25 23:50"),likes:0,rts:0,replies:0},{id:"sd4",by:"wolf_note",text:{ko:"87번. 다시 왔다. 결국 200번 넘음",zh:"八十七次。又來了。最後超過兩百次"},at:k("2026-07-29 00:30"),likes:0,rts:0,replies:0},{id:"sd5",by:"wolf_note",text:{ko:"👍 하나가 이렇게 무거울 줄",zh:"沒想到一個 👍 會這麼重"},at:k("2026-10-10 22:00"),likes:0,rts:0,replies:0},{id:"sd6",by:"wolf_note",text:{ko:"알람 이름: 1등",zh:"鬧鐘名稱：第一名"},at:k("2026-11-01 00:20"),likes:0,rts:0,replies:0}],Lf=[{id:"g-long",when:"month",title:{ko:"오래 비밀 지키는 연인 팁",zh:"長期保密的戀人小技巧"},turns:[{q:{ko:"주변에 말 못 하는 연애를 오래 하려면 뭐가 제일 중요해?",zh:"如果要長期談一段不能跟身邊人說的戀愛，什麼最重要？"},a:{ko:`비밀을 지키는 연애에서 특히 중요한 건 이런 것들이에요.

1. **둘 사이의 솔직함**: 밖에서 숨기는 만큼 둘이 있을 땐 더 솔직하게.
2. **같은 속도**: 누군가에게 말할지, 언제 말할지 한 사람만 정하지 않기.
3. **작은 의식**: 둘만 아는 신호나 기념일이 관계를 단단하게 해 줘요.
4. **혼자 짊어지지 않기**: 불안은 나눠야 작아져요.

숨기는 대상은 관계지, 서로에 대한 마음이 아니라는 걸 자주 확인해 주세요.`,zh:`保密的戀愛中特別重要的是這些：

1. **兩人之間的坦白**：在外面藏多少，兩人獨處時就更坦白多少。
2. **同樣的步調**：要不要跟誰說、什麼時候說，不要只由一個人決定。
3. **小小的儀式**：只有兩人懂的暗號或紀念日，會讓關係更穩固。
4. **不要一個人扛**：不安要分著扛才會變小。

要常常確認：要藏的是這段關係，不是對彼此的心意。`}},{q:{ko:"한 명한테만 먼저 말해도 될까? 제일 믿는 친구",zh:"可以先只跟一個人說嗎？最信任的朋友"},a:{ko:"두 분이 **함께 합의했다면** 좋은 선택일 수 있어요. 믿을 수 있는 한 사람이 알고 있으면 혼자 버티는 느낌이 줄어들어요. 다만 꼭 같이, 혹은 서로 동의한 순서로 말해 주세요.",zh:"如果兩位**一起同意了**，那會是不錯的選擇。有一個可以信任的人知道，就比較不會有獨自撐著的感覺。不過一定要一起說，或用彼此同意的順序說。"}}]},{id:"g-chain",when:"month",title:{ko:"반지 티 안 나게 하고 다니는 법",zh:"戴戒指又不被發現的方法"},turns:[{q:{ko:"커플링을 매일 하고 싶은데 티 안 나게 하는 방법?",zh:"想每天戴情侶戒指，但不想被發現，有什麼方法？"},a:{ko:`많이들 쓰는 방법이에요.

- **목걸이 체인에 끼우기**: 옷 안에 넣으면 거의 안 보여요.
- **다른 반지와 레이어드**: 여러 개 끼면 하나가 눈에 띄지 않아요.
- **안쪽 각인**: 바깥은 심플하게, 의미는 안쪽에.

체인은 너무 얇으면 끊어질 수 있으니 조금 튼튼한 걸로 고르세요.`,zh:`很多人會用這些方法：

- **穿在項鍊上**：放進衣服裡幾乎看不到。
- **和其他戒指疊戴**：戴好幾個，其中一個就不顯眼。
- **內側刻字**：外面簡單，意義藏在裡面。

鍊子太細可能會斷，選稍微堅固一點的。`}},{q:{ko:"안쪽에 뭐라고 새기는 게 좋아?",zh:"內側刻什麼比較好？"},a:{ko:"둘만 아는 날짜나 기호가 제일 좋아요. 이름보다 들킬 위험이 적고, 보는 사람마다 의미가 다르게 읽히거든요. 예를 들어 **🎄 1224** 같은 거요.",zh:"只有兩人懂的日期或符號最好。比名字更不容易被發現，而且每個人看了都會解讀成不同意思。例如像是 **🎄 1224** 這樣。"}}]}],Ys=e=>e.map(([t,s,o,r])=>({at:k(t),from:s,text:{ko:o,zh:r}})),Ne="me",Ee={id:"dohoon",owner:{name:{ko:"도훈",zh:"道勳"},device:{ko:"도훈의 iPhone",zh:"道勳的 iPhone"},status:{ko:"줏대 있게 살자",zh:"活得有主見一點"}},accent:"#ff8fb1",wallpaper:"radial-gradient(110% 65% at 90% 0%, #ffe3ec 0%, transparent 55%), radial-gradient(90% 60% at 0% 35%, #ff9dbd 0%, transparent 60%), radial-gradient(120% 70% at 80% 85%, #8a3f6d 0%, transparent 65%), radial-gradient(100% 60% at 0% 100%, #2b1430 0%, transparent 70%), linear-gradient(165deg, #ffc8da, #c4618d 55%, #3a1838)",lockEmoji:"🐺",passcode:"1107",startAt:k("2026-11-06 23:57"),wifi:"TWS_42_5G",devices:[{ko:"도훈의 AirPods Pro",zh:"道勳的 AirPods Pro"},{ko:"숙소 거실 TV",zh:"宿舍客廳電視"}],lockNotices:[{app:"kakao",icon:"💬",title:{ko:"형 생일 작전방 (신유형 X) · 영재",zh:"哥生日作戰群（申惟哥不在）· 英宰"},body:{ko:"도훈아 너 폰 비번 신유 생일로 바꿨다며 ㅋㅋ",zh:"道勳啊 聽說你把手機密碼改成申惟的生日了ㅋㅋ"},time:{ko:"2분 전",zh:"2 分鐘前"}},{app:"calendar",icon:"📅",title:{ko:"캘린더 · 내일",zh:"行事曆 · 明天"},body:{ko:"🎂 신유형 생일 (11월 7일)",zh:"🎂 申惟哥生日（11月7日）"},time:{ko:"오후 9:00",zh:"下午9:00"}}],contacts:{shinyu:{name:{ko:"신유형",zh:"申惟哥"},status:{ko:"42 🩵",zh:"42 🩵"},phone:"010-1107-2003"},kyungmin:{name:{ko:"경민이",zh:"炅潣"},phone:"010-2007-0416"},jihoon:{name:{ko:"지훈이",zh:"志薰"},phone:"010-2006-0328"},youngjae:{name:{ko:"영재형",zh:"英宰哥"},phone:"010-2005-0531"},hanjin:{name:{ko:"한진이",zh:"韓振"},phone:"010-2006-0102"},mom:{name:{ko:"엄마",zh:"媽媽"},phone:"010-6612-3045"},manager:{name:{ko:"매니저형",zh:"經紀人哥"},phone:"010-3392-1180"}},rooms:[{id:"shinyu",contactId:"shinyu",messages:[...Ys([["2026-01-30 00:00","shinyu","도훈아 생일 축하해","道勳啊 生日快樂"],["2026-01-30 00:01",Ne,"형 이번에도 12시 정각이네요","哥這次也是十二點整欸"],["2026-01-30 00:01","shinyu","원래 그래","本來就這樣"],["2026-01-30 00:02",Ne,"편지 아직 저장해놨어요","信我還存著喔"],["2026-01-30 00:02","shinyu","지워","刪掉"],["2026-01-30 00:02",Ne,"싫은데요 🐺","不要 🐺"],["2026-07-14 23:50","shinyu","도훈아 잠깐 구석으로 와봐","道勳啊 過來角落一下"],["2026-07-14 23:50",Ne,"형 지금 밤 12시예요","哥現在晚上十二點欸"],["2026-07-14 23:51","shinyu","그러니까 와","所以才叫你來"],["2026-07-14 23:58",Ne,"라면 끓여준다고 하면 갈게요","說要煮泡麵給我的話我就去"],["2026-07-14 23:58","shinyu","이미 물 올림","水已經燒了"],["2026-07-14 23:58",Ne,"가요","來了"],["2026-08-22 21:10","shinyu","볼링 리매치 언제 할래","保齡球復仇戰什麼時候比"],["2026-08-22 21:12",Ne,"형 아직도 1월 거 생각해요?","哥還在想一月那場？"],["2026-08-22 21:12","shinyu","118 대 121이었어","是 118 比 121"],["2026-08-22 21:12","shinyu","3점 차이","差三分"],["2026-08-22 21:13",Ne,"정확하게 기억하네ㅋㅋㅋㅋ","記得好清楚ㅋㅋㅋㅋ"],["2026-08-22 21:13","shinyu","메모해놨지","我有記在備忘錄"],["2026-09-30 02:14","shinyu","너 또 소파지","你又在沙發了吧"],["2026-09-30 07:30",Ne,"형 담요 고마워요","哥 謝謝毯子"],["2026-09-30 07:31","shinyu","방에서 자라니까","叫你回房間睡"],["2026-09-30 07:31",Ne,"형이 덮어주니까 계속 소파에서 자는 건데","因為哥會幫我蓋，所以我才一直睡沙發的"],["2026-09-30 07:33","shinyu","...","……"],["2026-09-30 07:33","shinyu","내일부터 안 덮어줌","明天開始不幫你蓋了"],["2026-09-30 07:34",Ne,"거짓말 🐺","騙人 🐺"],["2026-10-18 16:20",Ne,"형 그거 기억나요?","哥記得那個嗎？"],["2026-10-18 16:20",Ne,"연습생 때 내가 형 볼 때마다 손하트 했던 거","練習生時我每次看到哥都比手指愛心"],["2026-10-18 16:24","shinyu","당연하지","當然"],["2026-10-18 16:24","shinyu","갑자기 왜","怎麼突然問"],["2026-10-18 16:25",Ne,"그냥요","沒什麼"],["2026-10-18 16:25",Ne,"형 그때 진짜 낯가렸는데","哥那時候真的很怕生"],["2026-10-18 16:26","shinyu","너도 그때 엄청 차가워 보였어","你那時候看起來也超冷淡"],["2026-10-18 16:26",Ne,"근데 손하트는 했잖아요","但我有比愛心啊"],["2026-10-18 16:27","shinyu","그래서 고마웠지","所以我很感謝"],["2026-10-18 16:27","shinyu","ㅋㅋ","ㅋㅋ"],["2026-11-06 20:40","shinyu","도훈아 내일 몇 시 출발이야","道勳啊明天幾點出發"],["2026-11-06 20:52",Ne,"11시요","十一點"],["2026-11-06 20:53","shinyu","근데 오늘 왜 다들 나 피해","可是今天大家怎麼都在躲我"],["2026-11-06 20:58",Ne,"기분 탓이에요","是哥的錯覺"],["2026-11-06 20:58","shinyu","경민이가 나 보자마자 방으로 뛰어 들어갔어","炅潣一看到我就衝回房間了"],["2026-11-06 21:01",Ne,"경민이 원래 그래요","炅潣本來就那樣"]])]},{id:"plan",group:{name:{ko:"형 생일 작전방 (신유형 X)",zh:"哥生日作戰群（申惟哥不在）"},members:["youngjae","hanjin","jihoon","kyungmin"]},unread:2,messages:Ys([["2026-11-01 19:00",Ne,"신유형 생일 0시 서프라이즈 할 거예요","申惟哥生日零點要辦驚喜"],["2026-11-01 19:00","hanjin","좋아요!!","好啊!!"],["2026-11-01 19:01","jihoon","작년에 형이 도훈이형한테 해준 거 갚는 거죠","是要回報去年哥幫道勳哥辦的那次吧"],["2026-11-01 19:01",Ne,"맞아","對"],["2026-11-01 19:02","kyungmin","형 케이크는 뭐로 해요","哥蛋糕要什麼"],["2026-11-01 19:03",Ne,"형 생크림 좋아해 과일 많은 거","哥喜歡鮮奶油的 水果多的"],["2026-11-01 19:03","youngjae","오 바로 나옴","喔秒答"],["2026-11-01 19:04","jihoon","작년에 신유형도 바로 대답했는데","去年申惟哥也是秒答"],["2026-11-06 22:10","kyungmin","아까 형한테 들킬 뻔했어요","剛剛差點被哥發現"],["2026-11-06 22:10","kyungmin","그래서 방으로 뛰어감","所以我衝回房間了"],["2026-11-06 22:11",Ne,"그거 형이 나한테 물어봤어","哥有來問我那件事"],["2026-11-06 23:30","youngjae","케이크 픽업 완료","蛋糕取好了"],["2026-11-06 23:31","hanjin","편지는 형이 써요?","信是哥寫嗎？"],["2026-11-06 23:32",Ne,"...썼어","……寫了"],["2026-11-06 23:55","youngjae","도훈아 너 폰 비번 신유 생일로 바꿨다며 ㅋㅋ","道勳啊 聽說你把手機密碼改成申惟的生日了ㅋㅋ"],["2026-11-06 23:55","jihoon","신유형이 도훈이형 생일로 해놔서 따라 한 거래요","說是因為申惟哥設成道勳哥的生日，所以他學的"]])},{id:"tws",group:{name:"TWS 🩵",members:["shinyu","youngjae","hanjin","jihoon","kyungmin"]},messages:Ys([["2026-11-06 22:00","shinyu","내일 11시 출발","明天十一點出發"],["2026-11-06 22:01","kyungmin","넵 리더님","是的隊長"],["2026-11-06 22:02","shinyu","근데 다들 왜 단톡에서만 대답해","可是大家怎麼都只在群組回"],["2026-11-06 22:02","shinyu","거실에 아무도 없어","客廳一個人都沒有"],["2026-11-06 22:04","hanjin","졸려서요","因為很睏"],["2026-11-06 22:04","jihoon","저도요","我也是"],["2026-11-06 22:05","shinyu","10시인데","才十點"]])},{id:"mom",contactId:"mom",messages:Ys([["2026-11-05 18:30","mom","신유 생일이라며 선물은 샀어?","聽說申惟生日 禮物買了嗎？"],["2026-11-05 19:02",Ne,"응 샀어","嗯 買了"],["2026-11-05 19:02","mom","뭐 샀는데","買什麼"],["2026-11-05 19:04",Ne,"볼링공","保齡球"],["2026-11-05 19:05","mom","너 이기려고 산 거 아니지?","你不是為了贏他才買的吧？"],["2026-11-05 19:05",Ne,"ㅋㅋㅋㅋ 반반","ㅋㅋㅋㅋ 一半一半"]])},{id:"manager",contactId:"manager",messages:Ys([["2026-11-06 20:00","manager","내일 11시 출발. 신유 생일이라 현장 서포트 있음","明天十一點出發。因為是申惟生日，現場有應援"],["2026-11-06 20:05",Ne,"넵! 형 케이크 차에 실어도 돼요?","好！哥可以把蛋糕放車上嗎？"],["2026-11-06 20:06","manager","오늘 밤에 쓰는 거 아니었어?","不是今天晚上要用嗎？"],["2026-11-06 20:06",Ne,"두 개예요","有兩個"]])}],sms:[{id:"bakery",from:{ko:"케이크 공방",zh:"蛋糕工作室"},messages:[{at:k("2026-11-06 23:10"),text:{ko:`[Web발신]
주문하신 생크림 과일 케이크(레터링: "형 생일 축하해요 🐺") 픽업 준비 완료되었습니다.`,zh:`[網路發送]
您訂購的鮮奶油水果蛋糕（字樣：「哥生日快樂 🐺」）已可取貨。`}}]},{id:"ball",from:{ko:"볼링샵",zh:"保齡球用品店"},messages:[{at:k("2026-11-03 15:00"),text:{ko:`[Web발신]
각인 볼링공(이니셜 S.Y.) 배송 출발. 11/5 도착 예정`,zh:`[網路發送]
刻字保齡球（縮寫 S.Y.）已出貨，預計 11/5 送達`}}]}],calls:[{at:k("2026-10-20 22:40"),contactId:"shinyu",type:"outgoing",seconds:1340},{at:k("2026-11-01 19:10"),contactId:"youngjae",type:"outgoing",seconds:120},{at:k("2026-11-05 18:40"),contactId:"mom",type:"incoming",seconds:302},{at:k("2026-11-06 21:30"),contactId:"shinyu",type:"missed",seconds:0},{at:k("2026-11-06 23:31"),contactId:"youngjae",type:"incoming",seconds:45}],notes:[{id:"plan",pinned:!0,title:{ko:"형 생일 작전 ✔︎",zh:"哥生日作戰 ✔︎"},at:k("2026-11-06 23:40"),body:{ko:`형 생일 작전 ✔︎

✔︎ 케이크 (생크림, 과일 많이) - 영재형 픽업
✔︎ 볼링공 (이니셜 각인)
✔︎ 초 24개
✔︎ 경민이 입단속 (실패할 뻔)
□ 0시 정각에 먼저 연락하기 ← 작년에 형이 해준 것처럼
□ 편지 보내기`,zh:`哥生日作戰 ✔︎

✔︎ 蛋糕（鮮奶油、水果多）- 英宰哥取貨
✔︎ 保齡球（刻縮寫）
✔︎ 蠟燭 24 根
✔︎ 叫炅潣閉嘴（差點失敗）
□ 零點整先聯絡 ← 像去年哥為我做的那樣
□ 傳信`}},{id:"letter",title:{ko:"형한테 (보낼까 말까)",zh:"給哥（要不要傳）"},at:k("2026-11-06 23:33"),body:{ko:`형한테 (보낼까 말까)

형 생일 축하해요.

작년에 형이 12시 땡 하자마자 보내줬잖아요.
올해는 내가 먼저 하고 싶었어요.

형은 맨날 리더니까 리더니까 하는데
나한텐 그냥 신유형이에요.
구석으로 끌고 가서 하는 얘기들, 사실 다 기억하고 있어요.

소파에서 자는 거 이제 안 할게요.
…아마도.

볼링공은 형이 이기라고 산 거예요.
근데 봐주진 않을 거예요 🐺

태어나줘서 고마워요, 형.

— 도훈`,zh:`給哥（要不要傳）

哥生日快樂。

去年哥十二點一到就傳給我了對吧。
今年我想先說。

哥總是說因為我是隊長、因為我是隊長，
可是對我來說你就只是申惟哥。
那些被拖到角落說的話，其實我全都記得。

我以後不會再睡沙發了。
……大概吧。

保齡球是買給哥讓你贏的。
不過我不會放水喔 🐺

謝謝你出生，哥。

—— 道勳`}},{id:"likes",title:{ko:"형이 좋아하는 것 (몰래 조사)",zh:"哥喜歡的東西（偷偷調查）"},at:k("2026-10-25 01:12"),body:{ko:`형이 좋아하는 것 (몰래 조사)

- 생크림 케이크
- 볼링 (못 치는데 좋아함)
- 12시 정각
- 단체 사진 찍을 때 가운데
- 구석 (?)`,zh:`哥喜歡的東西（偷偷調查）

- 鮮奶油蛋糕
- 保齡球（打不好但很喜歡）
- 十二點整
- 拍團體照時站中間
- 角落（？）`}},{id:"heart",title:{ko:"연습생 때",zh:"練習生時期"},at:k("2026-10-18 16:30"),body:{ko:`연습생 때

형이 낯가리는 게 보여서
마주칠 때마다 손하트 함.
처음엔 형이 당황했는데
어느 날부터 형도 같이 해줌.

그날이 좀 좋았음.`,zh:`練習生時期

看得出哥很怕生，
所以每次碰到都比手指愛心。
一開始哥很慌張，
不知道從哪天開始哥也會比回來。

那天有點開心。`}}],photos:[{id:"p1",at:k("2026-01-10 21:20"),emoji:"😴",tint:"#d9d3ef",caption:{ko:'"형 웃긴거" 폴더 #1 대기실에서 조는 형',zh:"「哥好笑的」資料夾 #1 在休息室打瞌睡的哥"}},{id:"p2",at:k("2026-01-30 00:05"),emoji:"🎂",tint:"#f7e3ea",caption:{ko:"작년 내 생일 0시 케이크",zh:"去年我生日零點的蛋糕"}},{id:"p3",at:k("2026-01-31 22:40"),emoji:"🎳",tint:"#c9d8f5",caption:{ko:"118 : 121 (형 표정)",zh:"118 : 121（哥的表情）"}},{id:"p4",at:k("2026-07-15 00:10"),emoji:"🍜",tint:"#f3dcc4",caption:{ko:"구석에서 끓여준 라면",zh:"在角落煮給我的泡麵"}},{id:"p5",at:k("2026-09-30 07:29"),emoji:"🛋️",tint:"#e2d6cc",caption:{ko:"또 덮여 있던 담요",zh:"又被蓋上的毯子"}},{id:"p6",at:k("2026-11-05 16:00"),emoji:"🎁",tint:"#e8f0d8",caption:{ko:"각인 볼링공 S.Y.",zh:"刻字保齡球 S.Y."}}],searches:[{q:{ko:"형 생일 서프라이즈 아이디어",zh:"哥哥生日驚喜 點子"},result:[{title:{ko:"룸메이트 생일 서프라이즈 BEST 5",zh:"室友生日驚喜 BEST 5"},body:{ko:"1. 0시 정각 문 두드리기 2. 숨겨둔 케이크 3. 손편지…",zh:"1. 零點整敲門 2. 藏好的蛋糕 3. 手寫信…"}}]},{q:{ko:"볼링공 각인",zh:"保齡球 刻字"},result:[{title:{ko:"이니셜 각인 볼링공 제작",zh:"縮寫刻字保齡球訂製"},body:{ko:"제작 기간 3~5일, 최대 영문 4자",zh:"製作時間 3~5 天，最多 4 個英文字"}}]},{q:{ko:"편지 보낼까 말까",zh:"信 要不要傳"},result:[{title:{ko:"고민될 땐 보내세요",zh:"猶豫的時候就傳吧"},body:{ko:"보내지 않은 편지는 아무것도 바꾸지 못합니다.",zh:"沒傳出去的信什麼都改變不了。"}}]},{q:{ko:"생크림 케이크 초 몇 개",zh:"鮮奶油蛋糕 蠟燭 幾根"},result:[{title:{ko:"나이만큼 꽂는 게 정석",zh:"插跟年齡一樣的數量是基本"},body:{ko:"한국 나이로 할지 만 나이로 할지는 생일자 기분에 따라.",zh:"要用韓國歲還是實歲，看壽星心情。"}}]}],ai:Kh,calendar:[{date:"2026-11-01",title:{ko:"작전방 개설",zh:"建立作戰群"},color:"#ff9f0a"},{date:"2026-11-06",title:{ko:"케이크 픽업 (영재형)",zh:"取蛋糕（英宰哥）"},time:"23:20",color:"#ff9f0a"},{date:"2026-11-07",title:{ko:"🎂 신유형 생일",zh:"🎂 申惟哥生日"},color:"#ff375f"},{date:"2026-11-07",title:{ko:"스케줄 (11시 출발)",zh:"行程（十一點出發）"},time:"11:00",color:"#30d158"}],voice:[{id:"v1",title:{ko:"생일 노래 연습",zh:"練習生日歌"},at:k("2026-11-06 23:15"),seconds:31,transcript:{ko:"생일 축하합니다~ 생일 축하합니다~ 사랑하는… 아 이거 마이크 켜져 있는 거 아니지? (웃음) 다시. 지훈아 화음 넣지 마.",zh:"祝你生日快樂～祝你生日快樂～親愛的……啊這個麥克風沒開著吧？（笑）重來。志薰不要加和聲。"}}],alarms:[{time:"10:00",label:{ko:"기상 (11시 출발)",zh:"起床（十一點出發）"},on:!0},{time:"23:55",label:{ko:"작전 개시 🎂",zh:"作戰開始 🎂"},on:!0},{time:"00:00",label:{ko:"형한테 먼저 보내기",zh:"先傳給哥"},on:!0},{time:"07:30",label:{ko:"(주말) 볼링",zh:"（週末）保齡球"},on:!1}],extra:yf,script:[{id:"start",when:"unlock",delay:1200,actions:[{t:"msg",room:"plan",from:"kyungmin",text:{ko:"형 3분 남았어요!!",zh:"哥剩三分鐘!!"}},{t:"msg",room:"plan",from:"jihoon",text:{ko:"신유형 방 문 앞 대기 중",zh:"在申惟哥房門口待命"},gap:2600},{t:"msg",room:"shinyu",text:{ko:"도훈아 뭐 해",zh:"道勳啊在幹嘛"}}]},{id:"plan-open",when:"open:plan",delay:900,actions:[{t:"msg",room:"plan",from:"hanjin",text:{ko:"형 문 앞에서 숨소리 들릴 것 같아요",zh:"哥我覺得在門口會被聽到呼吸聲"}},{t:"msg",room:"plan",from:"youngjae",text:{ko:"도훈아 0시 되면 니가 먼저 보내",zh:"道勳啊零點一到你先傳"}}]},{id:"shinyu-open",when:"open:shinyu",delay:1e3,actions:[{t:"msg",room:"shinyu",text:{ko:"다들 왜 이렇게 조용해",zh:"大家怎麼這麼安靜"}},{t:"msg",room:"shinyu",text:{ko:"너네 뭐 숨기지",zh:"你們在藏什麼吧"}},{t:"msg",room:"shinyu",text:{ko:"솔직하게 말해 도훈아",zh:"老實說道勳"}},{t:"reply",room:"shinyu",branches:[{id:"spill",keys:["서프라이즈","케이크","생일","축하","문앞","선물","편지","驚喜","惊喜","蛋糕","生日","快樂","快乐","禮物","礼物","信"],replies:[{text:"...?"},{text:{ko:"서프라이즈?",zh:"驚喜？"}},{text:{ko:"못 들은 걸로 할게ㅋㅋㅋㅋ",zh:"我就當沒聽到ㅋㅋㅋㅋ"}}]},{id:"hide",keys:[""],replies:[{text:{ko:"수상한데",zh:"好可疑"}},{text:{ko:"...알겠어",zh:"……知道了"}},{text:{ko:"근데 1분 남았네",zh:"不過剩一分鐘了"}}]}]}]},{id:"midnight",when:"branch:shinyu",delay:1500,actions:[{t:"clock",at:k("2026-11-07 00:00")},{t:"msg",room:"plan",from:"kyungmin",text:{ko:"지금!!!!",zh:"就是現在!!!!"},gap:900},{t:"msg",room:"plan",from:"hanjin",text:{ko:"문 두드려요",zh:"敲門"},gap:900},{t:"msg",room:"plan",from:"youngjae",text:{ko:"도훈아 빨리 보내",zh:"道勳快傳"},gap:1800},{t:"call",from:"shinyu",lines:[{ko:"도훈아.",zh:"道勳。"},{ko:"문 앞에서 너네 숨 쉬는 소리 다 들려.",zh:"你們在門口呼吸的聲音我全都聽到了。"},{ko:"(웃음) 한진이 웃음 참는 소리도.",zh:"（笑）還有韓振憋笑的聲音。"},{ko:"…12시 됐는데, 너 나한테 먼저 보낼 거 있지 않아?",zh:"……十二點了，你不是有東西要先傳給我嗎？"},{ko:"작년엔 내가 먼저 했잖아.",zh:"去年是我先的嘛。"},{ko:"기다릴게. 문은 그다음에 열게.",zh:"我等你。門等一下再開。"}],declinedMsg:{ko:"왜 안 받아ㅋㅋ",zh:"幹嘛不接ㅋㅋ"}}]},{id:"after-call",when:"call:done",delay:1200,actions:[{t:"msg",room:"plan",from:"jihoon",text:{ko:"형 빨리요 초 녹아요",zh:"哥快點 蠟燭要融化了"}},{t:"msg",room:"shinyu",text:{ko:"기다리는 중",zh:"在等"}},{t:"reply",room:"shinyu",branches:[{id:"letter",keys:[""],replies:[{text:{ko:"...",zh:"……"}},{text:{ko:"고마워 도훈아",zh:"謝謝你 道勳"}},{text:{ko:"진짜로.",zh:"真的。"}},{text:{ko:"이제 문 연다. 초 끄기 전에 한 번 더 말해줘 🩵",zh:"我要開門了。吹蠟燭前再說一次給我聽 🩵"}}]}]}]},{id:"epilogue",when:"branch:shinyu:letter",delay:6e3,actions:[{t:"msg",room:"plan",from:"hanjin",text:{ko:"형 문 열렸어요!!!",zh:"哥門開了!!!"}},{t:"photo",room:"plan",from:"kyungmin",caption:{ko:"케이크 앞 신유형 (눈물 참는 중)",zh:"蛋糕前的申惟哥（忍著不哭）"}},{t:"msg",room:"plan",from:"jihoon",text:{ko:"도훈이형이 더 울었어요 ㅋㅋㅋ",zh:"道勳哥哭得更兇ㅋㅋㅋ"},gap:4e3},{t:"msg",room:"shinyu",text:{ko:"도훈아",zh:"道勳啊"}},{t:"msg",room:"shinyu",text:{ko:"볼링공 봤어",zh:"我看到保齡球了"}},{t:"msg",room:"shinyu",text:{ko:"S.Y. 이거 뭐야 ㅋㅋ",zh:"S.Y. 這是什麼啦ㅋㅋ"}},{t:"msg",room:"shinyu",text:{ko:"...고마워. 진짜로",zh:"……謝謝。真的"},gap:14e3},{t:"msg",room:"shinyu",text:{ko:"근데 이걸로 나 이기라고 준 거면",zh:"不過如果這是要讓我贏才送的"}},{t:"msg",room:"shinyu",text:{ko:"봐주지 마. 진짜로 이길 거니까",zh:"不准放水。我會真的贏你"},gap:2e4},{t:"msg",room:"tws",from:"youngjae",text:{ko:"신유 생일 축하해",zh:"申惟生日快樂"}},{t:"msg",room:"tws",from:"kyungmin",text:{ko:"형 생축!!! 🩵",zh:"哥生快!!! 🩵"}},{t:"msg",room:"tws",from:"shinyu",text:{ko:"다들 고마워 🩵 내일 11시 늦지 마",zh:"謝謝大家 🩵 明天十一點不要遲到"},gap:3e4},{t:"msg",room:"shinyu",text:{ko:"자냐",zh:"睡了嗎"}},{t:"msg",room:"shinyu",text:{ko:"올해는 네가 먼저였네",zh:"今年是你先說的呢"}},{t:"msg",room:"shinyu",text:{ko:"소파 말고 방에서 자 🩵",zh:"不要睡沙發，回房間睡 🩵"}},{t:"msg",room:"shinyu",text:{ko:"잘 자 도훈아",zh:"晚安 道勳"}},{t:"end"}]}]},Ia=(e,t)=>q(e.at)-q(t.at),s0=Ee.rooms.find(e=>e.id==="shinyu");s0.messages=[...ff,...s0.messages].sort(Ia);Ee.rooms.push(...mf);Ee.notes.push(...pf);Ee.photos.push(...xf);Ee.searches.push(...kf);Ee.calendar.push(...gf);Ee.script.push(...jf);{const[e,t]=vf;Ee.contacts[e]=t,Ee.rooms.push(Fi),Ee.notes.push(...wf),Ee.extra.hiddenPhotos.push(...Nf),Ee.calendar.push(...bf),Ee.extra.music.push(Sf),Ee.script.push(...zf)}Fi.messages=[...Fi.messages,..._f].sort(Ia);Ee.notes.push(...Ef);Ee.extra.hiddenPhotos.push(...$f);Ee.calendar.push(...Tf);Ee.extra.x.posts.wolf_note=[...Ee.extra.x.posts.wolf_note??[],...Pf].sort((e,t)=>q(t.at)-q(e.at));Ee.ai.push(...Lf);{const e=Ee.rooms.find(t=>t.id==="kyungmin");e&&(e.messages=[...e.messages,...Mf].sort(Ia))}df(Ee);uf(Ee);Ee.notes.push(...cf);const o0={airplane:!1,wifi:!0,bluetooth:!0,cellular:!0,focus:!1,silent:!1,rotationLock:!0,brightness:1,volume:.6,wallpaper:0,textSize:1,vibration:!0},to=["x-diary","locked-note","hidden","deleted","draft","hidden-chat","ending"],I2={"x-diary":{ko:"X 비밀 계정",zh:"X 祕密帳號"},"locked-note":{ko:"잠긴 메모",zh:"上鎖的備忘錄"},hidden:{ko:"가려진 앨범",zh:"隱藏的相簿"},deleted:{ko:"최근 삭제된 사진",zh:"最近刪除的照片"},draft:{ko:"보내지 않은 메일",zh:"沒寄出的郵件"},"hidden-chat":{ko:"숨긴 채팅방",zh:"隱藏的聊天室"},ending:{ko:"이야기의 끝",zh:"故事的結局"}},D2=j.createContext(null);function Ff({storyId:e,children:t}){const s=`yudoz-device-${e}`,[o,r]=j.useState(()=>{try{const K=window.localStorage.getItem(s);if(K)return{...o0,...JSON.parse(K)}}catch{}return o0}),[l,i]=j.useState("none"),[a,c]=j.useState(!1),[u,x]=j.useState([]),[g,m]=j.useState(null),y=j.useRef([]),w=`yudoz-found-${e}`,[v,b]=j.useState(()=>{try{return JSON.parse(window.localStorage.getItem(w)??"[]")}catch{return[]}}),[h,f]=j.useState(null),[p,z]=j.useState(null),[C,M]=j.useState({}),[S,_]=j.useState([]),T=j.useRef({}),$=j.useRef({}),W=j.useCallback((K,D)=>{var ee;M(ze=>({...ze,[K]:[...ze[K]??[],{me:!0,text:D,at:Date.now()}]}));const X=(ee=il[e])==null?void 0:ee[K];X&&(window.clearTimeout($.current[K]),$.current[K]=window.setTimeout(()=>{const ze=T.current[K]??0;T.current[K]=ze+1,Ra(X,D,ze).forEach((gn,bt)=>{window.setTimeout(()=>_(Ft=>[...Ft.filter(E=>E!==K),K]),600+bt*2200),window.setTimeout(()=>{_(Ft=>Ft.filter(E=>E!==K)),M(Ft=>({...Ft,[K]:[...Ft[K]??[],{me:!1,text:gn,at:Date.now()}]})),T2()},2e3+bt*2200)})},1200))},[e]);j.useEffect(()=>{try{window.localStorage.setItem(w,JSON.stringify(v))}catch{}},[v,w]),j.useEffect(()=>{if(!(p!=null&&p.playing))return;const K=window.setInterval(()=>z(D=>D&&{...D,pos:D.pos+1}),1e3);return()=>window.clearInterval(K)},[p==null?void 0:p.playing]);const le=j.useCallback(K=>{b(D=>{if(D.includes(K))return D;const X=[...D,K];return f(`${K}|${X.length}`),window.setTimeout(()=>f(null),2600),X})},[]);j.useEffect(()=>{try{window.localStorage.setItem(s,JSON.stringify(o))}catch{}zh(o.silent||o.volume===0,o.volume,o.focus,o.vibration)},[o,s]);const de=j.useCallback((K,D)=>{r(X=>{const ee={...X,[K]:D};return K==="airplane"&&D&&Object.assign(ee,{cellular:!1,wifi:!1,bluetooth:!1}),K==="airplane"&&!D&&Object.assign(ee,{cellular:!0,wifi:!0,bluetooth:!0}),(K==="wifi"||K==="cellular"||K==="bluetooth")&&D&&(ee.airplane=!1),ee})},[]),He=j.useCallback((K=8)=>ll(K),[]),Re=j.useCallback(K=>(y.current.push(K),()=>{y.current=y.current.filter(D=>D!==K)}),[]),ct={s:o,set:de,toggle:K=>de(K,!o[K]),overlay:l,setOverlay:i,flashlight:a,setFlashlight:c,shots:u,addShot:K=>x(D=>[...D,{id:`shot-${Date.now()}`,src:K,at:Date.now()}]),pushBack:Re,goBack:()=>{const K=y.current[y.current.length-1];return K?(K(),!0):!1},outgoing:g,dial:(K,D=!1)=>m(K?{to:K,video:D}:null),found:v,discover:le,toast:h,now:p,setNow:z,im:C,typing:S,sendIm:W,haptic:He};return n.jsx(D2.Provider,{value:ct,children:t})}function ye(){const e=j.useContext(D2);if(!e)throw new Error("useDevice outside provider");return e}function at(e,t){const{pushBack:s}=ye(),o=j.useRef(t);o.current=t,j.useEffect(()=>{if(e)return s(()=>o.current())},[e,s])}const Rf=[{id:0,name:{ko:"기본",zh:"預設"}},{id:1,name:{ko:"새벽",zh:"清晨"}},{id:2,name:{ko:"밤하늘",zh:"夜空"}},{id:3,name:{ko:"복숭아",zh:"水蜜桃"}}],Gs={instagram:"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",x:"M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z",kakaotalk:"M22.125 0H1.875C.8394 0 0 .8394 0 1.875v20.25C0 23.1606.8394 24 1.875 24h20.25C23.1606 24 24 23.1606 24 22.125V1.875C24 .8394 23.1606 0 22.125 0zM12 18.75c-.591 0-1.1697-.0413-1.7317-.1209-.5626.3965-3.813 2.6797-4.1198 2.7225 0 0-.1258.0489-.2328-.0141s-.0876-.2282-.0876-.2282c.0322-.2198.8426-3.0183.992-3.5333-2.7452-1.36-4.5701-3.7686-4.5701-6.5135C2.25 6.8168 6.6152 3.375 12 3.375s9.75 3.4418 9.75 7.6875c0 4.2457-4.3652 7.6875-9.75 7.6875zM8.0496 9.8672h-.8777v3.3417c0 .2963-.2523.5372-.5625.5372s-.5625-.2409-.5625-.5372V9.8672h-.8777c-.3044 0-.552-.2471-.552-.5508s.2477-.5508.552-.5508h2.8804c.3044 0 .552.2471.552.5508s-.2477.5508-.552.5508zm10.9879 2.9566a.558.558 0 0 1 .108.4167.5588.5588 0 0 1-.2183.371.5572.5572 0 0 1-.3383.1135.558.558 0 0 1-.4493-.2236l-1.3192-1.7479-.1952.1952v1.2273a.5635.5635 0 0 1-.5627.5628.563.563 0 0 1-.5625-.5625V9.3281c0-.3102.2523-.5625.5625-.5625s.5625.2523.5625.5625v1.209l1.5694-1.5694c.0807-.0807.1916-.1252.312-.1252.1404 0 .2814.0606.3871.1661.0985.0984.1573.2251.1654.3566.0082.1327-.036.2542-.1241.3425l-1.2818 1.2817 1.3845 1.8344zm-8.3502-3.5023c-.095-.2699-.3829-.5475-.7503-.5557-.3663.0083-.6542.2858-.749.5551l-1.3455 3.5415c-.1708.5305-.0217.7272.1333.7988a.8568.8568 0 0 0 .3576.0776c.2346 0 .4139-.0952.4678-.2481l.2787-.7297 1.7152.0001.2785.7292c.0541.1532.2335.2484.4681.2484a.8601.8601 0 0 0 .3576-.0775c.1551-.0713.3041-.2681.1329-.7999l-1.3449-3.5398zm-1.3116 2.4433l.5618-1.5961.5618 1.5961H9.3757zm5.9056 1.3836c0 .2843-.2418.5156-.5391.5156h-1.8047c-.2973 0-.5391-.2314-.5391-.5156V9.3281c0-.3102.2576-.5625.5742-.5625s.5742.2523.5742.5625v3.3047h1.1953c.2974 0 .5392.2314.5392.5156z",naver:"M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z",applemusic:"M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 00.02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 00-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.325.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.442-.088.663-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z"},If={back:n.jsx("path",{d:"M15 4 7 12l8 8"}),chevron:n.jsx("path",{d:"m9 5 7 7-7 7"}),close:n.jsx("path",{d:"M6 6l12 12M18 6 6 18"}),search:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"10.5",cy:"10.5",r:"6.5"}),n.jsx("path",{d:"m15.5 15.5 5 5"})]}),plus:n.jsx("path",{d:"M12 5v14M5 12h14"}),more:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"5",cy:"12",r:"1.3",fill:"currentColor"}),n.jsx("circle",{cx:"12",cy:"12",r:"1.3",fill:"currentColor"}),n.jsx("circle",{cx:"19",cy:"12",r:"1.3",fill:"currentColor"})]}),menu:n.jsx("path",{d:"M4 7h16M4 12h16M4 17h16"}),gear:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"12",r:"3.2"}),n.jsx("path",{d:"M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5"})]}),person:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"8",r:"4"}),n.jsx("path",{d:"M4 21c.8-4.2 4-6.5 8-6.5s7.2 2.3 8 6.5"})]}),people:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"9",cy:"8.5",r:"3.5"}),n.jsx("path",{d:"M2.5 20c.6-3.6 3.3-5.6 6.5-5.6s5.9 2 6.5 5.6"}),n.jsx("circle",{cx:"17",cy:"9",r:"2.8"}),n.jsx("path",{d:"M17 14.3c2.6 0 4.4 1.7 4.9 4.7"})]}),bubble:n.jsx("path",{d:"M12 4c-5 0-9 3.2-9 7.2 0 2.5 1.6 4.7 4 6L6 21l4.3-2.6c.6.1 1.1.1 1.7.1 5 0 9-3.2 9-7.3S17 4 12 4z"}),bubbles:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M10 4c-4.4 0-8 2.8-8 6.3 0 2.1 1.3 4 3.4 5.1L5 19l3.6-2.2c.5.1.9.1 1.4.1 4.4 0 8-2.8 8-6.4S14.4 4 10 4z"}),n.jsx("path",{d:"M19.5 9.5c1.6 1 2.5 2.4 2.5 4 0 1.6-1 3-2.6 3.9l.4 2.6-2.9-1.7"})]}),bag:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M5 8h14l-1 13H6z"}),n.jsx("path",{d:"M9 8V6.5a3 3 0 0 1 6 0V8"})]}),phone:n.jsx("path",{d:"M6.6 3.5 9 3l1.6 4.2-2 1.4a11.6 11.6 0 0 0 6.8 6.8l1.4-2 4.2 1.6-.5 2.4c-.2 1-1.1 1.6-2.1 1.6A16.6 16.6 0 0 1 5 5.6c0-1 .6-1.9 1.6-2.1z"}),phoneFill:n.jsx("path",{fill:"currentColor",stroke:"none",d:"M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"}),clock:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"12",r:"9"}),n.jsx("path",{d:"M12 7v5l3 2"})]}),star:n.jsx("path",{d:"m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.8z"}),grid:n.jsx(n.Fragment,{children:[5,12,19].map(e=>[5,12,19].map(t=>n.jsx("circle",{cx:e,cy:t,r:"1.6",fill:"currentColor"},`${e}${t}`)))}),voicemail:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"6.5",cy:"12",r:"3.5"}),n.jsx("circle",{cx:"17.5",cy:"12",r:"3.5"}),n.jsx("path",{d:"M6.5 15.5h11"})]}),info:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"12",r:"9"}),n.jsx("path",{d:"M12 11v6M12 7.5v.5"})]}),camera:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M3 8.5c0-1 .8-1.8 1.8-1.8h2.4L8.8 4.5h6.4l1.6 2.2h2.4c1 0 1.8.8 1.8 1.8v9.7c0 1-.8 1.8-1.8 1.8H4.8c-1 0-1.8-.8-1.8-1.8z"}),n.jsx("circle",{cx:"12",cy:"13",r:"3.8"})]}),mic:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"9",y:"3",width:"6",height:"11",rx:"3"}),n.jsx("path",{d:"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"})]}),heart:n.jsx("path",{d:"M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"}),share:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M12 3v12M8 7l4-4 4 4"}),n.jsx("path",{d:"M6 11H5v10h14V11h-1"})]}),trash:n.jsx("path",{d:"M4 7h16M9 7V4.5h6V7M6 7l1 14h10l1-14"}),compose:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M12 4H5v15h15v-7"}),n.jsx("path",{d:"m17.5 3.5 3 3L12 15l-4 1 1-4z"})]}),folder:n.jsx("path",{d:"M3 6.5c0-.8.7-1.5 1.5-1.5h5l2 2h8c.8 0 1.5.7 1.5 1.5v9c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5z"}),play:n.jsx("path",{fill:"currentColor",d:"M7 4.5v15l13-7.5z"}),pause:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"6",y:"4.5",width:"4",height:"15",rx:"1",fill:"currentColor"}),n.jsx("rect",{x:"14",y:"4.5",width:"4",height:"15",rx:"1",fill:"currentColor"})]}),rewind:n.jsx("path",{d:"M11 6 4 12l7 6zM20 6l-7 6 7 6z",fill:"currentColor"}),forward:n.jsx("path",{d:"M13 6l7 6-7 6zM4 6l7 6-7 6z",fill:"currentColor"}),wifi:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M2.5 9a14 14 0 0 1 19 0M5.5 12.3a9.5 9.5 0 0 1 13 0M8.6 15.5a5 5 0 0 1 6.8 0"}),n.jsx("circle",{cx:"12",cy:"18.6",r:"1.2",fill:"currentColor"})]}),bluetooth:n.jsx("path",{d:"m7 7 10 10-5 4V3l5 4L7 17"}),plane:n.jsx("path",{fill:"currentColor",stroke:"none",d:"M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"}),antenna:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M12 10v11"}),n.jsx("path",{d:"M8.5 6.5a5 5 0 0 0 0 7M15.5 6.5a5 5 0 0 1 0 7M5.6 3.6a9 9 0 0 0 0 12.8M18.4 3.6a9 9 0 0 1 0 12.8"})]}),moon:n.jsx("path",{fill:"currentColor",stroke:"none",d:"M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"}),flashlight:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M8 3h8v4l-2 4v10h-4V11L8 7z"}),n.jsx("path",{d:"M12 13v2"})]}),lockRotate:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M20 12a8 8 0 1 1-2.3-5.7"}),n.jsx("path",{d:"M18 3v4h-4"}),n.jsx("rect",{x:"9.5",y:"11",width:"5",height:"4.5",rx:"1"}),n.jsx("path",{d:"M10.5 11V9.8a1.5 1.5 0 0 1 3 0V11"})]}),sun:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"12",r:"4"}),n.jsx("path",{d:"M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4M18.7 18.7l-1.4-1.4M6.7 6.7 5.3 5.3"})]}),speaker:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M4 9.5h3.5L12 5.5v13l-4.5-4H4z",fill:"currentColor"}),n.jsx("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"})]}),bell:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 1.5h-15z"}),n.jsx("path",{d:"M10 20a2 2 0 0 0 4 0"})]}),bellSlash:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M6 16.5V11a6 6 0 0 1 9.5-4.9M18 10.5v6l1.5 1.5h-15"}),n.jsx("path",{d:"M10 20a2 2 0 0 0 4 0M3.5 3.5l17 17"})]}),timer:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"13.5",r:"7.5"}),n.jsx("path",{d:"M12 13.5V9.5M10 2.5h4"})]}),calc:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"5",y:"3",width:"14",height:"18",rx:"2.5"}),n.jsx("path",{d:"M8.5 7.5h7M9 12h.1M12 12h.1M15 12h.1M9 16h.1M12 16h.1M15 16h.1"})]}),keyboard:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"2.5",y:"6",width:"19",height:"12",rx:"2"}),n.jsx("path",{d:"M6 10h.1M9.3 10h.1M12.6 10h.1M16 10h.1M7 14h10"})]}),emoji:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"12",r:"9"}),n.jsx("path",{d:"M8 14.5a4.6 4.6 0 0 0 8 0M9 9.5v.5M15 9.5v.5"})]}),hash:n.jsx("path",{d:"M9.5 3.5 7.5 20.5M16.5 3.5l-2 17M4 8.5h16.5M3.5 15.5H20"}),arrowUp:n.jsx("path",{d:"M12 19V5M6 11l6-6 6 6"}),photo:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),n.jsx("circle",{cx:"8.5",cy:"10",r:"1.6"}),n.jsx("path",{d:"m3.5 17 5-5 4 4 2.5-2.5 5.5 5"})]}),album:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"3",y:"7",width:"15",height:"13",rx:"2"}),n.jsx("path",{d:"M6 4h13a2 2 0 0 1 2 2v11"})]}),sparkle:n.jsx("path",{fill:"currentColor",stroke:"none",d:"M12 2c.6 4.8 2.7 7.4 7.5 8.2V12c-4.8.8-6.9 3.4-7.5 8.2h-.1c-.6-4.8-2.7-7.4-7.4-8.2v-1.8C9.2 9.4 11.3 6.8 11.9 2z"}),lock:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"5",y:"10.5",width:"14",height:"10",rx:"2.2"}),n.jsx("path",{d:"M8 10.5V8a4 4 0 0 1 8 0v2.5"})]}),unlock:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"5",y:"10.5",width:"14",height:"10",rx:"2.2"}),n.jsx("path",{d:"M8 10.5V8a4 4 0 0 1 7.8-1.2"})]}),pin:n.jsx("path",{fill:"currentColor",stroke:"none",d:"M14.5 3 21 9.5l-2 .5-3.3 3.3.3 4.2-1.5 1.5-3.6-3.6L6 20.3 3.7 18l4.9-4.9L5 9.5 6.5 8l4.2.3L14 5z"}),check:n.jsx("path",{d:"m5 12.5 4.5 4.5L19 7.5"}),globe:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"12",r:"9"}),n.jsx("path",{d:"M3 12h18M12 3c2.6 2.7 3.8 5.7 3.8 9S14.6 18.3 12 21c-2.6-2.7-3.8-5.7-3.8-9S9.4 5.7 12 3z"})]}),hand:n.jsx("path",{d:"M8 11V5.5a1.5 1.5 0 0 1 3 0V10m0-5.5V4a1.5 1.5 0 0 1 3 0v6m0-4.5a1.5 1.5 0 0 1 3 0V11m0-3a1.5 1.5 0 0 1 3 0v6.5c0 4-3 6.5-6.5 6.5-2.6 0-4.3-1.2-5.7-3L4.5 14a1.5 1.5 0 0 1 2.3-2L8 13.5"}),battery:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"2",y:"7",width:"18",height:"10",rx:"2.5"}),n.jsx("path",{d:"M22 10.5v3"})]}),image:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"}),n.jsx("circle",{cx:"9",cy:"9",r:"1.8"}),n.jsx("path",{d:"m4 19 6-6 4 4 2-2 4 4"})]}),shutter:n.jsx("circle",{cx:"12",cy:"12",r:"9"}),flip:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M4 9a8 8 0 0 1 14.5-3M20 15a8 8 0 0 1-14.5 3"}),n.jsx("path",{d:"M19 3v3.5h-3.5M5 21v-3.5h3.5"})]}),stopwatch:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"13.5",r:"7.5"}),n.jsx("path",{d:"M12 13.5 15 10.5M10 2.5h4M12 2.5V6"})]}),alarm:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"12",cy:"13",r:"7.5"}),n.jsx("path",{d:"M12 9.5V13l2.5 1.5M4 5l3-2.5M20 5l-3-2.5"})]}),bed:n.jsx("path",{d:"M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5M7.5 11.5h.1"}),gift:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"3.5",y:"8.5",width:"17",height:"4",rx:"1"}),n.jsx("path",{d:"M5 12.5V20h14v-7.5M12 8.5V20M12 8.5C10.5 5 7 4.5 7 6.8 7 8.5 12 8.5 12 8.5zM12 8.5c1.5-3.5 5-4 5-1.7 0 1.7-5 1.7-5 1.7z"})]}),video:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"2.5",y:"6",width:"13.5",height:"12",rx:"2.5"}),n.jsx("path",{d:"m16 10.5 5.5-3.5v10L16 13.5"})]}),home:n.jsx("path",{d:"M3.5 11 12 3.5l8.5 7.5V20a1 1 0 0 1-1 1h-5v-6h-5v6h-5a1 1 0 0 1-1-1z"}),plusSquare:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"3.5",y:"3.5",width:"17",height:"17",rx:"5"}),n.jsx("path",{d:"M12 8v8M8 12h8"})]}),send:n.jsx("path",{d:"M21 3 10 14M21 3l-7 18-4-7-7-4z"}),bookmark:n.jsx("path",{d:"M6 3.5h12v17l-6-4.5-6 4.5z"}),repeat:n.jsx("path",{d:"M17 2.5l3.5 3.5L17 9.5M20.5 6H8a4 4 0 0 0-4 4v1.5M7 21.5 3.5 18 7 14.5M3.5 18H16a4 4 0 0 0 4-4v-1.5"}),chart:n.jsx("path",{d:"M4 20V10M10 20V4M16 20v-7M22 20H2"}),mail:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"2.5",y:"5",width:"19",height:"14",rx:"2.5"}),n.jsx("path",{d:"m3.5 6.5 8.5 6.5 8.5-6.5"})]}),shuffle:n.jsx("path",{d:"M3 7h3.5c2 0 3.3 1 4.4 2.7l2.2 3.6c1.1 1.7 2.4 2.7 4.4 2.7H21M18 13l3 3-3 3M3 17h3.5c1.3 0 2.3-.4 3.1-1.1M13.4 8.1c.8-.7 1.8-1.1 3.1-1.1H21M18 4l3 3-3 3"}),location:n.jsx("path",{fill:"currentColor",stroke:"none",d:"M21 3 3 10.5l7.5 2.6L13 21z"}),route:n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"6",cy:"18",r:"2.5"}),n.jsx("circle",{cx:"18",cy:"6",r:"2.5"}),n.jsx("path",{d:"M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"})]}),eyeSlash:n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"}),n.jsx("circle",{cx:"12",cy:"12",r:"3"}),n.jsx("path",{d:"M4 4l16 16"})]}),expand:n.jsx("path",{d:"M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"}),copy:n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"8",y:"8",width:"12",height:"12",rx:"2.5"}),n.jsx("path",{d:"M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"})]}),thumb:n.jsx("path",{d:"M7 10v10H4V10zM7 10l4-7c1.5 0 2.5 1 2.2 2.6L12.6 9H19a2 2 0 0 1 2 2.3l-1.2 6.8A2 2 0 0 1 17.8 20H7"}),apps:n.jsx("path",{d:"M4.5 4.5h6v6h-6zM13.5 4.5h6v6h-6zM4.5 13.5h6v6h-6zM13.5 13.5h6v6h-6z"})};function N({n:e,size:t=22,w:s=2,className:o,style:r}){return n.jsx("svg",{className:`g ${o??""}`,width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:s,strokeLinecap:"round",strokeLinejoin:"round",style:r,"aria-hidden":!0,children:If[e]})}function et({bg:e,children:t,id:s}){return n.jsxs("svg",{viewBox:"0 0 60 60",width:"100%",height:"100%","aria-hidden":!0,children:[n.jsx("defs",{children:e}),n.jsx("rect",{width:"60",height:"60",fill:`url(#${s})`}),t]})}const tt=(e,t,s,o=0,r=1)=>n.jsxs("linearGradient",{id:e,x1:"0",y1:"0",x2:o,y2:r,children:[n.jsx("stop",{offset:"0",stopColor:t}),n.jsx("stop",{offset:"1",stopColor:s})]});function Eo({id:e,day:t,weekday:s}){switch(e){case"phone":return n.jsx(et,{id:"ig-phone",bg:tt("ig-phone","#62f57e","#18bd3a"),children:n.jsx("path",{transform:"translate(14 14) scale(1.35)",fill:"#fff",d:"M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"})});case"messages":return n.jsx(et,{id:"ig-msg",bg:tt("ig-msg","#62f57e","#18bd3a"),children:n.jsx("path",{fill:"#fff",d:"M30 13c-10.5 0-19 6.6-19 14.8 0 4.9 3.1 9.3 7.8 12-.4 2.7-1.7 5.2-3.6 7.2 3.6-.2 7-1.6 9.6-3.9 1.7.4 3.4.6 5.2.6 10.5 0 19-6.6 19-14.9S40.5 13 30 13z"})});case"kakao":return n.jsx(et,{id:"ig-kakao",bg:tt("ig-kakao","#3c1e1e","#3c1e1e"),children:n.jsx("path",{d:Gs.kakaotalk,fill:"#fee500",transform:"scale(2.5)"})});case"photos":{const o=["#f5a623","#f8d838","#b7dd3d","#4fd1a5","#3db7f2","#7a7ff2","#c46bf2","#f2637b"];return n.jsx(et,{id:"ig-photos",bg:tt("ig-photos","#ffffff","#f4f4f4"),children:o.map((r,l)=>n.jsx("ellipse",{cx:"30",cy:"19.5",rx:"6.3",ry:"10.5",fill:r,opacity:"0.82",transform:`rotate(${l*45} 30 30)`,style:{mixBlendMode:"multiply"}},r))})}case"notes":return n.jsxs(et,{id:"ig-notes",bg:tt("ig-notes","#ffffff","#f6f6f6"),children:[n.jsx("rect",{width:"60",height:"16",fill:"#fdcc36"}),n.jsx("rect",{y:"15",width:"60",height:"1.2",fill:"#e5b42a"}),[25,33,41,49].map(o=>n.jsx("rect",{x:"0",y:o,width:"60",height:"0.8",fill:"#d6d6d6"},o)),n.jsx("g",{fill:"#c9c9c9",children:[6,12,18,24,30,36,42,48,54].map(o=>n.jsx("circle",{cx:o,cy:"20",r:"0.9"},o))})]});case"calendar":return n.jsxs(et,{id:"ig-cal",bg:tt("ig-cal","#ffffff","#ffffff"),children:[n.jsx("text",{x:"30",y:"16",textAnchor:"middle",fontSize:"8.5",fontWeight:"600",fill:"#ff3b30",fontFamily:"-apple-system, sans-serif",children:s}),n.jsx("text",{x:"30",y:"45",textAnchor:"middle",fontSize:"30",fontWeight:"300",fill:"#111",fontFamily:"-apple-system, sans-serif",children:t})]});case"settings":return n.jsx(et,{id:"ig-set",bg:tt("ig-set","#b6b6bc","#7b7b82"),children:n.jsxs("g",{transform:"translate(30 30)",children:[n.jsx("circle",{r:"19",fill:"#5c5c63"}),Array.from({length:36}).map((o,r)=>n.jsx("rect",{x:"-1.4",y:"-19.5",width:"2.8",height:"4",fill:"#d9d9de",transform:`rotate(${r*10})`},r)),n.jsx("circle",{r:"14.5",fill:"#d9d9de"}),n.jsx("circle",{r:"11",fill:"#5c5c63"}),Array.from({length:6}).map((o,r)=>n.jsx("rect",{x:"-1.6",y:"-11",width:"3.2",height:"11",fill:"#d9d9de",transform:`rotate(${r*60})`},r)),n.jsx("circle",{r:"4.5",fill:"#d9d9de"}),n.jsx("circle",{r:"2.4",fill:"#5c5c63"})]})});case"voice":return n.jsx(et,{id:"ig-voice",bg:tt("ig-voice","#2c2c2e","#0c0c0d"),children:[3,7,12,18,11,22,15,26,18,10,20,13,6,9,4].map((o,r)=>n.jsx("rect",{x:9+r*3,y:30-o/2,width:"1.6",height:o,rx:"0.8",fill:r>9?"#8e8e93":"#ff3b30"},r))});case"search":return n.jsx(et,{id:"ig-naver",bg:tt("ig-naver","#03c75a","#03c75a"),children:n.jsx("path",{d:Gs.naver,fill:"#fff",transform:"translate(19 19) scale(0.92)"})});case"ai":return n.jsx(et,{id:"ig-gpt",bg:tt("ig-gpt","#000","#000"),children:n.jsx("g",{transform:"translate(30 30)",fill:"none",stroke:"#fff",strokeWidth:"2.8",strokeLinejoin:"round",strokeLinecap:"round",children:Array.from({length:6}).map((o,r)=>n.jsx("path",{d:"M-6 -3.5 L-6 -10 A6 6 0 0 1 4.4 -14 L9.5 -11",transform:`rotate(${r*60})`},r))})});case"camera":return n.jsxs(et,{id:"ig-cam",bg:tt("ig-cam","#d8d8dc","#9d9da3"),children:[n.jsx("rect",{x:"9",y:"19",width:"42",height:"27",rx:"5",fill:"#1c1c1e"}),n.jsx("rect",{x:"22",y:"15",width:"16",height:"6",rx:"2",fill:"#1c1c1e"}),n.jsx("circle",{cx:"30",cy:"32.5",r:"9.5",fill:"#4a4a4f"}),n.jsx("circle",{cx:"30",cy:"32.5",r:"6.5",fill:"#1b2a44"}),n.jsx("circle",{cx:"32",cy:"30.5",r:"1.8",fill:"#9db2d8"}),n.jsx("circle",{cx:"44.5",cy:"24",r:"1.6",fill:"#f6c343"})]});case"instagram":return n.jsx(et,{id:"ig-insta",bg:n.jsxs("radialGradient",{id:"ig-insta",cx:"0.3",cy:"1.07",r:"1.3",children:[n.jsx("stop",{offset:"0",stopColor:"#fdf497"}),n.jsx("stop",{offset:"0.1",stopColor:"#fdf497"}),n.jsx("stop",{offset:"0.5",stopColor:"#fd5949"}),n.jsx("stop",{offset:"0.68",stopColor:"#d6249f"}),n.jsx("stop",{offset:"1",stopColor:"#285AEB"})]}),children:n.jsx("path",{d:Gs.instagram,fill:"#fff",transform:"translate(13.5 13.5) scale(1.375)"})});case"x":return n.jsx(et,{id:"ig-x",bg:tt("ig-x","#000","#000"),children:n.jsx("path",{d:Gs.x,fill:"#fff",transform:"translate(16 16) scale(1.1667)"})});case"music":return n.jsx(et,{id:"ig-music",bg:n.jsxs(n.Fragment,{children:[tt("ig-music","#fff","#fff"),tt("ig-music-fg","#fb5c74","#fa233b")]}),children:n.jsx("path",{d:Gs.applemusic,fill:"url(#ig-music-fg)",transform:"scale(2.5)"})});case"maps":return n.jsxs(et,{id:"ig-maps",bg:tt("ig-maps","#c9f0d0","#a4e2b2"),children:[n.jsx("path",{d:"M0 40 60 22v10L0 50z",fill:"#fef3b5"}),n.jsx("path",{d:"M22 0h8l8 60h-8z",fill:"#fff"}),n.jsx("path",{d:"M0 40 60 22",stroke:"#7cc5f5",strokeWidth:"4"}),n.jsx("circle",{cx:"40",cy:"20",r:"9",fill:"#ff3b30"}),n.jsx("circle",{cx:"40",cy:"20",r:"3.4",fill:"#fff"}),n.jsx("path",{d:"M40 29l-3-4h6z",fill:"#ff3b30"})]});case"mail":return n.jsxs(et,{id:"ig-mail",bg:tt("ig-mail","#5ac8fa","#1e7cf2"),children:[n.jsx("rect",{x:"11",y:"18",width:"38",height:"25",rx:"3.5",fill:"#fff"}),n.jsx("path",{d:"M12.5 20 30 33l17.5-13",fill:"none",stroke:"#1e7cf2",strokeWidth:"2.4",strokeLinejoin:"round",opacity:"0.5"})]});case"weather":return n.jsxs(et,{id:"ig-weather",bg:tt("ig-weather","#4aa3f7","#1d63d8"),children:[n.jsx("circle",{cx:"24",cy:"24",r:"9",fill:"#ffd33d"}),n.jsx("path",{fill:"#fff",d:"M41 44H22a8 8 0 0 1-.6-16 10 10 0 0 1 19.2 2.2A7 7 0 0 1 41 44z"})]});case"clock":return n.jsxs(et,{id:"ig-clock",bg:tt("ig-clock","#1c1c1e","#000"),children:[n.jsx("circle",{cx:"30",cy:"30",r:"22",fill:"#fff"}),Array.from({length:12}).map((o,r)=>n.jsx("rect",{x:"29.4",y:"10",width:"1.2",height:"3",fill:"#111",transform:`rotate(${r*30} 30 30)`},r)),n.jsx("rect",{x:"29",y:"17",width:"2",height:"14",rx:"1",fill:"#111",transform:"rotate(-30 30 30)"}),n.jsx("rect",{x:"29.2",y:"13",width:"1.6",height:"18",rx:"0.8",fill:"#111",transform:"rotate(60 30 30)"}),n.jsx("rect",{x:"29.6",y:"12",width:"0.8",height:"22",fill:"#ff9500",transform:"rotate(170 30 30)"}),n.jsx("circle",{cx:"30",cy:"30",r:"1.6",fill:"#ff9500"})]})}}function Te({src:e,size:t=40,group:s=0,radius:o}){const r=o??Math.round(t*.4);if(e)return n.jsx("img",{className:"avatar",src:e,alt:"",style:{width:t,height:t,borderRadius:r}});if(s>1){const l=Math.round(t*.52),i=s>=4?[[0,0],[1,0],[0,1],[1,1]]:s===3?[[.5,0],[0,1],[1,1]]:[[0,0],[1,1]];return n.jsx("span",{className:"avatar-group",style:{width:t,height:t},children:i.map(([a,c],u)=>n.jsx("span",{style:{left:a*(t-l),top:c*(t-l)},children:n.jsx(r0,{size:l,radius:Math.round(l*.4)})},u))})}return n.jsx(r0,{size:t,radius:r})}function r0({size:e,radius:t}){return n.jsxs("svg",{className:"avatar",width:e,height:e,viewBox:"0 0 40 40",style:{borderRadius:t},"aria-hidden":!0,children:[n.jsx("rect",{width:"40",height:"40",fill:"#9fb4c9"}),n.jsx("circle",{cx:"20",cy:"15.5",r:"6.8",fill:"#dfe8f1"}),n.jsx("path",{d:"M5 40c1.3-8.6 7.4-13.3 15-13.3S33.7 31.4 35 40z",fill:"#dfe8f1"})]})}function Ls({name:e,size:t=40,src:s}){if(s)return n.jsx("img",{className:"avatar",src:s,alt:"",style:{width:t,height:t,borderRadius:t/2}});const o=e?[...e.replace(/[^\p{L}\p{N}]/gu,"")][0]:"";return n.jsx("span",{className:"contact-avatar",style:{width:t,height:t,fontSize:t*.42},children:o||n.jsx(N,{n:"person",size:t*.6,w:0,style:{fill:"#fff"}})})}function Xe({src:e,emoji:t,tint:s,label:o}){return e?n.jsx("img",{className:"photo-tile",src:e,alt:o??"",draggable:!1}):n.jsx("div",{className:"photo-tile ph",style:{background:`radial-gradient(120% 90% at 30% 20%, #ffffff 0%, ${s} 70%)`},"aria-label":o,children:n.jsx("span",{children:t})})}function Zt({on:e,onChange:t,color:s="#34c759"}){return n.jsx("button",{role:"switch","aria-checked":e,className:`toggle ${e?"on":""}`,style:e?{background:s}:void 0,onClick:o=>{o.stopPropagation(),t(!e)},children:n.jsx("span",{})})}function al({tabs:e,value:t,onChange:s,tint:o="#007aff",dark:r}){const{t:l}=Q();return n.jsx("nav",{className:`tabbar ${r?"dark":""}`,children:e.map(i=>n.jsxs("button",{className:i.id===t?"on":"",style:i.id===t?{color:o}:void 0,onClick:()=>s(i.id),children:[n.jsx(N,{n:i.icon,size:25,w:i.id===t?2.2:1.8}),n.jsx("span",{children:l(i.label)})]},i.id))})}function be({title:e,large:t=!1,onBack:s,backLabel:o,right:r,tint:l="#007aff",bg:i="#f2f2f7",dark:a=!1,search:c,children:u,bottom:x,className:g="",bodyClass:m=""}){const{t:y}=Q(),[w,v]=j.useState(!1);at(!!s,()=>s==null?void 0:s());const b=!t||w;return n.jsxs("div",{className:`page ${a?"dark":""} ${g}`,style:{background:i,"--tint":l},children:[n.jsxs("div",{className:`page-top ${w?"scrolled":""}`,children:[n.jsx(_e,{dark:a}),n.jsxs("div",{className:"nav",children:[n.jsx("span",{className:"nav-left",children:s&&n.jsxs("button",{className:"nav-back",onClick:s,children:[n.jsx(N,{n:"back",size:22,w:2.6}),n.jsx("span",{children:y(o||A.back)})]})}),n.jsx("span",{className:`nav-title ${b?"show":""}`,children:y(e)}),n.jsx("span",{className:"nav-right",children:r})]})]}),n.jsxs("div",{className:`page-body ${m}`,onScroll:h=>v(h.currentTarget.scrollTop>28),children:[t&&n.jsx("h1",{className:"large-title",children:y(e)}),c&&n.jsxs("div",{className:"searchfield",children:[n.jsx(N,{n:"search",size:16,w:2.4}),n.jsx("span",{children:y(c)}),n.jsx(N,{n:"mic",size:16,w:2})]}),u]}),x]})}function Ue({children:e,header:t,footer:s}){const{t:o}=Q();return n.jsxs("section",{className:"group",children:[t&&n.jsx("h3",{className:"group-h",children:o(t)}),n.jsx("div",{className:"group-box",children:e}),s&&n.jsx("p",{className:"group-f",children:o(s)})]})}function oe({icon:e,iconBg:t,title:s,detail:o,sub:r,chevron:l,onClick:i,right:a,danger:c}){const u=i?"button":"div";return n.jsxs(u,{className:`cell ${c?"danger":""}`,onClick:i,children:[e&&n.jsx("span",{className:"cell-icon",style:{background:t},children:n.jsx(N,{n:e,size:17,w:2.2})}),n.jsxs("span",{className:"cell-main",children:[n.jsx("span",{className:"cell-title",children:s}),r&&n.jsx("small",{className:"cell-sub",children:r})]}),o!==void 0&&n.jsx("span",{className:"cell-detail",children:o}),a,l&&n.jsx(N,{n:"chevron",size:15,w:2.6,className:"cell-chev"})]})}const Ri=["","radial-gradient(120% 70% at 15% 0%, #ffd9b8 0%, transparent 55%), radial-gradient(90% 60% at 100% 35%, #f59ab7 0%, transparent 60%), radial-gradient(120% 80% at 30% 100%, #4b3f8f 0%, transparent 70%), linear-gradient(170deg, #f7b89b, #6b5aa8)","radial-gradient(2px 2px at 20% 18%, #fff 50%, transparent 51%), radial-gradient(1.5px 1.5px at 70% 12%, #fff 50%, transparent 51%), radial-gradient(1.5px 1.5px at 45% 30%, #dfe8ff 50%, transparent 51%), radial-gradient(2px 2px at 85% 40%, #fff 50%, transparent 51%), radial-gradient(120% 80% at 50% 110%, #3b4f9a 0%, transparent 65%), linear-gradient(180deg, #05060f, #141b3d 60%, #2a3570)","radial-gradient(100% 70% at 80% 10%, #fff1e6 0%, transparent 55%), radial-gradient(100% 70% at 0% 60%, #ffb3a7 0%, transparent 60%), radial-gradient(120% 70% at 70% 100%, #ff7aa2 0%, transparent 70%), linear-gradient(165deg, #ffd6c4, #f08aa6)"];function Ds(e,t){return t>0&&Ri[t]?Ri[t]:e.wallpaper}const Df=e=>Ri.map((t,s)=>s===0?e.wallpaper:t);function An(e){const t=j.useRef(null);return{onPointerDown:s=>{var o,r;t.current={x:s.clientX,y:s.clientY,t:s.timeStamp,lastY:s.clientY,lastT:s.timeStamp},(r=(o=s.currentTarget).setPointerCapture)==null||r.call(o,s.pointerId)},onPointerMove:s=>{var o;t.current&&(t.current.lastY=s.clientY,t.current.lastT=s.timeStamp,(o=e.onMove)==null||o.call(e,s.clientX-t.current.x,s.clientY-t.current.y))},onPointerUp:s=>{var l;if(!t.current)return;const o=Math.max(1,s.timeStamp-t.current.t),r=s.clientY-t.current.y;(l=e.onEnd)==null||l.call(e,s.clientX-t.current.x,r,r/o),t.current=null},onPointerCancel:()=>{var s;t.current=null,(s=e.onMove)==null||s.call(e,0,0)}}}function _e({dark:e=!1,lock:t=!1}){const{clock:s,story:o,setScreen:r}=se(),{s:l,setOverlay:i,now:a}=ye(),c=a!=null&&a.playing?o.extra.music.find(m=>m.id===a.playlist):null,u=m=>Of(y=>{y>30&&i(m==="right"?"control":"notifications")}),x=u("left"),g=u("right");return n.jsxs("div",{className:`statusbar ${e?"dark":""}`,children:[n.jsx("span",{className:"sb-left",...x,children:t?n.jsx("span",{className:"sb-carrier",children:l.airplane?"":"SKT"}):n.jsx("span",{className:"sb-time",children:La(s)})}),c?n.jsxs("button",{className:"sb-island live",onClick:()=>r({kind:"app",app:"music"}),"aria-label":"Now playing",children:[n.jsx("span",{className:"sb-island-art",style:{background:c.pic.tint},children:c.pic.emoji}),n.jsxs("span",{className:"sb-island-eq",children:[n.jsx("i",{}),n.jsx("i",{}),n.jsx("i",{}),n.jsx("i",{})]})]}):n.jsx("span",{className:"sb-island"}),n.jsxs("span",{className:"sb-icons",...g,children:[l.airplane?n.jsx(N,{n:"plane",size:15}):n.jsx("svg",{width:"18",height:"12",viewBox:"0 0 18 12",fill:"currentColor",children:[0,1,2,3].map(m=>n.jsx("rect",{x:m*4.6,y:9-m*3,width:"3.2",height:3+m*3,rx:"0.9",opacity:l.cellular?1:.3},m))}),l.wifi&&!l.airplane&&n.jsx("svg",{width:"16",height:"12",viewBox:"0 0 16 12",fill:"currentColor",children:n.jsx("path",{d:"M8 2.3c2.3 0 4.4.9 5.9 2.3l1.2-1.2A10 10 0 0 0 8 .6 10 10 0 0 0 .9 3.4l1.2 1.2A8.3 8.3 0 0 1 8 2.3zm0 3.4c1.4 0 2.6.5 3.5 1.4l1.2-1.2a6.7 6.7 0 0 0-9.4 0l1.2 1.2c.9-.9 2.1-1.4 3.5-1.4zm0 3.4c.5 0 .9.2 1.2.5L8 10.8 6.8 9.6c.3-.3.7-.5 1.2-.5z"})}),l.focus&&n.jsx(N,{n:"moon",size:13}),n.jsx("span",{className:"sb-batt",children:n.jsx("span",{style:{width:"78%"}})})]})]})}function Of(e){return An({onEnd:(t,s)=>e(s)})}function l0({dark:e=!1,onSwipe:t,onDrag:s}){const o=An({onMove:(r,l)=>s==null?void 0:s(Math.min(0,l)),onEnd:(r,l,i)=>{s==null||s(0),(l<-40||i<-.5||Math.abs(l)<6)&&t()}});return n.jsx("div",{className:`homebar ${e?"dark":""}`,...o,"aria-label":"Home",role:"button",children:n.jsx("span",{})})}function Af(){const{story:e,clock:t,setScreen:s,notices:o,queueRoom:r}=se(),{s:l,flashlight:i,setFlashlight:a,haptic:c}=ye(),{t:u,lang:x}=Q(),[g,m]=j.useState(0),[y,w]=j.useState(!1),v=()=>{$i(),w(!0),window.setTimeout(()=>s({kind:"passcode"}),220)},b=An({onMove:(f,p)=>m(Math.min(0,p)),onEnd:(f,p,z)=>{p<-90||z<-.6?v():m(0)}}),h=[...o].reverse();return n.jsxs("div",{className:`lock ${y?"leaving":""}`,style:{background:Ds(e,l.wallpaper),transform:g?`translateY(${g*.6}px)`:void 0,transition:g?"none":void 0},children:[n.jsx(_e,{dark:!0,lock:!0}),n.jsxs("div",{className:"lock-top",children:[n.jsx(N,{n:"lock",size:18,w:2.2}),n.jsx("div",{className:"lock-date",children:_2(t,x)}),n.jsx("div",{className:"lock-clock",children:La(t)})]}),n.jsxs("div",{className:"lock-notices",onPointerDown:f=>f.stopPropagation(),children:[n.jsx(Zf,{}),h.length>0&&n.jsx("div",{className:"lock-section",children:u({ko:"알림 센터",zh:"通知中心"})}),h.slice(0,4).map(f=>n.jsxs("button",{className:"notice",onClick:()=>{r(f.room),v()},children:[n.jsx("span",{className:"notice-icon",children:n.jsx(Eo,{id:"kakao"})}),n.jsxs("span",{className:"notice-body",children:[n.jsxs("span",{className:"notice-head",children:[n.jsx("b",{children:u(f.sender)}),n.jsx("small",{children:Ye(f.at,x)})]}),n.jsx("span",{className:"notice-text",children:u(f.text)})]})]},f.key)),e.lockNotices.map((f,p)=>n.jsxs("button",{className:"notice",onClick:v,children:[n.jsx("span",{className:"notice-icon",children:n.jsx(Eo,{id:f.app,day:30,weekday:""})}),n.jsxs("span",{className:"notice-body",children:[n.jsxs("span",{className:"notice-head",children:[n.jsx("b",{children:u(f.title)}),n.jsx("small",{children:u(f.time)})]}),n.jsx("span",{className:"notice-text",children:u(f.body)})]})]},p))]}),n.jsxs("div",{className:"lock-bottom",...b,children:[n.jsx("button",{className:`lock-btn ${i?"on":""}`,onPointerDown:f=>f.stopPropagation(),onClick:()=>{c(15),a(!i)},"aria-label":"Flashlight",children:n.jsx(N,{n:"flashlight",size:22})}),n.jsx("span",{className:"lock-swipe",children:u(A.slideToOpen)}),n.jsx("button",{className:"lock-btn",onPointerDown:f=>f.stopPropagation(),onClick:()=>s({kind:"app",app:"camera"}),"aria-label":"Camera",children:n.jsx(N,{n:"camera",size:22})})]}),n.jsx("div",{className:"lock-drag",...b}),n.jsx("div",{className:"homebar dark static",children:n.jsx("span",{})})]})}const Uf=[["1",""],["2","A B C"],["3","D E F"],["4","G H I"],["5","J K L"],["6","M N O"],["7","P Q R S"],["8","T U V"],["9","W X Y Z"]];function Wf(){const{story:e,unlock:t,setScreen:s}=se(),{s:o,haptic:r}=ye(),{t:l}=Q(),[i,a]=j.useState(""),[c,u]=j.useState(!1),[x,g]=j.useState(0),[m,y]=j.useState(!1),w=v=>{if(c||m||i.length>=4)return;P2(),r(6);const b=i+v;if(a(b),!(b.length<4)){if(b===e.passcode){Ch(),y(!0),window.setTimeout(t,260);return}window.setTimeout(()=>{u(!0),r(120)},120),window.setTimeout(()=>{u(!1),a(""),g(h=>h+1)},600)}};return j.useEffect(()=>{const v=b=>{/^[0-9]$/.test(b.key)?w(b.key):b.key==="Backspace"?a(h=>h.slice(0,-1)):b.key==="Escape"&&s({kind:"lock"})};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)}),n.jsxs("div",{className:`passcode ${m?"done":""}`,style:{background:Ds(e,o.wallpaper)},children:[n.jsx("div",{className:"passcode-dim"}),n.jsx(_e,{dark:!0}),n.jsx("div",{className:"pc-lock",children:n.jsx(N,{n:m?"unlock":"lock",size:20,w:2.2})}),n.jsx("div",{className:"pc-title",children:l(A.enterPasscode)}),n.jsx("div",{className:`pc-dots ${c?"shake":""}`,children:[0,1,2,3].map(v=>n.jsx("span",{className:v<i.length?"on":""},v))}),n.jsx("div",{className:"pc-hint",children:x>=2?l(A.hint):" "}),n.jsxs("div",{className:"pc-keys",children:[Uf.map(([v,b])=>n.jsxs("button",{onClick:()=>w(v),children:[n.jsx("b",{children:v}),n.jsx("small",{children:b})]},v)),n.jsx("span",{}),n.jsx("button",{onClick:()=>w("0"),children:n.jsx("b",{children:"0"})}),n.jsx("span",{})]}),n.jsxs("div",{className:"pc-bottom",children:[n.jsx("button",{children:l(A.emergency)}),n.jsx("button",{onClick:()=>i?a(v=>v.slice(0,-1)):s({kind:"lock"}),children:l(i?A.erase:A.cancel)})]})]})}const i0=[{id:"calendar",label:A.calendar},{id:"photos",label:A.photos},{id:"clock",label:{ko:"시계",zh:"時鐘"}},{id:"notes",label:A.notes},{id:"voice",label:A.voiceMemos},{id:"search",label:{ko:"네이버",zh:"NAVER"}},{id:"ai",label:A.ai},{id:"settings",label:A.settings},{id:"instagram",label:{ko:"Instagram",zh:"Instagram"}},{id:"x",label:"X"},{id:"music",label:{ko:"음악",zh:"音樂"}},{id:"maps",label:{ko:"지도",zh:"地圖"}},{id:"mail",label:{ko:"메일",zh:"郵件"}},{id:"weather",label:{ko:"날씨",zh:"天氣"}}],Bf=[{id:"phone",label:A.phone},{id:"messages",label:A.messages},{id:"kakao",label:A.kakao},{id:"camera",label:{ko:"카메라",zh:"相機"}}];function O2(e){const t=new Date(new Date(e).getTime()+324e5);return{y:t.getUTCFullYear(),m:t.getUTCMonth()+1,d:t.getUTCDate(),wd:t.getUTCDay(),h:t.getUTCHours(),min:t.getUTCMinutes()}}const Xn={ko:["일","월","화","수","목","금","토"],zh:["日","一","二","三","四","五","六"]};function Vf({onOpen:e}){const{story:t,totalUnread:s,clock:o,setOpenRoom:r}=se(),{s:l}=ye(),{t:i,lang:a}=Q(),c=O2(o),u=t.sms.filter(p=>p.unread).length,x=p=>p==="kakao"?s:p==="messages"?u:0,g=t.calendar.filter(p=>p.date===`${c.y}-${String(c.m).padStart(2,"0")}-${String(c.d).padStart(2,"0")}`),m=g.length?g:t.calendar.filter(p=>p.date>`${c.y}-${String(c.m).padStart(2,"0")}-${String(c.d).padStart(2,"0")}`).slice(0,2),y=({a:p,dock:z})=>n.jsxs("button",{className:"app",onClick:C=>{p.id==="kakao"&&r(null),e(p.id,C.currentTarget.querySelector(".app-icon").getBoundingClientRect())},children:[n.jsxs("span",{className:"app-icon",children:[n.jsx(Eo,{id:p.id,day:c.d,weekday:a==="ko"?`${Xn.ko[c.wd]}요일`:`星期${Xn.zh[c.wd]}`}),x(p.id)>0&&n.jsx("i",{className:"badge",children:x(p.id)})]}),!z&&n.jsx("span",{className:"app-label",children:i(p.label)})]}),[w,v]=j.useState(0),{now:b}=ye(),h=t.extra.music.find(p=>p.id===(b==null?void 0:b.playlist))??t.extra.music[0],f=b&&h?h.songs[b.index]:null;return n.jsxs("div",{className:"home",style:{background:Ds(t,l.wallpaper)},children:[n.jsx(_e,{dark:!0}),n.jsxs("div",{className:"home-pages",onScroll:p=>{const z=p.currentTarget;v(Math.round(z.scrollLeft/z.clientWidth))},children:[n.jsxs("div",{className:"home-page",children:[n.jsxs("div",{className:"widgets",children:[n.jsxs("button",{className:"wg wg-weather",onClick:p=>e("weather",p.currentTarget.getBoundingClientRect()),children:[n.jsx("small",{children:i({ko:"서울",zh:"首爾"})}),n.jsx("b",{children:t.id==="shinyu"?"-4°":"9°"}),n.jsx("span",{children:t.id==="shinyu"?"🌙":"☁️"}),n.jsx("small",{children:t.id==="shinyu"?i({ko:"맑음 · 최고 1° 최저 -7°",zh:"晴 · 高 1° 低 -7°"}):i({ko:"흐림 · 최고 14° 최저 6°",zh:"多雲 · 高 14° 低 6°"})})]}),n.jsxs("button",{className:"wg wg-cal",onClick:p=>e("calendar",p.currentTarget.getBoundingClientRect()),children:[n.jsx("small",{className:"red",children:a==="ko"?`${Xn.ko[c.wd]}요일`:`星期${Xn.zh[c.wd]}`}),n.jsx("b",{children:c.d}),m.slice(0,2).map((p,z)=>n.jsx("span",{className:"wg-ev",style:{borderColor:p.color},children:i(p.title)},z))]})]}),n.jsxs("div",{className:"wg-labels",children:[n.jsx("span",{children:i({ko:"날씨",zh:"天氣"})}),n.jsx("span",{children:i(A.calendar)})]}),n.jsx("div",{className:"grid",children:i0.slice(0,8).map(p=>n.jsx(y,{a:p},p.id))})]}),n.jsxs("div",{className:"home-page",children:[n.jsxs("button",{className:"wg wg-music",onClick:p=>e("music",p.currentTarget.getBoundingClientRect()),children:[n.jsx("span",{className:"wg-music-art",children:n.jsx("span",{style:{background:h==null?void 0:h.pic.tint},children:h==null?void 0:h.pic.emoji})}),n.jsxs("span",{children:[n.jsx("small",{children:i(f?{ko:"지금 재생 중",zh:"正在播放"}:{ko:"최근 재생",zh:"最近播放"})}),n.jsx("b",{children:f?f.title:h?i(h.title):""}),n.jsx("small",{children:f?f.artist:h?i(h.by):""})]})]}),n.jsx("div",{className:"wg-labels one",children:n.jsx("span",{children:i({ko:"음악",zh:"音樂"})})}),n.jsx("div",{className:"grid",children:i0.slice(8).map(p=>n.jsx(y,{a:p},p.id))})]})]}),n.jsx("div",{className:"home-dots",children:[0,1].map(p=>n.jsx("i",{className:w===p?"on":""},p))}),n.jsx("div",{className:"dock",children:Bf.map(p=>n.jsx(y,{a:p,dock:!0},p.id))})]})}function Hf(){const{banner:e,dismissBanner:t,setScreen:s,setOpenRoom:o,screen:r,queueRoom:l}=se(),{s:i,overlay:a}=ye(),{t:c}=Q(),[u,x]=j.useState(0),g=j.useRef(t);g.current=t,j.useEffect(()=>{if(!e)return;const y=window.setTimeout(()=>g.current(),4500);return()=>window.clearTimeout(y)},[e==null?void 0:e.key]);const m=An({onMove:(y,w)=>x(Math.min(0,w)),onEnd:(y,w)=>{if(x(0),w<-25)t();else if(Math.abs(w)<6){if(t(),r.kind==="lock"||r.kind==="passcode"){l(e.room),s({kind:"passcode"});return}s({kind:"app",app:"kakao"}),o(e.room)}}});return!e||i.focus||a!=="none"?null:n.jsxs("div",{className:"banner",style:{transform:u?`translateY(${u}px)`:void 0},...m,role:"button",children:[n.jsx("span",{className:"banner-icon",children:n.jsx(Eo,{id:"kakao"})}),n.jsxs("span",{className:"banner-body",children:[n.jsxs("span",{className:"notice-head",children:[n.jsx("b",{children:c(e.sender)}),n.jsx("small",{children:c(A.now)})]}),n.jsx("span",{className:"notice-text",children:c(e.text)})]})]},e.key)}function qf(){const{s:e,set:t,toggle:s,overlay:o,setOverlay:r,flashlight:l,setFlashlight:i,haptic:a}=ye(),{setScreen:c}=se(),{t:u}=Q(),[x,g]=j.useState(!1);if(o!=="control")return null;const m=()=>{g(!0),window.setTimeout(()=>{g(!1),r("none")},200)},y=v=>()=>{a(10),s(v)},w=v=>b=>{const h=b.currentTarget,f=C=>{const M=h.getBoundingClientRect(),S=Math.min(1,Math.max(v==="brightness"?.25:0,1-(C-M.top)/M.height));t(v,Math.round(S*100)/100)};f(b.clientY),h.setPointerCapture(b.pointerId);const p=C=>f(C.clientY),z=()=>{h.removeEventListener("pointermove",p),h.removeEventListener("pointerup",z)};h.addEventListener("pointermove",p),h.addEventListener("pointerup",z)};return n.jsx("div",{className:`cc ${x?"closing":""}`,onClick:m,children:n.jsxs("div",{className:"cc-grid",onClick:v=>v.stopPropagation(),children:[n.jsxs("div",{className:"cc-tile cc-conn",children:[n.jsx("button",{className:`cc-round ${e.airplane?"on orange":""}`,onClick:y("airplane"),"aria-label":"Airplane",children:n.jsx(N,{n:"plane",size:22})}),n.jsx("button",{className:`cc-round ${e.cellular?"on green":""}`,onClick:y("cellular"),"aria-label":"Cellular",children:n.jsx(N,{n:"antenna",size:22})}),n.jsx("button",{className:`cc-round ${e.wifi?"on blue":""}`,onClick:y("wifi"),"aria-label":"Wi-Fi",children:n.jsx(N,{n:"wifi",size:22})}),n.jsx("button",{className:`cc-round ${e.bluetooth?"on blue":""}`,onClick:y("bluetooth"),"aria-label":"Bluetooth",children:n.jsx(N,{n:"bluetooth",size:22})})]}),n.jsx(Xf,{}),n.jsx("button",{className:`cc-tile sq ${e.rotationLock?"on":""}`,onClick:y("rotationLock"),"aria-label":"Rotation lock",children:n.jsx(N,{n:"lockRotate",size:26})}),n.jsx("button",{className:`cc-tile sq ${e.silent?"on red":""}`,onClick:y("silent"),"aria-label":"Silent",children:n.jsx(N,{n:e.silent?"bellSlash":"bell",size:26})}),n.jsxs("button",{className:`cc-tile wide ${e.focus?"on purple":""}`,onClick:y("focus"),children:[n.jsx(N,{n:"moon",size:22}),n.jsxs("span",{children:[n.jsx("b",{children:u({ko:"집중 모드",zh:"專注模式"})}),n.jsx("small",{children:e.focus?u({ko:"방해 금지 켬",zh:"勿擾模式已開啟"}):u({ko:"끔",zh:"關閉"})})]})]}),n.jsxs("div",{className:"cc-slider",onPointerDown:w("brightness"),children:[n.jsx("i",{style:{height:`${e.brightness*100}%`}}),n.jsx(N,{n:"sun",size:24})]}),n.jsxs("div",{className:"cc-slider",onPointerDown:w("volume"),children:[n.jsx("i",{style:{height:`${e.volume*100}%`}}),n.jsx(N,{n:"speaker",size:24})]}),n.jsx("button",{className:`cc-tile sq ${l?"on white":""}`,onClick:()=>{a(10),i(!l)},"aria-label":"Flashlight",children:n.jsx(N,{n:"flashlight",size:26})}),n.jsx("button",{className:"cc-tile sq",onClick:()=>{r("none"),c({kind:"app",app:"clock"})},"aria-label":"Timer",children:n.jsx(N,{n:"timer",size:26})}),n.jsx("button",{className:"cc-tile sq",onClick:()=>{r("none"),c({kind:"app",app:"camera"})},"aria-label":"Camera",children:n.jsx(N,{n:"camera",size:26})}),n.jsx("button",{className:"cc-tile sq","aria-label":"Calculator",children:n.jsx(N,{n:"calc",size:26})})]})})}function Qf(){const{overlay:e,setOverlay:t,s}=ye(),{story:o,clock:r,notices:l,clearNotices:i,setScreen:a,setOpenRoom:c}=se(),{t:u,lang:x}=Q();if(e!=="notifications")return null;const g=[...l].reverse();return n.jsxs("div",{className:"nc",style:{background:Ds(o,s.wallpaper)},onClick:()=>t("none"),children:[n.jsx("div",{className:"nc-dim"}),n.jsx(_e,{dark:!0,lock:!0}),n.jsxs("div",{className:"lock-top",children:[n.jsx("div",{className:"lock-date",children:_2(r,x)}),n.jsx("div",{className:"lock-clock",children:La(r)})]}),n.jsxs("div",{className:"lock-notices",onClick:m=>m.stopPropagation(),children:[n.jsxs("div",{className:"lock-section",children:[u({ko:"알림 센터",zh:"通知中心"}),g.length>0&&n.jsx("button",{className:"nc-clear",onClick:i,children:n.jsx(N,{n:"close",size:12,w:3})})]}),g.length===0&&n.jsx("p",{className:"nc-empty",children:u({ko:"이전 알림 없음",zh:"沒有較早的通知"})}),g.map(m=>n.jsxs("button",{className:"notice",onClick:()=>{t("none"),a({kind:"app",app:"kakao"}),c(m.room)},children:[n.jsx("span",{className:"notice-icon",children:n.jsx(Eo,{id:"kakao"})}),n.jsxs("span",{className:"notice-body",children:[n.jsxs("span",{className:"notice-head",children:[n.jsx("b",{children:u(m.sender)}),n.jsx("small",{children:Ye(m.at,x)})]}),n.jsx("span",{className:"notice-text",children:u(m.text)})]})]},m.key))]})]})}const Kf=[{n:"mic",l:{ko:"소리 끔",zh:"靜音"}},{n:"grid",l:{ko:"키패드",zh:"撥號鍵盤"}},{n:"speaker",l:{ko:"스피커",zh:"揚聲器"}},{n:"plus",l:{ko:"통화 추가",zh:"加入通話"}},{n:"camera",l:{ko:"FaceTime",zh:"FaceTime"}},{n:"person",l:{ko:"연락처",zh:"聯絡人"}}];function A2(){const{t:e}=Q(),[t,s]=j.useState([]);return n.jsx("div",{className:"call-grid",children:Kf.map(o=>n.jsxs("button",{className:t.includes(o.n)?"on":"",onClick:()=>s(r=>r.includes(o.n)?r.filter(l=>l!==o.n):[...r,o.n]),children:[n.jsx("i",{children:n.jsx(N,{n:o.n,size:28})}),n.jsx("span",{children:e(o.l)})]},o.n))})}function Yf(){const{call:e,story:t,acceptCall:s,declineCall:o,finishCall:r}=se(),{s:l}=ye(),{t:i}=Q(),[a,c]=j.useState(0),[u,x]=j.useState(0),g=(e==null?void 0:e.state)==="active";if(j.useEffect(()=>((e==null?void 0:e.state)==="ringing"?L2():on(),on),[e==null?void 0:e.state]),j.useEffect(()=>{if(!g){c(0),x(0);return}const v=window.setInterval(()=>c(b=>b+1),1e3);return()=>window.clearInterval(v)},[g]),j.useEffect(()=>{if(!g||!e||u>=e.lines.length)return;const v=window.setTimeout(()=>x(b=>b+1),u===0?1e3:2400);return()=>window.clearTimeout(v)},[g,u,e]),!e)return null;const m=t.contacts[e.from],y=String(Math.floor(a/60)).padStart(2,"0"),w=String(a%60).padStart(2,"0");return n.jsxs("div",{className:"call",style:{background:Ds(t,l.wallpaper)},children:[n.jsx("div",{className:"call-dim"}),n.jsx(_e,{dark:!0}),n.jsxs("div",{className:"call-who",children:[n.jsx("small",{children:g?`${y}:${w}`:i(A.incomingCall)}),n.jsx("h2",{children:m?i(m.name):""})]}),g?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"call-lines",children:[e.lines.slice(0,u).map((v,b)=>n.jsx("p",{className:"fade-in",children:i(v)},b)),u<e.lines.length&&n.jsx("span",{className:"call-typing",children:"• • •"})]}),n.jsx(A2,{}),n.jsx("div",{className:"call-actions one",children:n.jsx("button",{className:"call-btn end",onClick:()=>r(a),"aria-label":i(A.endCall),children:n.jsx("i",{children:n.jsx(N,{n:"phoneFill",size:34,style:{transform:"rotate(135deg)"}})})})})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"call-avatar",children:n.jsx(Te,{size:120,src:m==null?void 0:m.avatar,radius:60})}),n.jsxs("div",{className:"call-quick",children:[n.jsxs("span",{children:[n.jsx(N,{n:"clock",size:22}),i({ko:"다시 알림",zh:"提醒我"})]}),n.jsxs("span",{children:[n.jsx(N,{n:"bubble",size:22}),i(A.messages)]})]}),n.jsxs("div",{className:"call-actions",children:[n.jsxs("button",{className:"call-btn end",onClick:o,children:[n.jsx("i",{children:n.jsx(N,{n:"phoneFill",size:34,style:{transform:"rotate(135deg)"}})}),n.jsx("span",{children:i(A.decline)})]}),n.jsxs("button",{className:"call-btn ok",onClick:s,children:[n.jsx("i",{children:n.jsx(N,{n:"phoneFill",size:34})}),n.jsx("span",{children:i(A.accept)})]})]})]})]})}function Gf(){var _;const{outgoing:e,dial:t}=ye(),{story:s,addCall:o,call:r,pushMessage:l}=se(),{t:i}=Q(),[a,c]=j.useState("calling"),[u,x]=j.useState(0),[g,m]=j.useState(0),[y,w]=j.useState(null),v=j.useRef(null),b=(e==null?void 0:e.to)??"",h=!!(e!=null&&e.video),f=(_=il[s.id])==null?void 0:_[b],p=s.contacts[b];if(j.useEffect(()=>{if(!e)return;c("calling"),x(0),m(0),Mh();const T=3500+Math.random()*2500,$=window.setTimeout(()=>{on(),c(f!=null&&f.call.answer?"active":"noanswer")},f!=null&&f.call.answer?T:11e3);return()=>{window.clearTimeout($),on()}},[e]),j.useEffect(()=>{if(a!=="active")return;const T=window.setInterval(()=>x($=>$+1),1e3);return()=>window.clearInterval(T)},[a]),j.useEffect(()=>{if(a!=="active"||!f||g>=f.call.lines.length)return;const T=window.setTimeout(()=>m($=>$+1),g===0?900:2300);return()=>window.clearTimeout(T)},[a,g,f]),j.useEffect(()=>{var W;if(!h||!((W=navigator.mediaDevices)!=null&&W.getUserMedia))return;let T=null,$=!1;return navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}).then(le=>{if($)return le.getTracks().forEach(de=>de.stop());T=le,w(le)}).catch(()=>w(null)),()=>{$=!0,T==null||T.getTracks().forEach(le=>le.stop()),w(null)}},[h,e]),j.useEffect(()=>{v.current&&y&&(v.current.srcObject=y)},[y,a]),j.useEffect(()=>{r&&e&&t(null)},[r,e,t]),!e)return null;const z=()=>{if(on(),o(b,"outgoing",u),a!=="active"&&(f!=null&&f.call.missedMsg)){const T=f.call.missedMsg;window.setTimeout(()=>l(b,T),2500)}t(null)},C=String(Math.floor(u/60)).padStart(2,"0"),M=String(u%60).padStart(2,"0"),S=a==="calling"?i(h?{ko:"페이스톡 연결 중…",zh:"視訊通話連線中…"}:{ko:"통화 연결 중…",zh:"撥號中…"}):a==="noanswer"?i({ko:"응답 없음",zh:"無人接聽"}):`${C}:${M}`;return n.jsxs("div",{className:`call outgoing ${h?"facetime":""}`,style:{background:h?"#000":Ds(s,0)},children:[h&&n.jsx("div",{className:`ft-self ${a==="active"?"pip":""}`,children:y?n.jsx("video",{ref:v,autoPlay:!0,playsInline:!0,muted:!0}):n.jsx("span",{className:"ft-nocam",children:i({ko:"카메라 꺼짐",zh:"相機已關閉"})})}),h&&a==="active"&&n.jsxs("div",{className:"ft-remote",children:[n.jsx(Te,{size:140,radius:70,src:p==null?void 0:p.avatar}),n.jsx("small",{children:i({ko:"상대방 카메라가 꺼져 있습니다",zh:"對方的相機已關閉"})})]}),!h&&n.jsx("div",{className:"call-dim"}),n.jsx(_e,{dark:!0}),n.jsxs("div",{className:"call-who",children:[n.jsx("small",{children:S}),n.jsx("h2",{children:p?i(p.name):b})]}),n.jsxs("div",{className:"call-lines",children:[a==="active"&&(f==null?void 0:f.call.lines.slice(0,g).map((T,$)=>n.jsx("p",{className:"fade-in",children:i(T)},$))),a==="active"&&f&&g<f.call.lines.length&&n.jsx("span",{className:"call-typing",children:"• • •"}),a==="noanswer"&&n.jsx("p",{className:"fade-in",children:i({ko:"연결이 되지 않아 삐 소리 후 음성사서함으로 연결되오니…",zh:"您撥的電話無人接聽，嗶聲後將轉入語音信箱…"})})]}),!h&&n.jsx(A2,{}),n.jsx("div",{className:"call-actions one",children:n.jsx("button",{className:"call-btn end",onClick:z,"aria-label":i(A.endCall),children:n.jsx("i",{children:n.jsx(N,{n:"phoneFill",size:34,style:{transform:"rotate(135deg)"}})})})})]})}function Xf(){const{now:e,setNow:t}=ye(),{story:s}=se(),{t:o}=Q(),r=e?s.extra.music.find(a=>a.id===e.playlist):null,l=r&&e?r.songs[e.index]:null,i=a=>r&&e&&t({...e,index:(e.index+a+r.songs.length)%r.songs.length,pos:0});return n.jsxs("div",{className:"cc-tile cc-music",children:[l?n.jsxs("span",{className:"cc-song",children:[n.jsx("b",{children:l.title}),n.jsx("small",{children:l.artist})]}):n.jsx("small",{children:o({ko:"재생 중 아님",zh:"未在播放"})}),n.jsxs("div",{className:"cc-music-btns",children:[n.jsx("button",{onClick:()=>i(-1),"aria-label":"prev",children:n.jsx(N,{n:"rewind",size:20})}),n.jsx("button",{onClick:()=>{e?t({...e,playing:!e.playing}):s.extra.music[0]&&t({playlist:s.extra.music[0].id,index:0,playing:!0,pos:0})},"aria-label":"play",children:n.jsx(N,{n:e!=null&&e.playing?"pause":"play",size:24})}),n.jsx("button",{onClick:()=>i(1),"aria-label":"next",children:n.jsx(N,{n:"forward",size:20})})]})]})}function Zf(){const{now:e,setNow:t}=ye(),{story:s}=se();if(!e)return null;const o=s.extra.music.find(i=>i.id===e.playlist),r=o==null?void 0:o.songs[e.index];if(!o||!r)return null;const l=i=>t({...e,index:(e.index+i+o.songs.length)%o.songs.length,pos:0});return n.jsxs("div",{className:"lock-player",children:[n.jsxs("div",{className:"lock-player-top",children:[n.jsx("span",{className:"lock-player-art",style:{background:o.pic.tint},children:o.pic.emoji}),n.jsxs("span",{children:[n.jsx("b",{children:r.title}),n.jsx("small",{children:r.artist})]})]}),n.jsx("div",{className:"lock-player-bar",children:n.jsx("i",{style:{width:`${Math.min(100,e.pos/r.dur*100)}%`}})}),n.jsxs("div",{className:"lock-player-btns",children:[n.jsx("button",{onClick:()=>l(-1),"aria-label":"prev",children:n.jsx(N,{n:"rewind",size:26})}),n.jsx("button",{onClick:()=>t({...e,playing:!e.playing}),"aria-label":"play",children:n.jsx(N,{n:e.playing?"pause":"play",size:32})}),n.jsx("button",{onClick:()=>l(1),"aria-label":"next",children:n.jsx(N,{n:"forward",size:26})})]})]})}const Jf=[{id:"library",label:A.library,icon:"photo"},{id:"foryou",label:{ko:"For You",zh:"為你推薦"},icon:"heart"},{id:"albums",label:{ko:"앨범",zh:"相簿"},icon:"album"},{id:"search",label:A.search,icon:"search"}];function em(){const{story:e,clock:t}=se(),{shots:s,discover:o,found:r}=ye(),[l,i]=j.useState(!1),{t:a,lang:c}=Q(),[u,x]=j.useState("library"),[g,m]=j.useState(null),[y,w]=j.useState([]),[v,b]=j.useState(null),h=[...e.photos,...s.map(M=>({id:M.id,at:t,caption:{ko:"방금 찍은 사진",zh:"剛拍的照片"},emoji:"📷",tint:"#ccc",src:M.src}))].sort((M,S)=>q(M.at)-q(S.at));if(g)return n.jsx(tm,{list:g.list,start:g.i,favs:y,setFavs:w,onClose:()=>m(null)});const f=n.jsx(al,{tabs:Jf,value:u,onChange:M=>{x(M),b(null)}}),p=M=>n.jsx("div",{className:"ph-grid",children:M.map((S,_)=>n.jsxs("button",{onClick:()=>m({list:M,i:_}),children:[n.jsx(Xe,{src:S.src,emoji:S.emoji,tint:S.tint,label:a(S.caption)}),y.includes(S.id)&&n.jsx(N,{n:"heart",size:14,className:"ph-fav"})]},S.id))});if(l)return n.jsx(U2,{passcode:e.passcode,onCancel:()=>i(!1),onOk:()=>{i(!1),b("hidden"),o("hidden")}});if(v==="hidden"||v==="deleted"){const M=v==="hidden"?e.extra.hiddenPhotos:e.extra.deletedPhotos;return n.jsxs(be,{title:v==="hidden"?{ko:"가려진 항목",zh:"已隱藏"}:{ko:"최근 삭제된 항목",zh:"最近刪除"},onBack:()=>b(null),backLabel:{ko:"앨범",zh:"相簿"},bg:"#fff",bottom:f,children:[v==="deleted"&&n.jsx("p",{className:"ph-del-note",children:a({ko:"항목은 영구적으로 삭제되기 전까지 최대 30일 동안 표시됩니다.",zh:"項目會在永久刪除前最多顯示 30 天。"})}),p(M),v==="deleted"&&n.jsx("p",{className:"ph-count red",children:a({ko:"29일 남음",zh:"剩 29 天"})})]})}if(v){const M=v==="fav"?h.filter(S=>y.includes(S.id)):h;return n.jsx(be,{title:v==="fav"?{ko:"즐겨찾는 항목",zh:"個人收藏"}:{ko:"최근 항목",zh:"最近項目"},onBack:()=>b(null),backLabel:{ko:"앨범",zh:"相簿"},bg:"#fff",bottom:f,children:M.length?p(M):n.jsx("p",{className:"empty-note",children:a(A.noItems)})})}if(u==="albums")return n.jsxs(be,{title:{ko:"앨범",zh:"相簿"},large:!0,bg:"#fff",bottom:f,right:n.jsx(N,{n:"plus",size:24}),children:[n.jsx("div",{className:"ph-albums",children:["recent","fav"].map(M=>{const S=M==="fav"?h.filter(T=>y.includes(T.id)):h,_=S[S.length-1];return n.jsxs("button",{onClick:()=>b(M),children:[n.jsx("span",{className:"ph-cover",children:_?n.jsx(Xe,{src:_.src,emoji:_.emoji,tint:_.tint}):n.jsx("span",{className:"ph-empty"})}),n.jsx("b",{children:a(M==="fav"?{ko:"즐겨찾는 항목",zh:"個人收藏"}:{ko:"최근 항목",zh:"最近項目"})}),n.jsx("small",{children:S.length})]},M)})}),n.jsx("h3",{className:"group-h big",children:a({ko:"기타",zh:"其他"})}),n.jsxs("div",{className:"group-box flat",children:[n.jsxs("button",{className:"cell",onClick:()=>r.includes("hidden")?b("hidden"):i(!0),children:[n.jsx(N,{n:"eyeSlash",size:22,className:"tint"}),n.jsx("span",{className:"cell-main",children:a({ko:"가려진 항목",zh:"已隱藏"})}),n.jsx(N,{n:"lock",size:14,className:"cell-chev"})]}),n.jsxs("button",{className:"cell",onClick:()=>{b("deleted"),o("deleted")},children:[n.jsx(N,{n:"trash",size:22,className:"tint"}),n.jsx("span",{className:"cell-main",children:a({ko:"최근 삭제된 항목",zh:"最近刪除"})}),n.jsx("span",{className:"cell-detail",children:e.extra.deletedPhotos.length}),n.jsx(N,{n:"chevron",size:15,w:2.6,className:"cell-chev"})]})]})]});if(u==="foryou"){const M=h[h.length-1];return n.jsx(be,{title:{ko:"For You",zh:"為你推薦"},large:!0,bg:"#fff",bottom:f,children:n.jsxs("div",{className:"ph-memory",onClick:()=>m({list:h,i:h.length-1}),children:[n.jsx(Xe,{src:M.src,emoji:M.emoji,tint:M.tint}),n.jsxs("span",{children:[n.jsx("b",{children:a({ko:"추억",zh:"回憶"})}),n.jsx("small",{children:sn(M.at,c)})]})]})})}if(u==="search")return n.jsx(be,{title:A.search,large:!0,bg:"#fff",bottom:f,search:{ko:"사진, 사람, 장소…",zh:"照片、人物、地點…"},children:n.jsx("div",{className:"ph-tags",children:h.map(M=>n.jsxs("button",{onClick:()=>m({list:h,i:h.indexOf(M)}),children:[M.emoji," ",a(M.caption)]},M.id))})});const z=h[0],C=h[h.length-1];return n.jsxs("div",{className:"ph-lib",children:[n.jsxs("div",{className:"ph-lib-top",children:[n.jsx(_e,{}),n.jsxs("div",{className:"ph-lib-head",children:[n.jsxs("span",{children:[n.jsx("b",{children:a(A.library)}),n.jsx("small",{children:z&&C?`${sn(z.at,c).split(" ").slice(0,2).join(" ")} – ${sn(C.at,c).split(" ").slice(0,3).join(" ")}`:""})]}),n.jsx("span",{className:"ph-pill",children:a({ko:"선택",zh:"選取"})})]})]}),n.jsxs("div",{className:"ph-lib-body",children:[p(h),n.jsx("p",{className:"ph-count",children:a({ko:`사진 ${h.length}장`,zh:`${h.length} 張照片`})})]}),n.jsxs("div",{className:"ph-seg",children:[n.jsx("span",{children:a({ko:"년",zh:"年"})}),n.jsx("span",{children:a({ko:"월",zh:"月"})}),n.jsx("span",{className:"on",children:a({ko:"모든 사진",zh:"所有照片"})})]}),f]})}function tm({list:e,start:t,favs:s,setFavs:o,onClose:r}){const{t:l,lang:i}=Q(),[a,c]=j.useState(t),[u,x]=j.useState(0),[g,m]=j.useState(!0),[y,w]=j.useState(!1);at(!0,r);const v=e[a],b=An({onMove:f=>x(f),onEnd:(f,p)=>{if(x(0),p>120)return r();f<-60&&a<e.length-1?c(a+1):f>60&&a>0?c(a-1):Math.abs(f)<6&&Math.abs(p)<6&&m(z=>!z)}}),h=s.includes(v.id);return n.jsxs("div",{className:`ph-viewer ${g?"":"bare"}`,children:[n.jsxs("div",{className:"ph-v-top",children:[n.jsx(_e,{}),n.jsxs("div",{className:"ph-v-nav",children:[n.jsx("button",{onClick:r,className:"nav-back",children:n.jsx(N,{n:"back",size:22,w:2.6})}),n.jsxs("span",{children:[n.jsx("b",{children:sn(v.at,i).split(" ").slice(1,3).join(" ")}),n.jsx("small",{children:Ye(v.at,i)})]}),n.jsx("span",{className:"nav-text",children:l({ko:"편집",zh:"編輯"})})]})]}),n.jsx("div",{className:"ph-v-stage",...b,children:n.jsx("div",{className:"ph-v-track",style:{transform:`translateX(calc(${-a*100}% + ${u}px))`,transition:u?"none":void 0},children:e.map(f=>n.jsx("div",{className:"ph-v-slide",children:n.jsx(Xe,{src:f.src,emoji:f.emoji,tint:f.tint,label:l(f.caption)})},f.id))})}),y&&n.jsxs("div",{className:"ph-info",children:[n.jsx("b",{children:l(v.caption)}),n.jsxs("small",{children:[sn(v.at,i)," · ",Ye(v.at,i)]})]}),n.jsxs("div",{className:"ph-v-bar",children:[n.jsx(N,{n:"share",size:24}),n.jsx("button",{onClick:()=>o(h?s.filter(f=>f!==v.id):[...s,v.id]),"aria-label":"favorite",children:n.jsx(N,{n:"heart",size:24,style:h?{fill:"#fff"}:void 0})}),n.jsx("button",{onClick:()=>w(f=>!f),"aria-label":"info",children:n.jsx(N,{n:"info",size:24})}),n.jsx(N,{n:"trash",size:24})]})]})}function U2({passcode:e,onOk:t,onCancel:s,title:o,hint:r,face:l=!0}){const{t:i}=Q(),[a,c]=j.useState(l?"face":"code"),[u,x]=j.useState(0),[g,m]=j.useState(""),[y,w]=j.useState(!1);at(!0,s),j.useEffect(()=>{const b=window.setTimeout(()=>c("code"),1300);return()=>window.clearTimeout(b)},[]);const v=b=>{const h=(g+b).slice(0,4);m(h),!(h.length<4)&&(h===e?window.setTimeout(t,150):(x(f=>f+1),w(!0),window.setTimeout(()=>{w(!1),m("")},500)))};return n.jsxs("div",{className:"ph-lock",children:[n.jsx(_e,{}),a==="face"?n.jsxs("div",{className:"ph-face",children:[n.jsx("span",{className:"faceid"}),n.jsx("p",{children:"Face ID"})]}):n.jsxs(n.Fragment,{children:[n.jsx("p",{className:"ph-lock-title",children:i(o??{ko:"가려진 앨범을 보려면 iPhone 암호를 입력하십시오",zh:"輸入 iPhone 密碼以檢視隱藏的相簿"})}),n.jsx("div",{className:`pc-dots dark ${y?"shake":""}`,children:[0,1,2,3].map(b=>n.jsx("span",{className:b<g.length?"on":""},b))}),n.jsx("div",{className:"kp-grid ph-kp",children:["1","2","3","4","5","6","7","8","9","","0","⌫"].map((b,h)=>b===""?n.jsx("span",{},h):n.jsx("button",{onClick:()=>b==="⌫"?m(f=>f.slice(0,-1)):v(b),className:b==="⌫"?"kp-del":"",children:n.jsx("b",{children:b})},h))}),r&&u>0&&n.jsx("p",{className:"ph-lock-hint",children:i(r)}),n.jsx("button",{className:"ph-lock-cancel",onClick:s,children:i({ko:"취소",zh:"取消"})})]})]})}function nm(e,t){return e?"text"in e?t(e.text):"photo"in e?t({ko:"사진을 보냈습니다.",zh:"傳送了照片。"}):t({ko:"이모티콘을 보냈습니다.",zh:"傳送了貼圖。"}):""}function W2(e,t,s){return e.group?s(e.group.name):e.contactId?s(t[e.contactId].name):""}function sm(){const{openRoom:e}=se(),[t,s]=j.useState("chats"),[o,r]=j.useState(null),[l,i]=j.useState(!1);return e?n.jsx(um,{id:e}):n.jsxs("div",{className:"kakao",children:[n.jsx(_e,{}),t==="friends"&&n.jsx(lm,{onProfile:r}),t==="chats"&&n.jsx(cm,{hiddenView:l,setHiddenView:i}),(t==="open"||t==="shop"||t==="more")&&n.jsx(rm,{tab:t}),n.jsx(om,{tab:t,setTab:s}),o&&n.jsx(im,{id:o,onClose:()=>r(null)})]})}function om({tab:e,setTab:t}){const{totalUnread:s}=se(),o=[["friends","person"],["chats","bubble"],["open","bubbles"],["shop","bag"],["more","more"]];return n.jsx("nav",{className:"k-tabs",children:o.map(([r,l])=>n.jsxs("button",{className:e===r?"on":"",onClick:()=>t(r),children:[n.jsx(N,{n:l,size:26,w:e===r?2.3:1.7}),r==="chats"&&s>0&&n.jsx("i",{className:"k-tab-badge",children:s})]},r))})}function Da({title:e,icons:t,onIcon:s}){const{t:o}=Q();return n.jsxs("div",{className:"k-head",children:[n.jsx("h1",{children:o(e)}),n.jsx("span",{children:t.map(r=>n.jsx("button",{className:"k-head-btn",onClick:()=>s==null?void 0:s(r),"aria-label":r,children:n.jsx(N,{n:r,size:23,w:1.9})},r))})]})}function rm({tab:e}){const{t}=Q(),s={open:{ko:"오픈채팅",zh:"開放聊天"},shop:{ko:"쇼핑",zh:"購物"},more:{ko:"더보기",zh:"更多"}};return n.jsxs(n.Fragment,{children:[n.jsx(Da,{title:s[e],icons:["search","gear"]}),n.jsxs("div",{className:"k-empty",children:[n.jsx(N,{n:e==="shop"?"bag":e==="open"?"bubbles":"grid",size:44,w:1.4}),n.jsx("p",{children:t({ko:"이 화면은 이야기와 관계없어요.",zh:"這個畫面和故事無關喔。"})})]})]})}function lm({onProfile:e}){const{story:t}=se(),{t:s}=Q(),o=Object.entries(t.contacts).filter(([r])=>t.rooms.some(l=>{var i;return!l.hidden&&(l.contactId===r||((i=l.group)==null?void 0:i.members.includes(r)))}));return n.jsxs(n.Fragment,{children:[n.jsx(Da,{title:A.friends,icons:["search","plus","gear"]}),n.jsxs("div",{className:"k-scroll",children:[n.jsxs("button",{className:"k-me",onClick:()=>e("me"),children:[n.jsx(Te,{size:58,src:t.owner.avatar}),n.jsxs("span",{children:[n.jsx("b",{children:s(t.owner.name)}),n.jsx("small",{children:s(t.owner.status)})]})]}),n.jsx("div",{className:"k-section",children:s({ko:`친구 ${o.length}`,zh:`好友 ${o.length}`})}),o.map(([r,l])=>n.jsxs("button",{className:"k-friend",onClick:()=>e(r),children:[n.jsx(Te,{size:44,src:l.avatar}),n.jsxs("span",{children:[n.jsx("b",{children:s(l.name)}),l.status&&n.jsx("small",{children:s(l.status)})]})]},r))]})]})}function im({id:e,onClose:t}){const{story:s,setOpenRoom:o}=se(),{dial:r}=ye(),{t:l}=Q();at(!0,t);const i=e==="me",a=i?{name:s.owner.name,status:s.owner.status,avatar:s.owner.avatar}:s.contacts[e],c=s.rooms.find(u=>u.contactId===e);return n.jsxs("div",{className:"k-profile",children:[n.jsx(_e,{dark:!0}),n.jsxs("div",{className:"k-profile-top",children:[n.jsx("button",{onClick:t,"aria-label":"close",children:n.jsx(N,{n:"close",size:24,w:2})}),n.jsx("span",{children:n.jsx(N,{n:"gift",size:22})})]}),n.jsxs("div",{className:"k-profile-mid",children:[n.jsx(Te,{size:100,src:a.avatar}),n.jsx("b",{children:l(a.name)}),a.status&&n.jsx("small",{children:l(a.status)})]}),n.jsxs("div",{className:"k-profile-btns",children:[n.jsxs("button",{onClick:()=>{c&&(t(),o(c.id))},children:[n.jsx(N,{n:"bubble",size:26,w:1.6}),n.jsx("span",{children:l(i?{ko:"나와의 채팅",zh:"與自己聊天"}:{ko:"1:1 채팅",zh:"1:1 聊天"})})]}),!i&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:()=>{t(),r(e)},children:[n.jsx(N,{n:"phone",size:26,w:1.6}),n.jsx("span",{children:l({ko:"통화하기",zh:"語音通話"})})]}),n.jsxs("button",{onClick:()=>{t(),r(e,!0)},children:[n.jsx(N,{n:"video",size:26,w:1.6}),n.jsx("span",{children:l({ko:"페이스톡",zh:"視訊通話"})})]})]}),i&&n.jsxs("button",{children:[n.jsx(N,{n:"compose",size:26,w:1.6}),n.jsx("span",{children:l({ko:"프로필 편집",zh:"編輯個人檔案"})})]})]})]})}const am="1224";function cm({hiddenView:e,setHiddenView:t}){const{rooms:s,unreadByRoom:o,story:r,setOpenRoom:l,clock:i}=se(),{found:a,discover:c}=ye(),{t:u,lang:x}=Q(),[g,m]=j.useState(!1),[y,w]=j.useState(!1);at(e,()=>t(!1));const v=s.some(h=>h.hidden),b=s.filter(h=>!!h.hidden===e);return y?n.jsx(U2,{passcode:am,face:!1,title:{ko:"숨긴 채팅방 비밀번호를 입력해 주세요",zh:"請輸入隱藏聊天室的密碼"},hint:{ko:"힌트: 그날 🎄",zh:"提示：那一天 🎄"},onCancel:()=>w(!1),onOk:()=>{w(!1),t(!0),c("hidden-chat")}}):n.jsxs(n.Fragment,{children:[e?n.jsxs("div",{className:"k-head k-head-sub",children:[n.jsx("button",{className:"k-back",onClick:()=>t(!1),"aria-label":"back",children:n.jsx(N,{n:"back",size:24,w:2.2})}),n.jsx("h1",{children:u({ko:"숨긴 채팅방",zh:"隱藏的聊天室"})})]}):n.jsx(Da,{title:A.chats,icons:["search","compose","gear"],onIcon:h=>h==="gear"&&m(!0)}),n.jsxs("div",{className:"k-scroll",children:[e?n.jsx("p",{className:"k-hidden-note",children:u({ko:"숨긴 채팅방은 채팅 목록과 알림에 표시되지 않습니다.",zh:"隱藏的聊天室不會顯示在聊天列表和通知中。"})}):n.jsxs("div",{className:"k-banner",children:[n.jsx("b",{children:u({ko:"🎂 오늘 생일인 친구를 확인해 보세요",zh:"🎂 看看今天生日的好友"})}),n.jsx("small",{children:u({ko:"선물하기 · 광고",zh:"送禮 · 廣告"})})]}),b.map(h=>{var M;const f=[...h.messages,...h.live],p=f[f.length-1],z=o[h.id]??0,C=h.group?h.group.members.length+1:0;return n.jsxs("button",{className:"k-room",onClick:()=>l(h.id),children:[n.jsx(Te,{size:48,group:C,src:h.contactId?(M=r.contacts[h.contactId])==null?void 0:M.avatar:void 0}),n.jsxs("span",{className:"k-room-mid",children:[n.jsxs("b",{children:[n.jsx("span",{children:W2(h,r.contacts,u)}),C>0&&n.jsx("em",{children:C}),h.hidden&&n.jsx(N,{n:"lock",size:12,w:2})]}),n.jsx("small",{children:nm(p,u)})]}),n.jsxs("span",{className:"k-room-right",children:[n.jsx("small",{children:p?xn(p.at,i,x):""}),z>0&&n.jsx("i",{children:z>300?"300+":z})]})]},h.id)})]}),g&&n.jsx("div",{className:"k-menu-bg",onClick:()=>m(!1),children:n.jsxs("div",{className:"k-menu",onClick:h=>h.stopPropagation(),children:[n.jsx("button",{onClick:()=>m(!1),children:u({ko:"편집",zh:"編輯"})}),n.jsx("button",{onClick:()=>m(!1),children:u({ko:"모두 읽음",zh:"全部已讀"})}),n.jsx("button",{onClick:()=>m(!1),children:u({ko:"채팅방 정렬",zh:"聊天室排序"})}),v&&n.jsxs("button",{onClick:()=>{m(!1),a.includes("hidden-chat")?t(!0):w(!0)},children:[u({ko:"숨긴 채팅방",zh:"隱藏的聊天室"}),n.jsx(N,{n:"lock",size:14,w:2})]})]})})]})}function um({id:e}){const{rooms:t,story:s,setOpenRoom:o,send:r}=se(),{dial:l,shots:i}=ye(),{t:a,lang:c}=Q(),u=t.find(S=>S.id===e),[x,g]=j.useState(""),[m,y]=j.useState(!1),[w,v]=j.useState(null),[b,h]=j.useState(null),f=j.useRef(null),p=u?[...u.messages,...u.live]:[];if(at(!0,()=>b?h(null):w?v(null):m?y(!1):o(null)),j.useEffect(()=>{const S=f.current;S&&S.scrollTo({top:S.scrollHeight,behavior:p.length>40?"auto":"smooth"})},[p.length]),j.useEffect(()=>{const S=f.current;S&&(S.scrollTop=S.scrollHeight)},[e]),!u)return null;const z=W2(u,s.contacts,a),C=()=>{x.trim()&&(r(e,x),g(""))},M=u.group?u.group.members:u.contactId?[u.contactId]:[];return n.jsxs("div",{className:"k-chat",children:[n.jsx(_e,{}),n.jsxs("div",{className:"k-chat-head",children:[n.jsx("button",{onClick:()=>o(null),"aria-label":a(A.back),children:n.jsx(N,{n:"back",size:24,w:2.2})}),n.jsxs("b",{children:[z,u.group&&n.jsx("em",{children:u.group.members.length+1})]}),n.jsxs("span",{children:[u.contactId&&n.jsx("button",{onClick:()=>l(u.contactId),"aria-label":"call",children:n.jsx(N,{n:"phone",size:21,w:1.9})}),n.jsx(N,{n:"search",size:22,w:1.9}),n.jsx("button",{onClick:()=>y(!0),"aria-label":"menu",children:n.jsx(N,{n:"menu",size:22,w:1.9})})]})]}),n.jsx("div",{className:"k-chat-body",ref:f,children:p.map((S,_)=>{const T=p[_-1],$=p[_+1],W=!T||!Mi(T.at,S.at),le=S.from==="me",de=W||!T||T.from!==S.from||Ye(T.at,c)!==Ye(S.at,c),He=!$||$.from!==S.from||Ye($.at,c)!==Ye(S.at,c)||!Mi($.at,S.at),Re=s.contacts[S.from];return n.jsxs("div",{children:[W&&n.jsxs("div",{className:"k-day",children:[n.jsx(N,{n:"clock",size:12,w:2}),sn(S.at,c)]}),n.jsxs("div",{className:`k-msg ${le?"me":"them"} ${de?"first":""} ${"seq"in S&&S.seq?"live":""}`,children:[!le&&n.jsx("span",{className:"k-msg-avatar",children:de&&n.jsx(Te,{size:38,src:Re==null?void 0:Re.avatar})}),n.jsxs("span",{className:"k-msg-col",children:[!le&&de&&n.jsx("span",{className:"k-msg-name",children:Re?a(Re.name):""}),n.jsxs("span",{className:"k-msg-row",children:[le&&n.jsxs("span",{className:"k-meta",children:["unreadByThem"in S&&S.unreadByThem&&n.jsx("i",{children:"1"}),He&&n.jsx("small",{children:Ye(S.at,c)})]}),n.jsx(dm,{m:S,mine:le,tail:de,onPhoto:()=>h(S)}),!le&&He&&n.jsx("span",{className:"k-meta",children:n.jsx("small",{children:Ye(S.at,c)})})]})]})]})]},"id"in S&&S.id||`${S.at}-${_}`)})}),n.jsxs("form",{className:"k-input ",onSubmit:S=>{S.preventDefault(),C()},children:[n.jsx("button",{type:"button",className:`k-plus ${w==="plus"||w==="album"?"open":""}`,"aria-label":"plus",onClick:()=>v(S=>S==="plus"||S==="album"?null:"plus"),children:n.jsx(N,{n:"plus",size:22,w:2})}),n.jsxs("label",{className:"k-field",children:[n.jsx("input",{value:x,disabled:!1,onChange:S=>g(S.target.value),placeholder:a(A.messageInput),enterKeyHint:"send",autoComplete:"off",onFocus:()=>v(null)}),n.jsx("button",{type:"button",onClick:()=>v(S=>S==="emoji"?null:"emoji"),"aria-label":"emoticon",className:w==="emoji"?"on":"",children:n.jsx(N,{n:"emoji",size:22,w:1.8})})]}),x.trim()?n.jsx("button",{type:"submit",className:"k-send","aria-label":a(A.send),children:n.jsx(N,{n:"arrowUp",size:20,w:2.6})}):n.jsx("button",{type:"button",className:"k-hash","aria-label":"#",children:n.jsx(N,{n:"hash",size:21,w:2})})]}),w==="plus"&&n.jsx("div",{className:"k-panel k-plus-panel",children:[{n:"photo",l:{ko:"앨범",zh:"相簿"},c:"#7bc65b",go:()=>v("album")},{n:"camera",l:{ko:"카메라",zh:"相機"},c:"#5aa9e6",go:()=>v("album")},{n:"phone",l:{ko:"통화하기",zh:"語音通話"},c:"#f0a43a",go:()=>u.contactId&&l(u.contactId)},{n:"video",l:{ko:"페이스톡",zh:"視訊通話"},c:"#e86a6a",go:()=>u.contactId&&l(u.contactId,!0)},{n:"gift",l:{ko:"선물하기",zh:"送禮"},c:"#f06aa0",go:()=>r(e,{sticker:"🎁"})},{n:"location",l:{ko:"지도",zh:"地圖"},c:"#58b4a9",go:()=>r(e,a({ko:"📍 숙소",zh:"📍 宿舍"}))}].map(S=>n.jsxs("button",{onClick:()=>{S.go(),S.n!=="photo"&&S.n!=="camera"&&v(null)},children:[n.jsx("i",{style:{background:S.c},children:n.jsx(N,{n:S.n,size:24,w:1.8})}),n.jsx("span",{children:a(S.l)})]},S.n))}),w==="album"&&n.jsx("div",{className:"k-panel k-album",children:[...i.map(S=>({id:S.id,src:S.src,emoji:"📷",tint:"#ccc",caption:{ko:"방금 찍은 사진",zh:"剛拍的照片"}})),...[...s.photos].reverse()].map(S=>n.jsx("button",{onClick:()=>{r(e,{photo:S.caption,src:S.src}),v(null)},children:n.jsx(Xe,{src:S.src,emoji:S.emoji,tint:S.tint})},S.id))}),w==="emoji"&&n.jsx("div",{className:"k-panel k-emoji",children:["🐺","🩵","🫶","😭","🥹","😆","🎂","🎳","🍜","😴","👍","🙈","💌","🐰","🐼","🤐"].map(S=>n.jsx("button",{onClick:()=>{r(e,{sticker:S}),v(null)},children:S},S))}),m&&n.jsx("div",{className:"k-drawer-bg",onClick:()=>y(!1),children:n.jsxs("div",{className:"k-drawer",onClick:S=>S.stopPropagation(),children:[n.jsx(_e,{}),n.jsx("h3",{children:a({ko:"채팅방 서랍",zh:"聊天室抽屜"})}),n.jsxs("div",{className:"k-drawer-row",children:[n.jsx(N,{n:"photo",size:20}),a({ko:"사진·동영상",zh:"照片・影片"})]}),n.jsxs("div",{className:"k-drawer-row",children:[n.jsx(N,{n:"folder",size:20}),a({ko:"파일",zh:"檔案"})]}),n.jsx("h4",{children:a({ko:"대화상대",zh:"聊天成員"})}),n.jsxs("div",{className:"k-drawer-member",children:[n.jsx(Te,{size:36,src:s.owner.avatar}),n.jsxs("span",{children:[n.jsx("em",{children:a({ko:"나",zh:"我"})}),a(s.owner.name)]})]}),M.map(S=>{var _;return n.jsxs("div",{className:"k-drawer-member",children:[n.jsx(Te,{size:36,src:(_=s.contacts[S])==null?void 0:_.avatar}),n.jsx("span",{children:s.contacts[S]?a(s.contacts[S].name):S})]},S)})]})}),b&&"photo"in b&&n.jsxs("div",{className:"k-viewer",onClick:()=>h(null),children:[n.jsx(_e,{dark:!0}),n.jsx("div",{className:"k-viewer-img",children:n.jsx(Xe,{src:b.src,emoji:"🖼️",tint:"#4a5568",label:a(b.photo)})}),n.jsx("p",{children:a(b.photo)})]})]})}function dm({m:e,mine:t,tail:s,onPhoto:o}){const{t:r}=Q();return"sticker"in e?n.jsx("span",{className:"k-sticker",children:e.sticker}):"photo"in e?n.jsxs("button",{className:"k-photo",onClick:o,children:[n.jsx(Xe,{src:e.src,emoji:"🖼️",tint:"#dfe7f1",label:r(e.photo)}),!e.src&&n.jsx("small",{children:r(e.photo)})]}):n.jsxs("span",{className:`k-bubble ${t?"me":"them"} ${s?"tail":""}`,children:[e.reply&&n.jsxs("span",{className:"k-reply",children:[n.jsx("b",{children:r({ko:`${r(e.reply.to)}에게 답장`,zh:`回覆 ${r(e.reply.to)}`})}),n.jsx("small",{children:r(e.reply.text)})]}),r(e.text)]})}function hm(){const{story:e,clock:t}=se(),{im:s}=ye(),{t:o,lang:r}=Q(),[l,i]=j.useState(null),[a,c]=j.useState(!1);if(l)return n.jsx(fm,{...l,onBack:()=>i(null)});const u=e.sms.map(x=>{const g=x.messages[x.messages.length-1],m=x.contactId?s[x.contactId]:void 0,y=m==null?void 0:m[m.length-1];return{key:x.id,title:x.from,contactId:x.contactId,threadId:x.id,unread:x.unread,last:y?{text:y.text,at:q(t)+y.at%1e3}:{text:g.text,at:q(g.at)}}});for(const[x,g]of Object.entries(s)){if(u.some(y=>y.contactId===x)||!g.length)continue;const m=e.contacts[x];u.push({key:`im-${x}`,title:(m==null?void 0:m.name)??x,contactId:x,last:{text:g[g.length-1].text,at:q(t)+1}})}return u.sort((x,g)=>g.last.at-x.last.at),n.jsxs(n.Fragment,{children:[n.jsx(be,{title:A.messages,large:!0,bg:"#fff",search:A.search,right:n.jsxs(n.Fragment,{children:[n.jsx(N,{n:"more",size:24}),n.jsx("button",{onClick:()=>c(!0),"aria-label":"compose",children:n.jsx(N,{n:"compose",size:23})})]}),children:n.jsx("div",{className:"m-list",children:u.map(x=>{var g;return n.jsxs("button",{className:"m-row",onClick:()=>i({threadId:x.threadId,contactId:x.contactId}),children:[n.jsx("span",{className:`m-dot ${x.unread?"on":""}`}),n.jsx(Ls,{name:o(x.title),size:46,src:x.contactId?(g=e.contacts[x.contactId])==null?void 0:g.avatar:void 0}),n.jsxs("span",{className:"m-mid",children:[n.jsxs("span",{className:"m-top",children:[n.jsx("b",{children:o(x.title)}),n.jsxs("small",{children:[xn(new Date(Math.min(x.last.at,q(t))).toISOString(),t,r),n.jsx(N,{n:"chevron",size:13,w:2.6})]})]}),n.jsx("small",{className:"clamp2",children:o(x.last.text).replace(/\n/g," ")})]})]},x.key)})})}),a&&n.jsx("div",{className:"sheet-bg",onClick:()=>c(!1),children:n.jsxs("div",{className:"sheet tall",onClick:x=>x.stopPropagation(),children:[n.jsxs("div",{className:"m-new-head",children:[n.jsx("span",{}),n.jsx("b",{children:o({ko:"새로운 메시지",zh:"新訊息"})}),n.jsx("button",{onClick:()=>c(!1),children:o(A.cancel)})]}),n.jsx("div",{className:"m-to",children:n.jsx("span",{children:o({ko:"받는 사람:",zh:"收件人："})})}),Object.entries(e.contacts).filter(([,x])=>x.phone).map(([x,g])=>n.jsxs("button",{className:"m-pick",onClick:()=>{c(!1);const m=e.sms.find(y=>y.contactId===x);i({threadId:m==null?void 0:m.id,contactId:x})},children:[n.jsx(Ls,{name:o(g.name),size:36,src:g.avatar}),n.jsxs("span",{children:[n.jsx("b",{children:o(g.name)}),n.jsx("small",{children:g.phone})]})]},x))]})})]})}function fm({threadId:e,contactId:t,onBack:s}){const{story:o}=se(),{im:r,typing:l,sendIm:i,dial:a}=ye(),{t:c,lang:u}=Q(),x=o.sms.find(C=>C.id===e),g=t?o.contacts[t]:void 0,m=x?x.from:(g==null?void 0:g.name)??"",[y,w]=j.useState([]),[v,b]=j.useState(""),h=j.useRef(null);at(!0,s);const f=t?r[t]??[]:[],p=!!t&&l.includes(t);j.useEffect(()=>{var C;(C=h.current)==null||C.scrollTo({top:1e6,behavior:"smooth"})},[f.length,y.length,p]);const z=!!t;return n.jsxs("div",{className:"m-thread",children:[n.jsxs("div",{className:"m-thread-top",children:[n.jsx(_e,{}),n.jsxs("div",{className:"m-thread-nav",children:[n.jsx("button",{onClick:s,className:"nav-back",style:{color:"#007aff"},children:n.jsx(N,{n:"back",size:22,w:2.6})}),n.jsxs("span",{className:"m-thread-who",children:[n.jsx(Ls,{name:c(m),size:52,src:g==null?void 0:g.avatar}),n.jsxs("small",{children:[c(m),n.jsx(N,{n:"chevron",size:10,w:3})]})]}),n.jsx("button",{className:"m-video",onClick:()=>t&&a(t,!0),"aria-label":"FaceTime",children:n.jsx(N,{n:"video",size:26,w:1.8})})]})]}),n.jsxs("div",{className:"m-body",ref:h,children:[n.jsx("div",{className:"m-kind",children:z?"iMessage":c({ko:"문자 메시지 · 이 발신자는 연락처에 없습니다",zh:"簡訊 · 此寄件人不在聯絡人中"})}),x==null?void 0:x.messages.map((C,M)=>n.jsxs("div",{children:[(M===0||q(C.at)-q(x.messages[M-1].at)>36e5)&&n.jsx("div",{className:"m-stamp",children:`${Fa(C.at,u)} ${Ye(C.at,u)}`}),n.jsx("div",{className:`m-bubble ${C.me?"me":""} ${z?"im":""} ${!x.messages[M+1]||x.messages[M+1].me!==C.me?"tail":""}`,children:c(C.text)})]},M)),f.length>0&&n.jsx("div",{className:"m-stamp",children:c({ko:"오늘",zh:"今天"})}),f.map((C,M)=>n.jsx("div",{className:`m-bubble fade-in ${C.me?"me im":""} ${!f[M+1]||f[M+1].me!==C.me?"tail":""}`,children:c(C.text)},`l${M}`)),f.length>0&&f[f.length-1].me&&!p&&n.jsx("div",{className:"m-read",children:c({ko:"읽음",zh:"已讀"})}),p&&n.jsxs("div",{className:"m-typing",children:[n.jsx("i",{}),n.jsx("i",{}),n.jsx("i",{})]}),y.map((C,M)=>n.jsxs("div",{children:[n.jsx("div",{className:"m-bubble me tail",children:C}),M===y.length-1&&n.jsxs("div",{className:"m-fail",children:[c({ko:"전송되지 않음",zh:"未傳送"})," ⓘ"]})]},`f${M}`))]}),n.jsxs("form",{className:"m-input",onSubmit:C=>{C.preventDefault();const M=v.trim();M&&(t?i(t,M):w(S=>[...S,M]),b(""))},children:[n.jsx("span",{className:"m-plus",children:n.jsx(N,{n:"plus",size:20,w:2.4})}),n.jsxs("label",{children:[n.jsx("input",{value:v,onChange:C=>b(C.target.value),placeholder:z?"iMessage":c({ko:"문자 메시지",zh:"簡訊"})}),v.trim()?n.jsx("button",{className:`m-send ${z?"im":""}`,"aria-label":c(A.send),children:n.jsx(N,{n:"arrowUp",size:16,w:3})}):n.jsx(N,{n:"mic",size:18,w:2})]})]})]})}const mm=[{id:"fav",label:{ko:"즐겨찾기",zh:"常用聯絡人"},icon:"star"},{id:"recents",label:A.recents,icon:"clock"},{id:"contacts",label:{ko:"연락처",zh:"聯絡人"},icon:"person"},{id:"keypad",label:{ko:"키패드",zh:"撥號鍵盤"},icon:"grid"},{id:"vm",label:{ko:"음성 사서함",zh:"語音信箱"},icon:"voicemail"}];function pm(){const[e,t]=j.useState("recents"),[s,o]=j.useState(null),r=n.jsx(al,{tabs:mm,value:e,onChange:l=>t(l)});return s?n.jsx(vm,{id:s,onBack:()=>o(null),bottom:r}):n.jsxs(n.Fragment,{children:[e==="recents"&&n.jsx(km,{onInfo:o,bottom:r}),e==="fav"&&n.jsx(jm,{onInfo:o,bottom:r}),e==="contacts"&&n.jsx(ym,{onOpen:o,bottom:r}),e==="keypad"&&n.jsx(wm,{bottom:r}),e==="vm"&&n.jsx(be,{title:{ko:"음성 사서함",zh:"語音信箱"},large:!0,bg:"#fff",bottom:r,children:n.jsx("p",{className:"empty-note",children:A.noItems&&n.jsx(xm,{})})})]})}function xm(){const{t:e}=Q();return n.jsx(n.Fragment,{children:e({ko:"음성 메시지 없음",zh:"沒有語音留言"})})}function km({onInfo:e,bottom:t}){const{story:s,extraCalls:o,clock:r}=se(),{dial:l}=ye(),{t:i,lang:a}=Q(),[c,u]=j.useState(!1),x=[...s.calls,...o].sort((m,y)=>q(y.at)-q(m.at)).filter(m=>!c||m.type==="missed"),g={incoming:A.incoming,outgoing:A.outgoing,missed:A.missed};return n.jsx(be,{title:A.recents,large:!0,bg:"#fff",bottom:t,right:n.jsxs("span",{className:"seg small",children:[n.jsx("button",{className:c?"":"on",onClick:()=>u(!1),children:i({ko:"전체",zh:"全部"})}),n.jsx("button",{className:c?"on":"",onClick:()=>u(!0),children:i({ko:"부재중",zh:"未接"})})]}),children:n.jsx("div",{className:"p-list",children:x.map((m,y)=>{const w=s.contacts[m.contactId];return n.jsxs("div",{className:"p-row",children:[n.jsx("span",{className:"p-kind",children:m.type==="outgoing"&&n.jsx(N,{n:"phoneFill",size:13})}),n.jsxs("button",{className:"p-mid",onClick:()=>l(m.contactId),children:[n.jsx("b",{className:m.type==="missed"?"red":"",children:w?i(w.name):m.contactId}),n.jsxs("small",{children:[i(g[m.type]),m.seconds>0&&` · ${Ar(m.seconds,a)}`]})]}),n.jsx("small",{className:"p-date",children:xn(m.at,r,a)}),n.jsx("button",{className:"p-info",onClick:()=>e(m.contactId),"aria-label":"info",children:n.jsx(N,{n:"info",size:22,w:1.8})})]},y)})})})}function gm(){const{story:e}=se(),{t,lang:s}=Q();return Object.entries(e.contacts).filter(([,o])=>o.phone).sort(([,o],[,r])=>t(o.name).localeCompare(t(r.name),s==="ko"?"ko":"zh-Hant"))}function jm({onInfo:e,bottom:t}){const{story:s}=se(),{dial:o}=ye(),{t:r}=Q(),l=[s.id==="shinyu"?"dohoon":"shinyu","mom"].filter(i=>s.contacts[i]);return n.jsx(be,{title:{ko:"즐겨찾기",zh:"常用聯絡人"},large:!0,bg:"#fff",bottom:t,right:n.jsx(N,{n:"plus",size:24}),children:n.jsx("div",{className:"p-list",children:l.map(i=>n.jsxs("div",{className:"p-row fav",children:[n.jsx(Ls,{name:r(s.contacts[i].name),size:42}),n.jsxs("button",{className:"p-mid",onClick:()=>o(i),children:[n.jsx("b",{children:r(s.contacts[i].name)}),n.jsx("small",{children:r(A.incomingCall)})]}),n.jsx("button",{className:"p-info",onClick:()=>e(i),"aria-label":"info",children:n.jsx(N,{n:"info",size:22,w:1.8})})]},i))})})}function ym({onOpen:e,bottom:t}){const{story:s}=se(),{t:o}=Q(),r=gm();return n.jsxs(be,{title:{ko:"연락처",zh:"聯絡人"},large:!0,bg:"#fff",bottom:t,search:A.search,right:n.jsx(N,{n:"plus",size:24}),children:[n.jsxs("button",{className:"p-me",children:[n.jsx(Ls,{name:o(s.owner.name),size:60,src:s.owner.avatar}),n.jsxs("span",{children:[n.jsx("b",{children:o(s.owner.name)}),n.jsx("small",{children:o({ko:"내 카드",zh:"我的名片"})})]})]}),n.jsx("div",{className:"p-list",children:r.map(([l,i])=>n.jsx("button",{className:"p-contact",onClick:()=>e(l),children:o(i.name)},l))}),n.jsx("p",{className:"p-count",children:o({ko:`연락처 ${r.length}개`,zh:`${r.length} 位聯絡人`})})]})}function vm({id:e,onBack:t,bottom:s}){const{story:o,extraCalls:r,setScreen:l,setOpenRoom:i}=se(),{dial:a}=ye(),{t:c,lang:u}=Q(),x=o.contacts[e],g=[...o.calls,...r].filter(y=>y.contactId===e).sort((y,w)=>q(w.at)-q(y.at)),m=o.rooms.find(y=>y.contactId===e);return x?n.jsxs(be,{title:"",onBack:t,backLabel:A.recents,bg:"#f2f2f7",bottom:s,right:n.jsx("span",{className:"nav-text",children:c({ko:"편집",zh:"編輯"})}),children:[n.jsxs("div",{className:"ct-head",children:[n.jsx(Ls,{name:c(x.name),size:100,src:x.avatar}),n.jsx("h2",{children:c(x.name)}),n.jsxs("div",{className:"ct-actions",children:[n.jsxs("button",{onClick:()=>{m&&(l({kind:"app",app:"kakao"}),i(m.id))},children:[n.jsx(N,{n:"bubble",size:20}),n.jsx("span",{children:c(A.messages)})]}),n.jsxs("button",{onClick:()=>a(e),children:[n.jsx(N,{n:"phoneFill",size:20}),n.jsx("span",{children:c(A.phone)})]}),n.jsxs("button",{onClick:()=>a(e,!0),children:[n.jsx(N,{n:"video",size:20}),n.jsx("span",{children:"FaceTime"})]}),n.jsxs("button",{children:[n.jsx(N,{n:"share",size:20}),n.jsx("span",{children:c({ko:"공유",zh:"分享"})})]})]})]}),g.length>0&&n.jsx("div",{className:"ct-box",children:g.slice(0,4).map((y,w)=>n.jsxs("div",{className:"ct-hist",children:[n.jsxs("small",{children:[Fa(y.at,u)," ",Ye(y.at,u)]}),n.jsxs("span",{className:y.type==="missed"?"red":"",children:[c(y.type==="missed"?A.missed:y.type==="incoming"?A.incoming:A.outgoing),y.seconds>0&&` · ${Ar(y.seconds,u)}`]})]},w))}),n.jsxs("div",{className:"ct-box",children:[n.jsx("small",{children:c({ko:"휴대전화",zh:"行動電話"})}),n.jsx("button",{className:"ct-phone",onClick:()=>a(e),children:x.phone})]}),x.status&&n.jsxs("div",{className:"ct-box",children:[n.jsx("small",{children:c({ko:"메모",zh:"備註"})}),n.jsx("span",{children:c(x.status)})]})]}):null}const zm=[["1",""],["2","ABC"],["3","DEF"],["4","GHI"],["5","JKL"],["6","MNO"],["7","PQRS"],["8","TUV"],["9","WXYZ"],["*",""],["0","+"],["#",""]];function wm({bottom:e}){const{story:t}=se(),{dial:s,haptic:o}=ye(),{t:r}=Q(),[l,i]=j.useState(""),a=l.replace(/\D/g,""),c=Object.entries(t.contacts).find(([,x])=>x.phone&&x.phone.replace(/\D/g,"")===a),u=a.length>7?`${a.slice(0,3)}-${a.slice(3,7)}-${a.slice(7,11)}`:a.length>3?`${a.slice(0,3)}-${a.slice(3)}`:l;return n.jsxs("div",{className:"keypad",children:[n.jsxs("div",{className:"kp-num",children:[n.jsx("span",{children:u}),n.jsx("small",{children:c?r(c[1].name):l?r({ko:"번호 추가",zh:"加入號碼"}):" "})]}),n.jsxs("div",{className:"kp-grid",children:[zm.map(([x,g])=>n.jsxs("button",{onClick:()=>{P2(),o(5),i(m=>m.length<13?m+x:m)},children:[n.jsx("b",{children:x}),n.jsx("small",{children:g})]},x)),n.jsx("span",{}),n.jsx("button",{className:"kp-call",onClick:()=>a&&s(c?c[0]:u),"aria-label":"call",children:n.jsx(N,{n:"phoneFill",size:34})}),l?n.jsx("button",{className:"kp-del",onClick:()=>i(x=>x.slice(0,-1)),"aria-label":"delete",children:"⌫"}):n.jsx("span",{})]}),e]})}const Nm=[{ko:"타임랩스",zh:"縮時攝影"},{ko:"슬로모",zh:"慢動作"},{ko:"비디오",zh:"影片"},{ko:"사진",zh:"照片"},{ko:"인물 사진",zh:"人像"},{ko:"파노라마",zh:"全景"}];function bm(){const{t:e}=Q(),{addShot:t,shots:s,flashlight:o,setFlashlight:r,haptic:l}=ye(),{setScreen:i}=se(),a=j.useRef(null),[c,u]=j.useState(null),[x,g]=j.useState("user"),[m,y]=j.useState(!1),[w,v]=j.useState(!1),[b,h]=j.useState(3);j.useEffect(()=>{var M;let z=!1,C=null;if(!((M=navigator.mediaDevices)!=null&&M.getUserMedia)){y(!0);return}return navigator.mediaDevices.getUserMedia({video:{facingMode:x},audio:!1}).then(S=>{if(z){S.getTracks().forEach(_=>_.stop());return}C=S,u(S),y(!1)}).catch(()=>y(!0)),()=>{z=!0,C==null||C.getTracks().forEach(S=>S.stop())}},[x]),j.useEffect(()=>{a.current&&c&&(a.current.srcObject=c)},[c]);const f=()=>{_h(),l(20),v(!0),window.setTimeout(()=>v(!1),140);const z=document.createElement("canvas"),C=a.current;if(C&&c&&C.videoWidth){z.width=600,z.height=800;const M=z.getContext("2d"),S=Math.max(600/C.videoWidth,800/C.videoHeight),_=C.videoWidth*S,T=C.videoHeight*S;x==="user"&&(M.translate(600,0),M.scale(-1,1)),M.drawImage(C,(600-_)/2,(800-T)/2,_,T)}else{z.width=600,z.height=800;const M=z.getContext("2d"),S=M.createLinearGradient(0,0,600,800);S.addColorStop(0,"#3b3b46"),S.addColorStop(1,"#101015"),M.fillStyle=S,M.fillRect(0,0,600,800),M.font="160px serif",M.textAlign="center",M.fillText("📷",300,460)}t(z.toDataURL("image/jpeg",.82))},p=s[s.length-1];return n.jsxs("div",{className:"cam",children:[n.jsx(_e,{dark:!0}),n.jsxs("div",{className:"cam-top",children:[n.jsx("button",{className:o?"on":"",onClick:()=>r(!o),"aria-label":"flash",children:"⚡︎"}),n.jsx("span",{className:"cam-chip",children:e({ko:"라이브",zh:"原況"})})]}),n.jsxs("div",{className:"cam-view",children:[c?n.jsx("video",{ref:a,autoPlay:!0,playsInline:!0,muted:!0,style:{transform:x==="user"?"scaleX(-1)":void 0}}):n.jsx("div",{className:"cam-fake",children:n.jsx("span",{children:m?e({ko:"카메라 접근이 허용되지 않았어요. 가상 화면으로 촬영돼요.",zh:"未允許使用相機，將以模擬畫面拍攝。"}):""})}),n.jsx("div",{className:"cam-grid"}),w&&n.jsx("div",{className:"cam-flash"}),n.jsxs("span",{className:"cam-zoom",children:[n.jsx("i",{children:".5"}),n.jsx("i",{className:"on",children:"1×"}),n.jsx("i",{children:"2"})]})]}),n.jsx("div",{className:"cam-modes",children:n.jsx("div",{style:{transform:`translateX(${(3-b)*74}px)`},children:Nm.map((z,C)=>n.jsx("button",{className:C===b?"on":"",onClick:()=>h(C),children:e(z)},C))})}),n.jsxs("div",{className:"cam-bottom",children:[n.jsx("button",{className:"cam-thumb",onClick:()=>i({kind:"app",app:"photos"}),"aria-label":"photos",children:p?n.jsx("img",{src:p.src,alt:""}):n.jsx("span",{})}),n.jsx("button",{className:"cam-shutter",onClick:f,"aria-label":"shutter",children:n.jsx("span",{})}),n.jsx("button",{className:"cam-flip",onClick:()=>g(z=>z==="user"?"environment":"user"),"aria-label":"flip",children:n.jsx(N,{n:"flip",size:26})})]})]})}const Sm=[{id:"world",label:{ko:"세계 시계",zh:"世界時鐘"},icon:"globe"},{id:"alarm",label:{ko:"알람",zh:"鬧鐘"},icon:"alarm"},{id:"stopwatch",label:{ko:"스톱워치",zh:"碼錶"},icon:"stopwatch"},{id:"timer",label:{ko:"타이머",zh:"計時器"},icon:"timer"}],Cm=[{name:{ko:"서울",zh:"首爾"},off:9},{name:{ko:"타이베이",zh:"台北"},off:8},{name:{ko:"도쿄",zh:"東京"},off:9},{name:{ko:"로스앤젤레스",zh:"洛杉磯"},off:-8}];function _m(){const[e,t]=j.useState("alarm"),s=n.jsx(al,{tabs:Sm,value:e,onChange:t,tint:"#ff9f0a",dark:!0});return n.jsxs(n.Fragment,{children:[e==="world"&&n.jsx(Mm,{bottom:s}),e==="alarm"&&n.jsx(Em,{bottom:s}),e==="stopwatch"&&n.jsx($m,{bottom:s}),e==="timer"&&n.jsx(Tm,{bottom:s})]})}function Mm({bottom:e}){const{clock:t}=se(),{t:s}=Q(),o=new Date(t).getTime();return n.jsx(be,{title:{ko:"세계 시계",zh:"世界時鐘"},large:!0,dark:!0,bg:"#000",tint:"#ff9f0a",bottom:e,right:n.jsx("span",{className:"nav-text",children:"＋"}),children:Cm.map(r=>{const l=new Date(o+r.off*36e5),i=r.off-9;return n.jsxs("div",{className:"clk-row",children:[n.jsxs("span",{children:[n.jsx("small",{children:s(i===0?{ko:"오늘, +0시간",zh:"今天，+0 小時"}:{ko:`${i>0?"+":""}${i}시간`,zh:`${i>0?"+":""}${i} 小時`})}),n.jsx("b",{children:s(r.name)})]}),n.jsxs("em",{children:[Ae(l.getUTCHours()),":",Ae(l.getUTCMinutes())]})]},s(r.name))})})}function Em({bottom:e}){const{story:t}=se(),{t:s}=Q(),[o,r]=j.useState(()=>t.alarms.map(i=>i.on)),l=t.alarms.map((i,a)=>({a:i,i:a})).sort((i,a)=>i.a.time.localeCompare(a.a.time));return n.jsxs(be,{title:{ko:"알람",zh:"鬧鐘"},large:!0,dark:!0,bg:"#000",tint:"#ff9f0a",bottom:e,right:n.jsx("span",{className:"nav-text",children:"＋"}),children:[n.jsx("div",{className:"clk-sleep",children:s({ko:"수면 | 기상",zh:"睡眠｜起床"})}),n.jsx("div",{className:"clk-sub",children:s({ko:"기타",zh:"其他"})}),l.map(({a:i,i:a})=>{const[c,u]=i.time.split(":").map(Number),x=c<12;return n.jsxs("div",{className:`clk-alarm ${o[a]?"":"off"}`,children:[n.jsxs("span",{children:[n.jsxs("b",{children:[n.jsx("small",{children:s(x?{ko:"오전",zh:"上午"}:{ko:"오후",zh:"下午"})}),c%12===0?12:c%12,":",Ae(u)]}),n.jsx("small",{children:s(i.label)})]}),n.jsx(Zt,{on:o[a],onChange:g=>r(m=>m.map((y,w)=>w===a?g:y))})]},a)})]})}function a0(e){const t=Math.floor(e/10)%100,s=Math.floor(e/1e3)%60,o=Math.floor(e/6e4);return`${Ae(o)}:${Ae(s)},${Ae(t)}`}function $m({bottom:e}){const{t}=Q(),[s,o]=j.useState(0),[r,l]=j.useState(!1),[i,a]=j.useState([]),c=j.useRef(0);return j.useEffect(()=>{if(!r)return;c.current=performance.now()-s;let u=0;const x=()=>{o(performance.now()-c.current),u=requestAnimationFrame(x)};return u=requestAnimationFrame(x),()=>cancelAnimationFrame(u)},[r]),n.jsxs("div",{className:"clk-dark",children:[n.jsx("div",{className:"clk-big",children:a0(s)}),n.jsxs("div",{className:"clk-btns",children:[n.jsx("button",{className:"gray",onClick:()=>r?a(u=>[s,...u]):(o(0),a([])),children:t(r?{ko:"랩",zh:"計圈"}:{ko:"재설정",zh:"重置"})}),n.jsx("button",{className:r?"red":"green",onClick:()=>l(u=>!u),children:t(r?{ko:"중단",zh:"停止"}:{ko:"시작",zh:"開始"})})]}),n.jsx("div",{className:"clk-laps",children:i.map((u,x)=>n.jsxs("div",{children:[n.jsx("span",{children:t({ko:`랩 ${i.length-x}`,zh:`第 ${i.length-x} 圈`})}),n.jsx("span",{children:a0(u-(i[x+1]??0))})]},x))}),e]})}function Tm({bottom:e}){const{t}=Q(),[s,o]=j.useState(180),[r,l]=j.useState(null),[i,a]=j.useState(!1),[c,u]=j.useState(!1);j.useEffect(()=>{if(!i||r===null)return;if(r<=0){a(!1),u(!0),L2();return}const g=window.setTimeout(()=>l(m=>(m??0)-1),1e3);return()=>window.clearTimeout(g)},[i,r]),j.useEffect(()=>()=>on(),[]);const x=r??s;return n.jsxs("div",{className:"clk-dark",children:[r===null?n.jsx("div",{className:"clk-pick",children:[60,180,300,600].map(g=>n.jsxs("button",{className:s===g?"on":"",onClick:()=>o(g),children:[g/60,t({ko:"분",zh:"分"})]},g))}):n.jsxs("div",{className:"clk-ring",children:[n.jsxs("svg",{viewBox:"0 0 100 100",children:[n.jsx("circle",{cx:"50",cy:"50",r:"46",stroke:"#333",strokeWidth:"3",fill:"none"}),n.jsx("circle",{cx:"50",cy:"50",r:"46",stroke:"#ff9f0a",strokeWidth:"3",fill:"none",strokeDasharray:289,strokeDashoffset:289*(1-x/s),transform:"rotate(-90 50 50)",strokeLinecap:"round"})]}),n.jsxs("b",{children:[Ae(Math.floor(x/60)),":",Ae(x%60)]})]}),n.jsxs("div",{className:"clk-btns",children:[n.jsx("button",{className:"gray",onClick:()=>{l(null),a(!1),u(!1),on()},children:t({ko:"취소",zh:"取消"})}),n.jsx("button",{className:i?"orange":"green",onClick:()=>{c||(r===null&&l(s),a(g=>!g))},children:t(i?{ko:"일시 정지",zh:"暫停"}:r===null?{ko:"시작",zh:"開始"}:{ko:"재개",zh:"繼續"})})]}),c&&n.jsx("button",{className:"clk-done",onClick:()=>{on(),u(!1),l(null)},children:t({ko:"타이머 종료 · 탭하여 끄기",zh:"計時結束・點一下關閉"})}),e]})}const Pm=()=>/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Wr=()=>{var e,t;return((e=window.matchMedia)==null?void 0:e.call(window,"(display-mode: standalone)").matches)||((t=window.matchMedia)==null?void 0:t.call(window,"(display-mode: fullscreen)").matches)||navigator.standalone===!0};function B2(){const e=document.documentElement;return!/iPhone|iPod/.test(navigator.userAgent)&&!!(e.requestFullscreen||e.webkitRequestFullscreen)}function c0(){const e=document;return!!(e.fullscreenElement||e.webkitFullscreenElement)||Wr()}async function Ii(){var t,s;const e=document.documentElement;try{return e.requestFullscreen?await e.requestFullscreen({navigationUI:"hide"}):e.webkitRequestFullscreen&&await e.webkitRequestFullscreen(),await((s=(t=screen.orientation)==null?void 0:t.lock)==null?void 0:s.call(t,"portrait").catch(()=>{})),!0}catch{return!1}}async function Lm(){var t;const e=document;try{e.fullscreenElement?await e.exitFullscreen():e.webkitFullscreenElement&&await((t=e.webkitExitFullscreen)==null?void 0:t.call(e))}catch{}}function Fm({onExit:e}){const{story:t,restart:s,setScreen:o}=se(),{s:r,set:l,found:i}=ye(),[a,c]=j.useState(c0()),{t:u,lang:x,setLang:g}=Q(),[m,y]=j.useState(null),[w,v]=j.useState(null),b=()=>y(null),h=u({ko:"켬",zh:"開啟"}),f=u({ko:"끔",zh:"關閉"}),p=(z,C,M=b,S=A.settings)=>n.jsx(be,{title:z,onBack:M,backLabel:S,children:C});if(w==="about")return p({ko:"정보",zh:"關於本機"},n.jsxs(n.Fragment,{children:[n.jsxs(Ue,{children:[n.jsx(oe,{title:u({ko:"이름",zh:"名稱"}),detail:u(t.owner.device),chevron:!0}),n.jsx(oe,{title:u({ko:"iOS 버전",zh:"iOS 版本"}),detail:"18.6",chevron:!0}),n.jsx(oe,{title:u({ko:"모델 이름",zh:"機型名稱"}),detail:"iPhone 16 Pro"}),n.jsx(oe,{title:u({ko:"사용 가능 공간",zh:"可用空間"}),detail:"42 GB"})]}),n.jsxs(Ue,{children:[n.jsx(oe,{title:"Wi-Fi",detail:r.wifi?t.wifi:f}),n.jsx(oe,{title:"Bluetooth",detail:r.bluetooth?h:f})]})]}),()=>v(null),{ko:"일반",zh:"一般"});if(w==="lang")return p({ko:"언어 및 지역",zh:"語言與地區"},n.jsxs(Ue,{header:{ko:"선호하는 언어",zh:"偏好的語言"},footer:{ko:"이 웹사이트의 이야기 언어가 바뀝니다.",zh:"會切換本網站故事的語言。"},children:[n.jsx(oe,{title:"한국어",sub:"Korean",onClick:()=>g("ko"),right:x==="ko"?n.jsx(N,{n:"check",size:18,w:2.6,className:"tint"}):null}),n.jsx(oe,{title:"中文（繁體）",sub:"Chinese, Traditional",onClick:()=>g("zh"),right:x==="zh"?n.jsx(N,{n:"check",size:18,w:2.6,className:"tint"}):null})]}),()=>v(null),{ko:"일반",zh:"一般"});switch(m){case"wifi":return p("Wi-Fi",n.jsxs(n.Fragment,{children:[n.jsxs(Ue,{footer:{ko:"이 화면의 설정은 웹사이트 안에서만 바뀝니다.",zh:"此畫面的設定只會在網站內變更。"},children:[n.jsx(oe,{title:"Wi-Fi",right:n.jsx(Zt,{on:r.wifi,onChange:z=>l("wifi",z)})}),r.wifi&&n.jsx(oe,{title:n.jsxs("span",{className:"tint-text",children:["✓ ",t.wifi]}),right:n.jsx(N,{n:"lock",size:14}),detail:n.jsx(N,{n:"wifi",size:16})})]}),r.wifi&&n.jsx(Ue,{header:{ko:"네트워크",zh:"網路"},children:["TWS_42_5G_Guest","PLEDIS_Staff","iPhone (경민)"].map(z=>n.jsx(oe,{title:z,right:n.jsx(N,{n:"lock",size:14}),detail:n.jsx(N,{n:"wifi",size:16})},z))})]}));case"bt":return p("Bluetooth",n.jsxs(n.Fragment,{children:[n.jsx(Ue,{children:n.jsx(oe,{title:"Bluetooth",right:n.jsx(Zt,{on:r.bluetooth,onChange:z=>l("bluetooth",z)})})}),r.bluetooth&&n.jsx(Ue,{header:{ko:"나의 기기",zh:"我的裝置"},children:t.devices.map((z,C)=>n.jsx(oe,{title:u(z),detail:u(C===0?{ko:"연결됨",zh:"已連線"}:{ko:"연결 안 됨",zh:"未連線"}),right:n.jsx(N,{n:"info",size:20,className:"tint"})},C))})]}));case"sound":return p({ko:"사운드 및 햅틱",zh:"聲音與觸覺回饋"},n.jsxs(n.Fragment,{children:[n.jsxs(Ue,{children:[n.jsx(oe,{title:u({ko:"무음 모드",zh:"靜音模式"}),right:n.jsx(Zt,{on:r.silent,onChange:z=>l("silent",z)})}),n.jsx(oe,{title:u({ko:"진동",zh:"震動"}),right:n.jsx(Zt,{on:r.vibration,onChange:z=>l("vibration",z)})})]}),n.jsx("p",{className:"group-f set-note",children:u({ko:"무음 모드에서는 소리 없이 진동만 울려요. iPhone Safari는 웹 진동을 지원하지 않아 짧은 햅틱으로 대신합니다.",zh:"靜音模式下只會震動不會響。iPhone 的 Safari 不支援網頁震動，會改用短暫的觸覺回饋。"})}),n.jsx(Ue,{header:{ko:"벨소리 및 알림 음량",zh:"鈴聲與提示音量"},children:n.jsxs("div",{className:"cell slider-cell",children:[n.jsx(N,{n:"speaker",size:18}),n.jsx("input",{type:"range",min:0,max:1,step:.05,value:r.volume,onChange:z=>l("volume",Number(z.target.value))})]})}),n.jsxs(Ue,{children:[n.jsx(oe,{title:u({ko:"벨소리",zh:"鈴聲"}),detail:u({ko:"오프닝",zh:"開場"}),chevron:!0}),n.jsx(oe,{title:u({ko:"문자 수신음",zh:"簡訊提示音"}),detail:u({ko:"노트",zh:"音符"}),chevron:!0})]})]}));case"focus":return p({ko:"집중 모드",zh:"專注模式"},n.jsxs(Ue,{footer:{ko:"방해 금지 모드에서는 알림 배너가 표시되지 않습니다.",zh:"開啟勿擾模式時不會顯示通知橫幅。"},children:[n.jsx(oe,{icon:"moon",iconBg:"#5e5ce6",title:u({ko:"방해 금지 모드",zh:"勿擾模式"}),right:n.jsx(Zt,{on:r.focus,onChange:z=>l("focus",z)})}),n.jsx(oe,{icon:"bed",iconBg:"#30b0c7",title:u({ko:"수면",zh:"睡眠"}),chevron:!0})]}));case"general":return p({ko:"일반",zh:"一般"},n.jsxs(n.Fragment,{children:[n.jsxs(Ue,{children:[n.jsx(oe,{title:u({ko:"정보",zh:"關於本機"}),chevron:!0,onClick:()=>v("about")}),n.jsx(oe,{title:u({ko:"소프트웨어 업데이트",zh:"軟體更新"}),chevron:!0})]}),n.jsxs(Ue,{children:[n.jsx(oe,{title:u({ko:"언어 및 지역",zh:"語言與地區"}),detail:x==="ko"?"한국어":"中文",chevron:!0,onClick:()=>v("lang")}),n.jsx(oe,{title:u({ko:"날짜 및 시간",zh:"日期與時間"}),chevron:!0}),n.jsx(oe,{title:u({ko:"키보드",zh:"鍵盤"}),chevron:!0})]})]}));case"display":return p({ko:"디스플레이 및 밝기",zh:"螢幕顯示與亮度"},n.jsxs(n.Fragment,{children:[n.jsx(Ue,{header:{ko:"밝기",zh:"亮度"},children:n.jsxs("div",{className:"cell slider-cell",children:[n.jsx(N,{n:"sun",size:16}),n.jsx("input",{type:"range",min:.25,max:1,step:.01,value:r.brightness,onChange:z=>l("brightness",Number(z.target.value))}),n.jsx(N,{n:"sun",size:24})]})}),n.jsx(Ue,{header:{ko:"텍스트 크기",zh:"文字大小"},children:n.jsxs("div",{className:"cell slider-cell",children:[n.jsx("small",{children:"가"}),n.jsx("input",{type:"range",min:.9,max:1.2,step:.05,value:r.textSize,onChange:z=>l("textSize",Number(z.target.value))}),n.jsx("b",{children:"가"})]})})]}));case"wallpaper":{const z=Df(t);return p({ko:"배경화면",zh:"背景圖片"},n.jsx("div",{className:"wp-grid",children:Rf.map(C=>n.jsxs("button",{className:r.wallpaper===C.id?"on":"",onClick:()=>l("wallpaper",C.id),children:[n.jsx("span",{style:{background:z[C.id]},children:n.jsx("b",{children:t.id==="shinyu"?"23:58":"23:57"})}),n.jsx("small",{children:u(C.name)})]},C.id))}))}case"battery":return p({ko:"배터리",zh:"電池"},n.jsxs(n.Fragment,{children:[n.jsxs(Ue,{children:[n.jsx(oe,{title:u({ko:"배터리 잔량 표시",zh:"電池百分比"}),detail:"78%"}),n.jsx(oe,{title:u({ko:"저전력 모드",zh:"低耗電模式"}),right:n.jsx(Zt,{on:!1,onChange:()=>{},color:"#ffcc00"})})]}),n.jsx(Ue,{header:{ko:"앱별 배터리 사용량",zh:"各 App 的電池用量"},children:[[A.kakao,"41%"],[{ko:"카메라",zh:"相機"},"18%"],[A.photos,"12%"],[A.notes,"9%"]].map(([z,C])=>n.jsx(oe,{title:u(z),detail:C},u(z)))})]}))}return n.jsxs(be,{title:A.settings,large:!0,search:A.search,children:[n.jsx(Ue,{children:n.jsx(oe,{title:n.jsxs("span",{className:"set-profile",children:[n.jsx(Te,{size:58,radius:29,src:t.owner.avatar}),n.jsxs("span",{children:[n.jsx("b",{children:u(t.owner.name)}),n.jsx("small",{children:u({ko:"Apple 계정, iCloud 등",zh:"Apple 帳號、iCloud 等"})})]})]}),chevron:!0})}),n.jsxs(Ue,{children:[n.jsx(oe,{icon:"plane",iconBg:"#ff9500",title:u({ko:"에어플레인 모드",zh:"飛航模式"}),right:n.jsx(Zt,{on:r.airplane,onChange:z=>l("airplane",z)})}),n.jsx(oe,{icon:"wifi",iconBg:"#007aff",title:"Wi-Fi",detail:r.wifi?t.wifi:f,chevron:!0,onClick:()=>y("wifi")}),n.jsx(oe,{icon:"bluetooth",iconBg:"#007aff",title:"Bluetooth",detail:r.bluetooth?h:f,chevron:!0,onClick:()=>y("bt")}),n.jsx(oe,{icon:"antenna",iconBg:"#34c759",title:u({ko:"셀룰러",zh:"行動服務"}),right:n.jsx(Zt,{on:r.cellular,onChange:z=>l("cellular",z)})})]}),n.jsxs(Ue,{children:[n.jsx(oe,{icon:"bell",iconBg:"#ff3b30",title:u({ko:"알림",zh:"通知"}),chevron:!0}),n.jsx(oe,{icon:"speaker",iconBg:"#ff2d55",title:u({ko:"사운드 및 햅틱",zh:"聲音與觸覺回饋"}),chevron:!0,onClick:()=>y("sound")}),n.jsx(oe,{icon:"moon",iconBg:"#5e5ce6",title:u({ko:"집중 모드",zh:"專注模式"}),detail:r.focus?h:"",chevron:!0,onClick:()=>y("focus")}),n.jsx(oe,{icon:"timer",iconBg:"#5e5ce6",title:u({ko:"스크린 타임",zh:"螢幕使用時間"}),chevron:!0})]}),n.jsxs(Ue,{children:[n.jsx(oe,{icon:"gear",iconBg:"#8e8e93",title:u({ko:"일반",zh:"一般"}),chevron:!0,onClick:()=>y("general")}),n.jsx(oe,{icon:"apps",iconBg:"#8e8e93",title:u({ko:"제어 센터",zh:"控制中心"}),chevron:!0}),n.jsx(oe,{icon:"sun",iconBg:"#007aff",title:u({ko:"디스플레이 및 밝기",zh:"螢幕顯示與亮度"}),chevron:!0,onClick:()=>y("display")}),n.jsx(oe,{icon:"image",iconBg:"#32ade6",title:u({ko:"배경화면",zh:"背景圖片"}),chevron:!0,onClick:()=>y("wallpaper")}),n.jsx(oe,{icon:"battery",iconBg:"#34c759",title:u({ko:"배터리",zh:"電池"}),chevron:!0,onClick:()=>y("battery")}),n.jsx(oe,{icon:"hand",iconBg:"#007aff",title:u({ko:"개인정보 보호 및 보안",zh:"隱私權與安全性"}),chevron:!0})]}),n.jsxs(Ue,{header:{ko:"발견한 비밀",zh:"發現的祕密"},footer:{ko:"폰 곳곳에 숨겨진 비밀을 찾아보세요. 힌트는 다른 앱 안에 있어요.",zh:"找找看藏在手機各處的祕密。提示就在其他 App 裡。"},children:[n.jsx(oe,{icon:"unlock",iconBg:"#af52de",title:u({ko:`${i.length} / ${to.length}`,zh:`${i.length} / ${to.length}`}),detail:n.jsx("span",{className:"secret-dots",children:to.map(z=>i.includes(z)?"●":"○").join(" ")})}),to.filter(z=>i.includes(z)).map(z=>n.jsx(oe,{title:u(I2[z]),right:n.jsx(N,{n:"check",size:18,w:2.6,className:"tint"})},z))]}),n.jsxs(Ue,{header:{ko:"이 웹사이트",zh:"本網站"},footer:A.aboutText,children:[B2()&&n.jsx(oe,{icon:"expand",iconBg:"#007aff",title:u({ko:"전체 화면",zh:"全螢幕"}),right:n.jsx(Zt,{on:a,onChange:async z=>{z?await Ii():await Lm(),c(c0())}})}),n.jsx(oe,{icon:"lock",iconBg:"#636366",title:u(A.toLock),onClick:()=>o({kind:"lock"})}),n.jsx(oe,{icon:"rewind",iconBg:"#ff3b30",title:u(A.restart),onClick:s,danger:!0}),n.jsx(oe,{icon:"phone",iconBg:"#34c759",title:u(A.toSelect),onClick:e})]})]})}function Rm(){const{story:e,clock:t}=se(),{t:s,lang:o}=Q(),[r,l]=j.useState(!0),[i,a]=j.useState(null),{discover:c,found:u,haptic:x}=ye(),[g,m]=j.useState(""),[y,w]=j.useState(!1),v=e.notes.find(T=>T.id===i),b="#e5a800",h=e.extra.lockedNote,f=u.includes("locked-note"),[p,z]=Im(e.id),C=p.find(T=>T.id===i);if(C)return n.jsx(be,{title:"",onBack:()=>{C.text.trim()||z(p.filter(T=>T.id!==C.id)),a(null)},backLabel:A.notes,tint:b,bg:"#fff",right:n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>(z(p.filter(T=>T.id!==C.id)),a(null)),"aria-label":"delete",children:n.jsx(N,{n:"trash",size:21})}),n.jsx("button",{className:"nav-text",onClick:()=>{var T;return(T=document.activeElement)==null?void 0:T.blur()},children:s({ko:"완료",zh:"完成"})})]}),children:n.jsxs("div",{className:"n-body",children:[n.jsx("small",{children:`${sn(new Date(C.at).toISOString(),o)} ${Ye(new Date(C.at).toISOString(),o)}`}),n.jsx("textarea",{className:"n-edit",autoFocus:!0,value:C.text,placeholder:s({ko:"메모",zh:"備忘錄"}),onChange:T=>z(p.map($=>$.id===C.id?{...$,text:T.target.value,at:q(t)}:$))})]})});if(i==="locked")return n.jsx(be,{title:"",onBack:()=>a(null),backLabel:A.notes,tint:b,bg:"#fff",children:f?n.jsxs("div",{className:"n-body",children:[n.jsx("small",{children:`${sn(h.at,o)} ${Ye(h.at,o)}`}),n.jsx("pre",{children:s(h.body)})]}):n.jsxs("form",{className:"n-lock",onSubmit:T=>{T.preventDefault(),g===h.password?(c("locked-note"),w(!1)):(w(!0),x(120)),m("")},children:[n.jsx(N,{n:"lock",size:44,w:1.6,className:"tint"}),n.jsx("h3",{children:s({ko:"이 메모는 잠겨 있습니다.",zh:"此備忘錄已上鎖。"})}),n.jsx("p",{children:s({ko:"메모 암호를 입력하여 이 메모를 보십시오.",zh:"輸入備忘錄密碼以檢視此備忘錄。"})}),n.jsx("input",{className:y?"err":"",type:"password",inputMode:"numeric",autoFocus:!0,value:g,onChange:T=>m(T.target.value),placeholder:s({ko:"암호",zh:"密碼"})}),n.jsxs("small",{children:[s({ko:"힌트: ",zh:"提示："}),s(h.hint)]}),y&&n.jsx("small",{className:"red",children:s({ko:"암호가 올바르지 않습니다.",zh:"密碼不正確。"})}),n.jsx("button",{className:"n-lock-btn",children:s({ko:"확인",zh:"確定"})})]})});if(v)return n.jsx(be,{title:"",onBack:()=>a(null),backLabel:A.notes,tint:b,bg:"#fff",right:n.jsxs(n.Fragment,{children:[n.jsx(N,{n:"share",size:21}),n.jsx(N,{n:"more",size:22})]}),bottom:n.jsxs("div",{className:"n-toolbar",children:[n.jsx(N,{n:"check",size:22}),n.jsx(N,{n:"camera",size:22}),n.jsx(N,{n:"compose",size:22})]}),children:n.jsxs("div",{className:"n-body",children:[n.jsx("small",{children:`${sn(v.at,o)} ${Ye(v.at,o)}`}),n.jsx("pre",{children:s(v.body)})]})});if(!r)return n.jsxs(be,{title:{ko:"폴더",zh:"資料夾"},large:!0,tint:b,right:n.jsx("span",{className:"nav-text",children:s({ko:"편집",zh:"編輯"})}),children:[n.jsx("h3",{className:"group-h big",children:"iCloud"}),n.jsxs("div",{className:"group-box",children:[n.jsxs("button",{className:"cell",onClick:()=>l(!0),children:[n.jsx(N,{n:"folder",size:22,className:"tint"}),n.jsx("span",{className:"cell-main",children:s(A.notes)}),n.jsx("span",{className:"cell-detail",children:e.notes.length}),n.jsx(N,{n:"chevron",size:15,w:2.6,className:"cell-chev"})]}),n.jsxs("div",{className:"cell",children:[n.jsx(N,{n:"trash",size:22,className:"tint"}),n.jsx("span",{className:"cell-main",children:s({ko:"최근 삭제된 항목",zh:"最近刪除"})}),n.jsx("span",{className:"cell-detail",children:"1"})]})]})]});const M=e.notes.filter(T=>T.pinned),S=e.notes.filter(T=>!T.pinned).sort((T,$)=>q($.at)-q(T.at)),_=T=>{const $=s(T.body).split(`
`).filter(W=>W.trim());return n.jsxs("button",{className:"n-row",onClick:()=>a(T.id),children:[n.jsx("b",{children:s(T.title)}),n.jsxs("small",{children:[n.jsx("em",{children:xn(T.at,t,o)})," ",$[1]??""]})]},T.id)};return n.jsxs(be,{title:A.notes,large:!0,onBack:()=>l(!1),backLabel:{ko:"폴더",zh:"資料夾"},tint:b,search:A.search,right:n.jsx(N,{n:"more",size:22}),bottom:n.jsxs("div",{className:"n-toolbar",children:[n.jsx("span",{}),n.jsx("small",{children:s({ko:`메모 ${e.notes.length+1+p.length}개`,zh:`${e.notes.length+1+p.length} 則備忘錄`})}),n.jsx("button",{"aria-label":"new note",onClick:()=>{const T=`my-${Date.now()}`;z([{id:T,text:"",at:q(t)},...p]),a(T)},children:n.jsx(N,{n:"compose",size:22})})]}),children:[M.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("h3",{className:"group-h big",children:[n.jsx(N,{n:"pin",size:14})," ",s({ko:"고정됨",zh:"已釘選"})]}),n.jsxs("div",{className:"group-box",children:[M.map(_),n.jsxs("button",{className:"n-row",onClick:()=>a("locked"),children:[n.jsx("b",{children:s(f?h.title:{ko:"🔒 잠김",zh:"🔒 已上鎖"})}),n.jsxs("small",{children:[n.jsx("em",{children:xn(h.at,t,o)})," ",s({ko:"잠김",zh:"已上鎖"})]})]})]})]}),p.length>0&&n.jsxs(n.Fragment,{children:[n.jsx("h3",{className:"group-h big",children:s(A.today)}),n.jsx("div",{className:"group-box",children:p.map(T=>{const $=T.text.split(`
`).filter(W=>W.trim());return n.jsxs("button",{className:"n-row",onClick:()=>a(T.id),children:[n.jsx("b",{children:$[0]??s({ko:"새로운 메모",zh:"新備忘錄"})}),n.jsxs("small",{children:[n.jsx("em",{children:Ye(new Date(T.at).toISOString(),o)})," ",$[1]??s({ko:"추가 텍스트 없음",zh:"沒有其他文字"})]})]},T.id)})})]}),n.jsx("h3",{className:"group-h big",children:s({ko:"이전 30일",zh:"過去 30 天"})}),n.jsx("div",{className:"group-box",children:S.map(_)})]})}function Im(e){const t=`yudoz-mynotes-${e}`,[s,o]=j.useState(()=>{try{return JSON.parse(window.localStorage.getItem(t)??"[]")}catch{return[]}});return[s,l=>{o(l);try{window.localStorage.setItem(t,JSON.stringify(l))}catch{}}]}function Dm(){const{story:e,clock:t}=se(),{t:s,lang:o}=Q(),r=O2(t),[l,i]=j.useState({y:r.y,m:r.m}),[a,c]=j.useState(r.d),u=new Date(Date.UTC(l.y,l.m-1,1)).getUTCDay(),x=new Date(Date.UTC(l.y,l.m,0)).getUTCDate(),g=b=>`${l.y}-${Ae(l.m)}-${Ae(b)}`,m=e.calendar.filter(b=>b.date===g(a)),y=b=>{const h=new Date(Date.UTC(l.y,l.m-1+b,1));i({y:h.getUTCFullYear(),m:h.getUTCMonth()+1}),c(1)},w=b=>l.y===r.y&&l.m===r.m&&b===r.d,v=j.useRef(null);return n.jsxs(be,{title:o==="ko"?`${l.m}월`:`${l.m}月`,large:!0,tint:"#ff3b30",bg:"#fff",right:n.jsxs(n.Fragment,{children:[n.jsx(N,{n:"search",size:21}),n.jsx(N,{n:"plus",size:23})]}),bottom:n.jsxs("div",{className:"cal-toolbar",children:[n.jsx("button",{onClick:()=>{i({y:r.y,m:r.m}),c(r.d)},children:s(A.today)}),n.jsx("span",{children:s({ko:"캘린더",zh:"行事曆"})}),n.jsx("span",{children:s({ko:"받은 편지함",zh:"收件匣"})})]}),children:[n.jsx("div",{className:"cal-year",children:o==="ko"?`${l.y}년`:`${l.y}年`}),n.jsx("div",{className:"cal-wd",children:Xn[o].map((b,h)=>n.jsx("small",{className:h===0||h===6?"weekend":"",children:b},b))}),n.jsxs("div",{className:"cal-month",onPointerDown:b=>v.current=b.clientX,onPointerUp:b=>{if(v.current===null)return;const h=b.clientX-v.current;v.current=null,h<-50?y(1):h>50&&y(-1)},children:[Array.from({length:u}).map((b,h)=>n.jsx("span",{},`e${h}`)),Array.from({length:x}).map((b,h)=>{const f=h+1,p=e.calendar.filter(C=>C.date===g(f)),z=(u+h)%7;return n.jsxs("button",{className:`${w(f)?"today":""} ${f===a?"sel":""} ${z===0||z===6?"weekend":""}`,onClick:()=>c(f),children:[n.jsx("span",{children:f}),n.jsx("i",{children:p.slice(0,3).map((C,M)=>n.jsx("em",{style:{background:C.color}},M))})]},f)})]}),n.jsx("div",{className:"cal-day-title",children:o==="ko"?`${l.m}월 ${a}일 ${Xn.ko[(u+a-1)%7]}요일`:`${l.m}月${a}日 星期${Xn.zh[(u+a-1)%7]}`}),n.jsxs("div",{className:"cal-events",children:[m.length===0&&n.jsx("p",{className:"muted center",children:s({ko:"이벤트 없음",zh:"沒有行程"})}),m.map((b,h)=>n.jsxs("div",{className:"cal-ev",children:[n.jsx("i",{style:{background:b.color}}),n.jsxs("span",{children:[n.jsx("b",{children:s(b.title)}),n.jsx("small",{children:b.time??s(A.allDay)})]})]},h))]})]})}function Om(){var w;const{story:e}=se(),{t,lang:s}=Q(),[o,r]=j.useState(((w=e.voice[0])==null?void 0:w.id)??null),[l,i]=j.useState(0),[a,c]=j.useState(!1),u=e.voice.find(v=>v.id===o),[x,g]=j.useState(()=>[...mr]);j.useEffect(()=>{i(0),c(!1)},[o]),j.useEffect(()=>{if(!a||!u)return;if(l>=u.seconds){c(!1);return}const v=window.setTimeout(()=>i(b=>b+.25),250);return()=>window.clearTimeout(v)},[a,l,u]);const m=u?t(u.transcript).split(" "):[],y=u?Math.ceil(l/u.seconds*m.length):0;return n.jsxs(be,{title:{ko:"모든 녹음",zh:"所有錄音"},large:!0,dark:!0,bg:"#000",tint:"#0a84ff",right:n.jsx("span",{className:"nav-text",children:t({ko:"편집",zh:"編輯"})}),children:[e.voice.map(v=>n.jsxs("div",{className:`vm ${o===v.id?"open":""}`,children:[n.jsxs("button",{className:"vm-head",onClick:()=>r(o===v.id?null:v.id),children:[n.jsx("b",{children:t(v.title)}),n.jsxs("small",{children:[n.jsx("span",{children:Fa(v.at,s)}),n.jsx("span",{children:Ar(v.seconds,s)})]})]}),o===v.id&&u&&n.jsxs("div",{className:"vm-body",children:[n.jsxs("div",{className:"vm-wave",children:[Array.from({length:60}).map((b,h)=>n.jsx("i",{className:h/60<=l/u.seconds?"past":"",style:{height:`${18+h*53%78}%`}},h)),n.jsx("span",{className:"vm-head-line",style:{left:`${l/u.seconds*100}%`}})]}),n.jsxs("div",{className:"vm-time",children:[n.jsxs("small",{children:[Ae(Math.floor(l/60)),":",Ae(Math.floor(l%60))]}),n.jsxs("small",{children:["-",Ae(Math.floor((u.seconds-l)/60)),":",Ae(Math.ceil((u.seconds-l)%60))]})]}),n.jsxs("div",{className:"vm-ctrl",children:[n.jsx("button",{onClick:()=>i(b=>Math.max(0,b-15)),"aria-label":"back 15",children:n.jsx(N,{n:"rewind",size:26})}),n.jsx("button",{className:"vm-play",onClick:()=>c(b=>!b),"aria-label":"play",children:n.jsx(N,{n:a?"pause":"play",size:34})}),n.jsx("button",{onClick:()=>i(b=>Math.min(u.seconds,b+15)),"aria-label":"forward 15",children:n.jsx(N,{n:"forward",size:26})})]}),n.jsxs("div",{className:"vm-tr",children:[n.jsx("small",{children:t({ko:"텍스트 변환",zh:"轉錄文字"})}),n.jsxs("p",{children:[n.jsx("span",{children:m.slice(0,y).join(" ")})," ",n.jsx("span",{className:"dim",children:m.slice(y).join(" ")})]})]})]})]},v.id)),x.map(v=>n.jsxs("div",{className:`vm ${o===v.id?"open":""}`,children:[n.jsxs("button",{className:"vm-head",onClick:()=>r(o===v.id?null:v.id),children:[n.jsx("b",{children:t({ko:`새로운 녹음 ${v.n}`,zh:`新錄音 ${v.n}`})}),n.jsxs("small",{children:[n.jsx("span",{children:t(A.today)}),n.jsx("span",{children:Ar(v.seconds,s)})]})]}),o===v.id&&n.jsx("div",{className:"vm-body",children:v.url?n.jsx("audio",{className:"vm-audio",src:v.url,controls:!0}):n.jsx("p",{className:"muted",children:t({ko:"마이크 권한이 없어 소리 없이 저장됐어요.",zh:"沒有麥克風權限，已存成無聲檔。"})})})]},v.id)),n.jsx(Am,{onSaved:v=>{mr.push(v),g([...mr]),r(v.id)}})]})}const mr=[];function Am({onSaved:e}){const{t}=Q(),[s,o]=j.useState(!1),[r,l]=j.useState(0),[i,a]=j.useState([]),c=j.useRef({chunks:[],start:0});j.useEffect(()=>{if(!s)return;const m=window.setInterval(()=>l(Math.floor((Date.now()-c.current.start)/1e3)),250);return()=>window.clearInterval(m)},[s]),j.useEffect(()=>()=>u(),[]);const u=()=>{var y,w;const m=c.current;m.raf&&cancelAnimationFrame(m.raf),(y=m.stream)==null||y.getTracks().forEach(v=>v.stop()),(w=m.ctx)==null||w.close().catch(()=>{})},x=async()=>{c.current={chunks:[],start:Date.now()},l(0),a([]),o(!0);try{const m=await navigator.mediaDevices.getUserMedia({audio:!0}),y=new MediaRecorder(m);y.ondataavailable=f=>c.current.chunks.push(f.data),y.start();const w=new AudioContext,v=w.createAnalyser();v.fftSize=256,w.createMediaStreamSource(m).connect(v);const b=new Uint8Array(v.frequencyBinCount),h=()=>{v.getByteTimeDomainData(b);let f=0;for(const p of b)f=Math.max(f,Math.abs(p-128));a(p=>[...p.slice(-44),Math.min(1,f/64)]),c.current.raf=requestAnimationFrame(h)};h(),Object.assign(c.current,{mr:y,stream:m,ctx:w})}catch{const m=()=>{a(y=>[...y.slice(-44),.15+Math.random()*.5]),c.current.raf=window.setTimeout(m,90)};m()}},g=()=>{const m=c.current,y=Math.max(1,Math.round((Date.now()-m.start)/1e3)),w=mr.length+1,v=`rec-${Date.now()}`;o(!1),m.mr&&m.mr.state!=="inactive"?(m.mr.onstop=()=>{var h;const b=URL.createObjectURL(new Blob(m.chunks,{type:((h=m.mr)==null?void 0:h.mimeType)||"audio/webm"}));e({id:v,n:w,url:b,seconds:y})},m.mr.stop()):(window.clearTimeout(m.raf),e({id:v,n:w,url:null,seconds:y})),u()};return n.jsxs("div",{className:`vm-recorder ${s?"on":""}`,children:[s&&n.jsxs(n.Fragment,{children:[n.jsx("b",{children:t({ko:"새로운 녹음",zh:"新錄音"})}),n.jsxs("small",{children:[Ae(Math.floor(r/60)),":",Ae(r%60)]}),n.jsx("div",{className:"vm-live",children:i.map((m,y)=>n.jsx("i",{style:{height:`${8+m*92}%`}},y))})]}),n.jsx("button",{className:"vm-rec",onClick:s?g:x,"aria-label":s?"stop":"record",children:n.jsx("span",{className:s?"stop":""})})]})}function Um(){const{story:e}=se(),{t}=Q(),[s,o]=j.useState(null),[r,l]=j.useState(""),[i,a]=j.useState(!1);at(s!==null,()=>o(null));const c=s!==null?e.searches.find(x=>t(x.q)===s||t(x.q).includes(s)||s.includes(t(x.q))):null,u=x=>{o(x),l(x),a(!1)};return n.jsxs("div",{className:"nv",children:[n.jsx(_e,{}),n.jsxs("form",{className:`nv-bar ${s!==null||i?"compact":""}`,onSubmit:x=>{x.preventDefault(),r.trim()&&u(r.trim())},children:[s!==null&&n.jsx("button",{type:"button",className:"nv-back",onClick:()=>o(null),children:n.jsx(N,{n:"back",size:22,w:2.4})}),n.jsx("span",{className:"nv-n",children:"N"}),n.jsx("input",{value:r,onChange:x=>l(x.target.value),onFocus:()=>a(!0),placeholder:t({ko:"검색어를 입력해 주세요.",zh:"請輸入搜尋字詞。"})}),n.jsx("button",{className:"nv-go","aria-label":t(A.search),children:n.jsx(N,{n:"search",size:20,w:2.6})})]}),s!==null?n.jsxs("div",{className:"nv-results",children:[n.jsx("div",{className:"nv-tabs",children:[{ko:"통합",zh:"綜合"},{ko:"블로그",zh:"部落格"},{ko:"카페",zh:"咖啡廳"},{ko:"이미지",zh:"圖片"},{ko:"지식iN",zh:"知識iN"}].map((x,g)=>n.jsx("span",{className:g===0?"on":"",children:t(x)},g))}),c?c.result.map((x,g)=>n.jsxs("div",{className:"nv-card",children:[n.jsxs("small",{children:[n.jsx("span",{className:"nv-src"})," blog.naver.com"]}),n.jsx("b",{children:t(x.title)}),n.jsx("p",{children:t(x.body)})]},g)):n.jsxs("div",{className:"nv-card",children:[n.jsx("b",{children:t({ko:`'${s}'에 대한 검색결과가 없습니다.`,zh:`找不到「${s}」的搜尋結果。`})}),n.jsx("p",{children:t({ko:"단어의 철자가 정확한지 확인해 보세요.",zh:"請確認拼字是否正確。"})})]}),n.jsx("p",{className:"muted center",children:t({ko:"검색 결과는 가상의 내용입니다.",zh:"搜尋結果為虛構內容。"})})]}):n.jsxs("div",{className:"nv-home",children:[!i&&n.jsx("div",{className:"nv-shortcuts",children:["메일","카페","블로그","쇼핑","뉴스","지도"].map((x,g)=>n.jsxs("span",{children:[n.jsx("i",{style:{background:["#03c75a","#4fc76b","#2db400","#ff5a5a","#3d7bf5","#26b6c7"][g]}}),x]},x))}),n.jsxs("div",{className:"nv-hist",children:[n.jsxs("div",{className:"nv-hist-h",children:[n.jsx("b",{children:t(A.recentSearches)}),n.jsx("small",{children:t({ko:"전체삭제",zh:"全部刪除"})})]}),e.searches.map((x,g)=>n.jsxs("button",{onClick:()=>u(t(x.q)),children:[n.jsx(N,{n:"clock",size:16,w:2}),n.jsx("span",{children:t(x.q)}),n.jsx("small",{children:"01."+Ae(20+g%9)})]},g))]})]})]})}function u0({text:e}){const t=e.split(`
`),s=o=>o.split(/(\*\*[^*]+\*\*)/g).map((r,l)=>r.startsWith("**")&&r.endsWith("**")?n.jsx("b",{children:r.slice(2,-2)},l):n.jsx(j.Fragment,{children:r},l));return n.jsx("div",{className:"gpt-md",children:t.map((o,r)=>{if(!o.trim())return n.jsx("div",{className:"gpt-gap"},r);const l=o.match(/^(\d+)\.\s(.*)$/);return l?n.jsxs("p",{className:"gpt-li",children:[n.jsxs("span",{children:[l[1],"."]}),n.jsx("span",{children:s(l[2])})]},r):o.startsWith("- ")?n.jsxs("p",{className:"gpt-li",children:[n.jsx("span",{children:"•"}),n.jsx("span",{children:s(o.slice(2))})]},r):n.jsx("p",{children:s(o)},r)})})}function Wm(e,t){const s=e.toLowerCase(),o=(...l)=>l.some(i=>s.includes(i)),r=(l,i)=>t==="ko"?l:i;return o("누구","주인","주웠","撿","誰","主人")?r(`저는 이 기기에 로그인된 계정의 대화만 볼 수 있어요. 혹시 **이 휴대폰의 주인이 아니시라면**, 개인 대화를 오래 보는 건 실례일 수 있어요. 주인에게 돌려줄 방법을 같이 찾아볼까요?

1. 잠금화면의 연락처나 최근 통화로 연락하기
2. 가까운 경찰서·분실물 센터에 맡기기`,`我只能看到登入這台裝置的帳號的對話。如果您**不是這支手機的主人**，長時間看別人的私人對話可能不太禮貌。要一起想辦法還給主人嗎？

1. 透過聯絡人或最近通話聯絡
2. 交給附近的警察局或失物招領處`):o("생일","편지","生日","信")?r(`생일 메시지를 쓸 때는 이렇게 해보세요.

1. **함께한 구체적인 장면** 하나 꺼내기
2. 평소에 못 했던 말 한 줄
3. 앞으로의 약속으로 마무리

길이보다 진심이 더 잘 전해져요 🎂`,`寫生日訊息時可以這樣做：

1. 提起**一起經歷的具體場景**
2. 一句平常說不出口的話
3. 用對未來的約定收尾

比起長度，真心更能傳達 🎂`):o("볼링","保齡球")?r("볼링 실력을 올리려면 **스페어 처리 연습**부터 시작하는 게 가장 효율적이에요. 그리고 핀이 아니라 레인의 화살표를 보고 던져 보세요 🎳","想提升保齡球實力，最有效率的是先從**補中練習**開始。另外試著看球道上的箭頭而不是球瓶 🎳"):o("케이크","蛋糕","쿠키","餅")?r("생크림 케이크는 **냉장 보관 2~3일**이 적당해요. 냄새가 강한 음식과 떨어뜨려 두세요. 두쫀쿠는 실온보다 냉장에서 더 쫀득해져요 🍪","鮮奶油蛋糕**冷藏 2～3 天**比較合適，記得遠離味道重的食物。杜拜Q餅冷藏比常溫更有嚼勁 🍪"):o("잠","졸려","睡","불면")?r("잠이 안 올 때는 휴대폰 화면을 끄고 **4-7-8 호흡**(4초 들이쉬고, 7초 참고, 8초 내쉬기)을 해 보세요. 그리고… 소파보다는 침대가 허리에 좋아요 😴","睡不著的時候，關掉手機螢幕試試 **4-7-8 呼吸法**（吸氣 4 秒、憋氣 7 秒、吐氣 8 秒）。還有……床比沙發對腰好 😴"):o("좋아","사랑","고백","喜歡","愛","告白")?r("마음을 전하는 데 정답은 없지만, **상대가 편하게 받을 수 있는 방식**을 고르는 게 중요해요. 평소에 둘만 아는 이야기로 시작하면 훨씬 자연스러워요.","表達心意沒有標準答案，但重要的是選擇**對方能自在接受的方式**。從只有你們兩個知道的事開始會自然很多。"):o("안녕","hi","hello","你好","嗨")?r("안녕하세요! 무엇을 도와드릴까요? 🙂","你好！有什麼可以幫你的嗎？🙂"):r(`좋은 질문이에요. "${e.slice(0,30)}"에 대해 정리해 보면:

- 지금 상황을 조금 더 알려주시면 더 구체적으로 도와드릴 수 있어요
- 급한 일이 아니라면 하루 정도 생각해 보고 결정하는 것도 방법이에요

더 궁금한 게 있으면 편하게 물어보세요!`,`好問題。關於「${e.slice(0,30)}」整理一下：

- 如果能多告訴我一些現在的狀況，我可以給更具體的幫助
- 如果不急的話，想一天再決定也是個方法

還有想問的隨時問我！`)}const Bm=[{id:"today",label:{ko:"오늘",zh:"今天"}},{id:"yesterday",label:{ko:"어제",zh:"昨天"}},{id:"week",label:{ko:"지난 7일",zh:"過去 7 天"}},{id:"month",label:{ko:"지난 30일",zh:"過去 30 天"}}];function Vm(){var M,S;const{story:e}=se(),{t,lang:s}=Q(),[o,r]=j.useState(((M=e.ai[0])==null?void 0:M.id)??null),[l,i]=j.useState(!1),[a,c]=j.useState({}),[u,x]=j.useState([]),[g,m]=j.useState(""),[y,w]=j.useState(""),v=j.useRef(null);at(l,()=>i(!1));const b=e.ai.find(_=>_.id===o),h=o?a[o]??[]:[],f=h.some(_=>_.shown<_.a.length);j.useEffect(()=>{if(!o||!f)return;const _=window.setTimeout(()=>{c(T=>({...T,[o]:(T[o]??[]).map($=>$.shown<$.a.length?{...$,shown:Math.min($.a.length,$.shown+3)}:$)}))},18);return()=>window.clearTimeout(_)},[o,f,a]),j.useEffect(()=>{var _;(_=v.current)==null||_.scrollTo({top:1e6})},[o,h.length,f]);const p=()=>{const _=g.trim();if(!_)return;let T=o;T||(T=`new-${Date.now()}`,x(W=>[{id:T,title:_.slice(0,18)},...W]),r(T));const $=T;m(""),c(W=>({...W,[$]:[...W[$]??[],{q:_,a:"",shown:0}]})),window.setTimeout(()=>{const W=Wm(_,s);c(le=>({...le,[$]:(le[$]??[]).map((de,He,Re)=>He===Re.length-1?{...de,a:W}:de)}))},900)},z=(S=u.find(_=>_.id===o))==null?void 0:S.title,C=e.ai.filter(_=>!y||t(_.title).includes(y));return n.jsxs("div",{className:"gpt",children:[n.jsx(_e,{}),n.jsxs("div",{className:"gpt-nav",children:[n.jsx("button",{onClick:()=>i(!0),"aria-label":"menu",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:n.jsx("path",{d:"M4 9h16M4 15h10"})})}),n.jsxs("button",{className:"gpt-model",children:["ChatGPT ",n.jsx("span",{children:"›"})]}),n.jsx("button",{onClick:()=>r(null),"aria-label":"new chat",children:n.jsx(N,{n:"compose",size:22,w:2})})]}),n.jsx("div",{className:"gpt-body",ref:v,children:!b&&!z&&h.length===0?n.jsxs("div",{className:"gpt-empty",children:[n.jsx("b",{children:t({ko:"무엇을 도와드릴까요?",zh:"有什麼可以幫忙的？"})}),n.jsx("div",{className:"gpt-chips",children:[{ko:"🎂 생일 편지 다듬기",zh:"🎂 潤飾生日信"},{ko:"🎳 볼링 잘 치는 법",zh:"🎳 保齡球技巧"},{ko:"😴 잠이 안 올 때",zh:"😴 睡不著的時候"},{ko:"🍰 케이크 보관법",zh:"🍰 蛋糕保存方法"}].map((_,T)=>n.jsx("button",{onClick:()=>m(t(_).slice(2)),children:t(_)},T))})]}):n.jsxs(n.Fragment,{children:[b==null?void 0:b.turns.map((_,T)=>n.jsxs("div",{children:[n.jsx("div",{className:"gpt-q",children:t(_.q)}),n.jsxs("div",{className:"gpt-a",children:[n.jsx(u0,{text:t(_.a)}),n.jsx(d0,{})]})]},T)),h.map((_,T)=>n.jsxs("div",{children:[n.jsx("div",{className:"gpt-q",children:_.q}),n.jsxs("div",{className:"gpt-a",children:[_.a?n.jsx(u0,{text:_.a.slice(0,_.shown)}):n.jsx("span",{className:"gpt-dot"}),_.a&&_.shown>=_.a.length&&n.jsx(d0,{})]})]},`m${T}`))]})}),n.jsxs("form",{className:"gpt-input",onSubmit:_=>{_.preventDefault(),p()},children:[n.jsx("span",{className:"gpt-plus",children:n.jsx(N,{n:"plus",size:20,w:2})}),n.jsx("input",{value:g,onChange:_=>m(_.target.value),placeholder:t({ko:"무엇이든 물어보세요",zh:"問任何問題"})}),g.trim()?n.jsx("button",{className:"gpt-send","aria-label":"send",children:n.jsx(N,{n:"arrowUp",size:18,w:2.8})}):n.jsxs(n.Fragment,{children:[n.jsx(N,{n:"mic",size:20,w:1.9}),n.jsxs("span",{className:"gpt-voice",children:[n.jsx("i",{}),n.jsx("i",{}),n.jsx("i",{}),n.jsx("i",{})]})]})]}),n.jsx("small",{className:"gpt-disc",children:t({ko:"ChatGPT는 실수를 할 수 있습니다. 중요한 정보는 재차 확인하세요.",zh:"ChatGPT 可能會出錯。請查核重要資訊。"})}),l&&n.jsx("div",{className:"gpt-side-bg",onClick:()=>i(!1),children:n.jsxs("aside",{className:"gpt-side",onClick:_=>_.stopPropagation(),children:[n.jsx(_e,{}),n.jsxs("div",{className:"gpt-search",children:[n.jsx(N,{n:"search",size:16,w:2.2}),n.jsx("input",{value:y,onChange:_=>w(_.target.value),placeholder:t({ko:"검색",zh:"搜尋"})})]}),n.jsxs("button",{className:"gpt-side-item",onClick:()=>{r(null),i(!1)},children:[n.jsx(N,{n:"compose",size:18})," ",t({ko:"새 채팅",zh:"新聊天"})]}),n.jsxs("div",{className:"gpt-side-item",children:[n.jsx(N,{n:"apps",size:18})," ",t({ko:"GPT 탐색",zh:"探索 GPT"})]}),n.jsxs("div",{className:"gpt-side-list",children:[u.length>0&&n.jsxs(n.Fragment,{children:[n.jsx("h5",{children:t({ko:"오늘",zh:"今天"})}),u.map(_=>n.jsx("button",{className:_.id===o?"on":"",onClick:()=>(r(_.id),i(!1)),children:_.title},_.id))]}),Bm.map(_=>{const T=C.filter($=>($.when??"today")===_.id);return T.length?n.jsxs(j.Fragment,{children:[!(_.id==="today"&&u.length)&&n.jsx("h5",{children:t(_.label)}),T.map($=>n.jsx("button",{className:$.id===o?"on":"",onClick:()=>(r($.id),i(!1)),children:t($.title)},$.id))]},_.id):null})]}),n.jsxs("div",{className:"gpt-me",children:[n.jsx(Te,{size:32,radius:16,src:e.owner.avatar}),n.jsx("b",{children:t(e.owner.name)}),n.jsx(N,{n:"more",size:20})]})]})})]})}function d0(){const[e,t]=j.useState(null),[s,o]=j.useState(!1);return n.jsxs("div",{className:"gpt-acts",children:[n.jsx("button",{onClick:()=>(o(!0),window.setTimeout(()=>o(!1),1200)),"aria-label":"copy",children:s?n.jsx(N,{n:"check",size:17,w:2.2}):n.jsx(N,{n:"copy",size:17,w:1.9})}),n.jsx("button",{onClick:()=>t(e===!0?null:!0),className:e===!0?"on":"","aria-label":"good",children:n.jsx(N,{n:"thumb",size:17,w:1.9})}),n.jsx("button",{onClick:()=>t(e===!1?null:!1),className:e===!1?"on":"","aria-label":"bad",children:n.jsx(N,{n:"thumb",size:17,w:1.9,style:{transform:"rotate(180deg)"}})}),n.jsx(N,{n:"speaker",size:17,w:1.9}),n.jsx(N,{n:"repeat",size:17,w:1.9})]})}const Hm={"hoon.wolf":"dohoon","yu.42_":"shinyu","kyungmin.p":"kyungmin",jihoon_06:"jihoon","young.jae":"youngjae","hanjin.zz":"hanjin"};function Oa(e,t,s){const o=Math.max(1,Math.round((q(t)-q(e))/6e4));if(o<60)return s==="ko"?`${o}분`:`${o} 分鐘`;const r=Math.round(o/60);if(r<24)return s==="ko"?`${r}시간`:`${r} 小時`;const l=Math.round(r/24);return l<7?s==="ko"?`${l}일`:`${l} 天`:xn(e,t,s)}const er=(e,t)=>e>=1e4?t==="ko"?`${(e/1e4).toFixed(1).replace(/\.0$/,"")}만`:`${(e/1e4).toFixed(1).replace(/\.0$/,"")}萬`:e>=1e3?`${(e/1e3).toFixed(1).replace(/\.0$/,"")}K`:String(e);function Aa({size:e=64,seen:t,children:s}){return n.jsx("span",{className:`ig-ring ${t?"seen":""}`,style:{width:e+8,height:e+8},children:n.jsx("span",{children:s})})}function qm(){const{story:e}=se(),{t}=Q(),s=e.extra.instagram,[o,r]=j.useState("home"),[l,i]=j.useState(null),[a,c]=j.useState(0),[u,x]=j.useState([]),[g,m]=j.useState(null),[y,w]=j.useState(null),[v,b]=j.useState(!1),h=f=>{i(s.stories),c(f)};return g?n.jsx(Gm,{open:g==="list"?null:g,onClose:()=>m(null),onOpen:m}):v?n.jsx(Ym,{onClose:()=>b(!1)}):n.jsxs("div",{className:"ig",children:[n.jsx(_e,{}),y?n.jsx(Br,{handle:y,onBack:()=>w(null),onHighlight:f=>i([{by:y,frames:f}])}):o==="home"?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"ig-head",children:[n.jsx("span",{className:"ig-logo",children:"Instagram"}),n.jsxs("span",{children:[n.jsx("button",{onClick:()=>b(!0),"aria-label":"activity",children:n.jsx(N,{n:"heart",size:25,w:1.9})}),n.jsxs("button",{onClick:()=>m("list"),"aria-label":"direct",className:"ig-dm-btn",children:[n.jsx(N,{n:"bubble",size:25,w:1.9}),s.dms.some(f=>f.unread)&&n.jsx("i",{children:s.dms.filter(f=>f.unread).length})]})]})]}),n.jsxs("div",{className:"ig-scroll",children:[n.jsxs("div",{className:"ig-stories",children:[n.jsxs("button",{className:"ig-story",onClick:()=>r("profile"),children:[n.jsxs("span",{className:"ig-mine",children:[n.jsx(Te,{size:64,radius:32,src:e.owner.avatar}),n.jsx("i",{children:"+"})]}),n.jsx("small",{children:s.me})]}),s.stories.map((f,p)=>{var z;return n.jsxs("button",{className:"ig-story",onClick:()=>{h(p),x(C=>[...C,f.by])},children:[n.jsx(Aa,{seen:u.includes(f.by),children:n.jsx(Te,{size:64,radius:32,src:(z=s.users[f.by])==null?void 0:z.avatar})}),n.jsx("small",{children:f.by})]},f.by)})]}),[...s.feed].sort((f,p)=>q(p.at)-q(f.at)).map(f=>n.jsx(Ua,{post:f,onUser:w},f.id))]})]}):o==="search"?n.jsx(Km,{}):o==="reels"?n.jsxs("div",{className:"ig-reels",children:[n.jsx(Xe,{emoji:"🎬",tint:"#333"}),n.jsx("p",{children:t({ko:"릴스를 불러올 수 없어요. 네트워크 연결을 확인하세요.",zh:"無法載入 Reels，請檢查網路連線。"})})]}):n.jsx(Br,{handle:s.me,onHighlight:f=>i([{by:s.me,frames:f}])}),n.jsx("nav",{className:"ig-tabs",children:["home","search","plus","reels","profile"].map(f=>n.jsx("button",{className:o===f&&!y?"on":"",onClick:()=>{f!=="plus"&&(w(null),r(f))},children:f==="profile"?n.jsx("span",{className:"ig-tab-me",children:n.jsx(Te,{size:26,radius:13,src:e.owner.avatar})}):n.jsx(N,{n:f==="home"?"home":f==="search"?"search":f==="plus"?"plusSquare":"video",size:26,w:o===f?2.5:1.8})},f))}),l&&n.jsx(Qm,{groups:l,start:a,onClose:()=>i(null)})]})}function Ua({post:e,onUser:t}){const{story:s,clock:o}=se(),{t:r,lang:l}=Q(),i=s.extra.instagram,[a,c]=j.useState(!1),[u,x]=j.useState(!1),[g,m]=j.useState(0),[y,w]=j.useState(!1),v=j.useRef(0),b=i.users[e.by];return n.jsxs("article",{className:"ig-post",children:[n.jsxs("header",{children:[n.jsxs("button",{className:"ig-post-who",onClick:()=>t(e.by),children:[n.jsx(Aa,{size:32,children:n.jsx(Te,{size:32,radius:16,src:b==null?void 0:b.avatar})}),n.jsxs("b",{children:[e.by,(b==null?void 0:b.verified)&&n.jsx("i",{className:"ig-check",children:"✓"})]})]}),n.jsx(N,{n:"more",size:20})]}),n.jsxs("div",{className:"ig-post-img",onClick:()=>{const h=Date.now();h-v.current<320&&(c(!0),m(f=>f+1)),v.current=h},children:[n.jsx(Xe,{src:e.pic.src,emoji:e.pic.emoji,tint:e.pic.tint}),g>0&&n.jsx("span",{className:"ig-burst",children:n.jsx(N,{n:"heart",size:96,style:{fill:"#fff"},w:0})},g)]}),n.jsxs("div",{className:"ig-actions",children:[n.jsx("button",{className:a?"liked":"",onClick:()=>c(h=>!h),"aria-label":"like",children:n.jsx(N,{n:"heart",size:26,w:1.9,style:a?{fill:"#ff3040",color:"#ff3040"}:void 0})}),n.jsx("button",{onClick:()=>w(!0),"aria-label":"comment",children:n.jsx(N,{n:"bubble",size:25,w:1.9})}),n.jsx(N,{n:"send",size:25,w:1.9}),n.jsx("button",{className:"ig-save",onClick:()=>x(h=>!h),"aria-label":"save",children:n.jsx(N,{n:"bookmark",size:25,w:1.9,style:u?{fill:"currentColor"}:void 0})})]}),n.jsxs("div",{className:"ig-text",children:[n.jsx("b",{children:r({ko:`좋아요 ${(e.likes+(a?1:0)).toLocaleString()}개`,zh:`${(e.likes+(a?1:0)).toLocaleString()} 個讚`})}),n.jsxs("p",{children:[n.jsx("b",{children:e.by})," ",r(e.caption)]}),e.comments.length>0&&(y?e.comments.map((h,f)=>n.jsxs("p",{className:"ig-comment",children:[n.jsx("b",{children:h.by})," ",r(h.text)]},f)):n.jsx("button",{className:"ig-more",onClick:()=>w(!0),children:r({ko:`댓글 ${e.comments.length}개 모두 보기`,zh:`查看全部 ${e.comments.length} 則留言`})})),n.jsx("small",{children:Oa(e.at,o,l)})]})]})}function Qm({groups:e,start:t,onClose:s}){var h;const{story:o,clock:r}=se(),{t:l,lang:i}=Q(),[a,c]=j.useState(t),[u,x]=j.useState(0),[g,m]=j.useState(!1);at(!0,s);const y=e[a],w=y==null?void 0:y.frames[u],v=()=>{u<y.frames.length-1?x(u+1):a<e.length-1?(c(a+1),x(0)):s()},b=()=>{u>0?x(u-1):a>0&&(c(a-1),x(0))};return j.useEffect(()=>{if(g)return;const f=window.setTimeout(v,4200);return()=>window.clearTimeout(f)}),w?n.jsxs("div",{className:"ig-sv",onPointerDown:()=>m(!0),onPointerUp:()=>m(!1),children:[n.jsxs("div",{className:"ig-sv-img",children:[n.jsx(Xe,{src:w.src,emoji:w.emoji,tint:w.tint}),w.text&&n.jsx("p",{className:"ig-sv-text",children:l(w.text)})]}),n.jsxs("div",{className:"ig-sv-top",children:[n.jsx("div",{className:"ig-sv-bars",children:y.frames.map((f,p)=>n.jsx("span",{children:n.jsx("i",{className:p<u?"full":p===u?g?"run paused":"run":""},`${a}-${u}-${p}`)},p))}),n.jsxs("div",{className:"ig-sv-who",children:[n.jsx(Te,{size:32,radius:16,src:(h=o.extra.instagram.users[y.by])==null?void 0:h.avatar}),n.jsx("b",{children:y.by}),n.jsx("small",{children:Oa(r,r,i)}),n.jsx("button",{onClick:s,"aria-label":"close",children:n.jsx(N,{n:"close",size:26,w:2})})]})]}),n.jsx("button",{className:"ig-sv-prev",onClick:b,"aria-label":"prev"}),n.jsx("button",{className:"ig-sv-next",onClick:v,"aria-label":"next"}),n.jsxs("div",{className:"ig-sv-reply",children:[n.jsx("span",{children:l({ko:"메시지 보내기",zh:"傳送訊息"})}),n.jsx(N,{n:"heart",size:26,w:1.8}),n.jsx(N,{n:"send",size:26,w:1.8})]})]}):null}function Br({handle:e,onBack:t,onHighlight:s}){const{story:o}=se(),{t:r}=Q(),l=o.extra.instagram,i=l.users[e],a=e===l.me,[c,u]=j.useState(!0),[x,g]=j.useState(null),[m,y]=j.useState(null);at(!!t&&!x,()=>t==null?void 0:t()),at(!!x&&!m,()=>g(null));const w=l.feed.filter(b=>b.by===e).sort((b,h)=>q(h.at)-q(b.at)),v=w.map(b=>b.pic);return m&&m!==e?n.jsx(Br,{handle:m,onBack:()=>y(null),onHighlight:s}):x?n.jsxs("div",{className:"ig-scroll ig-post-page",children:[n.jsxs("div",{className:"ig-prof-top",children:[n.jsx("button",{onClick:()=>g(null),"aria-label":"back",children:n.jsx(N,{n:"back",size:26,w:2.2})}),n.jsxs("b",{className:"ig-post-page-title",children:[n.jsx("small",{children:e}),r({ko:"게시물",zh:"貼文"})]}),n.jsx("span",{})]}),w.slice(w.indexOf(x)).map(b=>n.jsx(Ua,{post:b,onUser:h=>h===e?g(null):y(h)},b.id))]}):n.jsxs("div",{className:"ig-scroll",children:[n.jsxs("div",{className:"ig-prof-top",children:[t?n.jsx("button",{onClick:t,"aria-label":"back",children:n.jsx(N,{n:"back",size:26,w:2.2})}):n.jsx(N,{n:"lock",size:18}),n.jsx("b",{children:e}),n.jsxs("span",{children:[n.jsx(N,{n:"plusSquare",size:25,w:1.8}),n.jsx(N,{n:"menu",size:25,w:1.8})]})]}),n.jsxs("div",{className:"ig-prof",children:[n.jsx(Aa,{size:82,seen:!0,children:n.jsx(Te,{size:82,radius:41,src:(i==null?void 0:i.avatar)??(a?o.owner.avatar:void 0)})}),n.jsxs("div",{className:"ig-counts",children:[n.jsxs("span",{children:[n.jsx("b",{children:(i==null?void 0:i.posts)??v.length}),r({ko:"게시물",zh:"貼文"})]}),n.jsxs("span",{children:[n.jsx("b",{children:i==null?void 0:i.followers}),r({ko:"팔로워",zh:"粉絲"})]}),n.jsxs("span",{children:[n.jsx("b",{children:i==null?void 0:i.following}),r({ko:"팔로잉",zh:"追蹤中"})]})]})]}),n.jsxs("div",{className:"ig-bio",children:[n.jsx("b",{children:i?r(i.name):e}),(i==null?void 0:i.bio)&&n.jsx("p",{children:r(i.bio)})]}),n.jsx("div",{className:"ig-prof-btns",children:a?n.jsxs(n.Fragment,{children:[n.jsx("button",{children:r({ko:"프로필 편집",zh:"編輯個人檔案"})}),n.jsx("button",{children:r({ko:"프로필 공유",zh:"分享個人檔案"})})]}):n.jsxs(n.Fragment,{children:[n.jsx("button",{className:c?"":"blue",onClick:()=>u(b=>!b),children:r(c?{ko:"팔로잉 ⌄",zh:"追蹤中 ⌄"}:{ko:"팔로우",zh:"追蹤"})}),n.jsx("button",{children:r({ko:"메시지",zh:"訊息"})})]})}),a&&n.jsx("div",{className:"ig-highlights",children:l.highlights.map((b,h)=>n.jsxs("button",{onClick:()=>s(b.frames),children:[n.jsx("span",{children:n.jsx(Xe,{src:b.frames[0].src,emoji:b.frames[0].emoji,tint:b.frames[0].tint})}),n.jsx("small",{children:r(b.title)})]},h))}),n.jsxs("div",{className:"ig-prof-tabs",children:[n.jsx("span",{className:"on",children:n.jsx(N,{n:"apps",size:22})}),n.jsx("span",{children:n.jsx(N,{n:"video",size:22})}),n.jsx("span",{children:n.jsx(N,{n:"person",size:22})})]}),n.jsxs("div",{className:"ig-grid",children:[v.map((b,h)=>n.jsxs("button",{className:"ig-grid-item",onClick:()=>g(w[h]),"aria-label":`post ${h+1}`,children:[n.jsx(Xe,{src:b.src,emoji:b.emoji,tint:b.tint}),w[h].comments.length>0&&n.jsxs("span",{className:"ig-grid-badge",children:[n.jsx(N,{n:"bubble",size:12,w:2})," ",w[h].comments.length]})]},w[h].id)),v.length===0&&n.jsx("p",{className:"ig-grid-empty",children:r({ko:"게시물 없음",zh:"尚無貼文"})})]})]})}function Km(){const{story:e}=se(),{t}=Q(),s=[...e.extra.instagram.feed].sort((a,c)=>c.likes-a.likes),[o,r]=j.useState(null),[l,i]=j.useState(null);return at(!!o&&!l,()=>r(null)),l?n.jsx(Br,{handle:l,onBack:()=>i(null),onHighlight:()=>{}}):o?n.jsxs("div",{className:"ig-scroll ig-post-page",children:[n.jsxs("div",{className:"ig-prof-top",children:[n.jsx("button",{onClick:()=>r(null),"aria-label":"back",children:n.jsx(N,{n:"back",size:26,w:2.2})}),n.jsx("b",{className:"ig-post-page-title",children:t({ko:"탐색 탭",zh:"探索"})}),n.jsx("span",{})]}),n.jsx(Ua,{post:o,onUser:i})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"ig-search",children:[n.jsx(N,{n:"search",size:17}),n.jsx("span",{children:t({ko:"검색",zh:"搜尋"})})]}),n.jsx("div",{className:"ig-scroll",children:n.jsx("div",{className:"ig-grid explore",children:s.map(a=>n.jsx("button",{className:"ig-grid-item",onClick:()=>r(a),children:n.jsx(Xe,{src:a.pic.src,emoji:a.pic.emoji,tint:a.pic.tint})},a.id))})})]})}function Ym({onClose:e}){const{story:t}=se(),{t:s}=Q(),o=t.extra.instagram;at(!0,e);const r=o.feed.flatMap(l=>l.comments.filter(i=>i.by!==o.me).map(i=>({by:i.by,text:i.text,pic:l.pic})));return n.jsxs("div",{className:"ig",children:[n.jsx(_e,{}),n.jsxs("div",{className:"ig-sub-head",children:[n.jsx("button",{onClick:e,"aria-label":"back",children:n.jsx(N,{n:"back",size:26,w:2.2})}),n.jsx("b",{children:s({ko:"알림",zh:"通知"})}),n.jsx("span",{})]}),n.jsxs("div",{className:"ig-scroll",children:[n.jsx("h4",{className:"ig-h4",children:s({ko:"이번 주",zh:"本週"})}),r.map((l,i)=>{var a;return n.jsxs("div",{className:"ig-act",children:[n.jsx(Te,{size:44,radius:22,src:(a=o.users[l.by])==null?void 0:a.avatar}),n.jsxs("p",{children:[n.jsx("b",{children:l.by}),s({ko:"님이 댓글을 남겼습니다: ",zh:" 留言："}),s(l.text)]}),n.jsx("span",{className:"ig-act-pic",children:n.jsx(Xe,{src:l.pic.src,emoji:l.pic.emoji,tint:l.pic.tint})})]},i)})]})]})}function Gm({open:e,onOpen:t,onClose:s}){var M,S,_,T;const{story:o,clock:r}=se(),{t:l,lang:i}=Q(),a=o.extra.instagram,[c,u]=j.useState({}),[x,g]=j.useState(null),[m,y]=j.useState(""),w=j.useRef({}),v=($,W)=>{var Re;const le=(Re=il[o.id])==null?void 0:Re[Hm[$]??""];if(!le)return;const de=w.current[$]??0;w.current[$]=de+1;const He=Ra(le,W,de);window.setTimeout(()=>g($),1200),He.forEach((ct,K)=>{window.setTimeout(()=>{u(D=>({...D,[$]:[...D[$]??[],{me:!1,text:ct}]})),T2(),K===He.length-1&&g(null)},2800+K*1800)})};at(!0,()=>e?t("list"):s());const[b,h]=j.useState([]),[f,p]=j.useState(!1),z=j.useRef(null),C=a.dms.find($=>$.with===e);if(j.useEffect(()=>{e&&h(W=>W.includes(e)?W:[...W,e]);const $=z.current;$&&($.scrollTop=$.scrollHeight)},[e,c,x]),C){const $=c[C.with]??[];return n.jsxs("div",{className:"ig",children:[n.jsx(_e,{}),n.jsxs("div",{className:"ig-sub-head",children:[n.jsx("button",{onClick:()=>t("list"),"aria-label":"back",children:n.jsx(N,{n:"back",size:26,w:2.2})}),n.jsxs("span",{className:"ig-dm-who",children:[n.jsx(Te,{size:30,radius:15,src:(M=a.users[C.with])==null?void 0:M.avatar}),n.jsx("b",{children:l(((S=a.users[C.with])==null?void 0:S.name)??C.with)})]}),n.jsxs("span",{children:[n.jsx(N,{n:"phone",size:23}),n.jsx(N,{n:"video",size:25})]})]}),n.jsxs("div",{className:"ig-thread",ref:z,children:[n.jsxs("div",{className:"ig-thread-intro",children:[n.jsx(Te,{size:90,radius:45,src:(_=a.users[C.with])==null?void 0:_.avatar}),n.jsx("b",{children:l(((T=a.users[C.with])==null?void 0:T.name)??C.with)}),n.jsxs("small",{children:[C.with," · Instagram"]})]}),C.messages.map((W,le)=>{const de=C.messages[le-1],He=!de||q(W.at)-q(de.at)>60*60*1e3,Re=C.messages[le+1],ct=!Re||Re.from!==W.from||q(Re.at)-q(W.at)>60*60*1e3;return n.jsxs("div",{className:"ig-bub-wrap",children:[He&&n.jsx("small",{className:"ig-dm-time",children:Mi(W.at,r)?Ye(W.at,i):`${xn(W.at,r,i)} ${Ye(W.at,i)}`}),n.jsx("div",{className:`ig-bub ${W.from===a.me?"me":""} ${ct?"tail":""}`,children:l(W.text)})]},le)}),$.map((W,le)=>n.jsx("div",{className:`ig-bub fade-in ${W.me?"me":""}`,children:l(W.text)},`s${le}`)),$.length>0&&$[$.length-1].me&&n.jsx("small",{className:"ig-seen",children:l(x?{ko:"읽음",zh:"已讀"}:{ko:"보냄",zh:"已傳送"})}),x===C.with&&n.jsxs("div",{className:"ig-bub ig-typing",children:[n.jsx("i",{}),n.jsx("i",{}),n.jsx("i",{})]})]}),n.jsxs("form",{className:"ig-dm-input",onSubmit:W=>{if(W.preventDefault(),!m.trim())return;const le=m.trim();u(de=>({...de,[C.with]:[...de[C.with]??[],{me:!0,text:le}]})),y(""),v(C.with,le)},children:[n.jsx("span",{className:"ig-cam",children:n.jsx(N,{n:"camera",size:20})}),n.jsx("input",{value:m,onChange:W=>y(W.target.value),placeholder:l({ko:"메시지 보내기...",zh:"傳送訊息⋯"})}),m.trim()?n.jsx("button",{children:l({ko:"보내기",zh:"傳送"})}):n.jsx(N,{n:"mic",size:22})]})]})}return n.jsxs("div",{className:"ig",children:[n.jsx(_e,{}),n.jsxs("div",{className:"ig-sub-head",children:[n.jsx("button",{onClick:s,"aria-label":"back",children:n.jsx(N,{n:"back",size:26,w:2.2})}),n.jsx("b",{children:a.me}),n.jsx(N,{n:"compose",size:24})]}),n.jsxs("div",{className:"ig-search",children:[n.jsx(N,{n:"search",size:17}),n.jsx("span",{children:l({ko:"검색",zh:"搜尋"})})]}),n.jsxs("div",{className:"ig-scroll",children:[n.jsxs("div",{className:"ig-dm-tabs",children:[n.jsx("button",{className:f?"":"on",onClick:()=>p(!1),children:l({ko:"메시지",zh:"訊息"})}),n.jsx("button",{className:f?"on":"",onClick:()=>p(!0),children:l({ko:`요청 (${a.dms.filter($=>$.request).length})`,zh:`訊息請求（${a.dms.filter($=>$.request).length}）`})})]}),a.dms.filter($=>!!$.request===f).sort(($,W)=>q(W.messages[W.messages.length-1].at)-q($.messages[$.messages.length-1].at)).map($=>{var de,He;const W=$.messages[$.messages.length-1],le=$.unread&&!b.includes($.with);return n.jsxs("button",{className:`ig-dm-row ${le?"unread":""}`,onClick:()=>t($.with),children:[n.jsx(Te,{size:56,radius:28,src:(de=a.users[$.with])==null?void 0:de.avatar}),n.jsxs("span",{children:[n.jsx("b",{children:l(((He=a.users[$.with])==null?void 0:He.name)??$.with)}),n.jsxs("small",{children:[W.from===a.me?l({ko:"나: ",zh:"我："}):"",l(W.text)," · ",xn(W.at,r,i)]})]}),le?n.jsx("i",{className:"ig-dm-dot"}):n.jsx(N,{n:"camera",size:22})]},$.with)})]})]})}function Xm(){const{story:e,clock:t}=se(),{discover:s}=ye(),{t:o}=Q(),r=e.extra.x,[l,i]=j.useState(r.mine[0]),[a,c]=j.useState("home"),[u,x]=j.useState("for"),[g,m]=j.useState(null),[y,w]=j.useState(!1),[v,b]=j.useState(!1),[h,f]=j.useState([]),[p,z]=j.useState("");at(!!g,()=>m(null));const C=_=>{i(_),w(!1),m(_),_===r.mine[1]&&s("x-diary")},M=[...r.timeline,...h.filter(_=>_.by===r.mine[0])].sort((_,T)=>q(T.at)-q(_.at)),S=M.filter(_=>r.mine.includes(_.by)||_.by==="yudoz_moment");return n.jsxs("div",{className:"xa",children:[n.jsx(_e,{}),g?n.jsx(Zm,{handle:g,extra:h.filter(_=>_.by===g),onBack:()=>m(null),onUser:m}):n.jsxs(n.Fragment,{children:[a==="home"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"x-head",children:[n.jsx("button",{onClick:()=>w(!0),"aria-label":"accounts",children:n.jsx(Te,{size:32,radius:16})}),n.jsx("span",{className:"x-logo",children:n.jsx("svg",{viewBox:"0 0 60 60",width:"26",height:"26",children:n.jsx("path",{fill:"currentColor",d:"M38.2 15h4.9L32.4 27.2 45 45h-9.8l-7.7-10.1L18.7 45h-4.9l11.4-13.1L13 15h10l7 9.2zm-1.7 27.1h2.7L21.7 17.8h-2.9z"})})}),n.jsx("span",{className:"x-upgrade",children:o({ko:"업그레이드",zh:"升級"})})]}),n.jsxs("div",{className:"x-tabs",children:[n.jsx("button",{className:u==="for"?"on":"",onClick:()=>x("for"),children:n.jsx("span",{children:o({ko:"추천",zh:"為你推薦"})})}),n.jsx("button",{className:u==="following"?"on":"",onClick:()=>x("following"),children:n.jsx("span",{children:o({ko:"팔로우 중",zh:"跟隨中"})})})]}),n.jsx("div",{className:"x-scroll",children:(u==="for"?M:S).map(_=>n.jsx(V2,{tw:_,onUser:m},_.id))})]}),a==="search"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"x-searchbar",children:[n.jsx(N,{n:"search",size:16}),n.jsx("span",{children:o({ko:"검색",zh:"搜尋"})})]}),n.jsxs("div",{className:"x-scroll",children:[n.jsx("h3",{className:"x-h3",children:o({ko:"대한민국 트렌드",zh:"韓國趨勢"})}),r.trends.map((_,T)=>n.jsxs("div",{className:"x-trend",children:[n.jsx("small",{children:o({ko:`${T+1} · 엔터테인먼트 · 실시간 트렌드`,zh:`${T+1} · 娛樂 · 熱門趨勢`})}),n.jsx("b",{children:o(_.tag)}),n.jsx("small",{children:o(_.count)})]},T))]})]}),a==="bell"&&n.jsxs("div",{className:"x-scroll",children:[n.jsx("h3",{className:"x-h3",children:o({ko:"알림",zh:"通知"})}),r.timeline.slice(0,3).map(_=>{var T;return n.jsxs("div",{className:"x-notif",children:[n.jsx(N,{n:"heart",size:24,style:{fill:"#f91880",color:"#f91880"}}),n.jsxs("p",{children:[n.jsx("b",{children:o(((T=r.accounts[_.by])==null?void 0:T.name)??_.by)}),o({ko:" 님 외 여러 명이 내 게시물을 마음에 들어 합니다",zh:" 和其他人喜歡了你的貼文"})]})]},_.id)})]}),a==="mail"&&n.jsxs("div",{className:"x-scroll",children:[n.jsx("h3",{className:"x-h3",children:o({ko:"쪽지",zh:"私訊"})}),n.jsx("p",{className:"muted center",children:o({ko:"아직 쪽지가 없습니다",zh:"還沒有私訊"})})]}),n.jsx("button",{className:"x-fab",onClick:()=>b(!0),"aria-label":"post",children:n.jsx(N,{n:"plus",size:26,w:2.6})})]}),n.jsx("nav",{className:"x-nav",children:["home","search","bell","mail"].map(_=>n.jsx("button",{className:a===_&&!g?"on":"",onClick:()=>{m(null),c(_)},children:n.jsx(N,{n:_==="home"?"home":_==="search"?"search":_==="bell"?"bell":"mail",size:26,w:a===_?2.4:1.8})},_))}),y&&n.jsx("div",{className:"sheet-bg",onClick:()=>w(!1),children:n.jsxs("div",{className:"sheet",onClick:_=>_.stopPropagation(),children:[n.jsx("span",{className:"sheet-grab"}),n.jsx("h4",{children:o({ko:"계정 전환",zh:"切換帳號"})}),r.mine.map(_=>n.jsxs("button",{className:"x-acc",onClick:()=>C(_),children:[n.jsx(Te,{size:40,radius:20}),n.jsxs("span",{children:[n.jsxs("b",{children:[o(r.accounts[_].name)," ",r.accounts[_].locked&&n.jsx(N,{n:"lock",size:13})]}),n.jsxs("small",{children:["@",_]})]}),l===_&&n.jsx(N,{n:"check",size:20,w:2.6,className:"x-blue"})]},_))]})}),v&&n.jsxs("div",{className:"x-compose",children:[n.jsx(_e,{}),n.jsxs("div",{className:"x-compose-head",children:[n.jsx("button",{onClick:()=>b(!1),children:o({ko:"취소",zh:"取消"})}),n.jsx("button",{className:"x-post",disabled:!p.trim(),onClick:()=>{f(_=>[..._,{id:`my-${Date.now()}`,by:l,text:p.trim(),at:t,likes:0,rts:0,replies:0}]),z(""),b(!1),m(l)},children:o({ko:"게시하기",zh:"發佈"})})]}),n.jsxs("div",{className:"x-compose-body",children:[n.jsx(Te,{size:40,radius:20}),n.jsx("textarea",{autoFocus:!0,value:p,onChange:_=>z(_.target.value),placeholder:o({ko:"무슨 일이 일어나고 있나요?",zh:"有什麼新鮮事？"})})]}),n.jsxs("small",{className:"x-compose-as",children:["@",l]})]})]})}function V2({tw:e,onUser:t}){const{story:s,clock:o}=se(),{t:r,lang:l}=Q(),i=s.extra.x.accounts[e.by],[a,c]=j.useState(!1),[u,x]=j.useState(!1);return n.jsxs("article",{className:"tweet",children:[n.jsx("button",{onClick:()=>t(e.by),"aria-label":e.by,children:n.jsx(Te,{size:40,radius:20,src:i==null?void 0:i.avatar})}),n.jsxs("div",{className:"tweet-main",children:[n.jsxs("div",{className:"tweet-head",children:[n.jsx("b",{children:i?r(i.name):e.by}),(i==null?void 0:i.locked)&&n.jsx(N,{n:"lock",size:12}),n.jsxs("small",{children:["@",e.by," · ",Oa(e.at,o,l)]})]}),n.jsx("p",{children:r(e.text)}),e.pic&&n.jsx("div",{className:"tweet-pic",children:n.jsx(Xe,{src:e.pic.src,emoji:e.pic.emoji,tint:e.pic.tint})}),n.jsxs("div",{className:"tweet-actions",children:[n.jsxs("span",{children:[n.jsx(N,{n:"bubble",size:17,w:1.8}),e.replies?er(e.replies,l):""]}),n.jsxs("button",{className:u?"rt":"",onClick:()=>x(g=>!g),children:[n.jsx(N,{n:"repeat",size:17,w:1.8}),e.rts+(u?1:0)?er(e.rts+(u?1:0),l):""]}),n.jsxs("button",{className:a?"liked":"",onClick:()=>c(g=>!g),children:[n.jsx(N,{n:"heart",size:17,w:1.8,style:a?{fill:"#f91880"}:void 0}),e.likes+(a?1:0)?er(e.likes+(a?1:0),l):""]}),n.jsxs("span",{children:[n.jsx(N,{n:"chart",size:17,w:1.8}),e.likes?er(e.likes*9,l):""]}),n.jsx(N,{n:"share",size:17,w:1.8})]})]})]})}function Zm({handle:e,extra:t,onBack:s,onUser:o}){const{story:r}=se(),{t:l}=Q(),i=r.extra.x,a=i.accounts[e],c=[...i.posts[e]??i.timeline.filter(u=>u.by===e),...t].sort((u,x)=>q(x.at)-q(u.at));return n.jsxs("div",{className:"x-scroll x-prof-wrap",children:[n.jsx("div",{className:"x-banner",children:n.jsx("button",{onClick:s,"aria-label":"back",children:n.jsx(N,{n:"back",size:20,w:2.6})})}),n.jsxs("div",{className:"x-prof",children:[n.jsx(Te,{size:78,radius:39,src:a==null?void 0:a.avatar}),n.jsx("button",{className:"x-edit",children:i.mine.includes(e)?l({ko:"프로필 수정",zh:"編輯個人資料"}):l({ko:"팔로우",zh:"跟隨"})}),n.jsxs("h2",{children:[a?l(a.name):e," ",(a==null?void 0:a.locked)&&n.jsx(N,{n:"lock",size:16})]}),n.jsxs("small",{children:["@",e]}),(a==null?void 0:a.bio)&&n.jsx("p",{children:l(a.bio)}),n.jsxs("div",{className:"x-follow",children:[n.jsxs("span",{children:[n.jsx("b",{children:a==null?void 0:a.following})," ",l({ko:"팔로우 중",zh:"跟隨中"})]}),n.jsxs("span",{children:[n.jsx("b",{children:a==null?void 0:a.followers})," ",l({ko:"팔로워",zh:"跟隨者"})]})]}),(a==null?void 0:a.locked)&&n.jsx("div",{className:"x-locked-note",children:l({ko:"🔒 비공개 계정 · 승인된 팔로워만 볼 수 있어요",zh:"🔒 不公開帳號 · 只有獲准的跟隨者看得到"})})]}),n.jsxs("div",{className:"x-tabs",children:[n.jsx("button",{className:"on",children:n.jsx("span",{children:l({ko:"게시물",zh:"貼文"})})}),n.jsx("button",{children:n.jsx("span",{children:l({ko:"답글",zh:"回覆"})})}),n.jsx("button",{children:n.jsx("span",{children:l({ko:"미디어",zh:"媒體"})})})]}),c.map(u=>n.jsx(V2,{tw:u,onUser:o},u.id)),c.length===0&&n.jsx("p",{className:"muted center",children:l({ko:"아직 게시물이 없습니다",zh:"還沒有貼文"})})]})}const Rl=e=>`${Math.floor(e/60)}:${Ae(Math.floor(e%60))}`;function Jm(){const{story:e}=se(),{now:t,setNow:s}=ye(),{t:o}=Q(),r=e.extra.music,[l,i]=j.useState("library"),[a,c]=j.useState(null),[u,x]=j.useState(!1),g=r.find(h=>h.id===(a??"")),m=t?r.find(h=>h.id===t.playlist):null,y=m&&t?m.songs[t.index]:null;j.useEffect(()=>{!t||!m||!y||t.pos>=y.dur&&s({...t,index:(t.index+1)%m.songs.length,pos:0})},[t,m,y,s]);const w=(h,f)=>s({playlist:h,index:f,playing:!0,pos:0}),v=n.jsx(al,{tabs:[{id:"listen",label:{ko:"지금 듣기",zh:"立即聆聽"},icon:"play"},{id:"library",label:{ko:"보관함",zh:"資料庫"},icon:"album"},{id:"search",label:A.search,icon:"search"}],value:l,onChange:h=>{i(h),c(null)},tint:"#fa2d48"}),b=y&&m&&n.jsxs("button",{className:"mu-mini",onClick:()=>x(!0),children:[n.jsx("span",{className:"mu-mini-art",children:n.jsx(Xe,{emoji:m.pic.emoji,tint:m.pic.tint})}),n.jsx("b",{children:y.title}),n.jsx("span",{onClick:h=>{h.stopPropagation(),s({...t,playing:!t.playing})},children:n.jsx(N,{n:t.playing?"pause":"play",size:24})}),n.jsx("span",{onClick:h=>{h.stopPropagation(),s({...t,index:(t.index+1)%m.songs.length,pos:0})},children:n.jsx(N,{n:"forward",size:24})})]});return n.jsxs(n.Fragment,{children:[g?n.jsxs(be,{title:"",onBack:()=>c(null),backLabel:{ko:"보관함",zh:"資料庫"},tint:"#fa2d48",bg:"#fff",bottom:v,children:[n.jsxs("div",{className:"mu-pl-head",children:[n.jsx("span",{className:"mu-cover",children:n.jsx(Xe,{emoji:g.pic.emoji,tint:g.pic.tint})}),n.jsx("h2",{children:o(g.title)}),n.jsx("small",{children:o(g.by)}),n.jsxs("div",{className:"mu-pl-btns",children:[n.jsxs("button",{onClick:()=>w(g.id,0),children:[n.jsx(N,{n:"play",size:18})," ",o({ko:"재생",zh:"播放"})]}),n.jsxs("button",{onClick:()=>w(g.id,Math.floor(Math.random()*g.songs.length)),children:[n.jsx(N,{n:"shuffle",size:18})," ",o({ko:"셔플",zh:"隨機播放"})]})]})]}),n.jsx("div",{className:"mu-songs",children:g.songs.map((h,f)=>{const p=(t==null?void 0:t.playlist)===g.id&&t.index===f;return n.jsxs("button",{className:`mu-song ${p?"on":""}`,onClick:()=>w(g.id,f),children:[n.jsx("span",{className:"mu-idx",children:p?n.jsxs("span",{className:"mu-eq",children:[n.jsx("i",{}),n.jsx("i",{}),n.jsx("i",{})]}):f+1}),n.jsxs("span",{children:[n.jsx("b",{children:h.title}),n.jsx("small",{children:h.artist})]}),n.jsx("small",{children:Rl(h.dur)})]},f)})}),n.jsx("div",{style:{height:70}})]}):l==="library"?n.jsxs(be,{title:{ko:"보관함",zh:"資料庫"},large:!0,tint:"#fa2d48",bg:"#fff",bottom:v,children:[n.jsx("div",{className:"group-box flat",children:[{ko:"플레이리스트",zh:"播放列表"},{ko:"아티스트",zh:"藝人"},{ko:"앨범",zh:"專輯"},{ko:"노래",zh:"歌曲"}].map((h,f)=>n.jsxs("div",{className:"cell mu-cat",children:[n.jsx("span",{className:"cell-main tint",children:o(h)}),n.jsx(N,{n:"chevron",size:15,w:2.6,className:"cell-chev"})]},f))}),n.jsx("h3",{className:"group-h big",children:o({ko:"최근 추가된 항목",zh:"最近加入"})}),n.jsx("div",{className:"mu-grid",children:r.map(h=>n.jsxs("button",{onClick:()=>c(h.id),children:[n.jsx("span",{className:"mu-cover",children:n.jsx(Xe,{emoji:h.pic.emoji,tint:h.pic.tint})}),n.jsx("b",{children:o(h.title)}),n.jsx("small",{children:o(h.by)})]},h.id))}),n.jsx("div",{style:{height:70}})]}):l==="listen"?n.jsxs(be,{title:{ko:"지금 듣기",zh:"立即聆聽"},large:!0,tint:"#fa2d48",bg:"#fff",bottom:v,children:[n.jsx("h3",{className:"group-h big",children:o({ko:"최근 재생한 항목",zh:"最近播放"})}),n.jsx("div",{className:"mu-row",children:r.map(h=>n.jsxs("button",{onClick:()=>c(h.id),children:[n.jsx("span",{className:"mu-cover big",children:n.jsx(Xe,{emoji:h.pic.emoji,tint:h.pic.tint})}),n.jsx("b",{children:o(h.title)})]},h.id))})]}):n.jsx(be,{title:A.search,large:!0,tint:"#fa2d48",bg:"#fff",bottom:v,search:{ko:"아티스트, 노래, 가사 등",zh:"藝人、歌曲、歌詞等"},children:n.jsx("div",{className:"mu-cats",children:["K-Pop","Chill","Workout","Sleep"].map((h,f)=>n.jsx("span",{style:{background:["#7e57c2","#26a69a","#ef5350","#283593"][f]},children:h},h))})}),b,u&&y&&m&&t&&n.jsxs("div",{className:"mu-full",children:[n.jsx("button",{className:"mu-grab",onClick:()=>x(!1),"aria-label":"close",children:n.jsx("span",{})}),n.jsx("span",{className:`mu-art ${t.playing?"":"paused"}`,children:n.jsx(Xe,{emoji:m.pic.emoji,tint:m.pic.tint})}),n.jsxs("div",{className:"mu-meta",children:[n.jsx("b",{children:y.title}),n.jsx("small",{children:y.artist})]}),n.jsx("input",{type:"range",className:"mu-prog",min:0,max:y.dur,value:Math.min(t.pos,y.dur),onChange:h=>s({...t,pos:Number(h.target.value)})}),n.jsxs("div",{className:"mu-times",children:[n.jsx("small",{children:Rl(t.pos)}),n.jsxs("small",{children:["-",Rl(Math.max(0,y.dur-t.pos))]})]}),n.jsxs("div",{className:"mu-ctrl",children:[n.jsx("button",{onClick:()=>s({...t,index:(t.index-1+m.songs.length)%m.songs.length,pos:0}),"aria-label":"prev",children:n.jsx(N,{n:"rewind",size:34})}),n.jsx("button",{onClick:()=>s({...t,playing:!t.playing}),"aria-label":"play",children:n.jsx(N,{n:t.playing?"pause":"play",size:46})}),n.jsx("button",{onClick:()=>s({...t,index:(t.index+1)%m.songs.length,pos:0}),"aria-label":"next",children:n.jsx(N,{n:"forward",size:34})})]}),n.jsx("p",{className:"mu-note",children:o({ko:"※ 이 웹사이트에서는 실제 음원이 재생되지 않습니다.",zh:"※ 本網站不會播放實際音源。"})})]})]})}function ep(){const{story:e}=se(),{t}=Q(),s=e.extra.places,o=s[0],[r,l]=j.useState(null),[i,a]=j.useState(!1),[c,u]=j.useState({x:0,y:0}),[x,g]=j.useState({x:0,y:0}),[m,y]=j.useState(!1),[w,v]=j.useState(0),b=An({onMove:(p,z)=>v(z),onEnd:(p,z,C)=>{v(0),z<-30||C<-.4?y(!0):z>30||C>.4?(y(!1),l(null),a(!1)):Math.abs(z)<6&&y(M=>!M)}});at(!!r,()=>{l(null),a(!1)});const h=An({onMove:(p,z)=>g({x:p,y:z}),onEnd:(p,z)=>{u(C=>({x:Math.max(-160,Math.min(160,C.x+p)),y:Math.max(-200,Math.min(200,C.y+z))})),g({x:0,y:0})}}),f=r?Math.round(Math.hypot(r.x-o.x,r.y-o.y)*22):0;return n.jsxs("div",{className:"map",children:[n.jsxs("div",{className:"map-canvas",...h,style:{transform:`translate(${c.x+x.x}px, ${c.y+x.y}px)`},children:[n.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",className:"map-svg",children:[n.jsx("rect",{width:"100",height:"100",fill:"#f1efe9"}),n.jsx("path",{d:"M-5 58 Q30 50 55 62 T110 56",stroke:"#a8d4f5",strokeWidth:"7",fill:"none"}),n.jsx("rect",{x:"6",y:"6",width:"20",height:"14",rx:"2",fill:"#cfe8c4"}),n.jsx("rect",{x:"74",y:"80",width:"22",height:"16",rx:"2",fill:"#cfe8c4"}),[18,38,62,84].map(p=>n.jsx("line",{x1:p,y1:"-5",x2:p+4,y2:"105",stroke:"#fff",strokeWidth:"2.2"},`v${p}`)),[14,34,78,92].map(p=>n.jsx("line",{x1:"-5",y1:p,x2:"105",y2:p-3,stroke:"#fff",strokeWidth:"2.2"},`h${p}`)),n.jsx("line",{x1:"-5",y1:"44",x2:"105",y2:"40",stroke:"#fde68a",strokeWidth:"3.6"}),i&&r&&n.jsx("path",{d:`M${o.x} ${o.y} L${o.x} ${r.y} L${r.x} ${r.y}`,stroke:"#0a84ff",strokeWidth:"1.6",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.map(p=>n.jsxs("button",{className:`map-pin ${(r==null?void 0:r.id)===p.id?"on":""}`,style:{left:`${p.x}%`,top:`${p.y}%`},onPointerDown:z=>z.stopPropagation(),onClick:()=>{l(p),a(!1)},children:[n.jsx("span",{children:n.jsx("i",{children:p.emoji})}),n.jsx("small",{children:t(p.name)})]},p.id)),n.jsx("span",{className:"map-me",style:{left:`${o.x}%`,top:`${o.y+4}%`}})]}),n.jsx("div",{className:"map-top",children:n.jsx(_e,{})}),n.jsxs("div",{className:"map-tools",children:[n.jsx("span",{children:n.jsx(N,{n:"globe",size:20})}),n.jsx("button",{onClick:()=>{u({x:0,y:0})},"aria-label":"locate",children:n.jsx(N,{n:"location",size:18})})]}),n.jsxs("div",{className:`map-sheet ${m||r?"up":""}`,style:w?{transform:`translateY(calc(${m||r?"0px":"100% - 168px"} + ${Math.max(m||r?0:-9999,w)}px))`,transition:"none"}:void 0,children:[n.jsx("div",{className:"map-handle",...b,children:n.jsx("span",{className:"sheet-grab"})}),r?n.jsxs("div",{className:"map-card",children:[n.jsxs("div",{className:"map-card-head",children:[n.jsxs("span",{children:[n.jsx("b",{children:t(r.name)}),n.jsx("small",{children:t(r.kind)})]}),n.jsx("button",{onClick:()=>{l(null),a(!1)},"aria-label":"close",children:n.jsx(N,{n:"close",size:16,w:2.6})})]}),n.jsxs("div",{className:"map-card-btns",children:[n.jsxs("button",{className:"blue",onClick:()=>a(!0),children:[n.jsx(N,{n:"route",size:18}),t({ko:`도보 ${Math.max(3,Math.round(f/70))}분`,zh:`步行 ${Math.max(3,Math.round(f/70))} 分鐘`})]}),n.jsxs("button",{children:[n.jsx(N,{n:"phone",size:18}),t(A.phone)]}),n.jsx("button",{children:n.jsx(N,{n:"share",size:18})})]}),n.jsxs("p",{className:"map-note",children:["📝 ",t(r.note)]}),i&&n.jsx("p",{className:"map-route",children:t({ko:`숙소에서 ${f}m · 경로를 표시했어요`,zh:`距離宿舍 ${f} 公尺 · 已顯示路線`})})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"searchfield map-search",...b,children:[n.jsx(N,{n:"search",size:16,w:2.4}),n.jsx("span",{children:t({ko:"지도 검색",zh:"搜尋地圖"})}),n.jsx(N,{n:"mic",size:16})]}),n.jsx("h4",{className:"map-h4",children:t({ko:"즐겨찾기",zh:"常用"})}),n.jsx("div",{className:"map-favs",children:s.slice(0,4).map(p=>n.jsxs("button",{onClick:()=>l(p),children:[n.jsx("span",{children:p.emoji}),n.jsx("small",{children:t(p.name)})]},p.id))}),n.jsx("h4",{className:"map-h4",children:t({ko:"최근 항목",zh:"最近"})}),s.map(p=>n.jsxs("button",{className:"map-row",onClick:()=>l(p),children:[n.jsx("span",{children:p.emoji}),n.jsxs("span",{children:[n.jsx("b",{children:t(p.name)}),n.jsx("small",{children:t(p.note)})]})]},p.id))]})]})]})}function tp(){const{story:e,clock:t}=se(),{discover:s}=ye(),{t:o,lang:r}=Q(),[l,i]=j.useState(null),[a,c]=j.useState(null),[u,x]=j.useState([]),g=e.extra.mails,m=g.filter(w=>(w.box??"inbox")==="inbox").sort((w,v)=>q(v.at)-q(w.at)),y=g.filter(w=>w.box==="draft");if(a)return n.jsx(be,{title:"",onBack:()=>c(null),backLabel:l==="draft"?{ko:"임시 저장",zh:"草稿"}:{ko:"받은 편지함",zh:"收件匣"},bg:"#fff",right:n.jsx(N,{n:"trash",size:22}),children:n.jsxs("div",{className:"mail-read",children:[n.jsx("h2",{children:o(a.subject)}),n.jsxs("div",{className:"mail-from",children:[n.jsx("span",{className:"contact-avatar",style:{width:40,height:40,fontSize:17},children:[...a.from][0]}),n.jsxs("span",{children:[n.jsx("b",{children:a.from}),n.jsx("small",{children:o({ko:"받는 사람: 나",zh:"收件人：我"})})]}),n.jsx("small",{children:`${sn(a.at,r).split(" ").slice(1,3).join(" ")} ${Ye(a.at,r)}`})]}),n.jsx("pre",{children:o(a.body)})]})});if(l){const w=l==="draft"?y:m;return n.jsx(be,{title:l==="draft"?{ko:"임시 저장",zh:"草稿"}:{ko:"받은 편지함",zh:"收件匣"},large:!0,onBack:()=>i(null),backLabel:{ko:"메일상자",zh:"信箱"},bg:"#fff",search:A.search,children:w.map(v=>{const b=v.unread&&!u.includes(v.id);return n.jsxs("button",{className:"mail-row",onClick:()=>{c(v),x(h=>[...h,v.id]),v.box==="draft"&&s("draft")},children:[n.jsx("span",{className:`m-dot ${b?"on":""}`}),n.jsxs("span",{className:"mail-mid",children:[n.jsxs("span",{className:"m-top",children:[n.jsx("b",{children:l==="draft"?n.jsx("em",{className:"red",children:o({ko:"임시 저장",zh:"草稿"})}):v.from}),n.jsxs("small",{children:[xn(v.at,t,r)," ",n.jsx(N,{n:"chevron",size:12,w:2.6})]})]}),n.jsx("b",{className:"mail-subj",children:o(v.subject)}),n.jsx("small",{className:"clamp2",children:o(v.body).replace(/\n/g," ")})]})]},v.id)})})}return n.jsx(be,{title:{ko:"메일상자",zh:"信箱"},large:!0,right:n.jsx("span",{className:"nav-text",children:o({ko:"편집",zh:"編輯"})}),children:n.jsxs("div",{className:"group-box",children:[n.jsxs("button",{className:"cell",onClick:()=>i("inbox"),children:[n.jsx(N,{n:"mail",size:22,className:"tint"}),n.jsx("span",{className:"cell-main",children:o({ko:"받은 편지함",zh:"收件匣"})}),n.jsx("span",{className:"cell-detail",children:m.filter(w=>w.unread&&!u.includes(w.id)).length||""}),n.jsx(N,{n:"chevron",size:15,w:2.6,className:"cell-chev"})]}),n.jsxs("button",{className:"cell",onClick:()=>i("draft"),children:[n.jsx(N,{n:"compose",size:22,className:"tint"}),n.jsx("span",{className:"cell-main",children:o({ko:"임시 저장",zh:"草稿"})}),n.jsx("span",{className:"cell-detail",children:y.length}),n.jsx(N,{n:"chevron",size:15,w:2.6,className:"cell-chev"})]}),n.jsxs("div",{className:"cell",children:[n.jsx(N,{n:"send",size:22,className:"tint"}),n.jsx("span",{className:"cell-main",children:o({ko:"보낸 편지함",zh:"寄件備份"})})]}),n.jsxs("div",{className:"cell",children:[n.jsx(N,{n:"trash",size:22,className:"tint"}),n.jsx("span",{className:"cell-main",children:o({ko:"휴지통",zh:"垃圾桶"})})]})]})})}function np(){const{story:e}=se(),{t}=Q(),s=e.extra.weather,o=e.id==="shinyu",r=Math.min(...s.days.map(i=>i[2])),l=Math.max(...s.days.map(i=>i[3]));return n.jsxs("div",{className:`wx ${o?"night":"cloudy"}`,children:[n.jsx(_e,{dark:!0}),n.jsxs("div",{className:"wx-scroll",children:[n.jsxs("div",{className:"wx-top",children:[n.jsx("h2",{children:t(s.city)}),n.jsxs("b",{children:[s.now,"°"]}),n.jsx("span",{children:t(s.desc)}),n.jsxs("span",{children:[t({ko:"최고",zh:"高"}),":",s.hi,"° ",t({ko:"최저",zh:"低"}),":",s.lo,"°"]})]}),n.jsxs("div",{className:"wx-card",children:[n.jsx("small",{children:t({ko:"밤새 기온이 내려가겠습니다. 따뜻하게 입으세요.",zh:"夜間氣溫將下降，請注意保暖。"})}),n.jsx("div",{className:"wx-hours",children:s.hours.map(([i,a,c],u)=>n.jsxs("span",{children:[n.jsx("small",{children:u===0?t(A.now):`${i}${t({ko:"시",zh:"時"})}`}),n.jsx("i",{children:a}),n.jsxs("b",{children:[c,"°"]})]},u))})]}),n.jsxs("div",{className:"wx-card",children:[n.jsxs("small",{children:["📅 ",t({ko:"5일간의 일기예보",zh:"5 天天氣預報"})]}),s.days.map(([i,a,c,u],x)=>n.jsxs("div",{className:"wx-day",children:[n.jsx("b",{children:t(i)}),n.jsx("i",{children:a}),n.jsxs("small",{children:[c,"°"]}),n.jsx("span",{className:"wx-bar",children:n.jsx("em",{style:{left:`${(c-r)/(l-r||1)*100}%`,right:`${100-(u-r)/(l-r||1)*100}%`}})}),n.jsxs("b",{children:[u,"°"]})]},x))]})]})]})}const h0={shinyu:Le,dohoon:Ee},sp=["camera","voice","clock","weather","x"];function op({onExit:e,frame:t}){var Re,ct;const{screen:s,setScreen:o,ended:r}=se(),{s:l,flashlight:i,goBack:a,setOverlay:c,discover:u}=ye();j.useEffect(()=>{r&&u("ending")},[r,u]);const[x,g]=j.useState(null),[m,y]=j.useState(null),[w,v]=j.useState(0),[b,h]=j.useState(0),f={kakao:()=>n.jsx(sm,{}),messages:()=>n.jsx(hm,{}),phone:()=>n.jsx(pm,{}),photos:()=>n.jsx(em,{}),notes:()=>n.jsx(Rm,{}),search:()=>n.jsx(Um,{}),ai:()=>n.jsx(Vm,{}),calendar:()=>n.jsx(Dm,{}),voice:()=>n.jsx(Om,{}),settings:()=>n.jsx(Fm,{onExit:e}),camera:()=>n.jsx(bm,{}),clock:()=>n.jsx(_m,{}),instagram:()=>n.jsx(qm,{}),x:()=>n.jsx(Xm,{}),music:()=>n.jsx(Jm,{}),maps:()=>n.jsx(ep,{}),mail:()=>n.jsx(tp,{}),weather:()=>n.jsx(np,{})},p=(K,D)=>{var ee;const X=(ee=t.current)==null?void 0:ee.getBoundingClientRect();X&&g({x:D.left-X.left,y:D.top-X.top,w:D.width,h:D.height}),C.current=!0,o({kind:"app",app:K})},z=()=>{s.kind==="app"&&(c("none"),y(s.app),o({kind:"home"}),window.setTimeout(()=>y(null),340))},C=j.useRef(!1),M=s.kind==="app"?s.app:null;j.useEffect(()=>{if(!M){v(0);return}C.current||g(null),C.current=!1},[M]);const S=An({onMove:K=>h(Math.max(0,K)),onEnd:K=>{h(0),K>70&&a()}}),_=s.kind==="app"?s.app:m,T=((Re=t.current)==null?void 0:Re.clientWidth)??390,$=((ct=t.current)==null?void 0:ct.clientHeight)??844,W=x??{x:T/2-30,y:$-120,w:60,h:60},le={"--ox":`${W.x+W.w/2-T/2}px`,"--oy":`${W.y+W.h/2-$/2}px`,"--os":`${W.w/T}`},de=1-Math.min(.35,-w/900),He=s.kind==="home"||s.kind==="app"||m;return n.jsxs("div",{className:"screen",style:{filter:l.brightness<1?`brightness(${.35+l.brightness*.65})`:void 0,"--ts":l.textSize},children:[He&&n.jsx(Vf,{onOpen:p}),_&&n.jsxs("div",{className:`app-layer ${m?"closing":"opening"}`,style:{...le,transform:w?`translateY(${w*.5}px) scale(${de})`:b?`translateX(${b*.4}px)`:void 0,borderRadius:w?40:void 0,transition:w||b?"none":void 0},children:[f[_](),n.jsx("div",{className:"edge",...S}),n.jsx(l0,{dark:sp.includes(_),onSwipe:z,onDrag:v})]},_),s.kind==="lock"&&n.jsx(Af,{}),s.kind==="passcode"&&n.jsx(Wf,{}),s.kind==="home"&&n.jsx(l0,{dark:!0,onSwipe:()=>{}}),n.jsx(Qf,{}),n.jsx(qf,{}),n.jsx(Hf,{}),n.jsx(Gf,{}),n.jsx(Yf,{}),i&&n.jsx("div",{className:"flash-glow"}),n.jsx(rp,{})]})}function rp(){const{toast:e}=ye(),{t}=Q();if(!e)return null;const[s,o]=e.split("|");return n.jsxs("div",{className:"secret-toast",children:[n.jsx("span",{children:"🔓"}),n.jsxs("span",{children:[n.jsx("b",{children:t({ko:"비밀을 발견했어요",zh:"發現了祕密"})}),n.jsxs("small",{children:[t(I2[s])," · ",o,"/",to.length]})]})]},e)}function lp(){const{lang:e,setLang:t}=Q();return n.jsxs("div",{className:"lang-toggle",role:"group","aria-label":"Language",children:[n.jsx("button",{className:e==="ko"?"on":"",onClick:()=>t("ko"),children:"한국어"}),n.jsx("button",{className:e==="zh"?"on":"",onClick:()=>t("zh"),children:"中文"})]})}function ip({onPick:e}){const{t}=Q(),[s,o]=j.useState(!1),r=B2(),l=i=>{r&&window.matchMedia("(pointer: coarse)").matches&&Ii(),e(i)};return n.jsxs("div",{className:"select",children:[n.jsx(lp,{}),n.jsx("p",{className:"select-kicker",children:t({ko:"누군가 휴대폰을 두고 갔다",zh:"有人把手機忘在這裡了"})}),n.jsx("h1",{children:t({ko:"주운 폰은 누구 거?",zh:"撿到的手機是誰的？"})}),n.jsx("div",{className:"select-cards",children:[Le,Ee].map(i=>n.jsxs("button",{className:"select-card",onClick:()=>l(i.id),children:[n.jsxs("span",{className:"select-phone",style:{background:i.wallpaper},children:[n.jsx("span",{className:"select-island"}),n.jsx("span",{className:"select-time",children:i.id==="shinyu"?"23:58":"23:57"}),n.jsx("span",{className:"select-date",children:i.id==="shinyu"?t({ko:"1월 29일 목요일",zh:"1月29日 星期四"}):t({ko:"11월 6일 금요일",zh:"11月6日 星期五"})}),n.jsx("span",{className:"select-emoji",children:i.lockEmoji})]}),n.jsx("b",{children:t(i.owner.device)})]},i.id))}),!Wr()&&n.jsxs("button",{className:"select-fs",onClick:()=>r?void Ii():o(!0),children:["⛶ ",t({ko:"전체 화면으로 보기",zh:"以全螢幕觀看"})]}),s&&n.jsx("div",{className:"ios-hint",onClick:()=>o(!1),children:n.jsxs("div",{onClick:i=>i.stopPropagation(),children:[n.jsx("b",{children:t({ko:"iPhone에서 전체 화면으로 보기",zh:"在 iPhone 上以全螢幕觀看"})}),n.jsx("p",{children:t({ko:"iPhone Safari는 웹사이트 전체 화면을 지원하지 않아요. 아래 방법으로 홈 화면에 추가하면 앱처럼 전체 화면으로 열려요.",zh:"iPhone 的 Safari 不支援網站全螢幕。照下面的方法加入主畫面，就能像 App 一樣全螢幕開啟。"})}),n.jsxs("ol",{children:[n.jsx("li",{children:t({ko:"하단의 공유 버튼 (□↑) 누르기",zh:"點下方的分享按鈕（□↑）"})}),n.jsx("li",{children:t({ko:'"홈 화면에 추가" 선택',zh:"選擇「加入主畫面」"})}),n.jsx("li",{children:t({ko:"홈 화면에 생긴 아이콘으로 열기",zh:"從主畫面新出現的圖示打開"})})]}),n.jsx("button",{onClick:()=>o(!1),children:t({ko:"확인",zh:"知道了"})})]})}),n.jsx("p",{className:"select-tip",children:t({ko:"화면을 위로 쓸어올려 잠금을 풀고, 위에서 끌어내리면 제어 센터가 열려요.",zh:"向上滑動解鎖；從右上角往下拉可以打開控制中心。"})}),n.jsx("p",{className:"select-foot",children:t({ko:"팬메이드 · 비공식 · 허구의 이야기입니다. TWS 신유·도훈을 모티브로 했으며 실제 인물과 관계없습니다.",zh:"粉絲自製・非官方・虛構故事。以 TWS 申惟、道勳為靈感，與本人無關。"})})]})}function ap(){const e=j.useRef(null),[t,s]=j.useState(()=>{const o=window.location.hash.replace("#","");return h0[o]?o:null});return j.useEffect(()=>{history.replaceState(null,"",t?`#${t}`:window.location.pathname),document.title=t==="shinyu"?"신유의 iPhone":t==="dohoon"?"도훈의 iPhone":"유도즈의 iPhone"},[t]),j.useEffect(()=>{Pm()&&Wr()&&document.documentElement.classList.add("native-status"),Wr()&&document.documentElement.classList.add("standalone")},[]),j.useEffect(()=>(window.addEventListener("pointerdown",$i,{once:!0}),()=>window.removeEventListener("pointerdown",$i)),[]),t?n.jsx("main",{className:"stage",children:n.jsx("div",{className:"frame",ref:e,children:n.jsx(Lh,{story:h0[t],children:n.jsx(Ff,{storyId:t,children:n.jsx(op,{frame:e,onExit:()=>s(null)})})},t)})}):n.jsx(ip,{onPick:s})}b2(document.getElementById("root")).render(n.jsx(j.StrictMode,{children:n.jsx(vh,{children:n.jsx(ap,{})})}));
