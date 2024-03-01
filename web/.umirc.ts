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
  favicons: [
    '/public/page/logo.ico'
  ],
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:10001',
      // target: ' http://171.124.177.194:888/',
      changeOrigin: true,
    },
  },
});

