import { EggAppConfig, PowerPartial } from 'egg'

export default (appInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;
  config.cluster = {
    listen: {
      port: 10001,
      sticky: true,
    },
  };
  config.i18n = {
    defaultLocale: 'zh-CN',
  };
  config.keys = appInfo.name;
  config.bodyParser = {
    jsonLimit: '10mb',
    formLimit: '10mb',
  };
  config.security = { csrf: { enable: false } }
  config.middleware = ['http'];
  config.cors = {
    origin: "*",
    allowMethods: "GET, HEAD, PUT, POST, DELETE, PATCH"
  };
  config.static = {
    preload: false,
    dynamic: true,
  };
  config.mysql = {
    client: {
      host: '116.62.78.154',
      port: '3306',
      user: 'xm_tv',
      password: 'xmzhou@xm_tv',
      database: 'xm_tv',
      dateStrings: true,
      charset: 'utf8mb4',
      connectionLimit: 1,
    } as any,
  };
  return config;
};