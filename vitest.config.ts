import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    // vitest.config.ts — для unit и компонентных тестов
    globals: true,                        // describe, it, expect доступны без импорта
    environment: 'jsdom',                 // Эмуляция браузера (DOM API)
    setupFiles: ['./src/test/setup.ts'],  // Настройки перед тестами
    exclude: [
      'node_modules',
      'dist',
      'e2e',                              // ← Исключаем e2e тесты
      '**/e2e/**',                        // ← На всякий случай
    ],                                    // НЕ запускать E2E тесты через Vitest
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/mockData/*',
      ],
    },
  },
});