(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3147],{92137:function(t,e,n){"use strict";function r(t,e,n,r,o,i,s){try{var a=t[i](s),l=a.value}catch(u){return void n(u)}a.done?e(l):Promise.resolve(l).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var s=t.apply(e,n);function a(t){r(s,o,i,a,l,"next",t)}function l(t){r(s,o,i,a,l,"throw",t)}a(void 0)}))}}n.d(e,{Z:function(){return o}})},6610:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},77608:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,{Z:function(){return r}})},65255:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,{Z:function(){return o}})},46070:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(90484),o=n(63349);function i(t,e){return!e||"object"!==(0,r.Z)(e)&&"function"!==typeof e?(0,o.Z)(t):e}},24728:function(t,e){!function(t){"use strict";var e,n,r,o,i=function(){return"undefined"!==typeof window},s=function(){return e||i()&&(e=window.gsap)&&e.registerPlugin&&e},a=function(){return n||(l(),o||console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")),n},l=function(t){e=t||s(),i()&&(r=document),e&&(o=e.plugins.css)&&(n=1)},u={version:"3.5.1",name:"cssRule",init:function(t,e,n,i,s){if(!a()||"undefined"===typeof t.cssText)return!1;var l=t._gsProxy=t._gsProxy||r.createElement("div");this.ss=t,this.style=l.style,l.style.cssText=t.cssText,o.prototype.init.call(this,l,e,n,i,s)},render:function(t,e){for(var n,r=e._pt,o=e.style,i=e.ss;r;)r.r(t,r.d),r=r._next;for(n=o.length;--n>-1;)i[o[n]]=o[o[n]]},getRule:function(t){a();var e,n,o,i,s=r.all?"rules":"cssRules",l=r.styleSheets,u=l.length,f=":"===t.charAt(0);for(t=(f?"":",")+t.split("::").join(":").toLowerCase()+",",f&&(i=[]);u--;){try{if(!(n=l[u][s]))continue;e=n.length}catch(h){console.warn(h);continue}for(;--e>-1;)if((o=n[e]).selectorText&&-1!==(","+o.selectorText.split("::").join(":").toLowerCase()+",").indexOf(t)){if(!f)return o.style;i.push(o.style)}}return i},register:l};s()&&e.registerPlugin(u),t.CSSRulePlugin=u,t.default=u,Object.defineProperty(t,"__esModule",{value:!0})}(e)},19276:function(t,e){!function(t){"use strict";var e=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,n=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,r=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,o=/(^[#\.][a-z]|[a-y][a-z])/i,i=Math.PI/180,s=180/Math.PI,a=Math.sin,l=Math.cos,u=Math.abs,f=Math.sqrt,h=Math.atan2,c=1e8,p=function(t){return"string"===typeof t},g=function(t){return"number"===typeof t},d=function(t){return"undefined"===typeof t},y={},v={},m=1e5,x=function(t){return Math.round((t+c)%1*m)/m||(t<0?0:1)},w=function(t){return Math.round(t*m)/m||0},b=function(t,e,n,r){var o=t[e],i=1===r?6:k(o,n,r);if(i&&i+n+2<o.length)return t.splice(e,0,o.slice(0,n+i+2)),o.splice(0,n+i),1},P=function(t,e){var n=t.length;for(e||t.reverse();n--;)t[n].reversed||M(t[n])},L=function(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):e.totalPoints=t.totalPoints,e},N=function(t,e){var n=t.length,r=t[n-1]||[],o=r.length;e[0]===r[o-2]&&e[1]===r[o-1]&&(e=r.concat(e.slice(2)),n--),t[n]=e};function _(t){var e,n=(t=p(t)&&o.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return n&&(t=t.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(e=n._gsPath[t])&&!e._dirty?e:n._gsPath[t]=Z(t)):t?p(t)?Z(t):g(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")}function C(t){for(var e=[],n=0;n<t.length;n++)e[n]=L(t[n],t[n].slice(0));return L(t,e)}function M(t){var e,n=0;for(t.reverse();n<t.length;n+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;t.reversed=!t.reversed}var T=function(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),o=[].slice.call(t.attributes),i=o.length;for(e=","+e+",";--i>-1;)n=o[i].nodeName.toLowerCase(),e.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,o[i].nodeValue);return r},S={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},O=function(t,e){for(var n=e?e.split(","):[],r={},o=n.length;--o>-1;)r[n[o]]=+t.getAttribute(n[o])||0;return r};function A(t,e){var r,o,i,s,a,l,u,f,h,c,p,g,d,y,v,m,x,w,b,P,L,N,_=t.tagName.toLowerCase(),C=.552284749831;return"path"!==_&&t.getBBox?(l=T(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),N=O(t,S[_]),"rect"===_?(s=N.rx,a=N.ry||s,o=N.x,i=N.y,c=N.width-2*s,p=N.height-2*a,r=s||a?"M"+(m=(y=(d=o+s)+c)+s)+","+(w=i+a)+" V"+(b=w+p)+" C"+[m,P=b+a*C,v=y+s*C,L=b+a,y,L,y-(y-d)/3,L,d+(y-d)/3,L,d,L,g=o+s*(1-C),L,o,P,o,b,o,b-(b-w)/3,o,w+(b-w)/3,o,w,o,x=i+a*(1-C),g,i,d,i,d+(y-d)/3,i,y-(y-d)/3,i,y,i,v,i,m,x,m,w].join(",")+"z":"M"+(o+c)+","+i+" v"+p+" h"+-c+" v"+-p+" h"+c+"z"):"circle"===_||"ellipse"===_?("circle"===_?f=(s=a=N.r)*C:(s=N.rx,f=(a=N.ry)*C),r="M"+((o=N.cx)+s)+","+(i=N.cy)+" C"+[o+s,i+f,o+(u=s*C),i+a,o,i+a,o-u,i+a,o-s,i+f,o-s,i,o-s,i-f,o-u,i-a,o,i-a,o+u,i-a,o+s,i-f,o+s,i].join(",")+"z"):"line"===_?r="M"+N.x1+","+N.y1+" L"+N.x2+","+N.y2:"polyline"!==_&&"polygon"!==_||(r="M"+(o=(h=(t.getAttribute("points")+"").match(n)||[]).shift())+","+(i=h.shift())+" L"+h.join(","),"polygon"===_&&(r+=","+o+","+i+"z")),l.setAttribute("d",G(l._gsRawPath=Z(r))),e&&t.parentNode&&(t.parentNode.insertBefore(l,t),t.parentNode.removeChild(t)),l):t}function R(t,e,n){var r,o=t[e],i=t[e+2],a=t[e+4];return o+=(i-o)*n,o+=((i+=(a-i)*n)-o)*n,r=i+(a+(t[e+6]-a)*n-i)*n-o,o=t[e+1],o+=((i=t[e+3])-o)*n,o+=((i+=((a=t[e+5])-i)*n)-o)*n,w(h(i+(a+(t[e+7]-a)*n-i)*n-o,r)*s)}function B(t,e,n){d(n)&&(n=1);var r=(e=e||0)>n,o=Math.max(0,~~(u(n-e)-1e-8));if(r&&(r=n,n=e,e=r,r=1,o-=o?1:0),e<0||n<0){var i=1+~~Math.min(e,n);e+=i,n+=i}var s,a,l,f,h,c,p,g=C(t.totalLength?t:j(t)),m=n>1,x=I(g,e,y,!0),w=I(g,n,v),L=w.segment,_=x.segment,M=w.segIndex,T=x.segIndex,S=w.i,O=x.i,A=T===M,B=S===O&&A,E=A&&O>S||B&&x.t>w.t;if(m||o){if(b(g,T,O,x.t)&&(s=1,T++,B?E?w.t/=x.t:(w.t=(w.t-x.t)/(1-x.t),M++,S=0):T<=M+1&&!E&&(M++,A&&(S-=O))),w.t?b(g,M,S,w.t)&&(E&&s&&T++,r&&M++):(M--,r&&T--),f=[],c=1+(h=g.length)*o,p=T,r)for(c+=(h-(M=(M||h)-1)+T)%h,l=0;l<c;l++)N(f,g[p]),p=(p||h)-1;else for(c+=(h-T+M)%h,l=0;l<c;l++)N(f,g[p++%h]);g=f}else if(a=1===w.t?6:k(L,S,w.t),e!==n)for(s=k(_,O,B?x.t/w.t:x.t),A&&(a+=s),L.splice(S+a+2),(s||O)&&_.splice(0,O+s),l=g.length;l--;)(l<T||l>M)&&g.splice(l,1);else L.angle=R(L,S+a,0),x=L[S+=a],w=L[S+1],L.length=L.totalLength=0,L.totalPoints=g.totalPoints=8,L.push(x,w,x,w,x,w,x,w);return r&&P(g,m||o),g.totalLength=0,g}function E(t,e,n){e=e||0,t.samples||(t.samples=[],t.lookup=[]);var r,o,i,s,a,l,h,p,g,d,y,v,m,x,w,b,P,L=~~t.resolution||12,N=1/L,_=n?e+6*n+1:t.length,C=t[e],M=t[e+1],T=e?e/6*L:0,S=t.samples,O=t.lookup,A=(e?t.minLength:c)||c,R=S[T+n*L-1],B=e?S[T-1]:0;for(S.length=O.length=0,o=e+2;o<_;o+=6){if(i=t[o+4]-C,s=t[o+2]-C,a=t[o]-C,p=t[o+5]-M,g=t[o+3]-M,d=t[o+1]-M,l=h=y=v=0,u(i)<1e-5&&u(p)<1e-5&&u(a)+u(d)<1e-5)t.length>8&&(t.splice(o,6),o-=6,_-=6);else for(r=1;r<=L;r++)l=h-(h=((x=N*r)*x*i+3*(m=1-x)*(x*s+m*a))*x),y=v-(v=(x*x*p+3*m*(x*g+m*d))*x),(b=f(y*y+l*l))<A&&(A=b),B+=b,S[T++]=B;C+=i,M+=p}if(R)for(R-=B;T<S.length;T++)S[T]+=R;if(S.length&&A)for(t.totalLength=P=S[S.length-1]||0,t.minLength=A,b=w=0,r=0;r<P;r+=A)O[b++]=S[w]<r?++w:w;else t.totalLength=S[0]=0;return e?B-S[e/2-1]:B}function j(t,e){var n,r,o;for(o=n=r=0;o<t.length;o++)t[o].resolution=~~e||12,r+=t[o].length,n+=E(t[o]);return t.totalPoints=r,t.totalLength=n,t}function k(t,e,n){if(n<=0||n>=1)return 0;var r=t[e],o=t[e+1],i=t[e+2],s=t[e+3],a=t[e+4],l=t[e+5],u=r+(i-r)*n,f=i+(a-i)*n,h=o+(s-o)*n,c=s+(l-s)*n,p=u+(f-u)*n,g=h+(c-h)*n,d=a+(t[e+6]-a)*n,y=l+(t[e+7]-l)*n;return f+=(d-f)*n,c+=(y-c)*n,t.splice(e+2,4,w(u),w(h),w(p),w(g),w(p+(f-p)*n),w(g+(c-g)*n),w(f),w(c),w(d),w(y)),t.samples&&t.samples.splice(e/6*t.resolution|0,0,0,0,0,0,0,0),6}function I(t,e,n,r){n=n||{},t.totalLength||j(t),(e<0||e>1)&&(e=x(e));var o,i,s,a,l,u,f,h=0,c=t[0];if(t.length>1){for(s=t.totalLength*e,l=u=0;(l+=t[u++].totalLength)<s;)h=u;e=(s-(a=l-(c=t[h]).totalLength))/(l-a)||0}return o=c.samples,i=c.resolution,s=c.totalLength*e,a=(u=c.lookup[~~(s/c.minLength)]||0)?o[u-1]:0,(l=o[u])<s&&(a=l,l=o[++u]),f=1/i*((s-a)/(l-a)+u%i),u=6*~~(u/i),r&&1===f&&(u+6<c.length?(u+=6,f=0):h+1<t.length&&(u=f=0,c=t[++h])),n.t=f,n.i=u,n.path=t,n.segment=c,n.segIndex=h,n}function V(t,e,n,r){var o,i,s,a,l,u,f,h,c,p=t[0],g=r||{};if((e<0||e>1)&&(e=x(e)),t.length>1){for(s=t.totalLength*e,l=u=0;(l+=t[u++].totalLength)<s;)p=t[u];e=(s-(a=l-p.totalLength))/(l-a)||0}return o=p.samples,i=p.resolution,s=p.totalLength*e,a=(u=p.lookup[~~(s/p.minLength)]||0)?o[u-1]:0,(l=o[u])<s&&(a=l,l=o[++u]),c=1-(f=1/i*((s-a)/(l-a)+u%i)||0),h=p[u=6*~~(u/i)],g.x=w((f*f*(p[u+6]-h)+3*c*(f*(p[u+4]-h)+c*(p[u+2]-h)))*f+h),g.y=w((f*f*(p[u+7]-(h=p[u+1]))+3*c*(f*(p[u+5]-h)+c*(p[u+3]-h)))*f+h),n&&(g.angle=p.totalLength?R(p,u,f>=1?1-1e-9:f||1e-9):p.angle||0),g}function X(t,e,n,r,o,i,s){for(var a,l,u,f,h,c=t.length;--c>-1;)for(l=(a=t[c]).length,u=0;u<l;u+=2)f=a[u],h=a[u+1],a[u]=f*e+h*r+i,a[u+1]=f*n+h*o+s;return t._dirty=1,t}function Y(t,e,n,r,o,s,h,c,p){if(t!==c||e!==p){n=u(n),r=u(r);var g=o%360*i,d=l(g),y=a(g),v=Math.PI,m=2*v,x=(t-c)/2,w=(e-p)/2,b=d*x+y*w,P=-y*x+d*w,L=b*b,N=P*P,_=L/(n*n)+N/(r*r);_>1&&(n=f(_)*n,r=f(_)*r);var C=n*n,M=r*r,T=(C*M-C*N-M*L)/(C*N+M*L);T<0&&(T=0);var S=(s===h?-1:1)*f(T),O=S*(n*P/r),A=S*(-r*b/n),R=(t+c)/2+(d*O-y*A),B=(e+p)/2+(y*O+d*A),E=(b-O)/n,j=(P-A)/r,k=(-b-O)/n,I=(-P-A)/r,V=E*E+j*j,X=(j<0?-1:1)*Math.acos(E/f(V)),Y=(E*I-j*k<0?-1:1)*Math.acos((E*k+j*I)/f(V*(k*k+I*I)));isNaN(Y)&&(Y=v),!h&&Y>0?Y-=m:h&&Y<0&&(Y+=m),X%=m,Y%=m;var Z,z=Math.ceil(u(Y)/(m/4)),W=[],G=Y/z,q=4/3*a(G/2)/(1+l(G/2)),F=d*n,H=y*n,U=y*-r,D=d*r;for(Z=0;Z<z;Z++)b=l(o=X+Z*G),P=a(o),E=l(o+=G),j=a(o),W.push(b-q*P,P+q*b,E+q*j,j-q*E,E,j);for(Z=0;Z<W.length;Z+=2)b=W[Z],P=W[Z+1],W[Z]=b*F+P*U+R,W[Z+1]=b*H+P*D+B;return W[Z-2]=c,W[Z-1]=p,W}}function Z(t){var n,o,i,s,a,l,f,h,c,p,g,d,y,v,m,x=(t+"").replace(r,(function(t){var e=+t;return e<1e-4&&e>-1e-4?0:e})).match(e)||[],w=[],b=0,P=0,L=2/3,N=x.length,_=0,C="ERROR: malformed path: "+t,M=function(t,e,n,r){p=(n-t)/3,g=(r-e)/3,f.push(t+p,e+g,n-p,r-g,n,r)};if(!t||!isNaN(x[0])||isNaN(x[1]))return console.log(C),w;for(n=0;n<N;n++)if(y=a,isNaN(x[n])?l=(a=x[n].toUpperCase())!==x[n]:n--,i=+x[n+1],s=+x[n+2],l&&(i+=b,s+=P),n||(h=i,c=s),"M"===a)f&&(f.length<8?w.length-=1:_+=f.length),b=h=i,P=c=s,f=[i,s],w.push(f),n+=2,a="L";else if("C"===a)f||(f=[0,0]),l||(b=P=0),f.push(i,s,b+1*x[n+3],P+1*x[n+4],b+=1*x[n+5],P+=1*x[n+6]),n+=6;else if("S"===a)p=b,g=P,"C"!==y&&"S"!==y||(p+=b-f[f.length-4],g+=P-f[f.length-3]),l||(b=P=0),f.push(p,g,i,s,b+=1*x[n+3],P+=1*x[n+4]),n+=4;else if("Q"===a)p=b+(i-b)*L,g=P+(s-P)*L,l||(b=P=0),b+=1*x[n+3],P+=1*x[n+4],f.push(p,g,b+(i-b)*L,P+(s-P)*L,b,P),n+=4;else if("T"===a)p=b-f[f.length-4],g=P-f[f.length-3],f.push(b+p,P+g,i+(b+1.5*p-i)*L,s+(P+1.5*g-s)*L,b=i,P=s),n+=2;else if("H"===a)M(b,P,b=i,P),n+=1;else if("V"===a)M(b,P,b,P=i+(l?P-b:0)),n+=1;else if("L"===a||"Z"===a)"Z"===a&&(i=h,s=c,f.closed=!0),("L"===a||u(b-i)>.5||u(P-s)>.5)&&(M(b,P,i,s),"L"===a&&(n+=2)),b=i,P=s;else if("A"===a){if(v=x[n+4],m=x[n+5],p=x[n+6],g=x[n+7],o=7,v.length>1&&(v.length<3?(g=p,p=m,o--):(g=m,p=v.substr(2),o-=2),m=v.charAt(1),v=v.charAt(0)),d=Y(b,P,+x[n+1],+x[n+2],+x[n+3],+v,+m,(l?b:0)+1*p,(l?P:0)+1*g),n+=o,d)for(o=0;o<d.length;o++)f.push(d[o]);b=f[f.length-2],P=f[f.length-1]}else console.log(C);return(n=f.length)<6?(w.pop(),n=0):f[0]===f[n-2]&&f[1]===f[n-1]&&(f.closed=!0),w.totalPoints=_+n,w}function z(t,e){void 0===e&&(e=1);for(var n=t[0],r=0,o=[n,r],i=2;i<t.length;i+=2)o.push(n,r,t[i],r=(t[i]-n)*e/2,n=t[i],-r);return o}function W(t,e,n){var r,o,i,s,u,c,p,g,d,y,v,m,x,b,P=t.length-2,L=+t[0],N=+t[1],_=+t[2],C=+t[3],M=[L,N,L,N],T=_-L,S=C-N,O=Math.abs(t[P]-L)<.001&&Math.abs(t[P+1]-N)<.001;for(isNaN(n)&&(n=Math.PI/10),O&&(t.push(_,C),_=L,C=N,L=t[P-2],N=t[P-1],t.unshift(L,N),P+=4),e=e||0===e?+e:1,u=2;u<P;u+=2)r=L,o=N,L=_,N=C,m=(c=T)*c+(g=S)*g,x=(T=(_=+t[u+2])-L)*T+(S=(C=+t[u+3])-N)*S,b=(p=_-r)*p+(d=C-o)*d,v=(i=Math.acos((m+x-b)/f(4*m*x)))/Math.PI*e,y=f(m)*v,v*=f(x),L===r&&N===o||(i>n?(s=h(d,p),M.push(w(L-l(s)*y),w(N-a(s)*y),w(L),w(N),w(L+l(s)*v),w(N+a(s)*v))):(s=h(g,c),M.push(w(L-l(s)*y),w(N-a(s)*y)),s=h(S,T),M.push(w(L),w(N),w(L+l(s)*v),w(N+a(s)*v))));return M.push(w(_),w(C),w(_),w(C)),O&&(M.splice(0,6),M.length=M.length-6),M}function G(t){g(t[0])&&(t=[t]);var e,n,r,o,i="",s=t.length;for(n=0;n<s;n++){for(o=t[n],i+="M"+w(o[0])+","+w(o[1])+" C",e=o.length,r=2;r<e;r++)i+=w(o[r++])+","+w(o[r++])+" "+w(o[r++])+","+w(o[r++])+" "+w(o[r++])+","+w(o[r])+" ";o.closed&&(i+="z")}return i}var q,F,H,U,D,Q,J,K,$="transform",tt=$+"Origin",et=function(t){var e=t.ownerDocument||t;!($ in t.style)&&"msTransform"in t.style&&(tt=($="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(F=window,J=new pt,e){q=e,H=e.documentElement,U=e.body;var n=e.createElement("div"),r=e.createElement("div");U.appendChild(n),n.appendChild(r),n.style.position="static",n.style[$]="translate3d(0,0,1px)",K=r.offsetParent!==n,U.removeChild(n)}return e},nt=function(t){for(var e,n;t&&t!==U;)(n=t._gsap)&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e},rt=[],ot=[],it=function(){return F.pageYOffset||q.scrollTop||H.scrollTop||U.scrollTop||0},st=function(){return F.pageXOffset||q.scrollLeft||H.scrollLeft||U.scrollLeft||0},at=function(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)},lt=function t(e){return"fixed"===F.getComputedStyle(e).position||((e=e.parentNode)&&1===e.nodeType?t(e):void 0)},ut=function t(e,n){if(e.parentNode&&(q||et(e))){var r=at(e),o=r?r.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i=r?n?"rect":"g":"div",s=2!==n?0:100,a=3===n?100:0,l="position:absolute;display:block;pointer-events:none;",u=q.createElementNS?q.createElementNS(o.replace(/^https/,"http"),i):q.createElement(i);return n&&(r?(Q||(Q=t(e)),u.setAttribute("width",.01),u.setAttribute("height",.01),u.setAttribute("transform","translate("+s+","+a+")"),Q.appendChild(u)):(D||((D=t(e)).style.cssText=l),u.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+s+"px",D.appendChild(u))),u}throw"Need document and parent."},ft=function(t){for(var e=new pt,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e},ht=function(t,e){var n,r,o,i,s,a=at(t),l=t===a,u=a?rt:ot;if(t===F)return t;if(u.length||u.push(ut(t,1),ut(t,2),ut(t,3)),n=a?Q:D,a)o=l?{x:0,y:0}:t.getBBox(),(r=t.transform?t.transform.baseVal:{}).numberOfItems?(i=(r=r.numberOfItems>1?ft(r):r.getItem(0).matrix).a*o.x+r.c*o.y,s=r.b*o.x+r.d*o.y):(r=J,i=o.x,s=o.y),e&&"g"===t.tagName.toLowerCase()&&(i=s=0),n.setAttribute("transform","matrix("+r.a+","+r.b+","+r.c+","+r.d+","+(r.e+i)+","+(r.f+s)+")"),(l?a:t.parentNode).appendChild(n);else{if(i=s=0,K)for(r=t.offsetParent,o=t;o&&(o=o.parentNode)&&o!==r&&o.parentNode;)(F.getComputedStyle(o)[$]+"").length>4&&(i=o.offsetLeft,s=o.offsetTop,o=0);(o=n.style).top=t.offsetTop-s+"px",o.left=t.offsetLeft-i+"px",r=F.getComputedStyle(t),o[$]=r[$],o[tt]=r[tt],o.border=r.border,o.borderLeftStyle=r.borderLeftStyle,o.borderTopStyle=r.borderTopStyle,o.borderLeftWidth=r.borderLeftWidth,o.borderTopWidth=r.borderTopWidth,o.position="fixed"===r.position?"fixed":"absolute",t.parentNode.appendChild(n)}return n},ct=function(t,e,n,r,o,i,s){return t.a=e,t.b=n,t.c=r,t.d=o,t.e=i,t.f=s,t},pt=function(){function t(t,e,n,r,o,i){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=1),void 0===o&&(o=0),void 0===i&&(i=0),ct(this,t,e,n,r,o,i)}var e=t.prototype;return e.inverse=function(){var t=this.a,e=this.b,n=this.c,r=this.d,o=this.e,i=this.f,s=t*r-e*n||1e-10;return ct(this,r/s,-e/s,-n/s,t/s,(n*i-r*o)/s,-(t*i-e*o)/s)},e.multiply=function(t){var e=this.a,n=this.b,r=this.c,o=this.d,i=this.e,s=this.f,a=t.a,l=t.c,u=t.b,f=t.d,h=t.e,c=t.f;return ct(this,a*e+u*r,a*n+u*o,l*e+f*r,l*n+f*o,i+h*e+c*r,s+h*n+c*o)},e.clone=function(){return new t(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(t){var e=this.a,n=this.b,r=this.c,o=this.d,i=this.e,s=this.f;return e===t.a&&n===t.b&&r===t.c&&o===t.d&&i===t.e&&s===t.f},e.apply=function(t,e){void 0===e&&(e={});var n=t.x,r=t.y,o=this.a,i=this.b,s=this.c,a=this.d,l=this.e,u=this.f;return e.x=n*o+r*s+l||0,e.y=n*i+r*a+u||0,e},t}();function gt(t,e,n){if(!t||!t.parentNode||(q||et(t)).documentElement===t)return new pt;var r=nt(t.parentNode),o=at(t)?rt:ot,i=ht(t,n),s=o[0].getBoundingClientRect(),a=o[1].getBoundingClientRect(),l=o[2].getBoundingClientRect(),u=i.parentNode,f=lt(t),h=new pt((a.left-s.left)/100,(a.top-s.top)/100,(l.left-s.left)/100,(l.top-s.top)/100,s.left+(f?0:st()),s.top+(f?0:it()));if(u.removeChild(i),r)for(s=r.length;s--;)(a=r[s]).scaleX=a.scaleY=0,a.renderTransform(1,a);return e?h.inverse():h}var dt,yt,vt,mt,xt=["x","translateX","left","marginLeft"],wt=["y","translateY","top","marginTop"],bt=Math.PI/180,Pt=function(t,e,n,r){for(var o=e.length,i=2===r?0:r,s=0;s<o;s++)t[i]=parseFloat(e[s][n]),2===r&&(t[i+1]=0),i+=2;return t},Lt=function(t,e,n){return parseFloat(t._gsap.get(t,e,n||"px"))||0},Nt=function(t){var e,n=t[0],r=t[1];for(e=2;e<t.length;e+=2)n=t[e]+=n,r=t[e+1]+=r},_t=function(t,e,n,r,o,i,s){return"cubic"===s.type?e=[e]:(e.unshift(Lt(n,r,s.unitX),o?Lt(n,o,s.unitY):0),s.relative&&Nt(e),e=[(o?W:z)(e,s.curviness)]),e=i(Ot(e,n,s)),At(t,n,r,e,"x",s.unitX),o&&At(t,n,o,e,"y",s.unitY),j(e,s.resolution||(0===s.curviness?20:12))},Ct=function(t){return t},Mt=/[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,Tt=function(t,e,n){var r,o,i,s=gt(t);return"svg"===(t.tagName+"").toLowerCase()?(o=(r=t.viewBox.baseVal).x,i=r.y,r.width||(r={width:+t.getAttribute("width"),height:+t.getAttribute("height")})):(r=e&&t.getBBox&&t.getBBox(),o=i=0),e&&"auto"!==e&&(o+=e.push?e[0]*(r?r.width:t.offsetWidth||0):e.x,i+=e.push?e[1]*(r?r.height:t.offsetHeight||0):e.y),n.apply(o||i?s.apply({x:o,y:i}):{x:s.e,y:s.f})},St=function(t,e,n,r){var o,i=gt(t.parentNode,!0,!0),s=i.clone().multiply(gt(e)),a=Tt(t,n,i),l=Tt(e,r,i),u=l.x,f=l.y;return s.e=s.f=0,"auto"===r&&e.getTotalLength&&"path"===e.tagName.toLowerCase()&&(o=e.getAttribute("d").match(Mt)||[],u+=(o=s.apply({x:+o[0],y:+o[1]})).x,f+=o.y),(o||e.getBBox&&t.getBBox&&e.ownerSVGElement===t.ownerSVGElement)&&(u-=(o=s.apply(e.getBBox())).x,f-=o.y),s.e=u-a.x,s.f=f-a.y,s},Ot=function(t,e,n){var r,o,i,s=n.align,a=n.matrix,l=n.offsetX,u=n.offsetY,f=n.alignOrigin,h=t[0][0],c=t[0][1],p=Lt(e,"x"),g=Lt(e,"y");return t&&t.length?(s&&("self"===s||(r=mt(s)[0]||e)===e?X(t,1,0,0,1,p-h,g-c):(f&&!1!==f[2]?dt.set(e,{transformOrigin:100*f[0]+"% "+100*f[1]+"%"}):f=[Lt(e,"xPercent")/-100,Lt(e,"yPercent")/-100],i=(o=St(e,r,f,"auto")).apply({x:h,y:c}),X(t,o.a,o.b,o.c,o.d,p+o.e-(i.x-o.e),g+o.f-(i.y-o.f)))),a?X(t,a.a,a.b,a.c,a.d,a.e,a.f):(l||u)&&X(t,1,0,0,1,l||0,u||0),t):_("M0,0L0,0")},At=function(t,e,n,r,o,i){var s=e._gsap,a=s.harness,l=a&&a.aliases&&a.aliases[n],u=l&&l.indexOf(",")<0?l:n,f=t._pt=new yt(t._pt,e,u,0,0,Ct,0,s.set(e,u,t));f.u=vt(s.get(e,u,i))||0,f.path=r,f.pp=o,t._props.push(u)},Rt=function(t,e){return function(n){return t||1!==e?B(n,t,e):n}},Bt={version:"3.5.1",name:"motionPath",register:function(t,e,n){vt=(dt=t).utils.getUnit,mt=dt.utils.toArray,yt=n},init:function(t,e){if(!dt)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"===typeof e&&!e.style&&e.path||(e={path:e});var n,r,o,i,s=[],a=e.path,l=a[0],u=e.autoRotate,f=Rt(e.start,"end"in e?e.end:1);if(this.rawPaths=s,this.target=t,(this.rotate=u||0===u)&&(this.rOffset=parseFloat(u)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=vt(t._gsap.get(t,this.rProp))||0),Array.isArray(a)&&!("closed"in a)&&"number"!==typeof l){for(r in l)~xt.indexOf(r)?o=r:~wt.indexOf(r)&&(i=r);for(r in o&&i?s.push(_t(this,Pt(Pt([],a,o,0),a,i,1),t,e.x||o,e.y||i,f,e)):o=i=0,l)r!==o&&r!==i&&s.push(_t(this,Pt([],a,r,2),t,r,0,f,e))}else j(n=f(Ot(_(e.path),t,e)),e.resolution),s.push(n),At(this,t,e.x||"x",n,"x",e.unitX||"px"),At(this,t,e.y||"y",n,"y",e.unitY||"px")},render:function(t,e){var n=e.rawPaths,r=n.length,o=e._pt;for(t>1?t=1:t<0&&(t=0);r--;)V(n[r],t,!r&&e.rotate,n[r]);for(;o;)o.set(o.t,o.p,o.path[o.pp]+o.u,o.d,t),o=o._next;e.rotate&&e.rSet(e.target,e.rProp,n[0].angle*(e.radians?bt:1)+e.rOffset+e.ru,e,t)},getLength:function(t){return j(_(t)).totalLength},sliceRawPath:B,getRawPath:_,pointsToSegment:W,stringToRawPath:Z,rawPathToString:G,transformRawPath:X,getGlobalMatrix:gt,getPositionOnPath:V,cacheRawPathMeasurements:j,convertToPath:function(t,e){return mt(t).map((function(t){return A(t,!1!==e)}))},convertCoordinates:function(t,e,n){var r=gt(e,!0,!0).multiply(gt(t));return n?r.apply(n):r},getAlignMatrix:St,getRelativePosition:function(t,e,n,r){var o=St(t,e,n,r);return{x:o.e,y:o.f}},arrayToRawPath:function(t,e){var n=Pt(Pt([],t,(e=e||{}).x||"x",0),t,e.y||"y",1);return e.relative&&Nt(n),["cubic"===e.type?n:W(n,e.curviness)]}};(dt||"undefined"!==typeof window&&(dt=window.gsap)&&dt.registerPlugin&&dt)&&dt.registerPlugin(Bt),t.MotionPathPlugin=Bt,t.default=Bt,Object.defineProperty(t,"__esModule",{value:!0})}(e)},86893:function(t,e,n){"use strict";n.d(e,{jRj:function(){return o}});var r=n(44405);function o(t){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(t)}}}]);