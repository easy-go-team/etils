import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    browser: {
      enabled: false,
      name: 'chrome', // browser name is required
      headless: true,
    },
  },
  resolve: {
    alias: {
      '@etilsjs/shared': resolve(__dirname, 'packages/shared/index.ts'),
      '@etilsjs/core': resolve(__dirname, 'packages/core/index.ts'),
      '@etilsjs/tool': resolve(__dirname, 'packages/tool/index.ts'),
    },
  },
});
