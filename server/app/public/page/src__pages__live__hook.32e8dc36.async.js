(self.webpackChunk=self.webpackChunk||[]).push([[309],{69742:function(K,m,e){"use strict";e.r(m),e.d(m,{default:function(){return z}});var P=e(5574),a=e.n(P),L=e(97857),R=e.n(L),p=e(15009),S=e.n(p),C=e(13769),I=e.n(C),Z=e(99289),j=e.n(Z),x=e(95898),W=e(11238),A=["url"],G=function(){var d=j()(S()().mark(function i(v){var g,c;return S()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return g=v.url,c=I()(v,A),t.abrupt("return",(0,W.ZP)(g,c).then(function(n){if(c.responseType==="blob"){var r=n,u=r.response.headers.get("fileName");return{data:r.data,name:u}}return n.data}).catch(function(n){var r;if((n==null||(r=n.response)===null||r===void 0?void 0:r.status)!==200){var u;x.FN.error(((u=n.data)===null||u===void 0?void 0:u.msg)||n.toString())}throw new Error("")}));case 2:case"end":return t.stop()}},i)}));return function(i){return d.apply(this,arguments)}}(),H="/api/v1",M=function(i){return"".concat(H).concat(i)},V={LIVE:{list:{url:M("/lives"),method:"GET"}}},D=V.LIVE.list,F=function(){return G(R()({},D))},N=e(93724),O=e(1249),$=e(68421),y=e(62435),z=function(){var d=(0,O.useSearchParams)(),i=a()(d,2),v=i[0],g=i[1],c=(0,N.Z)(),f=(0,y.useRef)(null),t=(0,y.useRef)(null),n=(0,$.Z)(function(){return F()},{cacheKey:"queryLiveList",cacheTime:-1,staleTime:-1}),r=n.data,u=n.loading,E=v.get("key")||"",T=function(l){var s;v.set("key",l),g(v,{replace:!0}),(s=t.current)===null||s===void 0||s.scrollIntoView()};return(0,y.useEffect)(function(){var o=window.Hls,l=t.current;o.isSupported()&&l&&(f.current=new o)},[]),(0,y.useEffect)(function(){var o,l=t.current,s=r==null||(o=r.find(function(h){return h.id===E}))===null||o===void 0?void 0:o.src;f.current&&l&&(s?(f.current.loadSource(s),f.current.attachMedia(l)):r!=null&&r.filter(function(h){return h.src}).length&&T(r==null?void 0:r.find(function(h){return h.src})[0]))},[E,r]),{liveKey:E,liveList:r,loading:u,videoRef:t,handleLiveKeyChange:T,isPc:c}}},93724:function(K,m,e){"use strict";var P=e(28663);m.Z=function(){var a=(0,P.Z)(document.body),L=(a==null?void 0:a.width)||document.body.offsetWidth,R=(a==null?void 0:a.height)||document.body.offsetHeight;return L>R}},24654:function(){}}]);