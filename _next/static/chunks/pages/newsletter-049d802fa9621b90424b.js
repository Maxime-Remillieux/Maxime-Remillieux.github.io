(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1533],{6610:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},77608:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,{Z:function(){return r}})},65255:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,{Z:function(){return s}})},46070:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(90484),s=n(63349);function i(t,e){return!e||"object"!==(0,r.Z)(e)&&"function"!==typeof e?(0,s.Z)(t):e}},14189:function(t,e,n){"use strict";var r=n(85893),s=n(6610),i=n(5991),a=n(65255),o=n(46070),c=n(77608),u=n(67294),f=n(48134),d=n.n(f);function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,c.Z)(t);if(e){var s=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var h=function(t){(0,a.Z)(n,t);var e=l(n);function n(t){return(0,s.Z)(this,n),e.call(this,t)}return(0,i.Z)(n,[{key:"render",value:function(){return(0,r.jsx)(d(),{className:"playArea",params:this.props.params})}}]),n}(u.Component);e.Z=h},75284:function(t,e,n){"use strict";var r=n(85893),s=n(34699),i=n(71926),a=n(67294),o=n(14189);e.Z=function(t){var e=a.useState(0),n=(0,s.Z)(e,2),c=n[0],u=n[1];a.useEffect((function(){u(window.innerWidth)}));var f=function(){return u(window.innerWidth)};return a.useEffect((function(){return window.addEventListener("resize",f),function(){return window.removeEventListener("resize",f)}}),[f]),(0,r.jsxs)("header",{id:t.headerId,className:"header",children:[(0,r.jsx)(i.Z,{navbar:t.nav}),c>752&&(0,r.jsx)(o.Z,{params:t.animation}),(0,r.jsx)("h1",{className:"header_heading",dangerouslySetInnerHTML:{__html:t.heading}}),(0,r.jsx)("p",{className:t.className,dangerouslySetInnerHTML:{__html:t.subtitle}}),t.children]})}},98731:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return d},default:function(){return l}});var r=n(85893),s=n(9008),i=n(3448),a=n(75284),o=n(15553),c=n(67294),u=n(89521),f=function(t){var e=t.children,n=t.heading,s=t.formId;return(0,r.jsx)("div",{className:"book-a-demo-container-form",children:(0,r.jsxs)("div",{id:s,className:"book-form",children:[(0,r.jsx)("h5",{className:"book-form-headings",children:n}),e]})})};var d=!0,l=function(t){var e=t.newsletter;return(0,c.useEffect)((function(){u.gsap.set(".header",{backgroundImage:"linear-gradient(262deg, #06020d 43%, #190638 153%)",height:"500px"}),u.gsap.set(".header_heading",{textAlign:"center",marginLeft:"0"})}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{}),(0,r.jsxs)(s.default,{children:[(0,r.jsx)("script",{type:"text/javascript",src:"//js.hsforms.net/forms/v2.js"}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:'\t\n\t\t\t\tsetTimeout(() => {\n\n\t\t\t\t\thbspt.forms.create({\n\t\t\t\t\t\tportalId: "7252341",\n\t\t\t\t\t\tformId: "02d6ed0b-65d8-4498-b0a4-84a4343d3f1d",\n\t\t\t\t\t\ttarget:".book-form",\n\t\t\t\t\t});\t\n\t\t\t\t\t\n\t\t\t\t}, 1100);\n\t\t\n\t\t\t'}})]}),(0,r.jsx)(a.Z,{headerId:"header-newsletter",className:"header_subtitle-bis",heading:"Souscription newsletter",subtitle:"",nav:e.navbar}),(0,r.jsx)("main",{className:"main-contactPage bg-animation",children:(0,r.jsxs)("div",{className:"main-contactPage-container",children:[(0,r.jsxs)("div",{className:"main-contactPage-container-description",children:[(0,r.jsxs)("h3",{className:"main-contactPage-container-description-heading",children:["Ce que vous trouverez dans notre"," ",(0,r.jsx)("span",{className:"violet",children:"newsletter"})]}),(0,r.jsx)("div",{className:"main-contactPage-container-description-features",children:(0,r.jsx)("p",{className:"newsletter-description",children:"Elle vous tient au courant tous les mois des actualit\xe9s sur le march\xe9 du marketing digital, met en lumi\xe8re des initiatives qui nous ont marqu\xe9es ou encore vous partage nos coups de c\u0153ur."})})]}),(0,r.jsx)(f,{formId:"newsletter",heading:"Formulaire de souscription"})]})}),(0,r.jsx)(o.Z,{footer:e.footer})]})}},74383:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newsletter",function(){return n(98731)}])}},function(t){t.O(0,[5445,4617,9866,2013,1229,2962,9521,8134,185,9774,2888,179],(function(){return e=74383,t(t.s=e);var e}));var e=t.O();_N_E=e}]);