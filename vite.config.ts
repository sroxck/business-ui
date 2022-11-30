import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@ui": resolve(__dirname, 'packages'),
      "@utils": resolve(__dirname, 'utils'),
      "@shared": resolve(__dirname, 'shared'),
      "@style": resolve(__dirname, 'style'),
      "@com": resolve(__dirname, 'playground/components')
    },
  },
  
  plugins: [vue(),vueJsx()],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'BusinessUi',
      fileName: 'business-ui',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
