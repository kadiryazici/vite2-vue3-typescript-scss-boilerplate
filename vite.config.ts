import { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const config: UserConfig = {
   plugins: [vue()],
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: `
                  @use "src/scss/vars";
               `,
         },
      },
   },
   build: {
      polyfillDynamicImport: true,
      minify: 'esbuild',
      assetsInlineLimit: 0
   }
};

export default config;
