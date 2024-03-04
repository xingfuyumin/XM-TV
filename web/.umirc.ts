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
  title: '小明影视',
  favicons: [
    '/public/page/logo.ico'
  ],
  proxy: {
    '/api': {
      // target: 'http://127.0.0.1:10001',
      target: 'http://116.62.78.154:10001/',
      changeOrigin: true,
    },
  },
});

