(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{14189:function(e,t,a){"use strict";var n=a(85893),r=a(6610),i=a(5991),o=a(65255),s=a(46070),c=a(77608),l=a(67294),u=a(48134),d=a.n(u);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,s.Z)(this,a)}}var f=function(e){(0,o.Z)(a,e);var t=p(a);function a(e){return(0,r.Z)(this,a),t.call(this,e)}return(0,i.Z)(a,[{key:"render",value:function(){return(0,n.jsx)(d(),{className:"playArea",params:this.props.params})}}]),a}(l.Component);t.Z=f},75284:function(e,t,a){"use strict";var n=a(85893),r=a(34699),i=a(71926),o=a(67294),s=a(14189);t.Z=function(e){var t=o.useState(0),a=(0,r.Z)(t,2),c=a[0],l=a[1];o.useEffect((function(){l(window.innerWidth)}));var u=function(){return l(window.innerWidth)};return o.useEffect((function(){return window.addEventListener("resize",u),function(){return window.removeEventListener("resize",u)}}),[u]),(0,n.jsxs)("header",{id:e.headerId,className:"header",children:[(0,n.jsx)(i.Z,{navbar:e.nav}),c>752&&(0,n.jsx)(s.Z,{params:e.animation}),(0,n.jsx)("h1",{className:"header_heading",dangerouslySetInnerHTML:{__html:e.heading}}),(0,n.jsx)("p",{className:e.className,dangerouslySetInnerHTML:{__html:e.subtitle}}),e.children]})}},43118:function(e,t,a){"use strict";var n=a(85893),r=a(67294),i=a(89521),o=a(56546);i.gsap.registerPlugin(o.ScrollTrigger),t.Z=function(e){return(0,r.useEffect)((function(){o.ScrollTrigger.defaults({toggleActions:"restart none reverse none"});for(var e=document.querySelectorAll("section"),t=0;t<e.length;t++)e[t].addEventListener("hover",void e[t].id);return function(){}}),[]),(0,n.jsxs)("section",{id:e.id,className:e.className,children:[(0,n.jsx)("h2",{className:"main_section_heading-primary",dangerouslySetInnerHTML:{__html:e.heading}}),e.children]})}},87218:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return D},default:function(){return P}});var n=a(85893),r=a(75284),i=a(87329),o=a(11163),s=a(86893),c=a(45155),l=a(89521),u=a(67294),d=function(e){var t=(0,o.useRouter)(),a=(0,u.useState)(e.dataSearch),r=a[0],d=(a[1],(0,u.useState)([])),p=d[0],f=d[1];return(0,n.jsxs)("div",{className:"header_search",children:[(0,n.jsxs)("form",{className:"header_search_searchForm",children:[(0,n.jsx)("input",{id:"dropdown",type:"text",name:"search",onFocus:function(e){l.gsap.to(".autocomplete",{display:"block"})},onBlur:function(e){return l.gsap.to(".autocomplete",{display:"none"}),e.target.value=""},placeholder:e.placeholder,autoComplete:"off"}),(0,n.jsx)(s.jRj,{className:"header_search_searchForm-icon"}),(0,n.jsx)("div",{className:"listOftags",children:p.map((function(e,t){return(0,n.jsxs)("span",{className:"listOftags-tag",children:[(0,n.jsxs)("a",{target:"_blank",href:e.link_href,children:[e.link_label," "]})," ",(0,n.jsx)(c.v8y,{onClick:function(){return function(e){var t=p.filter((function(t){return t!==e}));return f(t)}(e)}})]},"".concat(e+t))}))})]}),(0,n.jsx)("div",{className:"autocomplete",children:(0,n.jsx)("ul",{className:"autocomplete-list",children:r&&r.map((function(e,a){return(0,n.jsx)("li",{onClick:function(){return function(e){"/"===t.route?window.open(e.link_href,"_blank"):(l.gsap.to(".autocomplete",{display:"none"}),f([].concat((0,i.Z)(p),[e])))}(e)},className:"autocomplete-list-item",children:e.link_label},"".concat(e+a))}))})})]})},p=a(43118);var f=function(e){return(0,n.jsxs)("article",{id:e.id,className:"main_section_wrapper",children:[(0,n.jsxs)("div",{className:"main_section_wrapper_".concat(e.style),children:[(0,n.jsx)("br",{}),(0,n.jsx)("h3",{className:"main_section_wrapper_box_heading-secondary",dangerouslySetInnerHTML:{__html:e.headingSecondary}}),(0,n.jsx)("div",{className:"section_description",children:(0,n.jsx)("p",{children:(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:e.description}})})}),e.cta]}),(0,n.jsx)("div",{className:"main_section_wrapper_image",children:e.children})]})},m=a(5935),h=a(3448),g=a(24728),y=a(19276),x=a(84525),j=a(15553),v=function(e){var t=e.images;return(0,u.useEffect)((function(){var e=l.gsap.timeline();e.set(".logoItem img",{x:function(e){return 1*e}}),e.to(".logoItem img",{duration:50,ease:"none",x:"-=2000",modifiers:{x:l.gsap.utils.unitize((function(e){return parseFloat(e)%2e3}))},repeat:-1})}),[]),(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"container-wrapper",children:(0,n.jsx)("div",{className:"container-wrapper-lander",children:t.map((function(e,t){return e.image&&e.image.url&&(0,n.jsx)("div",{className:"logoItem",children:(0,n.jsx)("img",{src:e.image.url,alt:e.alt})},"".concat(e+t))}))})})})},_=a(61563),b=function(e){anime({targets:e,keyframes:[{strokeDashoffset:-500},{strokeDasharray:"6 4"}],easing:"easeInOutQuad",duration:2500,delay:function(e,t){return 250*t},direction:"normal"})},N=a(96156),w=a(87757),S=a.n(w),T=a(92137);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){(0,N.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function(){var e=(0,u.useState)({name:"",value:""}),t=e[0],a=e[1],r=(0,u.useState)(""),i=r[0],o=r[1],s=(0,u.useState)(""),c=s[0],l=s[1],d=function(){var e=(0,T.Z)(S().mark((function e(){var a,n,r,i;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.hsforms.com/submissions/v3/integration/submit/7252341/5fc85d54-eb89-43d8-ab4f-721705ba39e1",a=Array.of(t),n={fields:a},e.next=5,fetch("https://api.hsforms.com/submissions/v3/integration/submit/7252341/5fc85d54-eb89-43d8-ab4f-721705ba39e1",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:return(i=e.sent).inlineMessage&&l("Merci pour votre inscription !"),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){}),[t,i]),(0,n.jsx)("div",{className:"news",children:(0,n.jsxs)("form",{className:"news-form",onSubmit:function(e){e.preventDefault();/\S+@\S+/.test(String(t.value).toLowerCase())?(d(),a({name:"",value:""}),o("")):o("champs requis ou email invalide")},children:[(0,n.jsx)("h5",{className:"news-form-heading",children:"S'inscrire \xe0 la Newsletter"}),(0,n.jsx)("input",{type:"email",name:"email",onChange:function(e){a(Z(Z({},t),{},{name:e.target.name,value:e.target.value})),o("")},className:"news-form-input",placeholder:"Adresse email",value:t.value}),(0,n.jsx)("button",{className:"success-action",children:"S'inscrire"}),(0,n.jsx)("span",{className:"error",children:""!==i?i:null}),(0,n.jsx)("p",{className:"success",children:""!==c?c:null})]})})};l.gsap.registerPlugin(g.CSSRulePlugin,y.MotionPathPlugin);var D=!0,P=function(e){var t=e.home,a=function(){l.gsap.timeline({ease:"linear"}).fromTo(".not",{opacity:0},{opacity:1,stagger:{each:.5,yoyo:!0},duration:1.5}).fromTo(".other",{opacity:0},{stagger:{each:.1,yoyo:!0},opacity:1,duration:.8}).fromTo(".cible",{opacity:0},{opacity:1,duration:1},"-=1").fromTo(".fleche",{opacity:0},{opacity:1,duration:1.5}).fromTo(".fleche",{strokeDashoffset:-1e3},{strokeDashoffset:0,duration:2},"-=0.5").fromTo(".fleche",{fill:"none"},{fill:"white",duration:1},"-=0.5")},i=function(){l.gsap.timeline({ease:"linear"}).fromTo(".progress",{strokeDashoffset:-1e3},{strokeDashoffset:0,duration:4}).fromTo(".progress",{fill:"none"},{fill:"white",duration:1.5}).fromTo(".artefact",{opacity:0},{opacity:1,stagger:{each:.1,from:"start",yoyo:!0}},"-=2").fromTo(".dollar",{opacity:0,x:-100,y:50},{opacity:1,x:0,y:0,duration:2},"-=4").fromTo(".cercle",{opacity:0},{opacity:1,duration:1},"-=1.8").fromTo(".cdollar",{opacity:0},{opacity:1,duration:.8})},o=function(){l.gsap.timeline({easing:"linear",duration:1.5,onComplete:s,onUpdate:function(){document.querySelector(".maille").style.opacity="0"}}).fromTo(".cr",{opacity:0},{opacity:1,stagger:{each:.1}}).fromTo(".ccb",{opacity:0},{opacity:1,stagger:{each:.2,yoyo:!0}}).fromTo(".ccl",{opacity:0},{opacity:1,stagger:{each:.1,yoyo:!0}}).fromTo(".ccm",{opacity:0},{opacity:1,stagger:{each:.1,yoyo:!0}}).fromTo(".cb",{opacity:0},{opacity:1,stagger:{each:.1}}).fromTo(".cl",{opacity:0},{opacity:1,stagger:{each:.1}})},s=function(){l.gsap.timeline({easing:"linear"}).fromTo(".maille",{strokeDashoffset:200,fill:"none"},{opacity:1,strokeDashoffset:0,fill:"white",duration:4})},c=function(){var e=document.querySelector(".cta-path");return e.getAttribute("style").slice(-3).includes("4")&&e.setAttribute("style","stroke-dashoffset: 100px; stroke-dasharray: 4, 80;"),b(".cta-path")},y=function(e){return"#techNdata"===e.vars.trigger&&o()};return(0,u.useEffect)((function(){var e=g.CSSRulePlugin.getRule(".span-deco-secondary-small::before"),t=g.CSSRulePlugin.getRule(".span-h3::before"),n=g.CSSRulePlugin.getRule(".span-deco::before"),r=l.gsap.timeline(),s=l.gsap.timeline(),u=l.gsap.timeline(),d=l.gsap.timeline(),p=l.gsap.timeline(),f=l.gsap.timeline();(0,_.X)(r,".main","top center","chapiteau",y),(0,_.X)(f,"#philosophie h2","center center","chapiteau",y),l.gsap.from(e,{cssRule:{width:"0%",left:"0%"},ease:"linear",duration:2}),f.from(t,{cssRule:{width:"0%",left:"0%"},ease:"linear",duration:2}),f.fromTo("#philosophie .section_description p span",1.5,{transform:"translate(0, 100%)"},{transform:"translate(0,0)"},"-=1"),(0,_.j)(a(),"#strategy","top center",a),(0,_.j)(i(),"#tradingDesk","top center",i),(0,_.X)(s,"#strategy","top center ","manege",y),s.from("#strategy h3",{yPercent:-200,ease:"power4.out",duration:2}),s.fromTo("#strategy h3",{opacity:0},{opacity:1,duration:1.5},"-=1.3"),s.fromTo("#strategy .section_description",{transform:"translate(0, 100%)",opacity:0},{transform:"translate(0,0)",duration:1.5,opacity:1},"-=1.3"),s.fromTo("#strategy a",{transform:"translate(0, 100%)"},{transform:"translate(0,0)"},"-=1.3"),(0,_.j)(o(),"#techNdata","top center",y),(0,_.X)(u,"#tradingDesk","top center","automotion",y),u.fromTo("#tradingDesk .section_description p span",{transform:"translate(0, 100%)"},{transform:"translate(0,0)",duration:1.5}),u.fromTo("#tradingDesk h3",{transform:"translate(0, -200%)"},{transform:"translate(0,0)",duration:1},"-=1.3"),(0,_.X)(d,"#techNdata","top center","techNdata",y),d.fromTo("#techNdata .section_description p span",{transform:"translate(0, 100%)"},{transform:"translate(0,0)",duration:1.5}),d.fromTo("#techNdata h3",{opacity:0,transform:"translate(0, -200%)"},{opacity:1,transform:"translate(0,0)",duration:1},"-=1.3"),(0,_.j)(p,"#about","top center",y),p.from(n,{cssRule:{width:"0%",left:"0%"},ease:"linear",duration:2}),(0,_.j)(b(".cta-path"),".main_about-picture","center center",c)}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.Z,{metaTitle:"Klox | Agency as a Service | Entertainment DNA",metaDescription:"Klox fusionne le meilleur de l'AdTech \xe0 ses experts pour r\xe9pondre avec cr\xe9ativit\xe9 \xe0 vos enjeux marketing : Social, Video & Display, Audio, DOOH, TV..."}),(0,n.jsxs)(r.Z,{nav:t.navbar,animation:x.Z.homeParticules,headerId:"home-header",heading:t.h1.heading_h1,children:[(0,n.jsx)(d,{placeholder:t.searcher.searchBar_placeholder,dataSearch:t.searcher.option_link}),(0,n.jsx)(v,{images:t.carousel.image_carousel})]}),(0,n.jsxs)("main",{className:"main",children:[(0,n.jsx)(p.Z,{id:"philosophie",className:"main_section",heading:t.philosophie.heading_h2,children:(0,n.jsx)(f,{style:"box",headingSecondary:t.philosophie.heading_h3,description:t.philosophie.description})}),(0,n.jsx)(p.Z,{id:"expertise",className:"main_section",heading:t.expertise.heading_h2,children:t.expertise.space[0].article.map((function(e,a){return(0,n.jsx)(f,{id:e.article_identity,cta:(0,n.jsx)(m.Z,{className:"btn-".concat(t.expertise.cta.className),href:t.expertise.cta.href,label:t.expertise.cta.label}),style:"description_".concat(e.className),headingSecondary:e.heading_tertiary,description:e.description,children:0===a?x.Z.svg1:1===a?x.Z.svg2:2===a?x.Z.svg3:null},a)}))}),(0,n.jsxs)(p.Z,{id:"about",className:"main_about",heading:"<a href='/about'>"+t.about.heading_h2+"</a>",children:[(0,n.jsx)("div",{className:"main_about-description",children:(0,n.jsx)("p",{className:"main_about-description--info",children:t.about.description})}),(0,n.jsx)("div",{className:"main_about-picture",children:(0,n.jsx)("img",{src:"".concat(t.about.space[0].image.url),alt:t.about.space[0].alt})})]}),(0,n.jsx)(p.Z,{id:"contact",className:"main-contact",heading:"",children:(0,n.jsxs)("div",{className:"cta-container",children:[(0,n.jsx)("svg",{id:"cta-path",children:(0,n.jsx)("path",{className:"cta-path",d:"M.94,0,.75,432.5"})}),(0,n.jsx)("div",{className:"cta-box",children:(0,n.jsx)(m.Z,{href:"https://klox.typeform.com/to/VIuyGwue",className:"success-action",label:"Demander une d\xe9mo"})})]})}),(0,n.jsx)(p.Z,{id:"newsletter",className:"main-newsletter",heading:"",children:(0,n.jsx)(O,{})})]}),(0,n.jsx)(j.Z,{footer:t.footer})]})}},61563:function(e,t,a){"use strict";a.d(t,{X:function(){return i},j:function(){return o}});var n=a(89521),r=a(56546);n.gsap.registerPlugin(r.ScrollTrigger);var i=function(e,t,a,n,i){i||(i=function(){}),r.ScrollTrigger.create({id:n,animation:e,trigger:t,start:a,end:"bottom top",toggleActions:"play none none none",onToggle:function(e){return i(e)}})},o=function(e,t,a,n){n||(n=function(){}),r.ScrollTrigger.create({animation:e,trigger:t,start:a,end:"bottom top",toggleActions:"restart none none none",onToggle:function(e){return n(e)}})}},78581:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(87218)}])}},function(e){e.O(0,[5445,4617,9866,2013,6158,1229,2962,9521,8134,6546,3147,185,4525,9774,2888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);