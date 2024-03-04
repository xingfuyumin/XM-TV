"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[717],{13829:function(I,g,e){e.r(g),e.d(g,{default:function(){return k}});var v=e(1249),o={root:"root___BsAG7",logo:"logo___YRUKa"},M=e.p+"static/logo.77796c66.png",C=e(95898),L=e(5574),j=e.n(L),D=e(93724),K=e(97582),r=e(62435),b=e(22638),p=e(77598),x=e(92770);function z(u){function d(i,a){a===void 0&&(a={});var n,c=a.onError,h=c===void 0?function(t){console.error(t)}:c;try{n=u()}catch(t){h(t)}var E=function(t){return a.serializer?a.serializer(t):JSON.stringify(t)},Z=function(t){return a.deserializer?a.deserializer(t):JSON.parse(t)};function S(){try{var t=n==null?void 0:n.getItem(i);if(t)return Z(t)}catch(f){h(f)}return(0,x.mf)(a.defaultValue)?a.defaultValue():a.defaultValue}var s=(0,K.CR)((0,r.useState)(S),2),m=s[0],y=s[1];(0,p.Z)(function(){y(S())},[i]);var w=function(t){var f=(0,x.mf)(t)?t(m):t;if(y(f),(0,x.G7)(f))n==null||n.removeItem(i);else try{n==null||n.setItem(i,E(f))}catch(Q){console.error(Q)}};return[m,(0,b.Z)(w)]}return d}var V=e(52982),O=z(function(){return V.Z?localStorage:void 0}),H=O,P=function(){var u=(0,v.useLocation)(),d=u.pathname,i=(0,D.Z)(),a=H("theme-mode",{defaultValue:!0}),n=j()(a,2),c=n[0],h=n[1],E=(0,r.useMemo)(function(){return d.split("/")[1]||""},[d]),Z=function(m){var y=m.itemKey;v.history.replace("/".concat(y))},S=function(){var m=document.body;m.hasAttribute("theme-mode")?(m.removeAttribute("theme-mode"),h(!1)):(m.setAttribute("theme-mode","dark"),h(!0))};return(0,r.useEffect)(function(){var s=document.body;!s.hasAttribute("theme-mode")&&c?s.setAttribute("theme-mode","dark"):s.hasAttribute("theme-mode")&&!c&&s.removeAttribute("theme-mode")},[]),{menyKey:E,isDark:c,handleMenuSelect:Z,handleDarkModeChange:S,isPc:i}},A=e(24820);function N(u){return r.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,"aria-hidden":!0},u),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM17 15C17.476 15 17.9408 14.9525 18.3901 14.862C17.296 17.3011 14.8464 19 12 19C8.13401 19 5 15.866 5 12C5 8.60996 7.40983 5.78277 10.6099 5.13803C10.218 6.01173 10 6.98041 10 8C10 11.866 13.134 15 17 15Z",fill:"currentColor"}))}var B=(0,A.A)(N,"moon");function R(u){return r.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,"aria-hidden":!0},u),r.createElement("path",{d:"M10.5 1.5C10.5 0.671573 11.1716 0 12 0C12.8284 0 13.5 0.671573 13.5 1.5V2.5C13.5 3.32843 12.8284 4 12 4C11.1716 4 10.5 3.32843 10.5 2.5V1.5Z",fill:"currentColor"}),r.createElement("path",{d:"M10.5 21.5C10.5 20.6716 11.1716 20 12 20C12.8284 20 13.5 20.6716 13.5 21.5V22.5C13.5 23.3284 12.8284 24 12 24C11.1716 24 10.5 23.3284 10.5 22.5V21.5Z",fill:"currentColor"}),r.createElement("path",{d:"M24 12C24 11.1716 23.3284 10.5 22.5 10.5H21.5C20.6716 10.5 20 11.1716 20 12C20 12.8284 20.6716 13.5 21.5 13.5H22.5C23.3284 13.5 24 12.8284 24 12Z",fill:"currentColor"}),r.createElement("path",{d:"M2.5 10.5C3.32843 10.5 4 11.1716 4 12C4 12.8284 3.32843 13.5 2.5 13.5H1.5C0.671573 13.5 0 12.8284 0 12C0 11.1716 0.671573 10.5 1.5 10.5H2.5Z",fill:"currentColor"}),r.createElement("path",{d:"M20.4853 3.51472C19.8995 2.92893 18.9497 2.92893 18.364 3.51472L17.6569 4.22182C17.0711 4.80761 17.0711 5.75736 17.6569 6.34314C18.2426 6.92893 19.1924 6.92893 19.7782 6.34314L20.4853 5.63604C21.0711 5.05025 21.0711 4.1005 20.4853 3.51472Z",fill:"currentColor"}),r.createElement("path",{d:"M4.22181 17.6569C4.8076 17.0711 5.75734 17.0711 6.34313 17.6569C6.92892 18.2426 6.92892 19.1924 6.34313 19.7782L5.63602 20.4853C5.05024 21.0711 4.10049 21.0711 3.5147 20.4853C2.92892 19.8995 2.92892 18.9497 3.5147 18.364L4.22181 17.6569Z",fill:"currentColor"}),r.createElement("path",{d:"M3.5147 3.51472C2.92891 4.1005 2.92891 5.05025 3.5147 5.63604L4.22181 6.34315C4.80759 6.92893 5.75734 6.92893 6.34313 6.34315C6.92891 5.75736 6.92891 4.80761 6.34313 4.22183L5.63602 3.51472C5.05023 2.92893 4.10049 2.92893 3.5147 3.51472Z",fill:"currentColor"}),r.createElement("path",{d:"M17.6569 19.7782C17.0711 19.1924 17.0711 18.2426 17.6569 17.6569C18.2426 17.0711 19.1924 17.0711 19.7782 17.6569L20.4853 18.364C21.0711 18.9497 21.0711 19.8995 20.4853 20.4853C19.8995 21.0711 18.9497 21.0711 18.364 20.4853L17.6569 19.7782Z",fill:"currentColor"}),r.createElement("path",{d:"M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z",fill:"currentColor"}))}var U=(0,A.A)(R,"sun"),J=e(94184),T=e.n(J),l=e(86074),F=C.Ar.Header,G=C.Ar.Content,W=[{itemKey:"live",text:"\u76F4\u64AD"},{itemKey:"tv",text:"\u7535\u89C6\u5267",disabled:!0},{itemKey:"movie",text:"\u7535\u5F71",disabled:!0}],Y=function(){var d=P(),i=d.menyKey,a=d.isDark,n=d.isPc,c=d.handleMenuSelect,h=d.handleDarkModeChange;return(0,l.jsxs)(C.Ar,{className:T()(o.root,n?o.pc:null),children:[(0,l.jsx)(F,{className:o.header,children:(0,l.jsx)(C.JL,{mode:"horizontal",defaultSelectedKeys:[i],items:W,onSelect:c,header:{logo:(0,l.jsx)("img",{className:o.logo,src:M})},footer:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(C.zx,{icon:a?(0,l.jsx)(B,{}):(0,l.jsx)(U,{}),theme:"borderless",type:"tertiary",onClick:h})})})}),(0,l.jsx)(G,{className:o.content,children:(0,l.jsx)(v.Outlet,{})})]})},k=Y},93724:function(I,g,e){var v=e(28663);g.Z=function(){var o=(0,v.Z)(document.body),M=(o==null?void 0:o.width)||document.body.offsetWidth,C=(o==null?void 0:o.height)||document.body.offsetHeight;return M>C}}}]);
