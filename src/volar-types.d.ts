/**
 * If you are using Volar instead of Vetur, you need this config for global components.
 * but I really recommend using Volar if you are using <script setup>
 */

import { RouterLink, RouterView } from 'vue-router';

declare global {
   interface __VLS_GlobalComponents {
      RouterLink: typeof RouterLink;
      RouterView: typeof RouterView;
   }
}
