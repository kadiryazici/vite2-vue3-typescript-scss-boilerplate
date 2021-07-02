/// <reference  types="vite/client" />

import { RouterLink, RouterView } from 'vue-router';

declare module 'vue' {
   interface GlobalComponents {
      RouterLink: typeof RouterLink;
      RouterView: typeof RouterView;
   }
   // check main.ts
   interface ComponentCustomProperties {
      $log: typeof console.log;
   }
}
