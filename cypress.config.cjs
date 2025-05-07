const { defineConfig } = require('cypress');
const customViteConfig = require('./vite.config.cjs');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:3001',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: customViteConfig,
    },
    specPattern: 'cypress/component/**/*.cy.{js,ts,jsx,tsx}',
  },
});
