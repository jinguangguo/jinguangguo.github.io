(function(t){function a(a){for(var s,r,n=a[0],c=a[1],l=a[2],u=0,p=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(a);while(p.length)p.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],s=!0,n=1;n<e.length;n++){var c=e[n];0!==i[c]&&(s=!1)}s&&(o.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},i={product:0},o=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="../";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=a,n=n.slice();for(var l=0;l<n.length;l++)a(n[l]);var d=c;o.push([5,"chunk-vendors","chunk-common"]),e()})({5:function(t,a,e){t.exports=e("e4b4")},"6e2e":function(t,a,e){var s=e("e7e4");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=e("499e").default;i("bbd083e6",s,!0,{sourceMap:!0,shadowMode:!1})},"8bbf":function(t,a){t.exports=Vue},e4b4:function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("8bbf"),i=e.n(s),o=e("4eb5"),r=e.n(o),n=(e("352e"),e("b067"),e("38b8"),e("f644")),c=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page-product flex-col bk-img",attrs:{id:"activityDetail"}},[s("h1",{staticClass:"loading-text",attrs:{id:"loadingText"}},[t._v(t._s(t.messages[t.language].tweebaa))]),t.productData?s("div",[s("div",{staticClass:"user-info-box"},[s("img",{staticClass:"user-avatar",attrs:{src:t.productData.Owner.ThumbnailAvatarUrl}}),s("div",{staticClass:"name"},[s("span",{staticStyle:{"font-size":"1.8rem","font-weight":"600"}},[t._v(t._s(t.productData.Owner.StoreName))])]),s("p",{staticClass:"introduction small",staticStyle:{color:"#677382"},domProps:{innerHTML:t._s(t.productData.Owner.Introduction)}})]),s("div",{staticClass:"swiper-container",attrs:{id:"proDetailPhoto"}},[t.productData?s("div",{staticClass:"swiper-wrapper"},[t._l(t.productData.Pictures,(function(a){return t.switchImg?s("div",{staticClass:"swiper-slide"},[s("img",{staticClass:"img-fluid",attrs:{src:a.PictureUrl}})]):t._e()})),t.productData.SampleDownload&&!t.switchImg?s("div",{staticClass:"swiper-slide",staticStyle:{background:"#000"}},["video"===t.sampleType?s("video",{staticClass:"videoDisplay",attrs:{src:t.productData.SampleDownload.DownloadUrl,controls:"controls",preload:"auto",muted:""},domProps:{muted:!0}}):t._e(),"image"===t.sampleType?s("img",{staticClass:"img-fluid",attrs:{src:t.productData.SampleDownload.DownloadUrl}}):t._e(),"audio"===t.sampleType?s("audio",{attrs:{src:t.productData.SampleDownload.DownloadUrl,controls:"controls",preload:"auto",muted:""}}):t._e(),"text"===t.sampleType?s("div",[s("p",{staticClass:"text-title p-5 text-white",on:{click:function(a){return t.openTextFile("sample")}}},[s("span",{staticClass:"pr-3",attrs:{"data-i18n-text":"clickToOpen"}}),s("span",{attrs:{"data-i18n-text":"file"}})]),s("div",{staticClass:"text-right mt-5 text-blue small text-title",on:{click:function(a){return t.copyDownloadLink("sample")}}},[s("i",{staticClass:"icon iconfont icon-list1 pr-2"}),s("span",{attrs:{"data-i18n-text":"copyDownloadLink"}})])]):t._e(),"other"===t.sampleType?s("div",[t._m(0),s("div",{staticClass:"text-right mt-5 text-blue small text-title",on:{click:function(a){return t.copyDownloadLink("sample")}}},[s("i",{staticClass:"icon iconfont icon-list1 pr-2"}),s("span",{attrs:{"data-i18n-text":"copyDownloadLink"}})])]):t._e()]):t._e()],2):t._e(),t.productData.SampleDownload?s("div",{staticClass:"text-center switch-img-video"},[s("span",{class:{active:t.switchImg},attrs:{"data-i18n-text":"pictures"},on:{click:function(a){return t.switchImgVideo("img")}}},[t._v("Pictures")]),s("span",{class:{active:!t.switchImg},attrs:{"data-i18n-text":"sample"},on:{click:function(a){return t.switchImgVideo("video")}}},[t._v("sample")])]):t._e(),s("div",{staticClass:"swiper-pagination"})]),s("div",{staticClass:"p-4 text-center text-white",staticStyle:{"background-color":"#4578F3"},on:{click:function(a){return t.gotoDownload(t.productData.Owner.UserName)}}},[t._v(" "+t._s(t.messages[t.language].banner)+" ")]),s("section",{staticClass:"product-info"},[s("div",{staticClass:"info-row info-row-strong"},[s("div",{staticClass:"label"},[t._v(t._s(t.messages[t.language].price))]),s("div",{staticClass:"text"},[t._v(" "+t._s(t.productData.TweebuckPrice)+" "),s("span",{staticClass:"text-bottom"},[t._v(t._s(t.messages[t.language].tweebucks))]),s("span",{staticClass:"text-bottom"},[t._v(t._s(t.$util.getExchangeText(t.productData.TweebuckPrice)))])])]),s("div",{staticClass:"info-row"},[s("div",{staticClass:"label"},[t._v(t._s(t.messages[t.language].name))]),s("div",{staticClass:"text"},[t._v(t._s(t.productData.Name))])]),t.productData.ShortDescription?s("div",{staticClass:"info-row"},[s("div",{staticClass:"label"},[t._v(t._s(t.messages[t.language].desc))]),s("div",{staticClass:"text"},[t._v(t._s(t.productData.ShortDescription))])]):t._e()]),1===t.productData.ProductSource&&t.showcaseData&&(t.showcaseData.ProdStoreOwnerCmt||t.showcaseData.ProdStoreCmt_Pictures||t.showcaseData.ProdStoreCmt_Video)?s("div",{staticClass:"product-showcase small"},[s("div",{staticClass:"ui-divide"}),s("p",{staticClass:"ui-title"},[t._v(t._s(t.messages[t.language].showcaseTitle))]),s("launch-app",{attrs:{type:"product"}},[s("section",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.shareid,expression:"shareid"}],staticClass:"p-4",staticStyle:{"background-color":"#F3F6FF","border-top":"1px solid #d6e1fd","border-bottom":"1px solid #d6e1fd"}},[t.showcaseData.ProdStoreOwnerCmt?s("div",{staticClass:"showcase-cmt pb-3"},[s("span",{staticClass:"text"},[t._v(t._s(t.showcaseData.ProdStoreOwnerCmt)+" ")])]):t._e(),t.showcaseData.ProdStoreCmt_Pictures?s("ul",{staticClass:"showcase-pictures ui-pics"},t._l(t.showcaseData.ProdStoreCmt_Pictures,(function(a,e){return s("li",{staticClass:"pic-item"},[s("div",{staticClass:"pic-img-box"},[a.ThumbnailUrl?t._e():s("img",{staticClass:"img-box",attrs:{src:a.DownloadUrl}}),a.ThumbnailUrl?s("img",{staticClass:"img-box",attrs:{src:a.ThumbnailUrl}}):t._e()])])})),0):t._e(),t.showcaseData&&t.showcaseData.ProdStoreCmt_Video?s("div",{staticClass:"showcase-video ui-video",staticStyle:{background:"#000"}},[s("img",{staticClass:"img-thumbnail",attrs:{src:t.showcaseData.ProdStoreCmt_Video.ThumbnailUrl}}),s("img",{staticClass:"img-to-play",attrs:{src:e("fd97"),width:"80"}})]):t._e()])])],1):t._e(),s("div",{staticClass:"ui-divide"}),s("div",{staticClass:"product-desc"},[s("div",{staticClass:"ui-title"},[t._v(t._s(t.messages[t.language].detail))]),s("div",{staticClass:"small",attrs:{id:"fullDescription"},domProps:{innerHTML:t._s(t.productData.FullDescription)}})]),s("div",{staticClass:"ui-divide"}),t.topProductData?s("div",{staticClass:"top-products"},[s("p",{staticClass:"ui-title"},[t._v(t._s(t.messages[t.language].topProduct)+" ")]),s("launch-app",{attrs:{type:"product"}},[s("ul",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.shareid,expression:"shareid"}]},t._l(t.topProductData,(function(a){return s("li",{staticClass:"p-4 flex ui-border-b"},[a.FeaturedPicture?s("img",{attrs:{src:a.FeaturedPicture.PictureUrl,alt:""}}):t._e(),a.FeaturedPicture?t._e():s("img",{attrs:{src:e("16f9"),alt:""}}),s("div",{staticClass:"flex-1"},[s("p",{staticClass:"text-dark-gray small"},[t._v(t._s(a.Name))])])])})),0)]),s("div",{staticClass:"ui-divide"})],1):t._e(),s("launch-app",{attrs:{type:"product"}},[s("div",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.shareid,expression:"shareid"}]},[s("img",{staticClass:"img-fluid",attrs:{src:t.banner,alt:""}})])]),s("p",{staticClass:"p-4 platform"},[t._v(t._s(t.messages[t.language].platform))]),s("footer-download",{attrs:{invitecode:t.shareid,params:t.paramsForApp,type:"product"}})],1):t._e()])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"text-title p-5 text-white"},[e("span",{staticClass:"pr-3",attrs:{"data-i18n-text":"cannotOpen"}})])}],d=(e("a15b"),e("a9e3"),e("b680"),e("bc3a")),u=e.n(d),p=e("0cfb"),m=e("7966"),g={name:"Product",components:{LaunchApp:p["a"],FooterDownload:m["a"]},mounted:function(){this.getBanner(),this.getProductDetail(),this.getCountryCode(),this.$util.initRate(),this.shareid=this.$util.getUrlParam("shareid")},data:function(){return{productData:"",topProductData:"",paramsForApp:"",switchImg:!0,countryCode:"CN",shareid:"",banner:"",showcaseData:null,messages:{en:{tweebaa:"Tweebaa",hi:"Hi,I'm ",share:"I have good products to share with you",banner:"Share good products in tweebaa",downloadApp:"Download Tweebaa App Get T-beans",topProduct:"Top Product",tweebucks:"T-beans",approximateProfit:"Approximate Profit",maxProfit:"Maximum Rewards",platform:"Tweebaa is the world's 1st multi-dimensional earning commerce and value-exchanging social networking platform allowing everyone to transform their knowledge, skills, interests, and experiences into creative products and discover their hidden values.",name:"Name",price:"Price",desc:"Summary",detail:"Description",showcaseTitle:"Showcase"},zh:{tweebaa:"推易吧",hi:"Hi,我是",share:"我有好产品和你分享哦",banner:"搜好物 推易吧 创意无限",downloadApp:"下载推易吧App 获取T豆奖励",topProduct:"热门产品",tweebucks:"T豆",approximateProfit:"您的奖励约为",maxProfit:"最高销售奖励",platform:"推易吧是全球首个支持创新变现的价值社交平台，您的知识、爱好、经验、影响力等个体价值可以在这里直接变现。",name:"产品名称",price:"产品售价",desc:"产品简介",detail:"详细介绍",showcaseTitle:"推荐理由"}}}},filters:{fixed2:function(t){return Number(t).toFixed(2)}},methods:{getOwnerCommentDetails:function(t){var a=this,e=this.$util.getUrlParam("userid"),s=this.$util.getBaseUrl()+"api/v2/tweebaa-product/tycoon/OwnerCommentDetails?UserId="+e+"&ProductToTweebaaId="+t;this.$util.getAxois(s,"GET",{}).then((function(t){var e=t.data;a.showcaseData=e})).catch((function(t){loading("hide"),console.log(JSON.stringify(t))}))},getBanner:function(){Math.floor(4*Math.random());try{this.banner=e("1f8c")("./banner1-"+this.$util.language+".jpg")}catch(t){}},getCountryCode:function(){var t=this;u.a.get("https://api.ipdata.co/?api-key=bd616afaef799bfe15627291f24ad3fa83c897a6a1219caa8c42928b").then((function(a){console.log(a),t.countryCode=a.data.country_code})).catch((function(t){console.log(t)}))},_pars:function(t){var a=[];for(var e in t)a.push(e+"="+t[e]);return a.join("&")},getProductDetail:function(){var t=this,a=this.$util.getUrlParam("userid"),e=this.$util.getUrlParam("prodid"),s=this.$util.getBaseUrl()+"api/users/"+a+"/products/"+e+"?ProductToTweebaaDetailRequired=true&needProductType=true&LanguageCode="+this.$util.language;this.$util.getAxois(s,"GET",{}).then((function(s){var i=s.data;t.productData=i,1===i.ProductType&&i.LatestProductToTweebaa&&t.getOwnerCommentDetails(i.LatestProductToTweebaa.ProductToTweebaaId);var o=document.getElementById("loadingText"),r=o.parentNode;r.removeChild(o),setTimeout((function(){h(),t.getAllPorducts(s.data.Owner.Id);var i=t.$util.getBaseUrl()+"/api/data-analytics/save-view-data",o={TypeId:2,ProductId:e,UserId:a,CountryCode:t.countryCode,StayTimeSeconds:Math.floor(110*Math.random())+10};t.$util.getAxois(i,"POST",o).then((function(t){})).catch((function(t){console.log(JSON.stringify(t)+"#######################")})),t.paramsForApp=t._pars({prodid:e,userinfo:JSON.stringify(t.productData.Owner),countrycode:t.countryCode,page:t.$util.getUrlParam("page")})}))})).catch((function(t){console.log(t)}))},getAllPorducts:function(t){var a=this,e=this.$util.getBaseUrl()+"/api/v2/users/products",s={ownerId:t,currentpage:0,itemsperpage:3};this.$util.getAxois(e,"POST",s).then((function(t){a.topProductData=t.data.Data})).catch((function(t){console.log(JSON.stringify(t))}))},switchImgVideo:function(t){this.switchImg="img"===t,h()}}};function h(){new Swiper("#proDetailPhoto",{direction:"horizontal",loop:!1,initialSlide:0,pagination:{el:".swiper-pagination",type:"bullets"},dynamicBullets:!0})}var f=g,v=f,w=(e("ed4d"),e("2877")),b=Object(w["a"])(v,c,l,!1,null,null,null),C=b.exports;i.a.use(r.a),i.a.prototype.language=n["a"].language,i.a.prototype.$util=n["a"],i.a.config.productionTip=!1,new i.a({render:function(t){return t(C)}}).$mount("#app")},e7e4:function(t,a,e){var s=e("24fb");a=s(!0),a.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"index.vue?vue&type=style&index=0&lang=less&"}]),t.exports=a},ed4d:function(t,a,e){"use strict";var s=e("6e2e"),i=e.n(s);i.a}});
//# sourceMappingURL=product.c7bed83d.js.map