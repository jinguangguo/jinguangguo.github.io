(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"27f9":function(n,i,t){"use strict";t("c975"),t("ac1f"),t("466d");var e=/os/i,o=/iphone/i,r=/ipad/i,a=/android/i,s=/android.*?mobile/i,c=/(OpenCourse|vopen)/i,u=navigator.userAgent,l=function(){return e.test(u)},d=function(){return a.test(u)},f=function(){return/Safari/i.test(u)},g=function(){return s.test(u)},v=function(){return d()&&!g()},h=function(){return c.test(u)},m=function(){return d()||l()},w=function(){return o.test(u)},b=function(){return r.test(u)},p=function(){return u.indexOf("mqqbrowser")>-1},C=function(){return/MicroMessenger/i.test(u)},k=function(){return u.indexOf("weibo")>-1},A=function(){if(l()){var n=u.match(/os (\d+)_(\d)+/i);if(n&&n[1])return n[1]}return-1},I=function(){return/YiXin/i.test(u)},O=function(){return/QQ\//i.test(u)},Q=function(){var n=navigator.userAgent.match(/YiXin\/(\d{4})/i),i=n&&n[1]||0;return i};i["a"]={isIOS:l,isOpenApp:h,isAndroidMobile:g,isAndroidPad:v,isIPhone:w,isIPad:b,isMobile:m,isAndroid:d,isWeibo:k,isSafari:f,isYixin:I,isQQ:O,getIOSVersion:A,getYiXinVersion:Q,isQQBrowser:p,isWechat:C}},"352e":function(n,i,t){},"657a":function(n,i,t){"use strict";var e=t("27f9"),o=t("c5e1"),r=t.n(o);r()(".lang-select").click((function(n){n.preventDefault(),n.stopPropagation(),r()(".lang-select").removeClass("active");var i=r()(this);i.addClass("active");var t=i.attr("data-lang");if("lang-zh"===t?(r()("body").removeClass("lang-en").addClass("lang-zh"),window.localStorage.setItem("lang","lang-zh")):(r()("body").removeClass("lang-zh").addClass("lang-en"),window.localStorage.setItem("lang","lang-en")),r()(document).trigger("switch-lang"),!0===e["a"].isMobile()){var o=r()(".nav-mobile .navigation");o.css({right:"-100%"})}}))},d2cd:function(n,i,t){"use strict";var e=t("c5e1"),o=t.n(e);o()(".nav-mobile .menu-box").click((function(){var n=o()(".nav-mobile .navigation");!0===n.data("show")?(n.css({right:"-100%"}),n.data("show",!1)):(n.css({right:0}),n.data("show",!0))})),o()(".logo").click((function(){return o()("html, body").animate({scrollTop:0},"slow"),!1}))}}]);
//# sourceMappingURL=chunk-common.978ab49a.js.map