(function(e){function n(n){for(var i,s,l=n[0],r=n[1],c=n[2],d=0,h=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&h.push(a[s][0]),a[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);u&&u(n);while(h.length)h.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],i=!0,l=1;l<t.length;l++){var r=t[l];0!==a[r]&&(i=!1)}i&&(o.splice(n--,1),e=s(s.s=t[0]))}return e}var i={},a={index:0},o=[];function s(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=i,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)s.d(t,i,function(n){return e[n]}.bind(null,i));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var u=r;o.push([0,"chunk-vendors","chunk-common"]),t()})({0:function(e,n,t){e.exports=t("df31")},"1c93":function(e,n,t){t("99af"),t("c975"),t("13d5"),t("a434"),t("ac1f"),t("5319"),function(e){function n(e){var n=null,t={callbackDelay:300,_lastOrientation:window.orientation,_timeout:0},i={init:function(){window.addEventListener?(window.addEventListener("resize",i._handler_resize,!1),window.addEventListener("orientationchange",i._handler_resize,!1)):window.attachEvent&&(window.attachEvent("onresize",i._handler_resize),window.attachEvent("onorientationchange",i._handler_resize))},destroy:function(){var e=t._timeout;e&&(clearTimeout(e),t._timeout=0),n.onResize=null,window.removeEventListener?(window.removeEventListener("resize",i._handler_resize),window.removeEventListener("orientationchange",i._handler_resize)):window.detachEvent&&(window.detachEvent("onresize",i._handler_resize),window.detachEvent("onorientationchange",i._handler_resize))},getWidth:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},getHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},_handler_resize:function(){if("onorientationchange"in window){var e=window.orientation;if(e==t._lastOrientation)return;t._lastOrientation=e}t._timeout&&clearTimeout(t._timeout),t._timeout=setTimeout(i._handler_timeout,n.callbackDelay)},_handler_timeout:function(){clearTimeout(t._timeout),t._timeout=0,n.onResize(n.getWidth(),n.getHeight())}};for(var a in n={callbackDelay:t.callbackDelay,init:i.init,destroy:i.destroy,getWidth:i.getWidth,getHeight:i.getHeight,onResize:null},e)n[a]=e[a];return n.init(),n}e.fn.SnapScroll=function(t){var i=null,a={events:!0,eventChangeActive:"snapscroll_change-active",eventChangeVisible:"snapscroll_change-visible",classes:!0,classSnap:"snap-scroll",classVisible:"snap-scroll-visible",classActive:"snap-scroll-active",hashes:!1,scrollDelay:300,wheelInterval:1e3,animateDuration:250,animateTimeBuffer:100,snapTop:!0,snapBottom:!0,snaps:[],maxWheelDeviation:100};e.fn.SnapScroll.defaults=a;var o={_NUM_WHEEL_EVENT_DELTAS:100},s={_$this:this,_resizer:null,_snaps:null,_currentSnapIndex:-1,_scrollTimeout:0,_lastanimateDuration:0,_wheelDir:0,_lastWheelTime:0,_wheelEventDeltas:[],_wheelEventDeltaAvg:0,_lastWheelEventTime:0},l={init:function(){i.classes&&s._$this.addClass(i.classSnap),s._resizer=new n({onResize:l._handler_resize}),l._handler_resize(),e(document).on("scroll",l._handler_document_scroll),e(document).on("keydown",l._handler_document_keydown),e(window).on("DOMMouseScroll mousewheel wheel",l._handler_window_mousewheel)},destroy:function(){e(document).off("scroll",l._handler_document_scroll),e(document).off("keydown",l._handler_document_keydown),e(window).off("DOMMouseScroll mousewheel wheel",l._handler_window_mousewheel),s._resizer&&(s._resizer.destroy(),s._resizer=null),s._snaps=null,s._currentSnapIndex=-1,s._scrollTimeout&&(clearTimeout(s._scrollTimeout),s._scrollTimeout=0),s._lastanimateDuration=0,s._wheelDir=0,s._lastWheelTime=0,s._wheelEventDeltas.splice(0,s._wheelEventDeltas.length),s._wheelEventDeltaAvg=0,s._lastWheelEventTime=0,i.classes&&s._$this.removeClass(i.classSnap)},snapClosest:function(){for(var e=l._getScrollPosition(),n=-1,t=-1,a=s._snaps,o=a.length,r=0;r<o;r++){var c=Math.abs(a[r]-e);(-1==t||c<t)&&(t=c,n=r)}i.snapIndex(n)},snapPrev:function(){i.snapIndex(s._currentSnapIndex-1)},snapNext:function(){i.snapIndex(s._currentSnapIndex+1)},snapIndex:function(n){n=Math.min(Math.max(n,0),s._snaps.length-1),s._currentSnapIndex=n;var t=s._snaps[n],a=[],o=null;if(s._$this.each((function(){var n=e(this);o||n.offset().top!=t||(o=n),i.classes&&(o==n?n.hasClass(i.classActive)||(n.addClass(i.classActive),a.push(n)):n.hasClass(i.classActive)&&(n.removeClass(i.classActive),a.push(n)))})),i.events){var r=a.length;if(r)for(var c=0;c<r;c++)a[c].trigger(i.eventChangeActive,o)}if(i.hashes){var u="";if(o){var d=o.attr("id");d&&(u="#"+d)}history.replaceState({},window.location.href,window.location.href.replace(/#.*$/,"")+u)}l._evalVisibility(),l._scrollTo(t)},getSnapIndex:function(){return s._currentSnapIndex},update:function(){var n=i.snaps.concat(),t=e(document).height()-window.innerHeight,a=s._$this;return a.each((function(){n.push(e(this).offset().top)})),i.snapTop&&n.push(0),i.snapBottom&&n.push(t),n=n.reduce((function(e,n){return-1==e.indexOf(n)&&n<=t&&e.push(n),e}),[]),n.sort(l._sortNumeric),s._snaps=n,s._snaps},isVisible:function(e){var n=e.offset().top,t=n+e.height(),i=l._getScrollPosition(),a=i+window.innerHeight;return n>=i&&n<a||t>i&&t<=a},_evalVisibility:function(){if(i.classes){var n=[],t=[];if(s._$this.each((function(){var a=e(this);i.isVisible(a)?(a.hasClass(i.classVisible)||(a.addClass(i.classVisible),n.push(a)),t.push(a)):a.hasClass(i.classVisible)&&(a.removeClass(i.classVisible),n.push(a))})),i.events)for(var a=n.length,o=0;o<a;o++)n[o].trigger(i.eventChangeVisible,{data:t})}},_sortNumeric:function(e,n){return e-n},_handler_document_scroll:function(e){i.classes&&l._evalVisibility(),s._scrollTimeout&&clearTimeout(s._scrollTimeout);var n=s._lastanimateDuration+i.animateDuration+i.animateTimeBuffer-(new Date).getTime();s._scrollTimeout=setTimeout(l._handler_scroll_timeout,Math.max(i.scrollDelay,n))},_handler_scroll_timeout:function(){clearTimeout(s._scrollTimeout),s._scrollTimeout=0,i.snapClosest()},_scrollTo:function(n){var t=l._getScrollPosition();if(t!=n){s._lastanimateDuration=(new Date).getTime();var a=e("html,body");a.stop(!0),a.animate({scrollTop:n},i.animateDuration)}},_handler_window_mousewheel:function(e){e.preventDefault();var n=!1,t=(new Date).getTime();if(s._lastWheelEventTime){var a=t-s._lastWheelEventTime,r=s._wheelEventDeltas.length;r==o._NUM_WHEEL_EVENT_DELTAS&&s._wheelEventDeltas.shift(),s._wheelEventDeltas.push(a),r++,s._wheelEventDeltaAvg=(s._wheelEventDeltaAvg*(r-1)+a)/r;var c=Math.abs(a-s._wheelEventDeltaAvg);c>=i.maxWheelDeviation&&(s._wheelEventDeltas.splice(0,r),n=!0)}else n=!0;s._lastWheelEventTime=t;var u=Math.max(-1,Math.min(1,e.originalEvent.deltaY||e.originalEvent.wheelDelta||-e.originalEvent.detail));return s._wheelDir=Math.abs(u)/u,(n||(new Date).getTime()>=s._lastWheelTime+i.wheelInterval)&&l._handler_wheel_timeout(),!1},_handler_wheel_timeout:function(){s._lastWheelTime=(new Date).getTime(),s._wheelDir<0?i.snapPrev():s._wheelDir>0&&i.snapNext()},_handler_document_keydown:function(e){switch(e.keyCode){case 38:i.snapPrev();break;case 40:i.snapNext();break}},_handler_resize:function(e,n){i.update(),-1==s._currentSnapIndex?i.snapClosest():i.snapIndex(s._currentSnapIndex)},_getScrollPosition:function(){return window.scrollY||document.body.scrollTop||document.documentElement.scrollTop}};return i=e.extend({init:l.init,destroy:l.destroy,snapClosest:l.snapClosest,snapPrev:l.snapPrev,snapNext:l.snapNext,snapIndex:l.snapIndex,getSnapIndex:l.getSnapIndex,update:l.update,isVisible:l.isVisible},a,t),i.init(),i}}(jQuery)},2271:function(e,n,t){},"6b2e":function(e,n,t){},"6c7a":function(e,n,t){},c5e1:function(e,n){e.exports=window.jQuery},df31:function(e,n,t){"use strict";t.r(n);t("7db0"),t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("352e"),t("6c7a"),t("edc8"),t("6b2e"),t("2271");var i=t("c5e1"),a=t.n(i);t("1c93"),t("d2cd"),t("657a");a()(".about .svg-earnie").css("display","none"),a()(".footer .footer-earnie").css("display","none");var o,s=6;function l(e){var n={background:"url(./images/examples/img_"+e+".jpg) no-repeat center center","-webkit-background-size":"contain","-moz-background-size":"contain","-o-background-size":"contain","background-size":"contain"};a()("#img_"+e).css(n)}for(o=1;o<s+1;o++)l(o);function r(){var e=a()(".container.testimonials .test-controller").find(".profile"),n=a()(".container.testimonials").find(".content");e.each((function(e){a()(this).click((function(){a()(this).addClass("selected").siblings().removeClass("selected"),n.removeClass("active").eq(e).addClass("active")}))}));var t=a()(".container.app .view-selector").find(".view-opt"),i=a()(".container.app").find(".app-content");t.each((function(e){a()(this).click((function(){a()(this).addClass("selected").siblings().removeClass("selected").find("img").addClass("gray"),i.removeClass("active").eq(e).addClass("active"),a()(this).find("img").removeClass("gray")}))}));var o=a()(".container.app").find(".tab");o.each((function(e){a()(this).click((function(){a()(this).addClass("selected").siblings().removeClass("selected");var n=a()(".container.app").find(".discovery-list");n.find(".discovery-li").hide().eq(e).show()}))}))}r(),a()(document).on("switch-lang",(function(){}));var c=a()(".about").position().top,u=a()(".footer").position().top,d=16;a()("body").scroll((function(e){var n=a()("body").scrollTop();n>=c-10*d&&a()(".about .svg-earnie").css("display","initial"),n>=u-10*d&&a()(".footer .footer-earnie").css("display","initial")}))},edc8:function(e,n,t){}});
//# sourceMappingURL=index.10adc13e.js.map