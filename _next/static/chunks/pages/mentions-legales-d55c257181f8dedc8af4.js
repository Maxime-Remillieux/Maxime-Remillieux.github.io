(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[648],{5935:function(e,n,s){"use strict";var r=s(85893),i=s(41664),t=s(67294);n.Z=function(e){var n=e.href,s=e.className,a=e.label;return(0,t.useEffect)((function(){}),[]),(0,r.jsx)(i.default,{href:n,passHref:!0,children:n.includes("https")||n.includes("http")?(0,r.jsx)("a",{className:s,target:"_blank",children:a}):(0,r.jsx)("a",{className:s,children:a})})}},15553:function(e,n,s){"use strict";var r=s(85893),i=s(67294),t=s(47110);n.Z=function(e){var n=e.footer,s=(0,i.useState)(n.select_language),a=s[0],l=(s[1],(0,i.useState)({country:"France",country_flag:"/images/100ppi/France.png"})),o=l[0],c=l[1];return(0,r.jsxs)("footer",{className:"footer",children:[(0,r.jsxs)("div",{className:"footer_container",children:[(0,r.jsx)("div",{className:"footer_container-logo",children:(0,r.jsx)("img",{src:"".concat(n.logo_footer.url),alt:n.logo_footer.alternativeText})}),(0,r.jsxs)("div",{className:"footer-socials",children:[(0,r.jsx)("span",{className:"footer-socials-heading",children:n.block_social_heading}),(0,r.jsx)("ul",{className:"footer-socials-list",children:n.reseau_social.map((function(e,n){return(0,r.jsx)("li",{children:(0,r.jsx)(t.Z,{href:e.href,icon:e.icon})},"".concat(e+n))}))})]})]}),(0,r.jsx)("nav",{className:"footer_container_footer-nav",children:(0,r.jsxs)("ul",{className:"navItems",children:[n.navItem.map((function(e,n){return(0,r.jsx)("li",{className:"item",children:(0,r.jsx)("a",{href:e.link_href,children:e.link_label})},"".concat(e+n))})),(0,r.jsx)("li",{className:"item",children:(0,r.jsx)("a",{href:"/privacy",children:"Data privacy"})}),(0,r.jsx)("li",{className:"item",children:(0,r.jsx)("a",{href:"/mentions-legales",children:"Mentions L\xe9gales"})}),(0,r.jsx)("li",{className:"item",children:(0,r.jsx)("a",{href:"/cgv",children:"CGV"})})]})}),(0,r.jsx)("div",{className:"footer_nav-bottom",children:(0,r.jsx)("div",{className:"footer_nav-bottom-com",children:(0,r.jsx)("div",{className:"footer_nav-bottom-com-list",children:(0,r.jsxs)("div",{className:"lang",children:[(0,r.jsx)("img",{src:"France"===o.country?"/images/100ppi/France.png":"".concat(o.country_flag),className:"flag",alt:"klox-language-website"}),(0,r.jsx)("form",{id:"language",children:(0,r.jsx)("select",{name:"lang",onChange:function(e){var n=a.find((function(n){return n.country===e.target.value}));c({country:n.country,country_flag:n.country_flag.url})},children:n.select_language.map((function(e,n){return(0,r.jsx)("option",{value:e.country,children:e.country},"".concat(e+n))}))})})]})})})})]})}},71926:function(e,n,s){"use strict";s.d(n,{Z:function(){return f}});var r=s(85893),i=s(5935),t=s(67294),a=s(53854),l=s(8193),o=s(11163),c=s(51649),u=s(63750),d=function(e){var n=e.children,s=e.label,i=(0,t.useState)(!1),a=i[0],l=i[1];return(0,r.jsxs)("div",{className:"dropdown","data-focus":a,children:[(0,r.jsxs)("div",{onClick:function(e){e.preventDefault(),l(!a)},className:"title"+(a?" focus":""),children:[(0,r.jsx)("span",{style:{fontSize:"1.5rem"},children:s}),a?(0,r.jsx)(c.Vmf,{size:"20px"}):(0,r.jsx)(c.OId,{size:"20px"})]}),a&&(0,r.jsx)("div",{className:"content"+(a?" focus":""),children:n})]})},h=[{link_label:"Offres",link_href:"/product"},{link_label:"Blog",link_href:"https://blog.klox.io/"},{link_label:"Contact",link_href:"/contact"}],m=[{label:"Enjeux",links:[{label:"Campagne",href:"/"},{label:"Conseil",href:"/"},{label:"Marketplace",href:"/marketplace"}]},{label:"Typologie",links:[{label:"Notori\xe9t\xe9",href:"/"},{label:"Performance",href:"/"},{label:"Trafic",href:"/"}]},{label:"Secteur",links:[{label:"Start-up",href:"/"},{label:"E-commerce",href:"/"},{label:"\xc9v\xe9nements",href:"/"},{label:"Agence",href:"/"},{label:"TPE/PME",href:"/"},{label:'"Produit physique"',href:"/"}]}];function f(e){var n=e.navbar,s=n.logo,f=(n.link,n.cta),p=(0,t.useState)(null),x=p[0],j=p[1],v=(0,t.useState)(!1),g=v[0],b=v[1],N=(0,t.useState)(!1),_=N[0],k=N[1],y=(0,t.useState)(0),w=y[0],S=y[1],O=(0,o.useRouter)(),E=function(){j(window.innerWidth)},P=function(e){return b(!g)};(0,t.useEffect)((function(){g||S(0)}),[g]);return(0,t.useEffect)((function(){return!x&&j(window.innerWidth),window.addEventListener("resize",E),function(){window.removeEventListener("resize",E)}}),[x]),(0,r.jsx)("nav",{className:"navbar",children:x<1047?(0,r.jsxs)("div",{className:"navbar_primary",children:[(0,r.jsx)("div",{className:"navbar_primary-logo",children:(0,r.jsx)("a",{href:s.href,children:(0,r.jsx)("img",{src:"".concat(s.image.url),alt:s.image.alternativeText})})}),(0,r.jsx)("div",{className:"navbar_primary-right",onClick:P,children:g?(0,r.jsx)(l.oHP,{className:"ham"}):(0,r.jsx)(a.Cq1,{className:"ham"})}),x<1047&&g?(0,r.jsxs)(r.Fragment,{children:[0==w&&(0,r.jsx)("div",{className:"navMobile",children:(0,r.jsxs)("ul",{className:"navMobileItems",children:[(0,r.jsxs)("li",{className:"items",children:[(0,r.jsx)("a",{style:{cursor:"pointer"},onClick:function(){return S(1)},children:"Pour vous"}),(0,r.jsx)(c.hjJ,{style:{position:"relative",left:"20px",top:"4px"}})]}),h.map((function(e,n){return(0,r.jsx)("li",{className:"items",children:(0,r.jsx)("a",{className:"".concat(e.link_href===O.route&&"active"),href:e.link_href,children:e.link_label})},"".concat(e+n))})),f.map((function(e,n){return(0,r.jsx)("li",{className:"login",children:(0,r.jsx)(i.Z,{className:"btn-".concat(e.className),href:e.href,label:e.label})},"".concat(e+n))}))]})}),1==w&&(0,r.jsxs)("div",{className:"pourVousMenuMobile",children:[(0,r.jsx)(u.And,{size:40,onClick:function(){return S(0)},className:"backButton"}),(0,r.jsx)("ul",{className:"pourVousList",children:m.map((function(e,n){return(0,r.jsx)("li",{children:(0,r.jsx)(d,{label:e.label,children:e.links.map((function(e,n){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:e.href,children:e.label})},n)}))})},n)}))})]}),(0,r.jsx)("div",{className:"navMobile_background",children:"\xa0"})]}):null]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"navbar_primary",children:[(0,r.jsx)("div",{className:"navbar_primary-logo",children:(0,r.jsx)("a",{href:s.href,children:(0,r.jsx)("img",{src:"".concat(s.image.url),alt:s.image.alternativeText})})}),(0,r.jsx)("div",{className:"navbar_primary_links",children:(0,r.jsxs)("ul",{className:"navbar_primary_links--item",children:[(0,r.jsx)("li",{className:"items",onMouseEnter:function(){return k(!0)},children:(0,r.jsxs)("a",{className:_?"active":"",style:{display:"flex",alignItems:"center",gap:"5px",cursor:"pointer",pointer:"none"},children:["Pour vous ",_?(0,r.jsx)(c.Vmf,{}):(0,r.jsx)(c.OId,{})]})}),h.map((function(e,n){return(0,r.jsx)("li",{className:"items",children:(0,r.jsx)("a",{className:"".concat(e.link_href===O.route&&"active"),href:e.link_href,children:e.link_label})},"".concat(e+n))}))]})}),(0,r.jsx)("div",{className:"navbar_primary-right",children:f.map((function(e,n){return(0,r.jsx)(i.Z,{className:"btn-".concat(e.className),href:e.href,label:e.label},"".concat(e+n))}))})]}),_&&(0,r.jsx)("div",{className:"dropdownMenu",onMouseLeave:function(){return k(!1)},children:m.map((function(e,n){return(0,r.jsxs)("div",{className:"dropdownSection",children:[(0,r.jsx)("h2",{children:e.label}),(0,r.jsx)("ul",{children:e.links.map((function(e,n){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:e.href,children:e.label})},n)}))})]},n)}))})]})})}},3448:function(e,n,s){"use strict";var r=s(96156),i=s(85893),t=s(2962);function a(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,r)}return s}function l(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?a(Object(s),!0).forEach((function(n){(0,r.Z)(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}n.Z=function(e){var n={canonical:"",description:"Klox fusionne le meilleur de l'AdTech \xe0 ses experts pour r\xe9pondre avec cr\xe9ativit\xe9 \xe0 vos enjeux marketing : Social, Video & Display, Audio, DOOH, TV...",noindex:!1,openGraph:{defaultImageHeight:1200,defaultImageWidth:1200,description:"Klox fusionne le meilleur de l'AdTech \xe0 ses experts pour r\xe9pondre avec cr\xe9ativit\xe9 \xe0 vos enjeux marketing : Social, Video & Display, Audio, DOOH, TV...",images:[{alt:"Klox",height:600,url:"/images/Klox.png",width:800}],locale:"fr_FR",site_name:"Klox",title:"Klox | Agency as a Service | Entertainment DNA",type:"website",url:"https://klox.io"},title:"Klox | Agency as a Service | Entertainment DNA",twitter:{cardType:"summary_large_image",handle:"@WeAreKlox",site:"@WeAreKlox"}};if(e.noindex){return(0,i.jsx)(t.PB,l({},{noindex:!0}))}return e.metaDescription&&(n.description=e.metaDescription,n.openGraph.description=e.metaDescription),e.href&&(n.canonical=e.href,n.openGraph.url=e.href),e.metaTitle&&(n.title=e.metaTitle,n.openGraph.title=e.metaTitle),(0,i.jsx)(t.PB,l({},n))}},47110:function(e,n,s){"use strict";var r=s(85893),i=s(41664),t=s(89583);n.Z=function(e){var n=e.href,s=e.icon;return(0,r.jsx)(i.default,{href:n,children:(0,r.jsx)("a",{target:"_blank",children:(0,r.jsx)("button",{className:"btn-socials",children:function(e){switch(e){case"FaFacebookF":return(0,r.jsx)(t.tBk,{});case"FaTwitter":return(0,r.jsx)(t.fWC,{});case"FaInstagram":return(0,r.jsx)(t.Zf_,{});case"FaLinkedinIn":return(0,r.jsx)(t.BUd,{});default:return}}(s)})})})}},70857:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return l}});var r=s(85893),i=s(15553),t=s(3448),a=s(71926),l=!0;n.default=function(e){var n=e.privacy;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.Z,{metaTitle:"Klox | Mentions L\xe9gales",metaDescription:"H\xe9bergement des donn\xe9es, propri\xe9t\xe9 intellectuelle, informations sur la soci\xe9t\xe9, cr\xe9dits... vous trouverez toutes les mentions l\xe9gales de Klox."}),(0,r.jsxs)("header",{id:"header-privacy",className:"header",children:[(0,r.jsx)(a.Z,{navbar:n.navbar}),(0,r.jsx)("h1",{className:"header_heading",children:"Mentions L\xe9gales"})]}),(0,r.jsx)("main",{children:(0,r.jsx)("div",{class:"privacy-container",children:(0,r.jsxs)("div",{class:"row",children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Editeur du Site :"})," Le site Klox accessible via l\u2019adresse www.klox.io est \xe9dit\xe9 par la soci\xe9t\xe9 Klox SAS SIREN n\xb0828 285 668"]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Nom commercial :"})," Klox"]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Si\xe8ge social :"})," 55 ter rue de la chapelle Deskeo, 75018 Paris"]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"E-Mail :"})," contact@klox.fr"]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Directeur de publication :"})," Corentin Cadet"]}),(0,r.jsx)("p",{children:"\xa0"}),(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"H\xe9bergement du Site "})}),(0,r.jsxs)("p",{children:["Le site est h\xe9berg\xe9 par",(0,r.jsx)("a",{href:"https://cloud.google.com/gcp/",children:"Google Cloud Platform"}),", \xe0 Saint-Ghislain en Belgique, Europe."]}),(0,r.jsx)("p",{children:"\xa0"}),(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"Propri\xe9t\xe9 Intellectuelle "})}),(0,r.jsx)("p",{children:"Le contenu de klox.io y compris, mais sans s\u2019y limiter, tout logo, marque, photo, ou vid\xe9o sur le site, est prot\xe9g\xe9 en vertu des droits de propri\xe9t\xe9 intellectuelle, ou de toute autre disposition l\xe9gale applicable en l\u2019esp\xe8ce."}),(0,r.jsx)("p",{children:"La Soci\xe9t\xe9 poss\xe8de tous les droits relatifs \xe0 l\u2019exclusion du contenu express\xe9ment attribu\xe9 \xe0 d\u2019autres. La reproduction, la distribution, l\u2019adaptation de logos, marques et autres contenus sur klox.io est interdite sans autorisation pr\xe9alable du titulaire des droits, que ce soit \xe0 des fins commerciales ou non. La Soci\xe9t\xe9 se r\xe9serve la possibilit\xe9 de poursuivre toute personne contrevenant \xe0 ces dispositions..."}),(0,r.jsx)("p",{children:"\xa0"}),(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"Respect des obligations l\xe9gales Conform\xe9ment \xe0 la loi informatique et libert\xe9s (Loi n\xb0 78-17 du 6 janvier 1978)"})}),(0,r.jsx)("p",{children:"Vous disposez d\u2019un droit d\u2019acc\xe8s, de rectification, et de suppression des donn\xe9es relatives aux informations vous concernant. Vous pouvez l\u2019exercer en nous envoyant un courrier \xe0 l'adresse suivante : Klox \u2013 55 ter rue de la chapelle Deskeo, 75018 Paris. Lors de la collecte directe de donn\xe9es (sous forme ou non de formulaire) vous serez inform\xe9s par le support de collecte, du caract\xe8re obligatoire ou facultatif du recueil de chaque information demand\xe9e."}),(0,r.jsx)("p",{children:"Les donn\xe9es seront destin\xe9es \xe0 un usage exclusivement interne. Informations techniques : ce site est optimis\xe9 pour un affichage en r\xe9solution 1024*768 pixels. Le site a \xe9t\xe9 d\xe9velopp\xe9 et test\xe9 pour une visualisation optimale et responsive design. Donn\xe9es personnelles d'une fa\xe7on g\xe9n\xe9rale, vous pouvez visiter notre site sur Internet sans avoir \xe0 d\xe9cliner votre identit\xe9 et \xe0 fournir des informations personnelles vous concernant. Modification des mentions l\xe9gales et conditions d\u2019utilisation Klox se r\xe9serve la possibilit\xe9 de modifier, \xe0 tout moment et sans pr\xe9avis, les pr\xe9sentes conditions d\u2019utilisation afin de les adapter aux \xe9volutions du site et/ou de son exploitation."}),(0,r.jsx)("p",{children:"\xa0"}),(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"Cr\xe9dits photos utilis\xe9es sur le site klox.io \xa9 Fotolia.com / licences de chacune des photos achet\xe9es par KLOX en mai 2017."})})]})})}),(0,r.jsx)(i.Z,{footer:n.footer})]})}},44661:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mentions-legales",function(){return s(70857)}])}},function(e){e.O(0,[445,617,866,13,962,229,774,888,179],(function(){return n=44661,e(e.s=n);var n}));var n=e.O();_N_E=n}]);