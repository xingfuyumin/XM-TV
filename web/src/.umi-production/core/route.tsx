// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import routeProps from './routeProps';

if (process.env.NODE_ENV === 'development') {
  Object.entries(routeProps).forEach(([key, value]) => {
    const internalProps = ['path', 'id', 'parentId', 'isLayout', 'isWrapper', 'layout', 'clientLoader'];
    Object.keys(value).forEach((prop) => {
      if (internalProps.includes(prop)) {
        throw new Error(
          `[UmiJS] route '${key}' should not have '${prop}' prop, please remove this property in 'routeProps'.`
        )
      }
    })
  })
}

import React from 'react';

export async function getRoutes() {
  const routes = {"live/components/live-list/index":{"path":"live/components/live-list","id":"live/components/live-list/index","parentId":"@@/global-layout"},"live/components/live-list/hook":{"path":"live/components/live-list/hook","id":"live/components/live-list/hook","parentId":"@@/global-layout"},"example/index":{"path":"example","id":"example/index","parentId":"@@/global-layout"},"example/hook":{"path":"example/hook","id":"example/hook","parentId":"@@/global-layout"},"live/index":{"path":"live","id":"live/index","parentId":"@@/global-layout"},"live/hook":{"path":"live/hook","id":"live/hook","parentId":"@@/global-layout"},"index":{"path":"/","id":"index","parentId":"@@/global-layout"},"@@/global-layout":{"id":"@@/global-layout","path":"/","isLayout":true}} as const;
  return {
    routes,
    routeComponents: {
'live/components/live-list/index': React.lazy(() => import(/* webpackChunkName: "src__pages__live__components__live-list__index" */'../../../src/pages/live/components/live-list/index.tsx')),
'live/components/live-list/hook': React.lazy(() => import(/* webpackChunkName: "src__pages__live__components__live-list__hook" */'../../../src/pages/live/components/live-list/hook.tsx')),
'example/index': React.lazy(() => import(/* webpackChunkName: "src__pages__example__index" */'../../../src/pages/example/index.tsx')),
'example/hook': React.lazy(() => import(/* webpackChunkName: "src__pages__example__hook" */'../../../src/pages/example/hook.tsx')),
'live/index': React.lazy(() => import(/* webpackChunkName: "src__pages__live__index" */'../../../src/pages/live/index.tsx')),
'live/hook': React.lazy(() => import(/* webpackChunkName: "src__pages__live__hook" */'../../../src/pages/live/hook.tsx')),
'index': React.lazy(() => import(/* webpackChunkName: "src__pages__index" */'../../../src/pages/index.tsx')),
'@@/global-layout': React.lazy(() => import(/* webpackChunkName: "layouts__index" */'/Users/zhou/Desktop/github/XM-TV/web/src/layouts/index.tsx')),
},
  };
}