(self.webpackChunkgatsby_starter_hoodie=self.webpackChunkgatsby_starter_hoodie||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return r.createElement(s,a({attr:a({},e.attr)},t),l(e.child))}}function s(e){var t=function(t){var n,o=e.attr,i=e.size,l=e.title,u=c(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),d.canUseDOM?t(l):n&&(l=n(l))}var d=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(d,"canUseDOM",c),d}}},9349:function(e){e.exports={title:"RN",description:" ",author:"Hsiang-Jen Li",NickName:"RN",ChineseName:"李享紝",GraduationSchool:"NKUST - Department of Money and Banking",Skills:"Python, Flask, html, CSS",Language:"TOEIC 725",siteUrl:"https://hsiangjenli.github.io/",links:{github:"https://github.com/hsiangjenli",linkedIn:"https://www.linkedin.com/in/hsiangjenli/",kaggle:"https://www.kaggle.com/hsiangjenli",email:"mailto:hsiangjenli@gmail.com"},utterances:{repo:"hsiangjenli/gatsby-starter-hoodie",type:"pathname"}}},2225:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r,o,i=n(7294),a=n(9),c=n(8745),l=n(3130),u={name:"light",colors:{bodyBackground:"#ffffff",text:"#212529",secondaryText:"#495057",tertiaryText:"#868e96",mutedText:"#adb5bd",hoveredLinkText:"#f8f9fa",border:"#ced4da",activatedBorder:"#868e96",background:"#f1f3f5",icon:"#868e96",divider:"#e9ecef",headerBackground:"rgba(255, 255, 255, 0.85)",headerShadow:"rgba(0, 0, 0, 0.08)",inlineCodeBackground:"#e9ecef",inlineCodeBackgroundDarker:"#ced4da",tagBackground:"#f1f3f5",selectedTagBackground:"#495057",hoveredTagBackground:"#dee2e6",hoveredSelectedTagBackground:"#343a40",nextPostButtonBackground:"rgba(0, 0, 0, 0.06)",hoveredNextPostButtonBackground:"rgba(0, 0, 0, 0.08)",seriesBackground:"#f1f3f5",tagText:"#495057",selectedTagText:"#f8f9fa",spinner:"#495057",scrollTrack:"#f1f3f5",scrollHandle:"#ced4da",blockQuoteBorder:"#ced4da",blockQuoteBackground:"#f1f3f5",textFieldBorder:"#ced4da",textFieldActivatedBorder:"#adb5bd",tableBackground:"#f1f3f5"}},s={name:"dark",colors:{bodyBackground:"#212529",text:"#f8f9fa",secondaryText:"#ced4da",tertiaryText:"#adb5bd",mutedText:"#868e96",hoveredLinkText:"#212529",border:"#adb5bd",activatedBorder:"#dee2e6",background:"#343a40",icon:"#adb5bd",divider:"#343a40",headerBackground:"rgba(33, 37, 41, 0.85)",headerShadow:"rgba(255, 255, 255, 0.08)",inlineCodeBackground:"#495057",inlineCodeBackgroundDarker:"#343a40",tagBackground:"#343a40",selectedTagBackground:"#e9ecef",hoveredTagBackground:"#495057",hoveredSelectedTagBackground:"#f1f3f5",nextPostButtonBackground:"rgba(255, 255, 255, 0.05)",hoveredNextPostButtonBackground:"rgba(255, 255, 255, 0.08)",seriesBackground:"#343a40",tagText:"#e9ecef",selectedTagText:"#212529",spinner:"#f1f3f5",scrollTrack:"#343a40",scrollHandle:"#868e96",blockQuoteBorder:"#495057",blockQuoteBackground:"#343a40",textFieldBorder:"#495057",textFieldActivatedBorder:"#868e96",tableBackground:"#292e33"}},d=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},f=(0,a.css)(r||(r=d(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"]))),p=((0,a.createGlobalStyle)(o||(o=d(["",""],["",""])),f),f),h=(0,a.createGlobalStyle)([""," body{font-family:'Noto Sans KR',sans-serif;background:",";}"],p,(function(e){return e.theme.colors.bodyBackground})),m=n(1597),g=n(9349),b=n(3201),y=a.default.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-12xtq5x-0"})(["display:block;position:fixed;top:","px;left:0;right:0;padding:16px;background-color:",";box-shadow:0 0 8px ",";backdrop-filter:blur(5px);opacity:",";transition:top 0.5s,opacity 0.5s;z-index:999;@media (max-width:768px){padding:16px 0;}"],(function(e){return e.isHidden?-60:0}),(function(e){return e.theme.colors.headerBackground}),(function(e){return e.theme.colors.headerShadow}),(function(e){return e.isHidden?0:1})),v=a.default.div.withConfig({displayName:"Header__Inner",componentId:"sc-12xtq5x-1"})(["display:flex;justify-content:space-between;margin:0 64px;@media (max-width:768px){margin:0 15px;}"]),w=a.default.span.withConfig({displayName:"Header__BlogTitle",componentId:"sc-12xtq5x-2"})(['letter-spacing:-1px;font-family:"Source Code Pro",sans-serif;font-weight:700;font-size:24px;color:',";& > a{text-decoration:none;color:inherit;}"],(function(e){return e.theme.colors.text})),T=a.default.div.withConfig({displayName:"Header__Menu",componentId:"sc-12xtq5x-3"})(["display:flex;justify-content:space-between;align-items:center;& svg{width:20px;height:20px;margin-right:15px;cursor:pointer;}& svg path{fill:",";transition:fill 0.3s;}& svg:hover path{fill:",";}"],(function(e){return e.theme.colors.icon}),(function(e){return e.theme.colors.text})),k=a.default.div.withConfig({displayName:"Header__ToggleWrapper",componentId:"sc-12xtq5x-4"})(["width:20px;height:24px;margin-right:15px;overflow:hidden;box-sizing:border-box;"]),x=a.default.div.withConfig({displayName:"Header__IconRail",componentId:"sc-12xtq5x-5"})(["position:relative;display:flex;flex-direction:column;justify-content:space-between;height:40px;top:",";transition:top 0.4s;& > svg{transition:opacity 0.25s;}& > svg:first-child{opacity:",";}& > svg:last-child{opacity:",";}"],(function(e){return"light"===e.theme?"-19px":"0px"}),(function(e){return"light"===e.theme?0:1}),(function(e){return"dark"===e.theme?0:1})),E=function(e){var t=e.toggleTheme,n=(0,a.useTheme)(),r=(0,i.useState)(),o=r[0],c=r[1],l=(0,i.useState)(!1),u=l[0],s=l[1],d=function(){o>=window.scrollY?s(!1):o<window.scrollY&&400<=window.scrollY&&s(!0),c(window.scrollY)};return(0,i.useEffect)((function(){return window.addEventListener("scroll",d),function(){window.removeEventListener("scroll",d)}}),[o]),(0,i.useEffect)((function(){c(window.scrollY)}),[]),i.createElement(y,{isHidden:u},i.createElement(v,null,i.createElement(w,null,i.createElement(m.Link,{to:"/"},g.title)),i.createElement(T,null,i.createElement(m.Link,{to:"/About"},i.createElement(b.q1E,null)),i.createElement(k,null,i.createElement(x,{theme:n.name},i.createElement(b.Mei,{onClick:t}),i.createElement(b.TLr,{onClick:t}))),i.createElement(m.Link,{to:"/tags"},i.createElement(b.YxP,null)),i.createElement(m.Link,{to:"/search"},i.createElement(b.U41,{style:{marginRight:0}})))))},C=a.default.div.withConfig({displayName:"Body__BodyWrapper",componentId:"sc-v34kqr-0"})(["margin:0 auto;padding-top:80px;max-width:680px;"]),O=function(e){var t=e.children;return i.createElement(C,null,t)},S=a.default.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1qfqdid-0"})(["margin-top:32px;padding:40px 0;border-top:1px solid ",";text-align:center;font-size:11pt;font-weight:lighter;color:",";& > a{color:",";}"],(function(e){return e.theme.colors.divider}),(function(e){return e.theme.colors.secondaryText}),(function(e){return e.theme.colors.text})),A=function(){return i.createElement(S,null,"© ",g.title,", Built with Gatsby and"," ",i.createElement("a",{href:"https://github.com/devHudi/gatsby-starter-hoodie",target:"blank"},"gatsby-starter-hoodie")," ","theme.")},j=function(e){var t=e.children,n=(0,c.useDispatch)(),r=(0,c.useSelector)((function(e){return e.theme})).theme,o=null;"undefined"!=typeof window&&(o=window.matchMedia("(prefers-color-scheme: dark)").matches);var d=null;"undefined"!=typeof localStorage&&(d=localStorage.getItem("theme"));return(0,i.useEffect)((function(){o&&!d?n(o?l.xD:l.Gs):d&&n("dark"===d?l.xD:l.Gs)}),[]),i.createElement(a.ThemeProvider,{theme:"light"===r?u:s},i.createElement(h,null),i.createElement(E,{toggleTheme:function(){var e="dark"===r?"light":"dark";n("dark"===e?l.xD:l.Gs),localStorage.setItem("theme",e)}}),i.createElement(O,null,t),i.createElement(A,null))}},3966:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r,o,i,a,c=n(7294),l=n(5697),u=n.n(l),s=n(4839),d=n.n(s),f=n(2993),p=n.n(f),h=n(6494),m=n.n(h),g="bodyAttributes",b="htmlAttributes",y="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",k="href",x="http-equiv",E="innerHTML",C="itemprop",O="name",S="property",A="rel",j="src",B="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",N="encodeSpecialCharacters",q="onChangeClientState",_="titleTemplate",M=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),H=[v.NOSCRIPT,v.SCRIPT,v.STYLE],R="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=J(e,v.TITLE),n=J(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,L);return t||r||void 0},Q=function(e){return J(e,q)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===A&&"canonical"===e[n].toLowerCase()||l===A&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==E&&c!==T&&c!==C||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=m()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,d=e.title,f=e.titleAttributes;le(v.BODY,r),le(v.HTML,o),ce(d,f);var p={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,i),metaTags:ue(v.META,a),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,s)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),l(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(R),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(R):n.getAttribute(R)!==a.join(",")&&n.setAttribute(R,a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===E)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(R,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[R]=!0,o=de(n,r),[c.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case b:return{toComponent:function(){return de(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[R]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===E||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===E||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,d=void 0===s?"":s,f=e.titleAttributes;return{base:fe(v.BASE,t,r),bodyAttributes:fe(g,n,r),htmlAttributes:fe(b,o,r),link:fe(v.LINK,i,r),meta:fe(v.META,a,r),noscript:fe(v.NOSCRIPT,c,r),script:fe(v.SCRIPT,l,r),style:fe(v.STYLE,u,r),title:fe(v.TITLE,{title:d,titleAttributes:f},r)}},he=d()((function(e){return{baseTag:Z([k,B],e),bodyAttributes:V(g,e),defer:J(e,I),encode:J(e,N),htmlAttributes:V(b,e),linkTags:$(v.LINK,[A,k],e),metaTags:$(v.META,[O,w,x,S,C],e),noscriptTags:$(v.NOSCRIPT,[E],e),onChangeClientState:Q(e),scriptTags:$(v.SCRIPT,[j,E],e),styleTags:$(v.STYLE,[T],e),title:G(e),titleAttributes:V(y,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),me=(o=he,a=i=function(e){function t(){return F(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return z({},o,((t={})[r.type]=a,t.titleAttributes=z({},i),t));case v.BODY:return z({},o,{bodyAttributes:z({},i)});case v.HTML:return z({},o,{htmlAttributes:z({},i)})}return z({},o,((n={})[r.type]=z({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;var ge=n(9349),be=function(e){var t=e.title,n=e.description,r=e.url;return c.createElement(me,null,c.createElement("title",null,t),c.createElement("meta",{property:"og:url",content:r}),c.createElement("meta",{property:"og:title",content:t}),c.createElement("meta",{property:"og:image",content:ge.siteUrl+"/og-image.png"}),n&&c.createElement("meta",{name:"description",content:n}),n&&c.createElement("meta",{property:"og:description",content:n}))}}}]);
//# sourceMappingURL=commons-f91d383b960a1b8c03bc.js.map