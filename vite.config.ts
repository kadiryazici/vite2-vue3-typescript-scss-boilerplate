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
};

export default config;
