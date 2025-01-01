/*! Custom - Theia Sticky Sidebar | v1.7.0 - https://github.com/WeCodePixels/theia-sticky-sidebar */
!function(i){i.fn.theiaStickySidebar=function(t){function e(t,e){return!0===t.initialized||!(i("body").width()<t.minWidth)&&(function(t,e){t.initialized=!0,0===i("#theia-sticky-sidebar-stylesheet-"+t.namespace).length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));e.each(function(){var e={};if(e.sidebar=i(this),e.options=t||{},e.container=i(e.options.containerSelector),0==e.container.length&&(e.container=e.sidebar.parent()),e.sidebar.parents().css("-webkit-transform","none"),e.sidebar.css({position:e.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),e.stickySidebar=e.sidebar.find(".theiaStickySidebar"),0==e.stickySidebar.length){var a=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;e.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(a)}).remove(),e.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()),e.sidebar.append(e.stickySidebar)}e.marginBottom=parseInt(e.sidebar.css("margin-bottom")),e.paddingTop=parseInt(e.sidebar.css("padding-top")),e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));var n=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight();function d(){e.fixedScrollTop=0,e.sidebar.css({"min-height":"1px"}),e.stickySidebar.css({position:"static",width:"",transform:"none"})}e.stickySidebar.css("padding-top",1),e.stickySidebar.css("padding-bottom",1),n-=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight()-s-n,0==n?(e.stickySidebar.css("padding-top",0),e.stickySidebarPaddingTop=0):e.stickySidebarPaddingTop=1,0==s?(e.stickySidebar.css("padding-bottom",0),e.stickySidebarPaddingBottom=0):e.stickySidebarPaddingBottom=1,e.previousScrollTop=null,e.fixedScrollTop=0,d(),e.onScroll=function(e){if(e.stickySidebar.is(":visible"))if(i("body").width()<e.options.minWidth)d();else{if(e.options.disableOnResponsiveLayouts){var a=e.sidebar.outerWidth("none"==e.sidebar.css("float"));if(a+50>e.container.width())return void d()}var n,s,r=i(document).scrollTop(),c="static";if(r>=e.sidebar.offset().top+(e.paddingTop-e.options.additionalMarginTop)){var p,b=e.paddingTop+t.additionalMarginTop,l=e.paddingBottom+e.marginBottom+t.additionalMarginBottom,f=e.sidebar.offset().top,h=e.sidebar.offset().top+(n=e.container,s=n.height(),n.children().each(function(){s=Math.max(s,i(this).height())}),s),g=0+t.additionalMarginTop,S=e.stickySidebar.outerHeight()+b+l<i(window).height();p=S?g+e.stickySidebar.outerHeight():i(window).height()-e.marginBottom-e.paddingBottom-t.additionalMarginBottom;var u=f-r+e.paddingTop,m=h-r-e.paddingBottom-e.marginBottom,y=e.stickySidebar.offset().top-r,k=e.previousScrollTop-r;"fixed"==e.stickySidebar.css("position")&&"modern"==e.options.sidebarBehavior&&(y+=k),"stick-to-top"==e.options.sidebarBehavior&&(y=t.additionalMarginTop),"stick-to-bottom"==e.options.sidebarBehavior&&(y=p-e.stickySidebar.outerHeight()),y=k>0?Math.min(y,g):Math.max(y,p-e.stickySidebar.outerHeight()),y=Math.max(y,u),y=Math.min(y,m-e.stickySidebar.outerHeight());var v=e.container.height()==e.stickySidebar.outerHeight();c=(v||y!=g)&&(v||y!=p-e.stickySidebar.outerHeight())?r+y-e.sidebar.offset().top-e.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==c){var x=i(document).scrollLeft();e.stickySidebar.css({position:"fixed",width:o(e.stickySidebar)+"px",transform:"translateY("+y+"px)",left:e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))-x+"px",top:"0px"})}else if("absolute"==c){var T={};"absolute"!=e.stickySidebar.css("position")&&(T.position="absolute",T.transform="translateY("+(r+y-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom)+"px)",T.top="0px"),T.width=o(e.stickySidebar)+"px",T.left="",e.stickySidebar.css(T)}else"static"==c&&d();"static"!=c&&1==e.options.updateSidebarHeight&&e.sidebar.css({"min-height":e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom}),e.previousScrollTop=r}},e.onScroll(e),i(document).on("scroll."+e.options.namespace,function(i){return function(){i.onScroll(i)}}(e)),i(window).on("resize."+e.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(e)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(e.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(e))})}(t,e),!0)}function o(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return void 0===t&&(t=i.width()),t}return(t=i.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},t)).additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,function(t,o){e(t,o)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)),i(window).on("resize."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)))}(t,this),this}}(jQuery);

