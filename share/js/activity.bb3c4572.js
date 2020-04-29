(function(t){function e(e){for(var i,r,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={activity:0},s=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="../";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([6,"chunk-vendors","chunk-common"]),a()})({"410e":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=a("4eb5"),s=a.n(n),r=(a("352e"),a("b067"),a("38b8"),a("f644")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container flex-col pt-4 bk-img",attrs:{id:"activityDetail"}},[i("h1",{staticClass:"loading-text",attrs:{id:"loadingText"}},[t._v(t._s(t.messages[t.language].tweebaa))]),t.activityData?i("div",{staticClass:"text-center p-5"},[i("img",{staticStyle:{width:"160px",height:"auto"},attrs:{src:a("72f0")}})]):t._e(),t.activityData?i("div",[i("div",{staticClass:"mt-0 pt-0 mm-15"},[i("div",{staticClass:"swiper-container"},[i("div",{staticClass:"swiper-wrapper"},t._l(t.activityData.pictures,(function(e,a){return i("div",{staticClass:"swiper-slide",on:{click:function(e){return t.showImages(a)}}},[i("img",{staticStyle:{"object-fit":"contain"},attrs:{src:e.PictureUrl}})])})),0)]),i("p",{staticClass:"text-title p-4"},[t._v(t._s(t.activityData.Name))]),t.activityData.LaunchStartTimeUtc?i("p",{staticClass:"text-light-gray pl-4 small mt-2"},[t._v(" "+t._s(t.messages[t.language].eventTime)+"： "+t._s(t._f("formatTime")(t.activityData.LaunchStartTimeUtc))+" - "+t._s(t._f("formatTime")(t.activityData.LaunchEndTimeUtc))+" ")]):t._e(),t.activityData.RegistrationStartTimeUtc?i("p",{staticClass:"text-light-gray pl-4 small mt-2"},[t._v(" "+t._s(t.messages[t.language].signupTime)+"： "+t._s(t._f("formatTime")(t.activityData.RegistrationStartTimeUtc))+" - "+t._s(t._f("formatTime")(t.activityData.RegistrationEndTimeUtc))+" ")]):t._e(),t.activityData.ParticipantLimit?i("p",{staticClass:"text-light-gray pl-4 small mt-2"},[t._v(" "+t._s(t.messages[t.language].participation)+"： "+t._s(t.activityData.ParticipantLimit)+" ")]):t._e(),i("p",{staticClass:"text-light-gray pl-4 small mt-2 pb-4"},[t._v(" "+t._s(t.messages[t.language].address)+"： "+t._s(t.activityData.Address)+" ")]),i("div",{staticClass:"ui-divide"}),i("div",{staticClass:"mt-4"},[i("p",{staticClass:"text-dark-gray ui-border-b pl-4 pb-3"},[t._v(t._s(t.messages[t.language].registered))]),i("ul",{staticClass:"ui-row text-center mt-3"},t._l(t.participants,(function(e,a){return a<9?i("li",{staticClass:"userBox ui-col ui-col-20 p-2"},[i("img",{staticClass:"tycoon-avatar",attrs:{src:e.AvatarUrl,alt:""}}),i("div",{staticClass:"text-dark-gray x-small ui-nowrap"},[t._v(t._s(e.Storename))])]):t._e()})),0),0===t.participants.length?i("p",{staticClass:"p-4 text-center text-light-gray small"},[t._v(t._s(t.messages[t.language].unregistered))]):t._e()]),i("div",{staticClass:"ui-divide"}),i("p",{staticClass:"text-dark-gray ui-border-b pl-4 pb-3 mt-4"},[t._v(t._s(t.messages[t.language].details))]),i("pre",{staticClass:"text-dark-gray p-4",domProps:{innerHTML:t._s(t.activityData.Description)}})])]):t._e(),t.activityData?i("div",{staticClass:"ui-divide mm-15"}):t._e(),i("launch-app",{attrs:{type:"activity"}},[i("div",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.shareid,expression:"shareid"}],staticClass:"mm-15 mt-4",on:{click:function(e){return t.gotoDownload()}}},[t.activityData?i("img",{staticClass:"img-fluid",attrs:{src:t.banner,alt:""}}):t._e()])]),t.activityData?i("p",{staticClass:"p-4 platform mm-15"},[t._v(t._s(t.messages[t.language].platform))]):t._e(),i("footer-download",{attrs:{invitecode:t.shareid,type:"activity"}})],1)},c=[],l=a("0cfb"),u=a("7966"),p={name:"Activity",components:{LaunchApp:l["a"],FooterDownload:u["a"]},mounted:function(){this.getBanner(),this.getActivityDetail(),this.shareid=this.$util.getUrlParam("shareid")},filters:{formatTime:function(t){return moment.utc(t).local().format("YYYY-MM-DD HH:mm")}},created:function(){},data:function(){return{activityData:"",participants:[],activityList:[],nowTime:moment(),shareid:"",banner:"",userCount:"",images:[],messages:{en:{tweebaa:"Tweebaa",eventTime:"Event",signupTime:"Signup",participation:"Participation",address:"Address",registered:"Registered",unregistered:"Unregistered",details:"Details",moreInfo:"More Events",downloadApp:"Download Tweebaa App Get Tweebucks",platform:"Tweebaa is the world’s 1st multi-dimensional value-exchange social networking platform. Designed for creating value from non-traditional products, ideas, and your personal influence; Tweebaa allows anyone to earn on a large scale with zero financial investment. With the tools we provide, anyone cancreate a personalized foundation for their business completely free and suggest, shop, or share products with people all over the world and earn money."},zh:{tweebaa:"推易吧",eventTime:"活动时间",signupTime:"报名时间",participation:"活动人数",address:"活动地址",registered:"已报名",unregistered:"暂无报名",details:"活动详情",moreInfo:"更多精彩内容",downloadApp:"下载推易吧App 获取T豆奖励",platform:"推易吧是一个让您利用自己的知识、经验、技巧、兴趣和人脉来变现的平台。推易吧会为您提供多样化的创意产品和工具，让您轻松开始零成本、零库存的创业之旅。"}}}},methods:{getBanner:function(){Math.floor(4*Math.random());try{this.banner=a("1f8c")("./banner1-"+this.$util.language+".jpg")}catch(t){}},getActivityDetail:function(){var t=this,e=this.$util.getUrlParam("id"),a=this.$util.getBaseUrl()+"api/charity/voics-activity/"+e;this.$util.getAxois(a,"GET",{}).then((function(e){var a=document.getElementById("loadingText"),i=a.parentNode;t.activityData=e.data.Data,t.participants=e.data.Users,t.userCount=e.data.UserCount,i.removeChild(a),setTimeout((function(){d()}))})).catch((function(t){console.log(JSON.stringify(t)+"@@@@@@@@@@@@@@@@")}))},getActivityList:function(){var t=this.$util.getBaseUrl()+"/api/voics/info/?currentpage=0&itemsperpage=5",e=this;this.$util.getAxois(t,"GET",{}).then((function(t){console.log(JSON.stringify(t)),e.newsList=t.data.Data})).catch((function(t){console.log(JSON.stringify(t))}))}}};function d(){new Swiper(".swiper-container",{direction:"horizontal",loop:!1,initialSlide:0,pagination:{el:".swiper-pagination",type:"bullets"}})}var g=p,f=g,m=(a("77d3"),a("2877")),v=Object(m["a"])(f,o,c,!1,null,null,null),h=v.exports;i["a"].use(s.a),i["a"].prototype.language=r["a"].language,i["a"].prototype.$util=r["a"],i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(h)}}).$mount("#app")},"4a91":function(t,e,a){var i=a("24fb");e=i(!0),e.push([t.i,".page-activity .ui-divide{background-color:#f2f2f2;height:8px}","",{version:3,sources:["/Users/jinguangguo/Desktop/king_work/tweebaa_share/src/pages/activity/index.vue?vue&type=style&index=0&lang=less&","/Users/jinguangguo/Desktop/king_work/tweebaa_share/src/pages/activity/index.vue"],names:[],mappings:"AAsEA,0BAEQ,wBAAA,CACA,UCtER",file:"index.vue?vue&type=style&index=0&lang=less&",sourcesContent:["\n// #1652F0\n@color-blue: #1652F0;\n@color-blue-1: #1e82c0;\n@color-red: #ff7f00;\n@color-green: #4fbb92;\n@color-font: #677382;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.page-activity {\n    .ui-divide {\n        background-color: #f2f2f2;\n        height: 8px;\n    }\n}\n",".page-activity .ui-divide {\n  background-color: #f2f2f2;\n  height: 8px;\n}\n"]}]),t.exports=e},6:function(t,e,a){t.exports=a("410e")},6480:function(t,e,a){var i=a("4a91");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("499e").default;n("e400f9f2",i,!0,{sourceMap:!0,shadowMode:!1})},"77d3":function(t,e,a){"use strict";var i=a("6480"),n=a.n(i);n.a}});
//# sourceMappingURL=activity.bb3c4572.js.map