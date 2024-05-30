/* global __dirname */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from '@nabla/vite-plugin-eslint';
import path from 'path';

export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 3000,
    },
    build: {
      outDir: 'build',
      watch: false,
    },
    plugins: [
      react({
        babel: {
          plugins: [
            ['module:@preact/signals-react-transform'],
            ['@babel/plugin-syntax-decorators', { decoratorsBeforeExport: true }],
          ],
        },
      }),
      {
        ...eslint({
          eslintOptions: {
            cache: false,
            fix: true,
          },
        }),
        apply: 'serve',
        enforce: 'post',
      },
    ],
    define: {
      'process.env.NODE_ENV': `"${mode}"`,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@constants': path.resolve(__dirname, './src/constants'),
        '@context': path.resolve(__dirname, './src/context'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@lib': path.resolve(__dirname, './src/lib'),
        '@models': path.resolve(__dirname, './src/models'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@styled': path.resolve(__dirname, './src/components/styled'),
      },
    },
  };
});
