"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83,510],{97237:function(g,o,e){e.r(o);var r=e(5574),m=e.n(r),t=e(62435);o.default=function(c,n){var a=(0,t.useState)(""),l=m()(a,2),v=l[0],i=l[1],E=(0,t.useMemo)(function(){var u={};return n==null||n.forEach(function(s){u[s.class]||(u[s.class]=[]),u[s.class].push(s)}),u},[n]);return(0,t.useEffect)(function(){var u,s=n==null||(u=n.find(function(f){return f.id===c}))===null||u===void 0?void 0:u.class;i(s||"\u4E2D\u592E\u53F0")},[c,n]),{groupMap:E,group:v,setGroup:i}}},59481:function(g,o,e){e.r(o),e.d(o,{default:function(){return i}});var r={list:"list___jDrCZ",item:"item___kTjlb",active:"active___F5oAQ",disabled:"disabled___LN1Ge"},m=e(97237),t=e(95898),c=e(94184),n=e.n(c),a=e(86074),l=t.mQ.TabPane,v=function(u){var s=u.liveKey,f=u.liveList,D=u.onLiveKeyChange,h=(0,m.default)(s,f),b=h.group,j=h.setGroup,M=h.groupMap,_=function(C){var p=M[C]||[];return p.length?(0,a.jsx)(t.aV,{dataSource:p,className:r.list,renderItem:function(d){return(0,a.jsx)(t.aV.Item,{className:n()(d.src?null:r.disabled,s===d.id?r.active:null,r.item),onClick:function(){return d.src?D(d.id):null},children:d.name})},grid:{gutter:12,span:8}}):null};return(0,a.jsxs)(t.mQ,{className:r.root,activeKey:b,onChange:j,children:[(0,a.jsx)(l,{tab:"\u4E2D\u592E\u53F0",itemKey:"\u4E2D\u592E\u53F0",children:_("\u4E2D\u592E\u53F0")}),(0,a.jsx)(l,{tab:"\u5730\u65B9\u53F0",itemKey:"\u5730\u65B9\u53F0",children:_("\u5730\u65B9\u53F0")}),(0,a.jsx)(l,{tab:"\u5E7F\u64AD\u53F0",itemKey:"\u5E7F\u64AD\u53F0",children:_("\u5E7F\u64AD\u53F0")}),(0,a.jsx)(l,{tab:"\u5176\u4ED6",itemKey:"\u5176\u4ED6",children:_("\u5176\u4ED6")})]})},i=v}}]);
