(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],p=0,d=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);m&&m(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={post:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="../";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var m=l;a.push([1,"chunk-vendors","chunk-common"]),n()})({1:function(t,e,n){t.exports=n("af3b")},4694:function(t,e,n){"use strict";var i=n("bc0b"),s=n.n(i);s.a},"7c93":function(t,e,n){var i=n("24fb");e=i(!0),e.push([t.i,".page-post .swiper-container{position:fixed;height:100%;width:100%;background:#000;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.page-post .swiper-wrapper{height:auto}.page-post .popularize-product-box img{width:30px;height:30px;vertical-align:middle;margin-right:.5rem;background:#fff}.page-post .infos .iconshare{margin-right:4px;vertical-align:middle}.page-post .infos .text{vertical-align:middle}.page-post .comments .comment-list{font-size:14px}.page-post .comments .comment-list .comment-title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:4px}.page-post .comments .comment-list .comment-title .comment-time{font-size:13px}.page-post .comments .comment-list .reply-list{background-color:#fafafa;font-size:12px}.page-post .comments .comment-list .reply-list .reply-item{display:-webkit-box;display:-ms-flexbox;display:flex}.page-post .comments .comment-list .reply-list .reply-item .reply-img{border-radius:50%}.page-post .comments .comment-list .reply-list .reply-item .reply-info{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-left:.5rem}.page-post .comments .comment-list .reply-list .reply-item .reply-info .reply-title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.page-post .top-posts ul.list .ui-border-b:last-child:before{border-bottom:0 none}","",{version:3,sources:["/Users/jinguangguo/Desktop/king_work/tweebaa_share/src/pages/post/index.vue?vue&type=style&index=0&lang=less&","/Users/jinguangguo/Desktop/king_work/tweebaa_share/src/pages/post/index.vue"],names:[],mappings:"AA6LA,6BAEQ,cAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,mBAAA,CAAA,mBAAA,CAAA,YAAA,CACA,wBAAA,CAAA,qBAAA,CAAA,kBC1LR,CD+KA,2BAcQ,WC1LR,CD4KA,uCAiBQ,UAAA,CACA,WAAA,CACA,qBAAA,CACA,kBAAA,CACA,eC1LR,CDqKA,6BAyBY,gBAAA,CACA,qBC3LZ,CDiKA,wBA6BY,qBC3LZ,CD8JA,mCAmCY,cC9LZ,CD2JA,kDAqCgB,mBAAA,CAAA,mBAAA,CAAA,YAAA,CACA,wBAAA,CAAA,qBAAA,CAAA,6BAAA,CACA,wBAAA,CAAA,qBAAA,CAAA,kBAAA,CACA,iBC7LhB,CDqJA,gEA0CoB,cC5LpB,CDkJA,+CA8CgB,wBAAA,CACA,cC7LhB,CD8IA,2DAiDoB,mBAAA,CAAA,mBAAA,CAAA,YC5LpB,CD2IA,sEAmDwB,iBC3LxB,CDwIA,uEAsDwB,kBAAA,CAAA,UAAA,CAAA,MAAA,CACA,iBC3LxB,CDoIA,oFAyD4B,mBAAA,CAAA,mBAAA,CAAA,YAAA,CACA,wBAAA,CAAA,qBAAA,CAAA,6BAAA,CACA,wBAAA,CAAA,qBAAA,CAAA,kBC1L5B,CDoMgB,6DACI,oBClMpB",file:"index.vue?vue&type=style&index=0&lang=less&",sourcesContent:["\n// #1652F0\n@color-blue: #1652F0;\n@color-blue-1: #1e82c0;\n@color-red: #ff7f00;\n@color-green: #4fbb92;\n@color-font: #677382;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.page-post {\n    .swiper-container {\n        position: fixed;\n        height: 100%;\n        width: 100%;\n        background: rgb(0, 0, 0);\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        display: flex;\n        align-items: center;\n    }\n    .swiper-wrapper {\n        height: auto;\n    }\n    .popularize-product-box img {\n        width: 30px;\n        height: 30px;\n        vertical-align: middle;\n        margin-right: .5rem;\n        background: #fff;\n    }\n    .infos {\n        .iconshare {\n            margin-right: 4px;\n            vertical-align: middle;\n        }\n        .text {\n            vertical-align: middle;\n        }\n    }\n    /*最新评论*/\n    .comments {\n        .comment-list {\n            font-size: 14px;\n            .comment-title {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 4px;\n                .comment-time {\n                    font-size: 13px;\n                }\n            }\n            .reply-list {\n                background-color: #fafafa;\n                font-size: 12px;\n                .reply-item {\n                    display: flex;\n                    .reply-img {\n                        border-radius: 50%;\n                    }\n                    .reply-info {\n                        flex: 1;\n                        margin-left: .5rem;\n                        .reply-title {\n                            display: flex;\n                            justify-content: space-between;\n                            align-items: center;\n                        }\n                    }\n                }\n            }\n        }\n    }\n    .top-posts {\n        ul.list {\n            .ui-border-b {\n                &:last-child:before {\n                    border-bottom: 0 none;\n                }\n            }\n        }\n    }\n\n}\n",".page-post {\n  /*最新评论*/\n}\n.page-post .swiper-container {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background: #000000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n}\n.page-post .swiper-wrapper {\n  height: auto;\n}\n.page-post .popularize-product-box img {\n  width: 30px;\n  height: 30px;\n  vertical-align: middle;\n  margin-right: 0.5rem;\n  background: #fff;\n}\n.page-post .infos .iconshare {\n  margin-right: 4px;\n  vertical-align: middle;\n}\n.page-post .infos .text {\n  vertical-align: middle;\n}\n.page-post .comments .comment-list {\n  font-size: 14px;\n}\n.page-post .comments .comment-list .comment-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.page-post .comments .comment-list .comment-title .comment-time {\n  font-size: 13px;\n}\n.page-post .comments .comment-list .reply-list {\n  background-color: #fafafa;\n  font-size: 12px;\n}\n.page-post .comments .comment-list .reply-list .reply-item {\n  display: flex;\n}\n.page-post .comments .comment-list .reply-list .reply-item .reply-img {\n  border-radius: 50%;\n}\n.page-post .comments .comment-list .reply-list .reply-item .reply-info {\n  flex: 1;\n  margin-left: 0.5rem;\n}\n.page-post .comments .comment-list .reply-list .reply-item .reply-info .reply-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.page-post .top-posts ul.list .ui-border-b:last-child:before {\n  border-bottom: 0 none;\n}\n"]}]),t.exports=e},af3b:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i,s=n("2b0e"),a=n("4eb5"),o=n.n(a),r=(n("352e"),n("38b8"),n("f644")),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-post bk-img"},[t.moment?t._e():i("h1",{staticClass:"loading-text",attrs:{id:"loadingText"}},[t._v(t._s(t.messages[t.language].tweebaa))]),t.moment?i("div",{staticClass:"content"},[t._m(0),i("div",{staticClass:"user-info-box"},[i("img",{staticClass:"user-avatar",attrs:{src:t.moment.Owner.ThumbnailAvatarUrl}}),i("div",{staticClass:"name"},[i("span",{staticStyle:{"font-size":"1.8rem","font-weight":"600"}},[t._v(t._s(t.moment.Owner.StoreName))])]),i("p",{staticClass:"introduction small",domProps:{innerHTML:t._s(t.moment.Owner.Introduction)}})]),i("div",{staticClass:"post-box mt-2 pl-4 pr-4"},[1===t.moment.Pictures.length?i("div",{staticClass:"moment-picture-one mm-1"},[t.moment.Pictures[0].ThumbnailUrl?t._e():i("img",{staticClass:"img-link",style:{"max-height":t.clientWidth+"px"},attrs:{src:t.moment.Pictures[0].DownloadUrl,"data-img":t.moment.Pictures[0].DownloadUrl},on:{click:function(e){return t.openPic(0)}}}),t.moment.Pictures[0].ThumbnailUrl?i("img",{staticClass:"img-link",style:{"max-height":t.clientWidth+"px"},attrs:{"data-img":t.moment.Pictures[0].DownloadUrl,src:t.moment.Pictures[0].ThumbnailUrl},on:{click:function(e){return t.openPic(0)}}}):t._e()]):i("div",{staticClass:"moment-pictures clearfix"},t._l(t.moment.Pictures,(function(e,n){return i("div",{staticClass:"moment-pic-box clearfix",style:{height:1===t.moment.Pictures.length?t.picWidth66+"px":t.picWidth+"px",width:"33.33%"},attrs:{"data-img":e.DownloadUrl},on:{click:function(e){return t.openPic(n)}}},[e.ThumbnailUrl?t._e():i("img",{staticClass:"img-box",attrs:{src:e.DownloadUrl}}),e.ThumbnailUrl?i("img",{staticClass:"img-box",attrs:{src:e.ThumbnailUrl}}):t._e()])})),0),t.moment.Videos.length>0?i("div",{staticStyle:{position:"relative",width:"100%",height:"0","background-color":"#000",padding:"0 0 56.25% 0","background-size":"contain","margin-bottom":"1rem"}},[t.moment.Videos.length>0?i("div",{staticStyle:{width:"100%",position:"absolute","background-color":"#2f2f2f",height:"0",padding:"0 0 56.25% 0","background-size":"contain","margin-bottom":"1rem"},style:{background:"url("+t.moment.Videos[0].ThumbnailUrl+") no-repeat center center",backgroundSize:"contain"}}):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:t.videoReady&&t.moment.Videos.length>0,expression:"videoReady && moment.Videos.length>0"}],staticStyle:{width:"100%",position:"absolute","z-index":"999","background-color":"rgba(0,0,0,0)",height:"0",padding:"0 0 56.25% 0","margin-bottom":"1rem"},attrs:{id:"tweebaaPlayerElement"}})]):t._e(),t.moment.Title?i("p",{staticClass:"text-dark-gray text-b p-4 mb-3 mt-3"},[t._v(t._s(t.moment.Title))]):t._e(),i("pre",{staticClass:"moment-content overflow mb-3 mt-3",domProps:{innerHTML:t._s(t.moment.Content)}}),t.moment.ExternalPostUrl?i("div",{staticClass:"link-box mb-3",attrs:{id:"linkBox"}},[t._m(1),i("div",{staticClass:"link-text text-title small"},[t.moment.ExternalPostText?i("span",[t._v(t._s(t.moment.ExternalPostText))]):t._e(),t.moment.ExternalPostText||t.moment.Title?t._e():i("span",[t._v(t._s(t.moment.ExternalPostUrl))]),i("i",{staticClass:"icon iconfont icon-play_fill"})])]):t._e(),i("launch-app",{attrs:{type:"post",params:t.paramsForApp}},t._l(t.moment.MomentProducts,(function(e){return i("div",{staticClass:"popularize-product-box mb-4 flex"},[i("img",{staticClass:"img",attrs:{src:e.Product.FeaturedPicture.DownloadUrl}}),i("div",{staticClass:"flex-1",staticStyle:{padding:"4px 0"}},[i("span",{staticClass:"x-small text-dark-gray ui-nowrap flex-1"},[i("span",{staticClass:"text"},[t._v(t._s(e.Product.Name))])])])])})),0),i("div",{staticClass:"infos ui-row-flex small text-light-gray p-4 text-center ui-border-t",staticStyle:{"margin-top":"8px"}},[i("div",{staticClass:"ui-col"},[i("i",{staticClass:"iconshare icon-view"}),i("span",{staticClass:"text"},[t._v(t._s(t.messages[t.language].views)+" "+t._s(t.moment.ViewCount))])]),i("div",{staticClass:"ui-col"},[i("i",{staticClass:"iconshare icon-dianzan"}),i("span",{staticClass:"text"},[t._v(t._s(t.messages[t.language].likes)+" "+t._s(t.moment.LikedCount))])]),i("div",{staticClass:"ui-col"},[i("i",{staticClass:"iconshare icon-comment1"}),i("span",{staticClass:"text"},[t._v(t._s(t.messages[t.language].comments)+" "+t._s(t.moment.CommentCount))])])]),i("div",{staticClass:"ui-divide"}),t.comments.length>0?i("div",{staticClass:"comments"},[i("p",{staticClass:"p-4 ui-border-b"},[t._v(t._s(t.messages[t.language].topComments)+" ")]),i("ul",{staticClass:"comment-list"},t._l(t.comments,(function(e){return i("li",{staticClass:"flex p-4 ui-border-b comment-item"},[i("img",{staticStyle:{"border-radius":"40px"},attrs:{src:e.User.ThumbnailAvatarUrl,width:"60",height:"60"}}),i("div",{staticClass:"flex-1 pl-3"},[i("div",{staticClass:"comment-title flex"},[i("p",{staticClass:"small text-light-gray"},[t._v(t._s(e.User.StoreName))]),i("span",{staticClass:"text-light-gray comment-time"},[t._v(t._s(t._f("formatTime")(e.CreateAt)))])]),i("p",{staticClass:"text-dark-gray"},[t._v(t._s(e.Comment))]),i("ul",{staticClass:"reply-list"},t._l(e.SubCommentsNew,(function(e){return i("li",{staticClass:"flex p-4 ui-border-b reply-item"},[i("img",{staticClass:"reply-img",attrs:{src:e.User.AvatarUrl,width:"40",height:"40"}}),i("div",{staticClass:"reply-info"},[i("div",{staticClass:"reply-title"},[i("p",{staticClass:"text-light-gray"},[t._v(t._s(e.User.StoreName))]),i("span",{staticClass:"text-light-gray reply-time"},[t._v(t._s(t._f("formatTime")(e.CreateAt)))])]),i("p",{staticClass:"text-dark-gray"},[t._v(t._s(e.Comment))])])])})),0)])])})),0),i("div",{staticClass:"ui-divide"})]):t._e()],1),i("div",{staticClass:"top-posts"},[i("p",{staticClass:"p-4 ui-border-b"},[t._v(t._s(t.messages[t.language].topPost)+" ")]),i("ul",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.shareid,expression:"shareid"}],staticClass:"list",on:{click:function(e){return t.gotoDownload(t.moment.Owner.UserName)}}},t._l(t.momentsData,(function(e){return i("li",{staticClass:"item p-4 flex ui-border-b"},[e.Pictures.length>0?i("img",{attrs:{src:e.Pictures[0].PictureUrl,alt:""}}):t._e(),0===e.Pictures.length&&0!==e.Videos.length?i("img",{attrs:{src:e.Videos[0].ThumbnailUrl,alt:""}}):t._e(),0===e.Pictures.length&&0===e.Videos.length?i("img",{attrs:{src:n("16f9"),alt:""}}):t._e(),i("div",{staticClass:"flex-1"},[i("p",{staticClass:"text-dark-gray"},[t._v(t._s(e.Title))]),i("pre",{staticClass:"text-light-gray top-post-content",staticStyle:{color:"#8c8c8c"},domProps:{innerHTML:t._s(e.Content)}})])])})),0)]),i("div",{staticClass:"ui-divide"}),i("launch-app",{attrs:{type:"post",params:t.paramsForApp}},[i("div",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.shareid,expression:"shareid"}],staticClass:"mt-4"},[i("img",{staticClass:"img-fluid",attrs:{src:t.banner},on:{click:function(e){return t.gotoDownload()}}})])]),i("p",{staticClass:"p-4 platform"},[t._v(t._s(t.messages[t.language].platform))]),i("div",{staticClass:"swiper-container",attrs:{id:"swiper"},on:{click:function(e){return t.hidePic()}}},[i("div",{staticClass:"swiper-wrapper"},t._l(t.moment.Pictures,(function(e,n){return i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:e.PictureUrl},on:{click:function(e){return t.hidePic()}}})])})),0)])],1):t._e(),t._m(2),i("footer-download",{attrs:{invitecode:t.shareid,params:t.paramsForApp,type:"post"}})],1)},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-center p-5"},[i("img",{staticStyle:{width:"160px",height:"auto"},attrs:{src:n("72f0"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link-icon"},[n("i",{staticClass:"icon iconshare icon-lianjie"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"1rem"}},[n("div",{staticStyle:{width:"33.33%"},attrs:{id:"testWidth"}}),n("div",{staticStyle:{width:"66.66%"},attrs:{id:"testWidth66"}})])}],m=(n("a15b"),n("d81d"),n("fb6a"),n("bc3a")),p=n.n(m),d=n("0cfb"),u=n("7966"),g={name:"Post",components:{LaunchApp:d["a"],FooterDownload:u["a"]},filters:{formatTime:function(t){return moment.utc(t).local().format("YYYY-MM-DD HH:mm")}},mounted:function(){this.getBanner(),this.getPostDetail(),this.getCountryCode(),this.shareid=this.$util.getUrlParam("shareid")},data:function(){return{clientWidth:document.body.clientWidth||document.documentElement.clientWidth,moment:"",comments:[],momentsData:"",countryCode:"CN",picWidth:0,picWidth66:0,shareid:"",banner:"",videoReady:!1,paramsForApp:"",messages:{en:{tweebaa:"Tweebaa",views:"Views",likes:"Likes",comments:"Comments",topComments:"New Comments",topPost:"Top Post",hi:"Hi,I'm ",tips:"You can also create great content",downloadApp:"Download Tweebaa App Get Tweebucks",platform:"Tweebaa is the world’s 1st multi-dimensional value-exchange social networking platform. Designed for creating value from non-traditional products, ideas, and your personal influence; Tweebaa allows anyone to earn on a large scale with zero financial investment. With the tools we provide, anyone cancreate a personalized foundation for their business completely free and suggest, shop, or share products with people all over the world and earn money."},zh:{tweebaa:"推易吧",views:"浏览",likes:"赞",comments:"评论",topComments:"最新留言",topPost:"他（她）的热门瞬间",hi:"Hi,我是 ",tips:"你也能创造精彩瞬间",downloadApp:"下载推易吧App，获取T豆奖励",platform:"推易吧是一个让您利用自己的知识、经验、技巧、兴趣和人脉来变现的平台。推易吧会为您提供多样化的创意产品和工具，让您轻松开始零成本、零库存的创业之旅。"}}}},methods:{getBanner:function(){Math.floor(4*Math.random());try{this.banner=n("1f8c")("./banner1-"+this.$util.language+".jpg")}catch(t){}},getCountryCode:function(){var t=this;p.a.get("https://api.ipdata.co/?api-key=78e1295abccb1616027b85a6bcb612d286aef4cdb397a2c091fd861a").then((function(e){console.log(e),t.countryCode=e.data.country_code})).catch((function(t){console.log(t)}))},_pars:function(t){var e=[];for(var n in t)e.push(n+"="+t[n]);return e.join("&")},getPostDetail:function(){var t=this,e=this.$util.getUrlParam("postid"),n=this.$util.getBaseUrl()+"api/moments/"+e;function s(e,n){var i=window.WowzaPlayer.create("tweebaaPlayerElement",{license:t.$util.getL(),title:"",description:"",sourceURL:e,autoPlay:!0,volume:"75",mute:!1,loop:!1,audioOnly:!1,uiShowQuickRewind:!0,uiQuickRewindSeconds:"15",posterFrameURL:n});function s(){console.log("Starting BeachBall")}function a(){console.log("Stopping BeachBall");var t=document.getElementById("loading");t&&(t.innerHTML="")}function o(t){"onAssetPlayerStarted"===t.eventID&&(s(),i.onPlayheadTime(r))}function r(t){t.time>0&&(a(),i.removeOnPlayheadTime(r))}t.videoReady=!0,i.onPlay(o)}this.$util.getAxois(n,"GET",{}).then((function(n){t.moment=n.data,setTimeout((function(){t.getComments(n.data.MomentGuid,n.data.Id),t.getAllmonents(n.data.Owner.Id),t.paramsForApp=t._pars({postid:e,userid:n.data.Owner.Id,postguid:n.data.MomentGuid}),n.data.Videos.length>0&&s(n.data.Videos[0].DownloadUrl,n.data.Videos[0].ThumbnailUrl),i=new window.Swiper(".swiper-container",{direction:"horizontal",loop:!1,initialSlide:0,pagination:{el:".swiper-pagination",type:"bullets"}}),document.getElementById("swiper").style.display="none";var a=t.$util.getBaseUrl()+"api/v2/analytics",o={AnalyticsItemTypeId:1,AnalyticsActionTypeId:1,PostId:e,CountryCode:t.countryCode,StaySeconds:Math.floor(110*Math.random())+10};t.$util.getAxois(a,"POST",o).then((function(t){})).catch((function(t){console.log(JSON.stringify(t)+"#######################")})),t.picWidth=document.getElementById("testWidth").offsetWidth,t.picWidth66=document.getElementById("testWidth66").offsetWidth}))})).catch((function(t){console.log(JSON.stringify(t))}))},openPic:function(t){i.slideTo(t),document.getElementById("swiper").style.display="flex"},hidePic:function(){document.getElementById("swiper").style.display="none"},getComments:function(t,e){var n=this,i={PostGuid:t,PostId:e},s=this.$util.getBaseUrl()+"/api/v2/post/comments";this.$util.getAxois(s,"POST",i).then((function(t){var e=t.data;e.length>0&&(e=e.slice(0,5),e.map((function(t,e){if(t.SubComments&&t.SubComments.length>0){var n=t.SubComments.slice(0,5);t.SubCommentsNew=n.reverse()}})),n.comments=e)})).catch((function(t){console.log(JSON.stringify(t))}))},getAllmonents:function(t){var e=this,n=this.$util.getBaseUrl()+"/api/v2/moments",i={ownerId:t,currentpage:0,itemsperpage:3,ShowOnHomePage:!0};this.$util.getAxois(n,"POST",i).then((function(t){e.momentsData=t.data.Data})).catch((function(t){console.log(JSON.stringify(t))}))},gotoDownload:function(){var t=this;setTimeout((function(){"ios"===t.$util.getPhoneSystem()?window.location.href="https://apps.apple.com/us/app/tweebaa/id1467778439":"Android"===t.$util.getPhoneSystem()&&(window.location.href="weixin.html")}),1e3)}}},A=g,f=A,h=(n("4694"),n("2877")),C=Object(h["a"])(f,l,c,!1,null,null,null),b=C.exports;s["a"].use(o.a),s["a"].prototype.language=r["a"].language,s["a"].prototype.$util=r["a"],s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(b)}}).$mount("#app")},bc0b:function(t,e,n){var i=n("7c93");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("499e").default;s("28a17dd8",i,!0,{sourceMap:!0,shadowMode:!1})}});
//# sourceMappingURL=post.5eb31286.js.map