(function(n){function e(e){for(var t,r,p=e[0],A=e[1],s=e[2],g=0,c=[];g<p.length;g++)r=p[g],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(t in A)Object.prototype.hasOwnProperty.call(A,t)&&(n[t]=A[t]);l&&l(e);while(c.length)c.shift()();return a.push.apply(a,s||[]),i()}function i(){for(var n,e=0;e<a.length;e++){for(var i=a[e],t=!0,p=1;p<i.length;p++){var A=i[p];0!==o[A]&&(t=!1)}t&&(a.splice(e--,1),n=r(r.s=i[0]))}return n}var t={},o={weixin:0},a=[];function r(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=n,r.c=t,r.d=function(n,e,i){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},r.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)r.d(i,t,function(e){return n[e]}.bind(null,t));return i},r.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="../";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],A=p.push.bind(p);p.push=e,p=p.slice();for(var s=0;s<p.length;s++)e(p[s]);var l=A;a.push([0,"chunk-vendors","chunk-common"]),i()})({0:function(n,e,i){n.exports=i("2e2a")},"24df":function(n,e,i){var t=i("c60e");"string"===typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);var o=i("499e").default;o("66c589da",t,!0,{sourceMap:!0,shadowMode:!1})},"2e2a":function(n,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var t=i("2b0e"),o=(i("352e"),i("f644")),a=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"page-weixin"},[n.isweixin?i("div",{staticClass:"in-weixin"},[n._m(0),i("div",{staticClass:"arrow-text"},[i("p",[n._v(n._s(n.messages[n.language].openInBrowser))])])]):i("div",{staticClass:"not-weixin"},[i("a",{staticClass:"link",attrs:{href:"javascript:;"},on:{click:n.gotoDownload}},[i("div",{staticClass:"download"},[i("span",{staticClass:"download-text"},[n._v(n._s(n.messages[n.language].downloadApp))])])])])])},r=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"arrow"},[t("img",{attrs:{src:i("fd8e"),alt:""}})])}],p="https://apps.apple.com/us/app/tweebaa/id1467778439",A={name:"Weixin",created:function(){this.isWeixinBrowser()},data:function(){return{isweixin:!0,messages:{en:{openInBrowser:'Please click the menu and select "Open in Browser"',downloadApp:"Download App"},zh:{openInBrowser:'请在菜单中选择"在浏览器打开"',downloadApp:"下载推易吧App"}}}},methods:{isWeixinBrowser:function(){this.isweixin=/micromessenger/i.test(navigator.userAgent)},gotoDownload:function(){var n=this;"zh"===this.$util.language&&(p+="?l=zh&ls=1"),setTimeout((function(){"ios"===n.$util.getPhoneSystem()?window.location.href=p:"Android"===n.$util.getPhoneSystem()&&(window.location.href="https://tweebaafiles.oss-cn-beijing.aliyuncs.com/archive/app/tweebaa.apk")}),1e3)}}},s=A,l=(i("5bc6"),i("2877")),g=Object(l["a"])(s,a,r,!1,null,null,null),c=g.exports;t["a"].prototype.language=o["a"].language,t["a"].prototype.$util=o["a"],t["a"].config.productionTip=!1,new t["a"]({render:function(n){return n(c)}}).$mount("#app")},"5bc6":function(n,e,i){"use strict";var t=i("24df"),o=i.n(t);o.a},"84fb":function(n,e,i){n.exports=i.p+"img/download_bk.792c4628.jpg"},c60e:function(n,e,i){var t=i("24fb"),o=i("1de5"),a=i("84fb");e=t(!0);var r=o(a);e.push([n.i,".page-weixin{height:100%;background:#fff url("+r+") top no-repeat;background-size:cover}.page-weixin .in-weixin{height:100%}.page-weixin .in-weixin .arrow{width:88px;height:125px;position:absolute;top:8px;right:30px}.page-weixin .in-weixin .arrow img{width:100%;height:100%}.page-weixin .in-weixin .arrow-text{position:absolute;top:150px;left:50%;width:100%;-webkit-transform:translate(-50%);transform:translate(-50%);font-size:16px;text-align:center}.page-weixin .in-weixin .img{width:50px;height:50px;float:right}.page-weixin .in-weixin .info{width:100%;text-align:center;padding-top:2rem;clear:both}.page-weixin .in-weixin .info .info-text{font-size:18px;font-weight:700}.page-weixin .not-weixin{position:relative;height:100%}.page-weixin .not-weixin .download{position:absolute;width:200px;height:50px;line-height:50px;left:50%;top:61.8%;text-align:center;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.page-weixin .not-weixin .download .download-text{display:inline-block;padding:0 24px;background-color:#1652f0;border-radius:4px;color:#fff}","",{version:3,sources:["/Users/jinguangguo/Desktop/king_work/tweebaa_share/src/pages/weixin/index.vue?vue&type=style&index=0&lang=less&","/Users/jinguangguo/Desktop/king_work/tweebaa_share/src/pages/weixin/index.vue"],names:[],mappings:"AAqEA,aACI,WAAA,CACA,qEAAA,CACA,qBCpEJ,CDiEA,wBAKQ,WCnER,CD8DA,+BAQY,UAAA,CACA,YAAA,CACA,iBAAA,CACA,OAAA,CACA,UCnEZ,CDuDA,mCAcgB,UAAA,CACA,WClEhB,CDmDA,oCAmBY,iBAAA,CACA,SAAA,CACA,QAAA,CACA,UAAA,CACA,iCAAA,CAAA,yBAAA,CACA,cAAA,CACA,iBCnEZ,CD0CA,6BA6BY,UAAA,CACA,WAAA,CACA,WCpEZ,CDqCA,8BAkCY,UAAA,CACA,iBAAA,CACA,gBAAA,CACA,UCpEZ,CD+BA,yCAuCgB,cAAA,CACA,eCnEhB,CD2BA,yBA6CQ,iBAAA,CACA,WCrER,CDuBA,mCAgDY,iBAAA,CACA,WAAA,CACA,WAAA,CACA,gBAAA,CACA,QAAA,CACA,SAAA,CACA,iBAAA,CACA,sCAAA,CAAA,8BCpEZ,CDaA,kDAyDgB,oBAAA,CACA,cAAA,CACA,wBAAA,CACA,iBAAA,CACA,UCnEhB",file:"index.vue?vue&type=style&index=0&lang=less&",sourcesContent:["\n// #1652F0\n@color-blue: #1652F0;\n@color-blue-1: #1e82c0;\n@color-red: #ff7f00;\n@color-green: #4fbb92;\n@color-font: #999;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.page-weixin {\n    height: 100%;\n    background: #fff url('../../image/download_bk.jpg') center top no-repeat;\n    background-size: cover;\n    .in-weixin {\n        height: 100%;\n\n        .arrow {\n            width: 88px;\n            height: 125px;\n            position: absolute;\n            top: 8px;\n            right: 30px;\n            img {\n                width: 100%;\n                height: 100%;\n            }\n        }\n        .arrow-text {\n            position: absolute;\n            top: 150px;\n            left: 50%;\n            width: 100%;\n            transform: translate(-50%, 0);\n            font-size: 16px;\n            text-align: center;\n        }\n\n        .img {\n            width: 50px;\n            height: 50px;\n            float: right;\n        }\n        .info {\n            width: 100%;\n            text-align: center;\n            padding-top: 2rem;\n            clear: both;\n            .info-text {\n                font-size: 18px;\n                font-weight: 700\n            }\n        }\n    }\n    .not-weixin {\n        position: relative;\n        height: 100%;\n        .download {\n            position: absolute;\n            width: 200px;\n            height: 50px;\n            line-height: 50px;\n            left: 50%;\n            top: 61.8%;\n            text-align: center;\n            transform: translate(-50%, -50%);\n            .download-text {\n                display: inline-block;\n                padding: 0 24px;\n                background-color: @color-blue;\n                border-radius: 4px;\n                color: white;\n            }\n        }\n    }\n}\n",".page-weixin {\n  height: 100%;\n  background: #fff url('../../image/download_bk.jpg') center top no-repeat;\n  background-size: cover;\n}\n.page-weixin .in-weixin {\n  height: 100%;\n}\n.page-weixin .in-weixin .arrow {\n  width: 88px;\n  height: 125px;\n  position: absolute;\n  top: 8px;\n  right: 30px;\n}\n.page-weixin .in-weixin .arrow img {\n  width: 100%;\n  height: 100%;\n}\n.page-weixin .in-weixin .arrow-text {\n  position: absolute;\n  top: 150px;\n  left: 50%;\n  width: 100%;\n  transform: translate(-50%, 0);\n  font-size: 16px;\n  text-align: center;\n}\n.page-weixin .in-weixin .img {\n  width: 50px;\n  height: 50px;\n  float: right;\n}\n.page-weixin .in-weixin .info {\n  width: 100%;\n  text-align: center;\n  padding-top: 2rem;\n  clear: both;\n}\n.page-weixin .in-weixin .info .info-text {\n  font-size: 18px;\n  font-weight: 700;\n}\n.page-weixin .not-weixin {\n  position: relative;\n  height: 100%;\n}\n.page-weixin .not-weixin .download {\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  line-height: 50px;\n  left: 50%;\n  top: 61.8%;\n  text-align: center;\n  transform: translate(-50%, -50%);\n}\n.page-weixin .not-weixin .download .download-text {\n  display: inline-block;\n  padding: 0 24px;\n  background-color: #1652F0;\n  border-radius: 4px;\n  color: white;\n}\n"]}]),n.exports=e}});
//# sourceMappingURL=weixin.02ecf4e0.js.map