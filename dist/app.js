!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash")):"function"==typeof define&&define.amd?define("vuex-storage",["lodash"],t):"object"==typeof exports?exports["vuex-storage"]=t(require("lodash")):e["vuex-storage"]=t(e.lodash)}(this,function(e){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/*! exports used: cloneDeep, omit, pick */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,o){t.exports=e},
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: multi ./src/index.ts (referenced with single entry) */function(e,t,o){"use strict";o.r(t);var r=o(/*! lodash */0),n=function(e,t,o){var n={};return t?n=Object(r.omit)(Object(r.cloneDeep)(e),t):o&&(n=Object(r.pick)(Object(r.cloneDeep)(e),o)),n};t.default=function(e){void 0===e&&(e={});var t=e.session,o=void 0===t?{}:t,r=e.local,i=void 0===r?{}:r,u=e.key,c=void 0===u?"vuex":u;return function(e){if(process.client){var t=window.sessionStorage,r=window.localStorage,u=t.getItem(c),s=r.getItem(c),a={},f={};try{a=JSON.parse(u)}catch(e){}try{f=JSON.parse(s)}catch(e){}var l=function(o,i,u){t.setItem(c,JSON.stringify(n(e.state,i.except,i.only))),r.setItem(c,JSON.stringify(n(e.state,u.except,u.only)))};e.replaceState(Object.assign(e.state,a,f)),l(e.state,o,i),e.subscribe(function(e,t){l(0,o,i)})}}}},
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,o){e.exports=o(/*! ./src/index.ts */1)}])});
//# sourceMappingURL=app.js.map