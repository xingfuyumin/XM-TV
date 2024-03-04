import { Context } from 'egg';

export default () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    const { url } = ctx.request;

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