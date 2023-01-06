import {defineConfig} from 'vite'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx';
export default defineConfig(async ({ command, mode }) => {
  return {
    server: {
      proxy: {
        '/assets': {
          target: 'http://localhost:8080',
          changeOrigin: true
        }
      }
    },
    plugins: [
      vueJsx(),
    ],
   
  }
})
