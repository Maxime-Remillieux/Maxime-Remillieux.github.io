(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{24728:function(D,u){!function(D){"use strict";var u,F,C,e,t=function(){return"undefined"!==typeof window},E=function(){return u||t()&&(u=window.gsap)&&u.registerPlugin&&u},n=function(){return F||(r(),e||console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")),F},r=function(D){u=D||E(),t()&&(C=document),u&&(e=u.plugins.css)&&(F=1)},i={version:"3.5.1",name:"cssRule",init:function(D,u,F,t,E){if(!n()||"undefined"===typeof D.cssText)return!1;var r=D._gsProxy=D._gsProxy||C.createElement("div");this.ss=D,this.style=r.style,r.style.cssText=D.cssText,e.prototype.init.call(this,r,u,F,t,E)},render:function(D,u){for(var F,C=u._pt,e=u.style,t=u.ss;C;)C.r(D,C.d),C=C._next;for(F=e.length;--F>-1;)t[e[F]]=e[e[F]]},getRule:function(D){n();var u,F,e,t,E=C.all?"rules":"cssRules",r=C.styleSheets,i=r.length,s=":"===D.charAt(0);for(D=(s?"":",")+D.split("::").join(":").toLowerCase()+",",s&&(t=[]);i--;){try{if(!(F=r[i][E]))continue;u=F.length}catch(l){console.warn(l);continue}for(;--u>-1;)if((e=F[u]).selectorText&&-1!==(","+e.selectorText.split("::").join(":").toLowerCase()+",").indexOf(D)){if(!s)return e.style;t.push(e.style)}}return t},register:r};E()&&u.registerPlugin(i),D.CSSRulePlugin=i,D.default=i,Object.defineProperty(D,"__esModule",{value:!0})}(u)},39664:function(D,u){!function(D){"use strict";var u,F,C,e,t,E,n,r=function(){return"undefined"!==typeof window},i=function(){return u||r()&&(u=window.gsap)&&u.registerPlugin&&u},s=function(D){return"string"===typeof D},l=function(D,u){var F="x"===u?"Width":"Height",E="scroll"+F,n="client"+F;return D===C||D===e||D===t?Math.max(e[E],t[E])-(C["inner"+F]||e[n]||t[n]):D[E]-D["offset"+F]},o=function(D,u){var F="scroll"+("x"===u?"Left":"Top");return D===C&&(null!=D.pageXOffset?F="page"+u.toUpperCase()+"Offset":D=null!=e[F]?e:t),function(){return D[F]}},a=function(D,u){var F=E(D)[0].getBoundingClientRect(),n=!u||u===C||u===t,r=n?{top:e.clientTop-(C.pageYOffset||e.scrollTop||t.scrollTop||0),left:e.clientLeft-(C.pageXOffset||e.scrollLeft||t.scrollLeft||0)}:u.getBoundingClientRect(),i={x:F.left-r.left,y:F.top-r.top};return!n&&u&&(i.x+=o(u,"x")(),i.y+=o(u,"y")()),i},f=function(D,u,F,C,e){return isNaN(D)||"object"===typeof D?s(D)&&"="===D.charAt(1)?parseFloat(D.substr(2))*("-"===D.charAt(0)?-1:1)+C-e:"max"===D?l(u,F)-e:Math.min(l(u,F),a(D,u)[F]-e):parseFloat(D)-e},B=function(){u=i(),r()&&u&&document.body&&(C=window,t=document.body,e=document.documentElement,E=u.utils.toArray,u.config({autoKillThreshold:7}),n=u.config(),F=1)},c={version:"3.5.1",name:"scrollTo",rawVars:1,register:function(D){u=D,B()},init:function(D,u,e,t,E){F||B();var n=this;n.isWin=D===C,n.target=D,n.tween=e,"object"!==typeof u?s((u={y:u}).y)&&"max"!==u.y&&"="!==u.y.charAt(1)&&(u.x=u.y):u.nodeType&&(u={y:u,x:u}),n.vars=u,n.autoKill=!!u.autoKill,n.getX=o(D,"x"),n.getY=o(D,"y"),n.x=n.xPrev=n.getX(),n.y=n.yPrev=n.getY(),null!=u.x?(n.add(n,"x",n.x,f(u.x,D,"x",n.x,u.offsetX||0),t,E,Math.round),n._props.push("scrollTo_x")):n.skipX=1,null!=u.y?(n.add(n,"y",n.y,f(u.y,D,"y",n.y,u.offsetY||0),t,E,Math.round),n._props.push("scrollTo_y")):n.skipY=1},render:function(D,u){for(var F,e,t,E,r,i=u._pt,s=u.target,o=u.tween,a=u.autoKill,f=u.xPrev,B=u.yPrev,c=u.isWin;i;)i.r(D,i.d),i=i._next;F=c||!u.skipX?u.getX():f,t=(e=c||!u.skipY?u.getY():B)-B,E=F-f,r=n.autoKillThreshold,u.x<0&&(u.x=0),u.y<0&&(u.y=0),a&&(!u.skipX&&(E>r||E<-r)&&F<l(s,"x")&&(u.skipX=1),!u.skipY&&(t>r||t<-r)&&e<l(s,"y")&&(u.skipY=1),u.skipX&&u.skipY&&(o.kill(),u.vars.onAutoKill&&u.vars.onAutoKill.apply(o,u.vars.onAutoKillParams||[]))),c?C.scrollTo(u.skipX?F:u.x,u.skipY?e:u.y):(u.skipY||(s.scrollTop=u.y),u.skipX||(s.scrollLeft=u.x)),u.xPrev=u.x,u.yPrev=u.y},kill:function(D){var u="scrollTo"===D;(u||"scrollTo_x"===D)&&(this.skipX=1),(u||"scrollTo_y"===D)&&(this.skipY=1)}};c.max=l,c.getOffset=a,c.buildGetter=o,i()&&u.registerPlugin(c),D.ScrollToPlugin=c,D.default=c,Object.defineProperty(D,"__esModule",{value:!0})}(u)},56403:function(D,u){!function(D){"use strict";var u=/(^\s+|\s+$)/g,F=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function C(D){var u=D.nodeType,F="";if(1===u||9===u||11===u){if("string"===typeof D.textContent)return D.textContent;for(D=D.firstChild;D;D=D.nextSibling)F+=C(D)}else if(3===u||4===u)return D.nodeValue;return F}function e(D,u,F){for(var C=D.firstChild,e=[];C;)3===C.nodeType?e.push.apply(e,t((C.nodeValue+"").replace(/^\n+/g,"").replace(/\s+/g," "),u,F)):"br"===(C.nodeName+"").toLowerCase()?e[e.length-1]+="<br>":e.push(C.outerHTML),C=C.nextSibling;return e}function t(D,C,e){if(D+="",e&&(D=D.replace(u,"")),C&&""!==C)return D.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(C);for(var t,E,n=[],r=D.length,i=0;i<r;i++)((E=D.charAt(i)).charCodeAt(0)>=55296&&E.charCodeAt(0)<=56319||D.charCodeAt(i+1)>=65024&&D.charCodeAt(i+1)<=65039)&&(t=((D.substr(i,12).split(F)||[])[1]||"").length||2,E=D.substr(i,t),n.emoji=1,i+=t-1),n.push(">"===E?"&gt;":"<"===E?"&lt;":E);return n}var E,n,r=function(){return E||"undefined"!==typeof window&&(E=window.gsap)&&E.registerPlugin&&E},i={version:"3.5.1",name:"text",init:function(D,u,F){var C,t,E,r,i,s,l,o,a=D.nodeName.toUpperCase(),f=this;if(f.svg=D.getBBox&&("TEXT"===a||"TSPAN"===a),!("innerHTML"in D)&&!f.svg)return!1;if(f.target=D,"object"!==typeof u&&(u={value:u}),"value"in u){for(f.delimiter=u.delimiter||"",E=e(D,f.delimiter),n||(n=document.createElement("div")),n.innerHTML=u.value,t=e(n,f.delimiter),f.from=F._from,f.from&&(a=E,E=t,t=a),f.hasClass=!(!u.newClass&&!u.oldClass),f.newClass=u.newClass,f.oldClass=u.oldClass,C=(a=E.length-t.length)<0?E:t,f.fillChar=u.fillChar||(u.padSpace?"&nbsp;":""),a<0&&(a=-a);--a>-1;)C.push(f.fillChar);if("diff"===u.type){for(r=0,i=[],s=[],l="",a=0;a<t.length;a++)(o=t[a])===E[a]?l+=o:(i[r]=l+o,s[r++]=l+E[a],l="");t=i,E=s,l&&(t.push(l),E.push(l))}u.speed&&F.duration(Math.min(.05/u.speed*C.length,u.maxDuration||9999)),this.original=E,this.text=t,this._props.push("text")}else f.text=f.original=[""]},render:function(D,u){D>1?D=1:D<0&&(D=0),u.from&&(D=1-D);var F,C,e,t=u.text,E=u.hasClass,n=u.newClass,r=u.oldClass,i=u.delimiter,s=u.target,l=u.fillChar,o=u.original,a=t.length,f=D*a+.5|0;E?(C=r&&f!==a,e=((F=n&&f)?"<span class='"+n+"'>":"")+t.slice(0,f).join(i)+(F?"</span>":"")+(C?"<span class='"+r+"'>":"")+i+o.slice(f).join(i)+(C?"</span>":"")):e=t.slice(0,f).join(i)+i+o.slice(f).join(i),u.svg?s.textContent=e:s.innerHTML="&nbsp;"===l&&~e.indexOf("  ")?e.split("  ").join("&nbsp;&nbsp;"):e}};i.splitInnerHTML=e,i.emojiSafeSplit=t,i.getText=C,r()&&E.registerPlugin(i),D.TextPlugin=i,D.default=i,Object.defineProperty(D,"__esModule",{value:!0})}(u)}}]);