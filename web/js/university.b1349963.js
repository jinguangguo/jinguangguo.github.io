(function(e){function n(n){for(var t,i,a=n[0],d=n[1],l=n[2],u=0,f=[];u<a.length;u++)i=a[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);c&&c(n);while(f.length)f.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,n=0;n<r.length;n++){for(var o=r[n],t=!0,a=1;a<o.length;a++){var d=o[a];0!==s[d]&&(t=!1)}t&&(r.splice(n--,1),e=i(i.s=o[0]))}return e}var t={},s={university:0},r=[];function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,n,o){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)i.d(o,t,function(n){return e[n]}.bind(null,t));return o},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var c=d;r.push([6,"chunk-vendors","chunk-common"]),o()})({"5a73":function(e,n,o){},6:function(e,n,o){e.exports=o("78b2")},"78b2":function(e,n,o){"use strict";o.r(n);o("ac1f"),o("5319"),o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("352e"),o("5a73");var t=o("c5e1"),s=o.n(t);o("d2cd"),o("657a");function r(){s()(".info .text").addClass("hidden"),s()(".info .text.understand").removeClass("hidden").addClass("show"),s()(".menu-opt.understand").addClass("selected"),s()(".menu-opt").on("click",(function(){console.log("i'm in"),s()(".menu-opt").removeClass("selected"),s()(this).addClass("selected")})),s()(".english").click((function(){console.log("1"),location.replace("./about_en.html")})),s()(".info .menu-opt.understand").on("click",(function(){s()(".info .text").removeClass("show").addClass("hidden"),s()(".info .text.understand").removeClass("hidden").addClass("show")})),s()(".menu-opt.ceo").on("click",(function(){s()(".info .text").removeClass("show").addClass("hidden"),s()(".info .text.ceo").removeClass("hidden").addClass("show")})),s()(".menu-opt.history").on("click",(function(){s()(".info .text").removeClass("show").addClass("hidden"),s()(".info .text.history").removeClass("hidden").addClass("show")})),s()(".menu-opt.pingjia").on("click",(function(){s()(".info .text").removeClass("show").addClass("hidden"),s()(".info .text.pingjia").removeClass("hidden").addClass("show")})),s()(".menu-opt.tuijian").on("click",(function(){s()(".info .text").removeClass("show").addClass("hidden"),s()(".info .text.tuijian").removeClass("hidden").addClass("show")}))}r()},c5e1:function(e,n){e.exports=window.jQuery}});
//# sourceMappingURL=university.b1349963.js.map