/*! MenuIfy by Templateify | v1.0.0 - https://www.templateify.com */
!function(a){a.fn.menuify=function(){return this.each(function(){var $t=a(this),b=$t.find('.LinkList ul > li').children('a'),c=b.length;for(var i=0;i<c;i++){var d=b.eq(i),h=d.text();if(h.charAt(0)!=='_'){var e=b.eq(i+1),j=e.text();if(j.charAt(0)==='_'){var m=d.parent();m.append('<ul class="sub-menu m-sub"/>');}}if(h.charAt(0)==='_'){d.text(h.replace('_',''));d.parent().appendTo(m.children('.sub-menu'));}}for(var i=0;i<c;i++){var f=b.eq(i),k=f.text();if(k.charAt(0)!=='_'){var g=b.eq(i+1),l=g.text();if(l.charAt(0)==='_'){var n=f.parent();n.append('<ul class="sub-menu2 m-sub"/>');}}if(k.charAt(0)==='_'){f.text(k.replace('_',''));f.parent().appendTo(n.children('.sub-menu2'));}}$t.find('.LinkList ul li ul').parent('li').addClass('has-sub');});}}(jQuery);

/*! ResizeIfy - LazyIfy on Scroll by Templateify | v1.5.0 - https://www.templateify.com */
!function(o){o.fn.lazyify=function(){return this.each(function(){var t=o(this),a=o(window),n=t.attr("data-image"),e="w"+Math.round(t.width()+t.width()/10)+"-h"+Math.round(t.height()+t.height()/10)+"-p-k-no-nu",r="";n.match("resources.blogblog.com")&&(n=noThumbnail),r=n.match("/s72-c")?n.replace("/s72-c","/"+e):n.match("/w72-h")?n.replace("/w72-h72-p-k-no-nu","/"+e):n.match("=w72-h")?n.replace("=w72-h72-p-k-no-nu","="+e):n,t.is(":hidden")||a.on("load resize scroll",function o(){if(a.scrollTop()+a.height()>=t.offset().top){a.off("load resize scroll",o);var n=new Image;n.onload=function(){t.attr("style","background-image:url("+this.src+")").addClass("lazy-ify")},n.src=r}}).trigger("scroll")})}}(jQuery);

/*! jQuery replaceText | v1.1.0 - http://benalman.com/projects/jquery-replacetext-plugin/ */
!function(e){e.fn.replaceText=function(n,t,i){return this.each(function(){var o,r,l=this.firstChild,u=[];if(l)do{3===l.nodeType&&(r=(o=l.nodeValue).replace(n,t))!==o&&(!i&&/</.test(r)?(e(l).before(r),u.push(l)):l.nodeValue=r)}while(l=l.nextSibling);u.length&&e(u).remove()})}}(jQuery);

/*! Table of Contents | v0.4.0 - https://github.com/ndabas/toc */
!function(t){"use strict";var n=function(n){return this.each(function(){var e,i,a=t(this),o=a.data(),c=[a],r=this.tagName,d=0;e=t.extend({content:"body",headings:"h1,h2,h3"},{content:o.toc||void 0,headings:o.tocHeadings||void 0},n),i=e.headings.split(","),t(e.content).find(e.headings).attr("id",function(n,e){return e||function(t){0===t.length&&(t="?");for(var n=t.replace(/\s+/g,"_"),e="",i=1;null!==document.getElementById(n+e);)e="_"+i++;return n+e}(t(this).text())}).each(function(){var n=t(this),e=t.map(i,function(t,e){return n.is(t)?e:void 0})[0];if(e>d){var a=c[0].children("li:last")[0];a&&c.unshift(t("<"+r+"/>").appendTo(a))}else c.splice(0,Math.min(d-e,Math.max(c.length-1,0)));t("<li/>").appendTo(c[0]).append(t("<a/>").text(n.text()).attr("href","#"+n.attr("id"))),d=e})})},e=t.fn.toc;t.fn.toc=n,t.fn.toc.noConflict=function(){return t.fn.toc=e,this},t(function(){n.call(t("[data-toc]"))})}(window.jQuery);

