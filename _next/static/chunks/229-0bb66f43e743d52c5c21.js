(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{16071:function(e,t,r){"use strict";var n=r(63038),o=r(20862);t.default=void 0;var a=o(r(67294)),c=r(11689),l=r(72441),i=r(75749),u={};function s(e,t,r,n){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,l.useRouter)(),o=r&&r.asPath||"/",f=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),r=n(t,2),a=r[0],l=r[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):l||a}}),[o,e.href,e.as]),d=f.href,v=f.as,p=e.children,h=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var b=a.Children.only(p),w=b&&"object"===typeof b&&b.ref,C=(0,i.useIntersection)({rootMargin:"200px"}),E=n(C,2),k=E[0],M=E[1],O=a.default.useCallback((function(e){k(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,k]);(0,a.useEffect)((function(){var e=M&&t&&(0,c.isLocalURL)(d),n="undefined"!==typeof g?g:r&&r.locale,o=u[d+"%"+v+(n?"%"+n:"")];e&&!o&&s(r,d,v,{locale:n})}),[v,d,M,g,t,r]);var L={ref:O,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==l&&(l=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:l}))}(e,r,d,v,h,y,m,g)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),s(r,d,v,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var x="undefined"!==typeof g?g:r&&r.locale,N=r&&r.isLocaleDomain&&(0,c.getDomainLocale)(v,x,r&&r.locales,r&&r.domainLocales);L.href=N||(0,c.addBasePath)((0,c.addLocale)(v,x,r&&r.defaultLocale))}return a.default.cloneElement(b,L)};t.default=f},75749:function(e,t,r){"use strict";var n=r(63038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,i=(0,o.useRef)(),u=(0,o.useState)(!1),s=n(u,2),f=s[0],d=s[1],v=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),r||f||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[v,f]};var o=r(67294),a=r(98391),c="undefined"!==typeof IntersectionObserver;var l=new Map},41664:function(e,t,r){e.exports=r(16071)},11163:function(e,t,r){e.exports=r(72441)},53854:function(e,t,r){"use strict";r.d(t,{Cq1:function(){return o}});var n=r(44405);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",clipRule:"evenodd"}}]})(e)}},44405:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(67294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r};function i(e){return e&&e.map((function(e,t){return n.createElement(e.tag,c({key:t},e.attr),i(e.child))}))}function u(e){return function(t){return n.createElement(s,c({attr:c({},e.attr)},t),i(e.child))}}function s(e){var t=function(t){var r,o=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var a=e.attr,i=e.title,u=l(e,["attr","title"]);return n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:c({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}}}]);