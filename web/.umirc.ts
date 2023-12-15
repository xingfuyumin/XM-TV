import { defineConfig } from '@umijs/max';

export default defineConfig({
  npmClient: 'npm',
  hash: true,
  publicPath: '/public/page/',
  history: { type: 'hash' },
  outputPath: 'page',
  request: {
    dataField: 'data',
  },
  model: {},
  title: 'XM TV',
  // favicons: [
  //   '/public/page/logo.ico'
  // ],
  proxy: {
    '/channels': {
      // target: 'https://tp-1400.idp.thinkingdata.cn/',
      target: 'http://hw-m-l.cztv.com/',
      changeOrigin: true,
    },
  },
});