/*! Javascript Cookie | v1.5.1 - https://github.com/js-cookie/js-cookie */
!function(e){var n;if("function"==typeof define&&define.amd)define(["jquery"],e);else if("object"==typeof exports){try{n=require("jquery")}catch(e){}module.exports=e(n)}else{var o=window.Cookies,r=window.Cookies=e(window.jQuery);r.noConflict=function(){return window.Cookies=o,r}}}(function(e){var n=/\+/g;function o(e){return u.raw?e:encodeURIComponent(e)}function r(e){return o(u.json?JSON.stringify(e):String(e))}function t(e,o){var r=u.raw?e:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),u.json?JSON.parse(e):e}catch(e){}}(e);return c(o)?o(r):r}function i(){for(var e,n,o=0,r={};o<arguments.length;o++)for(e in n=arguments[o])r[e]=n[e];return r}function c(e){return"[object Function]"===Object.prototype.toString.call(e)}var u=function(e,n,f){if(arguments.length>1&&!c(n)){if("number"==typeof(f=i(u.defaults,f)).expires){var s=f.expires,a=f.expires=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*s)}return document.cookie=[o(e),"=",r(n),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var d,p=e?void 0:{},l=document.cookie?document.cookie.split("; "):[],m=0,v=l.length;m<v;m++){var g=l[m].split("="),w=(d=g.shift(),u.raw?d:decodeURIComponent(d)),j=g.join("=");if(e===w){p=t(j,n);break}e||void 0===(j=t(j))||(p[w]=j)}return p};return u.get=u.set=u,u.defaults={},u.remove=function(e,n){return u(e,"",i(n,{expires:-1})),!u(e)},e&&(e.cookie=u,e.removeCookie=u.remove),u});

