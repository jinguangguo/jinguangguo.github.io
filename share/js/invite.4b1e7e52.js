(function(e){function n(n){for(var i,a,s=n[0],c=n[1],l=n[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);p&&p(n);while(d.length)d.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],i=!0,s=1;s<t.length;s++){var c=t[s];0!==o[c]&&(i=!1)}i&&(r.splice(n--,1),e=a(a.s=t[0]))}return e}var i={},o={invite:0},r=[];function a(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=i,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)a.d(t,i,function(n){return e[n]}.bind(null,i));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="../";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var p=c;r.push([2,"chunk-vendors","chunk-common"]),t()})({"1eaf":function(e,n,t){e.exports=t.p+"img/i5-zh.495726bb.jpg"},2:function(e,n,t){e.exports=t("9be2")},"323b":function(e,n,t){var i=t("24fb");n=i(!0),n.push([e.i,".page-invite .invite-label{font-weight:400;color:#1f2f3d;margin-bottom:8px}.page-invite .copy{padding:1.6rem 0;border-radius:.4rem;background-color:#f8faff;-webkit-user-select:text;border:1px solid #1651f0;text-align:center}.page-invite .copy .invite-label{color:#666;font-size:1.4rem}.page-invite .copy .copy-text{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;color:#1651f0;font-size:1.6rem}.page-invite .do{margin-top:1.2rem;text-align:center}.page-invite .do .do-link{display:block}.page-invite .swiper-slide{width:150px!important}","",{version:3,sources:["/Users/jinguangguo/Desktop/king_work/tweebaa_share/src/pages/invite/index.vue?vue&type=style&index=0&lang=less&","/Users/jinguangguo/Desktop/king_work/tweebaa_share/src/pages/invite/index.vue"],names:[],mappings:"AAmDA,2BAEQ,eAAA,CACA,aAAA,CACA,iBCnDR,CD+CA,mBAOQ,gBAAA,CACA,mBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,iBCnDR,CDuCA,iCAcY,UAAA,CACA,gBClDZ,CDmCA,8BAkBY,wBAAA,CACA,qBAAA,CACA,oBAAA,CACA,gBAAA,CACA,aAAA,CACA,gBClDZ,CD2BA,iBA2BQ,iBAAA,CACA,iBCnDR,CDuBA,0BA8BY,aClDZ,CDoBA,2BAkCQ,qBCnDR",file:"index.vue?vue&type=style&index=0&lang=less&",sourcesContent:["\n// #1652F0\n@color-blue: #1652F0;\n@color-blue-1: #1e82c0;\n@color-red: #ff7f00;\n@color-green: #4fbb92;\n@color-font: #999;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.page-invite {\n    .invite-label {\n        font-weight: 400;\n        color: #1f2f3d;\n        margin-bottom: 8px;\n    }\n    .copy {\n        padding: 1.6rem 0;\n        border-radius: 0.4rem;\n        background-color: #F8FAFF;\n        -webkit-user-select: text;\n        border: 1px solid #1651F0;\n        text-align: center;\n        .invite-label {\n            color: #666;\n            font-size: 1.4rem;\n        }\n        .copy-text {\n            -webkit-user-select: text;\n            -moz-user-select: text;\n            -ms-user-select: text;\n            user-select: text;\n            color: #1651F0;\n            font-size: 1.6rem;\n        }\n    }\n    .do {\n        margin-top: 1.2rem;\n        text-align: center;\n        .do-link {\n            display: block;\n        }\n    }\n    .swiper-slide {\n        width: 150px !important;\n    }\n}\n",".page-invite .invite-label {\n  font-weight: 400;\n  color: #1f2f3d;\n  margin-bottom: 8px;\n}\n.page-invite .copy {\n  padding: 1.6rem 0;\n  border-radius: 0.4rem;\n  background-color: #F8FAFF;\n  -webkit-user-select: text;\n  border: 1px solid #1651F0;\n  text-align: center;\n}\n.page-invite .copy .invite-label {\n  color: #666;\n  font-size: 1.4rem;\n}\n.page-invite .copy .copy-text {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  color: #1651F0;\n  font-size: 1.6rem;\n}\n.page-invite .do {\n  margin-top: 1.2rem;\n  text-align: center;\n}\n.page-invite .do .do-link {\n  display: block;\n}\n.page-invite .swiper-slide {\n  width: 150px !important;\n}\n"]}]),e.exports=n},"4cf3":function(e,n,t){e.exports=t.p+"img/i4-zh.b6f4e981.jpg"},"523a":function(e,n,t){e.exports=t.p+"img/i4-en.c8e426f4.jpg"},"5fe6":function(e,n,t){e.exports=t.p+"img/i2-zh.3f190a1c.jpg"},6041:function(e,n,t){e.exports=t.p+"img/i1-zh.50f1e315.jpg"},"65e9":function(e,n,t){var i=t("323b");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=t("499e").default;o("5ea05c7e",i,!0,{sourceMap:!0,shadowMode:!1})},"6f28":function(e,n,t){"use strict";var i=t("65e9"),o=t.n(i);o.a},"70e9":function(e,n,t){var i={"./i5-en.jpg":"a247","./i5-zh.jpg":"1eaf"};function o(e){var n=r(e);return t(n)}function r(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=r,e.exports=o,o.id="70e9"},"7b18":function(e,n,t){var i={"./i3-en.jpg":"d8c1","./i3-zh.jpg":"e8b3"};function o(e){var n=r(e);return t(n)}function r(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=r,e.exports=o,o.id="7b18"},"88dc":function(e,n,t){var i={"./i1-en.jpg":"a20f","./i1-zh.jpg":"6041"};function o(e){var n=r(e);return t(n)}function r(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=r,e.exports=o,o.id="88dc"},"9be2":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("2b0e"),o=t("4eb5"),r=t.n(o),a=(t("352e"),t("b067"),t("38b8"),t("f644")),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page-invite bk-img"},[t("div",{staticClass:"user-info-box"},[t("img",{staticClass:"user-avatar",attrs:{src:e.userInfo.ThumbnailAvatarUrl}}),t("div",{staticClass:"name"},[t("span",{staticClass:"text"},[e._v(e._s(e.userInfo.StoreName))])]),t("p",{staticClass:"introduction small",domProps:{innerHTML:e._s(e.userInfo.Introduction)}})]),t("div",{staticClass:"my-code p-5"},[t("div",{staticClass:"copy",on:{click:e.copy}},[t("p",{staticClass:"invite-label"},[e._v(e._s(e.messages[e.language].myInviteCode))]),t("p",{staticClass:"copy-text"},[e._v(e._s(e.invitecode))])]),t("div",{staticClass:"do"},[t("a",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.invitecode,expression:"invitecode"}],staticClass:"do-link btn-new btn-new-default",attrs:{href:"javascript:;"},on:{click:e.copy}},[e._v(e._s(e.messages[e.language].copy))])]),t("p",{staticClass:"p-3 small text-center",staticStyle:{color:"#333"}},[e._v(e._s(e.messages[e.language].myInviteCodeTips))])]),t("div",{staticClass:"mt-4"},[t("launch-app",{attrs:{type:"invite"}},[t("img",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.invitecode,expression:"invitecode"}],staticClass:"img-fluid",attrs:{src:e.banner}})])],1),t("p",{staticClass:"p-4 platform"},[e._v(e._s(e.messages[e.language].platform))]),t("footer-download",{attrs:{invitecode:e.invitecode,type:"invite"}}),t("tips",{attrs:{"show-flag":e.showTips,content:e.messages[e.language].copyTip},on:{hidetips:function(n){e.showTips=!1}}})],1)},c=[],l=t("32a7"),p=t("0cfb"),u=t("7966"),d={name:"Invite",components:{Tips:l["a"],LaunchApp:p["a"],FooterDownload:u["a"]},mounted:function(){this.getUrl(),this.getBanner(),this.getUserInfo(),this.initSwiper()},created:function(){},data:function(){return{showTips:!1,userInfo:"",userId:"",banner:"",qrCode:"",invitecode:"",pictures:[t("88dc")("./i1-"+this.language+".jpg"),t("bfb8")("./i2-"+this.language+".jpg"),t("7b18")("./i3-"+this.language+".jpg"),t("bee2")("./i4-"+this.language+".jpg"),t("70e9")("./i5-"+this.language+".jpg")],messages:{en:{opportunity:"Don’t miss out on an amazing opportunity",myInviteCode:"My invite code is",myInviteCodeTips:"Register via referral code to gain extra Tweebucks",platform:"Tweebaa is the world's 1st multi-dimensional earning commerce and value-exchanging social networking platform allowing everyone to transform their knowledge, skills, interests, and experiences into creative products and discover their hidden values.",story:"Tweebaa is the world’s 1st multi-dimensional value-exchanging social networking platform. Designed for creating value from non-traditional products, ideas and your personal influence, Tweebaa enables everyone to achieve unlimited earnings with zero financial investment. With the tools we provide, anyone can create a personalized foundation, whether as a contributor to the social community, an influencer or a business, and it’s completely free. With Tweebaa you can earn simply by doing the things you do every day; liking, commenting, sharing, posting. You can also suggest, shop, sell or share physical and digital products withpeople all over the world to increase your earnings.",copy:"Copy",copyTip:"Success"},zh:{opportunity:"不要错过难得的机会",myInviteCode:"我的邀请码是：",myInviteCodeTips:"通过邀请码注册可得额外T豆奖励",platform:"推易吧是全球首个支持创新变现的价值社交平台，您的知识、爱好、经验、影响力等个体价值可以在这里直接变现。",story:"推易吧团队是一支综合技术型的创业团队。团队创始人王蕾是多维价值变现的成功实践者，是有着17年创新产品变现经验的专家。我们带着丰富的创新变现经验与底蕴踏入区块链时代。本着让“梦想补偿、职业替代”的理念，让普通人介入到垄断行业贡献并共享价值，我们努力着！",copy:"复制",copyTip:"复制成功"}}}},methods:{initSwiper:function(){setTimeout((function(){new Swiper(".swiper-container",{direction:"horizontal",loop:!1,slidesPerView:1.5,initialSlide:0,pagination:{el:".swiper-pagination",type:"bullets"}})}))},getBanner:function(){Math.floor(4*Math.random());try{this.banner=t("1f8c")("./banner1-"+this.$util.language+".jpg")}catch(e){}},getUrl:function(){this.invitecode=this.$util.getUrlParam("invitecode")},getUserInfo:function(){var e=this,n=this.$util.getBaseUrl()+"api/users/username/"+this.$util.getUrlParam("invitecode");this.$util.getAxois(n,"GET",{}).then((function(n){e.userInfo=n.data})).catch((function(e){console.log(JSON.stringify(e)+"#######################")}))},copy:function(){var e=this;setTimeout((function(){e.showTips=!0}),0)},onCopySuccess:function(){this.showTips=!0,console.log("Copy Success")},onCopyError:function(){console.log("Can not copy")},openApp:function(){this.$util.openOrDownloadApp("invite")}}},g=d,f=g,v=(t("6f28"),t("2877")),m=Object(v["a"])(f,s,c,!1,null,null,null),b=m.exports;i["a"].use(r.a),i["a"].prototype.language=a["a"].language,i["a"].prototype.$util=a["a"],i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(b)}}).$mount("#app")},a20f:function(e,n,t){e.exports=t.p+"img/i1-en.6b8f0c20.jpg"},a247:function(e,n,t){e.exports=t.p+"img/i5-en.1396dd63.jpg"},bee2:function(e,n,t){var i={"./i4-en.jpg":"523a","./i4-zh.jpg":"4cf3"};function o(e){var n=r(e);return t(n)}function r(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=r,e.exports=o,o.id="bee2"},bfb8:function(e,n,t){var i={"./i2-en.jpg":"ce34","./i2-zh.jpg":"5fe6"};function o(e){var n=r(e);return t(n)}function r(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=r,e.exports=o,o.id="bfb8"},ce34:function(e,n,t){e.exports=t.p+"img/i2-en.28f9b514.jpg"},d8c1:function(e,n,t){e.exports=t.p+"img/i3-en.611a995a.jpg"},e8b3:function(e,n,t){e.exports=t.p+"img/i3-zh.bb6c6beb.jpg"}});
//# sourceMappingURL=invite.4b1e7e52.js.map