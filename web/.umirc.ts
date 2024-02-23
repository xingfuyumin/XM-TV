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
    '/hls': {
      // target: 'https://tp-1400.idp.thinkingdata.cn/',
      target: 'http://gmxw.7766.org:808/',
      changeOrigin: true,
    },
  },
});

