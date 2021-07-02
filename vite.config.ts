import { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';

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
      postcss: {
         plugins: [autoprefixer()]
      },
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
      assetsInlineLimit: 0
   }
};

export default config;
