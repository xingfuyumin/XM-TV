import { Context } from 'egg';
const { createProxyMiddleware } = require('http-proxy-middleware');

export default () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    const { url } = ctx.request;

    if (url.startsWith('/api/v1/live/')) {
      const { liveBase } = ctx.service;
      let target = '';
      let path = '';
      const [id, ts] = url.split('/api/v1/live/')[1]?.split('/');
      console.log(id, ts,ts?.endsWith('.ts'));
      if (ts?.endsWith('.ts')) {
        [target, path] = await liveBase.ts(id, ts);
      } else {
        [target, path] = await liveBase.m3u8(id);
      }
      // 创建代理中间件
      const proxy = createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: {
          [url]: path,
        }
      });
      ctx.respond = false;
      proxy(ctx.req, ctx.res, next);
      return;
    }
    if (url === '/') {
      ctx.unsafeRedirect('/public/page/index.html');
      return;
    }
    try {
      const result = await next();
      if (ctx.body) { // 内部直接到导出
        return;
      } else {
        ctx.body = {
          status: 0,
          data: result,
        };
      }
    } catch (err: any) {
      ctx.status = 500;
      ctx.logger.error(err)
      ctx.body = {
        status: 1,
        msg: err?.message || err,
      }
    }
  }
}