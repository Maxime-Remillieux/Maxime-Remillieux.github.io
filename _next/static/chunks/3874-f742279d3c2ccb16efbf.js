(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3874],{93619:function(e,t,n){"use strict";var r=n(64119);t.Z=void 0;var o=r(n(64938)),i=n(85893),a=(0,o.default)((0,i.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.Z=a},64119:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},64938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(78301)},78301:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return y},debounce:function(){return S},deprecatedPropType:function(){return N},isMuiElement:function(){return w},ownerDocument:function(){return O},ownerWindow:function(){return _},requirePropFactory:function(){return T},setRef:function(){return k},unstable_ClassNameGenerator:function(){return M},unstable_useEnhancedEffect:function(){return z},unstable_useId:function(){return P},unsupportedProp:function(){return I},useControlled:function(){return A},useEventCallback:function(){return E.Z},useForkRef:function(){return B.Z},useIsFocusVisible:function(){return F.Z}});var r=n(88076),o=n(98216);var i=function(...e){return e.reduce(((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)}),(()=>{}))},a=n(12715),l=n(67294),c=n.t(l,2),s=n(57144),u=(n(45697),n(86010)),d=n(27192),f=n(12522),m=n(20491),p=n(28979);function h(e){return(0,p.Z)("MuiSvgIcon",e)}(0,n(76087).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var v=n(85893);const x=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],g=(0,m.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,o.Z)(n.color)}`],t[`fontSize${(0,o.Z)(n.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var n,r,o,i,a,l,c,s,u,d,f,m,p,h,v,x,g;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=e.transitions)||null==(r=n.create)?void 0:r.call(n,"fill",{duration:null==(o=e.transitions)||null==(i=o.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(a=e.typography)||null==(l=a.pxToRem)?void 0:l.call(a,20))||"1.25rem",medium:(null==(c=e.typography)||null==(s=c.pxToRem)?void 0:s.call(c,24))||"1.5rem",large:(null==(u=e.typography)||null==(d=u.pxToRem)?void 0:d.call(u,35))||"2.1875"}[t.fontSize],color:null!=(f=null==(m=e.palette)||null==(p=m[t.color])?void 0:p.main)?f:{action:null==(h=e.palette)||null==(v=h.action)?void 0:v.active,disabled:null==(x=e.palette)||null==(g=x.action)?void 0:g.disabled,inherit:void 0}[t.color]}})),j=l.forwardRef((function(e,t){const n=(0,f.Z)({props:e,name:"MuiSvgIcon"}),{children:r,className:i,color:l="inherit",component:c="svg",fontSize:m="medium",htmlColor:p,inheritViewBox:j=!1,titleAccess:b,viewBox:y="0 0 24 24"}=n,S=(0,s.Z)(n,x),N=(0,a.Z)({},n,{color:l,component:c,fontSize:m,instanceFontSize:e.fontSize,inheritViewBox:j,viewBox:y}),w={};j||(w.viewBox=y);const Z=(e=>{const{color:t,fontSize:n,classes:r}=e,i={root:["root","inherit"!==t&&`color${(0,o.Z)(t)}`,`fontSize${(0,o.Z)(n)}`]};return(0,d.Z)(i,h,r)})(N);return(0,v.jsxs)(g,(0,a.Z)({as:c,className:(0,u.Z)(Z.root,i),ownerState:N,focusable:"false",color:p,"aria-hidden":!b||void 0,role:b?"img":void 0,ref:t},w,S,{children:[r,b?(0,v.jsx)("title",{children:b}):null]}))}));j.muiName="SvgIcon";var b=j;function y(e,t){const n=(n,r)=>(0,v.jsx)(b,(0,a.Z)({"data-testid":`${t}Icon`,ref:r},n,{children:e}));return n.muiName=b.muiName,l.memo(l.forwardRef(n))}var S=function(e,t=166){let n;function r(...r){clearTimeout(n),n=setTimeout((()=>{e.apply(this,r)}),t)}return r.clear=()=>{clearTimeout(n)},r};var N=function(e,t){return()=>null};var w=function(e,t){return l.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)};function Z(e){return e&&e.ownerDocument||document}var O=Z;var _=function(e){return Z(e).defaultView||window};n(6992);var T=function(e,t){return()=>null},k=n(7960).Z,z=n(16600).Z;let C=0;const D=c.useId;var P=function(e){if(void 0!==D){const t=D();return null!=e?e:t}return function(e){const[t,n]=l.useState(e),r=e||t;return l.useEffect((()=>{null==t&&(C+=1,n(`mui-${C}`))}),[t]),r}(e)};var I=function(e,t,n,r,o){return null};var A=function({controlled:e,default:t,name:n,state:r="value"}){const{current:o}=l.useRef(void 0!==e),[i,a]=l.useState(t);return[o?e:i,l.useCallback((e=>{o||a(e)}),[])]},E=n(25430),B=n(38192),F=n(13511);const M={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}},66708:function(e,t,n){"use strict";var r=n(85893);n(67294);t.Z=function(e){var t=e.partner,n=e.industry;return(0,r.jsx)("li",{className:"partnerCard",children:(0,r.jsxs)("a",{href:"/success-stories/".concat(t.name.toLowerCase()),children:[(0,r.jsxs)("div",{className:"cardTop",children:[(0,r.jsx)("div",{className:"background",style:{backgroundImage:'url("'.concat(t.image,'"')}}),(0,r.jsx)("img",{className:"logo",src:t.logo}),(0,r.jsx)("img",{className:"cardBottomHeader",src:"/images/header-partner-card-gradient4.png"})]}),(0,r.jsxs)("div",{className:"cardBottom",children:[(0,r.jsx)("h2",{children:t.name.toUpperCase()}),(0,r.jsx)("p",{className:"description",children:t.description})]}),(0,r.jsx)("div",{className:"cardTag",children:n.name})]})})}},3448:function(e,t,n){"use strict";var r=n(96156),o=n(85893),i=n(2962);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t={canonical:"",description:"Klox fusionne le meilleur de l'AdTech \xe0 ses experts pour r\xe9pondre avec cr\xe9ativit\xe9 \xe0 vos enjeux marketing : Social, Video & Display, Audio, DOOH, TV...",noindex:!1,openGraph:{defaultImageHeight:1200,defaultImageWidth:1200,description:"Klox fusionne le meilleur de l'AdTech \xe0 ses experts pour r\xe9pondre avec cr\xe9ativit\xe9 \xe0 vos enjeux marketing : Social, Video & Display, Audio, DOOH, TV...",images:[{alt:"Klox",height:600,url:"/images/Klox.png",width:800}],locale:"fr_FR",site_name:"Klox",title:"Klox | Agency as a Service | Entertainment DNA",type:"website",url:"https://klox.io"},title:"Klox | Agency as a Service | Entertainment DNA",twitter:{cardType:"summary_large_image",handle:"@WeAreKlox",site:"@WeAreKlox"}};if(e.noindex){return(0,o.jsx)(i.PB,l({},{noindex:!0}))}return e.metaDescription&&(t.description=e.metaDescription,t.openGraph.description=e.metaDescription),e.href&&(t.canonical=e.href,t.openGraph.url=e.href),e.metaTitle&&(t.title=e.metaTitle,t.openGraph.title=e.metaTitle),(0,o.jsx)(i.PB,l({},t))}},54015:function(e,t,n){"use strict";var r=n(85893),o=(n(67294),n(89583)),i=function(e){var t=e.icon,n=e.size;return(0,r.jsx)("div",{className:"icon",style:{fontSize:n},children:"FaDesktop"===t?(0,r.jsx)(o.lMi,{}):"FaLayerGroup"===t?(0,r.jsx)(o.ArU,{}):"FaPaintBrush"===t?(0,r.jsx)(o._TT,{}):null})};t.Z=function(e){var t=e.block;return(0,r.jsxs)("div",{className:"block",children:[(0,r.jsx)("div",{style:t.variant?{backgroundColor:t.variant}:{backgroundColor:"#2E2F3D"},className:"logo",children:(0,r.jsx)(i,{icon:t.icon,size:"27px"})}),(0,r.jsx)("h2",{children:t.title}),"object"===typeof t.content?(0,r.jsx)("ul",{children:t.content.map((function(e,t){return(0,r.jsx)("li",{children:e},t)}))}):(0,r.jsx)("p",{children:t.content})]})}},10414:function(e,t,n){"use strict";var r=n(85893),o=(n(67294),n(78059));t.Z=function(e){var t=e.offer;return(0,r.jsxs)("div",{className:"offer-card",style:(t.variant,{borderColor:t.variant}),children:[(0,r.jsxs)("div",{className:"offer-card-top",children:[(0,r.jsx)("h3",{className:"label",children:t.label}),(0,r.jsx)("h2",{className:"price",children:t.line_2}),(0,r.jsx)("div",{className:"month",children:t.line_3})]}),(0,r.jsx)("div",{className:"separation"}),(0,r.jsxs)("div",{className:"offer-card-bottom",children:[(0,r.jsx)("h3",{className:"target-title",children:t.target}),(0,r.jsx)("ul",{className:"content",children:t.content.map((function(e,t){return(0,r.jsx)("li",{children:e},t)}))}),(0,r.jsx)(o.Z,{color:t.variant&&"blue"===t.variant?"primary":"secondary",className:"start-button",variant:"contained",href:t.button.href,children:t.button.label}),(0,r.jsx)("div",{className:"trial",children:t.bottom_text})]})]})}}}]);