const react = require('@vitejs/plugin-react');

/** @type {import('vite').UserConfig} */
module.exports = {
  plugins: [react()],
  server: {
    port: 3001,
    host: '127.0.0.1',
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
