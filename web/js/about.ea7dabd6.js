(function(e){function n(n){for(var o,d,i=n[0],a=n[1],u=n[2],l=0,f=[];l<i.length;l++)d=i[l],Object.prototype.hasOwnProperty.call(r,d)&&r[d]&&f.push(r[d][0]),r[d]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);c&&c(n);while(f.length)f.shift()();return s.push.apply(s,u||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],o=!0,i=1;i<t.length;i++){var a=t[i];0!==r[a]&&(o=!1)}o&&(s.splice(n--,1),e=d(d.s=t[0]))}return e}var o={},r={about:0},s=[];function d(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.m=e,d.c=o,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)d.d(t,o,function(n){return e[n]}.bind(null,o));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var c=a;s.push([1,"chunk-vendors","chunk-common"]),t()})({1:function(e,n,t){e.exports=t("7e66")},"7e66":function(e,n,t){"use strict";t.r(n);t("a133"),t("ed0d"),t("f09c"),t("e117"),t("352e"),t("2271"),t("c74b");var o=t("c5e1"),r=t.n(o);t("d2cd"),t("657a");function s(){r()(".info .text").addClass("hidden"),r()(".info .text.understand").removeClass("hidden").addClass("show"),r()(".menu-opt.understand").addClass("selected"),r()(".menu-opt").on("click",(function(){console.log("i'm in"),r()(".menu-opt").removeClass("selected"),r()(this).addClass("selected")})),r()(".info .menu-opt.understand").on("click",(function(){r()(".info .text").removeClass("show").addClass("hidden"),r()(".info .text.understand").removeClass("hidden").addClass("show")})),r()(".menu-opt.ceo").on("click",(function(){r()(".info .text").removeClass("show").addClass("hidden"),r()(".info .text.ceo").removeClass("hidden").addClass("show")})),r()(".menu-opt.history").on("click",(function(){r()(".info .text").removeClass("show").addClass("hidden"),r()(".info .text.history").removeClass("hidden").addClass("show")}))}s()},c5e1:function(e,n){e.exports=window.jQuery},c74b:function(e,n,t){}});
//# sourceMappingURL=about.ea7dabd6.js.map