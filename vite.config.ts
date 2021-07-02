import { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const config: UserConfig = {
   plugins: [
      vue({
         script: {
            // to enable ref sugar, check /src/components/Button/index.vue
            refSugar: true
         }
      })
   ],
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: `
                  @use "src/scss/vars";
               `
         }
      }
   },
   build: {
      polyfillDynamicImport: true,
      minify: 'esbuild',
      assetsInlineLimit: 0
   }
};

export default config;