function shortCodeIfy(e,t,a){for(var s=e.split("$"),r=/[^{\}]+(?=})/g,o=0;o<s.length;o++){var i=s[o].split("=");if(i[0].trim()==t)return null!=(a=i[1]).match(r)&&String(a.match(r)).trim()}return!1}function msgError(){return'<span class="error-msg"><b>Error:</b>&nbsp;No Results Found</span>'}function beforeLoader(){return'<div class="loader"></div>'}function getFeedUrl(e,t,a,s){switch(a){case"recent":s="/feeds/posts/default?alt=json&max-results="+t;break;case"comments":s="list1"==e?"/feeds/comments/default?alt=json&max-results="+t:"/feeds/posts/default/-/"+a+"?alt=json&max-results="+t;break;default:s="/feeds/posts/default/-/"+a+"?alt=json&max-results="+t}return s}function getPostLink(e,t){for(var a=0;a<e[t].link.length;a++)if("alternate"==e[t].link[a].rel){var s=e[t].link[a].href;break}return s}function getPostTitle(e,t,a){return e[t].title.$t?e[t].title.$t:exportify.noTitle}function getFirstImage(e,t){var a=$("<div>").html(e).find("img:first").attr("src"),s=a.lastIndexOf("/")||0,r=a.lastIndexOf("/",s-1)||0,o=a.substring(0,r),i=a.substring(r,s),n=a.substring(s);return(i.match(/\/s[0-9]+/g)||i.match(/\/w[0-9]+/g)||"/d"==i)&&(i="/w72-h72-p-k-no-nu"),o+i+n}function getPostImage(e,t,a,s){var r=e[t].content.$t;return a=e[t].media$thumbnail?e[t].media$thumbnail.url:"https://resources.blogblog.com/img/blank.gif",r.indexOf(r.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))>-1?r.indexOf("<img")>-1?r.indexOf(r.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))<r.indexOf("<img")?a.replace("img.youtube.com","i.ytimg.com").replace("/default.","/maxresdefault."):getFirstImage(r):a.replace("img.youtube.com","i.ytimg.com").replace("/default.","/maxresdefault."):r.indexOf("<img")>-1?getFirstImage(r):"https://resources.blogblog.com/img/blank.gif"}function getPostImageType(e,t){return e.match("i.ytimg.com")?"is-video":"is-image"}function getPostTag(e,t,a){return e[t].category?'<span class="entry-category">'+e[t].category[0].term+"</span>":""}function getPostComments(e,t,a,s){var r=e[t].author[0].name.$t,o=e[t].author[0].gd$image.src.replace("/s113","/s72-c").replace("/s220","/s72-c"),i=e[t].title.$t;return(o.match("//img1.blogblog.com/img/blank.gif")||o.match("//img1.blogblog.com/img/b16-rounded.gif"))&&(o="//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w35-h35-p-k-no-nu/avatar.jpg"),'<div class="cmm1-item item-'+t+'"><a class="entry-inner wrap-all-link" href="'+a+'" title="'+r+'"><span class="entry-image-wrap cmm-avatar"><span class="entry-thumb" data-image="'+o+'"></span></span><div class="entry-header"><h2 class="entry-title cmm-title">'+r+'</h2><p class="cmm-snippet excerpt">'+i+"</p></div></a></div>"}function getAjax(e,t,a,s){switch(t){case"msimple":case"featured":case"trending":case"list1":case"related":0==s&&(s="geterror404");var r=getFeedUrl(t,a,s);$.ajax({url:r,type:"GET",dataType:"json",cache:!0,beforeSend:function(a){switch(t){case"featured":e.html(beforeLoader()).parent().addClass("show-ify");break;case"trending":case"list1":e.html(beforeLoader());break;case"related":e.html(beforeLoader()).parent().addClass("show-ify")}},success:function(a){var r="";switch(t){case"msimple":r='<div class="ul mega-items">';break;case"featured":r='<div class="featured-items">';break;case"trending":r='<div class="trending-items">';break;case"list1":r="comments"!=s?'<div class="list1-items sidebar-posts">':'<div class="cmm1-items">';break;case"related":r='<div class="related-posts">'}var o=a.feed.entry;if(null!=o)for(var i=0,n=o;i<n.length;i++){var l=getPostLink(n,i),c=getPostTitle(n,i),d=getPostImage(n,i),m=getPostTag(n,i),h=getPostImageType(d,i),f="";switch(t){case"msimple":f+='<div class="mega-item post"><div class="mega-content"><a title="'+c+'" class="entry-image-wrap '+h+'" href="'+l+'"><span class="entry-thumb" data-image="'+d+'"></span></a><h2 class="entry-title"><a href="'+l+'" title="'+c+'">'+c+"</a></h2></div></div>";break;case"featured":switch(i){case 0:f+='<div class="featured-left"><div class="featured-item item-'+i+'"><a title="'+c+'" class="entry-image-wrap '+h+'" href="'+l+'"><span class="entry-thumb" data-image="'+d+'"></span></a><div class="entry-header">'+m+'<h2 class="entry-title"><a title="'+c+'" href="'+l+'">'+c+'</a></h2></div></div></div><div class="featured-right">';break;default:f+='<div class="featured-item item-'+i+'"><a title="'+c+'" class="entry-image-wrap '+h+'" href="'+l+'"><span class="entry-thumb" data-image="'+d+'"></span></a><div class="entry-header">'+m+'<h2 class="entry-title"><a title="'+c+'" href="'+l+'">'+c+"</a></h2></div></div>"}break;case"trending":f+='<div class="trending-item item-'+i+'"><a title="'+c+'" class="entry-image-wrap '+h+'" href="'+l+'"><span class="entry-thumb" data-image="'+d+'"></span><span class="trending-count">'+(i+1)+'</span></a><div class="entry-header">'+m+'<h2 class="entry-title"><a title="'+c+'" href="'+l+'">'+c+"</a></h2></div></div>";break;case"list1":switch(s){case"comments":f+=getPostComments(n,i,l);break;default:switch(i){case 0:f+='<div class="list1-item post big-post item-'+i+'"><a title="'+c+'" class="entry-image-wrap '+h+'" href="'+l+'"><span class="entry-thumb" data-image="'+d+'"/></a><div class="entry-header">'+m+'<h2 class="entry-title"><a href="'+l+'" title="'+c+'">'+c+"</a></h2></div></div>";break;default:f+='<div class="list1-item post item-'+i+'"><a title="'+c+'" class="entry-image-wrap '+h+'" href="'+l+'"><span class="entry-thumb" data-image="'+d+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+l+'" title="'+c+'">'+c+"</a></h2></div></div>"}}break;case"related":f+='<div class="related-item post item-'+i+'"><a title="'+c+'" class="entry-image-wrap '+h+'" href="'+l+'"><span class="entry-thumb" data-image="'+d+'"></span></a><div class="entry-header"><h2 class="entry-title"><a href="'+l+'" title="'+c+'">'+c+"</a></h2></div></div>"}r+=f}else switch(t){case"msimple":r='<div class="ul mega-items no-items">'+msgError()+"</div>";break;default:r=msgError()}switch(t){case"msimple":r+="</div>",e.append(r).addClass("msimple"),e.find("a:first").attr("href",function(e,t){switch(s){case"recent":t=t.replace(t,"/search");break;default:t=t.replace(t,"/search/label/"+s)}return t});break;default:r+="</div>",e.html(r)}e.find("span.entry-thumb").lazyify()},error:function(){switch(t){case"msimple":e.append('<div class="ul mega-items no-items">'+msgError()+"</div>");break;default:e.html(msgError())}}})}}function ajaxMega(e,t,a,s,r){if(r.match("getmega")){if("msimple"==t)return getAjax(e,t,a,s);e.append('<div class="ul mega-items no-items">'+msgError()+"</div>")}}function ajaxFeatured(e,t,a,s,r){if(r.match("getfeatured")){if("featured"==t)return getAjax(e,t,a,s);e.html(msgError()).parent().addClass("show-ify")}}function ajaxTrending(e,t,a,s,r){if(r.match("gettrending")){if("trending"==t)return getAjax(e,t,a,s);e.html(msgError()).parent().addClass("show-ify")}}function ajaxWidget(e,t,a,s,r){if(r.match("getwidget")){if("list1"==t)return getAjax(e,t,a,s);e.html(msgError())}}function ajaxRelated(e,t,a,s,r){if(r.match("getrelated"))return getAjax(e,t,a,s)}function fixedSidebarIfy(){$("#main-wrapper, #sidebar-wrapper").each(function(){1==fixedSidebar&&$(this).theiaStickySidebar({containerSelector:"#content-wrapper > .container",additionalMarginTop:20,additionalMarginBottom:20})})}function disqusComments(e){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="//"+e+".disqus.com/blogger_item.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t)}function beautiAvatar(e){$(e).attr("src",function(e,t){return t=(t=(t=t.replace("//resources.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg")).replace("//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg")).replace("/s35","/s39")})}$("#supermag-pro-main-nav").menuify(),$("#supermag-pro-main-nav .widget").addClass("show-menu"),$(".show-search").on("click",function(){$("body").addClass("search-active"),$("#main-search-wrap").fadeIn(170).find("input").focus()}),$(".hide-search").on("click",function(){$("body").removeClass("search-active"),$("#main-search-wrap").fadeOut(170).find("input").val("").blur()}),$("html").each(function(){var e=$(this);1!=darkMode&&0!=userDarkMode&&("dark"==localStorage.themeColor&&e.addClass("is-dark"),$(".darkmode-toggle").on("click",function(){"dark"!=localStorage.themeColor?(e.addClass("is-dark"),localStorage.themeColor="dark"):(e.removeClass("is-dark"),localStorage.themeColor="light")}))}),$(".sidebar .social-icons li a").each(function(e){var t=$(this),a=t.attr("href").trim().split("#");e=a[0],null!=a[1]&&t.append('<span class="text">'+a[1]+"</span>"),t.attr("href",e)}),$(".FollowByEmail .widget-content").each(function(e,t){var a=$(this),s=a.data("shortcode");null!=s&&(e=shortCodeIfy(s,"title"),t=shortCodeIfy(s,"text"),0!=e&&a.find(".follow-by-email-title").text(e),0!=t&&a.find(".follow-by-email-text").text(t))}),$(".post-body a").each(function(){var e=$(this),t=e.html(),a=t.toLowerCase(),s=shortCodeIfy(t,"text"),r=shortCodeIfy(t,"icon"),o=shortCodeIfy(t,"color");a.match("getbutton")&&0!=s&&(e.addClass("button btn").text(s),0!=r&&e.addClass(r),0!=o&&e.addClass("colored-button").attr("style","background-color:"+o+";"))}),$(".post-body b").each(function(){var e=$(this),t=e.text(),a=t.toLowerCase().trim();a.match(/(?:\$ads\=\{1\})/g)&&e.replaceWith('<div id="supermag-pro-new-before-ad"/>'),a.match(/(?:\$ads\=\{2\})/g)&&e.replaceWith('<div id="supermag-pro-new-after-ad"/>'),a.match("{tocify}")&&(t=0!=shortCodeIfy(t,"title")?shortCodeIfy(t,"title"):"Table of Contents",e.replaceWith('<div class="tocify-wrap"><div class="tocify-inner"><a href="javascript:;" class="tocify-title" role="button" title="'+t+'"><span class="tocify-title-text">'+t+'</span></a><ol id="tocify"></ol></div></div>'),$(".tocify-title").each(function(e){(e=$(this)).on("click",function(){e.toggleClass("is-expanded"),$("#tocify").slideToggle(170)})}),$("#tocify").toc({content:"#post-body",headings:"h2,h3,h4"}),$("#tocify li a").each(function(e){(e=$(this)).click(function(){return $("html,body").animate({scrollTop:$(e.attr("href")).offset().top-20},500),!1})})),a.match("{contactform}")&&(e.replaceWith('<div class="contact-form"/>'),$(".contact-form").append($("#ContactForm1"))),a.match("{leftsidebar}")&&e.replaceWith("<style>#main-wrapper,.is-left #main-wrapper{float:right}#sidebar-wrapper,.is-left #sidebar-wrapper{float:left}</style>"),a.match("{rightsidebar}")&&e.replaceWith("<style>#main-wrapper,.is-left #main-wrapper{float:left}#sidebar-wrapper,.is-left #sidebar-wrapper{float:right}</style>"),a.match("{fullwidth}")&&e.replaceWith("<style>.is-single #main-wrapper{width:100%}.is-single #sidebar-wrapper{display:none}</style>")}),$("#supermag-pro-new-before-ad").each(function(){var e=$(this);e.length&&$("#before-ad").appendTo(e)}),$("#supermag-pro-new-after-ad").each(function(){var e=$(this);e.length&&$("#after-ad").appendTo(e)}),$("#supermag-pro-main-before-ad .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#before-ad"))}),$("#supermag-pro-main-after-ad .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#after-ad"))}),$("#supermag-pro-post-footer-ads .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#post-footer-ads"))}),$(".post-body blockquote").each(function(){var e=$(this),t=e.text().toLowerCase().trim(),a=e.html();if(t.match("{alertsuccess}")){const t=a.replace("{alertSuccess}","");e.replaceWith('<div class="alert-message alert-success">'+t+"</div>")}if(t.match("{alertinfo}")){const t=a.replace("{alertInfo}","");e.replaceWith('<div class="alert-message alert-info">'+t+"</div>")}if(t.match("{alertwarning}")){const t=a.replace("{alertWarning}","");e.replaceWith('<div class="alert-message alert-warning">'+t+"</div>")}if(t.match("{alerterror}")){const t=a.replace("{alertError}","");e.replaceWith('<div class="alert-message alert-error">'+t+"</div>")}if(t.match("{codebox}")){const t=a.replace("{codeBox}","");e.replaceWith('<pre class="code-box">'+t+"</pre>")}}),$(".supermag-pro-share-links .window-ify").on("click",function(){var e=$(this),t=e.data("url"),a=e.data("width"),s=e.data("height"),r=window.screen.width,o=window.screen.height,i=Math.round(r/2-a/2),n=Math.round(o/2-s/2);window.open(t,"_blank","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width="+a+",height="+s+",left="+i+",top="+n).focus()}),$(".supermag-pro-share-links").each(function(){var e=$(this);e.find(".show-hid a").on("click",function(){e.toggleClass("show-hidden")})}),$(".about-author .author-text").each(function(){var e=$(this),t=e.find("a");t.each(function(){var e=$(this),t=e.text().trim(),a=e.attr("href");e.replaceWith('<li class="'+t+'"><a href="'+a+'" title="'+t+'" rel="noopener noreferrer" target="_blank"/></li>')}),t.length&&e.parent().append('<ul class="author-links social social-color"></ul>'),e.find("li").appendTo(".author-links")}),$("#supermag-pro-main-nav-menu li.mega-menu").each(function(e,t){var a=$(this),s=a.find("a").data("shortcode");null!=s&&(e=s.toLowerCase(),ajaxMega(a,"msimple",5,shortCodeIfy(s,"label"),e))}),$("#featured .HTML .widget-content").each(function(e){var t=$(this),a=$(window),s=t.data("shortcode");null!=s&&(mtc=s.toLowerCase(),e=shortCodeIfy(s,"label"),a.on("scroll",function s(){a.scrollTop()+a.height()>=t.offset().top&&(a.off("scroll",s),ajaxFeatured(t,"featured",4,e,mtc))}).trigger("scroll"))}),$("#trending .HTML .widget-content").each(function(e){var t=$(this),a=$(window),s=t.data("shortcode");null!=s&&(mtc=s.toLowerCase(),num=shortCodeIfy(s,"results"),e=shortCodeIfy(s,"label"),a.on("scroll",function s(){a.scrollTop()+a.height()>=t.offset().top&&(a.off("scroll",s),ajaxTrending(t,"trending",num,e,mtc))}).trigger("scroll"))}),$(".supermag-pro-widget-ready .HTML .widget-content").each(function(e,t,a){var s=$(this),r=$(window),o=s.data("shortcode");null!=o&&(e=o.toLowerCase(),t=shortCodeIfy(o,"results"),a=shortCodeIfy(o,"label"),r.on("scroll",function o(){r.scrollTop()+r.height()>=s.offset().top&&(r.off("scroll",o),ajaxWidget(s,"list1",t,a,e))}).trigger("scroll"))}),$("#supermag-pro-related-posts .HTML").each(function(e,t){var a=$(this).data("shortcode");if(null!=a){function s(){return e=shortCodeIfy(a,"title"),t=shortCodeIfy(a,"results"),[e,t]}$("#related-wrap").each(function(e,t){var a=$(this),r=$(window),o=a.find(".supermag-pro-related-content"),i=s();e=0!=i[1]?i[1]:3,0!=i[0]&&a.find(".related-title .title").text(i[0]),t=a.find(".related-tag").data("label"),r.on("scroll",function a(){r.scrollTop()+r.height()>=o.offset().top&&(r.off("scroll",a),ajaxRelated(o,"related",e,t,"getrelated"))}).trigger("scroll")})}}),$(".supermag-pro-blog-post-comments").each(function(){1!=darkMode&&"dark"==localStorage.themeColor&&(fbCommentsTheme="dark");var e=$(this),t=e.data("shortcode"),a=shortCodeIfy(t,"type"),s="comments-system-"+a,r=e.find("#top-continue .comment-reply");switch(a){case"blogger":e.addClass(s).show(),$(".entry-meta .entry-comments-link").addClass("show"),r.addClass("btn"),beautiAvatar(".avatar-image-container img");break;case"disqus":var o=shortCodeIfy(t,"shortname");0!=o&&(disqus_shortname=o),disqusComments(disqus_shortname),e.addClass(s).show();break;case"facebook":e.addClass(s).find("#comments").html('<div class="fb-comments" data-width="100%" data-href="'+disqus_blogger_current_url+'" order_by="time" data-colorscheme="'+fbCommentsTheme+'" data-numposts="5" data-lazy="true"></div>'),e.show();break;case"hide":e.hide();break;default:e.addClass("comments-system-blogger").show(),$(".entry-meta .entry-comments-link").addClass("show"),r.addClass("btn"),beautiAvatar(".avatar-image-container img")}var i=e.find(".comments .comment-reply"),n=e.find(".comments #top-continue"),l=e.find("#show-comment-form");i.on("click",function(){n.show(),e.addClass("comment-form-visible"),l.remove()}),n.on("click",function(){n.hide()}),l.on("click",function(){e.addClass("comment-form-visible"),l.remove(),fixedSidebarIfy()})}),$(function(){$(".index-post .entry-image-wrap .entry-thumb, .PopularPosts .entry-image-wrap .entry-thumb, .FeaturedPost .entry-image-wrap .entry-thumb,.entry-author .author-avatar,.about-author .author-avatar").lazyify(),$("#supermag-pro-mobile-menu").each(function(){var e=$(this),t=$("#supermag-pro-main-nav-menu").clone();t.attr("id","main-mobile-nav"),t.find(".mega-items").remove(),t.find(".mega-menu > a").each(function(e,t){var a=$(this),s=a.data("shortcode");null!=s&&(t="recent"==(e=shortCodeIfy(s.trim(),"label"))?"/search":"/search/label/"+e,a.attr("href",t))}),t.appendTo(e),$(".mobile-menu-toggle, .hide-supermag-pro-mobile-menu, .overlay").on("click",function(){$("body").toggleClass("nav-active")}),$(".supermag-pro-mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),$(".supermag-pro-mobile-menu .mega-menu").find(".submenu-toggle").remove(),$(".supermag-pro-mobile-menu ul li .submenu-toggle").on("click",function(e){$(this).parent().hasClass("has-sub")&&(e.preventDefault(),$(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170):$(this).parent().addClass("show").children(".m-sub").slideToggle(170))})}),$(".mobile-topbar-social").each(function(){var e=$(this),t=$("#topbar-social ul.social").clone();t.find("a").addClass("btn"),t.appendTo(e)}),$(".mobile-topbar-menu").each(function(){var e=$(this);$("#topbar-menu ul.link-list").clone().appendTo(e)}),$(".header-inner").each(function(){var e=$(this);if(1==fixedMenu&&e.length>0){var t=$(document).scrollTop(),a=e.offset().top,s=e.height(),r=a+s+s;$(window).scroll(function(){var s=$(document).scrollTop();s>r?e.addClass("is-fixed"):(s<a||s<=0)&&e.removeClass("is-fixed"),s>t?e.removeClass("show"):e.addClass("show"),t=s})}}),fixedSidebarIfy(),$("#post-body iframe").each(function(){var e=$(this);e.attr("src").match("www.youtube.com")&&e.wrap('<div class="responsive-video-wrap"/>')}),$("p.comment-content").each(function(){var e=$(this);e.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g,'<img src="$1"/>'),e.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,'<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')}),$("#supermag-pro-load-more-link").each(function(){var e=$(this).data("load");e&&$("#supermag-pro-load-more-link").show(),$("#supermag-pro-load-more-link").on("click",function(t){$("#supermag-pro-load-more-link").hide(),$.ajax({url:e,success:function(t){var a=$(t).find(".blog-posts");a.find(".index-post").addClass("post-animated post-fadeInUp"),$(".blog-posts").append(a.html()),(e=$(t).find("#supermag-pro-load-more-link").data("load"))?$("#supermag-pro-load-more-link").show():($("#supermag-pro-load-more-link").hide(),$("#blog-pager .no-more").addClass("show"))},beforeSend:function(){$("#blog-pager .loading").show()},complete:function(){$("#blog-pager .loading").hide(),fixedSidebarIfy(),$(".index-post .entry-image-wrap .entry-thumb").lazyify()}}),t.preventDefault()})}),$("#supermag-cookie-ify").each(function(){var e=$(this),t=e.find(".widget.Text").data("shortcode");null!=t&&(ok=shortCodeIfy(t,"ok"),days=shortCodeIfy(t,"days"),0!=ok&&e.find("#supermag-cookie-ify-accept").text(ok),0!=days?days=Number(days):days=7),e.length>0&&("1"!==$.cookie("supermag_cookie_ify_consent")&&(e.css("display","block"),setTimeout(function(){e.addClass("is-visible")},10)),$("#supermag-cookie-ify-accept").off("click").on("click",function(t){t.preventDefault(),t.stopPropagation(),$.cookie("supermag_cookie_ify_consent","1",{expires:days,path:"/"}),e.removeClass("is-visible"),setTimeout(function(){e.css("display","none")},500)}),cookieChoices={})}),$("#back-top").each(function(){var e=$(this);$(window).on("scroll",function(){$(this).scrollTop()>=100?e.fadeIn(170):e.fadeOut(170),e.offset().top>=$("#footer-wrapper").offset().top-34?e.addClass("on-footer"):e.removeClass("on-footer")}),e.on("click",function(){$("html, body").animate({scrollTop:0},500)})})});

document.addEventListener("DOMContentLoaded", function () {
  var htmlElement = document.documentElement;
  var darkMode = localStorage.getItem("themeColor") === "dark"; 

  // Menambahkan kelas 'is-dark' jika tema gelap diaktifkan
  if (darkMode) {
    htmlElement.classList.add("is-dark");
  }

  // Menangani perubahan tema melalui toggle
  var toggleButton = document.querySelector(".darkmode-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      darkMode = !darkMode;
      if (darkMode) {
        htmlElement.classList.add("is-dark");
        localStorage.setItem("themeColor", "dark");
      } else {
        htmlElement.classList.remove("is-dark");
        localStorage.setItem("themeColor", "light");
      }
    });
  }
});

