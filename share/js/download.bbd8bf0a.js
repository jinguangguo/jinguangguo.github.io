(function(e){function t(t){for(var o,i,c=t[0],u=t[1],l=t[2],f=0,s=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&s.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);p&&p(t);while(s.length)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={download:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="../";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;a.push([6,"chunk-vendors","chunk-common"]),n()})({6:function(e,t,n){e.exports=n("c08a")},"8bbf":function(e,t){e.exports=Vue},c08a:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("8bbf"),r=n.n(o),a=(n("352e"),n("f644")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-download"})},c=[],u=n("bc3a"),l=n.n(u),p={name:"Download",created:function(){"Android"===this.$util.getPhoneSystem()?l.a.get("https://api.ipdata.co/?api-key=bd616afaef799bfe15627291f24ad3fa83c897a6a1219caa8c42928b").then((function(e){"CN"===e.data.country_code.toUpperCase()?window.location.href="weixin.html":window.location.href="https://play.google.com/store/apps/details?id=cn.charity.tweebaa"})).catch((function(e){window.location.href="weixin.html"})):"ios"===getPhoneSystem()&&(window.location.href="https://apps.apple.com/us/app/tweebaa/id1467778439")},data:function(){return{}},methods:{}},f=p,s=n("2877"),d=Object(s["a"])(f,i,c,!1,null,null,null),h=d.exports;r.a.prototype.language=a["a"].language,r.a.prototype.$util=a["a"],r.a.config.productionTip=!1,new r.a({render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=download.bbd8bf0a.js.map